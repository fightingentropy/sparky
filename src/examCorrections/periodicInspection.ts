import type { ExamQuestionCorrection } from "./types";

export const periodicInspectionCorrections = [
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 1,
    promptSuffix: "An EICR records 'Satisfactory'. This means:",
    options: {
      B: "No C1 or C2 observations were raised; C3 and FI are advisory under the Amendment 4 EICR and do not change the overall assessment",
    },
    explanation:
      "On the BS 7671:2018+A4:2026 model EICR, only C1 (danger present) and C2 (potentially dangerous) make the overall assessment Unsatisfactory. C3 and FI remain important advisory findings: C3 recommends an improvement, while FI identifies a specific concern that needs prompt investigation.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 19,
    promptSuffix:
      "An ESS PRS Regs 2020 EICR returns Unsatisfactory because of an FI observation. The landlord's duty to act is:",
    correctedPromptSuffix:
      "An EICR for a dwelling covered by ESS PRS 2020 contains an FI observation. What is the landlord's duty?",
    options: {
      A: "Arrange the required investigation and any consequent remedial work within 28 days of inspection, or sooner if specified, then obtain the required written confirmation",
    },
    explanation:
      "FI is advisory and no longer makes the Amendment 4 EICR Unsatisfactory by itself. The rented-sector regulations impose a separate duty when the report requires further investigative work, so the landlord must arrange it within 28 days of inspection, or sooner if the report says so, and deal with any resulting remedial work and confirmation.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 3,
    promptSuffix:
      "A landlord has just received an EICR with a single C3 observation. Under ESS PRS Regs 2020 the report is:",
    explanation:
      "C3 means improvement recommended and is advisory, so a lone C3 leaves the Amendment 4 EICR Satisfactory and does not trigger the rented-sector 28-day work duty. FI is also advisory for the EICR outcome, but unlike C3 it can separately trigger the regulations' requirement to complete report-required investigative work.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 13,
    promptSuffix:
      "A privately rented dwelling has a C2 observation on its EICR. The landlord must complete remedial work within:",
    explanation:
      "For C2, the rented-sector regulations require the remedial work within 28 days of the inspection, or sooner where the report specifies a shorter period. C1 danger must be made safe immediately. FI is different again: it is advisory for the Amendment 4 EICR outcome, but report-required investigative work still falls within the separate statutory 28-day duty.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 7,
    promptSuffix:
      "An EICR identifies a circuit running through a bedroom that has been over-extended such that the inspector suspects but cannot confirm a code-worthy issue without further isolation. The typical code is:",
    explanation:
      "FI is appropriate only because the question identifies a specific possible danger that cannot be decided without further isolation. It records the concern and calls for prompt investigation, but under the Amendment 4 EICR it is advisory and does not by itself make the overall assessment Unsatisfactory.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 10,
    promptSuffix:
      "Periodic inspection in privately rented dwellings is governed by:",
    options: {
      B: "ESS PRS Regulations 2020 (England) — normally five-yearly inspection, report-supply duties, C1 made safe immediately, and required C2 remedial or FI investigative work within 28 days or sooner if specified",
    },
    explanation:
      "The Electrical Safety Standards in the Private Rented Sector Regulations 2020 are the relevant English regime. They set the normal five-year maximum and report-supply duties; C1 danger needs immediate control, while required C2 remedial work and FI investigative work must normally be completed within 28 days of inspection or sooner if the report specifies.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 20,
    promptSuffix:
      "An EICR is Satisfactory but contains five C3 observations. The duty holder is:",
    explanation:
      "C3 means improvement recommended, so five C3 observations leave the Amendment 4 EICR Satisfactory and carry no rented-sector statutory deadline by themselves. C1 and C2 have urgent remedial consequences; FI is also advisory for the overall assessment but can separately trigger the rented-sector duty for required investigative work.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 17,
    promptSuffix:
      "A housing association lets a privately rented dwelling. The dwelling has a small commercial office on the ground floor (mixed use). The defensible interval position is:",
    correctedPromptSuffix:
      "A housing association lets a social-rented dwelling with a small commercial office on the ground floor. What is the defensible current interval position?",
    options: {
      C: "Apply the social-rented rules to the dwelling, including the 1 November 2026 first-check deadline for a pre-1 December 2025 tenancy where applicable, then assess the commercial office separately under EAWR and current IET guidance",
    },
    explanation:
      "The 2025 amendment extends the five-year electrical-safety regime to social housing, but its transition matters. For a registered-provider tenancy granted before 1 December 2025, the first installation inspection must be completed before 1 November 2026; later tenancies fall into the new-tenancy regime. The ground-floor workplace also needs its own EAWR risk-based scope rather than being treated only as housing.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 20,
    promptSuffix: "An EICR's overall assessment is determined by:",
    options: {
      B: "Whether any C1 or C2 is present (Unsatisfactory); C3 and FI are advisory and do not change the overall assessment",
    },
    explanation:
      "Under the Amendment 4 model EICR, the overall assessment follows the danger classifications, not the number or cost of observations. Any C1 or C2 makes it Unsatisfactory. C3 and FI must still be acted on appropriately, but they are advisory and do not alter that overall result.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 30,
    promptSuffix: "An EICR's overall result is determined by:",
    options: {
      B: "Presence of any C1 or C2 (Unsatisfactory) versus neither of those (Satisfactory); C3 and FI are advisory",
    },
    explanation:
      "The Amendment 4 model form makes an EICR Unsatisfactory when at least one C1 or C2 is recorded. The quantity of observations is irrelevant, and neither customer preference nor the advisory C3 and FI classifications changes the overall assessment.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 25,
    promptSuffix:
      "An EICR's overall assessment is determined by the codes raised. The pass/fail logic is:",
    options: {
      A: "Any C1 or C2 = Unsatisfactory; C3 and FI are advisory, so a report containing only those classifications remains Satisfactory",
    },
    explanation:
      "The Amendment 4 EICR separates the overall assessment from its advisory classifications. C1 and C2 identify danger or potential danger and make the report Unsatisfactory; C3 recommends improvement and FI calls for prompt investigation, but neither changes the overall result.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 1,
    promptSuffix:
      "On a ring final circuit test, R1+R2 readings at three sockets read 0.5 Ω, 0.5 Ω and 1.2 Ω. The 1.2 Ω socket is most likely:",
    correctedPromptSuffix:
      "On a ring-final continuity test, R1+R2 readings at three sockets are 0.5 Ω, 0.5 Ω and 1.2 Ω. What does the isolated 1.2 Ω result justify?",
    options: {
      B: "Investigate it: the extra resistance could come from a spur, additional cable length or a high-resistance connection, so the reading alone does not prove the topology",
    },
    explanation:
      "A spur adds the resistance of its own line and CPC conductors to the cross-connected ring reading, but its value depends on spur length and conductor sizes. A loose or damaged termination can also produce one high result. Trace the route, inspect the terminations and complete the ring tests before deciding which cause applies.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 1,
    promptSuffix:
      "An inspector samples 10 lighting points on a corridor and finds two with damaged flexes inside accessory boxes. The defensible response is:",
    correctedPromptSuffix:
      "An inspector samples 10 corridor lighting points and finds two flexes with damaged insulation inside accessory boxes, leaving conductors liable to contact or short-circuit. The defensible response is:",
    explanation:
      "Damaged insulation inside an accessory can allow electric shock, arcing or a short-circuit, so the two defects are assessed as potentially dangerous and normally recorded C2 on the stated facts. Finding the same defect twice also weakens confidence in the original sample, so inspect more similar points and record the pattern.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 11,
    promptSuffix:
      "An owner-occupier has had an EICR voluntarily, returning Satisfactory with one C3. The recommended next inspection date is:",
    options: {
      C: "10 years as the normal GN3 starting maximum for an owner-occupied dwelling, unless the inspector recommends sooner for evidenced condition or risk",
    },
    explanation:
      "Guidance Note 3 uses 10 years as the normal starting maximum for an owner-occupied dwelling. A competent inspector can recommend an earlier date where the installation's condition, use or risk justifies it, but one C3 on an otherwise satisfactory report does not automatically reduce the interval to one or three years.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v1",
    questionNumber: 4,
    promptSuffix: "Which mapping best distinguishes N/V, LIM, FI and N/A?",
    options: {
      B: "Locked roof void = LIM/N/V; nonexistent swimming pool = N/A; unidentified circuit = N/V unless a specific unresolved safety concern justifies FI; sensitive equipment preventing L-N insulation testing = LIM/N/V with the reason stated",
    },
    explanation:
      "A limitation states an agreed or unavoidable restriction, N/V records an item that was not verified, and N/A means the item does not apply. FI is different: current Electrical Safety First guidance reserves it for a specific observed concern whose potential danger cannot be determined within the agreed inspection, not merely for every missing test or unidentified circuit.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 1,
    promptSuffix:
      "An EICR for a 12-floor office tower is being scoped. The duty holder asks for sampling to keep the cost reasonable. The defensible position is:",
    options: {
      B: "Sampling is a risk-based professional judgement: agree and record a representative scope, inspect safety-critical unique items directly, and expand the sample when findings reduce confidence",
    },
    explanation:
      "BS 7671 and IET Guidance Note 3 do not prescribe a universal 10%, 20% or other sampling rate. The inspector selects a representative sample from the installation's age, condition, use, maintenance history and previous records, records the basis and any limitations, and increases the sample when defects undermine confidence.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 2,
    promptSuffix:
      "The inspector samples sockets on a busy retail floor and finds the same loose terminal on two of the ten sampled. The defensible response is:",
    options: {
      B: "Increase the sample, potentially inspect the whole affected group if the pattern continues, and classify each defect from the danger actually present",
    },
    explanation:
      "Two matching defects suggest a workmanship pattern, so the original sample no longer provides enough confidence. The inspector expands the affected group and assesses actual looseness, arcing, heating and protective-conductor reliability; a C2 is appropriate where potential danger is established, but the code is not assigned from the words 'loose terminal' alone.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 3,
    promptSuffix: "Live testing is justified only when:",
    options: {
      B: "It is unreasonable in all the circumstances for the conductors to be dead, it is reasonable to work on or near them while live, and suitable precautions are taken to prevent injury",
    },
    explanation:
      "Those are the three cumulative conditions in regulation 14 of the Electricity at Work Regulations 1989. A client's consent, extra payment, PPE or GS38-compliant probes may form part of the controls, but none replaces the legal need to justify live work and take suitable precautions.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 5,
    promptSuffix:
      "EICR Section D ('extent and limitations') is the place to record:",
    options: {
      B: "The installation covered, agreed sampling, genuine access or operational restrictions, what was not inspected or tested, and the reason for each limitation",
    },
    explanation:
      "The extent and limitations entry tells the reader exactly what evidence the report covers. A client refusal or cost constraint can be recorded factually, but the inspector must still decide whether the remaining work is sufficient for a meaningful report; the entry is not a blanket transfer of safety duties or liability.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 7,
    promptSuffix:
      "Out-of-hours dead testing on a 24/7 facility is preferable because:",
    explanation:
      "Planning an isolation window avoids the additional shock and arc hazards of working live. If any work on or near live conductors remains necessary, the inspector must separately satisfy all three conditions in EAWR regulation 14; calling the site continuous-process does not by itself justify live work.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 8,
    promptSuffix:
      "A privately rented dwelling EICR has a clear, signed extent-and-limitations entry. The benefit of this is:",
    options: {
      B: "It defines what the report did and did not assess, why any restrictions applied, and prevents the findings being read more broadly than the evidence supports",
    },
    explanation:
      "A clear entry makes the report's evidential boundary understandable to the landlord, tenant and any later inspector. A signature does not make an unsafe limitation acceptable, transfer statutory duties, waive another person's rights or decide later civil liability.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 9,
    promptSuffix:
      "An inspector cannot dead-test a continuous-process line. Acceptable approaches include:",
    options: {
      B: "Plan a shutdown for dead testing, record a genuine limitation and prompt follow-up where access cannot be obtained, or carry out only live work that satisfies EAWR regulation 14",
    },
    explanation:
      "A continuous process calls for planning, not automatic live testing. The preferred route is an agreed shutdown; any restriction is recorded with its reason and effect, and any live work must be unreasonable to do dead, reasonable to do live and supported by suitable precautions.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 10,
    promptSuffix:
      "A 100-circuit installation is sampled at 10%. Two sampled circuits return low IR. The next defensible step is:",
    options: {
      B: "Investigate the readings and expand the affected sample; record C2 where the measured condition already establishes potential danger, or FI only where a specific possible danger cannot yet be determined",
    },
    explanation:
      "Repeated low insulation resistance undermines the original sample and requires wider investigation. FI is not a substitute for diagnosing every failed test: current Best Practice Guide 4 says it should be rare and used only when potential danger cannot be determined within the agreed inspection; an established potentially dangerous condition is coded C2.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 11,
    promptSuffix:
      "An EICR records 'sampling: 100% of consumer units, 20% of socket outlets, 100% of fire alarm circuits, lighting in occupied areas only'. This kind of mixed sampling is:",
    options: {
      B: "Potentially defensible only where each population and its rationale are clear; the EICR must not imply full fire-alarm or emergency-lighting verification unless that separate work was actually in scope and completed to the relevant standard",
    },
    explanation:
      "Different populations can have different inspection extents, but there is no universal percentage schedule in BS 7671. Fire detection and emergency-lighting systems have their own inspection and maintenance standards, so an EICR scope must distinguish inspection of their electrical supplies from separate full functional verification.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 12,
    promptSuffix:
      "Failure to obtain a written agreement on extent and limitations exposes the inspector because:",
    options: {
      B: "Readers may not be able to tell what was inspected or tested, making the report ambiguous and easier to overinterpret",
    },
    explanation:
      "The model EICR requires the extent and agreed limitations to be recorded. Omitting them weakens the evidence of what the inspector actually assessed, but it does not automatically determine liability for every later defect; that depends on the facts, duties and applicable law.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 13,
    promptSuffix:
      "An EICR limitation that says 'the basement boiler room could not be inspected because the key holder was unavailable' is:",
    explanation:
      "A genuine access restriction can be recorded with the precise area, reason, person who agreed it and a follow-up recommendation. The entry limits what the report can evidence; it does not mean the duty holder has accepted all risk or that the inspector can leave a scope so restricted that the report is misleading.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 14,
    promptSuffix:
      "An EICR sample turns up a recurring 6242Y cable type used in a damp area. The defensible response is:",
    options: {
      B: "Check how and where the cable is installed, expand inspection across the same environment, and classify only any actual unsuitability, deterioration or danger found",
    },
    explanation:
      "A cable designation and the word 'damp' do not produce an automatic code. The inspector checks environmental exposure, enclosure or containment, sheath condition, terminations and manufacturer's suitability; C2 applies where potential danger exists, while a sound suitable installation may need no code at all.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 15,
    promptSuffix:
      "An office EICR has 'sampling: 20% of similar circuits' agreed. During testing, no defects are found. The defensible record is:",
    options: {
      A: "Record the representative sample, its basis and any limitations; determine the overall outcome from every observation within the completed EICR, not from the sampled circuits alone",
    },
    explanation:
      "A successful sample supports confidence in that population but does not by itself decide the entire EICR. The overall assessment still depends on the full agreed extent, visual inspection, unique safety items, test results and whether any C1 or C2 observations were recorded. Untested items are documented limitations; a specific unresolved possible danger may be FI, but FI is advisory under Amendment 4.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 16,
    promptSuffix:
      "An office tenant insists computers must not be turned off. The defensible response is:",
    explanation:
      "Plan isolation outside occupied hours and record any equipment or circuits that genuinely cannot be tested. If a particular live test is proposed, it must independently satisfy EAWR regulation 14; a tenant's written acknowledgement cannot turn otherwise unjustified live work into a safe or lawful method.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 17,
    promptSuffix:
      "An EICR sample reveals one C1 defect (immediate danger). The inspector should:",
    explanation:
      "A C1 requires immediate action to remove the danger, or immediate warning and effective isolation where the inspector cannot remedy it. The client is told at once and receives written confirmation; related items are then inspected more widely because the original sample no longer gives adequate confidence.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 2,
    promptSuffix:
      "Live testing PPE and instrument requirements are governed by:",
    options: {
      B: "EAWR regulation 14 for whether live work is justified, supported by the risk assessment, GS38 for probes and leads, suitable protective equipment, and applicable site controls",
    },
    explanation:
      "EAWR regulation 14 sets the legal threshold for work on or near live conductors. HSE GS38 addresses the construction and use of probes, leads, voltage indicators and measuring equipment; PPE and local rules supplement rather than replace isolation and the regulation 14 assessment.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 3,
    promptSuffix:
      "An EICR Section D entry that says 'all circuits tested at 100%' could be unrealistic on a large installation because:",
    correctedPromptSuffix:
      "An EICR Section D entry says 'all circuits tested at 100%', but the inspector actually sampled circuits. What is the defect in the report?",
    options: {
      B: "It overstates the completed extent; the report must record the sampling and tests actually performed",
    },
    explanation:
      "There is nothing inherently invalid about inspecting and testing every circuit when that work is genuinely completed. The defect is making a statement that is not true: an EICR must accurately record its extent, sampling and limitations so its conclusions match the evidence.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 4,
    promptSuffix:
      "An inspector cannot inspect a busy hospital ward. The defensible response is:",
    explanation:
      "Clinical activity can create a genuine operational limitation. Record the exact ward, reason, tests not completed, who agreed the restriction and the need for a coordinated follow-up; the entry defines the available evidence but does not permanently remove the duty to manage that installation safely.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 5,
    promptSuffix:
      "The inspector decides to sample 5% of identical socket circuits in a large warehouse. The duty holder is comfortable with this. The defensible record is:",
    options: {
      A: "Record the sample, its risk-based rationale and the uninspected population in Section D, but increase it if 5% cannot provide a representative assessment; client agreement does not cure an inadequate scope",
    },
    explanation:
      "No fixed percentage is automatically adequate. The inspector must be able to justify the selected population from the installation's condition, age, use and records, document it, and revise it on findings; a duty holder's comfort or signature does not replace that professional judgement.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 6,
    promptSuffix:
      "On a sampled circuit, the inspector finds an unsleeved CPC at the consumer unit. The defensible response is:",
    options: {
      B: "Record it as a non-coded observation where the bare CPC is otherwise sound, check for identification or termination problems, and inspect related workmanship if a wider pattern is suspected",
    },
    explanation:
      "Electrical Safety First Best Practice Guide 4 Issue 7.3 lists a bare circuit protective conductor that is not sleeved green-and-yellow as 'NC' only. It is not a C3 by itself; damaged insulation, poor identification that creates danger, or an unreliable termination is assessed separately on the actual risk.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 7,
    promptSuffix:
      "An EICR limitation reads 'sockets behind built-in furniture not inspected'. This is:",
    options: {
      A: "Potentially defensible where the exact inaccessible sockets and reason are recorded, the remaining scope is still meaningful, and appropriate follow-up is recommended",
    },
    explanation:
      "Built-in furniture can prevent access without destructive work, so a specific limitation may be reasonable. It identifies missing evidence rather than declaring those sockets safe, transferring responsibility or automatically excluding all later consequences.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 10,
    promptSuffix:
      "An EICR records 'lighting circuits not isolated; live tests applied' on a continuously-occupied call centre. This entry is:",
    options: {
      A: "Defensible only if the particular live work satisfies every condition in EAWR regulation 14 and the report identifies the reason, method and suitable precautions",
    },
    explanation:
      "A continuously occupied building and a signed client acceptance do not automatically justify live work. The inspector must show that it was unreasonable to make the conductors dead, reasonable in all the circumstances to work live, and that suitable precautions prevented injury.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 11,
    promptSuffix:
      "An EICR sample tested at 20% returns no defects and the un-sampled population is similar in age and type. The defensible recommendation for the next inspection cycle is:",
    options: {
      A: "Record the present sample and result, then reassess the next cycle's interval and sample from condition, use, maintenance and intervening changes rather than automatically repeating 20%",
    },
    explanation:
      "A clean representative sample is useful evidence for this report, but neither the percentage nor interval is locked in for the future. The next inspector reviews current risk, records, alterations, deterioration and previous findings before selecting the new extent.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 12,
    promptSuffix:
      "An inspector cannot test a critical control circuit in continuous use. The defensible record is:",
    explanation:
      "Record the uncompleted test and operational reason as a limitation and arrange a suitable follow-up. Add FI only when there is a specific observed concern that might be dangerous and its classification cannot be determined within the agreed inspection; inability to test alone is not automatically FI.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 13,
    promptSuffix:
      "An EICR sample is 'all of one type of repeating accessory'. This is:",
    options: {
      B: "Acceptable as one defined sampling group if it is representative and recorded; other circuit groups and unique safety items still need their own appropriate inspection extent",
    },
    explanation:
      "Sampling by a genuinely homogeneous accessory or circuit family can be sensible, but it is not the whole EICR. The inspector separately assesses the origin, earthing and bonding, distribution equipment and other populations, using risk-based extents rather than a universal percentage rule.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 17,
    promptSuffix:
      "Sampling decisions on safety-critical systems (fire alarm, emergency lighting, life safety):",
    correctedPromptSuffix:
      "How should an EICR deal with fire-alarm, emergency-lighting and other life-safety systems?",
    options: {
      A: "Define exactly whether only their electrical supplies or a separate system verification is in scope, then inspect to the applicable risk and system standard rather than assuming one blanket percentage",
    },
    explanation:
      "Fire detection and emergency lighting have dedicated inspection, functional-test and maintenance regimes. An EICR must not claim complete system verification merely by writing '100%'; it records what its electrical-installation scope covered and refers separate specialist verification to the relevant standard where required.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 19,
    promptSuffix:
      "An EICR records 'inspection limited to non-isolatable items by visual inspection only; full testing where isolation could be agreed during the visit'. This entry is:",
    options: {
      A: "Potentially defensible if each affected circuit and missing test is identified, the reason is genuine, the completed scope still supports a meaningful report, and follow-up is recommended",
    },
    explanation:
      "Visual inspection may be all that can safely be completed during a particular visit, but a broad phrase cannot conceal an inadequate assessment. The report must distinguish the unverified items, avoid implying they passed and explain how the missing evidence will be obtained.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 1,
    promptSuffix:
      "On a sampled office lighting circuit the inspector finds an exposed live conductor in a damaged accessory. The defensible response is:",
    explanation:
      "An accessible live conductor is an immediate shock danger, so the inspector removes the danger if competent and authorised or isolates the affected part, warns the duty holder at once and provides written confirmation. Similar accessories are then checked more widely because one C1 destroys confidence in the original sample.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 4,
    promptSuffix:
      "An EICR records 'sampling 25% of repeating accessories; 100% of consumer units, switchgear, fire alarm circuits and emergency lighting'. This sampling pattern is:",
    options: {
      A: "Potentially defensible where every population, extent and reason is recorded, but the EICR must distinguish its electrical-supply checks from separate full fire-alarm or emergency-lighting system verification",
    },
    explanation:
      "Different groups can have different inspection extents, but neither 25% nor 100% is a universal rule supplied by BS 7671. Fire-alarm and emergency-lighting systems have separate standards, so the report must state what was actually verified instead of implying complete system testing from a percentage label.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 6,
    promptSuffix:
      "An EICR sample reveals a low IR reading on a sampled circuit. The cause cannot be diagnosed during the visit without further isolation that the duty holder cannot accommodate today. The defensible response is:",
    options: {
      A: "Record C2 where the low reading already establishes potential danger, or FI only where a specific possible danger cannot yet be classified; record the isolation constraint and require prompt follow-up",
    },
    explanation:
      "Not knowing the root cause does not automatically turn a failed safety test into FI. Where the measured insulation condition itself is potentially dangerous it is C2 and makes the report Unsatisfactory. FI is reserved for the rarer case in which investigation is needed to decide whether danger exists; it remains advisory under Amendment 4 but still requires prompt follow-up.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 9,
    promptSuffix:
      "A duty holder asks 'why isn't 100% always tested?' The defensible response is:",
    options: {
      B: "A representative, risk-based extent can be appropriate on a large installation when it is agreed, accurately recorded and increased whenever findings reduce confidence",
    },
    explanation:
      "Sampling is professional judgement based on risk, records and the homogeneity of the population, not merely a cheaper substitute or statistical guarantee. Full inspection may still be appropriate for small, high-risk or poorly maintained groups, while a documented representative extent can be meaningful on a large repetitive installation.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 10,
    promptSuffix:
      "An EICR limitation is recorded as 'lighting circuits in occupied bedrooms not tested'. The duty holder is comfortable with this. The defensible record is:",
    options: {
      A: "Section D, identifying the affected bedrooms or circuits, the access or isolation reason, who agreed it, and the prompt follow-up needed to obtain the missing evidence",
    },
    explanation:
      "An occupancy restriction can be genuine, but the entry must be specific enough for a reader to know what remains unverified. The duty holder's signature acknowledges the scope; it does not certify those circuits as safe, waive duties or justify leaving the gap indefinitely.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 11,
    promptSuffix:
      "Sampling on a hospital's life-safety circuits should default to:",
    correctedPromptSuffix:
      "Before assessing a hospital life-safety circuit during an EICR, what must the inspector establish?",
    options: {
      A: "The exact electrical-installation and specialist-system scope, applicable standards, clinical operating constraints and a risk-based test plan",
    },
    explanation:
      "There is no single percentage that safely defines every hospital life-safety assessment. The electrical supply, essential-services arrangement, emergency lighting, fire detection and clinical system may each have different standards and competent specialists; the EICR records precisely what it covered and coordinates safe access rather than claiming blanket verification.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 12,
    promptSuffix:
      "Live test for Zs is being carried out on a TN-S installation while the building is occupied. The most defensible approach is:",
    options: {
      A: "First justify the live measurement under EAWR regulation 14, consider whether Zs can be verified safely from other measurements, and if live work remains necessary use suitable GS38 equipment, controls and PPE",
    },
    explanation:
      "A risk assessment, probes and PPE control a justified live test but do not justify it by themselves. The tester must first establish that making the conductors dead is unreasonable, live work is reasonable in all the circumstances and suitable precautions prevent injury; the method and any limitations are then recorded.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 13,
    promptSuffix:
      "An EICR sample turns up no defects but the inspector observes the consumer unit is plastic and visibly aged. The defensible response is:",
    options: {
      A: "Assess its location and actual condition: record no code for age or plastic construction alone, C3 where a combustible unit is beneath wooden stairs or in a sole escape route, and C2/C1 only for actual potential/immediate danger",
    },
    explanation:
      "Current Electrical Safety First Best Practice Guide 4 gives C3 to a combustible consumer unit only when it is under wooden stairs or within a sole escape route from a dwelling. Elsewhere, plastic construction alone is 'NC'; heat damage, exposed live parts or other defects are classified separately from the danger observed.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 17,
    promptSuffix:
      "An EICR Section D limitation reads 'isolation refused by duty holder for cost reasons'. This entry is:",
    correctedPromptSuffix:
      "An EICR Section D limitation reads 'isolation refused by duty holder for cost reasons'. What must the inspector do?",
    options: {
      A: "Treat the signature as acceptance that the untested circuits are safe",
      B: "Record the refusal and its effect, but decide independently whether the remaining extent can support a meaningful EICR and recommend prompt completion",
    },
    answer: "B",
    explanation:
      "Cost can explain why access was refused, but it does not make missing safety evidence acceptable or transfer the duty holder's risk to paper. The inspector records the facts and must not issue a misleadingly broad assessment where the resulting limitation prevents a meaningful evaluation of the installation.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 18,
    promptSuffix:
      "An EICR records 'live RCD operation tested at IΔn (built-in button) only; trip-time test deferred to next cycle for non-isolation reasons'. This is:",
    correctedPromptSuffix:
      "An EICR records 'RCD integral test button operated; instrument test at IΔn not completed because the protected circuit could not be made available'. What is the correct treatment?",
    options: {
      A: "Record the precise missing instrument test and reason as a limitation, assess any associated concern, and arrange completion at the earliest practicable opportunity rather than waiting automatically for the next cycle",
    },
    explanation:
      "The integral button proves the mechanical tripping function through the device's internal test circuit; it is not a calibrated test at IΔn. BS 7671 field verification uses a suitable instrument at rated residual current, so an omitted measurement is clearly identified and completed promptly, with any actual danger coded separately.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 19,
    promptSuffix: "Sampling on a TT installation:",
    explanation:
      "The overall selection remains risk-based, but the electrode, earthing conductor and RCD arrangement providing fault protection are unique safety measures that need direct verification. BS 7671 does not prescribe a universal 10% or 20% rate for the installation's repeating accessories.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 2,
    promptSuffix:
      "An inspector cannot dead-test a hospital's MRI scanner power circuit. The defensible response is:",
    options: {
      B: "Coordinate a manufacturer- and clinical-approved shutdown or specialist method, record any genuine limitation precisely, and perform live work only where every EAWR regulation 14 condition is met",
    },
    explanation:
      "An MRI supply combines electrical, clinical and strong-magnetic-field hazards, so the inspection is planned with the responsible clinical and specialist personnel. A limitation records missing evidence but does not authorise unspecified 'proportionate live tests' or amount to the duty holder accepting the residual danger.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 4,
    promptSuffix:
      "A duty holder asks for sampling at 5% to keep the cost down. The defensible response is:",
    options: {
      B: "Explain the evidence needed, select and record a representative risk-based extent, inspect unique safety measures directly, and expand the sample whenever findings require it",
    },
    explanation:
      "The inspector cannot accept an arbitrary percentage that is too small for the installation merely because the client requests it. BS 7671 does not supply a universal rate: the extent follows condition, use, maintenance, records and population similarity, with limitations recorded and the report kept meaningful.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 5,
    promptSuffix:
      "The 'reasonably practicable' standard for periodic inspection means:",
    options: {
      B: "Weigh the degree of risk against the sacrifice in time, trouble and money, and take the precaution unless that sacrifice is grossly disproportionate to the risk",
    },
    explanation:
      "Reasonable practicability starts with the risk and asks whether the time, trouble and cost of the precaution would be grossly disproportionate to it. If they are not grossly disproportionate, the precaution must be taken. It is not an ordinary cost-benefit choice or permission to omit safety work because the client wants a cheaper inspection.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 6,
    promptSuffix:
      "On a dead test, an inspector finds a circuit with a low IR reading. The duty holder asks them to skip further investigation because the circuit is in continuous use. The defensible response is:",
    options: {
      B: "Record the operational constraint, expand or follow up the investigation promptly, and assign C2 if potential danger is already established or FI only if the danger cannot yet be determined",
    },
    explanation:
      "A duty holder cannot make an adverse reading disappear by refusing further access. The report records the test and limitation; a known potentially dangerous insulation condition is C2, while FI is reserved for a specific unresolved concern whose safety significance cannot be decided within the agreed inspection.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 8,
    promptSuffix:
      "Live testing introduces additional hazards. The inspector's primary defence is:",
    options: {
      B: "Avoid live work unless all EAWR regulation 14 conditions are satisfied, then use a suitable method, competent assistance where needed, GS38 equipment, controls and PPE",
    },
    explanation:
      "The first protection is to make conductors dead wherever reasonably practicable. Risk assessment, test equipment and PPE are suitable precautions for the live work that remains justified; a client's agreement or signed acceptance cannot displace the legal test or prevent electric shock and arc injury.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 9,
    promptSuffix:
      "A duty holder asks for sampling to be 'whatever the inspector decides on the day'. The defensible response is:",
    options: {
      B: "Agree and record a risk-based baseline before work, identify the populations and unique safety items, then revise and communicate the extent when on-site findings justify it",
    },
    explanation:
      "The scope should be understandable before inspection but flexible enough to respond to evidence. There is no prescribed 10-to-20-percent rate or blanket critical-system percentage; the inspector records the professional rationale and any change so the report matches the work actually performed.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 10,
    promptSuffix:
      "An EICR records 'sampling: 100% of consumer units; 30% of socket outlets, sampled across all rooms in proportion'. This is:",
    options: {
      A: "Potentially defensible if all distribution equipment was actually inspected and the 30% socket sample is representative, risk-based and accurately recorded",
    },
    explanation:
      "A weighted spread across rooms can be a sensible way to represent a repetitive population, and distribution equipment is commonly inspected directly. The percentages are not automatic pass rules: the inspector must justify them for this installation and expand the sample if condition or findings reduce confidence.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 11,
    promptSuffix:
      "An EICR limitation that says 'tenants in occupation; rooms tested where access permitted' is:",
    options: {
      A: "Potentially defensible for that visit if the exact rooms and missing work are recorded, the report remains meaningful, and access is pursued promptly rather than left until the next cycle",
    },
    explanation:
      "Occupation can restrict access, but a vague statement covering unspecified rooms is not enough. The report identifies what remains unverified and why, avoids presenting it as safe, and tells the landlord what follow-up access is needed to fulfil the inspection duty.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 12,
    promptSuffix:
      "The inspector observes during the EICR that a previously installed circuit has been altered with no documentation. The defensible response is:",
    options: {
      A: "Inspect and test the alteration within the agreed scope and classify any safety defect found; absence of historic paperwork alone is normally recorded as an observation, not automatically C3 or FI",
    },
    explanation:
      "An EICR assesses current electrical safety rather than retrospectively certifying the installer. Missing documentation may guide extra checks, but the code comes from an observed danger: C2 for potential danger and FI only for a specific possible danger that cannot be classified during the inspection.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 15,
    promptSuffix:
      "A duty holder asks for the sampled accessories to be selected randomly with no inspector preference. The defensible response is:",
    options: {
      A: "Use professional judgement to stratify the population by relevant risk and condition; random selection may be used within comparable groups when it improves representation, with the method recorded",
    },
    explanation:
      "Pure convenience selection can miss high-risk locations, while purely risk-targeted selection can overstate the condition of the wider population. A defensible design covers the important strata and may use random selection among genuinely similar items, then expands wherever defects appear.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 16,
    promptSuffix:
      "An EICR limitation reads 'live circuits to clinical alarms not isolated; functional check only by tester'. This is:",
    options: {
      A: "Defensible only if the EICR states the limited electrical scope, the functional check is within the tester's competence and applicable system procedure, and any missing specialist verification is arranged promptly",
    },
    explanation:
      "Clinical alarms may have manufacturer, healthcare and specialist maintenance requirements beyond BS 7671. Recording a functional check does not prove the complete alarm system or make live electrical work lawful; any live work still requires EAWR regulation 14 justification and suitable precautions.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 17,
    promptSuffix:
      "An EICR records 'sampling of consumer units: 100%; sampling of distribution boards: 100%; sampling of repeating sockets: 15%; lighting: 15%; fire alarm: 100%; emergency lighting: 100%'. The pattern is:",
    options: {
      A: "Potentially defensible only if those extents were actually completed and justified; the report must distinguish EICR checks from separate full verification of fire-alarm and emergency-lighting systems",
    },
    explanation:
      "Mixed sampling can reflect different populations, but GN3 does not mandate the listed percentages. Fire detection and emergency lighting have separate system standards and test regimes, so '100%' must identify exactly what was verified instead of being treated as a generic EICR formula.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 19,
    promptSuffix:
      "Live RCD trip-time testing on a TT installation in a dwelling:",
    options: {
      A: "Normally requires an instrument test at IΔn because the RCD commonly provides fault protection; justify and control the energised measurement and record any genuine inability to complete it",
    },
    explanation:
      "A TT installation often depends on the RCD for automatic disconnection, so correct operation is safety-critical and the integral button alone is not the BS 7671 instrument test. The fact that the measurement is brief does not itself justify live work; the tester follows EAWR and the instrument manufacturer's safe method.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 2,
    promptSuffix: "An EICR records 'Unsatisfactory'. This means:",
    options: {
      B: "At least one C1 or C2 observation was raised; urgent remedial action is required for those dangerous or potentially dangerous conditions",
    },
    explanation:
      "Under the BS 7671:2018+A4:2026 model EICR, at least one C1 or C2 observation makes the overall assessment Unsatisfactory. C3 and FI are advisory and do not alter that result, although an FI still identifies a concern that needs prompt investigation. Later work is documented separately and does not rewrite the original dated report.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 4,
    promptSuffix:
      "An EICR identifies an RCD that does not operate when the test button is pressed. This is typically coded:",
    explanation:
      "Failure of the integral test button shows that the RCD's protective operation cannot be relied upon, so C2 is the current Best Practice Guide 4 outcome. A TT system makes repair especially urgent, but the failed test is not automatically C1 unless a separate immediate danger is actually present.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 5,
    promptSuffix:
      "An EICR identifies a missing CPC on a final circuit feeding a Class I appliance. The typical code is:",
    explanation:
      "A Class I appliance depends on its protective conductor for automatic disconnection if basic insulation fails. Missing CPC continuity is therefore potentially dangerous and C2; it becomes C1 only if an additional condition has already made accessible metal live or otherwise creates immediate danger.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 9,
    promptSuffix:
      "An EICR observation that 'the consumer unit is plastic, in an older domestic installation, with no signs of heat damage' is typically coded:",
    options: {
      D: "No code for plastic construction alone; assess its location and any actual defect",
    },
    answer: "D",
    explanation:
      "Best Practice Guide 4 Issue 7.3 records plastic construction alone as NC when the unit is not under wooden stairs or within a sole escape route. A combustible unit in either of those locations is C3; overheating, missing barriers or accessible live parts are classified separately from the danger found.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 11,
    promptSuffix: "An EICR with a C1 must be communicated to the duty holder:",
    options: {
      B: "Immediately: warn the duty holder at once, make safe or isolate where possible, and provide written confirmation without waiting for the completed EICR",
    },
    explanation:
      "C1 means danger is present now, so control and communication cannot wait for the reporting deadline. The inspector gives an immediate warning, takes effective make-safe action within their competence and authority, and records the notification in writing; a fixed 28-day period is not the response to immediate danger.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 18,
    promptSuffix:
      "An EICR identifies a Type AC RCD on a circuit feeding equipment that produces DC fault current (e.g. an EV charger or an inverter). The typical code is:",
    correctedPromptSuffix:
      "An EV charger can produce smooth DC residual current, but its only RCD is Type AC and neither the equipment nor a separate device provides the required DC residual-current protection. The typical code is:",
    answer: "C",
    explanation:
      "Electrical Safety First's current guidance gives C3 where a Type AC RCD is installed where Type A or another suitable type is required, including foreseeable electronic loads. C2 applies if testing confirms that the RCD itself does not operate correctly; the equipment data and any integral DC detection still need checking separately.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 19,
    promptSuffix:
      "An EICR observation that 'the disconnection time on a TN-S final circuit cannot be met because the measured Zs is significantly above the table value' is typically coded:",
    explanation:
      "A Zs value that cannot provide the required automatic disconnection leaves a potential shock danger and is normally C2. A very high reading reinforces the urgency but does not by itself become C1; C1 requires an immediate danger such as an accessible live part or accessible metal already at a dangerous voltage.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 1,
    promptSuffix: "BPG4 is published by the IET and gives:",
    correctedPromptSuffix:
      "Electrical Safety First publishes Best Practice Guide 4. What does that guide provide?",
    explanation:
      "Electrical Safety First publishes Best Practice Guide 4 with industry contributors including IET, NICEIC and NAPIT. It gives examples of observations and recommended classifications to promote consistent EICR decisions; it is guidance rather than legislation or a substitute for the inspector's judgement.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 3,
    promptSuffix: "The 28-day clock under ESS PRS Regs 2020 starts from:",
    correctedPromptSuffix:
      "For an existing rented-sector tenant, the landlord's 28-day deadline to supply the EICR starts from:",
    answer: "A",
    explanation:
      "The report must be supplied to an existing tenant within 28 days after the inspection and test, so the inspection date starts that clock. This is distinct from the deadline for written remedial confirmation, which runs after the remedial or investigative work is completed.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 4,
    promptSuffix:
      "An EICR Unsatisfactory result on a privately rented dwelling triggers a 28-day duty to:",
    options: {
      B: "Complete required remedial or investigative work within 28 days of inspection, or sooner if specified, then supply the required written confirmation within 28 days of completing that work",
    },
    explanation:
      "C1 and C2 trigger remedial work, while FI triggers the separate requirement for further investigative work under the rented-sector regulations. The work deadline is no later than 28 days from inspection unless the report sets a shorter period; after completion, written confirmation is supplied to the tenant and local housing authority within the separate prescribed period.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 7,
    promptSuffix:
      "An EICR identifies a final circuit where measured Zs is 1.3 Ω, BS 7671 tabulated maximum is 1.37 Ω. Applying the GN3 80% rule of thumb the result is:",
    options: {
      B: "Requires investigation: 80% of 1.37 Ω is approximately 1.10 Ω, so 1.3 Ω cannot be accepted solely because it is below the tabulated maximum",
    },
    explanation:
      "The 80% comparison allows for a conductor measured near ambient temperature becoming more resistive when hot. Here 1.37 × 0.8 is about 1.10 Ω, so the measured 1.3 Ω needs temperature correction, design data or another valid assessment; the rule is an investigation aid, not a new automatic statutory limit.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 8,
    promptSuffix: "Test sequences for periodic inspection are:",
    explanation:
      "The inspector selects a safe, effective order for the existing installation from its condition, use and agreed extent, using Guidance Note 3. Any work on or near live conductors must also satisfy all three EAWR regulation 14 conditions; merely saying dead testing is impracticable is not enough.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 10,
    promptSuffix:
      "A privately rented dwelling EICR is Unsatisfactory due to FI. Under ESS PRS 2020 the landlord must:",
    correctedPromptSuffix:
      "A privately rented dwelling EICR contains an FI observation. Under ESS PRS 2020 the landlord must:",
    options: {
      B: "Arrange the investigation and any consequent remedial work within 28 days of inspection, or sooner if specified, then obtain and supply the required written confirmation",
    },
    explanation:
      "Under the Amendment 4 EICR, FI is advisory and does not by itself make the overall assessment Unsatisfactory. The rented-sector regulations create a separate legal duty whenever the report requires further investigative work: it must normally be completed within 28 days of inspection, or sooner if specified, with any consequent remedial work and written confirmation handled as required.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 11,
    promptSuffix:
      "An EICR identifies an old porcelain fuse-carrier consumer unit with no overload protection and no RCDs in a privately rented dwelling. The inspector should code this:",
    explanation:
      "The decisive stated defect is absence of overload protection, which can allow conductors to overheat and is potentially dangerous, so C2 is appropriate. Porcelain fuse carriers, age and absence of RCDs are not a blanket C2 by themselves; each circuit's actual protective requirements and condition must be assessed separately.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 13,
    promptSuffix:
      "An EICR observation that 'main bonding conductors are sized 6 mm² where 10 mm² is required for the supply' is typically coded:",
    correctedPromptSuffix:
      "An existing main protective bonding conductor is 6 mm² where 10 mm² is now required. It is continuous, securely connected and shows no thermal damage. What is the current Best Practice Guide 4 treatment?",
    options: {
      D: "NC — no classification code for an intact conductor that is at least 6 mm²",
    },
    answer: "D",
    explanation:
      "Best Practice Guide 4 Issue 7.3 records this as NC: no classification code is recommended when the existing bonding conductor is at least 6 mm², remains effective and shows no thermal damage. C2 applies if it is below 6 mm², damaged, discontinuous or otherwise unable to perform its protective function.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 14,
    promptSuffix:
      "A privately rented dwelling EICR identifies one C2. The landlord arranges remedial work within 28 days. The follow-up document is:",
    options: {
      B: "Written confirmation from a qualified person that the remedial work has been carried out and the electrical-safety standards are met, supported by the certificate appropriate to the work",
    },
    explanation:
      "The rented-sector regulations require written confirmation of completion and compliance, supplied to the tenant and housing authority as required. The technical certificate depends on the work: a Minor Electrical Installation Works Certificate is not suitable for every repair, and a casual contractor letter without the required confirmation may be insufficient.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 19,
    promptSuffix:
      "A landlord under ESS PRS 2020 fails to commission an EICR. The local authority can:",
    options: {
      B: "Require compliance, arrange urgent remedial action in defined cases and recover costs, and impose the current financial penalty of up to £40,000 per breach",
    },
    explanation:
      "The 2025 amendment raised the maximum local-authority financial penalty from £30,000 to £40,000 per breach. That amendment took effect on 1 November 2025 for private tenancies and other general purposes, with 1 May 2026 commencement for the transitional pre-1 December 2025 registered-provider social tenancies. The authority can also require records, arrange qualifying remedial action and recover its costs.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 2,
    promptSuffix:
      "An EICR observation that 'an exposed conductive part is not connected to the CPC' is typically coded:",
    explanation:
      "Loss of the protective conductor means automatic disconnection cannot be relied upon after an insulation fault, so the condition is potentially dangerous and C2. A public, wet or special location increases risk but does not by itself make the metal immediately live; C1 needs evidence of an immediate danger.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 4,
    promptSuffix:
      "An EICR observation that 'a circuit has no main earth at the consumer unit' is typically coded:",
    answer: "B",
    explanation:
      "Absence of an effective means of earthing prevents reliable automatic disconnection and is potentially dangerous, which current Best Practice Guide 4 classifies C2. It becomes C1 only when an additional present condition creates immediate danger, such as accessible metal already at a dangerous potential.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 5,
    promptSuffix:
      "An EICR identifies a missing CPC at a metallic accessory. The typical code is:",
    explanation:
      "A Class I metallic accessory without a functioning CPC has lost a fault-protection measure and is C2. Its being easy to touch does not alone establish C1 because the metal is not necessarily live; C1 applies if testing or observation shows immediate dangerous voltage or exposed live parts.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 8,
    promptSuffix: "EICR codes derive from the IET BPG4 — they are:",
    correctedPromptSuffix:
      "EICR classifications are illustrated in Electrical Safety First Best Practice Guide 4. They are:",
    explanation:
      "Best Practice Guide 4 is published by Electrical Safety First with industry contributors. Its examples are non-statutory guidance that promote consistent C1, C2, C3 and FI judgements; the inspector still applies BS 7671 and professional judgement to the condition actually observed.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 10,
    promptSuffix: "An EICR is signed by:",
    explanation:
      "The person responsible for the inspection and testing signs the report as a competent professional statement of the findings. The client or duty holder receives the report and may agree its extent and limitations, but there is no general EICR requirement for a counter-signature that transfers inspection responsibility.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 11,
    promptSuffix:
      "An EICR identifies a CPC connected to a Class II appliance terminal. The typical code is:",
    correctedPromptSuffix:
      "A circuit CPC is safely terminated at the fixed accessory supplying a Class II appliance; the appliance remains correctly double-insulated and has no protective-conductor terminal. The typical EICR treatment is:",
    options: {
      D: "No code solely because the circuit retains a safely terminated CPC",
    },
    answer: "D",
    explanation:
      "Class II equipment does not depend on a CPC, but a CPC should still be run and safely terminated at the wiring point for circuit integrity and future use. There is no C3 where it is parked safely and the appliance's double-insulation construction has not been altered.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 12,
    promptSuffix:
      "An EICR identifies an installation that is wired to the 15th edition (pre-1992) cable colours. The typical code is:",
    options: {
      D: "No code for an otherwise sound installation using the earlier colour convention",
    },
    answer: "D",
    explanation:
      "An installation is not unsafe merely because all conductors use a former permitted colour convention. A warning notice is relevant where old and harmonised colours coexist and could confuse future work; incorrect identification of a protective or live conductor is a separate safety defect.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 16,
    promptSuffix:
      "An EICR observation that 'an installation does not meet current Section 715 IP rating requirements for an outdoor location' is typically coded:",
    correctedPromptSuffix:
      "Outdoor electrical equipment has an enclosure unsuitable for the rain and impact it receives, and moisture can reach basic insulation. The typical code is:",
    explanation:
      "Equipment must suit the external influences actually present. Where the inadequate enclosure permits moisture to threaten insulation, potential shock or fire danger is established and C2 is appropriate; C1 is reserved for an immediate condition such as accessible live parts. Section 715 is not a generic outdoor-location section.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 18,
    promptSuffix:
      "An EICR identifies a plastic consumer unit on a TN-C-S domestic installation, with signs of localised heat damage at one of the breakers. Typical code:",
    explanation:
      "Local heat damage or charring indicates a developing fire risk and is normally C2 under current Best Practice Guide 4. Plastic construction and TN-C-S do not determine the code; C1 requires a separate immediate danger such as accessible live parts or active burning that cannot be controlled.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 19,
    promptSuffix:
      "An EICR identifies a sub-main where the protective conductor has not been adequately sized for fault current. Typical code:",
    explanation:
      "A protective conductor unable to withstand the prospective fault energy may fail before the protective device disconnects, so C2 applies. The scale of undersizing affects urgency and remedial design but does not alone make C1; immediate danger must be observed, not inferred from size wording.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 1,
    promptSuffix:
      "The scope of Building Regulations Part P (England) is restricted to:",
    options: {
      B: "Electrical installation work in, or associated with, dwellings in England; only specified categories of that work require notification",
    },
    explanation:
      "Part P's safety requirement applies to electrical installation work in or associated with dwellings, including relevant parts of their land. 'Notifiable work' describes which jobs must follow a notification route; it is not the boundary of the substantive Part P requirement and Part P is not the law creating periodic EICRs.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 2,
    promptSuffix: "ESS PRS 2020 financial penalty per breach can reach:",
    options: { C: "£40,000 (the current maximum per breach)" },
    explanation:
      "The 2025 amendment raised the maximum local-authority financial penalty from £30,000 to £40,000 per breach. It commenced on 1 November 2025 for private tenancies and other general purposes, and on 1 May 2026 for the transitional pre-1 December 2025 registered-provider social tenancies. The current exam answer is therefore £40,000 without attaching one blanket commencement date to every landlord.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 4,
    promptSuffix:
      "An EICR identifies an old metal-clad consumer unit in a domestic kitchen with no signs of damage. Typical code:",
    options: {
      D: "No code for age, metal construction or kitchen location alone; assess the actual protective measures and condition",
    },
    answer: "D",
    explanation:
      "A sound metal consumer-unit enclosure is not an improvement defect merely because it is old or located in a kitchen. Missing required RCD protection, inadequate earthing, damage, accessible live parts or other specific defects are classified separately; AFDD or SPD recommendations cannot be inferred from the enclosure description.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 8,
    promptSuffix:
      "An EICR observation that 'one circuit has been altered with non-compliant cable colours; otherwise satisfactory' is typically coded:",
    correctedPromptSuffix:
      "One altered circuit introduces harmonised conductor colours into an installation that also retains the earlier colours, but the required mixed-colours warning notice is absent. The typical code is:",
    explanation:
      "The conductors are functional and correctly identified at their terminations, so the missing warning is an improvement matter rather than present danger and C3 is appropriate. A conductor used for the wrong protective or live function would be assessed more seriously from its actual shock risk.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 10,
    promptSuffix: "Periodic test sequences for an in-service installation are:",
    explanation:
      "The competent inspector plans a safe order suited to the existing installation and uses Guidance Note 3 rather than copying the initial-verification sequence mechanically. Live work is not simply a 'documented exception': every instance must satisfy EAWR regulation 14 and use suitable precautions.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 11,
    promptSuffix:
      "An EICR identifies a missing earth electrode on a TT installation. Typical code:",
    answer: "B",
    explanation:
      "A TT installation without an effective electrode lacks a reliable earth-fault path, so current Best Practice Guide 4 treats the means of earthing as potentially dangerous and C2. Immediate isolation may still be the necessary control, but C1 requires evidence of present immediate danger rather than assuming it from the missing electrode alone.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 13,
    promptSuffix:
      "An EICR identifies an underrated supply cable that has been overloaded for the connected demand. Typical code:",
    explanation:
      "A cable carrying more current than its effective capacity is at risk of insulation damage and fire, so the condition is C2. Charring and heat damage are also normally C2 in Best Practice Guide 4; C1 is reserved for a separate immediate danger such as exposed live conductors or an active uncontrolled fire.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 15,
    promptSuffix:
      "Periodic inspection of a swimming pool plant room finds an unbonded metallic enclosure. Typical code:",
    correctedPromptSuffix:
      "A Class I metallic enclosure in a swimming-pool plant room has no effective CPC connection. The typical code is:",
    explanation:
      "The enclosure is an exposed-conductive-part and depends on its CPC for automatic disconnection, so absence of that connection is potentially dangerous and C2. Pool bonding requirements are assessed from whether other metal is exposed- or extraneous-conductive; not every metal enclosure is automatically a supplementary-bonding point.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 16,
    promptSuffix:
      "An EICR observation that 'the duty holder has not provided documentation of past inspections' is typically coded:",
    options: {
      D: "No classification code solely for missing historic records; record the information gap and assess the present installation",
    },
    answer: "D",
    explanation:
      "EICR classifications communicate present electrical danger or a current safety improvement, not punish record-keeping. Missing previous reports may justify a wider inspection and should be noted, but C1, C2, C3 or FI requires an observation about the installation's current safety.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 19,
    promptSuffix:
      "An EICR identifies a privately rented dwelling with one C1 (immediate danger) and three C3s. Under ESS PRS 2020 the landlord must:",
    options: {
      A: "Have the C1 danger controlled immediately, complete the required work within the report's shorter period or the 28-day statutory maximum, supply written confirmation, and consider the C3 improvements",
    },
    explanation:
      "The statutory outer limit must never be presented as permission to leave a C1 danger for 28 days. The inspector warns and makes safe or isolates immediately; the landlord then completes and documents the required work within the earlier applicable deadline, while C3 alone does not make the report unsatisfactory.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 3,
    promptSuffix:
      "A polarity check at a socket reads OK on the test instrument. The defensible interpretation is:",
    explanation:
      "The indication supports line at L and neutral at N at that socket, subject to the tester's limitations and a verified earth reference. Reversed final-circuit polarity is C2 because single-pole switching or fusing may leave internal parts connected to line even when equipment appears switched off; neutral is not simply a 'live pin'.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 6,
    promptSuffix:
      "An EICR identifies a Type AC RCD on a circuit feeding an EV charger. The typical code is:",
    answer: "C",
    explanation:
      "Current Electrical Safety First guidance gives C3 where a Type AC RCD is used where Type A or another suitable type is required. The EV equipment data and any built-in 6 mA DC detection must also be checked; C2 applies if the installed RCD is tested and confirmed not to operate correctly, not merely from its type marking.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 7,
    promptSuffix:
      "An installation has been altered by adding a new circuit. Documentation for the altered work is:",
    options: {
      B: "An Electrical Installation Certificate for the new circuit, separate from any EICR",
    },
    explanation:
      "Adding a new circuit requires an Electrical Installation Certificate with its schedules. A Minor Electrical Installation Works Certificate is only for an addition or alteration that does not extend to providing a new circuit, while an EICR reports the condition of existing work rather than certifying its construction.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 10,
    promptSuffix:
      "The inspector finds a TN-C-S installation where the gas service has lost its main bonding due to recent gas-meter work. Typical code:",
    explanation:
      "Loss of effective main protective bonding to a confirmed extraneous-conductive-part is potentially dangerous and C2. A possible broken PEN increases concern and calls for checks, but C1 requires evidence of immediate danger such as a dangerous touch voltage already present.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 14,
    promptSuffix:
      "Periodic inspection of an installation that has been modified without records — the inspector should:",
    options: {
      B: "Inspect and test the as-found work within the agreed scope, record the missing information, and classify only any actual danger or specific unresolved safety concern found",
    },
    explanation:
      "An EICR cannot retrospectively issue the original installation certificate, but missing records help determine the inspection extent. Lack of paperwork alone is not C3 or FI: C2 follows an observed potential danger, and FI is used only for a specific concern whose danger cannot yet be determined.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 15,
    promptSuffix:
      "An EICR identifies an installation where the consumer unit has Type AC RCBOs but the loads include LED drivers and electronic dimmers. Typical code:",
    answer: "C",
    explanation:
      "Electronic equipment can produce residual-current waveforms for which Type AC is unsuitable, so current Electrical Safety First guidance recommends C3 where Type A or another type is required or foreseeable. If testing confirms that a device itself does not operate correctly, that separate failure is C2.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 17,
    promptSuffix:
      "An EICR Schedule of Test Results entry shows R1+R2 = 0.42 Ω, Zs = 0.46 Ω. The implied Ze is approximately:",
    explanation:
      "The arithmetic difference is 0.04 Ω, so that is the implied value if the readings are comparable. It is only an approximation: live Zs can include parallel earth paths and temperature or test-method differences, so the result does not by itself prove a TN-C-S supply or diagnose a parallel path.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 19,
    promptSuffix:
      "An EICR finds a domestic installation where the bonding to the gas pipe is in 6 mm² but the supply requires 10 mm² (TN-C-S, supply earth >35 mm² CSA). Typical code:",
    correctedPromptSuffix:
      "An existing 6 mm² main protective bond to a confirmed metallic gas service is smaller than the present requirement. It is continuous, secure and free of thermal damage. What is the current Best Practice Guide 4 treatment?",
    options: {
      D: "NC — no classification code for an intact conductor that is at least 6 mm²",
    },
    answer: "D",
    explanation:
      "Best Practice Guide 4 Issue 7.3 recommends NC where the existing main protective bonding conductor is at least 6 mm², continuous, secure and undamaged even though it is smaller than today's requirement. A conductor below 6 mm², thermal damage or ineffective bonding is a C2 condition.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 20,
    promptSuffix: "An RCD tested at 5× IΔn must trip within:",
    correctedPromptSuffix:
      "Under current BS 7671 field verification, a general non-delay RCD tested with alternating current at IΔn must operate within:",
    options: {
      A: "40 ms",
      B: "300 ms",
    },
    answer: "B",
    explanation:
      "BS 7671 simplified field verification in Amendment 2: one alternating-current instrument test at the rated residual operating current is used, with a maximum 300 ms for a general non-delay RCD. The former routine 5×IΔn and 40 ms field-test table was deleted; other tests may still assist diagnosis or product assessment.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 22,
    promptSuffix:
      "An EICR records 'no protective conductor at one socket; circuit otherwise continues to operate'. Typical code:",
    explanation:
      "A socket without effective earthing cannot provide fault protection to Class I equipment and is C2 even though loads still operate. A wet or public location increases exposure but does not automatically create C1; immediate danger must be present, such as accessible metal already at a dangerous voltage.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 23,
    promptSuffix:
      "The inspector cannot complete an RCD trip-time test because the residual-current load is too high (large CPD leakage). The defensible response is:",
    options: {
      B: "Investigate and reduce or account for the standing leakage, record any test limitation precisely, and use C2 for an established danger or FI only for a specific concern whose danger cannot yet be determined",
    },
    explanation:
      "Accumulated protective-conductor current can cause unwanted operation and distort testing, so the inspector measures and traces it rather than silently omitting verification. A limitation records missing evidence; FI is not automatic and is reserved for an unresolved possible danger that cannot be classified within the agreed inspection.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 24,
    promptSuffix:
      "An EICR identifies an electrically-heated underfloor heating mat where the IR is below the minimum. Typical code:",
    explanation:
      "A confirmed sub-minimum insulation reading indicates potential shock or fire danger and is C2. Bare feet and location increase the consequence, but C1 requires evidence of immediate danger such as accessible conductive material already live, not merely the possibility of a future fault.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 25,
    promptSuffix:
      "A 6 A Type B MCB has a tabulated maximum Zs of approximately:",
    options: { A: "7.28 Ω" },
    explanation:
      "BS 7671 Table 41.3 gives about 7.28 Ω for a 6 A Type B circuit-breaker, incorporating the minimum-voltage factor. The simple 230/(5 × 6) calculation gives 7.67 Ω and omits that factor; an ambient-temperature measured comparison is lower again, commonly about 80% of the table value.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 26,
    promptSuffix:
      "An EICR observes a non-RCD-protected lighting circuit in a domestic installation. Cable is partially concealed in the wall. Typical code:",
    answer: "C",
    explanation:
      "Current Best Practice Guide 4 assigns C3 to absence of additional RCD protection for domestic lighting and to concealed cables less than 50 mm deep where no additional circumstance creates potential danger. C2 can apply where routing, damage or another defect establishes an actual potential danger.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 27,
    promptSuffix: "An EICR has a single FI observation. The overall result:",
    options: {
      B: "Satisfactory under the Amendment 4 model form, but the specific FI concern still needs prompt investigation",
    },
    explanation:
      "Amendment 4 makes FI an advisory classification, so FI alone does not make the overall assessment Unsatisfactory. It is not permission to ignore the concern: the named issue still needs prompt investigation, and in a covered rented dwelling the separate statutory investigative-work duty can apply.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 29,
    promptSuffix:
      "A 230 V circuit measures L-E IR = 1.0 MΩ exactly. The defensible response is:",
    options: {
      A: "Record it as comfortably satisfactory and carry out no further checks because it meets 1 MΩ",
    },
    explanation:
      "The reading meets the BS 7671 minimum but is at its boundary, so repeat and investigate it with loads and sensitive equipment correctly disconnected. BS 7671 is not itself a 'legal minimum'; the code follows the verified condition, with C2 where sub-minimum insulation establishes potential danger and FI only for a specific unresolved concern.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 5,
    promptSuffix:
      "An EICR finds an installation where the installer has used a screw connection on a stranded conductor without a bootlace ferrule. Typical code:",
    options: {
      D: "No code solely for the missing ferrule if the terminal manufacturer permits the conductor and the strands are secure and undamaged",
    },
    answer: "D",
    explanation:
      "A ferrule is required only where needed by the terminal or equipment instructions and conductor construction. The inspector checks clamping, stray or severed strands, pull-out and heating; an unreliable or damaged connection can be C2, but a sound manufacturer-approved screw termination is not automatically C3.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 6,
    promptSuffix:
      "An EICR records 'all RCDs trip well within their permitted times'. The defensible test method for 30 mA RCDs at 5× IΔn:",
    correctedPromptSuffix:
      "Under current BS 7671 field verification, what alternating-current test and maximum time apply to a general non-delay 30 mA RCD?",
    options: {
      A: "30 mA at IΔn, maximum 300 ms",
    },
    explanation:
      "Amendment 2 removed the former routine 5×IΔn field-test table. Current BS 7671 verifies a general non-delay RCD with an alternating test current at its rated residual operating current, here 30 mA, and expects operation within 300 ms; other tests may be diagnostic rather than the minimum field requirement.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 7,
    promptSuffix:
      "An EICR identifies a corroded earth electrode on a TT installation. Typical code:",
    options: {
      B: "C2 if corrosion has made the electrode or connection unreliable or test results show fault protection is ineffective; otherwise classify the actual condition found",
    },
    explanation:
      "Surface appearance does not determine the classification by itself. The inspector checks the clamp, conductor, mechanical integrity, electrode resistance and RCD protection; C2 applies when the means of earthing is unreliable, while C1 needs an additional immediate danger rather than merely a high reading.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 8,
    promptSuffix: "Ra (electrode resistance) on a TT installation should be:",
    correctedPromptSuffix:
      "Ignoring other constraints, what upper value follows from RA × IΔn ≤ 50 V for a TT installation protected by a 30 mA RCD?",
    options: {
      A: "About 1667 Ω, although a value above 200 Ω may be unstable and requires investigation",
    },
    explanation:
      "Rearranging RA × IΔn ≤ 50 V gives 50/0.03 = 1666.7 Ω. That is a theoretical touch-voltage boundary, not a design target: Guidance Note 3 warns that electrode resistance above about 200 Ω may be unstable, and the electrode and RCD still require effective verification.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 11,
    promptSuffix:
      "Periodic inspection of a privately rented dwelling uncovers a recent DIY alteration with no certificate. The inspector should:",
    options: {
      A: "Inspect and test the alteration within the EICR scope, classify its present safety, record the missing original certificate, and recommend the appropriate regularisation or remedial route",
    },
    explanation:
      "A later inspector cannot issue the original installer's certificate retrospectively merely because the work passes an EICR. Missing documents may require Building Control or scheme advice, but EICR codes come from present danger or a specific unresolved concern, not from the DIY label alone.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 14,
    promptSuffix:
      "An EICR finds a TN-C-S installation where the supply earth has been disconnected at the consumer unit. The installation continues to function. Typical code:",
    answer: "B",
    explanation:
      "The disconnected earthing conductor removes reliable fault protection but loads can continue to operate, making the condition potentially dangerous and C2 under current Best Practice Guide 4. The installation should normally be isolated or made safe urgently; C1 needs evidence of immediate danger, not operation without an earth alone.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 16,
    promptSuffix:
      "An EICR identifies a circuit feeding a freezer in a privately rented dwelling on the same RCD as other circuits. The freezer trips once a week causing food loss. Typical observation:",
    options: {
      D: "Investigate the recurring trip and standing leakage; shared RCD protection alone has no EICR code where it is effective, while any identified fault is classified on its safety consequence",
    },
    answer: "D",
    explanation:
      "Current Best Practice Guide 4 lists one RCD protecting an entire installation as NC where the protection works. Repeated operation needs fault-finding because it may reveal leakage or a defective load; separating the freezer can improve continuity, but nuisance and food loss alone do not create an automatic C3.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 17,
    promptSuffix:
      "An EICR finds a circuit where the protective conductor has been broken inside a junction box. Typical code:",
    answer: "B",
    explanation:
      "A broken CPC removes reliable fault protection for Class I equipment and is C2. Immediate isolation is often the sensible control, but the classification becomes C1 only if a separate fault has already made an accessible part live or otherwise creates danger present now.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 18,
    promptSuffix:
      "An EICR identifies a circuit with extra-low voltage equipment (12 V LEDs) where the isolating transformer is rated 230/12 V but is unfused on the secondary. Typical code:",
    options: {
      D: "No automatic code: verify the transformer's inherent or primary-side protection, secondary conductor capacity and manufacturer's instructions",
    },
    answer: "D",
    explanation:
      "Many safety isolating LED supplies are inherently short-circuit-proof, electronically limited or protected so that a separate secondary fuse is unnecessary. C2 applies if the actual arrangement can overheat conductors or cause fire; absence of a visible secondary fuse alone is not a universal C3.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 19,
    promptSuffix:
      "An EICR records 'an RCD trips at exactly its rated residual current'. Per BS EN 61008 the test current at 1× IΔn:",
    options: {
      D: "Must operate within the applicable maximum time; a general non-delay RCD is verified within 300 ms",
    },
    answer: "D",
    explanation:
      "An RCD must not operate at 0.5IΔn and must operate by IΔn; the fact that a ramp test may trip anywhere between those currents does not mean operation at IΔn is optional. Current BS 7671 field verification uses an alternating current at IΔn with a 300 ms maximum for a general non-delay device.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 20,
    promptSuffix:
      "An EICR finds a TN-S installation with the sheath of the incoming cable used as the means of earthing. The sheath shows signs of corrosion. Typical code:",
    explanation:
      "Corrosion that makes the distributor's sheath earth unreliable is potentially dangerous and C2, with prompt referral to the distributor and any installation consequence recorded. A failed disconnection calculation remains C2; C1 requires an immediate danger such as an accessible part already live.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 21,
    promptSuffix:
      "The voltage drop limit for a final circuit on a domestic installation, per BS 7671 Appendix 4:",
    correctedPromptSuffix:
      "For an installation supplied directly from a public low-voltage system, what Appendix 4 voltage-drop value applies to lighting from the origin to the load?",
    explanation:
      "Appendix 4 gives 3% for lighting supplied from a public low-voltage system, which is 6.9 V at 230 V. Other uses have a 5% value, so the original broad phrase 'a final circuit' did not have one universal answer.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 24,
    promptSuffix:
      "An EICR identifies a circuit feeding a fish tank pump in a domestic installation, with no RCD. Typical code:",
    options: {
      D: "No automatic code from the words 'fish tank pump'; check the socket or fixed connection, manufacturer instructions, location and whether the absence creates actual potential danger",
    },
    answer: "D",
    explanation:
      "A fish tank is not a BS 7671 special location by name. A general socket unlikely to supply outdoor equipment normally attracts C3 for absent additional RCD protection, while a specific wet-access or equipment risk may justify C2; the facts must establish the classification.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 25,
    promptSuffix:
      "A circuit's R1+R2 has been measured cold at 0.65 Ω. To estimate Zs, the inspector must:",
    explanation:
      "The basic estimate is Ze plus R1+R2. For comparison with a Chapter 41 value at conductor operating temperature, use the applicable temperature correction or the common 80% ambient-measurement screening value; cmin is a minimum supply-voltage factor, not the temperature correction for R1+R2.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 26,
    promptSuffix:
      "An EICR finds an installation where the consumer unit's main switch has been bypassed. Typical code:",
    answer: "B",
    explanation:
      "Bypassing the main switch removes the normal means of isolation and is potentially dangerous, so C2 and urgent correction are appropriate. It is not automatically C1 while all live parts remain enclosed and no immediate danger is present; emergency inconvenience alone does not satisfy the C1 definition.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 1,
    promptSuffix:
      "An EICR finds a domestic kitchen socket with no RCD protection where the socket is used to power a kettle. Typical code:",
    answer: "C",
    explanation:
      "Current Best Practice Guide 4 gives C3 for a socket without additional RCD protection where it is unlikely to supply outdoor mobile equipment, does not serve a bath/shower location and the inspector finds no other potential danger. Ordinary kettle use in a kitchen does not automatically change that to C2.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 3,
    promptSuffix:
      "An EICR records 'measurements taken from the consumer unit; downstream measurements not taken at every accessory'. This sampling approach is:",
    options: {
      A: "Potentially defensible if the downstream inspection is a representative, risk-based sample and its exact extent and basis are recorded",
    },
    explanation:
      "BS 7671 does not prescribe a typical 10-to-20-percent accessory sample or a universal 100-percent consumer-unit formula. The inspector selects enough representative points for the installation's age, use, condition and records, directly assesses unique safety measures and expands the extent whenever findings reduce confidence.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 4,
    promptSuffix:
      "An EICR finds an installation where the supply cable has been damaged by a roof leak. Insulation is visibly compromised. Typical code:",
    answer: "B",
    explanation:
      "Moisture damage and compromised insulation create potential shock and fire danger, so C2 is appropriate and the supply may need urgent isolation. C1 requires the further fact that live conductors are accessible, conductive parts have become live or another immediate danger is present.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 5,
    promptSuffix:
      "An EICR finds an RCD that does not meet its 5× IΔn trip time but trips within 300 ms at 1× IΔn. Typical code:",
    correctedPromptSuffix:
      "A general non-delay RCD takes longer than 300 ms when field-tested with alternating current at IΔn. The typical code is:",
    explanation:
      "Current BS 7671 uses the IΔn instrument test and a 300 ms maximum for a general non-delay RCD. Failure means the protective operation cannot be relied upon and is C2; the former routine 5×IΔn, 40 ms field-test requirement was deleted by Amendment 2.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 8,
    promptSuffix:
      "An EICR finds a domestic installation where the supply is via a TT system but no main RCD is present. Typical code:",
    answer: "B",
    explanation:
      "Where the TT electrode impedance means overcurrent devices cannot provide fault protection, absence of the required RCD is potentially dangerous and C2. The defect needs urgent make-safe action, but current Best Practice Guide 4 does not make absence of effective earthing or RCD fault protection C1 without a separate immediate danger.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 13,
    promptSuffix:
      "An EICR finds an installation where the protective conductor in T+E cable has been used as a current-carrying conductor (e.g. as a switched line). Typical code:",
    answer: "B",
    explanation:
      "Using the CPC as a switched line removes or corrupts the protective-conductor function and can leave an inadequately insulated live conductor, so C2 applies. C1 is reserved for the case where that conductor or connected metal is already accessible and live, not inferred automatically from misuse.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 14,
    promptSuffix:
      "An RCD trip-time test result on a 30 mA RCD reads 28 ms at 5× IΔn. Per BS EN 61008:",
    correctedPromptSuffix:
      "A general non-delay 30 mA RCD operates in 28 ms during the current BS 7671 alternating-current field test at IΔn. The result is:",
    options: {
      A: "Pass — comfortably within the 300 ms maximum",
    },
    explanation:
      "A 28 ms result at the rated residual operating current is well within the current 300 ms field-verification maximum for a general non-delay RCD. The older routine 5×IΔn/40 ms test is no longer the BS 7671 minimum field test, though product or diagnostic testing may use other currents.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 15,
    promptSuffix:
      "An EICR finds a TN-C-S installation with main bonding to a metallic gas pipe in 6 mm². The supply earth is 16 mm². Typical code:",
    correctedPromptSuffix:
      "A TN-C-S installation has an existing 6 mm² main protective bond to a confirmed metallic gas service. It is continuous, secure and has no thermal damage, although 10 mm² is now required. What is the current Best Practice Guide 4 treatment?",
    options: {
      D: "NC — no classification code for an intact conductor that is at least 6 mm²",
    },
    answer: "D",
    explanation:
      "Best Practice Guide 4 Issue 7.3 recommends NC for an existing main protective bonding conductor that is at least 6 mm², continuous, secure and free from thermal damage. C2 applies where it is below 6 mm², damaged, discontinuous or otherwise ineffective.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 16,
    promptSuffix:
      "An EICR finds a missing fire-alarm cable retention clip in a corridor. Typical code:",
    options: {
      D: "Do not assign an EICR classification solely from this wording; record or refer it for assessment under the fire-alarm system standard and actual cable-support condition",
    },
    answer: "D",
    explanation:
      "Fire-alarm system support and survival are assessed under BS 5839 and the defined specialist scope. An EICR can report an electrical wiring-system danger it actually observes, but a single missing alarm clip is not automatically C3; absence of fire-alarm provision is normally an observation outside EICR coding.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 17,
    promptSuffix:
      "Periodic inspection finds an EV charger circuit with a Type AC RCD upstream. Typical code:",
    answer: "C",
    explanation:
      "Electrical Safety First's current guidance recommends C3 where Type AC is installed where Type A or another suitable type is required or foreseeable. Check the charger's manufacturer instructions and integral DC detection separately; C2 applies where testing confirms the RCD itself fails to operate correctly.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 18,
    promptSuffix:
      "An EICR records 'CPC connected to Class II appliance terminal — workmanship issue'. Typical code:",
    options: {
      D: "No code where the circuit CPC is safely terminated at the fixed wiring point and the appliance's Class II construction remains intact",
    },
    answer: "D",
    explanation:
      "Class II equipment has no protective-conductor terminal and relies on double insulation, while the circuit CPC should remain safely terminated for wiring integrity and future equipment. A dangerous improvised connection or damage is coded from its actual effect, but a safely parked CPC is not automatically C3.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 22,
    promptSuffix: "An RCD test sequence — the inspector should test:",
    options: {
      A: "Operate the integral test button and perform the current BS 7671 alternating-current instrument test at IΔn, recording the result and a maximum 300 ms for a general non-delay device",
    },
    explanation:
      "The integral button checks the device through its internal test circuit; the instrument test at rated residual current verifies operating time. Amendment 2 deleted the former routine 5×IΔn/40 ms field-test requirement, so teaching button, 1× and 5× as a mandatory sequence is obsolete.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 23,
    promptSuffix:
      "An EICR records 'an extension lead used permanently for fixed appliance'. Typical code:",
    options: {
      D: "No EICR code from permanence alone; inspect the fixed socket and flag the appliance/lead arrangement separately, coding only a fixed-installation danger within scope",
    },
    answer: "D",
    explanation:
      "An extension lead is portable equipment rather than fixed wiring, and continuous use is not by itself an EICR C3. Damage, overloading or unsuitable flexible cable needs immediate appliance-safety action and may be noted, while the EICR classification applies only to a relevant fixed-installation defect.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 24,
    promptSuffix:
      "An EICR finds a circuit where the CPC is sized smaller than required by Reg 543. Typical code:",
    explanation:
      "A CPC that fails the adiabatic or minimum-size requirement may not withstand fault energy and is C2. Extreme undersizing does not automatically make it C1; an immediate danger, such as accessible metal already live, must be present rather than predicted from conductor size alone.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 25,
    promptSuffix:
      "Periodic inspection finds an installation where the consumer unit is mounted such that arc fault discharge could affect a wooden surface above it. Typical code:",
    options: {
      D: "No code from nearby wood alone where the unit is sound and not under wooden stairs or in a sole escape route; classify actual heat, damage or location-specific risk",
    },
    answer: "D",
    explanation:
      "Best Practice Guide 4 assigns C3 to a combustible consumer unit under wooden stairs or within a sole escape route, and NC when it is elsewhere with no defect. It does not assign C2 merely because a wooden surface is nearby; unsatisfactory connections or heat damage are separate C2 findings.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 26,
    promptSuffix:
      "An EICR finds an installation where the supply has been changed from TN-S to TN-C-S without bonding upgrade. Typical code:",
    correctedPromptSuffix:
      "After a TN-S supply was converted to TN-C-S, an existing 6 mm² main bonding conductor remains continuous, secure and free of thermal damage although 10 mm² is now required. The typical code is:",
    options: {
      D: "NC — no classification code for an intact conductor that is at least 6 mm²",
    },
    answer: "D",
    explanation:
      "Changing the supply from TN-S to TN-C-S does not by itself make the intact 6 mm² bond dangerous: Best Practice Guide 4 Issue 7.3 recommends NC on the stated facts. C2 applies where the conductor is below 6 mm², damaged, discontinuous or otherwise ineffective.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 27,
    promptSuffix:
      "An EICR records 'continuity of CPC measured at 0.7 Ω on a circuit fed by 1.5 mm² T+E with a 20 m length'. The defensible interpretation is:",
    correctedPromptSuffix:
      "A 20 m circuit uses 1.5 mm² line and 1.0 mm² CPC conductors. Its measured R1+R2 is 0.70 Ω. The defensible interpretation is:",
    options: {
      A: "Compare with roughly 0.60 Ω at 20 °C plus lead, joint and temperature tolerances; 0.70 Ω is not an automatic fail but should be checked if outside the justified expected range",
    },
    explanation:
      "At 20 °C, copper resistance is about 12.1 mΩ/m for 1.5 mm² and 18.1 mΩ/m for 1.0 mm², giving about (12.1 + 18.1) × 20 / 1000 = 0.604 Ω. The original 0.4-to-0.5 Ω estimate ignored the smaller CPC; assess lead zero, temperature, length and joints before coding.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 28,
    promptSuffix:
      "An EICR finds a circuit with an overloaded protective device (e.g. 32 A breaker on 2.5 mm² cable rated 24 A in its current method). Typical code:",
    explanation:
      "A protective device rated above the cable's effective current-carrying capacity can permit damaging overload and is C2. Evidence of past heat damage reinforces the C2 and remedial urgency; C1 requires an additional immediate danger rather than being an automatic escalation for charring.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 2,
    promptSuffix:
      "An EICR finds an installation where the only earth electrode is a single earth rod with measured Ra = 50 Ω. The 30 mA RCD trip time is 28 ms at 5× IΔn. Typical observation:",
    correctedPromptSuffix:
      "An EICR finds a TT installation with one sound earth rod measuring RA = 50 Ω. Its 30 mA general non-delay RCD operates in 28 ms during the current instrument test at IΔn. Typical observation:",
    explanation:
      "RA × IΔn is 50 × 0.03 = 1.5 V, comfortably below 50 V, and 28 ms is within the 300 ms field-test maximum. One electrode is not forbidden; the inspector also checks stability, condition and protective-conductor continuity rather than relying on an obsolete routine 5× test.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 4,
    promptSuffix:
      "Periodic inspection of a privately rented dwelling — the inspector finds an installation that has had a partial recent rewire (kitchen and bathroom only) with no certificate. The defensible response is:",
    options: {
      A: "Inspect and test the as-found work within the EICR scope, classify present safety, record the missing certificate and advise on any appropriate regularisation or remedial route",
    },
    explanation:
      "The EICR provides a current condition assessment but cannot recreate or retrospectively sign the original installer's certificate. Missing paperwork may affect the extent and call for Building Control or scheme advice, while the EICR code follows actual danger or a specific unresolved concern.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 6,
    promptSuffix:
      "An EICR finds an installation where a circuit's polarity test reveals reversed polarity at one socket only. Typical code:",
    explanation:
      "Incorrect polarity at a final accessory is C2. It can leave single-pole switches or fuses controlling the neutral side so internal line-connected parts remain energised when the equipment appears off; the issue is not that a neutral pin has simply become a separate line supply.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 8,
    promptSuffix:
      "An EICR finds an installation where the IR test result on a 230 V circuit is exactly 1 MΩ. The defensible response is:",
    options: {
      A: "Repeat and investigate the boundary reading with loads correctly disconnected, then classify from the verified condition rather than raising FI solely because the value equals the minimum",
    },
    explanation:
      "Exactly 1 MΩ meets the BS 7671 minimum but leaves no measurement margin, so checks for connected equipment, moisture, deterioration and instrument uncertainty are sensible. FI is reserved for a specific possible danger whose significance cannot be determined; the number alone does not automatically create FI.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 10,
    promptSuffix:
      "An EICR finds an installation where the consumer unit is on a wooden backboard with a plastic CU in front of it. Typical code:",
    options: {
      D: "No code for those materials alone if the unit is sound and not under wooden stairs or in a sole escape route",
    },
    answer: "D",
    explanation:
      "A combustible consumer unit attracts C3 only where it is under wooden stairs or within a sole route of escape, and is NC elsewhere when sound. A wooden backboard does not create an automatic C2; damaged connections, overheating or accessible live parts are classified separately.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 11,
    promptSuffix:
      "An RCD on a TT installation has its trip-time test deferred because of nuisance-trip risk. The defensible response is:",
    options: {
      A: "Investigate the standing leakage and plan the earliest safe instrument test; record the exact limitation, using FI only where a specific possible danger cannot be determined without the missing test",
    },
    explanation:
      "The TT arrangement commonly depends on the RCD for fault protection, so verification should not be postponed casually. A limitation states what was not proved and why, but it is not automatically FI; an observed RCD failure is C2, while FI is reserved for a particular unresolved safety concern.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 13,
    promptSuffix:
      "An EICR records 'all RCD tests passed; verified through built-in test buttons and 5× IΔn trip times'. The defensible read is:",
    options: {
      B: "Insufficient for current BS 7671 field verification because the required alternating-current instrument test at IΔn is not recorded",
    },
    answer: "B",
    explanation:
      "The integral button checks the internal tripping function, while current BS 7671 requires the field instrument test at rated residual operating current and a 300 ms maximum for a general non-delay RCD. A 5× result may be diagnostic, but it does not replace the required IΔn record.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 15,
    promptSuffix:
      "Periodic inspection finds a circuit where the protective device is a BS 3036 rewireable fuse. Typical code:",
    options: {
      D: "No code for the device type alone where the correct fuse wire and carrier provide adequate circuit protection",
    },
    answer: "D",
    explanation:
      "Best Practice Guide 4 specifically notes that rewireable fuses can continue to provide satisfactory service when they protect the circuit adequately. Oversized fuse wire, damaged carriers, inadequate breaking capacity or another actual defect is classified on its risk; age and rewirability alone are not C3.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 17,
    promptSuffix:
      "An EICR finds an installation where one MCB has a permanent damage to its toggle (cracked, but the breaker still operates). Typical code:",
    correctedPromptSuffix:
      "An MCB toggle is cracked and cannot be operated reliably for switching or isolation. Live parts remain enclosed. The typical code is:",
    explanation:
      "Unreliable manual operation compromises switching and isolation, creating potential danger and C2. A superficial mark with full reliable operation would need a different assessment; C1 would require immediate danger such as accessible live parts, not the cracked handle alone.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 22,
    promptSuffix:
      "Periodic inspection finds an installation with multiple SPDs at the consumer unit and at sub-distribution boards. Typical observation:",
    options: {
      A: "Satisfactory where the SPD types, locations, leads and coordination comply with the manufacturers' data and the installation design",
    },
    explanation:
      "Cascaded SPDs can be correct, but simply having several devices does not prove coordination. The inspector checks their type, status indicators, overcurrent protection, conductor routing and the manufacturers' required separation or coordination so one stage does not interfere with another.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 24,
    promptSuffix:
      "An EICR finds an installation where the means of isolating the supply has been compromised (e.g. main switch handle missing). Typical code:",
    answer: "B",
    explanation:
      "Loss of a reliable means of isolation is potentially dangerous and C2, requiring urgent correction. A missing handle is not automatically danger present while live parts remain enclosed and the installation is operating normally; C1 needs a separate immediate shock, burn or fire danger.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 25,
    promptSuffix:
      "Periodic inspection of a kitchen finds a socket-outlet with no RCD protection in a domestic installation. The cable is concealed in the wall at 80 mm depth. Typical code:",
    answer: "C",
    explanation:
      "The 80 mm depth removes the less-than-50-mm concealed-cable issue. For an ordinary domestic socket that is not likely to supply outdoor mobile equipment, does not serve a bath/shower location and has no other potential danger, current Best Practice Guide 4 gives C3 for absent additional RCD protection.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 26,
    promptSuffix:
      "An EICR records 'two of seven sampled lighting points have rust on the metallic accessory backbox. The CPC is connected and continuous; no sign of fault penetration.' Typical code:",
    options: {
      D: "No classification code from superficial rust alone; record maintenance needs and expand inspection if corrosion may impair the enclosure or CPC",
    },
    answer: "D",
    explanation:
      "With a continuous CPC, intact basic insulation and no loss of enclosure integrity, the stated rust has not established danger or a BS 7671 safety improvement code. Penetrating corrosion, unreliable earthing or accessible live parts would change the assessment, and repeated rust justifies checking the wider environment.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 2,
    promptSuffix: "Earth fault loop impedance (Zs) is measured under:",
    explanation:
      "A direct loop-impedance measurement is an energised line-to-earth test with normal protective bonding connected. It is not always necessary: Zs can often be verified from Ze and R1+R2 or other safe evidence, and any direct live measurement must first satisfy EAWR regulation 14 rather than being performed as an automatic routine.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 4,
    promptSuffix:
      "An EICR finds a domestic installation where the supply earth has been disconnected and the installation continues to function via a back-feed through a bonded gas pipe. Typical code:",
    answer: "B",
    explanation:
      "The installation has no reliable formal means of earthing and is depending on an extraneous service, so current Best Practice Guide 4 classifies it C2 and urgent isolation or repair is likely. C1 requires evidence that the gas pipe or another accessible part is already at a dangerous voltage or presents another immediate danger.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 7,
    promptSuffix:
      "An EICR finds an installation where a 32 A Type B circuit is used to feed a 7 kW EV charger. Typical observation:",
    options: {
      A: "Investigate — about 30.4 A can suit a 32 A dedicated circuit, but verify cable capacity, load control, EV protective measures and either a suitable Type B RCD or Type A/F with 6 mA DC detection as required",
    },
    explanation:
      "Power divided by voltage gives about 30.4 A, so the breaker rating is plausible but does not prove the design. Cable installation method, continuous load, voltage drop, PME/open-PEN protection, manufacturer instructions and residual-current protection all matter; Type A alone is not a substitute where 6 mA smooth-DC detection is required.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 12,
    promptSuffix: "The earthing conductor on a TT installation is sized:",
    options: {
      A: "By BS 7671 Section 543 using Table 54.7 or an adiabatic calculation, also meeting the applicable minimum size and corrosion/mechanical-protection rules for any buried conductor",
    },
    explanation:
      "A TT earthing conductor is not always 6 mm², 10 mm² or 16 mm² and is not simply copied from the largest CPC. Its fault energy, material, installation and mechanical/corrosion protection determine the size under Section 543 and Table 54.1; the actual design evidence must be checked.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 14,
    promptSuffix: "Polarity on a final circuit must be verified at:",
    options: {
      A: "At the origin and at the relevant accessible points needed by the verification scope; periodic inspection may use a justified representative sample that expands on defects",
    },
    explanation:
      "Initial verification establishes polarity throughout new work, while a periodic EICR uses the agreed risk-based extent and sampling. It must not claim every accessory was tested unless that occurred, and any reversed result requires wider investigation of the affected circuit or group.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 16,
    promptSuffix:
      "An EICR identifies an installation where the only RCD is at the consumer unit (single 30 mA across the whole installation). All circuits trip together on any fault. Typical observation:",
    options: {
      C: "No classification code solely for one effective RCD protecting the installation; note any continuity-of-supply recommendation separately",
    },
    answer: "C",
    explanation:
      "Best Practice Guide 4 Issue 7.3 lists one RCD protecting the entire installation as NC where the device and protection operate correctly. Dividing circuits across RCBOs can reduce unwanted consequences, but loss of convenience or freezer supply does not make the existing arrangement an automatic C3.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 17,
    promptSuffix: "Earth fault loop impedance test is carried out at:",
    options: {
      A: "Only as a justified energised line-to-earth measurement using a suitable loop tester and safe method; never by bridging the protective device",
    },
    explanation:
      "A loop tester derives impedance from the voltage response to a controlled test current. Bridging an MCB, fuse or RCD defeats a protective measure and is unsafe; use an appropriate no-trip method where needed, consider calculation from dead-test data, and satisfy EAWR regulation 14 before direct live testing.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 19,
    promptSuffix:
      "An EICR finds an installation where the earth electrode is corroded but Ra still measures 80 Ω with a 30 mA RCD. Typical observation:",
    options: {
      B: "Do not code from the word 'corroded' alone; assess mechanical integrity, the connection, stability and trend, assigning C2 only if the means of earthing is unreliable",
    },
    answer: "B",
    explanation:
      "An 80 Ω result is compatible with the 30 mA RCD criterion, but a visual concern still deserves cleaning, inspection and a stability assessment. Surface corrosion with a sound electrode is not automatically C2; structural loss, an unreliable clamp or unstable resistance can establish potential danger.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 20,
    promptSuffix:
      "An EICR finds an installation where supplementary equipotential bonding in a bathroom is missing between the metallic radiator and the metallic wash basin pipework. Typical code:",
    options: {
      D: "First determine whether those pipes are extraneous-conductive-parts and whether the bathroom conditions permit omission; no code is justified merely because two metal items are not linked",
    },
    answer: "D",
    explanation:
      "Metal pipework is not automatically extraneous, and BS 7671 permits supplementary bonding to be omitted where all required circuits have ADS and 30 mA RCD protection and main bonding is effective. C2 applies only when supplementary bonding is actually required and absent.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 21,
    promptSuffix:
      "An IR test on a 230 V circuit returns 0.6 MΩ between L and CPC. Defensible response:",
    correctedPromptSuffix:
      "After connected loads are removed and the test method is verified, a 230 V circuit still measures 0.6 MΩ between live conductors connected together and the CPC. The EICR classification is:",
    options: {
      D: "C2 — the confirmed value is below the 1 MΩ minimum and establishes potential danger",
    },
    answer: "D",
    explanation:
      "Electrical Safety First's current technical guidance assigns C2 where the verified insulation resistance between live conductors connected together and Earth is below 1 MΩ. Investigation locates the defect and informs repair, but FI is unnecessary once the potentially dangerous insulation condition itself is established.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 1,
    promptSuffix:
      "An EICR finds a 16 mm² supply earth on a TN-C-S installation with 6 mm² main bonding. The defensible code is:",
    correctedPromptSuffix:
      "A TN-C-S installation has an existing 6 mm² main protective bonding conductor where 10 mm² is now required. It is continuous, secure and shows no thermal damage. What is the current Best Practice Guide 4 treatment?",
    options: {
      D: "NC — no classification code for an intact conductor that is at least 6 mm²",
    },
    answer: "D",
    explanation:
      "Best Practice Guide 4 Issue 7.3 recommends NC where an existing main protective bonding conductor is at least 6 mm², continuous, secure and thermally undamaged. A conductor below 6 mm², thermal damage or evidence that the bonding is ineffective warrants C2.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 3,
    promptSuffix: "Earth fault loop impedance is measured to verify:",
    options: {
      A: "The earth-fault current is sufficient for the protective device to disconnect within the required time, using If ≈ U0/Zs and the device characteristic",
    },
    explanation:
      "Zs determines the prospective earth-fault current, approximately U0/Zs, which is compared with the protective device's time-current characteristic to verify automatic disconnection. Multiplying Zs by that same fault current simply returns the source voltage and does not calculate the touch voltage across a person or a particular protective conductor.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 5,
    promptSuffix:
      "A 6 A Type B MCB has a tabulated Zs maximum of approximately 7.67 Ω. Applying the 80% rule of thumb:",
    correctedPromptSuffix:
      "A 6 A Type B MCB has a BS 7671 Table 41.3 maximum Zs of approximately 7.28 Ω. Applying the 80% ambient-measurement rule of thumb gives:",
    options: { A: "About 5.82 Ω" },
    explanation:
      "Table 41.3 incorporates the minimum-voltage factor, giving about 7.28 Ω rather than the unadjusted 230/(5 × 6) result of 7.67 Ω. Multiplying 7.28 by 0.8 gives 5.824 Ω for the common ambient-temperature screening value; a detailed correction can assess borderline results.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 6,
    promptSuffix:
      "An IR test result of 0.4 MΩ on a domestic ring final circuit is:",
    explanation:
      "First remove connected loads and confirm the test arrangement so electronics or leakage paths do not create a false result. If live conductors connected together to Earth still measure 0.4 MΩ, the value is below the 1 MΩ minimum and current Electrical Safety First guidance assigns C2; diagnosis then locates the repair.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 8,
    promptSuffix:
      "An EICR finds an installation where the broken neutral on a TN-C-S supply could cause exposed services to rise to line potential. The protective measure is:",
    options: {
      A: "Correct main bonding limits voltage differences between bonded parts, but it does not make an open PEN safe relative to true Earth; apply the open-PEN measures required for the particular installation or equipment",
    },
    explanation:
      "During an open PEN event, bonding can make connected metal rise together and reduce differences between it, yet all bonded metal may still be at a dangerous voltage to true Earth. RCDs generally cannot detect that condition; EV charging and other exposed applications need the applicable TT arrangement, open-PEN device or other BS 7671 measure.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 10,
    promptSuffix:
      "On a 32 A radial socket circuit fed by 4.0 mm² T+E, the typical R1+R2 for a 25 m run is approximately:",
    options: { A: "About 0.42 Ω at 20 °C" },
    explanation:
      "Using about 4.61 mΩ/m for the 4 mm² line and 12.1 mΩ/m for the 1.5 mm² CPC gives (4.61 + 12.1) × 25 / 1000 = 0.418 Ω. Lead resistance, actual length and conductor temperature explain modest variation; the original 0.30-to-0.35 Ω range was too low.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 12,
    promptSuffix: "An RCD test sequence on a 30 mA RCBO at 1× IΔn:",
    options: {
      A: "Must operate within the applicable maximum time; a general non-delay RCBO is field-verified within 300 ms at IΔn",
    },
    explanation:
      "A ramp test may find operation between 0.5 and 1.0IΔn, but at the full rated residual current the device must operate. Current BS 7671 uses one alternating-current field test at IΔn with a 300 ms maximum for a general non-delay device; the former routine 5×/40 ms test is obsolete.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 13,
    promptSuffix:
      "An EICR finds a circuit feeding an outdoor swimming pool. Typical RCD requirement:",
    options: {
      A: "30 mA additional protection where Section 702 requires it, using an RCD type suitable for the connected load, together with the other zone, SELV, bonding and IP measures that apply",
    },
    explanation:
      "Pool protection is not satisfied by naming Type AC or Type A in isolation. The inspector verifies the precise zone and circuit, the residual-current waveform and equipment instructions, plus the Section 702 restrictions, equipotential bonding and enclosure requirements relevant to that installation.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 14,
    promptSuffix:
      "An EICR identifies a 20 A Type C MCB with a measured Zs of 0.95 Ω. Tabulated maximum is 1.15 Ω. The result is:",
    correctedPromptSuffix:
      "A 20 A Type C MCB has a Table 41.3 maximum Zs of about 1.09 Ω and a measured ambient Zs of 0.95 Ω. The initial assessment is:",
    options: {
      A: "Investigate or apply a detailed correction: 80% of 1.09 Ω is about 0.87 Ω, so 0.95 Ω is above the rule-of-thumb value",
    },
    explanation:
      "The cmin-adjusted Table 41.3 value is about 1.09 Ω, not the unadjusted 230/(10 × 20) = 1.15 Ω. Its 80% screening value is about 0.87 Ω; exceeding that does not automatically fail the circuit, but requires the permitted temperature/design assessment rather than a casual pass.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 15,
    promptSuffix:
      "Earth fault loop impedance Ze on a domestic TT supply is measured at 250 Ω. The defensible response:",
    options: {
      A: "Investigate and improve the electrode: 250 Ω may meet RA × IΔn ≤ 50 V with a 30 mA RCD, but a value above 200 Ω may be unstable",
    },
    explanation:
      "The touch-voltage calculation gives 7.5 V at 30 mA, but BS 7671 guidance warns that an electrode resistance above 200 Ω may not remain stable with soil drying, freezing, corrosion or damage. The inspector should not describe improvement as merely optional without addressing that trend and stability risk.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 19,
    promptSuffix:
      "An EICR finds an installation where supplementary bonding in a kitchen is missing between the metal sink and the metal pipework. Typical code (current edition where 30 mA RCD covers all socket circuits):",
    options: {
      D: "No code merely because a kitchen sink and pipe are not linked; determine whether either is an extraneous-conductive-part and whether any protective bonding is actually required",
    },
    answer: "D",
    explanation:
      "A kitchen is not a Section 701 bath/shower location, and ordinary sinks do not require supplementary bonding by name. Metal connected to an incoming Earth potential may require main bonding as an extraneous-conductive-part, while isolated internal metalwork does not become a C3 simply because no green-and-yellow link is fitted.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 20,
    promptSuffix:
      "A radial 32 A circuit fed by 6 mm² T+E: typical R1+R2 for a 30 m run, where 6 mm² T+E has a 2.5 mm² CPC:",
    options: { A: "Approximately 0.32 Ω at 20 °C" },
    explanation:
      "Using about 3.08 mΩ/m for the 6 mm² line and 7.41 mΩ/m for the 2.5 mm² CPC gives (3.08 + 7.41) × 30 / 1000 = 0.315 Ω. Test method does not make the same conductors fall to 0.21 Ω; only temperature, length and tolerances adjust the expectation.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 25,
    promptSuffix: "An RCD's effective protection at 5× IΔn requires:",
    correctedPromptSuffix:
      "Under current BS 7671 field verification, a general non-delay RCD tested with alternating current at IΔn requires:",
    options: { B: "Operation within 300 ms" },
    answer: "B",
    explanation:
      "Amendment 2 deleted the old routine 5×IΔn/40 ms field-test table. Effectiveness is now verified with one alternating-current test at the rated residual operating current and a maximum 300 ms for a general non-delay RCD; additional product or diagnostic tests do not replace that requirement.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 2,
    promptSuffix:
      "An EICR finds an installation where the consumer unit is on a wooden enclosure, plastic, with no metalwork separation between the breakers and the wood. Typical code (current edition):",
    options: {
      D: "No code for those materials alone if the unit is sound and not under wooden stairs or within a sole escape route",
    },
    answer: "D",
    explanation:
      "Current Best Practice Guide 4 gives C3 to a combustible consumer unit under wooden stairs or within a sole escape route, and NC where it is elsewhere without an actual defect. It does not make a plastic unit on timber C2 merely because current new-work rules prefer a non-combustible enclosure.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 3,
    promptSuffix:
      "On a ring final circuit, the inspector cross-connects L and CPC for Step 3 of the test. The expected reading at each socket is:",
    options: {
      A: "Readings follow the calculated ring pattern and are near (r1+r2)/4 around the midpoint; they can vary when line and CPC resistances differ, and spurs add their own resistance",
    },
    explanation:
      "With equal conductor resistances the cross-connected readings are substantially similar, but 2.5/1.5 mm² cable normally rises toward a maximum near the electrical midpoint and falls again. There is no single 'furthest socket' on a ring, so compare the full pattern and investigate outliers rather than applying one number mechanically.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 4,
    promptSuffix:
      "An EICR finds an installation where the supply earth is broken at the cut-out (i.e. only the neutral is intact). The installation continues to function. Typical code:",
    answer: "B",
    explanation:
      "Loss of the distributor's earthing facility leaves the installation without a reliable means of earthing and is potentially dangerous, so C2 is the current Best Practice Guide 4 classification. The inspector urgently controls use and refers the supply defect to the DNO; C1 requires evidence of immediate danger such as accessible metal already live.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 6,
    promptSuffix:
      "On a 32 A Type B MCB, the BS 7671 Table 41.3 maximum Zs at full operating temperature is approximately:",
    explanation:
      "Table 41.3 gives approximately 1.37 Ω. The unadjusted 230/(5 × 32) calculation is 1.4375 Ω; the published value is lower because it incorporates the minimum-voltage factor, not simply because it has been rounded down.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 7,
    promptSuffix:
      "An EICR identifies a ring final circuit where the R1+R2 readings are 0.5 Ω at most sockets but 2.0 Ω at one socket. The most likely interpretation:",
    options: {
      A: "The point may be on a long or multiple spur, but verify the route and terminations because resistance ratio alone cannot prove a spur off a spur",
    },
    explanation:
      "A spur adds its line and CPC resistance to the ring reading, so a high result is consistent with a long or multiple spur. The value depends on conductor size and length and can also reflect a poor joint; trace the wiring and complete ring-continuity checks before deciding its configuration or code.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 8,
    promptSuffix:
      "An EICR observation that 'the consumer unit is fed via a fused spur at 13 A from a ring final circuit' is typically coded:",
    options: {
      D: "No automatic code if the 13 A FCU, supply cable, total demand and downstream protection are correctly coordinated",
    },
    answer: "D",
    explanation:
      "A fused connection unit limits the downstream load to its fuse rating, and a small distribution arrangement can be safe when conductors, enclosure and devices are coordinated. It may be unsuitable for the expected demand, but inability to draw every downstream device's summed rating is not itself a C2.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 10,
    promptSuffix:
      "An EICR identifies a circuit where the earthing conductor is undersized (4 mm² where the supply earth is 16 mm² and CPCs are 2.5 mm²). Typical code:",
    options: {
      D: "Do not code from those three sizes alone; verify the earthing conductor by Table 54.7 or an adiabatic calculation and the applicable minimum/protection rules",
    },
    answer: "D",
    explanation:
      "Earthing-conductor adequacy depends on the associated live conductor, fault current, protective-device clearing time, material and mechanical/corrosion protection. A 4 mm² value may be inadequate, but the size of one downstream CPC and a stated 'supply earth' do not complete that assessment; confirmed inadequacy is C2.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 12,
    promptSuffix:
      "An EICR finds an installation where the loop tester reads Zs = 0.18 Ω at the consumer unit (approximately equal to Ze) and Zs = 1.20 Ω at the furthest point of a 32 A Type B circuit. Typical observation:",
    explanation:
      "The 1.20 Ω ambient result exceeds the common 80% screening value of about 1.10 Ω, so it needs temperature correction, design data and connection checks. It is not automatically proof of inadequate disconnection because the full Table 41.3 value is 1.37 Ω and a detailed permitted correction may support compliance.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 13,
    promptSuffix:
      "An EICR finds an installation where the consumer unit's earth bar is not linked to the supply's earthing terminal. Typical code:",
    answer: "B",
    explanation:
      "The disconnected earth bar leaves circuit protective conductors without a reliable means of earthing, which current Best Practice Guide 4 classifies C2. Urgent isolation or repair may be needed, but C1 requires evidence of immediate danger rather than the potential danger created by the missing link alone.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 14,
    promptSuffix:
      "Voltage drop on a 230 V single-phase circuit is calculated using:",
    correctedPromptSuffix:
      "When Appendix 4 provides a tabulated cable value in mV/A/m, which expression gives the circuit voltage drop in volts?",
    explanation:
      "Multiply the tabulated millivolts-per-ampere-per-metre value by design current and route length, then divide by 1000. The general identity V = IR is also valid when the circuit resistance at the relevant temperature is known, so the original unqualified wording made two choices mathematically true.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 15,
    promptSuffix:
      "An EICR finds an installation where the supplementary bonding to the bath is connected at the bath but not at the supplementary bonding terminal in the bathroom. Typical code:",
    correctedPromptSuffix:
      "Supplementary bonding is required in a bathroom because the omission conditions are not met, but the installed conductor does not connect the required exposed- and extraneous-conductive-parts together. Typical code:",
    explanation:
      "Where supplementary bonding is actually required, an incomplete conductor fails to create the local equipotential zone and is C2. A bath does not need bonding merely because it is metal, and there need not be one named 'bathroom bonding terminal'; the inspector verifies the required parts and continuity.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 16,
    promptSuffix:
      "An EICR records 'IR test results: all circuits >100 MΩ at 500 V DC'. The defensible interpretation:",
    explanation:
      "Readings above 100 MΩ are comfortably greater than the 1 MΩ minimum when the circuits were prepared and tested correctly. High values are normal for dry sound insulation; the original reference to 'values that low' was reversed, and connected electronic loads should normally be isolated rather than used to explain a result.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 17,
    promptSuffix:
      "An EICR records 'no functional earth electrode on a TT installation; the only earth path is via a metallic water pipe'. Typical code:",
    answer: "B",
    explanation:
      "A water pipe is not a permitted means of earthing and the TT installation lacks a reliable electrode, so the condition is C2 under current Best Practice Guide 4. It requires urgent make-safe action; C1 applies only if a separate immediate danger such as accessible metal at a dangerous potential is present.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 19,
    promptSuffix:
      "An EICR finds a 6 A radial circuit feeding a smoke detector network. Measured R1+R2 = 0.9 Ω, Ze = 0.20 Ω, RCD = 30 mA. Type B 6 A table Zs = 7.67 Ω. The result:",
    options: {
      A: "Satisfactory on the stated impedance data: calculated Zs is about 1.10 Ω, well below the current 7.28 Ω table value and its roughly 5.82 Ω 80% screening value",
    },
    explanation:
      "Ze + R1+R2 gives about 1.10 Ω. Current Table 41.3 gives approximately 7.28 Ω for a 6 A Type B device after the minimum-voltage factor, and 80% is about 5.82 Ω; the old 7.67/6.13 figures omitted that factor.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 20,
    promptSuffix:
      "An EICR finds an installation where a circuit is protected by an MCB rated higher than the cable it protects (e.g. 32 A device on cable rated 24 A). Typical code:",
    explanation:
      "The stated arrangement can permit sustained overload beyond the cable's effective capacity, so C2 applies. Existing overheating or charring strengthens the urgency and remains normally C2 under Best Practice Guide 4; C1 needs a separate immediate danger such as exposed live parts or active fire.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 22,
    promptSuffix:
      "An EICR finds an installation where supplementary bonding has been installed in a kitchen but the kitchen has no extraneous-conductive-parts that need bonding. The defensible response:",
    options: {
      A: "No code for unnecessary bonding that is safely installed; classify only an actual mis-termination, diverted-current issue or other safety defect",
    },
    explanation:
      "A sound redundant conductor does not justify C3 merely because it might confuse someone. Verify that it is not carrying unintended current and has not compromised another terminal; otherwise it can remain without an EICR classification because kitchens do not require supplementary bonding by name.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 24,
    promptSuffix:
      "An EICR finds an installation where a junction box has been buried in a wall with no access. Typical code:",
    answer: "C",
    explanation:
      "A conventional joint that is not accessible for inspection, testing and maintenance is generally an improvement matter and C3 where there is no evidence of danger. A maintenance-free connection installed in a suitable enclosure can comply without access; heat damage, looseness or another actual potential danger would justify C2.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 2,
    promptSuffix:
      "An EICR records 'all CPCs are continuous and the R1+R2 readings agree with the calculated values for the cable lengths'. The defensible interpretation:",
    options: {
      A: "The results support satisfactory CPC continuity and expected circuit resistance within the tested scope, but do not by themselves prove every termination is sound",
    },
    explanation:
      "Agreement with calculated values is good evidence that no large series resistance appears in the measured paths. It cannot exclude every intermittent joint, thermal defect or unsampled termination, so the inspector combines it with visual inspection, connection checks where appropriate and the recorded extent.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 6,
    promptSuffix:
      "An EICR records 'the ring final circuit r1 / rn / r2 readings are 0.40 / 0.42 / 0.68 Ω'. The 2.5 mm² T+E ratios:",
    options: {
      A: "r2/r1 is 1.7, close to the expected resistance ratio because the CPC is 1.5 mm² while line and neutral are 2.5 mm²; the readings are consistent with that cable",
    },
    explanation:
      "The smaller 1.5 mm² CPC has about 1.67 times the resistance of each 2.5 mm² live conductor, and 0.68/0.40 is 1.7. Similar r1 and rn plus that ratio supports the stated cable construction, subject to temperature, connections and parallel-path checks.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 7,
    promptSuffix:
      "An EICR finds a circuit where the IR test result is 12 MΩ on a 230 V circuit. The defensible response:",
    explanation:
      "A correctly prepared circuit reading 12 MΩ is comfortably above the 1 MΩ minimum and is satisfactory. Age or dampness cannot be inferred from that number alone, and sensitive connected loads should be disconnected or the test method adjusted rather than being assumed to explain the value.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 9,
    promptSuffix:
      "An EICR identifies a TT installation where the earth electrode is in good condition but Ra has gradually increased from 50 Ω (5 years ago) to 250 Ω now. Typical observation:",
    options: {
      A: "It may meet RA × IΔn ≤ 50 V, but the fivefold rise and value above 200 Ω require investigation and electrode improvement rather than waiting automatically for the next cycle",
    },
    explanation:
      "At 30 mA the theoretical touch-voltage product is 7.5 V, yet BS 7671 guidance warns that electrode resistance above 200 Ω may be unstable. The pronounced deterioration suggests drying, corrosion, connection damage or a test difference that should be resolved now and followed by an evidence-based next interval.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 10,
    promptSuffix:
      "An EICR finds an installation where the consumer unit has a fully functional 30 mA RCBO on each circuit. Typical observation:",
    options: {
      A: "Satisfactory where each RCBO's type, rating and operation suit its circuit; per-circuit protection limits the circuits lost after a fault",
    },
    explanation:
      "An RCBO per circuit provides overcurrent and residual-current protection with good division of the installation. 'Discrimination' properly describes coordinated upstream/downstream protective operation and is not proved merely by separate RCBOs, so ratings, RCD type and any upstream device still need checking.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 11,
    promptSuffix:
      "An EICR finds an installation where the supplementary bonding in a sauna has been installed correctly but the conductor is exposed to the heat from the heater. Typical observation:",
    options: {
      A: "Verify the conductor and insulation temperature rating at that position; no code if suitable, C3 for a genuine safety improvement, or C2 where heat has created potential danger",
    },
    explanation:
      "Sauna temperature zones and the cable manufacturer's rating decide suitability, not a blanket statement that all PVC is C3. A conductor cannot be both 'compliant but PVC' and require a code solely for being PVC; inspect routing, insulation condition, joints and expected ambient temperature.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 18,
    promptSuffix: "On a TN-C-S installation, broken-PEN risk requires:",
    options: {
      A: "Adequate bonding to limit differences between bonded parts, while recognising that an open PEN can raise all of them above true Earth and may require specific open-PEN protective measures",
    },
    explanation:
      "Main bonding does not eliminate open-PEN touch voltage: it can make services and exposed parts rise together, yet a person touching them and true Earth may still receive a shock. The applicable EV, outdoor or other special arrangement may need TT separation, an open-PEN detection device or another permitted measure.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 19,
    promptSuffix:
      "An EICR finds an installation where the loop tester reads Zs at the origin of 0.18 Ω. The supply is TN-C-S. The defensible interpretation:",
    correctedPromptSuffix:
      "A safely obtained external earth fault loop impedance Ze at the origin is 0.18 Ω on a TN-C-S supply. The defensible interpretation is:",
    explanation:
      "A genuine Ze of 0.18 Ω is below the commonly declared 0.35 Ω maximum and supports the supply-earth assessment. A loop reading taken with installation bonding and parallel paths connected is Zs at that point and must not automatically be relabelled Ze; the safe test method and DNO data matter.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 20,
    promptSuffix:
      "On a 6 A Type B MCB, the table Zs maximum (BS 7671 Table 41.3) is approximately:",
    options: { A: "7.28 Ω" },
    explanation:
      "Table 41.3 incorporates the minimum-voltage factor and gives approximately 7.28 Ω for a 6 A Type B breaker. The simple 230/(5 × 6) result of 7.67 Ω omits that factor; the common 80% ambient screening value is about 5.82 Ω.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 23,
    promptSuffix:
      "An EICR records 'the inspector measured Zs at three points on a 32 A ring: at the consumer unit, at the midpoint, and at the furthest point. All readings agree within 5%'. Defensible interpretation:",
    options: {
      A: "The Zs values are consistent and may support the assessment, but three similar readings do not prove ring continuity; complete the appropriate end-to-end and cross-connection checks",
    },
    explanation:
      "Parallel paths can make ring readings relatively similar, but borrowed paths or a broken conductor can also mask faults. A ring has no single radial 'furthest point', and sound topology is verified by the ring-final continuity procedure and expected resistance pattern, not three loop readings alone.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 24,
    promptSuffix:
      "An EICR identifies a TT installation where the earth electrode is bonded to the consumer unit's earth bar via a 10 mm² conductor with mechanical protection. Typical observation:",
    options: {
      A: "Potentially satisfactory if 10 mm² meets the Section 543/Table 54.7 or adiabatic design and all applicable buried-conductor and mechanical/corrosion rules",
    },
    explanation:
      "Mechanical protection alone does not create a universal 10 mm² answer, although that size is commonly ample in a domestic TT installation. Verify material, fault current and clearing time, minimum size, buried section, corrosion protection, continuity and termination before recording it satisfactory.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 25,
    promptSuffix: "The fundamental purpose of the EICR is:",
    options: {
      A: "To document whether the existing installation is satisfactory for continued service against the current safety standard, without treating every difference from the latest edition as a defect",
    },
    explanation:
      "The EICR records scope, limitations, inspection and test evidence, and classifies danger or recommended safety improvement as found on the day. It is not a certificate that old work fully complies with every current design rule, nor does it replace the duty holder's legal maintenance duties.",
  },
] as const satisfies readonly ExamQuestionCorrection[];
