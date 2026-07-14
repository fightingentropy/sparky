export const initialVerificationTest7 = [
  {
    prompt:
      "Above which earth-electrode resistance does IET guidance warn that a TT electrode may be unstable and require investigation?",
    options: ["100 ohms", "1660 ohms", "200 ohms", "600 ohms"],
    answer: "200 ohms",
    rationales: {
      "100 ohms":
        "A 100 Ω electrode is below the 200 Ω investigation threshold. Its resistance should still be as low as practicable, but this value alone does not trigger the stability warning.",
      "1660 ohms":
        "This is close to the theoretical limit obtained from 50 V divided by 30 mA. Satisfying that touch-voltage equation does not remove the separate concern that an electrode above 200 Ω may be unreliable.",
      "600 ohms":
        "A 600 Ω result is already above the warning threshold rather than defining where that threshold begins. Such a reading requires investigation because soil drying or freezing may increase it further.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2021/87-september-2021/tt-earthing-considerations/",
      "https://electrical.theiet.org/wiring-matters/years/2021/84-march-2021/island-mode-earthing-arrangements-new-guidance-in-the-second-edition-of-the-iet-code-of-practice-on-electrical-energy-storage-systems/",
    ],
  },
  {
    prompt:
      "Which type of earthing system relies on a separately supplied earth, usually the sheathing on the cable:",
    options: ["IT", "TN-C-S", "TN-S", "TT"],
    answer: "TN-S",
    rationales: {
      IT: "An IT system has no direct connection between the live system and Earth, or connects through a deliberately high impedance. It is not identified by a distributor's separate cable sheath earth.",
      "TN-C-S":
        "TN-C-S combines neutral and protective functions in a PEN conductor over part of the supply and separates them at the service position. That differs from the separate neutral and metallic-sheath earth paths of TN-S.",
      TT: "A TT installation provides its own local earth electrode instead of relying on a distributor-supplied protective conductor. The supply neutral is earthed separately at the source.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/",
      "https://electrical.theiet.org/wiring-matters/years/2021/87-september-2021/tt-earthing-considerations/",
    ],
  },
  {
    prompt:
      "Which of the following would not be one of the human senses to use during the initial verification of an addition to a lighting circuit:",
    options: ["Hearing", "Sight", "Taste", "Touch"],
    answer: "Taste",
    rationales: {
      Hearing:
        "Unusual buzzing, arcing or mechanical noise can reveal a defect during appropriate inspection or functional checks. Hearing can therefore contribute evidence without being a substitute for the required tests.",
      Sight:
        "Visual inspection is a core part of initial verification and can reveal damage, poor workmanship, incorrect selection and missing protection. It is used before instrument testing begins.",
      Touch:
        "With the installation safely isolated, controlled touch can help check mechanical security or unexpected heating where appropriate. It must never expose the inspector to live parts or replace a proper instrument check.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
    ],
  },
  {
    prompt:
      "On a standard TT installation, the result of the resistance of the earth electrode and the rated RCD residual operating current should not exceed:",
    options: ["110V", "25V", "400V", "50V"],
    answer: "50V",
    rationales: {
      "110V":
        "A product of 110 V exceeds the normal TT touch-voltage limit. The electrode resistance and RCD rating must be coordinated so that RA × IΔn is no more than 50 V.",
      "25V":
        "Twenty-five volts is a reduced touch-voltage criterion used in certain especially hazardous circumstances. It is not the general limit for the standard TT installation described here.",
      "400V":
        "Four hundred volts is a common line-to-line system voltage, not the allowed result of the TT protection equation. It would be far above the permitted touch-voltage value.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2021/87-september-2021/tt-earthing-considerations/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/",
    ],
  },
  {
    prompt:
      "Which of the following protection devices is unlikely to be suited for short circuit currents in the region of 6kA:",
    options: [
      "BS 3036 semi-enclosed fuse",
      "BS 88-2 general purpose fuse",
      "BS 88-3 cartridge fuse",
      "BS EN 60898 circuit breaker",
    ],
    answer: "BS 3036 semi-enclosed fuse",
    rationales: {
      "BS 88-2 general purpose fuse":
        "BS 88-2 industrial cartridge fuses are high-breaking-capacity devices intended to interrupt substantial prospective currents. A correctly selected device can therefore be suitable at 6 kA.",
      "BS 88-3 cartridge fuse":
        "BS 88-3 cartridge fuses have a defined breaking capacity well above that of a rewireable fuse. Suitability still depends on the exact device rating, but 6 kA is not inherently beyond this device family.",
      "BS EN 60898 circuit breaker":
        "Many BS EN 60898 circuit-breakers used in installations carry a 6 kA rated short-circuit capacity. A device marked for that capacity is specifically assessed to interrupt a fault at this level.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1611/semi-enclosed-fuses.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2023/94-march-2023/determining-the-maximum-earth-fault-loop-impedance-for-protective-devices-to-bs-en-60898-bs-en-60947-2/",
    ],
  },
  {
    prompt: "The person carrying out inspection and testing must have:",
    options: [
      "A current Wiring Regulations qualification",
      "An inspection and test qualification",
      "Both (a) and (b)",
      "Sound knowledge and experience relevant to the installation being inspected",
    ],
    answer:
      "Sound knowledge and experience relevant to the installation being inspected",
    rationales: {
      "A current Wiring Regulations qualification":
        "A qualification can support evidence of knowledge, but it does not by itself establish practical competence for the installation and hazards involved. Relevant skill and experience are also required.",
      "An inspection and test qualification":
        "Holding an inspection-and-testing certificate does not guarantee current competence with every installation type. The person must be capable of performing the work safely and interpreting the actual installation correctly.",
      "Both (a) and (b)":
        "These two qualifications are useful but are not the legal definition of competence. Regulation 16 focuses on the knowledge or experience needed to prevent danger, not possession of named certificates alone.",
    },
    sourceUrls: [
      "https://www.legislation.gov.uk/uksi/1989/635/regulation/16/made",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt: "What does a BS EN designation mean?",
    options: [
      "British compliant Standard",
      "A European Standard adopted as a British Standard",
      "Non-statutory Regulation",
      "Statutory Regulation",
    ],
    answer: "A European Standard adopted as a British Standard",
    rationales: {
      "British compliant Standard":
        "'British compliant Standard' is not a recognised standards category and does not explain the EN element. BS EN identifies a European Standard that BSI has adopted nationally.",
      "Non-statutory Regulation":
        "A standard is not a regulation, even when its use is voluntary and non-statutory. Legislation may refer to a standard, but that does not change the document type.",
      "Statutory Regulation":
        "A BS EN is published through the standards system, not enacted by Parliament as legislation. Compliance can help demonstrate good practice, but the standard is not itself a statutory regulation.",
    },
    sourceUrls: [
      "https://knowledge.bsigroup.com/articles/what-is-a-standard",
      "https://knowledge.bsigroup.com/articles/understanding-uk-and-eu-standards",
    ],
  },
  {
    prompt:
      "What minimum protection against small solid objects is required on an accessible horizontal top surface of a consumer unit?",
    options: ["IP2X", "IP4X", "IP5X", "IP6X"],
    answer: "IP4X",
    rationales: {
      IP2X: "IP2X prevents access with a standard finger but still permits smaller solid objects. A readily accessible horizontal top surface has the stricter IP4X or IPXXD basic-protection requirement.",
      IP5X: "IP5X denotes dust-protected construction and is higher than the required protection against 1 mm objects. An ordinary accessible consumer-unit top does not need this environmental dust rating.",
      IP6X: "IP6X means dust-tight and is an environmental enclosure rating far beyond the general indoor consumer-unit requirement. BS 7671 does not demand a dust-tight top merely to provide basic protection.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1405/consumer-units.pdf",
      "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf",
    ],
  },
  {
    prompt: "A visual inspection is necessary before testing to check whether:",
    options: [
      "The Zs is within the maximum allowed",
      "The insulation resistance is acceptable",
      "The polarity of switches and fuses are correct",
      "There is adequate access to switchgear",
    ],
    answer: "There is adequate access to switchgear",
    rationales: {
      "The Zs is within the maximum allowed":
        "Earth-fault loop impedance is established by measurement or an accepted calculation and then compared with the protective-device limit. It cannot be determined by visual inspection alone.",
      "The insulation resistance is acceptable":
        "Insulation may look intact while hidden leakage or damage remains. Acceptance requires the prescribed insulation-resistance test, with connected equipment handled appropriately.",
      "The polarity of switches and fuses are correct":
        "Visible terminations may offer supporting evidence, but polarity must be verified throughout the circuit by the appropriate dead tests and supply check. Appearance alone is not sufficient evidence.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2822/bs7671-all-forms-v31.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "For a TN-C-S installation with a copper distributor neutral/PEN conductor not exceeding 35 mm², what minimum copper main protective bonding conductor is selected from BS 7671 Table 54.8?",
    options: ["10 mm²", "16 mm²", "4mm²", "6 mm²"],
    answer: "10 mm²",
    rationales: {
      "16 mm²":
        "Table 54.8 uses 16 mm² bonding only when the copper-equivalent supply neutral/PEN is over 35 mm² and up to 50 mm². The stated PEN does not exceed 35 mm², so its table entry is 10 mm².",
      "4mm²":
        "Four square millimetres is below the 10 mm² Table 54.8 value for the stated TN-C-S supply. It would not provide the required copper-equivalent cross-sectional area.",
      "6 mm²":
        "Six square millimetres may arise as a general minimum outside this PME sizing case, but Table 54.8 requires 10 mm² here. PME bonding must also withstand possible diverted neutral current.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/",
      "https://electrical.theiet.org/media/2822/bs7671-all-forms-v31.pdf",
    ],
  },
  {
    prompt: "Which of the following is not permitted for use as an earth electrode:",
    options: [
      "Earth plates",
      "Lead sheaths of cables",
      "Metal water mains pipes",
      "Underground structural metalwork",
    ],
    answer: "Metal water mains pipes",
    rationales: {
      "Earth plates":
        "A purpose-made conducting plate buried in suitable soil is a recognised electrode type. Its dimensions, material, connections and resistance still need to meet the design requirements.",
      "Lead sheaths of cables":
        "A cable sheath can serve as an electrode where it is suitable, reliably connected and used with the cable owner's agreement. It is not subject to the same outright prohibition as a metal water service pipe.",
      "Underground structural metalwork":
        "Suitable embedded structural metalwork or foundation electrodes can provide an effective connection to Earth. Its electrical continuity, corrosion risk and accessibility of connection must be established.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/",
      "https://electrical.theiet.org/wiring-matters/years/2021/87-september-2021/tt-earthing-considerations/",
    ],
  },
  {
    prompt:
      "Which one of the following does not need to be checked for compliance during the visual inspection of an installation:",
    options: [
      "Connection of single pole devices in line conductors only",
      "Correct connection of the supply authority's fuse",
      "Presence of fire barriers",
      "Routing of cables in safe zones",
    ],
    answer: "Correct connection of the supply authority's fuse",
    rationales: {
      "Connection of single pole devices in line conductors only":
        "Single-pole switches and protective devices must interrupt the line conductor rather than neutral. Connections and identification are inspected, with polarity then verified by testing.",
      "Presence of fire barriers":
        "Cable and containment penetrations must not undermine required fire compartmentation. The presence and condition of appropriate sealing or barriers is therefore an inspection item.",
      "Routing of cables in safe zones":
        "Concealed cable routes need to comply with prescribed zones or use an alternative protective measure. Inspection during erection is often the only opportunity to confirm those routes before finishes hide them.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2822/bs7671-all-forms-v31.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2025/106-july-2025/removing-the-distributors-cut-out-fuse/",
    ],
  },
  {
    prompt: "End-to-end resistance checks would be carried out on a:",
    options: [
      "Fused connection unit",
      "Lighting circuit",
      "Radial circuit",
      "Ring final circuit",
    ],
    answer: "Ring final circuit",
    rationales: {
      "Fused connection unit":
        "A fused connection unit is an accessory, not a circuit topology with two ends returning to the distribution board. Its connections are checked as part of the circuit supplying it.",
      "Lighting circuit":
        "A conventional lighting final circuit is radial, so it does not have paired line, neutral and CPC ends to compare at the board. Continuity is verified by a radial-circuit method instead.",
      "Radial circuit":
        "A radial circuit has one route from the protective device to its final point. End-to-end r1, rn and r2 checks are specific to proving that both legs of a ring are continuous.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt: "The purpose of the test button of a residual current device is to check the:",
    options: [
      "Continuity of the earthing conductor",
      "Earth electrode resistance",
      "Earth fault loop impedance",
      "Mechanical operation of the rcd",
    ],
    answer: "Mechanical operation of the rcd",
    rationales: {
      "Continuity of the earthing conductor":
        "The test button creates an internal residual-current imbalance and can operate without measuring the external earthing conductor. Continuity needs a separate low-resistance test.",
      "Earth electrode resistance":
        "Electrode resistance is measured with an earth-electrode tester and an appropriate test arrangement. An RCD's integral button supplies no resistance value.",
      "Earth fault loop impedance":
        "The button proves functional tripping through the device's internal test circuit, not the impedance of the complete fault path. Zs is measured or determined separately where required.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/webinar-questions-and-answers/rcds-selection-types-and-testing-webinar/",
    ],
  },
  {
    prompt:
      "Given the following numbered tests, select the sequence in which these tests should be conducted for a new installation:- 1. functional 2. insulation resistance 3. polarity 4. continuity of final ring conductors 5. continuity of protective conductors:",
    options: ["1,3,4,5,2", "2,3,4,5,1", "4,5,3,2,1", "5,4,2,3,1"],
    answer: "5,4,2,3,1",
    rationales: {
      "1,3,4,5,2":
        "Functional testing is placed first even though the protective conductors and insulation have not been proved. Energisation or operation must wait until the safety-establishing dead tests are satisfactory.",
      "2,3,4,5,1":
        "This applies the insulation test before confirming continuity of protective and ring conductors. It also postpones both continuity checks until after polarity, contrary to the prescribed dead-test sequence.",
      "4,5,3,2,1":
        "Ring continuity should not precede the more fundamental continuity of protective conductors, and insulation resistance should precede polarity in this sequence. Only the final functional-test position is correct here.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "The maximum disconnection time allowed for a TN system, not exceeding 32A, with a nominal voltage of 230V a.c. to earth is:",
    options: ["0.2 seconds", "0.4 seconds", "1 second", "5 seconds"],
    answer: "0.4 seconds",
    rationales: {
      "0.2 seconds":
        "The 0.2 s value applies to the corresponding final-circuit condition in a TT system at 230 V. The TN value in Table 41.1 is 0.4 s.",
      "1 second":
        "One second exceeds the maximum for the 230 V TN final circuit described. The permitted duration of a hazardous touch voltage is limited to 0.4 s in this case.",
      "5 seconds":
        "Five seconds may apply to certain TN distribution circuits or other circuits outside the faster final-circuit rule. It is not allowed for the stated final circuit up to 32 A.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2023/94-march-2023/determining-the-maximum-earth-fault-loop-impedance-for-protective-devices-to-bs-en-60898-bs-en-60947-2/",
      "https://electrical.theiet.org/media/2822/bs7671-all-forms-v31.pdf",
    ],
  },
  {
    prompt: "An earth fault loop impedance test Zs performed on a ring circuit would record:",
    options: [
      "The external loop impedance",
      "The resistance of the line conductor, the resistance of the cpc and the external loop",
      "The resistance of the protective conductor",
      "The resistance of the protective conductor and the line conductor",
    ],
    answer:
      "The resistance of the line conductor, the resistance of the cpc and the external loop",
    rationales: {
      "The external loop impedance":
        "External loop impedance alone is Ze, measured or obtained at the origin. Zs at a point on a final circuit also includes that circuit's line and protective-conductor impedance.",
      "The resistance of the protective conductor":
        "The CPC is only the return portion of the earth-fault path. Fault current must also travel through the circuit line conductor and the supply's external loop.",
      "The resistance of the protective conductor and the line conductor":
        "This describes R1+R2, the internal circuit portion. Zs is the complete loop, so Ze must be added: Zs = Ze + R1 + R2.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/",
    ],
  },
  {
    prompt:
      "A radial socket outlet is supplied by a 2.5mm² / 1.5mm² cable that is 20m long. Given that the Ze of the installation is 0.43Ω and the resistivity of the cable is 7.41 mΩ/m / 12.1 mΩ/m at 20 deg C, what is the calculated Zs taking account of operating temperature:",
    options: ["0.3932 Ω", "0.8283 Ω", "0.8982 Ω", "1.2 Ω"],
    answer: "0.8982 Ω",
    rationales: {
      "0.3932 Ω":
        "This is approximately the 20 °C R1+R2 conductor resistance and omits both the temperature increase and Ze. It is not the complete operating-temperature Zs.",
      "0.8283 Ω":
        "This value does not apply the supplied resistances and temperature factor consistently. The calculation is 0.43 + [(0.00741 + 0.0121) × 20 × 1.2] = 0.8982 Ω.",
      "1.2 Ω":
        "The factor 1.2 applies only to the circuit conductor resistance; it is not itself the answer and it does not multiply Ze. Using it as a final impedance discards the actual cable values.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "When a direct live Ze test is justified and carried out under a controlled procedure, what temporary connection change removes parallel earth paths from the measurement?",
    options: ["Connected", "Disconnected", "Insulated", "Short circuited"],
    answer: "Disconnected",
    rationales: {
      Connected:
        "Leaving the installation earthing conductor connected to the MET allows protective bonding and other parallel paths to lower the reading. It would not isolate the external loop for the direct Ze measurement.",
      Insulated:
        "Insulating the conductor without disconnecting its electrical termination does not remove parallel paths. If disconnected for the test, it must also be safely controlled and promptly reconnected afterward.",
      "Short circuited":
        "Short-circuiting the earthing conductor is not a valid test preparation and could create danger. The goal is to isolate parallel installation earth paths, not bridge conductors together.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "The prospective short-circuit current between line and neutral is measured at 850 A. The maximum balanced prospective short-circuit current level between lines on a three phase system, as a rule of thumb, can be assumed to be approximately:",
    options: ["0.85 kA", "1.5 kA", "17 kA", "8.5 kA"],
    answer: "1.5 kA",
    rationales: {
      "0.85 kA":
        "This merely converts the measured 850 A line-neutral value into kiloamperes. The higher line-to-line voltage must be accounted for when estimating the three-phase fault level.",
      "17 kA":
        "Seventeen kiloamperes is twenty times the measured value and has no basis in the voltage ratio. Multiplying 850 A by approximately √3 gives about 1.47 kA.",
      "8.5 kA":
        "This introduces a factor of ten rather than the line-to-line voltage factor. A 400/230 V system gives a multiplier near 1.73, not 10.",
    },
    sourceUrls: [
      "https://www.megger.com/en-gb/et-online/june-2008/don%E2%80%99t-be-phased-by-phases%21",
      "https://eshop.se.com/in/blog/post/different-types-of-motor-starters-explained.html",
    ],
  },
  {
    prompt:
      "In a fall-of-potential electrode test with the current spike 30 m away, a 62% reading is checked by moving the potential spike by 10% of the electrode-to-current-spike distance each way. How far is each check movement?",
    options: ["1 metre", "15 metres", "3 metres", "6 metres"],
    answer: "3 metres",
    rationales: {
      "1 metre":
        "One metre is only about 3.3 percent of the stated 30 m separation. A 10 percent check movement is three times that distance.",
      "15 metres":
        "Fifteen metres is half the entire test-spike separation, not 10 percent. Moving that far would not provide the requested checks close to the 62 percent position.",
      "6 metres":
        "Six metres is 20 percent of the separation and is twice the specified movement. Ten percent of 30 m is 3 m.",
    },
    sourceUrls: [
      "https://media.fluke.com/d2f87692-a20d-4990-8990-b1060067005a_original%20file.pdf",
      "https://www.fluke.com/en-my/learn/blog/grounding/earth-ground-fall-potential",
    ],
  },
  {
    prompt:
      "Which of the following tests would not normally be required during initial verification of an electrical installation:",
    options: [
      "Continuity of main bonding conductors",
      "Prospective fault current",
      "RCD testing",
      "Verification of voltage drop",
    ],
    answer: "Verification of voltage drop",
    rationales: {
      "Continuity of main bonding conductors":
        "Protective bonding continuity must be verified by resistance measurement so that the bonding path can perform its protective function. It is part of the initial dead-test work where bonding is present.",
      "Prospective fault current":
        "PFC at the origin must be known so equipment has adequate making and breaking capacity. It may be established by measurement, calculation or reliable enquiry rather than necessarily through a separate live test.",
      "RCD testing":
        "Where an RCD provides fault or additional protection, its operation must be verified with the prescribed test and functional operation. Product markings alone do not complete installation verification.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "What is the maximum value of voltage drop for power systems on a 400V supply, supplied directly from a public low voltage system:",
    options: ["11.5 V", "12 V", "20 V", "5.9 V"],
    answer: "20 V",
    rationales: {
      "11.5 V":
        "This is 5 percent of 230 V and uses a line-neutral voltage rather than the stated 400 V supply. Five percent of 400 V is 20 V.",
      "12 V":
        "Twelve volts is 3 percent of 400 V, corresponding to the lighting recommendation. The question asks about power, or other-use, circuits for which the recommendation is 5 percent.",
      "5.9 V":
        "This is only about 1.5 percent of 400 V and does not match either standard public-supply recommendation. It is much lower than the 5 percent maximum used for this calculation.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2023/96-july-2023/how-voltage-drop-can-affect-ev-charging-point-open-pen-detection-devices/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/general-faqs/",
    ],
  },
  {
    prompt:
      "What should determine the calibration and verification interval for an electrical test instrument?",
    options: [
      "The manufacturer's guidance, use, risk, history and documented ongoing accuracy checks",
      "A universal fixed two-year period",
      "Three months for every instrument",
      "Six months regardless of use or condition",
    ],
    answer:
      "The manufacturer's guidance, use, risk, history and documented ongoing accuracy checks",
    rationales: {
      "A universal fixed two-year period":
        "A fixed two-year period ignores how often the instrument is used, the conditions it experiences and its calibration history. Continued accuracy must be demonstrated throughout any chosen interval.",
      "Three months for every instrument":
        "A compulsory three-month interval would be unnecessarily short for many stable, lightly used instruments. More frequent calibration is justified only where use, risk or accuracy checks indicate it.",
      "Six months regardless of use or condition":
        "Six months may suit a particular high-use instrument, but it cannot be applied regardless of evidence. Manufacturer guidance and documented interim checks are needed to set and review the interval.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1696/ongoing-accuracy-of-test-instruments.pdf",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt: "Control gear and interlocks should be operated when carrying out:",
    options: [
      "Continuity testing",
      "Functional testing",
      "Isolation testing",
      "Polarity testing",
    ],
    answer: "Functional testing",
    rationales: {
      "Continuity testing":
        "Continuity measures whether a conductor or protective path is complete and sufficiently low in resistance. It does not establish that a control sequence or interlock performs its intended action.",
      "Isolation testing":
        "Isolation is verified by checking that the isolating device disconnects the required conductors and provides the necessary separation. Operating every control and interlock belongs to functional verification.",
      "Polarity testing":
        "Polarity confirms that line, neutral and protective devices are connected in the intended positions. It cannot prove the operating logic or mechanical response of control gear.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2822/bs7671-all-forms-v31.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "Four circuits have insulation resistances of 20 MΩ, 25 MΩ, 40 MΩ and 50 MΩ. When tested together, what approximate parallel insulation resistance is expected?",
    options: ["0.135 MΩ", "13.5 MΩ", "6.5 MΩ", "7.4 MΩ"],
    answer: "7.4 MΩ",
    rationales: {
      "0.135 MΩ":
        "0.135 is the sum of the four reciprocal values in MΩ⁻¹, not the combined resistance. Inverting that conductance gives 1 / 0.135 = 7.41 MΩ.",
      "13.5 MΩ":
        "This appears to move the decimal point in the reciprocal sum rather than invert it. Parallel resistance must be lower than the smallest branch value of 20 MΩ, but the correct calculation gives 7.4 MΩ.",
      "6.5 MΩ":
        "Although this is below every individual resistance as a parallel result should be, it does not match the reciprocal calculation. The exact total is approximately 7.407 MΩ.",
    },
    sourceUrls: [
      "https://www.megger.com/en-gb/et-online/july-2021/testing-parallel-resistances",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt: "Which of the following should accompany the inspection and test certificate:",
    options: [
      "Copies of minor works certificates",
      "Copies of the inspection and test schedules",
      "Invoices for any remedial work carried out",
      "Two copies of test results",
    ],
    answer: "Copies of the inspection and test schedules",
    rationales: {
      "Copies of minor works certificates":
        "A Minor Works Certificate documents a separate qualifying addition or alteration; it is not a required attachment to every EIC. The EIC's own inspection and test schedules form its essential supporting record.",
      "Invoices for any remedial work carried out":
        "Invoices are commercial records and do not demonstrate the technical inspection or measured results. Certification must stand on the signed declarations and prescribed schedules.",
      "Two copies of test results":
        "The certificate requires a completed schedule of test results, not two identical copies as attachments. Distribution and retention of certificate copies is a separate administrative requirement.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2822/bs7671-all-forms-v31.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "When completing an Inspection Schedule for new installations only, the options for filling in the boxes are:",
    options: ["✓ : N/A", "✓ : X : LIM", "✓ : X : N/A", "✓ : X : N/A : LIM"],
    answer: "✓ : N/A",
    rationales: {
      "✓ : X : LIM":
        "The new-work schedule does not offer X or LIM outcomes. A known unsatisfactory item or agreed limitation is incompatible with signing complete initial verification as satisfactory.",
      "✓ : X : N/A":
        "X is used on condition-report schedules to record an inspected item with an observation, not on the new-installation schedule. New work records only satisfactory items or items that do not apply.",
      "✓ : X : N/A : LIM":
        "This mixes the result vocabulary of periodic condition reporting with initial certification. The current new-installation model form permits only a tick or N/A for each listed item.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2822/bs7671-all-forms-v31.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "If the person ordering installation work is not the owner, who should receive the Electrical Installation Certificate?",
    options: [
      "The person ordering the work",
      "The person ordering the work and the local building authority",
      "The person ordering the work and the owner",
      "The owner and the local building authority",
    ],
    answer: "The person ordering the work and the owner",
    rationales: {
      "The person ordering the work":
        "The original certificate goes to the person ordering the work, but that person must pass it or a full copy to the owner when they are different. The owner also needs the installation's safety record.",
      "The person ordering the work and the local building authority":
        "Building-control notification is a separate process that applies only to defined building work. The local authority is not a routine certificate recipient in place of the installation's user or owner.",
      "The owner and the local building authority":
        "This omits the person who commissioned the work, to whom the original certificate must be issued. Building control does not automatically receive every BS 7671 certificate.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2822/bs7671-all-forms-v31.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "Which certificate is specifically intended for adding a socket-outlet to an existing final circuit when no new circuit is provided?",
    options: [
      "Installation Certificate",
      "Minor Works Certificate",
      "Periodic Test Certificate",
      "Verification and Test Certificate",
    ],
    answer: "Minor Works Certificate",
    rationales: {
      "Installation Certificate":
        "An Electrical Installation Certificate is required when a new circuit is provided and may be chosen for larger groups of alterations. A single socket added to an adequate existing circuit is the limited work for which the minor-works form is intended.",
      "Periodic Test Certificate":
        "Periodic inspection is documented on an Electrical Installation Condition Report and concerns an existing installation's condition. It is not the certificate for newly completed alteration work.",
      "Verification and Test Certificate":
        "BS 7671 does not define a certificate with this title. The recognised form for an addition that does not create a new circuit is the Minor Electrical Installation Works Certificate.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/f0hlqxq1/bs7671_meiwc_a4.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
] as const;
