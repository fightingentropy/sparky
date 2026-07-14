import { reviewed18ePart2 } from "./eighteenthEditionQ29716To29718";

const q29725 = [
  reviewed18ePart2("quiz-29725", 1, [
    "A Type A RCCB to BS EN 61008 detects sinusoidal a.c. and pulsating d.c. residual current, making it suitable where that waveform can occur.",
    "A Type A RCBO to BS EN 61009 adds overcurrent protection while retaining the pulsating-d.c. residual-current response needed in medical circuits.",
    "A Type B RCD detects smooth d.c. and mixed-frequency residual currents as well as Type A waveforms, so it is suitable for more demanding equipment.",
  ]),
  reviewed18ePart2("quiz-29725", 2, [
    "Several outlets and appliances on one separated source allow two independent faults to create a dangerous voltage between simultaneously accessible enclosures.",
    "Supplying a group of final circuits extends the separated system beyond the controlled single-load arrangement permitted in a bathroom.",
    "Class I construction does not remove the multiple-fault risk; its exposed metalwork makes control of the separated circuit especially important.",
  ]),
  reviewed18ePart2("quiz-29725", 3, [
    "Back-up protection raises the upstream device's breaking capability for a high fault but does not necessarily keep healthy circuits energized.",
    "Operating upstream and downstream devices together removes more of the installation than necessary and is the opposite of selective coordination.",
    "Omitting overload protection exposes conductors to sustained overheating and is not a continuity strategy for ordinary downstream circuits.",
  ]),
  reviewed18ePart2("quiz-29725", 4, [
    "A 1.04 ohm limit would drive much more fault current than the 15 A BS 3036 fuse needs for the stated disconnection condition.",
    "At 1.68 ohms the fuse would still operate within the limit, but this is more restrictive than the tabulated 2.43 ohm maximum.",
    "Nine point one ohms would allow only about 24 A of earth-fault current, far too little for a 15 A rewireable fuse to clear promptly.",
  ]),
  reviewed18ePart2("quiz-29725", 5, [
    "Maximum HV earth-fault current is needed because its product with earthing resistance governs the transferred voltage imposed on the LV installation.",
    "Earthing quality determines whether fault energy is controlled and how much potential rise is transferred between the interconnected systems.",
    "The resistance of the earthing arrangement is a direct input to calculating earth-potential rise during an HV-side fault.",
  ]),
  reviewed18ePart2("quiz-29725", 6, [
    "A 150 mA device is more sensitive and may be chosen, but the question asks for the maximum rating accepted for this fire-protection function.",
    "Thirty milliamps provides personal additional protection and often causes unnecessary trips if used as the sole fire-protection threshold for a large installation.",
    "Five hundred milliamps permits too much leakage energy before operation and exceeds the limit intended to reduce ignition from earth faults.",
  ]),
  reviewed18ePart2("quiz-29725", 7, [
    "A cable hanging beneath a tray is not actually supported at suitable intervals and can sag, strain its terminations or obstruct an escape route.",
    "Plastic cable ties soften early in fire and cannot be the sole support where falling wiring could entangle occupants or firefighters.",
    "A wall-to-wall cable span places its weight and any impact on the conductors and creates a low obstruction across the access route.",
  ]),
  reviewed18ePart2("quiz-29725", 8, [
    "The pitch CPC must connect to the other protective conductors of that pitch so fault current has a deliberate return path.",
    "Connection to a suitable local Earth arrangement is essential; prohibiting all Earth connection would leave exposed caravan metalwork unprotected.",
    "Neutral and protective conductors remain separate in the caravan circuit, but this wording does not identify the specific exported-PME hazard asked about.",
  ]),
  reviewed18ePart2("quiz-29725", 9, [
    "Electrical heating system is a broad description covering direct, storage and other arrangements, so it does not identify the rapid-response type.",
    "Fast heating system is conversational wording rather than the defined category used to distinguish immediate heat release from storage heating.",
    "High performance says nothing about whether heat is stored or delivered straight to the room and is not the regulatory definition.",
  ]),
  reviewed18ePart2("quiz-29725", 10, [
    "Half a second is not a Table 41.1 value for this uncategorised TN circuit and unnecessarily approaches the faster final-circuit rule.",
    "One second is used for other supply and voltage conditions, not the general TN allowance outside Regulation 411.3.2.2.",
    "Two seconds is neither the rapid covered-final-circuit time nor the five-second TN time permitted for the circuits excluded from that rule.",
  ]),
  reviewed18ePart2("quiz-29725", 11, [
    "A TN system has a solid source-Earth reference and does not present the unearthed-source condition behind this autotransformer restriction.",
    "Grouping TN and TT together ignores their different source and exposed-part earthing arrangements and is not the prohibited system named.",
    "A TT source neutral is earthed even though the installation uses its own electrode, so it is unlike the isolated or impedance-earthed IT case.",
  ]),
  reviewed18ePart2("quiz-29725", 12, [
    "Whether the supply is a.c. or d.c. changes switching, protective-device and conductor requirements, so it belongs in the conformity documentation.",
    "The source earthing or mid-wire arrangement determines the available protective measures and must be recorded for safe design and verification.",
    "Voltage, current capacity, frequency and tolerances establish whether equipment can operate safely and whether protection will function.",
  ]),
  reviewed18ePart2("quiz-29725", 13, [
    "A vague nominal withstand value does not show that the equipment meets the minimum impulse rating required at its installation category.",
    "Requiring equality with a maximum reverses the selection concept; equipment may safely have a higher withstand rating than the minimum.",
    "A nominal value alone omits the minimum category threshold and could allow equipment that breaks down under the expected transient.",
  ]),
  reviewed18ePart2("quiz-29725", 14, [
    "Class II equipment is designed not to depend on a CPC, so adding an earthing conductor is not its second protective layer.",
    "Bonded metal protection can carry faults but is not the independent supplementary insulation used in Class II construction.",
    "Equipotential bonding reduces voltage differences between conductive parts and does not provide insulation around the Class II live parts.",
  ]),
  reviewed18ePart2("quiz-29725", 15, [
    "A 0.6 m band is the width of bathroom Zone 2 beyond a bath or basin boundary, not Zone 1 around an open shower outlet.",
    "Two point one metres is not the specified horizontal radius and would overstate the open-shower Zone 1 extent by 0.9 m.",
    "Two point two metres is likewise unrelated to the 1.2 m radial boundary and appears to confuse horizontal distance with vertical height.",
  ]),
  reviewed18ePart2("quiz-29725", 16, [
    "A dedicated conductor within a cable can provide a reliable CPC when its size, continuity and terminations meet Section 543.",
    "A metallic sheath, screen or armour can serve as a CPC where its impedance, fault withstand and connections are verified.",
    "A separate bare or insulated conductor can share an enclosure with live conductors and remain a valid CPC when properly identified and sized.",
  ]),
  reviewed18ePart2("quiz-29725", 17, [
    "Operation without any power supply is impossible for most electrical services and is not a meaningful protective-method assessment.",
    "Country of origin does not establish safe construction; compliance, ratings and suitability matter regardless of where equipment was manufactured.",
    "Nature of current and frequency is an important supply characteristic, but it does not answer the specific need to assess continuity after a fault.",
  ]),
  reviewed18ePart2("quiz-29725", 18, [
    "The layout drawing lets future occupants avoid drilling into heating units and allows inspectors to identify the area and routing.",
    "The protective-device rating is essential for confirming overload and fault protection of the heating conductors.",
    "Surface power density controls floor temperature and prevents overheating of finishes, furniture and occupied areas.",
  ]),
  reviewed18ePart2("quiz-29725", 19, [
    "Circuit protecting cable is not the recognised term and would confuse the conductor's protective function with the entire cable construction.",
    "A carrier is a mechanical support or fuse component; it does not connect exposed equipment metalwork back to the earthing terminal.",
    "Current protecting conductor reverses the words and obscures that the conductor protects the circuit by carrying fault current for disconnection.",
  ]),
  reviewed18ePart2("quiz-29725", 20, [
    "An outside-wall luminaire supplied directly from the building's internal wiring remains part of that building installation under this classification.",
    "Road traffic signals are specialist highway signalling equipment with their own standards rather than an example of the stated outdoor-lighting definition.",
    "Temporary festoon lighting is a temporary wiring arrangement and is not the permanent highway furniture described by this category.",
  ]),
  reviewed18ePart2("quiz-29725", 21, [
    "Contractor notes may support the job file but are not the user and maintenance documentation item checked on the formal inspection schedule.",
    "A design brief records intent, yet the inspection checklist specifically verifies that final diagrams and instructions are present at handover.",
    "Maximum demand and diversity are design data and calculations, not the documentation-presence check this question asks about.",
  ]),
  reviewed18ePart2("quiz-29725", 22, [
    "Gas and oil installation is a casual description and does not capture movable drilling, production or offshore facilities as the defined exclusion.",
    "Mining installations concern extraction of solid minerals underground or in quarries and are governed by a different specialist regime.",
    "Natural resources installation is too broad and is not the defined term used for hydrocarbon exploration and development equipment.",
  ]),
  reviewed18ePart2("quiz-29725", 23, [
    "Class 1 corrosion protection offers minimal resistance and would deteriorate rapidly in damp, ammonia-rich livestock conditions outdoors.",
    "Class 2 still represents only modest corrosion resistance and is inadequate for prolonged external agricultural exposure.",
    "Class 3 improves resistance but remains below the specified highest class for conduit used outdoors where livestock are kept.",
  ]),
  reviewed18ePart2("quiz-29725", 24, [
    "This reverses the energy flow by saying the temporary installation supplies the permanent installation, so it cannot locate the temporary origin.",
    "A point already within the temporary installation cannot define where energy first enters it from the permanent source.",
    "Calling both the point and source temporary omits the supply boundary at which the permanent installation or independent source feeds the temporary work.",
  ]),
  reviewed18ePart2("quiz-29725", 25, [
    "Shipboard equipment covered by its dedicated marine standard is excluded because vessel conditions and systems need specialist rules.",
    "Railway traction, rolling stock and signalling are specialist railway systems expressly outside the BS 7671 installation scope.",
    "Mine aspects controlled by specific statutory regulations remain under that mining regime rather than being duplicated by BS 7671.",
  ]),
  reviewed18ePart2("quiz-29725", 26, [
    "Zone 0 is the interior of the bath or shower basin itself and does not extend 0.6 m into the surrounding room.",
    "Zone 1 is bounded by the bath or basin edge, or the defined shower radius, while the additional 0.6 m band lies beyond it.",
    "Zone 3 is no longer the current bathroom zone designation and historically lay outside Zone 2, not in the stated splash band.",
  ]),
  reviewed18ePart2("quiz-29725", 27, [
    "BS EN 60529 defines IP enclosure ratings and does not specify the construction and connectors of prefabricated fixed wiring systems.",
    "BS EN 61439-6 covers busbar trunking assemblies, a higher-current distribution product distinct from prefabricated building wiring.",
    "BS EN 61534 covers powertrack systems; a permanently connected prefabricated wiring system is instead covered by BS 8488.",
  ]),
  reviewed18ePart2("quiz-29725", 28, [
    "IP22 gives only finger and dripping-water protection and is inadequate for an exposed connector on a mobile outdoor unit.",
    "IP33 improves rain protection but remains below the splash-from-any-direction performance required when the connector is coupled.",
    "IP55 would resist dust and water jets and may be selected for harsher service, but it exceeds the stated minimum.",
  ]),
  reviewed18ePart2("quiz-29725", 29, [
    "IP0X gives no declared solid-object barrier and would leave ELV conductors exposed to damage, debris and ignition-producing faults.",
    "IPX4 addresses splashing water only; it says nothing about preventing small solid objects from reaching the conductors.",
    "IPXX is incomplete notation with no specified solid-object performance and therefore cannot demonstrate the required enclosure protection.",
  ]),
  reviewed18ePart2("quiz-29725", 30, [
    "Authorized is an access-management term and does not alone prove the electrical knowledge or instruction needed around battery hazards.",
    "Restricting access to instructed persons only would unnecessarily exclude independently skilled electrical personnel.",
    "Skilled persons can enter, but the rule also permits instructed persons who have been adequately briefed and supervised for the hazards.",
  ]),
  reviewed18ePart2("quiz-29725", 31, [
    "Three-phase three-wire is a standard arrangement in which each line conductor carries current under normal balanced operation.",
    "Three-phase four-wire is the familiar three lines plus neutral arrangement and is explicitly shown in supply documentation.",
    "Two-phase three-wire is a recognised arrangement with two line conductors and a shared conductor, unlike the unlisted four-wire form.",
  ]),
  reviewed18ePart2("quiz-29725", 32, [
    "A 0.47 ohm limit would correspond to a much larger current or different breaker rating and is unnecessarily low for Type C 10 A.",
    "At 0.57 ohm the available current is still far above 100 A, so it is safe but not the maximum permitted impedance.",
    "The 2.30 ohm value omits the Cmin voltage factor; using 230 V alone overstates the loop impedance that guarantees operation.",
  ]),
  reviewed18ePart2("quiz-29725", 33, [
    "Electric-fence systems covered by BS EN 60335-2-76 are specialist equipment explicitly outside the ordinary BS 7671 installation scope.",
    "Radio-interference suppression equipment that cannot affect installation safety is excluded and controlled by product and EMC requirements.",
    "Public distribution networks are governed by ESQCR and network standards rather than the consumer-installation requirements of BS 7671.",
  ]),
  reviewed18ePart2("quiz-29725", 34, [
    "Colour is one permitted method, but alphanumeric letters or numbers can identify conductors where colour alone is unavailable or unsuitable.",
    "Lettering is permitted but not compulsory where compliant colour or numbering already gives durable, unambiguous identification.",
    "Numbering is likewise one option rather than the only method, particularly for complex control and multicore wiring.",
  ]),
  reviewed18ePart2("quiz-29725", 35, [
    "Mobile and fixed offshore equipment is subject to specialist offshore requirements and is excluded from the ordinary BS 7671 scope.",
    "Equipment aboard ships covered by a marine standard is excluded because vessel distribution and environmental risks need dedicated rules.",
    "Systems distributing electricity to the public fall under ESQCR and DNO engineering standards, not the consumer installation code.",
  ]),
  reviewed18ePart2("quiz-29725", 36, [
    "A 0.69 factor applies to PVC insulation at high ambient temperature or a harsher condition, not 90-degree thermosetting cable at 40 degrees.",
    "A 0.76 factor would over-derate this thermosetting cable because its allowable conductor temperature is much higher than 70-degree PVC.",
    "A 0.86 factor is still lower than the applicable 0.91 table entry and would not be the requested correction factor.",
  ]),
  reviewed18ePart2("quiz-29725", 37, [
    "Thirteen-amp plug cartridge fuses are covered by BS 1362, not the BS 6004 cable construction standard.",
    "Emergency-lighting application and system requirements are covered by standards such as BS 5266 and BS EN 1838.",
    "Residual-current devices use standards such as BS EN 61008 or BS EN 61009, not the cable standard BS 6004.",
  ]),
  reviewed18ePart2("quiz-29725", 38, [
    "A 0.3 MΩ result is below the 0.5 MΩ minimum and indicates too much leakage even for a SELV circuit tested at 250 V d.c.",
    "Two megohms is a healthy result but is four times the specified minimum, so it is not the threshold being asked for.",
    "Ninety-nine megohms would indicate excellent insulation but is not a practical minimum requirement in the table.",
  ]),
  reviewed18ePart2("quiz-29725", 39, [
    "A 2.2 m clearance exceeds the stated minimum by 200 mm and therefore is not the minimum required height.",
    "Although numerically the same as 2.2 m, 2200 mm is again above the required 2000 mm rather than the lowest compliant value.",
    "Seven hundred millimetres leaves obstacles near head and upper-body height and cannot provide a safe gangway beneath live parts.",
  ]),
  reviewed18ePart2("quiz-29725", 40, [
    "Half a metre is the spacing for much lower-power spotlights and does not adequately limit heating from a projector above 300 W.",
    "The 0.8 m distance applies to the 100-to-300 W band and becomes insufficient once the rating exceeds 300 W.",
    "A 1.2 m gap may be selected by a manufacturer but is greater than the fallback minimum specified for this rating.",
  ]),
  reviewed18ePart2("quiz-29725", 41, [
    "Twelve volts is a common auxiliary battery voltage but is not the maximum nominal d.c. voltage permitted for the caravan installation.",
    "Twenty-four volts is also a common system value and remains only half of the permitted maximum.",
    "Thirty-six volts is within the permitted range but still below the 48 V ceiling stated for this installation.",
  ]),
  reviewed18ePart2("quiz-29725", 42, [
    "A 1 mm² conductor may carry a small ELV load but lacks the specified mechanical strength when it also supports the luminaire's weight.",
    "Two square millimetres remains below the mechanical minimum for conductors acting as the suspension system.",
    "Three square millimetres is not the specified minimum standard size and still falls short of the 4 mm² mechanical requirement.",
  ]),
  reviewed18ePart2("quiz-29725", 43, [
    "Bayonet lampholders are product components governed by lampholder standards rather than the emergency-lighting code BS 5266.",
    "Electric surface-heating systems have their own installation requirements and do not form the subject of BS 5266.",
    "Street lighting is an outdoor electrical installation and highway topic, while BS 5266 focuses on lighting provided when normal supply fails.",
  ]),
  reviewed18ePart2("quiz-29725", 44, [
    "Zone 0 is the pool interior, where switchgear, accessories and junction boxes face immersion and are not generally permitted.",
    "Limiting a suitable SELV junction box to Zone 1 ignores that it may also be installed in the less severe Zone 2.",
    "Limiting it to Zone 2 overlooks the specific SELV junction-box exception available in Zone 1.",
  ]),
  reviewed18ePart2("quiz-29725", 45, [
    "There is no blanket condition under which these contact-avoidance measures become acceptable for a conductive EV charge point.",
    "A commercial or industrial address does not guarantee skilled control because drivers and the public still handle and approach charging equipment.",
    "Serving only one vehicle limits load sharing but does nothing to make obstacles or distance a reliable electric-shock measure.",
  ]),
  reviewed18ePart2("quiz-29725", 46, [
    "The k1/k2 formula is used when conductor materials or insulation temperature limits differ; here the tabulated same-material rule applies directly.",
    "Half the line size applies only once the line conductor exceeds 35 mm², so it would undersize the CPC for a 20 mm² line.",
    "Thirty-five square millimetres exceeds the line conductor itself and is not the minimum produced by Table 54.7 for this size band.",
  ]),
  reviewed18ePart2("quiz-29725", 47, [
    "A 110-degree continuous rating belongs to higher-temperature insulation and would rapidly age ordinary thermoplastic PVC.",
    "Fifty degrees is below PVC's continuous conductor rating and would impose unnecessary derating in ordinary service.",
    "Seventy-five degrees exceeds the standard 70-degree limit and can soften PVC, shortening its life and damaging insulation.",
  ]),
  reviewed18ePart2("quiz-29725", 48, [
    "Recommending an RCD leaves open a trip mechanism that can defeat the first-fault continuity purpose of the medical IT system.",
    "Using one whenever considered necessary is still incompatible within the IT-supplied final circuit because the required monitoring strategy is different.",
    "Making additional RCD protection mandatory would cause unwanted disconnection of critical medical equipment on the first insulation fault.",
  ]),
  reviewed18ePart2("quiz-29725", 49, [
    "Danger Earth Connection is not the prescribed safety notice and can imply the connection itself is hazardous rather than essential.",
    "Danger Electrical Connection omits the instruction not to remove the conductor whose continuity protects people from shock.",
    "Safety Earth Connection is close in meaning but is not the standard wording used universally for earthing and bonding clamps.",
  ]),
  reviewed18ePart2("quiz-29725", 50, [
    "Low-voltage generating sets are directly covered by Section 551, although their product and parallel-connection requirements may also apply.",
    "Mobile or transportable units have particular requirements in Section 717 and are not the specialist communications case identified here.",
    "Operating and maintenance gangways are covered by access and protection provisions within BS 7671 rather than a separate telecommunications standard.",
  ]),
  reviewed18ePart2("quiz-29725", 51, [
    "If design current Ib exceeds cable capacity Iz, the conductor can overheat during entirely normal intended use.",
    "If device rating In exceeds Iz, a damaging cable overload can remain below the protective device's operating threshold.",
    "Correct installation workmanship matters, but it cannot compensate for a protective device rated higher than the conductor can carry.",
  ]),
  reviewed18ePart2("quiz-29725", 52, [
    "Adjacent material's fire resistance governs whether the heat and beam from the luminaire can start or spread a fire.",
    "Permissible lamp power directly controls the heat released into the fitting and the surrounding air and surfaces.",
    "Distance from combustibles limits radiant intensity at the material and is therefore a direct thermal-safety consideration.",
  ]),
  reviewed18ePart2("quiz-29725", 53, [
    "A 0.36 ohm limit is roughly half the calculated maximum and corresponds to a different breaker rating or operating multiple.",
    "Zero point seven two ohm omits the Cmin supply-voltage allowance and therefore does not guarantee 320 A under minimum-voltage conditions.",
    "At 1.15 ohms the fault current is only about 190 A, well below the 10 × 32 A needed to guarantee Type C instantaneous operation.",
  ]),
  reviewed18ePart2("quiz-29725", 54, [
    "Installation is not one of the later-life activities named; identification is provided once so future work can be done safely.",
    "Verification includes inspection and testing, but replacing repair with verification omits a major reason circuits need durable identification.",
    "This list omits inspection and substitutes verification, so it does not reproduce the full set of activities supported by identification.",
  ]),
  reviewed18ePart2("quiz-29725", 55, [
    "A Cmin of 0.82 would assume an 18 percent voltage reduction and produce a needlessly severe impedance limit unrelated to UK supply tolerance.",
    "Eighty-two is not a dimensionless factor and would increase, rather than reduce, nominal voltage by an impossible amount.",
    "Ninety-five must be expressed as 0.95; using 95 in the equation makes the permitted Zs one hundred times too large.",
  ]),
  reviewed18ePart2("quiz-29725", 56, [
    "Line remains a live conductor through the RCD and is essential for the device to compare outgoing and returning current.",
    "Neutral also passes through the RCD sensing core and remains separate from Earth on the load side so imbalance can be detected.",
    "A separate protective conductor must continue to every Class I load and remain outside the RCD's live-conductor sensing path.",
  ]),
  reviewed18ePart2("quiz-29725", 57, [
    "A 0.2 s limit applies to a higher nominal line-to-Earth voltage band, not a 230 V TN socket circuit.",
    "Three tenths of a second is the general RCD product time at IΔn, not the Table 41.1 TN final-circuit disconnection time.",
    "Seven tenths of a second would let a dangerous touch voltage persist longer than the 0.4 s maximum for this socket circuit.",
  ]),
  reviewed18ePart2("quiz-29725", 58, [
    "Sixteen square millimetres is a protective-bonding or PEN-related size in other contexts and is not the bare copper power-circuit minimum here.",
    "Twenty square millimetres is not the specified standard minimum and would add material without being the table entry.",
    "Thirty square millimetres is three times the required cross-section and is not the minimum even though it would be mechanically robust.",
  ]),
  reviewed18ePart2("quiz-29725", 59, [
    "A brief ten-second tone each minute leaves fifty silent seconds in which a persistent first fault could be missed.",
    "Increasing-volume bursts still stop between warnings and do not meet the requirement for an indication maintained throughout the fault.",
    "One minute every five minutes creates long silent periods and could let a serious insulation condition remain unnoticed.",
  ]),
  reviewed18ePart2("quiz-29725", 60, [
    "A 10 mm diameter exceeds the specified minimum and therefore is not the smallest round copper bonding-ring conductor permitted.",
    "Twelve millimetres provides still more copper but does not identify the minimum dimension in the requirement.",
    "Fifteen millimetres is almost twice the specified diameter and would be unnecessarily large for the defined bonding ring.",
  ]),
];

