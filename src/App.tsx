import { useEffect, useMemo, useRef, useState } from "react";
import {
  CONTAINMENT_OPTIONS,
  DEFAULT_CONTAINMENT_ROD_VALUES,
  DEFAULT_UNISTRUT_LENGTH_VALUES,
  calcContainmentRod,
  calcUnistrutLength,
  calcAngle,
  calcPower,
  calcVoltageDrop,
  calcBreaker,
  calcConduit,
  calcStructure,
  formulas,
  widthLabel,
  widthValue,
  type PhaseType,
  type PowerTarget,
  type BreakerInputMode,
  type UnistrutContainmentRow
} from "./calculators";
import { usePersistedState } from "./usePersistedState";
import { useHistory } from "./useHistory";
import { useTheme } from "./useTheme";
import { useFocusTrap } from "./useFocusTrap";
import { CopyableResult } from "./CopyableResult";
import { FormulaToggle } from "./FormulaToggle";
import { ExamPage } from "./ExamPage";
import { TutorialsPage } from "./TutorialsPage";
import { InteractivePage } from "./InteractivePage";
import { TUTORIALS } from "./tutorials";

type PageId = "home" | "cheatsheet" | "exams" | "tutorials" | "interactive";

type LegendItem = {
  label: string;
  swatch?: string;
  swatchStyle?: "solid" | "stripe" | "ladder" | "x" | "outline" | "box";
  swatchExtra?: string;
};

type CheatSheetSection = {
  id: string;
  title: string;
  summary: string;
  items: string[];
  legend?: LegendItem[];
};

type Applet = {
  id: string;
  title: string;
  subtitle: string;
  keywords: string;
};

type PaletteItem = {
  title: string;
  subtitle: string;
  tag: string;
  keywords: string;
  action: () => void;
};

type AngleUnit = "mm" | "cm" | "m";

const DEFAULT_PAGE: PageId = "home";
const ANGLE_UNITS: readonly AngleUnit[] = ["mm", "cm", "m"];
const POWER_TARGETS: readonly PowerTarget[] = ["power", "current", "voltage"];
const PHASE_TYPES: readonly PhaseType[] = ["single", "three"];
const BREAKER_INPUT_MODES: readonly BreakerInputMode[] = ["current", "power"];

const powerConfig: Record<
  PowerTarget,
  {
    label: string;
    unit: string;
    inputLabels: [string, string];
  }
> = {
  power: {
    label: "Power",
    unit: "kW",
    inputLabels: ["Current (A)", "Voltage (V)"]
  },
  current: {
    label: "Current",
    unit: "A",
    inputLabels: ["Power (kW)", "Voltage (V)"]
  },
  voltage: {
    label: "Voltage",
    unit: "V",
    inputLabels: ["Power (kW)", "Current (A)"]
  }
};

