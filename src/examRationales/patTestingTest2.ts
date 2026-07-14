const HSE_MAINTAINING_EQUIPMENT =
  "https://www.hse.gov.uk/pubns/priced/hsg107.pdf";
const HSE_PAT_FAQ =
  "https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm";
const HSE_ELECTRIC_EQUIPMENT =
  "https://www.hse.gov.uk/electricity/electricequip.htm";
const HSE_EAWR = "https://www.hse.gov.uk/pubns/priced/hsr25.pdf";
const HSE_ELECTRICAL_STANDARDS =
  "https://www.hse.gov.uk/electricity/standards.htm";
const IET_FIFTH_EDITION =
  "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/";
const IET_RISK_BASED_INTERVALS =
  "https://electrical.theiet.org/wiring-matters/years/2021/84-march-2021/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/";
const IET_HIGH_PROTECTIVE_CURRENTS =
  "https://electrical.theiet.org/wiring-matters/years/2022/93-november-2022/high-protective-conductor-currents-in-electrical-installations/";
const IET_EARTH_LEAKAGE =
  "https://electrical.theiet.org/wiring-matters/years/2021/85-may-2021/back-to-the-forum-earth-leakage/";
const IET_PAT_GUIDANCE_2005 =
  "https://electrical.theiet.org/media/1063/2005_16_autumn_wiring_matters__complete_no_adverts.pdf?type=pdf";
const IET_EXTENSION_LEADS =
  "https://electrical.theiet.org/media/1034/2006_21_winter_wiring_matters__complete_no_adverts.pdf";
const IET_EARTH_CONTINUITY =
  "https://electrical.theiet.org/media/1658/in-service-inspection-and-testing-of-electrical-equipment-the-earth-continuity-test.pdf";
const FLUKE_PAT_TESTER =
  "https://www.fluke.com/en-id/product/electrical-testing/portable-appliance-testers/fluke-6000-series";
const ELECTRICAL_SAFETY_FIRST_PLUGS =
  "https://www.electricalsafetyfirst.org.uk/safety-advice/home-and-people/house-maintenance/plugs-and-fuses/";
const GOV_UK_PLUG_PIN_SLEEVING =
  "https://www.gov.uk/product-safety-alerts-reports-recalls/product-safety-report-5m-rgb-led-strip-light-2604-0108";
const SEAWARD_IEC_LEADS =
  "https://www.seaward.com/de/support/pat-testing/faqs/48/pdf/";
const SEAWARD_MICROWAVES =
  "https://www.seaward.com/gb/support/pat-testing/faqs/71051-how-do-i-pat-test-a-microwave/";
const HSE_MICROWAVE_TESTING = "https://www.hse.gov.uk/pubns/eis35.pdf";
const LENOVO_HIGH_TOUCH_CURRENT =
  "https://pubs.lenovo.com/sr860-v4/install_power_supply";
const DONCASTER_CABLE_RATINGS =
  "https://www.doncastercables.com/technical-help/9";
const NIST_AMPERE = "https://www.nist.gov/pml/owm/si-units-electric-current";
const IEC_MICROWAVE_STANDARD = "https://webstore.iec.ch/en/publication/96914";

