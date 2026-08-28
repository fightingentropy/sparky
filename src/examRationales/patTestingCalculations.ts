// Resistance-per-metre values checked on 2026-08-28. The IET source's
// flexible-cable table is on PDF page 3; this is not a review of its dated
// test-current recommendations.
const IET_FLEXIBLE_CABLE_RESISTANCE =
  "https://electrical.theiet.org/media/1658/in-service-inspection-and-testing-of-electrical-equipment-the-earth-continuity-test.pdf";
const PRYSMIAN_FLEXIBLE_COPPER_RESISTANCE =
  "https://baltics.prysmiangroup.com/sites/default/files/atoms/files/Industry-Cables_General-Catalogue_2016_LR.pdf";

export const patTestingCalculations = [
  {
    prompt:
      "A portable appliance has a 4.5 m flexible cable with a 1.0 mm² copper protective conductor. Using the tabulated resistance at 20 °C, calculate the resistance of the protective conductor.",
    options: [
      "70.2 milliohms",
      "87.75 milliohms",
      "97.5 milliohms",
      "78 milliohms",
    ],
    answer: "87.75 milliohms",
    rationales: {
      "70.2 milliohms":
        "70.2 mΩ = 15.6 mΩ/m × 4.5 m. The 15.6 mΩ/m value belongs to a larger 1.25 mm² flexible conductor. For 1.0 mm², use 19.5 mΩ/m: 19.5 × 4.5 = 87.75 mΩ.",
      "97.5 milliohms":
        "97.5 mΩ = 19.5 mΩ/m × 5 m, so it corresponds to a cable 0.5 m longer than the one given. Use the actual 4.5 m length: 19.5 × 4.5 = 87.75 mΩ.",
      "78 milliohms":
        "78 mΩ = 19.5 mΩ/m × 4 m, omitting the final 0.5 m of cable. That extra length adds 9.75 mΩ, giving 78 + 9.75 = 87.75 mΩ.",
    },
    sourceUrls: [IET_FLEXIBLE_CABLE_RESISTANCE, PRYSMIAN_FLEXIBLE_COPPER_RESISTANCE],
  },
  {
    prompt:
      "An appliance has a 1.5 m flexible cable with a 0.75 mm² copper protective conductor. Using the tabulated resistance at 20 °C, what is the expected resistance of the protective conductor?",
    options: ["39 Ohms", "339 Ohms", "0.39 Ohms", "0.039 Ohms"],
    answer: "0.039 Ohms",
    rationales: {
      "39 Ohms":
        "26 mΩ/m × 1.5 m = 39 mΩ, not 39 Ω. There are 1000 milliohms in one ohm, so 39 ÷ 1000 = 0.039 Ω; writing 39 Ω makes the result 1000 times too large.",
      "339 Ohms":
        "339 Ω does not follow from the supplied length and conductor size: 26 mΩ/m × 1.5 m = 39 mΩ. Converting units requires division by 1000, giving 0.039 Ω, not adding digits to 39.",
      "0.39 Ohms":
        "0.39 Ω = 390 mΩ, ten times the calculated 39 mΩ. It would correspond to 15 m of this cable, not 1.5 m. Convert correctly: 39 ÷ 1000 = 0.039 Ω.",
    },
    sourceUrls: [IET_FLEXIBLE_CABLE_RESISTANCE, PRYSMIAN_FLEXIBLE_COPPER_RESISTANCE],
  },
] as const;
