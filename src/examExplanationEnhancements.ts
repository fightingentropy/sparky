import { eighteenthEditionCorrections } from "./examCorrections/eighteenthEdition";
import { eighteenthEditionPart2Corrections } from "./examCorrections/eighteenthEditionPart2";
import { ecsHealthSafetyCorrections } from "./examCorrections/ecsHealthSafety";
import { periodicInspectionCorrections } from "./examCorrections/periodicInspection";
import { periodicInspectionPart2Corrections } from "./examCorrections/periodicInspectionPart2";
import { periodicInspectionPart3Corrections } from "./examCorrections/periodicInspectionPart3";
import { periodicInspectionPart4Corrections } from "./examCorrections/periodicInspectionPart4";
import type { ExamQuestionCorrection } from "./examCorrections/types";
import { wiringRegulationsHomeworkCorrections } from "./examCorrections/wiringRegulationsHomework";
import type { Exam, ExamQuestion } from "./exams/types";

const ALL_EXAM_QUESTION_CORRECTIONS: readonly ExamQuestionCorrection[] = [
  ...eighteenthEditionCorrections,
  ...eighteenthEditionPart2Corrections,
  ...wiringRegulationsHomeworkCorrections,
  ...ecsHealthSafetyCorrections,
  ...periodicInspectionCorrections,
  ...periodicInspectionPart2Corrections,
  ...periodicInspectionPart3Corrections,
  ...periodicInspectionPart4Corrections,
  {
    examId: "initial-verification",
    variantId: "quiz-29745",
    questionNumber: 6,
    promptSuffix:
      "What precaution is required before carrying out a test of external earth fault loop impedance (Ze) so as to avoid danger to users of an installation?",
    options: {
      B: "Lock off the main switch and keep the installation circuits isolated",
    },
    explanation:
      "Ze is measured at the origin with the incoming supply available, but the installation circuits must remain isolated so users cannot be exposed to energised downstream equipment. The main switch is secured against reconnection while the skilled tester controls access to the live origin terminals.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29745",
    questionNumber: 8,
    promptSuffix:
      "Which situation will not require a label stating 'Safety Electrical Connection – Do Not remove'?",
    explanation:
      "Safety labels are used at earthing and bonding connections whose removal could defeat a protective measure. The main earthing terminal inside the consumer unit is the defined termination point and does not require this additional label in the situation described.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29745",
    questionNumber: 11,
    promptSuffix:
      "What action must be taken when a loose connection is found to a pipe during the inspection of a main protective bonding conductor termination?",
    explanation:
      "A loose main protective bonding connection can allow a metal pipe to remain at a dangerous voltage during an electrical fault. The connection must be tightened or remade, then inspected and tested before the installation is certified.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29745",
    questionNumber: 14,
    promptSuffix:
      "The calibration of an Earth Fault Loop Impedance tester reveals that the instrument is outside of specification. Regular accuracy checks on the instrument have not been carried out for six months. What immediate action must be taken by the contractor?",
    answer: "B",
    explanation:
      "There is no documented accuracy check showing when the tester last remained within specification. Treat the last known-good calibration as the boundary: review the work tested since then and repeat any measurements whose validity cannot be established after the instrument has been corrected.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29745",
    questionNumber: 29,
    promptSuffix: "What is verified by carrying out a ½ IΔn test on an RCD?",
    correctedPromptSuffix:
      "During an optional ½ IΔn diagnostic test on a general non-delay RCD, what result is expected?",
    options: { A: "The RCD should not trip" },
    explanation:
      "At half its rated residual operating current, a general non-delay RCD should remain closed. This can be a useful diagnostic check, but it is no longer one of the specific RCD field tests required by BS 7671; the required test is carried out at IΔn.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29745",
    questionNumber: 30,
    promptSuffix:
      "What is the main purpose for carrying out a 5 IΔn test on a 30 mA RCD protecting 13 A socket-outlets in a dwelling?",
    correctedPromptSuffix:
      "What did the former 5 IΔn field test on a 30 mA RCD protecting socket-outlets verify?",
    explanation:
      "The former 5 IΔn test checked the 40 ms operating-time criterion associated with 30 mA additional protection. Under current BS 7671 practice, the prescribed field test is performed at IΔn with an AC test current; a 5 IΔn result may still be used diagnostically but is not the current mandatory field test.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29745",
    questionNumber: 31,
    promptSuffix:
      "What would be the x1 test current for an RCD having the maximum rating when providing fire protection?",
    answer: "C",
    explanation:
      "Where an RCD is selected for fire protection, current IET guidance specifies a rated residual operating current not exceeding 300 mA. An x1 test therefore uses 300 mA for the largest permitted rating; 500 mA is above that limit.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29745",
    questionNumber: 32,
    promptSuffix:
      "What are the correct test tripping times for the 30 mA BE EN 61009 RCBOs when tested at 1x IΔn and 5x IΔn?",
    correctedPromptSuffix:
      "What is the maximum operating time when a 30 mA BS EN 61009 RCBO is tested at IΔn using an AC test current?",
    options: {
      A: "40 ms",
      B: "200 ms",
      C: "300 ms",
      D: "400 ms",
    },
    explanation:
      "For the BS 7671 field test, a general non-delay RCBO tested at its rated residual operating current IΔn using an AC test current must operate within 300 ms. The former 40 ms at 5 IΔn check is no longer a prescribed field-test requirement.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29745",
    questionNumber: 39,
    promptSuffix:
      "The water heater circuit is wired in 6mm² with a 2.5mm² cpc conductors, and is protected by a 32 A BS 88-2 fuse. What is the maximum permitted measured earth fault loop impedance value for compliance with BS 7671?",
    answer: "A",
    explanation:
      "The Chapter 41 maximum Zs for the stated 32 A BS 88-2 fuse and disconnection condition is 0.99 Ω. A measured value is compared with 80% of that tabulated value to allow for conductor heating: 0.99 Ω × 0.8 = 0.792 Ω, which rounds to 0.79 Ω.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29747",
    questionNumber: 25,
    promptSuffix:
      "During a continuity of ring final conductors test, 10 sockets give a R1+R2 reading of 0.68Ω but one socket gives a reading of 0.92Ω. This could indicate:",
    answer: "D",
    explanation:
      "The higher reading at one socket is consistent with that point being supplied by a spur, because the spur adds conductor length to the cross-connected R1+R2 path. A missing cpc would give no continuity, a short circuit would pull the reading down, and a high-resistance joint would need further investigation rather than being identified from this pattern alone.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29706",
    questionNumber: 2,
    promptSuffix:
      "The correction factor for cables installed in free air with a 90°C thermosetting insulation and an ambient temperature of 40°C is",
    answer: "A",
    explanation:
      "Table 4B1 gives an ambient-temperature factor of 0.91 for a 90 °C thermosetting cable in 40 °C air. The factor can also be checked from √((90 − 40) / (90 − 30)) ≈ 0.913, which rounds to 0.91. A factor of 0.96 corresponds to 35 °C ambient.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29706",
    questionNumber: 59,
    promptSuffix:
      "The correction factor for cables installed in free air with 90°C thermosetting insulation and an ambient temperature of 40°C is",
    options: { D: "0.91" },
    explanation:
      "Table 4B1 gives an ambient-temperature factor of 0.91 for a 90 °C thermosetting cable in 40 °C air. The factor can also be checked from √((90 − 40) / (90 − 30)) ≈ 0.913, which rounds to 0.91. A factor of 0.96 corresponds to 35 °C ambient.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29713",
    questionNumber: 49,
    promptSuffix:
      "BS7671 Wiring Regulations apply to the design, erection and verification of?",
    answer: "A",
    explanation:
      "BS 7671 includes electrical installations in agricultural and horticultural premises. Aircraft equipment and railway traction systems are specialist exclusions, while aspects of mines already covered by statutory regulations are outside its scope.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29725",
    questionNumber: 35,
    promptSuffix:
      "BS7671 Wiring Regulations apply to the design, erection and verification of?",
    options: {
      C: "Electrical installations in agricultural and horticultural premises",
    },
    explanation:
      "BS 7671 includes electrical installations in agricultural and horticultural premises. Offshore installations, shipboard equipment covered by its own standard, and public electricity-distribution systems are specialist exclusions from its scope.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29723",
    questionNumber: 35,
    promptSuffix:
      "Socket outlets which are under the supervision of skilled persons:",
    correctedPromptSuffix:
      "Which statement correctly describes the purpose and setting of an insulation monitoring device on an IT system?",
    options: {
      A: "It disconnects the supply immediately whenever the first insulation fault occurs",
      B: "It measures load current and alarms when the circuit is overloaded",
      C: "Its alarm threshold should be set above the installation's normal insulation resistance",
      D: "It continuously monitors insulation to earth and alarms when resistance falls below its set threshold",
    },
    explanation:
      "An insulation monitoring device continuously measures an unearthed IT system's insulation resistance to earth. It raises an alarm when the value falls below the chosen response threshold, giving early warning of the first insulation fault so it can be located before a second fault creates a dangerous current path.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29753",
    questionNumber: 2,
    promptSuffix:
      "A new build family house has just been completed, and it fully complies with the relevant building regulations. It has bedrooms and 2 reception rooms, how many low energy pendants are fitted?",
    correctedPromptSuffix:
      "Under current Approved Document L, what is required of fixed lighting in a new dwelling?",
    options: {
      A: "Every bedroom must have one low-energy pendant",
      B: "At least three low-energy pendants must be installed",
      C: "Every fixed light must use exactly the same lamp type",
      D: "The installed fixed lighting must meet the current efficacy and control requirements",
    },
    answer: "D",
    explanation:
      "Current Approved Document L assesses fixed lighting by efficacy and suitable controls; it does not calculate a mandatory number of pendants from the number of rooms. The design must meet the current lighting-performance requirements for the dwelling as installed.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29753",
    questionNumber: 3,
    promptSuffix:
      "Part 'M' of the building regulations, states the required height of a central heating roomstat would be:",
    correctedPromptSuffix:
      "For an accessible and adaptable dwelling, which listed height is within the 900-1200 mm band for a central-heating thermostat?",
    explanation:
      "Approved Document M places boiler timer controls and thermostats within a 900-1200 mm accessible-height band for the relevant dwelling categories. Of the listed values, 1100 mm lies inside that band.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29753",
    questionNumber: 4,
    promptSuffix: "Part 'E' of the building regulations, does NOT cover:",
    options: { D: "An internal wall separating two bedrooms" },
    explanation:
      "Requirement E2 covers internal walls between bedrooms and other rooms, but its stated limitation excludes the wall between an en-suite bathroom and the bedroom it serves. That specific en-suite wall is therefore the clear exception among these options.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29753",
    questionNumber: 7,
    promptSuffix:
      "How many alphabetical Parts are there to the building regulations?",
    options: { C: "18" },
    explanation:
      "England currently has 18 lettered technical Parts: A-H, J-M and O-T. Letters I and N are not current standalone Parts, so counting the current headings gives 18 rather than the historical total used by the old question.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29753",
    questionNumber: 8,
    promptSuffix:
      "What is the maximum permitted Ze measurement of a Domestic premises with a TN-S earthing system Installed:",
    correctedPromptSuffix:
      "What typical maximum Ze value is commonly used for TN-S design when distributor data is unavailable?",
    explanation:
      "A value of 0.8 Ω is the conventional maximum TN-S design assumption used when the distributor has not provided a more accurate figure. It is not a universal statutory limit: the actual external loop impedance should be confirmed with the distributor or by measurement.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29753",
    questionNumber: 10,
    promptSuffix:
      "The building regulations. States that ALL new and refurbished single family dwellings of not more than two habitable floors have:",
    correctedPromptSuffix:
      "Which feature should mains-operated smoke alarms in a new dwelling include?",
    explanation:
      "Approved Document B calls for mains-operated domestic alarms with a standby power supply so protection continues during a mains failure. The number, category and siting of alarms depend on the dwelling layout and the applicable alarm standard.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29753",
    questionNumber: 14,
    promptSuffix:
      "Which of the following would need be notified to the building control:",
    options: { A: "Installing a new circuit for central-heating controls" },
    explanation:
      "In England, installing a new circuit in a dwelling is notifiable work under Part P. Adding accessories to an existing circuit outside a special location, replacing a damaged accessory, or improving bonding is generally not notifiable, although it must still be safe and properly certified.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29753",
    questionNumber: 15,
    promptSuffix:
      "Which of the following need NOT be notified to building control:",
    correctedPromptSuffix:
      "Which item is clearly not part of a dwelling's fixed electrical installation under Part P?",
    options: {
      A: "A new low-voltage garden-lighting circuit",
      B: "A new micro-CHP generator supply circuit",
      C: "A new solar photovoltaic supply circuit",
      D: "A self-contained solar garden light with no fixed wiring",
    },
    explanation:
      "A self-contained solar garden light is not connected to the dwelling's fixed wiring, so it falls outside Part P electrical-installation work. The other options introduce new fixed circuits and are notifiable in England.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29753",
    questionNumber: 17,
    promptSuffix: "Which of the following is a special Installation:",
    correctedPromptSuffix:
      "Which option is an electric floor-heating system covered by BS 7671 Section 753?",
    explanation:
      "Electric underfloor heating is a floor-heating system within Section 753, which adds requirements for protection, installation and heating elements. Ordinary storage heaters, garage lighting and patio heaters are different types of load.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29753",
    questionNumber: 18,
    promptSuffix: "Part 'M' of the building regulations does NOT apply to:",
    correctedPromptSuffix:
      "Which item is a fixed-appliance isolator rather than a general-purpose socket or communication control?",
    explanation:
      "A cooker switch is an isolating control for a fixed cooking appliance. The other choices are socket outlets or user communication controls, so they do not describe that fixed-appliance isolation function.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29753",
    questionNumber: 19,
    promptSuffix:
      "When would you NOT need to inform building control after installing new 12V recessed lighting to a kitchen:",
    correctedPromptSuffix:
      "Which 12 V lighting job is clearly not work on a dwelling's fixed electrical installation?",
    options: {
      A: "Using a self-contained plug-in lighting kit with no fixed wiring",
      B: "Installing a new fixed SELV lighting circuit in an adapted dwelling",
      C: "Installing fixed recessed lights while preserving Parts B and C",
      D: "Installing fixed recessed lights with suitable fire hoods",
    },
    explanation:
      "A plug-in kit with no fixed wiring is portable equipment rather than work on the fixed electrical installation. CE or UKCA marking, fire hoods and compliance with other Building Regulations do not by themselves decide whether fixed electrical work is notifiable.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29754",
    questionNumber: 7,
    promptSuffix:
      "Who has the right to self-certify their work complies with Building Regulations?",
    options: {
      B: "An installer registered with an authorised Competent Person Scheme",
    },
    explanation:
      "A business registered with an authorised Competent Person Scheme may self-certify work within its approved scope. General competence, JIB grading or working in the building trade does not by itself create the Building Regulations self-certification route.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29754",
    questionNumber: 10,
    promptSuffix:
      "Recommendations for standard final circuit arrangements for domestic power circuits can be found in?",
    options: { A: "The current BS 7671 and IET On-Site Guide" },
    explanation:
      "BS 7671 contains the installation requirements and the current IET On-Site Guide gives practical standard-circuit arrangements. The maintained current editions, rather than an unamended 2018 label or informal bulletins, are the appropriate references.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29754",
    questionNumber: 14,
    promptSuffix: "What is the meaning of this symbol?",
    options: {
      C: "Luminaire suitable for mounting on a normally flammable surface",
    },
    explanation:
      "The F-in-triangle luminaire mark denotes suitability for direct mounting on a normally flammable surface. It does not state that the fitting may be covered by thermal insulation and it is not a fire-alarm detector symbol.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29754",
    questionNumber: 15,
    promptSuffix:
      "Within a domestic situation, the correct disconnection time would be?",
    correctedPromptSuffix:
      "For a TN system, what maximum disconnection time generally applies to socket-outlet final circuits up to 63 A and fixed-equipment final circuits up to 32 A?",
    explanation:
      "Table 41.1 gives 0.4 s for the stated TN final-circuit categories at 230 V to earth. Longer times can apply to distribution circuits or other defined cases, which is why the circuit and earthing arrangement must be stated.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29754",
    questionNumber: 20,
    promptSuffix:
      "Where three core twin and cpc cable is used for lighting circuits, the colour that should not be used as neutral is?",
    correctedPromptSuffix:
      "When a grey core in harmonised three-core-and-cpc cable is used as neutral, what colour identification should be applied at its terminations?",
    options: { A: "Black", B: "Brown", C: "Blue", D: "Red" },
    answer: "C",
    explanation:
      "A conductor used as neutral must be identified blue at its terminations. In the common lighting convention, the grey core is sleeved blue when used as neutral; brown and black remain line-colour identifications, while red is the old pre-harmonisation line colour.",
  },
  {
    examId: "special-locations",
    variantId: "quiz-29740",
    questionNumber: 1,
    promptSuffix:
      "Which of the following statements regarding special locations is false",
    options: {
      D: "Equipment in bathroom zones 1 and 2 generally requires at least IPX4",
    },
    explanation:
      "There is no blanket ban on 13 A socket-outlets in a room containing a bath: a BS 1363 socket may be installed outside the zones, at least 3 m horizontally from the zone 1 boundary, with 30 mA RCD protection. The other statements describe genuine additional-protection, bonding or ingress-protection requirements.",
  },
  {
    examId: "special-locations",
    variantId: "quiz-29740",
    questionNumber: 16,
    promptSuffix:
      "- In horticultural premises fire protection by using RCDs having a residual operating current not exceeding",
    correctedPromptSuffix:
      "In horticultural premises, what is the highest rated residual operating current permitted for an RCD used for fire protection?",
    explanation:
      "The RCD used for fire protection must have a rated residual operating current not exceeding 300 mA. Smaller values may also satisfy the ceiling, but 300 mA is the highest permitted rating asked for here.",
  },
  {
    examId: "special-locations",
    variantId: "quiz-29740",
    questionNumber: 22,
    promptSuffix:
      "On the d.c. side of a PV convertor, means of isolation shall be provided by a",
    correctedPromptSuffix:
      "Which listed device is expressly intended to provide mechanical switching and isolation on the d.c. side of a PV converter?",
    options: {
      B: "An overcurrent-only circuit-breaker not marked as suitable for isolation",
      C: "An ordinary plug and socket not rated for PV d.c. isolation",
    },
    explanation:
      "A d.c.-rated switch-disconnector is designed to make and break the PV current and to provide a defined isolating position. A circuit-breaker can serve as an isolator only when the particular device is marked and suitable for that function, so an unqualified overcurrent-only device is not enough.",
  },
  {
    examId: "special-locations",
    variantId: "quiz-29740",
    questionNumber: 26,
    promptSuffix:
      "Socket-outlets in marinas shall be placed at a height above the highest water level of no less than",
    correctedPromptSuffix:
      "For a fixed jetty or quay, socket-outlets in a marina shall be placed at what minimum height above the highest water level?",
    explanation:
      "On a fixed jetty or quay the socket-outlet is mounted at least 1.0 m above the highest water level to reduce exposure to waves and spray. A separate 0.3 m rule can apply on a floating pontoon or walkway, which is why the fixed structure is stated.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29746",
    questionNumber: 5,
    promptSuffix:
      "The legal requirement for electrical equipment to be maintained in good order is laid down in the:",
    correctedPromptSuffix:
      "Which regulations specifically require electrical systems to be maintained so far as necessary to prevent danger?",
    explanation:
      "Regulation 4(2) of the Electricity at Work Regulations 1989 specifically requires systems to be maintained, so far as is reasonably practicable, to prevent danger. PUWER also contains maintenance duties for work equipment, but EAWR is the direct electrical-system requirement asked for here.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29746",
    questionNumber: 7,
    promptSuffix:
      "When performing an insulation resistance test, lamps should be removed. Failure to do this could result in?",
    correctedPromptSuffix:
      "What is the main measurement problem if lamps and electronic control gear remain connected during an insulation-resistance test?",
    explanation:
      "Connected lamps and control gear provide parallel electronic or resistive paths, so the instrument can report a low value that is not the insulation resistance of the fixed wiring. Sensitive equipment may also need disconnection or a reduced test voltage to avoid damage.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29746",
    questionNumber: 13,
    promptSuffix:
      "During a continuity of ring final conductors test, 10 sockets give a R1+R2 reading of 0.68Ω but one socket gives a reading of 0.92Ω. This could indicate?",
    correctedPromptSuffix:
      "During a ring-final continuity test, ten sockets give R1+R2 of 0.68 Ω. If the connections are sound and one stable reading is 0.92 Ω, what circuit feature could explain it?",
    explanation:
      "A socket supplied by a spur adds the resistance of the spur cable to the cross-connected ring paths, so its R1+R2 reading can be higher than the readings around the ring. A poor joint can also raise a reading, which is why the sound-connection condition and further investigation matter.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29746",
    questionNumber: 17,
    promptSuffix:
      "The insulation resistance of two circuits is of 40MΩ an 36MΩ respectively. When tested together what is the total insulation resistance?",
    correctedPromptSuffix:
      "The insulation resistance of two circuits is 40 MΩ and 36 MΩ respectively. When tested together, what is their approximate total insulation resistance?",
    options: { A: "19 MΩ" },
    explanation:
      "The two leakage paths are in parallel: Rtotal = (40 MΩ × 36 MΩ) ÷ (40 MΩ + 36 MΩ) = 1440 ÷ 76 = 18.95 MΩ. Rounded to the listed precision, the combined insulation resistance is 19 MΩ.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29746",
    questionNumber: 20,
    promptSuffix:
      "Which of the following would NOT be used to prove safe isolation?",
    correctedPromptSuffix:
      "Which instrument is suitable for proving dead during a safe-isolation procedure?",
    options: {
      A: "Earth fault loop impedance tester",
      B: "Multi-meter",
      C: "Non-contact voltage stick",
      D: "Two-pole voltage indicator compliant with GS38",
    },
    answer: "D",
    explanation:
      "A suitably rated two-pole voltage indicator is the purpose-designed instrument for proving dead and is checked before and after use against a known source. Loop testers, multimeters and non-contact sticks can mislead through settings, internal faults or capacitive detection and are not the recommended proving-dead device.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29746",
    questionNumber: 22,
    promptSuffix:
      "Which one of the following ensures safe inspection and maintenance all installation?",
    correctedPromptSuffix:
      "Which design measure allows safe inspection and maintenance of part of an installation without unnecessarily disconnecting all of it?",
    explanation:
      "Dividing an installation into suitable circuits permits the affected section to be identified and isolated while unrelated circuits remain available. An RCD, calibrated test instrument or SPD check does not create that physical subdivision.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29746",
    questionNumber: 26,
    promptSuffix:
      "Given that the resistance per metre of 2.5mm² cable is 7.41mΩ/m at 20°C , what would the approximate R1+R2 reading be at the at the extreme end of a 25m long 20A radial socket outlet circuit?",
    correctedPromptSuffix:
      "A 25 m radial circuit has 2.5 mm² line and cpc conductors, each with resistance 7.41 mΩ/m at 20 °C. What approximate R1+R2 is expected at the furthest point?",
    explanation:
      "The test path is 25 m along the line conductor and 25 m back along the cpc: R1+R2 = 50 m × 7.41 mΩ/m = 370.5 mΩ = 0.3705 Ω. The expected reading is therefore about 0.37 Ω.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29746",
    questionNumber: 27,
    promptSuffix:
      "A electrical Installation Condition Report would be carried out on?",
    correctedPromptSuffix:
      "An Electrical Installation Condition Report is used to assess which type of installation?",
    explanation:
      "An EICR reports on the present condition of an existing installation for continued service. New or newly altered work is certified with an EIC or Minor Works Certificate as appropriate rather than retrospectively treated as a condition report.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29746",
    questionNumber: 29,
    promptSuffix: "Prior to commencing work on a circuit, it is important to?",
    correctedPromptSuffix:
      "Before disrupting the supply to begin safe isolation of a circuit, what should be done first?",
    explanation:
      "Coordinate with the occupier or user before interruption so life-safety systems, lifts, medical equipment, IT services or processes are not stopped without warning. The tester then identifies the circuit, checks the equipment, isolates, locks off, posts warnings and proves dead.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29746",
    questionNumber: 30,
    promptSuffix: "GS 38 does NOT recommend the following?",
    correctedPromptSuffix:
      "Where practicable, what maximum exposed probe-tip length does HSE GS38 recommend for voltage indicators?",
    options: { A: "10 mm", B: "8 mm", C: "4 mm", D: "2 mm" },
    explanation:
      "GS38 says exposed metal at probe tips should preferably be no more than 2 mm, although up to 4 mm may be necessary for some measurements. The shorter preferred exposure reduces the chance of bridging conductors or touching live metal.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29746",
    questionNumber: 34,
    promptSuffix:
      "The correct instrument to perform a polarity test on an Edison type lamp holder is?",
    correctedPromptSuffix:
      "During dead initial verification, which instrument is used to confirm polarity at an Edison screw lamp holder?",
    options: { A: "Low-resistance ohmmeter on the isolated circuit" },
    explanation:
      "With the circuit isolated, a low-resistance continuity instrument is used to prove that the line conductor reaches the centre contact and the neutral reaches the threaded outer contact. A live two-pole indicator can check voltage later, but it is not the normal dead initial-verification method.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29746",
    questionNumber: 35,
    promptSuffix:
      "For the purpose of safe isolation you must check the approved voltage Indicators, which of the following would be most suitable to use?",
    correctedPromptSuffix:
      "What known source is most suitable for checking an approved voltage indicator immediately before and after proving dead?",
    explanation:
      "A proving unit supplies a known voltage so the indicator can be checked immediately before and after the circuit test. A dead circuit is not a valid source for testing the tester because a failed indicator would also show no voltage.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29746",
    questionNumber: 38,
    promptSuffix:
      "Identify the most suitable source of supply isolation before undertaking maintenance on an installation?",
    correctedPromptSuffix:
      "Which listed device is expressly designed and marked for main supply isolation before maintenance?",
    options: {
      B: "BS EN IEC 60947-3 switch-disconnector",
      D: "BS EN 60898 circuit-breaker not marked for isolation",
    },
    explanation:
      "A switch-disconnector to BS EN IEC 60947-3 is designed for switching and isolation and provides a defined isolating position. A circuit-breaker may also isolate only when the specific product is marked and suitable for that duty; an unmarked overcurrent device cannot be assumed to do so.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29746",
    questionNumber: 39,
    promptSuffix:
      "Isolation of a block of flats is to be done and you have not sought owner's permission what could be the major hazard of this?",
    correctedPromptSuffix:
      "What major immediate hazard can arise if a block of flats is isolated without coordinating with the people responsible for the building?",
    explanation:
      "Uncoordinated isolation can remove power from lifts while they are occupied, trapping people between floors. It can also affect alarms, access control and other services, which is why planned interruption and communication are essential before isolation.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29747",
    questionNumber: 1,
    promptSuffix:
      "The circuit breaker supplying the ring circuit keeps tripping. This type of electrical fault is known as:",
    correctedPromptSuffix:
      "A ring-circuit breaker trips after a period of sustained high load, but inspection finds no short-circuit or earth fault. What condition does this indicate?",
    explanation:
      "A sustained current above the circuit-breaker's rating operates its thermal overload element after a delay. A short-circuit or earth fault normally produces a rapid protective-device operation; the added timing and inspection evidence distinguish the overload here.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29747",
    questionNumber: 2,
    promptSuffix:
      "On a construction site, the result of the resistance of the earth electrode and the rated residual operating current should not exceed:",
    explanation:
      "For the stated earth-electrode and RCD arrangement, RA × IΔn must not exceed 50 V. This limits the touch voltage while the RCD operates; 110 V is the reduced-voltage supply often used for site tools, not this product limit.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29747",
    questionNumber: 6,
    promptSuffix:
      "After completing the ring final continuity, the following would be proven:",
    options: { B: "R1+R2 values and polarity at the points tested" },
    explanation:
      "The cross-connected ring-final procedure produces R1+R2 readings at the outlets and confirms that the line and cpc connections reach the intended terminals at those tested points. The end-to-end r1, rn and r2 values are recorded separately.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29747",
    questionNumber: 9,
    promptSuffix:
      "A low resistance ohmmeter should provide a short circuit current of:",
    correctedPromptSuffix:
      "A low-resistance ohmmeter used for continuity testing should provide a test current of:",
    options: { B: "25 mA", C: "Less than 200 mA" },
    explanation:
      "The continuity instrument should supply at least 200 mA into a low resistance, as required by the relevant test-instrument standard. That current helps produce stable, repeatable readings through ordinary contact films and joints.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29747",
    questionNumber: 10,
    promptSuffix:
      "Which one of the following is not a reason for testing polarity before energising the circuit?",
    options: {
      A: "Line conductor at a particular contact of a bayonet-cap lampholder",
    },
    explanation:
      "An Edison screw holder needs line at the centre contact so the accessible threaded shell is neutral, and single-pole switches and protective devices must be in the line conductor. A standard bayonet-cap holder has two equivalent insulated contacts, so polarity does not assign line to one particular contact.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29747",
    questionNumber: 12,
    promptSuffix:
      "As good practice, which insulation resistance value should be investigated:",
    correctedPromptSuffix:
      "Which insulation-resistance value is commonly used as a good-practice investigation trigger even though it is above the 1 MΩ minimum?",
    explanation:
      "A reading around 2 MΩ warrants investigation because sound disconnected wiring would normally be much higher, even though the formal minimum for the stated circuit is 1 MΩ. A 0.5 MΩ result is already below the minimum and therefore fails rather than merely triggering a good-practice review.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29747",
    questionNumber: 13,
    promptSuffix:
      "A reason for testing the prospective fault current would be to:",
    answer: "B",
    explanation:
      "Prospective fault current is compared with the rated short-circuit or breaking capacity of protective devices and assemblies so they can interrupt the largest fault safely. Disconnection time depends on fault-loop impedance and the device's time-current characteristic, not merely on the maximum prospective current.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29747",
    questionNumber: 20,
    promptSuffix:
      "A 230 V single-phase circuit is protected by a 16 A device to BS EN 60898 Type B. Which one of the following is the minimum value of current required to cause effective disconnection in the required time if the maximum permitted earth fault loop impedance is 2.87Ω:",
    correctedPromptSuffix:
      "A 230 V circuit is protected by a 16 A BS EN 60898 Type B device. If the applicable maximum earth fault loop impedance is 2.73 Ω, what minimum fault current corresponds to that limit?",
    options: { D: "84 A" },
    explanation:
      "Using Ohm's law, fault current = U0 ÷ Zs = 230 V ÷ 2.73 Ω = 84.25 A, so the nearest listed value is 84 A. The 2.73 Ω limit incorporates the current BS 7671 minimum-voltage factor rather than the older 2.87 Ω figure.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29747",
    questionNumber: 23,
    promptSuffix:
      "During a routine periodic inspection, the person who determines the time to the next periodic inspection would be the:",
    options: { C: "Inspector carrying out the periodic assessment" },
    explanation:
      "The inspector recommends the next interval from the installation's type, use, environment, maintenance and observed condition. The person ordering the report can discuss operational factors, but the technical recommendation follows from the competent assessment.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29747",
    questionNumber: 26,
    promptSuffix: "For a 230v installation, the test voltage is:",
    correctedPromptSuffix:
      "For a typical 230 V circuit with sensitive equipment disconnected, what d.c. insulation-resistance test voltage is used?",
    options: { C: "500 V d.c." },
    explanation:
      "For low-voltage circuits up to and including 500 V, the normal insulation-resistance test voltage is 500 V d.c., with a minimum result of 1 MΩ. A reduced 250 V test may be used in defined cases where connected equipment cannot reasonably be disconnected.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29747",
    questionNumber: 30,
    promptSuffix:
      "Given that the resistance per metre of 2.5mm² cable is 7.41mΩ/m at 20°C , what would the approximate R1+R2 reading be at the at the extreme end of a 25m long 20A radial socket outlet circuit:",
    correctedPromptSuffix:
      "A 25 m radial circuit has 2.5 mm² line and cpc conductors, each with resistance 7.41 mΩ/m at 20 °C. What approximate R1+R2 is expected at the furthest point?",
    explanation:
      "R1+R2 includes 25 m along the line and 25 m back along the cpc: 50 m × 7.41 mΩ/m = 370.5 mΩ = 0.3705 Ω. Rounded to the listed precision, the result is 0.37 Ω.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29747",
    questionNumber: 35,
    promptSuffix:
      "Prior to performing an insulation resistance test, you should:",
    correctedPromptSuffix:
      "What precaution prevents damage to voltage-sensitive electronic equipment during an insulation-resistance test?",
    explanation:
      "Disconnect voltage-sensitive devices, or use the permitted reduced-voltage method where disconnection is not reasonably practicable. Removing ordinary lamps can prevent parallel paths and false readings, but it does not by itself protect every electronic control or connected device.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29747",
    questionNumber: 36,
    promptSuffix:
      "The earth fault loop impedance reading on a ring final circuit is best achieved using an earth fault impedance tester and:",
    correctedPromptSuffix:
      "Where a live Zs test at a BS 1363 socket is justified, which accessory provides the safest direct connection for the loop tester?",
    explanation:
      "A purpose-designed BS 1363 test lead connects line, neutral and earth without loose probes or exposed temporary contacts. Live testing should still be minimized and carried out only where the information cannot be obtained safely by calculation or other dead-test evidence.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29747",
    questionNumber: 37,
    promptSuffix:
      "Which one of the following tests requires test connections at all points within a final circuit:",
    correctedPromptSuffix:
      "Which procedure specifically requires resistance measurements at every point of a ring final circuit?",
    explanation:
      "The cross-connected ring-final continuity procedure measures at every socket and connection point to identify breaks, interconnections, spurs and anomalous resistance. Polarity must also be established at relevant points, but the question asks for the procedure defined by measurements around the whole ring.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29747",
    questionNumber: 40,
    promptSuffix:
      "Under the Electricity at Work Regulations (EAWR), live working is only allowed in limited situations. Which of the following describes the key condition that must apply before live working can be considered acceptable?",
    correctedPromptSuffix:
      "EAWR Regulation 14 has three cumulative conditions for work on or near live conductors. Which listed option states one of them?",
    explanation:
      "Live work is permitted only when it is unreasonable in all the circumstances for the conductors to be dead, it is reasonable to work live, and suitable precautions are taken to prevent injury. Permission, PPE or tools alone cannot satisfy Regulation 14.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29755",
    questionNumber: 2,
    promptSuffix:
      "Identify one of the following which would definitely have an area which is classed as a 'special location'?",
    options: { A: "Bathroom containing a bath or shower" },
    explanation:
      "A location containing a bath or shower is expressly treated as a special location, with additional zoning, RCD and equipment-selection requirements. The generic labels bedroom, garden and kitchen do not by themselves establish a Part 7 special location.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29755",
    questionNumber: 4,
    promptSuffix:
      "A switch installed for permanently connected equipment should be?",
    correctedPromptSuffix:
      "Where its purpose is not obvious from its position, a switch installed for permanently connected equipment should be?",
    explanation:
      "The switch is identified by the equipment or function it controls so a user or maintainer can operate the correct device safely. Locking and current rating depend on the application and are not universal 20 A or 32 A requirements.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29755",
    questionNumber: 5,
    promptSuffix: "Strappers on a two way lighting circuit should be?",
    correctedPromptSuffix:
      "A blue core used as a strapper on a two way lighting circuit should be?",
    explanation:
      "A blue core used as a line conductor must be identified brown at its terminations. The sleeving shows that the conductor is live in this application rather than a neutral.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29755",
    questionNumber: 12,
    promptSuffix:
      "A convenient and satisfactory method of fixing items to a plasterboard partition wall would be?",
    correctedPromptSuffix:
      "A convenient and satisfactory method of fixing a lightweight item to a plasterboard partition wall would be?",
    explanation:
      "A self-drilling spiral plasterboard fixing spreads the load through the board and provides a suitable anchor for a lightweight item. Girder clips need steelwork, ordinary self-tapping screws lack a board anchor, and wood glue is not a dependable mechanical fixing to plasterboard.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29755",
    questionNumber: 13,
    promptSuffix:
      "Which one of the following regulations is not an approved document?",
    correctedPromptSuffix: "Which of the following titles is fictitious?",
    explanation:
      "There is no standard titled 'BS 7677 New Wiring Regulations 2011'. The other three are real statutory regulations, although none of them is itself a Building Regulations Approved Document.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29755",
    questionNumber: 14,
    promptSuffix: "Horizontal chases in walls should be no thicker than?",
    correctedPromptSuffix:
      "Horizontal chases in walls should be no deeper than?",
    explanation:
      "A horizontal chase should not be deeper than one sixth of the wall leaf thickness. The limit controls how much load-bearing masonry is removed across the wall; 'thickness of a chase' is not the relevant dimension.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29755",
    questionNumber: 15,
    promptSuffix:
      "The EAWR states that any persons working on electrical installations should be?",
    correctedPromptSuffix:
      "Under EAWR guidance, a person with adequate technical knowledge or experience to prevent electrical danger is described as?",
    explanation:
      "Such a person is described as competent for the work: they have sufficient knowledge or experience to prevent danger and injury. A particular qualification, prior identical job or scheme registration may support competence but is not the definition itself.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29756",
    questionNumber: 3,
    promptSuffix: "The Building Regulations are divided into:",
    options: { C: "18 Parts" },
    answer: "C",
    explanation:
      "England's current technical requirements are grouped under 18 lettered Parts: A-H, J-M and O-T. 'Sections' is the wrong term, and the older total of 14 no longer includes the later Parts.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29756",
    questionNumber: 5,
    promptSuffix:
      "Which of the following is not classed as 'Minor Work' under Part P of the Building Regulations:",
    correctedPromptSuffix:
      "Which of the following is not minor electrical installation work because it explicitly requires a new circuit?",
    options: {
      D: "Installing a higher-powered electric shower that requires a new circuit",
    },
    explanation:
      "Providing a new circuit for the higher-powered shower is new-circuit work and is notifiable in England. A like-for-like repair or a small addition to an existing circuit can be minor work when its design and location otherwise permit it.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29756",
    questionNumber: 6,
    promptSuffix:
      "Which of the following would not be classed as a 'special location':",
    correctedPromptSuffix:
      "Which of the following is classed as a 'special location' for notification under current Part P in England?",
    options: { D: "Room containing a swimming pool" },
    answer: "D",
    explanation:
      "For current Part P notification in England, the special-location category covers a room containing a bath or shower and a room containing a swimming pool or sauna heater. An entrance hall, a garden or ELV lighting by itself is not that category.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29756",
    questionNumber: 8,
    promptSuffix: "Part P does not apply to:",
    options: { D: "Shared amenities in blocks of flats" },
    explanation:
      "Part P applies to electrical installations in dwellings and associated land and shared amenities, but it excludes lifts. Lift installations are governed through their own product and safety regime rather than treated as ordinary domestic fixed wiring under Part P.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29756",
    questionNumber: 12,
    promptSuffix:
      "The Part P document requires that all electrical installation work has been selected and installed in accordance with:",
    correctedPromptSuffix:
      "Which national standard is used as the principal benchmark for selecting and installing electrical work under Approved Document P?",
    explanation:
      "BS 7671 is the principal national benchmark cited by Approved Document P for safe electrical installation work. Approved Documents describe a route to compliance rather than making one standard the only conceivable way of satisfying the functional requirement.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29756",
    questionNumber: 13,
    promptSuffix:
      "In accordance with Part P which of the following Regulations/Publications does not apply to work on electrical installations:",
    correctedPromptSuffix:
      "Which of the following concerns reporting specified work-related injuries, diseases and dangerous occurrences rather than the design or operation of an electrical installation?",
    options: { C: "The Electricity at Work Regulations 1989" },
    explanation:
      "RIDDOR creates reporting duties after specified workplace incidents; it does not set installation design or operating requirements. BS 7671, EAWR and ESQCR each directly concern electrical systems, work or supply arrangements.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29756",
    questionNumber: 15,
    promptSuffix:
      "Which of the following is not classified as a 'special location and installation' under Part P:",
    correctedPromptSuffix:
      "Which of the following is not classified as a 'special installation or location' in Part 7 of BS 7671?",
    options: {
      A: "Rooms and cabins containing sauna heaters",
      C: "Electrical installations in caravan/camping parks",
    },
    explanation:
      "Industrial fluorescent lighting is ordinary equipment rather than a Part 7 location or installation. Sauna rooms, caravan/camping parks, generating sets and photovoltaic systems each have particular requirements in Part 7.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29756",
    questionNumber: 17,
    promptSuffix: "The Building Act 1984 is policed by:",
    correctedPromptSuffix:
      "Which body normally enforces Building Regulations requirements for ordinary buildings in England, outside the higher-risk building regime?",
    explanation:
      "The relevant local authority normally carries out Building Regulations enforcement for ordinary buildings in its area. Other bodies have roles in approval, professional practice or central government, but they are not the routine local enforcement authority.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29756",
    questionNumber: 18,
    promptSuffix:
      "Which of the following are not exempt from the Building Regulations:",
    correctedPromptSuffix:
      "Which of the following is not generally exempt from substantive Building Regulations requirements?",
    options: {
      A: "A qualifying operational building belonging to a statutory undertaker",
      B: "A qualifying operational building belonging to the Civil Aviation Authority",
      C: "A qualifying operational building belonging to a licensed air-traffic-services provider",
    },
    explanation:
      "Crown buildings are generally subject to the substantive requirements even though enforcement arrangements differ. Defined operational buildings of statutory undertakers, the Civil Aviation Authority and licensed air-traffic providers can fall within specific exemptions.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29756",
    questionNumber: 20,
    promptSuffix:
      "Approved document N applies to glazing. Which of the following is not considered a safety issue within the document:",
    correctedPromptSuffix:
      "Approved Document K contains the current glazing-safety guidance in England. Which of the following is not one of the safety issues covered?",
    explanation:
      "Approved Document K addresses impact, opening and safe access for cleaning in relation to glazing. Damp and moisture resistance are dealt with elsewhere, principally under Part C, so damp is not one of those glazing-safety topics.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29748",
    questionNumber: 1,
    promptSuffix:
      "What would be the correct procedure to confirm that the existing electrical installation in a dwelling is suitable for the additional wiring of an extension?",
    correctedPromptSuffix:
      "Before wiring an extension to a dwelling, what assessment is needed to confirm that the affected existing installation can safely support the addition?",
    options: {
      B: "Relevant inspection and testing of the affected existing installation",
    },
    explanation:
      "Regulation 132.16 requires the installer to establish that the existing equipment, supply capacity and earthing and bonding are adequate for the addition and that the new work will not impair safety. That requires an assessment supported by whatever inspection and tests are relevant; it does not automatically mean a full EICR of every circuit in the dwelling.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29748",
    questionNumber: 2,
    promptSuffix:
      "What is the purpose of a periodic inspection and test relating to the safety of the building?",
    correctedPromptSuffix:
      "Which periodic-inspection objective specifically concerns protection of the building and property rather than direct injury to people?",
    explanation:
      "Protection against fire caused by defects in the electrical installation is the objective that directly concerns the building and property. Protection against shock and burns concerns people, while damage and non-compliances are observations used to judge risk rather than the particular safety outcome asked for.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29748",
    questionNumber: 13,
    promptSuffix:
      "Which human senses would be best used to determine excess arcing at a contactor during a walk around survey?",
    correctedPromptSuffix:
      "During a walk-around survey, which pair of senses is most likely to reveal concealed contactor arcing through crackling and a burnt odour?",
    explanation:
      "Excessive arcing can produce a distinctive crackling sound and the smell of overheated insulation or contacts even when the contactor is enclosed. The equipment should not be touched to investigate it, and sight alone may not reveal an internal fault.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29748",
    questionNumber: 19,
    promptSuffix:
      "What is the most likely cause of the measured value being much higher than the calculated value?",
    correctedPromptSuffix:
      "If a bonding-conductor reading exceeds the calculated value by approximately the resistance of the test leads, what is the most likely test error?",
    explanation:
      "If the lead resistance has not been nulled, the instrument adds that resistance to the conductor under test. Temperature can also change conductor resistance, but an offset that matches the leads points specifically to failure to zero them.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29748",
    questionNumber: 21,
    promptSuffix:
      "Questions 20 to 23 apply to the following scenario. An earth fault loop impedance test is to be carried out on a radial circuit to the local isolator, as shown in figure 4. Why can this earth fault loop impedance test be carried out before a test for insulation resistance?",
    correctedPromptSuffix:
      "Subject to a documented test plan and live-testing risk controls, which fact can explain an inspector recording a Zs test before insulation-resistance testing during a periodic assessment?",
    explanation:
      "A periodic assessment starts with an installation that is already energised and in service, so a justified live Zs measurement may be scheduled before the disruption needed for an insulation-resistance test. This is not a blanket rule: live testing must be minimized, justified and carried out with suitable precautions.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29748",
    questionNumber: 23,
    promptSuffix:
      "Questions 20 to 23 apply to the following scenario. An earth fault loop impedance test is to be carried out on a radial circuit to the local isolator, as shown in figure 4. Why would a test to confirm continuity of cpc be unnecessary once the earth fault loop impedance test is completed?",
    correctedPromptSuffix:
      "Where parallel earth paths have been ruled out, why can a reliable Zs result at the end of this radial circuit provide evidence of cpc continuity?",
    explanation:
      "A valid Zs measurement requires a complete earth-fault loop through the circuit protective conductor, so it can demonstrate continuity when parallel paths have been excluded. If parallel paths could carry the test current, a low Zs reading alone cannot prove the cpc is continuous and a dead continuity test is still needed.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29748",
    questionNumber: 27,
    promptSuffix:
      "Questions 26 to 29 relate to the following scenario Voltage drop of a single-phase distribution circuit supplying a power distribution board in a remote building is to be verified as part of the periodic inspection and testing within a workshop complex. The installation forms part of a public 400/230 V TN-S system. The circuit has a measured R1+Rn value of 0.15 Ω and an Ib of 60 A. The circuit protective device has an In of 80 A, see Figure 5. Which are the cable characteristics that affect voltage drop?",
    correctedPromptSuffix:
      "For conductors of the same material at the same operating temperature, which two geometrical cable characteristics primarily determine voltage drop?",
    explanation:
      "Resistance, and therefore voltage drop, increases with conductor length and decreases as cross-sectional area increases. Conductor material and operating temperature also matter in a complete design, so the question fixes them to isolate the two geometrical factors.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29748",
    questionNumber: 28,
    promptSuffix:
      "Questions 26 to 29 relate to the following scenario. Voltage drop of a single-phase distribution circuit supplying a power distribution board in a remote building is to be verified as part of the periodic inspection and testing within a workshop complex. The installation forms part of a public 400/230 V TN-S system. The circuit has a measured R1+Rn value of 0.15 Ω and an Ib of 60 A. The circuit protective device has an In of 80 A. What is the voltage drop for this distribution circuit?",
    correctedPromptSuffix:
      "Using the measured R1+Rn value of 0.15 Ω directly, without a temperature correction, what voltage drop is indicated at a design current of 60 A?",
    explanation:
      "Using the stated measured resistance directly, voltage drop is I × R = 60 A × 0.15 Ω = 9 V. A formal design or worst-case assessment may also need an operating-temperature correction, but the calculation requested here deliberately excludes it.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29748",
    questionNumber: 33,
    promptSuffix:
      "Testing of the RCDs is to be undertaken on the installation which forms part of a TT system, as shown in Figure 6. When testing the 30 mA RCD at 5 In the RCD did not operate because the 100 mA RCD at the origin of the installation tripped out. What is the most likely reason for this RCD tripping?",
    correctedPromptSuffix:
      "During an optional legacy 5 IΔn diagnostic test on the downstream 30 mA RCD, the upstream 100 mA RCD trips first. What is the most likely coordination problem?",
    options: { B: "The 30 mA RCD is too sensitive" },
    explanation:
      "The upstream 100 mA RCD lacks the time delay needed for selectivity, so the 150 mA test current can operate it before the downstream device completes the test. Current BS 7671 field verification uses the IΔn test; a 5 IΔn test is optional diagnostic information rather than the prescribed field test.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29748",
    questionNumber: 34,
    promptSuffix:
      "Questions 30 to 34 relate to the following scenario. Testing of the RCDs is to be undertaken on the installation which forms part of a TT system, as shown in Figure 6. When testing the 30 mA RCD at In a disconnection time of 400 ms is recorded. What classification code should the inspector record on the report?",
    correctedPromptSuffix:
      "Testing of the 30 mA general non-delay RCD at IΔn gives an operating time of 400 ms. What classification code should the inspector record?",
    answer: "B",
    explanation:
      "A general non-delay RCD tested at IΔn must operate within 300 ms. A 400 ms result shows that a safety device is not operating within its required time and is potentially dangerous, so C2 is appropriate; it is not merely a recommended improvement.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29748",
    questionNumber: 37,
    promptSuffix:
      "The radial circuit, shown in Figure 7, is installed using-single core cables in PVC conduit. The installation is 5 years old and there have been no alterations or additions to the radial circuit. Why would it be unnecessary to carry out a continuity of cpc for this circuit at periodic inspection and test?",
    correctedPromptSuffix:
      "If parallel earth paths have been excluded, which existing test result can provide evidence of cpc continuity on this radial circuit during periodic inspection?",
    explanation:
      "A reliable Zs result at the end of the radial circuit requires a complete fault-current path through its cpc and can therefore provide continuity evidence when parallel paths have been excluded. The wiring method and age do not prove continuity by themselves.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29748",
    questionNumber: 39,
    promptSuffix:
      "What is the most appropriate classification code to be recorded if the insulation resistance for a circuit is measured at 0.90 MΩ between live conductors and Earth?",
    options: { D: "FI" },
    explanation:
      "For a typical low-voltage circuit tested at 500 V d.c., 1 MΩ is the minimum BS 7671 value. A measured 0.90 MΩ is below that limit and indicates a potentially dangerous insulation defect, so C2 is appropriate rather than C3 or merely calling for further investigation.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29748",
    questionNumber: 40,
    promptSuffix:
      "A test is to be carried out to determine the external earth fault loop impedance of an installation forming part of a TN-S system. What is the maximum declared by the Distribution Network Operator for a TN-S supply?",
    correctedPromptSuffix:
      "When distributor data is unavailable, what typical maximum Ze value is commonly assumed for TN-S design?",
    explanation:
      "The conventional TN-S design value is 0.8 Ω when more accurate distributor information is unavailable. It is not a universal value declared by every DNO, so the actual Ze should be obtained by enquiry or verified by measurement where appropriate.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29757",
    questionNumber: 2,
    promptSuffix:
      "When a British Standard has an equivalent European Standard which of the following statements apply:",
    correctedPromptSuffix:
      "When a European Standard is adopted in the UK and conflicts with an existing purely national British Standard, what normally happens?",
    options: {
      D: "The European Standard is adopted as a BS EN and the conflicting national standard is withdrawn",
    },
    answer: "D",
    explanation:
      "Members of CEN/CENELEC adopt the European Standard nationally and withdraw conflicting national standards. In the UK the adopted document is published as a BS EN; both conflicting texts are not kept as alternative current standards.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29757",
    questionNumber: 7,
    promptSuffix:
      "In the event of a current carrying cable being surrounded by insulating material for a length of 500mm or more both. Approved document E and BS 7671 require the current carrying capacity of the cable be reduced by:",
    correctedPromptSuffix:
      "Under BS 7671, when a single current-carrying cable is totally surrounded by thermal insulation for 0.5 m or more, its current-carrying capacity should be reduced to:",
    explanation:
      "For a single cable totally surrounded by thermal insulation over 0.5 m or more, the tabulated current-carrying capacity is multiplied by 0.5. The insulation traps heat, so the cable must carry less current to remain within its permitted conductor temperature.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29757",
    questionNumber: 8,
    promptSuffix:
      "Part L1 of the Building Regulations require reasonable provision be made for the conservation of power. One way of complying is to provide fixed lighting points that can only take lamps having a luminous efficacy greater than:",
    correctedPromptSuffix:
      "Under the Approved Document L guidance currently in force in England, each internal light fitting in a new or existing dwelling should have lamps with a minimum luminous efficacy of:",
    options: { D: "75 light source lumens per circuit-watt" },
    answer: "D",
    explanation:
      "Current Approved Document L guidance uses a minimum efficacy of 75 light-source lumens per circuit-watt for internal fixed lighting. Older figures such as 45 lumens per circuit-watt belong to superseded guidance.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29757",
    questionNumber: 11,
    promptSuffix:
      "Which is NOT considered as a special location by BS7671 or Approved document P:",
    correctedPromptSuffix:
      "Which option definitely contains a special location under both BS 7671 and current Approved Document P?",
    answer: "B",
    explanation:
      "A bathroom containing a bath or shower and a sauna-heater room are special locations under both frameworks. The other lists include ordinary locations or use labels such as kitchen or outdoors that do not by themselves make the location special under both documents.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29757",
    questionNumber: 13,
    promptSuffix:
      "Which of the following is NOT a requirement of a sole trader applying to become 'a competent person':",
    correctedPromptSuffix:
      "Which of the following is NOT an automatic fixed requirement for a sole trader applying to a self-certification scheme (formerly called a competent person scheme)?",
    explanation:
      "Scheme operators assess competence, qualifications, insurance and business systems against their scheme rules, but a fixed three-year trading history is not an automatic statutory requirement applying to every sole trader.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29757",
    questionNumber: 16,
    promptSuffix:
      "You have to install a ventilation fan in a room, when would it be essential to check the ventilation rates and take appropriate measures:",
    correctedPromptSuffix:
      "When installing an extract fan, which scenario specifically requires assessment for possible combustion-product spillage caused by depressurisation?",
    answer: "B",
    explanation:
      "An extract fan in or near a room containing an open-flued combustion appliance can lower the air pressure and pull fumes back into the building. The fan and appliance therefore require a spillage and ventilation assessment.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29757",
    questionNumber: 18,
    promptSuffix:
      "Which of the following work is classed as a special installation according to approved document 'P':",
    correctedPromptSuffix:
      "Which of the following is an electric floor-heating system covered by BS 7671 Section 753?",
    explanation:
      "Electric underfloor heating is within Section 753, which contains additional requirements for heating cables and embedded heating systems. The other options are ordinary loads rather than electric floor or ceiling heating systems.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29757",
    questionNumber: 19,
    promptSuffix:
      "With regards to management systems covering workmanship, regulation 7 of the building regulations indicates that quality standards are detailed in which publication:",
    correctedPromptSuffix:
      "Which publication family contains quality-management-system standards?",
    explanation:
      "The ISO 9000 family contains quality-management principles and requirements, including ISO 9001. BS 7671 covers electrical installations, Building Regulations set building requirements, and HSE publications provide health-and-safety guidance.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29757",
    questionNumber: 20,
    promptSuffix:
      "Certain electrical installation work is defined as 'Building Work' under the building regulations as it:",
    correctedPromptSuffix:
      "Why can certain electrical installation work count as 'building work' under the Building Regulations?",
    options: {
      C: "It may constitute the provision or extension of a controlled service or fitting",
    },
    explanation:
      "Providing or extending a controlled service or fitting is included in the legal meaning of building work. Electrical work is not covered merely because it uses electricity or because every task requires planning permission.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29758",
    questionNumber: 1,
    promptSuffix:
      "Approved document are different from building regulations as they do NOT contain:",
    correctedPromptSuffix:
      "Which statement best describes an Approved Document?",
    options: {
      A: "Statutory guidance showing common ways to meet Building Regulations requirements",
      B: "A catalogue of mandatory solutions for every design",
      C: "The Building Regulations themselves",
      D: "A substitute for considering other applicable requirements",
    },
    answer: "A",
    explanation:
      "An Approved Document gives practical guidance on common ways to satisfy particular Building Regulations requirements. The functional requirements are law; following the guidance is not the only possible compliant route and does not remove the need to consider other applicable requirements.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29758",
    questionNumber: 2,
    promptSuffix:
      "Under the building regulations which of the following projects would NOT be under control of the building surveyor:",
    correctedPromptSuffix:
      "Which of the following projects would normally be exempt from Building Regulations control?",
    options: {
      A: "A ground-level carport no larger than 30 m² and open on at least two sides",
    },
    explanation:
      "A small ground-level carport no larger than 30 m² and open on at least two sides is within the class exemption, subject to the stated conditions. Ordinary dwelling extensions and enclosed buildings do not gain that exemption merely because they are small.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29758",
    questionNumber: 3,
    promptSuffix:
      "Which of the following electrical installation activates would NOT require notification to building control, when carried out by a person who is NOT registered with a competent person scheme:",
    correctedPromptSuffix:
      "Which work would be notifiable in England when carried out by someone who is not using a self-certification route?",
    options: {
      A: "Altering an existing socket circuit outside a special location",
      B: "Amending an existing kitchen circuit outside a special location",
    },
    answer: "C",
    explanation:
      "Installing a new circuit is notifiable work in England. Alterations to an existing circuit outside a special location are generally non-notifiable, although they still have to comply with Part P and BS 7671.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29758",
    questionNumber: 5,
    promptSuffix:
      "Where would you find details of notification procedures to follow when starting, carrying out and completing building work:",
    correctedPromptSuffix:
      "Where are the current legal application and notification procedures for ordinary building work in England set out?",
    options: {
      B: "The Building Regulations 2010, as amended",
      C: "The Construction (Design and Management) Regulations 2015",
    },
    explanation:
      "The Building Regulations 2010, as amended, contain the legal procedural requirements for notices, plans, certificates and related building-control steps. CDM regulates construction-project health-and-safety management rather than ordinary Building Regulations applications.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29758",
    questionNumber: 10,
    promptSuffix: "What does Approved document L1 NOT give guidance on:",
    options: {
      B: "Lighting control in domestic dwellings",
      C: "Lighting efficiency in dwellings",
    },
    explanation:
      "Approved Document L Volume 1 gives fuel-and-power guidance for dwellings, including dwelling heating and lighting controls and efficiency. Non-domestic buildings are covered by Approved Document L Volume 2, so that is the topic not covered by Volume 1.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29758",
    questionNumber: 13,
    promptSuffix:
      "The building regulations are made under powers in the building act 1984 and apply in England and Wales. The current edition of the building regulations are:",
    correctedPromptSuffix:
      "The Building Regulations are made under the Building Act 1984. Which principal consolidated regulations currently apply in England?",
    options: { C: "The Building Regulations 2010" },
    explanation:
      "The principal consolidated regulations currently applying in England are the Building Regulations 2010, as amended. The 2000 Regulations were revoked and replaced, while the Building Act is the enabling primary legislation rather than the regulations themselves.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29758",
    questionNumber: 15,
    promptSuffix:
      "A new greenhouse is being constructed, when would the electrical installation within it need to comply with the requirements of Approved document P:",
    correctedPromptSuffix:
      "When does the electrical installation in a new greenhouse fall within the scope of Approved Document P?",
    options: {
      D: "When the greenhouse is on land associated with a private dwelling and is supplied from that dwelling's electrical installation",
    },
    explanation:
      "Part P extends to fixed electrical installations in outbuildings and land associated with a dwelling when they are supplied from the dwelling's installation. Commercial farm and retail premises are not brought into domestic Part P scope merely because the structure is a greenhouse.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29758",
    questionNumber: 19,
    promptSuffix:
      "A 2.5mm² radial socket outlet circuit spans no more than 50 m² floor surface. The protective device fitted should be rated at?",
    correctedPromptSuffix:
      "Under the On-Site Guide standard final-circuit arrangement, a 2.5 mm² radial socket-outlet circuit serving no more than 50 m² is protected at:",
    explanation:
      "The standard arrangement uses a 20 A protective device for a 2.5 mm² radial circuit serving up to 50 m². The final design still has to account for installation method, correction factors, voltage drop and fault protection.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29758",
    questionNumber: 17,
    promptSuffix:
      "Approved document A requires notches in joist to be no greater than 0.125 times the:",
    correctedPromptSuffix:
      "For a solid timber floor joist, Approved Document A limits a notch to 0.125 times which dimension?",
    explanation:
      "The maximum notch depth is one eighth, or 0.125, of the joist depth. The limit protects the joist's structural capacity; it is not calculated from its width, span or spacing.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 3,
    promptSuffix:
      "BS 7671 states that no additions or alterations should be made to an existing installation unless:",
    correctedPromptSuffix:
      "Before an addition or alteration is made, what must be established about the affected existing installation under BS 7671?",
    options: {
      C: "Its equipment ratings and condition, supply capacity, earthing and bonding are adequate, and the addition will not impair safety",
    },
    explanation:
      "Regulation 132.16 does not require the whole existing installation to comply with the latest edition. It requires the installer to confirm that the relevant existing equipment, supply capacity, earthing and bonding are adequate and that the new work will not make the installation less safe.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 10,
    promptSuffix:
      "During inspection of a distribution board containing exposed conductive parts it should be verified that:",
    correctedPromptSuffix:
      "For a distribution board where opening the door could give access to live parts, which listed measure specifically controls who may open it?",
    explanation:
      "Requiring a key or tool restricts access to instructed or skilled persons and prevents ordinary users opening the enclosure. IP2X is an enclosure/access-probe requirement, not the access-control measure specifically asked for.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 17,
    promptSuffix:
      "When testing continuity of a ring final circuit wired with 2.5/1.5 PVC/PVC conductors using 'Method 1'. The value of R1 is 0.4Ω, what should be the approximate value of R2:",
    correctedPromptSuffix:
      "When testing a 2.5/1.5 mm² PVC/PVC ring final circuit by Method 1, the end-to-end line resistance r1 is 0.40 Ω. What approximate end-to-end cpc resistance r2 is expected?",
    explanation:
      "For the same material and length, resistance is inversely proportional to conductor area. The 1.5 mm² cpc therefore has about 2.5 ÷ 1.5 times the resistance of the 2.5 mm² line: 0.40 Ω × 1.667 ≈ 0.67 Ω.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 18,
    promptSuffix:
      "You are conducting ring final circuit test on a circuit containing 12 socket outlets, 11 socket outlets give a reading of 0.72? (+/- 0.5Ω) and one gives a reading of 0.81?. This might indicate:",
    correctedPromptSuffix:
      "During a ring-final cross-connection test, eleven sockets give consistent readings near 0.72 Ω and one gives a repeatable higher reading of 0.81 Ω. Which circuit arrangement could explain that isolated higher reading?",
    options: {
      A: "A high-resistance joint affecting the whole ring",
      B: "A missing earth connection at the socket",
      C: "A short circuit at the socket",
      D: "A spur supplying that socket",
    },
    explanation:
      "A spur adds extra line and cpc length between the ring and that socket, so its cross-connected R1+R2 reading can be higher than the readings around the ring. The reading should still be investigated and compared with the circuit layout rather than accepted from the number alone.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 20,
    promptSuffix:
      "During an end to end continuity test on a ring final circuit wired in pcv 2.5mm²/1.5mm² r1 reads 0.4?. What is the expected reading when testing for (R1 + R2):",
    correctedPromptSuffix:
      "A 2.5/1.5 mm² PVC/PVC ring final circuit has end-to-end line resistance r1 = 0.40 Ω and expected r2 ≈ 0.67 Ω. After cross-connection, what approximate R1+R2 reading is expected at a socket?",
    explanation:
      "For a healthy ring, the cross-connected reading is approximately (r1 + r2) ÷ 4. Using 0.40 Ω and 0.67 Ω gives 1.07 Ω ÷ 4 = 0.2675 Ω, so 0.267 Ω is the nearest option.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 22,
    promptSuffix:
      "Which ONE of the following tests would NOT be applied to a 500mA residual current device:",
    correctedPromptSuffix:
      "Which option describes an appropriate current verification approach for a 500 mA RCD?",
    options: {
      A: "A mandatory 0.5 IΔn field test only",
      B: "A mandatory 5 IΔn field test only",
      C: "No test is needed because the rating proves operation",
      D: "Operate the test button and carry out the prescribed field test at IΔn",
    },
    answer: "D",
    explanation:
      "Current BS 7671 verification requires the RCD's test button to be operated and its effectiveness verified using an AC test current at IΔn. The old routine 0.5 IΔn and 5 IΔn field-test schedule was removed; the device's marked rating alone does not prove that it operates.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 23,
    promptSuffix:
      "When taking impedance measurements at ambient temperature a 'Rule of Thumb' correction factor may be applied to the values in BS 7671 to take into account the increased resistance of conductors due to load current is:",
    correctedPromptSuffix:
      "When comparing a Zs measurement made near ambient temperature with a maximum tabulated Zs value, what rule-of-thumb factor is commonly applied to the tabulated maximum to allow for conductor heating in service?",
    explanation:
      "The measured Zs is commonly compared with 80% of the BS 7671 tabulated maximum, so the factor is 0.8. The factor is applied to the tabulated limit, not multiplied into the measured result.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 25,
    promptSuffix:
      "What is the calculated prospective short circuit current at the origin of a TN-C-S 230V installation. Ze = 0.45?:",
    correctedPromptSuffix:
      "What prospective earth-fault current is indicated at the origin of a 230 V TN-C-S installation when Ze = 0.45 Ω?",
    explanation:
      "Using Ohm's law, prospective earth-fault current is 230 V ÷ 0.45 Ω = 511 A, or 0.511 kA. Ze describes the line-to-earth loop, so this calculation is PEFC rather than a line-neutral short-circuit current.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 29,
    promptSuffix:
      "Faults within existing installations which 'do not' effect new additions to the installation:",
    correctedPromptSuffix:
      "If an inspector notices an existing-installation defect that does not affect the safety of a new addition, which action still falls within the inspector's reporting responsibility?",
    options: {
      D: "Ignore the observed defect completely because it is outside the new work",
    },
    explanation:
      "An observed defect should be brought to the person ordering the work's attention even when it is outside the addition's scope. The inspector is not automatically authorised to repair it, but silently ignoring a known safety issue is not professional reporting.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 34,
    promptSuffix:
      "Inspection of a fully enclosed domestic consumer unit would not need verification for:",
    correctedPromptSuffix:
      "Which listed inspection item specifically checks whether a domestic consumer-unit enclosure prevents access to hazardous parts?",
    answer: "B",
    explanation:
      "The enclosure's IP rating verifies protection against access to hazardous live parts, including IP2X/IPXXB on accessible faces and IP4X/IPXXD on accessible horizontal top surfaces. Being described as fully enclosed does not remove the need to inspect that protection.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 37,
    promptSuffix:
      "Put the following tests in the correct sequence: 1- earth fault loop impedance 2- polarity 3- ring circuit continuity 4- prospective fault current:",
    options: {
      A: "3, 2, 4, 1",
      B: "1, 4, 3, 2",
      C: "2, 4, 1, 3",
      D: "4, 1, 2, 3",
    },
    explanation:
      "Ring continuity and polarity are proved as dead tests before energisation. Once the installation is safe to energise, prospective fault current is established at the origin and circuit earth-fault loop impedance is then measured or otherwise verified.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 38,
    promptSuffix:
      "Before commencing live tests and before energising the installation, it is vital that you:",
    correctedPromptSuffix:
      "In addition to any barriers and access controls required by the risk assessment, what communication step is vital before energising an installation for live tests?",
    explanation:
      "People in the area must be warned before energisation so they understand that the installation is becoming live and do not interfere with it. Depending on access and risk, barriers or exclusion may also be necessary; informing people is the specific communication step asked for.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 39,
    promptSuffix:
      "A room in which there is a 13 A socket outlet is to be converted into a bathroom. The socket outlet must be:",
    options: {
      B: "Located at least 3 m horizontally from the boundary of zone 1 and protected by a 30 mA RCD",
    },
    explanation:
      "A BS 1363 socket may remain in a room containing a bath or shower only when it is outside the zones, at least 3 m horizontally from the zone 1 boundary, and has 30 mA RCD protection. The distance is not measured simply from the bath edge.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 42,
    promptSuffix:
      "When measured at the origin of an electrical installation, the value of prospective earth fault current and prospective short circuit current were of equal value. The type of earthing arrangement involved would be:",
    correctedPromptSuffix:
      "Equal PEFC and PSCC readings at an installation origin could be consistent with which listed earthing arrangement, although the readings alone cannot identify it conclusively?",
    explanation:
      "TN-C-S can give similar line-earth and line-neutral loop impedances because the protective and neutral functions share the PEN conductor upstream. Equal readings are only an indication; supply records and inspection are needed to confirm the earthing arrangement.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 43,
    promptSuffix:
      "When carrying out a prospective short circuit fault current test on a three-phase system the fault current between line conductors will be:",
    options: {
      A: "Approximately 1.73 times the fault current between one line and neutral",
    },
    explanation:
      "For comparable conductor impedances on a balanced three-phase system, line-to-line voltage is √3 times line-to-neutral voltage, so the prospective line-line fault current is approximately 1.73 times the line-neutral value.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 46,
    promptSuffix:
      "Where an installation is protected by a residual current device it should be manually tested by use of the integral test button:",
    correctedPromptSuffix:
      "How often does current BS 7671 recommend that an RCD is manually operated using its integral test button?",
    options: {
      A: "Annually",
      B: "Monthly",
      C: "Every six months",
      D: "Weekly",
    },
    explanation:
      "Current BS 7671 recommends operating the RCD test button every six months. The button checks the device's mechanical trip and internal test circuit; it does not replace periodic instrument testing where verification is required.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 47,
    promptSuffix:
      "The minimum acceptable value of insulation resistance for a 650V discharge lighting circuits is:",
    correctedPromptSuffix:
      "What is the minimum acceptable insulation resistance for a 650 V circuit when tested at the applicable 1000 V d.c. test voltage?",
    options: { D: "10 MΩ" },
    explanation:
      "For a circuit with nominal voltage above 500 V and up to 1000 V, the normal insulation-resistance test voltage is 1000 V d.c. and the minimum acceptable resistance is 1 MΩ.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 48,
    promptSuffix:
      "As an alternative to the 'D-Lok', some instruments reduce the possibility of r.c.d. tripping during impedance testing by limiting the test current to:",
    correctedPromptSuffix:
      "What is the purpose of a low-current or no-trip loop-test mode on an RCD-protected circuit?",
    options: {
      A: "To apply five times the RCD rating",
      B: "To measure insulation resistance",
      C: "To reduce the chance of the loop test tripping the RCD",
      D: "To increase the prospective fault current",
    },
    explanation:
      "A no-trip loop mode limits or shapes the test current so the instrument can measure loop impedance with less risk of operating the upstream RCD. The exact current and technique are instrument-specific rather than a universal 15 mA rule.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 51,
    promptSuffix:
      "When two 10mm² bonding conductors of equal length are connected in parallel the resistance would:",
    correctedPromptSuffix:
      "Compared with one 10 mm² bonding conductor, what happens to resistance when two identical equal-length conductors are connected in parallel?",
    options: { A: "Remain unchanged", C: "Halve" },
    explanation:
      "Two identical resistances in parallel share the current equally, giving an equivalent resistance of R ÷ 2. The result is therefore half the resistance of one conductor.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 52,
    promptSuffix:
      "When performing an initial insulation resistance test on a central heating circuit, you should:",
    correctedPromptSuffix:
      "Before insulation-resistance testing a central-heating circuit, what should be done with vulnerable electronic controls and boiler electronics?",
    options: {
      A: "Disconnect only the boiler regardless of the other controls",
      B: "Disconnect or suitably isolate all vulnerable electronic equipment in accordance with the manufacturers' instructions",
    },
    explanation:
      "The d.c. test voltage can damage electronic timers, boiler controls and other connected electronics or produce misleading readings. Every vulnerable item must be disconnected or suitably isolated as its manufacturer specifies, not just one named component.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 56,
    promptSuffix: "A minor works certificate would be issued when:",
    correctedPromptSuffix:
      "When may a Minor Electrical Installation Works Certificate be used?",
    options: {
      B: "For an addition or alteration to an existing installation that does not provide a new circuit",
    },
    explanation:
      "A Minor Works Certificate is for an addition or alteration that does not extend to providing a new circuit, such as adding a point to an existing final circuit. A new circuit requires an Electrical Installation Certificate.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 57,
    promptSuffix:
      "What would be the expected maximum resistance of a main equipotential bonding conductor:",
    correctedPromptSuffix:
      "What low-resistance benchmark is commonly used in Guidance Note 3 as an expected value for a main protective bonding conductor, subject to its calculated resistance?",
    explanation:
      "A reading around 0.05 Ω or less is commonly used as a practical low-resistance benchmark, but the measured value must also be consistent with the conductor's material, cross-sectional area, length and temperature. It is not a universal statutory pass/fail value for every bond.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 62,
    promptSuffix:
      "Regional electricity companies quote a maximum likely value of external loop impedance (outside the consumer's installation) for a TN-S system as:",
    correctedPromptSuffix:
      "When distributor data is unavailable, what typical maximum Ze value is commonly assumed for TN-S design?",
    explanation:
      "The conventional TN-S design assumption is 0.8 Ω when more accurate distributor information is unavailable. It is a planning value, not a universal maximum guaranteed by every distribution network.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 65,
    promptSuffix:
      "Which of the following earthing systems has the path for earth leakage currents via the earth itself:",
    correctedPromptSuffix:
      "Which earthing arrangement uses the general mass of Earth as part of the earth-fault return path?",
    explanation:
      "In a TT arrangement the installation earth electrode and the source electrode connect the fault loop through the general mass of Earth. TN systems instead provide a metallic protective return path to the source.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 69,
    promptSuffix:
      "Which of the following does not meet the requirements for maximum value of voltage drop on a 230V supply, supplied directly from a public low voltage system:",
    correctedPromptSuffix:
      "Which pair exceeds the recommended voltage-drop limit for a 230 V installation supplied directly from a public low-voltage system?",
    explanation:
      "The recommended limits are 3% for lighting, or 6.9 V, and 5% for other uses, or 11.5 V. In the keyed pair, 3.5 V lighting is acceptable but 11.7 V for sockets exceeds the 11.5 V limit.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 70,
    promptSuffix:
      "Table 9A in the On Site Guide gives a value of 19.51 (mΩ/m) for a line conductor of 2.5mm² and a protective conductor of 1.5mm². What would be the resistance of a circuit 25m in length when wired using these conductor:",
    correctedPromptSuffix:
      "The On-Site Guide gives R1+R2 = 19.51 mΩ/m for 2.5 mm² line and 1.5 mm² cpc conductors. What is R1+R2 for a 25 m circuit at the stated reference temperature?",
    explanation:
      "The table value already combines the line and cpc resistance per metre, so multiply it once by the one-way circuit length: 19.51 mΩ/m × 25 m = 487.75 mΩ = 0.48775 Ω, which rounds to 0.487 Ω.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 73,
    promptSuffix:
      "Which of the following does not form part of the earth fault loop impedance:",
    correctedPromptSuffix:
      "In a correctly separated TN-C-S installation, which conductor within the consumer's installation is not part of the line-to-earth fault loop?",
    explanation:
      "The load-side neutral is separate from the protective conductor and is not part of the line-to-earth fault loop. The loop runs out on the line conductor and returns through the cpc/earthing path and the upstream PEN/source path.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 74,
    promptSuffix:
      "An earth fault loop impedance tester should only allow current to flow for:",
    correctedPromptSuffix:
      "Why does an earth-fault loop impedance tester apply its test current for only a short, controlled interval?",
    options: {
      A: "To heat the circuit conductors to operating temperature",
      B: "To limit disturbance and reduce the chance of operating protective devices",
      C: "To perform an insulation-resistance test at the same time",
      D: "Because every loop tester is required to use exactly 40 ms",
    },
    answer: "B",
    explanation:
      "A loop tester injects current briefly so it can determine impedance while limiting heating, voltage disturbance and the chance of operating protective devices. The exact waveform and duration depend on the instrument and mode; 40 ms is not universal.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 75,
    promptSuffix:
      "A 100ma RCD protecting a TT installation tested at half the rated tripping current should:",
    correctedPromptSuffix:
      "During an optional half-IΔn diagnostic check on a 100 mA general non-delay RCD, what result is expected?",
    explanation:
      "At half its rated residual operating current the RCD should remain closed. This is an optional diagnostic check under current practice; the former routine 0.5 IΔn field test is no longer prescribed by BS 7671.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 77,
    promptSuffix:
      "GN3 advises that the resistance of main protective bonding conductors should not be greater than:",
    correctedPromptSuffix:
      "Which low-resistance figure is commonly used in Guidance Note 3 as an expected benchmark for main protective bonding, subject to comparison with the calculated conductor resistance?",
    explanation:
      "The commonly cited benchmark is 0.05 Ω, but the result must also make sense for the conductor's length, area, material and temperature. It is a practical expectation rather than a universal statutory maximum for every bonding conductor.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 81,
    promptSuffix:
      "The multiplier given in the On Site Guide to be used to raise an ambient temperature continuity reading is:",
    correctedPromptSuffix:
      "For the stated On-Site Guide rule of thumb that converts a copper-conductor continuity reading near 20 °C to its approximate 70 °C value, what multiplier is used?",
    explanation:
      "The rule-of-thumb multiplier is 1.2 for the stated copper-conductor temperature comparison. It is not a universal correction for every conductor material or temperature range.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 82,
    promptSuffix:
      "How long is the maximum recommended period between periodic testing for (a) offices and (b) theatres:",
    correctedPromptSuffix:
      "Using the generic initial guidance maxima before a risk-based interval is set, what periods are commonly listed for (a) offices and (b) theatres?",
    explanation:
      "Generic guidance commonly lists five years for offices and three years for theatres. The actual next interval must be set from the installation's condition, use, environment, maintenance and previous results rather than copied automatically.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 85,
    promptSuffix:
      "A 230V single phase circuit supplies a light which is controlled by a passive infra red sensor. Special care must be taken before insulation resistance testing is carried out because the test may:",
    correctedPromptSuffix:
      "If a PIR sensor is not rated to withstand the insulation-test voltage and remains connected, what is the most serious risk of applying the test?",
    explanation:
      "The d.c. insulation-test voltage can exceed what the sensor electronics are designed to withstand and permanently damage them. Connected electronics can also distort the reading, but irreversible damage is the most serious risk asked for.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 87,
    promptSuffix:
      "Digital test instruments should have an accuracy, as stated in GN3, of what percentage of full scale deflection (fsd):",
    correctedPromptSuffix:
      "Which statement best describes how the accuracy of a modern digital electrical test instrument should be assessed?",
    options: {
      A: "Assume a fixed 1% of full-scale-deflection limit for every instrument",
      B: "Judge accuracy only from the number of display digits",
      C: "Use the manufacturer's specification and ongoing verification checks, including any percentage-of-reading, digit and range terms",
      D: "Treat any stable displayed value as accurate",
    },
    explanation:
      "Modern digital-instrument accuracy is assessed from the manufacturer's specification, commonly combining a percentage of reading with digits or range terms, and from ongoing accuracy checks. Full-scale deflection is analogue terminology and a single 5% figure is not a complete modern specification.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29750",
    questionNumber: 89,
    promptSuffix:
      "When verifying the continuity of a ring circuit the measured loop resistance of the line, neutral and cpc were 0.9 Ω, 0.9 Ω and 1.5Ω respectively. What is the expected test value at each socket between the line and cpc when interconnected at the board:",
    correctedPromptSuffix:
      "Ignoring parallel paths, what theoretical line-to-cpc cross-connected reading is expected near the midpoint of a ring with r1 = 0.9 Ω and r2 = 1.5 Ω?",
    explanation:
      "The theoretical midpoint value is (r1 + r2) ÷ 4 = (0.9 Ω + 1.5 Ω) ÷ 4 = 0.6 Ω. Because r1 and r2 differ, real readings vary around the ring rather than being exactly 0.6 Ω at every socket.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29759",
    questionNumber: 1,
    promptSuffix:
      "Prior to the formal appointment of an Approved Inspector, what document needs to be provided to the local authority?",
    correctedPromptSuffix:
      "If a project uses a private registered building control approver for ordinary building work, what notice is given to the local authority?",
    explanation:
      "An Initial Notice jointly given by the client and registered building control approver tells the local authority that the private building-control route will be used. Planning permission and building plans serve different purposes.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29759",
    questionNumber: 2,
    promptSuffix:
      "When carrying out an insulation resistance test on a lighting circuit, you should ensure?",
    correctedPromptSuffix:
      "On a two-way lighting circuit, what should be done during insulation-resistance testing so every switched conductor path is included?",
    options: {
      D: "Operate the two-way switches and repeat the test as needed",
    },
    explanation:
      "Changing the two-way switch positions and repeating the measurement brings each strapper and switched path into the test. Leaving the switches in only one state can leave part of the fixed wiring untested.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29759",
    questionNumber: 3,
    promptSuffix:
      "What is the minimum luminous rating of an energy efficient fixed light fitting?",
    correctedPromptSuffix:
      "Under the Approved Document L guidance currently in force in England, what is the minimum luminous efficacy for lamps in each internal fixed light fitting in a dwelling?",
    options: { D: "75 light source lumens per circuit-watt" },
    answer: "D",
    explanation:
      "Current Approved Document L guidance specifies at least 75 light-source lumens per circuit-watt for internal fixed lighting. The old 40 lumens per circuit-watt value is from superseded guidance.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29759",
    questionNumber: 4,
    promptSuffix:
      "In a domestic TN system, the main earthing conductor size should be?",
    correctedPromptSuffix:
      "Using BS 7671 Table 54.7, what copper earthing-conductor size corresponds to a 25 mm² copper line conductor in a TN system?",
    explanation:
      "Table 54.7 gives a 16 mm² copper protective conductor for a copper line conductor greater than 16 mm² and up to 35 mm². A full design may instead use the adiabatic calculation where appropriate.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29759",
    questionNumber: 5,
    promptSuffix:
      "Where incoming mains services are incorrectly bonded, the result can be?",
    correctedPromptSuffix:
      "If an incoming metallic service that is an extraneous-conductive-part is not correctly main-bonded, what is the principal safety consequence?",
    explanation:
      "Without effective main protective bonding, a fault can create a dangerous potential difference between exposed electrical equipment and the incoming metal service. A person bridging those parts can receive an electric shock.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29759",
    questionNumber: 6,
    promptSuffix:
      "An alternative method of testing the resistance of an earth electrode is by the use of?",
    correctedPromptSuffix:
      "Which listed instrument can be used to determine earth-electrode resistance by an earth fault loop method, where that method is appropriate?",
    explanation:
      "A suitable earth-fault loop impedance tester can determine the loop containing the electrode, with the relevant external component accounted for where necessary. A low-resistance ohmmeter cannot measure resistance through the general mass of Earth.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29759",
    questionNumber: 7,
    promptSuffix: "What is the meaning of this symbol?",
    correctedPromptSuffix: "What does the displayed IEC marking mean?",
    options: {
      A: "An unprotected lamp must be used only in a luminaire with a protective shield",
    },
    explanation:
      "IEC 60417-6071 warns that an unprotected lamp must be operated only in a luminaire fitted with a protective shield. The mark is about lamp containment and user protection, not permission to cover a luminaire with insulation.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29759",
    questionNumber: 8,
    promptSuffix:
      "Which compliance certificate is not required to be provided to a householder on completion of notifiable work?",
    correctedPromptSuffix:
      "Which listed document belongs to planning rather than completion or certification of notifiable Part P work?",
    options: {
      C: "Final certificate issued under a registered building control approver route",
    },
    explanation:
      "Planning approval concerns permission for development, not electrical safety certification or Building Regulations completion. The electrical certificate and applicable building-control completion or final certificate document the work's compliance route.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29759",
    questionNumber: 10,
    promptSuffix:
      "A lighting circuit installed in a domestic property would usually have a protective device rated at?",
    correctedPromptSuffix:
      "In a typical small domestic lighting-circuit design, which listed overcurrent protective-device rating is commonly used?",
    explanation:
      "A 6 A device is commonly used for a small domestic lighting circuit. The final rating must still be selected from cable capacity, installation method, load, fault protection and voltage drop rather than habit alone.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29759",
    questionNumber: 11,
    promptSuffix:
      "For how many hours does emergency lighting need to operate in places of entertainment and for sleeping risk?",
    correctedPromptSuffix:
      "What minimum rated duration is normally required for emergency escape lighting in places used for sleeping and in places of entertainment?",
    explanation:
      "A three-hour duration is normally required for sleeping accommodation and places of entertainment so escape lighting remains available through an extended supply failure and any evacuation or reoccupation process.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29759",
    questionNumber: 12,
    promptSuffix:
      "Which of these ventilation systems is most common in new dwellings?",
    correctedPromptSuffix:
      "In a natural-ventilation strategy for a new dwelling, which component admits outdoor air continuously into habitable rooms?",
    explanation:
      "Background ventilators, commonly trickle vents, provide a controllable path for continuous air supply to habitable rooms. Extract systems remove air from wet rooms, while heat-recovery supply is part of a mechanical system rather than natural ventilation.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29759",
    questionNumber: 13,
    promptSuffix:
      "The number of socket outlets that can be installed on a standard BS1363 ring final circuit is?",
    correctedPromptSuffix:
      "Does BS 7671 set a fixed numerical maximum for socket-outlets on a properly designed ring final circuit?",
    options: {
      D: "No fixed numerical limit; the circuit must still satisfy all design constraints",
    },
    explanation:
      "BS 7671 does not set a simple numerical socket limit for a ring final circuit. The design must still meet limits for load, served floor area where the standard arrangement is used, cable capacity, voltage drop and fault protection.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29759",
    questionNumber: 14,
    promptSuffix:
      "The Requirements for Electrical Installations is published by the IET and is?",
    correctedPromptSuffix:
      "BS 7671, Requirements for Electrical Installations, is:",
    options: { A: "A non-statutory British Standard" },
    explanation:
      "BS 7671 is a non-statutory British Standard. It is not itself an Act or regulation, although following it is a widely recognised way to support compliance with legal electrical-safety duties.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29759",
    questionNumber: 15,
    promptSuffix:
      "When replacing a 7kW shower unit with a new 10kW unit it, you must ensure?",
    correctedPromptSuffix:
      "Which design check is specifically prompted by increasing an instantaneous shower rating from 7 kW to 10 kW?",
    options: {
      B: "The circuit cable and protective device are adequate for the increased load",
    },
    explanation:
      "The higher power increases design current, so the cable capacity, protective-device rating, voltage drop and fault protection must be reassessed. Water flow and heating performance do not prove that the electrical circuit is adequate.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29759",
    questionNumber: 16,
    promptSuffix:
      "A consumer unit that has a missing blank plate would contravene?",
    correctedPromptSuffix:
      "A missing consumer-unit blank immediately breaches which enclosure requirement?",
    explanation:
      "The open way can allow a finger or object to reach hazardous live parts, so the enclosure no longer provides the required IP2X/IPXXB protection on an accessible face. A suitable blank must restore the enclosure integrity.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29759",
    questionNumber: 17,
    promptSuffix: "A member of a Competent Persons Scheme must?",
    correctedPromptSuffix:
      "What is the core requirement for a member of a self-certification scheme (formerly a competent person scheme)?",
    options: {
      A: "Demonstrate competence within their registered scope and self-certify compliant work",
      B: "Hold every electrical qualification available",
    },
    explanation:
      "The member must demonstrate competence for the work within the scheme's registered scope and operate the required compliance and certification systems. No rule requires every possible qualification or a fixed number of years in the trade.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29759",
    questionNumber: 18,
    promptSuffix:
      "When rewiring a socket outlet circuit in a domestic dwelling, the sockets outlets should be left at a height?",
    correctedPromptSuffix:
      "When a domestic socket circuit is rewired as an alteration, which Building Regulations principle applies to the completed work?",
    options: {
      A: "Every socket must be fixed with its bottom edge at 450 mm",
      B: "Every socket must be fixed with its top edge at 450 mm",
      C: "The new work must comply, and the dwelling must be no more unsatisfactory than before",
      D: "Every socket must be reachable without bending",
    },
    explanation:
      "Alteration work must comply with the applicable requirements and must not make the dwelling's compliance more unsatisfactory than before. The 450-1200 mm accessibility guidance is not an automatic demand to relocate every existing accessory during any rewire.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29759",
    questionNumber: 19,
    promptSuffix:
      "An electrical contractor undertaking notifiable work can self-certify their work if?",
    correctedPromptSuffix:
      "An electrical contractor can self-certify notifiable work through which route?",
    options: {
      A: "Registration with an authorised self-certification scheme",
    },
    explanation:
      "Registration with an authorised self-certification scheme allows the business to certify qualifying work within its approved scope. Experience alone or informal local-authority permission does not create that route.",
  },
  {
    examId: "building-regulations",
    variantId: "quiz-29759",
    questionNumber: 20,
    promptSuffix:
      "The year that The Construction, Design and Management Regulations first came into force was?",
    correctedPromptSuffix:
      "In which year did the original Construction (Design and Management) Regulations 1994 come into force?",
    explanation:
      "The original Construction (Design and Management) Regulations 1994 came into force on 31 March 1995. Later CDM Regulations replaced them, but the historical commencement year asked for is 1995.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29751",
    questionNumber: 1,
    promptSuffix:
      "OSG gives the maximum stable value of Ze for a TT installation as:",
    correctedPromptSuffix:
      "Above which earth-electrode resistance does IET guidance warn that a TT electrode may be unstable and require investigation?",
    explanation:
      "An electrode resistance above 200 Ω may be unstable and should be investigated. This is the consumer's electrode resistance RA; TT Ze is the external source-and-Earth component and does not include the installation electrode.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29751",
    questionNumber: 7,
    promptSuffix: "A British Standard having a BS EN number is a:",
    correctedPromptSuffix: "What does a BS EN designation mean?",
    options: { B: "A European Standard adopted as a British Standard" },
    explanation:
      "BS EN means that a European Standard has been adopted into the British Standards catalogue. It does not by itself state that the standard has a separate statutory or harmonised legal status.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29751",
    questionNumber: 8,
    promptSuffix:
      "The top surface of a consumer unit should be protected from ingress of dust to a standard of:",
    correctedPromptSuffix:
      "What minimum protection against small solid objects is required on an accessible horizontal top surface of a consumer unit?",
    explanation:
      "An accessible horizontal top surface requires at least IP4X or IPXXD, preventing entry by a 1 mm probe. IP4X is not a dust-protection rating; dust protection begins at IP5X.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29751",
    questionNumber: 10,
    promptSuffix:
      "During initial verification of a TN system the installation earth conductor was recorded as 16mm². The minimum size of main bonding conductor should be:",
    correctedPromptSuffix:
      "For a TN-C-S installation with a copper distributor neutral/PEN conductor not exceeding 35 mm², what minimum copper main protective bonding conductor is selected from BS 7671 Table 54.8?",
    explanation:
      "Table 54.8 gives a 10 mm² copper main protective bonding conductor where the distributor's copper neutral/PEN does not exceed 35 mm². Bonding size is selected from the supply neutral/PEN information, not simply copied from the installation's earthing-conductor size.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29751",
    questionNumber: 19,
    promptSuffix:
      "During an external loop impedance test, the main earthing conductor should be:",
    correctedPromptSuffix:
      "When a direct live Ze test is justified and carried out under a controlled procedure, what temporary connection change removes parallel earth paths from the measurement?",
    explanation:
      "The installation's earthing conductor is temporarily disconnected from the MET so the tester measures the external path rather than parallel installation paths. This is hazardous live work: downstream circuits remain isolated, access is controlled, the conductor is handled safely and it is reconnected immediately after the test; enquiry or calculation should be preferred where practical.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29751",
    questionNumber: 21,
    promptSuffix:
      "During earth electrode resistance testing the current test spike is placed 30 metres from the earth electrode under test. The potential test spike is placed midway between the earth electrode and the current spike. The potential spike would then normally be moved a distance each way of approximately:",
    correctedPromptSuffix:
      "In a fall-of-potential electrode test with the current spike 30 m away, a 62% reading is checked by moving the potential spike by 10% of the electrode-to-current-spike distance each way. How far is each check movement?",
    explanation:
      "Ten percent of the 30 m separation is 3 m, so the potential spike is moved 3 m nearer and 3 m farther away to check for a stable plateau. The exact field layout must still follow the instrument manufacturer's method and site conditions.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29751",
    questionNumber: 24,
    promptSuffix: "Instrument calibration certificates are normally valid for:",
    correctedPromptSuffix:
      "What should determine the calibration and verification interval for an electrical test instrument?",
    options: {
      A: "The manufacturer's guidance, use, risk, history and documented ongoing accuracy checks",
      B: "A universal fixed two-year period",
      C: "Three months for every instrument",
      D: "Six months regardless of use or condition",
    },
    explanation:
      "There is no universal one-year validity period for every calibration certificate. The interval is based on manufacturer guidance, frequency and severity of use, risk, calibration history and documented checks against known values between calibrations.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29751",
    questionNumber: 26,
    promptSuffix:
      "Four circuits have insulation resistances of 20 MΩ, 25 MΩ, 40 MΩ and 50 M.Ω. When tested together (insulation lump test) what would be the expected reading:",
    correctedPromptSuffix:
      "Four circuits have insulation resistances of 20 MΩ, 25 MΩ, 40 MΩ and 50 MΩ. When tested together, what approximate parallel insulation resistance is expected?",
    explanation:
      "The insulation paths are in parallel: 1/R = 1/20 + 1/25 + 1/40 + 1/50 = 0.135 MΩ⁻¹. Inverting gives R = 7.407 MΩ, which rounds to 7.4 MΩ.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29751",
    questionNumber: 29,
    promptSuffix:
      "If the person ordering installation work is not the user then it is recommended that copies of the electrical installation certificate must be given to:",
    correctedPromptSuffix:
      "If the person ordering installation work is not the owner, who should receive the Electrical Installation Certificate?",
    options: {
      C: "The person ordering the work and the owner",
      D: "The owner and the local building authority",
    },
    explanation:
      "The original certificate is given to the person ordering the work, and that person must provide the owner with it or a full copy when they are different. Building-control documentation is a separate process and does not replace this handover.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29751",
    questionNumber: 30,
    promptSuffix:
      "The type of certificate issued after installing an additional socket outlet within an existing installation would be a:",
    correctedPromptSuffix:
      "Which certificate is specifically intended for adding a socket-outlet to an existing final circuit when no new circuit is provided?",
    explanation:
      "A Minor Electrical Installation Works Certificate is specifically intended for a small addition or alteration to an existing circuit that does not provide a new circuit. It records the relevant design, inspection and test information for that limited work.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29752",
    questionNumber: 1,
    promptSuffix:
      "The neutral of the supply cable is used as part of the earth return path in which of the following systems:",
    correctedPromptSuffix:
      "In which system is a combined PEN conductor used in the distributor's supply and then separated into neutral and protective conductors at the installation?",
    explanation:
      "TN-C-S uses a combined protective-earth-and-neutral conductor in part of the supply and separates it into PE and neutral at the installation. TN-C keeps the functions combined throughout, TN-S keeps them separate throughout, and TT uses an installation earth electrode.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29752",
    questionNumber: 2,
    promptSuffix: "The Electricity at Work Regulations concern:",
    correctedPromptSuffix:
      "Which description best reflects the scope of the Electricity at Work Regulations 1989?",
    options: {
      A: "Electrical systems and work activities where electrical danger may arise",
    },
    explanation:
      "EAWR applies to electrical systems and work activities where electrical danger may arise and places duties on employers, employees and self-employed people. It is not restricted to high voltage, special locations or systems below a particular voltage, but it also does not regulate literally every non-electrical aspect of a system.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29752",
    questionNumber: 3,
    promptSuffix:
      "On completion of periodic testing an old domestic installation, the insulation resistance is found to be below the requirements of BS 7671. The immediate action to be taken is to:",
    correctedPromptSuffix:
      "After periodic testing finds insulation resistance below the applicable minimum, who must immediately be informed so the observation and further action can be addressed?",
    explanation:
      "The person ordering the work must be told promptly so the defect is recorded, assessed and acted on. If the result indicates immediate danger, the inspector must also recommend or arrange appropriate urgent safety action within their authority; notification alone does not repair the fault.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29752",
    questionNumber: 5,
    promptSuffix:
      "Regional electricity companies quote a maximum likely value of external loop impedance (outside the consumer's installation) for a TN-C-S system as:",
    correctedPromptSuffix:
      "What typical maximum Ze value is commonly used for TN-C-S design when distributor data is unavailable?",
    explanation:
      "The conventional TN-C-S design assumption is 0.35 Ω when more accurate distributor information is unavailable. It is not a universal guaranteed maximum, so the supply characteristic should be obtained by enquiry or appropriately verified.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29752",
    questionNumber: 8,
    promptSuffix:
      "Statement 1 - A polarity test is carried out with a loop tester Statement 2 - A polarity test can confirm correct connection of conductors within an Edison Screw lamp:",
    correctedPromptSuffix:
      "Statement 1 - During dead initial verification, polarity is normally proved with an earth fault loop impedance tester. Statement 2 - A dead polarity test can confirm the correct conductor connections at an Edison screw lampholder:",
    explanation:
      "Statement 1 is false because dead polarity is normally proved with a low-resistance continuity instrument before energisation, not a live loop tester. Statement 2 is true because the test can confirm that the centre contact is connected to line and the outer screw contact to neutral.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29752",
    questionNumber: 9,
    promptSuffix:
      "Which test requires you to measure the resistance from the earth at the Consumer Unit to the furthest earth connection in the circuit:",
    correctedPromptSuffix:
      "Which test uses a low-resistance ohmmeter to verify the circuit protective conductor path from the consumer unit to circuit points?",
    explanation:
      "A protective-conductor continuity test uses a low-resistance ohmmeter to prove the cpc path from the origin to the points served. Relevant points are checked; testing only the furthest point is not automatically enough to reveal every branch or connection defect.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29752",
    questionNumber: 10,
    promptSuffix:
      "If an insulation resistance lump test at the main switch fuse of a very large installation gave a value of 0.45MΩ the electrician should:",
    correctedPromptSuffix:
      "If an insulation-resistance lump test at the main switch of a very large installation gives 0.45 MΩ, what should the electrician do next?",
    explanation:
      "The combined value is below the normal minimum, but a large number of acceptable circuit insulation paths in parallel can lower a lump reading. Test circuits separately to locate any defective circuit and establish whether the individual results comply.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29752",
    questionNumber: 11,
    promptSuffix:
      "It is recommended that low-resistance ohmmeters used for continuity measurements should have a no-load voltage and a short-circuit current of:",
    correctedPromptSuffix:
      "A low-resistance ohmmeter used for continuity verification should have what open-circuit voltage and test current?",
    options: {
      D: "Voltage between 4 V and 24 V; test current of at least 200 mA",
    },
    explanation:
      "The continuity instrument should have an open-circuit voltage between 4 V and 24 V and deliver at least 200 mA at the specified low resistance. This helps reveal poor connections that a tiny signal current might not expose.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29752",
    questionNumber: 12,
    promptSuffix:
      "If each of the three circuits had been tested individually and gave readings of 80 MΩ, 60 MΩ and 30 MΩ respectively, what would be the expected overall insulation resistance:",
    correctedPromptSuffix:
      "Three circuits have individual insulation resistances of 80 MΩ, 60 MΩ and 30 MΩ. What approximate resistance is expected when they are tested together in parallel?",
    explanation:
      "The insulation paths are parallel: 1/R = 1/80 + 1/60 + 1/30 = 0.0625 MΩ⁻¹. Inverting gives R = 16 MΩ.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29752",
    questionNumber: 13,
    promptSuffix:
      "Which of the following is the most suitable instrument to conduct a polarity test:",
    correctedPromptSuffix:
      "During dead initial verification, which listed instrument is most suitable for proving polarity?",
    explanation:
      "A low-resistance ohmmeter is used with the circuit isolated to prove conductor connections and the placement of single-pole devices before energisation. A high-resistance or insulation tester is designed for insulation, not low-resistance continuity paths.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29752",
    questionNumber: 14,
    promptSuffix:
      "The most convenient method of determining the value of the prospective short circuit current at the origin of an existing installation would be by:",
    correctedPromptSuffix:
      "When a live test is justified, which listed method directly determines prospective short-circuit current at the origin using a suitable instrument?",
    explanation:
      "A suitable prospective-fault-current instrument directly determines the available short-circuit current at the origin. Reliable distributor information or calculation may avoid live testing and should be preferred where it provides adequate evidence.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29752",
    questionNumber: 15,
    promptSuffix:
      "When performing an insulation resistance test on a two way lighting circuit, you should:",
    options: { D: "Operate the switches and repeat the test as needed" },
    explanation:
      "Operating the two-way switches and repeating the measurement brings each strapper and switched conductor path into the test. A single fixed switch position can leave part of the wiring untested.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29752",
    questionNumber: 16,
    promptSuffix:
      "The measured value of loop impedance for a circuit is 0.83Ω. If the temperature at the time of the test was 20°C and the cable is 70°C (factor 1.2) what is the corrected value. Ze = 0.4Ω:",
    correctedPromptSuffix:
      "A circuit Zs measures 0.83 Ω at 20 °C. If its conductors operate at 70 °C using a factor of 1.2 and Ze = 0.40 Ω, what is the corrected Zs?",
    explanation:
      "Only the circuit-conductor part is temperature-corrected: R1+R2 = 0.83 − 0.40 = 0.43 Ω. Then 0.40 + (0.43 × 1.2) = 0.916 Ω.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29752",
    questionNumber: 18,
    promptSuffix: "A polarity test is conducted to verify that:",
    options: {
      A: "Single-pole protective and switching devices are connected in the line conductor",
    },
    explanation:
      "Polarity verification confirms that single-pole fuses, circuit-breakers and switches interrupt the line conductor, and that accessories such as Edison-screw lampholders have the intended line and neutral connections.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29752",
    questionNumber: 20,
    promptSuffix: "A 'tong tester' is used to measure:",
    correctedPromptSuffix:
      "What quantity does the jaw of a clamp (tong) ammeter measure without opening the conductor?",
    explanation:
      "The clamp senses the magnetic field around a current-carrying conductor and displays current without disconnecting it. Some modern clamp meters also accept leads for voltage or resistance, but the jaw itself measures current.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29752",
    questionNumber: 21,
    promptSuffix:
      "If the readings for (r1 + r2) recorded while testing the continuity of ring final circuit conductors is 0.9 Ω each, what will be the value of (R1 + R2):",
    correctedPromptSuffix:
      "If ring-final end-to-end readings are r1 = 0.9 Ω and r2 = 0.9 Ω, what theoretical cross-connected R1+R2 value is expected?",
    explanation:
      "The theoretical cross-connected value is (r1 + r2) ÷ 4 = (0.9 Ω + 0.9 Ω) ÷ 4 = 0.45 Ω.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29752",
    questionNumber: 22,
    promptSuffix:
      "Table I1 in the On Site Guide gives a value of 19.51 (mΩ/m) for a line conductor of 2.5mm² and a protective conductor of 1.5mm². What would be the resistance of a circuit 25m in length when wired using these conductors:",
    correctedPromptSuffix:
      "The On-Site Guide gives R1+R2 = 19.51 mΩ/m for 2.5 mm² line and 1.5 mm² cpc conductors. What approximate resistance is expected for a 25 m circuit?",
    options: { A: "0.488 Ω" },
    explanation:
      "The tabulated value already combines line and cpc resistance per metre. Multiply by the one-way circuit length: 19.51 mΩ/m × 25 m = 487.75 mΩ = 0.48775 Ω, which rounds to 0.488 Ω.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29752",
    questionNumber: 23,
    promptSuffix:
      "An insulation resistance tester must be capable of delivering a test current of not less than:",
    correctedPromptSuffix:
      "At the specified minimum acceptable insulation resistance, what minimum test current must an insulation-resistance tester be capable of delivering at its test voltage?",
    explanation:
      "The tester must be capable of delivering at least 1 mA at the specified test voltage when connected to the relevant minimum resistance. This confirms that the instrument can maintain an effective verification voltage under load.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29752",
    questionNumber: 24,
    promptSuffix:
      "The test current applied to a 30mA RCD to check for a 40ms maximum disconnection time is:",
    correctedPromptSuffix:
      "What current was applied during the former 5 IΔn field test on a 30 mA RCD?",
    explanation:
      "Five times 30 mA is 150 mA. The former test used that current for the 40 ms additional-protection check; current BS 7671 field verification prescribes the AC test at IΔn, with a 5 IΔn result used only as optional diagnostic information.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29752",
    questionNumber: 25,
    promptSuffix:
      "The maximum tabulated value of Zs for a circuit is 2.82 Ω. Using the rule of thumb method, calculate the adjusted measured value:",
    correctedPromptSuffix:
      "The maximum tabulated Zs is 2.82 Ω. Using the 0.8 rule of thumb, what maximum ambient measured value is used for comparison?",
    explanation:
      "Apply the factor to the tabulated maximum: 2.82 Ω × 0.8 = 2.256 Ω. A measured Zs at ambient temperature should not exceed that comparison value.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29752",
    questionNumber: 26,
    promptSuffix:
      "A document for recording information from test equipment would be called:",
    correctedPromptSuffix:
      "Which document records the measured test results for the installation's circuits?",
    explanation:
      "The Schedule of Test Results records circuit measurements such as continuity, insulation resistance, polarity, Zs and RCD results. The Schedule of Inspections records visual verification items rather than instrument readings.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29752",
    questionNumber: 27,
    promptSuffix:
      "What is the calculated prospective short circuit current at the origin of a TN-C-S 230V installation. Ze = 0.22 Ω:",
    correctedPromptSuffix:
      "What prospective earth-fault current is calculated at the origin of a 230 V TN-C-S installation when Ze = 0.22 Ω?",
    explanation:
      "Prospective earth-fault current is 230 V ÷ 0.22 Ω = 1045 A, or 1.045 kA. The installation's recorded prospective fault current is the greater of the relevant earth-fault and short-circuit values.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29752",
    questionNumber: 28,
    promptSuffix:
      "Records of all checks, inspections and tests to an installation should be kept:",
    correctedPromptSuffix:
      "For how long does IET guidance recommend retaining installation inspection and test records?",
    explanation:
      "Records should be retained for the working life of the installation so later inspectors and designers can compare results, identify deterioration and understand alterations. EAWR does not create a universal fixed one-, three- or ten-year period for these BS 7671 records.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29742",
    questionNumber: 7,
    promptSuffix:
      "Equipment with an earth leakage current designed to exceed 3.5 mA shall:",
    correctedPromptSuffix:
      "Under current BS 7671, which listed connection method is acceptable for an individual item whose protective-conductor current exceeds 10 mA?",
    options: {
      A: "Permanent wiring, or a BS EN 60309-2 connection with the required protective-conductor arrangement",
    },
    explanation:
      "Current BS 7671 requires special connection measures for an individual item above 10 mA. Acceptable routes include permanent wiring or a BS EN 60309-2 plug-and-socket arrangement with the specified robust protective conductor; the original BS EN 6030-2 reference was also a typo.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29742",
    questionNumber: 9,
    promptSuffix:
      "Stationary equipment and appliances are defined as not having a carrying handle and have a mass exceeding:",
    correctedPromptSuffix:
      "What happened to the older 'stationary equipment' category in the 5th edition IET Code of Practice?",
    options: {
      A: "It now applies above 15 kg",
      B: "It was removed in favour of assessing the equipment's actual use and risk",
      C: "It was renamed Class I equipment",
      D: "It now applies above 25 kg",
    },
    explanation:
      "The 5th edition removed the stationary, portable, fixed and moveable labels. How equipment is actually used can affect risk and maintenance frequency, but an 18 kg threshold no longer determines the inspection and testing regime.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29742",
    questionNumber: 11,
    promptSuffix:
      "Equipment having no provision for the connection of exposed metalwork to a protective conductor is:",
    correctedPromptSuffix:
      "Which equipment class relies on double or reinforced insulation and therefore does not require a protective-earth connection?",
    explanation:
      "Class II equipment relies on double or reinforced insulation rather than a protective-earth connection. The original wording was not exclusive because obsolete Class 0 equipment also had no protective-earth provision.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29742",
    questionNumber: 13,
    promptSuffix:
      "Moveable (transportable) equipment is limited to a maximum mass of:",
    correctedPromptSuffix:
      "Under current IET guidance, why can equipment that is frequently moved require more frequent inspection?",
    options: {
      A: "Its mass automatically changes its shock-protection class",
      B: "Movement can increase wear, flexing and mechanical damage",
      C: "Every moved item requires a daily instrument test",
      D: "Anything below 18 kg is automatically Class II",
    },
    explanation:
      "The old 18 kg moveable-equipment category was removed. Movement remains relevant because it can increase cable flexing, impact and other damage, which a risk assessment may address with more frequent checks.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29742",
    questionNumber: 19,
    promptSuffix: "3A fuses may be used in plug tops for appliances up to:",
    correctedPromptSuffix:
      "According to Electrical Safety First's general guide, which statement is correct when selecting a replacement BS 1362 plug fuse?",
    options: {
      A: "Every appliance should use a 13 A fuse",
      B: "Appliances below about 700 W commonly use 3 A, while higher-rated appliances commonly use 13 A",
      C: "A 5 A fuse is mandatory for every appliance",
      D: "The fuse can be chosen without checking the rating plate or instructions",
    },
    answer: "B",
    explanation:
      "The usual modern choices are 3 A and 13 A. Below about 700 W a 3 A fuse is commonly used; from about 700 W upward a 13 A fuse is the general guide, but the manufacturer's specified replacement rating takes precedence.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29742",
    questionNumber: 21,
    promptSuffix: "The length of a 1.5mm² should not exceed:",
    correctedPromptSuffix:
      "Under the cited IET extension-lead guidance, the recommended maximum length for a 2.5 mm² extension lead is:",
    answer: "C",
    explanation:
      "The cited guidance gives 25 m for 2.5 mm² conductors. This also removes the incomplete wording and exact duplication of the earlier question, which already tests the 15 m recommendation for 1.5 mm².",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29742",
    questionNumber: 23,
    promptSuffix: "Before conducting testing on IT equipment:",
    correctedPromptSuffix:
      "Before disconnecting active IT equipment so that it can be inspected or tested, whose permission should be obtained?",
    explanation:
      "Permission from the user or other person responsible for the active equipment should be obtained before disconnection, because interruption can cause data loss or disrupt work. Manufacturer instructions must also be followed when selecting tests, but that is a separate requirement.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29742",
    questionNumber: 25,
    promptSuffix:
      "Internal protective conductors of equipment designed to have a protective conductor current exceeding 3.5 mA should be not less than:",
    correctedPromptSuffix:
      "For an individual item above 10 mA connected through a 16 A BS EN 60309-2 plug and socket, what minimum protective-conductor cross-sectional area is required in the flexible cable by current BS 7671 guidance?",
    options: { D: "2.5 mm²" },
    answer: "D",
    explanation:
      "For this current BS 7671 connection route, the flexible cable's protective conductor must be at least 2.5 mm² for a 16 A BS EN 60309-2 plug. The original 1.0 mm² value came from superseded equipment guidance.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29742",
    questionNumber: 27,
    promptSuffix: "Microwave ovens should be functionally tested to:",
    correctedPromptSuffix:
      "Microwave ovens should be functionally checked to ensure that opening the door:",
    options: { C: "Stops microwave generation through the door interlock" },
    explanation:
      "The safety function is that opening or releasing the door stops microwave generation. It need not remove every electrical supply from the oven, because a display, fan or control circuit may remain powered.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29742",
    questionNumber: 28,
    promptSuffix:
      "An appliance which has double insulation throughout and also provision for earthing would be classified as what type of equipment:",
    correctedPromptSuffix:
      "An appliance uses supplementary insulation in parts but also relies on a protective-earth connection to accessible conductive parts. How is it classified for in-service inspection?",
    explanation:
      "Because the protective-earth connection is part of the shock-protection arrangement, the appliance is treated as Class I. The original wording was ambiguous because Class II equipment can have a functional-earth connection that is not a protective earth.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29742",
    questionNumber: 29,
    promptSuffix: "Stationary equipment in schools would require user checks:",
    correctedPromptSuffix:
      "Who should determine suitable inspection and test intervals for electrical equipment in a school under current IET guidance?",
    options: {
      A: "The appliance tester alone",
      B: "The equipment user alone",
      C: "The manufacturer alone",
      D: "The dutyholder, using a risk assessment and competent advice where needed",
    },
    explanation:
      "The 5th edition removed the old fixed-frequency table. The dutyholder sets and reviews intervals from risk factors such as environment, users, construction, equipment type, use, installation method and previous records.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29742",
    questionNumber: 32,
    promptSuffix:
      "The maximum current carrying capacity of a 1.5 mm² cable is approximately:",
    correctedPromptSuffix:
      "Why is a bare 'maximum current-carrying capacity' for a 1.5 mm² flexible cable potentially misleading?",
    options: {
      A: "It is always exactly 10 A",
      B: "Capacity depends on cable construction, installation, ambient conditions and manufacturer data",
      C: "It is always exactly 20 A",
      D: "It is always exactly 6 A",
    },
    explanation:
      "Cross-sectional area alone does not establish one universal current rating. Cable construction, number of loaded cores, ambient temperature, coiling or covering, installation conditions and manufacturer data all affect the permissible current.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29742",
    questionNumber: 35,
    promptSuffix:
      "Which of the following situations regarding 'electrical equipment' is not covered by the Electricity at Work Regulations:",
    correctedPromptSuffix:
      "Which listed situation is outside the Electricity at Work Regulations because it is not connected with a work activity?",
    options: {
      A: "An employee's own equipment used only for private purposes at home",
    },
    explanation:
      "The Regulations apply to electrical systems and equipment in connection with work activities, including employer equipment used for homeworking and employee-owned equipment allowed at work. Purely private domestic use is outside that work-activity scope.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29742",
    questionNumber: 37,
    promptSuffix:
      "An earth continuity test should be carried out using a test current of between:",
    correctedPromptSuffix:
      "Under current IET guidance, which earth-continuity approach is generally preferred for routine in-service testing?",
    options: {
      A: "A suitable lower-current continuity test selected for the equipment",
      B: "A current equal to the plug-fuse rating",
      C: "A mandatory current twice the plug-fuse rating",
      D: "A mandatory 26 A test for every item",
    },
    explanation:
      "The 5th edition gives preference to a suitable lower-current earth-continuity test. The old high-current range was not universally required, and even the former IET source stated a maximum of 25 A rather than 26 A.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29742",
    questionNumber: 39,
    promptSuffix:
      "An insulation resistance test on Class I equipment indicates a result of 0.4 MΩ. When connected to a 230V supply the earth leakage current will be:",
    correctedPromptSuffix:
      "If a 0.4 MΩ insulation-resistance result is treated as a purely resistive path, what current does Ohm's law predict at 230 V?",
    explanation:
      "I = V/R = 230/400,000 = 0.000575 A, or about 0.57 mA. The qualification matters because actual a.c. protective-conductor current can also contain capacitive and electronic-filter components that a d.c. insulation reading does not predict.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29742",
    questionNumber: 43,
    promptSuffix:
      "Where equipment has a protective conductor current designed to exceed 3.5 mA, one requirement is that a label is fixed adjacent to the equipment primary power connection which includes the wording",
    options: {
      D: "CAUTION — HIGH TOUCH CURRENT. Connect to earth before connecting to supply",
    },
    explanation:
      "The warning must identify the high-touch-current hazard and instruct that the protective-earth connection be made before the supply is connected. 'Warning High Touch Current' alone omits the essential action.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29742",
    questionNumber: 48,
    promptSuffix:
      "Portable appliance testers may, in some cases, be used for earth continuity testing using a low value of test current, typically",
    correctedPromptSuffix:
      "What is meant by a PAT tester's 'soft' earth-continuity test?",
    options: {
      A: "A slowly ramped dielectric-strength test",
      B: "A low-current protective-conductor continuity test",
      C: "A 50 mA touch-current test",
      D: "A reduced-voltage functional test",
    },
    explanation:
      "'Soft' describes the low-current earth-continuity mode used where an unnecessarily high current could be unsuitable. It is not a universal fixed 100 mA value; for example, a current Fluke PAT tester specifies 200 mA for its low-current earth-bond test.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 6,
    promptSuffix:
      "The maximum permitted length of a 1.25 mm² extension lead fitted with a standard 13 A plug should not exceed:",
    correctedPromptSuffix:
      "When assessing earth continuity of an extension lead under current IET guidance, which limit accounts for the lead conductor's length and cross-sectional area?",
    options: {
      A: "0.1 Ω plus the calculated protective-conductor resistance R",
      B: "0.1 Ω regardless of the lead length",
      C: "Any resistance is acceptable if the lead is shorter than 18 m",
      D: "The RCD rating alone determines the continuity limit",
    },
    answer: "A",
    explanation:
      "The continuity limit includes the resistance of the lead's protective conductor: 0.1 Ω + R. R is calculated from conductor material, cross-sectional area and length, so a universal maximum length is not the current pass criterion.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 7,
    promptSuffix:
      "Equipment with an earth leakage current exceeding 3.5 mA shall:",
    correctedPromptSuffix:
      "Which statement is correct for equipment whose protective-conductor current exceeds 3.5 mA?",
    options: {
      A: "It needs only a label stating the measured current",
      B: "Its protective-earthing arrangement must meet the applicable high protective-conductor-current requirements",
      C: "A 0.5 mm² protective conductor is always sufficient",
      D: "It may be used only in commercial premises",
    },
    answer: "B",
    explanation:
      "A protective-conductor current above 3.5 mA requires an appropriately reliable protective-earthing arrangement selected from the applicable product and installation requirements. A label, arbitrary minimum conductor size or workplace type does not by itself control the risk.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 8,
    promptSuffix:
      "When carrying out an insulation resistance test on a Class I household portable appliance to BS 3456 using the earth leakage method, the maximum acceptable value is:",
    correctedPromptSuffix:
      "When manufacturer or product-standard information does not specify another value, what maximum protective-conductor current is commonly used for portable or hand-held Class I equipment?",
    answer: "B",
    explanation:
      "A commonly used protective-conductor-current limit for portable or hand-held Class I equipment is 0.75 mA. This is a leakage-current criterion, not an insulation-resistance value; the original wording incorrectly mixed the two tests and cited withdrawn BS 3456.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 9,
    promptSuffix:
      "Which one of the following domestic electrical appliances may be regarded as an item of stationary equipment:",
    correctedPromptSuffix:
      "Under the current IET Code, how should movement-related descriptions such as 'stationary' and 'portable' affect an equipment maintenance regime?",
    options: {
      A: "They determine a fixed statutory test interval",
      B: "Only equipment described as portable needs maintenance",
      C: "Equipment over 18 kg is outside the Code",
      D: "Movement and handling inform risk but do not by themselves determine the tests",
    },
    answer: "D",
    explanation:
      "The current Code removed the former stationary, portable, fixed and moveable categories. How equipment is handled still affects likelihood of damage and therefore risk, but it does not by itself prescribe a test sequence or interval.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 10,
    promptSuffix:
      "An item of stationary equipment is defined as not having a carrying handle and having a mass greater than:",
    correctedPromptSuffix:
      "Under current IET guidance, what should determine how often electrical equipment is inspected and, where appropriate, tested?",
    options: {
      A: "Whether it weighs more than 12 kg",
      B: "A fixed interval based only on equipment mass",
      C: "The next-test date chosen by the tester",
      D: "A risk assessment considering environment, users, construction, use and history",
    },
    answer: "D",
    explanation:
      "Inspection and test frequency is set by risk assessment, taking account of the environment, users, equipment construction and type, frequency of use, installation method, previous records and expected service life. The former 18 kg category is no longer the basis of the regime.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 16,
    promptSuffix: "A 20 metre 1.5 mm² extension lead should be protected by:",
    correctedPromptSuffix:
      "Which statement correctly describes the role of an RCD when a long extension lead is used?",
    options: {
      A: "An RCD makes every lead length and load acceptable",
      B: "An RCD adds shock protection but does not correct excessive voltage drop, heating or conductor resistance",
      C: "A smaller plug fuse removes the need to assess fault protection",
      D: "Lead length is irrelevant once the flex is 1.5 mm²",
    },
    answer: "B",
    explanation:
      "An RCD can provide additional shock protection, but it does not make an unsuitable lead safe. Load, flex rating, conductor resistance, voltage drop, fault protection, thermal conditions and intended use still require assessment.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 17,
    promptSuffix:
      "A flexible cord connected to equipment having an electrical rating of 800 W should normally be protected by a fuse rating of:",
    correctedPromptSuffix:
      "Under current general UK consumer guidance, which BS 1362 plug-fuse rating is normally used for an 800 W appliance unless the manufacturer specifies otherwise?",
    answer: "B",
    explanation:
      "Current general guidance commonly uses a 13 A plug fuse for appliances rated from about 700 W upward. The appliance manufacturer's specified fuse rating remains decisive; the old keyed 5 A answer reflects superseded multi-rating practice.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 22,
    promptSuffix:
      "A BS 3535 safety isolating transformer having a voltage not exceeding 50 V is used to supply certain equipment complying with:",
    correctedPromptSuffix:
      "In the traditional equipment-class system, which class is supplied at separated extra-low voltage and does not rely on protective earthing?",
    answer: "D",
    explanation:
      "Traditional Class III equipment is supplied at separated extra-low voltage and does not rely on a protective-earth connection. The original BS 3535 reference is obsolete; modern safety-isolating transformers are covered by the BS EN IEC 61558 series.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 25,
    promptSuffix:
      "The test current applied to electric equipment fitted with a 13A plug fuse, during an earth continuity test, would normally be:",
    correctedPromptSuffix:
      "Which earth-continuity test approach is preferred by the current IET Code for most Class I equipment?",
    options: {
      A: "A suitable lower-current continuity test, commonly within 20-200 mA",
      B: "13 A for at least 1 minute",
      C: "A 25 A test for every item regardless of construction",
      D: "25 A for at least 1 minute",
    },
    answer: "A",
    explanation:
      "The current Code prefers a suitable lower-current continuity test for most Class I equipment, reducing the risk of damage while still measuring the protective path accurately. A competent person selects the method for the equipment; 25 A is not a universal default.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 26,
    promptSuffix:
      "The recommended initial frequency of user checks, relevant to a children's ride in the entrance of a store, could be:",
    correctedPromptSuffix:
      "How should the initial user-check frequency be set for a children's ride available to the public in a store entrance?",
    options: {
      A: "Annually in every store",
      B: "From a documented risk assessment, with frequent checks likely because of public use, then revised using findings",
      C: "Monthly in every case",
      D: "Every six months because the law fixes that interval",
    },
    answer: "B",
    explanation:
      "Public handling, vulnerable users, frequency of use and likelihood of damage point toward frequent initial checks, but no single statutory interval applies. The dutyholder sets and reviews the frequency from risk and the defects actually found.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 32,
    promptSuffix:
      "User checks of stationary equipment in industrial premises should be carried out:",
    correctedPromptSuffix:
      "How should the frequency of user checks for electrical equipment in industrial premises be determined?",
    options: {
      A: "Before use in every case",
      B: "Daily in every case",
      C: "Fortnightly because that interval is statutory",
      D: "By risk assessment using environment, use, damage likelihood and maintenance history",
    },
    answer: "D",
    explanation:
      "The dutyholder sets the frequency from the actual environment, users, use, likelihood of damage and previous findings. The current IET Code deliberately avoids a fixed industry-category timetable.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 34,
    promptSuffix:
      "There is no provision for protective earthing for which one of the following equipment:",
    correctedPromptSuffix:
      "Which equipment class is identified by double or reinforced insulation and no reliance on protective earthing?",
    answer: "C",
    explanation:
      "Class II equipment uses double or reinforced insulation and does not rely on protective earth. The original wording was non-exclusive because Class 0 and traditional Class III equipment also have no protective-earth provision.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 35,
    promptSuffix: "Equipment found to be faulty must be:",
    correctedPromptSuffix:
      "According to HSE guidance, what immediate action is required when a user finds faulty electrical equipment?",
    options: {
      A: "Label it but continue using it",
      B: "Withdraw it from service but do not report it",
      C: "Report it and take it out of use immediately; labelling may help prevent reuse",
      D: "Continue using it until the next scheduled test",
    },
    answer: "C",
    explanation:
      "The fault should be reported and the equipment taken out of use immediately until competent repair or replacement. A faulty label can help prevent reuse, but HSE presents labelling as a practical control rather than a universal legal requirement.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 36,
    promptSuffix:
      "Of the following items of information, which one is not required on a test label:",
    correctedPromptSuffix:
      "If a satisfactory-test label is voluntarily used, which information should not be placed on it?",
    options: {
      A: "The date on which the equipment was tested",
      B: "A next-test-due date set by the tester",
      C: "An indication that the equipment passed satisfactorily",
      D: "The asset identifier used by the dutyholder, where applicable",
    },
    answer: "B",
    explanation:
      "HSE says an optional label may indicate that equipment passed and when it was tested, but it should not carry a next-test-due date chosen by the tester. The dutyholder decides the next interval from risk assessment.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 37,
    promptSuffix:
      "The scope of the EWR regarding maintenance of electrical systems extends to distribution systems up to:",
    correctedPromptSuffix:
      "Which statement correctly describes the voltage scope of the Electricity at Work Regulations' system-maintenance duty?",
    options: {
      D: "It is not capped at 400 kV; it applies wherever an electrical system may give rise to danger",
    },
    answer: "D",
    explanation:
      "Regulation 4 requires systems to be maintained as necessary to prevent danger and states no upper voltage limit. The original 400 kV answer confused a common network voltage with the legal scope.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 38,
    promptSuffix: "A fridge freezer is classified as:",
    correctedPromptSuffix:
      "Under the current IET Code, how should a fridge freezer be treated for in-service maintenance?",
    options: {
      A: "As portable solely because it has a plug",
      B: "According to its construction, installation, use and risk rather than a rigid stationary label",
      C: "As moveable solely because it can be repositioned",
      D: "As outside the maintenance regime",
    },
    answer: "B",
    explanation:
      "The current Code removed rigid stationary, portable, fixed and moveable classifications. A fridge freezer's construction, installation, environment, handling, use and history determine the appropriate maintenance activity.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 39,
    promptSuffix:
      "The Code of Practice for In-service Inspection and Testing of Electrical Equipment does not apply to:",
    correctedPromptSuffix:
      "For electrical equipment used on a petrol-station forecourt, which approach is correct?",
    options: {
      A: "Use an ordinary PAT routine without considering the hazardous area",
      B: "No maintenance is needed if the equipment is fixed",
      C: "Apply office-equipment intervals without further assessment",
      D: "Use specialist hazardous-area controls and competent assessment alongside applicable maintenance requirements",
    },
    answer: "D",
    explanation:
      "A petrol forecourt presents flammable-atmosphere risks requiring specialist equipment selection, controls and competence. That does not justify a simplistic statement that electrical-equipment maintenance guidance never applies.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 41,
    promptSuffix:
      "Safety isolating transformers supplying Class III equipment must conform to:",
    correctedPromptSuffix:
      "Safety isolating transformers are now covered principally by which standard series?",
    options: {
      A: "BS 3526",
      B: "BS EN IEC 61558",
      C: "BS 5458",
      D: "BS 5533",
    },
    answer: "B",
    explanation:
      "The BS EN IEC 61558 series contains the current general and particular safety requirements for transformers and power-supply units. BS 3535 is an obsolete predecessor.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 42,
    promptSuffix:
      "When conducting an insulation resistance test on an electrical appliance the voltage supplied should be:",
    correctedPromptSuffix:
      "Which statement correctly describes selection of an appliance insulation-resistance test voltage?",
    options: {
      A: "Always use 1000 V AC",
      B: "Always use 250 V AC",
      C: "Always use 250 V DC",
      D: "Use 500 V DC where suitable, or a lower-voltage or alternative test where necessary to avoid damage",
    },
    answer: "D",
    explanation:
      "Five hundred volts DC is commonly used where the equipment is suitable, but sensitive electronics may require 250 V DC or an appropriate leakage-current method. Test selection must reflect construction and manufacturer information.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 46,
    promptSuffix:
      "To which one of the following workplace environments does the IEE Code of Practice not apply:",
    correctedPromptSuffix:
      "Which statement best describes the scope of the current IET Code of Practice for In-service Inspection and Testing of Electrical Equipment?",
    options: {
      A: "It applies only to hotels",
      B: "It excludes offices",
      C: "It excludes shops",
      D: "It covers workplace electrical equipment broadly, while specialist risks require additional competent controls",
    },
    answer: "D",
    explanation:
      "The current Code addresses electrical equipment across a broad range of workplaces. Specialist environments may require extra standards, controls and competence, but 'specialised work situations' is not a meaningful blanket exclusion.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 47,
    promptSuffix:
      "The legal requirement for electrical equipment to be maintained in good order is laid down in the:",
    correctedPromptSuffix:
      "Which regulations contain the specific duty that, where necessary to prevent danger, all electrical systems must be maintained?",
    answer: "A",
    explanation:
      "Regulation 4(2) of the Electricity at Work Regulations 1989 contains the specific system-maintenance duty using this wording. The Health and Safety at Work Act and PUWER impose related duties, which made the original broad question non-exclusive.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 48,
    promptSuffix: "Instrument test leads should comply with:",
    correctedPromptSuffix:
      "Which feature should voltage-test probes and leads have under HSE Guidance Note GS38?",
    options: {
      A: "Long exposed metal probe tips",
      B: "Unfused, unshrouded connectors",
      C: "Minimal exposed metal, suitable insulation and appropriate current limitation",
      D: "Any construction if the associated tester is used for BS 7671 work",
    },
    answer: "C",
    explanation:
      "GS38 calls for probes and leads that minimise exposed metal, are suitably insulated and use shrouding and appropriate current limitation. Those features reduce shock, arcing and short-circuit risk during testing.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 49,
    promptSuffix:
      "The initial frequency of formal visual inspection for Class II cleaning equipment used in a school is recommended to be:",
    correctedPromptSuffix:
      "How should the formal visual-inspection interval for Class II cleaning equipment used in a school be set?",
    options: {
      A: "Exactly 1 month in every school",
      B: "Exactly 3 months in every school",
      C: "From risk assessment and defect history, informed by manufacturer and HSE/IET guidance",
      D: "Exactly 6 months because that interval is statutory",
    },
    answer: "C",
    explanation:
      "The dutyholder selects an initial interval from the equipment, environment, users and expected damage, then revises it using inspection findings. Current IET guidance does not prescribe the old fixed four-month interval.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29741",
    questionNumber: 50,
    promptSuffix:
      "The test current applied to an electric kettle fitted with a 13A fuse during an earth continuity test would normally be:",
    correctedPromptSuffix:
      "If a competent person selects the traditional high-current earth-bond method for a kettle fitted with a 13 A fuse, which test is appropriate?",
    options: {
      B: "25 A for at least 1 minute",
      C: "25 A for 5 to 20 seconds",
    },
    answer: "C",
    explanation:
      "For the traditional high-current method, a test current of at least 1.5 times the fuse rating, commonly 25 A for a 13 A fused item, is applied for 5-20 seconds. The method must be suitable for the equipment; the current Code generally prefers a lower-current continuity test.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 1,
    promptSuffix: "Which one of the following is a statutory document?",
    options: {
      C: "IET Wiring Regulations (BS 7671)",
      D: "IET Codes of Practice",
    },
    explanation:
      "The Electricity at Work Regulations 1989 are law and can be enforced. BS 7671 and IET Codes of Practice provide recognised technical standards and guidance, but they are not themselves Acts or Regulations.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 3,
    promptSuffix:
      "Certain sections of The Health and Safety at Work Regulations put a duty of care upon:",
    correctedPromptSuffix:
      "The Health and Safety at Work etc. Act 1974 places relevant duties on:",
    explanation:
      "The Act places duties on employers to protect employees and others affected by the work, and duties on employees to take reasonable care and cooperate. It is an Act, not a set of 'Health and Safety at Work Regulations'.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 4,
    promptSuffix:
      "Which one of the following regulations state: 'As may be necessary to prevent danger, all systems shall be maintained so as to prevent, so far as is reasonably practicable, such danger'?",
    correctedPromptSuffix:
      "Which regulations state that, as may be necessary to prevent danger, systems must be maintained so as to prevent such danger so far as is reasonably practicable?",
    options: { B: "The IET Wiring Regulations (BS 7671)" },
    explanation:
      "This is the maintenance duty in Regulation 4(2) of the Electricity at Work Regulations 1989. It applies where maintenance is necessary to prevent electrical danger.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 5,
    promptSuffix:
      "The scope of legislation of inspection and testing of electrical equipment extends to distribution systems up to:",
    correctedPromptSuffix:
      "What fixed upper voltage limit does the Electricity at Work Regulations 1989 set for its duties?",
    options: {
      D: "No fixed upper voltage limit; the Regulations apply wherever electrical danger may arise",
    },
    explanation:
      "The Regulations do not stop at 400 kV or any other named voltage. Their duties apply to electrical systems and work activities wherever electrical danger may arise; the precautions needed then depend on the actual risk.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 6,
    promptSuffix:
      "The Code of Practice for In-service Inspection and Testing of Electrical Equipment does not apply to:",
    correctedPromptSuffix:
      "Which environment requires specialist hazardous-area controls beyond an ordinary in-service electrical-equipment inspection and test routine?",
    explanation:
      "A petrol-station forecourt may contain flammable vapours, so equipment selection, inspection and work need hazardous-area competence and explosion-risk controls. A normal office-style PAT routine alone cannot manage that ignition risk.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 7,
    promptSuffix:
      "The safety and proper functioning of certain portable appliances and equipment depends on the integrity of the fixed installation. Requirements for the inspecting and testing of fixed installations are given in:",
    options: { B: "BS 7671" },
    explanation:
      "BS 7671 covers verification and periodic inspection of the fixed electrical installation, including its earthing and protective measures. Appliance maintenance does not replace verification of the sockets, circuits and supply that the appliance depends on.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 8,
    promptSuffix: "An electric kettle is classified as a:",
    correctedPromptSuffix:
      "In the traditional movement-based terminology, an electric kettle is classified as:",
    explanation:
      "A kettle is readily moved from place to place while connected by a flexible cord, so the older terminology called it portable. Current IET guidance focuses on the item's actual construction, use and risk rather than making the label determine the maintenance routine.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 9,
    promptSuffix:
      "Which one-of the following domestic electrical appliances may be regarded as an item of stationary equipment?",
    correctedPromptSuffix:
      "In the traditional movement-based terminology, which domestic appliance would normally be regarded as stationary equipment?",
    explanation:
      "A washing machine is normally positioned in one place and not moved during operation, so it fits the older stationary category. Current maintenance decisions should still be based on its installation, environment, use and history rather than the category alone.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 10,
    promptSuffix:
      "A portable appliance that is supplied by a flexible cord incorporating a protective conductor, is classified as:",
    correctedPromptSuffix:
      "An appliance that relies on the protective conductor in its flexible supply cord for fault protection is classified as:",
    explanation:
      "Class I equipment uses basic insulation and a protective-earth path. If a live conductor faults to accessible metal, the protective conductor carries fault current so the protective device can disconnect the supply.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 11,
    promptSuffix:
      "Which one of the following arrangements would not meet the requirements of the lEE Code of Practice?",
    correctedPromptSuffix:
      "Which one of the following arrangements would not meet the protective-conductor requirements in IET guidance?",
    explanation:
      "A BS 1363 extension socket can accept a Class I appliance, so its lead must carry a reliable protective conductor. A two-core lead supplies line and neutral only and would leave subsequently connected Class I metalwork without its required earth path.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 12,
    promptSuffix:
      "During the inspection and testing process, which of the following is not required:",
    correctedPromptSuffix:
      "Which listed test is inherently inapplicable to Class II equipment because it has no protective conductor to verify?",
    explanation:
      "Class II equipment does not rely on a protective conductor, so there is no Class II earth path to prove with an earth-continuity test. Its enclosure, double or reinforced insulation and any suitable insulation or touch-current test are assessed instead.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 13,
    promptSuffix:
      "Details of which of the following must be recorded when carrying out a safety check on an electrical appliance:",
    correctedPromptSuffix:
      "Which activity would normally generate a formal appliance inspection-and-test record?",
    explanation:
      "A combined inspection and test produces a formal result that the dutyholder can link to the asset, findings and maintenance history. A satisfactory informal user check does not normally need an individual test record.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 14,
    promptSuffix:
      "Which one of the following will not affect the frequency of inspection and testing for an electrical appliance:",
    correctedPromptSuffix:
      "Which approach should not be used by itself to set an appliance inspection-and-test interval?",
    options: { C: "A blanket annual interval applied regardless of risk" },
    explanation:
      "There is no universal legal rule that every appliance must be tested annually. Intervals come from risk: how and where the item is used, who uses it, its construction, likelihood of damage and what previous checks found.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 15,
    promptSuffix:
      "The suggested frequency for user checks for children's rides in a fairground is:",
    correctedPromptSuffix:
      "How should the initial user-check frequency for a children's ride at a fairground be selected?",
    options: {
      B: "From a site-specific risk assessment, with frequent checks likely and the interval reviewed from findings",
    },
    explanation:
      "Public use, vulnerable users, movement, weather and rough handling can justify checks before opening or at another frequent interval. The dutyholder must set and review that interval from the actual risk; 'daily' is not a universal statutory figure.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 18,
    promptSuffix:
      "Which one of the following items of information is not required on an inspection and test label?",
    correctedPromptSuffix:
      "If an optional inspection-and-test label is used, which information belongs in the full maintenance record rather than on the label?",
    explanation:
      "The item's previous readings and findings belong in its maintenance record, where trends can be reviewed. A simple voluntary label may identify the item and show the outcome and test date, but it is not a substitute for the record.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 19,
    promptSuffix:
      "Which one of the following is not required to be tested within the scope of the IEE Code of Practice?",
    correctedPromptSuffix:
      "Which one of the following is outside the equipment-maintenance scope of the IET Code of Practice because it is covered by installation verification requirements?",
    explanation:
      "The fixed wiring installation is verified and periodically inspected under BS 7671. The IET equipment Code addresses electrical equipment used in service; it does not turn an appliance inspection into an EICR of the supplying installation.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 20,
    promptSuffix:
      "The Memorandum of Guidance on the Electricity at Work Regulations 1989 advises that equipment records:",
    correctedPromptSuffix:
      "What does HSE's Memorandum of Guidance on the Electricity at Work Regulations advise about equipment records?",
    options: {
      C: "Only be kept where the equipment is used in high-risk areas",
    },
    explanation:
      "Keeping records throughout the equipment's working life gives the dutyholder evidence of faults, repairs, deterioration and maintenance decisions. Records are strongly useful evidence of an effective system even though the Regulations do not prescribe one universal PAT record format.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 21,
    promptSuffix:
      "The person responsible for carrying out an inspection and test on an appliance should have made available to them:",
    options: { C: "A list of all the users of the equipment" },
    explanation:
      "Previous results let the inspector compare readings, spot deterioration or recurring damage and judge whether the maintenance regime is effective. A list of every person who used the item does not provide that technical history.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 22,
    promptSuffix:
      "Which voltage must be used when carrying out an insulation resistance test on a Class I toaster?",
    options: {
      A: "1000 V d.c.",
      B: "3750 V a.c.",
      C: "500 V a.c.",
      D: "500 V d.c.",
    },
    explanation:
      "For a conventional mains toaster that the manufacturer permits to be insulation-tested, 500 V d.c. is the standard test voltage. A lower voltage or an alternative leakage-current method is selected where electronics or surge components could be damaged.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 23,
    promptSuffix: "An insulation resistance tester should be capable of:",
    options: { A: "Delivering a maximum current of 25 A through the load" },
    explanation:
      "An insulation-resistance tester must maintain its specified d.c. test voltage across the insulation under test so that the resistance calculation is valid. A 25 A output describes a high-current continuity method, not an insulation tester.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 25,
    promptSuffix:
      "The manager of an inspection and test organisation should be able to:",
    correctedPromptSuffix:
      "Which responsibility applies to the manager of an inspection-and-test organisation even if they do not personally operate testers or carry out repairs?",
    explanation:
      "The manager must understand the legal responsibilities that govern the work and must arrange competent people, suitable procedures and effective control. Personally testing or repairing every item is not an inherent requirement of the management role.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 27,
    promptSuffix:
      "Test leads and probes used to measure voltages over 50 V a.c. and 100 V d.c. should comply with:",
    correctedPromptSuffix:
      "Which HSE guidance sets out safe construction and use of electrical test probes and leads?",
    explanation:
      "HSE Guidance Note GS38 explains features such as finger barriers, minimal exposed probe tips, suitable insulation, shrouded connectors and current limitation. Those controls reduce shock, arc and short-circuit risk during electrical testing.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 30,
    promptSuffix:
      "There is no provision for protective earthing or reliance upon installation conditions for which one of the following equipment?",
    options: { A: "Class 0I (zero-I)" },
    explanation:
      "Class II equipment uses double or reinforced insulation and neither provides protective earthing nor relies on the installation for that protection. Class I and Class 0I use an earth connection in different ways, while Class III relies on a separated extra-low-voltage supply.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 31,
    promptSuffix:
      "Which voltage should be applied when conducting an insulation resistance test on an electrical appliance?",
    correctedPromptSuffix:
      "For conventional mains equipment that the manufacturer confirms is suitable for a standard insulation-resistance test, which test voltage is normally used?",
    explanation:
      "The usual test is 500 V d.c. between linked live conductors and accessible earthed parts or the appropriate enclosure. Sensitive electronics, filters and surge protection can require 250 V d.c. or a leakage-current alternative instead.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 32,
    promptSuffix:
      "User checks of stationary equipment installed in industrial premises should be conducted:",
    correctedPromptSuffix:
      "How should the frequency of user checks for equipment installed in industrial premises be determined?",
    options: {
      D: "By risk assessment using the environment, use, damage likelihood and maintenance history",
    },
    explanation:
      "Industrial conditions can justify frequent checks, but 'weekly' is not a universal legal interval. The dutyholder sets and reviews the frequency from the equipment's environment, use, likelihood of damage and defects previously found.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 35,
    promptSuffix:
      "When conducting insulation resistance tests on new household electrical appliances to BS 3456 Class I insulation, the minimum value would be:",
    correctedPromptSuffix:
      "Using the conventional IET in-service criterion, what is the usual minimum insulation resistance for Class I equipment other than heating equipment above 3 kW?",
    explanation:
      "The usual Class I minimum is 1 MΩ. Heating equipment above 3 kW has historically used a different 0.3 MΩ criterion; manufacturer information and equipment construction still determine whether an insulation-resistance test is appropriate.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 36,
    promptSuffix:
      "An ohmmeter used to measure the resistance of an earth continuity conductor, must be capable of producing a short-circuit current between:",
    correctedPromptSuffix:
      "An ohmmeter used to measure the resistance of an earth-continuity conductor must be capable of producing a short-circuit current between:",
    options: {
      A: "2 and 10 mA",
      D: "10 and 20 mA",
    },
    explanation:
      "A suitable low-resistance ohmmeter uses a test current in the 20-200 mA range for this low-current protective-conductor continuity method. It provides a stable, useful reading without the stress of a high-current bond test.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 37,
    promptSuffix:
      "An insulation resistance test of a Class I household portable appliance is to be carried out. using the earth leakage method. The maximum acceptable value is:",
    correctedPromptSuffix:
      "When no product-specific value is given, what maximum protective-conductor or touch current is commonly used for portable or hand-held Class I equipment?",
    explanation:
      "The commonly used limit is 0.75 mA for portable or hand-held Class I equipment. This is a current measured by a leakage method, not an insulation-resistance reading, so the original question incorrectly mixed two different tests.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 38,
    promptSuffix: "Equipment found to be faulty must not be used but must be:",
    correctedPromptSuffix:
      "Which option provides all three practical controls used by this equipment-maintenance scheme when an item is found faulty?",
    options: {
      A: "Label and report it while leaving it available",
      B: "Label and withdraw it without reporting the defect",
      C: "Identify it as faulty, report it and withdraw it from service",
      D: "Report it while leaving it available",
    },
    explanation:
      "The item must be taken out of use and the fault reported so repair or replacement can be controlled. Clearly identifying it as faulty helps stop someone else putting it back into service before that action is complete.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 39,
    promptSuffix:
      "IT equipment which is not constructed to BS EN 60950 may be damaged by an applied voltage insulation resistance test. The test that should replace it is:",
    correctedPromptSuffix:
      "If sensitive electronic equipment could be damaged by an applied-voltage insulation-resistance test, which alternative can assess its leakage under suitable operating conditions?",
    explanation:
      "A suitable protective-conductor or touch-current test measures leakage without applying the 500 V d.c. insulation test that may stress filters, surge devices or electronics. The tester must select the method and limits for the equipment's class and manufacturer guidance.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 40,
    promptSuffix:
      "Equipment with an earth leakage current designed to exceed 3.5 mA shall:",
    correctedPromptSuffix:
      "Which supply arrangement is commonly required where equipment is designed for protective-conductor current above 3.5 mA but not exceeding 10 mA?",
    options: {
      A: "Be permanently wired or supplied through an appropriate BS EN 60309-2 plug and socket",
    },
    explanation:
      "Above 3.5 mA, a casual domestic plug connection may not give the required reliability of protective earthing. Permanent connection or an appropriate industrial plug-and-socket arrangement provides a more dependable earth path; still higher currents can require additional measures.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 43,
    promptSuffix: "Class II equipment may be constructed with",
    correctedPromptSuffix:
      "In the traditional protective-class model, which arrangement describes ordinary metal-cased Class II equipment where no functional-earth facility is provided?",
    options: {
      A: "Protectively earthed metalwork separated from live parts by basic and supplementary insulation",
    },
    explanation:
      "Ordinary metal-cased Class II equipment does not use protective earthing. Its accessible metal enclosure is kept unearthed and separated from live parts by double insulation, represented here by basic plus supplementary insulation.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 44,
    promptSuffix:
      "Which one of the following types of equipment in shops and offices is considered the most likely to develop dangerous faults?",
    explanation:
      "Hand-held equipment is continually gripped and moved, and its flexible lead, strain relief and enclosure receive more mechanical stress. That makes damage capable of exposing live parts more likely than with equipment left stationary.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 45,
    promptSuffix:
      "When conducting a formal visual inspection on equipment used outdoor, it is important that the equipment has a suitable",
    correctedPromptSuffix:
      "When formally inspecting equipment used outdoors, which rating helps confirm that its enclosure suits the expected dust and water exposure?",
    explanation:
      "The IP rating describes protection against entry of solid objects and water. The required digits depend on the actual outdoor conditions; the letters GP, GS and IT do not provide an enclosure-ingress classification.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 47,
    promptSuffix:
      "Prior to applying insulation resistance tests to electrical equipment, the",
    correctedPromptSuffix:
      "For simple mains equipment that the manufacturer permits to be insulation-tested, which preparation includes its internal circuits while keeping the enclosure safe?",
    explanation:
      "With the item isolated from the mains, serviceable fuses and switches in the ON position let the test reach its internal circuits. Covers remain in place for safety; electronic controls may need a different manufacturer-approved preparation or test.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 48,
    promptSuffix:
      "When conducting an earth continuity test on equipment that has accessible metal parts, which are earthed only for functional/screening purposes, these parts should be",
    options: {
      B: "Tested at a current 1.5 times the fuse rating",
      C: "Tested at a current between 20 mA and 200 mA",
    },
    explanation:
      "A low-current 20-200 mA continuity test can confirm the functional or screening connection without forcing a high bond current through a path that was not designed as the appliance's protective-earth route.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29743",
    questionNumber: 50,
    promptSuffix:
      "When applying a test voltage to an item of Class I equipment, a value of 0.1 MO is obtained. One possible reason for this low reading could be",
    correctedPromptSuffix:
      "An insulation-resistance test between linked live conductors and earth on Class I equipment gives only 0.1 MΩ. What fault could cause this low reading?",
    explanation:
      "Only 0.1 MΩ between linked live conductors and earth indicates a substantial leakage path through deteriorating live-to-earth insulation. A live-to-live fault or an open protective conductor would not by itself create that measured path to earth.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29744",
    questionNumber: 1,
    promptSuffix:
      "Equipment in which protection against electric shock relies on supply at SELV is:",
    correctedPromptSuffix:
      "In the traditional equipment-class system, which class relies on supply at separated extra-low voltage and does not rely on protective earthing?",
    explanation:
      "Traditional Class III equipment is supplied at separated extra-low voltage and does not rely on a protective-earth connection. Some modern product standards use energy-source classes instead, so the traditional-class qualification is important.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29744",
    questionNumber: 2,
    promptSuffix: "The Electricity at Work Regulations came into force in:",
    correctedPromptSuffix:
      "On what date did the Electricity at Work Regulations 1989 generally come into force?",
    options: {
      A: "1 April 1989",
      B: "1 April 1990",
      C: "1 April 1999",
      D: "1 April 2004",
    },
    explanation:
      "Although their title and statutory-instrument number use 1989, regulation 1 states that the Electricity at Work Regulations came into force on 1 April 1990.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29744",
    questionNumber: 4,
    promptSuffix:
      "The Code of Practice for in-service inspection recommends the initial frequency of combined inspection and testing on Class I IT equipment in schools should be:",
    correctedPromptSuffix:
      "Under current IET guidance, how should the initial combined inspection-and-testing interval for Class I IT equipment in a school be set?",
    options: {
      A: "By the dutyholder from a risk assessment and previous maintenance findings",
      B: "Exactly every 24 months in every school",
      C: "Exactly every 3 months in every school",
      D: "Exactly every 6 months in every school",
    },
    explanation:
      "The current IET Code removed the old fixed-frequency table. The dutyholder selects and reviews an interval using the environment, users, equipment construction and use, installation method, manufacturer information and previous findings.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29744",
    questionNumber: 5,
    promptSuffix:
      "PAT test instruments must be able to deliver an earth continuity test current up to a maximum of around:",
    correctedPromptSuffix:
      "Under current IET guidance, which earth-continuity approach is generally preferred for routine in-service testing?",
    options: {
      A: "A mandatory 10 A test for every item",
      B: "A mandatory 15 A test for every item",
      C: "A suitable lower-current continuity test selected for the equipment",
      D: "A mandatory 35 A test for every item",
    },
    explanation:
      "The 5th edition gives preference to a suitable lower-current earth-continuity test. A high-current test up to 25 A remains available on some instruments, but it is not a universal instrument requirement or routine default.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29744",
    questionNumber: 6,
    promptSuffix:
      "Low resistance ohmmeters must provide a test current within the range:",
    correctedPromptSuffix:
      "What is meant by a PAT tester's 'soft' earth-continuity test?",
    options: {
      A: "A high-current test applied for a shorter time",
      B: "A low-current protective-conductor continuity test",
      C: "An insulation test at a reduced voltage",
      D: "A functional test below normal supply voltage",
    },
    explanation:
      "'Soft' describes the lower-current earth-continuity method used to measure the protective path without applying an unnecessarily high bond current. It is not an insulation or functional test.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29744",
    questionNumber: 7,
    promptSuffix: "The length of a 1.5 mm² extension lead should not exceed:",
    correctedPromptSuffix:
      "When assessing earth continuity of an extension lead, which limit accounts for the lead conductor's length and cross-sectional area?",
    options: {
      A: "0.1 Ω plus the calculated protective-conductor resistance R",
      B: "0.1 Ω regardless of the lead length",
      C: "Any resistance is acceptable if the lead is shorter than 15 m",
      D: "The RCD rating alone determines the continuity limit",
    },
    answer: "A",
    explanation:
      "The continuity limit includes the resistance of the lead's protective conductor: 0.1 Ω + R. R is calculated from conductor material, cross-sectional area and length, so a single 15 m boundary is not the complete current pass criterion.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29744",
    questionNumber: 9,
    promptSuffix:
      "Equipment that is permanently connected to a flex outlet type of accessory can be more easily tested using:",
    correctedPromptSuffix:
      "After safely isolating permanently connected equipment at a flex outlet, which listed instrument can perform dead insulation-resistance and continuity measurements?",
    explanation:
      "An insulation/continuity tester can perform the relevant dead measurements once the equipment is safely isolated and the test method is suitable for its construction. A plug-in PAT sequence cannot simply be assumed for permanently connected equipment.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29744",
    questionNumber: 11,
    promptSuffix: "The length of a 2.5mm² extension lead should not exceed:",
    correctedPromptSuffix:
      "Why does a 2.5 mm² conductor size alone not establish one universally safe maximum extension-lead length?",
    options: {
      A: "Every 2.5 mm² lead is limited to exactly 12 metres",
      B: "Every 2.5 mm² lead is limited to exactly 15 metres",
      C: "Acceptable length also depends on load, conductor resistance, voltage drop, thermal conditions, fault protection and manufacturer data",
      D: "Every 2.5 mm² lead is safe up to exactly 35 metres",
    },
    explanation:
      "Cross-sectional area is only one factor. Load, conductor resistance, voltage drop, coiling or covering, ambient conditions, fault protection, plug and cable ratings and manufacturer instructions all affect whether a lead is suitable.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29744",
    questionNumber: 12,
    promptSuffix:
      "If the maximum length of an extension lead is exceeded it should be fitted with a:",
    correctedPromptSuffix:
      "Which statement correctly describes the role of a 30 mA RCD when a long extension lead is used?",
    options: {
      A: "It adds shock protection but does not correct excessive voltage drop, heating or conductor resistance",
      B: "It doubles the cable's current-carrying capacity",
      C: "It screens the cable against mechanical damage",
      D: "It makes every lead length safe when supplied by a Type B circuit-breaker",
    },
    explanation:
      "A 30 mA RCD can provide additional shock protection, but it does not make an unsuitable lead safe. Cable rating, load, voltage drop, conductor resistance, heating and fault protection still require assessment.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29744",
    questionNumber: 14,
    promptSuffix:
      "The current used for continuity testing on Class I equipment should have a range of:",
    correctedPromptSuffix:
      "For plug-connected Class I equipment, between which points is protective-conductor continuity measured?",
    options: {
      A: "Line and neutral",
      B: "Line and the appliance case",
      C: "Neutral and the appliance case",
      D: "The plug earth pin and each accessible earthed metal part",
    },
    explanation:
      "The measurement verifies the complete protective path from the plug's earth pin to every accessible conductive part that relies on protective earthing. Line and neutral are not the endpoints of this test.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29744",
    questionNumber: 15,
    promptSuffix: "The most important test on Class I equipment is:",
    correctedPromptSuffix:
      "Which test specifically verifies the protective-conductor path on Class I equipment?",
    explanation:
      "Earth continuity measures the protective path on which Class I equipment relies. Other appropriate checks remain important, so describing one test as universally 'most important' was unnecessarily subjective.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29744",
    questionNumber: 17,
    promptSuffix:
      "The maximum protective conductor/touch current allowed for Class II equipment is:",
    correctedPromptSuffix:
      "When manufacturer or product-standard information does not specify another value, what maximum touch current is commonly used for Class II equipment?",
    explanation:
      "A commonly used Class II touch-current limit is 0.25 mA. Class II equipment has no protective conductor, so 'touch current' is the correct term rather than protective-conductor current.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29744",
    questionNumber: 18,
    promptSuffix:
      "Equipment designed to have a protective conductor current exceeding 3.5 mA should:",
    correctedPromptSuffix:
      "Where applicable equipment is designed for protective-conductor current above 3.5 mA, where should its high-touch-current warning be fixed?",
    options: {
      A: "Anywhere on the equipment or packaging",
      B: "Adjacent to the equipment's primary power connection",
      C: "Only inside the service manual",
      D: "Only on the PAT test record",
    },
    explanation:
      "The warning is fixed adjacent to the primary power connection so the earthing precaution is seen where the supply is connected. Packaging, a service manual or a test record alone does not provide that immediate warning.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29744",
    questionNumber: 19,
    promptSuffix:
      "A plug connected to equipment with a rating of 300 W should have a fuse rated at:",
    correctedPromptSuffix:
      "Under general UK consumer guidance, which BS 1362 plug-fuse rating normally suits a 300 W appliance unless the manufacturer specifies otherwise?",
    explanation:
      "A 300 W appliance is below the approximate 700 W dividing point in current general consumer guidance, so 3 A is the usual choice. The manufacturer's stated replacement-fuse rating remains decisive.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29744",
    questionNumber: 20,
    promptSuffix:
      "The minimum acceptable value of insulation resistance for Class II equipment is:",
    correctedPromptSuffix:
      "When an insulation-resistance test is appropriate and manufacturer or product-standard information does not specify another value, what minimum is commonly used for Class II equipment?",
    explanation:
      "A commonly used Class II insulation-resistance pass value is 2 MΩ. The qualification matters because some modern equipment needs a lower test voltage, an alternative test or visual inspection only.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29744",
    questionNumber: 21,
    promptSuffix:
      "Moveable equipment in industrial premises would be requiring user checks:",
    correctedPromptSuffix:
      "Under current guidance, how should the frequency of user checks for electrical equipment in industrial premises be determined?",
    options: {
      A: "By the dutyholder from risk assessment using environment, handling, use and previous findings",
      B: "Daily in every industrial premises",
      C: "Monthly because that interval is fixed by law",
      D: "Weekly in every case",
    },
    explanation:
      "The current IET Code removed the old moveable-equipment category and fixed timetable. The dutyholder sets and reviews user-check frequency from actual risk and maintenance history.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29744",
    questionNumber: 24,
    promptSuffix:
      "The maximum current carrying capacity of a 1.0 mm² cable is approximately:",
    correctedPromptSuffix:
      "Why is a bare 'maximum current-carrying capacity' for a 1.0 mm² flexible cable potentially misleading?",
    options: {
      A: "It is always exactly 10 A",
      B: "The permissible current depends on cable construction, installation, ambient and thermal conditions, and manufacturer data",
      C: "It is always exactly 20 A",
      D: "It is always exactly 6 A",
    },
    answer: "B",
    explanation:
      "Cross-sectional area alone does not establish one universal current rating. Cable construction, loaded cores, ambient temperature, coiling or covering, installation conditions and manufacturer data all affect the permissible current.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29744",
    questionNumber: 26,
    promptSuffix:
      "Which of the following construction classes may be used without special precautions being taken:",
    correctedPromptSuffix:
      "Which pair names, first, the traditional class using basic insulation plus protective earthing and, second, the class using double or reinforced insulation?",
    explanation:
      "Class I uses basic insulation plus protective earthing; Class II uses double or reinforced insulation. The original wording was ambiguous because correctly supplied Class III equipment can also be used safely.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29744",
    questionNumber: 27,
    promptSuffix:
      "Which of the following procedures does not require a record to be kept:",
    correctedPromptSuffix:
      "According to HSE guidance, which statement about portable-equipment maintenance records and labels is correct?",
    options: {
      A: "A statutory log is required for every inspection and test",
      B: "A pass label is legally required on every item",
      C: "Records and labels are not generally legal requirements, but they can be useful management tools",
      D: "Only user checks are legally required to be recorded",
    },
    answer: "C",
    explanation:
      "HSE states that there is no general legal requirement to keep PAT records or label tested equipment. Records and labels can still help monitor the maintenance scheme and demonstrate that a system exists.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29744",
    questionNumber: 28,
    promptSuffix:
      "A review of inspection frequency can be assisted by referring to the:",
    correctedPromptSuffix:
      "Which information most directly helps a dutyholder review inspection and test frequencies?",
    options: {
      A: "The most recent earth-continuity value only",
      B: "The equipment purchase invoice only",
      C: "Previous faults, inspections, tests, repairs and how the equipment is actually used",
      D: "A stock count without maintenance findings",
    },
    explanation:
      "Previous faults and maintenance results reveal deterioration and damage patterns. Combined with actual use and environment, that history lets the dutyholder shorten or extend intervals on evidence.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29744",
    questionNumber: 29,
    promptSuffix:
      "Training might be required on order that management understand their legal responsibilities as required by the:",
    correctedPromptSuffix:
      "Which regulations contain the specific duty that, where necessary to prevent danger, all electrical systems must be maintained?",
    explanation:
      "Regulation 4(2) of the Electricity at Work Regulations 1989 contains the specific electrical-system maintenance duty. PUWER and the Health and Safety at Work Act contain related duties, so the original broad wording was not exclusive.",
  },
  {
    examId: "pat-testing",
    variantId: "quiz-29744",
    questionNumber: 30,
    promptSuffix:
      "In order to keep accurate records equipment used for testing should be:",
    correctedPromptSuffix:
      "What is needed to keep test-instrument results reliable between formal calibrations?",
    options: {
      A: "Use documented ongoing accuracy checks and recalibrate after drift, damage or as required",
      B: "Check the test-lead length only",
      C: "Keep the instrument locked away without verification",
      D: "Replace the instrument automatically every few years",
    },
    explanation:
      "A calibration certificate confirms performance only at the time of calibration. Ongoing reference checks, lead checks and reassessment after damage can detect drift and trigger recalibration before unreliable results accumulate.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29728",
    questionNumber: 1,
    promptSuffix:
      "Which statutory regulations lay down the measures which must be taken to ensure the safe installation and use of electrical equipment:",
    correctedPromptSuffix:
      "Which statutory regulations impose specific duties to prevent danger from electrical systems and equipment at work?",
    options: {
      A: "Electricity Safety, Quality and Continuity Regulations 2002",
    },
    explanation:
      "The Electricity Supply Regulations 1988 have been replaced by the Electricity Safety, Quality and Continuity Regulations 2002. The Electricity at Work Regulations 1989 remain the specific workplace regulations concerned with preventing electrical danger.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29728",
    questionNumber: 2,
    promptSuffix:
      "What is the most appropriate action for an HSE inspector to take after discovering some defective lights within an emergency lighting system:",
    correctedPromptSuffix:
      "An HSE inspector finds defective emergency lights that breach legal requirements, but the defect does not create a risk of serious personal injury requiring the activity to stop. The contravention is likely to continue unless it is remedied. Which notice is appropriate?",
    explanation:
      "The original facts do not determine the notice: prohibition depends on a risk of serious personal injury, whereas an improvement notice depends on a contravention likely to continue or recur. The revised facts match the statutory test for an improvement notice.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29728",
    questionNumber: 3,
    promptSuffix:
      "A diagram showing all conductors and the connection of electrical components is called a:",
    correctedPromptSuffix:
      "Which diagram uses standard symbols to show a circuit's components and electrical connections without representing their physical positions?",
    options: {
      C: "Layout diagram",
      D: "Site plan",
    },
    explanation:
      "Circuit diagram and schematic diagram are commonly used as synonyms, while a wiring diagram may also show connections, so the original options were not mutually exclusive. The revised alternatives distinguish a symbolic circuit diagram from physical-layout drawings.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29728",
    questionNumber: 4,
    promptSuffix:
      "A location drawing is scaled at 1:50. The route length of a cable run on the drawing is 85mm the length of the cable will be:",
    correctedPromptSuffix:
      "A location drawing is scaled at 1:50. A cable route measures 85 mm on the drawing. What is its actual length?",
    options: {
      A: "17 m",
      B: "4.25 m",
      C: "42.5 m",
      D: "58.9 m",
    },
    explanation:
      "The original prompt omitted punctuation between the measured and actual lengths. At 1:50, 85 mm represents 4250 mm, or 4.25 m.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29728",
    questionNumber: 6,
    promptSuffix:
      "The requirements for overload current protection are fulfilled when:",
    correctedPromptSuffix:
      "Which set of values satisfies the overload-coordination condition Ib ≤ In ≤ Iz?",
    explanation:
      "The full overload requirements also include the protective device's conventional operating-current condition I2 ≤ 1.45 Iz. The options only test Ib ≤ In ≤ Iz, so the prompt now states the condition actually assessed.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29728",
    questionNumber: 9,
    promptSuffix:
      "A Motor is connected via a flexible conduit to a starter. The continuity of the protective conductor is maintained by:",
    correctedPromptSuffix:
      "A motor is connected to a starter through flexible metallic conduit that has not been selected or verified for use as a protective conductor. How should protective-conductor continuity be provided?",
    explanation:
      "BS 7671 can permit a metallic conduit system to serve as a protective conductor when it is suitable and verified, so flexible conduit alone is not universally disallowed. With suitability expressly unverified, a separate circuit protective conductor is the dependable answer.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29728",
    questionNumber: 11,
    promptSuffix:
      "Fire alarm sounders must be capable of producing a minimum of:",
    correctedPromptSuffix:
      "Under BS 5839-1, what is the normal minimum fire-alarm sound level throughout accessible areas where no higher level is required by background noise or sleeping risk?",
    explanation:
      "The required sound level depends on location and risk: the normal general minimum is 65 dB(A), but sleeping accommodation and high background noise can require more, and limited areas can use a specific relaxation. The qualification makes 65 dB(A) uniquely valid.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29728",
    questionNumber: 12,
    promptSuffix:
      "What is the efficiency of a 172.5 Watt domestic heater which draws 2 A from the domestic supply:",
    correctedPromptSuffix:
      "A heater provides 172.5 W of useful heat while drawing 2 A from a 230 V supply. What is its efficiency?",
    explanation:
      "The original wording does not say whether 172.5 W is input or useful output and leaves the supply voltage implicit. With 460 W input and 172.5 W useful output, the stated efficiency is 37.5%.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29728",
    questionNumber: 14,
    promptSuffix:
      "In agricultural premises an rcd may be used for protection against fire providing the operating current does not exceed:",
    correctedPromptSuffix:
      "For fire protection in agricultural or horticultural premises, the rated residual operating current of the RCD protecting a relevant circuit must not exceed:",
    explanation:
      "Current BS 7671 wording specifies RCD protection with a rated residual operating current not exceeding 300 mA for the relevant fire-protection requirement; it is not merely an optional use of an unspecified 'operating current'.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29728",
    questionNumber: 15,
    promptSuffix:
      "The internal area of a cable delivery system, to avoid internal sealing, must not be greater than:",
    correctedPromptSuffix:
      "Under BS 7671, a non-flame-propagating conduit, cable-ducting or cable-trunking system providing at least IP33 may omit internal sealing at a fire-resisting penetration only when its internal cross-sectional area does not exceed:",
    explanation:
      "'Cable delivery system' is a typo and the area alone is not the whole exception. Regulation 527.2.3 applies the 710 mm² limit together with non-flame-propagating construction and the required degree of protection.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29728",
    questionNumber: 18,
    promptSuffix:
      "PME (Protective Multiple Earthing) is mainly associated with which system of earthing:",
    options: {
      A: "IT system",
    },
    explanation:
      "'TI system' is a transposition typo. The recognized earthing-system designation is IT; PME remains associated with TN-C-S.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29728",
    questionNumber: 19,
    promptSuffix:
      "Which of the following is not a method of protection from direct contact (basic protection):",
    correctedPromptSuffix:
      "Which of the following is not itself a provision for basic protection?",
    options: {
      A: "Automatic disconnection after a fault",
    },
    explanation:
      "'Direct contact' is superseded terminology. Insulation, barriers or enclosures, and placing out of reach provide basic protection; disconnection after a fault is part of fault protection under automatic disconnection of supply.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29728",
    questionNumber: 20,
    promptSuffix:
      "Supplementary bonding conductors without mechanical protection used to connect water pipes supplying a sink unit should be at least:",
    correctedPromptSuffix:
      "Where supplementary protective bonding between an exposed-conductive-part and an extraneous-conductive-part is required, what is the minimum copper conductor size when it has no mechanical protection, before any larger sizing requirement is considered?",
    explanation:
      "A sink or its water pipes do not automatically require supplementary bonding. Where supplementary bonding is actually required, an unprotected copper conductor has a 4 mm² minimum, subject to any larger size required by the connected protective conductors.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29728",
    questionNumber: 21,
    promptSuffix:
      "When a person receives a shock by touching a metallic part not normally live but made live under fault conditions is said to be in:",
    correctedPromptSuffix:
      "Which BS 7671 term describes protection against electric shock under single-fault conditions, including contact with an exposed-conductive-part made live by a fault?",
    options: {
      A: "Additional protection",
      B: "Basic protection",
      C: "Functional earthing",
      D: "Fault protection",
    },
    explanation:
      "'Indirect contact' is legacy terminology. Current BS 7671 calls protection under fault conditions 'fault protection', while basic protection addresses contact with live parts in normal service.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29728",
    questionNumber: 28,
    promptSuffix:
      "Increasing the excitation of an a.c. generator will cause the:",
    correctedPromptSuffix:
      "For an isolated a.c. generator running at constant speed on open circuit, increasing field excitation will cause the:",
    explanation:
      "Excitation raises terminal voltage for an isolated open-circuit generator, but on a grid-connected synchronous machine it primarily changes reactive power and power factor because grid voltage is imposed externally. The operating condition removes that ambiguity.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29728",
    questionNumber: 29,
    promptSuffix:
      "Which of the following systems require large amounts of water for operation:",
    correctedPromptSuffix:
      "Which listed renewable electricity system depends on a usable combination of water flow and head?",
    explanation:
      "Micro-hydro output depends on both water flow and head; it does not invariably require a 'large amount' of water because a higher head can compensate for lower flow. The revised wording tests the actual resource requirement.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29729",
    questionNumber: 1,
    promptSuffix: "A statutory regulation means that it has been:",
    correctedPromptSuffix: "A statutory regulation is:",
    options: {
      A: "Agreed by BS 7671",
      B: "Made under statutory authority and legally enforceable",
      C: "Approved only by an electricity network operator",
      D: "Issued only as non-statutory guidance by a professional body",
    },
    explanation:
      "A statutory regulation has legal force because it is made under powers granted by legislation. It is not merely 'agreed by law', a standard, a network operator or a professional body.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29729",
    questionNumber: 2,
    promptSuffix:
      "When a regulation is termed - absolute- then that regulation:",
    correctedPromptSuffix: "If a legal duty is absolute, it:",
    options: {
      B: "Must be met regardless of cost or other considerations",
    },
    explanation:
      "The original hyphenation is malformed. HSE guidance explains that an unqualified absolute requirement must be met regardless of cost or other consideration, subject to any specific statutory defence.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29729",
    questionNumber: 6,
    promptSuffix:
      "What is the fault current required for a disconnection time of 0.1 second for a BS EN 60898 Type B 6A protection device as stated in BS 7671:",
    correctedPromptSuffix:
      "For a 6 A BS EN 60898 Type B circuit-breaker, what current is used to ensure operation in its instantaneous tripping region?",
    options: {
      D: "6 A",
    },
    explanation:
      "The original distractor '6:00 AM' is a data-corruption error. Type B instantaneous operation is assured using 5 In, so a 6 A device uses 30 A.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29729",
    questionNumber: 7,
    promptSuffix:
      "In the equation S = √I2 x t/k what does the symbol 'I' signify::",
    correctedPromptSuffix:
      "In the adiabatic equation S = √(I²t) / k, what does the symbol I represent?",
    options: {
      B: "R.m.s. fault current flowing through the protective device",
    },
    explanation:
      "The radical and exponent were malformed and the prompt had a double colon. In the adiabatic equation, I is the effective r.m.s. fault current for a fault of negligible impedance that flows through the protective device.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29729",
    questionNumber: 8,
    promptSuffix: "A warning notice must be fixed to all:",
    correctedPromptSuffix:
      "Which listed condition requires a clearly visible voltage warning notice before access to live parts?",
    options: {
      C: "Equipment or an enclosure containing a nominal voltage exceeding 230 V to earth where that voltage is not normally expected",
    },
    explanation:
      "The BS 7671 requirement concerns a nominal voltage exceeding 230 V to earth where its presence is not normally expected, with the notice visible before access to live parts. The original wording omitted those limiting conditions.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29729",
    questionNumber: 11,
    promptSuffix: "Escape lighting is required to operate for between:",
    correctedPromptSuffix:
      "For emergency escape lighting in premises that may be reoccupied immediately after the normal supply is restored, what minimum rated duration should be used?",
    options: {
      A: "30 minutes",
      B: "1 hour",
      C: "2 hours",
      D: "3 hours",
    },
    explanation:
      "Emergency-lighting duration is selected from the premises and reoccupation conditions, not simply any value in a broad range. Guidance uses at least 3 hours where immediate reoccupation may occur before batteries have fully recharged.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29729",
    questionNumber: 13,
    promptSuffix: "Efficacy is a measure of a lighting systems:",
    correctedPromptSuffix:
      "What does luminous efficacy measure for a lamp or lighting system?",
    options: {
      A: "Power factor",
      B: "Colour rendering",
      C: "Similarity to daylight",
      D: "Luminous flux per watt of input power",
    },
    explanation:
      "Luminous efficacy is luminous flux in lumens divided by input power in watts. The original keyed option incorrectly said luminous intensity, which is measured in candelas and is direction-specific.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29729",
    questionNumber: 14,
    promptSuffix:
      "Protection against objects greater than 1mm diameter has an IP classification of:",
    correctedPromptSuffix:
      "Protection against solid foreign objects 1.0 mm in diameter and larger has which IP classification?",
    explanation:
      "The IP4X probe threshold includes 1.0 mm solid objects, not only objects strictly greater than 1 mm. IP4X remains the correct classification.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29729",
    questionNumber: 17,
    promptSuffix: "Inspection type conduit accessories are used to:",
    correctedPromptSuffix:
      "During installation, what is the principal purpose of inspection-type conduit fittings such as inspection elbows and tees?",
    options: {
      A: "Provide routine access to energized conductors after completion",
      B: "Facilitate drawing in and inspection of conductors",
    },
    explanation:
      "The original 'facilitate access to the conduit' distractor overlaps the keyed answer. Inspection fittings provide access used when drawing in and inspecting conductors; they are not intended as routine access to energized parts.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29729",
    questionNumber: 18,
    promptSuffix:
      "The recommended wiring system use for use on a dairy farm is:",
    correctedPromptSuffix:
      "In a dairy washdown area where the wiring system needs high mechanical strength and resistance to moisture, cleaning chemicals and corrosion, which listed conduit material is most suitable?",
    options: {
      A: "Black-enamelled steel conduit",
      B: "PVC conduit",
      C: "Stainless-steel conduit",
      D: "Twin-and-earth cable",
    },
    explanation:
      "The original has a duplicated 'use' and treats one system as universally recommended without environmental criteria. Stainless steel is the clear choice for the stated harsh, hygiene-critical washdown conditions because it combines robustness with corrosion and chemical resistance.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29729",
    questionNumber: 19,
    promptSuffix:
      "The earthed neutral of the authorities supply must be fitted at the intake position with a:",
    correctedPromptSuffix:
      "At a distributor's service cut-out, how is the earthed neutral normally connected at the intake?",
    explanation:
      "'Authorities supply' is obsolete and the original can be confused with the consumer's main switch, which may have different switching requirements. At the distributor's service cut-out, the neutral is normally connected by a solid link rather than fused or switched as listed.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29729",
    questionNumber: 20,
    promptSuffix: "The main purpose of equipotential bonding is to:",
    correctedPromptSuffix:
      "The main purpose of protective equipotential bonding is to:",
    options: {
      C: "Limit dangerous potential differences between simultaneously accessible conductive parts",
    },
    explanation:
      "Protective bonding is intended to limit hazardous touch-voltage differences; it does not guarantee that every piece of adjacent metal is at exactly the same potential or prevent faults from occurring.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29729",
    questionNumber: 21,
    promptSuffix:
      "If a main equipotential bonding conductor is connected to a gas pipe, the connection must be made within:",
    correctedPromptSuffix:
      "Where a gas meter is inside the premises and main protective bonding is required, where should the connection normally be made, where practicable and before any branch pipework?",
    options: {
      A: "Within 300 mm of the meter inlet",
      B: "Within 300 mm of the meter outlet on the consumer's hard metal pipework",
      C: "Within 600 mm of the meter outlet on the consumer's hard metal pipework",
      D: "Within 600 mm of the meter inlet on the distributor's side",
    },
    explanation:
      "Current wording is main protective bonding. For an internal meter the connection is made on the consumer's hard metal pipework, preferably within 600 mm of the outlet union and before branch pipework; an external meter changes the reference point to entry into the building.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29729",
    questionNumber: 22,
    promptSuffix:
      "What is the maximum earth fault loop impedance outside the consumers installation for a TN-S system:",
    correctedPromptSuffix:
      "When distributor data is unavailable, what typical maximum external earth fault loop impedance Ze is commonly used for design of a public TN-S supply up to 100 A?",
    explanation:
      "A DNO is not obliged to maintain one universal maximum Ze, and actual distributor information or measurement takes priority. IET guidance retains 0.8 Ω as the typical design value for a public TN-S supply up to 100 A when no alternative is provided.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29729",
    questionNumber: 24,
    promptSuffix:
      "Which of the following types of RCD has is the general standard with no time delay built in:",
    correctedPromptSuffix:
      "Which RCD designation describes a device with no intentional time delay?",
    options: {
      A: "Type A waveform-sensitive",
      B: "Type S selective time-delayed",
      C: "General non-delay",
      D: "Type B waveform-sensitive",
    },
    explanation:
      "The original grammar is corrupt and 'O Type' is not the current designation. General non-delay describes timing, Type S is selectively time-delayed, and Types A and B describe residual-current waveforms rather than delay.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29729",
    questionNumber: 26,
    promptSuffix: "The standard distribution voltage to light industry is:",
    correctedPromptSuffix:
      "Which is a common primary distribution voltage used to supply a private transformer at a commercial or industrial site?",
    explanation:
      "There is no single supply voltage determined by the label 'light industry': many sites receive 400 V low voltage, while larger sites may take a high-voltage supply. Of the options, 11 kV is a common primary-distribution voltage for a private transformer.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29729",
    questionNumber: 28,
    promptSuffix:
      "By law electricity nominal supply voltages must be kept within:",
    correctedPromptSuffix:
      "Under ESQCR, by how much may a low-voltage supply at the declared frequency vary from its declared voltage?",
    explanation:
      "The statutory +10%/-6% tolerance applies specifically to a low-voltage supply relative to its declared voltage at the declared frequency. The original omitted that scope.",
  },
  {
    examId: "am2-installation-assessment",
    variantId: "quiz-29729",
    questionNumber: 29,
    promptSuffix: "Which of the following systems has no moving parts:",
    correctedPromptSuffix:
      "Which listed energy-conversion device normally generates electricity without moving mechanical parts at the generating module?",
    options: {
      A: "Grey-water recycling equipment",
      B: "Micro-wind turbine",
      C: "Micro-hydro turbine",
      D: "Photovoltaic module",
    },
    explanation:
      "A complete PV system can include cooling fans or trackers, so the system-wide claim is too broad. The photovoltaic module itself is a solid-state generator with no moving mechanical parts.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29730",
    questionNumber: 1,
    promptSuffix:
      "What criteria does an employer have to meet when it becomes a legal requirement to have a written health and safety policy?",
    correctedPromptSuffix:
      "When must an employer record its health and safety policy in writing?",
    options: { A: "After an accident has happened on site" },
    explanation:
      "Every employer must have a health and safety policy; an employer with five or more employees must record it in writing. The threshold does not depend on company status, an accident or a local-authority instruction.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29730",
    questionNumber: 2,
    promptSuffix:
      "Which regulation requires an employer to ensure a power drill they provide an employee is suitable for use?",
    options: { A: "Personal Protective Equipment at Work Regulations" },
    explanation:
      "PUWER requires work equipment to be suitable for its intended use, maintained and used by appropriately trained people. A power drill is work equipment, not PPE, and neither Building Regulations nor ESQCR is the direct workplace-equipment duty.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29730",
    questionNumber: 3,
    promptSuffix:
      "Which framework covers the legal disposal of waste solvent glue?",
    correctedPromptSuffix:
      "In England, which listed regulations provide the specific hazardous-waste controls relevant to waste solvent adhesive?",
    options: {
      C: "Hazardous Waste (England and Wales) Regulations 2005 (as amended)",
    },
    explanation:
      "Solvents are commonly hazardous waste. In England their classification, segregation, movement and records fall within the hazardous-waste control regime, alongside the wider waste duty of care; the electrical and general workplace-safety laws listed do not provide those disposal controls.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29730",
    questionNumber: 4,
    promptSuffix:
      "Which legislation allows local authorities to monitor construction sites to ensure the nuisances such as dust and noise are compliant with agreed limits?",
    correctedPromptSuffix:
      "Which legislation gives a local authority specific powers to control noise from construction work?",
    options: { A: "Control of Pollution Act 1974" },
    explanation:
      "Sections 60 and 61 of the Control of Pollution Act 1974 provide specific construction-noise notice and consent powers. Dust nuisance is dealt with through other environmental-health powers, so combining dust and noise made the original question overbroad.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29730",
    questionNumber: 5,
    promptSuffix:
      "What is the immediate action required when a colleague has received a burnt hand when working in a kitchen?",
    correctedPromptSuffix:
      "Once the casualty is away from the heat source, what immediate first-aid action should be taken for a hand burn?",
    options: {
      C: "Cool the burn under cool or lukewarm running water for 20 minutes",
    },
    explanation:
      "Cooling the burn promptly under cool or lukewarm running water for 20 minutes limits continuing tissue damage. A dressing is applied after cooling; ice, creams and dry dressings are not the first step.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29730",
    questionNumber: 6,
    promptSuffix:
      "What is the immediate action to be taken when a worker has slipped on site and sustained a back injury?",
    correctedPromptSuffix:
      "A worker has slipped, cannot safely move and may have a serious spinal injury. What immediate action should be taken?",
    options: {
      A: "Help them stand and walk to the site office",
      B: "Call 999 or 112 and keep them still unless there is immediate danger",
      C: "Place them in the recovery position even though they are conscious and breathing normally",
      D: "Test the injury by moving their back and legs",
    },
    explanation:
      "A suspected serious spinal injury needs emergency medical help and unnecessary movement can worsen it. Keep the casualty still and monitor them unless immediate danger or loss of airway requires movement.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29730",
    questionNumber: 9,
    promptSuffix:
      "What regulations specify the requirements for disposal of low pressure sodium lamps?",
    correctedPromptSuffix:
      "Under which listed regulations must end-of-life low-pressure sodium lamps be handled as electrical and electronic waste?",
    options: {
      D: "Waste Electrical and Electronic Equipment Regulations 2013",
    },
    explanation:
      "A low-pressure sodium lamp is end-of-life electrical equipment and belongs in the WEEE waste stream. COSHH manages workplace exposure, EAWR electrical danger and HSWA general safety duties; none replaces the waste rules.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29730",
    questionNumber: 11,
    promptSuffix:
      "What action is required when a work process is risk assessed as 'High' risk?",
    correctedPromptSuffix:
      "Under the site's approved risk matrix, an activity is rated high and unacceptable until further controls are added. What should happen?",
    explanation:
      "The stated matrix classifies the residual risk as unacceptable, so the activity must not continue until the specified controls reduce it to an acceptable level. The word high has no universal stop-work meaning without the matrix condition added here.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29730",
    questionNumber: 12,
    promptSuffix:
      "What is the most appropriate action to reduce the risk of harm to workers when damaged asbestos is encountered in a building?",
    options: {
      A: "Stop work, prevent access and arrange assessment by a competent asbestos specialist",
      C: "Put barriers around it and continue work in the affected area",
      D: "Cover it with sheeting and continue work",
    },
    explanation:
      "Damaged suspected asbestos requires work to stop, access to be controlled and competent assessment before deciding whether it should be repaired, sealed, enclosed or removed. Immediate removal is not always the correct or safest management decision.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29730",
    questionNumber: 13,
    promptSuffix:
      "What item of PPE must be used when drilling a hole in a steel wall bracket using a pillar drill?",
    options: { D: "Safety goggles" },
    explanation:
      "Eye protection guards against ejected swarf and fragments. Gloves can catch in rotating machinery, while a hard hat and safety boots do not control the immediate eye hazard from drilling.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29730",
    questionNumber: 14,
    promptSuffix:
      "What must the first aid provision for a construction site reflect?",
    correctedPromptSuffix:
      "What should determine the first-aid provision for a construction site?",
    options: {
      D: "A needs assessment covering the hazards, workforce and likely injuries",
    },
    explanation:
      "HSE requires an employer to assess first-aid needs using the work hazards, likely injuries, workforce, work patterns and site circumstances. Distance from emergency medical services can also matter, so the original single-factor wording was ambiguous.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29730",
    questionNumber: 16,
    promptSuffix:
      "What certification defines an operative's competence to erect a mobile scaffold tower?",
    correctedPromptSuffix:
      "Which listed industry training scheme is a commonly recognised way to demonstrate training for erecting mobile access towers?",
    explanation:
      "PASMA is an industry-recognised tower-training scheme and is one accepted way to help demonstrate competence. Competence ultimately means sufficient skills, knowledge and experience; the law does not make one certificate the exclusive route.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29730",
    questionNumber: 19,
    promptSuffix:
      "What health and safety term defines the potential exposure of a worker to loud noise?",
    correctedPromptSuffix:
      "What term describes loud noise itself as a source with the potential to cause hearing damage?",
    explanation:
      "The source with potential to cause harm is the hazard. Risk is the likelihood and severity of harm after considering exposure and controls, so the original use of potential exposure blurred the two terms.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29730",
    questionNumber: 21,
    promptSuffix:
      "What term defines the situation where an electrician is working at height off a ladder?",
    correctedPromptSuffix:
      "What term describes working from a ladder as a source with the potential to cause a fall?",
    explanation:
      "Working from the ladder creates a fall hazard. The risk is the likelihood and consequence of a fall after height, duration, surface, user competence and controls are considered.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29730",
    questionNumber: 23,
    promptSuffix:
      "Which type of fire extinguisher is best suited for use on live electrical fires?",
    correctedPromptSuffix:
      "Which listed extinguisher is generally preferred indoors for energised electrical equipment because it is non-conductive and leaves no residue?",
    options: { A: "Carbon dioxide (CO₂)" },
    explanation:
      "CO₂ is non-conductive and leaves no damaging powder residue, making it the usual listed choice for energised electrical equipment indoors. Power should be isolated if safe, and nobody should fight a fire that is spreading or blocks escape.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29730",
    questionNumber: 26,
    promptSuffix: "The standard distribution voltage to light industry is:",
    correctedPromptSuffix:
      "Which listed voltage is a common high-voltage distribution level for a light-industrial site with its own transformer?",
    explanation:
      "11 kV is a common UK distribution voltage for an industrial customer supplied through its own transformer. It is not a universal 'standard supply' for every light-industrial premises; 33 kV and above are used for larger network or customer demands.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29730",
    questionNumber: 28,
    promptSuffix:
      "By law electricity nominal supply voltages must be kept within:",
    correctedPromptSuffix:
      "At a consumer's supply terminals, what statutory tolerance applies around the declared 230 V low-voltage supply?",
    explanation:
      "ESQCR declares 230 V for low-voltage supply and permits variation from 216.2 V to 253.0 V, equivalent to −6% and +10%. The original wording was too broad because other declared voltages and exceptional conditions exist.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29730",
    questionNumber: 29,
    promptSuffix: "Which of the following systems has no moving parts:",
    correctedPromptSuffix:
      "Which listed generation technology has no moving parts in its basic fixed-array energy-conversion process?",
    explanation:
      "Fixed photovoltaic modules convert light directly into electricity without a turbine or pump. A tracking structure can move, so the fixed-array condition avoids claiming that every complete PV installation is motionless.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29730",
    questionNumber: 30,
    promptSuffix:
      "What is the term for a number of Solar PV modules connected in series:",
    correctedPromptSuffix:
      "What is the term for a number of solar PV modules connected in series?",
    explanation:
      "Modules connected in series form a PV string. A module is one assembled generating unit; chain and set are not the defined PV array terms.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29731",
    questionNumber: 1,
    promptSuffix:
      "Maternity rights are covered under which of the following Acts:",
    correctedPromptSuffix:
      "Which listed Act provides core employment rights associated with pregnancy and maternity, including protection from unfair dismissal?",
    options: { C: "Employment Rights Act 1996" },
    explanation:
      "The Employment Rights Act 1996 provides important pregnancy- and maternity-related employment protections. Statutory maternity leave is also governed in detail by the Maternity and Parental Leave etc. Regulations 1999, so the original blanket wording was too broad.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29731",
    questionNumber: 2,
    promptSuffix:
      "The prevention of disease is part of the responsibility of which of the following construction site visitors:",
    correctedPromptSuffix:
      "Which listed visitor may inspect water fittings for compliance and risks of contaminating the drinking-water supply?",
    options: { D: "A water supplier's water-fittings inspector" },
    explanation:
      "Water suppliers enforce the Water Supply (Water Fittings) Regulations 1999 and may inspect plumbing for contamination, waste and misuse risks. 'Prevention of disease' was too vague to distinguish this role from general site health-and-safety responsibilities.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29731",
    questionNumber: 4,
    promptSuffix:
      "The term given to the person responsible for an electrical system is the:",
    correctedPromptSuffix:
      "What general health-and-safety term describes a person or organisation on whom an electrical-safety duty is imposed?",
    options: { C: "Dutyholder" },
    explanation:
      "A dutyholder is a person or organisation that carries a legal duty and must manage the associated risk. A competent person may perform particular work, but competence alone does not make that person the owner of every duty for the system.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29731",
    questionNumber: 5,
    promptSuffix:
      "Specific guidance on carrying out work on electrical systems is given in the:",
    correctedPromptSuffix:
      "Which listed publication gives the technical requirements for the design, erection and verification of low-voltage electrical installations?",
    options: { D: "Current edition of the IET Wiring Regulations (BS 7671)" },
    explanation:
      "BS 7671 is the national installation standard for design, erection and verification. The Electricity at Work Regulations are law and HSE HSG85 gives safe-working-practice guidance; the original phrase 'carrying out work' did not distinguish those different purposes.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29731",
    questionNumber: 8,
    promptSuffix:
      "The first thing to be considered when planning a new installation is the:",
    correctedPromptSuffix:
      "What should be established first when planning a new electrical installation?",
    options: { A: "The client's brief and functional requirements" },
    explanation:
      "The designer must first understand what the client needs the installation to do and the conditions it must satisfy. Cost, labour and materials can then be selected against that brief.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29731",
    questionNumber: 9,
    promptSuffix:
      "The person who oversees a number of workers on a variety of sites would normally be the:",
    correctedPromptSuffix:
      "In a traditional contracting structure, which listed role normally oversees teams across several sites?",
    explanation:
      "A works manager commonly coordinates labour and delivery across several projects, whereas a site foreman normally supervises day-to-day activity on one site. Job titles vary between businesses, so the organisational context is necessary.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29731",
    questionNumber: 12,
    promptSuffix: "A nominated supplier might be selected by:",
    options: {
      A: "The client (employer), often acting through the architect or contract administrator",
    },
    answer: "A",
    explanation:
      "Under traditional nomination, the client or employer selects the supplier and instructs the main contractor to use it. A supplier freely selected by the main contractor or subcontractor is a domestic supplier, not a nominated one.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29731",
    questionNumber: 14,
    promptSuffix: "The IET Regulations state requirements intended to provide:",
    options: { C: "Safety of persons, livestock and property" },
    explanation:
      "BS 7671 is intended to protect persons, livestock and property against electrical hazards and damage. It is not a set of instructions for every circumstance, a lightning-protection design standard or an economy rule.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29731",
    questionNumber: 15,
    promptSuffix:
      "Particular standards or Codes of Practice would most likely be referred to when dealing with:",
    correctedPromptSuffix:
      "Which situation is most likely to require a specialist standard or code of practice in addition to general installation rules?",
    options: {
      B: "A specialist or higher-risk area with particular requirements",
    },
    explanation:
      "Specialist systems and locations can need a dedicated standard or code in addition to BS 7671. Ordinary circuit arrangements still require the general installation rules, but their existence alone does not identify a separate specialist code.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29731",
    questionNumber: 19,
    promptSuffix:
      "A room of width 2.6m is to be represented on a drawing with a scale of 1:50. What length would this appear as on the drawing in:",
    correctedPromptSuffix:
      "A room 2.6 m wide is represented at a scale of 1:50. What width should appear on the drawing?",
    explanation:
      "2.6 m is 260 cm; dividing by 50 gives 5.2 cm. The 5.2 mm choice is ten times too small, while 2.6 cm and 52 cm do not apply the scale correctly.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29731",
    questionNumber: 26,
    promptSuffix:
      "Which of the following would you not expect to find on a Material List:",
    correctedPromptSuffix:
      "Which item belongs in the detailed project specification rather than a simple material take-off list of items to purchase?",
    options: { D: "The complete installation's performance specification" },
    explanation:
      "A take-off list normally identifies purchasable items, quantities and often estimated costs. The performance specification defines what the completed installation must achieve and belongs in the project specification, not as one list entry.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29731",
    questionNumber: 27,
    promptSuffix:
      "The main contractor involved with a large project is most likely to be a:",
    correctedPromptSuffix:
      "On a traditional large building project, which listed business is most likely to act as main contractor and coordinate the specialist trades?",
    options: { B: "General building contractor" },
    explanation:
      "The main contractor holds the principal construction contract and coordinates the overall works. Electricians, plumbers and individual bricklayers commonly work as specialist subcontractors or trades within that structure.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29731",
    questionNumber: 30,
    promptSuffix: "What does the Health and Safety Executive inspect?",
    correctedPromptSuffix: "What is the HSE's broad workplace-inspection role?",
    options: {
      A: "Inspect dutyholders and workplaces for compliance with health and safety law",
    },
    answer: "A",
    explanation:
      "HSE inspection assesses how dutyholders manage workplace risks and compliance, with proportionate enforcement where needed. HSE does not routinely pre-approve every risk assessment before work starts or merely inspect completed work.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29732",
    questionNumber: 1,
    promptSuffix:
      "Personal information related to business involving credit reference agencies is protected under which of the following Acts:",
    correctedPromptSuffix:
      "Which listed Act provides the current UK statutory framework for protecting personal data handled by credit-reference agencies?",
    options: { A: "Data Protection Act 2018" },
    explanation:
      "Credit-reference information is personal data. The Data Protection Act 2018 sits alongside the UK GDPR and provides the current domestic statutory framework; the other Acts address different rights.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29732",
    questionNumber: 2,
    promptSuffix:
      "Probably the most efficient and fastest means of communicating technical information would be by:",
    correctedPromptSuffix:
      "Which listed method can rapidly send drawings or specifications to several recipients while preserving a written record?",
    explanation:
      "Email can transmit technical attachments quickly to multiple recipients and retain an auditable written record. A conversation may be quicker for a simple point but does not by itself preserve the same technical record, so the original superlative was ambiguous.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29732",
    questionNumber: 4,
    promptSuffix: "The Electricity at Work Regulations applies to:",
    correctedPromptSuffix:
      "Which statement best describes the scope of the Electricity at Work Regulations 1989?",
    options: {
      A: "Electrical systems, equipment and work activities wherever electrical danger may arise",
    },
    explanation:
      "EAWR duties are framed around systems, electrical equipment and work activities that can give rise to electrical danger. They are not limited to professional electricians, equipment below 1000 V or systems excluding equipment.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29732",
    questionNumber: 5,
    promptSuffix:
      "For which of the following locations would you expect to have to refer to a specific Code of Practice:",
    correctedPromptSuffix:
      "Which listed service is covered by dedicated British Standards codes of practice in addition to the general electrical-installation rules?",
    options: { C: "Emergency lighting and fire-alarm systems" },
    explanation:
      "Emergency lighting and fire detection/alarm systems have dedicated codes of practice, including the BS 5266 and BS 5839 families. The original reference to a singular unspecified code made the distinction unclear.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29732",
    questionNumber: 12,
    promptSuffix: "A nominated subcontractor might be chosen by:",
    options: {
      A: "The client (employer), often acting through the architect or contract administrator",
    },
    explanation:
      "A nominated subcontractor is selected by the employer/client and then enters a subcontract with the main contractor. A subcontractor selected solely by the main contractor is normally a domestic subcontractor.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29732",
    questionNumber: 16,
    promptSuffix:
      "Access to goods and services is covered under which of the following Acts:",
    correctedPromptSuffix:
      "Which listed Act currently protects access to goods and services from unlawful disability discrimination in Great Britain?",
    options: { B: "Equality Act 2010" },
    explanation:
      "Part 3 of the Equality Act 2010 covers services and public functions in Great Britain and replaced the relevant Disability Discrimination Act provisions. The older Act remains relevant in Northern Ireland, which is why the jurisdiction is stated.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29732",
    questionNumber: 19,
    promptSuffix: "A rectangle is used as a symbol to denote a:",
    correctedPromptSuffix:
      "What should be consulted to interpret an otherwise unlabelled rectangle on an electrical drawing?",
    options: {
      A: "The drawing's symbol legend or key",
      B: "The equipment price list",
      C: "The project programme",
      D: "The operatives' time sheet",
    },
    explanation:
      "A rectangle is a generic shape used in many symbols and cannot uniquely identify a consumer unit without the drawing convention, label or legend. The key defines the symbols used on that particular drawing.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29732",
    questionNumber: 21,
    promptSuffix:
      "Which of the following uses symbols to represent all circuit components and shows how these are connected by following a logical progression from supply to output:",
    correctedPromptSuffix:
      "Which diagram uses component symbols and a logical, rather than physical, arrangement to show how a circuit functions from supply to output?",
    options: { B: "Layout Diagram" },
    explanation:
      "A schematic diagram arranges symbols to make circuit operation and logical connections clear rather than reproduce physical positions. A layout shows locations, a block diagram shows functional units and a wiring diagram concentrates on physical connections.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29732",
    questionNumber: 22,
    promptSuffix:
      "Which of the following diagrams would you not use to work on a new installation:",
    correctedPromptSuffix:
      "Which drawing is normally produced after installation to record what was actually installed, rather than used to construct the new work?",
    options: { A: "As-built drawing" },
    explanation:
      "An as-built drawing records the completed installation and its departures from the construction information. Circuit, layout and schematic information can guide installation; an existing as-built may still be useful for later alterations.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29732",
    questionNumber: 23,
    promptSuffix: "A bill of quantities is a:",
    correctedPromptSuffix: "What is a bill of quantities primarily used for?",
    options: { B: "Pricing and comparing tenders using measured work items" },
    explanation:
      "A bill of quantities itemises and measures the work so tenderers can price on a common basis. It is a procurement document used in tendering, not merely a list of variations, a schedule of rates or an order.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29732",
    questionNumber: 25,
    promptSuffix: "A statutory regulation means that it has been:",
    correctedPromptSuffix:
      "In this context, what does the term statutory regulation mean?",
    options: { B: "Made under legal authority and legally binding" },
    explanation:
      "A statutory regulation is law made under authority granted by Parliament and is legally binding. A technical standard or learned body does not make a document statutory merely by agreeing or publishing it.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29732",
    questionNumber: 26,
    promptSuffix: "BS EN numbers on electrical equipment applies to:",
    correctedPromptSuffix:
      "What does a 'BS EN' prefix on an equipment standard indicate?",
    options: { C: "A European standard adopted as a British Standard" },
    explanation:
      "EN identifies a European standard and BS identifies its adoption as a British Standard. Not every BS EN is a legally harmonised or UK-designated standard, so the original option used an overly specific legal term.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29732",
    questionNumber: 27,
    promptSuffix:
      "When a regulation is termed - absolute - then that regulation:",
    correctedPromptSuffix:
      "When a legal health-and-safety duty is described as absolute, what does that mean?",
    explanation:
      "An absolute duty must be achieved; its wording does not permit a cost-versus-risk defence such as 'so far as is reasonably practicable'. Time, risk assessment or reasonable cost may be relevant to other qualified duties but do not convert an absolute one.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29732",
    questionNumber: 28,
    promptSuffix: "Which one of the following is not an liP basic principle:",
    correctedPromptSuffix:
      "Which option is not one of the three overarching principles in the current 'We invest in people' framework?",
    options: {
      A: "Leading",
      B: "Supporting",
      C: "Self-motivation",
      D: "Improving",
    },
    explanation:
      "The current Investors in People framework is organised around Leading, Supporting and Improving. Self-motivation can be valuable personal behaviour, but it is not one of those three named framework principles.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29732",
    questionNumber: 29,
    promptSuffix:
      "Which of the following would not be a benefit for an organisation being ISO 9000 certificated:",
    correctedPromptSuffix:
      "Which outcome is not a direct quality-management-system benefit associated with certification to ISO 9001?",
    explanation:
      "ISO 9001 certification can support process consistency, productivity, customer confidence and fewer service problems. Equal pay is governed by employment/equality arrangements rather than being conferred by a quality-management-system certificate; ISO 9000 is the vocabulary family, while ISO 9001 contains certifiable requirements.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29733",
    questionNumber: 2,
    promptSuffix:
      "What is the most appropriate action for an HSE inspector to take after discovering some defective lights within an emergency lighting system:",
    correctedPromptSuffix:
      "An inspector finds a continuing legal contravention that can be remedied within a specified period and does not create an immediate risk of serious personal injury. Which notice is appropriate?",
    explanation:
      "An improvement notice requires a contravention to be remedied within a stated period. A prohibition notice is used where an activity involves a risk of serious personal injury; the original facts did not establish enough about risk and circumstances to choose between them.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29733",
    questionNumber: 3,
    promptSuffix:
      "A diagram showing all conductors and the connection of electrical components is called a:",
    correctedPromptSuffix:
      "Which diagram uses component symbols to provide information about a circuit's electrical connections without reproducing the physical installation layout?",
    explanation:
      "A circuit diagram communicates the circuitry and electrical connections using symbols. A wiring or connection diagram is used when physical terminal and conductor information is required; the original 'all conductors' wording blurred that distinction.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29733",
    questionNumber: 11,
    promptSuffix:
      "Fire alarm sounders must be capable of producing a minimum of:",
    correctedPromptSuffix:
      "Where the general BS 5839 alarm-audibility rule applies, what minimum sound level is normally required in accessible areas?",
    explanation:
      "The general target is at least 65 dB(A), or 5 dB above persistent background noise where that is higher. Sleeping accommodation normally needs 75 dB(A) at the bedhead and limited exceptions exist, so an unqualified universal minimum was misleading.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29733",
    questionNumber: 12,
    promptSuffix:
      "What is the efficiency of a 172.5 Watt domestic heater which draws 2 A from the domestic supply:",
    correctedPromptSuffix:
      "A heater delivers 172.5 W of useful heat while drawing 2 A from a 230 V supply. What is its efficiency?",
    explanation:
      "Input power is 230 V × 2 A = 460 W. Efficiency is useful output divided by input: 172.5 W ÷ 460 W = 0.375, or 37.5%; the original question omitted the voltage needed for the calculation.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29733",
    questionNumber: 15,
    promptSuffix:
      "The internal area of a cable delivery system, to avoid internal sealing, must not be greater than:",
    correctedPromptSuffix:
      "For the specific BS 7671 exception from internal sealing of a qualifying conduit, ducting or trunking system at a fire-separating element, what maximum internal cross-sectional area applies?",
    explanation:
      "The exception uses an internal cross-sectional-area ceiling of 710 mm² and also depends on the containment meeting the stated non-flame-propagating and enclosure conditions. Larger or non-qualifying penetrations require appropriate internal sealing; 'cable delivery system' was a typo.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29733",
    questionNumber: 18,
    promptSuffix:
      "PME (Protective Multiple Earthing) is mainly associated with which system of earthing:",
    options: { A: "IT system" },
    explanation:
      "A public PME supply provides a combined protective and neutral conductor in part of the network and is described at the installation as TN-C-S. IT, TN-S and TT have different source-earthing and protective-conductor arrangements.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29733",
    questionNumber: 20,
    promptSuffix:
      "Supplementary bonding conductors without mechanical protection used to connect water pipes supplying a sink unit should be at least:",
    correctedPromptSuffix:
      "Where a separate copper supplementary protective bonding conductor is actually required and is not mechanically protected, what minimum cross-sectional area applies?",
    explanation:
      "The minimum for an unprotected separate copper supplementary bonding conductor is 4 mm². Metallic sinks and their pipes do not automatically require supplementary bonding, so the original example wrongly implied a blanket kitchen-sink requirement.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29733",
    questionNumber: 21,
    promptSuffix:
      "When a person receives a shock by touching a metallic part not normally live but made live under fault conditions is said to be in:",
    correctedPromptSuffix:
      "What describes contact with an exposed-conductive-part that has become live because of a fault?",
    options: { D: "Fault contact (historically called indirect contact)" },
    explanation:
      "This is contact with an exposed-conductive-part made live by a fault, addressed by fault protection. 'Indirect contact' is the older term; direct contact refers to touching a normally live part and is now addressed as basic protection.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29733",
    questionNumber: 26,
    promptSuffix: "What is the purpose of the National Grid:",
    correctedPromptSuffix:
      "What is the primary purpose of the high-voltage national electricity transmission network?",
    options: {
      C: "Transmit bulk electricity from generators to grid substations",
    },
    explanation:
      "The transmission network carries bulk electricity at high voltage from generation connections to grid substations, where distribution networks take it onward. Direct delivery from local substations to homes is distribution, and the 'National Grid' brand no longer uniquely describes every system-operator function.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29733",
    questionNumber: 28,
    promptSuffix:
      "Increasing the excitation of an a.c. generator will cause the:",
    correctedPromptSuffix:
      "With an AC generator's speed and load conditions otherwise unchanged, what does increasing its field excitation primarily increase?",
    options: { D: "Generated terminal voltage" },
    explanation:
      "Greater field current strengthens the magnetic flux and increases generated EMF, so terminal voltage rises under the stated conditions. Frequency is set mainly by rotational speed and pole count, while power factor depends on the operating system and load.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29733",
    questionNumber: 29,
    promptSuffix:
      "Which of the following systems require large amounts of water for operation:",
    correctedPromptSuffix:
      "Which listed electricity-generation system relies on a continuing natural flow of water through a turbine?",
    explanation:
      "Micro-hydro converts the energy of flowing water through a turbine-generator. It does not necessarily consume the water or always require a 'large amount', so the revised question tests the defining energy source instead of an undefined quantity.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29733",
    questionNumber: 30,
    promptSuffix:
      "Which of the following systems require separate pipework, storage and a filtration system for operation:",
    correctedPromptSuffix:
      "Which listed building-scale reuse system normally needs separate non-potable pipework, treatment or filtration, and storage?",
    explanation:
      "A building-scale greywater system collects water from selected fixtures, treats it and distributes it separately for non-potable uses, commonly with a storage arrangement. Wind, hydro and photovoltaic generation do not use that building water-reuse infrastructure.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29734",
    questionNumber: 1,
    promptSuffix: "A statutory regulation means that it has been:",
    correctedPromptSuffix:
      "Which statement correctly describes a statutory regulation?",
    options: {
      A: "Agreed by BS 7671",
      B: "Made under legal authority and legally binding",
    },
    explanation:
      "A statutory regulation is law made under authority granted by Parliament and is legally binding. BS 7671 and learned bodies publish technical standards and guidance but do not make a document statutory by agreement.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29734",
    questionNumber: 2,
    promptSuffix:
      "When a regulation is termed - absolute- then that regulation:",
    correctedPromptSuffix:
      "When a legal health-and-safety duty is described as absolute, what does that mean?",
    explanation:
      "An absolute duty must be achieved; its wording does not allow a cost-versus-risk qualification such as 'so far as is reasonably practicable'. It remains compulsory and is not satisfied merely by appointing an electrician or setting a later deadline.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29734",
    questionNumber: 6,
    promptSuffix:
      "What is the fault current required for a disconnection time of 0.1 second for a BS EN 60898 Type B 6A protection device as stated in BS 7671:",
    correctedPromptSuffix:
      "For the BS 7671 tabulated 0.1 s disconnection condition, what fault current corresponds to a 6 A BS EN 60898 Type B circuit-breaker?",
    options: { D: "6 A" },
    explanation:
      "A Type B circuit-breaker is taken at 5 times its rated current for the tabulated maximum-disconnection calculation: 5 × 6 A = 30 A. The original '6:00 AM' distractor was spreadsheet date/time corruption.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29734",
    questionNumber: 7,
    promptSuffix:
      "In the equation S = √I2 x t/k what does the symbol 'I' signify::",
    correctedPromptSuffix:
      "In the adiabatic equation S = √(I²t) / k, what does I represent?",
    options: {
      A: "Prospective fault current through the protective conductor",
    },
    explanation:
      "I is the effective fault current in amperes for the fault duration t. S is conductor cross-sectional area and k represents the conductor and insulation material/temperature factor; normal load and protective-device ratings are not substituted for the fault current.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29734",
    questionNumber: 11,
    promptSuffix: "Escape lighting is required to operate for between:",
    correctedPromptSuffix:
      "What duration range is commonly used for battery-powered emergency escape lighting, depending on the premises and evacuation strategy?",
    explanation:
      "Emergency escape-lighting systems are commonly designed for one to three hours. A one-hour system is suitable only where immediate evacuation and delayed reoccupation are assured; many premises use three hours.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29734",
    questionNumber: 13,
    promptSuffix: "Efficacy is a measure of a lighting systems:",
    correctedPromptSuffix:
      "What does the luminous efficacy of a lighting system measure?",
    options: { D: "Luminous flux in lumens per watt of input power" },
    explanation:
      "Luminous efficacy is useful luminous flux divided by electrical power and is expressed in lumens per watt. Luminous intensity is directional and measured in candela, so 'intensity per watt' was technically incorrect.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29734",
    questionNumber: 15,
    promptSuffix: "The space factor for cables in trunking should not exceed:",
    correctedPromptSuffix:
      "Under the IET On-Site Guide fallback method for cable or trunking sizes not covered by its factor tables, what maximum trunking space factor is used?",
    explanation:
      "For sizes and types outside the tabulated factor method, IET guidance limits the sum of cable cross-sectional areas to 45% of the trunking's net internal area. This is guidance for draw-in capacity, not a universal BS 7671 thermal-rating rule.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29734",
    questionNumber: 18,
    promptSuffix:
      "The recommended wiring system use for use on a dairy farm is:",
    correctedPromptSuffix:
      "Which listed metal conduit provides the best corrosion resistance for a frequently washed dairy environment?",
    options: {
      A: "Black-enamelled steel conduit",
      B: "PVC conduit",
      C: "Stainless-steel conduit",
      D: "Twin-and-cpc cable",
    },
    explanation:
      "Among the listed metal conduit choices, stainless steel has the best resistance to moisture, cleaning chemicals and corrosive farm contaminants. Actual wiring-system selection still requires assessment of corrosion, impact, ingress, cleaning and manufacturer limitations; no one system is universally mandated for every dairy.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29734",
    questionNumber: 19,
    promptSuffix:
      "The earthed neutral of the authorities supply must be fitted at the intake position with a:",
    correctedPromptSuffix:
      "At the intake position, the earthed neutral of a distributor's supply is connected through which listed item?",
    explanation:
      "The distributor's neutral is connected through a solid link rather than a fuse or a single-pole switching device. The installation's main switch separately follows the applicable requirements for linked isolation of live conductors.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29734",
    questionNumber: 21,
    promptSuffix:
      "If a main equipotential bonding conductor is connected to a gas pipe, the connection must be made within:",
    correctedPromptSuffix:
      "Where an incoming metallic gas pipe is an extraneous-conductive-part and main protective bonding is required, where should the connection normally be made?",
    options: {
      C: "Within 600 mm of the meter outlet on the consumer's side, before branch pipework where practicable",
    },
    explanation:
      "The bonding connection is made on the consumer's hard-metal pipework, as near as practicable to entry and normally within 600 mm of the meter outlet, before branches. A metallic service that does not introduce Earth potential is not bonded automatically.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29734",
    questionNumber: 22,
    promptSuffix:
      "What is the maximum earth fault loop impedance outside the consumers installation for a TN-S system:",
    correctedPromptSuffix:
      "When distributor data is unavailable, what typical maximum Ze design value is commonly assumed for a public TN-S supply up to 100 A?",
    explanation:
      "0.8 Ω is the conventional TN-S design assumption for the external loop when better distributor information is unavailable. It is not a universal statutory site limit; the actual Ze must be established by enquiry, measurement or another valid method.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29734",
    questionNumber: 24,
    promptSuffix:
      "Which of the following types of RCD has is the general standard with no time delay built in:",
    correctedPromptSuffix:
      "Which RCD designation identifies a deliberately time-delayed device used to provide selectivity?",
    options: {
      A: "Type A",
      B: "Type F",
      C: "Type B",
      D: "Type S",
    },
    answer: "D",
    explanation:
      "Type S identifies a selective, time-delayed RCD. Types A, F and B describe the residual-current waveforms a device can detect, not a general-versus-delay timing class; the original G/O choices were not the current UK classification asked for.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29734",
    questionNumber: 26,
    promptSuffix: "The standard distribution voltage to light industry is:",
    correctedPromptSuffix:
      "Which listed voltage is a common high-voltage distribution level for a light-industrial site with its own transformer?",
    explanation:
      "11 kV is a common UK distribution voltage for an industrial customer supplied through its own transformer. It is not a universal 'standard supply' for every light-industrial premises; 33 kV and above are used for larger network or customer demands.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29734",
    questionNumber: 28,
    promptSuffix:
      "By law electricity nominal supply voltages must be kept within:",
    correctedPromptSuffix:
      "At a consumer's supply terminals, what statutory tolerance applies around the declared 230 V low-voltage supply?",
    explanation:
      "ESQCR declares 230 V for low-voltage supply and permits variation from 216.2 V to 253.0 V, equivalent to −6% and +10%. The original wording was too broad because other declared voltages and exceptional conditions exist.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29734",
    questionNumber: 29,
    promptSuffix: "Which of the following systems has no moving parts:",
    correctedPromptSuffix:
      "Which listed generation technology has no moving parts in its basic fixed-array energy-conversion process?",
    explanation:
      "Fixed photovoltaic modules convert light directly into electricity without a turbine or pump. A tracking structure can move, so the fixed-array condition avoids claiming that every complete PV installation is motionless.",
  },
  {
    examId: "level-2-electrical-installation",
    variantId: "quiz-29734",
    questionNumber: 30,
    promptSuffix:
      "What is the term for a number of Solar PV modules connected in series:",
    correctedPromptSuffix:
      "What is the term for a number of solar PV modules connected in series?",
    explanation:
      "Modules connected in series form a PV string. A module is one assembled generating unit; chain and set are not the defined PV array terms.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29735",
    questionNumber: 1,
    promptSuffix: "What can 200 M Ω also be expressed as?",
    correctedPromptSuffix: "What can 200 MΩ also be expressed as?",
    options: {
      A: "200 × 10⁻⁹ Ω",
      B: "200 × 10⁹ Ω",
      C: "200 × 10⁻⁶ Ω",
      D: "200 × 10⁶ Ω",
    },
    explanation:
      "The SI prefix mega (M) denotes 10⁶, so 200 MΩ equals 200 × 10⁶ Ω.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29735",
    questionNumber: 2,
    promptSuffix: "In the triangle shown, what is the length of side 'a'?",
    correctedPromptSuffix:
      "A right-angled triangle has a hypotenuse of 10 cm and one shorter side of 8 cm. What is the length of the other side, a?",
    options: { A: "12 cm", B: "2 cm", C: "6 cm", D: "9 cm" },
    explanation: "By Pythagoras, a = √(10² − 8²) = √36 = 6 cm.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29735",
    questionNumber: 4,
    promptSuffix: "What is the SI unit of measurement for temperature?",
    correctedPromptSuffix:
      "What is the SI base unit and symbol for thermodynamic temperature?",
    options: { C: "K (kelvin)" },
    explanation:
      "The kelvin, symbol K, is the SI base unit of thermodynamic temperature; the degree sign is not used with K.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29735",
    questionNumber: 6,
    promptSuffix: "What is the formula used to determine Impedance?",
    correctedPromptSuffix:
      "For a series AC circuit with resistance R and net reactance X, which formula gives the impedance magnitude Z?",
    options: {
      A: "Z = √(R² − X²)",
      B: "Z = R / X",
      C: "Z = √(R² + X²)",
      D: "Z = X / R",
    },
    explanation:
      "Resistance and net reactance are perpendicular components of the impedance triangle, so Z = √(R² + X²).",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29735",
    questionNumber: 8,
    promptSuffix:
      "Which one of the following formulae is used to determine weight?",
    correctedPromptSuffix:
      "Which formula gives weight W from mass m and gravitational field strength g?",
    options: {
      A: "W = m × g",
      B: "W = g / F",
      C: "W = g × F",
      D: "W = g / m",
    },
    explanation: "Weight is the gravitational force on a mass, so W = m × g.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29735",
    questionNumber: 16,
    promptSuffix: "Which one of the following is the best conductor?",
    correctedPromptSuffix:
      "At the same temperature, which listed bulk metal has the lowest electrical resistivity?",
    answer: "B",
    explanation:
      "Copper has lower bulk electrical resistivity than gold, brass or lead. Gold is valuable for corrosion-resistant contacts, but it is not the best bulk conductor in this list.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29735",
    questionNumber: 21,
    promptSuffix:
      "For the circuit shown, what would be the voltage reading of voltmeter (V1)?",
    correctedPromptSuffix:
      "For the parallel circuit shown, what would be the voltage reading of voltmeter V1?",
    explanation:
      "The 20 Ω and 30 Ω branches have an equivalent resistance of 12 Ω. With a total current of 5 A, the voltage across the parallel network and V1 is 5 × 12 = 60 V.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29735",
    questionNumber: 22,
    promptSuffix:
      "For the circuit shown, what would be the voltage reading of voltmeter (V1)?",
    correctedPromptSuffix:
      "For the series circuit shown, what would be the voltage reading of voltmeter V1?",
    explanation:
      "The series resistance is 20 + 30 + 30 = 80 Ω, so the current is 200 / 80 = 2.5 A. V1 is across the 20 Ω resistor, giving 2.5 × 20 = 50 V.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29735",
    questionNumber: 28,
    promptSuffix:
      "Voltage drop in a circuit is affected by the resistance of what cable part?",
    correctedPromptSuffix:
      "In a single-phase two-wire load circuit, voltage drop is determined by the resistance of which current-carrying conductors?",
    explanation:
      "Load current travels out in the line conductor and returns in the neutral conductor, so both conductor resistances contribute to voltage drop.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29735",
    questionNumber: 29,
    promptSuffix:
      "What would be the effect of placing a copper clad earth electrode into soil, close to a lead water pipe?",
    correctedPromptSuffix:
      "What corrosion risk can arise if a copper-clad earth electrode is installed in damp soil close to a lead water pipe?",
    options: { B: "Galvanic corrosion (electrolytic action)" },
    explanation:
      "Dissimilar metals connected through damp soil can form a galvanic cell, accelerating corrosion of the less noble metal.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29736",
    questionNumber: 2,
    promptSuffix:
      "An electric machine has a power output of 1500 watts. The input current is 4A and the applied voltage is 400V. The efficiency of the machine will be:",
    correctedPromptSuffix:
      "A DC machine has an output of 1500 W, an input current of 4 A and an applied voltage of 400 V. What is its efficiency?",
    explanation:
      "For the stated DC input, Pin = VI = 400 × 4 = 1600 W, so efficiency = 1500 / 1600 = 93.75%.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29736",
    questionNumber: 3,
    promptSuffix:
      "If a contract is not completed on time the client may enforce a:",
    correctedPromptSuffix:
      "If a construction contract is completed late, which clause may provide an enforceable pre-agreed payment where it protects a legitimate interest and is not penal?",
    options: {
      A: "A contractual price-adjustment mechanism",
      B: "An agreement-to-agree clause",
      C: "A valid liquidated-damages clause",
      D: "A prohibition notice",
    },
    explanation:
      "A valid liquidated-damages clause can specify the consequence of delay. A clause that is penal rather than proportionate to a legitimate interest may be unenforceable.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29736",
    questionNumber: 4,
    promptSuffix:
      "The device used to change a.c to d.c in a d.c. generator called is the:",
    correctedPromptSuffix:
      "Which component mechanically rectifies the internally generated alternating emf to provide a unidirectional output from a DC generator?",
    explanation:
      "The commutator reverses each armature coil's connection at the appropriate point, producing a unidirectional output at the brushes.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29736",
    questionNumber: 5,
    promptSuffix:
      "An abnormal amount of carbon dioxide in an enclosed work space may cause:",
    explanation:
      "Elevated carbon dioxide causes hypercapnia and can also displace oxygen in an enclosed space. Dizziness, impaired consciousness and ultimately unconsciousness are serious effects.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29736",
    questionNumber: 9,
    promptSuffix:
      "The resistivity of a material is defined as the resistance when measured across the opposite faces of a cube of that material, of volume:",
    correctedPromptSuffix:
      "In SI terms, resistivity is numerically equal to the resistance between opposite faces of a cube of the material with what volume?",
    explanation:
      "A cube with 1 m sides has a volume of 1 m³; its resistance between opposite faces is numerically equal to the material's resistivity in Ω·m.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29736",
    questionNumber: 13,
    promptSuffix:
      "Safeguarding the rights of individuals with respect to sensitive information is contained in the:",
    correctedPromptSuffix:
      "Which legal framework principally governs the handling of personal and special-category data in the UK?",
    options: { A: "Data Protection Act 2018 and UK GDPR" },
    explanation:
      "UK data protection is governed principally by the UK GDPR together with the Data Protection Act 2018.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29736",
    questionNumber: 14,
    promptSuffix: "A risk assessment should be carried out:",
    correctedPromptSuffix:
      "When should a suitable and sufficient risk assessment be completed for work that may expose people to risk?",
    options: {
      A: "Only after an accident",
      B: "Only after machinery has been energised",
      C: "Before work starts and reviewed when circumstances materially change",
      D: "Only when requested by HSE",
    },
    answer: "C",
    explanation:
      "Risks must be assessed before the work starts so controls can be implemented, and the assessment must be reviewed when it may no longer be valid or circumstances significantly change.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29736",
    questionNumber: 15,
    promptSuffix: "When planning work schedules, a building site manager must:",
    correctedPromptSuffix:
      "Which planning action specifically prevents different trades' scheduled activities from conflicting on a construction site?",
    explanation:
      "Co-ordinating the activities of all trades prevents overlapping work from creating access, sequencing or safety conflicts. Competence is also required, but it is a separate management duty rather than the scheduling action asked for.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29736",
    questionNumber: 16,
    promptSuffix:
      "Supplementary protection against electric shock is provided by a:",
    correctedPromptSuffix:
      "Which device commonly provides additional protection against electric shock under BS 7671?",
    explanation:
      "An RCD can provide additional protection by disconnecting when residual current reaches its operating threshold. The current BS 7671 term is additional protection, not supplementary protection.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29736",
    questionNumber: 17,
    promptSuffix:
      "The reactance of a 1µF capacitor connected across a 50Hz supply is:",
    correctedPromptSuffix:
      "What is the reactance of a 1 µF capacitor connected to a 50 Hz supply?",
    options: { A: "3.18 kΩ", B: "3.18 mΩ", C: "31.8 kΩ", D: "318 Ω" },
    explanation:
      "XC = 1 / (2πfC) = 1 / (2π × 50 × 1 × 10⁻⁶) ≈ 3183 Ω, or 3.18 kΩ.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29736",
    questionNumber: 18,
    promptSuffix: "Cage rotor induction motors are considered to be:",
    correctedPromptSuffix:
      "When connected directly to a fixed-frequency supply, cage-rotor induction motors are generally considered to be:",
    answer: "A",
    explanation:
      "A directly supplied cage induction motor runs close to synchronous speed, with only a small load-dependent change in slip, so it is classed as substantially constant speed. Variable speed requires frequency control or another speed-control arrangement.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29736",
    questionNumber: 22,
    promptSuffix:
      'A transistor connected in "common emitter mode and biased to cause saturation voltage will act as:',
    correctedPromptSuffix:
      "A transistor connected in common-emitter mode and biased into saturation will act as:",
    explanation:
      "In saturation the collector-emitter voltage is low and the transistor conducts strongly, so in the ideal switching model it behaves as a closed switch.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29736",
    questionNumber: 23,
    promptSuffix:
      "If a pure inductor of reactance 100O is connected across a single phase 230 V a.c supply, the power dissipated in the circuit will be:",
    correctedPromptSuffix:
      "If an ideal pure inductor with reactance 100 Ω is connected across a single-phase 230 V AC supply, what average real power does it dissipate?",
    explanation:
      "For an ideal inductor, current lags voltage by 90°, so power factor is zero and average real power is 0 W.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29736",
    questionNumber: 26,
    promptSuffix:
      "Which one of the following correctly lists three losses inherent in a d.c machine:",
    correctedPromptSuffix:
      "Which option lists the three broad loss categories in a DC machine?",
    options: {
      A: "Copper, voltage and capacitance",
      B: "Current, voltage and hysteresis",
      C: "Iron, copper and mechanical",
      D: "Iron, voltage and magnetic",
    },
    explanation:
      "DC-machine losses are grouped broadly as copper losses, iron losses and mechanical losses such as friction and windage.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29736",
    questionNumber: 29,
    promptSuffix:
      "When a semi conductor diode is connected across an a.c. supply having a peak value of 5 V, the peak inverse voltage across the diode is:",
    correctedPromptSuffix:
      "In an ideal half-wave rectifier with a 5 V RMS sinusoidal source and a resistive load, approximately what peak inverse voltage must the diode withstand?",
    explanation:
      "The reverse-voltage peak equals the source peak in this circuit: 5 × √2 ≈ 7.07 V.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29736",
    questionNumber: 30,
    promptSuffix:
      "A circuit has a resistance of 20 O and an inductive reactance of 15O when connected to an a.c. supply. The impedance of the circuit is:",
    correctedPromptSuffix:
      "A series RL circuit has resistance R = 20 Ω and inductive reactance XL = 15 Ω. What is its impedance magnitude?",
    options: { A: "20.0 Ω", B: "17.3 Ω", C: "25.0 Ω", D: "5.0 Ω" },
    explanation: "Z = √(R² + XL²) = √(20² + 15²) = 25 Ω.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29737",
    questionNumber: 1,
    promptSuffix:
      "What is the most appropriate method to protect against electric shock when carrying out fault diagnosis work?",
    correctedPromptSuffix:
      "Which legislation provides the principal legal duties for preventing electrical danger while carrying out fault diagnosis at work?",
    explanation:
      "The Electricity at Work Regulations 1989 impose the principal work-related duties to prevent electrical danger. Compliance with legislation is a duty framework rather than a work method.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29737",
    questionNumber: 3,
    promptSuffix:
      "Which standard must test leads comply with in order to help avoid electric shock when undertaking fault finding and diagnosis work?",
    correctedPromptSuffix:
      "Which HSE guidance covers the selection and use of test probes and leads for low-voltage fault finding?",
    explanation:
      "GS38 is HSE guidance on electrical test equipment, including probe-tip exposure, lead construction, ratings and safe use; it is guidance, not a British Standard.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29737",
    questionNumber: 4,
    promptSuffix:
      "Which document should be completed when replacing an existing faulty fan isolator switch?",
    correctedPromptSuffix:
      "Which document is appropriate when an existing circuit is altered to replace and relocate a faulty fan isolator, without installing a new circuit?",
    explanation:
      "A Minor Electrical Installation Works Certificate is intended for an addition or alteration that does not extend to providing a new circuit. A simple like-for-like repair alone does not automatically require that certificate, so the alteration is made explicit.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29737",
    questionNumber: 12,
    promptSuffix:
      "What precautions would an inspector need to consider when undertaking fault diagnosis work to stairway lighting, in an occupied multi-storey building that has back up supplies?",
    correctedPromptSuffix:
      "Before diagnosing stairway lighting in an occupied multi-storey building with backup supplies, what should govern the safe system of work?",
    options: {
      C: "A suitable risk assessment covering occupied escape routes, emergency lighting and every source of supply",
    },
    explanation:
      "The risk assessment must address the occupied escape route, continuity of emergency lighting and isolation of all normal and backup sources. Checking one feature alone is not a complete safe system of work.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29737",
    questionNumber: 16,
    promptSuffix:
      "At what minimum voltage must an operative consider the use of GS 38 test leads?",
    correctedPromptSuffix:
      "Which voltage levels mark the upper boundary of the extra-low-voltage range discussed in GS38?",
    options: { B: "50 V AC and 120 V DC" },
    explanation:
      "GS38 states that systems below 50 V AC or 120 V DC reduce electric-shock risk to a low level. Above those boundaries, the full shock precautions for low-voltage test work are especially relevant.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29737",
    questionNumber: 17,
    promptSuffix:
      "Which one of the following instruments is most appropriate when verifying the isolation of a three phase AC supply to a motor?",
    correctedPromptSuffix:
      "Which instrument is most appropriate for proving a three-phase AC motor supply dead after isolation?",
    options: {
      D: "A suitable two-pole voltage detector with GS38-compliant probes/leads, proved before and after use",
    },
    explanation:
      "A contact-type two-pole detector suitable for the system voltage is used to prove every supply conductor dead, and its operation is verified before and after the test.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29737",
    questionNumber: 18,
    promptSuffix:
      "What is the correct unit that would be displayed on an RCD tester when confirming compliance with additional protection?",
    options: { B: "mA" },
    explanation:
      "The instrument displays RCD operating time in milliseconds (ms). Milliamperes describe residual-current magnitude, not elapsed trip time.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29737",
    questionNumber: 21,
    promptSuffix:
      "What would be the approximate voltage drop on a 35 m long radial circuit that has a combined live conductor resistance of 0.54 Ω at 20 °C, and a load current of 16 A?",
    correctedPromptSuffix:
      "A 35 m radial circuit has PVC-insulated copper conductors whose combined line-and-neutral resistance is 0.54 Ω at 20 °C. Using a factor of 1.2 to estimate resistance at the 70 °C operating temperature, what is the approximate voltage drop at 16 A?",
    explanation:
      "The estimated hot resistance is 0.54 × 1.2 = 0.648 Ω, so voltage drop is 16 × 0.648 = 10.368 V, approximately 10.36 V.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29737",
    questionNumber: 25,
    promptSuffix:
      "What is the main consideration after fault diagnosis and rectification work has been undertaken in a small 10 year old commercial installation?",
    correctedPromptSuffix:
      "After fault diagnosis and rectification in a commercial installation, what is the main completion requirement?",
    options: {
      C: "Carry out appropriate verification and provide the record or certificate required for the work",
    },
    explanation:
      "The completed work must be appropriately inspected and tested, with the form of record or certification matched to whether it was maintenance, an alteration or new work. Not every repair requires the same certificate.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29737",
    questionNumber: 26,
    promptSuffix:
      "What testing must the home owner be encouraged to undertake quarterly, following the rectification of a fault on an RCD protecting a socket-outlet rated at 13 A for outdoor use?",
    correctedPromptSuffix:
      "Following rectification of an RCD fault, what routine action should the homeowner be advised to carry out at least every six months?",
    options: { C: "Operate the RCD test button as a functional check" },
    explanation:
      "Current BS 7671 user guidance calls for operation of the RCD test button at least every six months. Instrument tests such as loop impedance and insulation resistance are for a skilled person, not the homeowner.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29737",
    questionNumber: 27,
    promptSuffix:
      "What test result would an experienced operative be looking for, when verifying continuity, following the successful replacement of a short main protective bonding conductor to metallic gas pipe within an installation due to damage?",
    correctedPromptSuffix:
      "After replacing a main protective bonding conductor, what continuity result is required?",
    options: {
      A: "A stable low resistance consistent with the conductor length, cross-sectional area and sound terminations",
      B: "Exactly 1000 Ω",
      C: "More than 1 kΩ but less than 1 MΩ",
      D: "Any value below 1 Ω, regardless of conductor dimensions",
    },
    answer: "A",
    explanation:
      "Continuity should be a stable low value consistent with the conductor's calculated resistance and the test-lead correction. A universal 10 mΩ-to-1 Ω pass band can reject sound short conductors or accept an abnormally resistive one.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29737",
    questionNumber: 28,
    promptSuffix:
      "Which test instrument setting would be used to test an RCD for Additional Protection?",
    correctedPromptSuffix:
      "Under current BS 7671 field-test practice, which instrument setting is used for the prescribed effectiveness test of an RCD providing additional protection?",
    options: {
      A: "0.5 × IΔn only",
      B: "1 × IΔn",
      C: "2 × IΔn",
      D: "5 × IΔn only",
    },
    answer: "B",
    explanation:
      "The prescribed field test is carried out at rated residual operating current IΔn using an AC test current. The former 5 × IΔn test and the 0.5 × test may be useful diagnostically but are not the current prescribed field test.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29737",
    questionNumber: 30,
    promptSuffix:
      "Which one of the following regulations must be considered when disposing of compact fluorescent lamps?",
    correctedPromptSuffix:
      "Which regulations principally govern disposal of compact fluorescent lamps as waste electrical and electronic equipment?",
    answer: "D",
    explanation:
      "Compact fluorescent lamps are electrical equipment and must be handled through the applicable WEEE waste stream. Electricity at Work duties concern electrical danger at work, not the principal disposal regime.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29738",
    questionNumber: 2,
    promptSuffix:
      "Where is the correct location to test that a lighting circuit is isolated and safe to work on?",
    correctedPromptSuffix:
      "After isolating a lighting circuit, where must absence of voltage be proved before work starts?",
    options: {
      A: "At the point of work on every relevant conductor",
      C: "Only on the load side of the circuit protective device",
    },
    answer: "A",
    explanation:
      "HSE guidance requires the parts to be worked on or near to be proved dead. A check only at the protective device can miss another supply, a borrowed conductor or a wiring error at the point of work.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29738",
    questionNumber: 5,
    promptSuffix:
      "Testing is to be carried out at the origin of a large, unoccupied building which has a standby generator. What must be done before tests are carried out?",
    options: {
      D: "Identify, isolate and secure every relevant source, including the normal supply and standby generator, as required for the test",
    },
    explanation:
      "A standby generator or other alternative source can energise conductors after the normal supply is opened. Every relevant source must be identified, isolated, secured and proved dead before dead testing or work.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29738",
    questionNumber: 6,
    promptSuffix:
      "The implications of not carrying out a safe isolation could lead to prosecution. Which statutory legislation would be used for this purpose?",
    options: { D: "ESQCR" },
    explanation:
      "Unsafe isolation at work may breach the Electricity at Work Regulations 1989. BS 7671 and GS38 are non-statutory, while ESQCR is the correct abbreviation for the supply-quality regulations but is not the principal safe-isolation law here.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29738",
    questionNumber: 9,
    promptSuffix:
      "Which test would not apply to an electrical installation forming part of a TN-S system?",
    correctedPromptSuffix:
      "Which test would not normally apply to a standard TN-S installation that has no installation earth electrode?",
    explanation:
      "A standard TN-S installation takes its means of earthing from the distributor, so there is no installation earth electrode whose resistance needs testing. The qualification avoids excluding a test where an electrode is separately installed for another purpose.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29738",
    questionNumber: 10,
    promptSuffix: "Which test could also indicate the supply polarity?",
    correctedPromptSuffix:
      "Which live test is made between line and the means of earthing at the origin, after incoming-supply polarity has been separately verified?",
    explanation:
      "External earth fault loop impedance Ze is measured between line and earth at the origin. Polarity must be verified as its own safety-critical step rather than inferred from a loop reading.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29738",
    questionNumber: 12,
    promptSuffix:
      "What unit of measurement must an insulation resistance tester indicate?",
    correctedPromptSuffix:
      "In what unit are installation insulation-resistance results normally recorded on the schedule of test results?",
    explanation:
      "Installation insulation resistance is normally recorded in megaohms (MΩ). Instruments may also display other ranges, so the correction asks about the recorded result rather than what a tester is capable of indicating.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29738",
    questionNumber: 25,
    promptSuffix:
      "The BS 7671 maximum tabulated earth fault loop impedance value for a protective device is 2.73 Ω. What is the maximum measured value of earth fault loop impedance permitted for a circuit protected by this device?",
    correctedPromptSuffix:
      "Using the common 80% measured-Zs rule of thumb to allow for conductor heating, what comparison value follows from a BS 7671 tabulated maximum of 2.73 Ω?",
    explanation:
      "The quick-reference value is 2.73 × 0.8 = 2.184 Ω, rounded to 2.18 Ω. The 80% figure is guidance for comparing an ambient-temperature measurement, not a separate absolute limit written into the Chapter 41 table.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29738",
    questionNumber: 26,
    promptSuffix:
      "What would be recorded as Ipf when PEFC and PSCC at the origin of a three-phase installation are tested using a single-phase instrument, and values of 0.9 kA and 1.5 kA were measured respectively?",
    correctedPromptSuffix:
      "At the origin of a three-phase four-wire installation, the highest line-earth PEFC is 0.9 kA and the highest line-neutral PSCC measured with a 230 V-only tester is 1.5 kA. Using the conservative rule of thumb where direct line-line testing is unavailable, what Ipf is recorded?",
    explanation:
      "The conservative rule of thumb doubles the highest line-neutral PSCC: 1.5 × 2 = 3.0 kA, which exceeds the measured PEFC. It is an estimate that overstates fault current; direct line-line measurement requires suitably rated equipment.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29738",
    questionNumber: 28,
    promptSuffix:
      "A test of prospective fault current at the origin of an installation has been carried out. What should the result be compared with?",
    correctedPromptSuffix:
      "What short-circuit characteristic of the relevant protective equipment should the prospective fault current at the origin be checked against?",
    options: { B: "Its rated or conditional short-circuit capacity" },
    explanation:
      "Protective equipment must be able to withstand and interrupt the prospective fault current, either by its own rated breaking capacity or through a verified conditional short-circuit rating with upstream protection.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29739",
    questionNumber: 6,
    promptSuffix:
      "In which of the following must un-sheathed single-core insulated cable be installed?",
    correctedPromptSuffix:
      "Which listed wiring system provides a complete enclosure suitable for unsheathed single-core insulated cables?",
    explanation:
      "Metallic trunking is an enclosed wiring system suitable for insulated singles when it is correctly installed and earthed. Basket, tray and capping are supports or covers rather than complete enclosures for these cables.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29739",
    questionNumber: 13,
    promptSuffix:
      "How many 6 mm² PVC single-core cables can be installed in a 100 x 75 mm trunking?",
    correctedPromptSuffix:
      "Using the IET On-Site Guide Appendix E factors, what is the maximum number of 6 mm² stranded thermoplastic-insulated single-core cables that can be installed in 100 mm × 75 mm trunking?",
    explanation:
      "The 100 mm × 75 mm trunking factor divided by the cable factor for a 6 mm² stranded thermoplastic single gives 150 whole cables without exceeding the tabulated capacity.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29739",
    questionNumber: 14,
    promptSuffix:
      "Which of the following cables is best suited for temporary supplies in harsh locations, such as construction sites?",
    options: { A: "Arctic-grade flexible cable" },
    explanation:
      "Arctic-grade flexible cable is designed to remain flexible at low temperatures and is commonly selected for temporary site supplies where the full system, voltage rating and mechanical protection are suitable.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29739",
    questionNumber: 16,
    promptSuffix: "What is used to ensure an accessory is level?",
    correctedPromptSuffix:
      "Which simple hand tool is normally placed directly against an accessory to check that it is level?",
    explanation:
      "A spirit level gives an immediate local horizontal or vertical reference when held against the accessory. A laser level can establish wider layout lines, but it is not the simple direct-contact tool asked for.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29739",
    questionNumber: 25,
    promptSuffix:
      "What is the maximum earth fault loop impedance for a 32 A Type C circuit breaker as given in the IET On-site Guide?",
    correctedPromptSuffix:
      "What maximum measured earth fault loop impedance is listed for a 32 A Type C BS EN 60898 circuit-breaker in the IET On-Site Guide aligned with BS 7671:2018+A4:2026?",
    explanation:
      "The On-Site Guide quick-reference maximum measured Zs for a 32 A Type C BS EN 60898 circuit-breaker is 0.55 Ω at ambient temperature.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29739",
    questionNumber: 29,
    promptSuffix:
      "What condition will the circuit be for a self contained, non-maintained emergency light, in normal situations?",
    correctedPromptSuffix:
      "What supply arrangement does a self-contained, non-maintained emergency luminaire require in normal service?",
    options: {
      C: "A permanent unswitched supply to its charger and monitoring circuit",
    },
    explanation:
      "The emergency lamp is normally off, but the self-contained unit requires a permanent unswitched supply so its battery charger and monitoring circuit remain energised and it can detect mains failure.",
  },
  {
    examId: "level-3-electrical-installation",
    variantId: "quiz-29739",
    questionNumber: 30,
    promptSuffix:
      "What provides undervoltage protection on a rotating machine in a factory?",
    correctedPromptSuffix:
      "Which arrangement provides no-volt/undervoltage protection and prevents a factory rotating machine from restarting unexpectedly when the supply returns?",
    options: {
      B: "A contactor with a no-volt-release start/stop control circuit",
    },
    explanation:
      "The contactor drops out when its coil voltage fails, and the momentary-start/holding-contact control requires a deliberate restart after supply restoration. A contactor driven by a maintained command alone could re-energise automatically.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29760",
    questionNumber: 3,
    promptSuffix:
      "What type of cable enclosure system should not be used in areas with regular changes in ambient temperature?",
    correctedPromptSuffix:
      "When rigid PVC conduit is installed where ambient temperature varies appreciably, what provision is normally required?",
    options: {
      A: "Allowance for thermal expansion and contraction, such as suitable expansion couplers",
      B: "A larger circuit protective conductor",
      C: "A lower-rated protective device",
      D: "No special provision because rigid PVC does not expand",
    },
    answer: "A",
    explanation:
      "Rigid PVC expands and contracts appreciably with temperature. It is not categorically prohibited in a varying environment, but the design must accommodate movement with suitable fittings, spacing and manufacturer instructions.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29760",
    questionNumber: 5,
    promptSuffix:
      "What is the minimum percentage of space, allocated for 'cooling ' in this trunking?",
    correctedPromptSuffix:
      "Where conductor type and size are not covered by the IET guidance tables, what maximum cable space factor should be used for trunking?",
    explanation:
      "The 45% figure is the maximum proportion of the trunking's internal cross-sectional area occupied by cables, not a minimum amount allocated for cooling. The remaining 55% is free space.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29760",
    questionNumber: 6,
    promptSuffix:
      "What type of switching configuration is shown in the diagram here?",
    correctedPromptSuffix:
      "Which switching configuration has two poles operated together, with each pole making or breaking one circuit and no changeover contact?",
    explanation:
      "The source record contains no diagram. The written characteristics uniquely describe a double-pole, single-throw switch: DPST.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29760",
    questionNumber: 9,
    promptSuffix:
      "What is the minimum space allocated for cooling inside a 'ducting'?",
    correctedPromptSuffix:
      "Where conductor type and size are not covered by the IET guidance tables, what maximum cable space factor should be used for conduit?",
    explanation:
      "The 35% figure is guidance for the maximum conduit area occupied by cables, not a minimum cooling allocation and not a generic rule for all ducting.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29760",
    questionNumber: 12,
    promptSuffix: "What does the abbreviation ATEX mean?",
    options: { A: "ATmosphères EXplosibles" },
    explanation:
      "ATEX is formed from the French words ATmosphères EXplosibles. The original option misspells the phrase and omits the accent.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29760",
    questionNumber: 13,
    promptSuffix:
      "What is the minimum classification for types of equipment can be installed in ZONE 1?",
    correctedPromptSuffix:
      "For a non-mining Zone 1 gas atmosphere, which ATEX equipment category and equipment protection level provide the minimum normally suitable level of protection?",
    options: {
      A: "Group II Category 3G / EPL Gc",
      B: "Group II Category 2G / EPL Gb",
      C: "Group II Category 1D / EPL Da",
      D: "Any Group II equipment",
    },
    answer: "B",
    explanation:
      "Zone 1 requires equipment suitable for a gas atmosphere likely to occur occasionally: Group II Category 2G, normally EPL Gb. Ex d and Ex ia are protection techniques, not competing minimum zone classifications; both can be suitable when correctly certified.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29760",
    questionNumber: 14,
    promptSuffix:
      "Shown here is the CENELEC/IEC Mark. What is signified by the missing description (?).",
    correctedPromptSuffix:
      "In the hazardous-area marking 'II 2G Ex db IIC T4 Gb', what does the letter G in '2G' identify?",
    options: {
      A: "Equipment intended for gas, vapour or mist explosive atmospheres",
      B: "The equipment's geographic location",
      C: "The enclosure material",
      D: "The equipment weight",
    },
    answer: "A",
    explanation:
      "The image is missing. In an ATEX category marking, G identifies equipment for explosive atmospheres formed by gas, vapour or mist; D is used for dust.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29760",
    questionNumber: 18,
    promptSuffix: "What is the symbol shown here?",
    correctedPromptSuffix:
      "Which protection-type marking identifies flameproof equipment whose enclosure contains an internal explosion and prevents its transmission to the surrounding gas atmosphere?",
    options: { A: "Ex d", B: "Ex e", C: "Ex i", D: "Ex t" },
    answer: "A",
    explanation:
      "The source has no image and its explanation was copied from the preceding question. Ex d identifies flameproof enclosure protection; Ex e is increased safety, Ex i intrinsic safety and Ex t protection by enclosure for dust.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29760",
    questionNumber: 19,
    promptSuffix:
      "What section of BS7671:2018 is devoted to installations of this type?",
    correctedPromptSuffix:
      "Which section of BS 7671 covers locations containing a fixed bath or shower?",
    explanation:
      "The missing context is restored: Section 701 contains the particular requirements for locations containing a fixed bath or shower.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29760",
    questionNumber: 20,
    promptSuffix:
      "If a person is IN the bath / shower, what can you detail about any switches that could be reached from these areas?",
    correctedPromptSuffix:
      "Which listed 230 V bathroom-lighting switching arrangement is permitted where the user operates it from within zones 1 or 2?",
    options: {
      A: "A standard plate switch mounted in zone 1",
      B: "A standard plate switch mounted in zone 2",
      C: "A metal switch mounted beside the bath",
      D: "The insulating cord of a cord-operated switch, with the switch body suitably located outside the zones",
    },
    answer: "D",
    explanation:
      "The original reach-based wording is too broad. IET guidance permits the insulating cords of cord-operated switches in zones 1 and 2, while ordinary plate-switch bodies are located outside the zones and selected for the environment.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29760",
    questionNumber: 21,
    promptSuffix:
      "What type of current using equipment can be fitted in ZONE 0?",
    correctedPromptSuffix:
      "Which listed arrangement is permitted for current-using equipment installed in bathroom zone 0?",
    options: {
      A: "Any equipment is permitted if its enclosure is IPX7",
      B: "Fixed equipment intended by its manufacturer for zone 0, supplied by SELV not exceeding 12 V AC or 30 V ripple-free DC, with the source outside zones 0, 1 and 2",
      C: "PELV equipment supplied at 50 V AC",
      D: "Any fixed equipment that is accessible only with a tool",
    },
    answer: "B",
    explanation:
      "Zone 0 needs all of the stated conditions, not merely fixed construction or a generic SELV label: suitable intended equipment, the zone-0 voltage limit and a source outside the zones.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29760",
    questionNumber: 22,
    promptSuffix:
      "Underfloor heating, if installed, MUST have which ONE of the following safety requirements?",
    correctedPromptSuffix:
      "For a mains-voltage electric floor-heating system in a location containing a bath or shower, which protective construction is required?",
    options: {
      B: "A metallic sheath or enclosure, or a fine-mesh metallic grid, connected to the circuit protective conductor",
    },
    explanation:
      "The original incorrectly requires supplementary bonding and gives only one construction. For non-SELV bathroom floor heating, the heating unit uses an earthed metallic sheath/enclosure or a fine-mesh metallic grid connected to the supply circuit protective conductor.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29760",
    questionNumber: 24,
    promptSuffix:
      "What ZONE is the pedestal sink in, shown in the picture here?",
    correctedPromptSuffix:
      "A pedestal washbasin is installed in a room containing a bath. What bathroom zone does the washbasin itself create under Section 701?",
    options: { D: "No zone is created by the washbasin itself" },
    answer: "D",
    explanation:
      "The image is absent and the key is technically false. Section 701 zones are defined from the fixed bath or shower; a washbasin does not itself create zone 2, although equipment near it must still be suitable for foreseeable splashing.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29760",
    questionNumber: 27,
    promptSuffix:
      "What is the maximum voltage an electric fence is allowed to produce, in accordance with BSEN 60335/BSEN 6100",
    correctedPromptSuffix:
      "Under BS EN IEC 60335-2-76, what is the maximum no-load output voltage of an electric-fence energizer?",
    explanation:
      "The original cites a malformed and obsolete pair of standards. The dedicated current product standard is BS EN IEC 60335-2-76; its voltage limit is 10 kV, alongside separate pulse-duration, charge and energy limits.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29760",
    questionNumber: 29,
    promptSuffix:
      "What size RCD is used for 13A socket outlets in this type of location?",
    correctedPromptSuffix:
      "In an agricultural or horticultural installation, what maximum rated residual operating current is required for an RCD providing additional protection to a 13 A socket-outlet circuit?",
    explanation:
      "The missing location is agricultural or horticultural premises. A socket-outlet circuit within the applicable rating requires additional protection by an RCD not exceeding 30 mA.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29760",
    questionNumber: 30,
    promptSuffix:
      "What is the voltage level that animals are susceptible to electric shock above?",
    correctedPromptSuffix:
      "For an agricultural or horticultural location intended for livestock, what conventional touch-voltage limit is used for AC?",
    explanation:
      "The original makes an unsupported claim about an animal becoming susceptible at one exact voltage. Section 705 instead applies a conventional touch-voltage limit of 25 V AC in locations intended for livestock.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29761",
    questionNumber: 1,
    promptSuffix:
      "Where is the recommended siting of an electric fence controller?",
    correctedPromptSuffix:
      "Which siting principle applies to an electric-fence energizer?",
    options: {
      B: "Install it securely in accordance with the manufacturer's instructions, with the required separation from other services and earthing systems",
    },
    explanation:
      "A universal rule that the energizer may only use its own mount is too absolute. It must be securely sited to the product instructions and the fence standard, with required separation from other electrical services and earthing arrangements.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29761",
    questionNumber: 2,
    promptSuffix:
      "How often should this type of installation be subject to an electrical inspection and test?",
    correctedPromptSuffix:
      "What is the commonly recommended maximum interval between periodic inspection and testing of an agricultural or horticultural installation?",
    explanation:
      "The original omits the location. IET interval guidance commonly gives three years for agricultural and horticultural installations, subject to risk assessment and shorter intervals where conditions require them.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29761",
    questionNumber: 5,
    promptSuffix:
      "What type of cable is used for main and sub-main distribution around a building site?",
    correctedPromptSuffix:
      "Which listed cable can provide a robust, mechanically protected fixed main or sub-main distribution route on a construction site?",
    explanation:
      "No single cable type is mandatory for every site route. Of the listed choices, correctly selected and installed SWA provides the mechanical protection appropriate to a robust fixed distribution route.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29761",
    questionNumber: 6,
    promptSuffix:
      "Identify the rating of RCD to be used for automatic disconnection of the supply in the case of a fault in socket outlets exceeding 32A, in this type of location.",
    correctedPromptSuffix:
      "On a construction or demolition site, what is the maximum rated residual operating current of the RCD required for a circuit supplying one or more socket-outlets rated above 32 A?",
    explanation:
      "Section 704 requires such a socket-outlet circuit to use an RCD not exceeding 500 mA to interrupt the line conductors. The location and the fact that 500 mA is a maximum are now explicit.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29761",
    questionNumber: 7,
    promptSuffix:
      "How often should this type of installation be inspected and tested?",
    correctedPromptSuffix:
      "What is the commonly recommended maximum interval between periodic inspection and testing of a construction-site electrical installation?",
    explanation:
      "The omitted location is a construction site. Three months is a commonly recommended periodic-inspection interval for a temporary site installation, alongside more frequent user checks and risk-based inspection.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29761",
    questionNumber: 12,
    promptSuffix: "What is an ACS in relation to this type of location?",
    correctedPromptSuffix:
      "In construction-site electrical distribution, what does ACS stand for?",
    explanation:
      "ACS means an assembly for construction sites, the BS EN 61439-4 term for distribution assemblies designed for construction and demolition environments.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29761",
    questionNumber: 17,
    promptSuffix:
      "What does BS7671 detail about the installation of extra low-voltage battery circuits (ELV) in close proximity to 230v mains circuits?",
    correctedPromptSuffix:
      "Where ELV battery wiring and 230 V wiring in a caravan share a route or enclosure, what is required?",
    options: {
      A: "They may be mixed without conditions because one circuit is ELV",
      B: "They must be segregated, or every conductor must be insulated for the highest voltage present with the applicable termination requirements met",
      C: "The ELV wiring must always be routed outside the caravan",
      D: "There are no separation or insulation requirements",
    },
    answer: "B",
    explanation:
      "A blanket statement that the circuits must never touch is not the actual rule. Band I and Band II wiring requires segregation unless an allowed common-enclosure method, including insulation for the highest voltage present, is correctly applied.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29761",
    questionNumber: 18,
    promptSuffix:
      "What is the rating of the 'Blue' industrial-type socket outlet to BSEN60309-2 shown here, used to supply a caravan with 230v on a caravan site?",
    correctedPromptSuffix:
      "What is the minimum current rating of a BS EN 60309-2 caravan-pitch socket-outlet?",
    explanation:
      "The image is absent and a pitch outlet may be rated above 16 A when required. Section 708 sets 16 A as the minimum rating rather than the only possible rating.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29761",
    questionNumber: 21,
    promptSuffix:
      "Computers and associated equipment incorporate power supplies that contain mains filters. These filters produce high protective conductor currents. What is the typical value of these 'leakage' currents?",
    correctedPromptSuffix:
      "For a final circuit with several socket-outlets likely to supply IT equipment, when are high-integrity protective-conductor connections required?",
    options: {
      A: "Only when the current reaches 1 A",
      B: "Whenever one item produces 1 mA",
      C: "Only when the current reaches 3 A",
      D: "When the cumulative protective-conductor current is likely to exceed 10 mA",
    },
    answer: "D",
    explanation:
      "There is no universal 3 mA leakage value for computers. Regulation 543.7 applies high-integrity protective-conductor provisions to a socket-outlet circuit where cumulative protective-conductor current is likely to exceed 10 mA.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29761",
    questionNumber: 22,
    promptSuffix:
      "As an electrician carrying out installation work in a busy IT office, what is the main hazard associated with fibre optic networks that may be working in your work area?",
    correctedPromptSuffix:
      "When working near a live, unterminated fibre-optic link, which listed hazard requires the link to be treated as active and never viewed directly?",
    explanation:
      "The original asks for one 'main' hazard even though broken fibre shards also present a real hazard. The revised facts specifically identify the optical-radiation risk to the eyes from an active fibre.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29761",
    questionNumber: 23,
    promptSuffix:
      "What BAND do fibre optics, CAT5 network and other data and network data cable systems fall into in accordance with BS7671:2018?",
    correctedPromptSuffix:
      "Under BS 7671, telecommunications and signalling circuits operating at extra-low voltage are classified in which voltage band?",
    explanation:
      "Optical fibre carries no electrical voltage and should not itself be assigned an electrical voltage band. ELV telecommunications and signalling circuits are Band I.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29761",
    questionNumber: 24,
    promptSuffix:
      "What is meant by the term 'clean earth' with regard to a computer circuit?",
    correctedPromptSuffix:
      "Which arrangement correctly describes functional earthing for ICT equipment while preserving protective earthing?",
    options: {
      A: "Rely only on steel trunking or conduit and omit the protective conductor",
      B: "Use a dedicated copper functional-earthing conductor coordinated with, and not allowed to impair, the protective-earthing system",
      C: "Install isolated earth electrodes at both ends of the circuit",
      D: "Rely only on SWA armour and disconnect it from the installation earthing system",
    },
    answer: "B",
    explanation:
      "'Clean earth' is an imprecise legacy term. Amendment 4 Section 545 distinguishes functional earthing from protective earthing and requires the functional arrangement not to impair the protective system; isolated local electrodes are unsafe.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29761",
    questionNumber: 25,
    promptSuffix: "What is the main cause of 'noise' on an AC mains supply?",
    correctedPromptSuffix:
      "Which listed switching event is especially likely to produce a transient voltage disturbance on an AC supply?",
    explanation:
      "Many sources can create electrical noise, so there is no universal single main cause. Interrupting a large inductive load is especially likely to create a switching transient because stored magnetic energy must be released.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29761",
    questionNumber: 28,
    promptSuffix: "What is the primary purpose of a UPS in a busy IT office?",
    correctedPromptSuffix:
      "During loss of the normal AC supply, what is the primary function of a UPS in an IT office?",
    explanation:
      "A UPS may also condition power, but its defining function during a supply failure is to provide a time-limited maintained supply so equipment can ride through or shut down safely; it does not back up data by itself.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29761",
    questionNumber: 29,
    promptSuffix:
      "What is the voltage level generated in a modern power station?",
    correctedPromptSuffix:
      "Which range is typical for the terminal voltage of a large power-station alternator before a step-up transformer?",
    options: {
      A: "10-30 kV",
      B: "132-400 kV",
      C: "11-25 MV",
      D: "230-400 V",
    },
    answer: "A",
    explanation:
      "Generating voltage is not one universal 25 kV value. National Grid describes power-station output around 10-30 kV before transformation to transmission voltage.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29761",
    questionNumber: 30,
    promptSuffix:
      "Which one of the following is a 'fossil fuel' energy source?",
    options: { D: "Natural gas" },
    explanation:
      "Natural gas is a fossil fuel. The option is corrected from the lower-case fragment 'gas' to the precise energy-source name.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29762",
    questionNumber: 2,
    promptSuffix:
      "Why is it important to balance loads as equally as possible on polyphase systems?",
    correctedPromptSuffix:
      "What is the principal conductor-loading reason for distributing single-phase loads as evenly as practicable across a three-phase system?",
    options: {
      B: "To avoid excessive phase and neutral currents caused by load imbalance",
      C: "To eliminate all electrical losses",
    },
    explanation:
      "Balancing can also reduce losses, so the original options overlap. The direct conductor-loading reason is to prevent one phase, and potentially the neutral, carrying excessive current because the single-phase loads are unevenly distributed.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29762",
    questionNumber: 7,
    promptSuffix: "What is the voltage level used by 'heavy industry'?",
    correctedPromptSuffix:
      "Which listed voltage is a common distribution connection level for a very large industrial customer requiring a higher-voltage tier than 11 kV?",
    explanation:
      "Customer voltage depends on demand, location and the network design, so 'heavy industry' has no universal voltage. Of the listed choices, 33 kV is a common higher distribution tier for a very large industrial connection.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29762",
    questionNumber: 10,
    promptSuffix: "What is the voltage level carried by the 'grid'?",
    correctedPromptSuffix:
      "Which listed voltage is used on National Grid Electricity Transmission's principal high-voltage network in England and Wales?",
    answer: "D",
    explanation:
      "'The grid' does not have one voltage. National Grid's principal transmission network in England and Wales operates at 275 kV and 400 kV; of the listed choices, 400 kV is the applicable current transmission voltage.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29762",
    questionNumber: 11,
    promptSuffix:
      "What is the voltage of the 'super grid' system of electricity transmission?",
    correctedPromptSuffix:
      "Which listed voltage is used on Great Britain's 275 kV and 400 kV supergrid?",
    explanation:
      "The supergrid is not exclusively one voltage: its principal elements operate at 275 kV and 400 kV. Since 275 kV is not listed, 400 kV is the valid listed value.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29762",
    questionNumber: 12,
    promptSuffix: "What is the voltage distributed to 'light industry'?",
    correctedPromptSuffix:
      "Which listed voltage is a common primary-distribution supply for a private transformer at a commercial or industrial site?",
    explanation:
      "Many light-industrial premises receive 400 V and larger sites may take high voltage, so the original label does not determine one supply. Of the listed values, 11 kV is the common primary-distribution choice for a private transformer.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29762",
    questionNumber: 13,
    promptSuffix:
      "What is the voltage of the 'national grid' system of electricity transmission?",
    correctedPromptSuffix:
      "Which set lists the AC voltage levels used by Great Britain's National Electricity Transmission System?",
    options: {
      A: "11 kV and 33 kV",
      B: "132 kV only",
      C: "230 V and 400 V",
      D: "132 kV, 275 kV and 400 kV",
    },
    answer: "D",
    explanation:
      "NESO states that the GB transmission system comprises 132 kV, 275 kV and 400 kV networks. A single 132 kV answer is an obsolete oversimplification.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29762",
    questionNumber: 23,
    promptSuffix:
      "If a circuit conductor has had no 'correction factors' applied, identify the current value that is used to make the final conductor size selection.",
    correctedPromptSuffix:
      "If no rating factors apply, which listed current establishes the minimum tabulated current-carrying capacity required when selecting an overload-protected conductor?",
    explanation:
      "With no rating-factor denominator, the required tabulated capacity is at least the protective-device rating In, while the complete design still satisfies Ib ≤ In ≤ Iz. The original wording did not identify which current quantity was being selected.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29762",
    questionNumber: 26,
    promptSuffix:
      "State the INSTALLATION METHOD for a cable that is 'clipped direct to a surface'",
    options: { C: "Method C" },
    explanation:
      "A cable clipped direct to a surface uses Reference Method C. Reference Method B applies to cable enclosed in conduit on a wall or in trunking, not to a clipped-direct cable.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29762",
    questionNumber: 27,
    promptSuffix:
      "State the maximum recommended 'measured' impedance for an earth electrode on a TT system",
    correctedPromptSuffix:
      "What does IET guidance indicate when a measured earth-electrode resistance exceeds 200 ohms?",
    options: {
      A: "It is automatically acceptable up to 1000 ohms",
      B: "It is the theoretical 30 mA RCD limit and needs no investigation",
      C: "The resistance may not be stable and should be investigated and reduced where practicable",
      D: "It proves the distributor's external loop impedance is 21 ohms",
    },
    answer: "C",
    explanation:
      "BS 7671 does not make 200 Ω a universal mathematical maximum for every TT electrode. Its note warns that a value above 200 Ω may be unstable; the actual design must also satisfy RA × IΔn ≤ 50 V and the required disconnection conditions.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29762",
    questionNumber: 30,
    promptSuffix:
      "A circuit has a 50 mm² line conductor. Select an appropriate earthing conductor size",
    correctedPromptSuffix:
      "Using Table 54.7 for copper conductors of the same material, what minimum circuit protective conductor size corresponds to a 50 mm² line conductor?",
    explanation:
      "The calculation concerns a circuit protective conductor, not the installation earthing conductor. For a line conductor above 35 mm², Table 54.7 gives S/2, so 50/2 = 25 mm².",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29763",
    questionNumber: 1,
    promptSuffix:
      "A 25A load has a conductor protected by a 32A mcb and has the following correction factors applied; Ca = 0.71 and Cg = 0.75. Calculate the 'tabulated current' required",
    correctedPromptSuffix:
      "A 25 A load is protected by a 32 A MCB. With Ca = 0.71 and Cg = 0.75, what minimum tabulated current It is required before selecting the next available conductor size?",
    options: { C: "60.1 A" },
    explanation:
      "It = In/(Ca × Cg) = 32/(0.71 × 0.75) = 60.09 A, which rounds to 60.1 A. The original 60 A option rounded down below the calculated minimum.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29763",
    questionNumber: 5,
    promptSuffix:
      "Within what distance from the outlet of a gas meter MUST a bonding connection be made?",
    correctedPromptSuffix:
      "Where an internal gas meter requires main protective bonding, where should the connection normally be made, where practicable and before any branch pipework?",
    options: {
      C: "Within 600 mm of the meter outlet on the consumer's hard metal pipework",
    },
    explanation:
      "The original omits the consumer side, practicability and branch-pipe qualifications. For an internal meter the connection is normally on consumer hard metal pipework within 600 mm of the outlet union and before branch pipework.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29763",
    questionNumber: 6,
    promptSuffix:
      "What name is given to the earth conductor that connects an extraneous conductive part to the Main Earthing Terminal (MET) of an installation (i.e. metallic gas supply pipe near the gas meter)?",
    correctedPromptSuffix:
      "What name is given to the protective conductor that connects a service extraneous-conductive-part to the main earthing terminal?",
    options: { C: "Main protective bonding conductor" },
    explanation:
      "Current terminology is main protective bonding conductor. It connects an extraneous-conductive-part to the MET to limit hazardous potential differences; it is not an earthing conductor or CPC.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29763",
    questionNumber: 10,
    promptSuffix:
      "With reference to RCD protection, calculate the maximum theoretical Earth Fault Loop Impedance value for a 100mA device supplied at 230v AC",
    correctedPromptSuffix:
      "Using the 50 V conventional touch-voltage limit, calculate the maximum theoretical earth-electrode resistance RA for fault protection by a 100 mA RCD.",
    explanation:
      "The relevant condition is RA × IΔn ≤ 50 V, not a generic 230 V divided by current loop-impedance calculation. Therefore RA ≤ 50/0.1 = 500 Ω, subject to the electrode-stability guidance.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29763",
    questionNumber: 11,
    promptSuffix:
      "With reference to RCD protection, state the maximum Earth Fault Loop Impedance that must not be exceeded for 30 and 100mA devices supplied at 230v AC",
    correctedPromptSuffix:
      "What does IET guidance indicate when a measured earth-electrode resistance exceeds 200 ohms?",
    options: {
      A: "It is always acceptable for a 30 mA RCD",
      B: "It is the common maximum Zs for both 30 mA and 100 mA RCDs",
      C: "The resistance may not be stable and should be investigated and reduced where practicable",
      D: "It proves the RCD will operate at 500 mA",
    },
    answer: "C",
    explanation:
      "There is no shared 200 Ω maximum Zs for 30 mA and 100 mA devices: the theoretical RA limits from 50/IΔn are different. The 200 Ω figure is guidance that a higher electrode resistance may be unstable.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29763",
    questionNumber: 12,
    promptSuffix:
      "Which one of the following is an 'extraneous conductive part'?",
    correctedPromptSuffix:
      "An aluminium door frame is electrically continuous with structural metalwork in contact with Earth and can introduce Earth potential into the installation. How is it classified?",
    explanation:
      "Metal is not automatically extraneous. The added facts satisfy the BS 7671 definition: it is conductive, not part of the electrical installation, and liable to introduce Earth potential.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29763",
    questionNumber: 16,
    promptSuffix:
      "With reference to RCD protection, calculate the maximum theoretical Earth Fault Loop Impedance value for a 500mA device supplied at 230v AC",
    correctedPromptSuffix:
      "Using the 50 V conventional touch-voltage limit, calculate the maximum theoretical earth-electrode resistance RA for fault protection by a 500 mA RCD.",
    explanation:
      "The design relationship is RA × IΔn ≤ 50 V. With IΔn = 0.5 A, RA ≤ 50/0.5 = 100 Ω; calling this simply a 230 V earth-fault-loop calculation is misleading.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29763",
    questionNumber: 17,
    promptSuffix:
      "A TN-S system of earthing has a supply live (line) conductor that is 10 mm² csa (cross-sectional area). Select the appropriate minimum csa for the protective conductor?",
    correctedPromptSuffix:
      "Using Table 54.7 for copper conductors of the same material, what minimum circuit protective conductor size corresponds to a 10 mm² line conductor?",
    explanation:
      "The Table 54.7 relationship does not depend on the prompt labelling the system TN-S. For a line conductor up to and including 16 mm², the CPC has the same cross-sectional area: 10 mm².",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29763",
    questionNumber: 18,
    promptSuffix:
      "Identify the name of the earthing conductor that connects extraneous metallic parts together?",
    correctedPromptSuffix:
      "Where local supplementary protective bonding is required, which conductor links simultaneously accessible exposed-conductive-parts and extraneous-conductive-parts?",
    options: { D: "Supplementary protective bonding conductor" },
    explanation:
      "The original description could refer to bonding generally and incorrectly calls the conductor an earthing conductor. The location-specific link described is supplementary protective bonding.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29763",
    questionNumber: 19,
    promptSuffix: "What is the 'average' assumed impedance of a 'TN-S' system?",
    correctedPromptSuffix:
      "When distributor data is unavailable, what typical maximum external earth fault loop impedance Ze is commonly used for design of a public TN-S supply up to 100 A?",
    explanation:
      "The 0.8 Ω figure is historical IET/ENA typical design guidance, not an average or a guaranteed distributor maximum. Actual distributor information or measurement takes priority.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29763",
    questionNumber: 21,
    promptSuffix:
      "Which Earthing System MUST have a (main) R.C.D as additional protection?",
    correctedPromptSuffix:
      "Which earthing arrangement commonly requires RCD fault protection because its earth-electrode return path is usually too high in impedance for an overcurrent device to achieve automatic disconnection?",
    explanation:
      "In a TT system an RCD is commonly used for fault protection under ADS. Calling it a mandatory single 'main RCD' providing additional protection is incorrect: the installation may use multiple devices, and additional protection specifically refers to RCDs not exceeding 30 mA.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29763",
    questionNumber: 23,
    promptSuffix:
      "Identify the name of the earthing conductor that connects service and structural extraneous conductive parts to the main earthing terminal (MET)?",
    correctedPromptSuffix:
      "Identify the protective conductor that connects service and structural extraneous-conductive-parts to the main earthing terminal.",
    options: { C: "Main protective bonding conductor" },
    explanation:
      "Current BS 7671 terminology is main protective bonding conductor. It performs bonding rather than the distinct function of the installation earthing conductor.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29763",
    questionNumber: 27,
    promptSuffix:
      "Which term best describes 'earthing' with reference to protection?",
    correctedPromptSuffix:
      "Which statement best describes protective earthing in an installation?",
    options: {
      A: "Connecting exposed-conductive-parts to the main earthing terminal by protective conductors",
      B: "Connecting every metallic item directly to the general mass of Earth",
      C: "Connecting extraneous-conductive-parts to the main earthing terminal",
      D: "Linking exposed- and extraneous-conductive-parts together without an earthing path",
    },
    answer: "A",
    explanation:
      "IET guidance distinguishes the functions: earthing connects exposed-conductive-parts to the MET to provide a fault-current path, while connecting extraneous-conductive-parts to the MET is protective bonding. The original key combined both and was wrong.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29764",
    questionNumber: 2,
    promptSuffix: "Which one of the following provides 'fault protection'?",
    correctedPromptSuffix:
      "Which listed combination provides fault protection by automatic disconnection of supply (ADS)?",
    options: {
      A: "Earthing and automatic disconnection by a suitable protective device",
    },
    explanation:
      "Electrical separation and double or reinforced insulation can also provide fault protection, so the original question had multiple defensible answers. Under ADS, earthing provides the fault-current path and a fuse, circuit-breaker or RCD disconnects the supply.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29764",
    questionNumber: 5,
    promptSuffix:
      "What name is given to the earth conductor that connects an extraneous conductive part to the Main Earthing Terminal (MET) of an installation (i.e. metallic gas supply pipe near the gas meter)?",
    correctedPromptSuffix:
      "What name is given to the protective conductor that connects a service extraneous-conductive-part to the main earthing terminal?",
    options: { C: "Main protective bonding conductor" },
    explanation:
      "This is a main protective bonding conductor, not an earthing conductor. It connects a qualifying extraneous-conductive-part to the MET to limit hazardous touch-voltage differences.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29764",
    questionNumber: 7,
    promptSuffix:
      "Identify the maximum disconnection time for a 40A circuit supplying fixed connected equipment on a TN earthing system",
    explanation:
      "Table 41.1 gives 5 s for a TN final circuit above 32 A that does not supply a socket-outlet. The classification and rating determine the value; it should not be justified by assuming fixed equipment is unlikely to be touched.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29764",
    questionNumber: 10,
    promptSuffix:
      "Identify the protective device that has a maximum 'fusing factor' of 1.5 times the device rating",
    correctedPromptSuffix:
      "For a circuit-breaker to BS EN 60898, what multiple of rated current In is the conventional tripping current I2?",
    options: {
      A: "1.13 In, the conventional non-tripping current",
      B: "2.0 In",
      C: "1.45 In",
      D: "1.6 In, the conventional fusing current for a BS 88-2 fuse",
    },
    answer: "C",
    explanation:
      "'Fusing factor' is fuse terminology and 1.5 is only a rough approximation. BS EN 60898 specifies a conventional tripping current of 1.45 In for the circuit-breaker.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29764",
    questionNumber: 12,
    promptSuffix:
      "Identify the maximum disconnection time for a BSEN61009 RCD (non time-delayed) when tested at x0.5 its current rating",
    correctedPromptSuffix:
      "During an optional 0.5 IΔn diagnostic test on a general non-delay BS EN 61009 RCBO, what result is expected?",
    explanation:
      "At half rated residual current the device should not trip. Current BS 7671 field verification requires the test at IΔn; a 0.5 IΔn test may still be used diagnostically but has no maximum trip time because operation is not expected.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29764",
    questionNumber: 22,
    promptSuffix:
      "Which one of the following is not an example of an 'short-circuit fault'?",
    correctedPromptSuffix:
      "Which listed event is not a short-circuit overcurrent?",
    options: {
      A: "A direct unintended line-to-earth connection",
      B: "Insulation breakdown creating a low-impedance line-to-neutral connection",
      C: "Normal magnetising or starting inrush when a large motor is energized",
      D: "Cable cutters simultaneously bridging line and neutral conductors",
    },
    answer: "C",
    explanation:
      "The original grammar is broken and generic insulation failure does not necessarily create a short circuit. Normal motor starting current is an intended transient operating current, whereas the other revised choices create unintended low-impedance paths.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29764",
    questionNumber: 24,
    promptSuffix: "Which one of the following is a 'HRC' type?",
    correctedPromptSuffix:
      "Which listed current standard covers common low-voltage high-rupturing-capacity cartridge fuse links used in electrical installations?",
    options: {
      A: "BS 1361 (withdrawn)",
      B: "BS 3036",
      C: "BS 88",
      D: "BS EN 60898",
    },
    explanation:
      "The original has two historical HBC/HRC answers because BS 1361 fuses were also high-breaking-capacity devices. BS 1361 is withdrawn and superseded; BS 88 is the current listed HRC cartridge-fuse family, while BS 3036 is rewirable and BS EN 60898 covers circuit-breakers.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29765",
    questionNumber: 1,
    promptSuffix: "What is a RCD?",
    correctedPromptSuffix: "What does the abbreviation RCD stand for?",
    explanation:
      "RCD stands for residual current device. It monitors the difference between currents in the live conductors and disconnects when the residual current reaches its operating threshold.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29765",
    questionNumber: 2,
    promptSuffix:
      "What is meant by the abbreviation 'HRC' when referring to the HRC fuse?",
    options: { D: "High rupturing capacity" },
    explanation:
      "In established UK terminology, HRC means high rupturing capacity. It describes a fuse designed to interrupt a high prospective fault current safely; 'high breaking capacity' describes the characteristic but is not the expansion of HRC.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29765",
    questionNumber: 3,
    promptSuffix:
      "Which one of the following is not an example of an 'Earth fault'?",
    correctedPromptSuffix:
      "Which listed condition is an overload rather than an earth fault?",
    options: {
      B: "A line conductor incorrectly terminated to an earthed enclosure",
      C: "Insulation failure that connects a live conductor to earth",
      D: "Cable damage that puts a live conductor in contact with earthed metal",
    },
    explanation:
      "Adding load above a circuit's designed capacity is an overload. The other three options create an unintended conductive path from a live conductor to earth and are therefore earth faults.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29765",
    questionNumber: 4,
    promptSuffix:
      "Which one of the following is termed an 'extraneous conductive part'?",
    correctedPromptSuffix:
      "Which listed item is an extraneous-conductive-part when it is metallic, enters from the ground and is liable to introduce earth potential?",
    options: { A: "An incoming cast-iron drain with continuity to Earth" },
    explanation:
      "The qualifying drain is not part of the electrical installation but can introduce earth potential, so it is an extraneous-conductive-part. The back-box, motor housing and steel consumer unit are electrical equipment and, when accessible, are exposed-conductive-parts.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29765",
    questionNumber: 5,
    promptSuffix:
      "Which one of the following best describes the operation of a RCD?",
    correctedPromptSuffix:
      "Which principle best describes the operation of an RCD?",
    explanation:
      "An RCD compares the currents flowing in the live conductors through a summation transformer. In normal operation they balance; a residual imbalance operates the device.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29765",
    questionNumber: 7,
    promptSuffix:
      "A thermostatically-controlled water heater is rated at 3kw at 230v. What would be the most suitable circuit to install this equipment on?",
    correctedPromptSuffix:
      "A 3 kW, 230 V thermostatically controlled water heater draws about 13 A and its manufacturer requires a dedicated circuit. Which listed arrangement satisfies that requirement?",
    explanation:
      "The design current is about 3000/230 = 13 A. A correctly designed dedicated 16 A radial circuit can supply it; the 10 A circuit is undersized, and either spur option fails the stated dedicated-circuit requirement.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29765",
    questionNumber: 8,
    promptSuffix:
      "Where trunking passes between rooms on the same floor, internal and external fire barriers shall be installed -",
    correctedPromptSuffix:
      "Where must suitable fire stopping be provided when trunking penetrates a fire-separating wall?",
    options: { D: "At the penetration through the fire-separating wall" },
    explanation:
      "Fire stopping is required where a wiring-system penetration must preserve a fire-separating element's specified resistance. It is not automatically required at every ordinary room wall or at arbitrary intervals along the run.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29765",
    questionNumber: 9,
    promptSuffix:
      "What is the preferred way of reducing excessive voltage drop in a circuit?",
    correctedPromptSuffix:
      "While retaining the required load and route length, which listed design change reduces excessive circuit voltage drop?",
    explanation:
      "Increasing conductor cross-sectional area reduces resistance and therefore voltage drop without changing the required load or route. Increasing length or reducing supply voltage worsens the design; reducing the required load changes the brief.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29765",
    questionNumber: 10,
    promptSuffix:
      "A lack of cooperation between trades on a busy building site can lead to?",
    correctedPromptSuffix:
      "What is the most serious direct safety consequence of poor coordination between trades on a busy building site?",
    explanation:
      "Uncoordinated work can expose one trade to hazards created by another and directly cause accidents. Poor relationships may also result, but the question now asks specifically for the safety consequence.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29765",
    questionNumber: 12,
    promptSuffix:
      "Which ONE of the following sites has to meet the specific requirements of special 'codes of practice'?",
    correctedPromptSuffix:
      "Which listed site normally requires hazardous-area standards and petroleum-industry guidance in addition to BS 7671 because flammable motor-fuel vapours may be present?",
    explanation:
      "A petrol filling station can contain explosive gas atmospheres and needs hazardous-area classification, equipment selection and petroleum-enforcement guidance in addition to the general wiring rules. The original wording was ambiguous because the other listed locations also have particular electrical requirements.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29765",
    questionNumber: 14,
    promptSuffix:
      "Which ONE of the following systems of earthing uses the 'general mass of earth' as the earthing conductor?",
    correctedPromptSuffix:
      "Which earthing arrangement uses the installation's own earth electrode and the general mass of Earth as part of the earth-fault return path?",
    explanation:
      "A TT installation connects exposed-conductive-parts to a local earth electrode and relies on the general mass of Earth in the fault loop. The earthing conductor itself is the conductor between the main earthing terminal and the electrode, so the original wording was technically inaccurate.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29765",
    questionNumber: 15,
    promptSuffix:
      "An A1 RING circuit is protected by a 32A MCB at 230v. What is the MAXIMUM power available?",
    correctedPromptSuffix:
      "At 230 V, what nominal resistive-load power corresponds to a 32 A circuit rating?",
    options: { A: "7.36 kW", B: "73.66 W", C: "7360 kW", D: "736 W" },
    explanation:
      "For a unity-power-factor load, P = VI = 230 × 32 = 7360 W = 7.36 kW. This is a nominal calculation, not permission to ignore load profile, circuit design or protective-device requirements.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29765",
    questionNumber: 17,
    promptSuffix:
      "A bedroom is to be converted into a bathroom. There are 13A socket outlets in the bedroom which will be 3.6m from the edge of the proposed position for the new bath and shower tray. What must happen to these socket outlets?",
    correctedPromptSuffix:
      "A bedroom is being converted into a bathroom. Existing 13 A socket-outlets will be 3.6 m horizontally from the boundary of zone 1 around the proposed bath and shower. What does Section 701 permit, assuming the sockets otherwise comply with BS 7671?",
    options: {
      A: "They may remain because they are more than 3 m from the boundary of zone 1",
    },
    explanation:
      "Socket-outlets other than SELV or shaver units are prohibited within 3 m horizontally of the boundary of zone 1. At 3.6 m they are outside that location-specific exclusion, although the circuit and accessories must still satisfy all other applicable requirements.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29765",
    questionNumber: 18,
    promptSuffix:
      "When selecting cable from the BS7671 regulation tables, by what criteria are cables selected?",
    correctedPromptSuffix:
      "Which listed cable property is compared with design current and protective-device rating after applicable rating factors are applied?",
    explanation:
      "The corrected current-carrying capacity Iz must satisfy the circuit design relationship with Ib and In. Final cable selection must also verify voltage drop, fault protection, thermal withstand and external influences; the original wording implied current capacity was the only criterion.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29765",
    questionNumber: 19,
    promptSuffix: "Which ONE of the following is not normally shown on a CPN?",
    correctedPromptSuffix:
      "Which item belongs in payroll or estimating records rather than a contract programme network?",
    options: { A: "Planned labour-hours for each activity" },
    explanation:
      "A programme can show planned activity duration, labour requirements and contract start and finish dates. Individual pay and overtime rates are commercial or payroll data, not programme-network information.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29765",
    questionNumber: 20,
    promptSuffix: "What are the items shown here called?",
    correctedPromptSuffix:
      "What are the purpose-designed fittings that secure and restrain power cables, including against short-circuit forces, called?",
    explanation:
      "The source image is absent. Cable cleats are purpose-designed cable-restraint devices; ordinary ties, generic clamps and support brackets are not interchangeable with a correctly selected cleat system.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29765",
    questionNumber: 21,
    promptSuffix:
      "What is the most appropriate tool for ensuring that a vertical run of conduit is correctly installed?",
    answer: "C",
    explanation:
      "A spirit level directly checks whether the conduit is plumb. A chalk line can mark a long straight reference only after that reference has itself been set vertically, so it does not independently establish verticality.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29765",
    questionNumber: 23,
    promptSuffix: "What is the purpose of an 'Installation Specification'?",
    options: {
      B: "To state the client's installation requirements to the contractor",
    },
    explanation:
      "The installation specification communicates the client's technical, performance and quality requirements to the contractor. Operating instructions and as-built information are produced for a different handover purpose.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29765",
    questionNumber: 24,
    promptSuffix:
      "Who is responsible for the disposal of waste packaging and other waste materials?",
    correctedPromptSuffix:
      "Who has the legal waste-duty-of-care responsibility for waste packaging and offcuts produced or controlled by a business?",
    options: {
      A: "Only an individual employee's manager",
      B: "Always the client, regardless of who produced the waste",
      C: "Only the principal contractor, regardless of who holds the waste",
      D: "The business or other waste holder that produces or controls the waste",
    },
    explanation:
      "Waste duty of care falls on businesses and other holders that import, produce, carry, keep, treat or dispose of controlled waste. An operative follows the employer's arrangements, but is not automatically the sole legal dutyholder merely because they created an offcut.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29765",
    questionNumber: 25,
    promptSuffix:
      "BS7671:2018 defines the colours of electrical conductors. What is the colour defined for a protective conductor?",
    correctedPromptSuffix:
      "Under current BS 7671 conductor identification, which colour combination is reserved for a protective conductor?",
    explanation:
      "A protective conductor is identified by the bi-colour green-and-yellow combination. Brown identifies line and neither green nor yellow alone is permitted as the protective-conductor identification.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29765",
    questionNumber: 26,
    promptSuffix:
      "What is the name of the conductors indicated by the two arrows in the lighting circuit shown here",
    correctedPromptSuffix:
      "In a two-way lighting circuit, what are the two conductors linking the corresponding changeover terminals of the two switches commonly called?",
    explanation:
      "The source image is absent. The paired conductors between the changeover switches are commonly called strappers; the switched line is the separate conductor from the switching arrangement to the luminaire.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29765",
    questionNumber: 29,
    promptSuffix:
      "With reference to RCD protection, calculate the maximum theoretical Earth Fault Loop Impedance value for a 500mA device supplied at 230v AC",
    correctedPromptSuffix:
      "Using the conventional 50 V touch-voltage relationship RA × IΔn ≤ 50 V, what maximum theoretical RA corresponds to a 500 mA RCD?",
    options: { A: "100 Ω", B: "1667 Ω", C: "167 Ω", D: "500 Ω" },
    explanation:
      "RA ≤ 50/0.5 = 100 Ω. This is the theoretical touch-voltage relationship for the earth-electrode and protective-conductor resistance, not a general 230 V/Zs calculation; practical electrode resistance should be stable and appropriately low.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29766",
    questionNumber: 1,
    promptSuffix:
      "BS7671:2018 is a NON-STATUTORY document. What does this mean?",
    correctedPromptSuffix:
      "BS 7671 is non-statutory. Which statement correctly describes that status?",
    options: {
      B: "It is a technical standard rather than legislation in itself",
    },
    explanation:
      "BS 7671 is the UK national standard for electrical installations, not an Act or statutory instrument. It may be required by contract and is widely used to demonstrate compliance with legal duties, so describing it as 'guidelines only' understated its status.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29766",
    questionNumber: 2,
    promptSuffix:
      "What does the term ABSOLUTE mean with reference to the Eaw regulations?",
    correctedPromptSuffix:
      "What does an absolute legal duty mean in the context of the Electricity at Work Regulations?",
    explanation:
      "An absolute duty must be achieved; it is not qualified by cost, time or reasonable practicability. This differs from duties expressly qualified by 'so far as is reasonably practicable'.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29766",
    questionNumber: 3,
    promptSuffix: "What is BS 7671:2018 an example of?",
    correctedPromptSuffix: "What type of document is current BS 7671?",
    options: {
      C: "A non-statutory British Standard for electrical installations",
    },
    explanation:
      "BS 7671 is a British Standard containing requirements for electrical installations. It is not itself legislation, although following it is a widely accepted means of demonstrating compliance with statutory electrical-safety duties.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29766",
    questionNumber: 5,
    promptSuffix:
      "What publication best SUPPORTS the latest IET (BS7671: 2018) wiring regulations book?",
    correctedPromptSuffix:
      "Which listed IET publication is the practical companion to BS 7671:2018+A4:2026 for common installations within its scope?",
    explanation:
      "The ninth-edition IET On-Site Guide is aligned with BS 7671:2018+A4:2026 and provides practical guidance for installations within its stated scope. A generic textbook or another body's code is not the dedicated companion publication.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29766",
    questionNumber: 6,
    promptSuffix: "What is defined in the FIRST SECTION of EaW regulations?",
    correctedPromptSuffix:
      "What do Regulations 1 to 3 at the beginning of the Electricity at Work Regulations 1989 principally cover?",
    options: {
      A: "Citation, commencement, interpretation and the persons on whom duties are imposed",
    },
    explanation:
      "Regulations 1 to 3 contain the preliminary provisions: citation and commencement, interpretation, and application of duties. 'Documentation and Administration' is not a named section of the Regulations.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29766",
    questionNumber: 7,
    promptSuffix:
      "What is the CORRECT name for the current IET BS 7671 wiring Regulations?",
    correctedPromptSuffix:
      "Which citation identifies the current IET Wiring Regulations published in April 2026?",
    options: {
      A: "BS 7671:2018+A1:2020",
      B: "BS 7671:2018+A2:2022",
      C: "BS 7671:2018+A2:2022+A3:2024",
      D: "BS 7671:2018+A4:2026",
    },
    explanation:
      "Amendment 4 was published on 15 April 2026 and the consolidated current citation is BS 7671:2018+A4:2026. The previous A2+A3 version remains in a six-month transition period but is scheduled for withdrawal in October 2026.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29766",
    questionNumber: 8,
    promptSuffix: "What year is associated with the Electricity at Work Act?",
    correctedPromptSuffix:
      "In what year were the Electricity at Work Regulations made?",
    explanation:
      "The correct title is the Electricity at Work Regulations 1989. They were made under the Health and Safety at Work etc. Act 1974; there is no 'Electricity at Work Act'.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29766",
    questionNumber: 10,
    promptSuffix:
      "What is detailed by regulation number 15 under Eaw regulations?",
    correctedPromptSuffix:
      "What is covered by Regulation 15 of the Electricity at Work Regulations 1989?",
    options: { C: "Working space, access and lighting" },
    explanation:
      "Regulation 15 requires adequate working space, means of access and lighting at electrical equipment where work may give rise to danger. The original option omitted lighting.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29766",
    questionNumber: 11,
    promptSuffix:
      "Following a recent visit, a company has received a 'prohibition notice' from an HSE Inspector, regarding an item of equipment. Which one of the following answers best describes this notice?",
    correctedPromptSuffix:
      "An HSE inspector believes continued use of equipment involves an imminent risk of serious personal injury and serves an immediate prohibition notice. What must the company do?",
    options: {
      D: "Stop the prohibited use immediately and remedy the matters before it resumes",
    },
    explanation:
      "A prohibition notice is based on a risk of serious personal injury. Where the notice takes immediate effect because the risk is imminent, the prohibited activity must stop at once and cannot resume until the stated matters have been remedied.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29766",
    questionNumber: 12,
    promptSuffix:
      "Some companies may have a 'safety committee'. How many employees (minimum) would 'normally' be employed in a company before a safety committee is set up?",
    correctedPromptSuffix:
      "Under the Safety Representatives and Safety Committees Regulations 1977, what triggers the employer's duty to establish a safety committee?",
    options: {
      A: "A written request from at least two appointed trade-union safety representatives",
      B: "Employing exactly 20 people",
      C: "Employing at least 50 people",
      D: "Employing at least 100 people",
    },
    answer: "A",
    explanation:
      "There is no employee-number threshold. Where at least two trade-union-appointed safety representatives request a committee in writing, the employer must establish one after consultation, normally within three months.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29766",
    questionNumber: 14,
    promptSuffix:
      "The HSE produce a Health and Safety Law Poster. How many employees (minimum) does a company have to employ before a poster MUST be displayed in the workplace?",
    correctedPromptSuffix:
      "Which statement correctly describes an employer's duty concerning the approved HSE health-and-safety-law poster or leaflet?",
    options: {
      A: "Every employer must display the approved poster or give each worker the equivalent approved leaflet",
      B: "The duty begins only when five people are employed",
      C: "The duty begins only when 20 people are employed",
      D: "The duty begins only when 100 people are employed",
    },
    answer: "A",
    explanation:
      "The poster-or-leaflet duty applies to employers without a five-person threshold. The five-employee threshold relates to recording a health and safety policy, not communicating the statutory health and safety information.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29766",
    questionNumber: 15,
    promptSuffix:
      "Failure to comply with HaSaW etc 1974 could result in which one of the following answers?",
    correctedPromptSuffix:
      "Which listed criminal sanction can a court impose for an offence under the Health and Safety at Work etc. Act 1974?",
    options: {
      A: "Automatic closure of every business operated by the defendant",
      B: "A fine and, for applicable offences, imprisonment",
      C: "Civil damages only, with no criminal proceedings",
      D: "Dismissal from employment ordered directly by HSE",
    },
    answer: "B",
    explanation:
      "Health and safety offences can be prosecuted and punished by fines and, where the legislation permits, imprisonment. Reputational or commercial loss may follow but is not itself the direct criminal sentence asked for.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29766",
    questionNumber: 17,
    promptSuffix:
      "Following a recent visit, a company has received an 'improvement notice' from an HSE Inspector, regarding an item of equipment. Which one of the following answers best describes this notice?",
    correctedPromptSuffix:
      "An inspector identifies a continuing legal contravention that can be remedied within a specified period and does not require prohibition for a serious personal-injury risk. Which statement describes the improvement notice?",
    options: {
      A: "The notice specifies remedial action and a compliance period; it does not itself prohibit use immediately",
    },
    explanation:
      "An improvement notice identifies the contravention, required remedy and compliance period. It does not itself prohibit an activity; a prohibition notice is the tool used where an activity involves a risk of serious personal injury.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29766",
    questionNumber: 19,
    promptSuffix: "Who enforces the Health and Safety at Work etc Act 1974?",
    correctedPromptSuffix:
      "Which listed national regulator enforces health and safety law in workplaces allocated to it?",
    explanation:
      "HSE is the national regulator and enforces in the workplaces allocated to it; local authorities enforce in other allocated premises. Courts determine prosecutions and penalties rather than carrying out workplace regulation.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29766",
    questionNumber: 20,
    promptSuffix: "What is the purpose of a 'Health and Safety Policy'?",
    correctedPromptSuffix:
      "What is the purpose of an employer's written health and safety policy?",
    options: {
      B: "To communicate the employer's policy, responsibilities and arrangements for managing health and safety",
    },
    explanation:
      "The policy records the employer's general approach, who is responsible and the practical arrangements for managing risks, and communicates these to the workforce. It is not an insurance certificate or a document written for HSE.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29766",
    questionNumber: 22,
    promptSuffix:
      "What type of drawing shows the technical specification and circuit layout using 'special' symbols, of a machine/system?",
    correctedPromptSuffix:
      "Which drawing uses standard component symbols and a logical rather than physical arrangement to show how a machine or system functions?",
    explanation:
      "A schematic diagram represents functional relationships with symbols and does not reproduce the physical layout. The original wording overlapped with the meaning of a circuit diagram and did not identify a unique answer.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29766",
    questionNumber: 25,
    promptSuffix:
      "In a written contract, identify the term that details the 'penalty payment' that a contractor may have to pay to the client should work not be completed on time",
    correctedPromptSuffix:
      "In a written construction contract, what term describes a pre-agreed sum payable for specified delay where it is a genuine contractual remedy rather than an unenforceable penalty?",
    explanation:
      "Liquidated damages are an agreed remedy for delay, normally stated as a rate or sum and subject to the contract's completion provisions. Calling them a 'penalty payment' was legally misleading because a penalty clause is treated differently.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29766",
    questionNumber: 29,
    promptSuffix:
      "What type of drawing shows how a systems works and is very useful during fault-finding?",
    correctedPromptSuffix:
      "Which drawing shows the detailed electrical connections between circuit components and is useful for tracing a fault path?",
    explanation:
      "A circuit diagram shows individual component connections and enables a technician to follow the electrical path during fault-finding. A block diagram shows only high-level functions, a layout shows positions and a schematic emphasises logical operation.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29766",
    questionNumber: 30,
    promptSuffix:
      "When carrying out large and expensive contracts, payment from the client may be made to the contractor at various times during the contract if certain conditions have been met. What is this called?",
    options: { C: "Interim (stage) payments" },
    explanation:
      "Interim or stage payments are made during the contract when the applicable valuation, milestone or certification conditions are met. A deposit precedes the work and final payment follows completion and the contract's final-account process.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29767",
    questionNumber: 1,
    promptSuffix:
      "What is defined in the FIRST THREE regulations under the EaW regulations?",
    correctedPromptSuffix:
      "What do Regulations 1 to 3 at the beginning of the Electricity at Work Regulations 1989 principally cover?",
    options: {
      A: "Citation, commencement, interpretation and the persons on whom duties are imposed",
    },
    explanation:
      "The opening regulations contain the preliminary provisions: citation and commencement, interpretation, and application of duties. 'Documentation and Administration' is not their formal title.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29767",
    questionNumber: 2,
    promptSuffix:
      "What does the term REASONABLY PRACTICABLE mean with reference to the Eaw regulations?",
    correctedPromptSuffix:
      "What does 'so far as is reasonably practicable' mean in health and safety law?",
    options: {
      A: "The risk is weighed against the time, trouble and cost of controls; a measure may be omitted only where that sacrifice is grossly disproportionate to the risk",
    },
    explanation:
      "Reasonable practicability is a risk-versus-sacrifice test with risk taking priority unless the sacrifice is grossly disproportionate. It does not mean controls are optional whenever cost or inconvenience is merely considered high.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29767",
    questionNumber: 3,
    promptSuffix: "BS7671 is NON STATUTORY. What does this mean?",
    correctedPromptSuffix:
      "BS 7671 is non-statutory. Which statement correctly describes that status?",
    options: {
      B: "It is a technical standard rather than legislation in itself",
    },
    explanation:
      "BS 7671 is not an Act or statutory instrument, but it is the UK national electrical-installation standard and can be required by contracts or used as evidence of compliance with legal duties. 'Guidelines only' was too dismissive.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29767",
    questionNumber: 4,
    promptSuffix:
      "What is detailed by regulation number 15 under Eaw regulations?",
    correctedPromptSuffix:
      "What is covered by Regulation 15 of the Electricity at Work Regulations 1989?",
    options: { C: "Working space, access and lighting" },
    explanation:
      "Regulation 15 requires adequate working space, access and lighting where electrical work may give rise to danger. The original option was incomplete because it omitted lighting.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29767",
    questionNumber: 5,
    promptSuffix: "What year is associated with the Electricity at Work Act?",
    correctedPromptSuffix:
      "In what year were the Electricity at Work Regulations made?",
    explanation:
      "The correct title is the Electricity at Work Regulations 1989. They were made under the Health and Safety at Work etc. Act 1974; there is no 'Electricity at Work Act'.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29767",
    questionNumber: 6,
    promptSuffix:
      "What publication best SUPPORTS the latest IET wiring regulations?",
    correctedPromptSuffix:
      "Which listed IET publication is the practical companion to current BS 7671:2018+A4:2026 for common installations within its scope?",
    explanation:
      "The ninth-edition On-Site Guide is aligned with BS 7671:2018+A4:2026 and provides practical application guidance. The other options are legislation, an obsolete union handbook or another organisation's guidance.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29767",
    questionNumber: 9,
    promptSuffix:
      "How can the length of time spent on an installation be carefully planned and monitored?",
    correctedPromptSuffix:
      "Which listed tool best supports detailed activity scheduling and ongoing comparison of actual installation progress with the programme?",
    options: { C: "Dedicated project-scheduling software" },
    explanation:
      "Scheduling software can define activities, dependencies, durations and resources and then compare actual progress with the baseline. Diaries, meetings and time sheets provide useful inputs but do not by themselves perform integrated programme planning and monitoring.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29767",
    questionNumber: 10,
    promptSuffix: "Where is this 'capping' used?",
    correctedPromptSuffix:
      "What is the normal purpose of cable capping in a plastered wall?",
    options: {
      D: "To cover and retain cables in a shallow chase before plastering, without being treated as BS 7671 mechanical protection",
    },
    explanation:
      "Capping protects and holds the cable during plastering and leaves a defined route, but ordinary capping is not sufficient mechanical protection against nails or screws under the concealed-cable rules. The missing image is no longer required.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29767",
    questionNumber: 11,
    promptSuffix:
      "Which ONE of the following requirements is NOT expected to be required of a qualified electrician?",
    correctedPromptSuffix:
      "Which capability is not automatically expected of an installation electrician without the relevant additional specialist training?",
    options: {
      B: "Interpret specialist engineering drawings outside the electrician's trade and project scope",
    },
    explanation:
      "A qualified installation electrician is expected to read relevant scaled drawings and mark out accessory positions. Specialist drawings outside that person's trade and competence may require a designer, engineer or additional training.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29767",
    questionNumber: 14,
    promptSuffix:
      "What document forms the basis for the 'contractual agreement' between contractor and customer?",
    correctedPromptSuffix:
      "Which formal document records the binding terms agreed between a contractor and customer?",
    options: { D: "A verbal agreement" },
    explanation:
      "The written contract records the parties, scope, price and other binding terms. A tender is an offer that may be incorporated when accepted, while a penalty clause is only one possible term and a verbal agreement is not the formal document asked for.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29767",
    questionNumber: 15,
    promptSuffix:
      "Who's responsibility is it to 'undertake the installation and be responsible for their personnel'?",
    correctedPromptSuffix:
      "In the listed traditional roles, who is responsible for delivering the overall contracted installation work and managing the personnel it employs or controls?",
    explanation:
      "The main contractor is responsible for the overall contracted works and for managing workers and subcontractors under its control. A subcontractor has corresponding duties for its own package, so the original unqualified wording was ambiguous.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29767",
    questionNumber: 16,
    promptSuffix:
      "What publication(s) best support the BS7671:2018 wiring regulations and On-site guide?",
    correctedPromptSuffix:
      "Which listed IET publication series provides topic-specific guidance supporting BS 7671:2018+A4:2026 and the On-Site Guide?",
    options: { C: "IET Guidance Notes 1 to 8" },
    explanation:
      "The IET Guidance Note series expands on BS 7671 topics such as selection and erection, isolation, protection, inspection and testing, and earthing and bonding. The current series contains Guidance Notes 1 to 8, not 1 to 7.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29767",
    questionNumber: 17,
    promptSuffix:
      "Identify the part within a GS-approved Voltage Tester that would primarily protect the tester from explosive damage should a short circuit in the tester during use",
    correctedPromptSuffix:
      "Which listed internal component can interrupt a high fault current and limit destructive arc energy if an approved two-pole voltage detector causes a short circuit?",
    explanation:
      "A suitably rated HRC/HBC fuse interrupts the fault current and limits the energy released by an internal or probe short circuit. Probe insulation and robust construction reduce other hazards but do not perform that interrupting function.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29767",
    questionNumber: 18,
    promptSuffix:
      "Which one of the following is not good practice when carrying out safe isolation?",
    correctedPromptSuffix:
      "Which action is plainly unsafe because it omits secure isolation and proving dead before work begins?",
    explanation:
      "Switching off a circuit-breaker and immediately starting work neither prevents reconnection nor verifies absence of voltage. Safe isolation requires the correct point to be identified, isolated, secured, proved dead with a proven indicator and controlled by the person doing the work.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29767",
    questionNumber: 19,
    promptSuffix:
      "Which one of the following statements shows the correct 'safe isolation' sequence?",
    correctedPromptSuffix:
      "Which sequence correctly describes safe isolation before work on a low-voltage circuit?",
    options: {
      A: "Identify the circuit and isolation point; isolate; secure and lock off with a warning; prove the voltage indicator; test every relevant conductor for dead; re-prove the indicator; begin work",
      B: "Identify and switch off; begin work; prove the indicator only after the work is complete",
      C: "Isolate and test dead; leave the isolator unsecured so others can restore it if needed",
      D: "Prove the indicator; test dead while energised; isolate only after the test",
    },
    answer: "A",
    explanation:
      "The isolation must be secured before proving dead so nobody can reconnect it during the test or work. The voltage indicator is proved immediately before and after testing every relevant conductor, confirming both absence of voltage and continued tester operation.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29767",
    questionNumber: 21,
    promptSuffix:
      "Identify the part within a GS-approved Voltage Tester that would primarily protect the tester from electric shock should damage occur to the tester during use",
    correctedPromptSuffix:
      "Which listed component limits current if a voltage-detector probe or lead creates a short circuit?",
    options: { C: "A current-limiting resistor" },
    explanation:
      "GS38 describes protective impedance and/or a suitably rated fuse as means of limiting current and consequences if a probe shorts live conductors. The original 'protect from electric shock should damage occur' wording was too vague to distinguish insulation, fusing and impedance.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29767",
    questionNumber: 22,
    promptSuffix:
      "Identify the appropriate instrument to check that a source of supply has been switched off.",
    correctedPromptSuffix:
      "Which instrument should be used to prove a low-voltage circuit dead during safe isolation?",
    options: {
      A: "An approved two-pole voltage indicator",
      B: "A non-contact voltage detector",
    },
    explanation:
      "An approved two-pole voltage indicator with a suitable proving device is used to prove dead. A non-contact detector cannot prove absence of voltage, and a multimeter or general voltmeter can be mis-set or unsuitable for this safety-critical task.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29767",
    questionNumber: 25,
    promptSuffix:
      "Identify ANY of the following that may be required when constructing a worksite temporary electrical distribution board (builders board) - click all answers that apply",
    correctedPromptSuffix:
      "On a construction or demolition site, which additional-protection requirement applies to a circuit supplying socket-outlets rated up to and including 32 A?",
    options: {
      A: "An isolator only, with no residual-current protection",
      B: "MCB protection only",
      C: "An RCD with rated residual operating current not exceeding 30 mA",
      D: "Unspecified switchgear with no defined protective function",
    },
    explanation:
      "Section 704 requires socket-outlet circuits up to and including 32 A to have additional protection by an RCD not exceeding 30 mA. An assembly will also need suitable isolation, overcurrent protection and switchgear, which made the original single-answer 'click all' question invalid.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29767",
    questionNumber: 26,
    promptSuffix:
      "The flex used for worksite extension leads must be able to withstand temperatures",
    correctedPromptSuffix:
      "Which listed low-temperature property is important when selecting a flexible cable for outdoor construction-site extension leads used in winter?",
    options: {
      D: "It remains suitable and flexible at the specified sub-zero service temperature",
    },
    explanation:
      "The selected cable must have a manufacturer-declared temperature range suitable for the actual environment and must not become brittle when handled in cold conditions. The original stem implied one universal unspecified temperature limit.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29767",
    questionNumber: 27,
    promptSuffix:
      "The electrical flex used for worksite extension leads is especially resistant to very low temperatures. What name is given to this type of flex",
    correctedPromptSuffix:
      "What common trade name is used for flexible cable compounded to remain flexible at low temperatures for site leads?",
    options: { B: "Ordinary PVC cable" },
    explanation:
      "'Arctic flex' is the common trade description. Selection must still be based on the cable's applicable product standard, voltage, current, mechanical duty and manufacturer temperature rating rather than on colour or trade name alone.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29768",
    questionNumber: 2,
    promptSuffix:
      "Identify the term used to state the number of single-way devices that can be installed in a single fuseboard",
    correctedPromptSuffix:
      "What term describes the number of outgoing single-pole circuit positions provided by a consumer unit or distribution board?",
    options: { C: "Modules (physical DIN-rail width units)", D: "Ways" },
    answer: "D",
    explanation:
      "A way is an outgoing circuit position. A module is a physical DIN-rail width unit, and devices can occupy one or more modules, so the terms are related but not interchangeable.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29768",
    questionNumber: 5,
    promptSuffix:
      "What happens to p.v.c insulation if handles at temperatures below zero degrees C?",
    correctedPromptSuffix:
      "What may happen if ordinary PVC-insulated cable is bent or handled below the manufacturer's minimum installation temperature?",
    explanation:
      "PVC stiffens as temperature falls and can crack or suffer mechanical damage if flexed below its specified installation temperature. The actual limit depends on the cable product and manufacturer, rather than every PVC cable sharing one universal zero-degree threshold.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29768",
    questionNumber: 7,
    promptSuffix: "Which one of the following is not a conductor?",
    correctedPromptSuffix:
      "Under normal low-voltage conditions, which listed material behaves as an electrical insulator rather than a conductor?",
    explanation:
      "Ordinary dry air has very low conductivity and acts as insulation under normal low-voltage conditions. It can conduct after ionisation or electrical breakdown, so the original unqualified wording was too absolute.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29768",
    questionNumber: 9,
    promptSuffix:
      "When terminating a cable into an accessory, it is good practice to ensure the sheathing is",
    correctedPromptSuffix:
      "When a sheathed cable enters an accessory, how should its outer sheath normally be terminated?",
    options: {
      D: "Extend it into the enclosure or cord grip far enough to protect the insulated conductors and provide any required restraint",
    },
    explanation:
      "The sheath should continue into the enclosure so basic insulation is not exposed outside and any cord grip acts on the sheath. A universal 'at least 5 mm' rule is not the governing criterion for every accessory.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29768",
    questionNumber: 11,
    promptSuffix:
      "What cable size is usually used in a domestic lighting circuit?",
    correctedPromptSuffix:
      "Subject to current-carrying capacity, voltage drop, fault protection and installation method, which listed conductor size is commonly used for a domestic lighting circuit?",
    explanation:
      "Of the listed choices, 1.5 mm² is a common domestic-lighting size. Cable size must still be calculated for the actual circuit; the original wording could be read as prescribing one size for every lighting circuit.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29768",
    questionNumber: 14,
    promptSuffix:
      "Which one of the following cable system is used for sub-main supply cables in industrial installations?",
    correctedPromptSuffix:
      "Which listed complete cable construction incorporates steel-wire armour to provide robust mechanical protection for an industrial sub-main?",
    explanation:
      "SWA identifies the armoured cable construction requested. XLPE and PVC describe insulation or sheath materials that can form part of several cable constructions, while PILC is a different legacy construction and can also be used for distribution, making the original broad use-based wording ambiguous.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29768",
    questionNumber: 15,
    promptSuffix:
      "What is usually fitted over the end of a newly prepared end of a FP200 cable sheath to protect the conductor insulation?",
    correctedPromptSuffix:
      "For current Prysmian FP200 GOLD with INSUDITE insulation, what extra item does the manufacturer say is no longer needed over the prepared core insulation at a termination?",
    options: {
      A: "A correctly selected cable gland",
      B: "A fire-resistant cable support",
      C: "A protective ferrule or special sleeving solely to protect soft silicone insulation",
      D: "The circuit protective conductor termination",
    },
    answer: "C",
    explanation:
      "Prysmian states that the hard-skin INSUDITE insulation used in current FP200 GOLD eliminates the old need for a protective ferrule or special sleeving used with fragile soft-silicone insulation. Normal gland, support and CPC requirements still apply.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29768",
    questionNumber: 16,
    promptSuffix:
      "What is the protective wrapping found underneath the PVC outer covering of a FP200 cable?",
    correctedPromptSuffix:
      "What metallic screen is fitted beneath the low-smoke zero-halogen outer sheath of current Prysmian FP200 GOLD?",
    options: { A: "Aluminium foil" },
    explanation:
      "The current manufacturer construction uses an aluminium metallised-foil screen in contact with a full-size tinned-copper CPC. The outer sheath is LSOH rather than the PVC stated in the original stem.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29768",
    questionNumber: 17,
    promptSuffix:
      "What is the principle conductor insulation material used in FP200 cable?",
    correctedPromptSuffix:
      "What conductor-insulation construction does current Prysmian FP200 GOLD use?",
    options: {
      A: "Ordinary PVC",
      B: "Bare soft silicone rubber",
      C: "PVC with a silicone coating",
      D: "INSUDITE fire-resistant crosslinked polymer insulation",
    },
    answer: "D",
    explanation:
      "The current Prysmian datasheet specifies crosslinked-polymer insulation, marketed as tough INSUDITE and compliant with the relevant EI5 material requirements. The old answer 'silicon rubber' is misspelled and does not describe the current product.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29768",
    questionNumber: 18,
    promptSuffix:
      "What is the recommended minimum bend radius for FP200 cable?",
    correctedPromptSuffix:
      "What minimum fixed-installation bend radius does the current Prysmian FP200 GOLD datasheet specify?",
    explanation:
      "The manufacturer's current UK datasheet gives a bending-radius rule of 6D, meaning six times the cable's overall diameter. Installation must follow the current datasheet for the exact product supplied.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29768",
    questionNumber: 19,
    promptSuffix:
      "When terminating FP200 cable in an outdoor location, what should be fitted inside the gland to ensure adequate water-proofing of the gland/termination?",
    correctedPromptSuffix:
      "When current FP200 GOLD is terminated outdoors, what gland arrangement should be used?",
    options: {
      A: "Any indoor gland because the cable alone supplies the enclosure IP rating",
      B: "A gland selected only by colour",
      C: "An improvised seal not listed by the manufacturer",
      D: "A compatible weatherproof gland and seal selected for the cable, enclosure and required IP rating",
    },
    explanation:
      "The termination must use compatible components and preserve the required ingress-protection rating in accordance with manufacturer instructions. The source's unexplained 'PCP sealing ring' acronym is not a safe universal specification for current products.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29768",
    questionNumber: 20,
    promptSuffix:
      "Which one of the following statements is true of FP200 cable?",
    correctedPromptSuffix:
      "Which statement correctly describes current Prysmian FP200 GOLD?",
    options: {
      A: "It may only be installed on cable tray",
      B: "It is a mineral-insulated copper-sheathed cable",
      C: "It always requires specialist termination tools",
      D: "It is an easy-termination, screened LSOH fire-resistant cable for standard fire-resistance applications",
    },
    explanation:
      "Prysmian describes FP200 GOLD as a standard fire-resistant, fully screened, LSOH-sheathed cable with easy termination. It is not MI cable, is not limited to tray and does not inherently require MI-style specialist terminating tools.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29768",
    questionNumber: 23,
    promptSuffix:
      "What is the maximum temperature that the copper conductors inside MI can withstand?",
    correctedPromptSuffix:
      "Which listed temperature is closest to copper's melting point of about 1085 °C?",
    options: { A: "1000 °C", B: "2000 °C", C: "500 °C", D: "5000 °C" },
    explanation:
      "1000 °C is the nearest listed value to copper's approximately 1085 °C melting point. This is not a continuous MI cable operating rating: the permitted operating temperature is limited by the complete cable, termination, seal, environment and manufacturer specification.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29768",
    questionNumber: 25,
    promptSuffix: "Which one of the following statements is true of MI cable?",
    options: {
      B: "Its copper sheath can serve as the circuit protective conductor where its continuity and cross-sectional area satisfy the applicable requirements",
    },
    explanation:
      "MI cable still requires a CPC function, but its continuous copper sheath may provide that function when correctly selected, terminated and verified. Saying it 'does not require a cpc' confused absence of a separate conductor with absence of protective-conductor protection.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29768",
    questionNumber: 26,
    promptSuffix:
      "What is the name of the special tool required for permanently fixing a sealing disc to the 'pot' on a MI cable termination?",
    correctedPromptSuffix:
      "Which listed tool compresses the sealing compound and permanently secures the closure disc in a traditional MI cable termination pot?",
    options: { A: "A crimping and compression tool" },
    explanation:
      "Manufacturer instructions identify a dedicated crimping and compression tool for seating the disc, compressing the sealing compound and crimping the pot. A general conductor crimper or improvised fitting tool is not equivalent.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29768",
    questionNumber: 27,
    promptSuffix: "How should MI be routed when supplying a motor?",
    correctedPromptSuffix:
      "Where an MI cable termination is exposed to permitted motor vibration, which listed routing detail can provide strain relief when specified by the cable manufacturer?",
    options: {
      A: "Form the MI cable into a suitable vibration or expansion loop before the motor terminal enclosure",
    },
    explanation:
      "A correctly formed loop can accommodate limited movement and reduce stress at the rigid MI termination. The complete arrangement must follow the MI cable manufacturer's expansion-and-vibration guidance; a flexible connection may be required where movement exceeds the cable system's capability.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29769",
    questionNumber: 1,
    promptSuffix: "Why should cut edges of cable tray be 'made good'?",
    correctedPromptSuffix:
      "Why must cut edges and burrs on cable tray be made smooth and suitably protected?",
    options: {
      A: "Only to improve appearance",
      D: "To prevent damage to cable insulation and restore any required corrosion protection",
    },
    explanation:
      "Sharp cut edges can abrade cable insulation during installation or service. Deburring and restoring the protective finish controls both insulation damage and corrosion; appearance is not the safety reason.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29769",
    questionNumber: 4,
    promptSuffix:
      "Why is cable tray NOT to be used as an 'earthing conductor'?",
    correctedPromptSuffix:
      "When may metallic cable tray or another supporting structure be used as a protective conductor under BS 7671?",
    options: {
      A: "Never, because steel tray cannot conduct electricity",
      B: "Whenever sections touch, without checking joints or cross-sectional area",
      C: "Only when it is electrically insulated from all exposed-conductive-parts",
      D: "When electrical continuity, conductance, mechanical and chemical durability, and protection against unauthorised removal satisfy the protective-conductor requirements",
    },
    answer: "D",
    explanation:
      "BS 7671 permits certain metallic enclosures and supporting structures to serve as protective conductors when all applicable conditions are met. Tray is often not relied upon because joint continuity and later alteration can be uncertain, but the original categorical prohibition was false.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29769",
    questionNumber: 7,
    promptSuffix: "What type of trunking is designed primarily for luminaries?",
    correctedPromptSuffix:
      "What type of trunking is designed primarily to distribute wiring to and support luminaires?",
    explanation:
      "Lighting trunking is purpose-designed for lighting circuits and luminaire attachment. 'Luminaries' was a typo; a luminaire is the complete lighting unit.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29769",
    questionNumber: 9,
    promptSuffix: "What is the function of 'compartmented' trunking?",
    correctedPromptSuffix:
      "What is the principal electrical purpose of separate compartments in trunking?",
    options: {
      A: "To segregate Band I and Band II circuits, or other services requiring separation",
      B: "To place Band II and Band III circuits together without insulation coordination",
      C: "To separate every lighting circuit from every power circuit regardless of voltage and insulation",
      D: "To separate single-phase and three-phase circuits solely because their phase count differs",
    },
    answer: "A",
    explanation:
      "Compartments provide the segregation required between circuits or services of different voltage bands or insulation systems. Single- and three-phase circuits do not require separation merely because their phase count differs.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29769",
    questionNumber: 12,
    promptSuffix: "Where would a 'fire barrier' be fitted?",
    correctedPromptSuffix:
      "Where is fire stopping required around trunking that penetrates a fire-separating element?",
    options: {
      C: "At the penetration through a fire-separating floor or wall",
    },
    explanation:
      "The wiring-system penetration must be sealed where necessary to preserve the fire resistance of a fire-separating floor or wall. Fire stopping is not required at arbitrary intervals or automatically at every non-fire-rated partition.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29769",
    questionNumber: 15,
    promptSuffix:
      "Identify the Section in the BS7671 2018 that details the requirements for 'Mobile and transportable units'",
    correctedPromptSuffix:
      "Which section of current BS 7671:2018+A4:2026 contains the particular requirements for mobile or transportable units?",
    explanation:
      "Section 717 contains the particular requirements for mobile or transportable units. Section 701 covers baths or showers, Section 721 caravans and motor caravans, and Section 753 embedded heating systems.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29769",
    questionNumber: 16,
    promptSuffix:
      "Identify the PART in the BS7671 2018 that details 'Definitions'",
    correctedPromptSuffix:
      "Which part of current BS 7671:2018+A4:2026 contains terms and definitions?",
    explanation:
      "Part 2 contains the terms and definitions used throughout BS 7671. Parts 4, 5, 6 and 7 address protection, equipment, verification and special installations respectively.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29769",
    questionNumber: 17,
    promptSuffix:
      "Identify the Chapter in the BS7671 2018 that details 'Purposes, Supplies and Structure'",
    correctedPromptSuffix:
      "Which chapter of current BS 7671:2018+A4:2026 is titled 'Purposes, supplies and structure'?",
    explanation:
      "Chapter 31 is within Part 3, Assessment of general characteristics, and addresses purposes, supplies and structure. The other listed chapters concern thermal protection, other equipment or initial verification.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29769",
    questionNumber: 18,
    promptSuffix:
      "Identify the Appendix in the BS7671 2018 that details 'energy efficiency'",
    correctedPromptSuffix:
      "Which appendix formerly addressed energy efficiency but is marked 'Deleted by BS 7671:2018+A4:2026' in the current contents?",
    explanation:
      "Appendix 17 contained informative energy-efficiency material in earlier 18th-edition versions, but Amendment 4:2026 deletes it. Asking where current BS 7671 now 'details energy efficiency' without that qualification would be obsolete.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29769",
    questionNumber: 19,
    promptSuffix: "Chapter 64 in the BS7671 2018 specifically details",
    correctedPromptSuffix:
      "What does Chapter 64 of current BS 7671:2018+A4:2026 cover?",
    explanation:
      "Chapter 64 covers initial verification. Chapter 65 covers periodic inspection and testing, while instrument requirements and model documentation are addressed elsewhere.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29769",
    questionNumber: 20,
    promptSuffix:
      "Identify the Part in the BS7671 2018 that details 'Protection for Safety'",
    correctedPromptSuffix:
      "Which part of current BS 7671:2018+A4:2026 is titled 'Protection for safety'?",
    explanation:
      "Part 4 is Protection for safety. It includes protection against electric shock, thermal effects, overcurrent, and voltage and electromagnetic disturbances.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29769",
    questionNumber: 21,
    promptSuffix:
      "Identify the Section in the BS7671 2018 that details 'devices for protection against overvoltage'",
    correctedPromptSuffix:
      "Which section of current BS 7671:2018+A4:2026 covers selection and erection of devices for protection against overvoltage?",
    explanation:
      "Section 534 covers surge protective devices and other devices for protection against overvoltage. Section 526 concerns connections, Section 535 coordination of protective devices and Section 542 earthing arrangements.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29769",
    questionNumber: 22,
    promptSuffix:
      "Identify the Part in the BS7671 2018 that details 'Selection and Erection of Equipment'",
    correctedPromptSuffix:
      "Which part of current BS 7671:2018+A4:2026 is titled 'Selection and erection of equipment'?",
    explanation:
      "Part 5 covers selection and erection of equipment. Part 4 states protection requirements, while Part 6 covers inspection and testing.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29769",
    questionNumber: 23,
    promptSuffix:
      "Identify the Part in the BS7671 2018 that details 'Inspection and Testing'",
    correctedPromptSuffix:
      "Which part of current BS 7671:2018+A4:2026 is titled 'Inspection and testing'?",
    explanation:
      "Part 6 covers inspection and testing, including Chapter 64 initial verification and Chapter 65 periodic inspection and testing.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29769",
    questionNumber: 24,
    promptSuffix:
      "Identify the Section in the BS7671 2018 that details 'devices for protection against undervoltage'",
    correctedPromptSuffix:
      "Which section of current BS 7671 contains the requirements for protection against undervoltage?",
    options: {
      A: "Section 443",
      B: "Section 445",
      C: "Section 535",
      D: "Section 552",
    },
    answer: "B",
    explanation:
      "Section 445 contains the requirements for protection against undervoltage. Section 535 concerns coordination of protective devices, so the original answer key reflected an obsolete numbering structure and was incorrect for BS 7671:2018.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29769",
    questionNumber: 25,
    promptSuffix:
      "Identify the Appendix in the BS7671 2018 that details 'model forms for certification and reporting'",
    correctedPromptSuffix:
      "Which appendix of current BS 7671:2018+A4:2026 contains model forms for certification and reporting?",
    explanation:
      "Appendix 6 contains the model forms for certification and reporting. Amendment 4 also provides updated model forms through the IET's official downloads.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29769",
    questionNumber: 26,
    promptSuffix:
      "Identify the Section in the BS7671 2018 that details 'devices for protection against the risk of fire'",
    correctedPromptSuffix:
      "Which section of current BS 7671:2018+A4:2026 covers devices for protection against the risk of fire?",
    explanation:
      "Section 532 covers devices for protection against the risk of fire. Section 534 covers overvoltage protection and nearby sections address coordination, isolation, switching and monitoring.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29769",
    questionNumber: 27,
    promptSuffix:
      "Identify the Section in the BS7671 2018 that details the requirements for 'Construction and demolition sites'",
    correctedPromptSuffix:
      "Which section of current BS 7671:2018+A4:2026 contains the particular requirements for construction and demolition site installations?",
    explanation:
      "Section 704 covers construction and demolition site installations. Section 701 covers baths and showers, Section 709 marinas and Section 721 caravans and motor caravans.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29769",
    questionNumber: 28,
    promptSuffix:
      "Identify the Chapter in the BS7671 2018 that details 'Earthing arrangements and protective conductors'",
    correctedPromptSuffix:
      "Which chapter of current BS 7671:2018+A4:2026 is titled 'Earthing arrangements and protective conductors'?",
    explanation:
      "Chapter 54 covers earthing arrangements and protective conductors. Chapter 52 covers wiring systems and Chapters 31, 42 and 64 address different subjects.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29769",
    questionNumber: 29,
    promptSuffix:
      "Identify the Section in the BS7671 2018 that details the requirements for 'Heating cables and embedded heating systems'",
    correctedPromptSuffix:
      "Which section of current BS 7671:2018+A4:2026 contains the particular requirements for heating cables and embedded heating systems?",
    explanation:
      "Section 753 covers heating cables and embedded heating systems. The other listed sections cover baths and showers, medical locations, and caravans and motor caravans.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29769",
    questionNumber: 30,
    promptSuffix: "How bright should emergency lighting be?",
    correctedPromptSuffix:
      "What is the primary illumination objective of emergency escape lighting?",
    options: {
      D: "Provide the specified illumination needed to identify and use escape routes safely",
    },
    explanation:
      "Emergency escape lighting is designed and measured to the applicable standard so occupants can identify routes, changes of direction, hazards and safety equipment. 'Bright enough' alone is not a quantitative design criterion, and it need not reproduce normal-lighting levels.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29770",
    questionNumber: 1,
    promptSuffix: "What regulations are specific to emergency lighting?",
    correctedPromptSuffix:
      "Which British Standard is the current UK code of practice for emergency lighting of premises?",
    options: { A: "BS 4343", B: "BS 5266-1", C: "BS 5839-1", D: "BS 7671" },
    explanation:
      "BS 5266-1:2025 is the current UK code of practice for emergency lighting of premises. It gives recommendations for the design, installation, wiring and use of emergency lighting; it is a standard, not itself a statutory regulation.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29770",
    questionNumber: 3,
    promptSuffix: "What does NM2 signify?",
    correctedPromptSuffix:
      "In the emergency-luminaire designation NM/2, what does the notation mean?",
    options: { D: "Non-maintained, with a two-hour rated duration" },
    explanation:
      "NM identifies a non-maintained luminaire and /2 identifies a two-hour rated emergency duration. The emergency lamp operates when the normal lighting supply fails.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29770",
    questionNumber: 9,
    promptSuffix:
      "Fire alarm systems can cover small or very large buildings. How are these buildings divided up?",
    correctedPromptSuffix:
      "For fire-detection indication and fault limitation, what are protected buildings divided into?",
    explanation:
      "Fire alarm systems divide a protected building into fire detection zones so the control equipment and zone plan can help responders locate the affected area. A zone is a defined part of the premises, not merely an informal area or section.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29770",
    questionNumber: 10,
    promptSuffix:
      "The fire brigade recommend fitting this device into each home. What is it?",
    correctedPromptSuffix:
      "Which domestic warning device is shown and recommended by fire and rescue services?",
    options: { A: "Carbon monoxide alarm", D: "Smoke alarm" },
    explanation:
      "The pictured self-contained domestic device is a smoke alarm. It detects smoke and sounds its own audible warning; a system smoke detector is a component that normally reports to separate control equipment.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29770",
    questionNumber: 11,
    promptSuffix:
      "A Fire Alarm Sounder is shown here. How loud (dB) should this be (minimum) in all parts of the protected building?",
    correctedPromptSuffix:
      "Under the general BS 5839-1 recommendation, what minimum fire-alarm sound pressure level applies in accessible areas unless an exception or a higher background-noise requirement governs?",
    options: { A: "55 dB(A)", B: "65 dB(A)", C: "75 dB(A)", D: "85 dB(A)" },
    explanation:
      "The general recommendation is at least 65 dB(A), or 5 dB above persistent background noise where that is greater. BS 5839-1 also contains exceptions and different criteria, such as sleeping accommodation, so 65 dB(A) is not an unconditional value for every point in every building.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29770",
    questionNumber: 12,
    promptSuffix:
      "Which specific set of regulations set out the 'recommendations for the installation and servicing of fire alarms and is the accepted code of practice for these systems'?",
    correctedPromptSuffix:
      "Which British Standard is the current code of practice for designing, installing, commissioning and maintaining fire detection and fire alarm systems in non-domestic premises?",
    options: { A: "BS 4343", B: "BS 5266-1", C: "BS 5839-1", D: "BS 7671" },
    explanation:
      "BS 5839-1:2025 is the current code of practice for fire detection and fire alarm systems in non-domestic premises. It is a British Standard containing recommendations, not a set of statutory regulations.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29770",
    questionNumber: 13,
    promptSuffix:
      "One type of 'automatic' sensor can have 'fixed' or 'fluctuating' detection settings . Which sensor?",
    correctedPromptSuffix:
      "Which type of automatic fire detector may operate at a fixed temperature or in response to an abnormal rate of temperature rise?",
    explanation:
      "Heat detectors can use a fixed-temperature element, a rate-of-rise element, or both. 'Fluctuating' is not the recognised detector classification; rate-of-rise describes the second operating principle.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29770",
    questionNumber: 14,
    promptSuffix: "What type of control is shown here?",
    correctedPromptSuffix:
      "What type of fire-alarm initiating circuit is shown in the diagram?",
    explanation:
      "The diagram shows a normally closed fire-alarm loop: the series path is complete in the normal state and opening an initiating contact changes the circuit state. This is closed-loop supervision, not feedback control of a process variable.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29770",
    questionNumber: 15,
    promptSuffix:
      "A fire alarm panel installation is shown here. SWA supplies the 'mains' but what is the cable system used to connect all the ancillary parts to the panel?",
    correctedPromptSuffix:
      "Which listed fire-resistant cable type is visible connecting ancillary fire-alarm equipment to the pictured panel?",
    options: { A: "FP200-type fire-resistant cable" },
    explanation:
      "The pictured ancillary circuits use FP200-type fire-resistant cable. Fire-alarm cable selection must meet the applicable BS 5839-1 performance category and project design; the image does not make one proprietary product the only permitted solution.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29770",
    questionNumber: 17,
    promptSuffix:
      "How many socket outlets can be connected to an unfused 2.5sq mm 'spur' on an A2 radial circuit?",
    correctedPromptSuffix:
      "Under the IET On-Site Guide standard A2 radial-circuit arrangement, what may an unfused 2.5 mm² spur supply?",
    options: { A: "One single or one twin socket-outlet" },
    explanation:
      "The standard A2 arrangement allows the stated unfused spur to supply one single or one twin socket-outlet. This is a standard-circuit arrangement in IET guidance; the complete circuit still has to satisfy cable rating, voltage drop and protective-device requirements.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29770",
    questionNumber: 18,
    promptSuffix:
      "What is the maximum disconnection time for 230v AC portable equipment (of less than 32A) using a ring or radial system of socket outlets (assuming a TN system of Earthing)?",
    correctedPromptSuffix:
      "For a 230 V TN final circuit rated not more than 63 A that includes one or more socket-outlets, what maximum disconnection time does BS 7671 Table 41.1 specify?",
    options: { A: "0.2 s", B: "0.4 s", C: "10 s", D: "5 s" },
    explanation:
      "BS 7671 Table 41.1 specifies 0.4 s for the stated TN final circuit. The current scope is expressed in terms of the final-circuit rating and presence of socket-outlets, not the old 'portable equipment below 32 A' wording.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29770",
    questionNumber: 19,
    promptSuffix:
      "If a 'spur' is required to connect socket A to an A2 radial using a junction box as shown here. What is the minimum size of conductor allowed?",
    correctedPromptSuffix:
      "Under the IET On-Site Guide standard A2 radial arrangement shown, what minimum conductor cross-sectional area is used for the spur to socket A?",
    explanation:
      "The standard A2 radial arrangement uses a 4 mm² circuit conductor and permits the shown unfused spur in 2.5 mm² cable to one single or one twin socket-outlet. The original explanation about a flameproof enclosure was unrelated to this diagram.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29770",
    questionNumber: 20,
    promptSuffix: "What is the size of MCB required for an A3 radial circuit?",
    correctedPromptSuffix:
      "In the IET On-Site Guide standard-circuit arrangements, what circuit-breaker rating is used for an A3 radial circuit?",
    explanation:
      "The A3 standard radial arrangement uses a 20 A protective device with 2.5 mm² conductors. It is guidance for a standard arrangement, not a substitute for verifying the actual installation method, current-carrying capacity, voltage drop and fault protection.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29770",
    questionNumber: 21,
    promptSuffix:
      "What is the minimum conductor size for an A3 radial circuit?",
    correctedPromptSuffix:
      "In the IET On-Site Guide standard-circuit arrangements, what conductor size is used for an A3 radial circuit?",
    explanation:
      "The A3 standard radial arrangement uses 2.5 mm² conductors with a 20 A protective device. An actual design must still account for the cable type, installation method, correction factors, voltage drop and fault protection.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29770",
    questionNumber: 22,
    promptSuffix:
      "State the maximum disconnection time for a 40A socket circuit rated at 40A, to be installed in a commercial installation on a TN system.",
    correctedPromptSuffix:
      "What maximum disconnection time applies to a 230 V TN final circuit rated 40 A that supplies one or more socket-outlets?",
    explanation:
      "A 40 A final circuit with a socket-outlet is within the not-more-than-63 A scope, so Table 41.1 gives 0.4 s. The rule is not limited to hand-held or portable appliances rated below 32 A.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29770",
    questionNumber: 23,
    promptSuffix: "What is the maximum floor area for an A1 ring circuit?",
    correctedPromptSuffix:
      "In the IET On-Site Guide standard-circuit arrangements, what maximum floor area is associated with an A1 ring final circuit?",
    explanation:
      "The A1 standard ring-final arrangement is associated with a floor area not exceeding 100 m². This is an IET guidance arrangement, not a universal BS 7671 regulatory limit; the actual load, cable route, voltage drop and protection must also be designed.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29770",
    questionNumber: 25,
    promptSuffix:
      "What is the minimum conductor size for an A2 radial circuit?",
    correctedPromptSuffix:
      "In the IET On-Site Guide standard-circuit arrangements, what conductor size is used for an A2 radial circuit?",
    explanation:
      "The A2 standard radial arrangement uses 4 mm² conductors with a 30 A or 32 A protective device. This is a standard-circuit design in guidance; conductor adequacy for a real circuit depends on all applicable design conditions.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29770",
    questionNumber: 26,
    promptSuffix:
      "What type of switching arrangement is suitable for a lighting point mid-way between floors in a multistorey block of flats?",
    correctedPromptSuffix:
      "Which switching arrangement permits one lighting point to be controlled from three or more positions in a multistorey stairway?",
    explanation:
      "Control from three or more positions uses two two-way switches at the ends and one or more intermediate switches between them. A location midway between floors does not by itself establish the number of control points, so the corrected prompt states that requirement.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29770",
    questionNumber: 29,
    promptSuffix: "How are 'switched lives' identified in lighting circuits?",
    correctedPromptSuffix:
      "How is a core used as a switched line conductor identified at its terminations in a harmonised-colour lighting circuit?",
    explanation:
      "A core used as a switched line is identified with brown sleeving or other brown marking at its terminations. 'Line conductor' is the current BS 7671 term; green-and-yellow remains reserved for protective conductors.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29771",
    questionNumber: 1,
    promptSuffix:
      "What supply system uses the neutral conductor also as an earth, (PEN)?",
    correctedPromptSuffix:
      "Which earthing arrangement uses a combined protective and neutral (PEN) conductor in part of the distributor's network?",
    options: { B: "TN-C-S", C: "TN-S" },
    explanation:
      "A TN-C-S arrangement uses a combined protective and neutral conductor in part of the supply network, then separates PE and N for the consumer's installation. A consumer must not recombine those functions downstream of the separation point.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29771",
    questionNumber: 2,
    promptSuffix: "Part 7 of the IEE BS7671 refers to:",
    correctedPromptSuffix: "What does Part 7 of BS 7671 cover?",
    answer: "D",
    explanation:
      "Part 7 contains additional or modified requirements for special installations or locations. Inspection and testing is Part 6, selection and erection is Part 5, and assessment of general characteristics is Part 3.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29771",
    questionNumber: 3,
    promptSuffix:
      "With class I and II cabling installed in Trunking, how should they be run:",
    correctedPromptSuffix:
      "Where Band I and Band II circuits share trunking and the conductors are not all insulated for the highest voltage present, how should they be arranged?",
    options: {
      A: "In opposite directions to each other",
      B: "Separated by suitable compartments or barriers",
      C: "Together if neither circuit exceeds 10 A",
      D: "Twisted together",
    },
    explanation:
      "Band I and Band II describe circuit voltage bands, not equipment Classes I and II. Where insulation suitable for the highest voltage is not provided, the circuits require effective separation, such as suitable trunking compartments or barriers.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29771",
    questionNumber: 11,
    promptSuffix:
      "An exposed conductive part has become live due to a short from phase, prevention of electric shock by earthed equipotential bonding and the automatic disconnection of supply is by:",
    correctedPromptSuffix:
      "Which protective measure uses protective earthing and equipotential bonding together with automatic disconnection of supply when an exposed-conductive-part becomes live under fault conditions?",
    options: {
      A: "An earth cable alone",
      B: "Automatic disconnection of supply (ADS)",
      C: "Avoiding contact with the equipment",
      D: "Trunking alone",
    },
    explanation:
      "The current term is automatic disconnection of supply (ADS). Protective earthing and bonding establish the fault-current path and limit touch-voltage differences, while the protective device disconnects within the required time; EEBADS is obsolete terminology.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29771",
    questionNumber: 14,
    promptSuffix:
      "On a layout plan, you would expect to find the following information:",
    options: { C: "What the circuit protective devices are rated at" },
    explanation:
      "A layout plan shows the physical positions of items such as switches and socket-outlets. Circuit connections and protective-device ratings belong on circuit diagrams, schedules or specifications; the corrected option also fixes the original spelling error.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29771",
    questionNumber: 15,
    promptSuffix:
      "What type of thermostat would you expect to find in an immersion heater:",
    correctedPromptSuffix:
      "Which traditional rod-and-tube thermostat construction was commonly used in immersion heaters?",
    explanation:
      "A traditional immersion-heater thermostat uses the differential expansion of a surrounding metal tube and a low-expansion Invar rod to operate its contacts. Modern rod thermostats may use other sensing and safety-limiter technologies, so the corrected question identifies the traditional construction.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29771",
    questionNumber: 16,
    promptSuffix: "At what depth should an SWA cable be buried:",
    correctedPromptSuffix:
      "A project specification requires 600 mm of cover over a directly buried SWA cable. Which listed measurement satisfies that requirement?",
    explanation:
      "Cover is measured from finished ground level to the top of the cable, so option D gives 600 mm of cover. BS 7671 does not impose a universal 600 mm depth for every ordinary buried cable; it requires sufficient depth for foreseeable ground disturbance, while some special locations have specific minima.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29771",
    questionNumber: 17,
    promptSuffix:
      "What is the maximum permitted voltage drop of a cable supplied from 400v three phase:",
    correctedPromptSuffix:
      "For a 400 V three-phase circuit supplying equipment other than lighting, what voltage drop corresponds to the 5% recommended maximum in BS 7671 Appendix 4?",
    options: { A: "12 V", B: "16 V", C: "20 V", D: "40 V" },
    answer: "C",
    explanation:
      "The recommended maximum for a load other than lighting is 5% of nominal voltage: 0.05 × 400 V = 20 V. The former blanket 4% value would give 16 V but is not the current Appendix 4 recommendation.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29771",
    questionNumber: 18,
    promptSuffix: "What percentage of trunking can be filled with cables:",
    correctedPromptSuffix:
      "Where the cable type or size is not identified in the IET On-Site Guide trunking-factor tables, what maximum space factor is recommended?",
    explanation:
      "For cable types or sizes outside the tabulated factors, IET guidance recommends that cables occupy no more than 45% of the trunking's internal cross-sectional area. This is drawing-in guidance rather than a universal BS 7671 percentage for every trunking design.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29771",
    questionNumber: 21,
    promptSuffix:
      "Where would it be suitable to use a fixed-temperature type heat detector:",
    correctedPromptSuffix:
      "Which listed room is especially prone to cooking fumes and steam, making a suitably selected fixed-temperature heat detector preferable to a smoke detector for avoiding false alarms?",
    explanation:
      "A kitchen commonly produces cooking aerosols and steam that can cause unwanted smoke-alarm activations, so a suitably selected heat detector is used there. A garage may also justify heat detection after risk assessment, which made the unqualified original question ambiguous.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29771",
    questionNumber: 23,
    promptSuffix:
      "For an explosive atmosphere to exist three things are required:",
    correctedPromptSuffix:
      "Which three elements must come together for ignition of an explosive atmosphere?",
    options: {
      A: "Air, inert dust and a low temperature",
      B: "A flammable substance mixed with air at an explosive concentration, plus an effective ignition source",
      C: "Air, any heat source and a temperature above 35 °C",
      D: "Water vapour, oxygen and carbon dioxide",
    },
    explanation:
      "Ignition requires a flammable gas, vapour, mist or combustible dust dispersed in air within an explosive range, together with an effective ignition source. The original wording 'air, an ignition source and a hazard' did not identify the necessary fuel or explosive concentration.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29771",
    questionNumber: 25,
    promptSuffix:
      "Isolators used to isolate supplies are designed to operate under:",
    correctedPromptSuffix:
      "A disconnector (isolator) that has not been assigned load-breaking capability should normally be operated under which condition?",
    explanation:
      "A plain disconnector provides isolation and is operated off-load unless its product rating also assigns switching or load-breaking duty. A switch-disconnector is specifically rated to make and break load current, so the unqualified original statement was too broad.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29771",
    questionNumber: 26,
    promptSuffix:
      "Cables being routed through wooden joists must have a distance vertically from top or bottom of:",
    correctedPromptSuffix:
      "Unless an alternative recognised protective measure is used, what minimum distance should a cable passing through a ceiling joist have from the top or bottom surface?",
    explanation:
      "A cable passing through a joist should be at least 50 mm from the top or bottom surface so ordinary nails and screws are less likely to penetrate it. A suitable earthed metallic covering, enclosure or other recognised mechanical protection can provide an alternative.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29771",
    questionNumber: 28,
    promptSuffix: "The minimum bending radii of MI cable is:",
    correctedPromptSuffix:
      "Which notation gives the normal minimum internal bend radius for MI cable and, in parentheses, the once-only minimum for a bend that will not be reworked?",
    options: { A: "3D (2D)", B: "4D (3D)", C: "6D (3D)", D: "8D (6D)" },
    explanation:
      "The normal minimum internal bend radius is six times the cable diameter, 6D. A sharper once-only bend may be made down to 3D where it will not be straightened and re-bent, subject to the cable manufacturer's instructions.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29772",
    questionNumber: 6,
    promptSuffix:
      "In which of the following must un-sheathed single-core insulated cable be installed?",
    correctedPromptSuffix:
      "Which listed wiring system provides a complete enclosure suitable for unsheathed single-core insulated cables?",
    explanation:
      "Metallic trunking is an enclosed wiring system suitable for insulated singles when it is correctly installed and earthed. Basket, tray and capping are supports or covers rather than complete enclosures for these cables.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29772",
    questionNumber: 13,
    promptSuffix:
      "How many 6 mm² PVC single-core cables can be installed in a 100 x 75 mm trunking?",
    correctedPromptSuffix:
      "Using the IET On-Site Guide Appendix E factors, what is the maximum number of 6 mm² stranded thermoplastic-insulated single-core cables that can be installed in 100 mm × 75 mm trunking?",
    explanation:
      "The 100 mm × 75 mm trunking factor divided by the cable factor for a 6 mm² stranded thermoplastic single gives 150 whole cables without exceeding the tabulated capacity.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29772",
    questionNumber: 14,
    promptSuffix:
      "Which of the following cables is best suited for temporary supplies in harsh locations, such as construction sites?",
    options: { A: "Arctic-grade flexible cable" },
    explanation:
      "Arctic-grade flexible cable is designed to remain flexible at low temperatures and is commonly selected for temporary site supplies where the full system, voltage rating and mechanical protection are suitable.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29772",
    questionNumber: 16,
    promptSuffix: "What is used to ensure an accessory is level?",
    correctedPromptSuffix:
      "Which simple hand tool is normally placed directly against an accessory to check that it is level?",
    explanation:
      "A spirit level gives an immediate local horizontal or vertical reference when held against the accessory. A laser level can establish wider layout lines, but it is not the simple direct-contact tool asked for.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29772",
    questionNumber: 25,
    promptSuffix:
      "What is the maximum earth fault loop impedance for a 32 A Type C circuit breaker as given in the IET On-site Guide?",
    correctedPromptSuffix:
      "What maximum measured earth fault loop impedance is listed for a 32 A Type C BS EN 60898 circuit-breaker in the IET On-Site Guide aligned with BS 7671:2018+A4:2026?",
    explanation:
      "The On-Site Guide quick-reference maximum measured Zs for a 32 A Type C BS EN 60898 circuit-breaker is 0.55 Ω at ambient temperature.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29772",
    questionNumber: 29,
    promptSuffix:
      "What condition will the circuit be for a self contained, non-maintained emergency light, in normal situations?",
    correctedPromptSuffix:
      "What supply arrangement does a self-contained, non-maintained emergency luminaire require in normal service?",
    options: {
      C: "A permanent unswitched supply to its charger and monitoring circuit",
    },
    explanation:
      "The emergency lamp is normally off, but the self-contained unit requires a permanent unswitched supply so its battery charger and monitoring circuit remain energised and it can detect mains failure.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29772",
    questionNumber: 30,
    promptSuffix:
      "What provides undervoltage protection on a rotating machine in a factory?",
    correctedPromptSuffix:
      "Which arrangement provides no-volt/undervoltage protection and prevents a factory rotating machine from restarting unexpectedly when the supply returns?",
    options: {
      B: "A contactor with a no-volt-release start/stop control circuit",
    },
    explanation:
      "The contactor drops out when its coil voltage fails, and the momentary-start/holding-contact control requires a deliberate restart after supply restoration. A contactor driven by a maintained command alone could re-energise automatically.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29773",
    questionNumber: 2,
    promptSuffix: "This test instrument measures in mS. What is it?",
    correctedPromptSuffix:
      "This instrument displays RCD operating time in ms. What type of tester is it?",
    explanation:
      "An RCD tester applies a controlled residual current and records the device's operating time in milliseconds, symbol ms. The original capital-S notation, mS, denotes millisiemens rather than milliseconds.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29773",
    questionNumber: 3,
    promptSuffix:
      "This test instrument measures in Ohms and is a 'live' test instrument. What is it?",
    correctedPromptSuffix:
      "Which test function measures earth fault loop impedance in ohms on an energised installation?",
    explanation:
      "An earth fault loop impedance function measures the impedance of the line-earth fault path and reports it in ohms. Because direct loop testing is live work, it should only be used where necessary and with suitable precautions; Zs can often be determined from dead-test results and Ze.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29773",
    questionNumber: 5,
    promptSuffix:
      "This test instrument also measures in kA and is a 'live' test instrument. What is it?",
    correctedPromptSuffix:
      "Which test function reports prospective short-circuit current in kA on an energised installation?",
    explanation:
      "The prospective short-circuit current function calculates or measures the current that would flow for a short circuit and reports high values in kiloamperes. The reused image currently shows the same multifunction loop/PFC instrument in an ohms mode, so the corrected prompt identifies the requested function rather than the displayed screen value.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29773",
    questionNumber: 7,
    promptSuffix: "What is this Inspection instrument?",
    correctedPromptSuffix: "What type of inspection instrument is shown?",
    options: { B: "Thermal imaging camera" },
    explanation:
      "The instrument is a thermal imaging camera, which forms an image from detected infrared radiation and can reveal abnormal temperature patterns. FLIR is a manufacturer name, not the generic instrument type.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29773",
    questionNumber: 8,
    promptSuffix: "What is this multi-function test instrument?",
    options: { D: "Portable appliance tester (PAT tester)" },
    explanation:
      "The pictured bench-style instrument is a portable appliance tester that combines applicable protective-conductor, insulation, leakage and functional tests. PAT describes portable-appliance testing, so naming the instrument explicitly avoids treating the acronym alone as an instrument type.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29773",
    questionNumber: 10,
    promptSuffix:
      "Which safety standards detail test probes requirements and isolation procedures?",
    correctedPromptSuffix:
      "Which HSE guidance note specifically covers electrical test probes, leads and voltage detectors for use on low-voltage systems?",
    explanation:
      "HSE Guidance Note GS38 covers the construction and safe use of low-voltage test probes, leads and voltage detectors. It is guidance rather than a British Standard; the wider safe-isolation procedure is addressed in HSE publication HSG85.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29773",
    questionNumber: 11,
    promptSuffix:
      "Which instrument is used to verify the continuity of the earth conductor, whilst the circuit under test is 'live'",
    correctedPromptSuffix:
      "Which instrument can directly assess the line-earth fault loop impedance of an energised circuit?",
    explanation:
      "An earth fault loop impedance tester assesses the complete energised line-earth loop in ohms; it does not perform a simple continuity test of the protective conductor. Protective-conductor continuity is normally verified by dead testing, and unnecessary live loop tests should be avoided.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29773",
    questionNumber: 14,
    promptSuffix:
      "Which instrument is used to determine the phase sequence for a 3-phase motor",
    correctedPromptSuffix:
      "Which instrument is used to determine the live phase rotation before commissioning a three-phase motor?",
    explanation:
      "A phase rotation meter indicates the order of the energised phase voltages and therefore the likely direction of a connected motor. BS 7671's check that phase sequence is maintained through the wiring is a separate dead verification and is often confused with this live phase-rotation test.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29773",
    questionNumber: 15,
    promptSuffix: "Identify this instrument:",
    correctedPromptSuffix:
      "Identify the pictured instrument used in a prove-test-prove procedure for safe isolation:",
    options: { A: "Suitable two-pole voltage detector" },
    explanation:
      "The image shows a two-pole voltage detector suitable for proving conductors live or dead when used within a proper prove-test-prove procedure. HSG85 says the detector must be checked before and after use; a proving unit is normally used for those checks.",
  },
  {
    examId: "inspection-design-2396",
    variantId: "quiz-29773",
    questionNumber: 18,
    promptSuffix: "Identify this tester:",
    correctedPromptSuffix: "Identify the pictured plug-in tester:",
    options: { D: "Socket wiring indicator (socket tester)" },
    explanation:
      "The pictured device is a plug-in socket wiring indicator. Its lamps can indicate several common connection faults, but a basic socket tester cannot prove the quality of the protective earth, cannot detect every multiple fault, and cannot detect an earth-neutral reversal.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix: "When is live working permissible?",
    correctedPromptSuffix:
      "Under Regulation 14 of the Electricity at Work Regulations 1989, when may work on or near a live conductor that may give rise to danger proceed?",
    options: {
      A: "Only when it is unreasonable in all the circumstances for the conductor to be dead, it is reasonable to work live, and suitable precautions are taken to prevent injury",
    },
    explanation:
      "All three Regulation 14 conditions must be satisfied. Live work must be justified because making dead is unreasonable, carrying it out live must itself be reasonable, and suitable precautions, including suitable protective equipment where necessary, must prevent injury.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "With regard to the effect of electrical current on the human body, one of the following is correct:",
    correctedPromptSuffix:
      "Which listed device is specifically intended to provide additional protection against electric shock by rapidly disconnecting for some residual-current faults?",
    options: {
      B: "A 30 mA Residual Current Device (RCD), although it does not make contact with live parts safe or guarantee survival",
    },
    explanation:
      "A 30 mA RCD can limit the energy in some electric shocks and can save life, but it detects only residual-current imbalance and is additional protection. It cannot replace isolation, earthing, basic protection or safe working practice, and it does not guarantee that a shock will not be fatal.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "You have to enter a manhole in which you believe there could be toxic gases. You have not been provided with any Respiratory Protective Equipment (RPE). What should you do?",
    correctedPromptSuffix:
      "You are asked to enter a manhole where a toxic or oxygen-deficient atmosphere may be present, but no assessed safe system or suitable respiratory protection has been provided. What should you do?",
    options: {
      D: "Do not enter; report it so entry can be avoided or a competent risk-assessed system, atmosphere controls, training and rescue arrangements can be put in place",
    },
    explanation:
      "Confined-space entry should be avoided where possible. If it is essential, the employer must assess the atmosphere and other risks, implement a safe system, provide suitable equipment and training, and establish adequate rescue arrangements before entry. Asking only for generic RPE would be incomplete.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix: "Any damaged equipment must be:",
    correctedPromptSuffix:
      "What must you do when work equipment is found damaged?",
    options: {
      C: "Take it out of use and report the defect to your supervisor or other responsible person",
    },
    explanation:
      "Damaged equipment must not remain available for use. Remove it from service and report or label it through the site procedure so a competent person can assess, repair or replace it before it is used again.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "In the context of a risk assessment, what do you understand by the term risk?",
    correctedPromptSuffix:
      "In a health and safety risk assessment, what does the term risk describe?",
    options: {
      D: "The chance that a hazard will cause harm, considered together with how serious that harm could be",
    },
    explanation:
      "A hazard is something with the potential to cause harm. Risk concerns the chance that harm will occur and the possible severity of its consequences; it is not simply the unsafe thing or activity itself.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "When storing liquids (such as oils, fuels or chemicals) on-site, what must you do?",
    options: {
      B: "Store them in suitable closed and labelled containers, securely and away from traffic, with containment such as a bund or drip tray where leakage could pollute",
    },
    explanation:
      "Site liquids must be stored in suitable compatible containers, identified and secured against damage or unauthorised access. Where a leak could pollute land or drains, appropriate secondary containment is also needed; simply putting a container out of traffic is not enough.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix: "The Electricity at Work Regulations require that:",
    options: {
      D: "People must have adequate knowledge or experience, or be under an appropriate degree of supervision, to prevent danger and injury",
    },
    explanation:
      "Regulation 16 permits work where technical knowledge or experience is necessary only when the person has that competence or is under an appropriate degree of supervision. It does not require every worker to already possess the same unsupervised competence.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "Why should the end of an optical fibre cable never be pointed towards your own or anyone else's eyes?",
    correctedPromptSuffix:
      "Why must a live or potentially live unterminated optical-fibre end never be viewed directly or pointed towards anyone's eyes?",
    explanation:
      "Active communications fibre can emit concentrated optical radiation, including wavelengths that are not visible. Viewing the end can focus that energy onto the retina and cause eye injury, so the link should be treated as active until proved otherwise.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "The maximum AC voltage which the human body can withstand without long term physiological effects in dry conditions is:",
    correctedPromptSuffix:
      "Which listed value is the conventional upper boundary of extra-low voltage for AC and the level above which HSE warns that contact can cause shock injury?",
    options: { D: "50 volts AC" },
    explanation:
      "Fifty volts AC is a conventional voltage boundary used in electrical-safety measures; it is not a guaranteed safe body-withstand voltage. Shock outcome also depends on current path, duration, skin condition, environment and other factors, and HSE warns that contact above about 50 V AC can injure.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "When exposing underground power cables, which method of excavation should you use?",
    correctedPromptSuffix:
      "After plans and a suitable locating device have identified an underground power cable, which listed approach should be used for trial holes and final exposure?",
    options: {
      D: "Careful safe digging with suitable hand tools, using insulated tools near the cable and exposing it from the side where practicable",
    },
    explanation:
      "HSE requires planning, cable plans, trained use of locating devices and safe excavation. Trial holes and final exposure normally use carefully controlled suitable hand tools, with insulated tools near electricity cables; 'hand digging' alone was too vague to describe the safe system.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "Which of the following is not a suitable means of isolating a circuit?",
    options: {
      D: "Putting insulating tape over the circuit breaker instead of applying a secure lock-off device",
    },
    explanation:
      "Tape does not secure an isolating device against inadvertent or unauthorised operation. HSE construction guidance explicitly contrasts tape over a circuit-breaker with a proper lock-off device, personal lock and safety notice.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "Prior to moving a mobile tower scaffold, the platform height should reduced to a maximum of:",
    correctedPromptSuffix:
      "Before moving a mobile tower scaffold, to what maximum height should the tower be reduced under current HSE guidance?",
    explanation:
      "HSE says to reduce a tower to a maximum height of 4 m before moving it. The route must also be checked for overhead lines and obstructions, the ground must be firm and level, and no person or material should remain on the tower while it moves.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "What happens if a Prohibition Notice is issued by an Inspector of the local authority or the HSE?",
    correctedPromptSuffix:
      "What happens when an HSE or local-authority inspector serves a prohibition notice that takes immediate effect?",
    options: {
      D: "The activity covered by the notice must cease immediately and must not resume until the matters giving rise to the risk have been remedied",
    },
    explanation:
      "An immediate prohibition notice stops the specified activity because it involves an imminent risk of serious personal injury. A prohibition notice can instead be deferred to a stated time, so the original unqualified wording was too broad.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      'If a Health and Safety Executive Inspector issues a "Prohibition Notice", this means that:',
    correctedPromptSuffix:
      "If an HSE inspector issues a prohibition notice that takes immediate effect, what does it mean?",
    options: {
      A: "The activity specified by the notice must stop immediately and cannot resume until the matters giving rise to the risk have been remedied",
    },
    explanation:
      "A prohibition notice is based on a risk of serious personal injury. Where the inspector makes it effective immediately because the risk is imminent, the specified activity must stop at once; other prohibition notices may take effect at a stated later time.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix: "A Prohibition Notice means:",
    correctedPromptSuffix:
      "What does a prohibition notice that takes immediate effect require?",
    options: {
      B: "The activity specified in the notice must stop immediately and cannot resume until the serious-risk matters have been remedied",
    },
    explanation:
      "An immediate prohibition notice stops the specified activity at once because an imminent risk of serious personal injury exists. The correction distinguishes this from a deferred prohibition notice, which takes effect at the time stated on it.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix: "When working on fragile roofs:",
    correctedPromptSuffix:
      "If work on or near a fragile roof cannot be avoided, which listed measure is part of the required fall-protection approach?",
    options: {
      B: "Use suitable stagings or platforms and combine them with appropriate edge protection and measures that prevent or mitigate a fall",
    },
    explanation:
      "HSE's first requirement is to avoid work on or near a fragile surface where possible. Where access is unavoidable, a planned combination of stagings or platforms, guardrails, coverings, restraint or arrest and safety nets is normally needed; a crawling board by itself is not a complete control system.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "If you have to work at height and it is not possible to erect a scaffold, or use any other type of working platform or mobile elevating work platform, then you should:",
    correctedPromptSuffix:
      "If work at height cannot be avoided and collective fall-prevention equipment is not reasonably practicable, which listed approach is required before the work proceeds?",
    options: {
      A: "Use a properly selected work-restraint or fall-arrest system connected to a suitable anchor, with competent users and planned rescue arrangements",
    },
    explanation:
      "Personal fall protection comes below collective prevention in the work-at-height hierarchy. A harness alone is not protection: the system, lanyard and anchorage must suit the task, users must be competent, and foreseeable rescue must be planned.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "Approximately 70 workers each year die on construction sites, the main cause of this is:",
    correctedPromptSuffix:
      "According to HSE's Construction statistics in Great Britain 2025, which listed accident kind accounted for the largest share of construction worker deaths over 2020/21 to 2024/25?",
    explanation:
      "The fixed claim of about 70 deaths a year was obsolete. HSE recorded 35 worker fatalities in construction in 2024/25 and an annual five-year average of 40; falls from height accounted for 53% of deaths over that five-year period.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "Which one of the following must apply to any hard hat provided?",
    correctedPromptSuffix:
      "Which listed requirement must apply to a safety helmet supplied as PPE for work in Great Britain?",
    options: {
      B: "It must meet the applicable PPE product-safety requirements and bear a recognised conformity marking such as CE or UKCA",
    },
    explanation:
      "A helmet's suitability is not established by a generic age limit. PPE placed on the Great Britain market must meet the applicable essential safety requirements and carry an accepted conformity marking; current law recognises both CE and UKCA routes, so CE-only wording was incomplete.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix: "What is the MAXIMUM weight that an individual may lift?",
    correctedPromptSuffix:
      "What does UK manual-handling law say about a single maximum weight that an individual may lift?",
    options: {
      C: "There is no single legal maximum; the task, load, environment and individual's capability must be assessed",
    },
    explanation:
      "The law does not set one maximum lifting weight. Employers must avoid hazardous manual handling where reasonably practicable, assess unavoidable operations and reduce risk, taking account of the whole task and the individual rather than treating comfort as a safe limit.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix: "When picking up an object, you should:",
    options: {
      C: "Adopt a stable stance, keep the load close and use a slight bend of the back, hips and knees without further flexing the back while lifting",
    },
    explanation:
      "Current HSE guidance does not prescribe a deep squat or simply say 'bend your knees'. Use a stable position, secure hold and slight bend at the back, hips and knees, keep the load close and move smoothly without twisting or further back flexion.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "What is the recommended limit for a compact load that can be safely carried by a fit, male worker?",
    correctedPromptSuffix:
      "In HSE's simple lifting-and-lowering risk filter, what guideline figure applies for a man handling an easily grasped load close to the body at about knuckle height?",
    options: {
      A: "25 kg, as a risk-filter value rather than a guaranteed safe limit",
    },
    explanation:
      "The HSE chart uses 25 kg in this limited posture and handling zone to screen for low-risk tasks. It is not a safe limit and does not remove the need to consider frequency, twisting, travel, grip, individual capability and other adverse factors.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "If there is a risk of injury from moving loads what should you think about?",
    correctedPromptSuffix:
      "If moving a load may cause injury, what should you do before proceeding?",
    options: {
      A: "Stop and tell the supervisor or responsible person so the operation can be avoided where possible or properly assessed and controlled",
    },
    explanation:
      "The correct response is not simply to carry, drag or recruit someone informally. Hazardous handling should first be avoided where reasonably practicable; otherwise the task needs assessment and controls such as redesign, an aid or a planned team lift.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix: "What should you do first before lifting or moving a load?",
    correctedPromptSuffix:
      "What should you do first before lifting or moving a load manually?",
    options: {
      A: "Assess the whole handling task, including the load, route, environment and your capability",
    },
    explanation:
      "Weight is only one risk factor. Before handling, consider whether movement can be avoided, then assess the load, posture and movement, frequency, route, environment, available aids and the capability of the people involved.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix: "Which is the correct way to lift a load?",
    options: {
      D: "Adopt a stable stance, get a secure hold, keep the load close and use slight bending of the back, hips and knees without twisting or further back flexion",
    },
    explanation:
      "HSE advises a stable foot position, a secure hold, keeping the load close and slight bending of the back, hips and knees. A full deep squat or a deliberately bent back is not the universal correct technique, and handling technique does not replace risk reduction or lifting aids.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "A manual handling operation is defined as which one of the following?",
    correctedPromptSuffix:
      "Which option describes a manual-handling operation under the Manual Handling Operations Regulations?",
    options: {
      B: "Transporting or supporting a load by hand or bodily force, including lifting, putting down, pushing, pulling, carrying or moving it",
    },
    explanation:
      "Manual handling is defined by the use of hand or bodily force to transport or support a load. It includes lifting and carrying but also putting down, pushing, pulling and moving a person, animal or object.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "Which of the following is advisable when lifting a load manually?",
    options: {
      A: "Use a stable stance, keep the load close and use slight bending of the back, hips and knees while avoiding twist and further back flexion",
    },
    explanation:
      "Current HSE technique favours a stable posture and slight coordinated bending, not a rigidly straight back or a deep squat. Keep the heaviest side close, secure the load, move smoothly and turn with the feet instead of twisting.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix: "What does 'Kinetic lifting' mean?",
    correctedPromptSuffix:
      "Which listed answer best describes using good manual-handling technique after hazardous handling has first been avoided or reduced as far as reasonably practicable?",
    options: {
      B: "Handling the load in a controlled and efficient way using a stable posture, secure hold, close load position and smooth movement",
    },
    explanation:
      "'Kinetic lifting' is dated shorthand and must not imply that technique makes an otherwise hazardous lift safe. Good handling technique supplements task redesign and lifting aids; it uses balance, a close load, controlled movement and avoids twisting or sudden force.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "In hot weather which one of the following is correct with regard to safety helmets?",
    correctedPromptSuffix:
      "In hot weather, what should you do where the risk assessment or site rules still require a safety helmet?",
    explanation:
      "Continue to wear suitable head protection correctly while the residual head-injury risk remains. Do not drill or modify it; report heat concerns so shade, breaks, hydration or suitable compatible equipment can be considered without removing required protection.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "If you came across an injury on site, what is the first thing you should do?",
    correctedPromptSuffix:
      "After checking that approaching the casualty will not expose you or them to immediate danger, what should you do first on finding an injured person on site?",
    options: {
      A: "Call for the trained first-aider and appropriate emergency help",
    },
    explanation:
      "First make sure it is safe to approach, then summon competent help promptly and follow the emergency procedure. Do not investigate the incident or move the casualty unnecessarily before urgent needs have been assessed.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix: "Who is responsible for signing a Company Safety Policy?",
    correctedPromptSuffix:
      "Who should sign the statement of intent in a company's health and safety policy?",
    options: { C: "The employer or most senior person in the company" },
    explanation:
      "HSE says the employer or most senior person should sign the policy statement and review it regularly. That may be the managing director in one company, but the role rather than a particular job title is the governing principle.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "A workmate burns their hand on a piece of very hot metal. What should you do first?",
    correctedPromptSuffix:
      "Once the casualty is away from the hot metal and there is no immediate life-threatening danger, what should you do first for the hand burn?",
    options: {
      C: "Cool the burn under cool running water for at least 20 minutes while keeping the casualty warm",
    },
    explanation:
      "Current NHS burns guidance is to stop the burning process and cool the affected area with cool running water for at least 20 minutes. Ice, very cold water, creams and grease can worsen injury or interfere with assessment.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "What is the MAXIMUM penalty that a Higher Court, can currently impose for a breach of the Health and Safety at Work Act?",
    correctedPromptSuffix:
      "For relevant Health and Safety at Work etc. Act offences tried on indictment, which listed maximum penalties can a Crown Court impose on an individual?",
    options: { B: "An unlimited fine and up to two years' imprisonment" },
    explanation:
      "For relevant offences tried on indictment, the available maximum is an unlimited fine and, for an individual, imprisonment up to two years, or both. The original term 'Higher Court' was imprecise and not every offence or defendant attracts identical sentencing powers.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "An employee has a fall and is obviously unconscious. What is the FIRST thing you should do?",
    correctedPromptSuffix:
      "After checking that it is safe to approach, what should you do when a worker who has fallen is unresponsive?",
    options: {
      C: "Call 999 immediately and send for the first-aider and an AED while assessing breathing and following the call handler's instructions",
    },
    explanation:
      "Current Resuscitation Council UK guidance says to call 999 as soon as a person is found unresponsive, then assess breathing while the call is being connected. Summon the first-aider and AED too, and start CPR promptly if breathing is not normal.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "If someone has fallen over and has stopped breathing, what is the first thing you should do?",
    correctedPromptSuffix:
      "After confirming it is safe to approach an unresponsive person, what should you do when they are not breathing normally?",
    options: {
      B: "Call 999 or send someone to call and fetch an AED, then start CPR immediately and follow the call handler's instructions",
    },
    explanation:
      "An unresponsive person who is not breathing normally may be in cardiac arrest. Activate emergency help and obtain an AED without avoidable delay, then begin CPR; broken bones and drinks are not the immediate priority.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "All new fire extinguishers are coloured red or of bright self-coloured metal. How do you know the difference between types?",
    correctedPromptSuffix:
      "Modern portable fire extinguishers are predominantly red. How is the extinguishing medium additionally identified?",
    options: {
      A: "By the extinguisher's wording and a permitted colour-coded panel or band on the red body",
    },
    explanation:
      "The extinguisher label names the medium and a limited colour-coded area helps rapid identification, while the body is predominantly red. Location and shape alone are not reliable ways to choose the correct extinguisher for a fire.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix: "How would you recognise a hazardous substance?",
    options: {
      A: "By the hazard pictograms and other warning information on its label and safety data sheet",
    },
    explanation:
      "Hazardous chemicals are identified from their classified label information, including pictograms, signal words and hazard statements, supported by the safety data sheet. Smell, container appearance or label colour alone is not a reliable test.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "With regard to the use of personal protective equipment (PPE), which one of the following statements is true?",
    correctedPromptSuffix:
      "Which listed statement best describes the role of personal protective equipment at work?",
    options: {
      D: "PPE is selected to protect its wearer against specified residual risks and must be suitable, provided and used as part of the wider control system",
    },
    explanation:
      "PPE is normally personal to the wearer and controls residual risk after more effective measures have been considered. It must be suitable for the hazard and user, maintained, supplied without charge and used with information and training; it is not optional merely because harm seems unlikely.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "Under which of the following circumstances must injury accidents be recorded in the accident book?",
    options: {
      A: "When an accident at work causes an employee an injury, including an injury that does not meet the separate RIDDOR reporting threshold",
    },
    explanation:
      "The accident record is not limited to fractures, hospital treatment or seven-day absence. Work-related employee injuries should be recorded through the employer's accident-recording arrangements; RIDDOR determines which additional cases the responsible person must notify to the enforcing authority.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix:
      "Who of the following would you expect to be responsible for managing health and safety on site?",
    correctedPromptSuffix:
      "Who has the duty to manage risks arising from your employer's work and protect its workers, while coordinating with others who control the construction site?",
    options: { D: "Your employer" },
    explanation:
      "Your employer retains duties to manage its undertaking and protect workers, even on a shared construction site. The principal contractor manages and coordinates the construction phase overall, so the original broad phrase 'managing health and safety on site' could misleadingly imply that only one party has duties.",
  },
  {
    examId: "ecs-health-safety",
    promptSuffix: "A Health and Safety Executive Inspector can?",
    options: {
      D: "Enter premises at any reasonable time, or at any time when the inspector believes a dangerous situation exists",
    },
    explanation:
      "HSWA section 20 empowers an appointed inspector to enter at any reasonable time, and at any time where the inspector has reasonable cause to believe a dangerous situation exists. 'Visit at any time' without that qualification overstated the ordinary power.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 5,
    promptSuffix:
      "A theatre stage installation: recommended IET maximum interval:",
    answer: "B",
    explanation:
      "Current IET Guidance Note 3 gives theatres a recommended initial maximum interval of 3 years for periodic inspection and testing. The separate annual figure is the recommended routine-check frequency and must not be confused with a full EICR interval.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 14,
    promptSuffix:
      "A church hall with infrequent occasional use — typical IET-recommended interval:",
    options: {
      B: "Typically 5 years, with annual routine checks and risk-based adjustment where justified",
    },
    explanation:
      "Current IET Guidance Note 3 lists church installations at a 5-year initial maximum interval for periodic inspection and testing, with routine checks annually. Actual condition, use and maintenance can justify a shorter interval.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 15,
    promptSuffix:
      "A holiday-let chalet that is not strictly a 'rental dwelling' under the PRS Regs. The most defensible interval position is:",
    correctedPromptSuffix:
      "A holiday-let static caravan is excluded from the rented-sector regulations. Which current IET starting point applies to the caravan's own electrical installation?",
    options: {
      A: "A 3-year maximum between periodic inspections, with annual routine checks and risk-based shortening where needed",
    },
    explanation:
      "Caravans are excluded from the rented-sector regulations, but current IET Guidance Note 3 gives the caravan installation a 3-year initial maximum interval for periodic inspection and testing, with annual routine checks. The caravan-park pitch installation is a separate 1-year category.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 1,
    promptSuffix:
      "A rental caravan unit (the caravan itself, not the pitch supply) — recommended IET periodic inspection interval:",
    answer: "B",
    explanation:
      "Current IET Guidance Note 3 gives a caravan's own installation a recommended initial maximum of 3 years between periodic inspections and testing, with annual routine checks. The associated caravan-park pitch supply is a separate 1-year inspection category.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 3,
    promptSuffix:
      "A privately rented HMO in England. Statutory maximum EICR interval under ESS PRS Regs 2020:",
    options: {
      C: "5 years, or sooner where the current report specifies a shorter interval",
    },
    explanation:
      "The rented-sector regulations require inspection and testing at intervals of no more than 5 years, or sooner where the current report requires it. They do not require a fresh EICR automatically at every change of tenancy; a valid current report must instead be supplied to the new tenant before occupation.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 11,
    promptSuffix:
      "An EICR is being scoped for a hotel that was last inspected 4 years ago. There is a swimming pool, a kitchen, and standard guest rooms. The most defensible interval recommendation for the next cycle is:",
    options: {
      B: "A 5-year starting interval for the hotel, with the swimming-pool installation on its separate 1-year interval and any further shortening based on actual risk",
    },
    explanation:
      "Current IET Guidance Note 3 gives restaurants and hotels a 5-year initial maximum and swimming pools a separate 1-year maximum. A kitchen is not automatically a BS 7671 special location, although its actual condition and use may justify a shorter recommendation.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 16,
    promptSuffix:
      "Privately rented dwellings: enforcement under ESS PRS Regs 2020 sits with:",
    explanation:
      "The local housing authority enforces the rented-sector electrical safety regulations. It can require reports and confirmations, arrange remedial action in defined circumstances and recover costs. Current government guidance states that breaches committed from 1 May 2026 may attract a financial penalty of up to £40,000.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 1,
    promptSuffix:
      "A community centre hosting children's parties, fitness classes and an over-60s club. Most defensible starting interval:",
    options: {
      B: "5 years, with annual routine checks and a shorter interval if use, condition or maintenance warrants it",
    },
    explanation:
      "Current IET Guidance Note 3 lists village halls and community centres at a 5-year initial maximum interval for periodic inspection and testing, with annual routine checks. The observed risk and maintenance history can justify shortening that interval.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 2,
    promptSuffix:
      "A rental caravan-park pitch socket installation: recommended IET maximum interval:",
    answer: "A",
    explanation:
      "Current IET Guidance Note 3 gives caravan-park installations a 1-year initial maximum between periodic inspections and testing, with routine checks every 6 months. A caravan's own installation is a separate 3-year inspection category.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 4,
    promptSuffix:
      "A 10-year-old privately rented house has its periodic EICR carried out. The previous landlord did not commission an EICR. Action required by ESS PRS 2020 is:",
    options: {
      B: "Commission the EICR without delay, supply it to the tenant within 28 days, and complete any required remedial or investigative work within 28 days of inspection or sooner if specified",
    },
    explanation:
      "A landlord without a current report must arrange inspection and testing without delay. The report goes to the existing tenant within 28 days of inspection. Required remedial or investigative work is due within 28 days of the inspection, or sooner if the report specifies; this is not a second sequential 28-day period.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 12,
    promptSuffix:
      "An EICR records the words 'extent and limitations agreed in writing with the duty holder before the inspection commenced'. The point of doing this is:",
    options: {
      B: "To state exactly what the assessment covers, what was not inspected or tested, and why, so readers do not overinterpret the report's conclusions",
    },
    explanation:
      "Extent and limitations define the assessment actually performed and prevent its conclusions being presented more broadly than the evidence allows. Recording them does not automatically transfer or remove legal liability, and excessive limitations reduce the report's value.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 13,
    promptSuffix:
      "A hotel with a swimming pool fails its 5-year EICR (Unsatisfactory). The hotel manager asks whether they can keep operating until remedial work is completed. The most defensible response is:",
    options: {
      B: "Remove any C1 danger immediately; address C2 observations as a matter of urgency and investigate FI without delay; isolate affected areas where necessary until danger is removed",
    },
    explanation:
      "An unsatisfactory outcome does not automatically close an entire building, but each risk must be controlled. C1 requires immediate action, C2 urgent remedial action and FI further investigation without delay. Any part that cannot be used safely must remain isolated until made safe.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 14,
    promptSuffix:
      "Recommended periodic inspection interval for a leisure centre with pool, gym, sauna and changing rooms:",
    options: {
      B: "1 year for the swimming-pool installation and a 3-year starting interval for the wider leisure complex, adjusted for actual risk",
    },
    explanation:
      "Current IET Guidance Note 3 gives swimming pools a 1-year initial maximum and leisure complexes excluding pools a 3-year initial maximum. Other areas should be risk-assessed rather than assigned an unsupported 3-to-5-year band.",
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
      A: "Treat every part only as rented housing without assessing the workplace use",
      C: "Apply the rented-sector 5-year maximum to the dwelling and assess the commercial office under EAWR and current IET guidance, recording the mixed-use scope",
    },
    explanation:
      "The 2025 amendment extended the electrical safety regulations to the social rented sector, subject to its commencement and transition provisions. The dwelling has a 5-year statutory maximum, while the workplace element must also be assessed under EAWR; the mixed-use scope and any earlier report date must be recorded.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 5,
    promptSuffix:
      "Recommended IET maximum interval for a place of public entertainment such as a music venue:",
    answer: "B",
    explanation:
      "Current IET Guidance Note 3 gives places of public entertainment a recommended initial maximum of 3 years between periodic inspections and testing. The separate annual figure is for routine checks and must not be mistaken for a full EICR interval.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 15,
    promptSuffix:
      "An EAWR duty holder argues that periodic inspection at GN3 intervals is 'just guidance' and so optional. The defensible position is:",
    options: {
      B: "GN3 is non-statutory, but a duty holder departing from it needs an equally effective, documented risk-based system that demonstrates the installation is maintained to prevent danger",
    },
    explanation:
      "EAWR does not mandate Guidance Note 3 by name. GN3 is authoritative technical guidance, so following it is a strong way to demonstrate compliance; a different inspection and maintenance regime can be used only where it is demonstrably suitable and effective for the actual risk.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 18,
    promptSuffix:
      "A duty holder argues that change of occupancy on an owner-occupied home is statutory. The defensible position is:",
    options: {
      B: "Incorrect — GN3 recommends inspection at change of occupancy for an owner-occupied home, but it is not statutory; rented-sector rules require a current report at least every 5 years and supply to a new tenant, not automatically a fresh EICR for every tenancy",
    },
    explanation:
      "For an owner-occupied dwelling, inspection at change of occupancy is an IET recommendation rather than a statutory duty. Under the rented-sector regulations a valid current report is supplied before a new tenant moves in; government guidance expressly says a fresh inspection is not automatically required at every re-letting.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 19,
    promptSuffix:
      "A customer asks whether the inspector's professional indemnity covers any later claim. The defensible position is:",
    options: {
      B: "Coverage depends on the insurance policy and claim; clear extent and limitations define the report's assessment but do not by themselves decide insurer liability",
    },
    explanation:
      "Professional-indemnity coverage is governed by the actual policy terms and circumstances of a claim. A precise extent and limitations entry is essential evidence of what the EICR assessed, but it is not a blanket warranty and cannot itself guarantee or exclude insurance cover.",
  },
  {
    promptSuffix:
      "What circumstance would require an Electrical Installation Condition Report to be issued?",
    correctedPromptSuffix:
      "What circumstance would most clearly call for an EICR on an existing flat when no current satisfactory report is available?",
    options: { B: "A new occupier is moving in" },
    explanation:
      "An EICR assesses whether an existing installation remains satisfactory for continued service. A change of occupier is a clear reason to obtain one when there is no current satisfactory report; new or remedial installation work is certified separately.",
  },
  {
    promptSuffix:
      "Which non-statutory document directly relates to the process of inspection and testing?",
    correctedPromptSuffix:
      "Which non-statutory IET publication provides detailed guidance across the full inspection-and-testing process?",
    options: { B: "EAWR" },
    explanation:
      "IET Guidance Note 3 covers inspection, test methods, test sequencing, instruments and the interpretation of results. EAWR and ESQCR are legislation, while HSE GS38 focuses on the safe construction and use of test equipment.",
  },
  {
    promptSuffix:
      "What document must the Inspector use to record the new lighting circuit reference method?",
    options: { B: "Schedule of Circuit Details" },
    answer: "B",
    explanation:
      "The reference method describes how the cable is installed and is recorded with the other circuit-design details on the Schedule of Circuit Details. The inspection schedule records visual checks, while the test-results schedule records measured values.",
  },
  {
    promptSuffix: "What is the minimum IP rating required for the new lights?",
    correctedPromptSuffix:
      "Where cleaning water jets are not likely to be used, what is the minimum IP rating required for the new lights?",
    explanation:
      "At 2.4 m above the pool, the luminaire remains within the 2.5 m vertical extent of zone 1, where at least IPX4 is required. IPX5 is required instead where water jets are likely to be used for cleaning.",
  },
  {
    promptSuffix:
      "Which test must be carried out before earth fault loop impedance to ensure the installation is safe to energise?",
    correctedPromptSuffix:
      "Which dead test must be completed before the installation is energised for earth fault loop impedance testing?",
    explanation:
      "Polarity is proved as a dead test before energisation so single-pole protective and switching devices are confirmed in the line conductor. Prospective fault current, RCD operating time and earth fault loop impedance are live tests.",
  },
  {
    promptSuffix:
      "What action should be taken with regard to the additional socket-outlet circuits?",
    options: {
      A: "Both should be fully tested to establish their condition for continued service",
      B: "Both should be sampled to establish their condition for continued service",
      C: "One should be fully inspected to establish its condition for continued service",
      D: "One should be sampled to establish its condition for continued service",
    },
    explanation:
      "Neither added circuit has recorded test results, so neither has evidence on which sampling can be based. Inspect and carry out the relevant tests on both circuits, then record each circuit’s details and results on the EICR schedules.",
  },
  {
    promptSuffix:
      "Which test can be carried out without the use of GS38 compliant test leads?",
    correctedPromptSuffix:
      "Which of these is carried out as a dead test with the installation safely isolated?",
    explanation:
      "Continuity of protective conductors is measured on an isolated installation using a low-resistance ohmmeter. Earth fault loop impedance, prospective fault current and an RCD operating-time test require the supply to be energised.",
  },
  {
    promptSuffix:
      "Which test may be unnecessary on any existing ring-final circuits, for which previous test records are available?",
    correctedPromptSuffix:
      "Where reliable previous results and the agreed sampling plan justify an omission, which test may be unnecessary on an unchanged ring-final circuit?",
    explanation:
      "Ring-final continuity may be omitted only where reliable previous results, no relevant alterations and the agreed sampling strategy give the inspector enough evidence. The decision and any limitation must be recorded; old results do not automatically remove the need to test.",
  },
  {
    promptSuffix:
      "What is the maximum percentage voltage drop allowed for this circuit?",
    correctedPromptSuffix:
      "What is the recommended maximum percentage voltage drop for this circuit?",
    explanation:
      "For an 'other use' circuit supplied from the public low-voltage network, Appendix 4 recommends a maximum voltage drop of 5%. The figure is informative design guidance rather than an automatic legal pass-or-fail limit.",
  },
  {
    promptSuffix:
      "What is the most appropriate outcome based on the value of voltage drop?",
    correctedPromptSuffix:
      "If the inspector judges that improvement is advisable but finds no present or potential danger, which EICR classification expresses that judgement?",
    explanation:
      "C3 means improvement is recommended but the observation is not dangerous or potentially dangerous. C1 and C2 are reserved for danger or potential danger, while Lim records an agreed restriction on the inspection or testing.",
  },
  {
    promptSuffix:
      "What instrument safety check must be made before carrying out this test?",
    correctedPromptSuffix:
      "Which published guidance sets the safety requirements for the probes and leads used for this live test?",
    options: {
      A: "BS 7671 Appendix 4",
      B: "HSE GS38",
      C: "IET Guidance Note 3",
      D: "BS EN 60898",
    },
    explanation:
      "HSE GS38 gives the safety guidance for electrical test equipment, probes and leads used on low-voltage systems. The other documents cover installation requirements, inspection-and-testing practice or circuit-breaker product requirements.",
  },
  {
    promptSuffix:
      "What voltages are to be expected if the polarity is correct?",
    correctedPromptSuffix:
      "What voltages are normally expected if the polarity is correct?",
    options: { A: "L-N 230 V, L-E 230 V, N-E approximately 0 V" },
    explanation:
      "Correct polarity normally gives about 230 V from line to neutral and from line to earth. Neutral and earth are connected upstream, so N-E is normally close to 0 V, although a small voltage can appear under load.",
  },
  {
    promptSuffix: "Why may the testing of circuit polarity be unnecessary?",
    correctedPromptSuffix:
      "If reliable previous polarity results are available, why may repeat testing at every circuit point be unnecessary?",
    options: { D: "No alterations have been made since those results" },
    explanation:
      "Reliable previous results plus confirmation that no relevant alterations have been made may justify sampling rather than repeating polarity at every point. Polarity at the origin and any changed work must still be established.",
  },
  {
    promptSuffix:
      "What additional action must the inspector take regarding this observation?",
    correctedPromptSuffix:
      "What action should follow from this C2 observation?",
    options: {
      A: "Record the C2 observation and advise urgent remedial action",
      B: "Notify the insurer directly instead of the client",
      C: "Always isolate the installation and prevent re-energising",
      D: "Remove the portable generator without the client's authority",
    },
    explanation:
      "A C2 observation is potentially dangerous, so it is recorded on the EICR and urgent remedial action is advised to the person ordering the report. Immediate separate danger notification and forced isolation are associated with danger present, not every C2 observation.",
  },
  {
    promptSuffix:
      "What condition can be detected during the insulation resistance test?",
    correctedPromptSuffix:
      "What kind of defect can an insulation-resistance test reveal on one of these new circuits?",
    options: {
      A: "A low-resistance path caused by damaged insulation",
      B: "An undersized protective device",
      C: "A loose trunking lid",
      D: "Incorrect circuit labelling",
    },
    explanation:
      "An insulation-resistance test can reveal an unintended leakage path caused by cut, crushed, contaminated or moisture-damaged insulation. Protective-device sizing, enclosure security and circuit labelling are established by design checks and inspection.",
  },
  {
    promptSuffix:
      "What is the minimum IP rating for the bottom horizontal surface of the trunking?",
    correctedPromptSuffix:
      "What is the minimum IP rating for the readily accessible horizontal top surface of the trunking?",
    explanation:
      "A readily accessible horizontal top surface must prevent access with the 1 mm test probe, so it requires at least IP4X or IPXXD. IP2X or IPXXB is the general minimum for the other enclosure surfaces.",
  },
  {
    promptSuffix:
      "What pattern of test results is expected at each socket-outlet when the line and cpc conductors are correctly cross-connected?",
    correctedPromptSuffix:
      "What pattern of test results is expected at each socket-outlet when the line and neutral conductors are correctly cross-connected?",
    explanation:
      "The line and neutral conductors have the same cross-sectional area and similar end-to-end resistance. When correctly cross-connected, their two parallel paths therefore give substantially the same reading at each socket-outlet.",
  },
  {
    promptSuffix:
      "What column numbers would be completed on the Schedule of Test Results, detailing the results obtained during the ring-final circuit continuity test?",
    correctedPromptSuffix:
      "Which results from the ring-final circuit continuity test must be recorded on the applicable test schedule?",
    options: {
      A: "r1, rn, r2 and R1+R2",
      B: "Ze, prospective fault current and RCD time",
      C: "Insulation resistance only",
      D: "Design current and voltage drop only",
    },
    explanation:
      "The ring-final continuity procedure records the end-to-end resistances r1, rn and r2, plus the cross-connected R1+R2 result. Column numbers vary between form editions, so the measured quantities are the reliable thing to learn.",
  },
  {
    promptSuffix:
      "The following results were obtained, as shown in Figure 1. What value is to be recorded as the earth electrode resistance?",
    correctedPromptSuffix:
      "The three readings were 179 Ω, 172 Ω and 168 Ω. What value is to be recorded as the earth electrode resistance?",
    explanation:
      "Use the representative mean of the three probe-position readings: (179 Ω + 172 Ω + 168 Ω) ÷ 3 = 173 Ω. The individual readings also vary by less than 5% from that mean, supporting a stable result.",
  },
  {
    promptSuffix:
      "The following results were obtained, as shown in Figure 1. What is the maximum rating of RCD that can be used for fault protection on this installation?",
    correctedPromptSuffix:
      "The measured earth electrode resistance is 173 Ω. What is the maximum listed RCD rating that can be used for fault protection on this installation?",
    explanation:
      "For TT fault protection, RA × IΔn must not exceed 50 V. With RA = 173 Ω, 100 mA gives 17.3 V and complies; 300 mA gives 51.9 V, so the next larger listed rating already exceeds the limit.",
  },
];

const REMOVED_EXAM_VARIANT_IDS = new Set([
  "quiz-29714",
  "quiz-29719",
  "quiz-29722",
  "quiz-29723",
]);

export const EXAM_QUESTION_CORRECTIONS: readonly ExamQuestionCorrection[] =
  ALL_EXAM_QUESTION_CORRECTIONS.filter(
    (correction) =>
      !correction.variantId ||
      !REMOVED_EXAM_VARIANT_IDS.has(correction.variantId),
  );

export const EXAM_EXPLANATION_OVERRIDES = {
  "During the construction of an installation, insulation resistance tests have been carried out between live conductors and earth on the individual circuits and the L to E results are shown below. What is the expected value of insulation resistance L to E when the whole installation is tested?":
    "The four insulation resistances are parallel leakage paths, so use 1/Rtotal = 1/R1 + 1/R2 + 1/R3 + 1/R4. Substituting the readings: 1/Rtotal = 1/120 + 1/120 + 1/130 + 1/150 = 0.03103 MΩ⁻¹. Therefore Rtotal = 1 / 0.03103 = 32.23 MΩ, which rounds to 32.2 MΩ.",

  "What is the expected resistance of each of the loops tested in stage 1 as shown in GN3?":
    "Stage 1 measures each ring conductor end to end. For the 2.5 mm² line and neutral conductors, use 7.41 mΩ/m: r1 = rn = 7.41 mΩ/m × 75 m = 555.75 mΩ = 0.556 Ω. Rounded to the available answer, each loop should measure about 0.56 Ω.",

  "A radial socket outlet circuit is supplied by 2.5mm² cable and is 20m long. Given that the Ze of the installation is 0.43Ω and that the resistivity of the cable is 7.41mΩ/m at 20°C , what is the calculated Zs:":
    "Use Zs = Ze + (R1 + R2). The current travels 20 m out and 20 m back, so R1 + R2 = 7.41 mΩ/m × 40 m = 296.4 mΩ = 0.2964 Ω. Therefore Zs = 0.43 Ω + 0.2964 Ω = 0.7264 Ω, which rounds to 0.73 Ω.",

  "A 10 mm² main protective bonding conductor is 37.5 m in length. What is the expected measured resistance when testing the conductor?":
    "A 10 mm² copper conductor has a resistance of about 1.83 mΩ/m at 20 °C. Use R = resistance per metre × length: R = 1.83 mΩ/m × 37.5 m = 68.625 mΩ = 0.0686 Ω. Rounded to two decimal places, the expected reading is 0.07 Ω.",

  "Questions 17 to 23 relate to the following scenario. The continuity of a main protective bonding conductor to a gas installation pipe in a new primary school is to be tested. The 10 mm² conductor is 43 m long. The installation has been safely isolated for this test. What is the expected measured conductor resistance value?":
    "A 10 mm² copper conductor has a resistance of about 1.83 mΩ/m at 20 °C. Use R = resistance per metre × length: R = 1.83 mΩ/m × 43 m = 78.69 mΩ = 0.0787 Ω. Rounded to the available answers, the expected measured resistance is 0.08 Ω.",

  "Questions 26 to 29 relate to the following scenario Voltage drop of a single-phase distribution circuit supplying a power distribution board in a remote building is to be verified as part of the periodic inspection and testing within a workshop complex. The installation forms part of a public 400/230 V TN-S system. The circuit has a measured R1+Rn value of 0.15 Ω and an Ib of 60 A. The circuit protective device has an In of 80 A, see Figure 5. What is the maximum acceptable voltage drop for this distribution circuit if the highest circuit voltage drop on DB-3B is 5.0 V?":
    "The maximum voltage drop for a non-lighting circuit on a 230 V public supply is 5%. First find the total allowance: 230 V × 0.05 = 11.5 V. The final circuit already uses 5.0 V, so the distribution circuit may use 11.5 V − 5.0 V = 6.5 V.",

  "Questions 40 to 46 relate to the following scenario. Insulation resistance has been tested on five new lighting circuits in an existing large distribution warehouse. These circuits are supplied from a new single-phase, five-way DB. Switching for each circuit is by 230 V contactors. Connection to each light is made using a BS 1363 socket-outlet adjacent to the fitting. The supply and installation form a 400 V three-phase TN-C-S system. The following test results were recorded. What is the value of insulation resistance between Live and Earth for the new DB with all the lighting circuits connected?":
    "The five Live-Earth readings form parallel leakage paths. Use 1/Rtotal = 1/176 + 1/20 + 1/162 + 1/134 + 1/178 = 0.07494 MΩ⁻¹. Therefore Rtotal = 1 / 0.07494 = 13.34 MΩ, which rounds to the listed answer of 13 MΩ.",

  "Questions 50 to 57 relate to the following scenario. Continuity of a ring final circuit has been tested as part of an initial verification of a new primary school. All the socket-outlets are connected directly to the ring. The circuit loop length is 58 m long, wired in 4 mm² live and 1.5 mm² cpc flat profile cable. The circuit is protected by a 32 A BS EN 60898 Type B circuit breaker. What is the expected measured r1 value?":
    "For the 4 mm² line conductor, use 4.61 mΩ/m at 20 °C. The end-to-end ring reading is r1 = 4.61 mΩ/m × 58 m = 267.38 mΩ = 0.267 Ω. Rounded to two decimal places, r1 should be 0.27 Ω.",

  "Questions 50 to 57 relate to the following scenario. Continuity of a ring final circuit has been tested as part of an initial verification of a new primary school. All the socket-outlets are connected directly to the ring. The circuit loop length is 58 m long, wired in 4 mm² live and 1.5 mm² cpc flat profile cable. The circuit is protected by a 32 A BS EN 60898 Type B circuit breaker. What is the expected measured r2 value?":
    "For the 1.5 mm² cpc, use 12.1 mΩ/m at 20 °C. The end-to-end ring reading is r2 = 12.1 mΩ/m × 58 m = 701.8 mΩ = 0.7018 Ω. Rounded to two decimal places, r2 should be 0.70 Ω.",

  "Questions 50 to 57 relate to the following scenario. Continuity of a ring final circuit has been tested as part of an initial verification of a new primary school. All the socket-outlets are connected directly to the ring. The circuit loop length is 58 m long, wired in 4 mm² live and 1.5 mm² cpc flat profile cable. The circuit is protected by a 32 A BS EN 60898 Type B circuit breaker. What is the expected measured value at each socket-outlet when the line and neutral conductors are correctly cross-connected?":
    "The 4 mm² line and neutral loops have equal end-to-end readings, r1 = rn ≈ 0.267 Ω. With the conductors correctly cross-connected, the expected reading at each socket is (r1 + rn) / 4. Substituting the values: (0.267 Ω + 0.267 Ω) / 4 = 0.1335 Ω, which rounds to 0.13 Ω.",

  "The measured R1+R2 value for a radial cooker circuit, with a 6 mm² line conductor and a 2.5 mm² cpc, is 0.29 Ω. What is the length of this circuit?":
    "Use 3.08 mΩ/m for the 6 mm² line and 7.41 mΩ/m for the 2.5 mm² cpc. Their combined resistance is 3.08 + 7.41 = 10.49 mΩ/m = 0.01049 Ω/m. Rearranging R1 + R2 = resistance per metre × length gives length = 0.29 Ω / 0.01049 Ω/m = 27.65 m, which rounds to 28 m.",

  "Four circuits have insulation resistances of 40MΩ, 50MΩ, 100MΩ and 100MΩ. When tested together (insulation lump test) what would be the expected reading:":
    "The insulation resistances are parallel leakage paths, so 1/Rtotal = 1/40 + 1/50 + 1/100 + 1/100 = 0.065 MΩ⁻¹. Therefore Rtotal = 1 / 0.065 = 15.38 MΩ.",

  "A ring final circuit wired in pcv 2.5mm²/1.5mm². Resistances per metre are 7.41mΩ/m and 12.1mΩ/m respectively. What is the expected value of (R1 + R2). The circuit is 16.5 meters long:":
    "For a correctly cross-connected ring, R1 + R2 = (r1 + r2) / 4. First calculate the two end-to-end values together: (7.41 + 12.1) mΩ/m × 16.5 m = 321.9 mΩ. Then divide by four parallel paths: 321.9 mΩ / 4 = 80.5 mΩ = 0.0805 Ω, which rounds to 0.08 Ω.",

  "The insulation resistance of two circuits is of 40MΩ and 36MΩ respectively. When tested together what would be approximately the total insulation resistance:":
    "The two insulation resistances are in parallel, so Rtotal = (R1 × R2) / (R1 + R2). Substituting the readings: Rtotal = (40 MΩ × 36 MΩ) / (40 MΩ + 36 MΩ) = 1440 / 76 = 18.95 MΩ, which rounds to 19 MΩ.",

  "If each of the three circuits had been tested individually and gave readings of 80 MΩ, 60 MΩ and 30 MΩ respectively, what would be the expected overall insulation resistance:":
    "The three insulation resistances form parallel leakage paths, so 1/Rtotal = 1/80 + 1/60 + 1/30 = 0.0625 MΩ⁻¹. Therefore Rtotal = 1 / 0.0625 = 16 MΩ.",

  "When measuring the resistance of 100m of 2.5mm² conductor the most suitable range for the instrument would be:":
    "A 2.5 mm² copper conductor has a resistance of about 7.41 mΩ/m at 20 °C. Calculate the expected reading: R = 7.41 mΩ/m × 100 m = 741 mΩ = 0.741 Ω. That fits comfortably within the 0-2 Ω range, which also gives the best useful resolution.",

  "If the readings for (r1 + r2) recorded while testing the continuity of ring final circuit conductors is 0.9 Ω each, what will be the value of (R1 + R2):":
    "For the cross-connected ring test, R1 + R2 = (r1 + r2) / 4. Substituting the readings: R1 + R2 = (0.9 Ω + 0.9 Ω) / 4 = 1.8 Ω / 4 = 0.45 Ω.",

  "Questions 12 to 16 relate to the following scenario. The existing installation in a hotel is to be inspected and tested as a requirement of the local authority for a public entertainment licence application. Previous inspection and testing records exist but two additional socket-outlet circuits have previously been installed for which there are no test results available. What action should be taken with regard to the additional socket-outlet circuits?":
    "Neither added circuit has recorded test results, so neither has evidence on which sampling can be based. Inspect and carry out the relevant tests on both circuits, then record each circuit’s details and results on the EICR schedules.",
} as const;

export function applyExamExplanationEnhancements(exam: Exam): Exam {
  let changed = false;
  const sections = exam.sections.map((section) => ({
    ...section,
    variants: section.variants.map((variant) => ({
      ...variant,
      questions: variant.questions.map((question) => {
        const correction = EXAM_QUESTION_CORRECTIONS.find(
          (entry) =>
            (!entry.examId || entry.examId === exam.id) &&
            (!entry.variantId || entry.variantId === variant.id) &&
            (!entry.questionNumber ||
              entry.questionNumber === question.number) &&
            question.prompt.endsWith(entry.promptSuffix),
        );
        const explanation =
          EXAM_EXPLANATION_OVERRIDES[
            question.prompt as keyof typeof EXAM_EXPLANATION_OVERRIDES
          ];
        if (!correction && !explanation) return question;

        changed = true;
        const prompt = correction?.correctedPromptSuffix
          ? `${question.prompt.slice(0, -correction.promptSuffix.length)}${correction.correctedPromptSuffix}`
          : question.prompt;
        const options = correction?.options
          ? { ...question.options, ...correction.options }
          : question.options;

        return {
          ...question,
          prompt,
          options,
          answer: correction?.answer ?? question.answer,
          explanation:
            correction?.explanation ?? explanation ?? question.explanation,
        } satisfies ExamQuestion;
      }),
    })),
  }));

  return changed ? { ...exam, sections } : exam;
}