const cheatSheetSections: CheatSheetSection[] = [
  {
    id: "cheat-core-formulas",
    title: "Core formulas",
    summary: "Quick relationships for basic electrical calculations.",
    items: [
      "Ohm's law triangle: V = I x R",
      "Power triangle: P = I x V",
      "Rule of thumb at 230 V: 1 kW is about 4.35 A"
    ]
  },
  {
    id: "cheat-key-definitions",
    title: "Key definitions",
    summary: "Terms describing parts that can become hazardous under fault conditions.",
    items: [
      "Exposed-conductive-part: a conductive part of equipment that can be touched and is not normally live, but can become live under fault conditions.",
      "Extraneous-conductive-part: a conductive part that can introduce a potential, generally earth potential, and is not part of the electrical installation."
    ]
  },
  {
    id: "cheat-protection-devices",
    title: "Protection devices and earthing",
    summary: "What each protection measure is intended to handle.",
    items: [
      "RCD: protects against earth faults and electric shock.",
      "Circuit breaker: protects against overcurrent and short circuit.",
      "Earth cable: provides a low-resistance escape route for fault current if live touches metal."
    ]
  },
  {
    id: "cheat-regulations",
    title: "Regulations and scope",
    summary: "Where specific regulations and protections apply.",
    items: [
      "Part P: applies where people permanently reside, meaning dwellings.",
      "Reg 522.6.202: cables less than 50 mm deep in safe zones must be 30 mA RCD protected.",
      "Reg 522.5.204: if cables are in earthed metallic covering, conduit, or trunking, an RCD can be avoided.",
      "Reg 522.6.203: if a circuit is in a stud wall made mainly of metal, 30 mA RCD is required unless Reg 522.6.204 is followed."
    ]
  },
  {
    id: "cheat-safe-zones",
    title: "Cable routes and safe zones",
    summary: "Guidance for routing to avoid damage and help compliance.",
    items: [
      "Safe zones include directly above or below a switch or socket for vertical runs.",
      "Safe zones include horizontal runs to accessories.",
      "Safe zones include areas within 150 mm of the ceiling.",
      "Safe zones include areas within 150 mm of corners."
    ]
  },
  {
    id: "cheat-structural-limits",
    title: "Structural limits for building work",
    summary: "Limits for notches and chases to help maintain structural integrity.",
    items: [
      "Joist notches: maximum depth is 0.125 x joist depth.",
      "Wall chases: vertical up to 1/3 of wall thickness.",
      "Wall chases: horizontal up to 1/6 of wall thickness.",
      "If wall thickness is unknown, approximate with one brick, about 100 mm of brick depth.",
      "Exclude plaster thickness because it is not structural."
    ]
  },
  {
    id: "cheat-site-math",
    title: "Site math",
    summary: "Useful geometry for tray, bracket, and offset work.",
    items: [
      "Angled piece length = vertical drop / sin(angle from horizontal).",
      "Horizontal offset = angled piece length x cos(angle from horizontal).",
      "Total developed length = top straight + angled piece + bottom straight + extra allowance.",
      "These relationships assume the angle is measured from the horizontal."
    ]
  },
  {
    id: "cheat-drawing-legend",
    title: "Drawing legend",
    summary: "Standard colour codes and symbols used on electrical services coordination drawings.",
    items: [],
    legend: [
      { label: "SP&N Distribution Board", swatch: "#3366cc", swatchStyle: "x" },
      { label: "TP&N Distribution Board", swatch: "#7733bb", swatchStyle: "x" },
      { label: "Main Control Panel", swatch: "#5522aa", swatchStyle: "x" },
      { label: "Telecommunications Basket", swatch: "#cc2299", swatchStyle: "solid" },
      { label: "Data, BMS & Security Basket", swatch: "#8833aa", swatchStyle: "solid" },
      { label: "Fire Alarm Basket", swatch: "#cc2222", swatchStyle: "solid" },
      { label: "HV Ladder", swatch: "#663322", swatchStyle: "ladder" },
      { label: "LV Ladder", swatch: "#888822", swatchStyle: "ladder" },
      { label: "LV Tray", swatch: "linear-gradient(90deg, #22aa22 0%, #22aa22 30%, #cccc00 30%, #cccc00 70%, #22aa22 70%)", swatchStyle: "stripe" },
      { label: "Lighting & Small Power Trunking", swatch: "linear-gradient(90deg, #cc2299 50%, #aa22cc 50%)", swatchStyle: "stripe" },
      { label: "PV Tray", swatch: "repeating-linear-gradient(90deg, #88bbdd 0px, #88bbdd 6px, transparent 6px, transparent 10px)", swatchStyle: "stripe" },
      { label: "Busbar", swatch: "linear-gradient(90deg, #aaaa22 0%, #aaaa22 40%, #88aa22 40%, #88aa22 60%, #aaaa22 60%)", swatchStyle: "stripe" },
      { label: "Diesel Fuel Dump Pipework", swatch: "#886622", swatchStyle: "solid" },
      { label: "Diesel Fuel Fill Pipework", swatch: "#662222", swatchStyle: "solid" },
      { label: "Secondary Dedicated Life Safety Tray", swatch: "linear-gradient(90deg, #cc2299 0%, #cc2299 20%, #22aa22 20%, #22aa22 40%, #cccc00 40%, #cccc00 60%, #3366cc 60%, #3366cc 80%, #cc2222 80%)", swatchStyle: "stripe" },
      { label: "ATS", swatch: "#f8e0e8", swatchStyle: "box", swatchExtra: "#cc3366" },
      { label: "2 Hr Fire Rated Enclosure", swatch: "#cc2222", swatchStyle: "outline" }
    ]
  },
  {
    id: "cheat-drawing-abbreviations",
    title: "Drawing abbreviations",
    summary: "Common abbreviations found on electrical coordination drawings.",
    items: [
      "FA — From Above",
      "FB — From Below",
      "HL — High Level",
      "TA — To Above",
      "FL — Floor Level (used with dimensions, e.g. 9000 mm FL)"
    ]
  },
  {
    id: "cheat-sketch-colours",
    title: "Sketch colour identification",
    summary: "How to identify services by colour on site coordination sketches.",
    items: [],
    legend: [
      { label: "Dark blue — SP&N Distribution Board routing", swatch: "#2244aa", swatchStyle: "solid" },
      { label: "Red — Fire Alarm Basket routing", swatch: "#cc1111", swatchStyle: "solid" },
      { label: "Purple / violet — TP&N or Data, BMS & Security", swatch: "#7733bb", swatchStyle: "solid" },
      { label: "Magenta / pink — Telecom or Lighting & Small Power", swatch: "#cc2299", swatchStyle: "solid" },
      { label: "Green — LV Tray (green-yellow-green pattern)", swatch: "#22aa22", swatchStyle: "solid" },
      { label: "Yellow / olive — LV Tray or Busbar route", swatch: "#bbbb22", swatchStyle: "solid" },
      { label: "Dark maroon / brown — Diesel Fuel Fill Pipework", swatch: "#662222", swatchStyle: "solid" },
      { label: "Ladder pattern (brown) — HV Ladder", swatch: "#886644", swatchStyle: "ladder" },
      { label: "Ladder pattern (olive) — LV Ladder", swatch: "#999944", swatchStyle: "ladder" },
      { label: "Multicoloured stripe — Life Safety Tray", swatch: "linear-gradient(90deg, #cc2299 0%, #cc2299 20%, #22aa22 20%, #22aa22 40%, #cccc00 40%, #cccc00 60%, #3366cc 60%, #3366cc 80%, #cc2222 80%)", swatchStyle: "stripe" },
      { label: "Blue square with X — SP&N Distribution Board", swatch: "#3366cc", swatchStyle: "x" },
      { label: "Red outlined rectangle — Fire Rated Enclosure", swatch: "#cc2222", swatchStyle: "outline" }
    ]
  },
  {
    id: "cheat-course-earthing-systems",
    title: "Earthing systems (TN-S/TN-C-S/TT/IT)",
    summary: "Three UK supply earthing arrangements plus the rare IT system, and where each is used.",
    items: [
      "TN-S: DNO supplies a separate earth, usually via the metallic sheath of the service cable; older properties.",
      "TN-C-S (PME): DNO neutral and earth combined as PEN to cut-out, split at consumer end; commonest UK arrangement.",
      "TT: DNO provides no earth; consumer's own earth electrode (rod) used. Common on rural/overhead supplies.",
      "IT: high-impedance earth, used where a first-fault must not trip (e.g. operating theatres). Requires insulation monitoring (BS 7671 Section 411.6).",
      "Max Ze: TN-S 0.8 ohm, TN-C-S 0.35 ohm, TT max 200 ohm (typical TT requires RCD for fault protection).",
      "TN-C-S supplies should now have a supplementary earth electrode to mitigate PEN faults (esp. EV chargers).",
      "On a PEN/open-PEN fault, neutral and all bonded metalwork rise to line potential - 'looks dead but is live'."
    ]
  },
  {
    id: "cheat-course-earthing-bonding-sizing",
    title: "Earthing & bonding sizing",
    summary: "Standard CSAs for earthing conductor and main protective bonding (BS 7671 Chapter 54).",
    items: [
      "Standard meter tails: 25 mm^2 line + 25 mm^2 N + 16 mm^2 earthing conductor.",
      "Main protective bonding sized from Table 54.8 (typically 10 mm^2 with 25 mm^2 tails; 6 mm^2 was the older standard).",
      "CPC sizing by Table 54.7: line up to 16 mm^2 -> CPC same size; 16-35 mm^2 -> CPC min 16 mm^2; >35 mm^2 -> CPC min half line.",
      "Or calculate CPC adiabatically (Reg 543.1.3): S = sqrt(I^2 * t / k); k from Table 54.3 (Cu/PVC = 115).",
      "Bonding to gas/water: connect within 600 mm of where the service enters, after the meter; loop conductor through clamps - do not cut.",
      "Every BS 951 clamp must carry the 'Safety Electrical Connection - Do Not Remove' label.",
      "Plastic incoming services (e.g. blue MDPE) are NOT extraneous-conductive-parts - no main bonding required."
    ]
  },
  {
    id: "cheat-course-supplementary-bonding",
    title: "Supplementary bonding (Reg 701.415.2)",
    summary: "When supp. bonding can be omitted in a room containing a bath or shower.",
    items: [
      "Reg 701.415.2 - supplementary bonding may be omitted in a bathroom if ALL THREE conditions are met.",
      "1) All final circuits comply with disconnection times of Reg 411.3.2.",
      "2) All final circuits have 30 mA RCD additional protection (Reg 415.1.1).",
      "3) All extraneous-conductive-parts are connected to main protective bonding (Reg 411.3.1.2).",
      "Sup. bonding conductor commonly 4 mm^2 G/Y where mechanically unprotected; sized via Table 54.8.",
      "Sup. bonding doesn't need a dedicated path back to the MET - linking exposed and extraneous parts together is enough."
    ]
  },
  {
    id: "cheat-course-disconnection-times",
    title: "Max disconnection times (Table 41.1)",
    summary: "BS 7671 Table 41.1 disconnection-time limits for AC final and distribution circuits.",
    items: [
      "Final circuit <=32 A fixed equipment OR <=63 A socket on TN, 230 V AC: 0.4 s (Reg 411.3.2.2).",
      "Distribution circuits, or final circuits exceeding the above limits, on TN: 5 s (Reg 411.3.2.3).",
      "Final circuit <=32 A fixed / <=63 A socket on TT: 0.2 s.",
      "Distribution / larger final circuits on TT: 1 s.",
      "'Instantaneous' for OCPDs in BS 7671 = 0.1 s.",
      "Type B MCB Ia = 5xIn (e.g. 16 A B = 80 A); Type C = 10xIn; Type D = 20xIn.",
      "Use Table 41.4 (0.4 s) when 411.3.2.2 applies (small final circuit/sockets); Table 41.2 (5 s) for distribution / larger circuits.",
      "Table 41.3 covers MCBs/RCBOs (Type B/C/D); Table 41.5 covers RCDs on TT."
    ]
  },
  {
    id: "cheat-course-zs-tables",
    title: "Max Zs values & 80% rule",
    summary: "Tabulated vs measured Zs and key values from Table 41.3 / GN3 Appendix A.",
    items: [
      "Tabulated Zs (BS 7671 Table 41.3) is at operating temperature; for initial verification use 80% (max measured).",
      "Max measured Zs = max tabulated Zs x 0.8 (cables cold on first energisation).",
      "B6: tab 7.28 / measured 5.82 ohm. B16: tab 2.73 / meas 2.19. B20: tab 2.19 / meas 1.75. B32: tab 1.09 / meas 0.87.",
      "C6: tab 3.64 / meas 2.91. C32: tab 0.68 / meas 0.55.",
      "Read question for the word 'measured' - if present multiply tabulated by 0.8.",
      "On EICR (cables hot, in service) the tabulated Table 41.x values may be used; on initial verification use the 80% values.",
      "Table 41.5 (TT): max Zs 30 mA = 1667, 100 mA = 500, 300 mA = 167, 500 mA = 100 ohm. Use I_dn in amps in RA x I_dn <= 50 V."
    ]
  },
  {
    id: "cheat-course-rcd-types",
    title: "RCD types (AC/A/F/B)",
    summary: "RCD type describes the residual waveform it can detect - distinct from MCB types B/C/D.",
    items: [
      "Type AC - sinusoidal AC residual currents only. Now restricted; can be 'blinded' by DC fault current.",
      "Type A - AC plus pulsating DC; modern default for general circuits (LED drivers, SMPS, etc.).",
      "Type F - as Type A plus higher-frequency / mixed-frequency residuals (some VSD / inverter loads).",
      "Type B - all of the above plus smooth DC; required for EV chargers and similar DC-fault-prone loads.",
      "RCD 'job' is set by mA rating, not type: 30 mA = additional protection; 100/300/500 mA also used for fault/fire.",
      "Fire protection (areas of increased risk): RCD rating must NOT exceed 300 mA.",
      "BS EN 60898 = MCB; BS EN 61008 = RCCB (no overcurrent); BS EN 61009 = RCBO (combined).",
      "30% rule: connected leakage on a 30 mA circuit should not exceed 9 mA to avoid nuisance tripping."
    ]
  },
  {
    id: "cheat-course-where-rcd-required",
    title: "Where 30 mA RCD required",
    summary: "BS 7671 regulations that mandate 30 mA additional protection.",
    items: [
      "Reg 411.3.3 - all socket outlets <=32 A used by ordinary persons (BA1). Exception only with risk assessment for BA4/BA5.",
      "Reg 411.3.3 also applies to mobile equipment <=32 A used outdoors.",
      "Reg 411.3.4 - all final circuits supplying luminaires within domestic dwellings.",
      "Reg 522.6.202 - cables in masonry walls at depth <50 mm not protected by an earthed metallic covering.",
      "Reg 522.6.203 - cables in metal-stud partition walls (regardless of depth).",
      "Reg 522.6.204 alternatives: SWA, earthed metallic conduit/trunking, mechanical strike plate, or part of SELV/PELV.",
      "Part 7 special locations: bathrooms (701), pools (702), saunas, EV (722) etc. as required by the section.",
      "RCD socket outlet or RCD-FCU acceptable retrofit when CU change is impractical (regs say 'outlets', not 'circuits')."
    ]
  },
  {
    id: "cheat-course-consumer-unit",
    title: "Consumer unit requirements",
    summary: "Reg 421.1.201, AFDDs, SPDs and main switch rules.",
    items: [
      "Reg 421.1.201 - domestic CU must be non-combustible (metal) or in a non-combustible cabinet (since 17th Ed Amd 3, 2015).",
      "Applies to NEW CUs only; existing plastic CUs without thermal damage may remain - note on cert.",
      "Main switch is normally a double-pole switch to BS EN 60947-3, breaks both line and neutral.",
      "Enclosure IP: top minimum IP4X, sides/front/bottom minimum IP2X (Reg 416 / page 80).",
      "Unused ways must be filled with blanking plates to maintain enclosure rating.",
      "AFDDs (Reg 421.1.7) required on socket circuits <=32 A in HRRBs (>18 m or >6 storeys), HMOs, purpose-built student accommodation, care homes.",
      "SPDs (Type 2) required at origin per Reg 443; check green/red indicator window - replace cartridge when red.",
      "Different makes of MCB in one CU is C3 unless thermal damage / modification / loose -> C2."
    ]
  },
  {
    id: "cheat-course-cable-design-sequence",
    title: "Cable design sequence",
    summary: "BS 7671 / OSG Appendix F design steps using Ib, In, Iz, It and correction factors.",
    items: [
      "Required relationship: Ib <= In <= Iz <= It (memory: 'Ibanezit').",
      "Step 1: Ib = P/V (apply diversity for cookers etc., per OSG Appendix A Table A1).",
      "Step 2: In = next standard rating up (BS EN 60898 sizes: 6/10/16/20/25/32/40/50/63 A; no 5/15/30 A).",
      "Step 3: Identify reference method (B = in conduit; C = clipped direct; 100-103 = T&E in/under insulation).",
      "Step 4: It >= In / (Ca x Cg x Ci x Cs x Cf). Cf = 0.725 only for BS 3036 rewireable fuses.",
      "Step 5: Read It from BS 7671 Table 4D5 / OSG Table F6 (T&E with CPC).",
      "Step 6: Volt drop check (mV/A/m x Ib x L /1000); 3% for lighting, 5% other (6.9 V / 11.5 V at 230 V).",
      "If corrected Iz drops below In always size cable to In - the device can pass In through the cable continuously."
    ]
  },
  {
    id: "cheat-course-correction-factors",
    title: "Correction factors Ca/Cg/Ci",
    summary: "Common derating factors from OSG Appendix F / BS 7671 Appendix 4.",
    items: [
      "Ca - ambient temp (Table 4B1/F1). 70 deg C cable: 25C=1.03, 30C=1.00, 35C=0.94, 40C=0.87.",
      "Cg - grouping (Table 4C1/F3). E.g. 4 circuits enclosed = 0.65 (always include your own circuit in the count).",
      "Ci - thermal insulation (Table F2/Appendix 4 p.423). Full surrounding = method 103 = approx half rating.",
      "Cs/Cd - soil thermal resistivity / depth of burial (for buried cables).",
      "Cable rating method 100 (T&E above plasterboard, insulation <=100 mm); 102 (touching insulation one side); 103 (fully surrounded).",
      "Method C clipped-direct gives the highest rating; method 103 the lowest.",
      "CCC factor applied for cables with >4 loaded cores."
    ]
  },
  {
    id: "cheat-course-volt-drop",
    title: "Volt drop calc & limits",
    summary: "Voltage drop formulas and BS 7671 Appendix 4 / Reg 525 limits.",
    items: [
      "Design formula: Vd = (mV/A/m x Ib x L) / 1000.",
      "Verification formula (GN3 p.103): Vd = (R1 + Rn) x Ib x 1.2 (1.2 = operating-temp factor for 70 deg C PVC).",
      "Limits per Appendix 12 / Reg 525: 3% lighting, 5% other circuits (LV public supply).",
      "230 V single-phase: 3% = 6.9 V; 5% = 11.5 V. 400 V three-phase: 3% = 12 V; 5% = 20 V.",
      "Limit applies from origin of installation - sum drops across distribution + final circuit.",
      "Typical mV/A/m (T&E): 1.0 mm^2 = 44; 2.5 mm^2 = 18; 6 mm^2 = 7.3; 10 mm^2 = 4.4; 16 mm^2 = 2.8.",
      "Volt drop fix is a LARGER cable, never smaller."
    ]
  },
  {
    id: "cheat-course-final-circuit-specs",
    title: "Standard final circuits (App H)",
    summary: "OSG App H Table 4.2.1 / BS 7671 Appendix 15 standard final circuit specs.",
    items: [
      "Ring final: 30/32 A, min 2.5 mm^2 T&E (1.5 mm^2 CPC), max 100 m^2 floor area, sockets only.",
      "Radial socket 20 A: min 2.5 mm^2 T&E, max 50 m^2.",
      "Radial socket 32 A: min 4 mm^2 T&E, max 75 m^2.",
      "Lighting circuit: typically 6 A or 10 A on 1.0 or 1.5 mm^2 T&E; max 13 lamps at 100 W on a 6 A.",
      "Spurs: only ONE unfused spur per ring socket; FCU (BS 1363) <=13 A allows multiple sockets downstream.",
      "Cooker diversity (Table A1): first 10 A + 30% remainder + 5 A if socket in control unit.",
      "Immersion 3 kW: 16 A MCB, 20 A DP local switch, heat-resistant flex to element."
    ]
  },
  {
    id: "cheat-course-iv-test-sequence",
    title: "Initial verification - test sequence",
    summary: "BS 7671 / GN3 sequence for new installations (dead then live).",
    items: [
      "DEAD: 1) Continuity of CPCs / main + supplementary bonding. 2) Continuity of ring final. 3) Insulation resistance. 4) Polarity (continuity method).",
      "LIVE: 5) Supply polarity. 6) Earth electrode resistance (if TT). 7) Ze. 8) Zs / PFC. 9) RCD test. 10) Phase sequence (3-ph). 11) Functional test. 12) Volt-drop verification.",
      "Always null/zero test leads before any continuity test.",
      "Disconnect both ends of bonding from MET when testing, to remove parallel paths.",
      "Insulation values: <=500 V circuits test at 500 V DC, min 1 MOhm (investigate if <20 MOhm new).",
      "SELV/PELV test at 250 V DC, min 0.5 MOhm. Above 500 V circuits: 1000 V DC, min 1 MOhm.",
      "Continuity record HIGHEST value; insulation record LOWEST value.",
      "Earth electrode E1 (3-spike) - record AVERAGE of 3 readings within 5%."
    ]
  },
  {
    id: "cheat-course-test-methods",
    title: "Specific test methods",
    summary: "Method 1, Method 2, ring final 3-step, Ze, Zs measured/calculated.",
    items: [
      "Method 1 (R1+R2): temp link L-CPC at DB, probe each accessory, record highest. Preferred - feeds Zs calc.",
      "Method 2 (R2 only): probe CPC at MET to far end, often with wandering lead. Used for bonding.",
      "Ring step 1: end-to-end r1, rn, r2. r1 ~= rn; r2 = r1 x (CSA_line/CSA_cpc). 2.5/1.5 ratio = 1.67.",
      "Ring step 2 (L-N cross): each socket reads (r1+rn)/4 - catches L-E or N-E reverse polarity.",
      "Ring step 3 (L-CPC cross): each socket reads (r1+r2)/4 - catches L-N reverse; this is the recorded R1+R2.",
      "Wrong cross-connection (L-L instead of L-N) = readings rise then fall around the ring.",
      "Ze: isolate, lock off, disconnect earthing conductor and bonding from MET, test L to disconnected earth lead.",
      "Zs measured live or calculated as Ze + R1+R2 (origin) or ZDB + R1+R2 (sub-board).",
      "PSCC measured L-N (probes piggy-backed); PEFC measured L-E. Single-phase: record HIGHER. 3-ph rule of thumb: highest L-N PSCC x 2."
    ]
  },
  {
    id: "cheat-course-ir-detail",
    title: "Insulation resistance detail",
    summary: "Test voltages, what to disconnect, L+N-link trick, parallel maths.",
    items: [
      "Disconnect/bypass: loads, lamps, dimmers, RCDs, electronic switches; close all MCBs and ordinary switches.",
      "Single-phase: 3 tests - L-N, L-E, N-E. Three-phase: 10 tests (or condensed via Tables 2.10/2.11).",
      "On a periodic, do NOT test L-N (sensitive equipment may be in service); record L-N as 'NV'.",
      "If something might still be connected: link L+N together, test to E - load is at same potential, not damaged.",
      "Whole-installation IR test only valid when no RCDs/RCBOs in circuit.",
      "Combined IR (parallel): 1/R_total = 1/R1 + 1/R2 + ... ; total is always lower than the lowest reading.",
      "Cable resistance doubles with length; insulation resistance HALVES when length doubles.",
      "Verify leads at 250 V first (sanity-check) before pressing 500 V test."
    ]
  },
  {
    id: "cheat-course-pat-testing",
    title: "PAT - classes & pass criteria",
    summary: "In-service inspection of equipment per IET CoP 5th Ed.",
    items: [
      "Three levels: User check; formal visual inspection; combined inspection and test.",
      "Class I: needs PCC + IR + functional test. Class II: IR + functional only (no CPC).",
      "PCC pass: R measured <= 0.1 ohm + R (older equipment 0.5 ohm + R). R from Appendix 5 mOhm/m x length.",
      "IR test at 500 V DC: Class I >= 1 MOhm, Class II >= 2 MOhm (L+N joined, tested to E).",
      "For voltage-sensitive equipment use protective conductor / touch current test instead of 500 V IR.",
      "BS 1362 plug fuse size set by FLEX size (CoP page 80 table), NOT appliance wattage.",
      "Test instruments to BS EN 61010 (safety) + BS EN 61557 (accuracy); leads to GS38 (probe tip 2-4 mm).",
      "V-forms: V1 asset register, V2 inspection record, V3 labels, V4 repair, V5 faulty register, V6 instrument accuracy.",
      "Inspection intervals set by risk assessment - labels do NOT show next-inspection date (equipment may move)."
    ]
  },
  {
    id: "cheat-course-eicr-codes",
    title: "EICR codes (C1/C2/C3/FI)",
    summary: "GN3 Table 3.5 / BPG4 - codes and example faults for periodic reports.",
    items: [
      "C1 - Danger present (live parts touchable). Notify duty holder in writing without delay; make safe on discovery if possible.",
      "C2 - Potentially dangerous. Urgent remedial action required. Renders EICR unsatisfactory.",
      "C3 - Improvement recommended. Installation can still be classed satisfactory.",
      "FI - Further Investigation required without delay (e.g. unidentified live circuit).",
      "C1 examples: missing CU cover, smashed socket exposing live, damaged insulation accessible, incorrect supply polarity.",
      "C2 examples: water pipe used as TT earth; bonding < required CSA; Zs > max with no RCD; broken ring; borrowed neutral; IR < 1 MOhm; no 30 mA RCD on ground-floor sockets; mixed MCB makes with thermal damage.",
      "C3 examples: missing BS 951 'do not remove' label; no 30 mA RCD on first-floor sockets; old red/black colours; junction box with sheath stripped too far above ceiling.",
      "BS 3036 rewireable fuse alone is NOT a fault if Zs is within max permitted. Missing busbar shroud (with CU cover in place) is NOT a C1/C2.",
      "If unsure between two codes, give the WORSE one. Any C1 or C2 = unsatisfactory."
    ]
  },
  {
    id: "cheat-course-eicr-procedure",
    title: "Periodic / EICR procedure",
    summary: "Sampling, limitations and how a periodic differs from initial verification.",
    items: [
      "EICR purpose (GN3 p.109): to determine whether the existing installation is safe for continued use.",
      "Customer defines extent (what to inspect) and limitations (no-go areas).",
      "Sampling table (GN3 Table 3.3): main switchgear external 100%; internal not less than 20%; DBs not less than 25%; final accessories 10-100%; earthing/bonding 100%.",
      "Increase the sample size when a fault is found. Do not re-sample the same set.",
      "Mnemonic SAD COWS: Safety, Age, Damage, Corrosion, Overloading, Wear & tear, change of uSe.",
      "Use all 4 senses on a periodic (live, in service): sight, hearing, smell, touch.",
      "EICR mandated by Housing Act for rented dwellings - every 5 years or change of occupancy.",
      "EICR result: Satisfactory or Unsatisfactory (never 'condemned')."
    ]
  },
  {
    id: "cheat-course-bathroom-zones",
    title: "Bathroom & pool zones",
    summary: "BS 7671 Section 701 / 702 zone definitions and IP requirements.",
    items: [
      "Bathroom Zone 0: inside the tub/shower tray (<=0.1 m for permanent shower cubicle floor). Min IPX7.",
      "Zone 1: above bath/shower up to 2.25 m above finished floor. Min IPX4.",
      "Zone 2: 0.6 m horizontally from edge of zone 1, up to 2.25 m. Min IPX4. No zone 3.",
      "Sockets prohibited within 2.5 m horizontally of edge of zone 1 (was 3 m pre-Amd 2). Must have 30 mA RCD.",
      "Shaver sockets (BS EN 61558-2-5) permitted in zone 2 - electrically separated.",
      "Pool Zone 0 (Section 702): inside the pool. Zone 1: above to 2.5 m. Zone 2: 2 m horizontal from zone 1.",
      "EV charging (Section 722): IP44 = IPX4 + IP4X (EV equipment must meet both).",
      "Marina / seashore (Section 709): waves require IPX6 (external influence AD6)."
    ]
  },
  {
    id: "cheat-course-iv-inspection-checklist",
    title: "Inspection checklist (Appendix 6)",
    summary: "BS 7671 Appendix 6 / GN3 Section 2.5 - what each heading covers.",
    items: [
      "Item 1: Condition of consumer's intake equipment (visual only - DNO own).",
      "Item 2: Parallel/switched alternative supplies (PV, generators).",
      "Item 3: Earthing & bonding (electrode, conductor, MET, main bonding, BS 951 labels).",
      "Item 4: Basic protection (insulation, barriers/enclosures: top IP4X, sides/front/bottom IP2X).",
      "Item 5: Other shock protection methods (SELV/PELV, double insulation, electrical separation).",
      "Item 6: Additional protection (30 mA RCD, supplementary bonding only - ONLY two recognised forms).",
      "Item 7: Distribution boards (cover, identification, labels).",
      "Item 8: Final circuits (cable size/type/route, accessories, polarity, RCD requirement).",
      "Item 9: Switching & isolation. Item 10: Current-using equipment. Item 11: Notices/labels/circuit charts. Item 12: Special locations (Part 7)."
    ]
  },
  {
    id: "cheat-course-safe-isolation",
    title: "Safe isolation procedure",
    summary: "Per Electrician's Guide Ch.7.5 / Best Practice Guide 2 - not in GN3.",
    items: [
      "1) Identify circuit / installation to isolate; 2) seek permission from duty holder.",
      "3) Locate ALL sources (mains, PV, UPS, CHP, generators, battery storage).",
      "4) Discharge any capacitors. 5) Use AVI to BS EN 61243 (probe tip <=4 mm exposed, GS38 leads).",
      "6) Prove AVI on known live source or proving unit BEFORE isolation.",
      "7) Switch off and lock off (correct lock-off device, retain key personally).",
      "8) Apply warning notice with name/contact/work being done.",
      "9) Prove dead at point of isolation: single-phase = 3 tests (E-L, E-N, L-N); three-phase = 10 tests.",
      "10) Re-prove AVI on known source AFTER. Replace CU cover before leaving area.",
      "Always prove dead at the actual point of work, not just at the DB."
    ]
  },
  {
    id: "cheat-course-instruments-gs38",
    title: "Test instruments & GS38",
    summary: "Standards, calibration practice and lead/probe rules.",
    items: [
      "BS EN 61010 - safety of test equipment. BS EN 61557 - accuracy/measurement performance.",
      "GS38 - HSE guidance on test leads and probes (free PDF, 9 pages). Probe tip exposure 2-4 mm.",
      "CAT II/III/IV ratings - select instrument appropriate to the install (GN3 Table 1.1).",
      "Calibration not legally required, but accuracy must be demonstrable - regular accuracy checks against a calibration card; log on Form V6.",
      "MFT functions: continuity (low-resistance ohmmeter), insulation resistance, EFLI, RCD test, voltage.",
      "EFLI 'no-trip' two-wire test injects DC-modulated pulses so an upstream RCD does not trip.",
      "Always null/zero leads before continuity test. Disconnect bonding ends from MET to remove parallel paths."
    ]
  },
  {
    id: "cheat-course-rcd-trip-times",
    title: "RCD trip-time test",
    summary: "GN3 Table 2.17 trip-time limits and procedure.",
    items: [
      "Test current = device's rated I_dn (30/100/300/500 mA). Same for all device sizes.",
      "At 1/2 x I_dn: device must NOT trip.",
      "At 1 x I_dn: must trip <=300 ms (general purpose). Test at 0 deg and 180 deg, record higher.",
      "At 5 x I_dn: must trip <=40 ms (used in fault-finding only).",
      "Then operate the integral test button - mechanical check only. Press AFTER electrical tests.",
      "TT formula: RA x I_dn (in amps) <= 50 V. Convert mA to A (30 mA = 0.03 A).",
      "Earth electrode resistance >200 ohm regarded as unstable regardless of formula compliance.",
      "RCD warning notice (Reg 514.12) - test 6-monthly via test button (no longer mandatory in dwellings under latest amendment)."
    ]
  },
  {
    id: "cheat-course-supply-intake",
    title: "Mains position / intake",
    summary: "Order of supply equipment and ownership boundaries.",
    items: [
      "Order from street: DNO supply cable -> service head (cut-out) -> main fuse -> meter tails -> meter -> (optional isolator) -> consumer unit.",
      "Main fuse typically BS 88-3 (formerly BS 1361), 60/80/100 A. SEALED - do NOT pull.",
      "DNO owns up to and including the meter (and DNO-side tails). Consumer owns CU and consumer-side tails.",
      "Tail length from meter to CU normally <=3 m without DNO sub-main protection (e.g. switch-fuse).",
      "Henley block used to tap existing meter tails when adding a second CU.",
      "ESQCR (Electricity Safety, Quality & Continuity Regs) governs DNO equipment - not the electrician's responsibility.",
      "If installation is fed via a Henley + sub-main, fit a switch-fuse <=80 A so house fault blows that, not the DNO 100 A fuse.",
      "Document supply: U_0, type/no. of conductors, frequency, PSCC, Ze, OCPD type/rating - obtain from DNO if not measured."
    ]
  },
  {
    id: "cheat-course-adiabatic-pfc",
    title: "Adiabatic & PFC calcs",
    summary: "Cable survival check and prospective fault current formulas.",
    items: [
      "Adiabatic equation (Reg 543.1.3, page 98/99): t = k^2 * S^2 / I^2, or S = sqrt(I^2 * t / k^2).",
      "k from Table 54.3 for CPC checks. Cu/PVC = 115; Cu/90 deg C = 143.",
      "If cable t > OCPD clearance time, the cable survives the fault (e.g. cable t = 2.3 s vs OCPD 0.1 s -> safe).",
      "PEFC = (U_0 x C_min) / Zs, with C_min = 0.95 (Reg 411.4.4).",
      "Recorded PFC (single-phase) = HIGHER of PEFC and PSCC. Three-phase rule of thumb: highest L-N PSCC x 2.",
      "Voltage limits (CENELEC): 230 V +10%/-6% = 216.2 V to 253 V. C_max = 1.10.",
      "Device breaking capacity: PFC at any DB must not exceed device I_cn (typical 6 kA, 10 kA, etc.)."
    ]
  },
  {
    id: "cheat-course-three-phase-basics",
    title: "Three-phase basics",
    summary: "Voltages, colours and supply structure.",
    items: [
      "L1 = brown (was red), L2 = black (was yellow), L3 = grey (was blue), N = blue (was black).",
      "Line to neutral nominal = 230 V. Line to line = 400 V (= 230 x sqrt(3)).",
      "RMS to peak: peak = RMS / 0.707 = 230 / 0.707 = 325 V.",
      "Domestic supply normally 100 A single-phase max; >100 A demand suggests three-phase.",
      "Phase sequence must be L1-L2-L3 throughout - check at every rotating-equipment point, not just intake.",
      "To correct wrong phase rotation, swap any TWO conductors (not all three).",
      "Three-phase polarity = 10 voltage tests during safe isolation (incl. all L-L pairs at 400 V).",
      "On National Grid HV transmission only L1/L2/L3 - neutral created at distribution star point."
    ]
  },
  {
    id: "cheat-course-special-cables-fp200",
    title: "Fire alarm & special cables",
    summary: "FP200 use and conductor identification.",
    items: [
      "FP200 (round, soft, fire-rated) - CPC same CSA as live conductors; foil screen contacts CPC.",
      "Feed TO panel = LV: foil + CPC sleeved green/yellow as the protective conductor.",
      "Loops FROM panel = ELV (~24 V): screen is FUNCTIONAL earth only - sleeve pink, NOT connected to earth at devices.",
      "MICC (pyro / mineral-insulated) accepted but rare; FP200 fulfils evidence requirement on the NVQ.",
      "SWA armour can be used as CPC (with proper gland + banjo); plastic enclosure must use earth tag.",
      "Resin joints kit includes braided continuity strap so SWA armour stays continuous.",
      "Don't use BS 951 saddle clamp on SWA armour - damages the cable; use a gland.",
      "Heat-resistant flex (90 deg C thermosetting / silicone) at immersion heater terminations."
    ]
  },
  {
    id: "cheat-course-buried-cables-outbuildings",
    title: "Buried cables & outbuildings",
    summary: "OSG Section 5.7.3 / Section 528 guidance.",
    items: [
      "BS 7671 specifies 'suitable depth' - rule of thumb roughly two spades deep.",
      "Use SWA on a bed of sifted sand; lay marker tape/tile ~150 mm above cable; backfill.",
      "Best practice: pull SWA through twin-line ducting with draw rope - future-proofs replacement.",
      "Outbuilding with extraneous-conductive-parts: main bond back to house MET.",
      "Decide whether to export TN-C-S earth or fit local TT electrode at the outbuilding.",
      "External cable: galvanised steel conduit/trunking outside (plastic degrades and lets water in).",
      "Solar PV: AC isolator (red/yellow rotary) at inverter output; DC isolator (grey) between panels and inverter."
    ]
  },
  {
    id: "cheat-course-conduit-sizing",
    title: "Conduit fill & install",
    summary: "OSG Appendix E rules and conduit selection.",
    items: [
      "OSG Appendix E: cables must not occupy more than 45% of the cross-sectional area of the conduit.",
      "Conduit installation per BS 7671 Chapter 52.",
      "Metal conduit/trunking is an exposed-conductive-part - must be earthed, can serve as the CPC if continuous.",
      "Plastic conduit not exposed-conductive-part; uses glue at joints, not threads. May warp with temperature.",
      "Smooth inside of cut conduit with file to prevent cable damage.",
      "Cables grouping factor Cg applied based on number of circuits in same conduit/trunking.",
      "Capping (in chases) is NOT mechanical protection - capping does NOT replace 30 mA RCD requirement.",
      "Trunking >=710 mm^2 cross-section requires a fire barrier through fire-rated walls (Appendix 13)."
    ]
  },
  {
    id: "cheat-course-diversity",
    title: "Diversity & max demand",
    summary: "OSG Appendix A practical diversity rules.",
    items: [
      "Cooker (household): first 10 A + 30% of remainder + 5 A if socket in control unit.",
      "Lighting (modern method): 66% of total connected load (LED-friendly). Old: 100 W per lampholder.",
      "Immersion / instant water heater: 100% of full load.",
      "Sockets/general purpose: 100% of largest, 40% of remainder (varies by Table A1/A2).",
      "Manufacturer's instructions take precedence: if appliance states 16 A supply, supply 16 A regardless of diversity.",
      "Diversity is NOT applied to showers (full load when on).",
      "Always re-check max demand against intake capacity (typically 100 A single-phase) when adding circuits."
    ]
  },
  {
    id: "cheat-course-eic-paperwork",
    title: "EIC / MEIWC paperwork",
    summary: "Certification rules and what each form is for.",
    items: [
      "EIC issued for: new circuit, full/partial rewire, CU change, any wholly new work.",
      "MEIWC issued for: alteration/addition to ONE existing circuit (no new circuit).",
      "EIC valid only with two schedules: schedule of inspections + schedule of test results (one per DB).",
      "Three signatories: Designer, Constructor (installer), Inspector. Client does NOT sign.",
      "ONE intake = ONE EIC, with as many schedules as there are DBs.",
      "Designer recommends next inspection on EIC; Inspector decides on EICR.",
      "Suggested intervals (GN3 Ch.3): owner-occupied dwelling 10 yr; rented dwelling 5 yr; commercial 5 yr.",
      "Don't write 'Safe for continued use' on an EIC - that wording belongs on EICRs.",
      "'Limitation' belongs on EICR, not EIC. Never leave 'Departures' or 'Comments on existing installation' blank."
    ]
  },
  {
    id: "cheat-course-protective-measures",
    title: "Shock protection methods (Ch 41)",
    summary: "BS 7671 Chapter 41 shock-protection methods to identify.",
    items: [
      "ADS (411) - the standard method: earthing + bonding + OCPD/RCD that disconnects in time.",
      "Double / reinforced insulation (412) - Class II equipment, square-in-square symbol.",
      "Electrical separation (413) - isolating transformer, no earth on secondary (e.g. shaver socket).",
      "SELV (414) - extra-low voltage, no CPC continuity to secondary, max 50 V AC.",
      "PELV (414) - extra-low voltage, CPC DOES continue to secondary.",
      "Additional protection (415): only TWO recognised - 30 mA RCD and supplementary bonding.",
      "Basic protection (416): insulation of live parts (only removable by destruction) + barriers/enclosures.",
      "Obstacles / placing out of reach (417) - skilled persons only; live above 2.5 m, horizontal 1.25 m, behind barrier 0.75 m.",
      "Non-conducting locations (418) - bonding without an earth reference (data centres, labs)."
    ]
  }
];