const q29726 = [
  reviewed18ePart2("quiz-29726", 1, [
    "Outside Zone 0 is too broad because ordinary switchgear may still be restricted in Zone 1 and must suit the exact bathroom zone.",
    "Combining Zones 0 and 1 overstates the general prohibition and ignores carefully specified exceptions for suitable equipment in Zone 1.",
    "Zone 1 can contain permitted fixed equipment and limited accessories meeting Section 701, so it is not an absolute no-switchgear volume like the option claims.",
  ]),
  reviewed18ePart2("quiz-29726", 2, [
    "A 10 A socket can be overloaded by normal caravan demand and is below the standardized minimum pitch supply rating.",
    "Twenty amps may be selected for greater demand but is not the lowest rating allowed for each pitch socket-outlet.",
    "Thirty-two amps provides more capacity for a large pitch yet similarly exceeds the minimum the question asks for.",
  ]),
  reviewed18ePart2("quiz-29726", 3, [
    "Black is an a.c. phase colour and one of several control-circuit colours, not the earthed positive or mid-wire identification in this d.c. arrangement.",
    "Brown identifies a d.c. positive in other earthing arrangements, but a positive-earthed conductor marked M takes the neutral-like blue identification.",
    "Grey ordinarily identifies d.c. negative, including the unearthed negative of the positive-earthed two-wire circuit.",
  ]),
  reviewed18ePart2("quiz-29726", 4, [
    "At 1.04 ohms the fuse receives far more current than needed for the stated condition, making the value safe but needlessly restrictive.",
    "One point six eight ohms is also below the applicable BS 3036 table value and therefore is not the maximum permitted Zs.",
    "A 9.1 ohm loop supplies only about 25 A at 230 V, too little for a 15 A rewireable fuse to disconnect in the required time.",
  ]),
  reviewed18ePart2("quiz-29726", 5, [
    "A required functional earthing conductor connects at the MET so functional currents have the intended reference without creating a separate earth network.",
    "Circuit protective conductors terminate at the MET to return earth-fault current and hold exposed equipment metalwork near Earth potential.",
    "Main protective bonding conductors join extraneous parts to the MET so dangerous potential differences are limited during a fault.",
  ]),
  reviewed18ePart2("quiz-29726", 6, [
    "A 100 mA RCD may give fire or fault protection but is too insensitive to provide personal additional protection for outdoor portable equipment.",
    "Ten milliamps is more sensitive and may be chosen for a special risk, but it is not the maximum rating specified for general additional protection.",
    "Twenty milliamps is also within 30 mA and could protect, yet the question asks for the highest permitted IΔn rather than an intermediate value.",
  ]),
  reviewed18ePart2("quiz-29726", 7, [
    "Half a metre is the fallback clearance for lower-powered projectors and can allow excessive radiant heating above 300 W.",
    "The 0.8 m spacing belongs to the over-100-to-300 W band, not the stated over-300-to-500 W fitting.",
    "One and a half metres may be required by a particular maker or combustible surface, but it exceeds the generic minimum in the question.",
  ]),
  reviewed18ePart2("quiz-29726", 8, [
    "A large loop intercepts more changing magnetic flux from lightning and therefore develops a larger induced surge voltage.",
    "A fixed minimum of 0.1 m² would encourage unnecessary loop area even where positive and negative PV conductors can be routed together.",
    "One square metre remains a large lightning-coupling loop and is not a universal safe maximum for PV string wiring.",
  ]),
  reviewed18ePart2("quiz-29726", 9, [
    "One tenth of a second is not the 230 V TN table value and would impose a much faster requirement than this circuit category needs.",
    "Two tenths of a second applies at the next higher line-to-Earth voltage band, not the 120-to-230 V range stated.",
    "Eight tenths of a second doubles the permitted touch-voltage duration and fails the 0.4 s TN final-circuit limit.",
  ]),
  reviewed18ePart2("quiz-29726", 10, [
    "An independent generator set can supply safety services when it starts reliably, has adequate fuel and is separated from normal-supply failures.",
    "Primary cells are self-contained electrochemical sources and can support suitable low-power safety equipment without the mains.",
    "Storage batteries are a standard safety source because stored energy remains available immediately when the normal supply disappears.",
  ]),
  reviewed18ePart2("quiz-29726", 11, [
    "AA1 represents a much colder ambient band and requires equipment selected for severe low-temperature conditions.",
    "AA2 is also colder than the ordinary range and cannot be treated as the conventional normal classification.",
    "AA3 covers a cool ambient range and remains distinct from AA4, the broadly normal minus-5-to-plus-40-degree condition.",
  ]),
  reviewed18ePart2("quiz-29726", 12, [
    "Pitch CPCs must interconnect with their circuit protective conductors so every exposed part has a dependable fault-current path.",
    "A protective conductor must ultimately connect to a suitable Earth arrangement; banning Earth would defeat automatic disconnection.",
    "Neutral must remain separate from the pitch CPC, but the particular prohibition here concerns exporting the distributor's PME earthing facility.",
  ]),
  reviewed18ePart2("quiz-29726", 13, [
    "A Level 3 certificate alone does not prove current skill or supervision for this specialized separated equipotential arrangement.",
    "Restricting the work only to instructed persons wrongly excludes skilled persons who can independently recognize and control the hazards.",
    "An instructed person may carry out suitable work without this exact supervision wording; the option is narrower than the permitted competent arrangements.",
  ]),
  reviewed18ePart2("quiz-29726", 14, [
    "Opening only an earthed neutral can leave the equipment live while appearing switched off and may disturb the installation's reference to Earth.",
    "A PEN combines neutral and safety-earth duties and must not be interrupted, because exposed metalwork could rise to line voltage.",
    "A protective conductor must remain continuous at all times and cannot contain a fuse, switch or circuit-breaker pole.",
  ]),
  reviewed18ePart2("quiz-29726", 15, [
    "Neutral is a live current-carrying conductor and cannot serve as the protective connection for theatre-luminaire exposed metalwork.",
    "The general mass of ground is not a controlled terminal within the PELV circuit; the CPC provides the verified low-impedance bonding path.",
    "Connecting metalwork vaguely to the power source does not identify the protective terminal and could put it on a live output.",
  ]),
  reviewed18ePart2("quiz-29726", 16, [
    "Earth impedance is too vague and could mean only an electrode resistance rather than the complete source-to-fault return loop.",
    "Fault impedance could describe a line-neutral or other fault path and omits the specific Earth return identified by Zs.",
    "Fault loop impedance is incomplete terminology because Zs specifically includes the earth-fault loop through line, CPC and source.",
  ]),
  reviewed18ePart2("quiz-29726", 17, [
    "Barriers give basic protection from contact but do not detect leakage through a wet person or damaged bathroom appliance.",
    "A circuit-breaker trips on overcurrent and may carry a lethal small earth leakage indefinitely because it remains below its ampere rating.",
    "Main bonding controls imported potentials at the installation origin but does not provide rapid additional protection for every bathroom circuit.",
  ]),
  reviewed18ePart2("quiz-29726", 18, [
    "Weather is an external environmental influence handled through suitable equipment and enclosures, not the electromagnetic-immunity principle.",
    "Vibration is a mechanical influence requiring robust wiring and support rather than immunity from electrical interference.",
    "Voltage loss is handled by undervoltage protection and continuity planning; it is not the broad disturbance category in the EMC requirement.",
  ]),
  reviewed18ePart2("quiz-29726", 19, [
    "A 199 mm length is close to the 200 mm table entry, which requires a much lower factor than 0.88 because more heat is trapped.",
    "At 499 mm the cable is effectively enclosed for the longest table condition and would need severe derating, not the short-length factor.",
    "Forty-nine millimetres is an invented just-below value; the table explicitly associates 0.88 with the 50 mm length entry.",
  ]),
  reviewed18ePart2("quiz-29726", 20, [
    "One square millimetre lacks the prescribed mechanical robustness for temporary stand wiring exposed to repeated assembly and handling.",
    "Two square millimetres is not the standard minimum size stated and adds copper beyond the compliant 1.5 mm² conductor.",
    "Two and a half square millimetres may be required by load or voltage drop but is not the general minimum for the connection cable.",
  ]),
  reviewed18ePart2("quiz-29726", 21, [
    "A 2.5 kV withstand is used for lower categories and cannot survive the severe transients expected at a 690 V installation origin.",
    "Four kilovolts remains below the Category IV value and is associated with equipment farther downstream or lower nominal voltage.",
    "Six kilovolts is still one category step or voltage band too low for the stated very-high-impulse equipment.",
  ]),
  reviewed18ePart2("quiz-29726", 22, [
    "Opening only the a.c. side leaves the converter energized by the PV array whenever light produces d.c. voltage.",
    "Blocking diodes control reverse current but are not sources or isolating devices that make the converter safe to touch.",
    "Opening only the d.c. side leaves the converter connected to the grid or installation on its a.c. terminals.",
  ]),
  reviewed18ePart2("quiz-29726", 23, [
    "Socket quantity is a load and layout decision made after the available source voltage, current and frequency are known.",
    "Manufacturer information helps select equipment but does not describe the incoming source characteristic that must precede design.",
    "Permission from the regional electricity company is an administrative matter and does not replace establishing whether the source is a.c. or d.c.",
  ]),
  reviewed18ePart2("quiz-29726", 24, [
    "Group 1 involves applied parts used externally or invasively outside the cardiac zone, so it does not match a room with no applied parts.",
    "Group 2 covers procedures where supply failure can endanger life or applied parts are used in critical treatment, the opposite of the stem.",
    "Group 3 is not one of the BS 7671 medical-location groups, which run from Group 0 through Group 2.",
  ]),
  reviewed18ePart2("quiz-29726", 25, [
    "Circuit division may improve access but access alone does not state the protective purpose of separating faults and electromagnetic disturbance.",
    "Expansion can be planned with spare ways, yet it is not achieved without affecting maximum demand merely by dividing existing circuits.",
    "Even power distribution is a load-balancing design aim and is not one of the stated safety reasons for circuit division.",
  ]),
  reviewed18ePart2("quiz-29726", 26, [
    "A 0.36 ohm maximum would demand about twice the necessary fault current and corresponds to a larger or more demanding breaker.",
    "Zero point seven two ohm uses nominal voltage without the 0.95 minimum-voltage factor and therefore does not guarantee instantaneous operation.",
    "At 1.15 ohms only about 190 A flows, well short of the 320 A upper Type C magnetic threshold for a 32 A device.",
  ]),
  reviewed18ePart2("quiz-29726", 27, [
    "An Iimp of 10 kA is too low for the common neutral-to-protective path, which can receive the lightning impulse diverted from all three line conductors.",
    "An Iimp of 25 kA does not meet the 50 kA minimum for the neutral-to-protective Type 1 SPD in a three-phase CT2 arrangement.",
    "An Iimp of 30 kA remains below the 50 kA minimum and could overload the common neutral-to-protective surge path during the specified 10/350 µs impulse.",
  ]),
  reviewed18ePart2("quiz-29726", 28, [
    "A disused water pipe can still be removed or replaced and was not installed or tested as a controlled electrical electrode.",
    "Utility permission does not make a service pipe permanent or prevent later plastic replacement and hazardous transferred currents.",
    "Knowing the pipe's age gives no assurance of soil contact, continuity, corrosion condition or future retention.",
  ]),
  reviewed18ePart2("quiz-29726", 29, [
    "A 20 mm air gap is more conservative and may be used, but it is twice the specified minimum and not the requested value.",
    "Thirty millimetres adds still more separation without being the default minimum required by the provision.",
    "Eight millimetres falls below the 10 mm air gap and gives too little clearance for heat to dissipate from the ignitable structure.",
  ]),
  reviewed18ePart2("quiz-29726", 30, [
    "A PEN is not allowed in the final charging circuit under any blanket set of conditions because vehicle metalwork can become hazardous if it opens.",
    "Locating equipment indoors does not change the rule requiring separate neutral and protective conductors in the final circuit.",
    "Serving one vehicle limits demand but does not reduce the dangerous touch voltage created by a broken combined conductor.",
  ]),
  reviewed18ePart2("quiz-29726", 31, [
    "IP1X prevents access only with the back of a hand and permits small objects to reach single-insulated conductors in the temporary stand.",
    "IP3X stops 2.5 mm objects but remains below the small-object protection specified where no fire alarm provides early warning.",
    "IPX4 is a water-splash rating and gives no declared protection against solid-object access to the single-core wiring.",
  ]),
  reviewed18ePart2("quiz-29726", 32, [
    "Double or reinforced insulation can protect individual caravan-site equipment without relying on an Earth connection and remains a permitted measure.",
    "Electrical separation may protect one item or outlet where the source and circuit satisfy the strict separation conditions.",
    "SELV or PELV limits touch voltage through a suitable separated source and is a recognised protective option at the site.",
  ]),
  reviewed18ePart2("quiz-29726", 33, [
    "Fire resistance of nearby material decides whether the luminaire's heat can ignite or spread combustion in the mounting surface.",
    "The lamp's permissible power sets the heat released and is therefore directly relevant to convection and radiation around the fitting.",
    "Minimum clearance reduces radiant heating of combustible material, including objects placed in the concentrated spotlight beam.",
  ]),
  reviewed18ePart2("quiz-29726", 34, [
    "BS 6346 cable is armoured and comparatively rigid, making it unsuitable for a bonding link subjected to repeated vehicle movement.",
    "BS EN 61386-1 is a conduit-system standard rather than a designation for a finely stranded flexible bonding conductor.",
    "H14X-K is not the recognised flexible cable designation selected for this mobile-unit bonding application.",
  ]),
  reviewed18ePart2("quiz-29726", 35, [
    "A 0.2 s value belongs to the higher-voltage TN table band and is not the maximum at 230 V line to Earth.",
    "Three tenths of a second is associated with general RCD product operation at IΔn rather than this ADS circuit limit.",
    "Seven tenths of a second exceeds the 0.4 s limit and leaves touch voltage present too long for a socket circuit.",
  ]),
  reviewed18ePart2("quiz-29726", 36, [
    "A fixed 2.5 mm² minimum does not address continual flexing and may still fracture if the conductor has coarse or solid construction.",
    "Preventing every movement is unrealistic on a vehicle; the bonding lead itself must tolerate vibration and relative movement.",
    "Green sleeving alone is incomplete identification and has no effect on fatigue resistance or strand breakage.",
  ]),
  reviewed18ePart2("quiz-29726", 37, [
    "Caravan and pitch installations are expressly covered by Part 7 because their external supplies and earthing need additional safeguards.",
    "Industrial premises are a core BS 7671 application, covering their fixed distribution, machinery supplies and associated circuits.",
    "Mobile and transportable units have particular requirements in Section 717 and therefore remain within the standard's scope.",
  ]),
  reviewed18ePart2("quiz-29726", 38, [
    "The old cinematograph regulations were made as legislation for licensed premises, even though their subject is now governed differently.",
    "The Electricity at Work Regulations 1989 are statutory workplace duties and can be enforced by the health and safety authorities.",
    "The Health and Safety at Work etc. Act 1974 is primary legislation imposing broad legal duties on employers and others.",
  ]),
  reviewed18ePart2("quiz-29726", 39, [
    "A transmittance of 0.55 means only 55 percent of light passes through the smoke and falls below the 60 percent escape-route threshold.",
    "A value of 0.8 would equal 80 percent and is more stringent than the specified minimum, not the required threshold itself.",
    "Six percent would produce extremely dense smoke, making signs, obstacles and the escape path almost impossible to see.",
  ]),
  reviewed18ePart2("quiz-29726", 40, [
    "BE1 represents negligible material-related fire or explosion risk and cannot describe storage or processing of flammable substances.",
    "BE3 relates to explosion risk rather than the ordinary fire-risk classification defined by combustible material and dust here.",
    "BE4 is associated with contamination hazards and does not name the fire-risk condition from manufacturing or storing flammables.",
  ]),
  reviewed18ePart2("quiz-29726", 41, [
    "Opening one line leaves other phases energized and can allow the reduced neutral to continue carrying damaging current.",
    "Opening neutral and every line is permitted in some arrangements but is not necessary merely to stop current through that neutral.",
    "Opening only neutral leaves the load energized with an unstable star point, which can expose single-phase equipment to severe overvoltage.",
  ]),
  reviewed18ePart2("quiz-29726", 42, [
    "Automatic disconnection before access is one complete accepted safeguard, but it is not the only route described by the three choices.",
    "A key or tool restricts opening to deliberate action by someone equipped for access and is one accepted method rather than the sole method.",
    "An IP2X intermediate barrier retained by a key or tool provides another independent layer after the outer enclosure opens.",
  ]),
  reviewed18ePart2("quiz-29726", 43, [
    "One hundred and twenty volts a.c. exceeds the relevant touch-voltage approach and does not provide the required mains separation for dodgems.",
    "A direct 230 V supply would expose the public ride to the normal mains Earth-fault system without the prescribed separating transformer.",
    "Fifty volts d.c. is a voltage statement only and does not establish how the ride supply is isolated from the mains source.",
  ]),
  reviewed18ePart2("quiz-29726", 44, [
    "A circuit-breaker resets mechanically after operation, whereas a BS 1361 device contains a replaceable melting element in a cartridge.",
    "An RCD responds to residual imbalance and is covered by entirely different product standards and operating principles.",
    "A semi-enclosed rewireable fuse is BS 3036 and uses replaceable fuse wire rather than the enclosed BS 1361 cartridge construction.",
  ]),
  reviewed18ePart2("quiz-29726", 45, [
    "One square millimetre has too little mechanical strength for an exposed bare control conductor despite the circuit's small electrical current.",
    "Two square millimetres remains below the minimum needed to withstand handling and vibration without insulation or a sheath.",
    "Three square millimetres is not the required standard minimum and still falls short of the specified 4 mm² bare copper size.",
  ]),
  reviewed18ePart2("quiz-29726", 46, [
    "One hundred and ten volts is the maximum between the two live conductors of a common RLV system, not line to Earth.",
    "Thirty-eight point five volts is below the usual centre-tapped line-to-Earth value and is not the defined ceiling.",
    "Fifty-five volts is the typical value from a 110 V centre-tapped transformer, but the definition permits up to 63.5 V to Earth.",
  ]),
  reviewed18ePart2("quiz-29726", 47, [
    "Reference Method A relates to conductors in thermally insulating walls and gives poorer heat dissipation than a cable clipped to a surface.",
    "Methods E, F and G are free-air arrangements, with F and G aimed at single-core cables rather than a clipped multicore cable.",
    "Method F specifically covers touching single-core cables in free air and cannot describe the multicore clipped-direct installation.",
  ]),
  reviewed18ePart2("quiz-29726", 48, [
    "A copper gas pipe can import Earth potential and is an extraneous-conductive-part rather than metalwork belonging to electrical equipment.",
    "An aluminium ceiling grid is building metalwork and is not normally made live by a fault inside a socket or appliance.",
    "An incoming lead water service is extraneous metal in contact with Earth, not an exposed part of current-using equipment.",
  ]),
  reviewed18ePart2("quiz-29726", 49, [
    "One hundred degrees exceeds the non-metallic limit and risks burns or thermal degradation around accessible equipment.",
    "Seventy degrees is the lower limit for a metallic part intended to be touched, whose high conductivity transfers heat faster.",
    "Eighty degrees applies to a non-metallic part intended to be touched but not held, not a part that need not be touched.",
  ]),
  reviewed18ePart2("quiz-29726", 50, [
    "IP4X specifies solid-object protection with no water digit and cannot protect equipment sitting within the bath or shower basin.",
    "IP7X reverses the digits and incorrectly describes solid-object class 7, which does not exist in the IP code.",
    "IPX4 resists splashing but not the temporary immersion expected for equipment installed inside bathroom Zone 0.",
  ]),
  reviewed18ePart2("quiz-29726", 51, [
    "Two omits the IT arrangement and also fails to recognize TN as a separate system family alongside TT.",
    "Four double-counts one of the TN subdivisions rather than the three main source/exposed-part relationship families.",
    "Five counts TN-C, TN-S and TN-C-S as separate main types even though they are subdivisions of the TN family.",
  ]),
  reviewed18ePart2("quiz-29726", 52, [
    "The standard serves designers, installers, inspectors and maintainers as well as electricians, so its audience is not limited to one trade title.",
    "BS 7671 may be cited as evidence in court but is not itself legislation or a legal document enacted by Parliament.",
    "Calling it statutory wrongly suggests every clause has direct force of law rather than being a recognised technical means of compliance.",
  ]),
  reviewed18ePart2("quiz-29726", 53, [
    "IP0X gives no solid-particle exclusion and allows debris or tools to contact and damage the extra-low-voltage conductors.",
    "IPX4 is a splash-water classification and does not prevent small combustible objects or pests reaching the wiring.",
    "IPXX declares neither solid nor water performance, so it cannot show the required one-millimetre object protection.",
  ]),
  reviewed18ePart2("quiz-29726", 54, [
    "Allowing sockets in every zone would put line-voltage connectors in the pool interior and immediate wet area where users are immersed.",
    "Zone 1 normally excludes socket-outlets, so combining it with Zone 2 makes the permitted location too broad.",
    "Restricting the answer to Zone 1 selects the wetter prohibited area and excludes the outer zone where protected sockets are normally allowed.",
  ]),
  reviewed18ePart2("quiz-29726", 55, [
    "Caravan sites are covered by Section 708, including pitch-supply sockets, RCDs and restrictions on PME earthing.",
    "Commercial premises are ordinary fixed installations and form one of the central applications of BS 7671.",
    "Outdoor lighting installations are covered by Section 714 and remain within the standard's particular requirements.",
  ]),
  reviewed18ePart2("quiz-29726", 56, [
    "Telling a supervisor does not demonstrate technical equivalence or create the documented agreement needed for non-standard equipment.",
    "Equipment without an applicable standard is not automatically banned; innovative equipment may be used after an adequate safety assessment and agreement.",
    "A Minor Works Certificate is not always the appropriate document and a bare note would still omit the equivalent-safety assessment.",
  ]),
  reviewed18ePart2("quiz-29726", 57, [
    "A k value of 44 represents a different metal or temperature range and would require a larger conduit area than the applicable steel value.",
    "Forty-seven is likewise associated with different initial or final temperature assumptions, not this thermosetting-cable and steel-conduit combination.",
    "Eighty-five is too high for the steel protective path and would dangerously understate the cross-sectional area needed for fault energy.",
  ]),
  reviewed18ePart2("quiz-29726", 58, [
    "BS 7671 states installation requirements but does not provide the product type-verification standard for the distribution-board assembly itself.",
    "The BS EN 60934 series concerns circuit-breakers for equipment and cannot verify a complete medical distribution-board assembly.",
    "BS EN 61557-9 covers equipment for fault location in IT systems, not the construction and short-circuit withstand of a distribution board.",
  ]),
  reviewed18ePart2("quiz-29726", 59, [
    "Double or reinforced insulation is self-contained in equipment and remains reliable despite the changing public-access layout of an exhibition.",
    "Electrical separation can protect a single item or outlet from an appropriate separated source and is permitted under controlled conditions.",
    "SELV and PELV reduce touch voltage and can be applied to temporary exhibition equipment with the required source and separation.",
  ]),
  reviewed18ePart2("quiz-29726", 60, [
    "Zone 1 or Zone 2 is too broad because the heater itself defines the special Zone 1 space rather than straddling both categories.",
    "Zone 2 is the surrounding lower-temperature area outside the immediate heater zone and therefore does not contain the heater.",
    "Zone 3 is the hotter upper region above one metre and is defined by ambient heat, not the physical position of the sauna heater.",
  ]),
];

