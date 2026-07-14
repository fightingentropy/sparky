export const specialLocations = [
  {
    prompt:
      "Which of the following statements regarding special locations is false",
    options: [
      "No 13A socket outlets are allowed in rooms containing a bath",
      "Socket outlets in a room containing a shower cubicle must be protected by a 30 mA rcd",
      "Supplementary equipotential bonding may be required in a location containing a bath or shower",
      "Equipment in bathroom zones 1 and 2 generally requires at least IPX4",
    ],
    answer: "No 13A socket outlets are allowed in rooms containing a bath",
    rationales: {
      "Socket outlets in a room containing a shower cubicle must be protected by a 30 mA rcd":
        "This statement is true, so it is not the requested false statement. Section 701 requires additional protection by an RCD rated at no more than 30 mA for low-voltage circuits serving the bath or shower location.",
      "Supplementary equipotential bonding may be required in a location containing a bath or shower":
        "This statement is true. Local supplementary bonding can be omitted only where all of the specified conditions concerning main bonding, automatic disconnection and RCD protection are met; otherwise it remains necessary.",
      "Equipment in bathroom zones 1 and 2 generally requires at least IPX4":
        "This statement is true. IPX4 protects against splashing water from any direction and is the normal minimum for equipment in zones 1 and 2; IPX5 is needed where water jets are likely.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2019/77-september-2019/bs-76712018-frequently-asked-questions/",
      "https://electrical.theiet.org/media/2233/gn7-5th-edition-ch09_reprintv2.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/ensure-you-are-up-to-date-with-bs-7671/",
    ],
  },
  {
    prompt:
      "In a caravan the cross-sectional-area of every conductor shall be not less than",
    options: ["1.5mm²", "2.5mm²", "1.0mm²", "4.0mm²"],
    answer: "1.5mm²",
    rationales: {
      "2.5mm²":
        "A larger conductor can be selected when the circuit design requires it, but this is not the universal lower limit for internal caravan wiring. The rule sets a smaller baseline and then normal current-carrying-capacity and voltage-drop calculations still apply.",
      "1.0mm²":
        "This is below the stated floor for the flexible or stranded wiring used inside a caravan. The special minimum helps the wiring withstand vibration and movement as well as carry its design current.",
      "4.0mm²":
        "This may be appropriate for a relatively heavily loaded circuit, but imposing it on every conductor would go beyond the general requirement. Circuit design may increase conductor size above the baseline without changing that baseline.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1187/electrical-installations-in-caravan-camping-parks-caravans-and-motor-caravans.pdf",
      "https://webstore.iec.ch/en/publication/31016",
    ],
  },
  {
    prompt:
      "Underground cables within marinas are considered to be at a sufficient minimum depth when at",
    options: ["2.5m", "1.8m", "0.5m", "0.8m"],
    answer: "0.5m",
    rationales: {
      "2.5m":
        "Section 709 does not set such an extreme general burial depth. A designer may go deeper where foreseeable ground disturbance demands it, but that site decision does not alter the stated minimum.",
      "1.8m":
        "This figure is associated with the maximum mounting height of a caravan appliance inlet, not the burial rule for a marina cable. Applying it underground confuses requirements from different special locations.",
      "0.8m":
        "This adds depth beyond the Section 709 baseline without being the value the regulation specifies. Greater cover may be sensible on a particular site, but the question asks for the prescribed minimum.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2024/101-july-2024/buried-conduits-and-ducts/",
      "https://webstore.iec.ch/en/publication/1897",
    ],
  },
  {
    prompt:
      "Wiring systems within the zones of a swimming pool should preferably be",
    options: [
      "Mineral insulated",
      "Within conduits made of insulating material",
      "Within metal conduit",
      "Of armoured construction",
    ],
    answer: "Within conduits made of insulating material",
    rationales: {
      "Mineral insulated":
        "Mineral-insulated cable can offer excellent fire and temperature performance, but its metallic sheath introduces conductive material that must be correctly terminated and bonded. It is not the preferred pool-zone arrangement stated in Section 702.",
      "Within metal conduit":
        "A metallic raceway can corrode and can become live if a fault and bonding defect coincide. The preferred arrangement avoids introducing that additional conductive path into the wet zone.",
      "Of armoured construction":
        "Armour gives mechanical protection, but it is conductive and requires reliable earthing and suitable corrosion protection. Mechanical robustness alone does not make it the preferred wiring method around wet bathers.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1531/section-702-swimming-pools-and-other-basins.pdf",
    ],
  },
  {
    prompt:
      "A.C. electrical inlets on caravans shall be installed above the ground at not more than",
    options: ["1.0 metres", "0.5 metres", "1.8 metres", "2.2 metres"],
    answer: "1.8 metres",
    rationales: {
      "1.0 metres":
        "An inlet may be mounted this low if the complete installation remains suitable, but Section 721 does not make it the upper limit. Treating it as the maximum would unnecessarily exclude compliant higher positions.",
      "0.5 metres":
        "This is the minimum clearance used for cables passing through a gas-cylinder compartment, not the maximum height of the external supply inlet. The two requirements address different hazards.",
      "2.2 metres":
        "This places the connection above the permitted maximum and can make safe access and disconnection difficult. The inlet must remain readily accessible from ground level.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2018/72-september-2018/the-18th-edition-bs-76712018-launch-revisited/",
      "https://webstore.iec.ch/en/publication/31016",
    ],
  },
  {
    prompt:
      "Electric shaver supply units in zone 2 of a bathroom shall comply with",
    options: [
      "BS EN 61558-2-5",
      "BS EN 62424-1",
      "BS EN 61386-24",
      "BS EN 61439-4",
    ],
    answer: "BS EN 61558-2-5",
    rationales: {
      "BS EN 62424-1":
        "The 62424 family concerns representation of process-control engineering, not isolated bathroom shaver transformers. It does not establish the electrical-safety construction required for this special unit.",
      "BS EN 61386-24":
        "This is a product standard for conduit systems buried underground. It says nothing about the isolating transformer and output characteristics of a shaver supply unit.",
      "BS EN 61439-4":
        "This standard covers low-voltage switchgear and controlgear assemblies for construction sites. A bathroom shaver unit is a different product with a dedicated transformer standard.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1084/2014_53_winter_wiring_matters.pdf",
      "https://electrical.theiet.org/media/2218/bs_7671_2018-model_forms-all.pdf",
    ],
  },
  {
    prompt:
      "Equipment within zone 3 of a sauna shall have a minimum withstand temperature of",
    options: ["125 deg C", "150 deg C", "170 deg C", "190 deg C"],
    answer: "125 deg C",
    rationales: {
      "150 deg C":
        "Equipment may carry a higher manufacturer rating, but this is not the minimum assigned to the hottest sauna zone. A conservative product selection does not change the regulatory threshold.",
      "170 deg C":
        "This substantially overstates the zone requirement and could rule out equipment that is fully suitable for the expected upper-level temperature. The installation rule uses a lower declared withstand value.",
      "190 deg C":
        "Section 703 does not prescribe this extreme equipment rating for the zone. Product or material tests at other temperatures should not be substituted for the installation minimum.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/1890",
      "https://electrical.theiet.org/guidance-and-codes-of-practice/publications-by-category/amendment-42026-to-bs-76712018-iet-wiring-regulations/",
    ],
  },
  {
    prompt:
      "Electric heating elements embedded in the floor of a bathroom it shall be",
    options: [
      "Buried to a depth not less than 25 mm",
      "Covered by a earthed metallic grid or the heating cable shall have an earthed metallic sheath",
      "Supplied at extra low voltage",
      "Surrounded by insulating material",
    ],
    answer:
      "Covered by a earthed metallic grid or the heating cable shall have an earthed metallic sheath",
    rationales: {
      "Buried to a depth not less than 25 mm":
        "Depth alone neither detects an insulation fault nor provides a low-impedance path for automatic disconnection. The bathroom requirement is based on an earthed conductive covering, not a single generic screed depth.",
      "Supplied at extra low voltage":
        "SELV can be selected and changes how the conductive grid is connected, but it is not mandatory for every bathroom floor-heating installation. Mains-voltage systems are permitted when the Section 701 protective provisions are met.",
      "Surrounded by insulating material":
        "Ordinary surrounding insulation does not provide the earthed screen needed to clear a fault, and it can impede heat dissipation if it is not part of the designed system. The heating element must follow its product and installation requirements.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf",
    ],
  },
  {
    prompt:
      "Radiant heaters used in the vicinity of livestock should be placed, as a general rule, at a distance not less than",
    options: ["0.5 m", "1.5 m", "2.5 m", "1.0 m"],
    answer: "0.5 m",
    rationales: {
      "1.5 m":
        "A designer or manufacturer may require this greater clearance for a particular heater or combustible environment, but it is not the general minimum stated for proximity to animals. Site-specific increases do not replace the baseline rule.",
      "2.5 m":
        "This resembles vertical zone dimensions used in other special locations rather than the livestock-heater clearance. Applying it here would confuse unrelated hazards and dimensions.",
      "1.0 m":
        "This is a conservative separation and would exceed the general minimum, but it is not the threshold asked for. The actual installation may still need more clearance after considering bedding, guards and the manufacturer's instructions.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/1892",
      "https://electrical.theiet.org/guidance-and-codes-of-practice/publications-by-category/amendment-42026-to-bs-76712018-iet-wiring-regulations/",
    ],
  },
  {
    prompt:
      "13A BS 1363 socket outlets within rooms containing a shower cubicle shall be",
    options: [
      "Situated at least 3.0m from Zone 1",
      "Not allowed",
      "Double insulated",
      "Situated at least 2.0m from Zone 1",
    ],
    answer: "Situated at least 3.0m from Zone 1",
    rationales: {
      "Not allowed":
        "There is no blanket prohibition on a normal 230 V outlet in the whole room. It can be installed outside the zones when the required horizontal separation and RCD protection are provided.",
      "Double insulated":
        "Class II construction is a classification for equipment, not for a BS 1363 socket-outlet installation. It cannot replace the location rule that keeps ordinary outlets away from zone 1.",
      "Situated at least 2.0m from Zone 1":
        "This leaves the outlet one metre inside the required horizontal clearance. A user could then bring a plugged-in appliance too close to a wet person in the shower area.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2019/77-september-2019/bs-76712018-frequently-asked-questions/",
      "https://electrical.theiet.org/media/1450/section-701.pdf",
    ],
  },
  {
    prompt:
      "Cables supplying electrical equipment in Zone 0 of a fountain shall be installed",
    options: [
      "As far as is reasonably practicable by the shortest route",
      "Run inside Zone 0 by the longest route",
      "Around the inside of Zone 0",
      "Within the basin rim",
    ],
    answer: "As far as is reasonably practicable by the shortest route",
    rationales: {
      "Run inside Zone 0 by the longest route":
        "Maximising cable length also maximises the portion exposed to immersion, damage and difficult maintenance. Section 702 applies the opposite risk-reduction principle.",
      "Around the inside of Zone 0":
        "Following the perimeter would normally add unnecessary submerged cable and potential damage points. The route should enter and leave the highest-risk zone as directly as practicable.",
      "Within the basin rim":
        "The rim is not a prescribed cable route and may expose wiring to fixings, impact or future maintenance work. Cable location is governed by zone exposure and mechanical protection, not by the architectural edge alone.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1531/section-702-swimming-pools-and-other-basins.pdf",
    ],
  },
  {
    prompt:
      "For connection to a caravan with a current rating of 25A the minimum csa of the cable shall be",
    options: ["6.0mm²", "2.5mm²", "4.0mm²", "10mm²"],
    answer: "4.0mm²",
    rationales: {
      "6.0mm²":
        "Table 721 assigns this larger flexible-cable size to the next standard connection rating, not the one in the stem. It would carry the load, but it is not the minimum requested.",
      "2.5mm²":
        "This is the table value for the lower 16 A connection and is too small for the stated rating. Using it would risk excessive temperature rise and voltage drop at full load.",
      "10mm²":
        "This is larger and less flexible than the table requires for this connection. Oversizing may be chosen for a design reason, but it is not the specified minimum and is not one of the table's adjacent standard entries.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1044/2009_31_summer_wiring_matters__complete_adverts.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2018/72-september-2018/the-18th-edition-bs-76712018-launch-revisited/",
    ],
  },
  {
    prompt:
      "Equipment installed in a sauna, where water jets may be present, shall have a minimum degree of protection of",
    options: ["IPX5", "IPX2", "IPX3", "IPX4"],
    answer: "IPX5",
    rationales: {
      IPX2:
        "This rating addresses dripping water when the enclosure is tilted, not a pressurised cleaning stream. It leaves equipment inadequately protected for the stated exposure.",
      IPX3:
        "Protection against spraying water is tested less severely than protection against jets. The expected cleaning method calls for the next relevant water-ingress category.",
      IPX4:
        "Splash protection is the ordinary wet-location baseline, but a directed stream is a more demanding external influence. The rating therefore has to be increased where jets may occur.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/1890",
      "https://electrical.theiet.org/guidance-and-codes-of-practice/publications-by-category/amendment-42026-to-bs-76712018-iet-wiring-regulations/",
    ],
  },
  {
    prompt:
      "The space under a bath is considered to be outside the Zones if",
    options: [
      "The equipment is protected by an rcd",
      "The equipment is supplied by an SELV source",
      "Access is only possible by means of a tool",
      "The equipment is double insulated",
    ],
    answer: "Access is only possible by means of a tool",
    rationales: {
      "The equipment is protected by an rcd":
        "Additional protection limits the duration of an earth-leakage fault, but it does not alter the physical boundaries of a bathroom zone. Accessibility determines whether the under-bath space is excluded.",
      "The equipment is supplied by an SELV source":
        "Extra-low voltage can reduce shock risk and may permit equipment in some zones, but it does not redefine the space itself. The zone classification is independent of the supply method.",
      "The equipment is double insulated":
        "Class II construction is an equipment-protection measure, not a rule for drawing zone boundaries. Readily removable access would still leave the under-bath space within the applicable zoning provisions.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1450/section-701.pdf",
    ],
  },
  {
    prompt:
      "In conducting locations with restricted movement electrical separation is achieved when the number of items of equipment being connected to a secondary winding of an isolating transformer is limited to",
    options: ["3", "Unlimited", "1", "2"],
    answer: "1",
    rationales: {
      "3":
        "Supplying three loads from one separated secondary creates several simultaneously accessible exposed-conductive-parts. A fault on one item could then establish a dangerous potential relative to another in the cramped conductive location.",
      Unlimited:
        "An unrestricted number would defeat the purpose of individual separation and allow the separated circuit to grow into a distribution system. The special-location rule deliberately confines each secondary to a single load.",
      "2":
        "Even two connected items can acquire different touch potentials after separate insulation faults. One transformer may have several isolated windings, but each winding is limited to one item.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf",
      "https://webstore.iec.ch/en/publication/70228",
    ],
  },
  {
    prompt:
      "In horticultural premises, what is the highest rated residual operating current permitted for an RCD used for fire protection?",
    options: ["500mA", "300mA", "30mA", "100mA"],
    answer: "300mA",
    rationales: {
      "500mA":
        "This exceeds the maximum sensitivity stated for protection against fire and could allow a substantial earth-leakage current to persist. It reflects an older requirement rather than the Section 705 limit used by this question.",
      "30mA":
        "This more-sensitive value is used for additional protection of relevant socket-outlet circuits and can also satisfy the fire limit. It is not, however, the maximum residual-current rating that the fire-protection rule asks the learner to identify.",
      "100mA":
        "This rating is associated with certain larger socket-outlet circuits and is also below the fire-protection ceiling. Because the stem is seeking the highest permitted value, a lower compliant setting is not the keyed threshold.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2019/77-september-2019/which-rcd-type/",
      "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf",
    ],
  },
  {
    prompt:
      "Means of isolation allowing for maintenance of a PV convertor shall be provided",
    options: [
      "On neither side",
      "On the A.C. side",
      "On the D.C. side",
      "On the A.C. and the D.C. side",
    ],
    answer: "On the A.C. and the D.C. side",
    rationales: {
      "On neither side":
        "A converter can be energised from the mains and from illuminated modules, so omitting isolation leaves two possible sources during maintenance. Switching the inverter off through its controls is not a safe-isolation procedure.",
      "On the A.C. side":
        "Disconnecting the grid supply does not stop the array producing d.c. voltage in daylight. The converter input and associated wiring could therefore remain live while work is attempted.",
      "On the D.C. side":
        "Separating the array alone does not remove the mains supply from the converter output terminals. The a.c. source also needs an identifiable means of isolation for maintenance.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2026/109-april-2026/solar-photovoltaic-dc-switch-disconnector-selection-and-configuration/",
      "https://webstore.iec.ch/en/publication/65748",
    ],
  },
  {
    prompt:
      "Zone 1 extends to a height above a swimming pool diving board of",
    options: ["2.0m", "3.0m", "2.5m", "1.5m"],
    answer: "2.5m",
    rationales: {
      "2.0m":
        "This ends the zone half a metre too low and could place ordinary equipment within reach of a wet diver. The vertical dimension is measured from the upper surface of the board or platform.",
      "3.0m":
        "This would extend the special zone farther than the Section 702 geometry requires. The same larger number is used for a different bathroom socket-outlet separation and should not be transferred here.",
      "1.5m":
        "This substantially understates the reach and splash risk above the diving position. Equipment in the omitted upper metre would wrongly be treated as outside zone 1.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1531/section-702-swimming-pools-and-other-basins.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2021/86-july-2021/hot-tubs/",
    ],
  },
  {
    prompt:
      "In agricultural installations, electrical equipment for use under normal conditions shall have a degree of protection of at least",
    options: ["IP65", "IP24", "IP44", "IP55"],
    answer: "IP44",
    rationales: {
      IP65:
        "Dust-tight construction and protection against water jets may be selected for a particularly severe area, but that is above the general minimum for normal farm conditions. The external influences of the actual location can still justify the higher rating.",
      IP24:
        "The first digit only prevents access by finger-sized objects and does not meet the required protection against smaller solid bodies. Its water digit also addresses splashing without curing that solids shortfall.",
      IP55:
        "This stronger enclosure may be appropriate where dust or jets are expected, but it is not the baseline asked for. Treating it as universal would overstate Section 705 for ordinary conditions.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/1892",
      "https://electrical.theiet.org/guidance-and-codes-of-practice/publications-by-category/amendment-42026-to-bs-76712018-iet-wiring-regulations/",
    ],
  },
  {
    prompt:
      "Where water jets are likely to be used in swimming pools for cleaning purposes, protection must be to at least",
    options: ["IPX8", "IPX4", "IPX7", "IPX5"],
    answer: "IPX5",
    rationales: {
      IPX8:
        "This is a continuous-immersion classification whose test conditions are agreed for the equipment. It is relevant to submerged service, not the minimum response to cleaning jets above the water.",
      IPX4:
        "Splash resistance is sufficient only where directed cleaning streams are not expected. A jet applies water with greater force and needs the next applicable ingress-protection level.",
      IPX7:
        "Temporary-immersion testing does not establish resistance to a directed stream from different angles. IP classifications are hazard-specific, so a higher numeral is not automatically the correct jet rating.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1531/section-702-swimming-pools-and-other-basins.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2021/86-july-2021/hot-tubs/",
    ],
  },
  {
    prompt:
      "Electric vehicle charging points shall be equipped with one Type 3 socket-outlet for use with",
    options: [
      "Mode 3 charging only",
      "Mode 1 charging only",
      "Mode 2 charging only",
      "Mode 0 charging only",
    ],
    answer: "Mode 3 charging only",
    rationales: {
      "Mode 1 charging only":
        "Mode 1 uses an ordinary socket-outlet and cable without the dedicated control-pilot functions of fixed EV supply equipment. That operating arrangement is not what the Type 3 interface is specified for.",
      "Mode 2 charging only":
        "Mode 2 adds an in-cable control and protection device to a connection from a standard socket. The dedicated socket/connector types in BS EN 62196 are instead paired with fixed controlled charging equipment.",
      "Mode 0 charging only":
        "The conductive-charging standards define Modes 1 to 4; there is no recognised Mode 0. A nonexistent mode cannot determine the permitted use of the accessory.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2337/amendment1_read-only_final.pdf",
      "https://webstore.iec.ch/en/publication/86317",
    ],
  },
  {
    prompt:
      "Which listed device is expressly intended to provide mechanical switching and isolation on the d.c. side of a PV converter?",
    options: [
      "Semi-conductor device",
      "An overcurrent-only circuit-breaker not marked as suitable for isolation",
      "An ordinary plug and socket not rated for PV d.c. isolation",
      "Switch-disconnector",
    ],
    answer: "Switch-disconnector",
    rationales: {
      "Semi-conductor device":
        "Ordinary electronic switching can pass leakage current and can fail short-circuit, so it does not by itself provide the required isolating function. A suitable device needs a declared making, breaking and isolation capability for the PV d.c. duty.",
      "An overcurrent-only circuit-breaker not marked as suitable for isolation":
        "Overcurrent operation does not automatically prove isolating capability. Without the isolation marking and a suitable d.c. rating, its contact position and separation cannot be relied on for safe work.",
      "An ordinary plug and socket not rated for PV d.c. isolation":
        "An ordinary connector may arc dangerously if separated under PV d.c. load and does not provide a defined isolating position. It must not be treated as a switch-disconnector unless specifically designed and rated for that duty.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2026/109-april-2026/solar-photovoltaic-dc-switch-disconnector-selection-and-configuration/",
      "https://webstore.iec.ch/en/publication/65748",
    ],
  },
  {
    prompt:
      "In agricultural premises, self-supporting suspension cables shall be at a height of at least",
    options: ["7.2m", "5.8m", "3.5m", "6.0m"],
    answer: "6.0m",
    rationales: {
      "7.2m":
        "This greater clearance may be chosen for unusually tall machinery, but it is not the stated general minimum. A risk assessment can increase the design height without changing the value asked for here.",
      "5.8m":
        "This falls just below the prescribed clearance, so nominal compliance cannot be created by rounding it to the nearest whole metre. Sag, temperature and installation tolerances must also be allowed for above the minimum.",
      "3.5m":
        "This would put a self-supporting overhead cable within reach of common farm vehicles, loaders and raised equipment. It does not provide the required machinery clearance across agricultural premises.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/1892",
      "https://electrical.theiet.org/guidance-and-codes-of-practice/publications-by-category/amendment-42026-to-bs-76712018-iet-wiring-regulations/",
    ],
  },
  {
    prompt:
      "Where SELV is used in conducting locations with restrictive movement basic protection shall be provided by",
    options: [
      "Class II insulation",
      "Basic insulation or barriers and enclosures",
      "Class II insulation and placing out of reach",
      "Placing out of reach",
    ],
    answer: "Basic insulation or barriers and enclosures",
    rationales: {
      "Class II insulation":
        "Class II describes an equipment construction that combines basic and fault protection through double or reinforced insulation. Section 706 separately specifies how accessible live parts of the SELV circuit itself must receive basic protection.",
      "Class II insulation and placing out of reach":
        "Adding an equipment class does not make distance a valid basic-protection method in a cramped conductive space. Movement is restricted, so a person may be forced into contact with parts that initially appeared unreachable.",
      "Placing out of reach":
        "Position alone provides no physical barrier against contact and is expressly unsuitable for this special location. Insulation or an enclosure remains effective even when the user changes posture or handles a long conductive object.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf",
      "https://webstore.iec.ch/en/publication/70228",
    ],
  },
  {
    prompt:
      "In camping parks socket-outlets shall be placed at a height above the ground of",
    options: [
      "0.2m to 1.0m",
      "1.0m to 2.5m",
      "1.0m to 2.0m",
      "0.5m to 1.5m",
    ],
    answer: "0.5m to 1.5m",
    rationales: {
      "0.2m to 1.0m":
        "Its lower end puts the outlet below the normal minimum, increasing exposure to standing water, mud and impact. It also cuts off compliant mounting positions in the upper part of the specified band.",
      "1.0m to 2.5m":
        "This excludes the permitted lower half of the normal range and extends far above the normal maximum. Special measures are needed when extreme snow or flood conditions justify mounting above the standard upper limit.",
      "1.0m to 2.0m":
        "Both boundaries are displaced upward: accessible compliant locations below its lower value are omitted, while its upper value exceeds the normal limit. The rule balances ground hazards with safe plug insertion and withdrawal.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/29957",
      "https://electrical.theiet.org/wiring-matters/years/2018/72-september-2018/the-18th-edition-bs-76712018-launch-revisited/",
    ],
  },
  {
    prompt:
      "For a fixed jetty or quay, socket-outlets in a marina shall be placed at what minimum height above the highest water level?",
    options: ["0.5m", "2.5m", "1.0m", "1.5m"],
    answer: "1.0m",
    rationales: {
      "0.5m":
        "This is the general burial depth for underground marina cables, not the normal socket mounting clearance above water. It leaves a fixed outlet too exposed to waves, spray and changing water level.",
      "2.5m":
        "Such a height could make connection difficult from a pontoon and is not the minimum stated for berth supplies. The larger dimension belongs to zone geometry in swimming-pool installations.",
      "1.5m":
        "This would provide extra clearance but is not the specified minimum. On floating pontoons or walkways the normal value may instead be reduced to 0.3 m only when additional splash protection is provided.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1536/marinas-and-similar-locations.pdf",
      "https://webstore.iec.ch/en/publication/1897",
    ],
  },
  {
    prompt:
      "The nominal A.C. supply voltage of a temporary installation in an exhibition, show or stand shall not exceed:",
    options: [
      "230/250V A.C. or 500V D.C",
      "110/230V A.C. or 250V D.C",
      "400/650V A.C. or 250V D.C",
      "230/400V A.C. or 500V D.C",
    ],
    answer: "230/400V A.C. or 500V D.C",
    rationales: {
      "230/250V A.C. or 500V D.C":
        "The a.c. pair is not the standard line-to-neutral/line-to-line limit for a 230/400 V distribution system. It wrongly removes the permitted three-phase line voltage while retaining the correct d.c. ceiling.",
      "110/230V A.C. or 250V D.C":
        "These limits are unnecessarily restrictive and do not state the maximum allowed by Section 711. Reduced low voltage may be selected for particular equipment, but it is not the universal supply ceiling.",
      "400/650V A.C. or 250V D.C":
        "Its upper a.c. value exceeds the permitted line-to-line voltage, while its d.c. value is only half of the allowed maximum. Combining one excessive and one overly low figure does not describe the installation limit.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1642/exhibitions-shows-and-stands.pdf",
      "https://webstore.iec.ch/en/publication/72908",
    ],
  },
  {
    prompt:
      "Each socket outlet in a caravan park shall have an IP rating of at least",
    options: ["IP 44", "IP 55", "IP 65", "IP 22"],
    answer: "IP 44",
    rationales: {
      "IP 55":
        "This gives greater dust and water-jet protection and may suit a harsher pitch, but it is above the general minimum. The site assessment can call for more protection without making it the baseline for every outlet.",
      "IP 65":
        "A dust-tight, jet-resistant enclosure is more demanding than Section 708 requires in ordinary conditions. It is a valid product choice, not the minimum rating asked for.",
      "IP 22":
        "This protects only against finger access and limited dripping water. It does not provide the required resistance to smaller solid objects and splashing expected outdoors at a caravan pitch.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2018/72-september-2018/the-18th-edition-bs-76712018-launch-revisited/",
      "https://webstore.iec.ch/en/publication/29957",
    ],
  },
  {
    prompt:
      "Where joints are made in cables within exhibition areas they may be in enclosures having a minimum degree of protection of",
    options: ["IP 4X", "IP 2X", "IP 3X", "IP 1X"],
    answer: "IP 4X",
    rationales: {
      "IP 2X":
        "Finger protection still permits the entry of narrow tools and other objects larger than 1 mm. That is inadequate where temporary wiring and joints are accessible to exhibitors or the public.",
      "IP 3X":
        "This stops objects of roughly 2.5 mm diameter but not the finer probes covered by the required enclosure level. The joint therefore remains below the specified basic-protection standard.",
      "IP 1X":
        "This excludes only very large objects and offers little protection against hands, tools or loose conductive material reaching the joint. It is far below what an exhibition enclosure needs.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1642/exhibitions-shows-and-stands.pdf",
      "https://webstore.iec.ch/en/publication/72908",
    ],
  },
  {
    prompt:
      "Which of the following protective measures against electric shock regarding ceiling heating systems is not permitted",
    options: [
      "Protection by electrical separation",
      "Protection by basic insulation",
      "Protection by barriers and enclosures",
      "Automatic disconnection of the supply",
    ],
    answer: "Protection by electrical separation",
    rationales: {
      "Protection by basic insulation":
        "Insulating live heating conductors is a permitted form of basic protection and is fundamental to the cable or sheet element's construction. It prevents direct contact under normal conditions.",
      "Protection by barriers and enclosures":
        "A suitable enclosure or barrier is another recognised means of preventing contact with live parts. It remains available for terminals and associated equipment even though the heating element itself is embedded.",
      "Automatic disconnection of the supply":
        "This is the normal fault-protection route for these systems: conductive coverings are connected to the protective conductor and a 30 mA RCD is used where required. It is therefore permitted rather than the excluded measure.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1636/floor-and-ceiling-heating-systems.pdf",
      "https://webstore.iec.ch/en/publication/1909",
    ],
  },
] as const;
