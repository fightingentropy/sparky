import level3ElectricalInstallationData from "../exam-data/level-3-electrical-installation.json";
import { applyExamExplanationEnhancements } from "../examExplanationEnhancements";
import type { Exam, ExamChoice } from "../exams/types";

const BIPM_SI = "https://www.bipm.org/en/publications/si-brochure";
const IEC_ELECTROPEDIA = "https://www.electropedia.org/";
const OPENSTAX_PHYSICS = "https://openstax.org/details/books/physics";
const HSE_EAWR = "https://www.hse.gov.uk/pubns/priced/hsr25.pdf";
const HSE_HSG85 = "https://www.hse.gov.uk/pubns/priced/hsg85.pdf";
const HSE_GS38 = "https://www.hse.gov.uk/pubns/priced/gs38.pdf";
const HSE_RISK = "https://www.hse.gov.uk/simple-health-safety/risk/";
const HSE_CDM = "https://www.hse.gov.uk/construction/cdm/2015/index.htm";
const HSE_CO2 = "https://www.hse.gov.uk/pubns/priced/eh40.pdf";
const HSE_PORTABLE_EQUIPMENT = "https://www.hse.gov.uk/pubns/indg236.htm";
const HSE_CONSTRUCTION_ELECTRICITY =
  "https://www.hse.gov.uk/electricity/information/construction.htm";
const HSE_SAFETY_REPRESENTATIVES =
  "https://www.hse.gov.uk/involvement/prepare/union/index.htm";
const IET_BS_7671 =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/";
const IET_MODEL_FORMS =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/";
const IET_INSPECTION_FAQ =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/";
const IET_RCD_TESTING =
  "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/";
const IET_RCD_USER_CHECK =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/consumer-units-and-protective-devices-faqs/";
const IET_ON_SITE_GUIDE =
  "https://shop.theiet.org/on-site-guide-bs-7671-2018-a4-2026-9th-edition";
const IET_CONDUIT_AND_TRUNKING =
  "https://electrical.theiet.org/wiring-matters/years/2021/88-november-2021/the-history-of-cable-capacities-for-conduit-and-trunking/";
const IET_RLV =
  "https://electrical.theiet.org/wiring-matters/years/2020/82-september-2020/reduced-low-voltage-systems/";
const IET_LIVE_TESTING =
  "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/";
const ICO_UK_GDPR =
  "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/";
const UK_DATA_PROTECTION_ACT =
  "https://www.legislation.gov.uk/ukpga/2018/12/contents";
const UK_WEEE = "https://www.legislation.gov.uk/uksi/2013/3113/contents";
const UKSC_PENALTY_CLAUSES = "https://supremecourt.uk/cases/uksc-2013-0280";
const GOV_FIRE_SAFETY =
  "https://www.gov.uk/government/publications/fire-safety-risk-assessment-offices-and-shops";
const ROSPA = "https://www.rospa.com/";

const CHOICES: readonly ExamChoice[] = ["A", "B", "C", "D"];
const enhancedLevel3 = applyExamExplanationEnhancements(
  level3ElectricalInstallationData as unknown as Exam,
);
const variants = new Map(
  enhancedLevel3.sections
    .flatMap((section) => section.variants)
    .map((variant) => [variant.id, variant] as const),
);

function reviewed(
  variantId: string,
  questionNumber: number,
  rationaleByChoice: Partial<Record<ExamChoice, string>>,
  sourceUrls: readonly string[],
) {
  const question = variants
    .get(variantId)
    ?.questions.find((entry) => entry.number === questionNumber);
  if (!question) throw new Error(`Missing ${variantId} Q${questionNumber}`);

  const wrongChoices = CHOICES.filter((choice) => choice !== question.answer);
  const authoredChoices = Object.keys(rationaleByChoice).sort();
  if (authoredChoices.join() !== [...wrongChoices].sort().join()) {
    throw new Error(
      `Incomplete rationale choices for ${variantId} Q${questionNumber}`,
    );
  }

  const rationales = Object.fromEntries(
    wrongChoices.map((choice) => [
      question.options[choice],
      rationaleByChoice[choice]!,
    ]),
  );
  return {
    prompt: question.prompt,
    options: CHOICES.map((choice) => question.options[choice]),
    answer: question.options[question.answer],
    rationales,
    sourceUrls,
  };
}