const applets: Applet[] = [
  {
    id: "tool-containment-rod",
    title: "Containment rod",
    subtitle: "Rod cut and Unistrut drop",
    keywords: "containment rod threaded rod cut length unistrut strut drop buffer support channel"
  },
  {
    id: "tool-unistrut-length",
    title: "Unistrut length",
    subtitle: "Multiple containment runs",
    keywords:
      "unistrut length calculator strut support channel tray basket trunking containment widths gap side allowance multiple runs"
  },
  {
    id: "tool-angle",
    title: "Angle drop",
    subtitle: "Drop and developed length",
    keywords: "angle drop tray bracket piece length offset trig 45 degree bend top straight bottom straight allowance developed length"
  },
  {
    id: "tool-power",
    title: "kW / A / V",
    subtitle: "Power current voltage",
    keywords: "load current amps power single phase three phase kilowatt voltage pf converter"
  },
  {
    id: "tool-vdrop",
    title: "Voltage drop",
    subtitle: "Quick estimate",
    keywords: "voltage drop cable size current length single phase three phase percent"
  },
  {
    id: "tool-breaker",
    title: "Breaker sizing",
    subtitle: "Quick selection",
    keywords: "breaker fuse mcb rcbo size current kilowatt protective device"
  },
  {
    id: "tool-conduit",
    title: "Conduit fill",
    subtitle: "Area check",
    keywords: "conduit fill cable diameter count area percent containment"
  },
  {
    id: "tool-structure",
    title: "Structural limits",
    subtitle: "Wall chases and joists",
    keywords: "joist notch chase wall thickness building work structure"
  }
];

