const HSE_EAWR = "https://www.hse.gov.uk/pubns/priced/hsr25.pdf";
const HSE_NOTICES =
  "https://www.hse.gov.uk/foi/internalops/og/ogprocedures/notices/noticetype.htm";
const IEC_DIAGRAMS = "https://webstore.iec.ch/en/publication/4469";
const IET_CURRENT_EDITION =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/ensure-you-are-up-to-date-with-bs-7671/";
const IET_OPERATIONS_AND_MAINTENANCE =
  "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/electrical-maintenance-a-framework-for-good-practice/";
const IET_OVERLOAD_COORDINATION =
  "https://electrical.theiet.org/wiring-matters/years/2024/103-november-2024/mythbuster-11-adapting-for-change/";
const HAGER_SOLLYSTA = "https://hager.com/uk/p/sollysta";
const IET_FLEXIBLE_CONDUIT =
  "https://electrical.theiet.org/wiring-matters/years/2019/77-september-2019/bs-76712018-frequently-asked-questions/";
const CORNING_FIBRE =
  "https://www.corning.com/optical-communications/au/en/home/products/fiber/optical-fiber-advantage.html";
const FIA_FIRE_ALARM =
  "https://www.fia.uk.com/static/e0e17511-18e4-4839-b990bdd20006fa19/Guidance-Document-Fire-alarm-considerations-for-people-with-sensory-sensitivities.pdf";
const ABB_POWER_FACTOR =
  "https://library.e.abb.com/public/4ffab4cf79db502fc12574ef004deed3/1SDC007107G0201.pdf";
const IET_FIRE_STOPPING =
  "https://electrical.theiet.org/wiring-matters/years/2025/106-july-2025/minimizing-the-spread-of-fire-and-heat-transmission/";
const IET_BASIC_AND_FAULT_PROTECTION =
  "https://electrical.theiet.org/wiring-matters/years/2019/75-may-2019/mythbusters-4-double-insulated-cables/";
const IET_BONDING_FAQ =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/";
const IET_PROTECTIVE_BONDING =
  "https://electrical.theiet.org/wiring-matters/years/2019/76-july-2019/protective-bonding-habits/";
const IET_RCD_TESTING =
  "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/";
const IET_RCD_TYPES =
  "https://electrical.theiet.org/wiring-matters/years/2019/77-september-2019/which-rcd-type/";
const ELECTRICAL_SAFETY_FIRST_FUSES =
  "https://www.electricalsafetyfirst.org.uk/safety-advice/home-and-people/house-maintenance/plugs-and-fuses/";
const NATIONAL_GRID =
  "https://www.nationalgrid.com/electricity-transmission/who-we-are/running-our-network/substations-pylons-and-overhead-lines";
const CUMMINS_GENERATORS =
  "https://incal.cummins.com/www/literature/applicationmanuals/t030.pdf";
const GOV_UK_HYDRO =
  "https://www.gov.uk/guidance/harnessing-hydroelectric-power";
const GOV_UK_GREYWATER =
  "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/291728/scho0708bofv-e-e.pdf";
const GOV_UK_EMERGENCY_LIGHTING =
  "https://www.gov.uk/government/publications/fire-safety-risk-assessment-offices-and-shops/fire-safety-risk-assessment-offices-and-shops-accessible";
const SIGNIFY_LIGHTING =
  "https://www.assets.signify.com/is/content/PhilipsConsumer/PDFDownloads/United%20Kingdom/ODLI20150421_001-UPD-en_GB-Lighting_for_BREEAM_in_Offices.pdf";
const SCHNEIDER_IP = "https://www.se.com/be/en/faqs/FAQ000277410/";
const ATKORE_CALBRITE = "https://www.atkore.com/about-us/brands/calbrite";
const ABB_FOOD_AND_BEVERAGE =
  "https://library.e.abb.com/public/c997fa32d20d4563926e388424a8d269/9AKK108470A2216_en_A_Food%20and%20Beverage%20Brochure.pdf";
const IET_ZE_GUIDANCE =
  "https://electrical.theiet.org/media/dydg4v05/wiring-matters-issue-105-may-2025.pdf";
const ESQCR =
  "https://www.legislation.gov.uk/uksi/2002/2665/pdfs/uksi_20022665_en.pdf";
const DOE_SOLAR =
  "https://www.energy.gov/cmei/femp/optimizing-solar-photovoltaic-performance-longevity";
const IET_SOLAR =
  "https://electrical.theiet.org/wiring-matters/years/2026/109-april-2026/solar-photovoltaic-dc-switch-disconnector-selection-and-configuration/";