export const level3ElectricalInstallation = [
  reviewed(
    "quiz-29735",
    1,
    {
      A: "The nano prefix is 10⁻⁹, so this expression represents only 200 nΩ rather than 200 megaohms.",
      B: "A factor of 10⁹ is the giga scale, making this value one thousand times larger than 200 MΩ.",
      C: "The factor 10⁻⁶ denotes the micro scale; it reverses the required positive exponent for mega.",
    },
    [BIPM_SI],
  ),
  reviewed(
    "quiz-29735",
    2,
    {
      A: "A 12 cm leg would be longer than the stated 10 cm hypotenuse, which is impossible in a right-angled triangle.",
      B: "Subtracting 8 directly from 10 gives 2, but Pythagoras requires the difference of the squared lengths.",
      D: "A 9 cm leg would give 8² + 9² = 145, not the hypotenuse square of 10² = 100.",
    },
    [OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29735",
    3,
    {
      A: "This value is neither the product 3 × 8 × 2.4 nor expressed in the cubic units required for volume.",
      B: "Cubic metres are the right dimension, but 13.4 is not the product of the room's three stated dimensions.",
      C: "The numerical product is correct, but square metres measure area; a three-dimensional room volume needs m³.",
    },
    [BIPM_SI, OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29735",
    4,
    {
      A: "Degrees Celsius are accepted for temperature values, but Celsius is a derived scale rather than the SI base unit requested.",
      B: "Fahrenheit is a non-SI temperature scale and is not the base unit of thermodynamic temperature.",
      D: "There is no SI temperature unit named temps and no recognised degree-T symbol in the SI Brochure.",
    },
    [BIPM_SI],
  ),
  reviewed(
    "quiz-29735",
    5,
    {
      A: "Capacitance is measured in farads, whereas hertz counts the number of periodic cycles occurring each second.",
      C: "Reactance is opposition to alternating current and is measured in ohms, not cycles per second.",
      D: "Electrical resistivity is measured in ohm metres; hertz instead quantifies repetition rate or frequency.",
    },
    [BIPM_SI, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29735",
    6,
    {
      A: "Subtracting the squared components cannot give the hypotenuse of the resistance-reactance impedance triangle.",
      B: "R divided by X is a dimensionless ratio, so it cannot produce an impedance whose unit must be ohms.",
      D: "X divided by R is also dimensionless and describes a ratio rather than the magnitude of vector impedance.",
    },
    [IEC_ELECTROPEDIA, OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29735",
    7,
    {
      B: "A voltmeter has high internal resistance, so placing it in series would impede current and would not sample both load terminals.",
      C: "A rectifier converts alternating current to unidirectional current; it does not define how voltage is measured across a DC load.",
      D: "An inverter creates an AC output from DC and is unrelated to connecting a voltmeter across the two load terminals.",
    },
    [IEC_ELECTROPEDIA, OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29735",
    8,
    {
      B: "Dividing gravitational field strength by force has incompatible dimensions and cannot produce a force called weight.",
      C: "Force is already measured in newtons, so multiplying it by gravitational field strength does not calculate weight from mass.",
      D: "Weight grows in direct proportion to mass; dividing gravitational field strength by mass predicts the opposite relationship.",
    },
    [BIPM_SI, OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29735",
    9,
    {
      A: "A jack raises a load through a screw, hydraulic mechanism or similar actuator; the hammer instead pivots about a fulcrum.",
      C: "A pulley redirects a tensioned rope or belt around a wheel, neither of which is present when the claw pulls the nail.",
      D: "A winch winds rope or cable onto a drum, while a claw hammer multiplies handle effort by lever action.",
    },
    [OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29735",
    10,
    {
      A: "An effort of 125 N would imply a mechanical advantage of about 40, far greater than the four supporting rope sections shown.",
      C: "An effort of 250 N would imply a mechanical advantage near 20 and does not follow from the pulley geometry.",
      D: "An effort of 500 N is one tenth of the approximate 5000 N weight, but the diagram provides a four-to-one advantage.",
    },
    [OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29735",
    11,
    {
      A: "Idle energy is not the standard physics term for energy stored because of position, configuration or condition.",
      B: "Kinetic energy is associated with motion; a stationary raised or deformed system can still store potential energy.",
      D: "Shear strain can store elastic energy in a material, but shear energy is not the general name for all stored energy.",
    },
    [OPENSTAX_PHYSICS, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29735",
    12,
    {
      A: "This is one quarter of the output and is even below 2.1 kW, whereas a machine below 100% efficiency needs more input than output.",
      C: "An input of 2.95 kW would give only about 71% efficiency, not the stated 85% relationship.",
      D: "An input of 3.27 kW would imply roughly 64% efficiency and includes far more loss than the data specifies.",
    },
    [IEC_ELECTROPEDIA, OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29735",
    13,
    {
      A: "This is ten times too small because it effectively loses a factor from the approximate gravitational acceleration.",
      C: "A 37.5 kW result is not obtained from mgh divided by 90 seconds and overstates the lifting rate substantially.",
      D: "A 55.5 kW result is about twenty times the required power and does not account correctly for the 90-second duration.",
    },
    [OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29735",
    14,
    {
      A: "Multiplying 5 kW by 0.8 gives the notional output from a 5 kW input, rather than the input needed for a 5 kW output.",
      B: "This value is below the stated output, which would require an impossible efficiency greater than 100%.",
      C: "An input of 6 kW would imply 83.3% efficiency, not the stated 80% efficiency.",
    },
    [IEC_ELECTROPEDIA, OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29735",
    15,
    {
      A: "Centron is not a recognised atomic particle and therefore cannot be the charge carrier in a metallic conductor.",
      C: "Neutrons are electrically neutral and remain bound in atomic nuclei rather than drifting through the conductor.",
      D: "Protons carry positive charge but are bound inside nuclei in a metal; the mobile charge carriers are conduction electrons.",
    },
    [OPENSTAX_PHYSICS, BIPM_SI],
  ),
  reviewed(
    "quiz-29735",
    16,
    {
      A: "Brass is a copper alloy whose alloying constituents raise its resistivity above that of pure copper.",
      C: "Gold resists surface corrosion and is excellent for contacts, but its bulk resistivity is higher than copper's.",
      D: "Lead has much higher electrical resistivity than copper and is selected for other properties, not maximum conductivity.",
    },
    [IEC_ELECTROPEDIA, BIPM_SI],
  ),
  reviewed(
    "quiz-29735",
    17,
    {
      B: "Keeping 0.4 Ω assumes resistance is independent of length, contrary to R = ρL/A for unchanged material and area.",
      C: "Reducing length cannot raise this resistance to 0.6 Ω when material, temperature and cross-sectional area stay unchanged.",
      D: "Doubling the resistance to 0.8 Ω would correspond to doubling conductor length, not halving it from 50 m to 25 m.",
    },
    [IEC_ELECTROPEDIA, OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29735",
    18,
    {
      B: "Substitution into L = RA/ρ gives 20 m; 30 m would instead produce a resistance of about 0.134 Ω.",
      C: "A 40 m conductor of the same section would have twice the stated resistance, approximately 0.178 Ω.",
      D: "A 50 m result would require 0.2225 Ω at the given resistivity and area, not the measured 0.089 Ω.",
    },
    [BIPM_SI, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29735",
    19,
    {
      A: "Parallel branches share the same two nodes, so their voltages cannot differ even though their resistance values do.",
      B: "This reverses both relationships: branch voltage is common, while unequal 20 Ω and 30 Ω resistors draw unequal currents.",
      D: "Equal branch current would require equal resistance at the common voltage; the two resistors in the diagram are unequal.",
    },
    [OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29735",
    20,
    {
      A: "A series path carries one common current; it is the individual voltage drops, not current, that vary with resistance.",
      B: "Changing a series resistance changes total current, but every component still carries that same resulting current.",
      C: "When series resistance changes, total current and the allocation of voltage drops can change rather than both remaining fixed.",
    },
    [OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29735",
    21,
    {
      A: "The 20 Ω marking is a resistance value, not the voltmeter reading across the complete parallel network.",
      B: "The 30 Ω branch resistance likewise cannot be copied directly as a voltage; Ohm's law with total current is needed.",
      C: "Fifty volts does not equal 5 A multiplied by the 12 Ω equivalent resistance of the two parallel branches.",
    },
    [OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29735",
    22,
    {
      A: "The 150 V drop belongs to the two 30 Ω resistors together, not the 20 Ω resistor across which V1 is connected.",
      B: "Two hundred volts is the complete supply across all 80 Ω, while V1 spans only the 20 Ω part of that series total.",
      C: "Thirty is a resistance value shown in the circuit and cannot be treated directly as the voltmeter's voltage reading.",
    },
    [OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29735",
    23,
    {
      A: "A current of 0.33 A would correspond to 100 V across roughly 300 Ω, not three 30 Ω branches in parallel.",
      B: "A 1.33 A total does not follow from the 10 Ω equivalent resistance and the shown 100 V supply.",
      D: "This is the current in one 30 Ω branch, approximately 3.33 A; the supply carries the sum of all three branch currents.",
    },
    [OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29735",
    24,
    {
      A: "The full supply voltage is shared by the series resistors, so dividing that full voltage by 20 Ω would overstate its current.",
      C: "Series current does not split between components, so there is no basis for assigning the 20 Ω resistor half the total current.",
      D: "Multiplying volts by ohms does not produce amperes and therefore cannot be a valid current calculation.",
    },
    [OPENSTAX_PHYSICS, BIPM_SI],
  ),
  reviewed(
    "quiz-29735",
    25,
    {
      A: "This resembles the reciprocal of 10 Ω rather than the equivalent resistance of five equal 50 Ω branches.",
      C: "Five ohms would result from dividing 50 Ω by ten, but the circuit contains only five equal branches.",
      D: "Fifty ohms is one branch resistance; adding parallel paths must reduce the equivalent below every individual branch.",
    },
    [OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29735",
    26,
    {
      A: "Parallel resistance is found from a reciprocal sum and is smaller than the branch resistances, not their direct sum.",
      B: "Reciprocal describes an operation used in a parallel calculation, not a recognised circuit connection classification.",
      D: "Transverse is not the circuit category defined by adding component resistances along one current path.",
    },
    [OPENSTAX_PHYSICS, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29735",
    27,
    {
      B: "One hundred watts is only one tenth of VI = 100 V × 10 A for the complete three-branch circuit.",
      C: "Three kilowatts would assign about 1 kW to every branch, although each 30 Ω branch dissipates only about 333 W.",
      D: "Three hundred watts approximates one branch's power, not the sum of power in all three parallel branches.",
    },
    [OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29735",
    28,
    {
      A: "The protective earthing conductor carries no normal load current, while this choice omits the neutral return path that does.",
      C: "Considering line resistance alone omits the neutral conductor through which the same single-phase load current returns.",
      D: "Including the earthing conductor would be appropriate for a fault-loop calculation, not normal load voltage drop.",
    },
    [IET_BS_7671, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29735",
    29,
    {
      A: "Calcium deposition is not the electrochemical effect created specifically by nearby dissimilar copper and lead in moist soil.",
      C: "Proximity of the metals does not itself join live conductors or create the low-impedance electrical path called a short circuit.",
      D: "Normal electrode currents are not expected to heat the surrounding soil; electrochemical corrosion is the material risk.",
    },
    [IET_BS_7671, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29735",
    30,
    {
      A: "Bringing like poles together changes the mechanical force between the magnets; it does not simply double their intrinsic strength.",
      B: "The magnets' field strengths are not halved by orientation, although their fields oppose in the region between like poles.",
      C: "Attraction occurs between unlike north and south poles; two south poles exert a repulsive force on one another.",
    },
    [OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29736",
    1,
    {
      A: "The employer remains responsible for ensuring risks are assessed; an employee safety representative is consulted and represents the workforce.",
      B: "Providing safety facilities is a management duty, while the representative's statutory function is to speak for represented employees.",
      D: "A trade-union safety representative represents employees to the employer and inspectors, not the company's management position at HSE meetings.",
    },
    [HSE_SAFETY_REPRESENTATIVES],
  ),
  reviewed(
    "quiz-29736",
    2,
    {
      A: "Fifty percent efficiency would mean an 800 W output from the calculated 1600 W DC input, not the stated 1500 W.",
      B: "Seventy-five percent of the 1600 W input is 1200 W, which falls 300 W below the given output.",
      C: "An efficiency of 87.55% would correspond to an output near 1401 W for this input, not 1500 W.",
    },
    [IEC_ELECTROPEDIA, OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29736",
    3,
    {
      A: "A general price-adjustment mechanism changes the contract price under specified conditions; it is not the pre-agreed remedy for late completion described.",
      B: "An agreement to reach a term later supplies no settled delay amount and may be too uncertain to enforce as the required payment mechanism.",
      D: "A prohibition notice is an HSE enforcement measure used to stop dangerous work, not a client's contractual remedy for delay.",
    },
    [UKSC_PENALTY_CLAUSES, HSE_CDM],
  ),
  reviewed(
    "quiz-29736",
    4,
    {
      A: "Brushes transfer current between the stationary external circuit and rotating commutator segments; they do not perform the timed reversal themselves.",
      C: "Field poles establish the magnetic flux in which the armature rotates, but they do not rectify the armature's alternating emf.",
      D: "Slip rings maintain continuous connections to rotating windings and are associated with AC output or wound rotors, not mechanical rectification.",
    },
    [IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29736",
    5,
    {
      A: "High atmospheric carbon dioxide primarily produces respiratory and neurological effects; direct eye injury is not the characteristic systemic outcome listed.",
      B: "Skin irritation is not the principal effect of inhaling an excessive carbon-dioxide concentration in an enclosed workspace.",
      D: "Watering eyes can accompany many irritants, but rising carbon dioxide is chiefly recognised by headache, dizziness, impaired consciousness and asphyxiation risk.",
    },
    [HSE_CO2],
  ),
  reviewed(
    "quiz-29736",
    6,
    {
      A: "Black is the identifying colour associated with carbon-dioxide extinguishers, not the water type described here.",
      B: "Blue identifies dry-powder extinguishing medium and therefore does not match a water extinguisher.",
      C: "Cream is the identification colour for foam extinguishers rather than the red-coded water medium.",
    },
    [GOV_FIRE_SAFETY],
  ),
  reviewed(
    "quiz-29736",
    7,
    {
      A: "The former Department of Trade and Industry was a government department for business policy, not the named accident-prevention advice body.",
      B: "The Department of Health addresses health and care policy; it is not the specialist organisation among these choices for general accident prevention.",
      C: "The Learning and Skills Council dealt with education and training funding and has been abolished; it was not the general safety-advice organisation.",
    },
    [ROSPA, HSE_RISK],
  ),
  reviewed(
    "quiz-29736",
    8,
    {
      B: "Impedance is the broad AC opposition of a circuit; it is not the generated opposing voltage that balances most of a DC motor's supply.",
      C: "Mutual induction transfers energy between separate magnetically coupled windings, whereas the rotating armature generates its own opposing emf.",
      D: "Slip is the speed difference in an induction motor and is not the voltage term in the DC armature equation.",
    },
    [IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29736",
    9,
    {
      A: "A 1 cm³ cube has 0.01 m sides, so its face-to-face resistance is not numerically the resistivity expressed in Ω·m.",
      C: "A 1 mm³ cube uses millimetre dimensions and would require unit conversion before its resistance could represent SI resistivity.",
      D: "A micrometre-scale cube is far smaller than the SI unit cube and its face-to-face resistance would be correspondingly different.",
    },
    [BIPM_SI, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29736",
    10,
    {
      A: "Able for purpose is not the established suitability phrase and says nothing about the intended conditions or manner of use.",
      C: "Equipment may perform well in a trial yet still be unsuitable for the environment, duty cycle or safety requirements of the intended job.",
      D: "Satisfactory merely restates the premise without identifying the recognised requirement that equipment be suitable for its intended purpose.",
    },
    [HSE_EAWR],
  ),
  reviewed(
    "quiz-29736",
    11,
    {
      A: "Hazard control survey is not the recognised management process that identifies hazards, evaluates risk and determines precautions.",
      C: "Risk control follows assessment by implementing precautions; it is not the name of the preceding hazard-identification and evaluation procedure.",
      D: "Safety assessment is a generic phrase, while UK health-and-safety guidance specifically calls the structured process risk assessment.",
    },
    [HSE_RISK],
  ),
  reviewed(
    "quiz-29736",
    12,
    {
      A: "A capacitor simply placed across the supply would not be in the start-winding current path needed to create the starting phase displacement.",
      B: "Parallel connection with the run winding places it across the supply and does not form the required series auxiliary-winding branch.",
      C: "Putting the capacitor in series with the run winding would disrupt the winding that must remain energised throughout normal operation.",
    },
    [IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29736",
    13,
    {
      B: "The Health and Safety at Work etc. Act addresses workplace health and safety duties, not the detailed processing rights for personal data.",
      C: "The Human Rights Act protects Convention rights but is not the principal operational framework governing controllers, processors and data-subject rights.",
      D: "The Official Secrets Acts concern unauthorised disclosure of protected state information, not general personal and special-category data processing.",
    },
    [ICO_UK_GDPR, UK_DATA_PROTECTION_ACT],
  ),
  reviewed(
    "quiz-29736",
    14,
    {
      A: "Waiting until after an accident makes the assessment reactive and fails to identify controls needed before anyone is exposed.",
      B: "Assessing only after energisation is too late because machinery hazards and the necessary precautions must be considered before work begins.",
      D: "The employer's assessment duty applies without an HSE request; enforcement action is not the trigger for managing foreseeable risk.",
    },
    [HSE_RISK],
  ),
  reviewed(
    "quiz-29736",
    15,
    {
      B: "Worker competence is an important separate duty, but checking competence does not by itself coordinate the timing and interaction of different trades.",
      C: "Equipment cost affects commercial planning but does not specifically prevent one trade's scheduled activity from creating conflict with another's.",
      D: "Break arrangements may appear in a programme, but they are not the core coordination control for interacting construction activities.",
    },
    [HSE_CDM],
  ),
  reviewed(
    "quiz-29736",
    16,
    {
      A: "A BS 88 fuse responds to overcurrent and cannot detect the small line-neutral imbalance used for additional shock protection.",
      B: "Cartridge describes a fuse construction; it still operates from excessive current rather than a residual-current imbalance.",
      C: "A general overcurrent protective device protects conductors against overload and fault current but is not necessarily sensitive enough for additional protection.",
    },
    [IET_BS_7671, IET_RCD_TESTING],
  ),
  reviewed(
    "quiz-29736",
    17,
    {
      B: "A milliohm result is one million times smaller than the calculated 3180 Ω and comes from mishandling the microfarad conversion.",
      C: "This is ten times too large; substituting 50 Hz and 1 µF gives about 3.18 kΩ rather than 31.8 kΩ.",
      D: "This is ten times too small and would correspond to a 10 µF capacitor at 50 Hz, not the stated 1 µF.",
    },
    [BIPM_SI, OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29736",
    18,
    {
      B: "Operating speed is set mainly by supply frequency and pole count, so a cage motor is not inherently a low-speed machine.",
      C: "Cage induction motors are produced across a wide torque range; low torque is not their defining speed characteristic.",
      D: "A cage motor can be varied by a suitable drive, but direct connection to fixed frequency gives substantially constant operating speed.",
    },
    [IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29736",
    19,
    {
      A: "A fuse may clear a sufficiently large earth fault, but it is not the general device for additional protection against electric shock.",
      B: "Voltage spikes are transient overvoltages handled by surge-protective measures; a fuse responds to excessive current.",
      D: "The consumer unit enclosure is not the load being protected by each final-circuit fuse; conductor thermal limits determine the fuse selection.",
    },
    [IET_BS_7671, HSE_EAWR],
  ),
  reviewed(
    "quiz-29736",
    20,
    {
      A: "Cage bars receive no wired external supply; rotor current is induced by the rotating stator field.",
      B: "Slip rings provide external access to a wound rotor, whereas a squirrel-cage rotor has permanently shorted end rings.",
      C: "The bars themselves form the rotor circuit and are not separate conductors placed in series with another rotor winding.",
    },
    [IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29736",
    21,
    {
      A: "For fixed separation and dielectric, C = εA/d shows that capacitance is directly, not inversely, proportional to plate area.",
      C: "Keeping capacitance unchanged ignores the additional charge-storage surface created when the overlapping plate area increases.",
      D: "Increasing finite plate area cannot make capacitance vanish; zero would require removing the effective overlap or changing the circuit entirely.",
    },
    [OPENSTAX_PHYSICS, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29736",
    22,
    {
      B: "A controlled rectifier is normally a thyristor-type function; transistor saturation here describes the conducting state of a switch.",
      C: "Linear current amplification uses the active region, while deep saturation sacrifices proportional gain to obtain a low on-state voltage.",
      D: "An open switch corresponds to cutoff with negligible collector current, the opposite of the heavily conducting saturation state.",
    },
    [IEC_ELECTROPEDIA, OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29736",
    23,
    {
      B: "This value is not obtained from P = VI cos φ; the ideal inductor has cos 90° = 0 regardless of its 2.3 A current.",
      C: "Twenty-three kilowatts is incompatible with a 230 V source and 100 Ω reactance, whose current is only 2.3 A.",
      D: "The product 230 V × 2.3 A is about 529 VA of reactive apparent power, not watts of average real dissipation.",
    },
    [OPENSTAX_PHYSICS, BIPM_SI],
  ),
  reviewed(
    "quiz-29736",
    24,
    {
      A: "A BS 1361 fuse responds to overcurrent and cannot compare outgoing line current with returning neutral current.",
      B: "A cartridge fuse also operates thermally under excessive current, so normal aggregate leakage may remain far below its rating.",
      D: "Solid-state device is too broad and does not identify protection that measures residual imbalance and trips the supply.",
    },
    [IET_RCD_TESTING, IET_BS_7671],
  ),
  reviewed(
    "quiz-29736",
    25,
    {
      A: "Back emf is normally used for the opposing generated voltage in a motor; generator excitation directly raises the generated output emf.",
      B: "Generator frequency is set by rotational speed and pole count, so increasing field current alone does not raise frequency.",
      D: "Stronger field flux increases induced emf at unchanged speed, making a reduced output the opposite response.",
    },
    [IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29736",
    26,
    {
      A: "Copper and friction are genuine loss mechanisms, but capacitance and voltage are not broad DC-machine loss categories.",
      B: "Current and voltage are operating quantities rather than loss categories, even though their product is used to calculate power.",
      D: "Iron and copper are categories, but magnetic is vague and overlaps iron effects while omitting mechanical friction and windage.",
    },
    [IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29736",
    27,
    {
      A: "The centrifugal mechanism opens only the auxiliary start-winding branch as speed rises; it does not disconnect the motor's main supply.",
      B: "The run winding must remain energised to produce torque after acceleration, so disconnecting it would stop normal operation.",
      D: "Starter is imprecise and waiting until exact full speed is unnecessary; the switch opens the start winding as running speed is approached.",
    },
    [IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29736",
    28,
    {
      A: "The numerical value near 13 is the heater current in amperes, found from P/V, rather than its resistance in ohms.",
      B: "This resistance would dissipate about 3.38 kW at 230 V, which exceeds the stated 3.0 kW rating.",
      D: "A 35.2 Ω resistance would dissipate only about 1.5 kW at 230 V, half the stated heater power.",
    },
    [OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29736",
    29,
    {
      A: "Ten volts is twice the 5 V RMS magnitude, but peak inverse voltage here is the sinusoidal peak, not a simple doubling.",
      B: "Halving the RMS voltage has no basis in the reverse half-cycle and greatly understates the diode's peak stress.",
      C: "About 3.5 V is 5/√2, which converts in the wrong direction; RMS-to-peak requires multiplication by √2.",
    },
    [OPENSTAX_PHYSICS, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29736",
    30,
    {
      A: "Using resistance alone ignores the perpendicular 15 Ω inductive-reactance component, so impedance must exceed 20 Ω.",
      B: "This value is not the hypotenuse of the 20 Ω by 15 Ω impedance triangle and would be below the resistance component.",
      D: "Five ohms resembles the arithmetic difference between R and XL, but orthogonal impedance components are combined by squares.",
    },
    [OPENSTAX_PHYSICS, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29737",
    1,
    {
      A: "COSHH controls exposure to hazardous substances and does not provide the principal legal duties for electrical danger during fault diagnosis.",
      B: "ESQCR chiefly governs public electricity-supply safety, quality and continuity rather than the conduct of an electrician diagnosing workplace equipment.",
      D: "WEEE regulates waste electrical and electronic equipment at end of life, not protection from shock while fault finding.",
    },
    [HSE_EAWR],
  ),
  reviewed(
    "quiz-29737",
    2,
    {
      B: "Billing may use a record of work completed, but a method statement's safety purpose is to define the controlled sequence before the task.",
      C: "Customer-review monitoring is a commercial feedback activity and cannot replace the task-specific precautions set out in a method statement.",
      D: "A safe method may also improve efficiency, but reducing cost cannot displace the controls required to prevent injury.",
    },
    [HSE_RISK, HSE_HSG85],
  ),
  reviewed(
    "quiz-29737",
    3,
    {
      A: "BS 3036 is a product standard associated with semi-enclosed fuses and provides no general specification for modern test probes and leads.",
      B: "BS 7671 sets installation requirements, while the HSE document specifically addressing safe low-voltage test equipment is GS38.",
      C: "IET Guidance Note 3 covers inspection and testing practice broadly; it is not the named HSE guidance focused on probe and lead construction.",
    },
    [HSE_GS38],
  ),
  reviewed(
    "quiz-29737",
    4,
    {
      A: "A condition-report inspection schedule records observations during an EICR; it is not the certificate for this completed alteration.",
      C: "A full EIC is used for a new installation, new circuit or work of that extent, while this alteration remains on an existing circuit.",
      D: "An EICR assesses an existing installation for continued service and is not issued simply to certify one completed minor alteration.",
    },
    [IET_MODEL_FORMS],
  ),
  reviewed(
    "quiz-29737",
    5,
    {
      A: "The test-instrument manufacturer needs reports about its equipment, not routine notice of installation defects affecting the client's premises.",
      B: "A specialist manufacturer may advise on a particular product, but it does not control the commercial unit or authorise remedial work there.",
      C: "HSE is an enforcement regulator and is not normally the first recipient of every serious defect discovered during contracted diagnostic work.",
    },
    [HSE_EAWR, HSE_HSG85],
  ),
  reviewed(
    "quiz-29737",
    6,
    {
      B: "External loop impedance characterises the supply earth path at the origin and is not the first explanation for several heaters losing power after heavy use.",
      C: "Phase sequence matters to rotating three-phase equipment, while insulation resistance is not the first check for a simultaneous heater outage.",
      D: "Prospective short-circuit current is a protective-device duty characteristic and does not reveal whether the circuit presently has voltage or a tripped device.",
    },
    [HSE_HSG85, IET_LIVE_TESTING],
  ),
  reviewed(
    "quiz-29737",
    7,
    {
      A: "A small neutral-earth leakage is far below the large fault current needed to operate the distributor's main fuse.",
      B: "The water path is described between neutral and earth, not as a low-impedance line-neutral short circuit that would operate a fuse.",
      C: "Leakage at one luminaire cannot exchange the three line conductors and therefore cannot reverse phase sequence.",
    },
    [IET_RCD_TESTING, IET_BS_7671],
  ),
  reviewed(
    "quiz-29737",
    8,
    {
      A: "A dead short would normally produce a high fault current and rapid protective-device operation, not continuing arcing only while the heaters run.",
      C: "A genuinely low-resistance joint carries load without the local voltage drop and heating that sustain connection arcing.",
      D: "A transient overvoltage is brief; repeated sound for the full period of load operation points instead to a current-dependent poor connection.",
    },
    [HSE_EAWR, HSE_HSG85],
  ),
  reviewed(
    "quiz-29737",
    9,
    {
      A: "An overtightened accessory termination can damage a conductor locally, but it is not as direct a location clue as visibly damaged containment.",
      B: "A joint at a circuit-breaker may become loose or overheated, whereas the prompt asks where a cable short is most likely along the route.",
      C: "A fall in ambient temperature does not normally cut or crush sound cable insulation and therefore provides no physical fault location.",
    },
    [HSE_EAWR],
  ),
  reviewed(
    "quiz-29737",
    10,
    {
      B: "An open line at the origin would remove supply from every socket on the radial circuit, not only the final point.",
      C: "A short circuit at the final outlet would normally operate the circuit protective device and interrupt the earlier outlets as well.",
      D: "A short circuit at the origin would affect the complete circuit and operate protection rather than leave all preceding outlets working.",
    },
    [IET_INSPECTION_FAQ],
  ),
  reviewed(
    "quiz-29737",
    11,
    {
      B: "An open line stops current and leaves outlets dead; it does not intermittently create excess current that melts a fuse element.",
      C: "Metering accuracy at the intake affects energy recording, not the current-time operation of a 15 A circuit fuse.",
      D: "A transient overvoltage is not the likely pattern after extensive heater use; accumulated load current explains intermittent overcurrent operation.",
    },
    [IET_BS_7671, HSE_EAWR],
  ),
  reviewed(
    "quiz-29737",
    12,
    {
      A: "Non-metallic access equipment may control one contact risk, but a tag alone does not address occupants, escape lighting or multiple supplies.",
      B: "Confirming emergency lights is important, yet it omits safe isolation of backup sources and management of the occupied stairway.",
      D: "A standby generator must not simply be connected to a DNO supply; changeover and isolation must prevent dangerous parallel operation or backfeed.",
    },
    [HSE_RISK, HSE_HSG85],
  ),
  reviewed(
    "quiz-29737",
    13,
    {
      A: "A continuity tester uses a low test voltage and current, so it is much less likely to overstress connected electronics than an insulation test.",
      B: "A PFC instrument performs a brief live loop measurement and does not apply the hundreds of volts DC used for insulation resistance.",
      D: "A loop-impedance tester injects a controlled short-duration current; the distinctive damage risk here is the insulation tester's high DC voltage.",
    },
    [IET_INSPECTION_FAQ, HSE_GS38],
  ),
  reviewed(
    "quiz-29737",
    14,
    {
      B: "Electronic equipment is not inherently a source of noxious fumes; the immediate hazard from exposed energised parts is current through the body.",
      C: "Whether an RCD test is suitable is a test-planning issue, not the principal personal hazard created by live diagnostic access.",
      D: "Continuity testing should be performed dead and may affect equipment if misapplied, but it is not the main risk during live diagnosis.",
    },
    [HSE_HSG85, HSE_GS38],
  ),
  reviewed(
    "quiz-29737",
    15,
    {
      A: "Avoiding disruption to others can be useful, but the diagnostic sequence primarily prevents duplicated tests and random, inefficient component replacement.",
      C: "BS 7671 supports safe verification, yet it does not make every efficient diagnostic sequence a specific compliance outcome.",
      D: "EAWR requires danger to be prevented; the particular benefit of logical fault finding in this question is systematic use of time and evidence.",
    },
    [HSE_HSG85],
  ),
  reviewed(
    "quiz-29737",
    16,
    {
      A: "This gives only the DC boundary and omits the separate 50 V AC level stated by GS38 for extra-low voltage.",
      C: "The 4 V to 24 V range lies well inside extra-low voltage and is not the pair of AC and DC upper boundaries requested.",
      D: "GS38 is expressly guidance for low-voltage systems up to 1000 V AC; its probe precautions are not confined to high voltage.",
    },
    [HSE_GS38],
  ),
  reviewed(
    "quiz-29737",
    17,
    {
      A: "A clamp meter senses current around a conductor and cannot prove that every supply conductor at the motor terminals is dead.",
      B: "A loop or PSC tester is designed for energised impedance and fault-current measurements, not the prove-test-prove isolation sequence.",
      C: "A phase-rotation indicator shows conductor sequence on a live supply but cannot establish the absence of dangerous voltage.",
    },
    [HSE_GS38, HSE_HSG85],
  ),
  reviewed(
    "quiz-29737",
    18,
    {
      A: "IΔn denotes rated residual operating current; it is a quantity and symbol rather than a unit of displayed operating time.",
      B: "Milliamperes measure the residual test current, while the compliance result requested from the timer is elapsed time.",
      C: "Megaohms are used for insulation resistance and do not describe how quickly an RCD disconnects.",
    },
    [IET_RCD_TESTING, BIPM_SI],
  ),
  reviewed(
    "quiz-29737",
    19,
    {
      B: "A prospective earth-fault test is a live fault-current assessment and neither safely traces nor divides a broken CPC into sections.",
      C: "Testing only at the origin does not identify which downstream half of the radial contains the open conductor.",
      D: "Insulation resistance assesses leakage between conductors; it is not the low-resistance continuity method for locating a CPC break.",
    },
    [IET_INSPECTION_FAQ, HSE_HSG85],
  ),
  reviewed(
    "quiz-29737",
    20,
    {
      A: "FELV lacks the full protective separation requirements of SELV or PELV and is treated as a low-voltage circuit for shock protection.",
      B: "An ordinary low-voltage circuit tested at 500 V DC has a minimum insulation resistance of 1 MΩ, not 0.5 MΩ.",
      D: "The UK 110 V reduced-low-voltage system remains low voltage and does not take the 250 V, 0.5 MΩ PELV test criterion.",
    },
    [IET_INSPECTION_FAQ, IET_RLV],
  ),
  reviewed(
    "quiz-29737",
    21,
    {
      B: "This would require about 1.18 Ω at 16 A, far above the stated 0.648 Ω resistance after the specified temperature correction.",
      C: "A 35.54 V drop would require roughly 2.22 Ω, more than four times the given cold resistance and unrelated to the 1.2 factor.",
      D: "This is less than the uncorrected drop of 16 × 0.54 = 8.64 V, even though heating raises rather than lowers copper resistance.",
    },
    [IET_BS_7671, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29737",
    22,
    {
      A: "Being able to test removed parts helps diagnosis but cannot make an obsolete compatible starter or component available for the repair.",
      B: "Historic test data can assist comparison, but lack of a physically compatible replacement can determine whether the old starter is repairable.",
      D: "Temporary supplies may matter for essential continuous loads; they do not solve compatibility when replacing an old lathe's DOL starter.",
    },
    [HSE_EAWR, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29737",
    23,
    {
      A: "Welfare facilities are a standing workplace requirement but do not distinguish the repair-versus-replace decision for a failed production component.",
      C: "Packing-staff availability does not quantify the downtime consequence of keeping the production line stopped for a lengthy repair.",
      D: "The earthing arrangement must remain safe under either decision, but it is not the dominant commercial factor created by continuous production.",
    },
    [HSE_CDM, HSE_EAWR],
  ),
  reviewed(
    "quiz-29737",
    24,
    {
      A: "Emergency lighting and safe access remain necessary controls, but they do not prevent thawing and stock loss while freezer power is unavailable.",
      B: "Warm high-visibility clothing protects the worker in the cold area, yet it does not maintain the supermarket's refrigeration duty.",
      D: "Replacement cost matters commercially, but protecting temperature-sensitive stock during extended diagnosis is the immediate continuity requirement.",
    },
    [HSE_RISK, HSE_EAWR],
  ),
  reviewed(
    "quiz-29737",
    25,
    {
      A: "Access and installation size shape the job plan before work, but they do not demonstrate that the finished repair was verified and recorded.",
      B: "Out-of-hours scheduling may reduce disruption and is not a technical completion requirement after rectification.",
      D: "The original designer's signature belongs to earlier design documentation and does not validate later diagnostic or repair work.",
    },
    [IET_MODEL_FORMS, IET_INSPECTION_FAQ],
  ),
  reviewed(
    "quiz-29737",
    26,
    {
      A: "Earth fault loop impedance requires a suitable instrument and competent live-testing practice; it is not a homeowner routine check.",
      B: "Electrical separation is a protective measure established by design, not a periodic user-operated test of the installed RCD.",
      D: "Insulation resistance applies a DC test voltage after isolation and disconnection precautions, so it must not be delegated to the homeowner.",
    },
    [IET_RCD_USER_CHECK],
  ),
  reviewed(
    "quiz-29737",
    27,
    {
      B: "A 1000 Ω result is effectively an open or severely resistive bonding path, not sound protective continuity.",
      C: "Values in the kilohm-to-megaohm range show no useful metallic bonding continuity for carrying fault or equipotential current.",
      D: "A universal below-1 Ω rule ignores expected conductor resistance; it could accept a bad short conductor and rejects no implausibly low reading.",
    },
    [IET_INSPECTION_FAQ, IET_BS_7671],
  ),
  reviewed(
    "quiz-29737",
    28,
    {
      A: "A half-IΔn non-trip check can be used diagnostically, but it is not the prescribed effectiveness test in current BS 7671 field practice.",
      C: "Current field guidance sets no general 2 × IΔn effectiveness criterion for the additional-protection RCD described.",
      D: "The former 5 × IΔn rapid-trip test is no longer a prescribed BS 7671 field test, though instruments may retain it for diagnosis.",
    },
    [IET_RCD_TESTING],
  ),
  reviewed(
    "quiz-29737",
    29,
    {
      A: "MV is a multiple-unit symbol for megavolts, not the general quantity symbol printed for the equipment's rated voltage.",
      B: "P denotes power, so checking it would establish a power rating rather than compatibility with the available supply voltage.",
      D: "U0 denotes voltage to Earth in installation notation; the general rated-voltage quantity on the equipment plate is U.",
    },
    [BIPM_SI, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29737",
    30,
    {
      A: "COSHH may be relevant to controlling exposure if a lamp breaks, but it is not the principal end-of-life electrical-equipment disposal regime.",
      B: "EAWR addresses prevention of electrical danger at work and does not establish the collection and recycling system for discarded lamps.",
      C: "RIDDOR governs reporting specified workplace injuries and dangerous occurrences, not routine disposal of intact fluorescent lamps.",
    },
    [UK_WEEE],
  ),
  reviewed(
    "quiz-29738",
    1,
    {
      B: "People in unrelated buildings are not the only scope; the inspector must protect anyone who may be affected by the work at hand.",
      C: "This includes the client and others but omits the inspector's duty to avoid electrical danger to themselves.",
      D: "Protecting only the inspector ignores colleagues, occupiers and other people who could be exposed by the inspection or testing activity.",
    },
    [HSE_EAWR],
  ),
  reviewed(
    "quiz-29738",
    2,
    {
      B: "A check at the intake establishes supply conditions there, not that every conductor at the remote lighting work point is dead.",
      C: "Testing only at the protective device can miss a borrowed conductor, alternative supply or wiring error downstream at the work location.",
      D: "The supply side is intentionally still live when only a final-circuit device is opened and is not the isolated lighting circuit to be worked on.",
    },
    [HSE_HSG85],
  ),
  reviewed(
    "quiz-29738",
    3,
    {
      B: "A second available key can let another person remove the lock without the worker's control, defeating personal secure isolation.",
      C: "Three available keys create still more routes for unauthorised release and do not give the isolating person exclusive control.",
      D: "Four keys are unnecessary for a personal lock-off and materially increase the chance of inadvertent re-energisation.",
    },
    [HSE_HSG85],
  ),
  reviewed(
    "quiz-29738",
    4,
    {
      A: "Earth-fault loop impedance is generally a live measurement; safe isolation is intended to remove electrical danger before dead work.",
      B: "Phase-sequence testing needs an energised multiphase supply and is not the reason for isolating equipment before contact.",
      C: "Preventing RCD operation is not the safety objective; an RCD is only one protective measure and cannot replace isolation.",
    },
    [HSE_HSG85],
  ),
  reviewed(
    "quiz-29738",
    5,
    {
      A: "Opening only the normal source leaves the standby generator capable of energising or backfeeding conductors thought to be dead.",
      B: "Running the generator creates an active alternative source and increases danger unless the required test specifically calls for controlled live operation.",
      C: "A functional check of standby operation does not isolate either source or establish safe conditions for the intended test.",
    },
    [HSE_HSG85, HSE_EAWR],
  ),
  reviewed(
    "quiz-29738",
    6,
    {
      A: "BS 7671 is a non-statutory installation standard; it can support compliance evidence but is not itself the prosecution legislation.",
      B: "COSHH addresses risks from hazardous substances and is not the principal statutory framework for dangerous electrical isolation.",
      D: "ESQCR governs electricity distributors and supply characteristics; the work-activity duties for safe isolation arise under EAWR.",
    },
    [HSE_EAWR],
  ),
  reviewed(
    "quiz-29738",
    7,
    {
      A: "BS 7671 is a British Standard and non-statutory, even though following it often helps demonstrate good electrical practice.",
      C: "IET Guidance Note 3 is technical guidance for inspection and testing and has no independent status as legislation.",
      D: "GS38 is HSE guidance on test equipment; it explains good practice but is not itself a statutory instrument.",
    },
    [HSE_EAWR, IET_BS_7671, HSE_GS38],
  ),
  reviewed(
    "quiz-29738",
    8,
    {
      A: "BS 7671 publishes model certification and reporting forms, including the EIC, Minor Works Certificate and EICR schedules.",
      C: "IET Guidance Note 3 supports inspection, testing and recording and includes certification and reporting material for that process.",
      D: "The IET On-Site Guide is an installation companion and provides practical certification guidance, unlike the test-lead focus of GS38.",
    },
    [HSE_GS38, IET_MODEL_FORMS, IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29738",
    9,
    {
      B: "Earth fault loop impedance remains relevant on TN-S because it verifies the fault path and supports automatic disconnection assessment.",
      C: "Functional tests still apply to installed switchgear, controls and protective devices where relevant, regardless of the TN-S earthing label.",
      D: "Insulation resistance is a general verification test for circuit insulation and remains applicable to a TN-S installation.",
    },
    [IET_INSPECTION_FAQ, IET_BS_7671],
  ),
  reviewed(
    "quiz-29738",
    10,
    {
      A: "Protective-conductor continuity is a dead test of installation wiring and does not establish the incoming supply's external line-earth impedance.",
      B: "Ring-final continuity verifies the three conductor loops within one final circuit, not the external supply path at the origin.",
      D: "Insulation resistance applies a DC test to isolated conductors and measures leakage, not the energised line-earth supply loop.",
    },
    [IET_LIVE_TESTING, IET_INSPECTION_FAQ],
  ),
  reviewed(
    "quiz-29738",
    11,
    {
      A: "Kilo-ohms are one thousand ohms and are too coarse for the small resistance values normally recorded for protective-conductor continuity.",
      B: "Megaohms are used for high insulation resistance; a sound protective path is measured many orders of magnitude lower.",
      C: "Gigaohms suit extremely high insulation values and cannot be the normal unit for a metallic CPC continuity result.",
    },
    [BIPM_SI, IET_INSPECTION_FAQ],
  ),
  reviewed(
    "quiz-29738",
    12,
    {
      A: "Kilo-ohms are below the normal recording scale for sound installation insulation and would make compliant high readings cumbersome.",
      C: "Some instruments can display gigaohms, but the installation schedule convention records insulation resistance in megaohms.",
      D: "Expressing a typical 200 MΩ result as 200,000,000 Ω is valid dimensionally but not the required practical recording unit.",
    },
    [BIPM_SI, IET_INSPECTION_FAQ],
  ),
  reviewed(
    "quiz-29738",
    13,
    {
      A: "A serial number gives traceability to one instrument but supplies no evidence that its present readings remain within tolerance.",
      B: "A standard marking describes design conformity and cannot reveal drift, damage or a current measurement error.",
      C: "Removing protective lead fuses can create danger and changes the lead arrangement rather than checking accuracy against a reference.",
    },
    [HSE_GS38, IET_INSPECTION_FAQ],
  ),
  reviewed(
    "quiz-29738",
    14,
    {
      A: "GS38 requires leads to have sufficient capacity for their duty but does not impose a universal 2.5 mm² cross-sectional area.",
      C: "GS38 says leads should be long enough but not so long that they become clumsy; a compulsory length over 3 m would conflict with that approach.",
      D: "Single insulation alone does not meet the guidance for adequately insulated, mechanically protected leads with safe connectors and probes.",
    },
    [HSE_GS38],
  ),
  reviewed(
    "quiz-29738",
    15,
    {
      A: "Visual examination for cracked cases, cut insulation and damaged probes is a necessary pre-use safety check, so it cannot be omitted.",
      B: "The tester's operation must be verified before it is trusted, particularly when it is used to prove the absence of voltage.",
      C: "Dead tests require safe isolation and proof of dead before test connections are made, making this a genuine preparation requirement.",
    },
    [HSE_GS38, HSE_HSG85],
  ),
  reviewed(
    "quiz-29738",
    16,
    {
      A: "Adding lead resistance would increase an already high result; the correction requires removing the leads' contribution.",
      C: "Long leads add measurable resistance but remain usable when suitable and properly nulled or subtracted from the reading.",
      D: "Short leads do not inherently cause a high continuity result; their smaller resistance normally reduces the correction required.",
    },
    [HSE_GS38, IET_INSPECTION_FAQ],
  ),
  reviewed(
    "quiz-29738",
    17,
    {
      A: "A wrong range can distort or over-range a result, but it does not create a real conductive route around a physically broken bond.",
      C: "Long leads tend to add series resistance; they cannot bridge the break and produce a false satisfactory low-resistance path.",
      D: "Calibration error may bias the displayed value, but parallel metalwork specifically explains continuity even though the tested conductor is open.",
    },
    [IET_INSPECTION_FAQ],
  ),
  reviewed(
    "quiz-29738",
    18,
    {
      B: "The meter measures the sum of the linked outward line and return CPC resistances; subtracting the two has no circuit basis.",
      C: "R1 alone would describe only the line conductor, while the temporary link forces test current through line and CPC in series.",
      D: "R2 alone omits the line leg that carries the test current from the board to the furthest point.",
    },
    [IET_INSPECTION_FAQ],
  ),
  reviewed(
    "quiz-29738",
    19,
    {
      B: "End-to-end and cross-connected readings do verify that the circuit forms a continuous ring without unintended interconnections.",
      C: "Stage-one measurements establish continuity of line, neutral and CPC loops, which is a central purpose of the ring test.",
      D: "Cross-connected measurements at each outlet help expose incorrect conductor connections and spurs, so this is part of the continuity procedure.",
    },
    [IET_INSPECTION_FAQ],
  ),
  reviewed(
    "quiz-29738",
    20,
    {
      A: "A larger CPC on the same route would have lower resistance than the live conductors, the reverse of the 0.167 Ω observation.",
      B: "A shorter conductor could have higher resistance only with another changed property; all three loops should follow the same ring route.",
      D: "Equal material, length and cross-sectional area would produce closely similar loop resistances, not a CPC value about 1.67 times higher.",
    },
    [IET_INSPECTION_FAQ, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29738",
    21,
    {
      A: "A 0.5 MΩ minimum belongs to the specified SELV or PELV test conditions, not an ordinary 230 V lighting circuit.",
      C: "Two megaohms would be a satisfactory result, but it is twice the minimum acceptance value and therefore not the requested threshold.",
      D: "Four megaohms is also comfortably satisfactory yet cannot be called the minimum when 1 MΩ meets the requirement.",
    },
    [IET_INSPECTION_FAQ],
  ),
  reviewed(
    "quiz-29738",
    22,
    {
      A: "Leaving the value at 10 MΩ ignores that doubling cable length doubles insulation area and therefore doubles parallel leakage paths.",
      B: "A fall to 2.5 MΩ would correspond to four times the original length under the ideal inverse-length relationship.",
      C: "Twenty megaohms predicts resistance increasing with cable length, the opposite of adding more parallel leakage area.",
    },
    [IET_INSPECTION_FAQ, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29738",
    23,
    {
      A: "Line-conductor continuity alone cannot show that switches and protective devices interrupt the line rather than neutral.",
      B: "CPC continuity proves the protective path and does not establish the placement of single-pole devices in the live conductors.",
      C: "The accessible outer screw shell of an Edison-screw holder should be connected to neutral, not deliberately made live.",
    },
    [IET_BS_7671, IET_INSPECTION_FAQ],
  ),
  reviewed(
    "quiz-29738",
    24,
    {
      A: "A low-resistance ohmmeter is for dead continuity testing and must not be connected across an energised incoming supply.",
      C: "An earth-electrode tester measures electrode resistance using its specified method and is not a live polarity indicator.",
      D: "An insulation tester applies a high DC test voltage to isolated wiring and would be unsafe and unsuitable on the incoming live supply.",
    },
    [HSE_GS38, HSE_HSG85],
  ),
  reviewed(
    "quiz-29738",
    25,
    {
      A: "A 2.04 Ω result corresponds to roughly 74.7% of 2.73 Ω, not the stated 80% quick-reference calculation.",
      C: "This repeats the Chapter 41 hot-conductor tabulated maximum without applying the ambient-measurement allowance requested.",
      D: "A value of 3.41 Ω exceeds even the original 2.73 Ω maximum and results from dividing by 0.8 rather than multiplying.",
    },
    [IET_INSPECTION_FAQ],
  ),
  reviewed(
    "quiz-29738",
    26,
    {
      A: "This is only the measured line-earth PEFC and ignores the higher estimated three-phase short-circuit duty.",
      B: "This leaves the highest line-neutral PSCC undoubled and therefore does not apply the conservative rule stated in the prompt.",
      C: "Adding 0.9 kA PEFC to 1.5 kA PSCC mixes different fault paths; the rule doubles the highest line-neutral value instead.",
    },
    [IET_ON_SITE_GUIDE, IET_LIVE_TESTING],
  ),
  reviewed(
    "quiz-29738",
    27,
    {
      B: "There is no general instruction to double the line-earth current on a single-phase installation; the measured values are compared directly.",
      C: "Doubling line-neutral current would invent a larger duty that was not measured or specified for this single-phase supply.",
      D: "Recording the lower result could understate the fault current that protective equipment must safely interrupt.",
    },
    [IET_LIVE_TESTING, IET_MODEL_FORMS],
  ),
  reviewed(
    "quiz-29738",
    28,
    {
      A: "A main isolator is primarily a switching device and may rely on coordinated protection; its breaking duty is not the only relevant characteristic.",
      C: "Nominal current is the continuous load rating of an isolator and says nothing about safely interrupting prospective short-circuit current.",
      D: "A protective device's ampere rating governs normal and overcurrent selection, while short-circuit capacity is a separate kA characteristic.",
    },
    [IET_BS_7671, IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29738",
    29,
    {
      A: "A supply-side connection bypasses the RCD's sensing path, so injected test current will not verify operation of that device.",
      B: "Distance cannot cure a supply-side connection; the test current still fails to pass through the RCD under test.",
      D: "Any supply-side location is upstream of the device and cannot create the intended residual imbalance through its current transformer.",
    },
    [IET_RCD_TESTING, HSE_GS38],
  ),
  reviewed(
    "quiz-29738",
    30,
    {
      A: "With the instrument connected to identified lines, the displayed rotation can support a check that the plain conductors are labelled consistently.",
      B: "A phase-sequence indicator at motor supply terminals can establish the phase order associated with expected rotation direction.",
      D: "Showing clockwise or anticlockwise sequence is the instrument's core function and can therefore be checked at the installation origin.",
    },
    [IEC_ELECTROPEDIA, HSE_GS38],
  ),
  reviewed(
    "quiz-29739",
    1,
    {
      A: "A design specification states required performance and selected products, but exact case dimensions are taken from the particular manufacturer's documentation.",
      C: "Site plans show where luminaires are located within the building and do not normally reproduce each product's detailed dimensions.",
      D: "Wiring diagrams show electrical connections and circuit relationships rather than the physical size of a luminaire housing.",
    },
    [IET_BS_7671],
  ),
  reviewed(
    "quiz-29739",
    2,
    {
      A: "The Electricity Safety, Quality and Continuity Regulations are a statutory instrument governing public supply duties and characteristics.",
      B: "The Electricity at Work Regulations 1989 are legally enforceable statutory regulations for electrical systems and work activities.",
      C: "The Health and Safety at Work etc. Act 1974 is primary legislation and therefore cannot be the non-statutory document.",
    },
    [HSE_EAWR, IET_BS_7671],
  ),
  reviewed(
    "quiz-29739",
    3,
    {
      A: "A delivery record identifies goods movements and drivers only incidentally; it cannot provide a complete roll of everyone on site.",
      B: "Locking escape routes prevents safe evacuation and breaches the purpose of fire precautions rather than helping account for people.",
      C: "A parking list omits pedestrians, passengers, visitors and people using off-site parking, so it is not a reliable occupancy record.",
    },
    [HSE_CDM, GOV_FIRE_SAFETY],
  ),
  reviewed(
    "quiz-29739",
    4,
    {
      A: "A note added to a later invoice is not contemporaneous visual evidence of the decoration's detailed pre-work condition.",
      B: "A site-diary description can help, but it is less objective and less detailed than dated photographs of the existing marks.",
      C: "Images taken only after work cannot show whether observed damage already existed before the electrical activity began.",
    },
    [HSE_CDM],
  ),
  reviewed(
    "quiz-29739",
    5,
    {
      B: "Removing every furnishing off site is disproportionate when a suitable cover can control the limited dust from one ceiling hole.",
      C: "Spraying water during electrical installation work introduces moisture, mess and possible electrical danger without protecting the furnishings appropriately.",
      D: "Cleaning afterwards is reactive and may not remove embedded fine dust; protection should stop contamination before drilling starts.",
    },
    [HSE_RISK, HSE_CONSTRUCTION_ELECTRICITY],
  ),
  reviewed(
    "quiz-29739",
    6,
    {
      B: "Metallic basket supports cables but remains open on all sides, so it does not enclose unsheathed insulated singles.",
      C: "Cable tray is an open support system and gives no complete enclosure against access or mechanical contact.",
      D: "PVC capping is a cover used over cables on a surface and is not a complete conduit or trunking enclosure.",
    },
    [IET_BS_7671, IET_CONDUIT_AND_TRUNKING],
  ),
  reviewed(
    "quiz-29739",
    7,
    {
      A: "Category 6 data cable is designed for communications and is neither voltage-rated nor constructed as a 230 V appliance supply flex.",
      C: "Mineral-insulated copper cable is a fixed, relatively rigid wiring system and cannot accommodate normal handheld appliance movement.",
      D: "Steel-wire-armoured cable needs fixed-system glands and is too rigid and heavy for the repeated flexing of a handheld appliance lead.",
    },
    [HSE_PORTABLE_EQUIPMENT, IET_BS_7671],
  ),
  reviewed(
    "quiz-29739",
    8,
    {
      A: "SWA normally needs additional preparation and glands, so it is not generally cheaper to terminate than a flat-profile fixed cable.",
      B: "The steel-wire armour reduces flexibility and increases weight; flexibility is not its advantage over flat-profile cable.",
      D: "The armour must be correctly terminated with suitable glands or equivalent manufacturer-specified accessories, not left unglanded.",
    },
    [IET_BS_7671],
  ),
  reviewed(
    "quiz-29739",
    9,
    {
      A: "Crampet-type fixings restrain conduit to a surface and do not provide a sliding joint that absorbs thermal length change.",
      C: "Hospital saddles support and space conduit for cleaning access, but fixed saddles alone cannot take up longitudinal expansion.",
      D: "Through boxes provide cable access or draw-in points; an ordinary rigid box does not act as the specified expansion joint.",
    },
    [IET_BS_7671, IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29739",
    10,
    {
      A: "The fitting changes direction through one right angle, not through the 180° reversal described by this choice.",
      C: "An inside 180° fitting would reverse the trunking run and is not the planar L-shaped right-angle piece shown.",
      D: "An internal 90° bend follows an inside change of wall plane; the illustrated fitting turns through 90° while remaining flat in one plane.",
    },
    [IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29739",
    11,
    {
      A: "Metal basket is ventilated support with large openings and therefore cannot serve as a complete enclosure for insulated singles.",
      B: "Metal tray supports sheathed cables but leaves them exposed; it is not the enclosed containment needed for unsheathed conductors.",
      C: "PVC capping covers surface-run cable but does not surround and contain the conductors as a wiring enclosure.",
    },
    [IET_BS_7671, IET_CONDUIT_AND_TRUNKING],
  ),
  reviewed(
    "quiz-29739",
    12,
    {
      A: "The summed cable factors for the eight shown conductors exceed the allowable factor for 16 mm conduit over this length and bend count.",
      B: "Twenty-millimetre conduit also has insufficient draw-in capacity once the four 6 mm² singles and the smaller conductors are combined.",
      D: "Thirty-two-millimetre conduit would accommodate the cables, but it is larger than the minimum size selected by the tabulated factor method.",
    },
    [IET_CONDUIT_AND_TRUNKING, IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29739",
    13,
    {
      A: "Fifty cables use only about one third of the tabulated trunking capacity and therefore are not the maximum number requested.",
      B: "One hundred cables remain below the quotient of the 100 mm × 75 mm trunking factor and the 6 mm² cable factor.",
      C: "One hundred and thirty cables fit, but twenty further whole cables can be included before the Appendix E factor limit is reached.",
    },
    [IET_CONDUIT_AND_TRUNKING, IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29739",
    14,
    {
      B: "Fire-retardant describes reaction to flame and does not by itself provide the cold flexibility and portable-duty construction required on site.",
      C: "Flat twin-and-CPC is intended for fixed protected installation and is unsuitable for repeated movement on a temporary construction supply.",
      D: "MICC offers fire and temperature resistance but is a rigid fixed-wiring cable, not a flexible lead for portable temporary equipment.",
    },
    [HSE_CONSTRUCTION_ELECTRICITY, IET_BS_7671],
  ),
  reviewed(
    "quiz-29739",
    15,
    {
      A: "An RCD reduces some shock risk but cannot prevent exposed conductors, arcing or overheating from a damaged flex and never justifies continued use.",
      B: "Using the tool before reporting prolongs exposure to the known defect; it must be removed from service immediately.",
      D: "Ordinary tape is not a controlled repair restoring insulation, strain relief and mechanical integrity, so the tool remains unsafe.",
    },
    [HSE_PORTABLE_EQUIPMENT],
  ),
  reviewed(
    "quiz-29739",
    16,
    {
      A: "A chalk line marks a long straight reference across a surface but does not directly indicate whether the accessory itself is horizontal.",
      B: "A laser can establish a wider datum, yet the simple hand tool normally placed against one accessory is the spirit level.",
      C: "A plumb line establishes true vertical by gravity and does not directly check the horizontal level requested.",
    },
    [HSE_CDM],
  ),
  reviewed(
    "quiz-29739",
    17,
    {
      A: "A coping saw is intended mainly for curved or intricate cuts and is less robust and direct for repeated straight cuts through metal tray.",
      B: "A cross-cut saw has tooth geometry for cutting timber across its grain and is unsuitable for sheet-metal cable tray.",
      D: "A keyhole saw makes internal or curved openings in board and similar materials rather than straight cuts across metal tray sections.",
    },
    [HSE_CDM],
  ),
  reviewed(
    "quiz-29739",
    18,
    {
      A: "Solid brick accepts a masonry plug or anchor; the expanding wings shown need a hollow space behind a board.",
      C: "A concrete block is normally drilled for a suitable masonry fixing rather than using a toggle designed to open behind sheet material.",
      D: "A sound wooden substrate can hold an appropriate screw directly, so the illustrated hollow-wall toggle is unnecessary.",
    },
    [HSE_CDM],
  ),
  reviewed(
    "quiz-29739",
    19,
    {
      A: "A distance saddle is formed to stand conduit away from the surface without the separate flat spacer bar visible in this fitting.",
      B: "A P clip wraps around cable, hose or small conduit with a single fixing lug and does not have this two-screw saddle profile.",
      D: "A U clip holds conduit close to the mounting surface and lacks the spacer bar that creates the shown clearance.",
    },
    [IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29739",
    20,
    {
      B: "A 1.25 m interval exceeds the tabulated horizontal spacing for insulating trunking in the 800 mm² cross-sectional-area band.",
      C: "A 1.75 m interval is associated with larger or differently constructed containment and would allow this insulating trunking to sag.",
      D: "Two metres is four times the specified 0.5 m interval and provides insufficient support for this horizontal insulating run.",
    },
    [IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29739",
    21,
    {
      A: "A 100 mA RCD neither provides the usual 30 mA additional protection nor makes a diagonal route outside prescribed zones acceptable by itself.",
      B: "Plastic capping offers limited covering and is not recognised as sufficient mechanical protection for this shallow cable outside safe zones.",
      D: "Metal armour left unearthed can become live after penetration and cannot provide the required earthed metallic protective measure.",
    },
    [IET_BS_7671],
  ),
  reviewed(
    "quiz-29739",
    22,
    {
      A: "Cement is incompatible with a local plasterboard ceiling repair and a surface smear would lack secure backing across the opening.",
      B: "Paper stapled over the hole provides neither structural board continuity nor a durable, finishable ceiling surface.",
      D: "Wet tissue has no structural strength, fire performance or durable bond and is not an acceptable building-fabric repair material.",
    },
    [HSE_CDM],
  ),
  reviewed(
    "quiz-29739",
    23,
    {
      A: "A short circuit is an abnormal low-impedance connection between conductors, not excessive demand in an otherwise healthy circuit.",
      B: "An earth fault is unintended current from a live conductor to earth or protective metalwork, not ordinary load misuse.",
      C: "An open circuit interrupts the current path and normally stops load current rather than raising it above the circuit rating.",
    },
    [IET_BS_7671, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29739",
    24,
    {
      A: "A BS 1362 cartridge fuse clears by melting its element and contains no resettable thermal and magnetic trip mechanisms.",
      B: "A BS 3036 semi-enclosed fuse operates through heating and melting fuse wire, not a combined bimetal and solenoid trip.",
      C: "A BS 88-2 fuse uses a calibrated fusible element and arc-quenching construction rather than separate thermal and magnetic releases.",
    },
    [IET_BS_7671, IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29739",
    25,
    {
      A: "The 0.44 Ω value belongs to another device rating or characteristic and is below the cited C32 quick-reference value.",
      C: "The 0.79 Ω table value is associated with a different protective-device characteristic; it is not the C32 measured-Zs entry.",
      D: "The 1.38 Ω value is the familiar quick-reference scale for a less demanding characteristic and is too high for a Type C 32 A breaker.",
    },
    [IET_ON_SITE_GUIDE, IET_INSPECTION_FAQ],
  ),
  reviewed(
    "quiz-29739",
    26,
    {
      B: "Two kiloamperes is twice the rated short-circuit capacity listed for the BS 3036 S1A fuse and would overstate its capability.",
      C: "Three kiloamperes is not the tabulated rating for this semi-enclosed fuse and cannot be assumed without verified backup protection.",
      D: "Four kiloamperes exceeds the listed 1 kA capability by a factor of four and would be unsafe as a standalone breaking claim.",
    },
    [IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29739",
    27,
    {
      A: "A fault necessarily disconnects some protection or leaves a dangerous condition; poor selectivity does not guarantee zero equipment loss.",
      B: "The poorly coordinated final-circuit breaker can remove that entire circuit, but it need not disconnect the whole building supply system.",
      D: "Operation of only the appliance fuse is the desired selective outcome; poor coordination means the upstream breaker may also operate.",
    },
    [IET_BS_7671, IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29739",
    28,
    {
      B: "A ring-final fused spur is not the prescribed arrangement for this storage capacity; the substantial fixed water-heating load needs its own circuit.",
      C: "A lighting circuit is designed and protected for lighting loads and is unsuitable for the current and duty of a 20 litre water heater.",
      D: "An unfused spur provides no local current limitation and is not an acceptable way to supply this substantial fixed appliance from a ring.",
    },
    [IET_ON_SITE_GUIDE, IET_BS_7671],
  ),
  reviewed(
    "quiz-29739",
    29,
    {
      A: "The emergency lamp illuminates on mains failure, but the unit must receive supply beforehand to charge its battery and sense that failure.",
      B: "Permanent isolation would let the battery discharge and prevent the monitoring circuit from maintaining readiness for an emergency.",
      D: "A firefighter's switch is used for particular high-voltage luminous-sign or similar installations, not normal control of this self-contained luminaire.",
    },
    [IET_BS_7671],
  ),
  reviewed(
    "quiz-29739",
    30,
    {
      A: "A circuit breaker clears overloads and faults but does not by itself require a deliberate restart after a temporary loss of supply voltage.",
      C: "An RCD responds to residual-current imbalance and offers no no-volt-release control against unexpected machine restart.",
      D: "An SPD limits transient overvoltage; it neither drops out a machine contactor on undervoltage nor latches the controls off.",
    },
    [HSE_EAWR, IEC_ELECTROPEDIA],
  ),
] as const;