const toolHints = {
  containmentRod:
    "Actual drop = overall height - top of Unistrut. Rod cut length = actual drop + buffer. Bottom of Unistrut drop = actual drop + Unistrut depth.",
  unistrutLength:
    "Length = total containment widths + left allowance + right allowance + ((containments - 1) x gap). Side allowances cover the rod or square plate position at each end.",
  angle: "Angled length = drop / sin(theta). Advanced: total = top + angled + bottom + allowance.",
  power: "Single-phase: P = V x I x PF. Three-phase: P = sqrt(3) x V x I x PF.",
  vdrop: "Single-phase: Vd = 2 x I x L x rho / A. Three-phase: Vd = sqrt(3) x I x L x rho / A.",
  breaker: "Rounds design current up to the next standard breaker size.",
  conduit: "Fill % = total cable area / conduit area x 100.",
  structure: "Vertical chase = wall / 3. Horizontal chase = wall / 6. Joist notch = depth x 0.125."
} as const;

function normalize(text: string) {
  return text.toLowerCase();
}

function getTerms(query: string) {
  return normalize(query)
    .split(/\s+/)
    .map((term) => term.trim())
    .filter(Boolean);
}

function matchesQuery(haystack: string, query: string) {
  const terms = getTerms(query);
  if (!terms.length) return true;
  const normalizedHaystack = normalize(haystack);
  return terms.every((term) => normalizedHaystack.includes(term));
}

function isOneOf<T extends string>(options: readonly T[], value: unknown): value is T {
  return typeof value === "string" && options.includes(value as T);
}

function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

function isAngleUnit(value: unknown): value is AngleUnit {
  return isOneOf(ANGLE_UNITS, value);
}

function isPowerTarget(value: unknown): value is PowerTarget {
  return isOneOf(POWER_TARGETS, value);
}

function isPhaseType(value: unknown): value is PhaseType {
  return isOneOf(PHASE_TYPES, value);
}

function isBreakerInputMode(value: unknown): value is BreakerInputMode {
  return isOneOf(BREAKER_INPUT_MODES, value);
}

function isUnistrutContainmentRow(value: unknown): value is UnistrutContainmentRow {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;

  const row = value as Partial<UnistrutContainmentRow>;
  if (!Number.isInteger(row.id) || typeof row.label !== "string" || typeof row.width !== "string") {
    return false;
  }

  const option = CONTAINMENT_OPTIONS.find((o) => o.label === row.label);
  return Boolean(option?.widths.some((width) => String(widthValue(width)) === row.width));
}

function isUnistrutContainments(value: unknown): value is UnistrutContainmentRow[] {
  return Array.isArray(value) && value.every(isUnistrutContainmentRow);
}

function ToolTitle({ title, hint }: { title: string; hint: string }) {
  return (
    <div className="tool-title-wrap">
      <h3 className="tool-title" tabIndex={0}>
        {title}
      </h3>
      <div className="tool-tooltip" role="tooltip">
        {hint}
      </div>
    </div>
  );
}

function getPageFromLocation(): PageId {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/notes" || path === "/cheatsheet") return "cheatsheet";
  if (path === "/exams") return "exams";
  if (path === "/tutorials") return "tutorials";
  if (path === "/interactive") return "interactive";
  return DEFAULT_PAGE;
}

