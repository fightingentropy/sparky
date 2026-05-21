import type { Exam } from "./types";
import { electricianTrainingAm2SourceSection } from "./electrician-training-source";

export const am2Exam: Exam = {
  id: "am2-installation-assessment",
  title: "AM2 / AM2E — Installation Electrician EPA",
  subtitle: "End-point assessment knowledge bank + copied ElectricianTraining AM2 mock",
  description:
    "Representative of the underpinning knowledge for the AM2 / AM2E end-point assessment for the Installation & Maintenance Electrician apprenticeship standard, delivered by NET. The hands-on practical assessment covers safe isolation, installation, inspection & testing, fault diagnosis and commissioning — this exam drills the technical foundations behind every task. The fifth attempt serves the copied 30-question ElectricianTraining AM2 mock.",
  format:
    "Each served attempt = 30 multiple-choice questions. Pass at 60%+. The first four attempts use topic drills; the fifth serves the copied AM2 mock.",
  passPercent: 0.6,
  sections: [
    {
      id: "section-1",
      title: "Section 1 — Safe Isolation & Preparation",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "Which HSE document provides the practical guidance on working on or near electrical equipment that AM2 candidates are expected to apply?",
              options: {
                A: "BS 7671 Wiring Regulations",
                B: "HSG85 — Electricity at Work: Safe Working Practices",
                C: "IET Guidance Note 3",
                D: "PUWER 1998 Approved Code of Practice"
              },
              answer: "B",
              explanation: "HSG85 is HSE's practical guidance on safe electrical working — criteria for dead vs live work, competence, risk control and procedures. BS 7671 is the installation standard, GN3 covers inspection and testing, and PUWER covers work equipment generally."
            },
            {
              number: 2,
              prompt: "The full safe isolation sequence you must demonstrate on AM2 begins with:",
              options: {
                A: "Isolate – prove tester – test for dead – lock off – re-prove tester",
                B: "Identify circuit – seek permission – isolate – lock-off and post caution notice – prove indicator on a known source – test the circuit dead L-L, L-N, L-E, N-E – re-prove indicator on a known source",
                C: "Turn off the main switch – check no lights are on – start work",
                D: "Isolate – begin work – test dead whenever in doubt"
              },
              answer: "B",
              explanation: "Identification and permission matter on shared or commercial premises. Lock-off secures the isolation. Proving the tester on a known source BEFORE and AFTER the dead test is the part candidates miss most often — it's what makes the 'dead' reading trustworthy."
            },
            {
              number: 3,
              prompt: "Under HSE Guidance Note GS38, voltage indicators and test probes used on LV equipment should have:",
              options: {
                A: "Unshrouded metal probes with a 25 mm exposed tip for better contact",
                B: "Finger barriers, an exposed metal tip of no more than 4 mm (preferably shrouded/spring-loaded), adequately insulated leads, and fused or current-limited leads",
                C: "Neon screwdrivers only",
                D: "Standard multimeter leads with no modification"
              },
              answer: "B",
              explanation: "GS38 sets the minimum probe and lead requirements. A short exposed tip stops bridging between adjacent conductors; finger barriers reduce hand-slip onto live parts; fused leads (typically 500 mA) limit fault current if a probe slips."
            },
            {
              number: 4,
              prompt: "You arrive on site to find the final circuit you must isolate is shared with equipment belonging to another occupier. The correct action is to:",
              options: {
                A: "Isolate anyway and apologise later",
                B: "Seek permission from the duty holder or responsible person, agree a timed isolation or permit-to-work, then proceed",
                C: "Pull the fuse and leave a note",
                D: "Work live to avoid the disruption"
              },
              answer: "B",
              explanation: "Regulation 14 of EAWR 1989 and HSG85 require isolation to be carried out with permission where others may be affected. On larger sites a permit-to-work formalises this."
            },
            {
              number: 5,
              prompt: "Your approved voltage indicator confirmed 'dead' at the point of work. You then fail to re-prove it on a known source. You should:",
              options: {
                A: "Record the test as valid — the indicator clearly worked a moment ago",
                B: "Treat the circuit as live, replace or repair the indicator, and repeat the whole safe-isolation sequence from scratch",
                C: "Continue working — indicators rarely fail",
                D: "Swap to a multimeter and retest to confirm"
              },
              answer: "B",
              explanation: "The re-prove confirms the indicator was still working when it showed 'dead'. If it fails the re-prove, the earlier 'dead' reading cannot be trusted. A multimeter is not a GS38-approved voltage indicator and is no substitute."
            },
            {
              number: 6,
              prompt: "Why is a dedicated two-pole voltage indicator preferred over a multimeter for proving dead?",
              options: {
                A: "Multimeters are too expensive to use on site",
                B: "A voltage indicator has no test-mode selector to set incorrectly, has GS38-compliant probes built in and limits the consequences of mis-selection",
                C: "Multimeters cannot read 230 V AC",
                D: "Voltage indicators are quicker so the test is finished sooner"
              },
              answer: "B",
              explanation: "A multimeter set to current or resistance instead of voltage will read 'no voltage' on a live circuit and put the user at risk. A two-pole voltage indicator removes that risk and is the GS38-recommended tool."
            },
            {
              number: 7,
              prompt: "Which combination of dead-test points must be confirmed when proving a single-phase final circuit isolated at its OCPD?",
              options: {
                A: "Line to neutral only",
                B: "Line to earth only",
                C: "Line to line (where applicable), line to neutral, line to earth, and neutral to earth",
                D: "Continuity of the cpc only"
              },
              answer: "C",
              explanation: "All conductor combinations must be proven dead so that no foreign source can be present. Missing N-E is a classic AM2 mark-down — it can hide a borrowed neutral from another circuit."
            },
            {
              number: 8,
              prompt: "The most appropriate device used to physically secure an MCB in the OFF position during isolation is:",
              options: {
                A: "A cable tie wrapped around the toggle",
                B: "A purpose-made MCB lock-off clip with a personal padlock fitted by the person working on the circuit",
                C: "Insulating tape over the toggle",
                D: "A handwritten note left on the consumer-unit lid"
              },
              answer: "B",
              explanation: "Reg 14 EAWR requires the isolation to be secured. A purpose-made lock-off clip with a unique key under the worker's control provides the physical security and accountability. Tape and notes are not secure isolation."
            },
            {
              number: 9,
              prompt: "Before isolating a final circuit on a domestic upgrade, you should establish that:",
              options: {
                A: "The customer has paid the deposit",
                B: "Loss of supply will not endanger anyone (e.g. medical equipment, lift in use, fire-alarm system) and the duty holder has been informed",
                C: "The CU lid is screwed shut",
                D: "The next available technician is on site to assist"
              },
              answer: "B",
              explanation: "EAWR Reg 4 requires that isolation does not create a different danger. Medical, life-safety and security loads must be considered — battery back-up, alternate supplies and informed consent are part of the AM2 method statement."
            },
            {
              number: 10,
              prompt: "Where the responsible person cannot be contacted, the AM2 candidate should:",
              options: {
                A: "Proceed with isolation regardless",
                B: "Postpone the work, record the reason and escalate to the supervising engineer; do not isolate without authority",
                C: "Use a different circuit instead",
                D: "Begin live working using insulated tools"
              },
              answer: "B",
              explanation: "Without authority the isolation may affect a system you are not aware of (life-support, security, process). Escalating is a documented requirement under HSG85 and is what assessors expect to see."
            },
            {
              number: 11,
              prompt: "The 'point of work' that must be tested dead is best described as:",
              options: {
                A: "The OCPD only",
                B: "The location at which conductors will be cut, terminated or disturbed — usually a fitting or accessory at the far end of the circuit",
                C: "The MET",
                D: "The DNO cut-out"
              },
              answer: "B",
              explanation: "Testing dead at the OCPD only confirms the OCPD is open — it does not detect borrowed neutrals, parallel paths or back-feeds further down the circuit. Always test at the actual point of disturbance."
            },
            {
              number: 12,
              prompt: "Which document records the residual-current device acceptance criteria the AM2 candidate must check during commissioning?",
              options: {
                A: "Schedule of Inspections only",
                B: "Schedule of Test Results entries for each RCD, recording 0.5× IΔn (no trip), 1× IΔn (≤ 300 ms general type) and 5× IΔn (≤ 40 ms)",
                C: "DNO connection certificate",
                D: "Manufacturer warranty card"
              },
              answer: "B",
              explanation: "RCD test figures sit in the Schedule of Test Results — they are the numerical evidence the EIC relies on. The Schedule of Inspections logs visual checks; the test schedule logs measured values."
            },
            {
              number: 13,
              prompt: "When setting out tools for the safe-isolation task you should select the voltage indicator with:",
              options: {
                A: "An LCD multimeter face and selector dial",
                B: "Discrete voltage windows (typically 50, 120, 230, 400 V), no selector switch, GS38 shrouded probes and integral fused leads",
                C: "An analogue moving-coil voltmeter",
                D: "A neon test screwdriver"
              },
              answer: "B",
              explanation: "A two-pole voltage indicator with discrete LED windows complies with GS38 and removes the chance of mis-selecting a function. Neon screwdrivers are not safe and are not accepted on AM2."
            },
            {
              number: 14,
              prompt: "On a TN-C-S installation, the 'known live source' used to prove the voltage indicator before/after testing must be:",
              options: {
                A: "An RCD test button",
                B: "A permanently energised socket-outlet, dedicated proving unit, or any LV source confirmed to be at supply potential",
                C: "The MET",
                D: "The cpc bar"
              },
              answer: "B",
              explanation: "A proving source is anything known to be at LV — a dedicated proving unit is the safest option. The MET and cpc bar are not at supply potential. Test buttons mechanically trip but don't apply mains voltage at predictable points."
            },
            {
              number: 15,
              prompt: "When isolating a three-phase board to work on a single circuit, you should:",
              options: {
                A: "Open the main switch only and assume the circuit is dead",
                B: "Isolate at the most local effective point — typically the circuit OCPD, lock it off, and prove dead at the point of work; isolate further upstream only when the local device cannot be secured",
                C: "Pull the meter fuse",
                D: "Disconnect the DNO service head"
              },
              answer: "B",
              explanation: "Isolation should be at the closest point that can be secured. Opening the main switch unnecessarily de-energises other circuits and can introduce additional risk."
            },
            {
              number: 16,
              prompt: "A caution notice must be displayed at the point of isolation. Its purpose is to:",
              options: {
                A: "Discharge the contractor's legal duty",
                B: "Warn others that the circuit has been isolated for work and must not be re-energised until the worker removes their lock and notice",
                C: "Identify the supervising engineer",
                D: "Record the test results"
              },
              answer: "B",
              explanation: "The caution notice + lock-off communicates that the isolation is in place and who is responsible. Removing both is part of the worker's sign-off when the task is complete."
            },
            {
              number: 17,
              prompt: "You discover the means of isolation cannot accept a padlock. You should:",
              options: {
                A: "Carry on without securing the device",
                B: "Use a manufacturer's MCB lock-off device or, if none is available, withdraw the OCPD and place it under personal control with a caution notice fitted",
                C: "Disconnect the cable in the consumer unit",
                D: "Post a notice and trust other workers to comply"
              },
              answer: "B",
              explanation: "Reg 14 EAWR requires reasonable means of preventing inadvertent re-energisation. Where no lock can be fitted, removing and retaining the device or fuse achieves the same purpose."
            },
            {
              number: 18,
              prompt: "Which PPE combination is the practical minimum for safe-isolation tasks on AM2?",
              options: {
                A: "Steel toe-caps only",
                B: "Eye protection rated for arc flash, insulating gloves where contact is foreseeable (rare during dead work), and clothing free of conductive accessories",
                C: "Full arc-flash hood and balaclava",
                D: "No PPE — dead work does not require it"
              },
              answer: "B",
              explanation: "Even during dead work, opening enclosures can expose the worker to live conductors. Eye protection and the removal of metal jewellery are minimum sensible precautions; insulating gloves are added when contact with energised parts is foreseeable."
            },
            {
              number: 19,
              prompt: "The proving unit used in safe isolation produces a known voltage typically of:",
              options: {
                A: "12 V DC",
                B: "Sufficient AC voltage (often around 230 V or 415 V depending on the unit) to light all the indicator windows that the voltage indicator is rated for",
                C: "1000 V DC for insulation testing",
                D: "Mains via a directly-wired plug"
              },
              answer: "B",
              explanation: "Proving units are designed to verify all bands of the voltage indicator. A unit limited to one voltage range cannot prove a multi-range indicator, so the chosen unit must match the indicator."
            },
            {
              number: 20,
              prompt: "After completing the safe-isolation sequence, the worker should:",
              options: {
                A: "Begin disturbing live conductors immediately",
                B: "Apply additional precautions where the work is in proximity to other live equipment (insulated tools, barriers, line-of-sight checks) and re-test dead at the point of work whenever they leave and return to the task",
                C: "Stop work and write the report",
                D: "Inform the DNO that isolation has been carried out"
              },
              answer: "B",
              explanation: "Even after isolation, adjacent live parts may be a hazard. The discipline of re-testing dead on return prevents working on a circuit that someone else has re-energised in the worker's absence."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "Regulation 4 of the Electricity at Work Regulations 1989 places a duty on:",
              options: {
                A: "Manufacturers of test instruments only",
                B: "Employers, employees and the self-employed — to ensure systems are constructed, maintained and worked on so as to prevent danger",
                C: "Local authority building control officers",
                D: "The Distribution Network Operator only"
              },
              answer: "B",
              explanation: "Reg 4 EAWR is the umbrella duty. Employers, employees and the self-employed all share responsibility for system construction, maintenance and safe working — central to the AM2 safe-isolation method statement."
            },
            {
              number: 2,
              prompt: "Which test reading proves a single-phase circuit is dead at the point of work?",
              options: {
                A: "L-N reads 230 V on the indicator",
                B: "All combinations (L-N, L-E, N-E) read zero on a proven indicator",
                C: "The MCB toggle is in the OFF position",
                D: "The lamp at the accessory has gone out"
              },
              answer: "B",
              explanation: "A circuit is only dead when every combination reads zero on a proven indicator. A blown lamp could mimic an off circuit, and an open toggle does not detect borrowed conductors."
            },
            {
              number: 3,
              prompt: "Which of these statements about an approved voltage indicator is correct?",
              options: {
                A: "An indicator may be powered by an internal battery alone",
                B: "It must be self-powered from the circuit under test, or use a verified active proving step before and after the dead test",
                C: "An indicator does not need to be proven before use",
                D: "Indicators are calibrated annually but never require functional checks"
              },
              answer: "B",
              explanation: "GS38-compliant indicators are designed so that loss of internal battery does not lead to a false 'dead' reading; this is why proving on a known source before and after the test is mandatory."
            },
            {
              number: 4,
              prompt: "The first practical step the AM2 candidate takes when arriving at a new isolation task is to:",
              options: {
                A: "Open the consumer unit",
                B: "Confirm the work scope, identify the affected circuit on the schedule and check whether other persons or systems would be impacted",
                C: "Test the RCD",
                D: "Begin removing accessories"
              },
              answer: "B",
              explanation: "Identifying the correct circuit (and the consequences of de-energising it) is the first part of a HSG85 method. Misidentifying a circuit is one of the most common AM2 failures."
            },
            {
              number: 5,
              prompt: "On a TT system, the means of isolation should:",
              options: {
                A: "Disconnect the line conductor only",
                B: "Disconnect both line and neutral simultaneously, because the supply is not referenced to the local earth and the neutral may be at potential",
                C: "Connect the neutral to the cpc",
                D: "Be the DNO's main fuse only"
              },
              answer: "B",
              explanation: "TT supplies are not directly bonded to the local earth, so the neutral can sit at a non-zero potential. Two-pole isolation removes both poles and avoids working on a 'live neutral'."
            },
            {
              number: 6,
              prompt: "When applying a personal padlock to a lock-off device the worker should:",
              options: {
                A: "Use a generic key shared by the team",
                B: "Use a uniquely-keyed padlock under the worker's personal control with the key retained by them at all times",
                C: "Use a combination lock with the code written on a label",
                D: "Use any padlock to hand"
              },
              answer: "B",
              explanation: "Personal lock-off ensures only the person at risk can unlock. Shared keys break the chain of accountability. AM2 candidates lose marks if a shared or labelled key is observed."
            },
            {
              number: 7,
              prompt: "If the test result on N-E reads a low voltage (say 30 V) before isolation, the most likely cause is:",
              options: {
                A: "The indicator is faulty",
                B: "A borrowed neutral or shared neutral with another circuit creating a small voltage difference at the test point",
                C: "Normal supply behaviour",
                D: "Faulty earthing of the indicator"
              },
              answer: "B",
              explanation: "Genuine N-E should be near zero on a healthy installation. A persistent voltage indicates a shared or borrowed neutral — common where two circuits have been wired through the same JB. The fault must be cleared before continuing."
            },
            {
              number: 8,
              prompt: "Which document is the formal record of the worker's authority to isolate on a complex industrial site?",
              options: {
                A: "Operatives' timesheet",
                B: "Permit-to-work, signed by the duty holder and acknowledged by the worker",
                C: "Risk assessment alone",
                D: "RAMS only"
              },
              answer: "B",
              explanation: "On industrial sites the permit-to-work formalises the conditions of isolation, the limits of work and the time window. RAMS supports the permit but does not replace it."
            },
            {
              number: 9,
              prompt: "Before isolating, the worker must establish:",
              options: {
                A: "Only the OCPD type",
                B: "The prospective fault current at the point of disturbance, the nature of the supply, the protective measures in use and any back-up sources (PV, generator, UPS) that could re-energise the circuit",
                C: "Only the cable size",
                D: "Only the circuit description"
              },
              answer: "B",
              explanation: "Modern installations often include alternate sources — solar PV, battery storage or standby generators. Without identifying these the isolation is incomplete."
            },
            {
              number: 10,
              prompt: "An AM2 candidate failed to test N-E during the dead-test sequence. The likely consequence is:",
              options: {
                A: "No consequence — N-E is optional",
                B: "An undetected borrowed neutral could leave the circuit live via another path; the candidate fails the safe-isolation criterion",
                C: "The indicator must be recalibrated",
                D: "The cpc resistance is unknown"
              },
              answer: "B",
              explanation: "Borrowed neutrals are detected only by N-E testing. Missing this step has caused real-world fatalities and is treated as a critical AM2 fail."
            },
            {
              number: 11,
              prompt: "The candidate should record the safe-isolation completion by:",
              options: {
                A: "Verbal confirmation only",
                B: "Documenting the time, point of isolation, lock and tag identifier, and the indicator/proving unit used in their site notebook or on the EIC notes",
                C: "Sending an SMS to the supervisor",
                D: "Photographing the consumer unit only"
              },
              answer: "B",
              explanation: "Written records demonstrate the procedure was followed. Photo evidence supports but does not replace it. AM2 marks the practice of written confirmation."
            },
            {
              number: 12,
              prompt: "Which BS 7671 regulation covers the requirements for isolation and switching?",
              options: {
                A: "Section 411",
                B: "Section 537",
                C: "Section 444",
                D: "Section 543"
              },
              answer: "B",
              explanation: "BS 7671 Section 537 covers isolation and switching, including the choice of devices and the requirement that they cannot be inadvertently closed. Section 411 is ADS, 444 is EMC and 543 is protective conductors."
            },
            {
              number: 13,
              prompt: "Which of these CANNOT be used as a means of isolation under BS 7671?",
              options: {
                A: "An MCB rated for isolation (most modern MCBs)",
                B: "A semiconductor device alone (e.g. a thyristor, since a fault may keep it conducting)",
                C: "A switch-disconnector",
                D: "A double-pole isolating switch"
              },
              answer: "B",
              explanation: "Reg 537.2.2.4 prohibits the use of semiconductor devices alone for isolation — they may fail to fully open under fault conditions. MCBs marked with the disconnector symbol are acceptable."
            },
            {
              number: 14,
              prompt: "Discharging stored electrical energy before working on capacitive equipment is required because:",
              options: {
                A: "It speeds up the work",
                B: "Capacitors retain charge after isolation and can deliver a hazardous shock or arc when the device is opened",
                C: "It reduces inrush current",
                D: "It improves insulation resistance"
              },
              answer: "B",
              explanation: "Capacitor banks, VSDs, motor-start capacitors and large filter capacitors retain charge after isolation. Manufacturer instructions specify the discharge time — typically 5 to 15 minutes — before the equipment may be opened."
            },
            {
              number: 15,
              prompt: "When proving the indicator on a known live source, you should test it on:",
              options: {
                A: "L-N only",
                B: "Each conductor combination the indicator will be used on (typically L-N, L-E, N-E or L1-L2 / L1-L3 / L2-L3 in three-phase work)",
                C: "Nothing — the proving unit always works",
                D: "L-E only"
              },
              answer: "B",
              explanation: "Some indicator faults affect only one polarity or one channel. Proving on every combination that will subsequently be used confirms the indicator works on each."
            },
            {
              number: 16,
              prompt: "If a worker leaves the worksite for a break and returns, they must:",
              options: {
                A: "Resume work immediately",
                B: "Re-prove the voltage indicator and re-test dead at the point of work before disturbing anything",
                C: "Only re-confirm the lock is in place",
                D: "Re-record the time of return"
              },
              answer: "B",
              explanation: "Someone else may have re-energised the circuit in the worker's absence. Re-proving and re-testing dead is the only way to confirm the working state has not changed."
            },
            {
              number: 17,
              prompt: "Working live is permitted under EAWR only if:",
              options: {
                A: "The supervisor signs a form",
                B: "It is unreasonable for the conductor to be dead, it is reasonable to do the work live, AND suitable precautions are in place — all three together",
                C: "The voltage is below 50 V AC",
                D: "The work will only take 15 minutes"
              },
              answer: "B",
              explanation: "Reg 14 EAWR is conjunctive: all three tests must be met. Convenience or time pressure alone do not authorise live work, regardless of voltage."
            },
            {
              number: 18,
              prompt: "On a domestic CU upgrade you find a meter tail with no main switch upstream of the consumer unit. The correct response is to:",
              options: {
                A: "Carry out the work live",
                B: "Stop, contact the DNO to remove the cut-out fuse or fit a temporary isolator under permit, then proceed with the safe-isolation sequence",
                C: "Cut the tail with insulated tools",
                D: "Disconnect at the meter terminals"
              },
              answer: "B",
              explanation: "The DNO's cut-out fuse is the only legal isolation point upstream of the meter. The candidate must not open the cut-out themselves. Booking the DNO or using a recognised isolator is the AM2-compliant route."
            },
            {
              number: 19,
              prompt: "Which warning notice must be installed permanently on a consumer unit fed by a TT supply?",
              options: {
                A: "Periodic inspection due date only",
                B: "The earthing arrangement notice (Reg 514.13) plus the warning notice for non-standard wiring colours where applicable",
                C: "DNO connection certificate",
                D: "Schedule of inspections"
              },
              answer: "B",
              explanation: "Reg 514.13 calls up an earthing arrangement notice on TT systems. The pre-2004 colour-warning notice is also required where harmonised colours coexist with old colours."
            },
            {
              number: 20,
              prompt: "After completing dead testing, the AM2 sequence requires you to:",
              options: {
                A: "Pack up and leave",
                B: "Re-prove the indicator on the known live source — if it does not respond, treat the earlier 'dead' as unsafe and repeat the sequence",
                C: "Call the customer",
                D: "Switch to a different test instrument"
              },
              answer: "B",
              explanation: "Re-proving the indicator after the dead test is the safety check that gives the 'dead' result confidence. Failure to do so is a common AM2 mark deduction."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "Which of the following is a 'positive isolation' for a final circuit on AM2?",
              options: {
                A: "Switching the local light switch off",
                B: "Opening the OCPD or local isolator, securing it with a personal lock-off and posting a caution notice",
                C: "Removing the lamp from the holder",
                D: "Pressing the test button on the RCD"
              },
              answer: "B",
              explanation: "Positive isolation means the circuit cannot be inadvertently re-energised. Locking off the OCPD or using an isolator with a key lock provides this. Switching a light switch is not isolation; it interrupts the load only."
            },
            {
              number: 2,
              prompt: "When isolating a three-phase distribution board to work on one outgoing way, the safe minimum is to:",
              options: {
                A: "Open the main switch and trust no one else will close it",
                B: "Open the outgoing OCPD, lock it off, prove dead at the point of work on every conductor combination including any neutral, and document the isolation",
                C: "Open every other circuit on the board first",
                D: "Disconnect the meter tails"
              },
              answer: "B",
              explanation: "Isolation must be at the most local effective point — typically the outgoing OCPD. Locking that device off prevents it being closed unexpectedly. Other circuits stay live so unrelated supplies remain available."
            },
            {
              number: 3,
              prompt: "The fuse rating commonly fitted in voltage-indicator test leads (per GS38) is:",
              options: {
                A: "30 mA",
                B: "Typically 500 mA HRC type for current-limited probes used on LV circuits",
                C: "10 A",
                D: "32 A"
              },
              answer: "B",
              explanation: "GS38 recommends current-limited test leads. A 500 mA HRC fuse limits the energy released if a probe slips. Higher fuses defeat the safety purpose; very low fuses cannot carry normal indicator currents."
            },
            {
              number: 4,
              prompt: "A multi-meter reading 0 V on a circuit being isolated is acceptable evidence of dead work only if:",
              options: {
                A: "The meter beeps confirming no voltage",
                B: "The meter has been proved on a known source before and after testing AND it complies with GS38 / has fused current-limited leads — but a dedicated voltage indicator remains the preferred AM2 tool",
                C: "The meter reads 0 V immediately",
                D: "The circuit was off when you arrived"
              },
              answer: "B",
              explanation: "Multimeters can be used in extremis if proved before and after, but the easier mis-selection of mode means a dedicated indicator is preferred and is what assessors expect to see on AM2."
            },
            {
              number: 5,
              prompt: "Live testing should only be carried out:",
              options: {
                A: "Whenever convenient",
                B: "After all dead tests have passed, the installation has been brought into service, and where the live test cannot be carried out by other means",
                C: "Before any dead testing",
                D: "Only at the customer's request"
              },
              answer: "B",
              explanation: "Live testing exposes the tester to risk and is permitted only when it is reasonable, after dead tests have established the installation is safe, and with appropriate precautions per HSG85."
            },
            {
              number: 6,
              prompt: "Which conductor must always be capable of being isolated separately from the supply on a TT installation?",
              options: {
                A: "The cpc",
                B: "The neutral, because a TT system's neutral may sit at a different potential to the local earth",
                C: "The earth electrode",
                D: "The functional earth only"
              },
              answer: "B",
              explanation: "On TT systems, two-pole switching of L and N is required at the means of isolation because the neutral is not bonded to the local earth and may carry voltage."
            },
            {
              number: 7,
              prompt: "Why should hand-held tools used during dead work be insulated to a recognised standard (e.g. VDE 1000 V)?",
              options: {
                A: "To improve grip",
                B: "To provide a layer of protection if a conductor previously thought to be dead becomes live during the work — defence in depth",
                C: "Because the regulations forbid bare-metal tools",
                D: "To extend the tool's service life"
              },
              answer: "B",
              explanation: "Insulated hand tools provide defence in depth. Even after isolation, a stray live conductor could be encountered when removing accessories — VDE-rated tools reduce the consequences of that contact."
            },
            {
              number: 8,
              prompt: "When working on a circuit fed from a battery-backed UPS, the candidate must:",
              options: {
                A: "Ignore the UPS as it cannot deliver shock",
                B: "Identify and isolate the UPS feed in addition to the mains feed, because the UPS could continue to supply the circuit after mains isolation",
                C: "Remove the UPS battery during testing",
                D: "Operate the UPS bypass switch only"
              },
              answer: "B",
              explanation: "Multiple-source installations require multiple isolations. UPS, PV, batteries and generators must all be isolated and proven dead at the point of work."
            },
            {
              number: 9,
              prompt: "Which set of risks is most associated with NOT using a permit-to-work on a complex site?",
              options: {
                A: "Loss of paperwork only",
                B: "Inadvertent re-energisation, conflicting work activities, and unauthorised people working on shared systems",
                C: "Reduced productivity",
                D: "Higher tool costs"
              },
              answer: "B",
              explanation: "Permits coordinate isolation between different parties on the same system. Without a permit, two work groups could both believe they have control of an isolation, leading to dangerous re-energisation."
            },
            {
              number: 10,
              prompt: "On AM2, after isolating, the candidate proves the indicator on a known source, then tests dead at the point of work. The next step before starting work is to:",
              options: {
                A: "Begin removing accessories",
                B: "Re-prove the indicator on the known source to confirm it has remained functional throughout the dead test",
                C: "Walk away from the worksite",
                D: "Inform the customer the isolation is complete"
              },
              answer: "B",
              explanation: "The re-prove demonstrates that the indicator was working when it gave the dead reading. Skipping this step is one of the most common AM2 failures. Only after the re-prove is the candidate safe to start."
            },
            {
              number: 11,
              prompt: "An AM2 candidate using a non-contact voltage detector (NCVD) as a substitute for a two-pole indicator:",
              options: {
                A: "Has met the GS38 requirement",
                B: "Has NOT met the GS38 requirement — NCVDs detect electric fields and can be misled by induced voltages, capacitive coupling or shielding",
                C: "Should record the NCVD as the primary instrument",
                D: "Has used the preferred AM2 method"
              },
              answer: "B",
              explanation: "NCVDs are useful for screening but are not GS38-approved indicators of dead. They can give false positives (induced) and false negatives (shielding), so they are never a substitute for a two-pole indicator at the point of work."
            },
            {
              number: 12,
              prompt: "A worker's personal padlock has a unique key that must be:",
              options: {
                A: "Stored in the toolbox so other workers can find it",
                B: "Retained on the worker's person throughout the task and used only by them to remove their own lock",
                C: "Glued to the lock-off device",
                D: "Posted into the consumer unit"
              },
              answer: "B",
              explanation: "Personal lock-off is meaningful only when the key is under the individual worker's control. Shared keys allow another person to unlock and re-energise without the worker's knowledge."
            },
            {
              number: 13,
              prompt: "Which is the correct order for the prove–test–prove sequence?",
              options: {
                A: "Test dead, prove indicator, prove indicator",
                B: "Prove indicator on known source, test dead at point of work, re-prove indicator on known source",
                C: "Prove indicator, prove indicator, test dead",
                D: "Test dead twice"
              },
              answer: "B",
              explanation: "The sandwich pattern — prove, test, re-prove — is the GS38 compliant method. Proving twice with no test in between is meaningless; testing without bookend proving is unverified."
            },
            {
              number: 14,
              prompt: "Live working on a 230 V single-phase final circuit during AM2 should be:",
              options: {
                A: "Encouraged to save time",
                B: "Avoided — AM2 expects all installation, modification and fault-finding to be carried out dead unless circumstances meet the EAWR Reg 14 conjunctive tests",
                C: "Performed using rubber gloves",
                D: "Performed when the customer is absent"
              },
              answer: "B",
              explanation: "AM2 is built around dead working. Candidates carrying out unjustified live work fail the safe-working assessment criterion."
            },
            {
              number: 15,
              prompt: "An employer's safe-systems-of-work documentation typically includes:",
              options: {
                A: "Only the price list",
                B: "Risk assessments, method statements (RAMS), permit-to-work systems where applicable, and competence records for the workforce",
                C: "Only the apprenticeship paperwork",
                D: "Only the customer correspondence"
              },
              answer: "B",
              explanation: "RAMS, permits and competence evidence are all part of HSG85's safe system of work. AM2 candidates are expected to be able to identify their employer's documents and follow them."
            },
            {
              number: 16,
              prompt: "On a TN-S system, prior to working dead, the worker should verify:",
              options: {
                A: "The cable is a particular brand",
                B: "Continuity of the cpc to the MET — a broken cpc would mean any subsequent fault leaves enclosures live without protective measures operating",
                C: "The lamp wattage",
                D: "The circuit is on the correct phase"
              },
              answer: "B",
              explanation: "A broken cpc removes ADS. Confirming cpc continuity (or carrying out an R1+R2 check during the dead-test phase) is part of confirming the system is safe to work on."
            },
            {
              number: 17,
              prompt: "Which combination is the BEST evidence the means of isolation cannot be re-energised?",
              options: {
                A: "A handwritten label",
                B: "A purpose-made lock-off device fitted, a personal padlock applied with a unique key, and a caution notice displayed",
                C: "Insulating tape across the toggle",
                D: "An isolation relay"
              },
              answer: "B",
              explanation: "The combination of mechanical lock-off, unique-key padlock and caution notice satisfies the EAWR/HSG85 expectation for secure, communicated isolation."
            },
            {
              number: 18,
              prompt: "A candidate has isolated, locked off and proved dead at a socket on a ring final. They now wish to work on a different socket on the same ring. They should:",
              options: {
                A: "Assume the other socket is also dead",
                B: "Re-test dead at the new point of work — a partial wiring fault could leave one socket dead and another live",
                C: "Use the same proven reading",
                D: "Skip testing — the OCPD is locked"
              },
              answer: "B",
              explanation: "Each new point of work must be proven dead. Hidden interconnections, borrowed neutrals or wiring errors can leave one part of a circuit at a different potential to another."
            },
            {
              number: 19,
              prompt: "The HSG85 'plan, identify, isolate, secure, prove, post' framework is intended to:",
              options: {
                A: "Replace BS 7671",
                B: "Provide a repeatable safe-isolation method for any LV electrical task",
                C: "Apply only to maintenance work",
                D: "Apply only to industrial sites"
              },
              answer: "B",
              explanation: "HSG85 is the practical framework an electrician applies on every isolation. AM2 candidates are expected to be able to recite and perform the steps with confidence."
            },
            {
              number: 20,
              prompt: "On completion of work the worker should restore service by:",
              options: {
                A: "Removing their lock and tag and walking away",
                B: "Carrying out the appropriate live tests after re-energisation, removing their lock-off and caution notice, recording the time of return-to-service, and notifying the duty holder",
                C: "Switching on without testing",
                D: "Letting another worker re-energise the circuit"
              },
              answer: "B",
              explanation: "Return to service is the mirror image of isolation — live tests confirm the work is correct, the lock-off is removed only by the worker who applied it, and notification closes the loop."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "GS38 was published primarily to address:",
              options: {
                A: "The standardisation of cable colours",
                B: "Test instruments and probes used by electricians, after a series of investigated shock incidents traced back to inadequate probes",
                C: "RCD selection",
                D: "Earthing arrangements"
              },
              answer: "B",
              explanation: "GS38 is HSE's response to inadequate test equipment causing shock and arc-flash incidents. It is not a regulation but is treated as a defacto standard by AM2 assessors."
            },
            {
              number: 2,
              prompt: "An exposed metal probe tip exceeding the GS38 limit can cause:",
              options: {
                A: "A reading delay",
                B: "Inadvertent bridging between adjacent live conductors leading to a phase-to-phase fault, potentially with arc-flash",
                C: "Improved measurement accuracy",
                D: "Reduced battery life"
              },
              answer: "B",
              explanation: "Long exposed tips can bridge between conductors during testing. The 4 mm (or shorter) tip with shrouding is intended to prevent this. AM2 candidates must check probes before use."
            },
            {
              number: 3,
              prompt: "The means of isolation for a three-phase 63 A motor circuit is most appropriately:",
              options: {
                A: "A semiconductor controller",
                B: "A four-pole switch-disconnector or three-pole + neutral isolator with a lock-off facility, sized for the design current",
                C: "A 13 A switched fused connection unit",
                D: "An MCB with no neutral pole"
              },
              answer: "B",
              explanation: "Motor circuits require all live conductors to be isolated. A four-pole switch-disconnector with lock-off is the standard solution. Solid-state controllers must not be relied on as the sole means of isolation."
            },
            {
              number: 4,
              prompt: "If a circuit shows L-E reading of 230 V after isolation, the most likely cause is:",
              options: {
                A: "The indicator is faulty",
                B: "The line conductor has not been disconnected — the wrong device may have been opened, or the circuit has a back-feed from another supply",
                C: "Normal capacitive coupling",
                D: "Insulation breakdown only"
              },
              answer: "B",
              explanation: "230 V L-E means line is still energised. The candidate must STOP, re-secure the worksite, identify the correct OCPD or back-feed, and isolate again before continuing."
            },
            {
              number: 5,
              prompt: "Under HSG85, isolation must be:",
              options: {
                A: "Adequate for the worker only",
                B: "Effective against any reasonably foreseeable inadvertent re-energisation, secured, and verified by the person at risk",
                C: "Witnessed by a manager",
                D: "Recorded only verbally"
              },
              answer: "B",
              explanation: "HSG85 sets these three requirements as the test of an adequate isolation. The worker — not the supervisor — must verify the isolation, because they are the one at risk."
            },
            {
              number: 6,
              prompt: "Which of the following is NOT acceptable for proving dead under GS38?",
              options: {
                A: "A dedicated two-pole voltage indicator",
                B: "A test lamp with a metallic filament",
                C: "A multimeter complying with GS38, used carefully, with proving on a known source",
                D: "A non-contact voltage detector used as the sole proving instrument"
              },
              answer: "D",
              explanation: "NCVDs are screening tools and cannot prove a circuit dead by themselves. The other options can be used (with appropriate care), but the preferred AM2 method is a dedicated two-pole indicator."
            },
            {
              number: 7,
              prompt: "When isolating a circuit at a switched fused connection unit (SFCU), the candidate should:",
              options: {
                A: "Switch off the SFCU only",
                B: "Switch the SFCU off, withdraw the fuse to a secure location AND prove dead at the load — or lock off upstream if the SFCU has no secure mechanism",
                C: "Pull the appliance plug out",
                D: "Trust the integral switch alone"
              },
              answer: "B",
              explanation: "An SFCU's switch can be inadvertently operated. Withdrawing the fuse provides positive isolation; proving dead at the load confirms it. Where higher security is needed, lock off upstream."
            },
            {
              number: 8,
              prompt: "Which of the following is part of the 'identify' step in HSG85's safe isolation method?",
              options: {
                A: "Cutting cables to verify they are dead",
                B: "Confirming the circuit at the OCPD matches the schedule and matches the load you intend to work on, including labelling and tracing where doubt exists",
                C: "Calling the customer for permission",
                D: "Posting a permit"
              },
              answer: "B",
              explanation: "Misidentifying the circuit is the single most common cause of work-on-live incidents. AM2 candidates must demonstrate active identification — not assume the labels are correct."
            },
            {
              number: 9,
              prompt: "Which test instrument category (e.g. CAT III 600 V) is appropriate for a voltage indicator used at a domestic consumer unit?",
              options: {
                A: "CAT I 50 V",
                B: "CAT III 600 V or higher, to handle transient overvoltages at the supply origin",
                C: "CAT II 300 V",
                D: "Any rating"
              },
              answer: "B",
              explanation: "Distribution-level locations have high transient overvoltages. CAT III 600 V (or higher in industrial settings) is the appropriate instrument category to survive a transient without arc-flash."
            },
            {
              number: 10,
              prompt: "When the OCPD is inside a sealed unit that cannot be locked off (e.g. a moulded-case CB without a lock kit), the alternative is to:",
              options: {
                A: "Carry out the work live",
                B: "Isolate further upstream at a device that CAN be locked off, and treat the locally-disabled device as the working area",
                C: "Tape over the toggle",
                D: "Tell the customer not to touch the device"
              },
              answer: "B",
              explanation: "Where a device cannot be physically secured, isolation must move upstream to a device that can be. AM2 candidates often lose marks for accepting an unsecured local device as adequate."
            },
            {
              number: 11,
              prompt: "Which of these statements about lock-off lockout/tagout is correct?",
              options: {
                A: "Tagout alone is enough on industrial sites",
                B: "Lockout (a physical lock) must be combined with tagout (a written warning notice) on most safety-critical isolations; tagout alone is administrative only",
                C: "Tagout is preferred over lockout",
                D: "Lockout and tagout are interchangeable"
              },
              answer: "B",
              explanation: "Tags communicate; locks prevent. Lockout-tagout (LOTO) systems combine both — a lock to physically prevent operation, and a tag to communicate who is at risk and what must not be done."
            },
            {
              number: 12,
              prompt: "Which BS 7671 regulation directly requires that an MCB used as an isolator must comply with the standards for isolators?",
              options: {
                A: "Reg 411.3",
                B: "Reg 537.2 — devices used for isolation must comply with the relevant product standards (and bear the disconnector symbol)",
                C: "Reg 132.5",
                D: "Reg 543.2"
              },
              answer: "B",
              explanation: "Reg 537.2 sets the requirements for isolating devices. Modern MCBs to BS EN 60898 marked with the disconnector symbol satisfy these requirements; older MCBs without the symbol may not."
            },
            {
              number: 13,
              prompt: "Working on a TN-C-S supply, the candidate accidentally cuts the service neutral. The likely consequence is:",
              options: {
                A: "Nothing — the cpc handles the load",
                B: "The CNE conductor is shared between neutral and earth — losing it can leave exposed-conductive-parts at supply potential, with severe shock risk",
                C: "The supply automatically switches to TT",
                D: "Only nuisance lamp flicker"
              },
              answer: "B",
              explanation: "TN-C-S (PME) shares the function of N and PE on the supply side. Loss of the combined conductor allows exposed metalwork to rise toward line potential. AM2 candidates must understand this is one of the highest-risk faults to encounter."
            },
            {
              number: 14,
              prompt: "Before isolating, the candidate should establish what alternate sources may keep the circuit alive. Examples include:",
              options: {
                A: "Wind only",
                B: "Solar PV inverters, battery storage, micro-CHP, standby generators and UPS — any of which may export onto the circuit after the main isolation",
                C: "DNO supply only",
                D: "None — modern installations have only one source"
              },
              answer: "B",
              explanation: "Embedded generation is now common. Each source must be identified, isolated and proven dead at the point of work. PV inverters often disconnect automatically but isolation should not depend on that alone."
            },
            {
              number: 15,
              prompt: "If during dead testing the indicator's LEDs fail to light on the proving unit, the candidate should:",
              options: {
                A: "Continue testing — assume the proving unit has gone flat",
                B: "Stop, replace or fault-find the indicator/proving unit, and only then resume the safe-isolation sequence",
                C: "Borrow a colleague's mobile phone torch",
                D: "Use a multimeter instead"
              },
              answer: "B",
              explanation: "If the indicator does not respond on the proving unit, every previous and future reading from it is unreliable. The candidate must stop and resolve the instrument problem before continuing."
            },
            {
              number: 16,
              prompt: "Why should test leads with damaged insulation be replaced before use?",
              options: {
                A: "They look untidy",
                B: "Damaged insulation can expose live conductors to the user and break the protective barrier between user and circuit",
                C: "They consume more battery",
                D: "Calibration is invalidated"
              },
              answer: "B",
              explanation: "Test-lead insulation is the user's primary protection. AM2 candidates are expected to inspect leads visually before each use — damaged or cracked insulation is a reason to take the instrument out of service."
            },
            {
              number: 17,
              prompt: "Which document records the reasons for and decision to undertake live working?",
              options: {
                A: "EIC only",
                B: "A signed live-working risk assessment that documents the EAWR Reg 14 conjunctive tests have been satisfied, with appropriate precautions",
                C: "DNO permit only",
                D: "Customer email"
              },
              answer: "B",
              explanation: "Live working is exceptional. The decision to do so must be recorded and justified — including the precautions used. AM2 candidates rarely justify live work because dead working is overwhelmingly preferred."
            },
            {
              number: 18,
              prompt: "When checking the indicator before use, the candidate looks for:",
              options: {
                A: "Calibration sticker only",
                B: "Calibration date in date, lead insulation intact, fuse links present, batteries (if any) replaced, GS38 tip protection in place",
                C: "Any wear",
                D: "Brand name"
              },
              answer: "B",
              explanation: "All five elements must be checked. A current calibration date alone does not guarantee the device is fit for use — a damaged lead, blown fuse or worn tip protection invalidates the instrument."
            },
            {
              number: 19,
              prompt: "Which of the following is the worker's responsibility AT the worksite during dead work?",
              options: {
                A: "Only their own actions",
                B: "Their own actions plus any reasonably foreseeable hazard arising from their work — including warnings to other operatives, secured access and barriers as needed",
                C: "Only their tools",
                D: "Nothing once isolation is in place"
              },
              answer: "B",
              explanation: "EAWR places duties on the worker for their own actions and the consequences of those actions on others. Barriers, signage and warnings are part of the safe system of work."
            },
            {
              number: 20,
              prompt: "After completing work and re-energising, the candidate should:",
              options: {
                A: "Pack tools and leave",
                B: "Carry out the live test sequence (polarity live, Ze/Zs verification, RCD operation, functional checks), remove their personal lock-off, complete the schedule of test results and hand over to the duty holder",
                C: "Leave the lock on for the next worker",
                D: "Skip live tests if the dead tests passed"
              },
              answer: "B",
              explanation: "Live tests are the last gate before handover. Removing the lock-off only after the worker is satisfied keeps responsibility clear — and the schedule of test results captures the numerical evidence behind the EIC."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "Which BS 7671 chapter calls up the requirements for SAFE service after installation?",
              options: {
                A: "Chapter 13 (Fundamental Principles)",
                B: "Chapter 13 plus Section 537 (isolation/switching) and Part 6 (inspection and testing) — all together set the framework",
                C: "Part 1 only",
                D: "Appendix 4 only"
              },
              answer: "B",
              explanation: "Chapter 13 sets the principles, Section 537 sets the practical isolation requirements, Part 6 sets verification — together they cover safe service from design through handover."
            },
            {
              number: 2,
              prompt: "If a candidate's voltage indicator's casing is cracked but the LEDs still respond on the proving unit, the correct decision is:",
              options: {
                A: "Continue using it because it works",
                B: "Withdraw it from service — a cracked casing breaches the IP and electrical-safety integrity of the instrument and may have damaged internal components",
                C: "Repair with electrical tape",
                D: "Use it for one more circuit"
              },
              answer: "B",
              explanation: "Damaged enclosure = damaged protection. Even if the indicator electrically works, the protection between user and live parts is compromised. AM2 candidates must withdraw such tools."
            },
            {
              number: 3,
              prompt: "The fuse most commonly fitted in a GS38-compliant test-lead set is:",
              options: {
                A: "5 A glass fuse",
                B: "Approximately 500 mA HRC fuse (or sometimes 100 mA on lower-rating instruments) — sized to current-limit a probe slip without nuisance blowing",
                C: "32 A HRC",
                D: "No fuse"
              },
              answer: "B",
              explanation: "GS38-compliant lead fuses are HRC and sized to limit the energy of a fault while allowing instrument operation. Replacement fuses must match the manufacturer's specification — substituting a higher rating defeats the protection."
            },
            {
              number: 4,
              prompt: "On a domestic CU upgrade requiring isolation at the meter cut-out, the candidate must:",
              options: {
                A: "Pull the cut-out fuse themselves",
                B: "Arrange for the DNO to remove the cut-out fuse, or use an approved tail-isolator with the DNO's permission, and perform safe isolation downstream",
                C: "Bypass the cut-out",
                D: "Leave the cut-out energised and work around it"
              },
              answer: "B",
              explanation: "The cut-out is owned by the DNO; the customer/contractor has no authority to open it. Either book the DNO or use a permitted isolation device. AM2 candidates must show they understand this boundary."
            },
            {
              number: 5,
              prompt: "Which step in HSG85's framework is most often missed by AM2 candidates?",
              options: {
                A: "Identify",
                B: "Re-prove the indicator AFTER the dead test (the prove–test–prove sandwich)",
                C: "Plan",
                D: "Post the caution notice"
              },
              answer: "B",
              explanation: "The post-test re-prove is the assurance that the indicator was working when it gave the dead reading. Skipping it is the most-cited AM2 mark deduction in safe isolation."
            },
            {
              number: 6,
              prompt: "Which of the following is NOT one of the EAWR Reg 14 tests for live working?",
              options: {
                A: "It is unreasonable for the conductor to be dead",
                B: "It is reasonable for the work to be done live",
                C: "Suitable precautions (insulated tools, barriers, supervision) are taken",
                D: "The customer would prefer the work done live to save time"
              },
              answer: "D",
              explanation: "Customer convenience is not a Reg 14 test. The three conjunctive tests are reasonableness of dead work, reasonableness of the live work, and suitable precautions. Time pressure does not justify live work."
            },
            {
              number: 7,
              prompt: "Live testing should be carried out only:",
              options: {
                A: "Whenever it is convenient",
                B: "After dead tests are complete and only where the live test (Ze, Zs, RCD operation, polarity live, functional) genuinely cannot be carried out by another means",
                C: "When the customer demands speed",
                D: "Without dead testing"
              },
              answer: "B",
              explanation: "Live tests are the minimum live exposure necessary to verify the installation. Dead tests must precede them — the live tests confirm the energised behaviour of an installation already validated dead."
            },
            {
              number: 8,
              prompt: "When isolating an internal supply at a small commercial site, the worker realises the OCPD has unexpected dual feeds from a generator transfer panel. The correct response is to:",
              options: {
                A: "Isolate one feed and start work",
                B: "Stop, identify the generator transfer arrangement, isolate ALL feeding sources, prove dead at the point of work, and document the additional isolations",
                C: "Trust the transfer relay",
                D: "Disconnect the generator at the engine"
              },
              answer: "B",
              explanation: "Multiple feeds require multiple isolations. A transfer panel is intended to switch sources automatically — the only safe assumption is that any source could energise the circuit."
            },
            {
              number: 9,
              prompt: "Which best describes the GS38 'finger barrier' on a test probe?",
              options: {
                A: "An optional piece of plastic",
                B: "A moulded barrier that prevents the user's finger sliding forwards onto the exposed metal tip during use",
                C: "A label",
                D: "A thumbprint scanner"
              },
              answer: "B",
              explanation: "Finger barriers are mechanical guards. They prevent hand slip onto a live tip — a recurring cause of investigated incidents prior to GS38."
            },
            {
              number: 10,
              prompt: "If two workers must work on different parts of the same de-energised system, the safe practice is for:",
              options: {
                A: "One person to lock off and the others to trust them",
                B: "Each worker to apply their own personal lock-off via a multi-lock hasp on the same isolator — none can be removed until that worker has signed off",
                C: "Only the supervisor to lock off",
                D: "No locks at all"
              },
              answer: "B",
              explanation: "Multi-lock hasps allow many workers to share one isolation point. Each worker takes responsibility for their own lock; the system cannot be re-energised until all locks are removed by their respective owners."
            },
            {
              number: 11,
              prompt: "Which of these is acceptable as a 'known live source' for proving an indicator?",
              options: {
                A: "An adjacent socket-outlet you have just opened to expose the conductors",
                B: "A purpose-made proving unit, OR a permanently-energised, confirmed-live LV outlet which is checked separately to be at supply potential before use",
                C: "An RCD test button",
                D: "The MET earth bar"
              },
              answer: "B",
              explanation: "A proving unit is the safest tool. A confirmed-live socket can be used if the candidate has assured themselves it is at supply potential. RCD test buttons and earth bars are not at supply potential and cannot prove an indicator."
            },
            {
              number: 12,
              prompt: "Which BS 7671 regulation is most relevant to the placing of warning notices at the consumer unit?",
              options: {
                A: "Reg 411",
                B: "Reg 514 (and its sub-regulations 514.13.1 onwards) — labelling, identification and warning notices",
                C: "Reg 543",
                D: "Reg 132"
              },
              answer: "B",
              explanation: "Reg 514 covers identification, including periodic inspection notices, RCD test notices, earth-electrode arrangement notices and warning notices for non-standard or mixed-colour wiring."
            },
            {
              number: 13,
              prompt: "What is the correct response to discovering the means of isolation has been operated by another worker without your knowledge?",
              options: {
                A: "Continue work after a quick check",
                B: "Stop work, secure the worksite, investigate who operated the device and why, repeat the safe-isolation sequence in full and re-test dead before resuming",
                C: "Carry on if the supervisor agrees",
                D: "Lock off again silently"
              },
              answer: "B",
              explanation: "Any unauthorised change to the isolation invalidates the worker's safety guarantee. The full sequence must be repeated to confirm the working state. The investigation prevents recurrence."
            },
            {
              number: 14,
              prompt: "AM2 candidates must demonstrate they understand 'shared neutral' faults because:",
              options: {
                A: "They are illegal",
                B: "A shared or borrowed neutral can leave a circuit live after isolation if only the line and local neutral are tested — N-E and L-E testing detects it",
                C: "They never occur",
                D: "Only domestic systems have them"
              },
              answer: "B",
              explanation: "Shared neutrals were common in older lighting systems and can persist in modified installations. Testing every conductor combination is the routine that catches them."
            },
            {
              number: 15,
              prompt: "Which check is part of the 'plan' phase of a safe-isolation method?",
              options: {
                A: "Cutting cables",
                B: "Reviewing drawings, schedules and method statements; identifying alternate sources; agreeing the work area and timing with the duty holder",
                C: "Testing dead",
                D: "Re-energising"
              },
              answer: "B",
              explanation: "Planning happens before tools come out. AM2 assessors mark the candidate's ability to articulate the plan, including risks, alternates and stakeholder impact."
            },
            {
              number: 16,
              prompt: "Which type of cap or shroud is most appropriate for the unused probe of a two-pole indicator left on the bench?",
              options: {
                A: "No cap",
                B: "A manufacturer's probe shroud or storage cap that protects the metal tip and prevents accidental contact",
                C: "Insulating tape",
                D: "Tin foil"
              },
              answer: "B",
              explanation: "Probe tips are sharp and conductive. A manufacturer's shroud protects the user when the instrument is not in use and avoids damaging the tip — adhoc solutions are not GS38-compliant."
            },
            {
              number: 17,
              prompt: "In a TN-C-S installation, an open service neutral can result in:",
              options: {
                A: "A reduced fault loop impedance",
                B: "Exposed-conductive-parts rising to a hazardous voltage relative to true earth, requiring the candidate to disconnect bonded parts before working on them",
                C: "Improved RCD performance",
                D: "No safety issue"
              },
              answer: "B",
              explanation: "An open PEN conductor on a TN-C-S supply removes the bond between the supply neutral and exposed parts — the result is metalwork at supply potential. AM2 candidates should know this is one of the most dangerous fault modes."
            },
            {
              number: 18,
              prompt: "Which step in the safe-isolation sequence depends on the success of the previous step?",
              options: {
                A: "All steps are independent",
                B: "Each step is conditional on the previous — for example, 'test for dead' is meaningful only after the indicator has been proved on a known source, and the work cannot start until the re-prove succeeds",
                C: "Only the lock-off matters",
                D: "Only the caution notice"
              },
              answer: "B",
              explanation: "Safe isolation is a chain. A failure at any step invalidates the steps that follow. AM2 candidates need to articulate this chain of dependencies, not just recite the steps."
            },
            {
              number: 19,
              prompt: "The candidate finds the OCPD's lock-off device cannot be fitted because the breaker is in a non-standard physical position. The correct response is to:",
              options: {
                A: "Skip the lock-off",
                B: "Procure the manufacturer's correct lock-off accessory or, if unavailable, isolate at a more accessible upstream device that CAN be locked off",
                C: "Use cable ties as a substitute",
                D: "Begin work without isolation"
              },
              answer: "B",
              explanation: "Lock-off must be physical and reliable. Where the local device cannot be secured, isolating upstream is the standard remedy. Improvised solutions are not accepted on AM2."
            },
            {
              number: 20,
              prompt: "Where the AM2 candidate's reasonable judgement is that the local conditions make the isolation incomplete (e.g. cannot be physically secured, no proving unit), they should:",
              options: {
                A: "Improvise an isolation",
                B: "Stop the task, escalate to the supervisor and document the reason — refusing to proceed when the safety condition cannot be met is the correct AM2 outcome",
                C: "Carry on as planned",
                D: "Borrow a tool from another worker without checking"
              },
              answer: "B",
              explanation: "AM2 expects candidates to refuse unsafe work. Stopping and escalating shows competent judgement; pressing on demonstrates poor risk awareness and is a critical fail."
            }
          ]
        }
      ]
    },
    {
      id: "section-2",
      title: "Section 2 — Wiring Systems & Containment",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "Band I (e.g. ELV fire-alarm or data) cables are to share a metal trunking with Band II (230/400 V mains) cables. The installation must:",
              options: {
                A: "Simply share the trunking with no further measures",
                B: "Segregate Band I from Band II by a continuous earthed metallic partition, OR use Band I cables insulated for the highest voltage present",
                C: "Require no segregation provided the trunking is earthed",
                D: "Separate them only with cable ties"
              },
              answer: "B",
              explanation: "Section 528.1 of BS 7671. The goal is to prevent inductive interference and to contain the consequences of an insulation breakdown between bands. Fire-alarm circuits (BS 5839) have additional category-specific segregation requirements on top of this."
            },
            {
              number: 2,
              prompt: "The generally accepted maximum 'space factor' when filling cable trunking, calculated using the cable factor / trunking factor method in the On-Site Guide, is approximately:",
              options: {
                A: "25% of the trunking csa",
                B: "45% of the trunking csa",
                C: "70% of the trunking csa",
                D: "100% of the trunking csa"
              },
              answer: "B",
              explanation: "The OSG cable-factor method caps effective fill at roughly 45% of the trunking cross-sectional area. Over-filling reduces heat dissipation (and therefore the cable's current-carrying capacity) and makes drawing in difficult. Conduit has its own separate, tighter table."
            },
            {
              number: 3,
              prompt: "When planning a steel conduit run, the maximum number of 90° bends (or equivalent) usually permitted between two successive draw-in points is:",
              options: {
                A: "0",
                B: "1",
                C: "2",
                D: "5"
              },
              answer: "C",
              explanation: "Two 90° bends between draw-in boxes — or four 45° bends, etc. — is the traditional practical limit in IET guidance. Exceeding this makes drawing-in difficult, risks damaging the cable insulation, and may require an additional draw-in box."
            },
            {
              number: 4,
              prompt: "When terminating a 4 mm² 3-core SWA cable into a steel enclosure and using the armour as the cpc, the correct method is to:",
              options: {
                A: "Rely on the compression of the gland nut against the enclosure alone",
                B: "Fit a suitable BS EN compression gland of the correct size, dress the armour under the gland cone so it is firmly clamped, bond the armour to the enclosure earth terminal via an earth tag/banjo where required, and fit a shroud to maintain the IP rating",
                C: "Wrap the armour in PVC tape and terminate only the inner cores",
                D: "Omit the armour bond as the cable contains an internal cpc"
              },
              answer: "B",
              explanation: "The armour is a cpc and requires a reliable low-resistance connection. A correctly-sized compression gland with earth tag — or an external earth banjo/tail where the enclosure is insulated or painted — provides this. If the cable also has an internal cpc core, the armour bond is in addition to, not instead of, it."
            },
            {
              number: 5,
              prompt: "Cables passing through the holes drilled in floor/ceiling joists must, under Regulation 522.6.201, be:",
              options: {
                A: "Run through any convenient hole with no other precaution",
                B: "At least 50 mm from the top or bottom of the joist, OR mechanically protected (e.g. enclosed in earthed metal, or incorporate an earthed metallic covering), OR otherwise protected from penetration by nails and screws",
                C: "Stapled to the top of the joist for neatness",
                D: "Always routed within plastic conduit, regardless of depth"
              },
              answer: "B",
              explanation: "Reg 522.6.201. The 50 mm rule keeps cables clear of where nails and screws are typically driven. If 50 mm clearance cannot be achieved, the cable must be mechanically protected or run in earthed metallic enclosure / incorporate an earthed metal covering."
            },
            {
              number: 6,
              prompt: "The recommended maximum support interval for a 20 mm horizontal heavy-gauge steel conduit run is approximately:",
              options: {
                A: "0.5 m",
                B: "1.5 m (with longer permitted vertically — typically 2 m)",
                C: "5 m",
                D: "Unsupported is acceptable"
              },
              answer: "B",
              explanation: "On-Site Guide Table for steel-conduit support spacing. Horizontal runs require closer support than vertical because gravity adds bending moment over distance. Saddles must hold the conduit firmly without pinching."
            },
            {
              number: 7,
              prompt: "Which gland is appropriate for terminating outdoor SWA into a metallic gland-plate where weather-tight sealing is required?",
              options: {
                A: "An A2 gland (industrial outdoor)",
                B: "A CW gland with shrouds and external earth tag, sealed to the gland-plate via the appropriate IP-rated washers",
                C: "A nylon flexible gland",
                D: "A2 gland is for indoor use only"
              },
              answer: "B",
              explanation: "CW glands provide armour clamping, gland nut compression and (with shroud) IP-rated outdoor termination. The armour acts as cpc; the gland nut, washers and shroud provide weather-tight sealing."
            },
            {
              number: 8,
              prompt: "Fire-resisting cables in escape routes (e.g. FP200 Gold, FP400) are required because:",
              options: {
                A: "They are cheaper than alternatives",
                B: "They provide circuit integrity for a defined period under fire conditions, allowing fire-alarm and emergency-lighting circuits to function during evacuation",
                C: "They are the only cables BS 7671 permits in commercial buildings",
                D: "They have higher current ratings than ordinary T&E"
              },
              answer: "B",
              explanation: "BS 5839 (fire alarm) and BS 5266 (emergency lighting) call up cables that maintain circuit integrity in fire — typically 30, 60 or 120 minutes depending on the application. FP200 and similar mineral-insulated or LSF-jacketed cables meet these tests."
            },
            {
              number: 9,
              prompt: "When installing a metal trunking in a wet location, the candidate should:",
              options: {
                A: "Use any trunking",
                B: "Specify the appropriate IP-rated trunking with sealed knockouts and gasketed lids, fit drainage holes at low points where condensation may form, and protect any unpainted steel from corrosion",
                C: "Drill holes only on the upper face",
                D: "Avoid trunking entirely"
              },
              answer: "B",
              explanation: "Wet locations require external IP rating and internal drainage. Galvanised, powder-coated or stainless-steel trunking systems are common. Cable supports inside the trunking should not channel water onto cables."
            },
            {
              number: 10,
              prompt: "A cable tray supporting LV power cables in a plant room must be:",
              options: {
                A: "Free-floating",
                B: "Mechanically supported at intervals appropriate to its loaded weight, electrically continuous and bonded to the MET via a suitable cpc, and protected against any sharp edges that could damage cable insulation",
                C: "Painted regardless of material",
                D: "Used only for control cables"
              },
              answer: "B",
              explanation: "Cable tray is typically galvanised steel and acts as both physical support and (when bonded) part of the equipotential system. Reg 543 covers earthing of metallic tray; Reg 522.8 covers mechanical protection."
            },
            {
              number: 11,
              prompt: "The installation of plastic conduit through a fire-rated wall requires:",
              options: {
                A: "No additional measures",
                B: "A proprietary fire-stop / collar / intumescent sealant rated to maintain the fire compartmentation, in addition to the cable's own fire performance",
                C: "Just sand and cement",
                D: "Closing the conduit with a blank plate"
              },
              answer: "B",
              explanation: "Reg 527.2 calls up the requirement to maintain fire compartmentation. Fire-stop products are tested and CE-marked for use with specific service penetrations. Mortar alone may not maintain the required rating."
            },
            {
              number: 12,
              prompt: "When cable tray is supplied in 3 m or 6 m sections, the joints between sections must be:",
              options: {
                A: "Loosely fitted",
                B: "Mechanically bolted with the manufacturer's clips, and electrically continuous — earth-link straps fitted across joints where the bolted connection alone may not provide the required low-resistance bond",
                C: "Welded only",
                D: "Connected with cable ties"
              },
              answer: "B",
              explanation: "Cable tray earth continuity is reduced if joints rely solely on bolted galvanised steel — paint and corrosion add resistance over time. Earth-link straps (often supplied with the tray system) ensure continuity."
            },
            {
              number: 13,
              prompt: "Which cable type is most suitable for installation in agricultural environments, where livestock urine and corrosive atmospheres are present?",
              options: {
                A: "Generic PVC T&E",
                B: "Cables with appropriate sheathing such as armoured (SWA) or specialist agri/rural rubber-sheathed types — and proper consideration of section 705 of BS 7671",
                C: "MICC for all installations",
                D: "Bare conductors run in conduit only"
              },
              answer: "B",
              explanation: "Section 705 of BS 7671 covers special locations for agricultural and horticultural premises. Cables and accessories must resist environmental conditions and provide enhanced protection — IP54 or better is typical."
            },
            {
              number: 14,
              prompt: "Trunking installed in a 'hot' environment (e.g. above a boiler) must be specified with:",
              options: {
                A: "Generic PVC trunking",
                B: "Cables and trunking rated for the elevated ambient temperature, with appropriate de-rating per BS 7671 Section 523, and fire-classified materials where local codes require",
                C: "No special considerations",
                D: "Aluminium tray only"
              },
              answer: "B",
              explanation: "Ambient temperature affects current-carrying capacity. Reg 523 and Appendix 4 give de-rating factors. Material choice (steel rather than PVC) is appropriate where temperatures may exceed PVC's rated 70 °C continuous service."
            },
            {
              number: 15,
              prompt: "When pulling cables into a long conduit run, the candidate should:",
              options: {
                A: "Pull as hard as possible to save time",
                B: "Use a draw-tape, apply pulling lubricant where appropriate, support the cable to avoid kinks, and observe the manufacturer's maximum pulling tension",
                C: "Not lubricate cables",
                D: "Avoid the use of draw boxes"
              },
              answer: "B",
              explanation: "Excessive pulling tension damages conductors and insulation. Lubricant reduces friction; draw boxes break long runs into manageable pulls; manufacturers publish maximum tension values for each cable type."
            },
            {
              number: 16,
              prompt: "A perimeter dado trunking system in a commercial office is most often divided into:",
              options: {
                A: "A single uncompartmented box",
                B: "Two or three separate compartments — typically one for power, one for data, optionally one for telephony — each with its own cover",
                C: "Three power compartments",
                D: "An open channel without segregation"
              },
              answer: "B",
              explanation: "Multi-compartment trunking provides Reg 528 segregation between Band I and Band II cables, simplifying installation and allowing each service to be maintained without disturbing the others."
            },
            {
              number: 17,
              prompt: "The minimum bending radius for a 4-core SWA cable is typically:",
              options: {
                A: "Equal to the cable diameter",
                B: "Six times the overall cable diameter (manufacturer-specific — always check the data sheet)",
                C: "Half the cable diameter",
                D: "Zero"
              },
              answer: "B",
              explanation: "Cable manufacturers publish minimum bending radii. Six times the overall diameter is a typical figure for SWA. Tighter bends damage insulation and armouring; AM2 candidates must check the data sheet."
            },
            {
              number: 18,
              prompt: "Steel conduit runs that cross a thermal expansion joint in a building must include:",
              options: {
                A: "A rigid coupling",
                B: "An expansion coupling (slip-coupling) that accommodates the building's movement without stressing the conduit or its supports",
                C: "Welded fittings",
                D: "Two locknuts"
              },
              answer: "B",
              explanation: "Buildings move under thermal expansion. Rigid couplings transmit that movement into the conduit, fracturing it. Expansion couplings allow controlled axial movement and maintain the cable's protected route."
            },
            {
              number: 19,
              prompt: "Cable tie placement on cables run on tray should:",
              options: {
                A: "Use steel ties that grip tightly into the cable",
                B: "Use UV-stable cable ties at appropriate intervals; avoid over-tightening that would deform the cable; on outdoor tray, replace nylon with stainless-steel ties or weather-resistant alternatives",
                C: "Avoid ties altogether",
                D: "Use elastic bands"
              },
              answer: "B",
              explanation: "Over-tight ties deform sheathing and reduce current-carrying capacity. Outdoor or hot environments need UV-resistant or stainless-steel ties. Spacing should support the cable without creating bending stress."
            },
            {
              number: 20,
              prompt: "When containment passes through a fire-resistant wall, the candidate must:",
              options: {
                A: "Cut the wall larger than required",
                B: "Apply a tested fire-stopping system (sealant, collar, intumescent block) that restores the wall's fire rating around the cable/conduit penetration",
                C: "Pack with newspaper",
                D: "Leave an open hole"
              },
              answer: "B",
              explanation: "Reg 527 requires fire compartmentation to be maintained. Fire-stop products are third-party tested and certified for the specific penetration type. AM2 candidates need to identify and use the correct product."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "BS 7671 Section 528 covers segregation between Band I and Band II circuits. The fundamental requirement is to:",
              options: {
                A: "Run them in the same trunking with no measures",
                B: "Separate by an earthed metallic partition or use cables insulated for the highest voltage present, OR run in physically separate enclosures",
                C: "Use only PVC cables",
                D: "Run cables of different voltages in the same conduit without separation"
              },
              answer: "B",
              explanation: "Reg 528.1. Segregation prevents inductive interference between voltage bands and contains insulation failure. Fire-alarm circuits have additional BS 5839 segregation requirements on top of Section 528."
            },
            {
              number: 2,
              prompt: "Conduit fill (capacity) is limited primarily because:",
              options: {
                A: "It looks neater",
                B: "Heat dissipation is impaired and drawing-in becomes difficult — overfill reduces the cable's effective current-carrying capacity",
                C: "It saves cable",
                D: "It avoids electromagnetic interference"
              },
              answer: "B",
              explanation: "Heat is the main reason for fill limits. Cables in containment generate I²R losses that must dissipate; overfill reduces airflow and increases conductor temperature, leading to ageing of insulation."
            },
            {
              number: 3,
              prompt: "The 'cable factor' method in the On-Site Guide for filling steel conduit:",
              options: {
                A: "Allows 100% fill",
                B: "Gives factors for each cable size that, divided into the conduit's capacity factor, produces the maximum number of cables permitted in straight or bent runs",
                C: "Is for trunking only",
                D: "Has been withdrawn"
              },
              answer: "B",
              explanation: "The cable-factor method is published in the OSG. Conduit factor varies with length and number of bends — short straight runs allow more cables than long bent runs."
            },
            {
              number: 4,
              prompt: "When selecting an SWA gland, you must match:",
              options: {
                A: "Only the gland diameter",
                B: "The gland to the cable's outer diameter, the bedding diameter, and the armour size — the gland's CW (clamping) version is selected for indoor use; A2 or BW for outdoor with sealing washers",
                C: "Only the cable count",
                D: "The colour of the gland"
              },
              answer: "B",
              explanation: "Glands are sized by gland-size designation (e.g. 20s, 20, 25s, 25). Selecting too large or too small leads to poor armour clamping and an unreliable cpc connection. AM2 candidates often lose marks for gland mis-selection."
            },
            {
              number: 5,
              prompt: "A vertical heavy-gauge steel conduit run requires support intervals of approximately:",
              options: {
                A: "Every 5 m",
                B: "About 2 m for vertical runs (1.5 m horizontal)",
                C: "No support",
                D: "Every 0.3 m"
              },
              answer: "B",
              explanation: "Support spacing comes from the OSG and HSE guidance. Vertical runs can be slightly longer between supports than horizontal because gravity acts axially. Always allow for thermal expansion."
            },
            {
              number: 6,
              prompt: "When installing T&E within a wet partition wall, the candidate must:",
              options: {
                A: "Use any cable",
                B: "Provide mechanical protection in the wall (capping, conduit or earthed metallic enclosure) and observe the safe-zone requirement (within 150 mm of an edge or directly above/below an accessory) per Reg 522.6.202",
                C: "Run cables in any direction",
                D: "Avoid all enclosures"
              },
              answer: "B",
              explanation: "Reg 522.6.202 covers safe zones — vertically and horizontally above/below accessories and within 150 mm of an edge. If safe zones cannot be observed, the cable must be mechanically protected or have an earthed metallic covering."
            },
            {
              number: 7,
              prompt: "A trunking run incorporating a divider rail is most commonly used to:",
              options: {
                A: "Increase mechanical strength",
                B: "Provide compartmented segregation between Band I and Band II circuits without separate trunking systems",
                C: "Reduce material cost",
                D: "Improve aesthetics only"
              },
              answer: "B",
              explanation: "Compartmented trunking is a common Section 528 solution. Each compartment effectively becomes a separate enclosure, satisfying segregation while sharing one physical run."
            },
            {
              number: 8,
              prompt: "Cable supports for cables clipped direct to a building should:",
              options: {
                A: "Be at any spacing",
                B: "Be at intervals appropriate to the cable's weight and routing — typical T&E horizontal spacing is approximately 250-400 mm, closer at corners and direction changes",
                C: "Be at 5 m intervals only",
                D: "Use only adhesive clips"
              },
              answer: "B",
              explanation: "Manufacturer-recommended clip spacings keep cables tidy and prevent sagging. Spacings depend on cable weight, sheath type and orientation. AM2 candidates must demonstrate proper clipping."
            },
            {
              number: 9,
              prompt: "When installing fire-resistant cable (e.g. FP200 Gold), the support method must:",
              options: {
                A: "Use plastic clips",
                B: "Use metallic clips, saddles or trays that maintain support during fire conditions — plastic clips melt and would allow cables to fall onto escape routes",
                C: "Use any clip",
                D: "Use no support"
              },
              answer: "B",
              explanation: "BS 5839 requires fire-rated cables to remain in place during a fire. Plastic clips melt before the cable fails — defeating the cable's fire performance. Steel clips, saddles or wire-tray are required."
            },
            {
              number: 10,
              prompt: "The minimum bending radius for a flat T&E cable is typically:",
              options: {
                A: "Half the cable thickness",
                B: "Six times the overall thickness/diameter, depending on the manufacturer's data — tighter bends crack the sheath",
                C: "Three times",
                D: "No minimum"
              },
              answer: "B",
              explanation: "Bending radius limits prevent insulation cracking. Manufacturers publish minimum radii — failure to observe them can cause insulation failure that the IR test will detect."
            },
            {
              number: 11,
              prompt: "When installing cable in conduit, the candidate must consider:",
              options: {
                A: "Only the cable count",
                B: "Cable de-rating for grouping (Reg 523 / Appendix 4), the conduit's pulling characteristics, fill ratio and the cable's mechanical protection",
                C: "Only the conduit colour",
                D: "Only the connection type"
              },
              answer: "B",
              explanation: "Cable design current must be checked against the de-rated current capacity for the installation method — grouping in conduit reduces the cable's effective rating. Appendix 4 of BS 7671 provides the data."
            },
            {
              number: 12,
              prompt: "Which of these is NOT typically used as a cable containment system in commercial premises?",
              options: {
                A: "Steel trunking",
                B: "Cable basket / wire-mesh tray",
                C: "PVC oval conduit cast into wet plaster",
                D: "Aluminium ladder rack"
              },
              answer: "C",
              explanation: "PVC oval conduit can be used in chases but is not typically described as a containment 'system' for commercial premises. Steel trunking, cable basket and ladder rack are recognised commercial systems."
            },
            {
              number: 13,
              prompt: "A bend in PVC conduit is typically formed by:",
              options: {
                A: "Heating with a blow lamp until soft",
                B: "Using a bending spring inserted into the conduit and applying gentle leverage at room temperature, OR using purpose-made factory bends — observe the minimum bend radius",
                C: "Hammering the bend",
                D: "Cutting and gluing two pieces"
              },
              answer: "B",
              explanation: "Bending springs prevent the conduit collapsing during the bend. Cold bending preserves PVC properties. Excessive heating can deform the bore and damage subsequent cable insulation."
            },
            {
              number: 14,
              prompt: "The candidate must seal the gland-pot of a wet-location SWA termination because:",
              options: {
                A: "It improves the appearance",
                B: "Filling with sealant prevents moisture from migrating along the cable cores into the enclosure, maintaining the IP rating",
                C: "It speeds up the work",
                D: "It reduces the cable's bending radius"
              },
              answer: "B",
              explanation: "Wet-location glands rely on cable seals as well as the outer gland nut. Without internal sealant, capillary action can carry water along the cores. AM2 candidates must check IP-rating requirements."
            },
            {
              number: 15,
              prompt: "Steel conduit installation must include 'earth-continuity' bonding because:",
              options: {
                A: "It looks professional",
                B: "The conduit is part of the protective conductor system; bonded couplings, locknuts on enclosures and dedicated earth tails ensure low-resistance continuity for ADS",
                C: "It is decorative",
                D: "It is required only outdoors"
              },
              answer: "B",
              explanation: "Steel conduit acts as the cpc for cables running in it. Continuity must be tested (R2) and verified low resistance. AM2 candidates frequently see conduit-continuity faults under R2 testing."
            },
            {
              number: 16,
              prompt: "When containment crosses a building expansion joint, the candidate should fit:",
              options: {
                A: "Rigid couplings",
                B: "An expansion coupling (slip joint) that allows axial movement of the conduit/trunking without imposing stress on the building",
                C: "A welded joint",
                D: "Cable ties"
              },
              answer: "B",
              explanation: "Buildings move under thermal expansion. Rigid couplings transmit movement, eventually breaking the conduit. Slip joints absorb 25-50 mm of movement and maintain the cable's protected route."
            },
            {
              number: 17,
              prompt: "A galvanised steel cable basket is bonded by:",
              options: {
                A: "The cable's earthing core",
                B: "A dedicated earthing conductor connected to the basket and back to the MET, supplemented by jumpers across joints to ensure continuity",
                C: "Painting it",
                D: "It is not bonded"
              },
              answer: "B",
              explanation: "Cable basket is a class-I extraneous-conductive-part if installed within a low-impedance earth path. It is bonded so that any cable insulation failure can be cleared by the protective device — and so that touch-voltages remain safe."
            },
            {
              number: 18,
              prompt: "The candidate must select cable supports that:",
              options: {
                A: "Use any random fixings",
                B: "Provide adequate weight-bearing capacity for the cable load, accommodate any thermal movement, and resist environmental conditions (corrosion, UV, fire)",
                C: "Use only nails",
                D: "Use no fixings"
              },
              answer: "B",
              explanation: "Support selection considers weight, environment and fire performance. AM2 candidates need to identify the correct fixing for the wall material — masonry plug, hollow-wall fixing, structural fixing, etc."
            },
            {
              number: 19,
              prompt: "When installing a cable in a metal-stud wall, the candidate should:",
              options: {
                A: "Drill the studs anywhere",
                B: "Drill at the centre of the stud (or use fitting through-holes), fit grommets to protect against the cut metal edges, and observe safe-zone routing per Reg 522.6.202",
                C: "Run cables on the surface only",
                D: "Avoid metal studs entirely"
              },
              answer: "B",
              explanation: "Sharp metal-stud edges damage cable sheath. Grommets or sleeves are required at every penetration. Safe-zone routing applies in metal-stud walls in the same way as in masonry walls."
            },
            {
              number: 20,
              prompt: "For an outdoor 16 mm² SWA cable, the typical minimum bending radius is:",
              options: {
                A: "Equal to the cable diameter",
                B: "Approximately 6 to 8 times the overall cable diameter, per the manufacturer's data sheet",
                C: "Half the cable diameter",
                D: "Zero"
              },
              answer: "B",
              explanation: "SWA bending radii are typically 6-8 times overall diameter. Tighter bends damage the armour and inner cores. Always check the cable's data sheet on the AM2 — it varies between manufacturers."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "A cable run on a perforated steel cable tray must be supported at intervals appropriate to the loaded weight. Typical maximum support intervals for a heavy-loaded steel tray are:",
              options: {
                A: "0.25 m",
                B: "Around 1.2-1.5 m for a heavily loaded steel tray (manufacturer dependent), with shorter spans where direction changes occur",
                C: "5 m without support",
                D: "Tray does not need support"
              },
              answer: "B",
              explanation: "Support spacing depends on the tray's section modulus and the load. Manufacturer load tables are the authoritative source. AM2 candidates must demonstrate they consult them."
            },
            {
              number: 2,
              prompt: "When terminating a 4-core SWA at a control panel, the cpc connection options are:",
              options: {
                A: "Use the armour only",
                B: "Use the armour as the cpc with a banjo or earth-tag, OR use the dedicated separate green/yellow core within the cable, OR both — depending on the cable's construction and the control panel's earthing arrangement",
                C: "Connect armour to neutral",
                D: "Skip earth termination"
              },
              answer: "B",
              explanation: "SWA may have armour-only as cpc, or both armour and an internal core. Both must be earthed to the panel's earth bar. Reg 543.2 covers cpc requirements."
            },
            {
              number: 3,
              prompt: "A flat T&E cable is buried directly in plaster and the candidate cannot place it within a safe zone. The required action is to:",
              options: {
                A: "Run it in the plaster anyway",
                B: "Provide mechanical protection — earthed metal capping or conduit, or a steel-sheathed cable, OR install an upstream 30 mA RCD per Reg 522.6.202",
                C: "Use any cable",
                D: "Wrap with PVC tape"
              },
              answer: "B",
              explanation: "Reg 522.6.202 lists the alternatives. RCD protection is one valid solution; mechanical protection by earthed metal is another. AM2 candidates must know the options."
            },
            {
              number: 4,
              prompt: "Cable tray edges should be protected at penetrations because:",
              options: {
                A: "They look better",
                B: "Sharp metallic edges can damage cable insulation when cables move under load or vibration; edge-trim or grommets prevent this",
                C: "It saves materials",
                D: "It is decorative only"
              },
              answer: "B",
              explanation: "Metal edges plus moving cables = insulation damage. Edge-trim products and proprietary grommets are inexpensive and required. AM2 candidates lose marks for sharp unedged tray penetrations."
            },
            {
              number: 5,
              prompt: "The most common cause of corrosion on outdoor steel conduit is:",
              options: {
                A: "UV degradation",
                B: "Inadequate coating, ponding water at low points, or contact with dissimilar metals leading to galvanic corrosion",
                C: "Heat",
                D: "Chemical exposure only"
              },
              answer: "B",
              explanation: "Outdoor steel needs galvanising or protective coating. Water collecting at low points accelerates corrosion. Galvanic action between dissimilar metals (e.g. aluminium clamps on steel) requires barrier washers."
            },
            {
              number: 6,
              prompt: "When installing PVC conduit in a thermally hot location (>60 °C ambient), the candidate must:",
              options: {
                A: "Use any conduit",
                B: "Specify a higher-rated conduit material (e.g. high-impact PVC rated for elevated temperature, or steel) and de-rate cables per BS 7671 Appendix 4",
                C: "Use thinner PVC",
                D: "Avoid conduit"
              },
              answer: "B",
              explanation: "Standard PVC conduit is rated to about 60-70 °C continuous service. Higher temperatures require uprated material. Cables in the conduit also need de-rating — Appendix 4 provides the factors."
            },
            {
              number: 7,
              prompt: "A galvanised steel cable basket installed outdoors should:",
              options: {
                A: "Have no protective measures",
                B: "Be specified with hot-dip galvanised finish, with cut ends touched up with cold-galv paint, and bonded for earth continuity at all joints",
                C: "Be painted with primer only",
                D: "Be unprotected"
              },
              answer: "B",
              explanation: "Cut edges expose bare steel that quickly rusts. Cold-galv paint is touched up at site. Hot-dip galvanising is the standard outdoor protection."
            },
            {
              number: 8,
              prompt: "When containment penetrates a wall between a habitable room and an unheated space, the candidate must consider:",
              options: {
                A: "Aesthetics only",
                B: "Vapour-barrier integrity (preventing moisture migration), thermal continuity (limiting cold bridging), and any fire-rating requirement at compartment penetrations",
                C: "Cost only",
                D: "Cable colour"
              },
              answer: "B",
              explanation: "Compartment integrity is a building-regs concern. AM2 candidates must demonstrate awareness — sealing at the penetration with the correct grade of fire-stop or vapour-barrier compound is part of the installation."
            },
            {
              number: 9,
              prompt: "The candidate must verify cable de-rating factors against:",
              options: {
                A: "The supplier catalogue",
                B: "BS 7671 Appendix 4 (and Appendix 15 for grouping factors), considering ambient temperature, grouping, thermal insulation and installation method",
                C: "Customer preference",
                D: "The cable label only"
              },
              answer: "B",
              explanation: "Appendix 4 lists the de-rating factors. AM2 candidates must demonstrate they can apply them — selecting a cable size based on Iz (de-rated capacity), not on the tabulated It (reference rating)."
            },
            {
              number: 10,
              prompt: "Steel conduit threaded couplings are sealed against moisture by:",
              options: {
                A: "Painting the joint",
                B: "Wrapping the threads with PTFE tape OR using thread sealant compound, then locking with the appropriate locknut against the enclosure",
                C: "Welding",
                D: "Cable ties"
              },
              answer: "B",
              explanation: "PTFE or paste seals the threads against moisture migration. Locknuts pull the conduit tight against the enclosure for mechanical and electrical continuity."
            },
            {
              number: 11,
              prompt: "When choosing trunking for a particular installation, the candidate must consider:",
              options: {
                A: "Only the price",
                B: "The total cable load (including future capacity), the segregation requirements (Section 528), the mechanical environment, the fire requirements and the support arrangement",
                C: "Only the customer's request",
                D: "Only colour"
              },
              answer: "B",
              explanation: "Trunking selection is a design exercise. AM2 candidates must demonstrate they can think through capacity, segregation, environment, fire and support — not just specify a popular size."
            },
            {
              number: 12,
              prompt: "Cables installed on the surface of a wall must be supported by:",
              options: {
                A: "Random clips",
                B: "Manufacturer-recommended clips at the correct spacing, with closer clipping at corners, accessories and direction changes; clips selected for the wall material",
                C: "Tape only",
                D: "Glue"
              },
              answer: "B",
              explanation: "Spacing depends on cable weight and orientation. AM2 candidates show competence by selecting the right clip type for the wall material — masonry plug, plasterboard fixing, structural fixing — and the right spacing."
            },
            {
              number: 13,
              prompt: "A through-conduit at a fire-rated wall must be filled with:",
              options: {
                A: "Cement only",
                B: "A tested fire-stop sealant, intumescent collar or compatible packing material that maintains the wall's fire rating around the cables and conduit",
                C: "Just sand",
                D: "Air-gap"
              },
              answer: "B",
              explanation: "Reg 527.2 calls up fire-stopping. Tested products with installation instructions are required. AM2 assessors look for awareness of the correct product."
            },
            {
              number: 14,
              prompt: "The candidate must understand that conduit acting as a cpc requires:",
              options: {
                A: "No bonding",
                B: "Continuous low-resistance metallic path from each accessory back to the MET, verified by R2 test, with all couplings and locknuts firmly tightened to maintain electrical continuity",
                C: "An earth wire only",
                D: "Painted joints"
              },
              answer: "B",
              explanation: "Steel conduit's role as cpc depends on every joint being electrically tight. AM2 candidates demonstrate this by R2 test and visual inspection at couplings and accessory enclosures."
            },
            {
              number: 15,
              prompt: "When cables are grouped in trunking, the de-rating factor (Cg) is:",
              options: {
                A: "Always 1.0",
                B: "Less than 1.0 — meaning the cable's effective current-carrying capacity is reduced by the proximity of other cables generating heat",
                C: "Greater than 1.0",
                D: "Not applicable"
              },
              answer: "B",
              explanation: "Cg is a multiplier less than unity for grouped cables. Appendix 4 of BS 7671 publishes Cg values. AM2 candidates must apply Cg when calculating Iz."
            },
            {
              number: 16,
              prompt: "A drainage hole in metal trunking is fitted to:",
              options: {
                A: "Reduce material weight",
                B: "Allow condensation or any ingressed water to drain out of the trunking, preventing pooling that could damage cables",
                C: "Improve cable cooling",
                D: "Look attractive"
              },
              answer: "B",
              explanation: "Outdoor or unheated-area trunking can collect condensation. Drainage holes (often 3-6 mm) at low points let water out. AM2 candidates installing trunking outdoors should fit them."
            },
            {
              number: 17,
              prompt: "When connecting a cable lug to a busbar in a switchgear panel, the lug must be:",
              options: {
                A: "Loose-fitted",
                B: "Sized correctly for the conductor and the bus stud, crimped with the correct die using a calibrated crimp tool, and torqued to the manufacturer's specification",
                C: "Soldered only",
                D: "Bolted with no torque check"
              },
              answer: "B",
              explanation: "Crimp lugs require correct size, correct die and calibrated tool. Under-crimping leaves loose strands; over-crimping cracks the conductor. Bus terminations require torque to manufacturer spec."
            },
            {
              number: 18,
              prompt: "A cable bundle on a tray that exceeds 4 cables grouped together requires:",
              options: {
                A: "Cg = 1",
                B: "A grouping factor (Cg) below 1 from BS 7671 Appendix 4, applied to the cable's tabulated current rating to determine the de-rated capacity",
                C: "Random sizing",
                D: "No de-rating"
              },
              answer: "B",
              explanation: "Grouped cables generate mutual heating. Appendix 4 publishes Cg values for various grouping arrangements. AM2 candidates must apply this factor in their cable-sizing calculations."
            },
            {
              number: 19,
              prompt: "Containment systems must be specified to be:",
              options: {
                A: "Single-purpose only",
                B: "Mechanically robust for the environment, electrically continuous where they form part of the protective system, fire-rated where they pass through compartments, and compliant with relevant product standards",
                C: "Optional",
                D: "Cosmetic"
              },
              answer: "B",
              explanation: "Containment is multi-functional — physical protection, segregation, fire integrity, sometimes cpc. AM2 candidates must articulate these roles when justifying their selection."
            },
            {
              number: 20,
              prompt: "The candidate must always remember that flexible conduit is:",
              options: {
                A: "An equivalent to rigid conduit",
                B: "A flexible-glanded short connection (typically to motors, instruments, or for vibration) — flexible conduit alone does not act as cpc, so a separate cpc is required across the flexible section",
                C: "Suitable for permanent use throughout an installation",
                D: "Just a decorative cover"
              },
              answer: "B",
              explanation: "Standard flexible conduit is not a reliable cpc. A separate cpc must be installed inside or alongside, bonded at both ends. AM2 candidates lose marks for relying on the flex's outer braid as cpc."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "When designing the routing for a 25 mm² SWA cable feeding a sub-distribution board, the candidate should:",
              options: {
                A: "Take the most direct route regardless",
                B: "Plan the route to avoid hot zones, sharp edges and corrosive environments; observe minimum bending radius; verify support spacing and the cable's de-rated capacity matches the design current",
                C: "Run on the floor only",
                D: "Avoid all calculations"
              },
              answer: "B",
              explanation: "Cable routing is a design exercise. AM2 candidates must show they consider environment, mechanical protection, support, bending and de-rating — not just point A to point B."
            },
            {
              number: 2,
              prompt: "A trunking bend or set should:",
              options: {
                A: "Be unsupported on either side",
                B: "Have supports immediately on either side of the bend so that the bend itself does not bear the cable's weight; and the bend's radius should not damage the cables passing through",
                C: "Use no support",
                D: "Be welded"
              },
              answer: "B",
              explanation: "Bends are stress points. Supports flanking the bend transfer the cable load to the structure. The bend radius must not crush cables — proprietary bend pieces preserve the cable's minimum radius."
            },
            {
              number: 3,
              prompt: "The candidate identifying that a trunking installation is approaching maximum fill should:",
              options: {
                A: "Squeeze in more cables",
                B: "Increase the trunking size, add a second compartment or run, OR install a parallel containment to share the cable load",
                C: "Reduce cable insulation",
                D: "Use cable ties internally"
              },
              answer: "B",
              explanation: "Overfill creates heat-dissipation and pulling problems. The remedy is more containment, not less insulation. AM2 candidates must justify their fill calculations and provide capacity for future cables."
            },
            {
              number: 4,
              prompt: "When filling a vertical trunking, the candidate must consider:",
              options: {
                A: "No special factors",
                B: "The accumulation of heat at the top of the run (vertical chimney effect), with stricter de-rating where cables are bunched together for long vertical lengths",
                C: "Cable colour only",
                D: "Cable cost only"
              },
              answer: "B",
              explanation: "Vertical trunking creates a chimney for heated air. Cables at the top of long vertical runs operate hotter than at the bottom. Vertical-trunking de-rating is sometimes more onerous than horizontal."
            },
            {
              number: 5,
              prompt: "Steel conduit threads should be cut with:",
              options: {
                A: "Any improvised tool",
                B: "A purpose-made conduit die in the correct size, with thread-cutting oil applied during cutting, and the thread cleaned and de-burred before assembly",
                C: "A hacksaw only",
                D: "A grinder only"
              },
              answer: "B",
              explanation: "Quality threads are essential to maintain electrical and mechanical continuity. Dies in the correct size, lubricated and used carefully, are the trade method. AM2 candidates may be marked on thread-cutting technique."
            },
            {
              number: 6,
              prompt: "When cable basket is supported from a ceiling, the support method must:",
              options: {
                A: "Use any wire",
                B: "Use proprietary suspension components (e.g. all-thread rod with channel brackets) sized for the cable load, with anti-sway bracing on long runs",
                C: "Use string",
                D: "Use cable ties only"
              },
              answer: "B",
              explanation: "Cable basket suspended from ceilings carries significant weight. Engineered supports prevent collapse and resist sway. AM2 candidates need to know recognised support systems."
            },
            {
              number: 7,
              prompt: "A trunking lid should:",
              options: {
                A: "Be left open",
                B: "Be securely fitted with the manufacturer's clips or screws so that it cannot inadvertently come loose, and the cables remain enclosed for the trunking's full length",
                C: "Be glued",
                D: "Be optional"
              },
              answer: "B",
              explanation: "An open lid invalidates the trunking's enclosure. Lid clips/screws keep cables contained and segregated. AM2 candidates check this on completion of containment work."
            },
            {
              number: 8,
              prompt: "A flat T&E cable buried in chases under plaster must:",
              options: {
                A: "Have no special protection",
                B: "Run within the safe zones (within 150 mm of an edge or directly above/below an accessory) OR be covered by earthed metal capping/conduit OR be protected by a 30 mA RCD per Reg 522.6.202",
                C: "Be run anywhere",
                D: "Be covered with cement"
              },
              answer: "B",
              explanation: "Reg 522.6.202 sets out the alternatives. The 30 mA RCD option is the default for domestic; mechanical protection is the alternative. AM2 candidates must apply the regulation."
            },
            {
              number: 9,
              prompt: "When SWA armour is used as cpc, the resistance of that path is critical. The candidate must:",
              options: {
                A: "Trust the gland",
                B: "Verify low-resistance continuity by R2 test (or R1+R2), confirm the gland is correctly sized and clamped, and check the bond to the enclosure earth",
                C: "Test L-N only",
                D: "Skip testing"
              },
              answer: "B",
              explanation: "Reg 543 requires the cpc resistance to be low enough for ADS to operate within the time limit. AM2 candidates measure R2 to verify and record the value on the schedule of test results."
            },
            {
              number: 10,
              prompt: "The candidate must understand that mineral-insulated copper-clad (MICC) cable:",
              options: {
                A: "Is uninsulated",
                B: "Has copper conductors insulated by magnesium-oxide powder within a copper sheath, providing high-temperature and fire-resistant performance, but requires a special pot-type seal at terminations to keep moisture out of the MgO insulation",
                C: "Is the same as T&E",
                D: "Cannot be used in fire-rated applications"
              },
              answer: "B",
              explanation: "MICC's MgO insulation is hygroscopic — moisture must be sealed out at terminations using a pot-type seal. AM2 candidates may be tested on MICC termination technique."
            },
            {
              number: 11,
              prompt: "When pulling cables through long conduit runs, the maximum permitted pulling tension is:",
              options: {
                A: "Unlimited",
                B: "Specified by the manufacturer based on the cable's design — typically 50 N per mm² of conductor for stranded copper, with appropriate factors for the cable type",
                C: "Whatever the puller can achieve",
                D: "Zero"
              },
              answer: "B",
              explanation: "Excessive pulling damages conductors and insulation. Manufacturer pull-tension figures are the limit. AM2 candidates use lubricant to reduce friction and avoid over-pulling."
            },
            {
              number: 12,
              prompt: "A perimeter dado trunking system must:",
              options: {
                A: "Be recessed into the wall",
                B: "Be securely surface-mounted, with appropriate fixings into the wall material; designed for the segregation between Band I and Band II cables, with separate compartments where required",
                C: "Be hidden behind plasterboard",
                D: "Float on adhesive only"
              },
              answer: "B",
              explanation: "Dado trunking is a multi-compartment surface containment system. Reg 528 segregation drives compartmentation. Mechanical fixing depends on the wall material — cavity walls need different fixings to solid masonry."
            },
            {
              number: 13,
              prompt: "Cables running through cold-storage or refrigerated environments require:",
              options: {
                A: "Standard PVC cables",
                B: "Sheathing rated for the low-temperature environment (LSF or specialist cold-rated PVC) and de-rating considerations for the ambient",
                C: "No considerations",
                D: "Aluminium conductors only"
              },
              answer: "B",
              explanation: "Standard PVC becomes brittle below about 0 °C. Cold-rated cables and accessories are required. AM2 candidates must show awareness of environmental cable selection."
            },
            {
              number: 14,
              prompt: "A cable installed in conduit through a compartment wall must be sealed at the wall using:",
              options: {
                A: "Air gap",
                B: "An intumescent-foam fire-stop, putty-pad or proprietary sealant that maintains the wall's fire rating; the conduit may also need internal fire-stopping (rope/foam) at the penetration",
                C: "PVC tape",
                D: "Cement only"
              },
              answer: "B",
              explanation: "Reg 527 requires fire compartmentation to be maintained. The conduit's bore is also a path for fire — internal stops are required. AM2 candidates must consider both the wall and the conduit interior."
            },
            {
              number: 15,
              prompt: "When installing a cable on a tray vertically, the candidate should:",
              options: {
                A: "Run cables loose",
                B: "Tie cables to the tray rails at intervals that prevent sliding, support cable weight at intermediate points, and observe the cable's vertical bending radius",
                C: "Use no ties",
                D: "Twist cables tightly"
              },
              answer: "B",
              explanation: "Vertical cables tend to slide under their own weight. Tying at intervals to the tray rails or running the cable in a basket prevents this. AM2 candidates demonstrate this by routing and tying skill."
            },
            {
              number: 16,
              prompt: "The candidate must select cable cleats for high-fault-current SWA installations because:",
              options: {
                A: "They look professional",
                B: "Under fault conditions cables can experience large mechanical forces (electrodynamic forces). Cleats restrain the cable, preventing displacement and damage",
                C: "They reduce material costs",
                D: "They improve aesthetics only"
              },
              answer: "B",
              explanation: "High-fault SWA cable installations need cleats rated to withstand the magnetic force during a short-circuit. AM2 candidates installing larger cables must understand the requirement."
            },
            {
              number: 17,
              prompt: "A cable buried directly in the ground must:",
              options: {
                A: "Be uncovered",
                B: "Be of a type rated for direct burial (typically SWA), buried at appropriate depth (typically 600 mm in fields, 750 mm under roads), with warning tape laid above and the route recorded",
                C: "Be covered only by topsoil",
                D: "Be ignored when digging"
              },
              answer: "B",
              explanation: "Direct-burial cables follow Section 522.8 and HSE guidance HSG47. Depth, marking tape and route plans protect both the installer and future excavation work."
            },
            {
              number: 18,
              prompt: "When pulling cables into a conduit run with several bends, the candidate should:",
              options: {
                A: "Skip lubricant",
                B: "Use approved cable-pulling lubricant (water-based, conduit-friendly), apply a draw-tape, and use draw-pits or boxes to break long runs",
                C: "Pull harder",
                D: "Use solvents"
              },
              answer: "B",
              explanation: "Lubricant reduces friction. Approved products do not damage cable sheaths and are removed at the next draw-box. AM2 candidates use these techniques to prevent insulation damage."
            },
            {
              number: 19,
              prompt: "Cable tray edges at penetrations through walls must be:",
              options: {
                A: "Sharp",
                B: "Rounded, edged with proprietary trim, or fitted with grommets to prevent cable damage as the tray and cable move under thermal cycles",
                C: "Cut roughly",
                D: "Bare metal"
              },
              answer: "B",
              explanation: "Sharp tray edges damage cables over time. Edge-trim is inexpensive and required at penetrations. AM2 candidates check this on completion."
            },
            {
              number: 20,
              prompt: "A flexible conduit between a fixed installation and a vibrating motor must:",
              options: {
                A: "Use rigid conduit only",
                B: "Be of an approved flexible type, glanded at both ends, and the cpc must be a separate conductor not relying on the flex's outer braid (which has variable resistance)",
                C: "Be omitted",
                D: "Be cable-tied"
              },
              answer: "B",
              explanation: "Reg 543.2 requires reliable cpc continuity. Flexible conduit's braid is not a reliable cpc. A separate cpc inside or alongside the flex is required. AM2 candidates know this."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "The OSG cable-factor method requires the candidate to:",
              options: {
                A: "Guess",
                B: "Sum the cable factors for all cables in the conduit/trunking and ensure the sum does not exceed the conduit/trunking factor for the chosen size and length",
                C: "Use no method",
                D: "Multiply by 100%"
              },
              answer: "B",
              explanation: "The cable-factor method gives each cable a number (related to its csa) and gives each conduit/trunking size a maximum capacity number. Cable factor sum ≤ container factor = compliant fill. AM2 candidates must apply this."
            },
            {
              number: 2,
              prompt: "Surface-run flat T&E cables must, where possible, follow:",
              options: {
                A: "Random routes",
                B: "Vertical or horizontal lines (the safe zones) with neat clipping; diagonal runs are normally avoided as they are harder for future workers to predict and may cross a nail/screw zone",
                C: "Diagonal routes",
                D: "Curved routes"
              },
              answer: "B",
              explanation: "Reg 522.6 effectively requires predictable routing. Vertical/horizontal lines fall within the safe zones and reduce the chance of nail/screw penetration during refurbishment."
            },
            {
              number: 3,
              prompt: "Steel trunking joints must:",
              options: {
                A: "Be unbolted",
                B: "Be bolted firmly with the manufacturer's clips, painted-edge contacts cleaned to bare metal, and earth-link straps fitted across joints to ensure low-resistance electrical continuity",
                C: "Be glued",
                D: "Be ignored"
              },
              answer: "B",
              explanation: "Trunking joints carry the protective conductor function (where applicable). Paint adds resistance; earth straps overcome this. AM2 candidates must verify joint continuity by R2 testing."
            },
            {
              number: 4,
              prompt: "When designing fixings into hollow-cavity walls, the candidate must:",
              options: {
                A: "Use any screw",
                B: "Use proprietary cavity-wall fixings rated for the load, with consideration for the wall material (plasterboard, metal-stud, hollow-block) and the long-term behaviour of the fixing",
                C: "Use no fixings",
                D: "Use only nails"
              },
              answer: "B",
              explanation: "Plasterboard cavity-wall anchors come in many forms. Selection depends on load, wall thickness and panel material. AM2 candidates must demonstrate appropriate fixing selection."
            },
            {
              number: 5,
              prompt: "The minimum support spacing for vertical PVC conduit (typically 20 or 25 mm) is approximately:",
              options: {
                A: "5 m",
                B: "Around 1 to 1.5 m, with closer support at fittings and bends; horizontal spacing is similar but slightly tighter",
                C: "No support",
                D: "10 m"
              },
              answer: "B",
              explanation: "PVC conduit is lighter than steel and creeps over time. Closer supports prevent sag and maintain bend radii. OSG and IET guidance publish typical figures."
            },
            {
              number: 6,
              prompt: "When installing cable in conduit, the candidate must consider de-rating for:",
              options: {
                A: "Cable colour",
                B: "Ambient temperature, grouping with other cables in the same conduit (Cg), thermal insulation surrounding the conduit (Ci), and the installation method (Reference Method)",
                C: "Manufacturer brand",
                D: "Customer preference"
              },
              answer: "B",
              explanation: "Cable de-rating factors come from BS 7671 Appendix 4. The candidate selects the right Reference Method (e.g. Method 6 for conduit on a wall) and applies all relevant factors to the tabulated rating."
            },
            {
              number: 7,
              prompt: "A terminated SWA cable's outer sheath should:",
              options: {
                A: "End at the gland nut",
                B: "Continue inside the gland to the gland-cone, with the armour dressed under the cone and clamped — the inner bedding then strips back so the cores reach the terminals",
                C: "Be removed completely",
                D: "Be wrapped with tape"
              },
              answer: "B",
              explanation: "Correct SWA termination requires the outer sheath retained to the gland-cone, the armour clamped between the cone and the gland-nut threads, and the bedding stripped to expose the cores at the right length."
            },
            {
              number: 8,
              prompt: "Cable-management for control panels typically uses:",
              options: {
                A: "Loose cables",
                B: "Wiring duct (slotted plastic trunking) inside the panel, with cables routed neatly between terminals; cable tying where ducting is not used",
                C: "Adhesive only",
                D: "Cardboard"
              },
              answer: "B",
              explanation: "Slotted PVC wiring duct is the standard inside control panels. It allows easy cable insertion through the slots and tidy routing between terminals. AM2 candidates may install or modify panels."
            },
            {
              number: 9,
              prompt: "A polypropylene cable tie installed outdoors will:",
              options: {
                A: "Last forever",
                B: "Degrade under UV exposure within 1 to 2 years; UV-resistant black ties or stainless-steel ties should be used outdoors",
                C: "Be invisible",
                D: "Carry electrical current"
              },
              answer: "B",
              explanation: "Standard nylon cable ties are not UV-rated. Outdoor cable management requires UV-stabilised black nylon, stainless-steel or specialist polymer ties — AM2 candidates demonstrate awareness of environmental selection."
            },
            {
              number: 10,
              prompt: "A cable installed in a fire-rated zone (e.g. above an escape corridor) must:",
              options: {
                A: "Use any cable",
                B: "Use cable specified for fire performance (FP200 Gold, FP400, MICC) supported by metallic clips/saddles that maintain support during fire conditions",
                C: "Be glued",
                D: "Be insulated only"
              },
              answer: "B",
              explanation: "Fire-zone cables must maintain circuit integrity during a fire. The cable AND its supports both contribute. Plastic clips melt and would defeat the cable's fire performance — metal supports are required."
            },
            {
              number: 11,
              prompt: "When containment passes through a flat ceiling/floor void, the candidate must consider:",
              options: {
                A: "Aesthetics only",
                B: "Maintaining fire compartmentation, sealing against airflow, and protecting cables from mechanical damage where the void may be used as a service space by other trades",
                C: "Customer preference",
                D: "Cost only"
              },
              answer: "B",
              explanation: "Floor/ceiling voids are often used as compartmentation barriers and as building-services routes. AM2 candidates must consider all three: fire, air-tightness and mechanical protection."
            },
            {
              number: 12,
              prompt: "The candidate installing a cable through a refrigerated wall (cold store) must:",
              options: {
                A: "Use standard sealants",
                B: "Use a sealant compatible with the low temperature, maintain the vapour barrier of the wall, and ensure the cable has cold-rated sheathing",
                C: "Skip sealing",
                D: "Use any sheathing"
              },
              answer: "B",
              explanation: "Cold-store penetrations need vapour-barrier integrity, low-temperature compatibility and cold-rated cable. AM2 candidates need to identify the special requirements of this environment."
            },
            {
              number: 13,
              prompt: "A long horizontal SWA cable run on cleats requires:",
              options: {
                A: "No supports",
                B: "Cleats sized for the cable's weight and short-circuit forces, at intervals appropriate to the cable's structural requirements (manufacturer data)",
                C: "Cable ties only",
                D: "Loose support"
              },
              answer: "B",
              explanation: "SWA cleat selection considers static weight AND fault forces. Manufacturer data tables show cleat-spacing for various cable sizes and fault levels. AM2 candidates working with larger cables need to know this."
            },
            {
              number: 14,
              prompt: "When installing in a damp environment, the candidate should:",
              options: {
                A: "Use any cable",
                B: "Specify cables and accessories with the appropriate IP rating (often IP55 or higher), seal cable entries with the correct gland type, and consider drainage of any enclosure that might collect condensation",
                C: "Avoid sealing",
                D: "Use plastic only"
              },
              answer: "B",
              explanation: "Damp environments demand IP-rated equipment, sealed cable entries and provision for condensation drainage. AM2 candidates must specify each correctly."
            },
            {
              number: 15,
              prompt: "A bend in a conduit run that is too tight will:",
              options: {
                A: "Be fine",
                B: "Damage the cable insulation as it is pulled through, reduce the cable's service life, and risk creating an insulation fault detected later by IR test",
                C: "Improve cooling",
                D: "Have no effect"
              },
              answer: "B",
              explanation: "Minimum bend radius rules exist to protect cable insulation. Tight bends crush conductors and crack insulation. AM2 candidates must observe the conduit's minimum bend radius — typically 2.5× internal diameter."
            },
            {
              number: 16,
              prompt: "Steel conduit terminating into a non-conductive enclosure must:",
              options: {
                A: "Use no special bonding",
                B: "Use a separate earth bond from the conduit to the enclosure earth terminal (since the conduit cannot rely on the enclosure for cpc continuity)",
                C: "Be cut shorter",
                D: "Be glued"
              },
              answer: "B",
              explanation: "If the enclosure is plastic, the conduit's cpc path must be carried via a separate bonding conductor. AM2 candidates must verify this and test continuity."
            },
            {
              number: 17,
              prompt: "When containment is installed adjacent to gas, water or process pipework, the candidate must consider:",
              options: {
                A: "Aesthetics only",
                B: "Spacing to allow access for maintenance of all services, segregation per Reg 528 where applicable, and avoiding heat or chemical interaction between the systems",
                C: "No considerations",
                D: "Random arrangement"
              },
              answer: "B",
              explanation: "Multi-service runs need design — maintenance access, fire/heat interaction, chemical exposure and Section 528 segregation are all considerations. AM2 candidates demonstrate planning at this level."
            },
            {
              number: 18,
              prompt: "A power cable buried in the same trench as a data cable must:",
              options: {
                A: "Touch the data cable",
                B: "Be separated by an appropriate distance (or earthed metallic barrier) to prevent inductive interference and to maintain Section 528 segregation",
                C: "Use no separation",
                D: "Be unmarked"
              },
              answer: "B",
              explanation: "Inductive coupling between power and data cables can corrupt data signals. Section 528 and the cable manufacturer's data set the required separation distances. AM2 candidates must observe them."
            },
            {
              number: 19,
              prompt: "The candidate must understand that the term 'cable cleat' refers to:",
              options: {
                A: "A cable tie",
                B: "A purpose-made mechanical clamp that secures the cable to a support structure, designed to withstand fault-current forces and the cable's static weight",
                C: "An adhesive",
                D: "An accessory"
              },
              answer: "B",
              explanation: "Cleats are engineered components for medium-to-large cables. Manufacturer data shows the load capacity. AM2 candidates installing cables above 16 mm² should be familiar with cleat selection."
            },
            {
              number: 20,
              prompt: "When containment is run through a structural element, the candidate must:",
              options: {
                A: "Drill anywhere",
                B: "Verify with the structural engineer that drilling does not compromise the element's load-bearing capacity, and follow building-control requirements for fire and acoustic integrity",
                C: "Avoid all consultation",
                D: "Use any drill bit"
              },
              answer: "B",
              explanation: "Structural elements (joists, beams) have rules on permissible hole sizes and locations. AM2 candidates demonstrate they consult structural advice and follow the building-control regime."
            }
          ]
        }
      ]
    },
    {
      id: "section-3",
      title: "Section 3 — Terminations & Accessories",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "Which statement about terminating a PVC/SWA cable into a metallic enclosure is correct?",
              options: {
                A: "The outer PVC sheath must be retained right up to the gland pot so that no armour is visible",
                B: "The outer sheath is stripped back to expose the armour for the gland cone to grip; the inner bedding is stripped further back so the cores reach the terminals; a shroud is fitted over the gland to restore the IP rating",
                C: "The inner cores should be twisted together before termination",
                D: "Glands may be finger-tight only"
              },
              answer: "B",
              explanation: "Correct SWA termination: strip the sheath to expose the armour, dress the armour into the gland cone so it is firmly compressed, strip the bedding, terminate the cores. A rubber shroud restores the IP rating. The gland must be tightened to the manufacturer's specification."
            },
            {
              number: 2,
              prompt: "When terminating a stranded copper conductor into a screw terminal the recommended practice is to:",
              options: {
                A: "Tin the strands with solder first to give a firm mass",
                B: "Strip the correct length, gently twist the strands to prevent strays, ensure the whole strand bundle sits under the clamping face, and tighten to the manufacturer's specified torque (using a torque screwdriver where called for)",
                C: "Leave the outer insulation under the screw",
                D: "Terminate only one strand to keep the joint neat"
              },
              answer: "B",
              explanation: "Solder-tinning is now discouraged — solder creeps under sustained pressure, creating a loose, high-resistance joint over time. The aim is to capture all strands under the terminal at the correct torque — too little causes high resistance, too much damages the conductor."
            },
            {
              number: 3,
              prompt: "A 1.25 mm² 3-core flexible cord (3183Y) is being terminated at a BS 1363 13 A fused plug. The correct termination includes:",
              options: {
                A: "The brown core to the neutral pin and the blue to the line pin",
                B: "The cord anchorage clamped on the outer sheath (not on the individual cores), the brown core to the fused (line) terminal, the blue to N, and the green/yellow cpc cut slightly longer than L and N",
                C: "No cord grip, so the cores can flex freely",
                D: "The cpc made shortest to save copper"
              },
              answer: "B",
              explanation: "Standard BS 1363 practice. The cpc is deliberately the longest core so that if the cord grip fails and the cable is pulled, the cpc is the last to disconnect — maintaining earth continuity as long as possible. The cord grip must clamp the outer sheath, never the cores themselves."
            },
            {
              number: 4,
              prompt: "When a switched socket outlet is mounted on a flush metal back box fed by T&E, the correct detail is:",
              options: {
                A: "The outer sheath of the T&E terminated at the edge of the back-box knockout, with cores exposed through the hole",
                B: "The outer sheath continued into the back box, a grommet or bush protecting the cable at the knockout, green/yellow sleeving over the bare cpc inside the box, and the metal back box earthed via a fly-lead or the accessory's earth terminal",
                C: "The cpc left bare inside the box — no sleeve required on a metal accessory",
                D: "No grommet, sleeve or sheath continuation needed"
              },
              answer: "B",
              explanation: "The sheath is retained into the box so the cores are protected; a grommet prevents sheath damage on the cut edge of the steel knockout; T&E cpc is bare and must be sleeved in green/yellow inside the enclosure. Metal back boxes require a cpc connection — achieved via a fly-lead to the back-box earth terminal or via a suitable earthed fixed-lug accessory."
            },
            {
              number: 5,
              prompt: "The recommended torque for a 6 mm² conductor terminated under a typical busbar/MCB screw is approximately:",
              options: {
                A: "0.2 Nm",
                B: "Approximately 2 to 2.5 Nm — but always verify with the manufacturer's specification (BEAMA, TLC and major MCB manufacturers publish specific values)",
                C: "10 Nm",
                D: "No torque is required"
              },
              answer: "B",
              explanation: "Manufacturer torque values are the authoritative reference. Typical figures: 6 mm² ~2-2.5 Nm, 16 mm² ~4 Nm, 25 mm² ~5-6 Nm. AM2 candidates should use a calibrated torque screwdriver and verify against manufacturer instructions."
            },
            {
              number: 6,
              prompt: "A ferrule (bootlace pin) terminated on a stranded conductor is used to:",
              options: {
                A: "Replace the conductor",
                B: "Provide a solid termination of all strands within a single crimped collar, ideal for spring-cage and screw terminals to prevent stray strands and high-resistance joints",
                C: "Increase the cable size",
                D: "Decorate the conductor"
              },
              answer: "B",
              explanation: "Ferrules consolidate strands into a controlled mass that fits cleanly into terminals. Spring-cage terminals especially favour ferrules. AM2 candidates installing flexible cables may use them to improve termination quality."
            },
            {
              number: 7,
              prompt: "A torque screwdriver used at the consumer unit must be:",
              options: {
                A: "Any screwdriver",
                B: "Calibrated, set to the manufacturer's specified torque for each terminal type, and used with the correct bit size to avoid damaging the screw head",
                C: "Magnetic only",
                D: "An impact driver"
              },
              answer: "B",
              explanation: "Torque screwdrivers must be calibrated (typically annually) and set to the device manufacturer's torque. The wrong bit size or excessive torque damages the screw head and reduces clamping reliability. AM2 marks practical use."
            },
            {
              number: 8,
              prompt: "The strip length when terminating into a manufacturer's spring-cage terminal:",
              options: {
                A: "Should be as long as possible",
                B: "Must match the manufacturer's gauge — too short risks unclamped strands; too long exposes bare conductor outside the terminal block",
                C: "Is irrelevant",
                D: "Should be twice the gauge"
              },
              answer: "B",
              explanation: "Spring-cage terminals have specified strip lengths. The gauge is often printed on the device or in its data sheet. Wrong strip length leads to high-resistance joints or exposed conductor — AM2 candidates must observe it."
            },
            {
              number: 9,
              prompt: "When terminating a 16 mm² stranded cable into a circuit breaker, the candidate should:",
              options: {
                A: "Tin the conductor",
                B: "Either crimp a suitable ring or pin lug for the terminal, OR use a ferrule, OR terminate the strands directly under the screw if the manufacturer's terminal is rated for stranded conductors — and torque to manufacturer spec",
                C: "Solder",
                D: "Use loose strands"
              },
              answer: "B",
              explanation: "Larger conductors and stranded types may require ferrules or lugs. Manufacturer terminals vary — some accept stranded directly, some require ferrules. AM2 candidates check the device specification."
            },
            {
              number: 10,
              prompt: "A 32 A radial socket-outlet circuit's accessories must:",
              options: {
                A: "Be of any type",
                B: "Be rated for the design current and complement BS 1363-2 (UK 13 A socket) for general use, OR a higher-rated industrial outlet (BS EN 60309) where appropriate for the equipment",
                C: "Be fused only",
                D: "Have no rating"
              },
              answer: "B",
              explanation: "Standard 13 A socket-outlets to BS 1363 cover most general applications. Higher current or industrial uses go to BS EN 60309 plugs/sockets. AM2 candidates select accessories appropriate to load and environment."
            },
            {
              number: 11,
              prompt: "When terminating a flexible cord into a junction box, the candidate must:",
              options: {
                A: "Skip the cord grip",
                B: "Use a strain-relief gland or cord clamp that grips the outer sheath, leaving the cores free to flex without stress at the terminal — cores stripped to the correct length and torqued",
                C: "Clamp the cores directly",
                D: "Tape the cord to the box"
              },
              answer: "B",
              explanation: "Strain relief is critical on flexible cords. Without it, repeated movement transfers stress to the cores at the terminal, causing fatigue. Cord grips must clamp the sheath, not the cores."
            },
            {
              number: 12,
              prompt: "The acceptance criterion for a screw-terminal joint after re-tightening is that:",
              options: {
                A: "It feels tight",
                B: "It is torqued to the manufacturer's specification using a calibrated torque tool, and the conductor is fully clamped without crushed strands",
                C: "Any torque is fine",
                D: "It can be hand-tight"
              },
              answer: "B",
              explanation: "Subjective tightness is unreliable. Calibrated torque is the only repeatable standard. AM2 candidates use a torque screwdriver as the trade tool — and the assessor watches for it."
            },
            {
              number: 13,
              prompt: "Insulation between cores at the termination must be:",
              options: {
                A: "Stripped completely",
                B: "Stripped only enough for the conductor to enter the terminal; remaining insulation should butt against the terminal so no bare conductor is exposed outside the clamping face",
                C: "Cut to any length",
                D: "Burnt off"
              },
              answer: "B",
              explanation: "Bare conductor outside the terminal can short to adjacent terminals or live parts. Strip-length discipline is part of the AM2 assessment — too long is as bad as too short."
            },
            {
              number: 14,
              prompt: "A T&E cable's bare cpc must be sleeved with green/yellow PVC sleeve at every termination because:",
              options: {
                A: "It looks neater",
                B: "Reg 514.4 requires identification of cpc, AND the sleeving prevents the bare cpc from short-circuiting to a live conductor inside the enclosure",
                C: "It is decorative",
                D: "It increases the cable's csa"
              },
              answer: "B",
              explanation: "Reg 514.4 requires every cpc to be identified by green/yellow at terminations and at any visible point. The sleeving also provides insulation between bare cpc and adjacent cores."
            },
            {
              number: 15,
              prompt: "When using a crimped ring lug, the candidate should:",
              options: {
                A: "Solder it",
                B: "Use the correct die in a calibrated crimping tool, ensure all strands enter the lug barrel, and verify the crimp by visual inspection (and, where required, by pull-test)",
                C: "Use any tool",
                D: "Bend by hand"
              },
              answer: "B",
              explanation: "Crimping is a controlled compression. Wrong die = wrong compression = unreliable joint. Calibrated tools and correct dies are mandatory; pull-test or visual go/no-go checks confirm each crimp."
            },
            {
              number: 16,
              prompt: "A cable termination at a junction box should:",
              options: {
                A: "Have no protection",
                B: "Be made within an enclosure that provides electrical isolation, mechanical protection and (where required) IP rating; access for inspection should be retained",
                C: "Be made in free air",
                D: "Be uncovered"
              },
              answer: "B",
              explanation: "Junction boxes are themselves accessories. Reg 526 covers connections — accessibility, mechanical protection and ingress protection are all design considerations. AM2 candidates select boxes appropriate to the location."
            },
            {
              number: 17,
              prompt: "Junction boxes for permanent connections must, under Reg 526.3:",
              options: {
                A: "Be inaccessible",
                B: "Be either accessible for future inspection, OR be a maintenance-free type (e.g. brass-screw with crimped connections) that does not require future tightening, OR meet specific exception criteria",
                C: "Be cable-tied only",
                D: "Be hidden behind plaster"
              },
              answer: "B",
              explanation: "Reg 526.3 is the AM2 favourite. Concealed junction boxes are not permitted unless they are maintenance-free types. AM2 candidates often face this in fault-finding scenarios — buried JBs are illegal and must be relocated or replaced with maintenance-free types."
            },
            {
              number: 18,
              prompt: "When terminating cables into accessory back-boxes, the candidate must:",
              options: {
                A: "Avoid sleeves",
                B: "Strip cables to the correct length, sleeve the bare cpc with green/yellow PVC, fit grommets at any sharp edges, and dress the cores neatly into the accessory",
                C: "Cut wires to any length",
                D: "Skip identification"
              },
              answer: "B",
              explanation: "Termination craft = strip length + sleeving + grommets + dressing + torque. AM2 candidates demonstrate all five at every termination."
            },
            {
              number: 19,
              prompt: "The accessory's earth terminal must be connected to:",
              options: {
                A: "Nothing",
                B: "The cpc of the cable feeding it AND, where the back box is metallic, a fly-lead or fixed-lug accessory bonds the back box to the cpc — both must be present",
                C: "The neutral",
                D: "Only the back box"
              },
              answer: "B",
              explanation: "Reg 543.7 covers earthing of accessories. Both the accessory and any metallic back-box must be earthed. Fly-leads provide the back-box earth where the accessory's fixing-lugs are not directly earthed."
            },
            {
              number: 20,
              prompt: "A 32 A radial circuit's terminations must be:",
              options: {
                A: "Rated for any current",
                B: "Sized and rated for the design current AND the prospective fault current — terminals, accessories and OCPDs must coordinate so they can clear faults safely",
                C: "Smaller than the cable",
                D: "Larger than the cable"
              },
              answer: "B",
              explanation: "Termination rating is part of system selection. Under-rated accessories cannot pass full-load current safely. AM2 candidates verify the accessory's current and short-circuit rating against the design conditions."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "When terminating a stranded conductor into a screw-clamp terminal, the candidate must NOT:",
              options: {
                A: "Strip to the correct length",
                B: "Tin (solder) the conductor before terminating — solder creeps under prolonged screw pressure, leading to a loose, high-resistance joint",
                C: "Twist strands gently",
                D: "Use a torque screwdriver"
              },
              answer: "B",
              explanation: "Tinning was historic practice; modern guidance prohibits it. The same conductor terminated with ferrule or directly (where permitted) avoids the cold-flow problem of solder."
            },
            {
              number: 2,
              prompt: "The recommended torque for a 25 mm² conductor terminated into a typical busbar terminal is approximately:",
              options: {
                A: "0.5 Nm",
                B: "Around 5 to 6 Nm — verify with the manufacturer specification for the device",
                C: "20 Nm",
                D: "Any torque"
              },
              answer: "B",
              explanation: "Manufacturer torque values vary slightly by product. Typical: 6 mm² ~2-2.5 Nm, 16 mm² ~4 Nm, 25 mm² ~5-6 Nm. AM2 candidates use the manufacturer's torque tables — not generic figures."
            },
            {
              number: 3,
              prompt: "A spring-cage terminal in a control-panel terminal block:",
              options: {
                A: "Requires a torque",
                B: "Self-tensions when the lever closes — the candidate must observe the strip-length and use a ferrule on stranded cables to ensure consistent contact",
                C: "Is the same as a screw terminal",
                D: "Uses no spring"
              },
              answer: "B",
              explanation: "Spring-cage terminals do not need torquing — the spring provides constant pressure. They DO need correct strip length and (for stranded) a ferrule. AM2 candidates must understand both terminal families."
            },
            {
              number: 4,
              prompt: "When connecting a 4 mm² T&E cpc to a circuit breaker's earth terminal:",
              options: {
                A: "Strip and connect bare",
                B: "Strip the bare cpc and sleeve it green/yellow before insertion — the sleeve butts against the terminal so no unsleeved cpc is exposed",
                C: "Tin the conductor",
                D: "Loop and crimp"
              },
              answer: "B",
              explanation: "Reg 514.4 requires green/yellow identification at every visible point. Inside the consumer unit, sleeving the bare cpc identifies it and insulates it from adjacent live parts."
            },
            {
              number: 5,
              prompt: "A BS 1363 13 A plug's cord-grip is designed to:",
              options: {
                A: "Decorate the plug",
                B: "Clamp the outer sheath of the flexible cord, transferring any pulling force from the cores to the plug body — preventing the cores being pulled out of the terminals",
                C: "Squeeze the cores",
                D: "Attach to the wall"
              },
              answer: "B",
              explanation: "The cord-grip is the strain-relief mechanism. Cores must be free to flex inside the plug; the outer sheath bears any tension. Cord-grip on the cores is incorrect and dangerous."
            },
            {
              number: 6,
              prompt: "When terminating a 1.5 mm² flexible cord into a chocolate-block screw terminal, the strip length should be:",
              options: {
                A: "10 cm",
                B: "Approximately 5-7 mm (matching the terminal's internal contact length) so that strands enter the terminal fully without bare conductor exposed outside",
                C: "20 mm",
                D: "Any length"
              },
              answer: "B",
              explanation: "Strip length matches the terminal. Most chocolate-block terminals have 5-8 mm contact length. AM2 candidates use a wire-strip tool with depth setting to consistently achieve this."
            },
            {
              number: 7,
              prompt: "A back-box earth fly-lead is required when:",
              options: {
                A: "Never",
                B: "The metal back-box's cpc connection cannot be made via the accessory's fixing-lugs alone — typically when the accessory's lugs are insulated or where the accessory is a non-conductive plate",
                C: "Always",
                D: "Only on TT systems"
              },
              answer: "B",
              explanation: "Fixed-lug accessories with conductive fixing-lugs make a metal-to-metal connection between the front-plate and the back-box. Insulated lugs or plastic accessories require a separate fly-lead from the back-box earth terminal to the accessory's earth terminal."
            },
            {
              number: 8,
              prompt: "When stripping cable, the candidate must:",
              options: {
                A: "Cut deeply into the conductor",
                B: "Use a calibrated wire stripper or knife with a depth-stop, removing insulation cleanly without nicking the conductor strands",
                C: "Use teeth",
                D: "Use scissors"
              },
              answer: "B",
              explanation: "Nicked strands are stress concentrators that fail later. Calibrated strippers leave full-section conductors. AM2 candidates use the right tool for the cable type."
            },
            {
              number: 9,
              prompt: "A maintenance-free junction box (e.g. push-fit Wago-type or screw-clamp brass-screw type) is permitted under Reg 526.3 because:",
              options: {
                A: "It is decorative",
                B: "The connection is designed to be a one-time termination requiring no future inspection or tightening — meeting the exception in Reg 526.3 for inaccessible connections",
                C: "It is plastic",
                D: "It costs less"
              },
              answer: "B",
              explanation: "Reg 526.3 normally requires accessible connections. Maintenance-free types (lever connectors, brass-screw types) are an exception. AM2 candidates must know the boundary — concealed terminals must be of these types."
            },
            {
              number: 10,
              prompt: "The current rating of a screw terminal in an accessory is determined by:",
              options: {
                A: "The cable size",
                B: "The accessory manufacturer's rating, the type of terminal (push-fit, screw, spring-cage), and the conductor size and type — all must coordinate with the design current",
                C: "The user's preference",
                D: "The cable colour"
              },
              answer: "B",
              explanation: "Terminal rating, conductor type and design current must coordinate. AM2 candidates check that the accessory will accept the design current safely — the wrong terminal can become a hot-spot."
            },
            {
              number: 11,
              prompt: "A push-in Wago-style connector is rated for:",
              options: {
                A: "Only solid conductors",
                B: "Both solid and (where stated) stranded conductors with appropriate ferrules; the candidate must check the manufacturer's data for the conductor type, csa range and current rating",
                C: "Only stranded conductors",
                D: "All conductors regardless"
              },
              answer: "B",
              explanation: "Wago and similar lever connectors specify acceptable conductor types and sizes. Some accept solid only; some accept stranded with or without ferrules. AM2 candidates check before using."
            },
            {
              number: 12,
              prompt: "A green/yellow PVC sleeve is required at:",
              options: {
                A: "Both ends of the cpc",
                B: "Every visible point of a bare cpc — typically inside back-boxes, junction boxes and at any termination — to identify and insulate it",
                C: "Only one end",
                D: "Never"
              },
              answer: "B",
              explanation: "Reg 514.4 calls up identification at every visible point. AM2 candidates apply this consistently — missing sleeves at one termination is a frequent mark deduction."
            },
            {
              number: 13,
              prompt: "When wiring a metal-clad accessory to T&E, the candidate must:",
              options: {
                A: "Skip the back-box bond",
                B: "Bond the metal accessory's back-box to the cpc, sleeve the bare T&E cpc, and ensure the front-plate is also earthed via the fixing screws or a fly-lead",
                C: "Leave the back-box floating",
                D: "Use only one earth"
              },
              answer: "B",
              explanation: "Both the back-box and the front-plate of metal-clad accessories must be earthed. Reg 543 covers protective conductors; failure to bond either renders the accessory unsafe under fault conditions."
            },
            {
              number: 14,
              prompt: "A bus-bar within a consumer unit is tightened to terminate the line conductor; the torque applied should:",
              options: {
                A: "Be as high as possible",
                B: "Match the manufacturer's specification — over-torquing damages the screw or the conductor; under-torquing leaves a high-resistance joint that overheats under load",
                C: "Be hand-tight",
                D: "Be irrelevant"
              },
              answer: "B",
              explanation: "Manufacturer torque is exactly the right value. AM2 candidates use calibrated tools to achieve repeatable results across all terminations in a board."
            },
            {
              number: 15,
              prompt: "A 2.5 mm² T&E ring final is terminated at a 32 A MCB. The candidate must:",
              options: {
                A: "Combine both ring legs into one terminal",
                B: "Insert each ring leg into its own terminal slot (or, if the MCB has a single terminal, use a junction-block or busbar to combine the two legs at a single neat termination, with all strands captured)",
                C: "Cut one leg short",
                D: "Skip ring final"
              },
              answer: "B",
              explanation: "MCB terminals usually accept two cables for ring final use. Where the manufacturer's terminal is dual-bore, both legs go in. Where not, an external block or busbar is used. AM2 candidates verify the device's wiring instructions."
            },
            {
              number: 16,
              prompt: "The standard pattern for the line conductor in a flexible cord is:",
              options: {
                A: "Blue",
                B: "Brown for line, Blue for neutral, Green/Yellow for cpc — per BS 7671 colour code",
                C: "Yellow",
                D: "Black"
              },
              answer: "B",
              explanation: "BS 7671 single-phase flexible cord colours: Brown=L, Blue=N, Green/Yellow=cpc. AM2 candidates know the harmonised colour codes and can identify them at sight."
            },
            {
              number: 17,
              prompt: "The maximum number of conductors that may be terminated under one screw is determined by:",
              options: {
                A: "Customer preference",
                B: "The manufacturer's specification — typically the screw is rated for 1 or 2 conductors of a stated size; exceeding this risks unclamped strands and a poor connection",
                C: "Random count",
                D: "The cable colour"
              },
              answer: "B",
              explanation: "Each terminal has a stated capacity. AM2 candidates verify before terminating — combining cables under one screw beyond the stated capacity is unsafe."
            },
            {
              number: 18,
              prompt: "A neutral bar in a consumer unit is identified by:",
              options: {
                A: "Its colour only",
                B: "Its position (typically a separate bar from the cpc bar), its labelling per Reg 514, and the colour-coding of the conductors connected to it",
                C: "Random selection",
                D: "Customer preference"
              },
              answer: "B",
              explanation: "Neutral and cpc bars must be distinct, labelled and identifiable. AM2 candidates can identify each at a glance — confusion of N and PE bars in fault-finding leads to wrong fault-clearance assumptions."
            },
            {
              number: 19,
              prompt: "A torque value listed in a manufacturer's data sheet should be:",
              options: {
                A: "Followed approximately",
                B: "Followed exactly using a calibrated torque tool — and recorded in the schedule of test results / commissioning record where called for",
                C: "Ignored",
                D: "Multiplied by 2"
              },
              answer: "B",
              explanation: "Torque values are precise. Calibrated tools achieve them. AM2 candidates document compliance — manufacturer-specified torque is the only acceptable answer to 'how tight should it be'."
            },
            {
              number: 20,
              prompt: "When making off a 4 mm² SWA cable into a 20 mm gland, the candidate must verify:",
              options: {
                A: "Only the gland thread",
                B: "The gland's bedding diameter range, the armour clamping range, and the gland's IP rating — all matched to the cable and the enclosure",
                C: "Only the cable colour",
                D: "Only the depth"
              },
              answer: "B",
              explanation: "Glands are sized to specific cable diameters. Wrong size leads to poor armour clamping (and thus poor cpc) and poor IP sealing. AM2 candidates select correctly using the manufacturer's cable-to-gland chart."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "A torque check on existing terminations during a periodic inspection should:",
              options: {
                A: "Re-tighten every screw maximum hard",
                B: "Be done with a calibrated torque tool to the manufacturer's specification — over-tightening can crush the conductor; under-tightening leaves a poor connection",
                C: "Use random tools",
                D: "Be skipped"
              },
              answer: "B",
              explanation: "Torque-checking is part of periodic inspection. AM2 candidates use calibrated tools and reference the manufacturer's specifications. Over-tightening damages screws and conductors."
            },
            {
              number: 2,
              prompt: "When connecting a flexible cord into a 13 A plug, the cpc should be:",
              options: {
                A: "The same length as L and N",
                B: "Slightly longer than L and N, so that if the cord is pulled, the cpc is the LAST core to disconnect — preserving earth continuity for as long as possible",
                C: "Shorter than L and N",
                D: "Cut at random"
              },
              answer: "B",
              explanation: "BS 1363 detail. The cpc's longer length is a deliberate safety feature. AM2 candidates demonstrate this when terminating cordage."
            },
            {
              number: 3,
              prompt: "A typical 1.0 mm² stranded flex cable terminated into a 13 A plug should:",
              options: {
                A: "Be tinned",
                B: "Be stripped to the correct length, twisted gently to keep strands together, then captured under the screw with all strands inside the terminal",
                C: "Have one strand cut",
                D: "Be soldered"
              },
              answer: "B",
              explanation: "Termination of stranded flex requires twisting the strands together (not tightly) to prevent strays. All strands must be under the clamping face — none outside or behind it."
            },
            {
              number: 4,
              prompt: "When terminating a 4-core SWA's individual cores into a control panel terminal, the candidate should:",
              options: {
                A: "Cut to random lengths",
                B: "Strip each core to the manufacturer's specified length, identify with appropriate sleeving (where colours don't match the standard), and torque to manufacturer's value",
                C: "Combine all four into one terminal",
                D: "Use no identification"
              },
              answer: "B",
              explanation: "SWA cable cores may not match standard wiring colours (older cables: red/yellow/blue + black neutral). Identification sleeves at terminations are required by Reg 514. AM2 candidates apply this consistently."
            },
            {
              number: 5,
              prompt: "A 6 mm² conductor terminated into a 32 A MCB requires the candidate to:",
              options: {
                A: "Use any tool",
                B: "Strip to the manufacturer's specified length, ensure all strands enter the terminal, torque to the manufacturer's specification (typically ~2-2.5 Nm)",
                C: "Cut strands",
                D: "Skip torque"
              },
              answer: "B",
              explanation: "Termination quality determines long-term reliability. Calibrated torque to manufacturer specification is the only correct method. AM2 candidates demonstrate this routinely."
            },
            {
              number: 6,
              prompt: "The candidate must verify that an accessory's terminals can accept:",
              options: {
                A: "Any cable",
                B: "The conductor size, type (solid/stranded), and number — most accessory terminals are stamped with their accepted csa range and conductor count",
                C: "Only one cable",
                D: "Random conductors"
              },
              answer: "B",
              explanation: "Terminal markings (e.g. 1.0-2.5 mm² × 2) tell the installer the terminal's range. AM2 candidates check this — exceeding the terminal's capacity causes loose terminations and overheating."
            },
            {
              number: 7,
              prompt: "A spring-cage terminal block in a control panel:",
              options: {
                A: "Has the same torque as a screw terminal",
                B: "Self-tensions; AM2 candidates focus on conductor preparation (correct strip length, ferrule on stranded conductors) rather than torque",
                C: "Has the highest torque",
                D: "Should be torqued"
              },
              answer: "B",
              explanation: "Spring-cage terminals don't need torque — the spring loads the contact. They do need correct conductor preparation. AM2 candidates work in panels using both terminal families."
            },
            {
              number: 8,
              prompt: "A push-fit (Wago-type) connector terminating a 2.5 mm² stranded conductor without a ferrule:",
              options: {
                A: "Always works",
                B: "May not work — many push-fit connectors require ferrules on stranded conductors per the manufacturer; check the device data sheet",
                C: "Is preferred",
                D: "Is illegal"
              },
              answer: "B",
              explanation: "Wago and similar connectors have specific conductor-acceptance rules. Some require ferrules on stranded cables, some accept solid only. AM2 candidates verify before using."
            },
            {
              number: 9,
              prompt: "A 16 mm² conductor terminated at a sub-distribution board's incoming terminal:",
              options: {
                A: "Uses no torque",
                B: "Is torqued to the manufacturer's specification (typically ~4 Nm); strands must all be captured; the cable should approach the terminal at the right angle to avoid mechanical stress",
                C: "Uses any tool",
                D: "Has no ratings"
              },
              answer: "B",
              explanation: "Larger conductors generate more stored energy at faults. Termination integrity is critical. AM2 candidates verify with calibrated tools and the manufacturer's data."
            },
            {
              number: 10,
              prompt: "When making off the cpc of a 10 mm² SWA cable, the cpc connection at the gland-end is typically:",
              options: {
                A: "Loose",
                B: "Made via a banjo (earth-tag) bolted between the gland and the enclosure, or via the gland's threaded body where the enclosure provides reliable earth — verified by R2",
                C: "Soldered",
                D: "Cable tied"
              },
              answer: "B",
              explanation: "Banjo earth-tags are common where the gland body cannot reliably bond to the enclosure (painted or insulated enclosures). The banjo provides a positive electrical connection. AM2 candidates verify by R2 testing."
            },
            {
              number: 11,
              prompt: "A 13 A switched fused connection unit (SFCU) terminating an inset flex must:",
              options: {
                A: "Use no cord-grip",
                B: "Use the SFCU's integral cord-grip on the flex's outer sheath, with the cores stripped, terminated and the appropriately-rated fuse fitted",
                C: "Use any cord",
                D: "Be soldered"
              },
              answer: "B",
              explanation: "SFCUs have integral cord-grip and a fuse holder. Correct termination uses both. AM2 candidates verify the fuse rating matches the appliance and the cord-grip is on the sheath."
            },
            {
              number: 12,
              prompt: "A junction box used in a fixed-wiring environment must, per Reg 526:",
              options: {
                A: "Be inaccessible by default",
                B: "Be enclosed appropriately, accessible for inspection or be of a maintenance-free type, and have its terminations secured against vibration or thermal effects",
                C: "Have no enclosure",
                D: "Be exposed to weather"
              },
              answer: "B",
              explanation: "Reg 526 covers connection methods. Junction box selection considers accessibility, environment, IP rating and the connection technology (screw, spring, push-fit). AM2 candidates make appropriate choices."
            },
            {
              number: 13,
              prompt: "When terminating a 25 mm² conductor at the consumer unit's main switch, the candidate must:",
              options: {
                A: "Skip torque",
                B: "Strip the manufacturer's specified length, use a ferrule if the manufacturer requires one for stranded conductors, and torque to the device's specified value (typically ~5-6 Nm)",
                C: "Solder",
                D: "Tape"
              },
              answer: "B",
              explanation: "Main switch terminations carry the full installation current. Quality is critical. AM2 candidates use calibrated torque to manufacturer specification."
            },
            {
              number: 14,
              prompt: "A neutral conductor terminated into a consumer unit's neutral bar must:",
              options: {
                A: "Be loose",
                B: "Be torqued to the manufacturer's specification, with green/yellow sleeve removed (it is not a cpc), and the cable colour confirming it as the neutral conductor",
                C: "Be cross-connected with cpc",
                D: "Be tinned"
              },
              answer: "B",
              explanation: "Neutral conductor termination is identical to other conductors — manufacturer torque, correct strip length, correct colour. AM2 candidates do not interchange N and PE."
            },
            {
              number: 15,
              prompt: "A 1 mm² T&E lighting circuit terminated at a ceiling-rose:",
              options: {
                A: "Uses no sleeve",
                B: "Has the bare cpc sleeved green/yellow at the rose's earth terminal, and all live conductors identified per their function (loop terminal, switch wire, etc.)",
                C: "Has only line and neutral",
                D: "Is bare"
              },
              answer: "B",
              explanation: "Lighting circuit terminations include identification of switch wires (often brown sleeve indicates 'switched live') and the neutral, plus sleeved cpc. AM2 candidates terminate cleanly with proper identification."
            },
            {
              number: 16,
              prompt: "A grommet inserted into a back-box knockout protects:",
              options: {
                A: "The wall finish",
                B: "The cable's outer sheath from the cut metal edge of the knockout — sharp edges damage cables under thermal cycling and vibration",
                C: "The accessory",
                D: "The screw"
              },
              answer: "B",
              explanation: "Steel knockouts have sharp edges. Grommets are inexpensive and required. AM2 candidates check this on completion of every accessory installation."
            },
            {
              number: 17,
              prompt: "A 4 mm² stranded conductor terminated under a screw clamp without a ferrule:",
              options: {
                A: "Is preferred",
                B: "Is acceptable if the manufacturer's terminal accepts stranded directly AND the candidate twists the strands lightly to prevent strays — torque to manufacturer specification",
                C: "Is illegal",
                D: "Requires solder"
              },
              answer: "B",
              explanation: "Some terminals accept stranded directly; some require ferrules. AM2 candidates check the manufacturer's data and apply the correct method."
            },
            {
              number: 18,
              prompt: "A flexible cord's cpc must be:",
              options: {
                A: "Identified by colour",
                B: "Identified by green/yellow at every termination, with the cpc made longer than L and N inside any plug or accessory so it disconnects last",
                C: "Cut shortest",
                D: "Wrapped in tape"
              },
              answer: "B",
              explanation: "BS 1363 plug detail. The cpc is longer so it is the last core released if the cord is pulled. AM2 candidates apply this discipline."
            },
            {
              number: 19,
              prompt: "A trailing socket-extension lead must:",
              options: {
                A: "Have no rating",
                B: "Be of a current rating appropriate to the load, with the cord-grip on the sheath, the cpc identified throughout, and the plug correctly fused for the appliance",
                C: "Be unrated",
                D: "Have a 13 A fuse for any load"
              },
              answer: "B",
              explanation: "Extension leads are part of the AM2 termination assessment. The 13 A plug must be fused appropriately for the load — a 1 A appliance should have a 1 A or 3 A fuse to protect the cord."
            },
            {
              number: 20,
              prompt: "When terminating any cable, the AM2 candidate's standard process is:",
              options: {
                A: "Strip and clamp at whatever speed gets the job done, then move on",
                B: "Verify the cable type and size, strip to the manufacturer's specified length, prepare the conductor (twist, ferrule), terminate to the correct torque, sleeve the cpc, and verify by inspection and test",
                C: "Strip, push the conductor in, and tighten until the screwdriver clicks — no further checks required",
                D: "Solder every termination at the consumer unit before mechanically clamping"
              },
              answer: "B",
              explanation: "Termination is a sequence: identify, strip, prepare, terminate, sleeve, verify. AM2 candidates demonstrate every step at every termination."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "A 4 mm² T&E cable's bare cpc terminated at a metal-clad accessory should:",
              options: {
                A: "Be cut bare",
                B: "Be sleeved with green/yellow PVC over its full bare length inside the back-box, then connected to the accessory's earth terminal — and a separate cpc connection made to the metal back-box if not earthed via the fixing-lugs",
                C: "Be exposed",
                D: "Use no sleeve"
              },
              answer: "B",
              explanation: "T&E's cpc is bare; sleeving identifies it and provides insulation. Metal back-boxes need their own cpc connection — typically via fixing-lugs of the accessory or via a fly-lead from the back-box's earth terminal."
            },
            {
              number: 2,
              prompt: "The maximum permitted strip-length variance from the manufacturer's specification is approximately:",
              options: {
                A: "20 mm",
                B: "Within 1 to 2 mm of the specified length — strands not fully captured causes high-resistance contacts; bare conductor outside risks shorts",
                C: "5 cm",
                D: "Any value"
              },
              answer: "B",
              explanation: "Strip length is a tight tolerance. AM2 candidates use a strip tool with depth-stop to achieve consistent results. Sloppy stripping = poor terminations."
            },
            {
              number: 3,
              prompt: "A flexible cord's cores must be:",
              options: {
                A: "Cut to random lengths",
                B: "Trimmed to the correct length so each core reaches its terminal without slack or strain — the cpc cut slightly longer so it disconnects last if the cord is pulled",
                C: "Made identical lengths",
                D: "Twisted together"
              },
              answer: "B",
              explanation: "Flex termination has staggered core lengths intentionally. The cpc is longest. AM2 candidates plan core lengths before stripping."
            },
            {
              number: 4,
              prompt: "When terminating a 32 A MCB onto an aluminium busbar in a board:",
              options: {
                A: "Use copper-only practice",
                B: "Recognise that aluminium-to-copper interfaces require manufacturer-approved methods (anti-oxidation paste, specific torque, sometimes bi-metallic lugs) — improper terminations cause galvanic corrosion and high-resistance joints",
                C: "Use any method",
                D: "Solder"
              },
              answer: "B",
              explanation: "Aluminium and copper at terminations is a known reliability issue. Manufacturer-approved practice prevents galvanic corrosion. AM2 candidates may face mixed-conductor terminations on industrial boards."
            },
            {
              number: 5,
              prompt: "A torque-screwdriver's calibration certificate is renewed:",
              options: {
                A: "Never",
                B: "Typically annually (or per the manufacturer's recommendation), with the certificate retained as evidence of measurement traceability",
                C: "Once a decade",
                D: "Only on request"
              },
              answer: "B",
              explanation: "Calibrated tools require periodic verification. Annual is typical for trade tools. AM2 candidates working under quality systems may be expected to confirm calibration before use."
            },
            {
              number: 6,
              prompt: "A maintenance-free junction box (per Reg 526.3 exception) is recognised because:",
              options: {
                A: "It is sealed",
                B: "It is designed to require no future inspection or tightening — the connection technology (e.g. brass screw with crimped pre-formed conductor, push-in lever connector) maintains performance for the life of the cable",
                C: "It is hidden",
                D: "It is plastic"
              },
              answer: "B",
              explanation: "Maintenance-free types are tested and certified. They permit concealed installation under Reg 526.3. AM2 candidates know the exceptions and can identify maintenance-free products."
            },
            {
              number: 7,
              prompt: "A 'pinch' on a flex inside a plug is caused by:",
              options: {
                A: "Correct termination",
                B: "The cord-grip clamping the cores instead of the outer sheath — preventing flex movement and putting the conductor under stress",
                C: "Loose grip",
                D: "Sheath stripped too long"
              },
              answer: "B",
              explanation: "Cord-grip on the cores is incorrect. The cord must enter the plug body with the sheath gripped and the cores free to flex inside. AM2 candidates inspect every plug termination."
            },
            {
              number: 8,
              prompt: "When connecting a 6 mm² conductor to a 40 A MCB:",
              options: {
                A: "No torque required",
                B: "Strip the manufacturer's specified length, ensure all strands are captured, torque to the device's specified value, and verify by visual and (where applicable) tug-test",
                C: "Hand-tighten",
                D: "Solder"
              },
              answer: "B",
              explanation: "Larger conductors need careful termination. Manufacturer-specified torque achieves repeatable results. AM2 candidates verify each termination — the assessor watches for it."
            },
            {
              number: 9,
              prompt: "A 1.5 mm² lighting circuit's cpc at a switch:",
              options: {
                A: "Is unsleeved",
                B: "Is sleeved green/yellow and connected to the switch's earth terminal (where present) AND to a metal back-box's earth via a fly-lead or accessory's lugs",
                C: "Is omitted",
                D: "Is wrapped in tape"
              },
              answer: "B",
              explanation: "Plastic switches don't need an earth terminal but the cpc still travels through to the next accessory. Metal switches and back-boxes need positive earthing. AM2 candidates apply correctly."
            },
            {
              number: 10,
              prompt: "A back-box for a metal-clad accessory must be:",
              options: {
                A: "Plastic only",
                B: "Of compatible material (typically pressed steel) and earthed; cable-entry knockouts grommetted; deep enough to accommodate the cable's bend radius",
                C: "Decorative",
                D: "Painted"
              },
              answer: "B",
              explanation: "Back-box selection considers material, size and entry. Reg 543 requires earthing of metal enclosures. AM2 candidates select correctly."
            },
            {
              number: 11,
              prompt: "A junction box for a final-circuit termination should:",
              options: {
                A: "Use loose connections",
                B: "Have terminals rated for the design current, accept the cable's csa, be appropriate for the environment (IP rating), and remain accessible (or be a maintenance-free type)",
                C: "Be inaccessible",
                D: "Have no terminals"
              },
              answer: "B",
              explanation: "Junction box selection is a design step. Capacity, current rating, environment and accessibility all matter. AM2 candidates select correctly and document the choice."
            },
            {
              number: 12,
              prompt: "A 'snake-skin' insulation pattern on a removed cable's outer sheath suggests:",
              options: {
                A: "Normal wear",
                B: "Heat damage from prolonged overload or thermal cycling at a poor termination — a sign the cable has been operating beyond its de-rated capacity",
                C: "Manufacturing defect",
                D: "UV exposure"
              },
              answer: "B",
              explanation: "Heat-damaged sheath is a fault-find clue. The candidate traces back to a poor termination or grouped overheating. AM2 fault-find assessments may include this kind of clue."
            },
            {
              number: 13,
              prompt: "A neutral terminal in a consumer unit's bus-bar:",
              options: {
                A: "Is bonded to cpc",
                B: "Is electrically separate from the cpc bar — connecting them would create a parallel earth path and disturb the protective measure (especially on TT or where RCDs are used)",
                C: "Is the same as cpc",
                D: "Is unconnected"
              },
              answer: "B",
              explanation: "Neutral and protective conductor bars must be separate downstream of the main terminal (CNE conductor is split at the cut-out on TN-C-S). Bonding them anywhere else creates parallel paths and breaks RCD operation."
            },
            {
              number: 14,
              prompt: "A 13 A plug fitted to a 1 mm² flex feeding a 100 W table lamp:",
              options: {
                A: "Should have a 13 A fuse",
                B: "Should have a 3 A fuse — fuses are sized to protect the cord, not the appliance; the smallest fuse that the appliance can use is best practice",
                C: "Needs no fuse",
                D: "Should have a 32 A fuse"
              },
              answer: "B",
              explanation: "Plug fuses protect the flexible cord from a fault. A 100 W lamp on 1 mm² flex needs a 3 A fuse — the smallest BS 1362 fuse practical, providing the best protection."
            },
            {
              number: 15,
              prompt: "A control-panel terminal block torqued to the manufacturer's spec but later showing signs of overheating suggests:",
              options: {
                A: "Correct termination",
                B: "A cable too small for the load (insufficient csa), or a poor crimp/ferrule on a stranded conductor, or a corrosion problem at the contact",
                C: "Manufacturing defect only",
                D: "No issue"
              },
              answer: "B",
              explanation: "Even correct torque cannot fix a fundamentally undersized cable or a poor preparation. AM2 candidates investigate the whole system — torque is necessary but not sufficient."
            },
            {
              number: 16,
              prompt: "A 'duster' (cleaning brush) at the consumer unit:",
              options: {
                A: "Is decoration",
                B: "Is used to remove insulation chips, dust and debris before energising — debris in terminals can cause faults and arcing",
                C: "Carries current",
                D: "Replaces a sleeve"
              },
              answer: "B",
              explanation: "Cleanliness in a CU before energising is part of professional practice. Loose debris can short between conductors. AM2 candidates leave the work area clean before re-energisation."
            },
            {
              number: 17,
              prompt: "A spring-loaded terminal in an emergency-stop circuit must:",
              options: {
                A: "Use solid conductor only",
                B: "Use the manufacturer's recommended conductor type (often ferrule on stranded, solid for low-csa) — emergency-stop reliability is safety-critical",
                C: "Use any conductor",
                D: "Use only AAC"
              },
              answer: "B",
              explanation: "Safety-critical circuits demand termination quality. Manufacturer's data is the reference. AM2 candidates working on emergency-stop circuits must follow specific guidance."
            },
            {
              number: 18,
              prompt: "A flex cord's cpc terminated at a 13 A plug using a moulded plug:",
              options: {
                A: "Has no cpc",
                B: "Is sealed inside the moulded plug at the manufacturer's stage — the cpc is connected and verified at the factory; AM2 candidates working on moulded plugs typically replace the entire plug rather than re-terminate",
                C: "Is loose",
                D: "Uses a different colour"
              },
              answer: "B",
              explanation: "Moulded plugs are not user-terminable. Damage requires plug replacement (cut off and re-fit a BS 1363 rewireable plug). AM2 candidates know this constraint."
            },
            {
              number: 19,
              prompt: "When connecting an external SWA tail to a sub-mains feed, the candidate must:",
              options: {
                A: "Use loose conductors",
                B: "Use crimped lugs (correct size, calibrated tool, correct die), torqued to manufacturer's value, with all strands captured under the lug",
                C: "Solder",
                D: "Tape"
              },
              answer: "B",
              explanation: "Larger sub-mains terminations use crimped lugs as the standard. Calibrated crimping with correct dies is essential. AM2 candidates may be marked on lug technique."
            },
            {
              number: 20,
              prompt: "A 'dead-test' on a newly-terminated circuit will:",
              options: {
                A: "Verify torque",
                B: "Verify continuity (R1+R2), insulation resistance and polarity — but does NOT directly confirm torque has been applied; physical inspection and torque-tool use during the work is the evidence",
                C: "Replace torque measurement",
                D: "Be unnecessary"
              },
              answer: "B",
              explanation: "Dead-tests verify electrical performance, not mechanical torque. Torque is verified during installation. Both are required. AM2 candidates record both — the schedule of test results and the torque-record (where required)."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "A control-panel terminal block in a humid environment requires:",
              options: {
                A: "No special considerations",
                B: "Terminals appropriate for the environment (typically tin-plated or appropriate-rated for the climate), enclosed in an IP-rated housing, with consideration of any conformal coating on PCBs",
                C: "Cable colour change only",
                D: "Open enclosure"
              },
              answer: "B",
              explanation: "Humid environments accelerate corrosion at terminations. Tin-plated terminals and IP-rated enclosures protect against this. AM2 candidates working on outdoor or humid panels must specify correctly."
            },
            {
              number: 2,
              prompt: "A flexible-cord-to-fixed-wiring transition (e.g. at a fixed appliance like a hob) must:",
              options: {
                A: "Use any joint",
                B: "Be made via a connection-unit (SFCU or fused connection unit), or a permanently-installed terminal box, with correct cord-grip and fuse rating",
                C: "Be made by twisting wires together",
                D: "Be soldered"
              },
              answer: "B",
              explanation: "The transition is a recognised termination point. SFCUs provide the right enclosure, terminals, fuse and cord-grip. AM2 candidates terminate fixed appliances correctly."
            },
            {
              number: 3,
              prompt: "When stripping insulation, the candidate must avoid:",
              options: {
                A: "Using a tool",
                B: "Nicking the conductor — every strand must remain at full csa to avoid stress concentrations that fail later",
                C: "Removing insulation",
                D: "Twisting strands"
              },
              answer: "B",
              explanation: "Nicked strands lower the conductor's effective csa and create fatigue points. Calibrated stripping tools prevent this. AM2 candidates inspect their work for nicks."
            },
            {
              number: 4,
              prompt: "A 6 mm² cpc terminated at the consumer unit's MET:",
              options: {
                A: "Is loose",
                B: "Is torqued to the manufacturer's specification, sleeved green/yellow at the visible part, and verified by R2 testing",
                C: "Has no torque",
                D: "Has no sleeve"
              },
              answer: "B",
              explanation: "MET terminations are crucial — the entire installation's earth path leads here. Torque and sleeving are non-negotiable; R2 testing verifies the connection."
            },
            {
              number: 5,
              prompt: "A 'banjo' (earth-tag) at an SWA gland:",
              options: {
                A: "Is decorative",
                B: "Provides a positive bond between the gland body and the enclosure earth terminal where the enclosure surface (paint, finish) might present a high-resistance contact via the gland nut alone",
                C: "Carries no current",
                D: "Is optional"
              },
              answer: "B",
              explanation: "Banjos are required where the gland nut cannot make a reliable bond to the enclosure. They provide a screw-mount earth-tag connection. AM2 candidates check whether the banjo is required for each enclosure."
            },
            {
              number: 6,
              prompt: "A spring-cage terminal block in a control panel terminating a 1.5 mm² stranded conductor:",
              options: {
                A: "Requires no preparation",
                B: "Requires a ferrule (bootlace pin) so the strands are presented as a single solid pin to the spring-cage; without the ferrule, individual strands may not all be clamped",
                C: "Uses solder",
                D: "Uses bare strands"
              },
              answer: "B",
              explanation: "Stranded conductors in spring-cage terminals risk uneven clamping. Ferrules consolidate strands into a controlled pin. AM2 candidates use ferrules where the manufacturer recommends."
            },
            {
              number: 7,
              prompt: "A terminated cable that 'feels' loose when wiggled:",
              options: {
                A: "Is fine",
                B: "Has been incorrectly terminated — re-terminate, applying correct torque, and verify by tug-test or torque check",
                C: "Should be ignored",
                D: "Is normal"
              },
              answer: "B",
              explanation: "Termination tightness is a quality check. AM2 candidates re-terminate any termination that fails the basic tug-test. Loose connections cause overheating, arcing and faults."
            },
            {
              number: 8,
              prompt: "A 25 mm² SWA's armour terminated through a CW gland:",
              options: {
                A: "Has no clamping",
                B: "Is dressed under the gland cone where the gland nut compresses it firmly between the cone and the gland-body threads — providing reliable cpc continuity",
                C: "Is taped only",
                D: "Is glued"
              },
              answer: "B",
              explanation: "CW glands clamp the armour mechanically and electrically. Correct dressing under the cone is essential. AM2 candidates demonstrate this on the practical test."
            },
            {
              number: 9,
              prompt: "A green/yellow PVC sleeve over a bare cpc satisfies:",
              options: {
                A: "No regulation",
                B: "Reg 514.4 (identification of cpc) at every visible point, AND provides insulation between the bare cpc and adjacent live conductors inside the enclosure",
                C: "Reg 411 only",
                D: "No requirement"
              },
              answer: "B",
              explanation: "Reg 514 is identification; the sleeve also provides insulation. Both functions are required. AM2 candidates apply sleeves consistently."
            },
            {
              number: 10,
              prompt: "When terminating a 4 mm² conductor, the candidate must verify:",
              options: {
                A: "Only the colour",
                B: "The manufacturer's specified strip length, terminal capacity for the conductor, and torque value — applying each correctly",
                C: "Random parameters",
                D: "Customer preference"
              },
              answer: "B",
              explanation: "Termination is a sequence of manufacturer-specified parameters. AM2 candidates apply each correctly — strip length, terminal type, torque value."
            },
            {
              number: 11,
              prompt: "A 13 A plug rewired by the candidate should be tested by:",
              options: {
                A: "No test",
                B: "Visual inspection (correct colours, cord-grip on sheath, fuse rating appropriate), polarity test (L=brown, N=blue, cpc=green/yellow correctly identified) and continuity from cpc-pin to the cord's cpc",
                C: "Just visual",
                D: "Just continuity"
              },
              answer: "B",
              explanation: "Plug-rewiring is a small task that AM2 marks routinely. Visual + polarity + continuity = confidence in the termination. Errors at this scale are common."
            },
            {
              number: 12,
              prompt: "A 'fly-lead' bonding a metal back-box to the accessory's earth terminal must:",
              options: {
                A: "Be loose",
                B: "Be of an appropriate csa (typically 1.5 mm² minimum for back-box bonding), sleeved green/yellow throughout, terminated at both ends to the correct screws",
                C: "Be uninsulated",
                D: "Be twisted only"
              },
              answer: "B",
              explanation: "Fly-leads are short bonds. They must be terminated correctly at both ends. AM2 candidates use 1.5 mm² minimum to provide adequate fault current capacity."
            },
            {
              number: 13,
              prompt: "A maintenance-free push-in connector (e.g. Wago 221 series):",
              options: {
                A: "Cannot be used",
                B: "Is permitted under Reg 526.3 for inaccessible junctions; the candidate verifies acceptable conductor types/sizes per the manufacturer and applies the correct strip length",
                C: "Is for solder use",
                D: "Is not insulated"
              },
              answer: "B",
              explanation: "Wago 221-series and similar are tested as maintenance-free. Reg 526.3 permits their use in concealed positions. AM2 candidates know the exception and the manufacturer's specification."
            },
            {
              number: 14,
              prompt: "A 32 A radial circuit's terminations at a 4 mm² T&E:",
              options: {
                A: "Use no torque",
                B: "Use the manufacturer's torque specification (typically ~2-2.5 Nm at the OCPD), with green/yellow sleeve on the cpc and verified continuity",
                C: "Use random torque",
                D: "Skip cpc"
              },
              answer: "B",
              explanation: "AM2 termination practice = manufacturer torque + sleeve + continuity verification. AM2 candidates apply this routinely."
            },
            {
              number: 15,
              prompt: "A 'dressing' of conductors inside a consumer unit means:",
              options: {
                A: "Cleaning",
                B: "Routing the cores neatly through the bus-bar arrangement, with appropriate radius bends, no crossed cores, and clear access to each terminal",
                C: "Adding decoration",
                D: "Random arrangement"
              },
              answer: "B",
              explanation: "Dressing is professional craft. Neat dressing makes future maintenance easier, looks professional and reduces strain on terminations. AM2 marks this routinely."
            },
            {
              number: 16,
              prompt: "A torque tool used at multiple devices must be:",
              options: {
                A: "Set once",
                B: "Re-set to the correct torque for each device — manufacturer torques vary between MCB makes, between MCB and main switch, and between conductor sizes",
                C: "Used at one torque",
                D: "Set to maximum"
              },
              answer: "B",
              explanation: "Torque settings vary. AM2 candidates check the device data sheet and re-set the tool. A single 'good' torque does not exist."
            },
            {
              number: 17,
              prompt: "A 'tab' or 'fast-on' connector (e.g. on appliance terminals) terminated by the candidate:",
              options: {
                A: "Is left loose",
                B: "Is sized correctly for the conductor and tab, crimped with the correct die in a calibrated tool, and verified by visual and tug-test",
                C: "Is soldered",
                D: "Is glued"
              },
              answer: "B",
              explanation: "Fast-on connectors are common at appliance terminations. Crimp quality is critical — under-crimped joints come loose under vibration. AM2 candidates apply calibrated crimping."
            },
            {
              number: 18,
              prompt: "A 'cap' or 'shroud' fitted over an SWA gland:",
              options: {
                A: "Is decorative",
                B: "Restores the IP rating of the gland-to-enclosure interface (especially in outdoor or wet locations) and provides mechanical protection of the gland",
                C: "Is optional",
                D: "Is removed"
              },
              answer: "B",
              explanation: "IP-rated gland systems include the shroud. AM2 candidates verify the shroud is fitted before final commissioning."
            },
            {
              number: 19,
              prompt: "A flexible cord terminated at a fixed-equipment terminal block must:",
              options: {
                A: "Be loose",
                B: "Be terminated with all strands captured (twisted gently or with a ferrule), torqued to the device specification, and the cord supported by the device's cord-grip",
                C: "Be soldered",
                D: "Use no grip"
              },
              answer: "B",
              explanation: "Fixed equipment with cord entry — boilers, immersion heaters, hobs — must have cord-grip on the sheath and proper conductor termination. AM2 candidates apply both."
            },
            {
              number: 20,
              prompt: "A torqued termination, six months later, should:",
              options: {
                A: "Loosen by design",
                B: "Remain at its installed torque if the conductor and terminal are correctly specified — 'creep' (loosening over time) suggests inappropriate conductor type or terminal not rated for the conductor",
                C: "Always loosen",
                D: "Always tighten"
              },
              answer: "B",
              explanation: "Quality terminations stay tight. Loosening over time is a fault — typically traced to a stranded conductor in a screw terminal without ferrule, or aluminium-to-copper interfaces, or vibration without proper preparation. AM2 candidates investigate."
            }
          ]
        }
      ]
    },
    {
      id: "section-4",
      title: "Section 4 — Inspection, Testing & Certification",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "The full GN3 sequence of DEAD tests on a new installation is:",
              options: {
                A: "Continuity of protective conductors (and main/supplementary bonding) → continuity of ring final conductors (r1, rn, r2) → insulation resistance → polarity (dead) → earth electrode resistance where applicable",
                B: "Insulation resistance → continuity → polarity",
                C: "Polarity → insulation resistance → continuity",
                D: "Functional testing → insulation resistance → continuity"
              },
              answer: "A",
              explanation: "GN3 sequence. cpc continuity is first so the circuit is safe for subsequent tests; the ring-final end-to-end values come next; IR and polarity dead follow; earth electrode resistance where applicable. Live tests are done only after all dead tests pass."
            },
            {
              number: 2,
              prompt: "To verify the continuity of a main protective bonding conductor from the MET to the incoming metallic water service using a wander-lead R2 test you should:",
              options: {
                A: "Connect the test leads between the line conductor at the consumer unit and the pipework",
                B: "Null the wander-lead resistance first, then connect one lead at the MET and the other at the clamp on the pipework, and read the resistance directly",
                C: "Use a 500 V DC insulation resistance tester between MET and pipe",
                D: "Measure between the outside tap and the boiler case"
              },
              answer: "B",
              explanation: "Wander-lead R2: null the leads so the instrument subtracts the wander-lead resistance, then measure from MET to the bonded part. The reading is the resistance of the bonding conductor alone. For a short 10 mm² run, expect a value well under 0.05 Ω."
            },
            {
              number: 3,
              prompt: "A 500 V DC insulation resistance test on a 230 V lighting final circuit, with live conductors linked and measured to the cpc, reads 0.8 MΩ. The correct action is to:",
              options: {
                A: "Record as a pass — above the 0.5 MΩ SELV minimum",
                B: "Record as a FAIL — below the 1.0 MΩ LV minimum in Table 64; isolate, progressively disconnect accessories, dimmers, SPDs or lamps to localise, rectify the fault, and retest",
                C: "Record as a healthy reading typical of a new circuit",
                D: "Repeat the test at 250 V DC and hope for a better reading"
              },
              answer: "B",
              explanation: "Table 64, BS 7671: 1.0 MΩ is the minimum for a 230 V LV circuit. 0.8 MΩ is a fail. Typical causes: pinched/nicked cable at a back-box grommet, moisture ingress, or voltage-sensitive equipment left in circuit (dimmers, SPDs, electronic RCBOs, lamps). Localise by section."
            },
            {
              number: 4,
              prompt: "During a live polarity check at a switched lampholder, the lamp extinguishes when the wall switch is operated, but a voltage indicator shows 230 V between the lamp's live pin and earth even when the switch is OFF. The most likely fault is:",
              options: {
                A: "Correct wiring — the residual 230 V is normal capacitive coupling on a long lighting circuit and can be ignored",
                B: "The single-pole switch has been wired into the NEUTRAL conductor rather than the line — a polarity fault requiring immediate correction",
                C: "An RCD on the lighting circuit has tripped, leaving the line conductor at supply potential through the open contacts",
                D: "The lamp is simply loose in the holder, allowing a small leakage current to register on the voltage indicator"
              },
              answer: "B",
              explanation: "A single-pole switch must only interrupt the line conductor (Reg 132.14 / 537). If it interrupts the neutral instead, the accessory remains live with the switch off — very dangerous during lamp changes."
            },
            {
              number: 5,
              prompt: "The Schedule of Test Results must, as a minimum, record for each circuit:",
              options: {
                A: "Only the RCD disconnection times at 0.5×, 1× and 5× IΔn, since these are the safety-critical figures that BS 7671 calls up by name",
                B: "Circuit reference, conductor csa, OCPD type and rating, R1+R2 (or R2 by wander lead), ring r1/rn/r2 where applicable, insulation resistance values, polarity confirmation, Zs (measured or calculated), RCD times at 1× and 5× IΔn (and 0.5× where recorded), and functional test confirmation",
                C: "A pass/fail tick per circuit, with the underlying numerical values retained on the inspector's instrument download as the audit record",
                D: "A written narrative of the test session signed by the duty holder, in place of the per-circuit numerical values that the EIC would otherwise reference"
              },
              answer: "B",
              explanation: "The Schedule of Test Results is the numerical evidence behind the EIC or EICR and the baseline against which future periodic tests will be compared. Missing entries can invalidate the certificate and make the next inspection harder."
            },
            {
              number: 6,
              prompt: "An Electrical Installation Certificate for new work is signed, in separate signature blocks, by the person(s) responsible for:",
              options: {
                A: "The customer only, who confirms by signature that the work has been completed to their satisfaction",
                B: "Design, construction, and inspection & testing — each as a distinct signed responsibility (one competent person may sign all three on smaller projects)",
                C: "Only the DNO engineer who has approved the connection of the installation to the public LV distribution network",
                D: "Only the local-authority building control officer for notifiable Part P work in dwellings"
              },
              answer: "B",
              explanation: "Three distinct signature blocks on the EIC keep responsibility traceable, even when a single competent person discharges all three roles. Each signatory certifies, for their part, that the work complies with BS 7671 at the date of certification."
            },
            {
              number: 7,
              prompt: "The acceptance criterion for a 30 mA general-type RCD at 5×IΔn is:",
              options: {
                A: "Trip within 200 ms",
                B: "Trip within 40 ms (and not more than 300 ms at 1×IΔn, with no trip within 2 s at 0.5×IΔn)",
                C: "Trip within 1 s",
                D: "No trip required"
              },
              answer: "B",
              explanation: "Reg 415 and BS 7671 acceptance criteria for general-type RCDs. AM2 candidates must know these cold: 0.5× = no trip in 2 s, 1× = ≤300 ms, 5× = ≤40 ms. S-type values are different (delayed)."
            },
            {
              number: 8,
              prompt: "A measured Zs reading must:",
              options: {
                A: "Equal the tabulated value exactly",
                B: "Be at or below the corrected maximum Zs from Table 41.3 (typically 80% of tabulated, or use the formula 0.8 × Zs(tab) where the cable temperature factor is applied) — accounting for the fact tabulated values are at 80°C cable temperature and tests are at ambient",
                C: "Always exceed tabulated values",
                D: "Be ignored"
              },
              answer: "B",
              explanation: "Tabulated Zs values are at full operating temperature. Tests are usually at ambient. The 0.8 correction (or use of corrected tables) compensates. AM2 candidates apply the correction or use the corrected tables."
            },
            {
              number: 9,
              prompt: "A continuity test of a main protective bonding conductor, after nulling the wander-lead, gives a reading of 0.18 Ω at the boiler casing. The bonding conductor is 10 mm² × ~5 m length. The reading is:",
              options: {
                A: "A pass — within typical expectations for the run",
                B: "A fail — too high; investigate the joint at the bonding clamp or the conductor's continuity",
                C: "Inconclusive",
                D: "Not relevant"
              },
              answer: "A",
              explanation: "10 mm² copper at ~5 m has a tabulated resistance of about 0.018 Ω/m → ~0.09 Ω. The reading 0.18 Ω is double that — typically caused by a poor joint or corroded clamp, but acceptable in some cases. AM2 candidates investigate elevated readings."
            },
            {
              number: 10,
              prompt: "A polarity test at every accessory:",
              options: {
                A: "Is optional",
                B: "Is mandatory at every accessory and end-of-circuit, verifying that line is at the line terminal and neutral is at the neutral terminal — including switches in the line conductor only",
                C: "Is decorative",
                D: "Is replaced by IR test"
              },
              answer: "B",
              explanation: "Reg 612 and GN3 require polarity at every accessory. Switches must interrupt line; sockets must have line at the line pin. AM2 candidates verify systematically."
            },
            {
              number: 11,
              prompt: "The 'live' polarity test at the consumer unit verifies:",
              options: {
                A: "Only N-E voltage",
                B: "That line is at the line terminal of every OCPD, neutral is at the neutral bar, and that the supply polarity arriving at the origin is correct (L-E ~230 V; N-E near 0 V)",
                C: "Only the cable colour",
                D: "L-N only"
              },
              answer: "B",
              explanation: "Live polarity at origin checks the supply has not been transposed (e.g. by DNO error). It is part of the live-test sequence after dead testing is complete."
            },
            {
              number: 12,
              prompt: "A new circuit's R1+R2 measurement should be recorded:",
              options: {
                A: "On the EIC narrative",
                B: "In the Schedule of Test Results, alongside the cable's tabulated Zs, the device's tripping characteristics, and the corrected maximum Zs — providing the complete picture of fault loop performance",
                C: "Only verbally",
                D: "On the customer's invoice"
              },
              answer: "B",
              explanation: "Schedule of Test Results captures the numerical evidence. R1+R2 (or R2 by wander) is one of the recorded values for each circuit. AM2 candidates record completely."
            },
            {
              number: 13,
              prompt: "The minimum insulation resistance for a 230 V LV circuit, per BS 7671 Table 64, is:",
              options: {
                A: "0.5 MΩ",
                B: "1.0 MΩ at 500 V DC test voltage",
                C: "0.25 MΩ",
                D: "100 MΩ"
              },
              answer: "B",
              explanation: "Table 64. 230 V LV circuit minimum is 1.0 MΩ at 500 V DC. SELV/PELV minimum is 0.5 MΩ at 250 V DC. AM2 candidates know these cold."
            },
            {
              number: 14,
              prompt: "A polarity test using a Bell-set:",
              options: {
                A: "Confirms only continuity",
                B: "Cannot replace the polarity test required by BS 7671 — a Bell-set is for continuity only; polarity is verified by approved live or dead polarity tests with a calibrated instrument",
                C: "Replaces all tests",
                D: "Confirms IR"
              },
              answer: "B",
              explanation: "Bell-sets are continuity-only tools. Polarity is a separate test that must use a method capable of confirming the conductor's identity. AM2 candidates use the right tool."
            },
            {
              number: 15,
              prompt: "The functional test of a circuit confirms:",
              options: {
                A: "Only that the lights work",
                B: "That all switches, RCDs, RCBOs, lighting controllers and protective devices operate as intended; functional testing is the last step of the verification sequence after Zs and RCD tests",
                C: "Only continuity",
                D: "Only IR"
              },
              answer: "B",
              explanation: "Functional testing is the final commissioning check. Every switch, every RCD test button, every dimmer, every contactor must be exercised. AM2 candidates record the functional test result."
            },
            {
              number: 16,
              prompt: "The test that detects a borrowed neutral on a circuit during dead testing is:",
              options: {
                A: "Polarity",
                B: "Insulation resistance between neutral and earth — a low N-E IR reading suggests the neutral is electrically connected to another circuit's neutral or to earth",
                C: "Continuity only",
                D: "Functional"
              },
              answer: "B",
              explanation: "Borrowed neutrals are detected by N-E IR. A correctly-isolated circuit with no borrowed neutral should show very high N-E IR. Low values indicate cross-connection — investigate before energising."
            },
            {
              number: 17,
              prompt: "A new ring final circuit's R1+R2 measurement at the test points should be approximately:",
              options: {
                A: "Zero ohms at every socket — anything else indicates a fault",
                B: "(r1+r2)/4 with all sockets cross-connected; small variation around the ring confirms a balanced, correctly-wired ring",
                C: "Infinity, because cross-connection isolates the test points",
                D: "Equal to (r1+r2) at every socket on the ring"
              },
              answer: "B",
              explanation: "Cross-connected ring R1+R2 values should be near (r1+r2)/4. Variation of more than ~0.05 Ω suggests a break, an interconnection, or a spur-from-spur. AM2 candidates analyse this carefully."
            },
            {
              number: 18,
              prompt: "The corrected (allowed) maximum Zs from a test instrument's table, for a Type B 32 A MCB on a 230 V circuit:",
              options: {
                A: "Equals the tabulated maximum exactly",
                B: "Is approximately 80% of the tabulated value (e.g. tabulated 1.44 Ω → corrected 1.15 Ω) — to allow for cable temperature rise during the fault",
                C: "Is twice the tabulated",
                D: "Is ignored"
              },
              answer: "B",
              explanation: "Tabulated max Zs is at 80°C cable temperature. The 0.8 correction allows for ambient testing. AM2 candidates apply this correction or use a corrected-table instrument."
            },
            {
              number: 19,
              prompt: "The Schedule of Inspections records:",
              options: {
                A: "Numerical test values only",
                B: "Visual inspection items per Section 651 — e.g. correct identification, mechanical protection, accessory selection, presence of warning notices, etc.",
                C: "RCD timings only",
                D: "Customer satisfaction"
              },
              answer: "B",
              explanation: "Schedule of Inspections complements the Schedule of Test Results. Visual checks (cable IDs, sleeves, bonding, segregation, accessories, notices) are recorded here. AM2 candidates record both."
            },
            {
              number: 20,
              prompt: "After completing all dead and live tests with no faults, the candidate:",
              options: {
                A: "Walks away",
                B: "Completes the EIC, both schedules and any required Part P notification, hands the documents to the customer/duty-holder, and explains operation and maintenance information",
                C: "Sends an email",
                D: "Skips paperwork"
              },
              answer: "B",
              explanation: "Handover is the final step. EIC + schedules + Part P + O&M = complete documentation pack. AM2 candidates demonstrate this is delivered correctly."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "The dead-test sequence under GN3 starts with continuity because:",
              options: {
                A: "It is the easiest test",
                B: "A safe cpc must exist before any subsequent tests can be safely conducted — and it confirms the cpc back to the MET so any later fault can be cleared by ADS",
                C: "It is required by RCDs",
                D: "It is decorative"
              },
              answer: "B",
              explanation: "GN3 sequence is risk-ordered. Continuity first proves the cpc; IR confirms insulation; polarity confirms identification. Each step makes the next safer. AM2 candidates explain WHY the order matters."
            },
            {
              number: 2,
              prompt: "A measured Zs of 1.40 Ω on a Type C 32 A MCB circuit (tabulated max 0.72 Ω):",
              options: {
                A: "Is a pass",
                B: "Is a FAIL — even with the 0.8 correction, the corrected max would be 0.58 Ω; investigate the cable, cpc termination, MET connection or use of RCD additional protection",
                C: "Is acceptable",
                D: "Should be doubled"
              },
              answer: "B",
              explanation: "Type C MCBs have a higher magnetic threshold (5-10× rated current) so demand a lower max Zs than Type B. AM2 candidates know this distinction."
            },
            {
              number: 3,
              prompt: "The IR test for a single-phase final circuit is performed:",
              options: {
                A: "L-E only",
                B: "L-N (live conductors linked) to E, AND L to N — all readings should exceed 1.0 MΩ; some test instruments offer L-PE (auto-link) and PE-N options",
                C: "L-PE only",
                D: "Only when convenient"
              },
              answer: "B",
              explanation: "Three-test approach: L-N (verify insulation between live conductors), L-PE (verify insulation to earth), N-PE (verify the neutral is not borrowed/shorted to earth). All must exceed Table 64 minimums."
            },
            {
              number: 4,
              prompt: "A polarity confirmation at a fixed lamp holder verifies that:",
              options: {
                A: "L is at any pin",
                B: "Line is at the centre/contact pin and Neutral is at the screw/shell — preventing a finger from contacting line when changing the lamp",
                C: "Either pin can be live",
                D: "Both pins are live"
              },
              answer: "B",
              explanation: "BS 1363, BS EN 60598 and other accessory standards specify pin polarity. The shell of an Edison-screw holder is intended to be the neutral so the user changing the lamp does not contact line. AM2 candidates verify polarity at each accessory."
            },
            {
              number: 5,
              prompt: "A Schedule of Test Results without the recorded RCD test times:",
              options: {
                A: "Is acceptable",
                B: "Is incomplete — RCD performance is critical safety data and must be recorded; the EIC supported by an incomplete schedule may not be valid",
                C: "Is the customer's choice",
                D: "Is industry standard"
              },
              answer: "B",
              explanation: "RCD times are mandatory data on the SoTR. Missing values invalidate the EIC. AM2 candidates record every RCD: 0.5×, 1×, 5× IΔn for general type."
            },
            {
              number: 6,
              prompt: "The earth electrode resistance for a TT installation should typically be:",
              options: {
                A: "Below 1666 Ω (calculation: 50 V / 30 mA)",
                B: "Below 200 Ω as a stable repeatable value (for reliable RCD operation), with the design value to suit RCD ratings — for a 30 mA RCD the calculation 50 V / 30 mA = 1666 Ω is the maximum, but practice favours far lower values",
                C: "Below 1 Ω always",
                D: "Equal to Ze"
              },
              answer: "B",
              explanation: "TT systems use earth electrodes. RA × IΔn ≤ 50 V means a 30 mA RCD allows up to ~1666 Ω. In practice, electrodes below 200 Ω are more stable and reliable. AM2 candidates know the calculation and the practical aim."
            },
            {
              number: 7,
              prompt: "A test instrument used for IR testing must:",
              options: {
                A: "Generate any voltage",
                B: "Generate the test voltage specified in BS 7671 Table 64 (typically 500 V DC for LV, 250 V DC for SELV) and have a calibration certificate",
                C: "Use AC voltage",
                D: "Be a multimeter"
              },
              answer: "B",
              explanation: "IR test voltage is specified. Calibrated IR testers are essential. AM2 candidates use approved instruments with current calibration."
            },
            {
              number: 8,
              prompt: "The R1+R2 measurement of a final circuit:",
              options: {
                A: "Is independent of cable length",
                B: "Is the sum of the line conductor resistance and the cpc resistance from the OCPD to the furthest point of the circuit — directly proportional to circuit length and inversely to conductor csa",
                C: "Is the IR value",
                D: "Is irrelevant"
              },
              answer: "B",
              explanation: "R1+R2 = R_line + R_cpc from OCPD to the test point. This is the resistance contribution to Zs from the circuit. Long circuits or undersized cpcs raise R1+R2."
            },
            {
              number: 9,
              prompt: "When the candidate measures Ze at the origin:",
              options: {
                A: "Use 250 V DC",
                B: "Use the loop-impedance test function on the multifunction tester between the supply L and the MET, with all bonding disconnected (or use the GN3 'Ze with bonding connected' method as appropriate)",
                C: "Disconnect the cpc",
                D: "Skip Ze"
              },
              answer: "B",
              explanation: "Ze is the supply-side fault loop impedance. Test with appropriate instrument function. Method choice (bonding in or out) follows GN3 — AM2 candidates know both methods."
            },
            {
              number: 10,
              prompt: "A new installation's RCD test reading at 5×IΔn is 38 ms (general type, 30 mA):",
              options: {
                A: "FAIL",
                B: "PASS — within the 40 ms maximum for general-type 30 mA RCDs at 5×IΔn",
                C: "Inconclusive",
                D: "Replace the RCD"
              },
              answer: "B",
              explanation: "38 ms is below the 40 ms criterion. Pass. AM2 candidates record numerical values precisely."
            },
            {
              number: 11,
              prompt: "The IR test on a circuit with electronic equipment (dimmers, SPDs, electronic RCBOs) requires the candidate to:",
              options: {
                A: "Test as normal",
                B: "Disconnect or isolate voltage-sensitive equipment before applying 500 V DC, OR use the auto-test mode that selectively applies test voltage to avoid damaging electronics",
                C: "Use 1000 V DC",
                D: "Skip IR"
              },
              answer: "B",
              explanation: "500 V DC can damage electronic components. AM2 candidates disconnect dimmers, SPDs and electronic RCBOs before testing — and reconnect after the test passes."
            },
            {
              number: 12,
              prompt: "A continuity test of an SWA's armour as cpc, measured at the gland-end and the far end of a 50 m run, gives:",
              options: {
                A: "Always 0 Ω",
                B: "A finite resistance proportional to the armour length and material — the candidate compares the measured value to the expected calculated value to verify the cpc",
                C: "Always 1 Ω",
                D: "Always >100 Ω"
              },
              answer: "B",
              explanation: "SWA armour resistance per metre is published. The candidate calculates the expected resistance and compares to measurement. Significantly higher readings suggest poor gland clamping or armour damage."
            },
            {
              number: 13,
              prompt: "The visual inspection schedule for a new domestic installation includes:",
              options: {
                A: "Only the customer's signature",
                B: "Cable identification, presence of green/yellow sleeving, accessory ratings, mechanical protection, fixing and support, segregation, presence of warning notices, and protective device coordination",
                C: "Only the price list",
                D: "Only the EIC"
              },
              answer: "B",
              explanation: "Visual inspection is detailed. AM2 candidates inspect every aspect listed in the Schedule of Inspections. Missing items lead to schedule incompleteness."
            },
            {
              number: 14,
              prompt: "A 30 mA RCD's test button:",
              options: {
                A: "Confirms full performance",
                B: "Confirms only the mechanical operation of the device — full performance is verified by instrument tests at 0.5×, 1× and 5× IΔn at appropriate angles",
                C: "Replaces all tests",
                D: "Is decorative"
              },
              answer: "B",
              explanation: "RCD test buttons are mechanical functional checks only. Performance must be verified by an instrument that injects calibrated test currents. AM2 candidates verify by instrument."
            },
            {
              number: 15,
              prompt: "A live polarity test at a switched fused connection unit reveals 230 V at the appliance terminals when the unit is switched OFF:",
              options: {
                A: "Normal",
                B: "Polarity fault — the SFCU's switch is interrupting the neutral instead of the line; the unit must be re-wired so the switch interrupts line only",
                C: "Replace the SFCU",
                D: "Ignore"
              },
              answer: "B",
              explanation: "SFCU and switches must interrupt line. If they interrupt neutral, accessories remain live when off. AM2 candidates detect and rectify this."
            },
            {
              number: 16,
              prompt: "The Schedule of Test Results column for ring final circuits records:",
              options: {
                A: "Only R1+R2",
                B: "End-to-end r1, rn, r2 values; cross-connected R1+R2 readings around the ring; insulation resistance; polarity; and Zs at the furthest point",
                C: "Only Zs",
                D: "Only IR"
              },
              answer: "B",
              explanation: "Ring final SoTR has more entries than radial circuits. The end-to-end values establish ring continuity; cross-connected values establish ring symmetry. AM2 candidates record completely."
            },
            {
              number: 17,
              prompt: "The acceptance criterion for r1, rn, r2 on a 32 A ring final at 2.5 mm² T&E (rough check):",
              options: {
                A: "All values different",
                B: "r1 ≈ rn (line and neutral both 2.5 mm²); r2 is approximately 1.67× the value of r1/rn (because the cpc in 2.5 mm² T&E is 1.5 mm² — smaller csa, higher resistance)",
                C: "All values equal",
                D: "All values zero"
              },
              answer: "B",
              explanation: "T&E 2.5 mm² has 1.5 mm² cpc — the cpc is smaller. r2 reflects this. AM2 candidates use this relationship to verify ring final wiring."
            },
            {
              number: 18,
              prompt: "The supply polarity at the origin:",
              options: {
                A: "Is irrelevant",
                B: "Is verified at the live-test stage by checking that L is at the line terminal of the main switch and N at the neutral; reverse polarity from the DNO is rare but documented",
                C: "Is replaced by Ze",
                D: "Is irrelevant for SP installations"
              },
              answer: "B",
              explanation: "Even DNO supplies can be wired in reverse polarity — particularly on older or rural supplies. The live polarity test at the origin is the AM2 candidate's safety-net."
            },
            {
              number: 19,
              prompt: "A circuit's calculated maximum Zs (using R1+R2 measured + Ze):",
              options: {
                A: "Replaces tabulated value",
                B: "Should not exceed the tabulated maximum (corrected by 0.8 for cable temperature) — measured Zs gives the same answer faster, but the calculation method is recognised in BS 7671",
                C: "Is decorative",
                D: "Is the only method"
              },
              answer: "B",
              explanation: "Zs = Ze + (R1+R2). Both calculation and direct measurement are valid; both should not exceed the tabulated max. AM2 candidates can do either."
            },
            {
              number: 20,
              prompt: "A new installation's commissioning record:",
              options: {
                A: "Is verbal only",
                B: "Includes the EIC, the Schedule of Inspections, the Schedule of Test Results, the supplier's invoice for traceability of equipment, any Part P notification, and the O&M information for the customer",
                C: "Is just the customer name",
                D: "Is replaced by photos"
              },
              answer: "B",
              explanation: "Complete commissioning records carry the project history. AM2 candidates produce a documentation pack that meets BS 7671, building regulations and the contractor's QC system."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "A continuity test using R1+R2 method:",
              options: {
                A: "Connects between L and E at the OCPD and reads the resistance to the far end accessory",
                B: "Cross-connects line and cpc at the OCPD via a test link, then measures L-E at the far end accessory — the reading is R1 + R2 from OCPD to that point",
                C: "Uses 500 V DC",
                D: "Uses no instrument"
              },
              answer: "B",
              explanation: "R1+R2 method: link L and cpc at the origin, measure resistance at the far end. The reading is the sum. Faster than wander-lead R2. AM2 candidates use both methods appropriately."
            },
            {
              number: 2,
              prompt: "A 'lower is better' result on an IR test indicates:",
              options: {
                A: "Insulation is good",
                B: "Insulation is degrading or compromised — high MΩ readings indicate good insulation; low MΩ or kΩ readings are faults",
                C: "The instrument is faulty",
                D: "The voltage was wrong"
              },
              answer: "B",
              explanation: "IR test results: high resistance = good. Low values are faults requiring investigation. AM2 candidates know the direction of 'good'."
            },
            {
              number: 3,
              prompt: "A measured Ze of 0.35 Ω on a TN-C-S supply:",
              options: {
                A: "Is high",
                B: "Is typical for TN-C-S — DNOs design for Ze < 0.35 Ω; values above this should be queried with the DNO",
                C: "Always fails",
                D: "Indicates RCD is needed"
              },
              answer: "B",
              explanation: "TN-C-S Ze is typically below 0.35 Ω. TN-S supplies are usually below 0.8 Ω. AM2 candidates compare measured Ze against typical values for the supply type."
            },
            {
              number: 4,
              prompt: "The R1+R2 of a 32 A 2.5 mm² ring final, with all 8 sockets cross-connected, gives a reading of 0.18 Ω. The expected value would be approximately:",
              options: {
                A: "0.50 Ω",
                B: "(r1+r2)/4 — roughly matching this calculation if the ring is balanced; 0.18 Ω is reasonable for a moderate-length ring with 2.5 mm² cable and 1.5 mm² cpc",
                C: "1.0 Ω",
                D: "0.05 Ω"
              },
              answer: "B",
              explanation: "Ring final maths: (r1 + r2)/4 with cross-connection. AM2 candidates calculate the expected value and compare to measurement."
            },
            {
              number: 5,
              prompt: "The 'safe' interval between periodic inspections of a domestic installation is:",
              options: {
                A: "Annually",
                B: "Approximately 10 years (or change of occupancy / change of use), per BS 7671 Annex E and IET guidance",
                C: "Every 5 years for all installations",
                D: "Never"
              },
              answer: "B",
              explanation: "Domestic dwelling typical interval is 10 years or change of occupancy. Other installations have shorter intervals. AM2 candidates know the recommended periods from BS 7671 Annex E."
            },
            {
              number: 6,
              prompt: "The IR test value below the Table 64 minimum:",
              options: {
                A: "Is recorded as a pass",
                B: "Is recorded as a fail and the fault investigated and corrected before the EIC is issued — the schedule reflects the fail and the corrective action",
                C: "Is ignored",
                D: "Is replaced by Zs"
              },
              answer: "B",
              explanation: "Failures must be rectified before certification. The schedule records both the original fail and the corrective re-test pass. AM2 candidates do not certify until faults are cleared."
            },
            {
              number: 7,
              prompt: "The dead test 'continuity of ring final' establishes:",
              options: {
                A: "Just the cpc",
                B: "End-to-end r1, rn, r2 values to verify the ring's continuity and balance; subsequent cross-connection R1+R2 testing verifies the ring is correctly closed",
                C: "Only the line conductor",
                D: "Only the cpc"
              },
              answer: "B",
              explanation: "Ring continuity has two phases: end-to-end (verifies balance and continuity of each conductor); cross-connected (verifies the ring is correctly looped). AM2 candidates do both."
            },
            {
              number: 8,
              prompt: "The acceptance criterion for IR test of a 230 V LV circuit:",
              options: {
                A: "≥0.25 MΩ",
                B: "≥1.0 MΩ at 500 V DC",
                C: "≥10 MΩ",
                D: "Any value"
              },
              answer: "B",
              explanation: "Table 64. AM2 candidates know the LV minimum and the SELV/PELV minimum (≥0.5 MΩ at 250 V DC for SELV/PELV)."
            },
            {
              number: 9,
              prompt: "A polarity test using continuity:",
              options: {
                A: "Tests at the OCPD only",
                B: "Tests at every accessory and end-of-circuit, verifying the line conductor is at the line terminal of every device — switches, sockets, lamp holders, etc.",
                C: "Is replaced by IR",
                D: "Is replaced by Zs"
              },
              answer: "B",
              explanation: "Polarity at every accessory. Reg 612 and GN3 require this. AM2 candidates verify systematically."
            },
            {
              number: 10,
              prompt: "The functional test of a downstream RCD verifies:",
              options: {
                A: "Only the test button",
                B: "The test button operation, the operation at 0.5×, 1×, 5× IΔn (where required), and the device's interaction with the protected circuit (does it trip when expected, in the expected time)",
                C: "Only continuity",
                D: "Only IR"
              },
              answer: "B",
              explanation: "RCD functional testing is comprehensive. AM2 candidates record every required value."
            },
            {
              number: 11,
              prompt: "A measured Zs at the furthest point of a circuit:",
              options: {
                A: "Is independent of the OCPD",
                B: "Must be at or below the maximum permitted Zs for the OCPD type and rating, as listed in BS 7671 Tables 41.2/41.3/41.4 (corrected for cable temperature where ambient testing is used)",
                C: "Doesn't matter",
                D: "Equals Ze"
              },
              answer: "B",
              explanation: "Zs(measured) ≤ Zs(max-tabulated, corrected). The OCPD must be able to clear a fault within the disconnection time. AM2 candidates verify against the tables."
            },
            {
              number: 12,
              prompt: "A 'Type B' MCB at 32 A has a tabulated maximum Zs (BS 7671 Table 41.3) of approximately:",
              options: {
                A: "0.18 Ω",
                B: "1.44 Ω at 230 V (for a 0.4 s disconnection time)",
                C: "5.0 Ω",
                D: "0.01 Ω"
              },
              answer: "B",
              explanation: "Table 41.3 values: Type B 32 A = 1.44 Ω. AM2 candidates know the typical values for common OCPD ratings."
            },
            {
              number: 13,
              prompt: "A periodic inspection (EICR) report:",
              options: {
                A: "Is identical to an EIC",
                B: "Is a different document — used to report the condition of an existing installation; it identifies faults and uses C1/C2/C3/FI codes to communicate severity",
                C: "Is for new work only",
                D: "Is verbal"
              },
              answer: "B",
              explanation: "EIC = new work. EICR = condition report on existing. C1 = danger present, C2 = potentially dangerous, C3 = improvement recommended. AM2 candidates produce the right document for the right scenario."
            },
            {
              number: 14,
              prompt: "A 'C1' coding on an EICR means:",
              options: {
                A: "Improvement recommended",
                B: "Danger present — immediate action required (e.g. exposed live parts)",
                C: "Acceptable condition",
                D: "Note for future"
              },
              answer: "B",
              explanation: "EICR coding: C1 = danger present; C2 = potentially dangerous; C3 = improvement recommended; FI = further investigation. AM2 candidates apply the correct code based on the fault."
            },
            {
              number: 15,
              prompt: "The Schedule of Test Results is signed by:",
              options: {
                A: "The customer",
                B: "The competent person who carried out the testing — typically the inspector",
                C: "The DNO",
                D: "Anyone"
              },
              answer: "B",
              explanation: "Each schedule has a signatory. The inspector signs the test results. AM2 candidates demonstrate ownership of their work."
            },
            {
              number: 16,
              prompt: "The recommended interval between RCD instrument tests during normal operation is:",
              options: {
                A: "Daily",
                B: "At each periodic inspection (typically 5-10 years for domestic), with the user encouraged to press the test button quarterly",
                C: "Annually",
                D: "Never"
              },
              answer: "B",
              explanation: "Periodic inspection includes RCD instrument tests. The user's quarterly test-button press is a maintenance practice (not the formal test). AM2 candidates educate customers."
            },
            {
              number: 17,
              prompt: "A circuit-by-circuit IR test on a TT installation:",
              options: {
                A: "Is irrelevant",
                B: "Is performed in the same way as TN systems, between live conductors and the cpc — but the system also requires earth electrode resistance verification at the origin",
                C: "Is replaced by RCD test",
                D: "Skips earth"
              },
              answer: "B",
              explanation: "IR testing is system-independent. TT additionally requires RA (earth electrode resistance) to confirm RCD operation. AM2 candidates test both."
            },
            {
              number: 18,
              prompt: "A continuity test result of 0 Ω at a wander-lead R2 measurement:",
              options: {
                A: "Indicates the conductor is open",
                B: "Suggests an unnulled wander-lead OR a direct connection — null the leads and re-test; expect to see a small finite resistance proportional to length",
                C: "Always means a fault",
                D: "Is impossible"
              },
              answer: "B",
              explanation: "0 Ω after nulling means a direct connection. AM2 candidates always null the leads before measuring continuity. Failure to null can read the lead resistance as the cpc resistance."
            },
            {
              number: 19,
              prompt: "The acceptance criterion for a 'short-time' RCD (S-type):",
              options: {
                A: "Same as general type",
                B: "S-type RCDs have time delays — at 5×IΔn, the trip time is permitted up to 150 ms (vs 40 ms for general type) to allow downstream RCDs to operate first (selectivity)",
                C: "Faster than general type",
                D: "Doesn't apply"
              },
              answer: "B",
              explanation: "S-type RCDs are designed to be slower at all test currents to provide selectivity with downstream 30 mA RCDs. AM2 candidates know the different criteria."
            },
            {
              number: 20,
              prompt: "The completion documentation for a new installation includes:",
              options: {
                A: "Just the EIC",
                B: "EIC + Schedule of Inspections + Schedule of Test Results + Part P notification (where applicable) + O&M information including circuit list, device schedule and equipment instructions",
                C: "Just an invoice",
                D: "Just the customer's signature"
              },
              answer: "B",
              explanation: "Complete handover includes everything listed. AM2 candidates produce the full pack and explain it to the customer."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "The dead-test sequence GN3 specifies starts with:",
              options: {
                A: "IR",
                B: "Continuity (cpc, then ring final r1/rn/r2 if applicable, then bonding)",
                C: "Polarity",
                D: "Functional"
              },
              answer: "B",
              explanation: "GN3 sequence ordering is risk-driven. Continuity first proves the protective conductor; subsequent tests can then be performed safely with confidence in the cpc. AM2 candidates know the order and the rationale."
            },
            {
              number: 2,
              prompt: "The 'live' Zs measurement uses:",
              options: {
                A: "An IR tester",
                B: "A loop impedance tester (or RCD tester in 'no-trip' mode for circuits with RCDs) — the instrument injects a high-current pulse and measures the voltage drop",
                C: "An ammeter",
                D: "A wattmeter"
              },
              answer: "B",
              explanation: "Loop impedance testers measure live Zs. AM2 candidates select the right instrument and use the no-trip mode where RCDs are present (to avoid nuisance tripping)."
            },
            {
              number: 3,
              prompt: "A polarity test at a 13 A socket-outlet verifies:",
              options: {
                A: "Only the line",
                B: "L at the L pin (right-hand top), N at the N pin (left-hand top), and cpc at the E pin (centre bottom) — all three matching the BS 1363 standard",
                C: "Only the cpc",
                D: "Only colours"
              },
              answer: "B",
              explanation: "BS 1363 socket pin standard. AM2 candidates verify with a polarity tester or a multifunction tester."
            },
            {
              number: 4,
              prompt: "The verification sequence at completion includes:",
              options: {
                A: "Only IR",
                B: "Continuity, IR, polarity (dead), Ze (live), Zs (live), RCD timing (live), polarity (live), prospective fault current, and functional testing — in the GN3 order",
                C: "Only Zs",
                D: "Only continuity"
              },
              answer: "B",
              explanation: "Complete verification = dead tests + live tests + functional. AM2 candidates record every test result on the appropriate schedule."
            },
            {
              number: 5,
              prompt: "The 'tabulated' max Zs for a 30 mA RCD:",
              options: {
                A: "Is 1666 Ω (50V/30mA)",
                B: "For RCD-protected circuits, the Zs requirement is met if the RCD operates within the disconnection time — the calculation Zs ≤ 50V/IΔn is one approach (50V/30mA = 1666 Ω) but in practice Zs is dominated by the OCPD's tabulated max if not relying on RCD additional protection",
                C: "Is 0.4 s",
                D: "Is irrelevant"
              },
              answer: "B",
              explanation: "RCDs provide additional protection (Reg 415) where Zs would otherwise exceed Table 41.3. The 50/IΔn calculation gives the maximum loop impedance compatible with safe touch voltage. AM2 candidates know both methods."
            },
            {
              number: 6,
              prompt: "A 'periodic' inspection of a commercial premises:",
              options: {
                A: "Is annual",
                B: "Is typically every 5 years (commercial) or per the duty holder's risk-based interval — informed by the original EIC's recommendation",
                C: "Is decorative",
                D: "Is annual at home"
              },
              answer: "B",
              explanation: "Recommended intervals from BS 7671 Annex E. Commercial = typical 5 years; some industrial = 3 years; domestic = 10 years. AM2 candidates know the typical figures."
            },
            {
              number: 7,
              prompt: "A multifunction tester combines:",
              options: {
                A: "Just IR",
                B: "IR, continuity, loop impedance, RCD timing, and earth electrode resistance into one instrument — modern testers often include polarity and prospective fault current",
                C: "Just one function",
                D: "No functions"
              },
              answer: "B",
              explanation: "Modern MFTs combine multiple test functions for site efficiency. AM2 candidates use the right function for each test and record the results accurately."
            },
            {
              number: 8,
              prompt: "A continuity test of a main bonding conductor reading 0.40 Ω at the gas pipe:",
              options: {
                A: "Is acceptable",
                B: "Is on the high side — query the bond clamp, check for corrosion at the clamp face, and consider re-making the connection; 10 mm² × 5 m should read closer to 0.05 Ω",
                C: "Is impossible",
                D: "Is normal"
              },
              answer: "B",
              explanation: "Main bonding conductors should be low-resistance throughout. Elevated readings flag joint problems. AM2 candidates investigate values that don't match the expected calculation."
            },
            {
              number: 9,
              prompt: "The IR test for SELV/PELV circuits requires:",
              options: {
                A: "500 V DC",
                B: "250 V DC, with a minimum acceptance of 0.5 MΩ",
                C: "1000 V DC",
                D: "No test"
              },
              answer: "B",
              explanation: "Lower test voltage for ELV circuits. Minimum 0.5 MΩ. AM2 candidates know both the LV and ELV settings."
            },
            {
              number: 10,
              prompt: "A polarity check live at a downstream socket reveals:",
              options: {
                A: "Always 230 V L-E and 230 V N-E in a healthy installation",
                B: "Approximately 230 V from L to E and L to N; near 0 V from N to E (in a healthy installation) — confirming line-neutral-earth identification",
                C: "230 V N-E and 0 V L-E if the supply is correct",
                D: "0 V on all three measurements until a load is applied"
              },
              answer: "B",
              explanation: "Live polarity check verifies the conductor identification at downstream points. AM2 candidates note the readings and confirm system integrity."
            },
            {
              number: 11,
              prompt: "A 30 mA RCD's 0.5×IΔn test result of 'no trip in 2 seconds':",
              options: {
                A: "FAIL",
                B: "PASS — the RCD must not trip at half-current; this proves the RCD is not over-sensitive",
                C: "Replace RCD",
                D: "Re-test"
              },
              answer: "B",
              explanation: "0.5×IΔn = no trip in 2 s. This confirms the RCD does not nuisance-trip at half-current. AM2 candidates know all three test values."
            },
            {
              number: 12,
              prompt: "The Schedule of Inspections for a TN-C-S installation includes verification of:",
              options: {
                A: "Only the cable size",
                B: "Earthing conductor csa, MET location and identification, main bonding conductor csa to gas/water/structural, supplementary bonding (where required), warning notices and protective device coordination",
                C: "Just the customer",
                D: "Just the EIC"
              },
              answer: "B",
              explanation: "Visual inspection is detailed. Each item must be inspected and recorded. AM2 candidates work through the list systematically."
            },
            {
              number: 13,
              prompt: "A cable's de-rated capacity (Iz) for use in cable selection:",
              options: {
                A: "Always equals tabulated It",
                B: "Is the tabulated It multiplied by Ca (ambient factor) × Cg (grouping factor) × Ci (insulation factor) × Cs (soil factor) etc. — the resulting Iz must be ≥ design current Ib",
                C: "Is doubled",
                D: "Is the cable size in mm²"
              },
              answer: "B",
              explanation: "Iz = It × Ca × Cg × Ci × Cs × ... AM2 candidates apply factors from BS 7671 Appendix 4 to determine the cable's actual rating in the installation conditions."
            },
            {
              number: 14,
              prompt: "The functional check of a multi-way switching arrangement:",
              options: {
                A: "Tests one switch",
                B: "Tests every switch in every combination — a 2-way + intermediate setup has 8 distinct switch combinations that must all be exercised",
                C: "Tests only IR",
                D: "Skips testing"
              },
              answer: "B",
              explanation: "Multi-way switching has many combinations. Functional testing must exercise all of them. AM2 candidates plan the test sequence."
            },
            {
              number: 15,
              prompt: "The completion EIC declares:",
              options: {
                A: "The cable is brand X",
                B: "The installation complies with BS 7671 at the date of certification, the design and construction were carried out by competent persons, and the inspection & testing has been completed satisfactorily",
                C: "The customer paid",
                D: "The work cost less than expected"
              },
              answer: "B",
              explanation: "EIC is a statement of compliance. AM2 candidates understand the legal weight of their signature on the EIC."
            },
            {
              number: 16,
              prompt: "A measured ring final's r1+r2 (cross-connected R1+R2) of 0.30 Ω at all sockets, with end-to-end r2 of 1.20 Ω:",
              options: {
                A: "Is unbalanced",
                B: "Is balanced — (r1+r2)/4 = 0.30 Ω matches the calculation, suggesting a correctly-wired ring final without spurs from spurs or interconnections",
                C: "Is faulty",
                D: "Cannot be calculated"
              },
              answer: "B",
              explanation: "Cross-connected R1+R2 should equal (r1+r2)/4 for a correctly-wired ring. AM2 candidates verify by this calculation."
            },
            {
              number: 17,
              prompt: "A 'C2' EICR coding on an existing installation:",
              options: {
                A: "Means it is safe",
                B: "Means 'potentially dangerous' — should be remedied promptly; many duty-holders consider C2 sufficient to render an installation 'unsatisfactory'",
                C: "Means 'minor improvement'",
                D: "Is for new work"
              },
              answer: "B",
              explanation: "C2 = potentially dangerous. AM2 candidates apply the correct code and recommend remedial action."
            },
            {
              number: 18,
              prompt: "The acceptance criterion for an SPD (surge protection device) installed at the consumer unit:",
              options: {
                A: "Functional only",
                B: "Visual confirmation of the device's status indicator (green = healthy, red = end-of-life), correct rating and Type (Type 1, 2 or 1+2) for the installation, and protection of the device by an appropriate OCPD or fuse",
                C: "Replace immediately",
                D: "Skip inspection"
              },
              answer: "B",
              explanation: "SPDs have a service life and a status indicator. AM2 candidates verify the device is healthy at periodic inspection. End-of-life devices must be replaced."
            },
            {
              number: 19,
              prompt: "The 'declaration of compliance' on the EIC:",
              options: {
                A: "Is optional",
                B: "Is the signed legal declaration that the work meets BS 7671 — without it, the EIC is invalid",
                C: "Is for the customer",
                D: "Is verbal"
              },
              answer: "B",
              explanation: "The signed declaration is the legal cornerstone of the EIC. AM2 candidates understand they are the certifier."
            },
            {
              number: 20,
              prompt: "A new circuit's verification at the schedule of test results:",
              options: {
                A: "Records final test only",
                B: "Records all dead and live test values, RCD timings, polarity confirmations, functional confirmations and any deviations or rectifications — the schedule is the complete numerical record",
                C: "Records customer feedback",
                D: "Records cost"
              },
              answer: "B",
              explanation: "Complete schedules are the legal evidence behind the EIC. AM2 candidates produce thorough, accurate schedules."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "The dead-test 'polarity' verification:",
              options: {
                A: "Is replaced by IR",
                B: "Confirms that line is at line, neutral is at neutral, and cpc is at cpc — at every termination — using a continuity test method to trace each conductor's identity",
                C: "Tests insulation",
                D: "Tests Zs"
              },
              answer: "B",
              explanation: "Polarity is identification of conductors. Dead polarity uses continuity to trace each conductor. Live polarity uses voltage measurement. AM2 candidates do both."
            },
            {
              number: 2,
              prompt: "A 30 mA RCBO's IR test result of 0.4 MΩ between L and N (at 500 V DC):",
              options: {
                A: "Pass",
                B: "Fail — below the 1.0 MΩ Table 64 minimum; the RCBO's electronics may have been damaged by 500 V DC, OR there is a genuine fault",
                C: "Inconclusive",
                D: "Always passes"
              },
              answer: "B",
              explanation: "RCBOs contain electronics. 500 V DC may damage them. Test with the RCBO removed/disconnected, or use the auto-mode. AM2 candidates know this trap."
            },
            {
              number: 3,
              prompt: "The 'live' insulation test:",
              options: {
                A: "Is GS38",
                B: "Does not exist as a standard test — IR testing is always carried out with the circuit isolated; live testing of impedance is via Zs/Ze loop impedance",
                C: "Is at 500 V AC",
                D: "Is for SPDs"
              },
              answer: "B",
              explanation: "IR is a dead test. Live impedance testing is Zs/Ze. AM2 candidates do not confuse them."
            },
            {
              number: 4,
              prompt: "A measured RA (earth electrode resistance) of 50 Ω on a TT installation with a 30 mA RCD:",
              options: {
                A: "Pass",
                B: "Pass — the RCD will trip well below the 50 V touch voltage limit (50 Ω × 30 mA = 1.5 V, far below the 50 V limit)",
                C: "Fail — too high",
                D: "Replace electrode"
              },
              answer: "B",
              explanation: "RA × IΔn ≤ 50 V is the touch-voltage rule. 50 Ω × 30 mA = 1.5 V — well within the 50 V limit. AM2 candidates verify the calculation."
            },
            {
              number: 5,
              prompt: "The schedule of test results for a 6-circuit consumer unit:",
              options: {
                A: "Records only ring final",
                B: "Has six rows (one per circuit) recording each circuit's test results — protective device, conductor csa, R1+R2 or R2, IR, Zs, RCD times, polarity, functional confirmation",
                C: "Records nothing",
                D: "Records only the OCPD"
              },
              answer: "B",
              explanation: "Each circuit is a row. Each test type is a column. AM2 candidates fill in completely."
            },
            {
              number: 6,
              prompt: "The 'self-certification' of a domestic installation under Part P:",
              options: {
                A: "Is for any electrician",
                B: "Is by a registered competent person scheme member, with the work being notified to the local authority via the scheme provider — typically NICEIC, NAPIT, ECA, etc.",
                C: "Is verbal",
                D: "Is for landlords only"
              },
              answer: "B",
              explanation: "Part P self-certification by competent-person scheme members. AM2 candidates work in this system in domestic settings — they need to know the notification route."
            },
            {
              number: 7,
              prompt: "A continuity test verifying main bonding conductor of 10 mm² to gas pipe:",
              options: {
                A: "Should read >1 Ω",
                B: "Should read <0.05 Ω typically (10 mm² × short run, with the wander-lead nulled)",
                C: "Equal to Ze",
                D: "Above 1 MΩ"
              },
              answer: "B",
              explanation: "Main bonding is a low-resistance path. Conductor resistance + clamp connections should give a low value. AM2 candidates investigate elevated readings."
            },
            {
              number: 8,
              prompt: "The IR test on a 230 V LV circuit returns 5.8 MΩ:",
              options: {
                A: "Fail",
                B: "Pass — well above the 1.0 MΩ Table 64 minimum; healthy insulation",
                C: "Inconclusive",
                D: "Test again"
              },
              answer: "B",
              explanation: "5.8 MΩ is healthy. Below 1.0 MΩ would be a fail. Above 1.0 MΩ is acceptable; >100 MΩ is excellent. AM2 candidates record the value."
            },
            {
              number: 9,
              prompt: "A 'complete' EIC pack issued to the customer:",
              options: {
                A: "EIC alone",
                B: "EIC + Schedule of Inspections + Schedule of Test Results + Part P notification (where applicable) + circuit chart on the consumer unit + any equipment manuals/instructions",
                C: "Just an invoice",
                D: "Verbal"
              },
              answer: "B",
              explanation: "Complete handover. AM2 candidates demonstrate handover is completed."
            },
            {
              number: 10,
              prompt: "A measured Zs of 0.6 Ω on a Type B 32 A circuit (tabulated max 1.44 Ω):",
              options: {
                A: "Fail",
                B: "Pass — well below the 1.44 Ω tabulated max (0.8 corrected = 1.15 Ω)",
                C: "Replace OCPD",
                D: "Replace cable"
              },
              answer: "B",
              explanation: "Zs(measured) ≤ Zs(corrected). 0.6 ≤ 1.15. Comfortable pass. AM2 candidates confirm by calculation."
            },
            {
              number: 11,
              prompt: "A 'no test' RCD on a circuit:",
              options: {
                A: "Is acceptable",
                B: "Is unsafe — RCDs that do not test must be replaced; they cannot be relied on for additional protection",
                C: "Should be tested only at IΔn",
                D: "Should be ignored"
              },
              answer: "B",
              explanation: "Untestable RCDs are not fit for purpose. Replacement is the only safe option. AM2 candidates do not certify untested RCDs."
            },
            {
              number: 12,
              prompt: "The 'corrected' max Zs from BS 7671:",
              options: {
                A: "Is 100% of tabulated",
                B: "Is approximately 80% of tabulated, applied to allow for cable temperature rise during the fault from ambient to operating temperature",
                C: "Is 50% of tabulated",
                D: "Is twice tabulated"
              },
              answer: "B",
              explanation: "0.8 correction factor. AM2 candidates apply correctly."
            },
            {
              number: 13,
              prompt: "A continuity reading from cpc to MET via wander-lead:",
              options: {
                A: "Should be 0",
                B: "Should be a finite, low value proportional to the conductor length and material — null the leads first",
                C: "Always 1 Ω",
                D: "Always >1 MΩ"
              },
              answer: "B",
              explanation: "cpc continuity is finite, low. AM2 candidates calculate the expected value from cable resistance per metre × length."
            },
            {
              number: 14,
              prompt: "A polarity test using a polarity tester on a socket:",
              options: {
                A: "Replaces all tests",
                B: "Indicates the basic L-N-E identification — but the inspector should also verify by manual continuity tests at the OCPD and confirm against the SoTR record",
                C: "Is decorative",
                D: "Is for IR"
              },
              answer: "B",
              explanation: "Plug-in polarity testers are quick checks. The full polarity verification is via continuity at every accessory. AM2 candidates use both."
            },
            {
              number: 15,
              prompt: "The 'further investigation' code on an EICR (FI):",
              options: {
                A: "Means C1",
                B: "Means insufficient evidence to apply C1, C2 or C3 — further investigation needed; typical at concealed installations or where damp/temperature affects readings",
                C: "Means C3",
                D: "Means pass"
              },
              answer: "B",
              explanation: "FI = further investigation. AM2 candidates apply correctly when readings are inconclusive."
            },
            {
              number: 16,
              prompt: "The Schedule of Test Results signature line confirms:",
              options: {
                A: "Customer satisfaction",
                B: "The competent person who carried out the inspection and testing — they take responsibility for the values recorded",
                C: "DNO approval",
                D: "Manufacturer warranty"
              },
              answer: "B",
              explanation: "Inspector signs SoTR. AM2 candidates understand the responsibility."
            },
            {
              number: 17,
              prompt: "A 'periodic' inspection of an installation with prior unknown test history:",
              options: {
                A: "Is impossible",
                B: "Is performed under EICR — the inspector tests the installation as a baseline and codes findings; the EICR becomes the new starting reference for future periodic inspections",
                C: "Is replaced by EIC",
                D: "Is verbal"
              },
              answer: "B",
              explanation: "EICR establishes baseline for unknown installations. AM2 candidates produce thorough EICRs in this scenario."
            },
            {
              number: 18,
              prompt: "The 'short-term' or 'instant' RCD test result at 1×IΔn for a 30 mA general type RCD reading 240 ms:",
              options: {
                A: "Fail",
                B: "Pass — within the 300 ms maximum for general-type RCDs at 1×IΔn",
                C: "Inconclusive",
                D: "Replace"
              },
              answer: "B",
              explanation: "Below 300 ms = pass. AM2 candidates record values precisely."
            },
            {
              number: 19,
              prompt: "The 'no test' option on the schedule of test results:",
              options: {
                A: "Is for any column",
                B: "Indicates a test was not applicable (e.g. ring final test on a radial circuit) — used judiciously, with notes explaining why",
                C: "Is for skipping",
                D: "Is decorative"
              },
              answer: "B",
              explanation: "'NA' or 'no test' indicates not-applicable. AM2 candidates note the reason — making the schedule complete and defensible."
            },
            {
              number: 20,
              prompt: "The completion of inspection & testing concludes with:",
              options: {
                A: "Verbal handover",
                B: "The signed EIC, both schedules, the Part P notification (where applicable), the customer briefing on operation/maintenance, and the records retained by the contractor for the legally-required period",
                C: "An invoice",
                D: "Photographs only"
              },
              answer: "B",
              explanation: "Inspection & testing concludes with documented handover. AM2 candidates produce the complete pack."
            }
          ]
        }
      ]
    },
    {
      id: "section-5",
      title: "Section 5 — Fault Diagnosis & Rectification",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "On a ring final circuit, line–neutral readings at all sockets are correct, but line–earth continuity at one group of sockets is significantly higher than elsewhere on the ring. The most likely fault is:",
              options: {
                A: "An open-circuit (broken) cpc between two sockets on the ring, which removes the parallel cpc path for the affected group",
                B: "An open line conductor",
                C: "An open neutral conductor",
                D: "Insulation breakdown between line and earth"
              },
              answer: "A",
              explanation: "With L-N healthy but L-E drifting up at a specific group of sockets, the line and neutral copper are intact but the cpc has a break — often a missed termination at a JB, a broken core at a spur, or a damaged accessory. Localise by sweeping R1+R2 around the ring and finding where the values change sharply."
            },
            {
              number: 2,
              prompt: "A Type B 32 A MCB trips instantly each time it is closed. With all loads disconnected, an IR test between L and N on the affected circuit reads below 0.01 MΩ. The most likely fault is:",
              options: {
                A: "A direct line-to-neutral short — possibly a nail or screw through the cable, a crushed cable at a back-box, or a short at an accessory",
                B: "An open-circuit cpc somewhere on the circuit, removing the path the MCB needs to clear an earth fault",
                C: "High ambient temperature at the consumer unit causing the MCB's thermal element to trip on its rated current",
                D: "An earth-leakage fault alone, since 32 A is well within the magnetic trip range of a Type B device"
              },
              answer: "A",
              explanation: "A near-zero L-N IR with loads removed is a direct short on the fixed wiring. Common causes: nail/screw penetration (especially outside safe zones), pinched cable at a back-box or under a flooring pin, or a shorted accessory. Localise by section."
            },
            {
              number: 3,
              prompt: "A 30 mA RCD protecting a socket circuit trips intermittently, mainly on damp mornings, with no appliance connected. An IR test between NEUTRAL and the cpc reads 0.3 MΩ. The most likely cause is:",
              options: {
                A: "A faulty RCD whose magnetic latch weakens at low ambient temperature, causing nuisance tripping in cool morning conditions",
                B: "An intermittent neutral-to-earth insulation fault — leakage through the damaged N insulation adds to the residual current and trips the RCD; the fault becomes worse when damp",
                C: "An oversized circuit breaker upstream of the RCD, allowing fault current to bypass the residual-current sensing coil",
                D: "A loose line connection at the consumer unit producing intermittent voltage dips that mimic a residual current"
              },
              answer: "B",
              explanation: "RCDs operate on the imbalance between line and neutral. N-to-earth leakage (a damaged neutral conductor, or a shared neutral between circuits) produces residual current during normal operation and nuisance-trips the RCD. A poor N-E IR reading is the diagnostic fingerprint. Moisture makes it worse, hence the pattern on damp mornings."
            },
            {
              number: 4,
              prompt: "A single final circuit measures a Zs significantly above its Table 41.3 maximum, while Ze and the Zs on other circuits in the same DB are within limits. The most likely cause(s) are:",
              options: {
                A: "High Ze at the origin — but that would affect every circuit",
                B: "Excessive cable length on that circuit, an undersized or damaged cpc, or a poor/high-resistance termination at a JB or accessory",
                C: "Incorrect DNO supply",
                D: "An open RCD"
              },
              answer: "B",
              explanation: "A problem confined to one circuit points to that circuit's installation: a long run, undersized cpc, loose joint, or damaged termination. Compliant remedies include shortening the run, increasing cpc csa, re-terminating, or providing ADS via a 30 mA RCD and re-assessing. Up-rating the OCPD is NOT a valid fix."
            },
            {
              number: 5,
              prompt: "On a ring final circuit under the figure-of-eight (cross-connected) test, the R1+R2 readings measured at each socket vary by more than 0.05 Ω around the ring. The most likely cause is:",
              options: {
                A: "The ring is correctly wired and balanced",
                B: "A break in one leg of the ring, an interconnection between the two legs, or a spur fed from a spur",
                C: "A polarity fault",
                D: "An insulation fault"
              },
              answer: "B",
              explanation: "With a correctly-wired ring and line/cpc cross-connected at the DB, the R1+R2 at every socket should equal (r1+r2)/4 with only minor variation. Significant variation indicates one of the three classic ring defects."
            },
            {
              number: 6,
              prompt: "A circuit shows L-N IR of >100 MΩ and L-PE IR of 0.5 MΩ. The most likely cause is:",
              options: {
                A: "Healthy circuit",
                B: "Insulation breakdown between a live conductor and the cpc — possibly a damaged cable at a back-box, a broken accessory, or moisture in an enclosure; localise by progressive disconnection",
                C: "Open conductor",
                D: "Faulty test instrument"
              },
              answer: "B",
              explanation: "Different L-N and L-PE readings indicate the fault is between live and earth (not L-N). The candidate progressively disconnects to localise — half-split the circuit, retest, find the half with the fault, repeat."
            },
            {
              number: 7,
              prompt: "The half-split fault-find technique:",
              options: {
                A: "Tests the whole circuit at once",
                B: "Divides the circuit into two halves at a midpoint, tests each half independently, identifies the half containing the fault, then sub-divides until the fault is localised",
                C: "Replaces all wiring",
                D: "Tests only the OCPD"
              },
              answer: "B",
              explanation: "Half-split (binary search) is the AM2 fault-find approach. Each split halves the search space — efficient for long circuits with many accessories. AM2 candidates apply this method routinely."
            },
            {
              number: 8,
              prompt: "A circuit's MCB trips after about 10 minutes of normal use:",
              options: {
                A: "Is faulty",
                B: "Suggests overload (the thermal element of the MCB trips on prolonged overcurrent) — investigate the actual current draw, the cable rating, and any oversized/wrong appliance on the circuit",
                C: "Is short-circuit",
                D: "Is RCD trip"
              },
              answer: "B",
              explanation: "Slow trip = thermal overload. Fast trip = short-circuit (magnetic). RCD trip = residual current. AM2 candidates distinguish between these."
            },
            {
              number: 9,
              prompt: "An RCD trips immediately when energised, with all downstream OCPDs open:",
              options: {
                A: "Pass",
                B: "Suggests a fault between L and PE on the RCD's downstream wiring (e.g. a CU bus-bar issue, a stray strand at the RCD's outgoing terminals, or a fault in the consumer unit's interconnections)",
                C: "Is normal",
                D: "Is from upstream"
              },
              answer: "B",
              explanation: "RCD tripping with no downstream load points to a fault in the bus-bar or the RCD's outgoing terminal wiring. AM2 candidates inspect carefully and IR-test the immediate downstream wiring."
            },
            {
              number: 10,
              prompt: "A circuit reads R1+R2 of 0.45 Ω at one socket and 0.85 Ω at another:",
              options: {
                A: "Both are correct",
                B: "The variation suggests a high-resistance termination between the two sockets — investigate every accessory, JB and termination on the cable run between them",
                C: "A correctly-wired ring final — readings rise gradually from the cross-connection point",
                D: "Replace cable"
              },
              answer: "B",
              explanation: "R1+R2 should vary smoothly along the cable. Sharp changes suggest local high-resistance points. AM2 candidates localise by progressive testing."
            },
            {
              number: 11,
              prompt: "A measured Zs that is exactly equal to Ze suggests:",
              options: {
                A: "Healthy",
                B: "An impossibly short circuit — the circuit either has zero R1+R2 (impossible for a real cable) or the test instrument has not properly engaged the circuit; verify the test method and connections",
                C: "Faulty cable",
                D: "Replace OCPD"
              },
              answer: "B",
              explanation: "Zs = Ze + R1+R2. A real circuit always has finite R1+R2. Zs = Ze suggests test error. AM2 candidates verify the test setup."
            },
            {
              number: 12,
              prompt: "A 13 A appliance trips a 30 mA RCD when plugged in:",
              options: {
                A: "Faulty appliance",
                B: "Possibly — the appliance has earth-leakage above the trip threshold; test the appliance separately on a different RCD-protected outlet, OR use a clamp meter to measure the leakage; replace if confirmed",
                C: "Replace RCD",
                D: "Replace circuit"
              },
              answer: "B",
              explanation: "Appliance leakage trips RCDs. AM2 candidates isolate the cause — appliance vs fixed wiring vs other appliances on the same RCD."
            },
            {
              number: 13,
              prompt: "A circuit with N-E IR of 100 kΩ:",
              options: {
                A: "Pass",
                B: "Fail — Table 64 minimum is 1 MΩ; investigate the circuit for a damaged neutral conductor in contact with cpc or a shared neutral",
                C: "Always pass",
                D: "Replace OCPD"
              },
              answer: "B",
              explanation: "100 kΩ = 0.1 MΩ. Below 1 MΩ minimum. Fail. AM2 candidates investigate before re-energising."
            },
            {
              number: 14,
              prompt: "A 'phantom voltage' on an isolated circuit:",
              options: {
                A: "Is normal",
                B: "Can be capacitive coupling from adjacent live cables — particularly on long parallel runs; verify with a low-impedance voltage indicator (not a high-impedance multimeter) to confirm",
                C: "Is a real fault",
                D: "Should be ignored"
              },
              answer: "B",
              explanation: "High-impedance multimeters can read phantom voltages from capacitive coupling. Low-impedance voltage indicators load the source and read the actual voltage. AM2 candidates know the difference."
            },
            {
              number: 15,
              prompt: "A loud hum from a transformer:",
              options: {
                A: "Always faulty",
                B: "Often indicates magnetic vibration — from oversized core, DC saturation, or harmonics in the supply; investigate but a small hum is normal",
                C: "Replace transformer",
                D: "Ignore"
              },
              answer: "B",
              explanation: "Transformer hum is common. Excessive hum indicates fault conditions or design problems. AM2 candidates investigate without panicking."
            },
            {
              number: 16,
              prompt: "A circuit reads good IR but trips the RCD on test:",
              options: {
                A: "RCD fault",
                B: "Possibly an N-E fault that the IR test (with N-E linked) does not see; OR a difference between dry IR test conditions and damp/loaded operating conditions; OR a Type AC RCD on a circuit with DC leakage from electronics",
                C: "Always replace cable",
                D: "Always replace RCD"
              },
              answer: "B",
              explanation: "RCD trips can have multiple causes. AM2 candidates use diagnostic logic — IR L-PE, IR N-PE, current type, RCD selectivity. Each rules in or out causes."
            },
            {
              number: 17,
              prompt: "A 'no power' fault at one socket:",
              options: {
                A: "Always cable",
                B: "Could be: blown fuse/MCB, loose neutral at the socket, broken line conductor, faulty socket — start with continuity tests at the socket and trace back",
                C: "Always RCD",
                D: "Always replace socket"
              },
              answer: "B",
              explanation: "AM2 fault-find logic. AM2 candidates work systematically — verify supply, test continuity, test polarity at each step."
            },
            {
              number: 18,
              prompt: "A circuit with an unstable Zs reading:",
              options: {
                A: "Is healthy",
                B: "Suggests a high-resistance, intermittent contact in the circuit — typically a poor termination at an accessory or JB, OR a damaged conductor making intermittent contact",
                C: "Is normal",
                D: "Replace meter"
              },
              answer: "B",
              explanation: "Zs should be repeatable. Variation suggests intermittent contact. AM2 candidates inspect terminations and look for damaged cables."
            },
            {
              number: 19,
              prompt: "A T&E lighting circuit's IR L-E is 0.7 MΩ. The candidate's first action is:",
              options: {
                A: "Replace cable",
                B: "Disconnect lamps, dimmers, SPDs and electronic accessories — these can affect IR readings; retest the wiring without electronic load and compare",
                C: "Replace OCPD",
                D: "Skip test"
              },
              answer: "B",
              explanation: "Voltage-sensitive equipment in circuit can read low IR. AM2 candidates isolate equipment before testing the wiring. The remaining low reading would indicate a wiring fault."
            },
            {
              number: 20,
              prompt: "After fault rectification, the candidate must:",
              options: {
                A: "Walk away",
                B: "Re-test the affected tests (IR, continuity, Zs as appropriate) to confirm the rectification, document the original fault and the corrective action, and update the schedule of test results",
                C: "Skip retest",
                D: "Verbally confirm"
              },
              answer: "B",
              explanation: "Rectification must be verified. AM2 candidates close the loop with retesting and documentation."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "A measured Zs of 4.6 Ω on a Type B 16 A circuit (tabulated max 2.87 Ω):",
              options: {
                A: "Pass",
                B: "Fail — even the corrected max (2.30 Ω) is exceeded; investigate the cause and reduce Zs by re-terminating, fixing bonding, or providing RCD additional protection",
                C: "Acceptable",
                D: "Replace cable"
              },
              answer: "B",
              explanation: "4.6 > 2.87 > 2.30. Fail. AM2 candidates know the action — investigate, rectify, retest."
            },
            {
              number: 2,
              prompt: "A motor circuit's overload protection trips when starting:",
              options: {
                A: "MCB faulty",
                B: "Possibly — the MCB type is wrong (Type B for motor with high inrush) — Type C or D is more appropriate, OR the motor has a fault, OR the cable is undersized",
                C: "Replace motor",
                D: "Replace circuit"
              },
              answer: "B",
              explanation: "Type B MCBs (3-5× IΔn magnetic) trip on motor inrush (typically 6-7× FLC). Type C or D have higher magnetic thresholds. AM2 candidates select the right MCB type for motor starting."
            },
            {
              number: 3,
              prompt: "A 30 mA RCD trips after rain:",
              options: {
                A: "Always faulty",
                B: "Suggests water ingress into an outdoor enclosure — investigate weatherproofing of outdoor sockets, junction boxes and cable entries; the moisture creates a path between live and cpc",
                C: "Replace RCD",
                D: "Ignore"
              },
              answer: "B",
              explanation: "Outdoor circuits with ingress trip RCDs in wet weather. AM2 candidates trace back to the IP-failure point and re-seal. Common at outdoor sockets and PIR sensors."
            },
            {
              number: 4,
              prompt: "A periodic inspection finds a 30 mA RCD's instrument-test trip times of 380 ms at 1×IΔn:",
              options: {
                A: "Pass",
                B: "Fail — exceeds the 300 ms maximum; the RCD must be replaced or further investigated for cause (oxidised contacts, latch wear)",
                C: "Always pass",
                D: "Test again"
              },
              answer: "B",
              explanation: "1×IΔn ≤ 300 ms general type. 380 ms = fail. AM2 candidates apply criteria correctly."
            },
            {
              number: 5,
              prompt: "A circuit's IR L-N is 80 kΩ:",
              options: {
                A: "Pass",
                B: "Fail — well below 1 MΩ; severe insulation degradation between live conductors; investigate before energising",
                C: "Acceptable",
                D: "Replace OCPD"
              },
              answer: "B",
              explanation: "Below 1 MΩ = fail. AM2 candidates investigate."
            },
            {
              number: 6,
              prompt: "A 'three-phase' phase rotation indicator at a DB shows reversed rotation:",
              options: {
                A: "Ignore",
                B: "Identify the cross-connection (typically two phases swapped at the origin or in the installation), correct it at the source, and re-verify; correcting at individual motors is not the right answer",
                C: "Replace motor",
                D: "Reverse all motors"
              },
              answer: "B",
              explanation: "Reverse rotation at the DB affects all three-phase loads. Fix at the source — the DB or origin. AM2 candidates know this is the only correct response."
            },
            {
              number: 7,
              prompt: "A 13 A appliance with leakage current of 5 mA:",
              options: {
                A: "Healthy",
                B: "Within normal range for some equipment (BS 7671 indicative limit is 9 mA per appliance); however, when several such appliances are connected, the cumulative leakage may trip a 30 mA RCD",
                C: "Always faulty",
                D: "Always trips"
              },
              answer: "B",
              explanation: "Leakage current adds. AM2 candidates explain to customers why their RCD trips when multiple appliances are plugged in to the same circuit."
            },
            {
              number: 8,
              prompt: "A measured continuity of cpc of 8 Ω on a 50 m run of 1.5 mm² T&E:",
              options: {
                A: "Healthy",
                B: "Suggests a high-resistance fault — 1.5 mm² × 50 m should read approximately 0.6 Ω; 8 Ω indicates broken cpc, poor termination, or undersized cable",
                C: "Normal",
                D: "Calibration error"
              },
              answer: "B",
              explanation: "Calculate expected continuity from cable resistance per metre. Big difference = fault. AM2 candidates verify against expected values."
            },
            {
              number: 9,
              prompt: "An accessory at the end of a circuit is dead while everything else is live:",
              options: {
                A: "Replace cable",
                B: "Test continuity from the accessory back along the circuit — find the open-circuit conductor; could be an accessory failure, broken core at a back-box, or a missed termination",
                C: "Replace OCPD",
                D: "Replace the accessory immediately without further testing"
              },
              answer: "B",
              explanation: "AM2 fault-find: from symptom (dead accessory) to cause (open circuit). Continuity testing back along the route localises."
            },
            {
              number: 10,
              prompt: "A 'hum' from a fluorescent fitting:",
              options: {
                A: "Always faulty",
                B: "Often indicates ballast wear or capacitor degradation; investigate the ballast first; in some cases a magnetic ballast naturally hums softly",
                C: "Replace lamp",
                D: "Replace circuit"
              },
              answer: "B",
              explanation: "Hum from ballasts is age-related. AM2 candidates know to check the ballast before assuming circuit fault."
            },
            {
              number: 11,
              prompt: "A circuit's MCB does not trip on a confirmed L-PE fault:",
              options: {
                A: "Replace MCB",
                B: "Could be: high Zs preventing the fault current reaching the magnetic threshold, OR a faulty MCB; verify Zs and prospective fault current first",
                C: "Cable fault",
                D: "OCPD fault"
              },
              answer: "B",
              explanation: "AM2 fault-find: fault doesn't trip → measure prospective fault current → if low, Zs is too high (cause: long cable, undersized cpc, poor termination) → fix Zs OR add RCD."
            },
            {
              number: 12,
              prompt: "A 'thermal' MCB trip:",
              options: {
                A: "Is short-circuit",
                B: "Is overload — the bimetallic strip heats and trips slowly; investigate the actual load current vs the MCB rating",
                C: "Is RCD",
                D: "Is from a fault"
              },
              answer: "B",
              explanation: "Thermal trip = overload. AM2 candidates measure load current and compare to MCB rating. Solutions: reduce load, larger cable + larger OCPD, separate circuit."
            },
            {
              number: 13,
              prompt: "A polarity fault detected at a switch (line-neutral swap):",
              options: {
                A: "Replace switch",
                B: "Re-wire the switch's terminals so that line is at the line terminal and neutral remains in the neutral path; the switch itself is normally fine",
                C: "Replace circuit",
                D: "Reverse the conductors at the consumer unit so the polarity matches at the switch"
              },
              answer: "B",
              explanation: "Polarity fault = wrong wire to wrong terminal. Rewire correctly. AM2 candidates rectify and retest."
            },
            {
              number: 14,
              prompt: "A measured RA (earth electrode) of 1500 Ω on a 30 mA RCD-protected TT system:",
              options: {
                A: "Acceptable",
                B: "Marginal — the RA × IΔn = 45 V is below 50 V touch voltage, so technically compliant, but a stable lower value (e.g. <200 Ω) is preferable for reliability and seasonal variation",
                C: "Always fails",
                D: "Replace electrode"
              },
              answer: "B",
              explanation: "Just below the 1666 Ω limit. AM2 candidates would recommend improvement for reliability — additional rod, or moisture treatment."
            },
            {
              number: 15,
              prompt: "An old installation's IR test on a circuit fails at 0.6 MΩ:",
              options: {
                A: "Always replace cable",
                B: "Investigate first — it could be: voltage-sensitive equipment in the circuit (dimmers, SPDs, LED drivers, electronics), moisture in an enclosure, or genuine cable degradation; localise before condemning",
                C: "Replace OCPD",
                D: "Ignore"
              },
              answer: "B",
              explanation: "Investigate before condemning. AM2 candidates know how to disconnect equipment and re-test."
            },
            {
              number: 16,
              prompt: "A 'borrowed neutral' fault on a lighting circuit:",
              options: {
                A: "Healthy",
                B: "Indicates the neutral of one circuit returns to the consumer unit via the neutral of another circuit — RCD imbalance trips both circuits' RCDs; rectify by separating the neutrals at the JB or back-box",
                C: "Replace bulbs",
                D: "Replace circuit"
              },
              answer: "B",
              explanation: "Borrowed neutrals were common in older installations. RCDs reveal them. AM2 candidates understand the fault and the rectification."
            },
            {
              number: 17,
              prompt: "A 'short between two phase conductors' (L1-L2):",
              options: {
                A: "Always trips RCD",
                B: "Trips the OCPD on the magnetic element (large current); IR test L1-L2 reads near zero; localise by progressive disconnection",
                C: "Trips RCD",
                D: "Healthy"
              },
              answer: "B",
              explanation: "Phase-phase shorts give large fault currents. The OCPD trips magnetically. AM2 candidates use IR test to verify the fault, then localise."
            },
            {
              number: 18,
              prompt: "A 'tingling' sensation when touching a metal accessory:",
              options: {
                A: "Pleasant",
                B: "Indicates leakage current to the accessory — possibly a damaged appliance, an insulation fault in the wiring, or a poor cpc connection; the accessory is at a small voltage above earth — investigate immediately",
                C: "Always normal",
                D: "Replace accessory"
              },
              answer: "B",
              explanation: "Tingling = leakage. AM2 candidates take this seriously — not all customers report it, but it is a clear symptom requiring action."
            },
            {
              number: 19,
              prompt: "After fault rectification, the candidate documents:",
              options: {
                A: "Nothing",
                B: "The original fault, the cause, the rectification action, the retest results, and any safety-management actions taken (e.g. notify customer, update O&M)",
                C: "Just the symptom",
                D: "Just the test"
              },
              answer: "B",
              explanation: "Closing the loop = full documentation. AM2 candidates produce reports that customers can share with future inspectors."
            },
            {
              number: 20,
              prompt: "A 'half-split' fault find on a 4-socket radial:",
              options: {
                A: "Tests every socket",
                B: "Tests at the midpoint — between sockets 2 and 3 — to determine which half has the fault, then continues binary-search through the affected half",
                C: "Tests OCPD only",
                D: "Tests the last socket first and works backwards to the OCPD"
              },
              answer: "B",
              explanation: "Binary search principle. AM2 candidates apply this for efficient fault localisation."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "A radial circuit reads:",
              options: {
                A: "Always healthy",
                B: "R1 = 0.5 Ω, R2 = 1.2 Ω, IR L-PE = 1.5 MΩ — overall this looks healthy; if Zs is also within the corrected max, the circuit is satisfactory; AM2 candidates verify all parameters",
                C: "Always faulty",
                D: "Always inconclusive"
              },
              answer: "B",
              explanation: "AM2 candidates evaluate complete sets of readings, not individual numbers. Every test must support 'healthy'; one failure means the circuit fails."
            },
            {
              number: 2,
              prompt: "A 30 mA RCBO trips immediately when manually closed (no load):",
              options: {
                A: "Faulty RCBO",
                B: "Possibly — but first verify there is no fault on the downstream wiring (IR test); if downstream wiring is healthy, replace the RCBO",
                C: "Replace circuit",
                D: "Replace consumer unit"
              },
              answer: "B",
              explanation: "Don't condemn the RCBO without testing. AM2 candidates use IR to rule out downstream faults first."
            },
            {
              number: 3,
              prompt: "A 32 A MCB trips after 30 minutes of refrigerator use on a circuit also feeding lighting:",
              options: {
                A: "Healthy",
                B: "Suggests overload — the lights and refrigerator together exceed the MCB rating, OR the cable is heating up due to grouping; investigate the actual current draw and consider separating the loads",
                C: "Cable fault",
                D: "RCD fault"
              },
              answer: "B",
              explanation: "Slow trip = overload. AM2 candidates measure actual load and compare to MCB rating. Solutions: separate circuits, larger cable, lower MCB."
            },
            {
              number: 4,
              prompt: "A 'high' R2 reading at the cpc test (using wander-lead) of 0.8 Ω at the boiler casing:",
              options: {
                A: "Healthy",
                B: "Suggests a poor connection in the bonding conductor's path — investigate the clamp at the gas pipe, the conductor's continuity, and the connection at the MET",
                C: "Always normal",
                D: "Replace boiler"
              },
              answer: "B",
              explanation: "Bonding conductor R2 should be very low. Elevated readings = poor joint or damaged conductor. AM2 candidates investigate."
            },
            {
              number: 5,
              prompt: "A circuit with an OCPD that trips at 30 A on a circuit rated at 32 A:",
              options: {
                A: "Always healthy",
                B: "Suggests over-loading — the load is at or above the OCPD rating; investigate the actual load profile and either reduce the load or upgrade the OCPD/cable as a complete system",
                C: "Replace cable",
                D: "Up-rate the OCPD to 40 A to give more headroom"
              },
              answer: "B",
              explanation: "Trip at 30 A on 32 A OCPD = thermal trip on long-duration overload. Cable rating must support the OCPD rating. AM2 candidates assess as a system."
            },
            {
              number: 6,
              prompt: "A 'phantom' Zs reading from an instrument:",
              options: {
                A: "Is normal",
                B: "Can result from poor connection of the test leads, or capacitive coupling on a long parallel run; verify by re-testing with the leads firmly attached and at a different location on the same circuit",
                C: "Replace meter",
                D: "Calibration error"
              },
              answer: "B",
              explanation: "Test instrument connection issues are common. AM2 candidates verify by retest with firm connections."
            },
            {
              number: 7,
              prompt: "A circuit's polarity fault detected during dead testing:",
              options: {
                A: "Energise anyway",
                B: "Rectify before energising — wire the conductors to their correct terminals; retest polarity to confirm",
                C: "Replace cable",
                D: "Skip rectification"
              },
              answer: "B",
              explanation: "Faults must be rectified before energising. Polarity is a safety-critical test. AM2 candidates rectify and retest."
            },
            {
              number: 8,
              prompt: "A 'tripped' RCD that won't re-set:",
              options: {
                A: "Always faulty",
                B: "Indicates the fault that caused the trip is still present — re-investigate the IR readings, check for moisture, look for damaged appliances; the RCD is doing its job",
                C: "Replace RCD",
                D: "Force on"
              },
              answer: "B",
              explanation: "RCDs that won't re-set are protecting against an active fault. AM2 candidates investigate and clear the fault before retrying."
            },
            {
              number: 9,
              prompt: "A 'borrowed cpc' between two circuits:",
              options: {
                A: "Healthy",
                B: "Indicates one circuit's cpc is connected to another's — this can compromise the protective earthing; localise the cross-connection at a JB or accessory and rectify",
                C: "Pass",
                D: "Replace circuit"
              },
              answer: "B",
              explanation: "Borrowed cpcs are dangerous. AM2 candidates detect and rectify."
            },
            {
              number: 10,
              prompt: "A live circuit's polarity test reveals 230 V at the lamp's central pin and 0 V at the screw shell:",
              options: {
                A: "Reversed",
                B: "Correct — line at the centre pin, neutral at the screw shell; this is BS standard and prevents finger contact with line during lamp changes",
                C: "Faulty",
                D: "Inconclusive — repeat the test with a low-impedance voltage indicator"
              },
              answer: "B",
              explanation: "BS standard pin polarity for lamp holders. AM2 candidates verify and confirm."
            },
            {
              number: 11,
              prompt: "A 'Zs higher than Ze + R1+R2 calculation' result:",
              options: {
                A: "Is impossible",
                B: "Suggests a poor cpc connection — the loop impedance is higher than the calculated sum because of a high-resistance path; investigate the cpc continuity",
                C: "Is healthy",
                D: "Replace OCPD"
              },
              answer: "B",
              explanation: "Zs measured = Ze + R1+R2 in a healthy installation. Higher Zs measured indicates additional resistance — typically a poor termination. AM2 candidates investigate."
            },
            {
              number: 12,
              prompt: "A 'no trip' on RCD test at 5×IΔn:",
              options: {
                A: "Pass",
                B: "Fail — RCD must trip at 5×IΔn within 40 ms (general type); the RCD has failed and must be replaced",
                C: "Replace circuit",
                D: "Acceptable for an S-type RCD only"
              },
              answer: "B",
              explanation: "Failure to trip = unsafe RCD. Replacement is the only safe response. AM2 candidates do not certify failed RCDs."
            },
            {
              number: 13,
              prompt: "A 'dimmer' on a lighting circuit causing low IR readings:",
              options: {
                A: "Faulty wiring",
                B: "Common — dimmers and SPDs can read low IR at 500 V DC due to internal voltage-sensitive components; disconnect or isolate them and retest",
                C: "Replace cable",
                D: "Replace OCPD"
              },
              answer: "B",
              explanation: "Voltage-sensitive equipment disturbs IR readings. AM2 candidates disconnect electronics before testing the wiring."
            },
            {
              number: 14,
              prompt: "An 'unbalanced' three-phase load causing high neutral current:",
              options: {
                A: "Always faulty",
                B: "Indicates the line currents are not balanced — review the load distribution and consider rebalancing across phases; harmonic loads also contribute",
                C: "Replace cable",
                D: "Disconnect the neutral conductor at the origin to remove the imbalance"
              },
              answer: "B",
              explanation: "Unbalanced loads cause neutral current. AM2 candidates understand and can advise on rebalancing."
            },
            {
              number: 15,
              prompt: "A 'discoloured' (browned) terminal at an accessory:",
              options: {
                A: "Cosmetic",
                B: "Suggests heat damage from a poor termination — the terminal has been hot, possibly from loose connection or undersized conductor; investigate, re-terminate or replace as required",
                C: "Normal",
                D: "Replace cable"
              },
              answer: "B",
              explanation: "Browning = heat damage. AM2 candidates take this seriously — heat at terminals is dangerous and indicates an underlying fault."
            },
            {
              number: 16,
              prompt: "An RCD trips on the RCBO test:",
              options: {
                A: "Replace RCBO",
                B: "Could be a real fault — investigate the downstream wiring with IR test; if wiring is healthy, the RCBO has failed and must be replaced",
                C: "Indicates correct selectivity between the upstream RCD and the RCBO",
                D: "Cable fault"
              },
              answer: "B",
              explanation: "AM2 candidates rule out wiring faults before condemning equipment."
            },
            {
              number: 17,
              prompt: "A 'periodic test' of a 30 mA RCD shows 20 ms at 5×IΔn:",
              options: {
                A: "Pass",
                B: "Pass — well within the 40 ms maximum; the RCD is operating well",
                C: "Fail",
                D: "Replace"
              },
              answer: "B",
              explanation: "20 ms = healthy. AM2 candidates record values."
            },
            {
              number: 18,
              prompt: "A 'cable damage' in safe-zone routing:",
              options: {
                A: "Indicates compliant installation — safe zones cannot be damaged",
                B: "Possibly: nail/screw penetration in non-safe-zone routing, OR mechanical damage at a joist hole, OR thermal damage from grouping; safe-zone routing is part of installation discipline",
                C: "Always healthy",
                D: "Replace cable"
              },
              answer: "B",
              explanation: "Reg 522.6.202 requires safe zones or mechanical protection or RCD. Damage outside safe zones suggests safe-zone non-compliance. AM2 candidates investigate routing."
            },
            {
              number: 19,
              prompt: "A 'high' Ze measurement of 1.2 Ω on a TN-S supply:",
              options: {
                A: "Acceptable",
                B: "Higher than typical (TN-S typically <0.8 Ω) — query with the DNO; could indicate a problem with the supply earthing arrangement",
                C: "Always pass",
                D: "Bond the MET to the rising water main to bring Ze within range"
              },
              answer: "B",
              explanation: "Ze typical: TN-C-S <0.35 Ω, TN-S <0.8 Ω. Higher values warrant DNO investigation. AM2 candidates know typical ranges."
            },
            {
              number: 20,
              prompt: "After fault diagnosis and rectification, the candidate's documentation includes:",
              options: {
                A: "Just the symptom",
                B: "The original symptom, the diagnosis steps taken, the cause identified, the rectification action, the retest results, and the customer briefing",
                C: "Just the test",
                D: "Verbal only"
              },
              answer: "B",
              explanation: "Complete fault-find report. AM2 candidates produce thorough records that support future maintenance."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "A 'lamp out' fault localised by the candidate:",
              options: {
                A: "Always cable",
                B: "Test lamp first (replace), then test the wall switch, then verify the wiring at the lamp holder; most lamp faults are simple",
                C: "Always wiring",
                D: "Replace circuit"
              },
              answer: "B",
              explanation: "AM2 fault-find: simple to complex. Test lamp → switch → wiring. Most are simple."
            },
            {
              number: 2,
              prompt: "A 'no isolation' detected on test (circuit not opening at the OCPD):",
              options: {
                A: "Always isolated",
                B: "Possibly — the OCPD has internal failure (welded contacts), OR back-feed from another circuit; carry out FULL safe isolation procedure (lock off, prove dead at the point of work) before proceeding",
                C: "Replace OCPD",
                D: "Carry on"
              },
              answer: "B",
              explanation: "OCPD failure to open is rare but documented. Backfeed is more common. AM2 candidates do safe isolation regardless."
            },
            {
              number: 3,
              prompt: "A '30 mA RCD' that doesn't trip under instrument testing:",
              options: {
                A: "Pass",
                B: "Fail — RCD has failed; replace immediately and retest the new device against the acceptance criteria",
                C: "Calibration",
                D: "Replace circuit"
              },
              answer: "B",
              explanation: "Failed RCD = unsafe. Replacement is the only response. AM2 candidates do not certify failed devices."
            },
            {
              number: 4,
              prompt: "A 'voltage drop' problem at the end of a 60 m cable run:",
              options: {
                A: "Always cable damaged",
                B: "Excessive cable length and undersized cable — voltage drop exceeds Section 525 limits; rectify by larger cable, shorter run, or different supply arrangement",
                C: "Replace OCPD",
                D: "Increase the supply voltage at the origin to compensate"
              },
              answer: "B",
              explanation: "Section 525 voltage drop limits: 3% for lighting, 5% for power. Long runs need larger cables. AM2 candidates calculate and rectify."
            },
            {
              number: 5,
              prompt: "A 'resistance' developing at a screw terminal over time:",
              options: {
                A: "Healthy",
                B: "Indicates loosening (cold flow), corrosion, or oxidation; re-terminate to manufacturer's torque spec",
                C: "Cable fault",
                D: "Replace circuit"
              },
              answer: "B",
              explanation: "Loose terminations cause heat → more resistance → more heat. AM2 candidates re-terminate at periodic inspection if observed."
            },
            {
              number: 6,
              prompt: "A 'tripped' OCPD with 'no obvious fault':",
              options: {
                A: "Always healthy",
                B: "Investigate IR, polarity, continuity; if no faults found, the trip may have been a transient (fault current pulse, lightning, voltage transient) — close and monitor",
                C: "Replace OCPD",
                D: "Force-close the OCPD by holding the toggle and continue with the work"
              },
              answer: "B",
              explanation: "AM2 candidates evaluate, document, monitor."
            },
            {
              number: 7,
              prompt: "A 'stuck' RCD test button:",
              options: {
                A: "Faulty RCD",
                B: "May be — clean the test button mechanism; if still stuck, the RCD's mechanical action is compromised and the device should be replaced",
                C: "Always replace",
                D: "Cable fault"
              },
              answer: "B",
              explanation: "Stuck buttons reflect mechanism wear. AM2 candidates assess and replace if needed."
            },
            {
              number: 8,
              prompt: "A 'continuity' test of a known-broken cpc:",
              options: {
                A: "Reads zero",
                B: "Reads infinity (open circuit) — confirming the break; localise by half-split testing along the cpc to find the breakpoint",
                C: "Reads 1 Ω",
                D: "Reads identical to a healthy cpc until the OCPD is closed"
              },
              answer: "B",
              explanation: "Open conductor = infinite resistance. AM2 candidates use this finding to localise the break."
            },
            {
              number: 9,
              prompt: "A 'high' L-PE IR reading is healthy:",
              options: {
                A: "Always",
                B: "Yes — high IR (>1 MΩ, often much higher) is healthy. Low IR is the fault condition",
                C: "Sometimes",
                D: "Never"
              },
              answer: "A",
              explanation: "IR direction: high = good. AM2 candidates know."
            },
            {
              number: 10,
              prompt: "A 'short circuit' between L and N on test:",
              options: {
                A: "Healthy",
                B: "Direct short — IR reads near zero; trace and rectify; common: nail/screw, pinched cable, accessory damage",
                C: "Replace OCPD",
                D: "Indicates a healthy circuit with parallel earth paths"
              },
              answer: "B",
              explanation: "L-N short = severe. Causes are often physical damage. AM2 candidates investigate carefully."
            },
            {
              number: 11,
              prompt: "A 'partial' insulation breakdown (e.g. 0.3 MΩ):",
              options: {
                A: "Always pass",
                B: "Fail (below 1 MΩ) — investigate by progressive disconnection and rectify; partial breakdown can worsen quickly",
                C: "Replace cable",
                D: "Pass if measured at 250 V DC instead of 500 V DC"
              },
              answer: "B",
              explanation: "Partial breakdown is a fail. Rectify before energising. AM2 candidates know the criterion."
            },
            {
              number: 12,
              prompt: "A 'live' polarity test at a switch reads 230 V even when the switch is OFF:",
              options: {
                A: "Healthy",
                B: "Polarity fault — the switch is in the neutral conductor; rewire to interrupt line only and retest",
                C: "Replace switch",
                D: "Phantom voltage from capacitive coupling — ignore and continue"
              },
              answer: "B",
              explanation: "Switches must interrupt line. AM2 candidates rectify."
            },
            {
              number: 13,
              prompt: "A 'flickering' lamp:",
              options: {
                A: "Always faulty",
                B: "Common: loose bulb, loose neutral termination at the lamp or upstream, or a dimmer mismatch with LED bulbs; investigate the connection first",
                C: "Replace lamp",
                D: "Replace circuit"
              },
              answer: "B",
              explanation: "AM2 fault-find: physical first (loose bulb), then connections, then circuit. Most fixes are local."
            },
            {
              number: 14,
              prompt: "A 'periodic' inspection finds an undersized cable for the OCPD:",
              options: {
                A: "Healthy",
                B: "Fail — cable rating is not coordinated with the OCPD; record on EICR, recommend rectification (replace cable, downsize OCPD, or other compliant solution)",
                C: "Replace OCPD",
                D: "Replace customer"
              },
              answer: "B",
              explanation: "Cable-OCPD coordination is fundamental. AM2 candidates code findings on EICR appropriately."
            },
            {
              number: 15,
              prompt: "A 'swapped' L and N at an accessory:",
              options: {
                A: "Replace accessory",
                B: "Rewire correctly — line to L terminal, neutral to N terminal — and retest polarity",
                C: "Replace cable",
                D: "Acceptable provided the cpc is correctly terminated"
              },
              answer: "B",
              explanation: "Polarity rectification = rewire to correct terminals. AM2 candidates do this routinely."
            },
            {
              number: 16,
              prompt: "A 'ringing' or 'singing' from a circuit when energised:",
              options: {
                A: "Always faulty",
                B: "Often indicates a partial discharge or loose connection arcing intermittently — investigate immediately and rectify; this is a serious fault",
                C: "Normal",
                D: "Replace circuit"
              },
              answer: "B",
              explanation: "Audible discharge = serious fault. AM2 candidates take this seriously."
            },
            {
              number: 17,
              prompt: "A 'measured' Zs lower than expected:",
              options: {
                A: "Always healthy",
                B: "Could indicate parallel earth path (e.g. metalwork bonded that creates a parallel earth route) — verify the test method and the bonding arrangement",
                C: "Replace cable",
                D: "Always indicates a faulty test instrument"
              },
              answer: "B",
              explanation: "Lower Zs is healthy unless it indicates parallel paths. AM2 candidates verify."
            },
            {
              number: 18,
              prompt: "An 'open' neutral at a JB:",
              options: {
                A: "Healthy",
                B: "Causes loss of supply downstream (with single-phase) and possible voltage rise on the neutral conductor; rectify the JB and retest",
                C: "Replace JB",
                D: "Trips the OCPD on the line conductor instantly"
              },
              answer: "B",
              explanation: "Open neutral on single-phase = loss of return path. Investigate and rectify."
            },
            {
              number: 19,
              prompt: "A 'polarity' fault on a downstream socket from a working upstream socket:",
              options: {
                A: "Replace upstream",
                B: "Investigate the wiring at the downstream socket — the L and N may have been swapped at the socket's terminals; rectify and retest",
                C: "Replace cable",
                D: "Indicates the upstream socket has caused the cross-connection in the cable run"
              },
              answer: "B",
              explanation: "Polarity faults can be local at a single accessory. AM2 candidates trace and rectify."
            },
            {
              number: 20,
              prompt: "After rectification, the candidate's responsibility is to:",
              options: {
                A: "Walk away",
                B: "Re-test the affected items, document the fault and rectification, update the EICR or schedule of test results, and brief the customer",
                C: "Skip retest",
                D: "Verbally tell only"
              },
              answer: "B",
              explanation: "Complete documentation. AM2 candidates produce records."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "A 'no power' fault at the consumer unit:",
              options: {
                A: "Replace CU",
                B: "Verify supply at the meter, then at the main switch, then through to the OCPDs; localise systematically; could be DNO supply issue, blown service fuse, or main switch fault",
                C: "Replace cable",
                D: "Replace customer"
              },
              answer: "B",
              explanation: "AM2 systematic fault-find. Verify each stage."
            },
            {
              number: 2,
              prompt: "A 'high' R1+R2 on one socket of a ring:",
              options: {
                A: "Healthy",
                B: "Suggests a fault at or after that socket — broken conductor, poor termination, or spur from spur; investigate the wiring at that socket and the next one along the ring",
                C: "Replace cable",
                D: "Confirms the ring is correctly cross-connected at the consumer unit"
              },
              answer: "B",
              explanation: "Local high R1+R2 = local fault. AM2 candidates investigate methodically."
            },
            {
              number: 3,
              prompt: "A '500 V DC' IR test on a circuit with installed dimmers:",
              options: {
                A: "Always damages",
                B: "May damage electronics — disconnect dimmers/SPDs/electronic accessories before testing, OR use a multifunction tester's auto-mode that selectively applies test voltage",
                C: "Always passes",
                D: "Test at 1000 V DC instead to override the dimmer's threshold"
              },
              answer: "B",
              explanation: "Voltage-sensitive equipment can be damaged by 500 V DC. AM2 candidates know to disconnect or use auto-mode."
            },
            {
              number: 4,
              prompt: "A '30 mA RCD' on a TT system measured RA = 800 Ω:",
              options: {
                A: "Always passes",
                B: "Compliant — 800 × 0.030 = 24 V (below 50 V touch voltage); but reliability would benefit from a lower RA value (e.g. <200 Ω)",
                C: "Always fails",
                D: "Replace electrode"
              },
              answer: "B",
              explanation: "Compliant calculation. AM2 candidates show the calculation and recommend improvement for reliability."
            },
            {
              number: 5,
              prompt: "A 'newly-installed' circuit's tests reveal:",
              options: {
                A: "Always pass",
                B: "All test values must meet acceptance criteria — IR ≥1 MΩ, Zs ≤ corrected max, RCD times within range, polarity correct, continuity correct, functional working — fail any one and the certification is invalid",
                C: "Always fail",
                D: "Only the live tests need to satisfy the acceptance criteria"
              },
              answer: "B",
              explanation: "Acceptance is comprehensive. AM2 candidates verify every test."
            },
            {
              number: 6,
              prompt: "A '30 mA RCBO' test reading 380 ms at 1×IΔn:",
              options: {
                A: "Pass",
                B: "Fail — exceeds 300 ms; investigate or replace",
                C: "Always pass",
                D: "Replace cable"
              },
              answer: "B",
              explanation: "Above 300 ms = fail. AM2 candidates know criteria."
            },
            {
              number: 7,
              prompt: "A 'borrowed neutral' between lighting and ring final:",
              options: {
                A: "Healthy",
                B: "Indicates the lighting circuit's neutral returns via the ring final's neutral — separates the neutrals at the JB or back-box and rectifies the wiring",
                C: "Replace cable",
                D: "Replace OCPD"
              },
              answer: "B",
              explanation: "Common in older installations. AM2 candidates rectify by separating neutrals."
            },
            {
              number: 8,
              prompt: "A 'swapped phase' on a three-phase motor circuit:",
              options: {
                A: "Reverses motor direction",
                B: "Reverses motor direction — diagnose with phase-rotation indicator and rectify by swapping any two phases at the supply or motor terminals (preferably at the supply for system consistency)",
                C: "Stops motor",
                D: "Doubles the motor's running speed"
              },
              answer: "B",
              explanation: "Phase rotation determines motor direction. AM2 candidates know how to verify and rectify."
            },
            {
              number: 9,
              prompt: "A 'tripped' MCB after long-duration normal operation:",
              options: {
                A: "Healthy",
                B: "Thermal overload — investigate the actual load; cable, OCPD, and load must be coordinated as a system",
                C: "Replace MCB",
                D: "Replace cable"
              },
              answer: "B",
              explanation: "Slow trip = thermal. AM2 candidates measure and assess."
            },
            {
              number: 10,
              prompt: "A 'brown' terminal observed at periodic inspection:",
              options: {
                A: "Healthy",
                B: "Heat damage — re-terminate or replace; investigate the cause (loose connection, undersized conductor, overloaded circuit)",
                C: "Replace cable",
                D: "Replace customer"
              },
              answer: "B",
              explanation: "Heat damage at terminals is dangerous. AM2 candidates rectify."
            },
            {
              number: 11,
              prompt: "A 'loose' cord-grip on a 13 A plug:",
              options: {
                A: "Healthy",
                B: "Re-clamp the cord-grip on the outer sheath of the cable — tightly enough to prevent the cord pulling out, not so tight as to crush the cores",
                C: "Replace plug",
                D: "Replace cable"
              },
              answer: "B",
              explanation: "Cord-grips must be on the sheath. AM2 candidates rectify."
            },
            {
              number: 12,
              prompt: "A 'high' L-N IR (>1000 MΩ) reading:",
              options: {
                A: "Faulty",
                B: "Healthy — very high IR is excellent; the circuit's insulation is in good condition",
                C: "Always faulty",
                D: "Replace circuit"
              },
              answer: "B",
              explanation: "Higher = better. AM2 candidates know."
            },
            {
              number: 13,
              prompt: "A 'three-phase' load with one phase at lower current than the others:",
              options: {
                A: "Always faulty",
                B: "Could be: motor mechanical issue, cable damage on that phase, or unbalanced supply; investigate by measuring current on each phase, then by Zs and IR on each phase conductor",
                C: "Replace motor",
                D: "Indicates correct delta operation — phase imbalance is expected"
              },
              answer: "B",
              explanation: "AM2 fault-find: measure → analyse → localise → rectify."
            },
            {
              number: 14,
              prompt: "A 'failed' RCD on test that won't trip at 5×IΔn:",
              options: {
                A: "Pass",
                B: "Fail — replace; the RCD has lost its protective function and cannot remain in service",
                C: "Always replace cable",
                D: "Acceptable provided 1×IΔn trips within 300 ms"
              },
              answer: "B",
              explanation: "Failed RCDs are replaced. AM2 candidates do not certify failed devices."
            },
            {
              number: 15,
              prompt: "A '30 mA' RCD with measured trip times of 120 ms (0.5×), 180 ms (1×), 22 ms (5×):",
              options: {
                A: "All fail",
                B: "Pass — 0.5× should be NO trip; the test result of 'trip in 120 ms' is a FAIL; the RCD must be replaced (sensitivity has drifted)",
                C: "All pass",
                D: "Pass — only the 5×IΔn time matters for acceptance"
              },
              answer: "B",
              explanation: "0.5×IΔn must NOT trip (within 2 s). Tripping at 0.5× = sensitivity drift = replace. AM2 candidates know all three criteria."
            },
            {
              number: 16,
              prompt: "A 'damp' enclosure showing dripping water during inspection:",
              options: {
                A: "Cosmetic",
                B: "IP failure — investigate the cable entry, gland sealing, and the enclosure's overall sealing; rectify and retest",
                C: "Healthy",
                D: "Replace cable"
              },
              answer: "B",
              explanation: "Water in enclosures is unsafe. AM2 candidates rectify the IP failure."
            },
            {
              number: 17,
              prompt: "A 'replaced' OCPD that won't close:",
              options: {
                A: "Faulty new OCPD",
                B: "Possibly the OCPD has tripped on a real fault — verify the downstream wiring before condemning the new device",
                C: "Replace cable",
                D: "Force-close by holding the toggle — most new OCPDs need bedding-in"
              },
              answer: "B",
              explanation: "Don't condemn new equipment without testing. AM2 candidates verify."
            },
            {
              number: 18,
              prompt: "A 'periodic' inspection observation of unsleeved cpc in a back-box:",
              options: {
                A: "Healthy",
                B: "Code C2 — potentially dangerous; the bare cpc could short to live conductors; rectify by sleeving",
                C: "C3",
                D: "C1"
              },
              answer: "B",
              explanation: "Unsleeved cpc near live conductors = C2. AM2 candidates apply correctly."
            },
            {
              number: 19,
              prompt: "A 'corrosion' at a bonding clamp:",
              options: {
                A: "Cosmetic",
                B: "Investigate immediately — corrosion adds resistance to the bonding path; clean, re-make the connection, and retest the bonding continuity",
                C: "Replace pipe",
                D: "Acceptable — corrosion confirms the bond has carried earth current"
              },
              answer: "B",
              explanation: "Bonding clamps must be low-resistance. Corrosion = high resistance = unsafe. AM2 candidates rectify."
            },
            {
              number: 20,
              prompt: "After completing fault diagnosis and rectification, the candidate's final responsibility is to:",
              options: {
                A: "Walk away",
                B: "Confirm the fault is rectified by retest, document everything, brief the customer, and provide the relevant updated certificates or notices",
                C: "Skip retest",
                D: "Verbal only"
              },
              answer: "B",
              explanation: "Complete handover. AM2 candidates close the loop with documentation."
            }
          ]
        }
      ]
    },
    {
      id: "section-6",
      title: "Section 6 — Functional Testing & Commissioning",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "The correct sequence for initially energising a newly-installed installation is:",
              options: {
                A: "Close every MCB and RCD first to prove they hold against load, then close the main switch to energise the entire installation in one step",
                B: "With all final-circuit devices OFF (including RCDs), close the main switch; verify supply polarity and Ze at the origin; then energise each circuit in turn, carrying out the relevant live tests (polarity live, Zs, RCD times, functional) before moving to the next",
                C: "Plug in representative appliances on every circuit first, so that the live tests can include real-world load currents from the outset",
                D: "Back-feed the installation from a known-energised socket on an adjacent circuit and work outwards through the consumer unit from there"
              },
              answer: "B",
              explanation: "Selective circuit-by-circuit energisation isolates any fault to a known circuit and keeps the installation under control. It also allows live tests to be carried out and recorded as each circuit is brought into service. Never back-feed the installation."
            },
            {
              number: 2,
              prompt: "During RCD commissioning, a general-purpose 30 mA RCD (BS EN 61008/61009) measures: 0.5×IΔn — no trip in 2 s; 1×IΔn — trip at 180 ms; 5×IΔn — trip at 35 ms. The correct record is:",
              options: {
                A: "Pass — all three criteria met (no trip at 0.5×, ≤ 300 ms at 1×, ≤ 40 ms at 5×)",
                B: "Fail at 5×IΔn — 35 ms is below the maximum permitted figure but exceeds the 25 ms manufacturer target for general-type RCDs",
                C: "Fail at 1×IΔn — 180 ms exceeds the 150 ms half-rating proof figure that BS 7671 calls up for general-type RCDs",
                D: "Fail at 0.5×IΔn — the device must trip at half rated current within 2 s, but on this test it remained closed throughout"
              },
              answer: "A",
              explanation: "General-type 30 mA RCD limits: 0.5×IΔn must NOT trip within 2 s, 1×IΔn must trip in ≤ 300 ms, 5×IΔn must trip in ≤ 40 ms. All three must be recorded. S-type (time-delayed) RCDs have different figures."
            },
            {
              number: 3,
              prompt: "Commissioning a three-phase distribution board, a phase-rotation indicator at the DB shows reverse rotation. The correct action is to:",
              options: {
                A: "Leave it — phase rotation only matters for motor-driven plant",
                B: "Identify and correct the cross-connection (at the origin or within the installation) so rotation is in the expected L1–L2–L3 sequence, then re-verify; correcting at an individual motor only hides the problem for every other three-phase load on the board",
                C: "Change the motor windings on every three-phase machine connected to the board",
                D: "Swap the neutral conductor and one phase at the origin to invert the apparent rotation"
              },
              answer: "B",
              explanation: "Rotation at the DB must match the convention so every three-phase load (motors, HVAC plant, lifts, fire pumps) starts the correct way. Fixing rotation at a single motor only masks the board-level cross."
            },
            {
              number: 4,
              prompt: "Functional testing of a two-way and intermediate lighting circuit requires you to:",
              options: {
                A: "Confirm one strapper conductor carries voltage when its associated switch is operated, then move on once that single combination is proven",
                B: "Operate each switch (both way-switches and each intermediate switch) through every combination, confirming the lamp turns ON/OFF correctly in each state and is off when every switch is in the rest position",
                C: "Test only the insulation resistance of the circuit at 500 V DC, with all switches placed in the rest position before the test is applied",
                D: "Measure the lamp current at each switch position and confirm it falls within ±10% of the design value calculated from the lamp wattage"
              },
              answer: "B",
              explanation: "All-combinations operation is the only way to prove the wiring of a multi-way lighting circuit. A miswire on an intermediate switch can look correct until a specific combination reveals it — so every sequence must be exercised."
            },
            {
              number: 5,
              prompt: "At handover of a new installation the minimum documentation issued to the client normally includes:",
              options: {
                A: "The signed EIC alone, with the schedules and other supporting documents retained by the contractor for audit purposes",
                B: "The signed EIC with its Schedule of Inspections and Schedule of Test Results, any Part P notification/compliance certificate where applicable, and operation/maintenance information — including a circuit list, protective device schedule, and manufacturer instructions for installed equipment",
                C: "A verbal walk-through with no written documents on the day, provided the duty holder confirms acceptance in writing within 28 days of the work",
                D: "A note of the RCD test-button location and a one-page summary of the protective device ratings on the consumer unit, with no schedules"
              },
              answer: "B",
              explanation: "BS 7671 and the Building Regulations set out the minimum handover pack. The two schedules carry the technical evidence behind the EIC; Part P notification/certification is required for notifiable domestic work in England; O&M information enables the client to operate and maintain the installation safely."
            },
            {
              number: 6,
              prompt: "The first live test after a new circuit is energised is typically:",
              options: {
                A: "Functional test",
                B: "Live polarity check at the origin and at each accessory, to confirm that line is at line, neutral is at neutral, and the cpc terminations are correct under live conditions",
                C: "RCD time test only",
                D: "IR test live"
              },
              answer: "B",
              explanation: "Live polarity is the safety check that exposes any installation crosses missed during dead testing. AM2 candidates do this first to confirm the circuit is wired correctly before further live tests."
            },
            {
              number: 7,
              prompt: "When commissioning a new lighting circuit with multi-way switching, the order of testing is:",
              options: {
                A: "Functional only",
                B: "Dead tests (continuity, IR, polarity) → energise → live polarity → Zs → RCD (where applicable) → functional verification of every switching combination",
                C: "Live tests only",
                D: "Energise first, then carry out IR and continuity at 500 V DC under live conditions"
              },
              answer: "B",
              explanation: "Tests follow the GN3 sequence. AM2 candidates apply this — dead first, energise, live tests, functional last."
            },
            {
              number: 8,
              prompt: "A 30 mA RCD's commissioning record requires:",
              options: {
                A: "Just the test button check",
                B: "Test button operation, instrument-test trip times at 0.5× IΔn (no trip in 2 s), 1× IΔn (≤ 300 ms general type) and 5× IΔn (≤ 40 ms), and functional confirmation of downstream operation",
                C: "Functional only",
                D: "Visual only"
              },
              answer: "B",
              explanation: "Complete RCD commissioning record. AM2 candidates record everything."
            },
            {
              number: 9,
              prompt: "A new three-phase induction motor's first energisation:",
              options: {
                A: "Run at full load",
                B: "Energise momentarily ('bumping') to confirm correct rotation, then de-energise and verify direction, before sustained operation under load",
                C: "Run at full load immediately",
                D: "Skip rotation check"
              },
              answer: "B",
              explanation: "Bump-test confirms rotation safely. AM2 candidates apply this on motor commissioning."
            },
            {
              number: 10,
              prompt: "Functional testing of an emergency lighting installation:",
              options: {
                A: "Disconnect supply for 1 minute",
                B: "Test per BS 5266 — short-duration discharge test (typically 1 hour discharge), longer annual discharge test (3 hours), and verify all luminaires illuminate with the appropriate duration",
                C: "Light the fittings briefly",
                D: "Skip testing"
              },
              answer: "B",
              explanation: "BS 5266 specifies the test routine. AM2 candidates know the test intervals and durations."
            },
            {
              number: 11,
              prompt: "A new fire-alarm circuit's commissioning:",
              options: {
                A: "No testing required",
                B: "Per BS 5839 — verify circuit IR (≥ specific values), continuity, end-of-line resistance, alarm operation at all sounders/visual devices, fault detection circuits, and certification by the alarm engineer",
                C: "Functional only",
                D: "Visual only"
              },
              answer: "B",
              explanation: "BS 5839 covers fire alarm commissioning. AM2 candidates know the standard governs and applies it."
            },
            {
              number: 12,
              prompt: "At handover, the candidate explains to the customer:",
              options: {
                A: "Nothing — they should know",
                B: "How to use the consumer unit (location of main switch, RCD test button, individual MCBs), the meaning of the warning notices, the periodic inspection date, and any specific equipment instructions",
                C: "Just the EIC",
                D: "Just the price"
              },
              answer: "B",
              explanation: "Customer briefing is part of professional handover. AM2 candidates explain operation and maintenance clearly."
            },
            {
              number: 13,
              prompt: "The 'as-built' drawings issued at handover should:",
              options: {
                A: "Reflect original design",
                B: "Reflect the actual installation as completed — including any changes from the original design, with circuit numbers, accessory locations, and any modifications",
                C: "Be omitted",
                D: "Be the bid drawings"
              },
              answer: "B",
              explanation: "As-built drawings are the future maintainer's reference. They must reflect actual installation, not design intent. AM2 candidates produce or verify them."
            },
            {
              number: 14,
              prompt: "A consumer unit's circuit list must:",
              options: {
                A: "Be approximate",
                B: "Be accurate, complete, fixed to the consumer unit lid (or in a location adjacent), with each circuit's number, description, OCPD type and rating, and protected status (RCD/RCBO)",
                C: "Be hidden",
                D: "Be on the customer's invoice"
              },
              answer: "B",
              explanation: "Reg 514.9 calls up identification. The circuit list is the working document for future operators. AM2 candidates produce a clear, accurate list."
            },
            {
              number: 15,
              prompt: "A new installation's commissioning load test:",
              options: {
                A: "Skip testing",
                B: "Apply representative loads to verify the cable, OCPD and supply can carry the design current; observe for warming at terminations or unexpected behaviour",
                C: "Full load only",
                D: "No load"
              },
              answer: "B",
              explanation: "Load testing verifies the system as built. AM2 candidates may apply representative loads where appropriate (and where customer use can be replicated)."
            },
            {
              number: 16,
              prompt: "A 30 mA RCD's commissioning routine should include:",
              options: {
                A: "Test button only",
                B: "Manufacturer's test button (mechanical), instrument tests at 0.5×, 1× and 5× IΔn (with timing), and functional test (does the protected circuit interrupt as expected)",
                C: "Functional only",
                D: "Visual only"
              },
              answer: "B",
              explanation: "Full RCD commissioning routine. AM2 candidates record every value."
            },
            {
              number: 17,
              prompt: "A 'dead' multi-way lighting test:",
              options: {
                A: "IR only",
                B: "Dead tests verify continuity of all conductors (including switch wires), IR between live conductors and earth, and polarity at every accessory; cross-connecting test methods can verify multi-way wiring",
                C: "IR only",
                D: "Continuity only"
              },
              answer: "B",
              explanation: "Multi-way circuit testing requires careful attention. AM2 candidates use systematic dead-test methods."
            },
            {
              number: 18,
              prompt: "A 'phasing' check on a three-phase circuit at commissioning:",
              options: {
                A: "Connect a single voltmeter L1-N and assume the rotation is correct if 230 V is read",
                B: "Use a phase-rotation indicator (or phase-sequence meter) to verify L1-L2-L3 rotation; verify each phase voltage to neutral (~230 V) and to other phases (~400 V)",
                C: "Voltage only",
                D: "Skip"
              },
              answer: "B",
              explanation: "Phase-rotation indicators are the AM2 candidate's tool for verifying three-phase commissioning."
            },
            {
              number: 19,
              prompt: "At handover the candidate provides:",
              options: {
                A: "EIC only",
                B: "EIC + Schedule of Inspections + Schedule of Test Results + Part P notification (where applicable) + O&M info + circuit list + relevant equipment manuals — and a customer briefing on operation",
                C: "Just an invoice",
                D: "Verbal handover"
              },
              answer: "B",
              explanation: "Complete documentation pack. AM2 candidates produce and explain everything."
            },
            {
              number: 20,
              prompt: "The final commissioning step before customer handover is:",
              options: {
                A: "Walk away",
                B: "Functional verification of every circuit and item of equipment, removal of all temporary work-related items (locks, tags), and a customer briefing on the installation",
                C: "Skip functional",
                D: "Verbal only"
              },
              answer: "B",
              explanation: "Final commissioning closes the loop. AM2 candidates demonstrate complete handover."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "A new 16 A radial socket circuit's commissioning verifies:",
              options: {
                A: "Functional only",
                B: "Continuity (R1+R2 within expected), IR ≥ 1 MΩ, polarity at every socket, Zs ≤ corrected max, RCD timing within criteria, and functional check at every socket",
                C: "Visual only",
                D: "Voltage only at the first socket"
              },
              answer: "B",
              explanation: "Standard commissioning routine. AM2 candidates apply this for every circuit."
            },
            {
              number: 2,
              prompt: "A 'load test' at commissioning:",
              options: {
                A: "Apply 200% rated current",
                B: "Apply representative loads to verify the system performs as designed without overheating or unusual behaviour",
                C: "Full load test until failure",
                D: "No load"
              },
              answer: "B",
              explanation: "Load testing verifies the system. AM2 candidates apply with care."
            },
            {
              number: 3,
              prompt: "A 30 mA RCBO commissioning measurement:",
              options: {
                A: "5×IΔn = 50 ms",
                B: "5×IΔn = 30 ms (within the 40 ms criterion); record on the schedule of test results",
                C: "5×IΔn = 200 ms",
                D: "5×IΔn = 500 ms"
              },
              answer: "B",
              explanation: "Within criterion. AM2 candidates record values."
            },
            {
              number: 4,
              prompt: "A 'phase rotation' check on a three-phase distribution board:",
              options: {
                A: "Voltage only",
                B: "Use a phase-sequence indicator to verify L1-L2-L3 rotation matches the convention; correct any cross-connection at the source",
                C: "Skip",
                D: "Reverse the neutral and earth at the origin to invert apparent rotation"
              },
              answer: "B",
              explanation: "Standard practice. AM2 candidates verify rotation systematically."
            },
            {
              number: 5,
              prompt: "A new circuit's first energisation should:",
              options: {
                A: "Energise everything at once",
                B: "Be done with the OCPD operating into a known load (no fault), with the candidate prepared to de-energise immediately if the OCPD trips",
                C: "Skip",
                D: "Begin at maximum design load to stress-test the cable"
              },
              answer: "B",
              explanation: "First energisation is monitored. AM2 candidates are prepared to respond to faults."
            },
            {
              number: 6,
              prompt: "A two-way switching circuit's functional test:",
              options: {
                A: "Test one position",
                B: "Test all four switch combinations (way-switch 1: ON, way-switch 2: ON; W1 ON, W2 OFF; W1 OFF, W2 ON; both OFF) and verify the lamp behaviour at each",
                C: "Skip",
                D: "Test only the 'both OFF' state — the others are confirmed by continuity"
              },
              answer: "B",
              explanation: "All combinations. AM2 candidates exercise every switch position."
            },
            {
              number: 7,
              prompt: "A 'three-way' switch test (2 + intermediate):",
              options: {
                A: "Test 2 positions",
                B: "Test all 8 distinct switch combinations and verify the lamp behaviour at each — a single miswire on the intermediate switch reveals only at one combination",
                C: "Skip",
                D: "Test only the intermediate switch — the way switches are tested at the 2-way stage"
              },
              answer: "B",
              explanation: "Comprehensive testing. AM2 candidates know multi-way circuits require all-combinations testing."
            },
            {
              number: 8,
              prompt: "A '3-phase motor' commissioning:",
              options: {
                A: "Run at full speed",
                B: "Energise momentarily, verify rotation, de-energise, swap if needed, energise again, verify, then operate under load",
                C: "Skip rotation",
                D: "Run continuously for 30 minutes before checking direction"
              },
              answer: "B",
              explanation: "Bump-test rotation method. AM2 candidates apply for safety and to verify direction."
            },
            {
              number: 9,
              prompt: "At handover, the customer is briefed on:",
              options: {
                A: "Nothing",
                B: "Operation of the consumer unit, RCD test button (recommended quarterly), main switch location, and the periodic inspection due date — and how to read the labels",
                C: "Price only",
                D: "Verbal only"
              },
              answer: "B",
              explanation: "Customer briefing. AM2 candidates ensure the customer can use and maintain the installation."
            },
            {
              number: 10,
              prompt: "The 'as-built' documentation is:",
              options: {
                A: "The original design",
                B: "An updated set reflecting the actual installation — with the circuit list, the protective device schedule, the schedule of test results, and any deviations from design",
                C: "The customer's request",
                D: "Verbal"
              },
              answer: "B",
              explanation: "As-built reflects reality. AM2 candidates produce or verify these."
            },
            {
              number: 11,
              prompt: "A 'comprehensive' RCD test:",
              options: {
                A: "Test button only",
                B: "Test button + instrument test at 0.5×, 1×, 5× IΔn (general type) — recording all three values + functional confirmation",
                C: "Functional only",
                D: "Visual only"
              },
              answer: "B",
              explanation: "Comprehensive testing. AM2 candidates record everything."
            },
            {
              number: 12,
              prompt: "A 'safety circuit' (e.g. emergency stop) commissioning:",
              options: {
                A: "Verify operation",
                B: "Verify operation per the manufacturer's procedure — typically the e-stop, the safety relay, the contactor, and the load all interlock correctly; record and certify",
                C: "Skip",
                D: "Press the e-stop once and assume the rest of the chain functions"
              },
              answer: "B",
              explanation: "Safety-critical commissioning. AM2 candidates follow the manufacturer's procedure."
            },
            {
              number: 13,
              prompt: "A 'voltage drop' check at commissioning:",
              options: {
                A: "Skip",
                B: "Measure at the furthest point under representative load; verify within Section 525 limits (3% lighting, 5% other circuits)",
                C: "Voltage only",
                D: "Skip"
              },
              answer: "B",
              explanation: "Voltage drop verification. AM2 candidates apply Section 525 limits."
            },
            {
              number: 14,
              prompt: "A 'periodic test' interval after commissioning:",
              options: {
                A: "Annually",
                B: "Per BS 7671 Annex E recommendations — typically 10 years for domestic, 5 years for commercial, but adjusted for risk and use",
                C: "Quarterly",
                D: "Never"
              },
              answer: "B",
              explanation: "Periodic test intervals. AM2 candidates know the recommendations."
            },
            {
              number: 15,
              prompt: "At handover of a commercial installation, the commissioning pack handed to the duty holder typically includes:",
              options: {
                A: "Verbal handover only",
                B: "The signed EIC, both schedules, any Part P notification (where applicable), O&M information, plant-specific commissioning records (e.g. RCD test sheets, motor rotation checks, HVAC interlocks), and as-fitted drawings",
                C: "Just the EIC",
                D: "Just an invoice"
              },
              answer: "B",
              explanation: "A commercial commissioning pack goes beyond the EIC – plant-specific records, as-fitted drawings, and O&M documentation enable the client (and any future electrician) to operate and maintain the installation safely."
            },
            {
              number: 16,
              prompt: "A 'three-phase' motor running with high vibration after commissioning:",
              options: {
                A: "Always faulty",
                B: "Could indicate phase imbalance, misalignment, or a missing phase; investigate the supply and the motor connections; rectify before continued operation",
                C: "Run-in vibration — the motor will settle within 24 hours of operation",
                D: "Replace motor"
              },
              answer: "B",
              explanation: "Vibration on motors is a fault. AM2 candidates investigate cause."
            },
            {
              number: 17,
              prompt: "A 'dim lamp' on a multi-lamp circuit:",
              options: {
                A: "Replace lamp",
                B: "Could indicate voltage drop, undersized cable, loose connection, or wrong lamp specification; investigate before replacing",
                C: "Replace circuit",
                D: "Up-rate the OCPD to deliver more current to the lamp"
              },
              answer: "B",
              explanation: "AM2 fault-find. Investigate cause."
            },
            {
              number: 18,
              prompt: "A 'temperature rise' at a connection during sustained load:",
              options: {
                A: "Cosmetic",
                B: "Suggests poor termination — re-terminate to manufacturer's torque, verify by a thermal check at sustained load",
                C: "Acceptable up to 90°C above ambient on insulated terminals",
                D: "Replace cable"
              },
              answer: "B",
              explanation: "Heat at terminations = trouble. AM2 candidates rectify."
            },
            {
              number: 19,
              prompt: "A 'final' commissioning meeting with customer:",
              options: {
                A: "Email",
                B: "On-site briefing — explain operation, hand over documentation, answer questions, leave the site clean and the installation operational",
                C: "Verbal only",
                D: "Skip the briefing if the customer signs the EIC"
              },
              answer: "B",
              explanation: "Professional handover. AM2 candidates demonstrate."
            },
            {
              number: 20,
              prompt: "The 'commissioning' phase concludes with:",
              options: {
                A: "Walk away",
                B: "All test results recorded, all certificates signed, all documentation handed to the customer, the site clean, and the installation in service — with the customer briefed on operation",
                C: "Just signing",
                D: "Just leaving"
              },
              answer: "B",
              explanation: "Complete commissioning. AM2 candidates demonstrate professional closure."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "A 'three-phase' installation's energisation order:",
              options: {
                A: "Final circuits first, then back-feed to the origin",
                B: "Origin → main switch → distribution boards → final circuits — energising step by step and verifying live tests at each stage",
                C: "All at once",
                D: "Skip stages"
              },
              answer: "B",
              explanation: "Step-by-step energisation. AM2 candidates apply systematically."
            },
            {
              number: 2,
              prompt: "A 'phase rotation' indicator showing reverse rotation at the DB:",
              options: {
                A: "Acceptable",
                B: "Not acceptable — fix at the source (origin or DB) and re-verify; do not fix at individual motors",
                C: "Fix at motor",
                D: "Ignore"
              },
              answer: "B",
              explanation: "Fix at source. AM2 candidates know."
            },
            {
              number: 3,
              prompt: "A 'load' verification at commissioning:",
              options: {
                A: "Skip",
                B: "Apply representative loads, measure voltage drop (within Section 525 limits), measure current draw (within OCPD rating), and observe terminations for warming",
                C: "Maximum load only",
                D: "No-load voltage measurement only"
              },
              answer: "B",
              explanation: "Load verification is comprehensive. AM2 candidates apply."
            },
            {
              number: 4,
              prompt: "A new RCD's first instrument test:",
              options: {
                A: "Test button only",
                B: "Mechanical test button + instrument timing at 0.5×, 1×, 5× IΔn — record all values; the test is repeated at 0° and 180° for sensitive RCDs",
                C: "Skip",
                D: "Functional only"
              },
              answer: "B",
              explanation: "Comprehensive RCD test. AM2 candidates apply."
            },
            {
              number: 5,
              prompt: "A 'no trip' at the test button on a 30 mA RCD:",
              options: {
                A: "Pass",
                B: "Fail — the RCD's mechanical action has failed; replace and retest",
                C: "Try again",
                D: "Skip"
              },
              answer: "B",
              explanation: "No trip = unsafe. AM2 candidates rectify."
            },
            {
              number: 6,
              prompt: "A 'two-way' switching test:",
              options: {
                A: "1 combination",
                B: "All 4 combinations — verify the lamp turns ON in 2 of 4 (and OFF in the other 2)",
                C: "2 combinations",
                D: "Skip"
              },
              answer: "B",
              explanation: "Comprehensive 2-way testing. AM2 candidates verify all positions."
            },
            {
              number: 7,
              prompt: "A '4-way' switching (2 way + 2 intermediate):",
              options: {
                A: "Test 4 combinations",
                B: "Test all 16 combinations — multi-intermediate circuits have many states and a single miswire reveals at one combination",
                C: "Skip half",
                D: "Test 8 combinations — half are mirror states of the others"
              },
              answer: "B",
              explanation: "Comprehensive multi-way testing. AM2 candidates know how many combinations there are."
            },
            {
              number: 8,
              prompt: "A 'three-phase motor' direction check:",
              options: {
                A: "Run at full speed",
                B: "Bump-test at start: brief energisation, verify rotation, de-energise, swap any two phases if rotation is wrong, energise and re-verify",
                C: "Skip",
                D: "Reverse the neutral and any one phase to invert direction"
              },
              answer: "B",
              explanation: "Bump-test method. AM2 candidates apply."
            },
            {
              number: 9,
              prompt: "A 'commissioning' record for a new domestic installation:",
              options: {
                A: "Just EIC",
                B: "EIC + Schedule of Inspections + Schedule of Test Results + Part P notification + O&M information + customer briefing record + supplier/equipment manuals",
                C: "Just signature",
                D: "Verbal"
              },
              answer: "B",
              explanation: "Comprehensive record. AM2 candidates produce."
            },
            {
              number: 10,
              prompt: "A 'load' applied during commissioning:",
              options: {
                A: "Maximum",
                B: "Representative — the load expected during normal operation, applied progressively to verify the system performs as designed",
                C: "Minimum",
                D: "150% of design load to verify trip behaviour"
              },
              answer: "B",
              explanation: "Representative loads. AM2 candidates apply."
            },
            {
              number: 11,
              prompt: "A 'temperature' check at commissioning:",
              options: {
                A: "Skip",
                B: "Check terminations, OCPDs and accessories for unusual warming during sustained representative load; this verifies torque and connection quality",
                C: "Maximum temperature only",
                D: "Inside the consumer unit using ambient air temperature only"
              },
              answer: "B",
              explanation: "Thermal verification. AM2 candidates check for warming."
            },
            {
              number: 12,
              prompt: "A 'final' check before customer handover:",
              options: {
                A: "Walk away",
                B: "Visual inspection, functional verification of every circuit and switch, removal of all temporary work-related items (locks, tags, materials), and customer briefing on operation",
                C: "Skip",
                D: "Verbal"
              },
              answer: "B",
              explanation: "Complete handover. AM2 candidates demonstrate."
            },
            {
              number: 13,
              prompt: "A 'three-phase' rotation check using lamp loads:",
              options: {
                A: "Connect lamps line-to-line and observe brightness differences",
                B: "Connect three lamps L1-N, L2-N, L3-N at the DB; verify all three light up at 230 V; use a phase-rotation indicator for sequence verification",
                C: "Use only one lamp",
                D: "Skip"
              },
              answer: "B",
              explanation: "Lamps verify per-phase voltage. AM2 candidates apply."
            },
            {
              number: 14,
              prompt: "A 'voltage drop' calculation at commissioning:",
              options: {
                A: "Skip",
                B: "Calculate (or measure) at the furthest point — verify within Section 525 limits and the design intent",
                C: "Measure at the consumer unit only — voltage drop downstream is not assessable",
                D: "Skip"
              },
              answer: "B",
              explanation: "Voltage drop verification. AM2 candidates apply."
            },
            {
              number: 15,
              prompt: "A 'sequence of operation' for an emergency stop:",
              options: {
                A: "Press e-stop → load runs down by inertia only → no electrical interruption needed",
                B: "Press e-stop → safety relay drops out → contactor opens → load disconnected; release e-stop → reset required (if latched) → contactor energises → load returns; verify each step",
                C: "Skip",
                D: "Press e-stop → load disconnected → automatic restart after 5 seconds without operator reset"
              },
              answer: "B",
              explanation: "Sequence verification. AM2 candidates apply."
            },
            {
              number: 16,
              prompt: "A 'motor' commissioning sequence:",
              options: {
                A: "Run immediately",
                B: "Pre-checks (cable, terminations, isolators, OCPDs) → energise (bump test for direction) → adjust if needed → operate under load → record commissioning data",
                C: "Skip pre-checks",
                D: "Energise under full mechanical load before any direction check"
              },
              answer: "B",
              explanation: "Motor commissioning is sequential. AM2 candidates apply."
            },
            {
              number: 17,
              prompt: "A 'fire alarm' commissioning per BS 5839:",
              options: {
                A: "Identical to the standard EIC routine — no separate certification required",
                B: "Per the standard — circuit testing, alarm operation testing, fault detection testing, and certification by the alarm engineer",
                C: "Skip",
                D: "Functional only"
              },
              answer: "B",
              explanation: "BS 5839 compliance. AM2 candidates know the standard."
            },
            {
              number: 18,
              prompt: "A 'commissioning certificate' for a fire alarm:",
              options: {
                A: "Same as EIC",
                B: "A separate certificate (BS 5839) covering the fire alarm system specifically; complementary to the EIC for the electrical installation",
                C: "Verbal",
                D: "Skip"
              },
              answer: "B",
              explanation: "Specialist certification. AM2 candidates know the difference."
            },
            {
              number: 19,
              prompt: "A 'completion' meeting with customer:",
              options: {
                A: "Email",
                B: "On-site briefing — operation explanation, documentation handover, answer questions, leave the site clean and operational",
                C: "Verbal only",
                D: "Skip"
              },
              answer: "B",
              explanation: "Customer briefing. AM2 candidates demonstrate."
            },
            {
              number: 20,
              prompt: "The 'last step' before AM2 commissioning ends:",
              options: {
                A: "Walk away",
                B: "All test results recorded, all certificates signed, customer briefed, documentation handed over, site clean, installation operational and safe",
                C: "Just sign",
                D: "Just leave"
              },
              answer: "B",
              explanation: "Complete handover. AM2 candidates demonstrate."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "A 'three-phase' panel meter at commissioning:",
              options: {
                A: "Skip",
                B: "Verify the meter reads correctly on each phase (L1-N, L2-N, L3-N at 230 V; L1-L2, L2-L3, L1-L3 at 400 V); verify the rotation matches the indicator",
                C: "Verify line-to-line at 230 V (all three readings should match this value)",
                D: "Just verify L1"
              },
              answer: "B",
              explanation: "Comprehensive panel meter check. AM2 candidates verify all readings."
            },
            {
              number: 2,
              prompt: "A 'PV inverter' commissioning:",
              options: {
                A: "Energise the AC side first then close the DC isolator under load",
                B: "Per manufacturer — verify DC isolation, AC isolation, IR test of DC and AC sides, polarity at the inverter, and the inverter's grid-connection commissioning sequence",
                C: "Skip",
                D: "AC only"
              },
              answer: "B",
              explanation: "PV inverter commissioning is specific. AM2 candidates may not be solely responsible but should know the framework."
            },
            {
              number: 3,
              prompt: "A 'battery storage' commissioning:",
              options: {
                A: "Connect the battery directly to the AC supply and energise without inverter",
                B: "Per manufacturer — verify isolation between battery, inverter and AC supply; verify all interlocks; commission per manufacturer procedure",
                C: "Skip",
                D: "Functional only"
              },
              answer: "B",
              explanation: "Battery commissioning. AM2 candidates know the safety implications."
            },
            {
              number: 4,
              prompt: "A 'commissioning' load applied gradually:",
              options: {
                A: "All at once",
                B: "Apply load progressively, monitoring for any unexpected behaviour; verify the system as designed at each stage",
                C: "Maximum first",
                D: "Apply 200% of design load briefly to verify cable thermal margin"
              },
              answer: "B",
              explanation: "Progressive loading. AM2 candidates apply."
            },
            {
              number: 5,
              prompt: "A 'TX' (transformer) commissioning:",
              options: {
                A: "Energise both windings simultaneously without polarity or ratio checks",
                B: "Verify isolation, IR test (typically 1000 V DC for HV side, 500 V DC for LV side), polarity, ratio, vector group, and energise progressively",
                C: "Skip",
                D: "Functional only"
              },
              answer: "B",
              explanation: "Transformer commissioning. AM2 candidates know the framework."
            },
            {
              number: 6,
              prompt: "A 'control panel' commissioning:",
              options: {
                A: "Energise the control supply and verify only the headline outputs work",
                B: "Verify each terminal connection per the wiring diagram, IR test the control circuits, energise the control supply, then verify each control function in sequence",
                C: "Skip",
                D: "Functional only"
              },
              answer: "B",
              explanation: "Control panel commissioning is methodical. AM2 candidates apply."
            },
            {
              number: 7,
              prompt: "A 'lighting circuit' with PIR sensors:",
              options: {
                A: "Verify the manual override switch only — the PIR is self-commissioning",
                B: "Verify each PIR triggers the lights, the time delay is set correctly, and the lighting does not nuisance-trigger; verify the dusk sensor (where present)",
                C: "Skip",
                D: "Functional only"
              },
              answer: "B",
              explanation: "PIR functional verification. AM2 candidates apply."
            },
            {
              number: 8,
              prompt: "A 'commissioning' record's date:",
              options: {
                A: "Backdated to the start of the project programme",
                B: "Reflects the date of certification; future periodic inspection intervals run from this date",
                C: "Customer's choice",
                D: "Skip"
              },
              answer: "B",
              explanation: "Commissioning date. AM2 candidates record correctly."
            },
            {
              number: 9,
              prompt: "A 'circuit chart' fixed to the consumer unit:",
              options: {
                A: "Optional",
                B: "Required by Reg 514.9 — accurate description of each circuit, OCPD type and rating, RCD/RCBO protection where applicable",
                C: "Customer's choice",
                D: "Skip"
              },
              answer: "B",
              explanation: "Circuit chart. AM2 candidates produce."
            },
            {
              number: 10,
              prompt: "A 'warning notice' at the consumer unit:",
              options: {
                A: "Optional",
                B: "Required where applicable — periodic inspection notice (Reg 514.12), RCD test notice (Reg 514.12), earthing arrangement notice for TT (Reg 514.13), mixed colours warning (where applicable), SPD notices (Reg 443)",
                C: "Customer's choice",
                D: "Skip"
              },
              answer: "B",
              explanation: "Warning notices. AM2 candidates produce per regulation."
            },
            {
              number: 11,
              prompt: "A 'periodic inspection' notice:",
              options: {
                A: "Optional",
                B: "Required by Reg 514.12 — states the date of the most recent inspection and the date by which the next inspection is recommended; the inspector signs the notice",
                C: "Required only on commercial installations — domestic dwellings are exempt",
                D: "Skip"
              },
              answer: "B",
              explanation: "Periodic inspection notice. AM2 candidates produce."
            },
            {
              number: 12,
              prompt: "A 'RCD test' notice:",
              options: {
                A: "Optional",
                B: "Required by Reg 514.12 — instructs the user to test RCDs quarterly using the test button; visible at the consumer unit",
                C: "Required only where Type AC RCDs are installed",
                D: "Skip"
              },
              answer: "B",
              explanation: "RCD test notice. AM2 candidates produce."
            },
            {
              number: 13,
              prompt: "A 'TT system' earthing notice:",
              options: {
                A: "Optional",
                B: "Required by Reg 514.13 — informs the user the installation uses TT earthing (rod-based) and that any future modification must respect this",
                C: "Required only on TN-C-S installations with PEN-fault protection",
                D: "Skip"
              },
              answer: "B",
              explanation: "TT system notice. AM2 candidates produce."
            },
            {
              number: 14,
              prompt: "A 'mixed colours' warning notice (pre-2004 + harmonised):",
              options: {
                A: "Optional",
                B: "Required where new harmonised colours coexist with pre-2004 colours in the same installation; informs anyone working that careful identification is needed",
                C: "Only required if cables are tagged or sleeved at the consumer unit",
                D: "Skip"
              },
              answer: "B",
              explanation: "Mixed colours notice. AM2 candidates produce."
            },
            {
              number: 15,
              prompt: "A 'SPD' (Surge Protection Device) presence indicator:",
              options: {
                A: "Optional",
                B: "Required where SPDs are installed — visible status indicator (e.g. green = healthy, red = end-of-life), with periodic inspection check",
                C: "Acceptable only after the SPD's first surge event",
                D: "Skip"
              },
              answer: "B",
              explanation: "SPD status indicator. AM2 candidates verify at periodic inspection."
            },
            {
              number: 16,
              prompt: "A 'manual' isolation procedure for a fixed-equipment circuit:",
              options: {
                A: "Implicit knowledge — no need to document for the maintainer",
                B: "Document the local isolator location, the circuit identification, the lock-off provision, and the proving method — for future maintenance use",
                C: "Verbal-only briefing to the customer at handover",
                D: "Skip"
              },
              answer: "B",
              explanation: "Isolation documentation. AM2 candidates produce."
            },
            {
              number: 17,
              prompt: "A 'commissioning' verification by a third party:",
              options: {
                A: "Skip",
                B: "On larger installations, third-party witness verification of key tests; recorded in the commissioning documentation",
                C: "Always replaces the contractor's own commissioning records",
                D: "Verbal"
              },
              answer: "B",
              explanation: "Third-party verification. AM2 candidates know the framework."
            },
            {
              number: 18,
              prompt: "A 'safety case' for a critical installation:",
              options: {
                A: "Required only on domestic installations under Part P",
                B: "On regulated industries (e.g. healthcare, transport, hazardous), a documented safety case justifies design and commissioning decisions; AM2 candidates work within these frameworks where applicable",
                C: "Replaces the EIC entirely on regulated industry sites",
                D: "Skip"
              },
              answer: "B",
              explanation: "Safety case context. AM2 candidates know."
            },
            {
              number: 19,
              prompt: "A 'project handover' meeting:",
              options: {
                A: "Held informally between contractor and apprentices only",
                B: "Final meeting between contractor, designer, customer and other stakeholders — where commissioning is signed off and ownership transfers to the operator",
                C: "Replaces all formal documentation with a signed minute",
                D: "Skip"
              },
              answer: "B",
              explanation: "Project handover. AM2 candidates demonstrate."
            },
            {
              number: 20,
              prompt: "The 'last' commissioning step:",
              options: {
                A: "Walk away",
                B: "Confirm everything is complete, signed, documented, briefed, clean, and operational — and the customer is satisfied with the handover",
                C: "Issue the EIC and leave the warning notices for the customer to fix",
                D: "Verbal"
              },
              answer: "B",
              explanation: "Final closure. AM2 candidates demonstrate."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "A 'three-phase' DB at commissioning:",
              options: {
                A: "Energise all outgoing circuits before measuring voltage at the busbar",
                B: "Verify all three phase voltages (~230 V to N, ~400 V phase-to-phase), rotation (L1-L2-L3 sequence), IR (≥1 MΩ on each phase to earth), and Zs at outgoing circuits",
                C: "Skip",
                D: "Voltage only"
              },
              answer: "B",
              explanation: "Three-phase commissioning. AM2 candidates verify all parameters."
            },
            {
              number: 2,
              prompt: "A 'main switch' for a three-phase installation:",
              options: {
                A: "Single-pole",
                B: "Four-pole switch-disconnector (or three-pole + neutral) capable of isolating all live conductors simultaneously, lockable in OFF, sized for the installation's design current",
                C: "Two-pole on phase L1 only — neutral and other phases switched downstream",
                D: "Skip"
              },
              answer: "B",
              explanation: "Three-phase main switch. AM2 candidates select correctly."
            },
            {
              number: 3,
              prompt: "A 'consumer unit' to BS EN 61439-3:",
              options: {
                A: "Pre-1987 wooden enclosure rebadged with a CE label",
                B: "Domestic CU complying with the relevant standard, with appropriate IP rating, fire-rated enclosure (where applicable), and approved internal arrangements",
                C: "Any IP20 plastic enclosure — fire rating is optional",
                D: "Skip"
              },
              answer: "B",
              explanation: "Consumer unit standard. AM2 candidates know."
            },
            {
              number: 4,
              prompt: "A 'metallic CU' (Amendment 3 onwards):",
              options: {
                A: "Plastic preferred",
                B: "Required in dwellings since BS 7671:2008 Amendment 3 — non-combustible enclosure provides additional fire resistance",
                C: "Optional — only required when the CU is mounted on a flammable surface",
                D: "Skip"
              },
              answer: "B",
              explanation: "Reg 421.1.201 (and Amendment 3). AM2 candidates know."
            },
            {
              number: 5,
              prompt: "A 'high-resistance' joint at commissioning:",
              options: {
                A: "Cosmetic",
                B: "Detected by R1+R2 anomaly or temperature rise at sustained load — investigate, re-terminate, retest",
                C: "Visible only after an IR test fails at 1000 V DC",
                D: "Skip"
              },
              answer: "B",
              explanation: "High-resistance joints. AM2 candidates detect and rectify."
            },
            {
              number: 6,
              prompt: "A 'thermal scan' (thermal imaging):",
              options: {
                A: "A substitute for IR testing — replaces the 500 V DC measurement",
                B: "Identifies hotspots at terminations during sustained load — useful for periodic inspection of larger installations or where tools allow",
                C: "Required to be performed before energisation under no-load conditions",
                D: "Skip"
              },
              answer: "B",
              explanation: "Thermal imaging. AM2 candidates may use as a tool."
            },
            {
              number: 7,
              prompt: "A 'commissioning checklist':",
              options: {
                A: "Optional",
                B: "A useful working document — covers all required tests, inspections, certificates, briefings, and documentation; ensures nothing is missed at handover",
                C: "Identical to the EIC — there is no separate checklist",
                D: "Skip"
              },
              answer: "B",
              explanation: "Checklist value. AM2 candidates produce one."
            },
            {
              number: 8,
              prompt: "A 'snag list' at commissioning:",
              options: {
                A: "A list of test failures that prevent commissioning",
                B: "List of items requiring follow-up — typically minor cosmetic or non-critical items; documented and resolved before final handover",
                C: "Verbal-only handover — no written record needed",
                D: "Skip"
              },
              answer: "B",
              explanation: "Snag list management. AM2 candidates produce."
            },
            {
              number: 9,
              prompt: "A 'design verification' at commissioning:",
              options: {
                A: "Skip",
                B: "Verify that the as-built installation matches the design (or document any deviations); the design includes circuit ratings, cable sizes, OCPD types, etc.",
                C: "Implicit in the customer's signature — no formal check needed",
                D: "Skip"
              },
              answer: "B",
              explanation: "Design verification. AM2 candidates apply."
            },
            {
              number: 10,
              prompt: "A 'compliance verification' at commissioning:",
              options: {
                A: "Skip",
                B: "Verify the installation complies with BS 7671 — by visual inspection (Schedule of Inspections) and testing (Schedule of Test Results); document compliance",
                C: "Visual inspection alone is sufficient — testing is optional",
                D: "Carried out only at the periodic inspection — not at commissioning"
              },
              answer: "B",
              explanation: "Compliance verification. AM2 candidates apply."
            },
            {
              number: 11,
              prompt: "A 'building regulations' compliance at handover:",
              options: {
                A: "Skip",
                B: "Verify Part P notification (where applicable) is in place; verify any other building regulations (Part B fire safety, Part L energy, etc.) where relevant; document",
                C: "Required only on commercial installations — domestic dwellings are exempt",
                D: "Skip"
              },
              answer: "B",
              explanation: "Building regs context. AM2 candidates know."
            },
            {
              number: 12,
              prompt: "A 'LV directive' (CE) compliance:",
              options: {
                A: "Required only on imported equipment from outside the EEA",
                B: "Equipment within the installation must be CE/UKCA marked per the LV directive; AM2 candidates verify markings on installed equipment",
                C: "Replaced entirely by the BS 7671 EIC after 2022",
                D: "Skip"
              },
              answer: "B",
              explanation: "CE/UKCA marking. AM2 candidates verify."
            },
            {
              number: 13,
              prompt: "A 'commissioning' photograph record:",
              options: {
                A: "Optional",
                B: "Useful supplementary record — photos of CU, key terminations, any unusual installation features; supplements the formal documentation",
                C: "Replaces the Schedule of Inspections in domestic installations",
                D: "Skip"
              },
              answer: "B",
              explanation: "Photo records. AM2 candidates may use."
            },
            {
              number: 14,
              prompt: "A 'commissioning' video record:",
              options: {
                A: "Optional",
                B: "On larger or complex installations, video records of key commissioning steps; supplements documentation; useful for future maintenance reference",
                C: "Mandatory under BS 7671 for any installation over 100 A",
                D: "Skip"
              },
              answer: "B",
              explanation: "Video records. AM2 candidates may use."
            },
            {
              number: 15,
              prompt: "A 'commissioning' instrument calibration:",
              options: {
                A: "Skip",
                B: "All test instruments used for commissioning must be in current calibration; the calibration date and traceability are recorded",
                C: "Required only every 5 years regardless of manufacturer guidance",
                D: "Skip"
              },
              answer: "B",
              explanation: "Instrument calibration. AM2 candidates verify."
            },
            {
              number: 16,
              prompt: "A 'final' walkthrough with the customer:",
              options: {
                A: "Optional",
                B: "On-site walkthrough — show the customer the consumer unit, key isolators, the warning notices, and any equipment requiring user operation",
                C: "Replaced entirely by the EIC and warning notices",
                D: "Skip"
              },
              answer: "B",
              explanation: "Customer walkthrough. AM2 candidates demonstrate."
            },
            {
              number: 17,
              prompt: "A 'commissioning' meeting minutes:",
              options: {
                A: "Verbal-only acceptance by the customer is sufficient",
                B: "Recorded minutes of any commissioning meetings, including decisions, agreements, and signed-off items — part of the audit trail",
                C: "Replaces the EIC in projects with multiple stakeholders",
                D: "Skip"
              },
              answer: "B",
              explanation: "Meeting minutes. AM2 candidates may produce."
            },
            {
              number: 18,
              prompt: "A 'final' contract acceptance:",
              options: {
                A: "Implicit on first use of the installation by the customer",
                B: "Customer's signed acceptance of the completed installation; confirms commissioning is complete and ownership has transferred",
                C: "Verbal acknowledgement at handover walkthrough",
                D: "Skip"
              },
              answer: "B",
              explanation: "Contract acceptance. AM2 candidates know."
            },
            {
              number: 19,
              prompt: "A 'maintenance' programme handed to the customer:",
              options: {
                A: "Optional",
                B: "A recommended programme — periodic inspection intervals, RCD test schedule, accessory cleaning, etc. — supports ongoing safe operation",
                C: "Customer-led only — contractor has no role after handover",
                D: "Skip"
              },
              answer: "B",
              explanation: "Maintenance programme. AM2 candidates produce."
            },
            {
              number: 20,
              prompt: "The 'closing' AM2 commissioning expectation:",
              options: {
                A: "Walk away",
                B: "All tests complete and recorded, certificates signed, customer briefed, documentation handed over, site clean, installation in service — and the candidate has demonstrated complete commissioning competence",
                C: "Sign the EIC and leave the schedules to be completed by the customer",
                D: "Verbal"
              },
              answer: "B",
              explanation: "Final commissioning. AM2 candidates demonstrate."
            }
          ]
        }
      ]
    },
    {
      id: "section-7-merged-practical-foundations",
      title: "Section 7 — Merged Practical Foundations",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "A shower is rated at 8 kW and connected to a 230 V supply; the nearest full-load current is:",
              options: {
                A: "355 A",
                B: "3.5 A",
                C: "35 A",
                D: "350 A"
              },
              answer: "C",
              explanation: "I = P/V = 8000/230 ≈ 34.78 A ≈ 35 A. Pure resistive load. Standard 40 A or 50 A breaker for an 8 kW shower."
            },
            {
              number: 2,
              prompt: "Under EAWR 1989, live working may only be undertaken if:",
              options: {
                A: "The electrician is wearing rubber gloves",
                B: "It is unreasonable for the conductor to be dead, it is reasonable for the work to be done live, and suitable precautions are taken — all three together",
                C: "The circuit is below 230 V",
                D: "The supervisor gives written permission"
              },
              answer: "B",
              explanation: "EAWR Reg 14 — three conjunctive tests. All three must be satisfied — gloves or a voltage threshold alone don't authorise live work."
            },
            {
              number: 3,
              prompt: "Using the OSG diversity method, the assumed maximum demand of a household cooker control unit incorporating a 13 A socket, supplied by a 30 A circuit, is:",
              options: {
                A: "30 A",
                B: "First 10 A + 30% of remainder + 5 A (socket) = 10 + (0.30 × 20) + 5 = 21 A",
                C: "50% of 30 A + 5 A",
                D: "10 A at 100% + 30% of full circuit rating"
              },
              answer: "B",
              explanation: "OSG diversity for household cookers: 10 + 30% × (rating - 10) + 5 (socket). For 30 A: 10 + 6 + 5 = 21 A."
            },
            {
              number: 4,
              prompt: "A cooker circuit has a 45 A rated load and the control unit includes a 13 A socket. Using the OSG diversity rule, the assumed demand is:",
              options: {
                A: "13.5 A",
                B: "20.5 A",
                C: "25.5 A",
                D: "45 A"
              },
              answer: "C",
              explanation: "10 + (0.30 × 35) + 5 = 25.5 A. 30% applied only to current above the first 10 A."
            },
            {
              number: 5,
              prompt: "On a UK 230/400 V three-phase supply, the voltage measured between any two line conductors is approximately:",
              options: {
                A: "110 V",
                B: "230 V",
                C: "400 V",
                D: "650 V"
              },
              answer: "C",
              explanation: "VL = √3 × VP = 230 × 1.732 ≈ 400 V. Line-to-neutral is 230 V; line-to-line is 400 V."
            },
            {
              number: 6,
              prompt: "On a three-phase supply, the phase angle between any two line voltages is:",
              options: {
                A: "60°",
                B: "90°",
                C: "120°",
                D: "180°"
              },
              answer: "C",
              explanation: "120°. Three phases equally spaced: L1 at 0°, L2 at 120°, L3 at 240°."
            },
            {
              number: 7,
              prompt: "A 2 kW resistive load on a 230 V supply draws approximately:",
              options: {
                A: "4.6 A",
                B: "8.7 A",
                C: "11.5 A",
                D: "17.4 A"
              },
              answer: "B",
              explanation: "I = P/V = 2000/230 ≈ 8.7 A. Resistive load, PF = 1."
            },
            {
              number: 8,
              prompt: "A balanced three-phase load draws 30 A per line at 400 V (line-to-line) with PF 0.85 lagging. Total real power is approximately:",
              options: {
                A: "8.8 kW",
                B: "17.7 kW",
                C: "20.8 kW",
                D: "30.6 kW"
              },
              answer: "B",
              explanation: "P = √3 × VL × IL × cos φ = 1.732 × 400 × 30 × 0.85 ≈ 17.7 kW."
            },
            {
              number: 9,
              prompt: "A transformer has 1000 primary turns and 200 secondary turns. With 230 V primary, the open-circuit secondary voltage is:",
              options: {
                A: "11.5 V",
                B: "46 V",
                C: "115 V",
                D: "1150 V"
              },
              answer: "B",
              explanation: "VS = VP × (NS/NP) = 230 × 0.2 = 46 V. Step-down (5:1)."
            },
            {
              number: 10,
              prompt: "A balanced three-phase load draws equal current in each line. The neutral current is:",
              options: {
                A: "Sum of all three line currents",
                B: "Same as one line current",
                C: "Approximately zero",
                D: "1.732 times one line current"
              },
              answer: "C",
              explanation: "Three line currents 120° apart cancel vectorially in the neutral, so balanced loads give zero neutral current."
            },
            {
              number: 11,
              prompt: "A 32 A radial circuit feeds 4 sockets at 5 m intervals on a 4 mm² T&E. The R1+R2 of the cable (approximate, using r1+r2 = 0.018 + 0.027 ≈ 0.045 Ω/m for 4 mm²/1.5 mm² T&E) at the furthest socket:",
              options: {
                A: "0.05 Ω",
                B: "Approximately 0.9 Ω (20 m × 0.045 Ω/m)",
                C: "1.5 Ω",
                D: "0.9 Ω is impossible"
              },
              answer: "B",
              explanation: "R1+R2 calculation. AM2 candidates apply cable resistance per metre × length."
            },
            {
              number: 12,
              prompt: "The Section 525 voltage drop limit for a domestic lighting circuit is:",
              options: {
                A: "5%",
                B: "3%",
                C: "10%",
                D: "1%"
              },
              answer: "B",
              explanation: "Section 525 / Appendix 12: lighting 3%, other circuits 5% (for domestic 230 V LV)."
            },
            {
              number: 13,
              prompt: "A 230 V 7 kW shower is best protected by:",
              options: {
                A: "13 A fuse",
                B: "32 A or 40 A MCB depending on circuit length and Zs requirements (7000/230 ≈ 30.4 A)",
                C: "20 A MCB",
                D: "100 A MCB"
              },
              answer: "B",
              explanation: "I = 7000/230 ≈ 30.4 A. 32 A or 40 A MCB common. AM2 candidates calculate."
            },
            {
              number: 14,
              prompt: "A 230 V 3 kW immersion heater on a 16 A radial circuit:",
              options: {
                A: "Healthy",
                B: "Borderline — 3000/230 ≈ 13.0 A; 16 A circuit is sized correctly",
                C: "Underrated",
                D: "Overrated"
              },
              answer: "B",
              explanation: "Immersion heater calculations. AM2 candidates apply."
            },
            {
              number: 15,
              prompt: "A 'star' (Y) connection on a three-phase supply:",
              options: {
                A: "VL = VP",
                B: "VL = √3 × VP, IL = IP — useful for distributing 230 V (phase) and 400 V (line) on the same three-phase system",
                C: "VL = VP/√3",
                D: "VL = VP × 2"
              },
              answer: "B",
              explanation: "Y connection equations. AM2 candidates know."
            },
            {
              number: 16,
              prompt: "A 'delta' (Δ) connection on a three-phase supply:",
              options: {
                A: "VL = VP × √3",
                B: "VL = VP, IL = √3 × IP — used for motor windings and some industrial loads",
                C: "VL = VP × 2",
                D: "VL = VP/√3"
              },
              answer: "B",
              explanation: "Delta connection equations. AM2 candidates know."
            },
            {
              number: 17,
              prompt: "The Iz (de-rated current capacity) of a cable is:",
              options: {
                A: "Always equal to It",
                B: "It × Ca × Cg × Ci × Cs — multiplying the tabulated It by the relevant correction factors for ambient, grouping, insulation, soil",
                C: "Cable size in mm²",
                D: "It / (Ca × Cg) — divide rather than multiply by the correction factors"
              },
              answer: "B",
              explanation: "Iz formula. AM2 candidates apply."
            },
            {
              number: 18,
              prompt: "A 6 kW immersion heater at 230 V:",
              options: {
                A: "I = 26 A",
                B: "I = 6000/230 ≈ 26.1 A — typically supplied by a 32 A circuit",
                C: "I = 13 A",
                D: "I = 50 A"
              },
              answer: "B",
              explanation: "Immersion heater calculation. AM2 candidates apply."
            },
            {
              number: 19,
              prompt: "A 13 A fused plug for a 1 kW appliance:",
              options: {
                A: "Pass",
                B: "13 A fuse is appropriate (1000/230 ≈ 4.3 A) — could be downsized to a 5 A fuse for closer protection of the cord",
                C: "Wrong fuse",
                D: "Fit a 1 A fuse to match the appliance kW rating"
              },
              answer: "A",
              explanation: "Fuse selection. AM2 candidates verify."
            },
            {
              number: 20,
              prompt: "A 'star' connected load: line current 30 A, phase voltage 230 V, PF 0.8. Line-to-line voltage:",
              options: {
                A: "230 V",
                B: "400 V (= √3 × 230)",
                C: "115 V",
                D: "650 V"
              },
              answer: "B",
              explanation: "Y connection: VL = √3 × VP. AM2 candidates apply."
            },
            {
              number: 21,
              prompt: "A motor's 'starting' current can be:",
              options: {
                A: "Same as running current",
                B: "5 to 7 times the running current — needs Type C or Type D MCB to avoid nuisance trips on starting",
                C: "Half running current",
                D: "Twice running current"
              },
              answer: "B",
              explanation: "Motor starting current. AM2 candidates select Type C or D MCBs."
            },
            {
              number: 22,
              prompt: "A 'PFC' (prospective fault current) at the origin of a TN-S installation is typically:",
              options: {
                A: "10 A",
                B: "Several kA — typical 1-2 kA in domestic, larger in commercial/industrial",
                C: "100 mA",
                D: "Identical to the installation's design current Ib"
              },
              answer: "B",
              explanation: "PFC values. AM2 candidates measure or estimate."
            },
            {
              number: 23,
              prompt: "A 'Ze' on a TN-C-S supply:",
              options: {
                A: "Always 10 Ω",
                B: "Typically below 0.35 Ω; DNOs aim for this",
                C: "Always 100 Ω",
                D: "Same as TT — typically 200 Ω depending on local conditions"
              },
              answer: "B",
              explanation: "Ze values. AM2 candidates know typical ranges."
            },
            {
              number: 24,
              prompt: "A 'breaking capacity' of an MCB:",
              options: {
                A: "Always 6 kA",
                B: "Specified by the device standard — typically 6 kA for BS EN 60898 domestic MCBs; must exceed the prospective fault current at the origin",
                C: "Always 20 kA",
                D: "Equal to the device's rated continuous current In"
              },
              answer: "B",
              explanation: "Breaking capacity. AM2 candidates verify."
            },
            {
              number: 25,
              prompt: "A 'safe-isolation' tool kit at AM2:",
              options: {
                A: "Multimeter set to AC volts and a neon test screwdriver",
                B: "Two-pole voltage indicator (GS38), proving unit, lock-off devices, caution notices, calibrated MFT, calibrated torque tools — all in current calibration",
                C: "Insulating gloves, mat, and a non-fused multimeter",
                D: "Skip"
              },
              answer: "B",
              explanation: "AM2 toolkit essentials. AM2 candidates know."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "A 9 kW electric shower at 230 V draws approximately:",
              options: {
                A: "9 A",
                B: "I = 9000/230 ≈ 39.1 A — typically a 40 A or 50 A MCB depending on voltage drop and Zs",
                C: "90 A",
                D: "0.9 A"
              },
              answer: "B",
              explanation: "Shower calculation. AM2 candidates apply."
            },
            {
              number: 2,
              prompt: "A 'cooker control unit' diversity calculation for a 40 A cooker plus 13 A socket:",
              options: {
                A: "40 A",
                B: "10 + (0.30 × 30) + 5 = 24 A",
                C: "20 A",
                D: "13 A"
              },
              answer: "B",
              explanation: "OSG diversity. 10 + 30% × 30 + 5 (socket). AM2 candidates apply."
            },
            {
              number: 3,
              prompt: "A 230 V 1.5 kW kettle on a 13 A plug:",
              options: {
                A: "13 A fuse correct",
                B: "I = 1500/230 ≈ 6.5 A; 13 A fuse provides margin; could downsize to 10 A or 13 A is acceptable",
                C: "Fit a 3 A fuse — kettles are low-power appliances",
                D: "Skip"
              },
              answer: "A",
              explanation: "Fuse selection. AM2 candidates verify."
            },
            {
              number: 4,
              prompt: "A 'three-phase' star-delta motor starter:",
              options: {
                A: "Starts in delta then switches to star to reduce inrush",
                B: "Reduces starting current — motor starts in star (low voltage on each winding), then changes to delta (full voltage) once running; reduces inrush",
                C: "Increases starting current",
                D: "Doubles the running current to reduce starting current"
              },
              answer: "B",
              explanation: "Star-delta starting. AM2 candidates know."
            },
            {
              number: 5,
              prompt: "A 'delta' connected motor with line current of 30 A:",
              options: {
                A: "Phase current = 30 A",
                B: "Phase current = 30/√3 ≈ 17.3 A — delta connection: IL = √3 × IP",
                C: "Phase current = 60 A",
                D: "Phase current = 30 × √3 ≈ 51.96 A"
              },
              answer: "B",
              explanation: "Delta connection equations. AM2 candidates apply."
            },
            {
              number: 6,
              prompt: "A 'Section 525' voltage drop for a domestic ring final at 32 A:",
              options: {
                A: "10%",
                B: "5% (0.05 × 230 = 11.5 V) — for 'other than lighting' circuits",
                C: "1%",
                D: "8% — same as private supply long runs"
              },
              answer: "B",
              explanation: "Voltage drop limits. AM2 candidates apply."
            },
            {
              number: 7,
              prompt: "A 'transformer' 230 V/24 V step-down with 100 A secondary:",
              options: {
                A: "100 A primary",
                B: "Primary current ≈ 24/230 × 100 ≈ 10.4 A — by IP × VP = IS × VS conservation",
                C: "Primary current ≈ 230/24 × 100 ≈ 958 A",
                D: "Skip"
              },
              answer: "B",
              explanation: "Transformer equations. AM2 candidates apply."
            },
            {
              number: 8,
              prompt: "A 'three-phase' load at 400 V, drawing 50 A per line, PF 0.9:",
              options: {
                A: "P = 11 kW",
                B: "P = √3 × 400 × 50 × 0.9 ≈ 31.2 kW",
                C: "P = 100 kW",
                D: "P = 400 × 50 × 0.9 = 18 kW (omitting √3)"
              },
              answer: "B",
              explanation: "Three-phase power. AM2 candidates apply."
            },
            {
              number: 9,
              prompt: "A 'TT' system's RA × IΔn ≤ 50 V with 30 mA RCD:",
              options: {
                A: "RA ≤ 1666 Ω",
                B: "Yes — 50/0.030 = 1666 Ω; in practice <200 Ω is preferred for stability",
                C: "RA ≤ 100 Ω",
                D: "RA ≤ 5000 Ω at 10 mA"
              },
              answer: "A",
              explanation: "TT touch voltage rule. AM2 candidates apply."
            },
            {
              number: 10,
              prompt: "A 'busbar' chamber's continuous current rating:",
              options: {
                A: "Determined by the cross-sectional area of the largest cable connected to it",
                B: "Specified by the manufacturer — must exceed the highest sustained current the chamber will carry; verify against the installation's design current",
                C: "Always 100 A",
                D: "Skip"
              },
              answer: "B",
              explanation: "Busbar rating. AM2 candidates verify."
            },
            {
              number: 11,
              prompt: "A 'parallel' resistance calculation for two 100 Ω resistors:",
              options: {
                A: "R = 50 Ω",
                B: "Yes — R = R1×R2/(R1+R2) = 100×100/200 = 50 Ω",
                C: "R = 200 Ω",
                D: "R = 100 Ω — parallel resistance equals one of the resistors"
              },
              answer: "A",
              explanation: "Parallel resistance. AM2 candidates apply."
            },
            {
              number: 12,
              prompt: "A 'series' resistance for two 100 Ω resistors:",
              options: {
                A: "R = 50 Ω",
                B: "R = R1 + R2 = 200 Ω",
                C: "R = 100 Ω",
                D: "R = 10 000 Ω (multiply rather than add)"
              },
              answer: "B",
              explanation: "Series resistance. AM2 candidates apply."
            },
            {
              number: 13,
              prompt: "A 'three-phase' star load: phase voltage 230 V, line voltage 400 V; line current 20 A. Real power at PF 0.85:",
              options: {
                A: "P = √3 × 400 × 20 × 0.85 ≈ 11.8 kW",
                B: "P = 5 kW",
                C: "P = 230 × 20 × 0.85 ≈ 3.91 kW (omitting √3 and using phase voltage)",
                D: "Skip"
              },
              answer: "A",
              explanation: "Three-phase power. AM2 candidates apply."
            },
            {
              number: 14,
              prompt: "A '32 A' radial circuit's design current (for a 7 kW shower):",
              options: {
                A: "Ib = 32 A",
                B: "Ib = 7000/230 ≈ 30.4 A — design current must not exceed cable's de-rated capacity (Iz)",
                C: "Ib = 7 A — design current equals kW rating",
                D: "Skip"
              },
              answer: "B",
              explanation: "Design current. AM2 candidates calculate."
            },
            {
              number: 15,
              prompt: "A 'cable' selected for 30 A design current and Cg = 0.85, Ca = 0.95:",
              options: {
                A: "Cable Iz must exceed 30 A",
                B: "It (tabulated) must satisfy It × Ca × Cg ≥ Ib → It ≥ 30/(0.95×0.85) ≈ 37.2 A",
                C: "It ≥ 30 × 0.95 × 0.85 ≈ 24.2 A (multiply by factors instead of dividing)",
                D: "Skip"
              },
              answer: "B",
              explanation: "Cable selection. AM2 candidates apply factors."
            },
            {
              number: 16,
              prompt: "A 'rated' voltage of equipment:",
              options: {
                A: "Average voltage",
                B: "Specified by the manufacturer — must match the supply voltage (230 V single-phase or 400 V three-phase in UK)",
                C: "Always 110 V for portable equipment regardless of region",
                D: "Skip"
              },
              answer: "B",
              explanation: "Rated voltage. AM2 candidates verify."
            },
            {
              number: 17,
              prompt: "A 'short-circuit' protection device:",
              options: {
                A: "Always RCD",
                B: "OCPD — MCB, fuse, MCCB; must have a breaking capacity exceeding the prospective fault current",
                C: "Bonding conductor sized to carry the prospective fault current",
                D: "Skip"
              },
              answer: "B",
              explanation: "Short-circuit protection. AM2 candidates know."
            },
            {
              number: 18,
              prompt: "A 'overload' protection device:",
              options: {
                A: "Always RCD",
                B: "OCPD — MCB, fuse, MCCB; thermal element trips on prolonged overcurrent",
                C: "SPD — protects against thermal effects of long-duration overcurrent",
                D: "Skip"
              },
              answer: "B",
              explanation: "Overload protection. AM2 candidates know."
            },
            {
              number: 19,
              prompt: "A 'fault' protection device:",
              options: {
                A: "Always OCPD",
                B: "OCPD (for low Zs, fast operation) or RCD (for additional protection where Zs would be too high) — Section 411 covers ADS",
                C: "Always an SPD operating in less than 25 ns",
                D: "Skip"
              },
              answer: "B",
              explanation: "Fault protection. AM2 candidates know."
            },
            {
              number: 20,
              prompt: "A '13 A' BS 1363 plug fuse for a 100 W table lamp:",
              options: {
                A: "13 A",
                B: "3 A — sized to protect the cord, not the lamp",
                C: "1 A",
                D: "5 A — the closest standard above the lamp's running current"
              },
              answer: "B",
              explanation: "Plug fuse selection. AM2 candidates know."
            },
            {
              number: 21,
              prompt: "A 'SELV' (Separated Extra-Low Voltage):",
              options: {
                A: "Below 50 V AC",
                B: "Below 50 V AC, with the source separated from the mains (e.g. SELV transformer); used for safety in low-voltage applications",
                C: "Below 230 V AC, fully bonded to the MET",
                D: "Skip"
              },
              answer: "B",
              explanation: "SELV definition. AM2 candidates know."
            },
            {
              number: 22,
              prompt: "A 'PELV' (Protective Extra-Low Voltage):",
              options: {
                A: "Same as SELV",
                B: "Below 50 V AC, with one point connected to earth (vs SELV which is fully isolated)",
                C: "Below 110 V AC with a centre-tapped earth (CTE) only",
                D: "Skip"
              },
              answer: "B",
              explanation: "PELV definition. AM2 candidates know."
            },
            {
              number: 23,
              prompt: "A 'FELV' (Functional Extra-Low Voltage):",
              options: {
                A: "Same as SELV",
                B: "Below 50 V AC, but without the safe separation of SELV/PELV — relies on the basic protection of the main system",
                C: "Above 50 V AC with a fully isolated transformer source",
                D: "Skip"
              },
              answer: "B",
              explanation: "FELV definition. AM2 candidates know."
            },
            {
              number: 24,
              prompt: "A 'IP rating' (Ingress Protection):",
              options: {
                A: "A single-digit rating covering both dust and water in one number",
                B: "Two-digit rating for solid object protection (first digit) and water protection (second digit); e.g. IP65 = dust-tight + water-jet protected",
                C: "Three-digit rating: dust, water, and impact resistance combined",
                D: "Skip"
              },
              answer: "B",
              explanation: "IP rating. AM2 candidates know."
            },
            {
              number: 25,
              prompt: "A 'IK rating' (Impact Protection):",
              options: {
                A: "Specifies water ingress in the same scale as IP",
                B: "Specifies the impact resistance of an enclosure — IK10 = high impact resistance, IK00 = no impact protection specified",
                C: "Specifies the dust-tightness of an enclosure (replacing first IP digit)",
                D: "Skip"
              },
              answer: "B",
              explanation: "IK rating. AM2 candidates know."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "A 'consumer unit' upgrade replaces a 100 A main switch with a 100 A switch-disconnector:",
              options: {
                A: "Replace the bonding conductors with one CSA larger to compensate",
                B: "Verify both are switch-disconnectors (rated for isolation), the cable rating supports the rating, and the bonding/earthing arrangement is preserved",
                C: "No verification needed — both are 100 A so are interchangeable",
                D: "Skip"
              },
              answer: "B",
              explanation: "Consumer unit upgrade. AM2 candidates verify."
            },
            {
              number: 2,
              prompt: "A 'main bonding' conductor csa for a 16 mm² installation:",
              options: {
                A: "Always the same csa as the supply tail (16 mm²)",
                B: "Per Reg 544 — minimum 6 mm² (or larger to match), or proportional to the supply earthing conductor; check against the relevant table",
                C: "1.5 mm² for water and 2.5 mm² for gas — separate ratings per service",
                D: "Skip"
              },
              answer: "B",
              explanation: "Main bonding csa. AM2 candidates verify."
            },
            {
              number: 3,
              prompt: "A 'supplementary bonding' conductor in a bathroom:",
              options: {
                A: "Always 16 mm² to match the main bonding csa",
                B: "Per Reg 701, often required to bond extraneous-conductive-parts (pipes) to the cpc — minimum 4 mm² or otherwise mechanically protected",
                C: "Not required if a 30 mA RCD protects the circuits in the bathroom",
                D: "Skip"
              },
              answer: "B",
              explanation: "Bathroom supplementary bonding. AM2 candidates know."
            },
            {
              number: 4,
              prompt: "A 'TN-C-S' supply identifier:",
              options: {
                A: "Local earth electrode at the property — no DNO earth provided",
                B: "Combined neutral-earth conductor (PEN) on the supply side, separated into N and PE at the cut-out — most common UK domestic supply",
                C: "Separate neutral and earth conductors throughout the supply route",
                D: "Skip"
              },
              answer: "B",
              explanation: "TN-C-S definition. AM2 candidates know."
            },
            {
              number: 5,
              prompt: "A 'TN-S' supply identifier:",
              options: {
                A: "Combined PEN throughout the supply, separated only at the cut-out",
                B: "Separate neutral and earth conductors throughout — older domestic supplies, some commercial",
                C: "Local rod-only earth provided at every property by the consumer",
                D: "Skip"
              },
              answer: "B",
              explanation: "TN-S definition. AM2 candidates know."
            },
            {
              number: 6,
              prompt: "A 'TT' supply identifier:",
              options: {
                A: "Combined PEN conductor with separation at the cut-out",
                B: "Earth provided by local electrode (rod), not by DNO — common in rural areas, caravan sites, agricultural premises",
                C: "Separate N and PE supplied by the DNO from substation to cut-out",
                D: "Skip"
              },
              answer: "B",
              explanation: "TT definition. AM2 candidates know."
            },
            {
              number: 7,
              prompt: "A 'IT' supply identifier:",
              options: {
                A: "Standard UK domestic earthing arrangement using a PEN conductor",
                B: "Isolated supply or with one point at high impedance to earth — used in specialist applications (e.g. medical, hazardous areas)",
                C: "TN-C-S supply with two redundant earth electrodes",
                D: "Skip"
              },
              answer: "B",
              explanation: "IT definition. AM2 candidates know."
            },
            {
              number: 8,
              prompt: "A 'three-phase' star-connected motor's line current:",
              options: {
                A: "Three times the phase current (IL = 3 × IP)",
                B: "Equals phase current (IL = IP); voltage relationship VL = √3 × VP",
                C: "√3 times phase current (IL = √3 × IP) — same as delta connection",
                D: "Skip"
              },
              answer: "B",
              explanation: "Star equations. AM2 candidates know."
            },
            {
              number: 9,
              prompt: "A 'three-phase' delta-connected motor's line current:",
              options: {
                A: "Equal to phase current (IL = IP) — same as star connection",
                B: "= √3 × phase current (IL = √3 × IP); voltage VL = VP",
                C: "Three times phase current (IL = 3 × IP)",
                D: "Skip"
              },
              answer: "B",
              explanation: "Delta equations. AM2 candidates know."
            },
            {
              number: 10,
              prompt: "A 'reactive' load (inductive):",
              options: {
                A: "PF = 1",
                B: "PF < 1 (lagging) — current lags voltage, requires reactive power; common for motors and transformers",
                C: "PF = 0",
                D: "PF < 1 (leading) — current leads voltage in inductive loads"
              },
              answer: "B",
              explanation: "Inductive reactive loads. AM2 candidates know."
            },
            {
              number: 11,
              prompt: "A 'capacitive' load:",
              options: {
                A: "PF = 1",
                B: "PF < 1 (leading) — current leads voltage; used for power-factor correction",
                C: "PF = 0",
                D: "PF < 1 (lagging) — current lags voltage in capacitive loads"
              },
              answer: "B",
              explanation: "Capacitive loads. AM2 candidates know."
            },
            {
              number: 12,
              prompt: "A 'power factor' correction capacitor:",
              options: {
                A: "Adds inductive reactance to the supply to lower current draw",
                B: "Compensates for inductive reactance — improves PF toward unity, reduces apparent power, lowers DNO penalty charges for low PF",
                C: "Always reduces PF to zero to maximise reactive savings",
                D: "Skip"
              },
              answer: "B",
              explanation: "PF correction. AM2 candidates know."
            },
            {
              number: 13,
              prompt: "A 'kVA' (apparent power):",
              options: {
                A: "Always equal to kW",
                B: "Apparent power = √(P² + Q²); kW is real power, kVAr is reactive; kVA = √(kW² + kVAr²)",
                C: "kVA = kW + kVAr (linear sum)",
                D: "Skip"
              },
              answer: "B",
              explanation: "Apparent power. AM2 candidates know."
            },
            {
              number: 14,
              prompt: "A 'harmonics' on a three-phase supply:",
              options: {
                A: "Caused only by linear resistive loads such as immersion heaters",
                B: "Caused by non-linear loads (electronics, VFDs); 3rd harmonic adds in the neutral; can require uprated neutral conductors",
                C: "Eliminated entirely by Type AC RCDs at the consumer unit",
                D: "Skip"
              },
              answer: "B",
              explanation: "Harmonics. AM2 candidates know."
            },
            {
              number: 15,
              prompt: "A 'voltage drop' calculation for a 30 A circuit, 25 m, 4 mm² T&E:",
              options: {
                A: "VD = 30 × 25 = 750 V (current × length only, no mV/A/m factor)",
                B: "VD = mV/A/m × A × m / 1000 = ~11 × 30 × 25 / 1000 = ~8.25 V; verify against Section 525 limits",
                C: "VD = 0.011 × 30 / 25 ≈ 0.013 V",
                D: "Skip"
              },
              answer: "B",
              explanation: "Voltage drop calculation. AM2 candidates apply."
            },
            {
              number: 16,
              prompt: "A 'BS 7671' Reg 411.3 (ADS):",
              options: {
                A: "Active Detection of Surges — only triggers on lightning transients",
                B: "Automatic Disconnection of Supply — fault protection by an OCPD or RCD operating within the disconnection time",
                C: "Additional Direct Sensing — purely mechanical fault sensing without an OCPD",
                D: "Skip"
              },
              answer: "B",
              explanation: "Reg 411.3. AM2 candidates know."
            },
            {
              number: 17,
              prompt: "A 'disconnection time' for a 230 V final circuit ≤ 32 A:",
              options: {
                A: "0.2 s per Table 41.1",
                B: "0.4 s per Table 41.1",
                C: "0.5 s",
                D: "1.0 s"
              },
              answer: "B",
              explanation: "Disconnection times. AM2 candidates know."
            },
            {
              number: 18,
              prompt: "A 'disconnection time' for a circuit > 32 A:",
              options: {
                A: "10 s per Table 41.1",
                B: "5.0 s per Table 41.1",
                C: "0.4 s",
                D: "0.5 s"
              },
              answer: "B",
              explanation: "Disconnection times. AM2 candidates know."
            },
            {
              number: 19,
              prompt: "A 'BS 7671' Reg 415 (additional protection):",
              options: {
                A: "Additional bonding requirements only — does not cover RCDs",
                B: "Additional protection by 30 mA RCD — required for socket outlets up to 32 A in dwellings, mobile equipment outdoors, etc.",
                C: "Additional protection by 100 mA RCD — universal across all circuits",
                D: "Skip"
              },
              answer: "B",
              explanation: "Reg 415. AM2 candidates know."
            },
            {
              number: 20,
              prompt: "A '30 mA' RCD on TT:",
              options: {
                A: "Not permitted on TT — only S-type 100 mA delayed RCDs are allowed",
                B: "Standard for ADS on TT — RA × IΔn ≤ 50 V; 30 mA × 1666 Ω = 50 V",
                C: "Required to be paired with a separate OCPD as ADS cannot be RCD-only",
                D: "Skip"
              },
              answer: "B",
              explanation: "TT 30 mA RCD. AM2 candidates know."
            },
            {
              number: 21,
              prompt: "A '100 mA' or '300 mA' RCD on TT:",
              options: {
                A: "General-type RCD without time delay — to give fastest selectivity",
                B: "Time-delayed S-type RCDs at 100 mA or 300 mA used as 'main' RCD on TT for ADS where downstream 30 mA RCDs provide additional protection (selectivity)",
                C: "Used downstream of a 30 mA RCD to provide additional protection",
                D: "Skip"
              },
              answer: "B",
              explanation: "TT main RCD. AM2 candidates know."
            },
            {
              number: 22,
              prompt: "A 'Type AC' RCD:",
              options: {
                A: "Detects all AC and DC residual currents up to 1000 A",
                B: "Detects sinusoidal AC residual currents only; suitable for circuits without DC leakage; not suitable for circuits with electronics that produce DC fault currents",
                C: "Detects only smooth DC residual currents (replaces Type B)",
                D: "Skip"
              },
              answer: "B",
              explanation: "RCD types. AM2 candidates know."
            },
            {
              number: 23,
              prompt: "A 'Type A' RCD:",
              options: {
                A: "Detects sinusoidal AC residual currents only — same scope as Type AC",
                B: "Detects AC and pulsating DC residual currents; suitable for circuits with electronics; required for circuits supplying many modern domestic loads",
                C: "Detects smooth DC and high-frequency residual currents only",
                D: "Skip"
              },
              answer: "B",
              explanation: "Type A RCD. AM2 candidates know."
            },
            {
              number: 24,
              prompt: "A 'Type F' RCD:",
              options: {
                A: "Detects only DC residual currents — designed for PV inverter circuits",
                B: "Detects AC, pulsating DC, and high-frequency residual currents; for circuits with VFDs and similar high-frequency loads",
                C: "Identical scope to Type AC but with a faster trip time",
                D: "Skip"
              },
              answer: "B",
              explanation: "Type F RCD. AM2 candidates know."
            },
            {
              number: 25,
              prompt: "A 'Type B' RCD:",
              options: {
                A: "Detects sinusoidal AC currents only — equivalent scope to Type AC",
                B: "Detects AC, pulsating DC, and smooth DC residual currents; for circuits with significant DC leakage (e.g. PV inverters, EV charging)",
                C: "Same as Type B MCB — magnetic-only short-circuit protection",
                D: "Skip"
              },
              answer: "B",
              explanation: "Type B RCD. AM2 candidates know."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "A 'Type 1' SPD:",
              options: {
                A: "Equipment-level SPD — installed at the appliance for fine protection",
                B: "Lightning-current SPD — installed at the origin where direct lightning strikes are possible; high discharge capacity",
                C: "Surge-only SPD installed downstream of the consumer unit",
                D: "Skip"
              },
              answer: "B",
              explanation: "SPD types. AM2 candidates know."
            },
            {
              number: 2,
              prompt: "A 'Type 2' SPD:",
              options: {
                A: "Lightning-current SPD installed only at the DNO cut-out",
                B: "Surge SPD — installed at the consumer unit; protects against most surges from the supply or internal sources",
                C: "Equipment-level SPD installed at every socket outlet",
                D: "Skip"
              },
              answer: "B",
              explanation: "Type 2 SPD. AM2 candidates know."
            },
            {
              number: 3,
              prompt: "A 'Type 3' SPD:",
              options: {
                A: "Lightning-current SPD with the highest discharge capacity",
                B: "Equipment-level SPD — installed close to sensitive equipment for additional fine protection",
                C: "Located only at the origin, replacing the Type 1 SPD",
                D: "Skip"
              },
              answer: "B",
              explanation: "Type 3 SPD. AM2 candidates know."
            },
            {
              number: 4,
              prompt: "A 'BS 7671' Section 443 (SPDs):",
              options: {
                A: "Mandates SPDs at every socket outlet in dwellings",
                B: "Specifies when SPDs are required — typically for installations where transient overvoltages could cause loss of life, public services, commercial activity, or significant equipment damage",
                C: "Prohibits SPDs in domestic installations to avoid nuisance tripping",
                D: "Skip"
              },
              answer: "B",
              explanation: "SPD requirements. AM2 candidates know."
            },
            {
              number: 5,
              prompt: "A 'BS 7671' Section 411.4 (TN ADS):",
              options: {
                A: "0.2 s for all final circuits regardless of OCPD rating",
                B: "Disconnection times for TN systems — final circuits up to 32 A: 0.4 s; over 32 A: 5.0 s",
                C: "5.0 s for final circuits up to 32 A and 0.4 s for distribution circuits",
                D: "Skip"
              },
              answer: "B",
              explanation: "TN ADS times. AM2 candidates know."
            },
            {
              number: 6,
              prompt: "A 'BS 7671' Section 411.5 (TT ADS):",
              options: {
                A: "Same disconnection times as TN — 0.4 s and 5.0 s",
                B: "Disconnection times for TT systems — typically RCD operation; 0.2 s and 1.0 s thresholds depending on circuit",
                C: "10 s for all TT final circuits regardless of size",
                D: "Skip"
              },
              answer: "B",
              explanation: "TT ADS times. AM2 candidates know."
            },
            {
              number: 7,
              prompt: "A 'kWh' meter reading:",
              options: {
                A: "Measures apparent power demand in kVA only",
                B: "Measures real energy consumption in kilowatt-hours; the customer's energy bill is based on this",
                C: "Measures peak instantaneous current in amperes",
                D: "Skip"
              },
              answer: "B",
              explanation: "kWh meter. AM2 candidates know."
            },
            {
              number: 8,
              prompt: "A 'CT' (Current Transformer) meter:",
              options: {
                A: "Steps up current to 100 A secondary for high-resolution metering",
                B: "Used for high-current installations — the CT steps down current to a level the meter can measure (typically 5 A or 1 A secondary)",
                C: "Used only on three-phase supplies above 1000 A",
                D: "Skip"
              },
              answer: "B",
              explanation: "CT meter. AM2 candidates know."
            },
            {
              number: 9,
              prompt: "A 'kVA' demand on a commercial site:",
              options: {
                A: "Calculated annually as the average current of the previous year",
                B: "Measured by the DNO meter — the maximum demand in any 30-minute period; charged at a peak rate",
                C: "Identical to kWh consumption summed over the billing period",
                D: "Skip"
              },
              answer: "B",
              explanation: "kVA demand. AM2 candidates know."
            },
            {
              number: 10,
              prompt: "A 'maximum demand' calculation for an installation:",
              options: {
                A: "Sum of all OCPD ratings ignoring diversity — gives the absolute peak",
                B: "Sum of design currents with diversity applied (per OSG); installation rating must exceed maximum demand",
                C: "Always equal to the main switch rating regardless of connected loads",
                D: "Skip"
              },
              answer: "B",
              explanation: "Maximum demand. AM2 candidates know."
            },
            {
              number: 11,
              prompt: "A 'DNO supply' minimum voltage in UK:",
              options: {
                A: "240 V ±6% — pre-harmonisation tolerance still in use",
                B: "230 V ±10% — so 207 V minimum (230 × 0.9) and 253 V maximum (230 × 1.1)",
                C: "230 V ±5% — so 218.5 V minimum and 241.5 V maximum",
                D: "Skip"
              },
              answer: "B",
              explanation: "Voltage tolerance. AM2 candidates know."
            },
            {
              number: 12,
              prompt: "A 'three-phase' supply maximum voltage:",
              options: {
                A: "440 V ±6% — pre-harmonisation tolerance still in use",
                B: "400 V ±10% — phase-to-phase",
                C: "230 V ±10% — same as single-phase line-to-neutral",
                D: "Skip"
              },
              answer: "B",
              explanation: "Three-phase voltage. AM2 candidates know."
            },
            {
              number: 13,
              prompt: "A 'BS 7671' Reg 132.16 (additional protection):",
              options: {
                A: "Requires 100 mA RCD on all socket outlets above 16 A",
                B: "Where appliances of socket outlets are used by ordinary persons, additional protection by 30 mA RCD is required",
                C: "Mandates supplementary bonding on every socket-outlet circuit",
                D: "Skip"
              },
              answer: "B",
              explanation: "Reg 132.16. AM2 candidates know."
            },
            {
              number: 14,
              prompt: "A 'BS 7671' Reg 522.6.202 (cables in walls):",
              options: {
                A: "Cables in walls must always be encased in steel conduit",
                B: "Cables in walls/partitions must be in safe zones, mechanically protected, or RCD-protected — all detailed in the regulation",
                C: "Permits any routing if the cable is rated 1 mm² or larger",
                D: "Skip"
              },
              answer: "B",
              explanation: "Reg 522.6.202. AM2 candidates know."
            },
            {
              number: 15,
              prompt: "A 'BS 7671' Reg 132.14 (switching the line conductor only):",
              options: {
                A: "Switches must interrupt the neutral conductor only — for safety with TT systems",
                B: "Switches must interrupt the line conductor; switching the neutral leaves the accessory live",
                C: "Switches must interrupt both line and neutral on every final circuit",
                D: "Skip"
              },
              answer: "B",
              explanation: "Reg 132.14. AM2 candidates know."
            },
            {
              number: 16,
              prompt: "A 'BS 7671' Reg 514.4 (identification of cpc):",
              options: {
                A: "Bare copper without sleeving is the recognised cpc identification",
                B: "All cpcs must be identified by green/yellow at every visible point; required for safety and inspection",
                C: "cpcs may be identified by any colour provided they are tagged at terminations",
                D: "Skip"
              },
              answer: "B",
              explanation: "Reg 514.4. AM2 candidates know."
            },
            {
              number: 17,
              prompt: "A 'BS 7671' Reg 521.5 (SWA):",
              options: {
                A: "Prohibits armoured cables in any installation under 1000 A",
                B: "Sets requirements for armoured cables — termination, bonding of armour, mechanical protection, etc.",
                C: "Permits armour to be left untreated as it is not a current-carrying conductor",
                D: "Skip"
              },
              answer: "B",
              explanation: "Reg 521.5. AM2 candidates know."
            },
            {
              number: 18,
              prompt: "A 'BS 7671' Reg 526.3 (junction boxes):",
              options: {
                A: "All junction boxes must be encased in concrete to be permitted",
                B: "Junction boxes must be accessible, OR be of a maintenance-free type — specific exceptions apply",
                C: "Junction boxes are prohibited in domestic dwellings since 2018",
                D: "Skip"
              },
              answer: "B",
              explanation: "Reg 526.3. AM2 candidates know."
            },
            {
              number: 19,
              prompt: "A 'BS 7671' Reg 543.7 (earthing of accessories):",
              options: {
                A: "Metal back-boxes do not require earthing if the accessory is plastic",
                B: "Metal accessories must be earthed via the cpc; metal back-boxes must be earthed via fly-lead or accessory's lugs",
                C: "Metal accessories may be earthed via the supplementary bonding only",
                D: "Skip"
              },
              answer: "B",
              explanation: "Reg 543.7. AM2 candidates know."
            },
            {
              number: 20,
              prompt: "A 'BS 7671' Reg 612 (test sequence):",
              options: {
                A: "Mandates live tests before dead tests on all new installations",
                B: "Sets the dead-test and live-test sequence; follows GN3",
                C: "Allows the test sequence to be chosen by the inspector at random",
                D: "Skip"
              },
              answer: "B",
              explanation: "Reg 612. AM2 candidates know."
            },
            {
              number: 21,
              prompt: "A 'BS 7671' Table 64 (IR criteria):",
              options: {
                A: "Single value of 0.5 MΩ regardless of test voltage or circuit type",
                B: "Minimum IR values: SELV/PELV ≥0.5 MΩ at 250 V DC; LV up to 500 V ≥1.0 MΩ at 500 V DC; over 500 V ≥1.0 MΩ at 1000 V DC",
                C: "100 MΩ minimum for all LV circuits regardless of test voltage",
                D: "Skip"
              },
              answer: "B",
              explanation: "Table 64. AM2 candidates know."
            },
            {
              number: 22,
              prompt: "A 'BS 7671' Table 41.3 (Zs maximums for general use):",
              options: {
                A: "Single Zs value of 0.35 Ω for all OCPDs regardless of type or rating",
                B: "Maximum Zs values for various OCPDs and ratings — Type B 32 A = 1.44 Ω, Type C 32 A = 0.72 Ω, etc.",
                C: "Always Type C 32 A = 1.44 Ω and Type B 32 A = 0.72 Ω",
                D: "Skip"
              },
              answer: "B",
              explanation: "Table 41.3. AM2 candidates know."
            },
            {
              number: 23,
              prompt: "A 'BS 7671' Annex E (periodic inspection intervals):",
              options: {
                A: "Annually for domestic dwellings and quarterly for commercial premises",
                B: "Recommended inspection intervals: domestic 10 years (or change of occupancy), commercial 5 years, etc.",
                C: "Only required after a fault has been detected — no scheduled interval",
                D: "Skip"
              },
              answer: "B",
              explanation: "Annex E. AM2 candidates know."
            },
            {
              number: 24,
              prompt: "A 'BS 7671' Reg 421.1.201 (CU enclosure):",
              options: {
                A: "Plastic CUs are mandated for all domestic dwellings",
                B: "Domestic CU must be of non-combustible material; enclosures rated for the location and the equipment",
                C: "CU enclosures are governed only by IP rating — material is not specified",
                D: "Skip"
              },
              answer: "B",
              explanation: "Reg 421. AM2 candidates know."
            },
            {
              number: 25,
              prompt: "A 'BS 7671' Reg 132 (general principles):",
              options: {
                A: "Specifies disconnection times for TN systems only",
                B: "Sets the general principles — protection against electric shock, against thermal effects, against mechanical damage; the foundation of the standard",
                C: "Defines RCD types and minimum trip thresholds",
                D: "Skip"
              },
              answer: "B",
              explanation: "Reg 132. AM2 candidates know."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "A 'safe-isolation' competent person's permit-to-work:",
              options: {
                A: "An informal verbal agreement between the worker and the duty holder",
                B: "Defines the work scope, the limits of work, the time window, and the conditions for work — signed by the duty holder and acknowledged by the worker",
                C: "Issued only after the work is complete to record what was done",
                D: "Skip"
              },
              answer: "B",
              explanation: "Permit-to-work. AM2 candidates know."
            },
            {
              number: 2,
              prompt: "A 'risk assessment' for an electrical task:",
              options: {
                A: "A list of OCPDs only — covers electrical risks but no other hazards",
                B: "Identifies hazards, evaluates the risk, specifies controls — typically sufficient to address electrical, mechanical, environmental and other hazards",
                C: "Required only when working live — dead working is exempt",
                D: "Skip"
              },
              answer: "B",
              explanation: "Risk assessment. AM2 candidates produce."
            },
            {
              number: 3,
              prompt: "A 'method statement' (RAMS):",
              options: {
                A: "A list of materials only — does not need to cover sequence or controls",
                B: "Sequential plan of how the task will be performed — covers tools, materials, sequence, controls, persons, and the points of high risk",
                C: "Replaces the risk assessment entirely on small-scale work",
                D: "Skip"
              },
              answer: "B",
              explanation: "Method statement. AM2 candidates produce."
            },
            {
              number: 4,
              prompt: "A 'BS 7671' fundamental principle:",
              options: {
                A: "Equipment must be CE-marked — no other protection requirements apply",
                B: "Persons and livestock must be protected against the dangers of electric shock — basic protection (touch) + fault protection (ADS, RCD)",
                C: "Cable must be sized to handle 200% of design current at all times",
                D: "Skip"
              },
              answer: "B",
              explanation: "Fundamental principle. AM2 candidates know."
            },
            {
              number: 5,
              prompt: "A 'BS 7671' Reg 411.3.3 (additional protection):",
              options: {
                A: "Additional protection only required where Zs exceeds Table 41.3 maximums",
                B: "Additional protection by 30 mA RCD — required for socket outlets up to 32 A in dwellings, and for mobile equipment outdoors",
                C: "Requires 100 mA time-delayed RCDs on all socket outlets indoors",
                D: "Skip"
              },
              answer: "B",
              explanation: "Reg 411.3.3. AM2 candidates know."
            },
            {
              number: 6,
              prompt: "A 'protective measure' under BS 7671:",
              options: {
                A: "Bonding alone — basic protection is not part of a protective measure",
                B: "Combination of basic protection + fault protection that together provide protection against electric shock — most common: ADS",
                C: "Periodic inspection alone — a 5-year inspection cycle is the protective measure",
                D: "Skip"
              },
              answer: "B",
              explanation: "Protective measures. AM2 candidates know."
            },
            {
              number: 7,
              prompt: "A 'basic protection' against electric shock:",
              options: {
                A: "Operates after a fault — relies on the OCPD or RCD to disconnect",
                B: "Insulation of live parts, barriers/enclosures, obstacles, placing out of reach — preventing direct contact with live parts",
                C: "Earthing of exposed-conductive-parts to the MET only",
                D: "Skip"
              },
              answer: "B",
              explanation: "Basic protection. AM2 candidates know."
            },
            {
              number: 8,
              prompt: "A 'fault protection' against electric shock:",
              options: {
                A: "Insulation of live parts and barriers — same as basic protection",
                B: "Operates after a fault — typically ADS by the OCPD/RCD, or supplementary protective measure (e.g. SELV)",
                C: "Always achieved by an SPD operating below 6 kV transient voltage",
                D: "Skip"
              },
              answer: "B",
              explanation: "Fault protection. AM2 candidates know."
            },
            {
              number: 9,
              prompt: "A 'reduced low-voltage' system (RLV):",
              options: {
                A: "230 V single-phase with double insulation only",
                B: "Typically 110 V centre-tapped (55-0-55), used for site tools and temporary installations to reduce shock risk",
                C: "400 V three-phase with isolating transformer at every socket",
                D: "Skip"
              },
              answer: "B",
              explanation: "RLV system. AM2 candidates know."
            },
            {
              number: 10,
              prompt: "A 'centre-tapped' 110 V site supply:",
              options: {
                A: "110 V line-to-earth with neutral isolated from ground",
                B: "55-0-55 V — gives 110 V across L-N but only 55 V each side to ground; used for portable tools on construction sites",
                C: "230 V on a centre-tapped transformer with two phases at 115 V each",
                D: "Skip"
              },
              answer: "B",
              explanation: "110 V CTE. AM2 candidates know."
            },
            {
              number: 11,
              prompt: "A 'BS 7671' Reg 415.1.1 (IΔn 30 mA):",
              options: {
                A: "100 mA RCDs are the minimum trip threshold for additional protection",
                B: "30 mA RCDs provide additional protection against direct contact for socket-outlets up to 32 A in dwellings, mobile outdoor equipment",
                C: "10 mA RCDs are required for all socket-outlets in dwellings",
                D: "Skip"
              },
              answer: "B",
              explanation: "Reg 415.1.1. AM2 candidates know."
            },
            {
              number: 12,
              prompt: "A 'BS 7671' Reg 415.2 (special locations):",
              options: {
                A: "Special locations are exempt from BS 7671 — covered separately by HSG85",
                B: "Special locations (bathrooms, swimming pools, agricultural, construction sites, marinas, caravan parks, etc.) have additional requirements in Part 7",
                C: "Defines bathrooms only — other locations are covered by Part 6",
                D: "Skip"
              },
              answer: "B",
              explanation: "Special locations. AM2 candidates know."
            },
            {
              number: 13,
              prompt: "A 'BS 7671' Section 701 (bathrooms):",
              options: {
                A: "Allows any IP rating in any zone provided RCD protection is present",
                B: "Bathroom-specific requirements — zone classification, IP requirements, supplementary bonding (or its omission per Reg 701.415.2), 30 mA RCD",
                C: "Prohibits all electrical accessories within 3 m of a bath or shower",
                D: "Skip"
              },
              answer: "B",
              explanation: "Section 701. AM2 candidates know."
            },
            {
              number: 14,
              prompt: "A 'BS 7671' bathroom Zones (0, 1, 2):",
              options: {
                A: "Zone 0 covers the entire bathroom regardless of fixtures",
                B: "Zone 0 = inside bath/shower; Zone 1 = above bath/shower up to 2.25 m; Zone 2 = adjacent to Zone 1 by 0.6 m",
                C: "Zone 1 = inside bath; Zone 2 = above bath up to 1.5 m",
                D: "Skip"
              },
              answer: "B",
              explanation: "Bathroom zones. AM2 candidates know."
            },
            {
              number: 15,
              prompt: "A 'BS 7671' bathroom IP requirements:",
              options: {
                A: "All zones require IPX0 — no water protection rating is specified",
                B: "Zone 0 = IPX7; Zone 1 = IPX4; Zone 2 = IPX4; Zone 3 (where defined) = IPX1",
                C: "Zone 0 = IPX4; Zone 1 = IPX2; Zone 2 = IPX0",
                D: "Skip"
              },
              answer: "B",
              explanation: "Bathroom IP. AM2 candidates know."
            },
            {
              number: 16,
              prompt: "A 'BS 7671' Section 702 (swimming pools):",
              options: {
                A: "Identical requirements to bathrooms (Section 701)",
                B: "Pool-specific requirements — zone classification, IP, equipment selection, equipotential bonding, RCD requirements",
                C: "Permits 230 V socket-outlets within Zone 0 if RCD-protected",
                D: "Skip"
              },
              answer: "B",
              explanation: "Section 702. AM2 candidates know."
            },
            {
              number: 17,
              prompt: "A 'BS 7671' Section 705 (agricultural):",
              options: {
                A: "Identical to domestic dwellings — no special requirements apply",
                B: "Agricultural premises — additional requirements for environment, livestock, equipment selection, RCDs",
                C: "Prohibits all RCDs because of livestock-induced nuisance tripping",
                D: "Skip"
              },
              answer: "B",
              explanation: "Section 705. AM2 candidates know."
            },
            {
              number: 18,
              prompt: "A 'BS 7671' Section 706 (restrictive conductive locations):",
              options: {
                A: "Outdoor locations only — does not apply to indoor confined spaces",
                B: "Locations where movement is restricted by conductive surfaces (e.g. inside a tank) — limit voltage and require enhanced protection",
                C: "Permits 230 V LV equipment provided 30 mA RCD is fitted",
                D: "Skip"
              },
              answer: "B",
              explanation: "Section 706. AM2 candidates know."
            },
            {
              number: 19,
              prompt: "A 'BS 7671' Section 708 (caravan parks):",
              options: {
                A: "Permits standard 13 A BS 1363 sockets at each pitch",
                B: "Caravan park supply requirements — pitch supply units, RCDs, isolation, marking",
                C: "Allows pitch supplies without RCD provided TT earthing is used",
                D: "Skip"
              },
              answer: "B",
              explanation: "Section 708. AM2 candidates know."
            },
            {
              number: 20,
              prompt: "A 'BS 7671' Section 711 (exhibitions/shows):",
              options: {
                A: "Identical to domestic dwellings — no temporary-installation rules apply",
                B: "Temporary installations for exhibitions, shows, stands — RCD, isolation, durability",
                C: "Exempt from BS 7671 — covered solely by event-organiser policies",
                D: "Skip"
              },
              answer: "B",
              explanation: "Section 711. AM2 candidates know."
            },
            {
              number: 21,
              prompt: "A 'BS 7671' Section 740 (temporary supplies):",
              options: {
                A: "Permits indefinite use without periodic inspection or certification",
                B: "Temporary installations — site supplies, fairgrounds, festivals — additional RCD, isolation, certification",
                C: "Identical to permanent installations — temporary nature has no impact",
                D: "Skip"
              },
              answer: "B",
              explanation: "Section 740. AM2 candidates know."
            },
            {
              number: 22,
              prompt: "A 'PUWER 1998' (Provision and Use of Work Equipment Regulations):",
              options: {
                A: "Applies only to fixed installations — portable tools are exempt",
                B: "Sets requirements for safe selection, use, and maintenance of work equipment — relevant to test instruments and tools",
                C: "Repealed and replaced entirely by BS 7671:2018",
                D: "Skip"
              },
              answer: "B",
              explanation: "PUWER. AM2 candidates know."
            },
            {
              number: 23,
              prompt: "A 'PPE' (Personal Protective Equipment Regulations):",
              options: {
                A: "Voluntary code only — employers may provide PPE at their discretion",
                B: "Sets requirements for PPE selection and use — relevant to electrical PPE (insulating gloves, eye protection, arc-flash clothing)",
                C: "Applies only to construction sites — not to general electrical work",
                D: "Skip"
              },
              answer: "B",
              explanation: "PPE Regs. AM2 candidates know."
            },
            {
              number: 24,
              prompt: "A 'CDM 2015' (Construction Design and Management):",
              options: {
                A: "Voluntary best-practice guide for construction sites only",
                B: "Sets duties for managing construction site safety — Principal Designer, Principal Contractor, etc.; relevant to AM2 candidates working on construction sites",
                C: "Applies only to projects above £1 million in value",
                D: "Skip"
              },
              answer: "B",
              explanation: "CDM 2015. AM2 candidates know."
            },
            {
              number: 25,
              prompt: "The 'final' AM2 expectation across all sections:",
              options: {
                A: "Demonstrate skill in only one of the five practical disciplines",
                B: "Demonstrate competence in safe isolation, installation, testing, fault-finding and commissioning — all underpinned by knowledge of the regulations and the standards that apply",
                C: "Pass the multiple-choice paper without practical demonstration",
                D: "Skip"
              },
              answer: "B",
              explanation: "AM2 expectation. AM2 candidates demonstrate competence."
            }
          ]
        }
      ]
    },
    electricianTrainingAm2SourceSection
  ],
  scoring: [
    { threshold: 0.9, label: "Strong — exam-ready on AM2 practical disciplines" },
    { threshold: 0.6, label: "Pass — review safe isolation, GS38, or fault-find logic" },
    { threshold: 0.45, label: "Near miss — re-rehearse the AM2 sequence" },
    { threshold: 0, label: "Major gaps — return to fundamentals before sitting AM2" }
  ],
  priorities: [
    "Safe isolation — rehearse the full sequence until it is automatic. The assessor will watch for permission, lock-off, prove/re-prove of the indicator, and GS38-compliant probes.",
    "GN3 test sequence — dead tests first in the correct order, then live tests; be able to state WHY each step comes where it does.",
    "RCD acceptance criteria cold — 0.5× IΔn no trip in 2 s, 1× IΔn ≤ 300 ms (general type), 5× IΔn ≤ 40 ms; know S-type figures separately.",
    "Fault-finding discipline — the AM2 fault-find sub-test is heavily weighted. Practise interpreting Zs, IR and ring-final anomalies and working from symptom to root cause by splitting the circuit.",
    "Commissioning & handover — selective energisation, three-phase rotation, multi-way lighting functional tests, and a complete documentation pack (EIC + both schedules + Part P + O&M)."
  ]
};
