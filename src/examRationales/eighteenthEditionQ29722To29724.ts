import { reviewed18ePart2 } from "./eighteenthEditionQ29716To29718";

const q29724 = [
  reviewed18ePart2("quiz-29724", 1, [
    "By 1922 the wiring rules had existed for four decades, so that date cannot be the first edition prompted by early electric-lighting fires.",
    "The 2008 date marks the publication of a much later BS 7671 edition, not the origin of the national wiring rules.",
    "The 2015 amendment belongs to the modern 17th Edition era and is more than a century later than the first rules.",
  ]),
  reviewed18ePart2("quiz-29724", 2, [
    "Copper price may influence project cost, but market price is not an electrical safety characteristic or external influence on the completed installation.",
    "A direct lightning strike is handled primarily through a BS EN 62305 lightning-protection assessment; BS 7671 design considers the resulting surge interface rather than designing the strike system itself.",
    "Planning approval governs land use and development consent and does not determine the installation's technical safety or electromagnetic behaviour.",
  ]),
  reviewed18ePart2("quiz-29724", 3, [
    "Property is also protected against fire, heat and other electrical damage, so limiting the purpose to living beings omits a fundamental objective.",
    "Livestock are explicitly included because their physiology and contact with Earth can make electrical conditions especially hazardous.",
    "Both livestock and property are omitted from this choice even though shock and fire protection expressly cover them.",
  ]),
  reviewed18ePart2("quiz-29724", 4, [
    "The a.c. and d.c. limits are reversed here: the d.c. ceiling is higher at 1500 V, while a.c. ends at 1000 V.",
    "Two hundred and forty volts a.c. is only a common utilization voltage, and 1600 V d.c. exceeds the low-voltage scope boundary.",
    "Four hundred and fifteen volts is not the upper a.c. scope limit, while 11 kV d.c. is high voltage and far outside BS 7671's normal range.",
  ]),
  reviewed18ePart2("quiz-29724", 5, [
    "A booth may be one physical enclosure, but it is not the defined BS 7671 term for any temporary display or sales area.",
    "A show is the wider event containing temporary installations; it does not name the individual structure used by an exhibitor.",
    "An exhibition is the event or activity, while the defined temporary display, marketing or sales structure within it is a stand.",
  ]),
  reviewed18ePart2("quiz-29724", 6, [
    "Twelve volts a.c. is a special-location SELV limit in some wet conditions, not the general upper boundary of extra-low voltage.",
    "Twenty-four volts a.c. and 50 V d.c. are conservative values but do not define the complete ELV voltage band.",
    "The a.c. half is right, but ripple-free d.c. remains extra-low voltage up to 120 V rather than stopping at 100 V.",
  ]),
  reviewed18ePart2("quiz-29724", 7, [
    "TN-C-S describes the earthing arrangement and is not a load total to which simultaneous-use diversity can be applied.",
    "The number of final circuits is chosen for safety and function; diversity changes estimated simultaneous demand, not the physical circuit count.",
    "Prospective short-circuit current is a worst-case fault value and must never be reduced on the assumption that faults are diverse.",
  ]),
  reviewed18ePart2("quiz-29724", 8, [
    "Tail size is selected by design from load, installation method and protection; it is not an incoming-supply value obtained by all three stated routes.",
    "Maximum demand belongs to the consumer's load assessment and cannot normally be measured or supplied as an inherent source characteristic before design.",
    "The circuit protective-device rating is selected by the designer after load and cable calculations rather than enquired of the distributor as a supply parameter.",
  ]),
  reviewed18ePart2("quiz-29724", 9, [
    "Switchgear quantity is a detailed layout result reached after the installation's general characteristics and circuit division have been assessed.",
    "Circuit calculations use the assessed supply and environmental data; they are design work rather than a category of general characteristic.",
    "Distribution circuits are parts of the designed installation, not a condition such as environment, supply or utilization being assessed.",
  ]),
  reviewed18ePart2("quiz-29724", 10, [
    "Poor power factor increases current and can disturb or burden the supply, so it is a recognised compatibility characteristic.",
    "Large starting currents can depress voltage and affect nearby equipment, making them a core equipment-compatibility issue.",
    "Transient overvoltages can damage or upset other equipment, so insulation withstand and surge control form part of compatibility.",
  ]),
  reviewed18ePart2("quiz-29724", 11, [
    "Dividing circuits limits the scope of unwanted tripping so a harmless leakage or local fault does not remove unrelated services and create danger.",
    "Separate circuits help prevent backfeeds or shared connections from energizing a circuit that a worker reasonably believes has been isolated.",
    "Separating noisy loads and sensitive wiring can reduce conducted and radiated interference between circuits sharing an installation.",
  ]),
  reviewed18ePart2("quiz-29724", 12, [
    "An IT source has no direct Earth connection, or connects through high impedance, unlike the solidly earthed neutral described.",
    "TN-C-S combines neutral and protective functions as a PEN for part of the route before separating them, so they are not separate throughout.",
    "TT uses an independent installation electrode rather than a protective conductor carried all the way from the earthed source.",
  ]),
  reviewed18ePart2("quiz-29724", 13, [
    "Seventy-five degrees exceeds the stated metallic touch-temperature limit and increases burn risk because metal transfers heat quickly to skin.",
    "Eighty degrees is the allowance for a comparable non-metallic touched surface, not a metal surface with high thermal conductivity.",
    "Eighty-five degrees goes still farther beyond the permitted metal temperature and could cause a burn during brief contact.",
  ]),
  reviewed18ePart2("quiz-29724", 14, [
    "A BS 3036 fuse is too slow to clear a 205 A current in 0.2 s; that current is only about 3.4 times its 60 A rating.",
    "The fuse curve does not reach 0.4 s at this modest multiple of rated current, so assuming rapid final-circuit operation is unsafe.",
    "Even 0.8 s is substantially faster than the rewireable fuse's time/current characteristic at the stated fault current.",
  ]),
  reviewed18ePart2("quiz-29724", 15, [
    "A 0.2 s requirement applies at a higher line-to-Earth voltage band for certain covered final circuits, not this 230 V circuit above 32 A.",
    "The 0.4 s rule covers 230 V socket circuits and final circuits not exceeding 32 A supplying fixed equipment, so this larger fixed load is outside it.",
    "One second is not the TN maximum for the stated larger fixed-equipment circuit; the distribution-style allowance is five seconds.",
  ]),
  reviewed18ePart2("quiz-29724", 16, [
    "Failure to operate on short circuit would leave destructive fault energy flowing, which is the opposite of the protective device's function.",
    "Operating below rated current would cause nuisance trips during legitimate load and does not describe the required short-circuit withstand capability.",
    "A device should carry rated current without operating; tripping exactly at In is not the breaking-capacity requirement being assessed.",
  ]),
  reviewed18ePart2("quiz-29724", 17, [
    "Insulation of live parts prevents normal contact and is basic protection, not the insulation arrangement intended to remain safe after one layer fails.",
    "Obstacles deter accidental approach in controlled locations but do not protect exposed metalwork after an insulation fault.",
    "Placing live parts out of reach is another restricted basic-protection method and does not provide a second insulation barrier.",
  ]),
  reviewed18ePart2("quiz-29724", 18, [
    "Supervision cannot make an unexpected automatic restart safe when someone may still be in contact with the machinery at restoration.",
    "A time delay merely postpones the same uncommanded restart and cannot confirm that guards, tools and people are clear.",
    "A key may be one control method, but the essential requirement is deliberate manual reclosure rather than a universal keyed mechanism.",
  ]),
  reviewed18ePart2("quiz-29724", 19, [
    "An autotransformer shares a winding and conductive connection with the mains, so a primary fault can transfer dangerous voltage to the ELV side.",
    "A generic double-wound transformer is not necessarily built and verified to the safety-isolating requirements needed for a SELV source.",
    "A step-up transformer raises voltage and its name gives no assurance of the protective separation and low output needed for SELV.",
  ]),
  reviewed18ePart2("quiz-29724", 20, [
    "Half a metre is the spacing used for a lower lamp-power band and may let a 100-to-300 W beam overheat combustible material.",
    "A 0.6 m gap remains below the stated 0.8 m fallback where no manufacturer-specific distance is provided.",
    "One metre is the larger separation associated with projectors above 300 W; it exceeds the minimum for this power band.",
  ]),
  reviewed18ePart2("quiz-29724", 21, [
    "BD1 describes low-density occupation with easy evacuation, so it lacks the high occupant density stated.",
    "BD2 combines low density with difficult evacuation and therefore gets both the density or egress condition wrong here.",
    "BD4 is high density with difficult evacuation, whereas the question explicitly says people can evacuate easily.",
  ]),
  reviewed18ePart2("quiz-29724", 22, [
    "A gas service must never carry installation electrode current because faults could create ignition and the pipe may be altered by the utility.",
    "An insulated water pipe has no reliable conductive contact with the general mass of Earth and therefore cannot function as an electrode.",
    "Public water pipework is outside the installer's control and is increasingly replaced by plastic, so its continuity cannot be relied upon.",
  ]),
  reviewed18ePart2("quiz-29724", 23, [
    "Subtracting an origin reading from a far-end reading derives the installation R1+R2 portion, not the external Ze value itself.",
    "A far-end loop reading includes Ze plus the circuit line and CPC resistance, so it cannot isolate the external supply contribution.",
    "Subtracting a calculated R1+R2 from another reading can estimate Ze, but the described 'supply point' wording is not the direct controlled origin measurement requested.",
  ]),
  reviewed18ePart2("quiz-29724", 24, [
    "Overload activation is a protective response and does not describe the dangerous consequence that undervoltage no-volt release prevents.",
    "Unexpected stopping occurs when voltage is lost; holding the circuit off after restoration is intended to prevent the opposite event, an uncommanded start.",
    "An RCD trip is driven by residual current and is unrelated to the machinery-restart hazard created by supply voltage returning.",
  ]),
  reviewed18ePart2("quiz-29724", 25, [
    "Double insulation reduces shock risk and is a protective construction, so it cannot explain why an exposed energized element is dangerous.",
    "Fault contact concerns metal made live by insulation failure; the element here is intended to be live during normal operation.",
    "Earth leakage may be a separate defect, but no leakage is needed for a person to touch the exposed live heating element directly.",
  ]),
  reviewed18ePart2("quiz-29724", 26, [
    "A battery is independent of the mains and can provide a genuinely separated extra-low-voltage source when its voltage is suitable.",
    "An independent generator winding can provide separation from higher-voltage circuits and is a permitted SELV source when correctly arranged.",
    "A safety isolating transformer is purpose-built to maintain protective separation between primary and extra-low-voltage secondary windings.",
  ]),
  reviewed18ePart2("quiz-29724", 27, [
    "Opening a PEN removes both neutral return and protective earthing, potentially raising every bonded exposed part towards line voltage.",
    "RCD compatibility is a separate issue; the defining rule is that the combined protective and neutral conductor must not be interrupted.",
    "An RCD cannot have a PEN downstream because protective and neutral functions must first be separated, but saying simply 'no RCD' is not the universal PEN requirement.",
  ]),
  reviewed18ePart2("quiz-29724", 28, [
    "Seismic protection concerns movement and structural forces and has no relationship to limiting short-duration electrical overvoltage.",
    "Plumbing devices control water systems, while this abbreviation identifies equipment connected across electrical conductors to divert surges.",
    "A surgical prototype is a medical-development term with no recognised role in electrical transient-overvoltage protection.",
  ]),
  reviewed18ePart2("quiz-29724", 29, [
    "Two single-phase lighting circuits can be supplied from a small ordinary board and do not demonstrate a need for multiple three-phase ways.",
    "Ordinary three-phase motors use three line conductors without a neutral, so describing them as TP&N makes this arrangement atypical.",
    "Four single-phase ring circuits could occur in a dwelling or office and do not by themselves make the board an industrial motor board.",
  ]),
  reviewed18ePart2("quiz-29724", 30, [
    "Unearthed conduit may deter minor contact but provides no low-impedance fault path if a fixing pierces the conduit and energizes it.",
    "A 500 mA RCD is far above the 30 mA additional-protection rating and does not provide the prescribed mechanical or earthed covering route.",
    "The cable is not absolutely forbidden; earthed metal containment or another method giving equivalent penetration protection can make the route compliant.",
  ]),
  reviewed18ePart2("quiz-29724", 31, [
    "A company address does not tell users when the installation was last assessed, so it cannot establish the inspection history.",
    "The inspector's name may appear in the report but does not tell the duty holder when the next periodic check is due.",
    "The client's name identifies ownership but omits the last-inspection date needed to show the interval already elapsed.",
  ]),
  reviewed18ePart2("quiz-29724", 32, [
    "BS EN 60417 standardizes graphical symbols for equipment and does not design or commission building fire-alarm systems.",
    "BS EN 60898 covers circuit-breakers for household and similar installations, not detection, alarm audibility or fire-system categories.",
    "BS 6217 is not the principal code of practice for fire detection and alarm systems in buildings.",
  ]),
  reviewed18ePart2("quiz-29724", 33, [
    "Interrupting a PEN can remove the protective path and energize bonded metalwork, so the no-switching statement is a valid safety rule.",
    "Ten square millimetres copper provides the minimum mechanical robustness for a normal fixed PEN conductor, making this statement valid.",
    "The name PEN comes from its combined protective-earthing and neutral functions, so this is the defining characteristic rather than an error.",
  ]),
  reviewed18ePart2("quiz-29724", 34, [
    "Fault current creates magnetic fields around conductors, so electromagnetic effects are an unavoidable part of high-current fault behaviour.",
    "Opposing magnetic forces can bend busbars, move cables and strain supports, producing real electromechanical stress during a short circuit.",
    "I²t energy heats conductors and insulation rapidly, so thermal damage is one of the main conditions fault-withstand design must limit.",
  ]),
  reviewed18ePart2("quiz-29724", 35, [
    "Leaving neutral outside the sensing core prevents normal line and neutral currents cancelling and would make the RCD indicate a false imbalance.",
    "The protective conductor must remain outside the core; including it can cancel genuine leakage returning by the CPC and defeat residual detection.",
    "Neutral and Earth alone omit the line conductor, so the transformer would see normal load current as an imbalance instead of comparing all live conductors.",
  ]),
  reviewed18ePart2("quiz-29724", 36, [
    "The phrase 'Earth Bonding' misidentifies an electrode earthing connection and omits the standard warning not to remove it.",
    "A generic danger label does not state that this specific electrical connection is safety-critical and must remain in place.",
    "The wording is close but not the prescribed durable phrase, and 'Safety Electrical Earth' is not the standard label text.",
  ]),
  reviewed18ePart2("quiz-29724", 37, [
    "Bonding only to a separate electrode can leave a dangerous voltage difference between the lightning system and the installation's main earthing network.",
    "Incoming pipe services require their own bonding assessment but are not the single common electrical reference for the lightning down-conductors.",
    "Structural steel may form part of lightning protection, yet bonding it alone does not establish the required connection to the installation earthing terminal.",
  ]),
  reviewed18ePart2("quiz-29724", 38, [
    "A lamp needing an external ignitor requires separate starting controlgear, so the luminaire connection and insulation arrangement differ from the internal-ignitor type.",
    "The flammable-surface mark addresses heat transfer into the mounting material and contains no information about sodium-lamp starting gear.",
    "A limited-surface-temperature mark protects against ignition in dusty environments and likewise says nothing about whether the lamp carries an ignitor.",
  ]),
  reviewed18ePart2("quiz-29724", 39, [
    "TN-C uses one PEN conductor, while split concentric cable deliberately provides distinct neutral and earth wires.",
    "TN-C-S contains a combined PEN for part of the system; ordinary concentric CNE cable, rather than split SNE cable, expresses that arrangement.",
    "TT relies on a local installation electrode and does not require the distributor to bring a separate protective conductor with the neutral.",
  ]),
  reviewed18ePart2("quiz-29724", 40, [
    "A non-conductive enclosure may prevent direct contact but does not transform FELV into a safety-separated SELV or PELV source.",
    "A supply-side fuse limits overcurrent but cannot provide the protective separation or touch-voltage conditions missing from FELV.",
    "Chapter 6 verification is still necessary, but successful testing does not make FELV an electric-shock protective measure in a medical location.",
  ]),
  reviewed18ePart2("quiz-29724", 41, [
    "Calling it a danger earth connection omits the prescribed safety wording and could be confused with a hazardous live-earth condition.",
    "A danger electrical connection label suggests the connection itself is hazardous rather than warning that removing it creates danger.",
    "Safety Earth Connection is not the prescribed universal text and narrows a bonding clamp's function inaccurately.",
  ]),
  reviewed18ePart2("quiz-29724", 42, [
    "Ownership changes are legal or administrative records and do not affect the technical verification of the addition or the existing defects observed.",
    "Five years of repair history may help an inspector but is not information the contractor can verify or must reproduce on the new-work certificate.",
    "Voltage drop for relevant new circuits belongs in design and circuit details; one longest-circuit figure does not report defects already present.",
  ]),
  reviewed18ePart2("quiz-29724", 43, [
    "Building control does not set the technical inspection interval and has no direct knowledge of the installation's day-to-day deterioration.",
    "The owner arranges inspection and may accept recommendations, but preference alone cannot replace a risk-based assessment by a competent inspector.",
    "The network company maintains its supply equipment and does not determine how often the consumer's internal installation needs periodic verification.",
  ]),
  reviewed18ePart2("quiz-29724", 44, [
    "Operating time is verified from fault-loop impedance or device testing, whereas polarity checks which conductor the device interrupts.",
    "Low resistance in the fault path is a continuity or earth-loop requirement and does not show that a switch sits in line rather than neutral.",
    "Insulation resistance detects leakage through insulation; it cannot identify swapped line and neutral connections where insulation remains sound.",
  ]),
  reviewed18ePart2("quiz-29724", 45, [
    "A complete refurbishment is substantial new work and normally receives initial verification and an installation certificate for what was erected.",
    "A new installation has no service history to assess periodically and must first pass initial inspection and testing.",
    "An extension to a lighting circuit is an addition verified and certified as new work, not a periodic condition assessment of the whole installation.",
  ]),
  reviewed18ePart2("quiz-29724", 46, [
    "Two and a half metres may clear pedestrians but is far too low for caravans, delivery vehicles and raised equipment moving below the conductors.",
    "Three and a half metres still provides inadequate clearance for tall leisure vehicles and site machinery.",
    "Eight metres would give additional clearance but exceeds the specified minimum and is not required in every vehicle-movement area.",
  ]),
  reviewed18ePart2("quiz-29724", 47, [
    "A separately supplied single item can be protected without an RCD because electrical separation prevents an Earth-referenced shock path.",
    "The 300 mA device at the origin limits fire risk from earth leakage in the temporary installation and is a Section 740 requirement.",
    "The 230/400 V a.c. ceiling keeps the temporary public installation within ordinary low-voltage utilization limits.",
  ]),
  reviewed18ePart2("quiz-29724", 48, [
    "A 100 mA RCD is more sensitive and may be chosen, but it is not the highest rating permitted for the specified fire-protection function.",
    "Thirty milliamps is the personal additional-protection rating for sockets and smaller circuits, not the maximum agricultural fire threshold.",
    "Five hundred milliamps allows excessive earth leakage before disconnection and exceeds the limit intended to reduce ignition risk.",
  ]),
  reviewed18ePart2("quiz-29724", 49, [
    "IP55 combines solid-object and water-jet ingress protection; it does not certify resistance to a mechanical impact energy.",
    "IPX4 addresses splashing water only and contains no impact classification for knocks on the pontoon.",
    "IPX8 addresses continuous immersion and likewise gives no information about enclosure resistance to AG2 impacts.",
  ]),
  reviewed18ePart2("quiz-29724", 50, [
    "IP34 includes splash protection but unnecessarily fixes a solid-object digit; the stated minimum water protection is expressed independently as X4.",
    "IP4X covers small solid objects but has no declared water resistance for spray and splashing around a marina jetty.",
    "IPXXB describes protection against finger access to hazardous parts and does not state any water-ingress performance.",
  ]),
  reviewed18ePart2("quiz-29724", 51, [
    "The occupied floor around the pool is outside the basin and falls in the surrounding zones rather than the immersed Zone 0 volume.",
    "A horizontal plane 2.5 m high defines an upper zoning boundary, not the water-filled interior itself.",
    "Extending two metres above the basin describes part of a surrounding zone and makes Zone 0 much larger than the water interior.",
  ]),
  reviewed18ePart2("quiz-29724", 52, [
    "High dust is important in some industries, but open water, salt and wet bodies are the characteristic marina influences in this comparison.",
    "Cable grouping is an installation arrangement used for thermal derating, not an external influence imposed by the marina environment.",
    "Very high ambient temperature is not a normal defining marina condition; water contact and reduced body resistance dominate the stated risk.",
  ]),
  reviewed18ePart2("quiz-29724", 53, [
    "IP67 states both dust-tightness and temporary immersion; the question asks only for the minimum water characteristic, expressed as IPX7.",
    "IPX4 covers splashing and is insufficient for a heating unit that may be embedded where water can collect around it.",
    "IPX6 covers powerful water jets but does not demonstrate resistance to the temporary immersion condition addressed by X7.",
  ]),
  reviewed18ePart2("quiz-29724", 54, [
    "Two joules represents a lighter mechanical impact and does not cover the likely blows from moving plant in the stated area.",
    "Three joules is still below the specified impact performance and offers too little margin for vehicle or machinery contact.",
    "Four joules is close but remains one joule below the minimum withstand energy required for this conduit location.",
  ]),
  reviewed18ePart2("quiz-29724", 55, [
    "A departure from the latest edition may be safe and would not automatically receive C1; C1 is about present danger, not simple nonconformity.",
    "Improvement recommended is code C3, used where safety could be enhanced but no present or potential danger is identified.",
    "Potentially dangerous is code C2; C1 is reserved for a condition presenting immediate danger and risk of injury.",
  ]),
  reviewed18ePart2("quiz-29724", 56, [
    "BS EN 60539-2 is not the recognised busbar-trunking assembly standard and would not provide the required type verification.",
    "BS EN 60898 covers household and similar circuit-breakers, which may be installed in an assembly but do not standardize the trunking system.",
    "BS EN 61534-1 covers powertrack systems, a different prefabricated distribution product from busbar trunking.",
  ]),
  reviewed18ePart2("quiz-29724", 57, [
    "A 32 A fuse would defeat the fused connection unit's purpose and allow its load and flexible cable to carry more than their 13 A design.",
    "A 3 A fuse is appropriate for small appliances but is not the largest BS 1362 cartridge that the standard FCU can accept.",
    "A 5 A fuse may suit a modest fixed load, yet it remains below the maximum standard rating available for the spur.",
  ]),
  reviewed18ePart2("quiz-29724", 58, [
    "Chapter 41 addresses protection against electric shock, not the design and operation measures for electrical energy efficiency.",
    "There is no separate Chapter 81 serving as the general location of these requirements; the material is organized as Part 8.",
    "Part 6 covers initial and periodic verification, certification and testing rather than energy-efficiency design.",
  ]),
  reviewed18ePart2("quiz-29724", 59, [
    "Four tenths of a second is the TN fault-disconnection limit for certain final circuits, not the product operating-time limit at IΔn.",
    "Two hundred milliseconds is faster than required for a general non-delay RCBO at rated residual current and is not the specified maximum.",
    "Forty milliseconds was associated with the former five-times test for additional protection, not the current test at one times 30 mA.",
  ]),
];

export const eighteenthEditionQ29722To29724 = [...q29724];