export const patTestingTest2 = [
  {
    prompt:
      "Where a supply lead is tested separately, which one of the following is not applicable:",
    options: [
      "Earth continuity for a two core supply cord",
      "Inspection and earth continuity test for a 3 core supply cord",
      "Insulation and polarity checks",
      "Visual inspection",
    ],
    answer: "Earth continuity for a two core supply cord",
    rationales: {
      "Inspection and earth continuity test for a 3 core supply cord":
        "A three-core cord includes a protective conductor, so inspecting it and verifying earth continuity are applicable safety checks rather than the requested exception.",
      "Insulation and polarity checks":
        "Insulation and polarity remain relevant to a detachable supply lead. They can reveal damaged insulation or line and neutral conductors connected to the wrong terminals.",
      "Visual inspection":
        "Every cord set needs a visual inspection for damage to its plug, connector, sheath and strain relief, irrespective of whether it contains two or three cores.",
    },
    sourceUrls: [SEAWARD_IEC_LEADS, HSE_MAINTAINING_EQUIPMENT],
  },
  {
    prompt:
      "A continuous metal enclosure surrounding Class I equipment, would be classified as:",
    options: [
      "Enclosed",
      "Insulation encased",
      "Metal cased",
      "Metal insulated",
    ],
    answer: "Metal cased",
    rationales: {
      Enclosed:
        "“Enclosed” merely says that something has a surrounding case; it does not identify the case material or the Class I protective-earth arrangement described here.",
      "Insulation encased":
        "An insulation-encased item has an insulating outer enclosure. That description conflicts with the continuous metal enclosure stated in the question.",
      "Metal insulated":
        "“Metal insulated” is not the construction descriptor for a continuous metallic outer case. The relevant Class I case is metal and relies on protective earthing.",
    },
    sourceUrls: [HSE_MAINTAINING_EQUIPMENT],
  },
  {
    prompt:
      "If a standard 13 A plug became overheated the probability is that:",
    options: [
      "An incorrectly rated cartridge fuse is being used",
      "Reversed polarity of the phase and earth conductors has occurred",
      "There are poor earthing connections",
      "There is a loose connection at one of the terminals",
    ],
    answer: "There is a loose connection at one of the terminals",
    rationales: {
      "An incorrectly rated cartridge fuse is being used":
        "An unsuitable fuse is a serious defect, but it does not by itself explain local heating at an otherwise normally loaded plug terminal as directly as a resistive loose joint.",
      "Reversed polarity of the phase and earth conductors has occurred":
        "A line-to-earth reversal would create an immediate severe shock hazard and likely operate protection; it is not the usual cause of progressive plug-terminal overheating.",
      "There are poor earthing connections":
        "A poor earth connection compromises fault protection, but the protective conductor normally carries no load current. It is therefore not the usual heat source during normal operation.",
    },
    sourceUrls: [HSE_ELECTRIC_EQUIPMENT, ELECTRICAL_SAFETY_FIRST_PLUGS],
  },
  {
    prompt:
      "The length of a 1.25 mm² extension lead fitted with a standard 13 A plug should not be greater than:",
    options: ["10m", "12m", "15m", "20m"],
    answer: "12m",
    rationales: {
      "10m":
        "Ten metres is below the cited 12 m recommendation for 1.25 mm² conductors. It can be a safe shorter length, but it is not the maximum asked for.",
      "15m":
        "Fifteen metres is the cited recommendation for the larger 1.5 mm² conductor, not for a 1.25 mm² extension lead with the same plug arrangement.",
      "20m":
        "Twenty metres exceeds the cited 1.25 mm² recommendation by 8 m, increasing conductor resistance, voltage drop and the resistance of the protective path.",
    },
    sourceUrls: [IET_EXTENSION_LEADS],
  },
  {
    prompt:
      "Ohmmeters which are used to measure the resistance of an earth continuity conductor, must produce a short-circuit current between:",
    options: [
      "10mA and 100mA",
      "20mA and 200mA",
      "20mA and 500mA",
      "2mA and 10mA",
    ],
    answer: "20mA and 200mA",
    rationales: {
      "10mA and 100mA":
        "This range starts below the cited lower boundary and stops at only half its upper boundary, so it does not describe the specified low-current continuity range.",
      "20mA and 500mA":
        "Although the lower endpoint is correct, 500 mA is two and a half times the stated 200 mA upper endpoint for this low-current test method.",
      "2mA and 10mA":
        "Two to ten milliamperes is below the stated range and is not the low-resistance continuity-test current specified by the cited in-service guidance.",
    },
    sourceUrls: [IET_EARTH_CONTINUITY, FLUKE_PAT_TESTER],
  },
  {
    prompt: "The length of a 1.5 mm² extension lead should not exceed:",
    options: ["12m", "14m", "15m", "22m"],
    answer: "15m",
    rationales: {
      "12m":
        "Twelve metres is the cited maximum for the smaller 1.25 mm² conductor. It is a conservative length for 1.5 mm², but not the requested maximum.",
      "14m":
        "Fourteen metres remains below the cited 15 m boundary. The question asks for the maximum recommendation, rather than merely a shorter usable length.",
      "22m":
        "Twenty-two metres is 7 m beyond the cited recommendation for 1.5 mm² conductors and therefore needs additional design and protective considerations.",
    },
    sourceUrls: [IET_EXTENSION_LEADS],
  },
  {
    prompt:
      "Under current BS 7671, which listed connection method is acceptable for an individual item whose protective-conductor current exceeds 10 mA?",
    options: [
      "Permanent wiring, or a BS EN 60309-2 connection with the required protective-conductor arrangement",
      "Have a label indicating the value of leakage current",
      "Have protective conductors of not less than 0.5 mm² c.s.a",
      "Only be used in offices",
    ],
    answer:
      "Permanent wiring, or a BS EN 60309-2 connection with the required protective-conductor arrangement",
    rationales: {
      "Have a label indicating the value of leakage current":
        "A label can warn about a hazard, but it cannot provide the mechanically reliable protective path required for an item whose normal protective-conductor current exceeds 10 mA.",
      "Have protective conductors of not less than 0.5 mm² c.s.a":
        "A generic 0.5 mm² conductor does not satisfy the current high-protective-conductor-current connection measures, which specify more robust or duplicated arrangements.",
      "Only be used in offices":
        "The requirement is governed by protective-conductor current and the connection design, not by describing the premises as an office or another business type.",
    },
    sourceUrls: [IET_HIGH_PROTECTIVE_CURRENTS],
  },
  {
    prompt:
      "Generally speaking, the safety and correct functioning of portable appliances and equipment depends on the integrity of the fixed installation. Requirements for the inspection and testing of fixed installations are given in:",
    options: ["BS 2001", "BS 2754", "BS 7671", "BS EN 60898"],
    answer: "BS 7671",
    rationales: {
      "BS 2001":
        "BS 2001 is not the UK requirements standard governing verification of low-voltage electrical installations, so it is not the fixed-installation reference sought here.",
      "BS 2754":
        "BS 2754 is not the current wiring requirements for inspecting and testing the supply installation on which Class I equipment may depend.",
      "BS EN 60898":
        "BS EN 60898 is a product standard for circuit-breakers. It does not set the overall inspection and testing requirements for a fixed electrical installation.",
    },
    sourceUrls: [HSE_MAINTAINING_EQUIPMENT, HSE_ELECTRICAL_STANDARDS],
  },
  {
    prompt:
      "What happened to the older 'stationary equipment' category in the 5th edition IET Code of Practice?",
    options: [
      "It now applies above 15 kg",
      "It was removed in favour of assessing the equipment's actual use and risk",
      "It was renamed Class I equipment",
      "It now applies above 25 kg",
    ],
    answer:
      "It was removed in favour of assessing the equipment's actual use and risk",
    rationales: {
      "It now applies above 15 kg":
        "The 5th edition did not retain the category with a new 15 kg threshold. It removed the stationary and other movement-based category names.",
      "It was renamed Class I equipment":
        "Class I describes a shock-protection construction that relies on protective earthing. It is not a new name for the former stationary-use category.",
      "It now applies above 25 kg":
        "No replacement 25 kg threshold was introduced. Mass and movement can inform risk, but neither creates a current stationary-equipment classification.",
    },
    sourceUrls: [IET_FIFTH_EDITION, IET_RISK_BASED_INTERVALS],
  },
  {
    prompt: "The first test to be applied to an item of Class I equipment is:",
    options: [
      "Earth continuity test",
      "Flash test",
      "Insulation resistance test",
      "Polarity test",
    ],
    answer: "Earth continuity test",
    rationales: {
      "Flash test":
        "A flash or dielectric-strength test applies a high voltage and is not a routine first in-service test; inappropriate use can overstress insulation and electronics.",
      "Insulation resistance test":
        "Insulation resistance is selected only after the Class I protective path has been checked. Proving earth continuity first establishes the equipment's primary fault-protection route.",
      "Polarity test":
        "Polarity is important for cord sets and controls, but it does not first establish continuity from accessible Class I metalwork to the protective-earth contact.",
    },
    sourceUrls: [IET_EARTH_CONTINUITY, IET_FIFTH_EDITION],
  },
  {
    prompt:
      "Which equipment class relies on double or reinforced insulation and therefore does not require a protective-earth connection?",
    options: [
      "Class 0 Equipment",
      "Class I Equipment",
      "Class II Equipment",
      "Class III Equipment",
    ],
    answer: "Class II Equipment",
    rationales: {
      "Class 0 Equipment":
        "Class 0 used only basic insulation and lacked a protective earth; it did not provide the double or reinforced insulation that defines the protection asked for.",
      "Class I Equipment":
        "Class I equipment relies on a protective-earth connection to accessible conductive parts in addition to basic insulation, which is the opposite of the stated arrangement.",
      "Class III Equipment":
        "Class III protection is based on an extra-low-voltage energy source arrangement, not on double or reinforced mains insulation as the defining construction measure.",
    },
    sourceUrls: [HSE_MAINTAINING_EQUIPMENT, IET_FIFTH_EDITION],
  },
  {
    prompt:
      "Current flowing through a human body when it touches an accessible part is known as:",
    options: [
      "Fault current",
      "Shock current",
      "Supply current",
      "Touch current",
    ],
    answer: "Touch current",
    rationales: {
      "Fault current":
        "Fault current is current caused by an insulation or circuit fault and may flow through a protective conductor; it is not specifically the current through a person touching a part.",
      "Shock current":
        "“Shock current” is a descriptive phrase rather than the defined measurement term used for current through a body in contact with an accessible equipment part.",
      "Supply current":
        "Supply current is the current drawn by the operating load through its intended circuit. It is not the unintended current that can pass through a touching person.",
    },
    sourceUrls: [IET_EARTH_LEAKAGE, FLUKE_PAT_TESTER],
  },
  {
    prompt:
      "Under current IET guidance, why can equipment that is frequently moved require more frequent inspection?",
    options: [
      "Its mass automatically changes its shock-protection class",
      "Movement can increase wear, flexing and mechanical damage",
      "Every moved item requires a daily instrument test",
      "Anything below 18 kg is automatically Class II",
    ],
    answer: "Movement can increase wear, flexing and mechanical damage",
    rationales: {
      "Its mass automatically changes its shock-protection class":
        "Shock-protection class is determined by equipment construction, such as protective earthing or double insulation, not by the item's mass or how often it moves.",
      "Every moved item requires a daily instrument test":
        "Current guidance does not prescribe a universal daily instrument test. The dutyholder selects proportionate checks and tests from the actual risk and experience.",
      "Anything below 18 kg is automatically Class II":
        "An item below 18 kg may still be Class I and depend on protective earthing. The former movement threshold never determined its insulation class.",
    },
    sourceUrls: [IET_FIFTH_EDITION, IET_RISK_BASED_INTERVALS],
  },
  {
    prompt:
      "Which of the following tests assesses compliance with Bs or BS EN Standards:",
    options: [
      "In-service testing",
      "Production testing",
      "Testing after repair",
      "Type testing",
    ],
    answer: "Type testing",
    rationales: {
      "In-service testing":
        "In-service inspection and testing assesses whether an individual item remains safe for continued use; it does not re-establish full product-standard design compliance.",
      "Production testing":
        "Production tests check manufactured units for specified routine characteristics. They are not the complete assessment of a representative design against every relevant standard requirement.",
      "Testing after repair":
        "Post-repair testing verifies that the repaired item is safe and the repair has not impaired protection; it is not a full product type-conformity programme.",
    },
    sourceUrls: [IET_FIFTH_EDITION, HSE_MAINTAINING_EQUIPMENT],
  },
  {
    prompt: "Damaged equipment must be assessed as to suitability for use by:",
    options: [
      "A responsible person",
      "The manufacturer",
      "The owner",
      "The user",
    ],
    answer: "A responsible person",
    rationales: {
      "The manufacturer":
        "Manufacturer advice may be needed, but the manufacturer does not normally control withdrawal, repair and return-to-service decisions within the user's workplace maintenance system.",
      "The owner":
        "Ownership alone does not establish competence or delegated safety authority. The maintenance system must place the decision with the responsible dutyholder or appointee.",
      "The user":
        "A user should report the damage and stop using the item, but should not unilaterally decide that damaged equipment is suitable to return to service.",
    },
    sourceUrls: [HSE_MAINTAINING_EQUIPMENT, HSE_ELECTRIC_EQUIPMENT],
  },
  {
    prompt:
      "Low resistance ohmmeters must provide an open-circuit voltage no greater than:",
    options: ["14V", "24V", "40V", "4V"],
    answer: "24V",
    rationales: {
      "14V":
        "Fourteen volts is below the stated ceiling and may fall within an instrument's output, but it is not the maximum open-circuit voltage requested.",
      "40V":
        "Forty volts exceeds the specified 24 V ceiling by 16 V and is therefore outside the cited low-resistance ohmmeter test characteristic.",
      "4V": "Four volts is the lower boundary exceeded by the cited Fluke earth-bond output, not the maximum permitted open-circuit value asked for here.",
    },
    sourceUrls: [FLUKE_PAT_TESTER],
  },
  {
    prompt: "Which of the following checks/tests does not need to be recorded:",
    options: [
      "Combined inspection and test",
      "Formal visual inspection",
      "User checks (satisfactory)",
      "User checks (unsatisfactory)",
    ],
    answer: "User checks (satisfactory)",
    rationales: {
      "Combined inspection and test":
        "Although PAT records are not a standalone legal requirement, recording combined inspection and test results is a useful part of monitoring condition, trends and future maintenance decisions.",
      "Formal visual inspection":
        "A formal visual inspection is a planned maintenance activity. Recording its outcome supports the equipment history and lets the dutyholder review whether the chosen interval is effective.",
      "User checks (unsatisfactory)":
        "A defect found by a user must be reported so the equipment can be taken out of use and controlled until repair; silently treating it as an unrecorded satisfactory check is unsafe.",
    },
    sourceUrls: [HSE_MAINTAINING_EQUIPMENT, HSE_PAT_FAQ],
  },
  {
    prompt: "No unprotected cables may be run:",
    options: ["On carpets", "On desks", "Under carpets", "Under desks"],
    answer: "Under carpets",
    rationales: {
      "On carpets":
        "A cable visible on a carpet can still create trip and damage risks that must be controlled, but it is not concealed and compressed in the manner singled out here.",
      "On desks":
        "A suitably routed cable on a desk is visible and can be kept clear of sharp edges, heat and strain; its position is not inherently the concealed-damage condition described.",
      "Under desks":
        "Under-desk routing can be acceptable when the lead is supported and protected from feet, chair mechanisms and sharp edges; the location alone does not prohibit it.",
    },
    sourceUrls: [HSE_ELECTRIC_EQUIPMENT, HSE_MAINTAINING_EQUIPMENT],
  },
  {
    prompt:
      "According to Electrical Safety First's general guide, which statement is correct when selecting a replacement BS 1362 plug fuse?",
    options: [
      "Every appliance should use a 13 A fuse",
      "Appliances below about 700 W commonly use 3 A, while higher-rated appliances commonly use 13 A",
      "A 5 A fuse is mandatory for every appliance",
      "The fuse can be chosen without checking the rating plate or instructions",
    ],
    answer:
      "Appliances below about 700 W commonly use 3 A, while higher-rated appliances commonly use 13 A",
    rationales: {
      "Every appliance should use a 13 A fuse":
        "A 13 A fuse can be too large to protect the flexible cord of a low-power appliance. The replacement should match the equipment's specified fuse rating.",
      "A 5 A fuse is mandatory for every appliance":
        "Modern appliance plug-fuse selection is generally standardized on 3 A or 13 A. A 5 A fuse may exist in older equipment but is not universally mandatory.",
      "The fuse can be chosen without checking the rating plate or instructions":
        "The rating plate and manufacturer instructions identify the intended load and fuse. Ignoring them can leave the cord inadequately protected or cause unnecessary operation.",
    },
    sourceUrls: [ELECTRICAL_SAFETY_FIRST_PLUGS],
  },
  {
    prompt: "Flexible cables should be inspected for damage:",
    options: [
      "At the ends by visual inspection",
      "At the ends by visual inspection and touch",
      "Throughout its length by visual inspection",
      "Throughout its length by visual inspection and touch",
    ],
    answer: "Throughout its length by visual inspection and touch",
    rationales: {
      "At the ends by visual inspection":
        "The plug and appliance entries are common damage points, but limiting the check to those ends can miss cuts, crushing and repairs elsewhere along the lead.",
      "At the ends by visual inspection and touch":
        "Adding touch can reveal local deformation at the ends, yet the middle of the flex remains unchecked even though it may have been trapped or abraded.",
      "Throughout its length by visual inspection":
        "A full visual scan is necessary, but careful handling of the disconnected lead can also reveal stiffening, lumps, cuts or crushing that are difficult to see.",
    },
    sourceUrls: [HSE_MAINTAINING_EQUIPMENT, IET_EXTENSION_LEADS],
  },
  {
    prompt:
      "Under the cited IET extension-lead guidance, the recommended maximum length for a 2.5 mm² extension lead is:",
    options: ["12 metres", "15 metres", "25 metres", "35 metres"],
    answer: "25 metres",
    rationales: {
      "12 metres":
        "Twelve metres is the recommendation associated with 1.25 mm² conductors, so it does not give the cited maximum for the larger 2.5 mm² lead.",
      "15 metres":
        "Fifteen metres is the cited value for 1.5 mm² conductors. It is shorter than, and not the specified boundary for, the 2.5 mm² size.",
      "35 metres":
        "Thirty-five metres exceeds the cited 25 m recommendation. A longer lead requires its voltage drop, protective path, load and additional protection to be assessed.",
    },
    sourceUrls: [IET_EXTENSION_LEADS],
  },
  {
    prompt: "Which of the following statements is correct regarding 13A plugs:",
    options: [
      "All pins must be partially insulated",
      "All plugs must have insulated pins",
      "New plugs must have live pins insulated",
      "New plugs must have live pins partially insulated",
    ],
    answer: "New plugs must have live pins partially insulated",
    rationales: {
      "All pins must be partially insulated":
        "The earth pin must make the protective connection and operate socket shutters as intended; the partial insulating sleeves apply to the line and neutral pins, not all three pins.",
      "All plugs must have insulated pins":
        "The conducting ends of plug pins must remain exposed to make electrical contact. The safety feature is partial sleeving of line and neutral, not complete insulation of every pin.",
      "New plugs must have live pins insulated":
        "Fully insulating a current-carrying pin would prevent it making contact. The requirement is partial insulation that leaves the contact end conductive.",
    },
    sourceUrls: [GOV_UK_PLUG_PIN_SLEEVING, HSE_ELECTRICAL_STANDARDS],
  },
  {
    prompt:
      "Before disconnecting active IT equipment so that it can be inspected or tested, whose permission should be obtained?",
    options: [
      "Manufacturers data should be read",
      "Permission from the user is required",
      "The socket circuit must be isolated",
      "The user should be informed",
    ],
    answer: "Permission from the user is required",
    rationales: {
      "Manufacturers data should be read":
        "Manufacturer instructions help select safe test methods, but reading them does not authorize interruption of a user's active work or protect unsaved data.",
      "The socket circuit must be isolated":
        "The item should be safely disconnected for dead checks, but isolating the entire socket circuit is not normally required simply to unplug one item after permission is obtained.",
      "The user should be informed":
        "Informing the user is good communication, but the question asks for agreement before disconnection. A notice without permission may still interrupt critical work.",
    },
    sourceUrls: [IET_PAT_GUIDANCE_2005, HSE_MAINTAINING_EQUIPMENT],
  },
  {
    prompt:
      "The maximum protective conductor/touch current allowed for portable hand-held Class I equipment is:",
    options: ["0.25 mA", "0.5 mA", "0.75 mA", "3.5 mA"],
    answer: "0.75 mA",
    rationales: {
      "0.25 mA":
        "The cited 0.25 mA figure is associated with Class II accessible-part touch current, not the stated portable or hand-held Class I equipment category.",
      "0.5 mA":
        "Half a milliampere is below the cited 0.75 mA limit. A result below the limit may pass, but it is not the maximum value requested.",
      "3.5 mA":
        "The 3.5 mA figure applies to other Class I equipment in the cited legacy product guidance; hand-held use has the more restrictive 0.75 mA limit.",
    },
    sourceUrls: [IET_PAT_GUIDANCE_2005],
  },
  {
    prompt:
      "For an individual item above 10 mA connected through a 16 A BS EN 60309-2 plug and socket, what minimum protective-conductor cross-sectional area is required in the flexible cable by current BS 7671 guidance?",
    options: ["0.5 mm²", "0.75 mm²", "1.0 mm²", "2.5 mm²"],
    answer: "2.5 mm²",
    rationales: {
      "0.5 mm²":
        "Half a square millimetre is only one fifth of the specified minimum and would not provide the enhanced mechanical robustness required for this connection arrangement.",
      "0.75 mm²":
        "A 0.75 mm² protective conductor is a common light-flex size, but it is 1.75 mm² below the current requirement for the stated high-current 16 A connection.",
      "1.0 mm²":
        "One square millimetre appeared in older product guidance, but current BS 7671 guidance for this 16 A BS EN 60309-2 route specifies at least 2.5 mm².",
    },
    sourceUrls: [IET_HIGH_PROTECTIVE_CURRENTS],
  },
  {
    prompt:
      "A plug connected to equipment with a rating of 1.5 kW should have a fuse rated at:",
    options: ["10A", "13A", "5A", "7A"],
    answer: "13A",
    rationales: {
      "10A":
        "A 10 A fuse is above the appliance's normal current, but it is not one of the two preferred replacement ratings in current general consumer guidance for BS 1362 plug fuses.",
      "5A": "At 230 V, a 1.5 kW appliance draws about 6.5 A, so a 5 A fuse is below the normal load current and is liable to operate during ordinary use.",
      "7A": "Seven amperes leaves almost no allowance above the approximate 6.5 A operating current and is not the usual standardized replacement selection for this appliance rating.",
    },
    sourceUrls: [ELECTRICAL_SAFETY_FIRST_PLUGS],
  },
  {
    prompt:
      "Microwave ovens should be functionally checked to ensure that opening the door:",
    options: [
      "Check for leakage of radiation when the door is open",
      "Check the value of the touch current",
      "Stops microwave generation through the door interlock",
      "Ensure the integrity of the insulation resistance",
    ],
    answer: "Stops microwave generation through the door interlock",
    rationales: {
      "Check for leakage of radiation when the door is open":
        "Operating a microwave with its door open is precisely what the interlock must prevent. A routine PAT sequence should not energize the magnetron in that unsafe condition.",
      "Check the value of the touch current":
        "Touch-current measurement is an electrical safety test, not the functional check that demonstrates the door interlock stops microwave generation when opened.",
      "Ensure the integrity of the insulation resistance":
        "Insulation resistance is measured with appropriate test equipment while the appliance is de-energized; opening the door does not itself prove the insulation value.",
    },
    sourceUrls: [SEAWARD_MICROWAVES, HSE_MICROWAVE_TESTING],
  },
  {
    prompt:
      "An appliance uses supplementary insulation in parts but also relies on a protective-earth connection to accessible conductive parts. How is it classified for in-service inspection?",
    options: ["Class 0", "Class I", "Class II", "Class III"],
    answer: "Class I",
    rationales: {
      "Class 0":
        "Class 0 equipment lacks a protective-earth measure and relies only on basic insulation, unlike the stated appliance with an intentional protective-earth connection.",
      "Class II":
        "Class II protection must not depend on protective earthing of accessible conductive parts. Supplementary insulation in only part of a product does not remove its Class I reliance.",
      "Class III":
        "Class III equipment relies on an extra-low-voltage source arrangement for protection, not on a mains protective-earth connection to accessible conductive parts.",
    },
    sourceUrls: [HSE_MAINTAINING_EQUIPMENT, IET_FIFTH_EDITION],
  },
  {
    prompt:
      "Who should determine suitable inspection and test intervals for electrical equipment in a school under current IET guidance?",
    options: [
      "The appliance tester alone",
      "The equipment user alone",
      "The manufacturer alone",
      "The dutyholder, using a risk assessment and competent advice where needed",
    ],
    answer:
      "The dutyholder, using a risk assessment and competent advice where needed",
    rationales: {
      "The appliance tester alone":
        "The tester can provide competent technical advice, but may not know the school's users, environment, incident history and operational controls well enough to own the interval decision alone.",
      "The equipment user alone":
        "Users should make checks and report defects, but an individual user does not control the overall maintenance plan, records or risk assessment for the school's equipment.",
      "The manufacturer alone":
        "Manufacturer recommendations are an important input, but they cannot account by themselves for the actual environment, frequency of use, damage history and local controls.",
    },
    sourceUrls: [IET_RISK_BASED_INTERVALS, HSE_MAINTAINING_EQUIPMENT],
  },
  {
    prompt:
      "If equipment gives suspect results during an insulation resistance test an alternative test would be a:",
    options: [
      "Continuity test",
      "Functional test",
      "Protective conductor/touch current test",
      "RCD test",
    ],
    answer: "Protective conductor/touch current test",
    rationales: {
      "Continuity test":
        "Continuity can verify an earth or conductive path, but it does not measure current leaking from live circuitry to protective earth or an accessible surface under operation.",
      "Functional test":
        "Showing that the equipment performs its intended function does not quantify an insulation-related leakage path and therefore cannot resolve a suspect insulation-resistance result.",
      "RCD test":
        "An RCD test assesses a residual-current protective device and its operating behavior. It does not determine the appliance's own protective-conductor or touch current.",
    },
    sourceUrls: [FLUKE_PAT_TESTER, IET_FIFTH_EDITION],
  },
  {
    prompt:
      "If manufacturers test procedures are not available and there is doubt which of the following tests should not be carried out:",
    options: ["Bonding", "Earth continuity", "Insulation", "Polarity"],
    answer: "Insulation",
    rationales: {
      Bonding:
        "A suitably selected low-current continuity check can verify an accessible protective or functional bond without applying the high DC voltage that creates the concern in this scenario.",
      "Earth continuity":
        "Earth continuity is fundamental where equipment relies on protective earthing, and current guidance prefers a suitable lower-current method rather than omitting the check automatically.",
      Polarity:
        "Polarity of a detachable lead can be checked directly between its plug and connector; it does not require applying a potentially damaging high insulation-test voltage to electronics.",
    },
    sourceUrls: [IET_FIFTH_EDITION, FLUKE_PAT_TESTER],
  },
  {
    prompt:
      "Why is a bare 'maximum current-carrying capacity' for a 1.5 mm² flexible cable potentially misleading?",
    options: [
      "It is always exactly 10 A",
      "Capacity depends on cable construction, installation, ambient conditions and manufacturer data",
      "It is always exactly 20 A",
      "It is always exactly 6 A",
    ],
    answer:
      "Capacity depends on cable construction, installation, ambient conditions and manufacturer data",
    rationales: {
      "It is always exactly 10 A":
        "Ten amperes may apply to a particular smaller or differently installed flex, but conductor area alone cannot make it a universal value for every 1.5 mm² cable.",
      "It is always exactly 20 A":
        "Twenty amperes could exceed the rating of some 1.5 mm² constructions or installation conditions. A single optimistic number cannot replace the applicable data.",
      "It is always exactly 6 A":
        "Six amperes is needlessly restrictive for many 1.5 mm² flexible cables, yet the central error is still claiming one rating without specifying construction and conditions.",
    },
    sourceUrls: [DONCASTER_CABLE_RATINGS, HSE_MAINTAINING_EQUIPMENT],
  },
  {
    prompt: "10 A is equal to:",
    options: ["0.01 kA", "0.1 kA", "100,000 mA", "1000 mA"],
    answer: "0.01 kA",
    rationales: {
      "0.1 kA":
        "The prefix kilo represents one thousand, so 0.1 kA equals 100 A. That is ten times the stated current rather than an equivalent expression.",
      "100,000 mA":
        "One ampere is 1,000 mA, making 100,000 mA equal to 100 A. The correct milliampere equivalent of 10 A would be 10,000 mA.",
      "1000 mA":
        "One thousand milliamperes equals only 1 A. A further factor of ten is needed to represent the stated 10 A current.",
    },
    sourceUrls: [NIST_AMPERE],
  },
  {
    prompt:
      "When testing basic insulation the test connection points will be between:",
    options: [
      "Earth and phase/neutral shorted",
      "Phase and earth",
      "Phase and earth/neutral shorted",
      "Phase and neutral",
    ],
    answer: "Earth and phase/neutral shorted",
    rationales: {
      "Phase and earth":
        "Testing line to earth alone can leave the neutral-side live circuitry outside the measurement. Linking line and neutral includes both current-carrying paths together.",
      "Phase and earth/neutral shorted":
        "Shorting neutral to earth would place one live conductor on the earth side of the measurement and would not form the intended live-conductors-to-earth insulation test.",
      "Phase and neutral":
        "A line-to-neutral measurement is across the appliance's normal internal circuit, not between its linked live conductors and the protective or accessible earthed parts.",
    },
    sourceUrls: [FLUKE_PAT_TESTER, IET_PAT_GUIDANCE_2005],
  },
  {
    prompt:
      "Which listed situation is outside the Electricity at Work Regulations because it is not connected with a work activity?",
    options: [
      "An employee's own equipment used only for private purposes at home",
      "Employees equipment used at work",
      "Employers equipment used at work",
      "Employers equipment used for work at home",
    ],
    answer:
      "An employee's own equipment used only for private purposes at home",
    rationales: {
      "Employees equipment used at work":
        "Employee ownership does not remove the work connection. If the equipment is permitted and used for work, it can form part of the workplace electrical safety system.",
      "Employers equipment used at work":
        "Employer-provided equipment used in the workplace is a direct example of electrical equipment involved in a work activity and falls within the dutyholder's control.",
      "Employers equipment used for work at home":
        "Home is the location, but the activity remains work and the employer-provided equipment remains within the work-related electrical safety responsibilities.",
    },
    sourceUrls: [HSE_EAWR, HSE_MAINTAINING_EQUIPMENT],
  },
  {
    prompt:
      "Which of the following should not influence a decision on how often equipment inspection and testing should take place:",
    options: [
      "Cost of inspection",
      "Environmental conditions",
      "Equipment type",
      "Equipment use",
    ],
    answer: "Cost of inspection",
    rationales: {
      "Environmental conditions":
        "Wet, dusty, corrosive or mechanically harsh environments can accelerate deterioration, so environment is a core factor when setting a safe inspection interval.",
      "Equipment type":
        "Hand-held, mobile and fixed equipment experience different handling and fault consequences. The actual equipment type therefore informs the risk-based interval.",
      "Equipment use":
        "Frequency, duty cycle, movement and foreseeable misuse affect wear and exposure to damage, making actual use directly relevant to the maintenance frequency.",
    },
    sourceUrls: [IET_RISK_BASED_INTERVALS, HSE_MAINTAINING_EQUIPMENT],
  },
  {
    prompt:
      "Under current IET guidance, which earth-continuity approach is generally preferred for routine in-service testing?",
    options: [
      "A suitable lower-current continuity test selected for the equipment",
      "A current equal to the plug-fuse rating",
      "A mandatory current twice the plug-fuse rating",
      "A mandatory 26 A test for every item",
    ],
    answer:
      "A suitable lower-current continuity test selected for the equipment",
    rationales: {
      "A current equal to the plug-fuse rating":
        "The fuse rating does not by itself define a suitable test current. Current guidance calls for selecting an appropriate method for the equipment and its circuitry.",
      "A mandatory current twice the plug-fuse rating":
        "No current rule requiring twice every plug-fuse rating applies to routine in-service testing, and that approach could be unsuitable for sensitive functional-earth paths.",
      "A mandatory 26 A test for every item":
        "A universal 26 A test is neither the current preference nor the former documented upper figure, which was 25 A for the older high-current method.",
    },
    sourceUrls: [IET_FIFTH_EDITION, IET_EARTH_CONTINUITY],
  },
  {
    prompt:
      "Training may be required to ensure appliance users are able to carry out:",
    options: [
      "Formal inspection and fault reports",
      "Routine testing of equipment",
      "User checks and fault reports",
      "User checks and repairs",
    ],
    answer: "User checks and fault reports",
    rationales: {
      "Formal inspection and fault reports":
        "A formal inspection needs a person with sufficient knowledge and an assigned systematic role. Ordinary user training is aimed at simpler checks and prompt reporting.",
      "Routine testing of equipment":
        "Instrument testing requires additional competence, correct equipment and interpretation of results; it is not an ordinary responsibility created by basic user-check training.",
      "User checks and repairs":
        "Users should remove defective equipment from use and report it, not open or repair it unless they separately possess the competence and authority for that work.",
    },
    sourceUrls: [HSE_MAINTAINING_EQUIPMENT, HSE_PAT_FAQ],
  },
  {
    prompt:
      "If a 0.4 MΩ insulation-resistance result is treated as a purely resistive path, what current does Ohm's law predict at 230 V?",
    options: ["0.173 mA", "0.57 mA", "17.39 A", "575 mA"],
    answer: "0.57 mA",
    rationales: {
      "0.173 mA":
        "A current of 0.173 mA would correspond to about 1.33 MΩ at 230 V, not the stated 0.4 MΩ resistance used in the calculation.",
      "17.39 A":
        "This result is about thirty thousand times too large. Dividing 230 V by 400,000 Ω produces a fraction of a milliampere, not tens of amperes.",
      "575 mA":
        "The numerical digits are close before unit conversion, but 0.000575 A is 0.575 mA, not 575 mA; this option is one thousand times too high.",
    },
    sourceUrls: [IET_EARTH_LEAKAGE, NIST_AMPERE],
  },
  {
    prompt:
      "Protective conductor currents exceeding 10 mA are unavoidable when using some equipment. In this case special precautions are required. Additional specific information regarding these precautions can be found in:",
    options: ["BS 7671", "EWR 89", "GN 1", "HSWA 74"],
    answer: "BS 7671",
    rationales: {
      "EWR 89":
        "The Electricity at Work Regulations impose broad duties to prevent danger, but they do not provide the detailed conductor sizes and connection arrangements requested here.",
      "GN 1":
        "IET Guidance Note 1 concerns selection and erection of installation equipment generally; the specific high-protective-conductor-current requirements originate in BS 7671 itself.",
      "HSWA 74":
        "The Health and Safety at Work etc. Act establishes general health-and-safety duties. It does not contain detailed electrical connection measures for currents above 10 mA.",
    },
    sourceUrls: [IET_HIGH_PROTECTIVE_CURRENTS, HSE_EAWR],
  },
  {
    prompt:
      "If an appliance has a detachable cord set, a test should be carried out on the appliance",
    options: [
      "At the appliance connections",
      "Separately from the cord set",
      "With the cord set plugged in",
      "Without the cord set plugged in",
    ],
    answer: "With the cord set plugged in",
    rationales: {
      "At the appliance connections":
        "Probing only the appliance inlet or internal connections bypasses the normal mated cord-and-inlet path, so it does not test the appliance in its assembled supply arrangement.",
      "Separately from the cord set":
        "The detachable cord also needs its own inspection and test, but that separate check does not replace testing the appliance with a suitable cord connected as used.",
      "Without the cord set plugged in":
        "Without a cord, a plug-connected tester cannot include the appliance inlet and normal supply path. The cord is connected for the appliance test, then tested separately.",
    },
    sourceUrls: [SEAWARD_IEC_LEADS, FLUKE_PAT_TESTER],
  },
  {
    prompt:
      "When testing microwave ovens, a check should be made that the warnings concerning microwave energy specified in BS EN 60335-2-25 are:",
    options: [
      "Included in the Equipment Instruction Book",
      "Marked on the relevant covers of the appliance",
      "Noted in the Equipment Register, Form Va",
      "Noted on the Equipment Label, Form Vc",
    ],
    answer: "Marked on the relevant covers of the appliance",
    rationales: {
      "Included in the Equipment Instruction Book":
        "Instructions can contain supporting warnings, but a person removing a hazardous cover needs the warning at that cover even when the instruction book is unavailable.",
      "Noted in the Equipment Register, Form Va":
        "An equipment register supports asset management, but it is not physically present at the point where removing a cover could expose hazardous microwave energy.",
      "Noted on the Equipment Label, Form Vc":
        "A general inspection label records maintenance status; it is not the product safety marking required on a cover whose removal can expose microwave hazards.",
    },
    sourceUrls: [IEC_MICROWAVE_STANDARD, HSE_MICROWAVE_TESTING],
  },
  {
    prompt:
      "Where equipment has a protective conductor current designed to exceed 3.5 mA, one requirement is that a label is fixed adjacent to the equipment primary power connection which includes the wording",
    options: [
      "Danger High Touch Current",
      "Possibility of High Touch Current",
      "Presence of High Touch Current",
      "CAUTION — HIGH TOUCH CURRENT. Connect to earth before connecting to supply",
    ],
    answer:
      "CAUTION — HIGH TOUCH CURRENT. Connect to earth before connecting to supply",
    rationales: {
      "Danger High Touch Current":
        "This phrase identifies a hazard but omits the critical instruction to establish the protective-earth connection before applying the electrical supply.",
      "Possibility of High Touch Current":
        "“Possibility” understates a designed characteristic and still gives no action for controlling it. The required warning directs the connection sequence explicitly.",
      "Presence of High Touch Current":
        "Stating that current is present is incomplete because it does not tell the installer to connect protective earth before the supply, which is the essential precaution.",
    },
    sourceUrls: [LENOVO_HIGH_TOUCH_CURRENT, IET_PAT_GUIDANCE_2005],
  },
  {
    prompt: "Class II equipment may be constructed with",
    options: [
      "Earthed metalwork separated from live parts by basic insulation only",
      "Exposed conductive parts connected to the main earthing terminal",
      "Unearthed metalwork separated from live parts by basic and supplementary insulation",
      "Unearthed metalwork separated from live parts by basic insulation only",
    ],
    answer:
      "Unearthed metalwork separated from live parts by basic and supplementary insulation",
    rationales: {
      "Earthed metalwork separated from live parts by basic insulation only":
        "Basic insulation plus protective earthing is characteristic of a Class I protection arrangement, not Class II double or reinforced insulation independent of earth.",
      "Exposed conductive parts connected to the main earthing terminal":
        "Relying on an earthing-terminal connection for accessible conductive parts would make protective earth part of the safety measure, contrary to Class II construction.",
      "Unearthed metalwork separated from live parts by basic insulation only":
        "With only basic insulation and no protective earth, one insulation failure could make the metal accessible part live. Class II requires an additional or reinforced barrier.",
    },
    sourceUrls: [HSE_MAINTAINING_EQUIPMENT],
  },
  {
    prompt: "The term 'equipment construction' relates to",
    options: [
      "How the user of equipment is protected against electric shock",
      "The degree of protection offered against the ingress of moisture or water",
      "The equipment's suitability for use within specific environmental conditions",
      "Whether the equipment is hand-held, portable, movable or fixed in use",
    ],
    answer: "How the user of equipment is protected against electric shock",
    rationales: {
      "The degree of protection offered against the ingress of moisture or water":
        "Ingress protection is described by an IP classification. It is a separate enclosure property from Class I, II or other shock-protection construction.",
      "The equipment's suitability for use within specific environmental conditions":
        "Environmental suitability includes moisture, temperature, impact and contamination ratings; it is broader than the construction class used for electric-shock protection.",
      "Whether the equipment is hand-held, portable, movable or fixed in use":
        "Those are use and movement descriptions, and the 5th edition removed several of the old category labels. They do not define protective construction.",
    },
    sourceUrls: [IET_FIFTH_EDITION, HSE_MAINTAINING_EQUIPMENT],
  },
  {
    prompt:
      "One purpose of carrying out an earth continuity test, using a low current ohmmeter, on equipment which relies on functional earthing is to ensure that the",
    options: [
      "Earthing allows the equipment to operate correctly",
      "Equipment conforms to the requirements of BS 7822",
      "Means of isolation from the supply are accessible",
      "Touch current measurements are satisfactory",
    ],
    answer: "Earthing allows the equipment to operate correctly",
    rationales: {
      "Equipment conforms to the requirements of BS 7822":
        "A single continuity measurement cannot demonstrate full conformity with an entire product or installation standard, and BS 7822 is not the governing basis stated here.",
      "Means of isolation from the supply are accessible":
        "Accessibility of an isolator is established by inspection of its location and operation, not by measuring resistance along a functional-earth conductor.",
      "Touch current measurements are satisfactory":
        "A continuity test confirms that a conductive path exists and has low resistance. It does not measure touch current while equipment is energized.",
    },
    sourceUrls: [IET_HIGH_PROTECTIVE_CURRENTS, FLUKE_PAT_TESTER],
  },
  {
    prompt:
      "When conducting an earth continuity test on equipment that has accessible metal parts, which are earthed only for functional/screening purposes, these parts should be",
    options: [
      "Subjected to a measured touch current test",
      "Tested at a current 1.5 times the fuse rating",
      "Tested at a current between 20 mA to 200 mA",
      "Tested for earth continuity at full current",
    ],
    answer: "Tested at a current between 20 mA to 200 mA",
    rationales: {
      "Subjected to a measured touch current test":
        "Touch-current testing answers a different question about accessible current under operation; it does not replace the requested continuity check of the functional or screening path.",
      "Tested at a current 1.5 times the fuse rating":
        "Scaling the test to the plug fuse is the older high-current approach for protective paths and is unnecessary for metalwork earthed only for function or screening.",
      "Tested for earth continuity at full current":
        "A full high-current test can stress or upset sensitive screening circuitry without adding value. A low-current continuity method is appropriate for this non-fault-current path.",
    },
    sourceUrls: [IET_EARTH_CONTINUITY, IET_FIFTH_EDITION],
  },
  {
    prompt: "What is meant by a PAT tester's 'soft' earth-continuity test?",
    options: [
      "A slowly ramped dielectric-strength test",
      "A low-current protective-conductor continuity test",
      "A 50 mA touch-current test",
      "A reduced-voltage functional test",
    ],
    answer: "A low-current protective-conductor continuity test",
    rationales: {
      "A slowly ramped dielectric-strength test":
        "Dielectric-strength testing applies high voltage across insulation and is unrelated to measuring a low-resistance protective-conductor path with a soft current.",
      "A 50 mA touch-current test":
        "Touch current is measured through a specified measuring network on accessible parts, whereas a soft continuity mode injects current through the earth path to measure resistance.",
      "A reduced-voltage functional test":
        "A functional test checks intended operation, sometimes at supply voltage. It does not establish low-resistance continuity between the earth contact and accessible Class I parts.",
    },
    sourceUrls: [FLUKE_PAT_TESTER, IET_FIFTH_EDITION],
  },
  {
    prompt:
      "Whilst carrying out an earth continuity measurement on a 3 kW Class I electric fire, the measured resistance slightly increases during the period of test. One possible reason for this increase in resistance could be",
    options: [
      "A loose connection at the earth terminal within the mains plug",
      "An open circuit in the protective conductor",
      "Degradation of the insulation due to an excessive test current",
      "Insufficient current supplied by the test equipment",
    ],
    answer: "A loose connection at the earth terminal within the mains plug",
    rationales: {
      "An open circuit in the protective conductor":
        "A complete open circuit would produce no valid low-resistance path, normally showing an over-range or fail result rather than a small value that rises gradually.",
      "Degradation of the insulation due to an excessive test current":
        "The measurement is of the protective conductor, not insulation resistance. Insulation degradation would not normally create a gradual rise in the earth-path resistance reading.",
      "Insufficient current supplied by the test equipment":
        "An unsuitable test current can make a measurement unreliable, but it does not specifically explain a progressive rise as a resistive loose joint heats during the test.",
    },
    sourceUrls: [IET_EARTH_CONTINUITY, FLUKE_PAT_TESTER],
  },
  {
    prompt:
      "The main purpose of the cartridge fuse fitted within a standard 13 A plug is to protect the appliance",
    options: [
      "Cord set",
      "From overheating",
      "From overload",
      "From short circuit",
    ],
    answer: "Cord set",
    rationales: {
      "From overheating":
        "A fuse may prevent cable heating caused by excessive current, but it cannot detect every source of appliance overheating such as blocked ventilation or a failed thermostat.",
      "From overload":
        "Overload is one condition that can operate the fuse, yet the plug fuse is selected primarily so excessive current does not damage the flexible cord supplying the appliance.",
      "From short circuit":
        "A short circuit can make the fuse operate rapidly, but the appliance still needs its own internal safety design. The plug fuse's principal protected component is the cord set.",
    },
    sourceUrls: [ELECTRICAL_SAFETY_FIRST_PLUGS, HSE_MAINTAINING_EQUIPMENT],
  },
] as const;
