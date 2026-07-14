import type { ExamQuestionCorrection } from "./types";

export const periodicInspectionPart2Corrections = [
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 2,
    promptSuffix: "Which set of forms forms the complete EICR document set?",
    options: {
      B: "EICR plus the Schedule of Circuit Details, Schedule of Test Results and Schedule of Inspections",
    },
    explanation:
      "The current IET model EICR package contains the report, a Schedule of Circuit Details, a Schedule of Test Results and a Schedule of Inspections. The schedules provide the visual and measured evidence on which the report's assessment is based.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 18,
    promptSuffix:
      "On the Schedule of Test Results, the column for 'CPC continuity (R2)' records:",
    correctedPromptSuffix:
      "On the current IET Schedule of Test Results, what belongs in the '(R1 + R2) or R2' continuity columns for a radial circuit?",
    options: {
      A: "The phase-to-neutral resistance",
      B: "Either the measured R1 + R2 at the circuit point, or a separately measured R2 value, as applicable",
      C: "The total earth fault loop impedance Zs",
      D: "Insulation resistance",
    },
    explanation:
      "The model schedule provides alternative columns for (R1 + R2) or R2. These are circuit protective-conductor continuity results at the relevant point; an end-to-end r2 value is instead associated with testing a ring final circuit.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 6,
    promptSuffix:
      "An EICR is being prepared for a small B&B let on a short-term basis. The applicable maximum routine interval is:",
    options: {
      B: "3 years solely because members of the public stay there",
      C: "5 years as the normal GN3 starting maximum for hotels and similar commercial accommodation, shortened where condition or risk justifies it",
    },
    answer: "C",
    explanation:
      "IET Guidance Note 3 uses five years as the normal starting maximum for restaurants, hotels and comparable commercial accommodation. The inspector may recommend a shorter interval for deterioration, harsh conditions, licensing requirements or other evidenced risk, but public access alone does not make three years the default.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 8,
    promptSuffix:
      "A change-of-tenancy EICR is being undertaken on a privately rented dwelling. The landlord has the previous report from 18 months ago. The inspector should:",
    correctedPromptSuffix:
      "A new private tenancy is about to start. The dwelling has a satisfactory EICR from 18 months ago, its recommended reinspection date has not arrived and no new safety concern is known. What is required?",
    options: {
      A: "Commission a new EICR solely because the tenant is changing",
      B: "Give the new tenant the valid report before occupation and visually check for damage; arrange an earlier full inspection only if condition or evidence justifies it",
      C: "Ask a different inspector to re-issue the old report in their own name",
      D: "Issue a Minor Electrical Installation Works Certificate",
    },
    explanation:
      "Current government guidance says a fresh inspection is not required at every change of tenancy when a satisfactory report less than five years old remains within its stated interval. The landlord supplies that report before occupation and should make an interim visual check; new inspection is warranted if damage, alteration or another concern has arisen.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 6,
    promptSuffix:
      "A retail unit EICR is to be carried out outside trading hours. This is best handled by:",
    options: {
      A: "Arriving during trading hours and recording a blanket limitation without first trying to arrange the required access",
    },
    explanation:
      "The inspector and duty holder should agree the out-of-hours access and any isolation arrangements before the visit so the intended inspection and testing can be completed safely. A real restriction that remains after proper planning is recorded precisely, but a limitation is not a substitute for making reasonable access arrangements.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 15,
    promptSuffix:
      "An EIC issued for new work in a dwelling triggers a notification under Building Regulations Part P (England) when:",
    options: {
      B: "The work is notifiable, such as a new circuit, consumer-unit replacement, or an addition or alteration within the prescribed bath/shower or swimming-pool zones",
    },
    explanation:
      "Part P notification depends on the work category, not merely on an EIC being issued. In England, notifiable work includes a new circuit, replacement consumer unit and specified additions or alterations within the defined zones of a room containing a bath or shower or around a swimming pool.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 16,
    promptSuffix:
      "An EICR observation that recommends the consumer unit be upgraded to provide RCD protection on every final circuit (where currently only sockets benefit) would be coded:",
    correctedPromptSuffix:
      "An older dwelling has no 30 mA RCD additional protection for its AC lighting circuits. No other defect is found. What is the usual EICR classification?",
    options: {
      C: "C3 — adding the RCD protection now required for domestic lighting would improve safety",
    },
    explanation:
      "Electrical Safety First BPG4 gives C3 for absence of additional RCD protection on AC final circuits supplying luminaires in domestic premises. It is a worthwhile current-edition improvement, but the stated omission alone does not establish immediate or potential danger.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 17,
    promptSuffix:
      "Where the existing wiring is the older red/black colour code, the EICR should:",
    options: {
      B: "Treat the old colours as acceptable in unchanged work and report only actual defects; provide the required warning identification where old and harmonised colours coexist",
    },
    explanation:
      "Red-and-black conductor colours are not unsafe merely because a later colour system was introduced. The inspector checks condition and identification; where both colour systems are present, the warning notice helps anyone working later avoid mistaking a conductor's function.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 2,
    promptSuffix:
      "On a small dwelling EICR, the ratings of the consumer unit's BS EN 60898 MCBs are recorded:",
    options: {
      B: "On the Schedule of Circuit Details, alongside each circuit's protective-device standard, type and rating",
    },
    explanation:
      "The current model form separates circuit design information from measured results. The MCB standard, type and current rating belong on the Schedule of Circuit Details; continuity, insulation resistance, Zs and RCD operating time belong on the Schedule of Test Results.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 11,
    promptSuffix:
      "On the Schedule of Test Results, the column for 'Maximum permitted Zs' is:",
    correctedPromptSuffix:
      "On the current IET Schedule of Circuit Details, the 'Maximum permitted Zs' entry is:",
    explanation:
      "Maximum permitted Zs is the limit applicable to the circuit's protective device and required disconnection time, taken from Chapter 41 or another justified source. The measured Zs is entered separately on the Schedule of Test Results and compared with that limit.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 14,
    promptSuffix:
      "A retail unit EICR includes circuits that have been added since the previous report without certification. Those circuits should be:",
    options: {
      B: "Included in the EICR and inspected and tested within the agreed extent; note the records gap, but classify only defects or unresolved safety concerns actually found",
    },
    explanation:
      "Missing historic certification does not itself make a present electrical condition C3. The added circuits are now part of the installation, so the inspector obtains current evidence from inspection and testing, records the absent records as context or a limitation where relevant, and codes any real defect on its own risk.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 16,
    promptSuffix:
      "On the Schedule of Test Results, the column for RCD test records:",
    options: {
      B: "The measured operating time at IΔn using an AC test current, with the RCD's rating and IΔn identified in the circuit details",
    },
    explanation:
      "Under BS 7671:2018+A2:2022, the required field test applies an AC residual current at IΔn; a general non-delay RCD should operate within 300 ms. Half-current and 5 × IΔn tests may be useful diagnostics but are no longer prescribed core results on the current model schedule.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 17,
    promptSuffix:
      "The 'Recommended interval until next inspection' on an EICR can be longer than 5 years for which premises type?",
    correctedPromptSuffix:
      "Which listed premises type has a normal GN3 starting maximum interval of 3 years, subject to the inspector shortening it for actual risk or condition?",
    options: {
      A: "Privately rented domestic accommodation, which is normally capped at 5 years",
      B: "Industrial premises",
      C: "Construction-site installations, which require much shorter intervals",
      D: "Owner-occupied domestic accommodation, whose normal starting maximum is 10 years",
    },
    explanation:
      "Guidance Note 3 uses three years as the normal initial maximum for industrial installations. This is a starting point rather than permission to extend a low-risk industrial site to ten years; use, environment, maintenance and previous findings can justify a shorter interval.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 20,
    promptSuffix:
      "An EICR is being produced for a holiday let. The applicable Regulations primarily are:",
    options: {
      A: "For commercial holiday accommodation, the general workplace electrical-safety duties such as HSWA and EAWR, together with applicable fire, licensing and local rules; the rented-sector regime applies only where the occupancy falls within its scope",
    },
    explanation:
      "A short holiday stay is commonly commercial accommodation rather than the occupier's only or main home, so it should not be assumed to fall within the rented-sector electrical regulations. The operator still has duties to keep the electrical system safe under the general health-and-safety regime and must also check any specific fire, licensing and local requirements.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 3,
    promptSuffix:
      "A 30 mA RCD providing additional protection trips correctly at 5×IΔn but takes 350 ms at 1×IΔn (BS 7671 limit ≤300 ms). The most appropriate code is:",
    correctedPromptSuffix:
      "A general non-delay 30 mA RCD used for additional protection takes 350 ms to operate at IΔn with an AC residual test current. The most appropriate code is:",
    explanation:
      "The current BS 7671 field test requires a general non-delay RCD to operate within 300 ms at IΔn. A confirmed 350 ms result means the required protective function has failed its test and is potentially dangerous, so C2 and urgent replacement are appropriate.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 4,
    promptSuffix:
      "An accessory has a chipped corner on the front, with no live parts visible and no risk of progression. The most appropriate code is:",
    options: {
      C: "C3 solely because the accessory is not cosmetically perfect",
      D: "No code — the chip has not impaired enclosure integrity or electrical safety",
    },
    answer: "D",
    explanation:
      "An EICR classifies electrical-safety defects, not cosmetic marks. With no sharp edge, looseness, loss of enclosure protection, exposed live part or progression risk, the chip can be noted if useful but does not justify C1, C2, C3 or FI.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 5,
    promptSuffix:
      "A circuit's IR test reads 0.4 MΩ between line and earth (BS 7671 minimum 1 MΩ for an in-service installation). The most appropriate code is:",
    correctedPromptSuffix:
      "After connected equipment has been disconnected and the test method verified, a circuit still measures 0.4 MΩ between live conductors connected together and Earth. The most appropriate code is:",
    options: {
      B: "C2 — the confirmed insulation resistance is below 1 MΩ",
    },
    explanation:
      "Electrical Safety First BPG4 gives C2 for insulation resistance below 1 MΩ between live conductors connected together and Earth. Suspect connected equipment or an unsuitable test setup should be removed and the test repeated before assigning that classification.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 6,
    promptSuffix:
      "A label on a consumer unit reads '15A' on a circuit breaker that is actually rated 32A (mismatched label). The most appropriate code is:",
    correctedPromptSuffix:
      "A consumer-unit circuit chart incorrectly states 15 A for a circuit whose correctly selected and visibly marked breaker is 32 A. The cable and breaker coordinate correctly and no unsafe isolation has occurred. The most appropriate code is:",
    options: {
      B: "C2 solely because a future electrician might ignore the breaker's own marking",
      C: "C3 — correct the inaccurate circuit identification",
    },
    answer: "C",
    explanation:
      "BPG4 gives C3 for absent or inappropriate circuit identification at a consumer unit. The wrong chart entry should be corrected for safe maintenance, but with the actual device correctly rated and marked, the stated paperwork error does not establish potential danger.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 8,
    promptSuffix:
      "On an EICR, an item that was compliant when installed but does not meet a later edition (e.g. lighting circuit without RCD in a new dwelling) is most commonly coded:",
    correctedPromptSuffix:
      "On an EICR, an older dwelling's lighting circuit was compliant when installed but lacks the 30 mA RCD additional protection required by the current edition. With no other defect, it is most commonly coded:",
    explanation:
      "BS 7671 is not generally retrospective. BPG4 identifies missing additional RCD protection for domestic lighting as C3 where the existing circuit otherwise remains safe, because adding it would improve safety without an identified present or potential danger.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 11,
    promptSuffix:
      "A circuit has had an additional load connected (e.g. an extra socket on a 32 A ring final) and the cable from the new connection back into the circuit is found to be 1.0 mm² T+E. The most appropriate code is:",
    explanation:
      "A 1.0 mm² unfused spur can carry normal load current that is too high for the cable while the 32 A ring protective device remains closed. The cable can therefore overheat in ordinary service; the defect is overload coordination, not an assumption that every fault current will damage it.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 12,
    promptSuffix:
      "A consumer unit is fitted in a normal domestic environment with split-load RCD protection. One RCD does not respond to the inspector's test button. The most appropriate code is:",
    options: {
      B: "C2 — verify by instrument, then urgently replace the device if its test function or required operation is confirmed defective",
      C: "C1 solely because an RCD test function has failed",
    },
    explanation:
      "A failed required protective function is potentially dangerous and warrants C2. C1 needs danger present now, such as accessible live parts or metalwork already live; a failed RCD does not become C1 merely by being the only device of that type on the affected circuits.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 13,
    promptSuffix:
      "An old rewireable fuse board is intact and operating, but with no RCD protection on accessible socket-outlets. The most appropriate code (current BS 7671 expects RCD additional protection on socket-outlets used by ordinary persons up to 32 A) is:",
    correctedPromptSuffix:
      "An older dwelling has a sound rewireable fuse board and no RCD additional protection for indoor socket-outlets outside a bathroom that are unlikely to supply mobile equipment outdoors. No other danger is found. The most appropriate code is:",
    options: {
      B: "C2 solely because the indoor sockets are accessible",
      C: "C3 — RCD protection would improve safety, but the stated use does not establish potential danger",
    },
    answer: "C",
    explanation:
      "BPG4 gives C3 where a socket lacks additional RCD protection but is unlikely to supply outdoor mobile equipment, is outside a bathroom and presents no other potential danger. A rewireable fuse is not itself a defect when it still provides adequate circuit and fault protection.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 16,
    promptSuffix:
      "A pendant lighting fitting has a wholly missing earth conductor (Class I luminaire with no CPC connected). The most appropriate code is:",
    options: {
      B: "C2 — the Class I metalwork has no effective fault-protection conductor",
      C: "C1 solely because an insulation fault could occur later",
      D: "Either C1 or C2 depending only on accessibility",
    },
    answer: "B",
    explanation:
      "BPG4 gives C2 for a circuit supplying Class I equipment without a CPC. The metalwork could become dangerous after an insulation fault, but C1 requires danger present at the inspection, such as the metalwork already being live.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 17,
    promptSuffix:
      "A circuit has been visibly altered (a spur added) but the original certification does not show the alteration. The most appropriate code is:",
    correctedPromptSuffix:
      "A spur has been added and no certificate for that alteration can be found. Current inspection and testing confirms the spur is correctly installed and safe. What should the EICR record?",
    options: {
      A: "C3 solely because the historic certificate is missing",
      D: "No classification code for the paperwork gap; note it and classify only any actual defect found",
    },
    answer: "D",
    explanation:
      "An EICR reports the installation's present electrical condition. Missing historic certification should be noted because it affects the record trail, but when current inspection and tests establish that the alteration is safe, the missing paper alone is not a C1, C2, C3 or FI condition.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 19,
    promptSuffix:
      "A 30 mA RCD trips at 1×IΔn within 200 ms, and at 5×IΔn within 35 ms. The appropriate EICR record is:",
    correctedPromptSuffix:
      "A general non-delay 30 mA RCD trips in 200 ms at IΔn using an AC residual test current. The appropriate EICR record is:",
    options: {
      C: "Satisfactory — 200 ms is within the current 300 ms field-test limit at IΔn",
    },
    explanation:
      "Current BS 7671 field verification requires a general non-delay RCD to operate within 300 ms at IΔn using an AC test current. The former 5 × IΔn/40 ms check is no longer a prescribed core field test.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 20,
    promptSuffix:
      "An accessory front plate has its earth tail cut off inside the box. The most appropriate code is:",
    correctedPromptSuffix:
      "An accessible metal accessory has its protective-conductor tail cut off, so the faceplate is not earthed. It is not currently live. The most appropriate code is:",
    options: {
      B: "C2 — the metal faceplate has lost fault protection",
      C: "C1 solely because a future insulation fault could energise it",
      D: "Either C1 or C2 despite the stem confirming no danger is present now",
    },
    answer: "B",
    explanation:
      "The disconnected protective conductor means a future line-to-metal fault may not operate the protective device, so C2 is appropriate. It becomes C1 only if the inspection finds the metalwork already live or another immediate risk of injury.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 2,
    promptSuffix:
      "A retail shop has a row of socket-outlets with no RCD additional protection. The shop is open to the public and used by ordinary persons. The most appropriate code is:",
    correctedPromptSuffix:
      "A retail shop has no RCD additional protection on indoor socket-outlets. They are outside a bathroom, are unlikely to supply mobile equipment outdoors and no other danger is found. The most appropriate code is:",
    options: {
      A: "C3 — adding RCD protection would improve safety",
      B: "C2 solely because customers can reach the sockets",
    },
    answer: "A",
    explanation:
      "BPG4 gives C3 for a socket without additional RCD protection where it is unlikely to supply outdoor mobile equipment, is outside a bathroom and presents no other potential danger. Public accessibility alone does not make every older indoor socket C2.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 3,
    promptSuffix:
      "An EICR observation reads 'Schedule of Test Results not available from previous works; previous EIC missing'. The most appropriate code is:",
    correctedPromptSuffix:
      "Historic EIC and test schedules cannot be found, but the current EICR obtains sufficient inspection and test evidence and finds no related defect. The most appropriate record is:",
    options: {
      C: "C3 solely because historic paperwork is missing",
      D: "No classification code; note the records gap and rely on the current inspection and test evidence",
    },
    answer: "D",
    explanation:
      "An EICR classifies the present electrical installation, not the quality of the owner's filing. Missing records can limit comparison with earlier results and should be noted, but they do not create an electrical danger or improvement item when the current condition has been adequately verified.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 4,
    promptSuffix:
      "An EICR finds a plastic CU on a wooden backboard in a domestic setting, with terminations that are visibly clean and tight. Under current BPG4 the typical code is:",
    correctedPromptSuffix:
      "A sound plastic consumer unit is mounted on a wooden backboard in a normal domestic location. It is not beneath a wooden staircase or within the sole escape route, and there is no heat damage. Under current BPG4 the typical record is:",
    options: {
      C: "C3 solely because the consumer unit and backboard are combustible",
      D: "No code — note its construction if useful, but the stated location and condition do not warrant classification",
    },
    answer: "D",
    explanation:
      "The IET and BPG4 treat a plastic consumer unit as a coding myth when it is sound and not in the specified higher-consequence escape location. BPG4 recommends C3 where combustible switchgear is beneath a wooden staircase or within a sole escape route, not for every legacy plastic enclosure.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 6,
    promptSuffix:
      "On a domestic EICR, the immersion heater's circuit shows discolouration at the junction box terminations and an FBI burning smell. The most appropriate code is:",
    correctedPromptSuffix:
      "On a domestic EICR, the immersion-heater circuit shows fresh discolouration at the junction-box terminals and a burning smell indicating active overheating. The most appropriate code is:",
    explanation:
      "Active overheating and a burning smell indicate a present fire risk, so C1 and immediate isolation or other make-safe action are justified. Cooled, contained historic heat damage with no continuing heat, smoke or arcing would normally be C2 instead.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 9,
    promptSuffix:
      "An EICR finds two MCBs cross-connected at the consumer unit (live conductors swapped between two adjacent circuits) but circuit identification labels still match the original layout. The most appropriate code is:",
    correctedPromptSuffix:
      "Two adjacent circuits have been swapped at the consumer unit, so the circuit chart identifies each breaker incorrectly. Both breakers remain correctly rated for the circuits now connected and no unsafe isolation has occurred. The most appropriate code is:",
    options: {
      A: "C3 — correct the inaccurate circuit identification",
      B: "C2 automatically, even though circuit protection remains correct",
    },
    answer: "A",
    explanation:
      "BPG4 gives C3 for absent or inappropriate circuit identification. If the swap left a cable on an incorrectly rated device or had already produced dangerous isolation, that separate condition could warrant C2; the stated labelling error alone is an improvement item.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 10,
    promptSuffix:
      "A 30 mA RCBO providing both fault protection and additional protection trips at 25 ms at 5×IΔn but does not operate at 1×IΔn within 5 seconds. The most appropriate code is:",
    correctedPromptSuffix:
      "A general non-delay 30 mA RCBO does not operate within five seconds at IΔn using an AC residual test current. The most appropriate code is:",
    options: {
      A: "Satisfactory because an obsolete higher-current diagnostic test once produced a trip",
      B: "C2 — the device fails the required operating-time test",
      D: "C1 solely because the RCBO supplies accessible circuits",
    },
    answer: "B",
    explanation:
      "A general non-delay RCD or RCBO must operate within 300 ms at IΔn, so more than five seconds is a confirmed protective-device failure and warrants C2. C1 still requires danger present now; a failed protective layer is potential danger until a fault occurs.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 16,
    promptSuffix:
      "An EICR observation reads 'No earthing arrangement found at the supply intake; no Ze can be measured'. The most appropriate code is:",
    options: {
      A: "C1 solely because no reliable means of earthing is present",
      B: "C2 — absence of a reliable and effective means of earthing leaves fault protection potentially ineffective",
    },
    answer: "B",
    explanation:
      "BPG4 explicitly gives C2 for absence of a reliable and effective means of earthing. It needs urgent action because a later line-to-metal fault may not disconnect, but C1 requires danger present at the inspection, such as exposed-conductive-parts already live.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 18,
    promptSuffix:
      "A 30 mA RCD providing additional protection on socket-outlets is found to be inoperative (no trip at any test current). The most appropriate code is:",
    options: {
      B: "C2 — the required additional protective function has failed",
      C: "C1 solely because ordinary persons use the sockets",
      D: "Either C1 or C2 depending only on whether other protective measures remain",
    },
    answer: "B",
    explanation:
      "An inoperative required RCD removes a protective layer and is potentially dangerous, so C2 and urgent replacement are appropriate. BPG4 also gives C2 when the main TT RCD fails; C1 needs an immediate danger such as accessible live parts, not merely a future fault possibility.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 19,
    promptSuffix:
      "An EICR finds a circuit's R1+R2 measured at 0.43 Ω and the calculated Zs (Ze + R1+R2) at the limit for the device. Schedule reading is at the limit. The most appropriate record is:",
    correctedPromptSuffix:
      "A calibrated loop test gives a circuit Zs equal to, but not greater than, the maximum permitted value entered on the schedule after the applicable temperature allowance has been considered. No instability or other concern is found. The most appropriate record is:",
    options: {
      B: "FI solely because the compliant result has little numerical margin",
      D: "Satisfactory — the result does not exceed the applicable maximum; record the actual value",
    },
    answer: "D",
    explanation:
      "A verified result at the applicable maximum still meets that limit. The inspector records it and may recommend monitoring because there is no margin, but FI is reserved for a specific possible danger that cannot be classified, not for every compliant reading close to a boundary.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 1,
    promptSuffix:
      "An EICR observation reads 'Twin-and-earth cable run beneath floorboards in dwelling, no mechanical protection, no RCD additional protection'. The most appropriate code is:",
    correctedPromptSuffix:
      "A sound sheathed cable runs beneath floorboards, supported clear of foreseeable nails, screws and other damage. It has no armour or RCD added solely because it is below the floor. The most appropriate record is:",
    options: {
      B: "C2 because every cable beneath a floor requires both mechanical covering and RCD protection",
      D: "No code — assess foreseeable damage, but floor concealment alone creates no blanket armour-and-RCD requirement",
    },
    answer: "D",
    explanation:
      "The special less-than-50 mm RCD rules apply to cables concealed in walls or partitions. A cable beneath a floor still needs protection from foreseeable mechanical damage, but a sound route clear of likely fixings is not defective merely because it lacks armour or an RCD.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 3,
    promptSuffix:
      "A 30 mA RCD providing additional protection on a socket-outlet circuit measured at 28 ms at 5×IΔn. The most appropriate record is:",
    correctedPromptSuffix:
      "A general non-delay 30 mA RCD operates in 280 ms at IΔn using an AC residual test current. The most appropriate record is:",
    options: {
      C: "Satisfactory — 280 ms is within the current 300 ms limit at IΔn",
    },
    explanation:
      "The current field-verification test is performed at IΔn using an AC residual current. A general non-delay RCD must operate within 300 ms, so 280 ms is satisfactory; the former 5 × IΔn/40 ms test is not a current prescribed core test.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 3,
    promptSuffix:
      "A factory EICR identifies that one motor circuit cannot be tested live. The most appropriate place to record this is:",
    correctedPromptSuffix:
      "A factory motor circuit cannot be isolated for the required dead testing during the agreed visit because production cannot be stopped. The most appropriate place to record this is:",
    explanation:
      "The exact circuit, tests not completed and operational reason belong in the EICR limitations so no reader mistakes the motor circuit for verified work. The duty holder should arrange a planned shutdown or other safe follow-up; live testing is not an automatic substitute for unavailable dead testing.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 5,
    promptSuffix:
      "An EICR finds a circuit's IR test reading at exactly 1.0 MΩ between line and earth (BS 7671 minimum). The most appropriate record is:",
    correctedPromptSuffix:
      "After correct preparation and testing, a circuit measures exactly 1.0 MΩ between live conductors connected together and Earth. It is stable and no other concern is found. The most appropriate record is:",
    options: {
      C: "Satisfactory at the stated 1 MΩ minimum; record the result and use previous results to monitor any deterioration",
    },
    explanation:
      "One megohm meets the stated minimum, so it is not C2 or FI. Because it has no margin, recording the value and checking its trend at maintenance or the next inspection is sensible, but a compliant stable result does not create an unresolved possible danger.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 6,
    promptSuffix:
      "An EICR finds that an existing rewireable fuse has been replaced with a length of foil. The most appropriate code is:",
    options: {
      B: "C2 — the circuit has ineffective overcurrent protection and could overheat under overload or fault",
      C: "C1 solely because foil has been fitted, with no active heat, arcing or exposed live part",
    },
    answer: "B",
    explanation:
      "BPG4 gives C2 for ineffective overcurrent protection, including an oversized substitute in a rewireable fuse. The foil can allow cable overheating before an upstream device operates, so it needs urgent correction; active burning, arcing or another immediate injury risk would instead justify C1.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 8,
    promptSuffix:
      "An EICR observation reads 'Spare way in consumer unit — terminal block connected directly to MCB but no cable connected'. The most appropriate code is:",
    correctedPromptSuffix:
      "An unused MCB has no outgoing cable. Its live terminal is inside a sound consumer-unit cover that requires a key or tool to remove. The most appropriate record is:",
    options: {
      B: "C2 because a skilled maintainer can see the terminal after removing the cover",
      C: "C1 even though ordinary persons cannot touch it with the cover secured",
      D: "No code — the sound secured cover provides basic protection from the internal terminal",
    },
    explanation:
      "Live terminals inside a consumer unit are expected when its tool-secured cover is deliberately removed by a skilled person. With the cover sound and no opening accessible to ordinary persons, the unused terminal does not create C1 or C2 merely because it exists inside the enclosure.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 11,
    promptSuffix:
      "An EICR finds a metal cable tray / containment system not connected to the protective earth. The most appropriate code is:",
    correctedPromptSuffix:
      "A metal cable tray supports intact insulated-and-sheathed cables. It is not used as a protective conductor, cannot foreseeably contact single-insulated live parts and does not introduce Earth potential. It is not earthed. The most appropriate record is:",
    options: {
      B: "C2 solely because the support is metal",
      D: "No code — the tray is neither an exposed-conductive-part nor an extraneous-conductive-part in the stated arrangement",
    },
    answer: "D",
    explanation:
      "A metal support is not automatically an exposed-conductive-part: it must be liable to become live through failure of basic insulation. Intact sheathed cables provide more than basic insulation, and the stated tray also does not introduce Earth potential, so its material alone does not require earthing.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 12,
    promptSuffix:
      "On an EICR, a socket-outlet's earth pin is found to be loose and not making reliable contact with the plug's earth. The most appropriate code is:",
    options: {
      B: "C2 — the socket may fail to earth connected Class I equipment",
      C: "C1 solely because a Class I appliance may later be connected",
      D: "Either C1 or C2 depending only on ordinary use",
    },
    answer: "B",
    explanation:
      "The unreliable earth contact can remove fault protection from connected Class I equipment, creating potential danger and therefore C2. C1 requires danger present now, such as connected metalwork already made live, rather than the possibility of a later insulation fault.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 13,
    promptSuffix:
      "An EICR finds a TT-system installation with no RCD between the consumer unit and the means of earthing. The most appropriate code is:",
    correctedPromptSuffix:
      "A TT installation has no RCD or other device capable of meeting the required automatic-disconnection time with the measured electrode resistance. No exposed-conductive-part is currently live. The most appropriate code is:",
    options: {
      B: "C2 — fault protection is ineffective and needs urgent remedy",
      C: "C1 solely because the installation relies on a TT electrode",
    },
    answer: "B",
    explanation:
      "The high-impedance TT earth path means the stated overcurrent devices cannot provide timely fault disconnection, so the installation is potentially dangerous and C2 is appropriate. BPG4 likewise gives C2 when the main TT RCD fails; C1 requires an immediate danger already present.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 14,
    promptSuffix:
      "An EICR finds a junction box used in a maintained location, accessible for inspection but containing a connection that has been wrapped in insulating tape rather than terminated in a proper terminal. The most appropriate code is:",
    correctedPromptSuffix:
      "A closed junction box contains conductors merely twisted and tape-wrapped with no suitable terminal. The joint is cool and no live part is accessible. The most appropriate code is:",
    options: {
      B: "C2 — the improvised connection can loosen or overheat",
      C: "C1 solely because tape was used",
      D: "Either C1 or C2 despite the stated absence of present danger",
    },
    answer: "B",
    explanation:
      "Tape and twisting do not provide a durable terminal or strain relief, so the joint can develop resistance, heat or loss of insulation and warrants C2. Active arcing, heat or an accessible live conductor would change the observed condition to C1.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 18,
    promptSuffix:
      "An EICR finds a domestic kitchen with no RCD additional protection on the socket-outlets. The most appropriate code is:",
    correctedPromptSuffix:
      "An older domestic kitchen has no RCD additional protection on indoor socket-outlets. They are outside a bathroom, are unlikely to supply mobile equipment outdoors and no other potential danger is found. The most appropriate code is:",
    options: {
      A: "C3 — adding 30 mA RCD protection would improve safety",
      B: "C2 solely because current rules now require RCD protection for such sockets",
      D: "Either C2 or C3 based only on the installation's age",
    },
    answer: "A",
    explanation:
      "BPG4 gives C3 for a socket without additional RCD protection where it is unlikely to supply outdoor mobile equipment, is outside a bathroom and has no other potential danger. Classification follows actual use and risk, not age alone.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 1,
    promptSuffix:
      "An EICR finds a domestic CU with mixed device types — one MCB, one RCBO and a wirewound BS 1361 fuse, all from different manufacturers. The most appropriate observation is:",
    correctedPromptSuffix:
      "A domestic consumer unit contains mixed-brand devices not verified together by their manufacturers. They are secure, undamaged, correctly connected, show no thermal damage and all protective functions test correctly. The most appropriate observation is:",
    options: {
      B: "C3 — obtain manufacturer-compatible devices as an improvement",
    },
    explanation:
      "BPG4 gives C3 for unverified mixed-brand switchgear when the devices are secure, correctly fitted, free of damage and overheating, and work correctly. Any failed protective function, poor fit, overheating or inadequate rating would be classified separately and could warrant C2.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 6,
    promptSuffix:
      "An EICR finds a Class I metal kitchen appliance plugged into a socket with no earth pin contact (the socket's earth contact is broken). The most appropriate code is:",
    options: {
      B: "C2 — the socket cannot provide reliable fault protection to the Class I appliance",
      C: "C1 solely because an unearthed Class I appliance is connected, although its case is not live",
    },
    answer: "B",
    explanation:
      "BPG4 gives C2 for absence of earthing at a socket-outlet. A later insulation fault could leave the appliance case live without operating the protective device, but C1 requires a present injury risk such as the case already being live.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 7,
    promptSuffix:
      "An EICR finds a 50-year-old TN-S installation's main earthing conductor as a 4 mm² bare copper strap, undersized for current BS 7671 sizing. The most appropriate code is:",
    correctedPromptSuffix:
      "A TN-S installation has a 4 mm² copper main earthing conductor, and a calculation using the verified fault current and disconnection time shows that it fails the adiabatic requirement. The most appropriate code is:",
    explanation:
      "BPG4 gives C2 where an earthing conductor fails the adiabatic requirement. The conductor may be damaged or open during a fault before disconnection, so fault protection needs urgent correction; its age alone would not establish that result.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 8,
    promptSuffix:
      "An EICR finds an isolator on the immersion heater circuit fitted as a single-pole switch. The most appropriate code is:",
    correctedPromptSuffix:
      "An immersion-heater manufacturer requires double-pole local isolation, but only a single-pole local switch is fitted and no other suitable local isolator is available. The most appropriate code is:",
    options: {
      B: "C2 — the required local isolation can leave a conductor connected during maintenance",
    },
    explanation:
      "Double-pole isolation is not inferred merely from the words 'water heater'; the system and equipment requirements matter. Here the manufacturer's stated isolation method is absent, so maintenance can leave a hazardous conductor connected and C2 is justified.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 9,
    promptSuffix:
      "An EICR finds a 30 mA RCD providing additional protection on a circuit feeding several outdoor sockets. The RCD trips at 1×IΔn within 250 ms and at 5×IΔn within 32 ms. The most appropriate record is:",
    correctedPromptSuffix:
      "A general non-delay 30 mA RCD protecting outdoor sockets operates in 250 ms at IΔn using an AC residual test current. The most appropriate record is:",
    options: {
      C: "Satisfactory — 250 ms is within the current 300 ms field-test limit at IΔn",
    },
    explanation:
      "Current BS 7671 field verification applies an AC residual current at IΔn and allows a general non-delay RCD up to 300 ms. The 250 ms result is therefore satisfactory; the old 5 × IΔn/40 ms check is no longer a prescribed core field test.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 12,
    promptSuffix:
      "An EICR finds that a circuit's RCD has been jumpered out (the RCD's output connections shorted together). The most appropriate code is:",
    correctedPromptSuffix:
      "A required 30 mA RCD used for additional protection has been bypassed. Basic protection, earthing and automatic fault protection remain intact, and no danger is present now. The most appropriate code is:",
    options: {
      B: "C2 — the required additional protective function has been defeated",
      C: "C1 solely because the bypass was deliberate",
    },
    answer: "B",
    explanation:
      "Bypassing the RCD removes a required protective layer and is potentially dangerous, so it needs urgent correction as C2. Deliberate action does not itself define C1; that code needs danger present now, such as accessible live parts or active arcing.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 13,
    promptSuffix:
      "An EICR observation reads 'Cable concealed in stud wall, route unknown, no detection possible during inspection'. The most appropriate code is:",
    correctedPromptSuffix:
      "A concealed cable's route cannot be verified without opening a sound wall. No damage, unsafe entry point or other specific concern is observed. The most appropriate record is:",
    options: {
      C: "FI automatically because concealed work cannot be seen",
      D: "Record the precise item as not verified or as a limitation; no code solely for inaccessible routing",
    },
    answer: "D",
    explanation:
      "A concealed route creates missing evidence, not evidence of a defect. Record exactly what could not be verified and why; FI is reserved for a specific observed concern whose possible danger cannot be determined within the agreed inspection.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 15,
    promptSuffix:
      "An EICR finds a circuit feeding a fixed mobility-aid charging point in a sheltered-housing dwelling, with no RCD protection. The most appropriate code is:",
    correctedPromptSuffix:
      "A sheltered-housing socket-outlet is intended to charge mobility equipment that is regularly taken outdoors. It has no 30 mA RCD additional protection. The most appropriate code is:",
    explanation:
      "A socket that supplies mobile equipment reasonably expected to be used outdoors requires 30 mA RCD additional protection. Its absence is C2 because that foreseeable use creates potential shock danger; the result follows the circuit's use, not a blanket rule based on the occupant's age or disability.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 16,
    promptSuffix:
      "An EICR observation reads 'Earthing conductor terminated at MET via a cable lug; lug nut hand-tight only, found loose during inspection'. The most appropriate code is:",
    options: {
      B: "C2 — the unreliable main earthing connection can defeat fault protection",
      C: "C1 solely because continuity may be lost",
      D: "Either C1 or C2 depending only on a continuity reading",
    },
    answer: "B",
    explanation:
      "A loose main earthing connection is unreliable under fault current and vibration, so it is potentially dangerous and C2. BPG4 also gives C2 for complete absence of a reliable means of earthing; C1 needs danger present now, such as exposed metalwork already live.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 17,
    promptSuffix:
      "An EICR finds a recently installed PV array DC isolator without correct DC-rated labelling. The most appropriate code is:",
    correctedPromptSuffix:
      "A correctly selected and functioning PV DC isolator lacks the required alternative-source and DC identification labels. No other defect is found. The most appropriate code is:",
    options: {
      B: "C2 solely because identification is missing",
      C: "C3 — provide the required clear DC and alternative-source identification",
    },
    answer: "C",
    explanation:
      "BPG4 gives C3 for missing warning notices identifying an alternative or secondary source. A confirmed AC-only isolator in a DC circuit, exposed live parts or another actual hazard would be classified separately; missing identification alone is an improvement item.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 20,
    promptSuffix:
      "An EICR finds a recently extended kitchen with a new dishwasher circuit without supplementary RCD protection on the new dishwasher socket. The most appropriate code is:",
    correctedPromptSuffix:
      "A recently added dishwasher socket-outlet has no 30 mA RCD additional protection and no permitted exception applies. The most appropriate code is:",
    explanation:
      "A socket-outlet rated 32 A or less requires 30 mA RCD additional protection unless a specific exception applies. Because the new socket lacks that required protective layer, C2 and urgent correction are appropriate; the correct term is additional, not supplementary, protection.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 8,
    promptSuffix:
      "Where the EICR contains C1, C2 or FI observations, the overall outcome must be recorded as:",
    correctedPromptSuffix:
      "Under the BS 7671:2018+A4:2026 model EICR, a report contains one FI observation but no C1 or C2 observations. What is the overall assessment?",
    options: {
      A: "Satisfactory — FI is advisory and does not affect the overall assessment",
      B: "Unsatisfactory solely because FI is recorded",
      C: "Conditional",
      D: "Pending",
    },
    answer: "A",
    explanation:
      "The A4:2026 model EICR makes the distinction explicit: only C1 danger or C2 potential danger makes the overall assessment unsatisfactory. C3 and FI observations are advisory, so this report remains satisfactory, while the advised investigation should still be given due consideration.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 11,
    promptSuffix:
      "A privately rented dwelling has had remedial work after an Unsatisfactory EICR. The landlord must obtain:",
    explanation:
      "An A4:2026 EICR is unsatisfactory because of C1 or C2 observations, not FI alone. After required rented-sector remedial work, the landlord must obtain written confirmation from a qualified person and provide the required copies. Separately, if the report identifies further investigative work as necessary, the rented-sector regulations require that work and its written confirmation within the applicable deadline even though FI does not determine the EICR's overall assessment.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 4,
    promptSuffix:
      "On a rented domestic EICR, who is responsible for acting on the Unsatisfactory result?",
    explanation:
      "The landlord is the duty holder who must arrange the required work and obtain written confirmation; the inspector identifies and reports the condition. Under A4:2026, C1 or C2 makes the EICR unsatisfactory. An FI observation is advisory to that overall assessment, although rented-sector law still requires further investigative work when the report says it is necessary.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 13,
    promptSuffix: "A small dwelling EICR with no observations is recorded as:",
    explanation:
      "With no observations, there is no C1 or C2 condition to make the A4:2026 overall assessment unsatisfactory, so the report is satisfactory. The inspector must still complete the report and schedules, sign and date them, and recommend the next inspection date; a clean result does not remove the evidence requirements.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 18,
    promptSuffix:
      "An EICR identifies one C3 and no C1/C2/FI items. The overall outcome is recorded as:",
    correctedPromptSuffix:
      "An EICR identifies one C3 observation and no C1 or C2 observations. Under A4:2026, what is the overall assessment?",
    explanation:
      "The report is satisfactory because only C1 and C2 observations affect the A4:2026 overall assessment. C3 is an advisory improvement recommendation; it remains recorded and should be considered, but it does not turn the report into an unsatisfactory one.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 8,
    promptSuffix:
      "A school EICR notes ten C3 items but no C1, C2 or FI. The overall result is:",
    correctedPromptSuffix:
      "A school EICR records ten C3 observations and one FI observation, but no C1 or C2. Under A4:2026, the overall assessment is:",
    options: {
      A: "Satisfactory — C3 and FI are advisory, although both should be given due consideration",
      B: "Unsatisfactory because there are many advisory observations",
      C: "Pending",
      D: "Automatically FI instead of an overall assessment",
    },
    explanation:
      "The A4:2026 model form states that C3 and FI observations are advisory and do not affect the overall assessment. With no C1 or C2, the report is satisfactory; the number of advisory observations does not change that result, but the duty holder should still consider the recommended improvements and investigation.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 10,
    promptSuffix:
      "When a landlord receives an Unsatisfactory EICR, the timescale to complete remedial or further investigation work is:",
    correctedPromptSuffix:
      "For a home covered by the rented-sector electrical-safety regulations, the report says remedial or further investigative work is necessary. What is the normal completion deadline?",
    explanation:
      "The rented-sector regulations normally require work identified as necessary in the report within 28 days of inspection, or sooner when the report specifies. This legal work trigger is separate from the A4:2026 overall assessment: C1 or C2 makes the EICR unsatisfactory, while an FI observation is advisory to that assessment but identified investigative work may still be legally required.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 20,
    promptSuffix:
      "Where the number of C3s is high but no C1/C2/FI exist, the inspector's commentary should:",
    correctedPromptSuffix:
      "An EICR has many C3 observations and one FI observation, but no C1 or C2. How should the inspector present the result under A4:2026?",
    options: {
      A: "Mark the report Unsatisfactory because advisory observations have accumulated",
      B: "Mark it Satisfactory, summarise the C3 improvement pattern and clearly identify the investigation advised by FI",
      C: "Refuse to sign",
      D: "Omit the FI because it does not affect the overall assessment",
    },
    explanation:
      "The overall assessment remains satisfactory because A4:2026 reserves an unsatisfactory result for C1 or C2. Advisory does not mean irrelevant: the summary should help the duty holder understand the repeated improvement case and the defined investigation that deserves consideration.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 8,
    promptSuffix: "An EICR with one C2 and several C3s is overall:",
    correctedPromptSuffix:
      "An EICR contains one C2, several C3 observations and one FI observation. Under A4:2026 it is overall:",
    options: {
      B: "Unsatisfactory because of the C2; the C3 and FI observations are advisory to the overall assessment",
    },
    explanation:
      "One C2 makes the installation unsatisfactory because it identifies a potentially dangerous condition. The C3 recommendations and FI advice must still be recorded and considered, but under A4:2026 neither of those advisory codes changes the overall assessment.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 5,
    promptSuffix:
      "An EICR observation reads 'Tested with all loads connected; cannot determine whether low IR is from electronic loads or installation fault'. The most appropriate code is:",
    correctedPromptSuffix:
      "An insulation test was made with electronic loads connected, so the inspector cannot tell whether a low reading comes from those loads or a fixed-wiring fault. Under A4:2026, the most appropriate observation is:",
    options: {
      B: "FI — isolate the connected loads and retest to establish whether the fixed wiring is defective",
      D: "Satisfactory solely because the uncertain reading has not yet proved a wiring defect",
    },
    explanation:
      "The test arrangement cannot distinguish connected electronic loads from damaged fixed wiring, so it leaves a specific concern that needs a defined investigation: isolate the loads and retest. FI records that advice. Under A4:2026, FI alone does not make the overall EICR unsatisfactory; only a C1 or C2 observation does that.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 1,
    promptSuffix:
      "A factory EICR finds a damaged armoured cable gland with the steel wire armour exposed and the inner cores still in place. The most appropriate code is:",
    correctedPromptSuffix:
      "A factory EICR finds a damaged SWA gland. Armour continuity and mechanical protection are unreliable, but the oversheath and core insulation remain intact and no live part is accessible. The most appropriate code is:",
    options: {
      B: "C2 — the damaged gland has impaired the cable's earthing and mechanical protection",
      C: "C1 solely because the gland is damaged, although no live part or other immediate danger is present",
      D: "FI, despite the damage and its protective consequence already being established",
    },
    answer: "B",
    explanation:
      "The intact core insulation means there is no immediate contact with a live part, but the damaged gland has made the armour's protective connection and mechanical protection unreliable. That is C2 potential danger. Accessible live cores, active arcing or another present injury risk would instead justify C1.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 17,
    promptSuffix:
      "An EICR finds a burnt-out neutral termination at the main distribution board, with the busbar surface discoloured. The most appropriate code is:",
    correctedPromptSuffix:
      "An EICR finds a burnt neutral termination and discoloured busbar at the main distribution board. The equipment has been isolated and cooled; there is no smoke, active heat, arcing or accessible live part. The most appropriate code is:",
    options: {
      B: "C2 — heat damage has weakened a high-current connection and needs urgent repair",
      C: "C1 solely because burning occurred previously, although no immediate danger remains",
      D: "FI, despite the heat damage and required repair already being clear",
    },
    answer: "B",
    explanation:
      "Cooled, contained heat damage can fail again or damage adjacent insulation, so the termination and busbar need urgent repair and testing as C2. C1 is reserved for danger present at the inspection, such as continuing heat, smoke, arcing or accessible live parts.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 2,
    promptSuffix:
      "An EICR finds the consumer unit located in a damp basement with active condensation and signs of corrosion at the busbar. The most appropriate code is:",
    correctedPromptSuffix:
      "A basement consumer unit has condensation damage and corrosion at the busbar, but it is dry at the inspection with no active tracking, heat, arcing or accessible live part. The most appropriate code is:",
    options: {
      B: "C2 — moisture damage has impaired insulation and connection reliability and needs urgent correction",
      C: "C1 solely because condensation occurred previously, although no danger is present now",
      D: "FI, despite the corrosion and required corrective action already being established",
    },
    answer: "B",
    explanation:
      "Corrosion at a busbar can raise connection resistance and moisture damage can undermine insulation, creating foreseeable shock or fire danger and C2. Active tracking, arcing, overheating or exposed live parts would establish C1 danger present.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 17,
    promptSuffix:
      "An EICR observation reads 'BS 3036 rewireable fuse remaining on a 5 A lighting circuit in original 1960s installation, otherwise sound'. The most appropriate code is:",
    options: {
      C: "C3 solely because a newer protective-device technology is now available",
      D: "Satisfactory — no code when the fuse, cable protection and required disconnection time are verified",
    },
    explanation:
      "A BS 3036 fuse is not defective merely because it is old or because MCBs are now common. When its rating coordinates with the cable, its breaking capacity is adequate and the measured fault path supports the required disconnection time, it remains satisfactory; any actual failure is classified on that failure's risk.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 14,
    promptSuffix:
      "An EICR finds an obvious DIY-quality joint at an exposed loft-level cable run, made with twisted-and-taped conductors. The most appropriate code is:",
    correctedPromptSuffix:
      "An accessible loft cable has an unenclosed twisted-and-taped joint. The tape is currently intact and cool and no live conductor is exposed, but the joint has no suitable terminal, strain relief or enclosure. The most appropriate code is:",
    options: {
      B: "C2 — the joint can loosen, overheat or expose live conductors in normal service",
      C: "C1 solely because the joint is poor quality, although no immediate danger is present",
      D: "FI, despite the unsafe construction and failure mechanism already being visible",
    },
    answer: "B",
    explanation:
      "Twisting and tape do not maintain dependable contact pressure or provide strain relief and enclosure, so the joint can loosen, heat or expose conductors and is C2. It becomes C1 if live parts, active arcing or overheating present an immediate risk.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 18,
    promptSuffix:
      "An EICR finds a cooker control unit with a switched 13 A socket, the socket switch left in the on position with no plug inserted, and the inner shutters non-functional. The most appropriate code is:",
    correctedPromptSuffix:
      "A cooker-control socket has failed shutters, and a standard test finger can contact a live terminal through the empty socket apertures. The most appropriate code is:",
    options: {
      B: "C2, even though the live terminal is already touch-accessible",
      C: "C1 — basic protection has failed and danger is present",
      D: "FI, despite direct accessibility already being established",
    },
    answer: "C",
    explanation:
      "A live terminal reachable through the socket aperture is direct shock danger, so the outlet needs immediate isolation or another effective make-safe action and C1. C2 would apply to damaged shutters that create foreseeable future exposure while live parts remain inaccessible.",
  },
] as const satisfies readonly ExamQuestionCorrection[];