function getPageHref(page: PageId): string {
  switch (page) {
    case "home":
      return "/";
    case "cheatsheet":
      return "/notes";
    case "exams":
      return "/exams";
    case "tutorials":
      return "/tutorials";
    case "interactive":
      return "/interactive";
  }
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { entries: historyEntries, addEntry: addHistoryEntry, clearHistory } = useHistory();
  const [historyOpen, setHistoryOpen] = useState(false);

  const [page, setPage] = useState<PageId>(getPageFromLocation());
  const [searchQuery, setSearchQuery] = useState("");
  const searchQueryRef = useRef(searchQuery);
  searchQueryRef.current = searchQuery;
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [paletteQuery, setPaletteQuery] = useState("");
  const [activePaletteIndex, setActivePaletteIndex] = useState(0);
  const [helpOpen, setHelpOpen] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [copiedSectionId, setCopiedSectionId] = useState<string | null>(null);

  const paletteTrapRef = useFocusTrap<HTMLDivElement>(paletteOpen);
  const helpTrapRef = useFocusTrap<HTMLDivElement>(helpOpen);
  const historyTrapRef = useFocusTrap<HTMLDivElement>(historyOpen);

  // ── Persisted calculator state ──
  const [containmentRodOverallHeight, setContainmentRodOverallHeight] = usePersistedState<string>(
    "cr-height",
    DEFAULT_CONTAINMENT_ROD_VALUES.overallHeight
  );
  const [containmentRodTopOfUnistrut, setContainmentRodTopOfUnistrut] = usePersistedState<string>(
    "cr-top",
    DEFAULT_CONTAINMENT_ROD_VALUES.topOfUnistrut
  );
  const [containmentRodBuffer, setContainmentRodBuffer] = usePersistedState<string>(
    "cr-buffer",
    DEFAULT_CONTAINMENT_ROD_VALUES.buffer
  );
  const [containmentRodUnistrutDepth, setContainmentRodUnistrutDepth] = usePersistedState<string>(
    "cr-depth",
    DEFAULT_CONTAINMENT_ROD_VALUES.unistrutDepth
  );
  const [unistrutContainments, setUnistrutContainments] = usePersistedState<UnistrutContainmentRow[]>(
    "ul-containments",
    DEFAULT_UNISTRUT_LENGTH_VALUES.containments.map((c) => ({ ...c })),
    isUnistrutContainments
  );
  const [unistrutCountInput, setUnistrutCountInput] = useState(
    String(DEFAULT_UNISTRUT_LENGTH_VALUES.containments.length)
  );
  const [unistrutLeftAllowance, setUnistrutLeftAllowance] = usePersistedState<string>(
    "ul-left",
    DEFAULT_UNISTRUT_LENGTH_VALUES.leftAllowance
  );
  const [unistrutRightAllowance, setUnistrutRightAllowance] = usePersistedState<string>(
    "ul-right",
    DEFAULT_UNISTRUT_LENGTH_VALUES.rightAllowance
  );
  const [unistrutGap, setUnistrutGap] = usePersistedState<string>(
    "ul-gap",
    DEFAULT_UNISTRUT_LENGTH_VALUES.gap
  );

  const [angleDrop, setAngleDrop] = usePersistedState("angle-drop", "10");
  const [angleValue, setAngleValue] = usePersistedState("angle-value", "45");
  const [angleTopStraight, setAngleTopStraight] = usePersistedState("angle-top", "0");
  const [angleBottomStraight, setAngleBottomStraight] = usePersistedState("angle-bottom", "0");
  const [angleAllowance, setAngleAllowance] = usePersistedState("angle-allowance", "0");
  const [angleUnit, setAngleUnit] = usePersistedState<AngleUnit>("angle-unit", "cm", isAngleUnit);
  const [angleTopBend, setAngleTopBend] = usePersistedState("angle-top-bend", false, isBoolean);
  const [angleBottomBend, setAngleBottomBend] = usePersistedState("angle-bottom-bend", false, isBoolean);
  const [angleBendHeight, setAngleBendHeight] = usePersistedState("angle-bend-height", "5");
  const [angleAdvanced, setAngleAdvanced] = useState(false);

  const [powerTarget, setPowerTarget] = usePersistedState<PowerTarget>("power-target", "current", isPowerTarget);
  const [powerPhase, setPowerPhase] = usePersistedState<PhaseType>("power-phase", "single", isPhaseType);
  const [powerValueA, setPowerValueA] = usePersistedState("power-a", "1");
  const [powerValueB, setPowerValueB] = usePersistedState("power-b", "230");
  const [powerPf, setPowerPf] = usePersistedState("power-pf", "0.95");

  const [vdropPhase, setVdropPhase] = usePersistedState<PhaseType>("vdrop-phase", "single", isPhaseType);
  const [vdropCurrent, setVdropCurrent] = usePersistedState("vdrop-current", "20");
  const [vdropLength, setVdropLength] = usePersistedState("vdrop-length", "20");
  const [vdropCableSize, setVdropCableSize] = usePersistedState("vdrop-cable", "2.5");
  const [vdropVoltage, setVdropVoltage] = usePersistedState("vdrop-voltage", "230");

  const [breakerMode, setBreakerMode] = usePersistedState<BreakerInputMode>("breaker-mode", "current", isBreakerInputMode);
  const [breakerCurrent, setBreakerCurrent] = usePersistedState("breaker-current", "18");
  const [breakerPower, setBreakerPower] = usePersistedState("breaker-power", "4");
  const [breakerPhase, setBreakerPhase] = usePersistedState<PhaseType>("breaker-phase", "single", isPhaseType);
  const [breakerVoltage, setBreakerVoltage] = usePersistedState("breaker-voltage", "230");
  const [breakerPf, setBreakerPf] = usePersistedState("breaker-pf", "0.95");

  const [conduitDiameter, setConduitDiameter] = usePersistedState("conduit-dia", "20");
  const [conduitCableDiameter, setConduitCableDiameter] = usePersistedState("conduit-cable", "6");
  const [conduitCableCount, setConduitCableCount] = usePersistedState("conduit-count", "3");
  const [conduitMaxFill, setConduitMaxFill] = usePersistedState("conduit-fill", "40");

  const [structureWall, setStructureWall] = usePersistedState("struct-wall", "100");
  const [structureJoist, setStructureJoist] = usePersistedState("struct-joist", "200");

  const [activeToolIndex, setActiveToolIndex] = useState(0);

  const toolGridRef = useRef<HTMLDivElement | null>(null);
  const paletteInputRef = useRef<HTMLInputElement | null>(null);
  const nextUnistrutContainmentIdRef = useRef(
    Math.max(...unistrutContainments.map((c) => c.id), 0) + 1
  );
  const copiedSectionTimeoutRef = useRef<number | null>(null);

  // Sync count input when containments change (e.g. from localStorage load)
  useEffect(() => {
    setUnistrutCountInput(String(unistrutContainments.length));
  }, [unistrutContainments.length]);

  function navigateTo(nextPage: PageId, targetId?: string) {
    window.history.pushState(null, "", getPageHref(nextPage));
    setPage(nextPage);

    if (targetId) {
      window.setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 50);
    }
  }

  function scrollToTool(index: number) {
    const grid = toolGridRef.current;
    if (!grid) return;
    grid.scrollTo({ left: grid.clientWidth * index, behavior: "smooth" });
  }

  function clearContainmentRod() {
    setContainmentRodOverallHeight("");
    setContainmentRodTopOfUnistrut("");
    setContainmentRodBuffer("");
    setContainmentRodUnistrutDepth("");
  }

  function buildUnistrutContainmentRow(): UnistrutContainmentRow {
    const firstOption = CONTAINMENT_OPTIONS[0];
    return {
      id: nextUnistrutContainmentIdRef.current++,
      label: firstOption.label,
      width: String(widthValue(firstOption.widths[0]))
    };
  }

  function setUnistrutContainmentCount(nextCount: number) {
    const normalizedCount = Number.isFinite(nextCount) ? Math.max(0, Math.trunc(nextCount)) : 0;

    setUnistrutContainments((current) => {
      if (normalizedCount === current.length) return current;
      if (normalizedCount < current.length) return current.slice(0, normalizedCount);

      const nextRows = [...current];
      while (nextRows.length < normalizedCount) {
        nextRows.push(buildUnistrutContainmentRow());
      }
      return nextRows;
    });
  }

  function addUnistrutContainmentRow() {
    setUnistrutContainments((current) => {
      const next = [...current, buildUnistrutContainmentRow()];
      setUnistrutCountInput(String(next.length));
      return next;
    });
  }

  function removeUnistrutContainmentRow(id: number) {
    setUnistrutContainments((current) => {
      const next = current.filter((c) => c.id !== id);
      setUnistrutCountInput(String(next.length));
      return next;
    });
  }

  function updateUnistrutContainmentRow(
    id: number,
    field: "label" | "width",
    value: string
  ) {
    setUnistrutContainments((current) =>
      current.map((containment) => {
        if (containment.id !== id) return containment;
        if (field === "label") {
          const option = CONTAINMENT_OPTIONS.find((o) => o.label === value);
          const currentWidth = Number.parseFloat(containment.width);
          const keepWidth = option && option.widths.some((w) => widthValue(w) === currentWidth);
          return {
            ...containment,
            label: value,
            width: keepWidth ? containment.width : option ? String(widthValue(option.widths[0])) : ""
          };
        }
        return { ...containment, [field]: value };
      })
    );
  }

  function clearUnistrutLength() {
    setUnistrutContainments([]);
    setUnistrutCountInput("0");
    setUnistrutLeftAllowance(DEFAULT_UNISTRUT_LENGTH_VALUES.leftAllowance);
    setUnistrutRightAllowance(DEFAULT_UNISTRUT_LENGTH_VALUES.rightAllowance);
    setUnistrutGap(DEFAULT_UNISTRUT_LENGTH_VALUES.gap);
  }

  // ── Calculator results ──
  const containmentRodResult = useMemo(() =>
    calcContainmentRod(containmentRodOverallHeight, containmentRodTopOfUnistrut, containmentRodBuffer, containmentRodUnistrutDepth),
    [containmentRodBuffer, containmentRodOverallHeight, containmentRodTopOfUnistrut, containmentRodUnistrutDepth]
  );

  const unistrutLengthResult = useMemo(() =>
    calcUnistrutLength(unistrutContainments, unistrutLeftAllowance, unistrutRightAllowance, unistrutGap),
    [unistrutContainments, unistrutGap, unistrutLeftAllowance, unistrutRightAllowance]
  );

  const angleResult = useMemo(() =>
    calcAngle(
      angleDrop,
      angleValue,
      angleTopStraight,
      angleBottomStraight,
      angleAllowance,
      angleUnit,
      angleTopBend,
      angleBottomBend,
      angleBendHeight
    ),
    [
      angleAllowance,
      angleBendHeight,
      angleBottomBend,
      angleBottomStraight,
      angleDrop,
      angleTopBend,
      angleTopStraight,
      angleUnit,
      angleValue
    ]
  );

  const powerResult = useMemo(() =>
    calcPower(powerTarget, powerPhase, powerValueA, powerValueB, powerPf),
    [powerPf, powerPhase, powerTarget, powerValueA, powerValueB]
  );

  const voltageDropResult = useMemo(() =>
    calcVoltageDrop(vdropPhase, vdropCurrent, vdropLength, vdropCableSize, vdropVoltage),
    [vdropCableSize, vdropCurrent, vdropLength, vdropPhase, vdropVoltage]
  );

  const breakerResult = useMemo(() =>
    calcBreaker(breakerMode, breakerCurrent, breakerPower, breakerPhase, breakerVoltage, breakerPf),
    [breakerCurrent, breakerMode, breakerPf, breakerPhase, breakerPower, breakerVoltage]
  );

  const conduitResult = useMemo(() =>
    calcConduit(conduitDiameter, conduitCableDiameter, conduitCableCount, conduitMaxFill),
    [conduitCableCount, conduitCableDiameter, conduitDiameter, conduitMaxFill]
  );

  const structureResult = useMemo(() =>
    calcStructure(structureWall, structureJoist),
    [structureJoist, structureWall]
  );

  const filteredApplets = useMemo(
    () =>
      applets.filter((applet) =>
        matchesQuery(`${applet.title} ${applet.subtitle} ${applet.keywords}`, searchQuery)
      ),
    [searchQuery]
  );

  const filteredCheatSections = useMemo(
    () =>
      cheatSheetSections
        .map((section) => {
          const legendLabels = section.legend ? section.legend.map((l) => l.label) : [];
          const allText = [section.title, section.summary, ...section.items, ...legendLabels].join(" ");
          if (!searchQuery) return section;

          const matchingItems = section.items.filter((item) =>
            matchesQuery(`${section.title} ${item}`, searchQuery)
          );
          const matchingLegend = section.legend?.filter((l) =>
            matchesQuery(`${section.title} ${l.label}`, searchQuery)
          );

          if (matchesQuery(allText, searchQuery)) {
            return {
              ...section,
              items: matchingItems.length ? matchingItems : section.items,
              legend: matchingLegend?.length ? matchingLegend : section.legend
            };
          }

          if (!matchingItems.length && !matchingLegend?.length) return null;

          return {
            ...section,
            items: matchingItems,
            legend: matchingLegend?.length ? matchingLegend : undefined
          };
        })
        .filter((section): section is CheatSheetSection => section !== null),
    [searchQuery]
  );

  const paletteItems = useMemo(() => {
    const baseItems: PaletteItem[] = [
      {
        title: "Home",
        subtitle: "Open the tools page.",
        tag: "Page",
        keywords: "home start tools calculators",
        action: () => navigateTo("home")
      },
      {
        title: "Notes",
        subtitle: "Open the cheat sheet.",
        tag: "Page",
        keywords: "cheat sheet notes formulas regs safe zones",
        action: () => navigateTo("cheatsheet")
      },
      {
        title: "Exams",
        subtitle: "Interactive mock exams.",
        tag: "Page",
        keywords: "exam mock quiz questions nvq level 3 city guilds",
        action: () => navigateTo("exams")
      },
      {
        title: "Tutorials",
        subtitle: "Workplace videos and demonstrations.",
        tag: "Page",
        keywords: "tutorials videos demonstrations workplace trunking conduit tray unistrut supports",
        action: () => navigateTo("tutorials")
      },
      {
        title: "Interactive",
        subtitle: "Build and energize circuits with floating tips.",
        tag: "Page",
        keywords: "interactive circuit builder simulator playground series parallel breaker switch",
        action: () => navigateTo("interactive")
      },
      {
        title: "Help",
        subtitle: "Show shortcuts.",
        tag: "Action",
        keywords: "help keyboard shortcuts",
        action: () => setHelpOpen(true)
      },
      {
        title: "History",
        subtitle: "View past calculations.",
        tag: "Action",
        keywords: "history recent calculations log",
        action: () => setHistoryOpen(true)
      },
      ...applets.map((applet) => ({
        title: applet.title,
        subtitle: applet.subtitle,
        tag: "Tool",
        keywords: applet.keywords,
        action: () => navigateTo("home", applet.id)
      })),
      ...cheatSheetSections.flatMap((section) => [
        {
          title: section.title,
          subtitle: section.summary,
          tag: "Sheet",
          keywords: `${section.title} ${section.summary} ${section.items.join(" ")} ${(section.legend || []).map((l) => l.label).join(" ")}`,
          action: () => navigateTo("cheatsheet", section.id)
        },
        ...section.items.map((item) => ({
          title: item.split(":")[0],
          subtitle: item,
          tag: "Note",
          keywords: `${section.title} ${item}`,
          action: () => navigateTo("cheatsheet", section.id)
        }))
      ]),
      ...TUTORIALS.map((tutorial) => ({
        title: tutorial.title,
        subtitle: tutorial.workplaceUse,
        tag: "Video",
        keywords: `${tutorial.title} ${tutorial.channel} ${tutorial.category} ${tutorial.workplaceUse} ${tutorial.practiceFocus.join(" ")}`,
        action: () => navigateTo("tutorials", tutorial.id)
      }))
    ];

    return baseItems
      .filter((item) => matchesQuery(`${item.title} ${item.subtitle} ${item.keywords}`, paletteQuery))
      .slice(0, 12);
  }, [paletteQuery]);

  useEffect(() => {
    const updatePage = () => setPage(getPageFromLocation());
    window.addEventListener("popstate", updatePage);
    return () => window.removeEventListener("popstate", updatePage);
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-page", page);
  }, [page]);

  useEffect(() => {
    if (!paletteOpen) return;
    setActivePaletteIndex(0);
    window.setTimeout(() => {
      paletteInputRef.current?.focus();
    }, 0);
  }, [paletteOpen, paletteQuery]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const commandKey = event.metaKey || event.ctrlKey;

      if (commandKey && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteQuery(searchQueryRef.current);
        setPaletteOpen(true);
      }

      if (commandKey && event.key === "/") {
        event.preventDefault();
        setHelpOpen(true);
      }

      if (event.key === "Escape") {
        setPaletteOpen(false);
        setHelpOpen(false);
        setHistoryOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    return () => {
      if (copiedSectionTimeoutRef.current !== null) {
        window.clearTimeout(copiedSectionTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
    };

    const onInstalled = () => setInstallPrompt(null);

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  useEffect(() => {
    const grid = toolGridRef.current;
    if (!grid) return;

    function handleScroll() {
      const width = grid!.clientWidth;
      if (width === 0) return;
      const index = Math.round(grid!.scrollLeft / width);
      setActiveToolIndex((current) => (current === index ? current : index));
    }

    grid.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => grid.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const grid = toolGridRef.current;
    if (!grid) return;
    const width = grid.clientWidth;
    if (width === 0) return;
    const maxIndex = Math.max(filteredApplets.length - 1, 0);
    const index = Math.min(Math.round(grid.scrollLeft / width), maxIndex);
    setActiveToolIndex((current) => (current === index ? current : index));
  }, [filteredApplets]);

  function handlePaletteKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!paletteItems.length) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActivePaletteIndex((current) => (current + 1) % paletteItems.length);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActivePaletteIndex((current) => (current - 1 + paletteItems.length) % paletteItems.length);
    }

    if (event.key === "Enter") {
      event.preventDefault();
      setPaletteOpen(false);
      paletteItems[activePaletteIndex]?.action();
    }
  }

  async function installApp() {
    if (!installPrompt) return;
    await installPrompt.prompt();
    await installPrompt.userChoice;
    setInstallPrompt(null);
  }

  async function copyNoteSection(section: CheatSheetSection) {
    const legendLabels = section.legend ? section.legend.map((l) => l.label) : [];
    const text = [section.title, section.summary, ...section.items, ...legendLabels].join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopiedSectionId(section.id);
      if (copiedSectionTimeoutRef.current !== null) {
        window.clearTimeout(copiedSectionTimeoutRef.current);
      }
      copiedSectionTimeoutRef.current = window.setTimeout(() => {
        setCopiedSectionId((current) => (current === section.id ? null : current));
        copiedSectionTimeoutRef.current = null;
      }, 1400);
    } catch {
      setCopiedSectionId(null);
    }
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a
          className="brand"
          href={getPageHref("home")}
          aria-label="Go to overview"
          onClick={(event) => {
            event.preventDefault();
            navigateTo("home");
          }}
        >
          <svg
            className="brand-mark"
            viewBox="0 0 40 40"
            aria-hidden="true"
            fill="none"
          >
            <path
              d="M10 13h9l-3.6 7.1h7.2L16.8 30l2.1-7.2H10z"
              fill="currentColor"
            />
            <path
              d="M8 24.5h4.5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M27.5 15.5H32"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M8 9.5C8 8.12 9.12 7 10.5 7h5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M24.5 33h5A2.5 2.5 0 0 0 32 30.5v-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <strong>Sparky</strong>
        </a>

        <nav className="primary-nav" aria-label="Primary">
          {(
            [
              { id: "home", label: "Home" },
              { id: "cheatsheet", label: "Notes" },
              { id: "exams", label: "Exams" },
              { id: "tutorials", label: "Tutorials" },
              { id: "interactive", label: "Interactive" }
            ] as const
          ).map((item) => (
            <a
              key={item.id}
              href={getPageHref(item.id)}
              className={page === item.id ? "is-active" : undefined}
              onClick={(event) => {
                event.preventDefault();
                navigateTo(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            {theme === "dark" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
          <button type="button" className="theme-toggle" onClick={() => setHistoryOpen(true)} aria-label="Calculation history" title="Calculation history">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </button>
          <label className="search-field" htmlFor="site-search">
            <input
              id="site-search"
              type="search"
              placeholder="Search"
              autoComplete="off"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <span className="search-hint">⌘ K</span>
          </label>
        </div>
      </header>

      <main className="workspace">
        <section className={`page page-home ${page === "home" ? "is-active" : ""}`}>
          <div className="tool-grid" ref={toolGridRef}>
            {filteredApplets.some((a) => a.id === "tool-containment-rod") ? (
              <article id="tool-containment-rod" className="tool-panel">
                <div className="tool-heading">
                  <ToolTitle title="Containment rod" hint={toolHints.containmentRod} />
                  <button type="button" className="ghost-button" onClick={clearContainmentRod}>
                    Clear
                  </button>
                </div>

                <div className="tool-form">
                  <div className="field-row">
                    <label className="field">
                      <span>Overall height (mm)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="1"
                        value={containmentRodOverallHeight}
                        onChange={(e) => setContainmentRodOverallHeight(e.target.value)}
                      />
                      {containmentRodOverallHeight === "" && <span className="field-hint">Enter the total height</span>}
                    </label>

                    <label className="field">
                      <span>Height to top of Unistrut (mm)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="1"
                        aria-invalid={containmentRodResult.validationMessage ? true : undefined}
                        value={containmentRodTopOfUnistrut}
                        onChange={(e) => setContainmentRodTopOfUnistrut(e.target.value)}
                      />
                      {containmentRodTopOfUnistrut === "" && <span className="field-hint">Must be less than overall height</span>}
                    </label>
                  </div>

                  <div className="field-row">
                    <label className="field">
                      <span>Buffer (mm)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="1"
                        value={containmentRodBuffer}
                        onChange={(e) => setContainmentRodBuffer(e.target.value)}
                      />
                    </label>

                    <label className="field">
                      <span>Unistrut depth (mm)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="1"
                        placeholder={DEFAULT_CONTAINMENT_ROD_VALUES.unistrutDepth}
                        value={containmentRodUnistrutDepth}
                        onChange={(e) => setContainmentRodUnistrutDepth(e.target.value)}
                      />
                    </label>
                  </div>

                  <p className="field-note">Leave Unistrut depth blank to use 40 mm.</p>

                  {containmentRodResult.validationMessage ? (
                    <p className="field-error" role="alert">
                      {containmentRodResult.validationMessage}
                    </p>
                  ) : null}
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">Rod cut length</p>
                    <p className="result-value">
                      <CopyableResult value={containmentRodResult.rodCutLengthValue} onCopy={() => addHistoryEntry("Containment rod", "Rod cut length", containmentRodResult.rodCutLengthValue)} />
                    </p>
                  </div>
                  <div className="mini-metrics">
                    <div>
                      <span>Actual drop</span>
                      <strong><CopyableResult value={containmentRodResult.actualDropValue} onCopy={() => addHistoryEntry("Containment rod", "Actual drop", containmentRodResult.actualDropValue)} /></strong>
                    </div>
                    <div>
                      <span>Bottom of Unistrut drop</span>
                      <strong><CopyableResult value={containmentRodResult.bottomOfUnistrutDropValue} onCopy={() => addHistoryEntry("Containment rod", "Bottom of Unistrut drop", containmentRodResult.bottomOfUnistrutDropValue)} /></strong>
                    </div>
                  </div>
                </div>
                <FormulaToggle formula={formulas.containmentRod} />
              </article>
            ) : null}

            {filteredApplets.some((a) => a.id === "tool-unistrut-length") ? (
              <article id="tool-unistrut-length" className="tool-panel">
                <div className="tool-heading">
                  <ToolTitle title="Unistrut length" hint={toolHints.unistrutLength} />
                  <button type="button" className="ghost-button" onClick={clearUnistrutLength}>
                    Clear
                  </button>
                </div>

                <div className="tool-form">
                  <div className="field-row">
                    <label className="field">
                      <span>Number of containments</span>
                      <input
                        type="number"
                        inputMode="numeric"
                        min="0"
                        step="1"
                        aria-invalid={!unistrutContainments.length ? true : undefined}
                        value={unistrutCountInput}
                        onChange={(e) => {
                          const raw = e.target.value;
                          setUnistrutCountInput(raw);
                          setUnistrutContainmentCount(
                            raw === "" ? 0 : Number.parseFloat(raw)
                          );
                        }}
                        onBlur={() =>
                          setUnistrutCountInput(String(unistrutContainments.length))
                        }
                      />
                    </label>

                    <label className="field">
                      <span>Gap between containments (mm)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="1"
                        aria-invalid={
                          Number.isFinite(Number.parseFloat(unistrutGap)) &&
                          Number.parseFloat(unistrutGap) < 0
                            ? true
                            : undefined
                        }
                        value={unistrutGap}
                        onChange={(e) => setUnistrutGap(e.target.value)}
                      />
                      {Number.isFinite(Number.parseFloat(unistrutGap)) && Number.parseFloat(unistrutGap) < 0 && <span className="field-hint">Gap cannot be negative</span>}
                    </label>
                  </div>

                  <div className="field-row">
                    <label className="field">
                      <span>Side allowance left (mm)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="1"
                        aria-invalid={
                          Number.isFinite(Number.parseFloat(unistrutLeftAllowance)) &&
                          Number.parseFloat(unistrutLeftAllowance) < 0
                            ? true
                            : undefined
                        }
                        value={unistrutLeftAllowance}
                        onChange={(e) => setUnistrutLeftAllowance(e.target.value)}
                      />
                    </label>

                    <label className="field">
                      <span>Side allowance right (mm)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="1"
                        aria-invalid={
                          Number.isFinite(Number.parseFloat(unistrutRightAllowance)) &&
                          Number.parseFloat(unistrutRightAllowance) < 0
                            ? true
                            : undefined
                        }
                        value={unistrutRightAllowance}
                        onChange={(e) => setUnistrutRightAllowance(e.target.value)}
                      />
                    </label>
                  </div>

                  <p className="field-note">
                    Side allowances cover the rod or square plate position at each end.
                  </p>

                  <div className="containment-rows">
                    {unistrutContainments.map((containment, index) => {
                      const selectedOption = CONTAINMENT_OPTIONS.find(
                        (o) => o.label === containment.label
                      );
                      return (
                        <div key={containment.id} className="containment-card">
                          <span className="containment-index">{index + 1}</span>

                          <div className="containment-fields">
                            <label className="containment-field">
                              <span>Type</span>
                              <select
                                value={containment.label}
                                onChange={(e) =>
                                  updateUnistrutContainmentRow(containment.id, "label", e.target.value)
                                }
                              >
                                <option value="" disabled>
                                  Select
                                </option>
                                {CONTAINMENT_OPTIONS.map((option) => (
                                  <option key={option.label} value={option.label}>
                                    {option.label}
                                  </option>
                                ))}
                              </select>
                            </label>

                            <label className="containment-field">
                              <span>Width</span>
                              <select
                                value={containment.width}
                                disabled={!selectedOption}
                                onChange={(e) =>
                                  updateUnistrutContainmentRow(containment.id, "width", e.target.value)
                                }
                              >
                                {selectedOption ? (
                                  selectedOption.widths.map((w) => {
                                    const value = widthValue(w);
                                    return (
                                      <option key={value} value={String(value)}>
                                        {widthLabel(w)}
                                      </option>
                                    );
                                  })
                                ) : (
                                  <option value="">--</option>
                                )}
                              </select>
                            </label>
                          </div>

                          <button
                            type="button"
                            className="containment-remove"
                            aria-label={`Remove containment ${index + 1}`}
                            onClick={() => removeUnistrutContainmentRow(containment.id)}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  <button type="button" className="add-containment-btn" onClick={addUnistrutContainmentRow}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                    Add containment
                  </button>

                  {unistrutLengthResult.validationMessage ? (
                    <p className="field-error" role="alert">
                      {unistrutLengthResult.validationMessage}
                    </p>
                  ) : null}
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">Final Unistrut length</p>
                    <p className="result-value">
                      <CopyableResult value={unistrutLengthResult.finalLengthValue} onCopy={() => addHistoryEntry("Unistrut length", "Final length", unistrutLengthResult.finalLengthValue)} />
                    </p>
                    <p className="result-sub">Rounded up to nearest 50 mm (hole spacing)</p>
                  </div>

                  <div className="breakdown-row">
                    <div className="breakdown-item">
                      <span>Containment</span>
                      <strong>{unistrutLengthResult.totalContainmentWidthValue}</strong>
                    </div>
                    <div className="breakdown-item">
                      <span>Side allowance</span>
                      <strong>{unistrutLengthResult.totalSideAllowanceValue}</strong>
                    </div>
                    <div className="breakdown-item">
                      <span>{`Gaps (${unistrutLengthResult.gapLabel})`}</span>
                      <strong>{unistrutLengthResult.totalGapAllowanceValue}</strong>
                    </div>
                    <div className="breakdown-item breakdown-total">
                      <span>Exact</span>
                      <strong>{unistrutLengthResult.exactLengthValue}</strong>
                    </div>
                  </div>
                </div>
                <FormulaToggle formula={formulas.unistrutLength} />
              </article>
            ) : null}

            {filteredApplets.some((a) => a.id === "tool-angle") ? (
              <article id="tool-angle" className="tool-panel">
                <div className="tool-heading">
                  <ToolTitle title="Angle drop" hint={toolHints.angle} />
                  <button
                    type="button"
                    className={`switch-chip ${angleAdvanced ? "is-active" : ""}`}
                    onClick={() => setAngleAdvanced((c) => !c)}
                    aria-pressed={angleAdvanced}
                  >
                    Advanced
                  </button>
                </div>

                <div className="tool-form">
                  <div className="field-row">
                    <label className="field">
                      <span>Vertical drop</span>
                      <div className="input-wrap">
                        <input
                          type="number"
                          inputMode="decimal"
                          min="0"
                          step="0.01"
                          value={angleDrop}
                          onChange={(e) => setAngleDrop(e.target.value)}
                        />
                        <select
                          className="unit-select"
                          aria-label="Unit"
                          value={angleUnit}
                          onChange={(e) => setAngleUnit(e.target.value as AngleUnit)}
                        >
                          <option value="mm">mm</option>
                          <option value="cm">cm</option>
                          <option value="m">m</option>
                        </select>
                      </div>
                    </label>

                    <label className="field">
                      <span>Angle from horizontal</span>
                      <div className="input-wrap">
                        <input
                          type="number"
                          inputMode="decimal"
                          min="0"
                          max="90"
                          step="0.1"
                          value={angleValue}
                          onChange={(e) => setAngleValue(e.target.value)}
                        />
                        <span className="suffix">deg</span>
                      </div>
                      {Number.parseFloat(angleValue) >= 90 && <span className="field-hint">Angle must be less than 90</span>}
                    </label>
                  </div>

                  <div className="field-row">
                    <div className="field">
                      <span>Prefab bends</span>
                      <div className="check-row">
                        <label className="check-option">
                          <input
                            type="checkbox"
                            checked={angleTopBend}
                            onChange={(e) => setAngleTopBend(e.target.checked)}
                          />
                          <span>Top</span>
                        </label>
                        <label className="check-option">
                          <input
                            type="checkbox"
                            checked={angleBottomBend}
                            onChange={(e) => setAngleBottomBend(e.target.checked)}
                          />
                          <span>Bottom</span>
                        </label>
                      </div>
                    </div>

                    <label className="field">
                      <span>Bend height</span>
                      <div className="input-wrap">
                        <input
                          type="number"
                          inputMode="decimal"
                          min="0"
                          step="0.1"
                          value={angleBendHeight}
                          onChange={(e) => setAngleBendHeight(e.target.value)}
                          disabled={!angleTopBend && !angleBottomBend}
                        />
                        <span className="suffix">{angleUnit}</span>
                      </div>
                    </label>
                  </div>

                  {angleAdvanced ? (
                    <>
                      <div className="field-row">
                        <label className="field">
                          <span>Top straight</span>
                          <div className="input-wrap">
                            <input
                              type="number"
                              inputMode="decimal"
                              min="0"
                              step="0.01"
                              value={angleTopStraight}
                              onChange={(e) => setAngleTopStraight(e.target.value)}
                            />
                            <span className="suffix">{angleUnit}</span>
                          </div>
                        </label>

                        <label className="field">
                          <span>Bottom straight</span>
                          <div className="input-wrap">
                            <input
                              type="number"
                              inputMode="decimal"
                              min="0"
                              step="0.01"
                              value={angleBottomStraight}
                              onChange={(e) => setAngleBottomStraight(e.target.value)}
                            />
                            <span className="suffix">{angleUnit}</span>
                          </div>
                        </label>
                      </div>

                      <label className="field">
                        <span>Extra allowance</span>
                        <div className="input-wrap">
                          <input
                            type="number"
                            inputMode="decimal"
                            min="0"
                            step="0.01"
                            value={angleAllowance}
                            onChange={(e) => setAngleAllowance(e.target.value)}
                          />
                          <span className="suffix">{angleUnit}</span>
                        </div>
                      </label>
                    </>
                  ) : null}
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">Angled piece</p>
                    <p className="result-value">
                      <CopyableResult value={angleResult.angledLengthValue} onCopy={() => addHistoryEntry("Angle drop", "Angled piece", angleResult.angledLengthValue)} />
                    </p>
                  </div>
                  {angleAdvanced ? (
                    <div className="mini-metrics">
                      <div>
                        <span>Horizontal offset</span>
                        <strong><CopyableResult value={angleResult.offsetValue} /></strong>
                      </div>
                      <div>
                        <span>Total developed length</span>
                        <strong><CopyableResult value={angleResult.totalLengthValue} /></strong>
                      </div>
                    </div>
                  ) : null}
                </div>
                <FormulaToggle formula={formulas.angle} />
              </article>
            ) : null}

            {filteredApplets.some((a) => a.id === "tool-power") ? (
              <article id="tool-power" className="tool-panel">
                <div className="tool-heading">
                  <ToolTitle title="kW / A / V" hint={toolHints.power} />
                  <span className="tool-meta">Power current voltage</span>
                </div>

                <div className="tool-form">
                  <div className="field-row">
                    <label className="field">
                      <span>Solve</span>
                      <select
                        value={powerTarget}
                        onChange={(e) => setPowerTarget(e.target.value as PowerTarget)}
                      >
                        <option value="power">Power (kW)</option>
                        <option value="current">Current (A)</option>
                        <option value="voltage">Voltage (V)</option>
                      </select>
                    </label>
                    <label className="field">
                      <span>Phase</span>
                      <select
                        value={powerPhase}
                        onChange={(e) => setPowerPhase(e.target.value as PhaseType)}
                      >
                        <option value="single">Single-phase</option>
                        <option value="three">Three-phase</option>
                      </select>
                    </label>
                  </div>

                  <div className="field-row">
                    <label className="field">
                      <span>{powerConfig[powerTarget].inputLabels[0]}</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="0.01"
                        value={powerValueA}
                        onChange={(e) => setPowerValueA(e.target.value)}
                      />
                    </label>
                    <label className="field">
                      <span>{powerConfig[powerTarget].inputLabels[1]}</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="0.01"
                        value={powerValueB}
                        onChange={(e) => setPowerValueB(e.target.value)}
                      />
                    </label>
                  </div>

                  <label className="field">
                    <span>Power factor</span>
                    <input
                      type="number"
                      inputMode="decimal"
                      min="0.1"
                      max="1"
                      step="0.01"
                      value={powerPf}
                      onChange={(e) => setPowerPf(e.target.value)}
                    />
                    {Number.parseFloat(powerPf) > 1 && <span className="field-hint">PF must be between 0 and 1</span>}
                  </label>
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">{powerResult.label}</p>
                    <p className="result-value">
                      <CopyableResult value={powerResult.resultValue} onCopy={() => addHistoryEntry("kW / A / V", powerResult.label, powerResult.resultValue)} />
                    </p>
                  </div>
                </div>
                <FormulaToggle formula={formulas.power} />
              </article>
            ) : null}

            {filteredApplets.some((a) => a.id === "tool-vdrop") ? (
              <article id="tool-vdrop" className="tool-panel">
                <div className="tool-heading">
                  <ToolTitle title="Voltage drop" hint={toolHints.vdrop} />
                  <span className="tool-meta">Quick estimate</span>
                </div>

                <div className="tool-form">
                  <div className="field-row">
                    <label className="field">
                      <span>Phase</span>
                      <select
                        value={vdropPhase}
                        onChange={(e) => setVdropPhase(e.target.value as PhaseType)}
                      >
                        <option value="single">Single-phase</option>
                        <option value="three">Three-phase</option>
                      </select>
                    </label>
                    <label className="field">
                      <span>Nominal voltage (V)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="1"
                        value={vdropVoltage}
                        onChange={(e) => setVdropVoltage(e.target.value)}
                      />
                    </label>
                  </div>

                  <div className="field-row">
                    <label className="field">
                      <span>Current (A)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="0.01"
                        value={vdropCurrent}
                        onChange={(e) => setVdropCurrent(e.target.value)}
                      />
                    </label>
                    <label className="field">
                      <span>Length (m)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="0.01"
                        value={vdropLength}
                        onChange={(e) => setVdropLength(e.target.value)}
                      />
                    </label>
                  </div>

                  <label className="field">
                    <span>Cable size (mm²)</span>
                    <input
                      type="number"
                      inputMode="decimal"
                      min="0"
                      step="0.1"
                      value={vdropCableSize}
                      onChange={(e) => setVdropCableSize(e.target.value)}
                    />
                  </label>
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">Voltage drop</p>
                    <p className="result-value">
                      <CopyableResult value={voltageDropResult.dropValue} onCopy={() => addHistoryEntry("Voltage drop", "Drop", voltageDropResult.dropValue)} />
                    </p>
                  </div>
                  <div className="mini-metrics">
                    <div>
                      <span>Drop percent</span>
                      <strong><CopyableResult value={voltageDropResult.percentValue} /></strong>
                    </div>
                    <div>
                      <span>mV / A / m</span>
                      <strong><CopyableResult value={voltageDropResult.mvPerAmpMeterValue} /></strong>
                    </div>
                  </div>
                </div>
                <FormulaToggle formula={formulas.vdrop} />
              </article>
            ) : null}

            {filteredApplets.some((a) => a.id === "tool-breaker") ? (
              <article id="tool-breaker" className="tool-panel">
                <div className="tool-heading">
                  <ToolTitle title="Breaker sizing" hint={toolHints.breaker} />
                  <span className="tool-meta">Quick selection</span>
                </div>

                <div className="tool-form">
                  <label className="field">
                    <span>Input</span>
                    <select
                      value={breakerMode}
                      onChange={(e) => setBreakerMode(e.target.value as BreakerInputMode)}
                    >
                      <option value="current">Design current</option>
                      <option value="power">Power load</option>
                    </select>
                  </label>

                  {breakerMode === "current" ? (
                    <label className="field">
                      <span>Design current (A)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="0.01"
                        value={breakerCurrent}
                        onChange={(e) => setBreakerCurrent(e.target.value)}
                      />
                    </label>
                  ) : (
                    <>
                      <div className="field-row">
                        <label className="field">
                          <span>Phase</span>
                          <select
                            value={breakerPhase}
                            onChange={(e) => setBreakerPhase(e.target.value as PhaseType)}
                          >
                            <option value="single">Single-phase</option>
                            <option value="three">Three-phase</option>
                          </select>
                        </label>
                        <label className="field">
                          <span>Voltage (V)</span>
                          <input
                            type="number"
                            inputMode="decimal"
                            min="0"
                            step="1"
                            value={breakerVoltage}
                            onChange={(e) => setBreakerVoltage(e.target.value)}
                          />
                        </label>
                      </div>

                      <div className="field-row">
                        <label className="field">
                          <span>Power (kW)</span>
                          <input
                            type="number"
                            inputMode="decimal"
                            min="0"
                            step="0.01"
                            value={breakerPower}
                            onChange={(e) => setBreakerPower(e.target.value)}
                          />
                        </label>
                        <label className="field">
                          <span>Power factor</span>
                          <input
                            type="number"
                            inputMode="decimal"
                            min="0.1"
                            max="1"
                            step="0.01"
                            value={breakerPf}
                            onChange={(e) => setBreakerPf(e.target.value)}
                          />
                        </label>
                      </div>
                    </>
                  )}
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">Suggested breaker</p>
                    <p className="result-value">
                      <CopyableResult value={breakerResult.breakerValue} onCopy={() => addHistoryEntry("Breaker sizing", "Breaker", breakerResult.breakerValue)} />
                    </p>
                  </div>
                  <div className="mini-metrics">
                    <div>
                      <span>Design current</span>
                      <strong><CopyableResult value={breakerResult.currentValue} /></strong>
                    </div>
                    <div>
                      <span>Standard step</span>
                      <strong><CopyableResult value={breakerResult.rangeValue} /></strong>
                    </div>
                  </div>
                </div>
                <FormulaToggle formula={formulas.breaker} />
              </article>
            ) : null}

            {filteredApplets.some((a) => a.id === "tool-conduit") ? (
              <article id="tool-conduit" className="tool-panel">
                <div className="tool-heading">
                  <ToolTitle title="Conduit fill" hint={toolHints.conduit} />
                  <span className="tool-meta">Area check</span>
                </div>

                <div className="tool-form">
                  <div className="field-row">
                    <label className="field">
                      <span>Conduit ID (mm)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="0.1"
                        value={conduitDiameter}
                        onChange={(e) => setConduitDiameter(e.target.value)}
                      />
                    </label>
                    <label className="field">
                      <span>Cable OD (mm)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="0.1"
                        value={conduitCableDiameter}
                        onChange={(e) => setConduitCableDiameter(e.target.value)}
                      />
                    </label>
                  </div>

                  <div className="field-row">
                    <label className="field">
                      <span>Cable count</span>
                      <input
                        type="number"
                        inputMode="numeric"
                        min="1"
                        step="1"
                        value={conduitCableCount}
                        onChange={(e) => setConduitCableCount(e.target.value)}
                      />
                    </label>
                    <label className="field">
                      <span>Max fill (%)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="1"
                        step="1"
                        value={conduitMaxFill}
                        onChange={(e) => setConduitMaxFill(e.target.value)}
                      />
                    </label>
                  </div>
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">Fill</p>
                    <p className="result-value">
                      <CopyableResult value={conduitResult.fillValue} onCopy={() => addHistoryEntry("Conduit fill", "Fill", conduitResult.fillValue)} />
                    </p>
                    {conduitResult.overFill && (
                      <p className="field-error" role="alert">
                        Fill exceeds the {conduitMaxFill}% limit.
                      </p>
                    )}
                  </div>
                  <div className="mini-metrics">
                    <div>
                      <span>Used area</span>
                      <strong><CopyableResult value={conduitResult.usedAreaValue} /></strong>
                    </div>
                    <div>
                      <span>Free area</span>
                      <strong><CopyableResult value={conduitResult.remainingValue} /></strong>
                    </div>
                  </div>
                </div>
                <FormulaToggle formula={formulas.conduit} />
              </article>
            ) : null}

            {filteredApplets.some((a) => a.id === "tool-structure") ? (
              <article id="tool-structure" className="tool-panel">
                <div className="tool-heading">
                  <ToolTitle title="Structural limits" hint={toolHints.structure} />
                  <span className="tool-meta">Wall chases / joists</span>
                </div>

                <div className="tool-form">
                  <div className="field-row">
                    <label className="field">
                      <span>Wall thickness (mm)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="1"
                        value={structureWall}
                        onChange={(e) => setStructureWall(e.target.value)}
                      />
                    </label>
                    <label className="field">
                      <span>Joist depth (mm)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="1"
                        value={structureJoist}
                        onChange={(e) => setStructureJoist(e.target.value)}
                      />
                    </label>
                  </div>
                </div>

                <div className="tool-output">
                  <div className="mini-metrics stacked">
                    <div>
                      <span>Vertical chase</span>
                      <strong><CopyableResult value={structureResult.vertical} onCopy={() => addHistoryEntry("Structural limits", "Vertical chase", structureResult.vertical)} /></strong>
                    </div>
                    <div>
                      <span>Horizontal chase</span>
                      <strong><CopyableResult value={structureResult.horizontal} /></strong>
                    </div>
                    <div>
                      <span>Joist notch</span>
                      <strong><CopyableResult value={structureResult.notch} /></strong>
                    </div>
                  </div>
                </div>
                <FormulaToggle formula={formulas.structure} />
              </article>
            ) : null}
          </div>

          {!filteredApplets.length ? <p className="empty-state">No tools match that search.</p> : null}
        </section>

        <section className={`page ${page === "cheatsheet" ? "is-active" : ""}`}>
          <div className="sheet-grid">
            {filteredCheatSections.map((section) => (
              <article key={section.id} id={section.id} className="sheet-card">
                <div className="sheet-card-head">
                  <h3>{section.title}</h3>
                  <button
                    type="button"
                    className="icon-button"
                    aria-label={copiedSectionId === section.id ? "Copied" : `Copy ${section.title}`}
                    onClick={() => copyNoteSection(section)}
                  >
                    {copiedSectionId === section.id ? (
                      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
                        <path
                          d="M5.5 12.5l4.2 4.2L18.5 7.9"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
                        <rect
                          x="8"
                          y="8"
                          width="10"
                          height="10"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                        <path
                          d="M6 14H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <p className="sheet-summary">{section.summary}</p>
                {section.items.length > 0 ? (
                  <ul className="sheet-list">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {section.legend ? (
                  <div className="legend-grid">
                    {section.legend.map((entry) => (
                      <div key={entry.label} className="legend-row">
                        <span
                          className={`legend-swatch legend-swatch--${entry.swatchStyle || "solid"}`}
                          style={
                            entry.swatchStyle === "stripe"
                              ? { background: entry.swatch }
                              : entry.swatchStyle === "ladder"
                                ? {
                                    background: `repeating-linear-gradient(90deg, ${entry.swatch} 0px, ${entry.swatch} 5px, transparent 5px, transparent 8px)`,
                                    borderTop: `2.5px solid ${entry.swatch}`,
                                    borderBottom: `2.5px solid ${entry.swatch}`
                                  }
                                : entry.swatchStyle === "x"
                                  ? { background: entry.swatch }
                                  : entry.swatchStyle === "outline"
                                    ? { background: "transparent", border: `2.5px solid ${entry.swatch}` }
                                    : entry.swatchStyle === "box"
                                      ? { background: entry.swatch, color: entry.swatchExtra }
                                      : { background: entry.swatch }
                          }
                        >
                          {entry.swatchStyle === "x" ? (
                            <svg viewBox="0 0 56 22" className="legend-x"><line x1="4" y1="2" x2="52" y2="20" stroke="#fff" strokeWidth="2"/><line x1="4" y1="20" x2="52" y2="2" stroke="#fff" strokeWidth="2"/></svg>
                          ) : entry.swatchStyle === "box" ? (
                            <span className="legend-box-text">ATS</span>
                          ) : null}
                        </span>
                        <span className="legend-label">{entry.label}</span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>

          {!filteredCheatSections.length ? (
            <p className="empty-state">No cheat sheet entries match that search.</p>
          ) : null}
        </section>

        <ExamPage isActive={page === "exams"} />
        <TutorialsPage isActive={page === "tutorials"} />
        <InteractivePage isActive={page === "interactive"} />
      </main>

      {paletteOpen ? (
        <div className="modal-backdrop" onClick={() => setPaletteOpen(false)}>
          <div
            ref={paletteTrapRef}
            className="modal-shell"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <h2>Command palette</h2>
                <p className="page-copy">Search pages, tools, and notes.</p>
              </div>
              <button className="ghost-button" type="button" onClick={() => setPaletteOpen(false)}>
                Close
              </button>
            </div>

            <label className="palette-search" htmlFor="palette-input">
              <span className="sr-only">Search command palette</span>
              <input
                ref={paletteInputRef}
                id="palette-input"
                type="search"
                placeholder="Go to tools, notes, help"
                autoComplete="off"
                value={paletteQuery}
                onChange={(e) => setPaletteQuery(e.target.value)}
                onKeyDown={handlePaletteKeyDown}
              />
            </label>

            <div className="palette-results">
              {paletteItems.length ? (
                paletteItems.map((item, index) => (
                  <button
                    key={`${item.tag}-${item.title}-${index}`}
                    type="button"
                    className={`palette-result ${activePaletteIndex === index ? "is-active" : ""}`}
                    onMouseEnter={() => setActivePaletteIndex(index)}
                    onClick={() => {
                      setPaletteOpen(false);
                      item.action();
                    }}
                  >
                    <span className="search-result-title-row">
                      <span className="palette-result-title">{item.title}</span>
                      <span className="search-result-tag">{item.tag}</span>
                    </span>
                    <span className="palette-result-subtitle">{item.subtitle}</span>
                  </button>
                ))
              ) : (
                <div className="empty-state">No matches.</div>
              )}
            </div>
          </div>
        </div>
      ) : null}

      {helpOpen ? (
        <div className="modal-backdrop" onClick={() => setHelpOpen(false)}>
          <div
            ref={helpTrapRef}
            className="modal-shell help-shell"
            role="dialog"
            aria-modal="true"
            aria-label="Help"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <h2>Help</h2>
                <p className="page-copy">Shortcuts</p>
              </div>
              <button className="ghost-button" type="button" onClick={() => setHelpOpen(false)}>
                Close
              </button>
            </div>

            <div className="help-grid">
              <div className="help-row">
                <span>Command palette</span>
                <kbd>⌘/Ctrl + K</kbd>
              </div>
              <div className="help-row">
                <span>Help</span>
                <kbd>⌘/Ctrl + /</kbd>
              </div>
              <div className="help-row">
                <span>Close modal</span>
                <kbd>Esc</kbd>
              </div>
              <div className="help-row">
                <span>Move in palette</span>
                <kbd>↑ ↓</kbd>
              </div>
              <div className="help-row">
                <span>Open selection</span>
                <kbd>Enter</kbd>
              </div>
              {installPrompt ? (
                <div className="help-row help-action-row">
                  <span>Install app</span>
                  <button className="ghost-button" type="button" onClick={installApp}>
                    Install
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      {historyOpen ? (
        <div className="modal-backdrop" onClick={() => setHistoryOpen(false)}>
          <div
            ref={historyTrapRef}
            className="modal-shell history-shell"
            role="dialog"
            aria-modal="true"
            aria-label="History"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <h2>History</h2>
                <p className="page-copy">Recent calculations</p>
              </div>
              <div className="modal-header-actions">
                {historyEntries.length > 0 && (
                  <button className="ghost-button" type="button" onClick={clearHistory}>
                    Clear all
                  </button>
                )}
                <button className="ghost-button" type="button" onClick={() => setHistoryOpen(false)}>
                  Close
                </button>
              </div>
            </div>

            <div className="history-list">
              {historyEntries.length ? (
                historyEntries.map((entry) => (
                  <div key={entry.id} className="history-entry">
                    <span className="history-tool">{entry.tool}</span>
                    <span className="history-label">{entry.label}</span>
                    <strong className="history-value">{entry.value}</strong>
                    <span className="history-time">
                      {new Date(entry.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                ))
              ) : (
                <div className="empty-state">No history yet. Copy a result to start tracking.</div>
              )}
            </div>
          </div>
        </div>
      ) : null}

      {page === "home" && filteredApplets.length > 0 ? (
        <div className="mobile-indicator">
          <button
            type="button"
            className="mobile-nav-btn"
            aria-label="Previous tool"
            disabled={activeToolIndex <= 0}
            onClick={() => scrollToTool(activeToolIndex - 1)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div className="mobile-dots">
            {filteredApplets.map((_, i) => (
              <button
                key={filteredApplets[i].id}
                type="button"
                className={`mobile-dot${i === activeToolIndex ? " is-active" : ""}`}
                aria-label={filteredApplets[i].title}
                onClick={() => scrollToTool(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="mobile-nav-btn"
            aria-label="Next tool"
            disabled={activeToolIndex >= filteredApplets.length - 1}
            onClick={() => scrollToTool(activeToolIndex + 1)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      ) : null}
    </div>
  );
}

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};