const q29727 = [
  reviewed18ePart2("quiz-29727", 1, [
    "Commercial premises contain ordinary fixed low-voltage installations and are one of the main environments designed and verified to BS 7671.",
    "Medical locations remain within BS 7671 and receive enhanced requirements in Section 710 for patient safety and continuity.",
    "Prefabricated buildings still contain fixed electrical installations, regardless of whether their modules were assembled away from site.",
  ]),
  reviewed18ePart2("quiz-29727", 2, [
    "Equipment need only remain within its permissible operating range; there is no need to force it to reach its maximum design temperature.",
    "Making temperature as low as possible can cause condensation or poor performance and is not the thermal-safety objective.",
    "Saying temperature complies is circular and gives no actionable condition; the installer must prevent ratings from being exceeded.",
  ]),
  reviewed18ePart2("quiz-29727", 3, [
    "Ten, twenty and 100 hertz omit ordinary 50/60 Hz mains and the 400 Hz specialist supply considered by the standard.",
    "Twenty and thirty hertz are not the preferred supply frequencies, while this set again misses both 50 and 60 Hz.",
    "One hundred and 300 Hz are not in the preferred trio and this set omits the widely used 60 Hz frequency.",
  ]),
  reviewed18ePart2("quiz-29727", 4, [
    "Caravan parks already have detailed particular requirements in Section 708; their ordinary design does not define this separate life-safety supplement case.",
    "Low-voltage generating sets are addressed directly by Section 551, alongside product and network-parallel requirements where applicable.",
    "Mobile or transportable units have their own Section 717 provisions and are not identified solely by the need for fire-service standards.",
  ]),
  reviewed18ePart2("quiz-29727", 5, [
    "One hundred watts for three hours and 2500 W for one hour use neither of the defined central low-power output limits.",
    "The 1500 W value belongs to the one-hour duration, not three hours, and 2500 W is above the low-power definition.",
    "Five hundred watts is tied to three hours rather than ten, while 1500 W is tied to one hour rather than three.",
  ]),
  reviewed18ePart2("quiz-29727", 6, [
    "Installation current source is not the defined boundary point and could describe a generator anywhere within the installation.",
    "Power source identifies equipment producing energy rather than the terminals at which the installation receives it.",
    "Voltage source is an electrical model term and likewise does not identify the formal supply boundary used for certification and measurements.",
  ]),
  reviewed18ePart2("quiz-29727", 7, [
    "Continuity assessment asks what must remain available after faults or planned switching and directly informs selectivity and standby arrangements.",
    "Recognised safety services need reliable sources, wiring and changeover, so their presence directly affects protective and equipment choices.",
    "Compatibility prevents one item or its starting, harmonic or surge behaviour from impairing the supply or other equipment.",
  ]),
  reviewed18ePart2("quiz-29727", 8, [
    "Neutral and protective-conductor separation is expressed by later letters such as C and S in the TN classification, not the second main letter.",
    "The wording 'to the power system' is imprecise; the second letter specifically states how exposed parts relate to Earth.",
    "The power system's relationship to Earth is represented by the first letter, T or I, not the second letter.",
  ]),
  reviewed18ePart2("quiz-29727", 9, [
    "Poor power factor increases supply current and voltage drop and can affect other users, so it is a compatibility characteristic.",
    "Starting current can produce voltage dips and unwanted operation elsewhere, making it central to equipment coordination.",
    "Transient overvoltage can damage insulation and disrupt electronics, so surge withstand and protection are compatibility concerns.",
  ]),
  reviewed18ePart2("quiz-29727", 10, [
    "Three-phase three-wire is a standard a.c. arrangement with three current-carrying line conductors.",
    "Three-phase four-wire is the normal three-line-plus-neutral supply arrangement and is expressly listed in documentation.",
    "Two-phase three-wire is also a recognised configuration, unlike the four-wire two-phase combination offered as the exception.",
  ]),
  reviewed18ePart2("quiz-29727", 11, [
    "Circuit calculations are performed after supply, environment and utilization characteristics have been established and are not themselves a general characteristic.",
    "Distribution boards are selected parts of the designed installation, not conditions acting on the installation from outside or through its use.",
    "Fuse calculations use the assessed fault and load data and belong to detailed protective-device design rather than the initial characteristics assessment.",
  ]),
  reviewed18ePart2("quiz-29727", 12, [
    "Easy access may help maintenance, but it is not the fundamental protective reason for dividing an installation into independently controlled circuits.",
    "Adding circuits can support expansion, yet expansion does change connected demand and is not the safety outcome stated in Regulation 314.",
    "Power distribution or phase balancing may follow circuit division, but the principal rule is to contain fault consequences and inconvenience.",
  ]),
  reviewed18ePart2("quiz-29727", 13, [
    "Measures can be combined only if their interaction is checked; unrestricted combinations could bypass separation, earthing or another safety layer.",
    "No significant influence is too weak because even an apparently minor interaction cannot be allowed to make another protective measure ineffective.",
    "No design can guarantee that a protective component never fails; the requirement is that one failure must not undermine the remaining measures.",
  ]),
  reviewed18ePart2("quiz-29727", 14, [
    "Low-voltage overhead lines still need suitable fault protection where accessible metal can become live; voltage band alone is no exception.",
    "Switches and connectors contain accessible equipment parts and need the normal combination of basic and fault protection.",
    "Unearthed lines are live conductors and require basic protection; leaving them unearthed does not justify omitting shock protection.",
  ]),
  reviewed18ePart2("quiz-29727", 15, [
    "Forty milliseconds is an old RCD additional-protection test time and is not the TT Table 41.1 value for this voltage range.",
    "Two tenths of a second is the 230 V TT final-circuit value; above 230 V and up to 400 V the required time falls to 0.07 s.",
    "Three tenths of a second is a general RCD product operating time at IΔn and is far too slow for the stated TT voltage band.",
  ]),
  reviewed18ePart2("quiz-29727", 16, [
    "High density with difficult evacuation is BD4, where crowding and restricted escape combine to create the greatest egress difficulty.",
    "Low density with difficult evacuation is BD2, so this option gets the occupant density wrong.",
    "Low density with easy evacuation is BD1, the normal condition and the opposite density from BD3.",
  ]),
  reviewed18ePart2("quiz-29727", 17, [
    "BE1 indicates negligible material-related fire or explosion risk and cannot describe flammable processing or combustible dust.",
    "BE3 is the explosion-risk classification and is not the ordinary fire-risk category defined in the stem.",
    "BE4 relates to contamination hazards and does not denote manufacture or storage of flammable materials.",
  ]),
  reviewed18ePart2("quiz-29727", 18, [
    "A 4 kV rating is far below the required origin-level withstand for a 1000 V system and belongs to lower categories or nominal voltages.",
    "Six kilovolts similarly provides only half the specified Category IV withstand and can break down under an origin surge.",
    "Eight kilovolts is the Category IV value for the lower 400/690 V supply band, not a nominal 1000 V installation.",
  ]),
  reviewed18ePart2("quiz-29727", 19, [
    "Half a second is not a Table 41.1 maximum and would leave the higher-voltage touch condition present too long.",
    "Five milliseconds is an extremely fast device time and is not the prescribed ADS limit for this final-circuit category.",
    "Five seconds applies to distribution and certain larger fixed circuits, not a final circuit expressly covered by the rapid-disconnection rule.",
  ]),
  reviewed18ePart2("quiz-29727", 20, [
    "A 0.1 s limit is not the 230 V TN final-circuit value and would require needlessly high fault current.",
    "Two seconds exceeds the shock-protection time and could leave exposed equipment metalwork energized for five times too long.",
    "Five seconds is reserved for distribution circuits and certain final circuits above the covered ratings, not this 20 A radial.",
  ]),
  reviewed18ePart2("quiz-29727", 21, [
    "A 0.47 ohm limit would drive more than the required 400 A and is safe but more restrictive than the Type D 20 A maximum.",
    "Zero point five seven ohm slightly exceeds the Cmin calculation, so the upper Type D instantaneous current is no longer guaranteed.",
    "At 2.38 ohms only about 92 A flows, far below the 20 × 20 A used to guarantee Type D instantaneous operation.",
  ]),
  reviewed18ePart2("quiz-29727", 22, [
    "One point four four ohms omits the 0.95 minimum-voltage factor and therefore slightly overstates the safe maximum Zs.",
    "Thirteen point seven ohms is a decimal-place error that would allow only about 16 A of fault current, not enough even to exceed the breaker rating.",
    "Four point one one ohms corresponds to a much smaller Type B breaker and cannot guarantee operation of a 32 A device.",
  ]),
  reviewed18ePart2("quiz-29727", 23, [
    "One hundred and fifty metres is far beyond arm's reach and clearly cannot describe parts one person can touch simultaneously.",
    "Two metres is inside the accessibility envelope but is not the defined maximum separation stated by the rule.",
    "Two point seven metres exceeds the 2.5 m boundary and is outside the standardized simultaneous-access distance.",
  ]),
  reviewed18ePart2("quiz-29727", 24, [
    "An autotransformer has a direct winding connection and therefore does not even provide the simple separation required for FELV.",
    "A potentiometer merely divides voltage on the same live circuit and can transfer full supply potential if its element fails.",
    "A non-isolated semiconductor converter can fail short circuit and gives no assured separation between the mains and FELV output.",
  ]),
  reviewed18ePart2("quiz-29727", 25, [
    "Access by any person permits untrained operation during crowded or difficult evacuation and can disable essential circuits or create panic.",
    "Instructed persons have hazard instruction but are not necessarily formally authorized to operate building emergency switchgear.",
    "Skilled or instructed status concerns competence, while the requirement here also needs explicit authorization and access control.",
  ]),
  reviewed18ePart2("quiz-29727", 26, [
    "Other conductors is too vague; SELV live conductors obviously connect to their source and load, while the prohibition specifically concerns Earth and other circuits.",
    "Connecting to a PELV exposed part imports its intentional Earth reference and defeats the earth-free SELV arrangement.",
    "Linking separate SELV circuits can destroy their individual separation and voltage assumptions unless they are designed as one system.",
  ]),
  reviewed18ePart2("quiz-29727", 27, [
    "One hundred and twenty volts is an ELV d.c. boundary and would permit a dangerous touch potential four times higher than the TT condition.",
    "One hundred and seventy-five volts has no role as the conventional touch-voltage limit and would provide even less personal protection.",
    "Twenty-five volts is used as a reduced touch limit in particular wet or livestock conditions, not the general TT design condition asked here.",
  ]),
  reviewed18ePart2("quiz-29727", 28, [
    "A suitable circuit-breaker can provide isolation when its standard, contact gap and position indication are rated for that function.",
    "A plug and socket gives visible physical separation and can isolate suitable equipment when inadvertent reconnection is controlled.",
    "An RCD can be suitable for isolation if the device is marked and constructed for that duty and disconnects the required live conductors.",
  ]),
  reviewed18ePart2("quiz-29727", 29, [
    "BS EN 60898-1 specifies household and similar circuit-breakers, not the construction and type verification of a trunking assembly.",
    "BS EN 61009 covers RCBOs, which may protect a circuit but do not define a busbar trunking system.",
    "BS EN 61223 relates to medical imaging evaluation and has no connection with low-voltage busbar distribution.",
  ]),
  reviewed18ePart2("quiz-29727", 30, [
    "Matching CPC size to live conductors may improve fault capacity but does not detect current flowing through a person after cable penetration.",
    "A 0.4 s ADS design is still fault protection and cannot replace the separate 30 mA additional-protection requirement for concealed cable.",
    "An MCB responds to amps of overcurrent, not a small residual leakage through a nail or person, unless it happens to create a high-current fault.",
  ]),
  reviewed18ePart2("quiz-29727", 31, [
    "A properly compound-filled or encapsulated joint is sealed and maintenance-free, so ordinary access for terminal retightening is unnecessary.",
    "A joint specifically designed for burial uses a suitable maintenance-free system and can be concealed in its intended environment.",
    "Welding, soldering or brazing creates a durable permanent connection without screw pressure that needs periodic retightening.",
  ]),
  reviewed18ePart2("quiz-29727", 32, [
    "Sleeving is fixed directly around the conductor and provides visible, durable identification at the point of connection.",
    "Correctly applied durable coloured tape marks the conductor itself and can identify its function where sleeving is impractical.",
    "Suitable durable paint places the identifying colour on the bare conductor rather than on a detachable nearby sign.",
  ]),
  reviewed18ePart2("quiz-29727", 33, [
    "The MET inside a consumer unit is not necessarily an exposed clamp or electrode connection at which this specific label must be placed.",
    "The PEN-to-earthing separation occurs in supplier equipment and is not the installation earth-electrode connection identified by the notice.",
    "A test link may be near the electrode connection, but labelling the link alone does not identify the actual earthing-conductor-to-electrode joint.",
  ]),
  reviewed18ePart2("quiz-29727", 34, [
    "One thousand watts exceeds the three-hour low-power-system limit and may exhaust the battery before the required duration ends.",
    "Fifteen hundred watts is permitted only for a one-hour duration, not a safety supply expected to run for three hours.",
    "Two hundred and fifty watts is within the battery's capability but is only half the defined maximum rather than the limit asked for.",
  ]),
  reviewed18ePart2("quiz-29727", 35, [
    "RCD protection may be needed for the circuit but cannot by itself prove that an unstandardized item's construction is acceptably safe.",
    "Electrical separation is only one protective measure and is not a universal cure for mechanical, thermal, fire or product hazards.",
    "Private-network connection has no bearing on whether the equipment itself achieves the safety level of a compliant standardized product.",
  ]),
  reviewed18ePart2("quiz-29727", 36, [
    "Blue is reserved for neutral or mid-wire identification and using it for an unearthed control line creates dangerous ambiguity.",
    "Cream is associated with functional earthing in relevant identification schemes and is not the listed control-line colour selected here.",
    "Green must not be used as a line identifier because it can be confused with the green-and-yellow protective conductor.",
  ]),
  reviewed18ePart2("quiz-29727", 37, [
    "A removable main-bonding clamp on an extraneous part needs the warning so a plumber or builder does not break the safety bond.",
    "The earthing-conductor connection at an electrode is vulnerable to disturbance and must be marked as a safety connection not to remove.",
    "A remote MET connection is part of the main earthing path and needs durable identification to prevent accidental disconnection.",
  ]),
  reviewed18ePart2("quiz-29727", 38, [
    "The installation origin is too broad; an AFDD protects a particular outgoing circuit and is installed at that circuit's origin.",
    "The BS 7671 AFDD application described is single-phase a.c., so an ordinary 400 V three-phase circuit is outside that provision.",
    "AFDDs under this requirement detect a.c. arcing waveforms and are not specified for 120 V d.c. circuits.",
  ]),
  reviewed18ePart2("quiz-29727", 39, [
    "Ambient temperature uses the AA code because the second letter A identifies thermal environmental conditions.",
    "Mechanical impact uses AG, not AL, and leads to IK or other robustness selection for equipment and wiring.",
    "Water exposure uses AD classes, ranging from negligible water to immersion and waves, rather than the fauna code.",
  ]),
  reviewed18ePart2("quiz-29727", 40, [
    "Ten percent triplen content is usually too low to dominate neutral current and is below the stated threshold for upsizing.",
    "Twenty-five percent remains below one third of the fundamental and does not cross the specified 33 percent design boundary.",
    "Eighty percent would certainly be severe, but neutral enlargement may become necessary much earlier, once triplen content exceeds 33 percent.",
  ]),
  reviewed18ePart2("quiz-29727", 41, [
    "A mains-operated generator that depends on the failed normal supply cannot provide independent energy during that same failure.",
    "A non-earthed transformer changes voltage and separation but contains no stored or generated energy when its input supply disappears.",
    "The standard mains supply is precisely the source whose loss the safety service must survive, so it cannot be the sole safety source.",
  ]),
  reviewed18ePart2("quiz-29727", 42, [
    "The distributor maintains its network and cannot set an interval for deterioration inside a customer's varied premises.",
    "Maximum demand affects thermal design but says little about moisture, public use, damage or maintenance that governs periodic frequency.",
    "Supply nature matters to protection but does not by itself capture the use, maintenance and environmental deterioration of the installation.",
  ]),
  reviewed18ePart2("quiz-29727", 43, [
    "Insulation resistance is one dead test after inspection and cannot replace the visual checks needed before connecting a test instrument.",
    "Protective-conductor continuity is essential, but it follows inspection and addresses only one property of the new installation.",
    "Ring-final continuity applies only where a ring exists and likewise cannot be the first universal verification action.",
  ]),
  reviewed18ePart2("quiz-29727", 44, [
    "The original designer may receive feedback but did not commission this later condition assessment and is not the required report recipient.",
    "The original installer may have no continuing role or may be unknown, so sending the report there would not inform the current duty holder.",
    "The distributor is responsible for network equipment and does not receive the customer's internal EICR as the normal recipient.",
  ]),
  reviewed18ePart2("quiz-29727", 45, [
    "Insulation of live parts is a primary basic-protection measure and is inspected for damage, gaps and adequate coverage.",
    "Barriers keep people from normally live parts and their presence and integrity are therefore basic-protection inspection items.",
    "Enclosures prevent contact with live components in normal service, so their IP condition and security form part of basic-protection inspection.",
  ]),
  reviewed18ePart2("quiz-29727", 46, [
    "An illuminated road sign is standalone outdoor highway equipment and falls within the outdoor-lighting installation category.",
    "Lighting for an outdoor monument is exposed external equipment and is one of the applications addressed by outdoor-lighting requirements.",
    "An advertising-panel lighting arrangement is expressly included because it is outdoor public-facing equipment rather than ordinary internal building lighting.",
  ]),
  reviewed18ePart2("quiz-29727", 47, [
    "IP2X prevents finger access but has no water protection and cannot suit equipment continuously inside a pool basin.",
    "IP4X prevents one-millimetre solid objects but again states nothing about immersion or water pressure.",
    "IPX4 resists splashing only and is appropriate in surrounding zones, not the continuous-submersion condition of pool Zone 0.",
  ]),
  reviewed18ePart2("quiz-29727", 48, [
    "Two vehicles can draw simultaneous current beyond the charging point's design and defeat one-vehicle protection and control.",
    "Three vehicles increase the overload and coordination problem and cannot be individually isolated through one charging outlet.",
    "Four vehicles would require distribution equipment and four controlled charging points, not adaptors from a single socket-outlet.",
  ]),
  reviewed18ePart2("quiz-29727", 49, [
    "FELV lacks the full safety separation of SELV or PELV and cannot be relied on for shock protection where people are immersed.",
    "A non-conducting location cannot be maintained in a wet pool area because water and structural metal provide paths to Earth.",
    "Obstacles only discourage accidental approach and are unacceptable where bathers and maintenance staff can readily enter the zones.",
  ]),
  reviewed18ePart2("quiz-29727", 50, [
    "IP2X gives solid-object and finger protection but no protection against water splashed during normal bathroom use.",
    "IP4X covers small solid objects, while the needed characteristic is the second digit 4 for splashing water.",
    "IPX6 protects against powerful water jets and is required only where such jets are likely, not as the ordinary minimum.",
  ]),
  reviewed18ePart2("quiz-29727", 51, [
    "BS 1363-1 is the domestic 13 A plug standard and cannot provide a robust keyed shore connection up to 125 A.",
    "BS EN 60309-4 concerns switched socket-outlets and connectors with or without interlock, rather than the general dimensional standard asked here.",
    "BS EN 60669-1 covers household fixed switches, not high-current industrial plugs and socket-outlets for vessel shore supplies.",
  ]),
  reviewed18ePart2("quiz-29727", 52, [
    "A 0.3 m lower height leaves the outlet closer to standing water, mud and accidental impact than the normal site minimum.",
    "The 0.4-to-1.6 m range is shifted at both ends and does not match the specified mounting limits.",
    "An upper limit of 1.8 m can make the pitch connector difficult to reach and exceeds the normal 1.5 m maximum.",
  ]),
  reviewed18ePart2("quiz-29727", 53, [
    "One and a half metres lies well inside the upper hot zone and cannot be the height at which that zone begins.",
    "Two metres is near normal room height and would leave much of the hot upper sauna incorrectly classified as Zone 2.",
    "Two and a half metres may exceed the sauna ceiling itself and is not the one-metre horizontal boundary between Zones 2 and 3.",
  ]),
  reviewed18ePart2("quiz-29727", 54, [
    "Two hundred and thirty volts d.c. is a permitted d.c. value but does not answer the maximum three-phase a.c. supply asked for.",
    "Fifty volts d.c. is extra-low voltage and again is neither three-phase nor the maximum permitted nominal supply.",
    "Five hundred volts a.c. exceeds the 400 V three-phase ceiling for this temporary public installation.",
  ]),
  reviewed18ePart2("quiz-29727", 55, [
    "One hundred and fifty degrees is more severe and equipment rated for it would survive, but it is not the minimum temperature rating.",
    "Eighty degrees is too low for the hot upper sauna zone and can cause rapid insulation ageing or equipment failure.",
    "Ninety degrees also falls well below the 125-degree ambient capability required near the ceiling.",
  ]),
  reviewed18ePart2("quiz-29727", 56, [
    "Appendix 11 does not contain the conventional final-circuit arrangements and cannot be used for the ring and radial design examples.",
    "Appendix 12 is likewise unrelated to the socket-outlet circuit layouts referenced by Regulation 433.1.204.",
    "Appendix 14 covers prospective fault current, not the conductor and protective-device arrangements for ring and radial final circuits.",
  ]),
  reviewed18ePart2("quiz-29727", 57, [
    "Appendix 3 provides time/current characteristics for overcurrent protective devices rather than manufacturer-based busbar rating data.",
    "Appendix 6 contains model certificates and schedules used for verification, not current capacity or voltage-drop information.",
    "Appendix 7 covers harmonized cable core colours and does not contain design data for busbar trunking or powertrack.",
  ]),
  reviewed18ePart2("quiz-29727", 58, [
    "A 0.45 factor applies to a larger or more severely grouped set and would over-derate six circuits bunched on one surface.",
    "A 0.55 value is close but belongs to a different circuit count or grouping arrangement, not the six-circuit entry.",
    "A 0.69 factor allows too much current for six bunched circuits because it represents better heat dissipation or a smaller group.",
  ]),
  reviewed18ePart2("quiz-29727", 59, [
    "Structural movement is associated with another CB category and does not identify the flexible-construction classification given.",
    "Combustibility is classified under CA building materials, whereas CB describes the building's structural design and movement.",
    "Rigid construction is the opposite of CB4; wiring in a flexible structure must accommodate movement without strain or damage.",
  ]),
  reviewed18ePart2("quiz-29727", 60, [
    "C2 means potentially dangerous and calls for urgent remedial action, but it does not identify immediate danger present at the time of inspection.",
    "C3 is improvement recommended and does not make the report unsatisfactory by itself, let alone indicate a present injury risk.",
    "FI requests further investigation without delay where danger cannot yet be classified; it is not used once a dangerous C1 condition is already revealed.",
  ]),
];

export const eighteenthEditionQ29725To29727 = [...q29725, ...q29726, ...q29727];
