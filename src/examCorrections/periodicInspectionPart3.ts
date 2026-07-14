import type { ExamQuestionCorrection } from "./types";

export const periodicInspectionPart3Corrections = [
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 9,
    promptSuffix:
      "A landlord refuses to act on an Unsatisfactory EICR. The local authority enforcement options include:",
    options: {
      A: "Formal remedial action and a financial penalty of up to £40,000 for a breach under the current rented-sector regime",
    },
    explanation:
      "The current England rented-sector regime lets a local authority require remedial action and impose a financial penalty of up to £40,000 for a breach. That ceiling took effect on 1 November 2025 for the private rented sector and for all purposes other than the transitional pre-1 December 2025 social-housing tenancies, to which the relevant amendments applied from 1 May 2026. The authority still applies its published enforcement policy to the facts of the case.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 12,
    promptSuffix:
      "An EICR is Unsatisfactory and the duty holder asks the inspector for a quick top-up retest after remedial works. The inspector should:",
    options: {
      B: "Inspect and test the remedied items they are being asked to verify, then issue separate written confirmation or the appropriate work certificate; keep the original EICR unchanged",
    },
    explanation:
      "The original EICR remains the dated record of the condition found. Remedial work is closed out with suitable inspection and testing plus separate certification or written confirmation; it is not made satisfactory by editing or backdating the original report.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 16,
    promptSuffix:
      "An inspector finds a C1 on a school's plant room circuit and isolates it. The school's premises manager wants the inspector to leave the keys to the isolation. The correct action is:",
    options: {
      B: "Formally hand control of the isolation to an authorised responsible person only if the lock-off remains secure, re-energisation is prohibited until verified repair, and the key holder and handover are recorded",
    },
    explanation:
      "The aim is controlled isolation, not permanent personal possession of the key. A competent inspector may hand control to an authorised duty-holder representative when the lock-off, warning, key holder and condition for re-energisation are recorded and cannot be defeated informally.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 17,
    promptSuffix:
      "Under PRS Regs 2020, the maximum financial penalty per breach is:",
    options: {
      C: "£40,000",
    },
    explanation:
      "The current maximum financial penalty in England is £40,000. It took effect on 1 November 2025 for the private rented sector and for all purposes other than the transitional pre-1 December 2025 social-housing tenancies, to which the relevant amendments applied from 1 May 2026. £30,000 was the earlier maximum; local authorities decide the actual amount under their enforcement policy and the circumstances of the breach.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 19,
    promptSuffix:
      "On a TT-supplied dwelling, the inspector finds an inoperative RCD. Given TT systems rely on RCDs for fault protection, the appropriate code and on-site action is:",
    options: {
      C: "C2 — fault protection is ineffective; urgently isolate or otherwise make the affected installation safe and replace and test the RCD",
    },
    answer: "C",
    explanation:
      "Current Best Practice Guide 4 gives C2 where the main RCD used for TT fault protection fails to operate. The missing protective measure is potentially dangerous and needs urgent action, but C1 requires danger present now, such as accessible live parts or metalwork already made live by a fault.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 5,
    promptSuffix:
      "An inspector who is also the duty holder for the same installation should:",
    options: {
      B: "Declare and manage the conflict, preserve independent technical judgement and arrange an independent inspection or review where impartiality could reasonably be doubted",
    },
    explanation:
      "Being the duty holder does not automatically make a competent person's measurements invalid, but it creates an obvious impartiality risk. The conflict should be declared and independent inspection or review used where needed so the report is supported by evidence rather than self-interest.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 6,
    promptSuffix:
      "A landlord supplies the local authority with a copy of the EICR within the required time but ignores the C2 observations beyond 28 days. The local authority can:",
    options: {
      B: "Require remedial action and impose a financial penalty of up to £40,000 for a breach under the current regime",
    },
    explanation:
      "Supplying the report does not satisfy the separate duty to complete required remedial or investigative work. Under the current England regime, enforcement can include remedial action and a financial penalty of up to £40,000 for a breach.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 14,
    promptSuffix:
      "An inspector who agrees to issue a Satisfactory EICR after a known C2 has been remediated must:",
    correctedPromptSuffix:
      "After a C2 on an EICR has been remedied, what documentation should close it out?",
    options: {
      A: "Alter the original EICR to Satisfactory without checking the work",
      B: "Inspect and test the remedy being verified, then issue separate written confirmation or the appropriate certificate while retaining the original EICR",
      C: "Delete the original observation once the duty holder says the work is complete",
      D: "Commission another full EICR in every case",
    },
    explanation:
      "The original report remains an honest snapshot of the C2 found. A competent person verifies the remedial work and provides the appropriate work certificate or written confirmation; another complete EICR is needed only if a new full condition assessment is actually commissioned.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 17,
    promptSuffix:
      "An inspector finds a C1 in a property they were not contracted to inspect (e.g. an adjacent shop unit during an EICR on the next-door unit). The inspector should:",
    options: {
      B: "Warn the affected unit's responsible person immediately, prevent access or make safe only where authorised and competent to do so, and call the DNO or emergency services if the danger cannot otherwise be controlled",
    },
    explanation:
      "An inspector should not ignore an immediate danger, but the neighbouring unit is outside the contract and may be outside their authority to isolate or enter. Give a clear warning, control access where possible, notify the person responsible and escalate to the appropriate emergency or network authority when necessary.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 3,
    promptSuffix:
      "On a privately rented dwelling, where the EICR is Satisfactory but recommends the next inspection in 3 years rather than the maximum 5, the landlord should:",
    explanation:
      "The report's three-year recommendation becomes the due date because the rented-sector requirement is the interval specified in the report, subject to an absolute maximum of five years. Five years is a ceiling, not a minimum or a reason to disregard a shorter evidence-based recommendation.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 16,
    promptSuffix:
      "An EICR Satisfactory result on a domestic dwelling with C3s does not relieve the landlord of:",
    correctedPromptSuffix:
      "A rented dwelling has a Satisfactory EICR with C3 recommendations only. Which ongoing electrical-safety duty still applies between periodic inspections?",
    options: {
      A: "None — the landlord may ignore deterioration until the next scheduled EICR",
      B: "Maintain the installation in a safe condition, respond to defects that arise and plan sensible C3 improvements",
      C: "Complete every C3 within 28 days as though it were mandatory remedial work",
      D: "Renew the tenancy before arranging any electrical work",
    },
    explanation:
      "A Satisfactory EICR is a dated assessment, not a maintenance holiday. The landlord must keep the installation safe between inspections and respond to deterioration or new defects. C3 improvements should be considered and planned, but C3 alone does not trigger the rented-sector 28-day duty for required remedial or investigative work.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 19,
    promptSuffix:
      "An EICR Satisfactory result with no observations does not relieve the duty holder of:",
    options: {
      D: "A blanket requirement to PAT every appliance annually regardless of its use or risk assessment",
    },
    explanation:
      "An EICR is a snapshot of the fixed installation within its recorded scope. The duty holder must continue maintenance, respond to new defects and arrange the next inspection when due. Portable-equipment controls are a separate risk-based matter, not an automatic annual test for every item.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 20,
    promptSuffix:
      "An inspector who refuses to make safe a known C1 because the duty holder hasn't paid the invoice is:",
    options: {
      B: "Acting recklessly if they withhold an authorised, safe make-safe solely over payment; at minimum they must warn immediately, control access where possible and escalate the danger",
    },
    explanation:
      "A payment dispute cannot justify concealing or abandoning an immediate danger. The inspector must notify the responsible person at once and take the make-safe action they are competent and authorised to take, or secure and escalate the danger if they cannot lawfully isolate it themselves.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 5,
    promptSuffix:
      "An inspector signs off on a written confirmation under PRS Regs 2020 stating that remedial works addressing the original C1/C2/FI items have been completed. They must:",
    correctedPromptSuffix:
      "An inspector signs written confirmation under the rented-sector regulations stating that the original C1/C2 remedial work and any further investigation required by the report have been completed. They must:",
    options: {
      B: "Have a proper evidential basis for the statement: carry out or take responsibility for suitable inspection and testing of the remedial work and record the results",
    },
    explanation:
      "A qualified person may confirm work they carried out and initially verified, or work they later inspected and tested. They do not have to be the original EICR inspector, but they must not sign from photographs, an invoice or another person's unsupported assurance.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 6,
    promptSuffix:
      "An EICR Unsatisfactory with one C2 has been remediated by a different electrician. The original inspector is asked to issue the written confirmation. They should:",
    options: {
      B: "Inspect and test the remedied item before signing, or rely on the remedial electrician to provide their own appropriate certificate or written confirmation",
      C: "Trust a verbal assurance that the second electrician tested it, without obtaining their certificate or test evidence",
    },
    explanation:
      "The original inspector cannot personally confirm work they have not verified. The electrician who carried out and tested the remedy can provide the appropriate certification, or the original inspector can inspect and test it before issuing their own confirmation.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 10,
    promptSuffix:
      "An inspector who fails to disclose a known conflict of interest (e.g. the duty holder is a close family member) and issues a Satisfactory EICR is:",
    options: {
      B: "Undermining the report's credibility and potentially breaching scheme or professional duties; the electrical findings still have to be judged from their evidence",
    },
    explanation:
      "A hidden conflict can justify review and disciplinary action, but it does not mechanically make every recorded measurement false. Declare the relationship, preserve objective judgement and use independent review where a reasonable reader could doubt impartiality.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 11,
    promptSuffix:
      "On a privately rented dwelling, the landlord's PRS Regs 2020 obligations apply:",
    options: {
      B: "Throughout the tenancy — keep the inspection cycle, complete required C1/C2 remedial work and any further investigation the report says is necessary, give EICRs when required, and send qualified-person confirmation to the tenant and local authority within 28 days of completion",
    },
    explanation:
      "The duties operate throughout the tenancy. EICR-copy deadlines depend on the recipient: a new tenant gets it before occupation, an existing tenant within 28 days of inspection, a prospective tenant within 28 days of request, and the local authority within seven days of its written request. After required C1/C2 remedial work or further investigation, the landlord must also send the qualified person's confirmation to both the tenant and local authority within 28 days of completion.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 16,
    promptSuffix:
      "An inspector finds clear evidence of fire damage on a circuit (charred sheath, melted accessory). The most appropriate code is:",
    correctedPromptSuffix:
      "An inspector finds cooled, contained fire damage on a circuit: charred sheath and a melted accessory, but no exposed live parts, active heat, smoke or arcing. The most appropriate code is:",
    options: {
      B: "C2 — the damaged insulation and accessory are potentially dangerous and need urgent replacement and testing",
      C: "C1 solely because fire damage occurred at some time in the past",
      D: "C3 because the damage is no longer hot",
    },
    answer: "B",
    explanation:
      "Contained fire damage with no danger present now is potentially dangerous because insulation, terminals and enclosure integrity have been impaired, so C2 is appropriate. Active arcing, heat, smoke or accessible live parts would instead establish C1 and require immediate make-safe action.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v1",
    questionNumber: 2,
    promptSuffix:
      "A Type AC RCD protecting a circuit passes the standard AC residual-current trip test. The circuit supplies equipment likely to produce pulsating DC residual current components. What is the correct distinction?",
    options: {
      C: "Trip testing confirms operation under the AC test condition; verify the connected load, and if Type AC is confirmed where Type A is required record the selection issue, normally C3",
    },
    explanation:
      "A successful trip-time test proves operation only for the applied AC residual waveform; it does not prove the device is suitable for pulsating DC components from the load. Current Best Practice Guide 4 gives C3 where a Type AC RCD is installed where Type A is required, while an actual failed protective function is classified separately.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 3,
    promptSuffix:
      "A 30 mA RCD trips at 1×IΔn within 280 ms (limit 300 ms) and 35 ms at 5×IΔn (limit 40 ms). Record:",
    correctedPromptSuffix:
      "A general non-delay 30 mA RCD trips at IΔn in 280 ms when tested with an AC residual current. Under current BS 7671 field-verification requirements, record:",
    options: {
      C: "Satisfactory — 280 ms is within the 300 ms maximum at IΔn",
    },
    explanation:
      "Current BS 7671 field verification tests a general non-delay RCD at rated residual current IΔn using an AC test current, with a maximum operating time of 300 ms. The older 5 × IΔn/40 ms test is no longer a prescribed core field test.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 4,
    promptSuffix:
      "A cosmetic chip on the corner of a faceplate, no live parts visible. Code:",
    correctedPromptSuffix:
      "A faceplate has a small cosmetic chip, with no sharp edge, looseness, loss of enclosure protection, exposed live part or risk of progression. Record:",
    options: {
      C: "C3 merely because the faceplate is not cosmetically perfect",
      D: "No code — the cosmetic mark has not impaired electrical safety",
    },
    answer: "D",
    explanation:
      "An EICR records electrical-safety defects, not decoration. With basic protection, mechanical security and enclosure integrity unaffected, this is an observation at most and needs no classification code.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 5,
    promptSuffix:
      "A circuit's IR test reads 0.4 MΩ between line and earth. Code (likely):",
    correctedPromptSuffix:
      "After connected equipment has been disconnected and the test method verified, a circuit still measures 0.4 MΩ between live conductors connected together and Earth. Code:",
    explanation:
      "A confirmed insulation-resistance result below 1 MΩ is potentially dangerous and current Electrical Safety First guidance advises C2. If the initial result may be caused by connected equipment or an unsuitable test setup, correct the preparation and retest before classifying it.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 7,
    promptSuffix:
      "A loose, oxidised bonding clamp on the gas service, continuity intact. Code:",
    explanation:
      "A loose or corroded connection makes the main bonding path unreliable even when a low-current continuity check still succeeds, so C2 is appropriate. Complete loss of bonding remains C2 under current Best Practice Guide 4 unless another fact establishes danger present now.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 10,
    promptSuffix:
      "MCB swapped to wrong type (Type D where Type B was needed; Zs no longer satisfies disconnection time). Code:",
    options: {
      B: "C2 — the measured Zs is too high for the Type D device to meet the required disconnection time",
    },
    explanation:
      "A Type D MCB needs substantially more fault current for its magnetic element to operate than a Type B device. The measured loop impedance is stated to exceed the Type D limit, so automatic disconnection is not achieved in time and the circuit is potentially dangerous.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 12,
    promptSuffix:
      "Old rewireable fuse board, no RCD on accessible socket-outlets in active dwelling. Code (typical):",
    correctedPromptSuffix:
      "An older dwelling has a sound rewireable fuse board and no RCD additional protection for indoor socket-outlets that are not in a bathroom and are unlikely to supply mobile equipment outdoors. Code:",
    options: {
      A: "C3 — RCD additional protection would improve safety, but the stated use does not establish potential danger",
      B: "C2 solely because the sockets are accessible indoors",
    },
    answer: "A",
    explanation:
      "Current Best Practice Guide 4 gives C3 where a socket-outlet lacks RCD additional protection but is unlikely to supply outdoor mobile equipment, is outside a bathroom and presents no other potential danger. Rewireable fuses are not themselves a defect when they provide adequate circuit protection.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 15,
    promptSuffix:
      "Class I luminaire with no CPC connected, body within reach in a domestic kitchen. Code:",
    options: {
      B: "C2 — the accessible Class I metalwork has no effective fault-protection conductor",
      C: "C1 solely because the unearthed metalwork is within reach",
      D: "Either C1 or C2 depending only on accessibility",
    },
    answer: "B",
    explanation:
      "Current Best Practice Guide 4 gives C2 for a circuit supplying Class I equipment without a CPC. The metalwork could become dangerous if an insulation fault occurs, but C1 requires evidence that danger is present now, such as the body already being live.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 17,
    promptSuffix:
      "Sheath stripped too far back inside an enclosure, basic insulation intact. Code:",
    options: {
      B: "C2 even though the basic insulation is enclosed and cannot touch metalwork",
      C: "C3 — re-terminate so the sheath enters the enclosure, as basic protection remains intact",
    },
    answer: "C",
    explanation:
      "Best Practice Guide 4 gives C3 where a cable sheath does not enter an accessory enclosure but the unsheathed cores are neither touch-accessible nor likely to contact metalwork. C2 is justified if those conditions are not met; accessible live parts would be C1.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 18,
    promptSuffix:
      "An empty MCB way in the consumer unit with the MCB still fitted but no cable connected. Code:",
    correctedPromptSuffix:
      "An unused MCB remains fitted in a consumer unit with no outgoing cable. Its terminal is inside the sound cover, which requires a key or tool to remove. Record:",
    options: {
      B: "C2 because an enclosed unused terminal could be seen during maintenance",
      C: "C1 even though ordinary persons cannot touch the terminal with the cover secured",
      D: "No code — the consumer-unit enclosure still provides basic protection; identify or remove the spare device during planned work if useful",
    },
    answer: "D",
    explanation:
      "Live terminals inside a consumer unit are expected to become accessible to a skilled person when the secured cover is deliberately removed. Best Practice Guide 4 treats the absence of internal barriers as a myth where the outer cover requires a key or tool, so an enclosed unused MCB is not a C1 or C2 by itself.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 21,
    promptSuffix:
      "Burnt-out neutral termination at a busbar, contained, cooled, no exposed live parts. Code:",
    options: {
      B: "C2 — the heat-damaged connection and busbar need urgent repair and testing",
      D: "C1 because any evidence of past heat damage is automatically danger present",
    },
    answer: "B",
    explanation:
      "The cooled, contained damage is not danger present now, but the degraded termination can fail or overheat again and is therefore C2. Active arcing, heat or accessible live parts would change the observed condition to C1.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 22,
    promptSuffix:
      "RCD failure on a circuit feeding several outdoor sockets. Code:",
    options: {
      B: "C2 — the required additional protection for outdoor mobile equipment is unavailable",
      C: "C1 solely because the failed RCD served outdoor sockets",
      D: "Either C1 or C2 depending on whether another protective measure still works",
    },
    answer: "B",
    explanation:
      "Loss of RCD additional protection for outdoor socket use is potentially dangerous and needs urgent remedy, so C2 is appropriate. C1 would need a danger that exists now, such as accessible live parts; the failure of an additional protective layer does not establish that by itself.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 24,
    promptSuffix:
      "BS 3036 fuse on a 5 A lighting circuit, otherwise sound, ADS times still met. Code:",
    options: {
      C: "Satisfactory — a rewireable fuse is not a defect where the correct fuse wire provides adequate circuit and fault protection",
    },
    explanation:
      "Best Practice Guide 4 identifies rewireable fuses as a coding myth when they provide adequate circuit protection. A modern device may offer convenience or added functions, but age and device type alone do not justify C3.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 25,
    promptSuffix:
      "Fire damage on a circuit's accessory and cable, contained, cooled, no exposed live parts. Code:",
    options: {
      B: "C2 — the damaged accessory and insulation need urgent replacement and testing",
      D: "C1 because any previous fire damage is automatically danger present",
    },
    answer: "B",
    explanation:
      "The fire-damaged materials are potentially dangerous even after cooling, so C2 calls for urgent replacement and testing. C1 would apply if heat, arcing, smoke or accessible live parts made the danger immediate at the inspection.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 1,
    promptSuffix:
      "Damaged armoured cable gland with steel armour exposed, cores intact. Code:",
    correctedPromptSuffix:
      "An SWA gland is loose and damaged: mechanical retention is unreliable and testing confirms the armour/CPC connection is intermittent. Core insulation remains intact and no live part is accessible. Code:",
    options: {
      B: "C2 — the gland no longer gives reliable mechanical protection or armour continuity",
      D: "C1 because exposed steel armour is itself an accessible live conductor",
    },
    answer: "B",
    explanation:
      "With the live-conductor insulation intact, the damaged gland creates potential danger through loss of mechanical protection or armour/CPC continuity, so C2 is appropriate. It becomes C1 only if the actual inspection finds accessible live parts or another danger present now.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 2,
    promptSuffix:
      "Retail unit with no RCD additional protection on customer-facing socket-outlets. Code:",
    correctedPromptSuffix:
      "A retail unit has no RCD additional protection on indoor customer-facing socket-outlets. They are outside a bathroom, are unlikely to supply mobile equipment outdoors and no other danger is identified. Code:",
    options: {
      A: "C3 — RCD protection would improve safety, but the stated indoor use does not establish potential danger",
      B: "C2 solely because customers can reach the sockets",
    },
    answer: "A",
    explanation:
      "Best Practice Guide 4 gives C3 for a socket-outlet without RCD additional protection where it is unlikely to supply outdoor mobile equipment, does not serve a bathroom and presents no other potential danger. Public accessibility alone does not convert every older indoor socket to C2.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 3,
    promptSuffix:
      "Missing previous EIC / Schedule of Test Results held by duty holder. Code (typical):",
    correctedPromptSuffix:
      "The duty holder cannot produce the original EIC or old Schedule of Test Results, but the current EICR obtains sufficient inspection and test evidence and finds no related defect. Record:",
    options: {
      C: "No classification code solely for missing historic paperwork; note the records gap and rely on current inspection and test evidence",
    },
    explanation:
      "An EICR classifies the present electrical condition, not the filing system. Missing historic documents can affect the available evidence and should be recorded, but they do not create C1, C2, C3 or FI unless a specific safety concern remains unresolved.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 5,
    promptSuffix:
      "Cable tray (metal) used to support insulated cables, not connected to protective earth. Code:",
    correctedPromptSuffix:
      "A metal cable tray supports intact insulated-and-sheathed cables. It is not used as a protective conductor, does not introduce Earth potential and cannot foreseeably contact single-insulated live conductors. It is not connected to protective earth. Record:",
    options: {
      B: "C2 solely because the support is metal",
      D: "No code — the tray is neither an exposed-conductive-part nor an extraneous-conductive-part in the stated arrangement",
    },
    answer: "D",
    explanation:
      "A metal support is not automatically an exposed-conductive-part: it must be liable to become live through failure of basic insulation. Intact sheathed cables provide more than basic insulation, and the tray also does not introduce Earth potential, so the stated arrangement needs no earthing solely because it is metal.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 6,
    promptSuffix:
      "Loose earth pin contact at an accessible socket-outlet. Code (typical):",
    options: {
      B: "C2 — the socket may fail to earth connected Class I equipment",
      C: "C1 solely because a Class I appliance might later be connected",
      D: "Either C1 or C2 depending on what appliance is usually plugged in",
    },
    answer: "B",
    explanation:
      "The defective earth contact can remove fault protection from connected Class I equipment, creating potential danger and therefore C2. C1 requires danger present now, such as accessible metalwork already made live, not only the possibility of a future fault.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 7,
    promptSuffix:
      "PV system DC isolator without correct DC-rated labelling. Code:",
    options: {
      B: "C2 solely because a label is missing",
      C: "C3 — provide clear DC isolation and alternative-source identification",
    },
    answer: "C",
    explanation:
      "Best Practice Guide 4 gives C3 for absent warning notices identifying an alternative or secondary source. A confirmed AC-only device installed in the DC circuit, exposed live parts or another actual danger would be classified separately; missing identification alone is an improvement item.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 8,
    promptSuffix:
      "Tape-wrapped twisted joint at exposed loft-level cable run. Code:",
    correctedPromptSuffix:
      "A loft cable has a cool tape-wrapped twisted joint outside any suitable enclosure. No live part is touch-accessible. Code:",
    options: {
      B: "C2 — the unsupported improvised joint can loosen, overheat or lose insulation",
      D: "C1 because any taped joint is automatically danger present",
    },
    answer: "B",
    explanation:
      "Twisting and tape do not provide a durable terminal, strain relief or enclosure, so the joint can deteriorate into shock or fire danger and warrants C2. C1 would require the actual joint to be arcing, hot or exposing a live part now.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 9,
    promptSuffix:
      "MET earth conductor terminated via a hand-tight cable lug, found loose. Code:",
    options: {
      B: "C2 — the loose main earthing connection makes fault protection unreliable",
      C: "C1 solely because continuity may be lost",
      D: "Either C1 or C2 based only on a continuity reading",
    },
    answer: "B",
    explanation:
      "Current Best Practice Guide 4 classifies an unreliable or absent means of earthing as C2. C1 needs danger present now, such as accessible conductive parts already live; a loose or even open earthing connection is potential danger until such a fault occurs.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 10,
    promptSuffix:
      "Sheltered-housing dwelling with fixed mobility-aid charging point, no RCD protection. Code:",
    correctedPromptSuffix:
      "A sheltered-housing socket-outlet is intended to charge mobility equipment that is regularly taken outdoors. It has no 30 mA RCD additional protection. Code:",
    options: {
      B: "C2 — equipment used outdoors has lost the required 30 mA additional shock protection",
    },
    explanation:
      "A socket supplying mobile equipment reasonably expected to be used outdoors needs 30 mA RCD additional protection. Its absence removes a required protective layer in a higher-shock-risk use, so C2 is appropriate rather than a blanket rule based only on the occupant's age or disability.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 11,
    promptSuffix:
      "Cooker control unit with switched 13 A socket on; non-functional shutters; live terminals not currently exposed. Code:",
    options: {
      B: "C2 — defective shutters can allow foreseeable access to live contacts and need urgent replacement",
      D: "C1 because defective shutters always mean the live contacts are already touch-accessible",
    },
    answer: "B",
    explanation:
      "The failed shutters create a foreseeable route to contact with live parts, so C2 is appropriate while the live contacts remain inaccessible. If the inspection actually proves an ordinary finger or standard accessibility probe can touch them, that observed condition would be C1.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 13,
    promptSuffix:
      "Cable run beneath floorboards, no mechanical protection, no RCD additional protection. Code (typical):",
    correctedPromptSuffix:
      "A sheathed cable runs beneath floorboards in a normal cable zone, is supported clear of foreseeable nails and screws, and has no other damage. It has no mechanical covering or RCD added solely because it is under the floor. Record:",
    options: {
      B: "C2 because every cable below a floor needs both armour and RCD protection",
      D: "No code — floor concealment alone does not create that blanket requirement; assess the actual risk of penetration and damage",
    },
    answer: "D",
    explanation:
      "The specific less-than-50 mm RCD rules concern cables concealed in walls or partitions. Cables under floors still need protection from foreseeable mechanical damage, but a sound route clear of likely fixings is not defective merely because it lacks armour or an RCD.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 14,
    promptSuffix:
      "Consumer unit located in damp basement with active condensation, surface corrosion. Code:",
    correctedPromptSuffix:
      "A consumer unit in a damp basement has active condensation and surface corrosion, but no exposed live parts, active arcing, smoke or heat damage. Code:",
    options: {
      B: "C2 — moisture and corrosion are degrading the enclosure and internal equipment and need urgent remedy",
      C: "C1 solely because corrosion is visible, despite no exposed live part or active fault",
      D: "Either C1 or C2 even though no danger present now is identified",
    },
    answer: "B",
    explanation:
      "Active condensation and corrosion can degrade insulation and connections into a dangerous fault, so the condition is potentially dangerous and C2. C1 would require danger present now, such as accessible live parts or active arcing, which the question excludes.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 15,
    promptSuffix:
      "30 mA RCD trips in 28 ms at 5×IΔn (limit 40 ms) and is otherwise intact. Record:",
    correctedPromptSuffix:
      "A general non-delay 30 mA RCD trips in 280 ms at IΔn using an AC residual test current. Record:",
    options: {
      C: "Satisfactory — the current field test result is within the 300 ms limit at IΔn",
    },
    explanation:
      "Current BS 7671 field verification uses an AC test current at IΔn and allows up to 300 ms for a general non-delay RCD. The former 5 × IΔn/40 ms test is no longer a prescribed core field test.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 17,
    promptSuffix:
      "Junction box in a maintained location with a tape-wrapped connection. Code (typical):",
    correctedPromptSuffix:
      "Inside a closed junction box, conductors are merely twisted and tape-wrapped with no suitable terminal. The joint is cool and no live part is accessible. Code:",
    options: {
      B: "C2 — the improvised connection can loosen or overheat and needs a proper terminal",
      D: "C1 because a twisted connection is automatically danger present even when cool and enclosed",
    },
    answer: "B",
    explanation:
      "The enclosure prevents immediate touch, but tape and twisting do not make a mechanically and electrically reliable connection. The foreseeable loose-joint and fire risk is C2; C1 would require active arcing, heat or accessible live conductors.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 18,
    promptSuffix:
      "Bath / basin in a dwelling with plastic plumbing throughout (extraneous-conductive-part status not relevant). No bonding present. Code:",
    correctedPromptSuffix:
      "A bathroom has plastic plumbing, no other extraneous-conductive-parts, and every condition in Regulation 701.415.2 for omitting supplementary bonding is met. Record:",
    explanation:
      "Plastic pipework does not introduce Earth potential, and supplementary bonding may be omitted when all Regulation 701.415.2 conditions are satisfied. The answer depends on those protective conditions, not on a blanket claim that every bathroom needs bonding.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 20,
    promptSuffix:
      "Domestic kitchen with no RCD additional protection on socket-outlets, in active dwelling. Code (typical):",
    correctedPromptSuffix:
      "An older domestic kitchen has no RCD additional protection on indoor socket-outlets. They are outside a bathroom, are unlikely to supply mobile equipment outdoors and no other danger is identified. Code:",
    options: {
      A: "C3 — adding RCD protection would improve safety",
      B: "C2 solely because the indoor sockets are actively used",
      D: "Either C2 or C3 based only on the installation's age",
    },
    answer: "A",
    explanation:
      "Best Practice Guide 4 gives C3 for a socket without RCD additional protection where it is unlikely to supply outdoor mobile equipment, is outside a bathroom and has no other potential danger. Activity and age inform judgement but do not replace those actual risk facts.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 22,
    promptSuffix: "RCD trips at 5×IΔn but takes >5 s at 1×IΔn. Code:",
    correctedPromptSuffix:
      "A general non-delay RCD takes more than 5 seconds to operate at IΔn when tested with an AC residual current. Code:",
    options: {
      B: "C2 — the device fails the required operating-time test and the protective function is unreliable",
      C: "C1 solely because the RCD failed its test",
      D: "Either C1 or C2 depending only on whether the RCD is the sole protective measure",
    },
    answer: "B",
    explanation:
      "A general non-delay RCD must operate within 300 ms at IΔn, so a result beyond five seconds is a failed protective device and warrants C2. Best Practice Guide 4 treats a failed main TT RCD as C2; C1 still needs danger present now.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 23,
    promptSuffix:
      "TN-S installation with 4 mm² bare main earthing conductor, undersized for current BS 7671 Table 54.7 sizing. Code:",
    options: {
      B: "C2 — the earthing conductor does not satisfy the required fault-energy sizing",
      C: "C1 solely because the supply fault level later increased",
      D: "Either C1 or C2 based on supply history rather than present danger",
    },
    answer: "B",
    explanation:
      "Best Practice Guide 4 gives C2 where an earthing conductor fails the adiabatic requirement. A higher verified fault level strengthens the need for urgent correction, but it does not become C1 unless the installation already presents immediate danger.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 25,
    promptSuffix:
      "Inspector finds an unidentified cable disappearing into a wall, no test access available. Code:",
    options: {
      A: "Mark the affected A4 schedule item N/V (Not verified), record a precise LIM only where the access or test restriction is a report limitation, and arrange access; use FI only for a specific apparent concern that may be dangerous",
      B: "FI automatically because the cable cannot be accessed",
    },
    answer: "A",
    explanation:
      "The A4 Schedule of Inspection provides N/V for an applicable item that was not verified and LIM for a genuine recorded limitation. Lack of access is missing evidence, not evidence of a defect. FI is reserved for a specific apparent concern whose possible danger cannot yet be classified, so it is not an automatic substitute for N/V or LIM.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 1,
    promptSuffix:
      "Cosmetic chip on a faceplate, no live parts visible, no risk of progression. Code:",
    options: {
      C: "C3 solely because the faceplate has a cosmetic mark",
      D: "No code — no electrical protective measure has been impaired",
    },
    answer: "D",
    explanation:
      "A cosmetic mark with no sharp edge, looseness, enclosure failure or path to live parts is not an electrical-safety defect. EICR codes are not used to recommend decoration or replacement solely for appearance.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 4,
    promptSuffix:
      "Mains earthing strap broken at the MET (no continuity). Code:",
    options: {
      B: "C2 — the installation has no reliable and effective means of earthing",
      C: "C1 solely because the earthing path is open",
    },
    answer: "B",
    explanation:
      "Current Best Practice Guide 4 gives C2 for absence of a reliable and effective means of earthing. The installation is potentially dangerous under a fault and needs urgent isolation or repair, but C1 requires danger present now, such as exposed-conductive-parts already live.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 5,
    promptSuffix:
      "Inspector's IR test reads exactly 1.0 MΩ between line and earth. Record:",
    correctedPromptSuffix:
      "After connected loads and sensitive equipment are disconnected, the test method is verified, and live conductors are connected together, the stable insulation-resistance reading to Earth is exactly 1.0 MΩ. Record:",
    options: {
      B: "Satisfactory at the 1 MΩ minimum if the circuit was prepared and tested correctly; record the value and consider trend evidence without inventing FI",
    },
    explanation:
      "One megohm meets the stated minimum, so the result is not C2. Because it has no margin, verify the test setup and compare previous readings where available, but FI requires a specific unresolved possible danger rather than mere proximity to a limit.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 7,
    promptSuffix:
      "Hot-water boiler isolator fitted as single-pole switch (BS 7671 typically requires DP isolation). Code:",
    correctedPromptSuffix:
      "A hot-water boiler's manufacturer requires double-pole local isolation, but only a single-pole switch is fitted and no other suitable local isolation is available. Code:",
    explanation:
      "The required isolation must disconnect the conductors specified for safe maintenance; relying on a single-pole device where the appliance instructions require double-pole isolation can leave a live conductor connected and is potentially dangerous, so C2 is appropriate.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 8,
    promptSuffix:
      "Crossed circuit IDs at the consumer unit (cables swapped, labels still match original layout). Code:",
    options: {
      A: "C3 — correct the inaccurate circuit identification",
      B: "C2 automatically, even though no unsafe isolation attempt or mismatched protective device is found",
    },
    answer: "A",
    explanation:
      "Best Practice Guide 4 gives C3 for absent or inappropriate identification of circuits at a consumer unit. If the wrong label has already caused a dangerous isolation situation or hides an incorrectly rated protective device, classify that separate actual danger on its facts.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 9,
    promptSuffix:
      "Spare way in CU with MCB still fitted, cable not connected, terminal currently accessible (cover removed for inspection). Code:",
    correctedPromptSuffix:
      "A spare MCB has no outgoing cable and its live terminal is inside a sound consumer-unit cover that ordinary persons can remove only with a key or tool. Record:",
    options: {
      B: "C2 because a skilled inspector can see the terminal after removing the cover",
      C: "C1 even though the secured cover provides basic protection in normal service",
      D: "No code — the live terminal is appropriately enclosed; identify or remove the spare device during planned work if useful",
    },
    answer: "D",
    explanation:
      "Removing a secured consumer-unit cover deliberately exposes internal live parts to a skilled person; that is not ordinary-person accessibility. With the cover sound and tool-secured, an unused enclosed MCB terminal is not danger present or potential danger by itself.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 10,
    promptSuffix:
      "Cable concealed in stud wall, route unknown, no detection possible. Code:",
    options: {
      A: "Mark the affected A4 schedule item N/V (Not verified), record a precise LIM only where the access or detection restriction is a report limitation, and arrange access; use FI only for a specific apparent concern that may be dangerous",
      C: "FI automatically because the route cannot be detected",
    },
    answer: "A",
    explanation:
      "The A4 Schedule of Inspection distinguishes N/V (Not verified) from LIM (Limitation). An undetected route is a gap in evidence, not proof that the cable is unsafe. Record exactly what was not verified and any genuine limitation; use FI only where a specific apparent concern may be dangerous and cannot yet be classified.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 14,
    promptSuffix:
      "Earth electrode resistance measured 200 Ω on a TT system (typical limit ~200 Ω depending on protective device, but 30 mA RCD provides protection). Record:",
    correctedPromptSuffix:
      "A TT electrode measures 220 Ω and a 30 mA RCD used for fault protection passes its required tests. RA × IΔn is below 50 V, but the electrode exceeds the value above which BS 7671 warns stability may be unreliable. Record:",
    options: {
      B: "C3 — investigate and improve the electrode's long-term stability even though the touch-voltage condition is met",
      C: "Satisfactory with no comment solely because the RCD trips",
    },
    answer: "B",
    explanation:
      "The theoretical product is 220 Ω × 0.03 A = 6.6 V, but BS 7671 notes that a value exceeding 200 Ω may not be stable. Check the electrode connection, soil conditions and trend and recommend improvement rather than treating the touch-voltage calculation as proof of reliable long-term earthing.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 15,
    promptSuffix:
      "Old mortice-tail bonding clamp on water service (legacy clamp on lead pipe). Code:",
    correctedPromptSuffix:
      "A legacy bonding connection on a lead water service is mechanically sound, suitable for the soft pipe, undamaged and has verified low resistance. Record:",
    options: {
      B: "C3 solely because the connection is not a modern BS 951 pipe clamp",
      D: "No code — judge the connection's suitability, security and measured continuity rather than its age",
    },
    answer: "D",
    explanation:
      "A standard clamp is not automatically suitable for every soft lead pipe, and an older purpose-suitable connection is not defective merely because it predates current products. With sound mechanics and verified continuity, it performs the bonding function and needs no code.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 16,
    promptSuffix:
      "Exposed live conductor at a domestic ceiling rose (basic insulation breached, accessible if rose cover removed). Code:",
    correctedPromptSuffix:
      "Basic insulation is damaged inside a domestic ceiling rose, but the sound cover is fitted and no live part is accessible without deliberately removing it. Code:",
    options: {
      B: "C2 — the damaged internal insulation can develop into accessible live parts or a fault",
      C: "C1 solely because a person could deliberately remove the sound cover",
    },
    answer: "B",
    explanation:
      "The fitted cover still provides basic protection in normal service, so the live conductor is not presently touch-accessible. Damaged insulation inside creates potential danger and warrants urgent repair as C2; it becomes C1 if the cover is missing or live parts are already accessible.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 18,
    promptSuffix:
      "Domestic dwelling with TT system and 30 mA RCD that fails to trip at any test current. Code:",
    options: {
      B: "C2 — the RCD used for TT fault protection has failed and needs urgent make-safe and replacement",
      C: "C1 solely because the TT fault-protection RCD failed its test",
    },
    answer: "B",
    explanation:
      "Best Practice Guide 4 explicitly gives C2 where the main RCD on a TT system fails to operate. The installation lacks reliable fault protection and should be urgently isolated or otherwise made safe, but C1 requires an immediate danger already present.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 21,
    promptSuffix:
      "RCD bypassed (output terminals jumpered together to defeat tripping). Code:",
    options: {
      B: "C2 — the RCD protective function has been deliberately defeated and needs urgent restoration",
      C: "C1 solely because the bypass exists, without an accessible live part or fault present",
    },
    answer: "B",
    explanation:
      "Bypassing an RCD removes a required protective measure and is potentially dangerous, so isolate or correct it urgently and record C2. C1 applies if a separate fact shows danger present now; deliberate intent does not itself change the classification definition.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 7,
    promptSuffix:
      "Inspector finds a damaged sheath at the entry to a metal back box; basic insulation intact; cable in dry, accessible location. Code:",
    correctedPromptSuffix:
      "At a metal back box, the cable sheath stops short but the basic insulation is intact, not touch-accessible and not likely to contact the metalwork. Code:",
    options: {
      B: "C2 even though the enclosed basic insulation cannot touch the box",
      C: "C3 — re-terminate so the sheath enters the enclosure",
    },
    answer: "C",
    explanation:
      "Best Practice Guide 4 gives C3 where the sheath does not enter an accessory enclosure but the unsheathed cores are not accessible and cannot contact metalwork. C2 applies if either safeguard is absent; accessible live parts would be C1.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 11,
    promptSuffix:
      "Inspector finds a circuit's protective device coordination issue — measured Zs is 1.4 Ω, BS 7671 Table 41.3 limit for Type B 16 A (5 s) is 1.37 Ω. Code:",
    correctedPromptSuffix:
      "A circuit protected by a Type B 32 A MCB has measured Zs of 1.40 Ω, above the applicable Table 41.3 maximum of about 1.37 Ω, with no RCD providing fault protection. Code:",
    explanation:
      "A Type B 16 A MCB does not have a 1.37 Ω Table 41.3 maximum; that value corresponds approximately to a Type B 32 A device. With the corrected 32 A scenario, 1.40 Ω exceeds the actual maximum, so automatic disconnection may be too slow and C2 is appropriate.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 13,
    promptSuffix:
      "Inspector finds a circuit with no CPC (older 1.0 mm² T cable, no earth). Code:",
    correctedPromptSuffix:
      "An older lighting circuit has no CPC and supplies accessible Class I metal luminaires. Code:",
    options: {
      B: "C2 — Class I equipment has no effective fault-protection conductor",
      C: "C1 solely because the CPC is absent",
      D: "Either C1 or C2 depending only on how reachable the luminaires are",
    },
    answer: "B",
    explanation:
      "Best Practice Guide 4 gives C2 where a circuit without a CPC supplies Class I equipment. The metalwork could become live after an insulation fault, but absence of the CPC alone does not prove it is live now and therefore does not establish C1.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 15,
    promptSuffix:
      "Inspector finds a single ceiling rose with a connecting tail of solid copper visibly twisted to a flex tail with no terminal. Code:",
    correctedPromptSuffix:
      "Inside a fitted ceiling-rose cover, a solid conductor is merely twisted to a flex tail with no suitable terminal. The joint is cool and no live part is accessible. Code:",
    options: {
      B: "C2 — the improvised joint can loosen, overheat or damage the flex",
      D: "C1 because a twisted conductor-to-flex joint is automatically danger present",
    },
    answer: "B",
    explanation:
      "A twisted conductor-to-flex joint has no reliable terminal or strain control and may develop a high-resistance connection, so C2 is appropriate. C1 would require danger present now, such as an exposed live conductor or active arcing.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 17,
    promptSuffix:
      "Inspector finds a heavy load on a ring final (multiple high-current appliances) with the cable visibly warm but not discoloured. Code:",
    options: {
      B: "Measure the load and verify cable rating and protective-device coordination: C2 if overloaded, otherwise no code solely because a loaded cable feels warm",
    },
    explanation:
      "Cable temperature must be judged against its design current, installation method and insulation rating. A measured overload or failed coordination is C2; normal temperature rise within the cable's rating is not a defect and does not warrant C3 by itself.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 21,
    promptSuffix:
      "Inspector finds a circuit with an RCBO that fails to operate at 1×IΔn within 5 seconds. Code:",
    options: {
      B: "C2 — the RCBO has failed the required IΔn operating-time test and needs urgent replacement",
      C: "C1 solely because the RCBO is the only RCD on the circuit",
      D: "Either C1 or C2 depending only on the number of other protective layers",
    },
    answer: "B",
    explanation:
      "A general non-delay RCBO should operate within 300 ms at IΔn, so taking over five seconds shows a failed protective function and warrants C2. C1 needs danger present now; failed additional or fault protection alone is classified as potential danger under current Best Practice Guide 4.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 15,
    promptSuffix:
      "A landlord receives an EICR Satisfactory result with three C3s. They are required to:",
    options: {
      B: "Consider the C3 recommendations and plan worthwhile improvements; C3 does not create a mandatory rented-sector remedial deadline",
    },
    explanation:
      "A C3 recommends an improvement but does not identify immediate or potential danger and does not make the EICR unsatisfactory. Current government guidance states that landlords do not have to carry out a C3 improvement, although doing so would improve safety; the separate duty to keep the installation safe still continues.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 14,
    promptSuffix:
      "An inspector finds a C2 on an extraneous-conductive-part bond. The duty holder asks 'Why is this dangerous when the building has worked fine for 30 years?'. The inspector should:",
    options: {
      B: "Explain that bonding is a fault-condition protective measure: it limits the touch voltage between earthed equipment and metal that introduces Earth potential when exposed-conductive-parts rise in voltage during a fault; normal service does not test that protection",
    },
    explanation:
      "An extraneous-conductive-part normally introduces Earth potential; it is not made live simply because it is unbonded. During a line-to-earth fault, exposed-conductive-parts and the MET can rise above Earth potential. Main bonding reduces the voltage a person can bridge between those parts, so years without a fault do not prove simultaneous contact would be safe.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 2,
    promptSuffix:
      "A landlord has the EICR but cannot find a 'qualified person' for the remedial work within 28 days. They should:",
    options: {
      B: "Take all reasonable steps to comply: keep evidence of prompt attempts, contact alternative qualified persons, protect occupants, and record any third-party obstruction; the landlord cannot grant their own extension",
    },
    explanation:
      "The amended rented-sector regulations use the statutory test of 'all reasonable steps', not the contractual phrase 'best endeavours'. Genuine practical obstruction does not rewrite the deadline, but documented prompt attempts, alternative arrangements and measures protecting occupants are relevant to the express reasonable-steps defence.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 8,
    promptSuffix:
      "An inspector finds a C2 on the same day as a follow-up inspection scheduled for next week. The C2 should be:",
    correctedPromptSuffix:
      "During an EICR of a privately rented dwelling, an inspector finds a C2 on the same day as a follow-up visit is booked for next week. The C2 should be:",
    options: {
      B: "Recorded and communicated on today's report; the rented-sector remedial period runs from this inspection date, not the follow-up visit",
    },
    explanation:
      "The C2 exists on today's inspection and must be reported now. For a covered rented dwelling, required work is normally due within 28 days of the inspection or sooner if the report specifies; next week's visit may verify repair but cannot postpone the finding or restart the period.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 14,
    promptSuffix:
      "An inspector finds a duty holder has hidden previous EICRs that showed C2s. The current EICR records the same C2s persisting. The inspector should:",
    options: {
      D: "Send an anonymous tip only, while omitting the repeated C2s and the relevant history from the current report",
    },
    explanation:
      "The current EICR must stand on today's evidence and record each persistent C2 accurately. The previous reports are relevant evidence of repeated inaction and should be preserved and escalated through the applicable duty-holder, scheme or enforcement route; an anonymous report is not a substitute for an honest current EICR.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 15,
    promptSuffix: "An EICR's 'Persons consulted' field can usefully record:",
    options: {
      D: "A generic DNO telephone number copied from a bill when no DNO representative was consulted",
    },
    explanation:
      "The field records identifiable people and roles whose information shaped the scope, limitations or safe conduct of the inspection. A DNO representative can properly be recorded if actually consulted about relevant supply information; a generic number copied from paperwork records no consultation and adds no traceability.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 17,
    promptSuffix:
      "Under EAWR 1989, an inspector who provides clearly negligent advice that leads to injury can:",
    options: {
      B: "Face a civil professional-negligence claim and, where statutory health-and-safety duties apply to their work, enforcement or prosecution; professional indemnity insurance may respond to a covered civil claim",
    },
    explanation:
      "A competent inspector owes a professional duty of care, so negligent advice that causes foreseeable injury can create civil liability. Health-and-safety enforcement depends on which statutory duties applied to the inspector's work. Professional indemnity insurance may fund a covered civil defence or award, but insurance is not itself a cause of action and does not erase criminal or professional responsibility.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 15,
    promptSuffix:
      "A C2 on a hospital theatre circuit cannot be remedied without a planned-shutdown window of three months. The duty holder must:",
    options: {
      B: "Use a competent risk assessment to put verified effective interim controls in place, book the earliest feasible shutdown and repair, and isolate or restrict the circuit if those controls cannot reduce the risk to a tolerable level",
    },
    explanation:
      "C2 means potential danger and calls for urgent remedial action. Clinical disruption affects how the repair is coordinated, not whether the risk is controlled. Monitoring alone is not a protective measure unless the particular defect and risk assessment show that it works; if effective interim controls cannot be demonstrated, the affected circuit or activity must be isolated or restricted until repair.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 11,
    promptSuffix: "Spur added to ring final in 1.0 mm² T+E. Code:",
    correctedPromptSuffix:
      "A 1.0 mm² cable forms an unfused spur from a 32 A ring final to a general-purpose socket. No FCU or other overload protection is fitted, the load is liable to overload, and the cable's installed current-carrying capacity is inadequate for that arrangement. Code:",
    options: {
      B: "C2 — the general-purpose 1.0 mm² unfused spur is not adequately protected against foreseeable overload current",
    },
    explanation:
      "A reduced conductor can be used without overload protection only in controlled circumstances where the load cannot overload it and fault protection is adequate. A general-purpose socket can supply loads that exceed the 1.0 mm² cable's effective capacity, so this stated arrangement can overheat before the 32 A device operates and is C2.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 19,
    promptSuffix:
      "Earthing conductor undersized at MET (10 mm² for 100 A PME, BS 7671 minimum 16 mm²). Code:",
    correctedPromptSuffix:
      "An existing 10 mm² main earthing conductor at the MET of a 100 A PME installation has been assessed using the verified prospective fault current and disconnection time and fails the Regulation 543.1.3 adiabatic requirement. Code:",
    options: {
      B: "C2 — the verified adiabatic failure means the earthing conductor may not withstand earth-fault energy",
    },
    explanation:
      "A 100 A cut-out does not by itself impose a universal 16 mm² minimum on an existing earthing conductor: Electrical Safety First states that 10 mm² or even 6 mm² can be adequate when the adiabatic requirement is met. Here the calculation is expressly failed, so the fault path may be thermally damaged before disconnection and C2 is justified.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 16,
    promptSuffix:
      "Recently extended kitchen with new dishwasher socket, no RCD additional protection. Code:",
    correctedPromptSuffix:
      "A recently added indoor dishwasher socket has no 30 mA RCD additional protection. It is outside a bathroom, unlikely to supply mobile equipment outdoors, and no other potential danger is identified. Code:",
    options: {
      A: "C3 — adding 30 mA RCD protection would improve safety, but the stated facts do not establish potential danger",
      B: "C2 solely because the socket was installed recently",
    },
    answer: "A",
    explanation:
      "EICR classification follows the danger found, not whether the socket was installed recently. Current Best Practice Guide 4 gives C3 for a socket without RCD additional protection when it is outside a bathroom, unlikely to supply outdoor mobile equipment and presents no other potential danger. The new work may be non-compliant, but that alone does not turn the observation into C2.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 11,
    promptSuffix:
      "Recently extended dishwasher socket without RCD additional protection. Code:",
    correctedPromptSuffix:
      "A recently added indoor dishwasher socket in a dry kitchen has no 30 mA RCD additional protection. It is outside a bathroom, unlikely to supply mobile equipment outdoors, and no other potential danger is identified. Code:",
    options: {
      A: "C3 — adding 30 mA RCD protection would improve safety, but the stated facts do not establish potential danger",
      B: "C2 solely because the socket was installed recently",
    },
    answer: "A",
    explanation:
      "EICR classification follows the danger found, not whether the socket was installed recently. Current Best Practice Guide 4 gives C3 for a socket without RCD additional protection when it is outside a bathroom, unlikely to supply outdoor mobile equipment and presents no other potential danger. The new work may be non-compliant, but that alone does not turn the observation into C2.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 12,
    promptSuffix:
      "Inspector finds a recently installed PV array where the AC isolator label says '230 V AC' but the wiring shows DC connections from PV array to inverter. Code:",
    correctedPromptSuffix:
      "A DC-rated PV isolator between the array and inverter is incorrectly marked '230 V AC'. The marking identifies the wrong source and isolation method, so following it can leave the PV DC conductors energised during intended isolation. No live part is presently accessible. Code:",
    options: {
      B: "C2 — the confirmed dangerous misidentification can cause an unsafe isolation procedure",
    },
    explanation:
      "A merely absent alternative-source notice is normally C3. Here the fitted marking positively misidentifies the DC circuit and can lead a worker to believe the PV conductors have been made dead when they remain energised, so a foreseeable unsafe-isolation event establishes C2. A confirmed AC-only device on the DC circuit would be a separate equipment-selection defect.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 20,
    promptSuffix:
      "Domestic CU with mixed manufacturer MCBs / RCBOs, all functioning correctly. Code:",
    correctedPromptSuffix:
      "A domestic consumer unit contains mixed-brand MCBs and RCBOs not verified by the manufacturers. There is no thermal damage, the enclosure is unmodified, every device is secure with adequate connections, manual operation is correct, and all toggle directions match. Code:",
    options: {
      B: "C3 — the mixed-brand assembly meets the Best Practice Guide 4 conditions for a manufacturer-conformity improvement rather than potential danger",
    },
    explanation:
      "Best Practice Guide 4 gives C3 for unverified mixed-brand switchgear only when all the stated safeguards are present. Thermal damage, enclosure modification, insecure fitting, inadequate connections, incorrect operation or inconsistent toggle direction would instead support C2; the corrected prompt expressly excludes each of those dangers.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 9,
    promptSuffix:
      "An EICR for a non-domestic premises identifies six C3s and no C1/C2/FI. Outcome:",
    correctedPromptSuffix:
      "Under the BS 7671:2018+A4:2026 model EICR, a non-domestic premises has six C3 observations and no C1 or C2. Outcome:",
    options: {
      A: "Unsatisfactory because there are several observations",
      B: "Satisfactory — C3 observations are advisory improvements for the duty holder's planned maintenance programme",
      C: "FI because the number of C3 observations creates uncertainty",
      D: "Pending until every C3 improvement is completed",
    },
    answer: "B",
    explanation:
      "Under the A4 model form, only C1 or C2 makes the overall assessment Unsatisfactory. C3 is advisory and does not affect the outcome, no matter how many C3 observations are recorded. The duty holder should consider and plan the improvements through normal risk-based maintenance.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 20,
    promptSuffix:
      "Inspector finds a privately rented dwelling with a 4-year-old satisfactory EICR. The next inspection is recommended in 1 year (was originally 5-year recommendation, then later inspector pulled in due to environment). Landlord obligation:",
    correctedPromptSuffix:
      "A privately rented dwelling has a valid Satisfactory EICR issued one year ago. Because of the environment, that report requires the next inspection after two years rather than the five-year statutory maximum. The landlord must:",
    options: {
      A: "Wait until five years after the report because five years is always the minimum interval",
      B: "Commission the next EICR within one more year, by the earlier date required in the current report",
    },
    explanation:
      "Five years is the maximum interval, not a minimum. The current rented-sector regulations require the next inspection by an earlier date stated in the most recent valid report. Because this report was issued one year ago and requires inspection after two years, one year remains; waiting to year five would miss the binding report date.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 9,
    promptSuffix:
      "An EICR is issued on a non-domestic premises with one FI. The duty holder under EAWR 1989 should:",
    options: {
      B: "Arrange the specific further investigation without undue delay; under the BS 7671:2018+A4:2026 model EICR, FI is advisory and does not make the report Unsatisfactory when no C1 or C2 is present",
    },
    explanation:
      "Amendment 4 changed the model EICR outcome rule: only C1 or C2 makes the overall assessment Unsatisfactory, while FI is advisory and should be given due consideration. FI still identifies a specific potential issue that the inspector could not classify, so a workplace duty holder should investigate it promptly under a risk-based EAWR maintenance system.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 16,
    promptSuffix:
      "An EICR is Unsatisfactory because of a single FI on a privately rented dwelling. The landlord must:",
    correctedPromptSuffix:
      "Under the BS 7671:2018+A4:2026 model EICR, a privately rented dwelling has one FI and no C1 or C2. What is the report outcome and appropriate follow-up?",
    options: {
      B: "Overall Satisfactory; FI is advisory and does not set the outcome, but the identified investigation should be arranged promptly and any rented-sector duty applies where the report states further work is necessary",
    },
    explanation:
      "The A4 model form states that FI is advisory and does not affect the overall assessment; only C1 or C2 makes the report Unsatisfactory. FI is not permission to ignore a specific unresolved safety concern. The landlord should arrange the investigation promptly and must comply with the rented-sector requirements wherever the report indicates that further investigative work is necessary.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 15,
    promptSuffix: "An EICR's 'Outcome' field is populated based on:",
    options: {
      B: "Whether any C1 or C2 is present: either makes it Unsatisfactory; under A4, C3 and FI are advisory and do not set the overall outcome",
    },
    explanation:
      "The BS 7671:2018+A4:2026 model EICR defines an Unsatisfactory assessment by the presence of C1 and/or C2. C3 and FI should be given due consideration but are advisory and do not affect the overall assessment; observation count, premises type and the signature do not decide it.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 7,
    promptSuffix:
      "An EICR is Unsatisfactory with one FI. Investigation reveals no actual defect (the suspect reading was normal once the cause was identified). The duty holder must:",
    correctedPromptSuffix:
      "An A4 EICR has one FI, no C1 or C2, and is therefore Satisfactory overall. Investigation then finds no defect because the suspect reading is explained and normal. The duty holder should:",
    options: {
      B: "Retain the original EICR and add qualified written follow-up recording what was investigated and why the FI is closed; do not invent remedial work or a repeat full EICR",
    },
    explanation:
      "Under A4, the original FI was advisory and did not make an otherwise C1/C2-free report Unsatisfactory. The focused investigation has answered the stated concern and found no defect, so a traceable follow-up record should close it. The original dated EICR remains unchanged and another full EICR is unnecessary unless separately commissioned.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 9,
    promptSuffix:
      "On a domestic EICR, an FI is recorded for an unverified low IR reading. The landlord under PRS Regs 2020 must:",
    correctedPromptSuffix:
      "A rented dwelling's A4 EICR records FI for a repeatable but unexplained low insulation-resistance indication and states that further investigative work is necessary. The landlord must:",
    options: {
      B: "Arrange the stated investigation within the rented-sector period, remedy any defect found and obtain written confirmation; FI itself remains advisory for the A4 overall outcome",
    },
    explanation:
      "A4 makes FI advisory for the satisfactory/unsatisfactory outcome, but the rented-sector regulations separately require further investigative work where the report says it is necessary. The repeatable low reading supplies a defined investigation target, so it must be followed through within the applicable period and the result documented.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 18,
    promptSuffix:
      "An inspector's commentary on an EICR mentions that 'all observations should be acted on within 12 months'. This statement is:",
    options: {
      B: "Misleading — C1 needs immediate action, C2 urgent action, FI prompt investigation and due consideration, and C3 is a planned improvement; applicable rented-sector deadlines are separate",
    },
    explanation:
      "One twelve-month deadline erases the meaning of the classifications. C1 is danger present, C2 is potential danger needing urgent remedy, FI is advisory under A4 but identifies a specific issue for prompt investigation, and C3 recommends improvement. Rented-sector legislation can impose its own deadlines where remedial or investigative work is necessary.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 18,
    promptSuffix:
      "EICR observation 'Cable concealed in stud wall, route unknown' coded FI. Subsequent investigation finds the cable in safe zones with no mechanical protection issues. Resolution:",
    correctedPromptSuffix:
      "An A4 EICR records FI for a specific concern about an unknown concealed-cable route, with no C1 or C2. Subsequent investigation proves the cable is in safe zones with no mechanical-protection defect. Resolution:",
    options: {
      B: "Retain the original Satisfactory EICR and issue a written follow-up recording the investigation and closure of the FI",
    },
    explanation:
      "Under A4, FI is advisory and does not make a report Unsatisfactory when no C1 or C2 is present. The later investigation supplies the missing evidence and finds no defect, so a traceable follow-up closes the FI without rewriting the original dated report or inventing a C2.",
  },
] as const satisfies readonly ExamQuestionCorrection[];