export const am2InstallationAssessment = [
  {
    prompt:
      "Which statutory regulations impose specific duties to prevent danger from electrical systems and equipment at work?",
    options: [
      "Electricity Safety, Quality and Continuity Regulations 2002",
      "Electricity at Work Regulations 1989",
      "Factories Act",
      "IET Wiring Regulations",
    ],
    answer: "Electricity at Work Regulations 1989",
    rationales: {
      "Electricity Safety, Quality and Continuity Regulations 2002":
        "ESQCR principally regulates the safety, quality and continuity of public electricity supplies; it is not the workplace electrical-duty regime described here.",
      "Factories Act":
        "The Factories Act is broad workplace legislation and is not the current set of specific electrical-system duties applied across workplaces.",
      "IET Wiring Regulations":
        "BS 7671 is an influential non-statutory installation standard. It does not itself impose the statutory workplace duties in this prompt.",
    },
    sourceUrls: [HSE_EAWR, ESQCR],
  },
  {
    prompt:
      "An HSE inspector finds defective emergency lights that breach legal requirements, but the defect does not create a risk of serious personal injury requiring the activity to stop. The contravention is likely to continue unless it is remedied. Which notice is appropriate?",
    options: [
      "Close the site down immediately",
      "Issue a deferred prohibition notice",
      "Issue a prohibition notice",
      "Issue an improvement notice",
    ],
    answer: "Issue an improvement notice",
    rationales: {
      "Close the site down immediately":
        "Immediate site closure is not the statutory response supported by these facts, which expressly exclude the serious-injury risk needed to stop an activity.",
      "Issue a deferred prohibition notice":
        "Deferring a prohibition changes when it takes effect, not its serious-personal-injury test. That test is expressly absent here.",
      "Issue a prohibition notice":
        "A prohibition notice addresses an activity involving a risk of serious personal injury. The stated continuing contravention instead meets the improvement-notice test.",
    },
    sourceUrls: [HSE_NOTICES],
  },
  {
    prompt:
      "Which diagram uses standard symbols to show a circuit's components and electrical connections without representing their physical positions?",
    options: [
      "Block diagram",
      "Circuit diagram",
      "Layout diagram",
      "Site plan",
    ],
    answer: "Circuit diagram",
    rationales: {
      "Block diagram":
        "A block diagram represents functions or subsystems as blocks and their broad relationships, rather than showing each circuit component and connection.",
      "Layout diagram":
        "A layout diagram communicates the physical arrangement or placement of equipment, which the prompt specifically says is not being represented.",
      "Site plan":
        "A site plan locates buildings, routes or equipment across a site; it is not the symbolic component-and-connection representation of a circuit.",
    },
    sourceUrls: [IEC_DIAGRAMS],
  },
  {
    prompt:
      "A location drawing is scaled at 1:50. A cable route measures 85 mm on the drawing. What is its actual length?",
    options: ["17 m", "4.25 m", "42.5 m", "58.9 m"],
    answer: "4.25 m",
    rationales: {
      "17 m":
        "Seventeen metres would represent 340 mm at 1:50. Multiplying the measured 85 mm by 50 gives only 4250 mm.",
      "42.5 m":
        "This value introduces an extra factor of ten: 85 mm multiplied by 50 is 4250 mm, which converts to 4.25 m rather than 42.5 m.",
      "58.9 m":
        "This appears to use an unrelated operation on the scale. A 1:50 drawing requires multiplication by 50, producing 4250 mm or 4.25 m.",
    },
    sourceUrls: [IEC_DIAGRAMS],
  },
  {
    prompt:
      "The preferred method of instructing the client in the correct use and maintenance of electrical equipment used within an installation would be to:",
    options: [
      "Leave relevant manufacturer's literature adjacent to equipment",
      "Provide them with a guided tour and verbal instructions during the handover period",
      "Provide them with an operations and maintenance manual",
      "Provide them with the manufacturer's catalogue",
    ],
    answer: "Provide them with an operations and maintenance manual",
    rationales: {
      "Leave relevant manufacturer's literature adjacent to equipment":
        "Individual leaflets may help with particular products, but they do not assemble the installation-wide operating, servicing and maintenance information the client needs.",
      "Provide them with a guided tour and verbal instructions during the handover period":
        "A tour is useful support, but spoken instructions are easily forgotten and do not provide a durable reference for later users and maintainers.",
      "Provide them with the manufacturer's catalogue":
        "A catalogue is primarily a product-selection or sales document and does not record the installed system's operating and maintenance procedures.",
    },
    sourceUrls: [IET_OPERATIONS_AND_MAINTENANCE],
  },
  {
    prompt:
      "Which set of values satisfies the overload-coordination condition Ib ≤ In ≤ Iz?",
    options: [
      "Ib = 10A In = 15A Iz = 18A",
      "Ib = 15A In = 20A Iz = 18A",
      "Ib = 2.5A In = 10A Iz = 8A",
      "Ib = 20A In = 15A Iz = 15A",
    ],
    answer: "Ib = 10A In = 15A Iz = 18A",
    rationales: {
      "Ib = 15A In = 20A Iz = 18A":
        "Here In is 20 A while Iz is only 18 A, so the protective-device rating exceeds the cable's current-carrying capacity.",
      "Ib = 2.5A In = 10A Iz = 8A":
        "Although the design current is below the device rating, the 10 A rating exceeds the cable capacity of 8 A and breaks In ≤ Iz.",
      "Ib = 20A In = 15A Iz = 15A":
        "The 20 A design current is greater than the 15 A protective-device rating, so this set fails the first relationship Ib ≤ In.",
    },
    sourceUrls: [IET_OVERLOAD_COORDINATION],
  },
  {
    prompt:
      "A heater taking 40A is supplied by a cable 10m long. If the cable has a volt drop of 4mV per ampere per metre, the voltage drop in the cable will be:",
    options: ["0.16 V", "1.6 V", "16 V", "8 V"],
    answer: "1.6 V",
    rationales: {
      "0.16 V":
        "This is ten times too small. The calculation is 4 mV/A/m × 40 A × 10 m = 1600 mV, which equals 1.6 V.",
      "16 V":
        "This is ten times too large because 1600 mV was converted incorrectly. Dividing millivolts by 1000 gives 1.6 V.",
      "8 V":
        "Eight volts does not follow the stated millivolt-drop data. Multiplying all three quantities gives 1600 mV, not 8000 mV.",
    },
    sourceUrls: [IET_CURRENT_EDITION],
  },
  {
    prompt:
      "Which domestic accessory would you expect to have terminals labelled, N, Loop and S/L:",
    options: ["Ceiling Rose", "Consumer Unit", "Junction Box", "Socket"],
    answer: "Ceiling Rose",
    rationales: {
      "Consumer Unit":
        "A consumer unit provides busbar, neutral-bar and protective-device connections; it is not arranged with a lamp's switched-line terminal marked S/L.",
      "Junction Box":
        "A general junction box may join lighting conductors, but its terminals are not normally supplied as the dedicated N, Loop and S/L groups described.",
      Socket:
        "A domestic socket is normally marked line, neutral and earth. It has no permanent-loop and switched-line terminal set for a pendant lamp.",
    },
    sourceUrls: [HAGER_SOLLYSTA],
  },
  {
    prompt:
      "A motor is connected to a starter through flexible metallic conduit that has not been selected or verified for use as a protective conductor. How should protective-conductor continuity be provided?",
    options: [
      "A separate circuit protective conductor",
      "The flexible conduit provided the conduit boxes are scraped and locknuts are used",
      "The flexible conduit without any further modification",
      "The neutral conductor",
    ],
    answer: "A separate circuit protective conductor",
    rationales: {
      "The flexible conduit provided the conduit boxes are scraped and locknuts are used":
        "Good terminations alone do not establish that this flexible conduit has suitable impedance, mechanical reliability and verified continuity as a protective conductor.",
      "The flexible conduit without any further modification":
        "The prompt states that the conduit has not been selected or verified for the protective-conductor function, so relying on it alone leaves continuity unproven.",
      "The neutral conductor":
        "A neutral is a current-carrying live conductor in normal service and must not be substituted for the circuit protective conductor in this installation.",
    },
    sourceUrls: [IET_FLEXIBLE_CONDUIT],
  },
  {
    prompt: "Cables not likely to be affected by electrical interference are:",
    options: ["Coaxial", "Fibre-optic", "STPs", "ScTPs"],
    answer: "Fibre-optic",
    rationales: {
      Coaxial:
        "Coaxial cable uses conductive cores and screening. Its construction resists interference, but sufficiently strong electromagnetic fields can still induce unwanted signals.",
      STPs: "Screened twisted-pair copper reduces electromagnetic pickup through twisting and screening, but it still carries electrical signals and is not immune to interference.",
      ScTPs:
        "Screened copper twisted-pair construction improves noise rejection, yet interference can still couple into its conductive signal path or imperfect screen.",
    },
    sourceUrls: [CORNING_FIBRE],
  },
  {
    prompt:
      "Under BS 5839-1, what is the normal minimum fire-alarm sound level throughout accessible areas where no higher level is required by background noise or sleeping risk?",
    options: ["65 dB", "70 dB", "75 dB", "80 dB"],
    answer: "65 dB",
    rationales: {
      "70 dB":
        "Seventy decibels may be designed for particular acoustic conditions, but it is not the normal general minimum stated for accessible areas.",
      "75 dB":
        "Seventy-five decibels is associated with the higher level commonly needed at a bedhead to wake sleeping occupants, not the qualified general baseline.",
      "80 dB":
        "Eighty decibels exceeds the normal minimum and may be unnecessarily intrusive; higher levels are selected from background noise and occupant risk.",
    },
    sourceUrls: [FIA_FIRE_ALARM],
  },
  {
    prompt:
      "A heater provides 172.5 W of useful heat while drawing 2 A from a 230 V supply. What is its efficiency?",
    options: ["26.60%", "37.50%", "65.70%", "75%"],
    answer: "37.50%",
    rationales: {
      "26.60%":
        "The electrical input is 230 V × 2 A = 460 W. Dividing 172.5 W by 460 W gives 0.375, not 0.266.",
      "65.70%":
        "This percentage is not the useful-output-to-input ratio. The stated powers give 172.5 ÷ 460 × 100 = 37.5%.",
      "75%":
        "Seventy-five percent would require 345 W of useful output from a 460 W input, exactly twice the useful heat stated in the prompt.",
    },
    sourceUrls: [IET_CURRENT_EDITION],
  },
  {
    prompt:
      "The effect of improving the power factor of a fluorescent lamp circuit is that the current taken from the supply is:",
    options: [
      "Greater in value",
      "Lagging the supply voltage by a larger angle",
      "Smaller in value",
      "Unchanged in value",
    ],
    answer: "Smaller in value",
    rationales: {
      "Greater in value":
        "For the same useful power and supply voltage, raising power factor reduces apparent power and supply current rather than increasing them.",
      "Lagging the supply voltage by a larger angle":
        "A larger lag angle means a poorer power factor. Correction reduces the phase displacement and the reactive component of current.",
      "Unchanged in value":
        "Current would remain unchanged only if another relevant quantity changed to offset the correction; at the same real power and voltage it falls.",
    },
    sourceUrls: [ABB_POWER_FACTOR],
  },
  {
    prompt:
      "For fire protection in agricultural or horticultural premises, the rated residual operating current of the RCD protecting a relevant circuit must not exceed:",
    options: ["150 mA", "30 mA", "300 mA", "500 mA"],
    answer: "300 mA",
    rationales: {
      "150 mA":
        "A 150 mA device is below the permitted ceiling and may be selected, but 150 mA is not the maximum rating set by this fire-protection rule.",
      "30 mA":
        "Thirty milliamperes is widely used for additional personal protection. It is more sensitive than required here and is not the stated fire-protection ceiling.",
      "500 mA":
        "A 500 mA rating is above the 300 mA maximum, so it may allow an earth-leakage heating fault to persist at too high a level.",
    },
    sourceUrls: [IET_RCD_TESTING, IET_CURRENT_EDITION],
  },
  {
    prompt:
      "Under BS 7671, a non-flame-propagating conduit, cable-ducting or cable-trunking system providing at least IP33 may omit internal sealing at a fire-resisting penetration only when its internal cross-sectional area does not exceed:",
    options: ["700 mm²", "710 mm²", "720 mm²", "750 mm²"],
    answer: "710 mm²",
    rationales: {
      "700 mm²":
        "A 700 mm² system is within the allowance, but it is not the specified upper boundary. The stated limit extends a further 10 mm².",
      "720 mm²":
        "This is 10 mm² above the stated exception limit, so the qualifying system cannot rely on the no-internal-sealing allowance at this area.",
      "750 mm²":
        "This exceeds the 710 mm² boundary by 40 mm². The non-flame-propagating and IP33 conditions do not enlarge that area limit.",
    },
    sourceUrls: [IET_FIRE_STOPPING],
  },
  {
    prompt:
      "Copper links are used across joints in metallic trunking installations in order to:",
    options: [
      "Increase the strength of the joint",
      "Maintain the electrical continuity of the exposed conductive parts",
      "Provide a temporary fixing before the main bolts are fitted",
      "Reduce corrosion at the joint",
    ],
    answer:
      "Maintain the electrical continuity of the exposed conductive parts",
    rationales: {
      "Increase the strength of the joint":
        "The trunking coupler and its fixings provide mechanical strength. A flexible copper link is fitted to preserve the electrical fault-current path.",
      "Provide a temporary fixing before the main bolts are fitted":
        "The link is a permanent electrical connection, not an erection aid. Mechanical fixings must independently secure the joint before energisation.",
      "Reduce corrosion at the joint":
        "A copper link does not seal the joint against moisture or prevent dissimilar-metal corrosion; its function is dependable electrical continuity.",
    },
    sourceUrls: [IET_FLEXIBLE_CONDUIT, IET_CURRENT_EDITION],
  },
  {
    prompt: "The purpose of segregated trunking is to:",
    options: [
      "Allow accommodation of circuits having different voltage bands",
      "Prevent overheating in vertical trunking runs",
      "Prevent the spread of fire within the trunking",
      "Support the cables installed in the trunking",
    ],
    answer: "Allow accommodation of circuits having different voltage bands",
    rationales: {
      "Prevent overheating in vertical trunking runs":
        "Thermal performance is controlled by cable loading, grouping and enclosure capacity. A segregation barrier does not itself prevent overheating.",
      "Prevent the spread of fire within the trunking":
        "Fire stopping and suitable containment materials restrict fire spread. Ordinary compartment dividers are intended for electrical separation, not fire resistance.",
      "Support the cables installed in the trunking":
        "The trunking body, covers and vertical cable supports carry the cables. Internal segregation is provided to separate otherwise incompatible circuits.",
    },
    sourceUrls: [IET_CURRENT_EDITION],
  },
  {
    prompt:
      "PME (Protective Multiple Earthing) is mainly associated with which system of earthing:",
    options: ["IT system", "TN-C-S systems", "TN-S systems", "TT systems"],
    answer: "TN-C-S systems",
    rationales: {
      "IT system":
        "An IT system has no direct supply-earth connection, or uses a high-impedance one. It does not use the multiply earthed combined PEN conductor characteristic of PME.",
      "TN-S systems":
        "TN-S keeps neutral and protective conductors separate throughout the supply. PME instead distributes a combined PEN conductor before separating it at the service position.",
      "TT systems":
        "A TT installation uses its own local earth electrode for exposed-conductive-parts and does not receive the distributor's PME earth terminal as its earthing arrangement.",
    },
    sourceUrls: [IET_BONDING_FAQ, ESQCR],
  },
  {
    prompt:
      "Which of the following is not itself a provision for basic protection?",
    options: [
      "Automatic disconnection after a fault",
      "Barriers and enclosures",
      "Insulation of live parts",
      "Placing out of reach",
    ],
    answer: "Automatic disconnection after a fault",
    rationales: {
      "Barriers and enclosures":
        "Barriers and enclosures prevent people touching live parts during normal service, so they are a recognized provision for basic protection.",
      "Insulation of live parts":
        "Basic insulation forms the normal-service barrier between a person and a live conductor, making it a direct basic-protection measure.",
      "Placing out of reach":
        "Placing live parts outside the defined arm's-reach zone is a basic-protection provision used under the restricted conditions allowed by BS 7671.",
    },
    sourceUrls: [IET_BASIC_AND_FAULT_PROTECTION],
  },
  {
    prompt:
      "Where supplementary protective bonding between an exposed-conductive-part and an extraneous-conductive-part is required, what is the minimum copper conductor size when it has no mechanical protection, before any larger sizing requirement is considered?",
    options: ["1.5 mm²", "2.5 mm²", "4.0 mm²", "6.0 mm²"],
    answer: "4.0 mm²",
    rationales: {
      "1.5 mm²":
        "An unprotected 1.5 mm² copper bonding conductor is below the mechanical-robustness minimum; that size cannot satisfy the stated installation condition.",
      "2.5 mm²":
        "A 2.5 mm² copper supplementary bond can meet the baseline only when it has mechanical protection, which the prompt explicitly removes.",
      "6.0 mm²":
        "Six square millimetres may be required by a larger connected protective conductor or chosen for robustness, but it is not the unprotected baseline minimum.",
    },
    sourceUrls: [IET_PROTECTIVE_BONDING, IET_BONDING_FAQ],
  },
  {
    prompt:
      "Which BS 7671 term describes protection against electric shock under single-fault conditions, including contact with an exposed-conductive-part made live by a fault?",
    options: [
      "Additional protection",
      "Basic protection",
      "Functional earthing",
      "Fault protection",
    ],
    answer: "Fault protection",
    rationales: {
      "Additional protection":
        "Additional protection supplements basic and fault protection when those measures may fail or users face increased risk; it is not the name for the single-fault layer itself.",
      "Basic protection":
        "Basic protection prevents contact with live parts in normal, fault-free service. The scenario instead starts after a fault energises exposed metal.",
      "Functional earthing":
        "Functional earthing is provided for correct equipment or system operation, rather than as the defined shock-protection measure under a fault condition.",
    },
    sourceUrls: [IET_BASIC_AND_FAULT_PROTECTION],
  },
  {
    prompt:
      "Where a firefighter's switch is to be installed, in order to comply with BS 7671 it must be:",
    options: [
      "No more than 2.75 m from the ground with the off position at the bottom",
      "No more than 2.75 m from the ground with the off position at the top",
      "No more than 3.75 m from the ground with the off position at the bottom",
      "No more than 3.75 m from the ground with the off position at the top",
    ],
    answer:
      "No more than 2.75 m from the ground with the off position at the top",
    rationales: {
      "No more than 2.75 m from the ground with the off position at the bottom":
        "The height is within the permitted maximum, but the operating orientation is reversed: the emergency off position must be at the top.",
      "No more than 3.75 m from the ground with the off position at the bottom":
        "This arrangement is one metre too high and also places off at the bottom, failing both the access and operating-orientation requirements.",
      "No more than 3.75 m from the ground with the off position at the top":
        "Putting off at the top is correct, but a switch as high as 3.75 m exceeds the 2.75 m limit for emergency access.",
    },
    sourceUrls: [IET_CURRENT_EDITION],
  },
  {
    prompt: "Circuit protective conductors are connected between:",
    options: [
      "Exposed and extraneous conductive parts",
      "The main earth terminal and exposed conductive parts",
      "The main earth terminal and extraneous conductive parts",
      "The main earth terminal and the earth rod",
    ],
    answer: "The main earth terminal and exposed conductive parts",
    rationales: {
      "Exposed and extraneous conductive parts":
        "A conductor linking those two kinds of part is supplementary protective bonding, not the circuit protective conductor's connection back to the MET.",
      "The main earth terminal and extraneous conductive parts":
        "That connection describes main protective bonding to incoming metallic services or other extraneous parts, rather than a circuit protective conductor.",
      "The main earth terminal and the earth rod":
        "The conductor from the MET to an installation earth electrode is an earthing conductor. A CPC instead serves exposed parts on a circuit.",
    },
    sourceUrls: [IET_BONDING_FAQ],
  },
  {
    prompt:
      "Which of the following protective devices is used in domestic plug tops:",
    options: ["BS 1362", "BS 3036", "BS 88", "BS EN 60898"],
    answer: "BS 1362",
    rationales: {
      "BS 3036":
        "BS 3036 covers semi-enclosed rewirable fuses formerly used in distribution boards, not the compact cartridge fuse fitted inside a UK plug.",
      "BS 88":
        "BS 88 covers low-voltage cartridge fuse systems used in distribution and industrial applications; it is not the domestic plug-fuse product standard.",
      "BS EN 60898":
        "BS EN 60898 applies to circuit-breakers for household and similar fixed installations. A plug top contains a replaceable cartridge fuse instead.",
    },
    sourceUrls: [ELECTRICAL_SAFETY_FIRST_FUSES],
  },
  {
    prompt: "Fusing factor is the ratio of:",
    options: [
      "Current rating to fusing current",
      "Fault current to fusing current",
      "Fusing current to current rating",
      "Fusing current to fault current",
    ],
    answer: "Fusing current to current rating",
    rationales: {
      "Current rating to fusing current":
        "This reverses the defined ratio. Rated current is the denominator and the current that operates the fuse is the numerator.",
      "Fault current to fusing current":
        "Fault current varies with circuit impedance and is not one of the two quantities defining a fuse's fusing factor.",
      "Fusing current to fault current":
        "Dividing by a particular circuit fault current would describe that installation, not the relationship between a fuse's operating and rated currents.",
    },
    sourceUrls: [ELECTRICAL_SAFETY_FIRST_FUSES],
  },
  {
    prompt: "What is the purpose of the National Grid:",
    options: [
      "Transmission of electricity from power stations to factories",
      "Transmission of electricity from power stations to industrial locations",
      "Transmission of electricity from power stations to substations",
      "Transmission of electricity from sub stations to domestic premises",
    ],
    answer: "Transmission of electricity from power stations to substations",
    rationales: {
      "Transmission of electricity from power stations to factories":
        "Factories normally receive electricity through a distribution network or dedicated connection downstream of transmission substations, not directly from every power station.",
      "Transmission of electricity from power stations to industrial locations":
        "Industrial customers are end users served after network transformation and distribution; the transmission system's general role is not defined by one customer class.",
      "Transmission of electricity from sub stations to domestic premises":
        "Moving electricity from substations to individual homes is the distribution network's role, after the high-voltage transmission stage.",
    },
    sourceUrls: [NATIONAL_GRID],
  },
  {
    prompt:
      "Which one of the following types of power stations does not use a fossil fuel to generate electricity:",
    options: ["Coal fired", "Gas fired", "Nuclear", "Oil fired"],
    answer: "Nuclear",
    rationales: {
      "Coal fired":
        "Coal is a carbon-rich fossil fuel formed over geological time, and a coal-fired station releases its energy by combustion.",
      "Gas fired":
        "Natural gas is a fossil fuel. Gas turbines or boilers generate electricity by burning it even when the plant is highly efficient.",
      "Oil fired":
        "Fuel oil is refined from petroleum, a fossil resource, so an oil-fired station still relies on fossil-fuel combustion.",
    },
    sourceUrls: [NATIONAL_GRID],
  },
  {
    prompt:
      "For an isolated a.c. generator running at constant speed on open circuit, increasing field excitation will cause the:",
    options: [
      "Frequency to increase",
      "The frequency to decrease",
      "The power factor to decrease",
      "The voltage to increase",
    ],
    answer: "The voltage to increase",
    rationales: {
      "Frequency to increase":
        "Generated frequency follows rotational speed and pole count. The prompt fixes speed, so changing excitation does not raise frequency.",
      "The frequency to decrease":
        "A field-current change alters magnetic flux, not the fixed mechanical speed that determines frequency, so frequency does not fall either.",
      "The power factor to decrease":
        "An open-circuit generator supplies essentially no load current, so load power factor is not the controlled outcome; excitation changes its terminal voltage.",
    },
    sourceUrls: [CUMMINS_GENERATORS],
  },
  {
    prompt:
      "Which listed renewable electricity system depends on a usable combination of water flow and head?",
    options: [
      "Grey water recycling",
      "Micro wind",
      "Micro-hydro",
      "Photovoltaic",
    ],
    answer: "Micro-hydro",
    rationales: {
      "Grey water recycling":
        "Grey-water equipment conserves and reuses water; it is not an electricity generator whose available power is calculated from flow and head.",
      "Micro wind":
        "A wind turbine depends on wind-speed distribution, swept area and siting. Water head is not an input to its energy resource.",
      Photovoltaic:
        "Photovoltaic modules convert solar irradiance directly into electricity, so their resource assessment concerns sunlight rather than water head and flow.",
    },
    sourceUrls: [GOV_UK_HYDRO],
  },
  {
    prompt:
      "Which of the following systems require separate pipework, storage and a filtration system for operation:",
    options: [
      "Grey water recycling",
      "Micro wind",
      "Micro-hydro",
      "Photovoltaic",
    ],
    answer: "Grey water recycling",
    rationales: {
      "Micro wind":
        "A micro-wind installation needs a turbine, electrical conversion and support structure; it does not collect used water through storage and filtration pipework.",
      "Micro-hydro":
        "Micro-hydro uses a watercourse, intake, turbine and electrical equipment. A grey-water storage-and-filtration network is not intrinsic to its operation.",
      Photovoltaic:
        "PV generation requires modules and electrical balance-of-system equipment, not tanks, filters and a second set of water-distribution pipes.",
    },
    sourceUrls: [GOV_UK_GREYWATER],
  },
  {
    prompt: "A statutory regulation is:",
    options: [
      "Agreed by BS 7671",
      "Made under statutory authority and legally enforceable",
      "Approved only by an electricity network operator",
      "Issued only as non-statutory guidance by a professional body",
    ],
    answer: "Made under statutory authority and legally enforceable",
    rationales: {
      "Agreed by BS 7671":
        "BS 7671 is a technical standard and cannot agree or enact legislation. Statutory force comes from authority granted by legislation.",
      "Approved only by an electricity network operator":
        "A network operator can set connection requirements, but its approval alone does not create a regulation with general legal force.",
      "Issued only as non-statutory guidance by a professional body":
        "Professional guidance can explain good practice but, by definition, non-statutory guidance is not itself a legally enforceable regulation.",
    },
    sourceUrls: [HSE_EAWR],
  },
  {
    prompt: "If a legal duty is absolute, it:",
    options: [
      "Is not compulsory",
      "Must be met regardless of cost or other considerations",
      "Must be met within an agreed time",
      "Requires a competent electrician to complete",
    ],
    answer: "Must be met regardless of cost or other considerations",
    rationales: {
      "Is not compulsory":
        "An absolute statutory requirement is compulsory; it is the strongest form of duty and is not qualified by reasonable practicability.",
      "Must be met within an agreed time":
        "A compliance deadline may appear in a notice or plan, but it does not define whether the underlying legal duty is absolute.",
      "Requires a competent electrician to complete":
        "Competence may be required for particular work, yet an absolute duty describes the obligation's unqualified nature, not one occupation that must perform it.",
    },
    sourceUrls: [HSE_EAWR],
  },
  {
    prompt: "Which of the following documents is not produced by the client:",
    options: [
      "The order",
      "The specification",
      "The tender",
      "The variation order",
    ],
    answer: "The tender",
    rationales: {
      "The order":
        "The client's purchase or works order authorises the contractor to proceed on the agreed commercial basis, so it originates on the client side.",
      "The specification":
        "The client or its design team issues the specification to define the required work, performance, materials and contractual deliverables.",
      "The variation order":
        "A variation order is issued on the client's behalf to instruct an authorised change to the contracted work, price or programme.",
    },
    sourceUrls: [IET_OPERATIONS_AND_MAINTENANCE],
  },
  {
    prompt:
      "A room measures 4.25 metres long, what would it measure on a drawing scaled at 1:20:",
    options: ["0.2125 cm", "21.25 cm", "212.5 cm", "412 mm"],
    answer: "21.25 cm",
    rationales: {
      "0.2125 cm":
        "This divides the real dimension by an extra factor of 100. Converting 4.25 m to 425 cm before dividing by 20 gives 21.25 cm.",
      "212.5 cm":
        "This is ten times the drawing dimension. A 1:20 representation of 425 cm is 425 ÷ 20 = 21.25 cm.",
      "412 mm":
        "A 412 mm line would represent 8.24 m at this scale. The required line is 212.5 mm, which is 21.25 cm.",
    },
    sourceUrls: [IEC_DIAGRAMS],
  },
  {
    prompt: "The main purpose of an assembly diagram is:",
    options: [
      "Show how the components fit together",
      "To provide different views of the components",
      "To show the sequence of control",
      "Use symbols to represent circuit components and show their connections",
    ],
    answer: "Show how the components fit together",
    rationales: {
      "To provide different views of the components":
        "Orthographic or detail drawings provide multiple views of individual components; an assembly diagram focuses on their relationship in the completed assembly.",
      "To show the sequence of control":
        "A sequence or control diagram explains operational order and logic, not the physical way separate parts are assembled together.",
      "Use symbols to represent circuit components and show their connections":
        "That is the role of a circuit or schematic diagram. An assembly diagram instead communicates the physical fit and arrangement of parts.",
    },
    sourceUrls: [IEC_DIAGRAMS],
  },
  {
    prompt:
      "For a 6 A BS EN 60898 Type B circuit-breaker, what current is used to ensure operation in its instantaneous tripping region?",
    options: ["100 A", "125 A", "30 A", "6 A"],
    answer: "30 A",
    rationales: {
      "100 A":
        "One hundred amperes is about 16.7 times the 6 A rating, far above the 5 In value used to ensure a Type B breaker's instantaneous operation.",
      "125 A":
        "One hundred and twenty-five amperes exceeds 20 In for this device and is unrelated to the upper instantaneous threshold specified for Type B operation.",
      "6 A":
        "Six amperes is only the breaker's nominal current In. It may be carried continuously and is not an instantaneous-trip test current.",
    },
    sourceUrls: [IET_CURRENT_EDITION],
  },
  {
    prompt:
      "In the adiabatic equation S = √(I²t) / k, what does the symbol I represent?",
    options: [
      "Circuit design current",
      "R.m.s. fault current flowing through the protective device",
      "Current rating of the protective device",
      "Normal running current",
    ],
    answer: "R.m.s. fault current flowing through the protective device",
    rationales: {
      "Circuit design current":
        "Design current Ib is used for normal load and cable selection. The adiabatic check instead evaluates heating during the much larger fault current.",
      "Current rating of the protective device":
        "The device rating In is not substituted for I in this equation; actual prospective r.m.s. fault current determines the energy let through before disconnection.",
      "Normal running current":
        "Normal load current does not create the short-duration fault heating assessed by I²t, so it is not the current represented by I.",
    },
    sourceUrls: [IET_CURRENT_EDITION],
  },
  {
    prompt:
      "Which listed condition requires a clearly visible voltage warning notice before access to live parts?",
    options: [
      "Class II equipment",
      "Electric motors having a rating exceeding 0.37 kW",
      "Equipment or an enclosure containing a nominal voltage exceeding 230 V to earth where that voltage is not normally expected",
      "Switchgear which cannot normally be observed by the operator",
    ],
    answer:
      "Equipment or an enclosure containing a nominal voltage exceeding 230 V to earth where that voltage is not normally expected",
    rationales: {
      "Class II equipment":
        "Class II equipment is identified by its double-insulation marking. Its classification alone does not trigger this unexpected-voltage warning requirement.",
      "Electric motors having a rating exceeding 0.37 kW":
        "Motor rating can affect isolation and control provisions, but a 0.37 kW threshold does not establish an unexpected voltage above 230 V to earth.",
      "Switchgear which cannot normally be observed by the operator":
        "Remote or unobserved switchgear can require suitable control and indication, yet that fact alone does not meet the stated high-voltage warning condition.",
    },
    sourceUrls: [IET_CURRENT_EDITION],
  },
  {
    prompt: "Non-metallic conduit must only be used within suitable ranges of:",
    options: [
      "Ambient temperatures",
      "Humidity",
      "Load currents",
      "Supply voltages",
    ],
    answer: "Ambient temperatures",
    rationales: {
      Humidity:
        "Moisture resistance still matters to the complete installation, but ordinary non-metallic conduit is not assigned a conductor-style operating range by relative humidity.",
      "Load currents":
        "Cable conductors and protective devices are selected for load current. The conduit itself is selected for environmental and mechanical limits, including temperature.",
      "Supply voltages":
        "Insulated conductors and accessories carry declared voltage ratings; conduit suitability is not normally expressed as a range of circuit supply voltages.",
    },
    sourceUrls: [ATKORE_CALBRITE, IET_CURRENT_EDITION],
  },
  {
    prompt:
      "Highest frequency data transmission rates can be achieved by the use of:",
    options: ["Coaxial", "Fibre-optic", "STPs", "ScTPs"],
    answer: "Fibre-optic",
    rationales: {
      Coaxial:
        "Coaxial copper can carry high-frequency signals, but conductor loss and electromagnetic constraints give it less bandwidth and reach than suitable optical fibre.",
      STPs: "Screened twisted-pair improves copper noise performance, yet attenuation and crosstalk still limit its usable frequency compared with optical transmission.",
      ScTPs:
        "An overall screen helps this copper pair reject interference, but it does not remove the electrical bandwidth and attenuation limits of metallic conductors.",
    },
    sourceUrls: [CORNING_FIBRE],
  },
  {
    prompt:
      "For emergency escape lighting in premises that may be reoccupied immediately after the normal supply is restored, what minimum rated duration should be used?",
    options: ["30 minutes", "1 hour", "2 hours", "3 hours"],
    answer: "3 hours",
    rationales: {
      "30 minutes":
        "Half an hour is insufficient for the stated immediate-reoccupation arrangement because the batteries may not yet have recharged after the outage.",
      "1 hour":
        "A one-hour system may suit premises evacuated and not promptly reoccupied, but it does not meet this scenario's three-hour minimum duration.",
      "2 hours":
        "Two hours provides more endurance but remains one hour short of the minimum used where occupants may return before full battery recharge.",
    },
    sourceUrls: [GOV_UK_EMERGENCY_LIGHTING],
  },
  {
    prompt: "Direct acting space heaters:",
    options: [
      "Are cost efficient",
      "Give out heat at a steady rate",
      "Operate on the storage principle",
      "Respond immediately to temperature fluctuations",
    ],
    answer: "Respond immediately to temperature fluctuations",
    rationales: {
      "Are cost efficient":
        "Purchase cost and running cost depend on tariff, controls, insulation and use. Direct action alone does not guarantee economic efficiency.",
      "Give out heat at a steady rate":
        "A thermostat normally cycles or modulates direct heat as demand changes, so the output need not remain steady over time.",
      "Operate on the storage principle":
        "Storage heaters charge a thermal mass for later release. Direct-acting heaters deliver heat while energised instead of storing it.",
    },
    sourceUrls: [IET_CURRENT_EDITION],
  },
  {
    prompt:
      "What does luminous efficacy measure for a lamp or lighting system?",
    options: [
      "Power factor",
      "Colour rendering",
      "Similarity to daylight",
      "Luminous flux per watt of input power",
    ],
    answer: "Luminous flux per watt of input power",
    rationales: {
      "Power factor":
        "Power factor compares real and apparent electrical power. It does not state how many lumens the lighting system produces per watt.",
      "Colour rendering":
        "Colour rendering describes how faithfully colours appear under a source, a separate quality metric from light output divided by electrical input.",
      "Similarity to daylight":
        "Daylight similarity concerns spectral appearance or colour characteristics, whereas efficacy is the numerical lumens-per-watt conversion performance.",
    },
    sourceUrls: [SIGNIFY_LIGHTING],
  },
  {
    prompt:
      "Protection against solid foreign objects 1.0 mm in diameter and larger has which IP classification?",
    options: ["IP2X", "IP3X", "IP4X", "IP6X"],
    answer: "IP4X",
    rationales: {
      IP2X: "IP2X protects against access with a finger and solid objects of 12.5 mm and larger, not the much smaller 1.0 mm probe.",
      IP3X: "IP3X uses a 2.5 mm object probe. It therefore does not establish the stated protection against objects down to 1.0 mm.",
      IP6X: "IP6X is the more stringent dust-tight classification. Although it exceeds the requirement, it is not the class defined by the 1.0 mm threshold.",
    },
    sourceUrls: [SCHNEIDER_IP],
  },
  {
    prompt: "The space factor for cables in trunking should not exceed:",
    options: ["30%", "35%", "40%", "45%"],
    answer: "45%",
    rationales: {
      "30%":
        "Thirty percent is a conservative fill and can be used, but it is not the stated maximum space factor for cable occupancy in trunking.",
      "35%":
        "A 35% fill remains below the allowable ceiling. The question asks for the upper boundary rather than an acceptable lower design value.",
      "40%":
        "Forty percent also complies but stops five percentage points short of the recognized maximum trunking space factor of 45%.",
    },
    sourceUrls: [IET_CURRENT_EDITION],
  },
  {
    prompt: "Which of the following are standard sizes of conduit:",
    options: [
      "16mm 20mm 30mm",
      "20mm 25mm 16mm",
      "25mm 22mm 16mm",
      "30mm 25mm 20mm",
    ],
    answer: "20mm 25mm 16mm",
    rationales: {
      "16mm 20mm 30mm":
        "Sixteen and twenty millimetres are standard sizes, but 30 mm is not part of the standard sequence in the listed conduit range.",
      "25mm 22mm 16mm":
        "Twenty-five and sixteen millimetres are standard, but 22 mm is a plumbing-style dimension rather than the conduit size required here.",
      "30mm 25mm 20mm":
        "This set includes non-standard 30 mm conduit and omits the standard 16 mm size, so the complete group is not valid.",
    },
    sourceUrls: [ATKORE_CALBRITE],
  },
  {
    prompt:
      "During installation, what is the principal purpose of inspection-type conduit fittings such as inspection elbows and tees?",
    options: [
      "Provide routine access to energized conductors after completion",
      "Facilitate drawing in and inspection of conductors",
      "Strengthen the conduit",
      "Support the conduit",
    ],
    answer: "Facilitate drawing in and inspection of conductors",
    rationales: {
      "Provide routine access to energized conductors after completion":
        "Covers must not be treated as routine live-access points. Safe isolation is required before opening a fitting to inspect or work on conductors.",
      "Strengthen the conduit":
        "An inspection elbow or tee changes direction while providing a removable cover; it is not installed as structural reinforcement for the raceway.",
      "Support the conduit":
        "Saddles, clips and structural fixings support conduit. The removable access in an inspection fitting is intended to aid conductor installation and inspection.",
    },
    sourceUrls: [ATKORE_CALBRITE, IET_CURRENT_EDITION],
  },
  {
    prompt:
      "In a dairy washdown area where the wiring system needs high mechanical strength and resistance to moisture, cleaning chemicals and corrosion, which listed conduit material is most suitable?",
    options: [
      "Black-enamelled steel conduit",
      "PVC conduit",
      "Stainless-steel conduit",
      "Twin-and-earth cable",
    ],
    answer: "Stainless-steel conduit",
    rationales: {
      "Black-enamelled steel conduit":
        "Enamel damage at threads, impacts or fittings can expose carbon steel to repeated wet and chemical cleaning, allowing corrosion in this harsh area.",
      "PVC conduit":
        "PVC resists moisture and many chemicals, but it does not provide the same high impact, crushing and temperature robustness requested alongside corrosion resistance.",
      "Twin-and-earth cable":
        "Twin-and-earth is a cable rather than conduit and is not intended as an exposed, high-strength washdown wiring system in a hygiene-critical dairy area.",
    },
    sourceUrls: [ABB_FOOD_AND_BEVERAGE, ATKORE_CALBRITE],
  },
  {
    prompt:
      "At a distributor's service cut-out, how is the earthed neutral normally connected at the intake?",
    options: ["Circuit breaker", "Fuse", "Single-pole switch", "Solid link"],
    answer: "Solid link",
    rationales: {
      "Circuit breaker":
        "The distributor's cut-out protective device is placed in the line conductor; the earthed neutral is not normally routed through a separate circuit-breaker pole there.",
      Fuse: "Fusing the neutral alone could disconnect it while leaving the line energised and create dangerous voltage displacement, so the cut-out fuse is in the line conductor.",
      "Single-pole switch":
        "A single-pole neutral switch could leave the installation live but without its neutral reference. The service neutral is therefore not normally arranged this way.",
    },
    sourceUrls: [IET_CURRENT_EDITION, ESQCR],
  },
  {
    prompt: "The main purpose of protective equipotential bonding is to:",
    options: [
      "Improve the earth loop impedance",
      "Increase the impedance of the earth return",
      "Limit dangerous potential differences between simultaneously accessible conductive parts",
      "Prevent earth faults",
    ],
    answer:
      "Limit dangerous potential differences between simultaneously accessible conductive parts",
    rationales: {
      "Improve the earth loop impedance":
        "Bonding may create parallel conductive paths, but reducing a measured loop impedance is not its defining safety purpose or a design target for the bond.",
      "Increase the impedance of the earth return":
        "Protective conductors are intended to provide effective low-impedance fault paths. Deliberately increasing return impedance would hinder automatic disconnection.",
      "Prevent earth faults":
        "Bonding does not stop insulation from failing or a live conductor touching metal; it limits touch-voltage differences if hazardous voltages arise.",
    },
    sourceUrls: [IET_PROTECTIVE_BONDING, IET_BONDING_FAQ],
  },
  {
    prompt:
      "Where a gas meter is inside the premises and main protective bonding is required, where should the connection normally be made, where practicable and before any branch pipework?",
    options: [
      "Within 300 mm of the meter inlet",
      "Within 300 mm of the meter outlet on the consumer's hard metal pipework",
      "Within 600 mm of the meter outlet on the consumer's hard metal pipework",
      "Within 600 mm of the meter inlet on the distributor's side",
    ],
    answer:
      "Within 600 mm of the meter outlet on the consumer's hard metal pipework",
    rationales: {
      "Within 300 mm of the meter inlet":
        "The inlet is on the supply side of an internal meter. Main bonding is normally attached to the consumer's hard metal outlet pipework instead.",
      "Within 300 mm of the meter outlet on the consumer's hard metal pipework":
        "This position would be suitably close and may be practicable, but 300 mm is not the stated maximum distance requested; the guidance allows up to 600 mm.",
      "Within 600 mm of the meter inlet on the distributor's side":
        "The distance is correct but the side is not: the clamp belongs on accessible consumer hard metal pipework after the meter outlet union.",
    },
    sourceUrls: [IET_BONDING_FAQ, IET_PROTECTIVE_BONDING],
  },
  {
    prompt:
      "When distributor data is unavailable, what typical maximum external earth fault loop impedance Ze is commonly used for design of a public TN-S supply up to 100 A?",
    options: ["0.37 Ω", "0.8 Ω", "200 Ω", "21 Ω"],
    answer: "0.8 Ω",
    rationales: {
      "0.37 Ω":
        "The 0.37 Ω figure is the commonly quoted typical design value for a public TN-C-S supply, not the stated TN-S arrangement.",
      "200 Ω":
        "Two hundred ohms is associated with the practical upper region discussed for TT electrode resistance and RCD reliability, not a distributor's TN-S Ze.",
      "21 Ω":
        "Twenty-one ohms is far above the typical TN-S external loop value and would not support the expected high fault current for conventional overcurrent disconnection.",
    },
    sourceUrls: [IET_ZE_GUIDANCE],
  },
  {
    prompt:
      "BS 7671 allows a number of devices to be used as isolators. One device which can NOT be used for this purpose is:",
    options: [
      "Double pole switch",
      "Firefighters switch",
      "Semi-conductor device",
      "TP+N switch disconnector",
    ],
    answer: "Semi-conductor device",
    rationales: {
      "Double pole switch":
        "A suitably rated double-pole mechanical switch can disconnect line and neutral with the contact separation and position indication required for isolation.",
      "Firefighters switch":
        "A compliant firefighters switch is a manually operated mechanical switching device intended to isolate its designated high-voltage lighting installation in an emergency.",
      "TP+N switch disconnector":
        "A correctly rated TP+N switch-disconnector is specifically constructed to disconnect the live conductors of a three-phase and neutral circuit for isolation.",
    },
    sourceUrls: [IET_CURRENT_EDITION],
  },
  {
    prompt:
      "Which RCD designation describes a device with no intentional time delay?",
    options: [
      "Type A waveform-sensitive",
      "Type S selective time-delayed",
      "General non-delay",
      "Type B waveform-sensitive",
    ],
    answer: "General non-delay",
    rationales: {
      "Type A waveform-sensitive":
        "Type A defines the residual-current waveforms the RCD can detect, including pulsating d.c.; it does not define a no-delay timing category.",
      "Type S selective time-delayed":
        "Type S intentionally delays operation to coordinate with downstream RCDs, making it the direct opposite of a general non-delay device.",
      "Type B waveform-sensitive":
        "Type B extends waveform detection to smooth d.c. and higher-frequency components. That classification is independent of intentional time delay.",
    },
    sourceUrls: [IET_RCD_TYPES, IET_RCD_TESTING],
  },
  {
    prompt:
      "Which of the following circuit breakers would be most suitable for use with circuits feeding large transformers:",
    options: ["Type A", "Type B", "Type C", "Type D"],
    answer: "Type D",
    rationales: {
      "Type A":
        "Type A is not the BS EN 60898 high-inrush time-current designation used for this selection; the recognized curves here include B, C and D.",
      "Type B":
        "A Type B breaker has the most sensitive instantaneous range of the listed standard curves and is prone to unwanted tripping on large transformer inrush.",
      "Type C":
        "Type C tolerates moderate starting current, but a large transformer's high magnetising inrush is the application for the less sensitive Type D instantaneous curve.",
    },
    sourceUrls: [IET_CURRENT_EDITION],
  },
  {
    prompt:
      "Which is a common primary distribution voltage used to supply a private transformer at a commercial or industrial site?",
    options: ["11kV", "132kV", "33kV", "400kV"],
    answer: "11kV",
    rationales: {
      "132kV":
        "A 132 kV connection belongs to the higher-voltage transmission or sub-transmission network and is not the common primary supply for an ordinary private site transformer.",
      "33kV":
        "Some very large sites use 33 kV, but it is a higher distribution tier and is less typical than 11 kV for the commercial or industrial arrangement described.",
      "400kV":
        "Four hundred kilovolts is a national transmission voltage requiring grid-scale substations, not a normal incoming voltage to a private customer transformer.",
    },
    sourceUrls: [NATIONAL_GRID],
  },
  {
    prompt:
      "A typical insulator for an overhead line transmission system would be:",
    options: [
      "Glass or porcelain",
      "Mica or butyl",
      "Rubber or pvc",
      "Wood or plastic",
    ],
    answer: "Glass or porcelain",
    rationales: {
      "Mica or butyl":
        "Mica is normally used within electrical equipment and butyl as an elastomer or sealant; this pair is not the standard weather-exposed line-insulator construction.",
      "Rubber or pvc":
        "Generic rubber and PVC lack the complete rigid, weathering and creepage performance implied here; engineered composite line insulators use purpose-designed materials and fittings.",
      "Wood or plastic":
        "Wood absorbs moisture and generic plastic is not a sufficient line-insulator specification. Glass and porcelain are established high-dielectric outdoor materials.",
    },
    sourceUrls: [NATIONAL_GRID],
  },
  {
    prompt:
      "Under ESQCR, by how much may a low-voltage supply at the declared frequency vary from its declared voltage?",
    options: [
      "+ 10% and - 6%",
      "+ 10% and – 10%",
      "+ 6% and – 10 %",
      "+ 6% and – 6%",
    ],
    answer: "+ 10% and - 6%",
    rationales: {
      "+ 10% and – 10%":
        "The positive allowance is right, but the negative tolerance is too wide: ESQCR permits a fall of 6%, not 10%, for this low-voltage supply.",
      "+ 6% and – 10 %":
        "This effectively reverses and alters the statutory asymmetry. The permitted variation is ten percent above and six percent below declared voltage.",
      "+ 6% and – 6%":
        "The negative limit is correct, but the positive allowance is understated. The supply may rise by up to 10% under the stated rule.",
    },
    sourceUrls: [ESQCR],
  },
  {
    prompt:
      "Which listed energy-conversion device normally generates electricity without moving mechanical parts at the generating module?",
    options: [
      "Grey-water recycling equipment",
      "Micro-wind turbine",
      "Micro-hydro turbine",
      "Photovoltaic module",
    ],
    answer: "Photovoltaic module",
    rationales: {
      "Grey-water recycling equipment":
        "Grey-water equipment is primarily a water-conservation system and normally consumes pump and control energy rather than acting as an electricity-generating module.",
      "Micro-wind turbine":
        "A micro-wind generator relies on rotating blades, a shaft and generator components, so mechanical movement is fundamental to its conversion process.",
      "Micro-hydro turbine":
        "Micro-hydro generation converts water energy through a rotating turbine and generator; its generating unit therefore contains moving mechanical parts.",
    },
    sourceUrls: [DOE_SOLAR, GOV_UK_HYDRO],
  },
  {
    prompt:
      "What is the term for a number of Solar PV modules connected in series:",
    options: ["A Chain", "A Module", "A Set", "A String"],
    answer: "A String",
    rationales: {
      "A Chain":
        "Chain is an informal description and not the standard PV term for modules wired in series as one electrical circuit.",
      "A Module":
        "A module is one packaged PV generating unit. Connecting several modules in series creates a larger circuit rather than another single module.",
      "A Set":
        "Set is too general and does not specify the series electrical connection; the defined PV term for that series-connected group is string.",
    },
    sourceUrls: [IET_SOLAR, DOE_SOLAR],
  },
] as const;
