export const initialVerificationTest6Q46To89 = [
  {
    prompt:
      "How often does current BS 7671 recommend that an RCD is manually operated using its integral test button?",
    options: ["Annually", "Monthly", "Every six months", "Weekly"],
    answer: "Every six months",
    rationales: {
      Annually:
        "A twelve-month interval is longer than the current BS 7671 recommendation and could leave a seized mechanism undiscovered for too long. The general recommendation is to operate the button every six months.",
      Monthly:
        "A manufacturer may prescribe monthly operation for a particular device, but that is not the generic interval now stated in BS 7671. The current general recommendation is six-monthly.",
      Weekly:
        "Weekly operation is not the general BS 7671 recommendation and adds no prescribed verification benefit for an ordinary installation. Any shorter interval would need to come from the equipment manufacturer's instructions or a site-specific maintenance regime.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/consumer-units-and-protective-devices-faqs/",
      "https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf",
    ],
  },
  {
    prompt:
      "What is the minimum acceptable insulation resistance for a 650 V circuit when tested at the applicable 1000 V d.c. test voltage?",
    options: ["0.25 MΩ", "0.5 MΩ", "1.0 MΩ", "10 MΩ"],
    answer: "1.0 MΩ",
    rationales: {
      "0.25 MΩ":
        "A quarter megohm is below the minimum for a circuit whose nominal voltage exceeds 500 V. Such a circuit is normally tested at 1000 V DC and must achieve at least 1 MΩ, after vulnerable control gear has been dealt with safely.",
      "0.5 MΩ":
        "This is the minimum associated with SELV or PELV circuits tested at 250 V DC, not a 650 V circuit. The higher-voltage row of the insulation-resistance table still requires at least 1 MΩ.",
      "10 MΩ":
        "A result of 10 MΩ would be comfortably above the required minimum, but it is not the minimum boundary asked for. The stated circuit must achieve at least 1 MΩ.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/history-of-insulation-resistance-testing/",
    ],
  },
  {
    prompt:
      "What is the purpose of a low-current or no-trip loop-test mode on an RCD-protected circuit?",
    options: [
      "To apply five times the RCD rating",
      "To measure insulation resistance",
      "To reduce the chance of the loop test tripping the RCD",
      "To increase the prospective fault current",
    ],
    answer: "To reduce the chance of the loop test tripping the RCD",
    rationales: {
      "To apply five times the RCD rating":
        "Applying a large residual current is intended to operate an RCD, the opposite of a no-trip loop mode. It would interrupt the supply before a stable loop measurement could be completed.",
      "To measure insulation resistance":
        "Insulation resistance is a separate dead test using a d.c. test voltage. A no-trip loop mode is a live impedance measurement and does not assess insulation.",
      "To increase the prospective fault current":
        "The instrument measures the existing loop characteristic; it does not increase the installation's available fault current. The reduced test disturbance is intended to avoid unwanted RCD operation.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/60893",
      "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/",
    ],
  },
  {
    prompt:
      "A ring final circuit wired in pcv 2.5mm²/1.5mm². Resistances per metre are 7.41mΩ/m and 12.1mΩ/m respectively. What is the expected value of (R1 + R2). The circuit is 16.5 meters long:",
    options: ["0.08 Ω", "0.122 Ω", "0.2 Ω", "0.322 Ω"],
    answer: "0.08 Ω",
    rationales: {
      "0.122 Ω":
        "This does not follow the cross-connected ring relationship using both conductor resistances. The end-to-end sum is about 0.322 Ω and the expected midpoint R1+R2 value is one quarter of that, about 0.0805 Ω.",
      "0.2 Ω":
        "This result neither represents the end-to-end sum nor its quarter-value after the line and CPC are cross-connected. Applying (r1 + r2) / 4 gives approximately 0.08 Ω.",
      "0.322 Ω":
        "This is approximately the combined end-to-end resistance before the ring paths are placed in parallel. The socket reading expected from the cross-connection is that sum divided by four.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
    ],
  },
  {
    prompt:
      "When performing an earth electrode test, the most reliable results would be when the distance between the earth electrode and the current spike is:",
    options: [
      "At least 10 times the maximum dimension of the electrode system",
      "At least 5 times the maximum dimension of the earth electrode spike",
      "Between two and five metres away",
      "Within two metres of each other",
    ],
    answer: "At least 10 times the maximum dimension of the electrode system",
    rationales: {
      "At least 5 times the maximum dimension of the earth electrode spike":
        "Separation is governed by the dimensions and resistance field of the electrode system under test, not the small temporary spike. Referencing spike size can leave the two resistance areas overlapping and distort the result.",
      "Between two and five metres away":
        "A fixed short distance cannot accommodate rods, grids and multi-electrode systems of very different size. The current spike must be remote enough for the measured curve to show that the resistance fields are separated.",
      "Within two metres of each other":
        "Placing the current spike this close is likely to keep it inside the electrode system's resistance field. The resulting fall-of-potential reading can then vary with probe position and fail to represent the full electrode resistance.",
    },
    sourceUrls: [
      "https://www.hioki.com/sites/default/files/manual/2021-06/FT6031B961-01_2.pdf",
      "https://webstore.iec.ch/en/publication/60895",
    ],
  },
  {
    prompt:
      "Compared with one 10 mm² bonding conductor, what happens to resistance when two identical equal-length conductors are connected in parallel?",
    options: ["Remain unchanged", "Double", "Halve", "Increase"],
    answer: "Halve",
    rationales: {
      "Remain unchanged":
        "The second conductor provides another equal current path, so total conductance doubles. The equivalent resistance therefore cannot remain the same.",
      Double:
        "Doubling would describe two equal conductor resistances connected in series. In parallel their conductances add, creating twice the effective cross-sectional area and half the resistance.",
      Increase:
        "Adding an identical parallel current path cannot make the equivalent resistance larger. The relationship 1/R = 1/R1 + 1/R2 gives R/2 for two equal conductors.",
    },
    sourceUrls: ["https://webstore.iec.ch/en/publication/60894"],
  },
  {
    prompt:
      "Before insulation-resistance testing a central-heating circuit, what should be done with vulnerable electronic controls and boiler electronics?",
    options: [
      "Disconnect only the boiler regardless of the other controls",
      "Disconnect or suitably isolate all vulnerable electronic equipment in accordance with the manufacturers' instructions",
      "Ensure the water supply is switched off",
      "Only test between line and neutral",
    ],
    answer:
      "Disconnect or suitably isolate all vulnerable electronic equipment in accordance with the manufacturers' instructions",
    rationales: {
      "Disconnect only the boiler regardless of the other controls":
        "A modern boiler may contain vulnerable electronics, but so may timers, thermostats and zone controls. Protecting only one component can leave other equipment exposed to the test voltage.",
      "Ensure the water supply is switched off":
        "Water isolation has no role in protecting electronic components from an insulation tester's DC voltage. The electrical circuit must instead be isolated and vulnerable connected equipment disconnected or tested by an appropriate alternative method.",
      "Only test between line and neutral":
        "That would omit the essential assessment of insulation between live conductors and the protective conductor. It can also place the test voltage across connected electronic loads unless those loads are first disconnected or otherwise protected.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
    ],
  },
  {
    prompt:
      "It is important to test a new installation in the correct sequence because:",
    options: [
      "Each test relies on the previous to be correct",
      "It is easy to remember",
      "It is more convenient",
      "The sequence is stated in GN3",
    ],
    answer: "Each test relies on the previous to be correct",
    rationales: {
      "It is easy to remember":
        "Memorability is useful for training but is not the safety basis for the sequence. Early inspection and dead tests establish conditions that must be known before later tests and energisation can be justified.",
      "It is more convenient":
        "Convenience cannot determine the order of safety-critical verification. The sequence is arranged so that faults such as a broken protective conductor or poor insulation are found before live measurements are attempted.",
      "The sequence is stated in GN3":
        "Guidance Note 3 documents and explains the sequence, but publication alone is not the engineering reason for following it. The dependency and safety of later tests on satisfactory earlier results is the operative reason.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
    ],
  },
  {
    prompt:
      "The insulation resistance of two circuits is of 40MΩ and 36MΩ respectively. When tested together what would be approximately the total insulation resistance:",
    options: ["1440 MΩ", "19 MΩ", "4 MΩ", "76 MΩ"],
    answer: "19 MΩ",
    rationales: {
      "1440 MΩ":
        "This is merely the product 40 × 36 and omits division by the sum. For two leakage paths in parallel, the equivalent is (40 × 36) / (40 + 36), approximately 18.95 MΩ.",
      "4 MΩ":
        "This subtracts the two individual readings rather than combining their leakage conductances. Parallel insulation resistance must be lower than either individual value, but the reciprocal calculation gives about 19 MΩ, not 4 MΩ.",
      "76 MΩ":
        "This adds the resistances as though the circuits formed a series path. When circuits are tested together their insulation leakages are parallel, so conductances add and the combined resistance is below 36 MΩ.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/history-of-insulation-resistance-testing/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "When performing an insulation test on a 230V domestic ring circuit, what level of test voltage is required:",
    options: ["110V", "230V", "500V", "50V"],
    answer: "500V",
    rationales: {
      "110V":
        "This is below the prescribed DC test voltage for a 230 V low-voltage circuit and may not reveal weak insulation. The normal table value is 500 V DC after connected equipment has been made safe for testing.",
      "230V":
        "The circuit's nominal AC supply voltage is not itself the insulation tester setting. BS 7671 assigns a 500 V DC test to ordinary circuits above 120 V and up to 500 V nominal.",
      "50V":
        "A 50 V test is far below the standard verification level for this circuit and provides inadequate electrical stress. Reduced test voltages are used only where the applicable rules and connected-equipment precautions permit them.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/history-of-insulation-resistance-testing/",
    ],
  },
  {
    prompt: "When may a Minor Electrical Installation Works Certificate be used?",
    options: [
      "A single circuit is added to an existing installation",
      "For an addition or alteration to an existing installation that does not provide a new circuit",
      "The inspecting engineer is not authorised to issue a periodic inspection and test report",
      "The person erecting the installation is also responsible for the design and testing",
    ],
    answer:
      "For an addition or alteration to an existing installation that does not provide a new circuit",
    rationales: {
      "A single circuit is added to an existing installation":
        "Providing any new circuit is expressly outside the scope of the Minor Electrical Installation Works Certificate. That work requires an Electrical Installation Certificate even if only one circuit is added.",
      "The inspecting engineer is not authorised to issue a periodic inspection and test report":
        "Certificate choice is determined by the work performed, not by using a different form to bypass competence or authorisation. A condition report and a minor-works certificate also serve different purposes.",
      "The person erecting the installation is also responsible for the design and testing":
        "One person may take all three responsibilities on either type of installation certificate. Combining those roles does not turn new-circuit work into minor work or determine which form is appropriate.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/f0hlqxq1/bs7671_meiwc_a4.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "What low-resistance benchmark is commonly used in Guidance Note 3 as an expected value for a main protective bonding conductor, subject to its calculated resistance?",
    options: ["0.05 Ω", "0.5 Ω", "0.725 Ω", "1.2 Ω"],
    answer: "0.05 Ω",
    rationales: {
      "0.5 Ω":
        "This is ten times the guidance benchmark for a sound main protective bonding path and its terminations. A reading at this level warrants investigation of conductor length, cross-sectional area and connection resistance rather than routine acceptance.",
      "0.725 Ω":
        "This resembles a temperature-related factor used in other calculations, not a bonding-continuity benchmark. It would indicate a much more resistive path than the expected value for a main protective bond.",
      "1.2 Ω":
        "The figure 1.2 is commonly encountered as a conductor-temperature multiplier, not as an acceptable bonding resistance. Treating it as an ohmic limit confuses a dimensionless correction factor with a continuity result.",
    },
    sourceUrls: [
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
      "https://webstore.iec.ch/en/publication/60894",
    ],
  },
  {
    prompt:
      "After the installation of a new shower circuit the customer should be provided with:",
    options: [
      "A building control notification",
      "A minor works certificate",
      "A periodic inspection report",
      "An electrical installation certificate",
    ],
    answer: "An electrical installation certificate",
    rationales: {
      "A building control notification":
        "Building Regulations notification may be separately required for notifiable domestic work, but it is not the BS 7671 certification of design, construction and verification. It cannot replace the installation certificate for the new circuit.",
      "A minor works certificate":
        "The Minor Electrical Installation Works Certificate explicitly excludes provision of a new circuit. A shower circuit therefore falls within Electrical Installation Certificate scope even if the physical job is small.",
      "A periodic inspection report":
        "An EICR assesses the condition of an existing installation for continued service. It does not certify responsibility for the design, construction, inspection and testing of this newly installed circuit.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
      "https://electrical.theiet.org/media/f0hlqxq1/bs7671_meiwc_a4.pdf",
    ],
  },
  {
    prompt: "The prospective fault current would be recorded on a:",
    options: [
      "Electrical installation certificate",
      "Minor works certificate",
      "Schedule of inspection",
      "Small works certificate",
    ],
    answer: "Electrical installation certificate",
    rationales: {
      "Minor works certificate":
        "The current Minor Works model form records supply earthing and loop-impedance information but has no field for prospective fault current. PFC appears among the supply characteristics on the full installation certificate.",
      "Schedule of inspection":
        "This schedule records visual and verification outcomes against inspection items, not measured supply fault current. Numerical circuit and supply results belong in the certificate and its test schedules.",
      "Small works certificate":
        "BS 7671 does not define a certificate by this name. Informal paperwork cannot replace the prospective-fault-current field on the prescribed full-installation form.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
      "https://electrical.theiet.org/media/f0hlqxq1/bs7671_meiwc_a4.pdf",
    ],
  },
  {
    prompt:
      "A legible diagram, chart or table relating to an installation must be provided to indicate:",
    options: [
      "Any equipment vulnerable to a test",
      "Any modifications made to the installation",
      "The expected life of the installation",
      "The location of all socket outlets",
    ],
    answer: "Any equipment vulnerable to a test",
    rationales: {
      "Any modifications made to the installation":
        "Alterations should be reflected in the installation records, certificates and circuit information, but a generic history of every modification is not the specific test-vulnerability information asked for. The warning must help prevent test damage.",
      "The expected life of the installation":
        "Service life depends on use, maintenance, environment and future deterioration, so it is not fixed by a circuit chart. Documentation instead identifies electrical characteristics and equipment requiring special treatment during testing.",
      "The location of all socket outlets":
        "Circuit charts identify circuits and protective arrangements, but they are not required to be a floor plan of every socket position. The relevant safety information here is which connected equipment may be damaged by a test.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "The term given to the person responsible for an electrical system is the:",
    options: [
      "Company manager",
      "Competent person",
      "Duty holder",
      "Electrician",
    ],
    answer: "Duty holder",
    rationales: {
      "Company manager":
        "A manager may bear the legal responsibility where control actually rests with that role, but the job title alone does not establish it. The guidance instead identifies the person or organisation on whom the relevant legal obligation is imposed.",
      "Competent person":
        "Competence describes whether someone has sufficient knowledge, experience and capability to avoid danger when doing the work. It is not synonymous with holding the overarching legal responsibility for the electrical system.",
      Electrician:
        "This is an occupational description and does not by itself identify who controls the system or owes the relevant legal obligation. A person in that trade can work for, or be appointed by, the responsible party.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsr25.pdf",
      "https://www.legislation.gov.uk/uksi/1989/635/contents/made",
    ],
  },
  {
    prompt:
      "When distributor data is unavailable, what typical maximum Ze value is commonly assumed for TN-S design?",
    options: ["0.35 Ω", "0.8 Ω", "200 Ω", "21 Ω"],
    answer: "0.8 Ω",
    rationales: {
      "0.35 Ω":
        "This is the typical declared maximum associated with a TN-C-S supply, not TN-S. Actual supply characteristics must still be obtained by enquiry, calculation, measurement or inspection rather than assumed from the table.",
      "200 Ω":
        "This is associated with practical concern over the stability of a consumer's TT electrode resistance, not a typical TN-S Ze. It is orders of magnitude above the declared TN-S planning value.",
      "21 Ω":
        "This is the typical external-loop figure quoted for a TT supply, excluding the consumer's own electrode resistance. A TN-S supply uses the much lower metallic distributor earth path.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/",
    ],
  },
  {
    prompt:
      "Under the Electricity at Work Regulations (EAWR), live working is only allowed in limited situations. Which of the following describes the key condition that must apply before live working can be considered acceptable?",
    options: [
      "A member of staff gives permission",
      "It is unreasonable in the circumstances to make the equipment dead",
      "Suitable PPE is worn",
      "Suitable tools are used",
    ],
    answer:
      "It is unreasonable in the circumstances to make the equipment dead",
    rationales: {
      "A member of staff gives permission":
        "Permission cannot displace the three cumulative conditions in Regulation 14. The work must be unreasonable to perform dead, reasonable to perform live, and supported by suitable precautions to prevent injury.",
      "Suitable PPE is worn":
        "PPE may form part of suitable precautions, but wearing it does not establish that live work is necessary or reasonable. Regulation 14 requires every condition to be satisfied, not one precaution in isolation.",
      "Suitable tools are used":
        "Insulated or otherwise suitable tools can reduce risk but do not justify energised work by themselves. The prior decision must also show that making dead is unreasonable and that live work is reasonable in all the circumstances.",
    },
    sourceUrls: [
      "https://www.legislation.gov.uk/uksi/1989/635/regulation/14/made",
      "https://www.hse.gov.uk/pubns/priced/hsr25.pdf",
    ],
  },
  {
    prompt:
      "Overloaded windings on a 3 phase motor may be identified in the first instance by using which sense:",
    options: ["Sight", "Smell", "Taste", "Touch"],
    answer: "Smell",
    rationales: {
      Sight:
        "Visual inspection may later reveal discolouration or damaged insulation, but enclosed windings can overheat without an immediately visible sign. The characteristic odour of heated varnish or insulation may be noticed first.",
      Taste:
        "Taste is never an acceptable electrical inspection technique and would expose the person to contamination and injury. Electrical equipment must be safely isolated before controlled inspection and testing.",
      Touch:
        "Touching a motor to diagnose suspected overheating can cause a burn and does not identify winding overload safely. Temperature should be assessed with suitable instruments after risk controls, not an unprotected hand.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
      "https://www.hse.gov.uk/electricity/maintenance/safety.htm",
    ],
  },
  {
    prompt:
      "Which earthing arrangement uses the general mass of Earth as part of the earth-fault return path?",
    options: ["TN-C", "TN-S", "TNC-S", "TT"],
    answer: "TT",
    rationales: {
      "TN-C":
        "This arrangement uses a combined protective and neutral conductor as the metallic return path to the source. The mass of Earth is not the intended fault-current return conductor.",
      "TN-S":
        "A TN-S system has a separate distributor-provided protective conductor back to the source. Its intended earth-fault path is metallic rather than through the soil between consumer and source electrodes.",
      "TNC-S":
        "TN-C-S uses a combined PEN conductor in the distributor's network and separated PE and neutral conductors in the installation. That metallic PEN route, not the mass of Earth, is the designed return path.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2021/87-september-2021/tt-earthing-considerations/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/webinar-questions-and-answers/protective-earthing-webinar/",
    ],
  },
  {
    prompt:
      "The small rectangular box on the side of a circuit breaker with a number (for example 6000) marked within represents:",
    options: [
      "The current required to activate the device",
      "The current, in amps, expected during a short-circuit fault",
      "The rated short-circuit capacity of the device in Amps",
      "The rated short-circuit capacity of the device in kA",
    ],
    answer: "The rated short-circuit capacity of the device in Amps",
    rationales: {
      "The current required to activate the device":
        "Operating current is conveyed by the rated-current and tripping-characteristic markings, such as B32, not the boxed four-digit value. The boxed figure identifies the device's rated short-circuit breaking capacity.",
      "The current, in amps, expected during a short-circuit fault":
        "Prospective fault current is a characteristic of the supply and circuit and must be determined for the installation. It is not a fixed value printed by the breaker manufacturer on every site.",
      "The rated short-circuit capacity of the device in kA":
        "The physical capacity is 6 kA, but a marking of 6000 expresses that value in amperes. Interpreting the printed number as 6000 kA would overstate the rating by a factor of one thousand.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/66269",
      "https://electrical.theiet.org/wiring-matters/years/2026/109-april-2026/do-spds-require-an-overcurrent-protective-device/",
    ],
  },
  {
    prompt:
      "The prospective fault current at the origin of the installation must be taken into account when:",
    options: [
      "Applying diversity to the installation",
      "Assessing the earthing arrangement",
      "Estimating the external earth fault loop impedance",
      "Selecting the appropriate type of over current protection",
    ],
    answer: "Selecting the appropriate type of over current protection",
    rationales: {
      "Applying diversity to the installation":
        "Diversity estimates the simultaneous demand from connected loads under normal service. Prospective fault current concerns an abnormal low-impedance fault and does not set the diversified design load.",
      "Assessing the earthing arrangement":
        "Earthing type is identified from the supply and protective-conductor arrangement. Although it influences fault paths, merely classifying that arrangement is not the selection check for a device's breaking capacity.",
      "Estimating the external earth fault loop impedance":
        "Ze can be used with voltage to calculate a fault-current estimate, but it is not selected from a known PFC. The question asks where PFC is applied: it must not exceed the protective device's breaking capability.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://webstore.iec.ch/en/publication/66269",
    ],
  },
  {
    prompt:
      "In a room containing a shower, the area above the shower tray is referred to as Zone:",
    options: ["0", "1", "2", "3"],
    answer: "1",
    rationales: {
      "0": "Zone 0 is the interior of the shower basin or tray where water can collect, not the space vertically above it. Equipment there is subject to the most restrictive voltage and ingress-protection conditions.",
      "2": "Zone 2 is the surrounding band extending horizontally beyond the boundary of zone 1. The vertical space directly over the tray is inside the boundary that defines zone 1.",
      "3": "The current zonal system uses zones 0, 1 and 2, with the remaining space described as outside the zones. Zone 3 was removed when the bathroom-zone scheme changed in the 17th Edition.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1450/section-701.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2019/77-september-2019/bs-76712018-frequently-asked-questions/",
    ],
  },
  {
    prompt:
      "Which pair exceeds the recommended voltage-drop limit for a 230 V installation supplied directly from a public low-voltage system?",
    options: [
      "Lighting 3.5V; Sockets 11.7V",
      "Lighting 4.0V; Sockets 5.7V",
      "Lighting 5.9V; Sockets 8.2V",
      "Lighting 6.8V; Sockets 5.3V",
    ],
    answer: "Lighting 3.5V; Sockets 11.7V",
    rationales: {
      "Lighting 4.0V; Sockets 5.7V":
        "Both figures remain within the recommended public-supply limits. Three percent of 230 V is 6.9 V for lighting and five percent is 11.5 V for other uses.",
      "Lighting 5.9V; Sockets 8.2V":
        "The lighting value is below 6.9 V and the socket value is below 11.5 V. Neither figure breaches its respective 3 percent or 5 percent recommendation.",
      "Lighting 6.8V; Sockets 5.3V":
        "The lighting value is close to, but still below, the 6.9 V limit, while the socket value is well below 11.5 V. This pair therefore meets the stated recommendations.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2023/96-july-2023/how-voltage-drop-can-affect-ev-charging-point-open-pen-detection-devices/",
      "https://shop.theiet.org/on-site-guide-bs-7671-2018-a4-2026-9th-edition",
    ],
  },
  {
    prompt:
      "The On-Site Guide gives R1+R2 = 19.51 mΩ/m for 2.5 mm² line and 1.5 mm² cpc conductors. What is R1+R2 for a 25 m circuit at the stated reference temperature?",
    options: ["0.487 Ω", "4.87 Ω", "487 Ω", "780 Ω"],
    answer: "0.487 Ω",
    rationales: {
      "4.87 Ω":
        "This is ten times the calculated resistance and results from a decimal-place error. Multiplying 19.51 mΩ/m by 25 m gives 487.75 mΩ, which is 0.48775 Ω.",
      "487 Ω":
        "This treats the numerical result in milliohms as though it were already in ohms. Dividing 487.75 mΩ by 1000 is required before reporting approximately 0.487 Ω.",
      "780 Ω":
        "This value is incompatible with the stated combined resistance per metre and length. A short copper final circuit cannot acquire hundreds of ohms from 19.51 mΩ/m over only 25 m.",
    },
    sourceUrls: [
      "https://shop.theiet.org/on-site-guide-bs-7671-2018-a4-2026-9th-edition",
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
    ],
  },
  {
    prompt: "Which of the following tests would be carried out 'live':",
    options: [
      "Earth continuity",
      "Insulation resistance",
      "Prospective fault current",
      "Ring circuit continuity",
    ],
    answer: "Prospective fault current",
    rationales: {
      "Earth continuity":
        "Protective-conductor continuity is a dead test using a low-resistance ohmmeter and its own test source. Applying it to an energised circuit would be unsafe and could damage the instrument.",
      "Insulation resistance":
        "The circuit must be isolated because the tester applies a separate high DC voltage between selected conductors. Mains voltage and connected equipment would create danger, distortion and possible damage.",
      "Ring circuit continuity":
        "End-to-end and cross-connected ring measurements are low-resistance dead tests. The conductors must be isolated and disconnected as required so the intended test paths can be established safely.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
    ],
  },
  {
    prompt: "An approved voltage tester can be used to:",
    options: [
      "Carry out continuity tests",
      "Determine the effectiveness of a disconnection device",
      "Establish whether a circuit conductor is live or not",
      "Measure the resistance of an earth continuity conductor",
    ],
    answer: "Establish whether a circuit conductor is live or not",
    rationales: {
      "Carry out continuity tests":
        "A two-pole voltage indicator detects potential difference but is not a calibrated low-resistance ohmmeter. Continuity verification requires an instrument with the specified test current, resolution and resistance indication.",
      "Determine the effectiveness of a disconnection device":
        "Showing voltage before and absence after operation can support safe isolation, but it does not measure an RCD's trip time or an overcurrent device's fault-disconnection performance. Those functions require appropriate tests and calculations.",
      "Measure the resistance of an earth continuity conductor":
        "A voltage indicator provides a voltage state rather than an ohmic measurement. Protective-conductor resistance must be measured dead with a suitable continuity tester after compensating for test leads.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
    ],
  },
  {
    prompt:
      "In a correctly separated TN-C-S installation, which conductor within the consumer's installation is not part of the line-to-earth fault loop?",
    options: [
      "The cable armouring",
      "The earth electrode",
      "The neutral within the consumer's installation",
      "The phase conductor",
    ],
    answer: "The neutral within the consumer's installation",
    rationales: {
      "The cable armouring":
        "Where armour is used as a circuit protective conductor, it carries fault current from the exposed-conductive-part toward the source. Its impedance therefore contributes to the earth-fault loop.",
      "The earth electrode":
        "In a TT arrangement the consumer electrode and the path through Earth are part of the fault loop. Whether an electrode contributes depends on the earthing arrangement, so it cannot be excluded generally.",
      "The phase conductor":
        "Fault current travels from the source along the line conductor to the fault before returning by the protective path. Line-conductor impedance is therefore one of the loop components.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2021/87-september-2021/tt-earthing-considerations/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/webinar-questions-and-answers/protective-earthing-webinar/",
    ],
  },
  {
    prompt:
      "Why does an earth-fault loop impedance tester apply its test current for only a short, controlled interval?",
    options: [
      "To heat the circuit conductors to operating temperature",
      "To limit disturbance and reduce the chance of operating protective devices",
      "To perform an insulation-resistance test at the same time",
      "Because every loop tester is required to use exactly 40 ms",
    ],
    answer:
      "To limit disturbance and reduce the chance of operating protective devices",
    rationales: {
      "To heat the circuit conductors to operating temperature":
        "A loop tester is not intended to heat the installation; doing so would distort the test and add unnecessary risk. Operating-temperature effects are dealt with by calculation or comparison factors.",
      "To perform an insulation-resistance test at the same time":
        "Insulation resistance is a separate dead test using d.c. voltage. A live loop pulse measures source and fault-path impedance and cannot perform both functions simultaneously.",
      "Because every loop tester is required to use exactly 40 ms":
        "Instrument designs and no-trip modes use different waveforms and timings. Standards govern safety and measurement performance but do not impose one universal 40 ms pulse on every tester.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/60893",
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
    ],
  },
  {
    prompt:
      "During an optional half-IΔn diagnostic check on a 100 mA general non-delay RCD, what result is expected?",
    options: [
      "Not operate",
      "Operate within 100ms",
      "Operate within 300ms",
      "Operate within 50ms",
    ],
    answer: "Not operate",
    rationales: {
      "Operate within 100ms":
        "A half-rated-current check is a no-trip check, so no maximum operating time can be assigned to a satisfactory result. Current BS 7671 verification no longer generally requires this legacy half-current test.",
      "Operate within 300ms":
        "The familiar 300 ms criterion applies to a general non-delay RCD tested at its full rated residual current, not at one half. At 0.5 IΔn the intended legacy outcome is that the device remains closed.",
      "Operate within 50ms":
        "This invents a rapid operating criterion at a current below the device's rated residual operating current. A correctly behaving RCD should not be required to trip at the stated half-current test.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/",
      "https://webstore.iec.ch/en/publication/60896",
    ],
  },
  {
    prompt: "What type of test instrument may give a reading of 2.5 kA:",
    options: [
      "A low resistance ohmmeter",
      "A prospective fault current tester",
      "An insulation resistance tester",
      "An rcd tester",
    ],
    answer: "A prospective fault current tester",
    rationales: {
      "A low resistance ohmmeter":
        "This instrument displays resistance, normally in ohms or milliohms, while supplying a controlled continuity-test current. It does not report the available short-circuit current in kiloamperes.",
      "An insulation resistance tester":
        "This applies a high DC test voltage and reports insulation resistance in megohms or gigohms. A 2.5 kA display is unrelated to its measurement function.",
      "An rcd tester":
        "This device injects residual current in milliamperes and typically reports operating time in milliseconds. Kiloamperes would neither be generated nor displayed as its test result.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://webstore.iec.ch/en/publication/60893",
    ],
  },
  {
    prompt:
      "Which low-resistance figure is commonly used in Guidance Note 3 as an expected benchmark for main protective bonding, subject to comparison with the calculated conductor resistance?",
    options: ["0.05 Ω", "0.25 Ω", "0.5 Ω", "0.55 Ω"],
    answer: "0.05 Ω",
    rationales: {
      "0.25 Ω":
        "This is five times the GN3 benchmark and may conceal excessive termination or conductor resistance. A result above the expected very-low value should be investigated rather than accepted against this looser figure.",
      "0.5 Ω":
        "Half an ohm is an order of magnitude above the stated guidance value for a main protective bond. At that level, conductor length, size and every connection need checking.",
      "0.55 Ω":
        "This is not a published bonding-continuity criterion and exceeds the guidance value by a factor of eleven. It may arise from adding unrelated resistance allowances rather than assessing the bond itself.",
    },
    sourceUrls: [
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
      "https://webstore.iec.ch/en/publication/60894",
    ],
  },
  {
    prompt:
      "During a continuity test for the continuity of cpc, GN3 recommends that a temporary link should be made between:",
    options: [
      "Line and cpc at the socket outlet",
      "The earth and the cpc in the consumer unit",
      "The line and cpc in the consumer unit",
      "The neutral and the cpc in the consumer unit",
    ],
    answer: "The line and cpc in the consumer unit",
    rationales: {
      "Line and cpc at the socket outlet":
        "Linking at the remote outlet would leave the instrument connection at the origin and would not support the usual wander-lead method around all points. The temporary origin link creates one known series path to each test point.",
      "The earth and the cpc in the consumer unit":
        "The CPC is itself the circuit's protective earth conductor, so this wording does not identify a second insulated circuit conductor for the series test path. It cannot produce the intended R1+R2 measurement.",
      "The neutral and the cpc in the consumer unit":
        "This would create an Rn+R2 path rather than the specified line-to-CPC continuity check. It would not verify that the line conductor and protective conductor reach the corresponding point with correct polarity.",
    },
    sourceUrls: [
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "A direct Zs reading taken on a motor circuit may be lower than adding Ze to R1 and R2, this is because of:",
    options: [
      "An incorrect reading",
      "High resistance terminals",
      "Magnetic forces",
      "Parallel paths",
    ],
    answer: "Parallel paths",
    rationales: {
      "An incorrect reading":
        "Measurement error is possible but is not the normal physical reason for a repeatable lower direct value. Bonded metalwork and other protective paths can genuinely reduce the impedance seen by the live test.",
      "High resistance terminals":
        "Poor terminals add series impedance and would tend to raise the measured loop value. They cannot explain a sound direct measurement being lower than the sum of separately determined conductor values.",
      "Magnetic forces":
        "Electromagnetic effects may influence AC impedance in some conductors, but they do not create the systematic reduction described here. Additional conductive return paths act in parallel and lower the equivalent impedance.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/",
      "https://webstore.iec.ch/en/publication/60893",
    ],
  },
  {
    prompt:
      "In situations where SELV conductors are separated by just insulation from low voltage conductors the insulation resistance test voltage and minimum insulation reading should be:",
    options: [
      "250V and 0.5MΩ",
      "250V and 1.0MΩ",
      "500V and 0.5MΩ",
      "500V and 1.0MΩ",
    ],
    answer: "500V and 1.0MΩ",
    rationales: {
      "250V and 0.5MΩ":
        "Those are the ordinary values for testing an SELV or PELV circuit in isolation. Where only basic insulation separates it from a low-voltage circuit, the separation must satisfy the more demanding 500 V DC and 1 MΩ criterion.",
      "250V and 1.0MΩ":
        "This combines the higher resistance threshold with the lower SELV test voltage. The insulation separating the voltage bands must be stressed at the test voltage applicable to the low-voltage circuit.",
      "500V and 0.5MΩ":
        "The test voltage is appropriate for the low-voltage side, but the proposed minimum resistance is too low. The applicable 500 V row requires at least 1 MΩ.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/history-of-insulation-resistance-testing/",
    ],
  },
  {
    prompt:
      "For the stated On-Site Guide rule of thumb that converts a copper-conductor continuity reading near 20 °C to its approximate 70 °C value, what multiplier is used?",
    options: ["0.5", "0.725", "0.75", "1.2"],
    answer: "1.2",
    rationales: {
      "0.5":
        "Halving a cold resistance would move in the wrong direction because copper resistance increases as conductor temperature rises. This factor would substantially understate the hot conductor contribution.",
      "0.725":
        "This is not the stated rule-of-thumb multiplier for raising the measured ambient conductor resistance. It would reduce the value and therefore cannot model the increase caused by normal operating temperature.",
      "0.75":
        "Multiplying by three quarters lowers rather than raises the ambient reading. It may be confused with inverse correction factors used in other comparisons, but it does not perform the calculation asked here.",
    },
    sourceUrls: [
      "https://shop.theiet.org/on-site-guide-bs-7671-2018-a4-2026-9th-edition",
      "https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/",
    ],
  },
  {
    prompt:
      "Using the generic initial guidance maxima before a risk-based interval is set, what periods are commonly listed for (a) offices and (b) theatres?",
    options: [
      "1 year and 3 years",
      "3 years and 5 years",
      "5 years and 1 year",
      "5 years and 3 years",
    ],
    answer: "5 years and 3 years",
    rationales: {
      "1 year and 3 years":
        "Three years matches the generic theatre recommendation, but one year is the routine-check interval commonly paired with offices rather than their periodic inspection-and-test maximum. The office figure asked for is five years.",
      "3 years and 5 years":
        "This assigns the shorter period to the wrong category. Ordinary offices receive the longer five-year recommendation, while theatres receive the shorter three-year recommendation because they are open to the public.",
      "5 years and 1 year":
        "Five years is the generic office figure, but one year refers to routine checks in many legacy tables rather than the theatre's maximum periodic testing interval. The theatre recommendation is three years.",
    },
    sourceUrls: [
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "The measured value displayed on a test instrument is 39ms. The test being carried out is:",
    options: [
      "Continuity",
      "Earth fault loop impedance",
      "Insulation resistance",
      "Operation of RCDs",
    ],
    answer: "Operation of RCDs",
    rationales: {
      Continuity:
        "This dead test reports the resistance of a conductive path, normally in ohms or milliohms. A time in milliseconds does not describe whether the path is acceptably unbroken.",
      "Earth fault loop impedance":
        "Loop impedance is also an ohmic quantity, even though the tester applies current for a short duration. The duration of the internal test pulse is not the installation result displayed as Zs.",
      "Insulation resistance":
        "An insulation tester displays resistance, commonly in megohms or gigohms, after applying a DC test voltage. Milliseconds are not the acceptance quantity for that test.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/60896",
      "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/",
    ],
  },
  {
    prompt:
      "What is the minimum protection required for (a) the front of a consumer unit, and (b) the top surface of the consumer unit:",
    options: [
      "IP2X and IP4X",
      "IP4X and IP2X",
      "IPX2 and IPX4",
      "IPX4 and IPX2",
    ],
    answer: "IP2X and IP4X",
    rationales: {
      "IP4X and IP2X":
        "This reverses the minimums. Ordinary accessible faces require finger protection to IP2X, while a readily accessible horizontal top must resist entry by a 1 mm probe and therefore requires IP4X.",
      "IPX2 and IPX4":
        "The X leaves solid-object and hazardous-part access protection unspecified, while the second digit describes water ingress. The enclosure requirement here concerns the first digit, not dripping or splashing water.",
      "IPX4 and IPX2":
        "These are water-protection classifications and they are also assigned in reverse order relative to the stated faces. Neither proves the required protection against a finger or small solid object reaching live parts.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1405/consumer-units.pdf",
      "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf",
    ],
  },
  {
    prompt:
      "If a PIR sensor is not rated to withstand the insulation-test voltage and remains connected, what is the most serious risk of applying the test?",
    options: [
      "Cause the circuit breaker to trip",
      "Give a false reading",
      "Operate the sensor and damage the light",
      "Permanently damage the sensor",
    ],
    answer: "Permanently damage the sensor",
    rationales: {
      "Cause the circuit breaker to trip":
        "Insulation resistance is performed with the mains supply isolated, using the tester's limited DC output. A correctly isolated overcurrent device is not being subjected to normal fault current that would make it trip.",
      "Give a false reading":
        "Connected electronics can create a low or misleading result, but the question asks for the most serious consequence when the sensor cannot withstand the voltage. A false reading is reversible; damaged electronics may not be.",
      "Operate the sensor and damage the light":
        "The dead circuit has no normal 230 V supply for the sensor to switch to the luminaire. The principal risk is applying the insulation tester's DC voltage directly to sensitive sensor electronics.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
    ],
  },
  {
    prompt:
      "Which of the following is not an example of an 'essential test' when carrying out minor works:",
    options: [
      "Earth fault loop impedance",
      "Insulation resistance",
      "Polarity",
      "Prospective fault current",
    ],
    answer: "Prospective fault current",
    rationales: {
      "Earth fault loop impedance":
        "The current Minor Works model form records both the supplying-board loop impedance and the maximum measured circuit Zs. These values help verify that fault protection remains effective after the alteration.",
      "Insulation resistance":
        "The form provides live-to-live and live-to-earth insulation-resistance fields for the altered or extended circuit. The test is therefore part of the relevant minor-work verification rather than the omitted supply characteristic.",
      Polarity:
        "A specific satisfactory connection declaration appears in the Minor Works test-results section. Correct line and neutral placement must be confirmed so single-pole devices and lampholders are connected in the intended conductors.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/f0hlqxq1/bs7671_meiwc_a4.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "Which statement best describes how the accuracy of a modern digital electrical test instrument should be assessed?",
    options: [
      "Assume a fixed 1% of full-scale-deflection limit for every instrument",
      "Judge accuracy only from the number of display digits",
      "Use the manufacturer's specification and ongoing verification checks, including any percentage-of-reading, digit and range terms",
      "Treat any stable displayed value as accurate",
    ],
    answer:
      "Use the manufacturer's specification and ongoing verification checks, including any percentage-of-reading, digit and range terms",
    rationales: {
      "Assume a fixed 1% of full-scale-deflection limit for every instrument":
        "Full-scale deflection is principally analogue terminology, and one fixed percentage cannot describe every digital range or function. The applicable manufacturer and product-standard terms must be used.",
      "Judge accuracy only from the number of display digits":
        "Display resolution shows the smallest displayed increment, not how close the value is to the true quantity. Accuracy also includes specification tolerances and operating influences.",
      "Treat any stable displayed value as accurate":
        "A repeatable display can still be consistently wrong because of drift, damaged leads, range error or calibration. Ongoing checks against known values are needed to establish confidence.",
    },
    sourceUrls: [
      "https://media.fluke.com/ade6b718-4577-4b57-903b-b10600664c67_original%20file.pdf",
      "https://webstore.iec.ch/en/publication/60891",
    ],
  },
  {
    prompt:
      "Where a mortgage company commissions you to perform a formal inspection and test on a domestic property, the certificate you would use would be:",
    options: [
      "A building control notification",
      "A minor works certificate",
      "An electrical installation certificate",
      "An electrical installation condition report",
    ],
    answer: "An electrical installation condition report",
    rationales: {
      "A building control notification":
        "Notification records compliance administration for qualifying building work; it is not a report on the present condition of the whole existing installation. No new work is described in this commission.",
      "A minor works certificate":
        "This certifies a limited addition, alteration or replacement on an existing circuit. It cannot document a formal condition assessment commissioned for a property transaction.",
      "An electrical installation certificate":
        "An EIC certifies new installation work, new circuits or other work within its stated extent. It is not the report used to assess whether an existing installation is satisfactory for continued service.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "Ignoring parallel paths, what theoretical line-to-cpc cross-connected reading is expected near the midpoint of a ring with r1 = 0.9 Ω and r2 = 1.5 Ω?",
    options: ["0.45 Ω", "0.6 Ω", "0.9 Ω", "1.4 Ω"],
    answer: "0.6 Ω",
    rationales: {
      "0.45 Ω":
        "This is half the line end-to-end resistance and ignores the CPC contribution. The intended cross-connected midpoint calculation is (0.9 + 1.5) / 4, giving 0.6 Ω.",
      "0.9 Ω":
        "This simply repeats the end-to-end line reading without accounting for the CPC or parallel ring paths. Cross-connection changes the measured path and requires the quarter-sum calculation.",
      "1.4 Ω":
        "This is not produced by either the end-to-end results or the ring cross-connection formula. It is also greater than the expected parallel-path value and would suggest an abnormal resistance if actually measured.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
    ],
  },
] as const;
