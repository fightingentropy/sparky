import type { ExamId } from "./examRegistry";
import { LEARN_COPY } from "./learnRoadmapCopy";

// The Learn tab is one roadmap, drawn like roadmap.sh: a solid spine runs
// through numbered stages; each stage has core topics (yellow nodes on the
// spine) and each topic branches into subtopics (cream nodes) and practice
// exams (blue nodes) on its left and right. The structure lives here; the
// reading copy for every node lives in learnRoadmapCopy.ts.

export type LearnSide = "left" | "right";
export type LearnNodeKind = "topic" | "subtopic" | "exam";
export type LearnStatus = "learning" | "done";

export type LearnCopy = {
  summary: string;
  points: string[];
  watchFor?: string[];
};

export type LearnNode = {
  id: string;
  kind: LearnNodeKind;
  title: string;
  summary: string;
  points: string[];
  watchFor: string[];
  noteIds: string[];
  examIds: ExamId[];
};

export type LearnBranch = LearnNode & { kind: "subtopic" | "exam"; side: LearnSide };

export type LearnTopic = LearnNode & { kind: "topic"; branches: LearnBranch[] };

export type LearnStage = {
  id: string;
  title: string;
  summary: string;
  topics: LearnTopic[];
};

export type LearnRoadmap = {
  title: string;
  summary: string;
  stages: LearnStage[];
};

type Links = { notes?: string[]; exams?: ExamId[] };

function copyFor(id: string): LearnCopy {
  return LEARN_COPY[id] ?? { summary: "", points: [] };
}

function sub(id: string, side: LearnSide, title: string, links: Links = {}): LearnBranch {
  const copy = copyFor(id);
  return {
    id,
    kind: "subtopic",
    side,
    title,
    summary: copy.summary,
    points: copy.points,
    watchFor: copy.watchFor ?? [],
    noteIds: links.notes ?? [],
    examIds: links.exams ?? []
  };
}

function exam(id: string, side: LearnSide, title: string, examId: ExamId): LearnBranch {
  const copy = copyFor(id);
  return {
    id,
    kind: "exam",
    side,
    title,
    summary: copy.summary,
    points: copy.points,
    watchFor: copy.watchFor ?? [],
    noteIds: [],
    examIds: [examId]
  };
}

function topic(id: string, title: string, links: Links, branches: LearnBranch[]): LearnTopic {
  const copy = copyFor(id);
  return {
    id,
    kind: "topic",
    title,
    summary: copy.summary,
    points: copy.points,
    watchFor: copy.watchFor ?? [],
    noteIds: links.notes ?? [],
    examIds: links.exams ?? [],
    branches
  };
}

function stage(id: string, title: string, topics: LearnTopic[]): LearnStage {
  return { id, title, summary: copyFor(id).summary, topics };
}

export const LEARN_ROADMAP: LearnRoadmap = {
  title: "Electrician",
  summary: copyFor("roadmap").summary,
  stages: [
    stage("stage-start", "Getting started", [
      topic("route", "Choose your route", {}, [
        sub("route-apprenticeship", "left", "Apprenticeship"),
        sub("route-adult", "left", "Adult training route"),
        sub("route-experienced", "right", "Experienced worker route"),
        sub("route-qualified", "right", "What “qualified” means")
      ]),
      topic("site-safety", "Site safety", { notes: ["cheat-regulations"], exams: ["ecs-health-safety"] }, [
        sub("safety-law", "left", "Health & safety law", { notes: ["cheat-regulations"] }),
        sub("safety-rams", "left", "Risk assessments & RAMS"),
        sub("safety-ppe", "right", "PPE & site hazards"),
        sub("safety-height", "right", "Working at height"),
        exam("safety-ecs-exam", "right", "ECS H&S mock tests", "ecs-health-safety")
      ]),
      topic("safe-isolation", "Safe isolation", { notes: ["cheat-course-safe-isolation"] }, [
        sub("isolation-gs38", "left", "Voltage indicators & GS38", { notes: ["cheat-course-instruments-gs38"] }),
        sub("isolation-devices", "left", "Isolation devices"),
        sub("isolation-lock-off", "right", "Lock off & label"),
        sub("isolation-prove", "right", "Prove, test, prove", { notes: ["cheat-course-safe-isolation"] })
      ])
    ]),
    stage("stage-science", "Electrical science", [
      topic("ohms-law", "Ohm’s law & power", { notes: ["cheat-core-formulas", "cheat-site-math"], exams: ["level-2-electrical-installation"] }, [
        sub("science-units", "left", "SI units & prefixes", { notes: ["cheat-site-math"] }),
        sub("science-vir", "left", "Voltage, current, resistance", { notes: ["cheat-core-formulas"] }),
        sub("science-power", "right", "Power & energy", { notes: ["cheat-core-formulas"] }),
        sub("science-resistivity", "right", "Resistivity", { notes: ["cheat-course-cable-resistance"] })
      ]),
      topic("dc-circuits", "Series & parallel circuits", { notes: ["cheat-core-formulas"] }, [
        sub("circuits-series", "left", "Series circuits"),
        sub("circuits-mixed", "left", "Mixed circuits"),
        sub("circuits-parallel", "right", "Parallel circuits")
      ]),
      topic("ac-theory", "AC theory", { notes: ["cheat-core-formulas"] }, [
        sub("ac-sine", "left", "Sine waves & RMS"),
        sub("ac-lc", "left", "Inductance & capacitance"),
        sub("ac-impedance", "right", "Impedance"),
        sub("ac-power-factor", "right", "Power factor")
      ]),
      topic("three-phase", "Three-phase supplies", { notes: ["cheat-course-three-phase-basics"] }, [
        sub("three-phase-star-delta", "left", "Star & delta"),
        sub("three-phase-line-phase", "right", "Line & phase values", { notes: ["cheat-course-three-phase-basics"] }),
        sub("three-phase-balance", "right", "Balanced & unbalanced loads")
      ]),
      topic("machines", "Magnetism & machines", {}, [
        sub("machines-electromagnetism", "left", "Electromagnetism"),
        sub("machines-transformers", "left", "Transformers"),
        sub("machines-motors", "right", "Motors & starters"),
        exam("science-level2-exam", "right", "Level 2 mock exams", "level-2-electrical-installation")
      ])
    ]),
    stage("stage-install", "Installation", [
      topic("wiring-systems", "Wiring systems", {}, [
        sub("wiring-cable-types", "left", "Cable types"),
        sub("wiring-fire-resistant", "left", "Fire-resistant cables", { notes: ["cheat-course-special-cables-fp200"] }),
        sub("wiring-terminations", "left", "Terminations"),
        sub("wiring-conduit-trunking", "right", "Conduit & trunking", { notes: ["cheat-course-conduit-sizing"] }),
        sub("wiring-tray", "right", "Tray, basket & ladder")
      ]),
      topic("final-circuits", "Final circuits", { notes: ["cheat-course-final-circuit-specs"] }, [
        sub("circuits-ring", "left", "Ring final circuits", { notes: ["cheat-course-final-circuit-specs"] }),
        sub("circuits-radial", "left", "Radial circuits", { notes: ["cheat-course-final-circuit-specs"] }),
        sub("circuits-lighting", "right", "Lighting circuits"),
        sub("circuits-cooker-shower", "right", "Cookers & showers")
      ]),
      topic("cable-routes", "Cable routes", { notes: ["cheat-safe-zones"] }, [
        sub("routes-safe-zones", "left", "Safe zones", { notes: ["cheat-safe-zones"] }),
        sub("routes-buried", "left", "Buried & outdoor cables", { notes: ["cheat-course-buried-cables-outbuildings"] }),
        sub("routes-joists", "right", "Joists & studs", { notes: ["cheat-structural-limits"] })
      ]),
      topic("drawings", "Drawings & symbols", { notes: ["cheat-drawing-legend"] }, [
        sub("drawings-symbols", "left", "Symbols", { notes: ["cheat-drawing-legend"] }),
        sub("drawings-abbreviations", "right", "Abbreviations", { notes: ["cheat-drawing-abbreviations"] }),
        sub("drawings-colours", "right", "Conductor colours", { notes: ["cheat-sketch-colours"] })
      ])
    ]),
    stage("stage-protection", "Earthing & protection", [
      topic("supply-intake", "The supply intake", { notes: ["cheat-course-supply-intake"] }, [
        sub("intake-cutout", "left", "Cut-out & meter", { notes: ["cheat-course-supply-intake"] }),
        sub("intake-consumer-unit", "right", "Consumer units", { notes: ["cheat-course-consumer-unit"] })
      ]),
      topic("earthing-systems", "Earthing systems", { notes: ["cheat-course-earthing-systems"] }, [
        sub("earthing-tns", "left", "TN-S"),
        sub("earthing-tncs", "left", "TN-C-S (PME)"),
        sub("earthing-tt", "right", "TT"),
        sub("earthing-it", "right", "IT")
      ]),
      topic("bonding", "Earthing & bonding", { notes: ["cheat-course-earthing-bonding-sizing"] }, [
        sub("bonding-earthing-conductor", "left", "Earthing conductor"),
        sub("bonding-main", "left", "Main protective bonding"),
        sub("bonding-supplementary", "right", "Supplementary bonding", { notes: ["cheat-course-supplementary-bonding"] }),
        sub("bonding-sizing", "right", "Sizing earths & bonds", { notes: ["cheat-course-earthing-bonding-sizing"] })
      ]),
      topic("protective-devices", "Protective devices", { notes: ["cheat-protection-devices"] }, [
        sub("devices-fuses", "left", "Fuses"),
        sub("devices-mcbs", "left", "MCBs: Type B, C & D"),
        sub("devices-rcds", "right", "RCDs & RCBOs", { notes: ["cheat-course-rcd-types"] }),
        sub("devices-afdd-spd", "right", "AFDDs & SPDs")
      ]),
      topic("shock-protection", "Shock protection", { notes: ["cheat-course-protective-measures"] }, [
        sub("shock-basic-fault", "left", "Basic & fault protection", { notes: ["cheat-course-protective-measures"] }),
        sub("shock-ads", "left", "Automatic disconnection"),
        sub("shock-disconnection-times", "right", "Disconnection times", { notes: ["cheat-course-disconnection-times"] }),
        sub("shock-max-zs", "right", "Maximum Zs", { notes: ["cheat-course-zs-tables"] }),
        sub("shock-additional-rcd", "right", "Additional RCD protection", { notes: ["cheat-course-where-rcd-required"] })
      ])
    ]),
    stage("stage-design", "Design & regulations", [
      topic("bs7671", "BS 7671 Wiring Regulations", { notes: ["cheat-regulations"], exams: ["18th-edition"] }, [
        sub("bs7671-layout", "left", "How the book is laid out"),
        sub("bs7671-definitions", "left", "Key definitions", { notes: ["cheat-key-definitions"] }),
        sub("bs7671-appendices", "right", "Appendices & tables"),
        exam("bs7671-exam", "right", "18th Edition mocks", "18th-edition")
      ]),
      topic("cable-sizing", "Cable sizing", { notes: ["cheat-course-cable-design-sequence"], exams: ["level-3-electrical-installation"] }, [
        sub("sizing-ib", "left", "Design current (Ib)"),
        sub("sizing-ib-in-iz", "left", "Ib ≤ In ≤ Iz", { notes: ["cheat-course-cable-design-sequence"] }),
        sub("sizing-diversity", "left", "Diversity & max demand", { notes: ["cheat-course-diversity"] }),
        sub("sizing-correction-factors", "right", "Correction factors", { notes: ["cheat-course-correction-factors"] }),
        sub("sizing-volt-drop", "right", "Voltage drop", { notes: ["cheat-course-volt-drop"] })
      ]),
      topic("fault-calcs", "Fault calculations", { notes: ["cheat-course-adiabatic-pfc"] }, [
        sub("fault-r1r2-zs", "left", "R1 + R2 and Zs", { notes: ["cheat-course-cable-resistance", "cheat-course-zs-tables"] }),
        sub("fault-pfc", "left", "Prospective fault current", { notes: ["cheat-course-adiabatic-pfc"] }),
        sub("fault-adiabatic", "right", "Adiabatic equation", { notes: ["cheat-course-adiabatic-pfc"] })
      ]),
      topic("special-locations", "Special locations", { notes: ["cheat-course-bathroom-zones"], exams: ["special-locations"] }, [
        sub("locations-bathrooms", "left", "Bathrooms (701)", { notes: ["cheat-course-bathroom-zones"] }),
        sub("locations-pools", "left", "Swimming pools (702)", { notes: ["cheat-course-bathroom-zones"] }),
        sub("locations-saunas", "right", "Saunas (703)"),
        sub("locations-other", "right", "Other Part 7 locations"),
        exam("locations-exam", "right", "Special locations mock", "special-locations")
      ]),
      topic("building-regs", "Building Regulations", { notes: ["cheat-regulations"], exams: ["building-regulations"] }, [
        sub("regs-part-p", "left", "Part P notification"),
        sub("regs-cps", "left", "Competent person schemes"),
        sub("regs-other-docs", "right", "Other Approved Documents", { notes: ["cheat-structural-limits"] }),
        exam("regs-exam", "right", "Building Regs mocks", "building-regulations")
      ])
    ]),
    stage("stage-testing", "Inspection & testing", [
      topic("test-instruments", "Test instruments", { notes: ["cheat-course-instruments-gs38"] }, [
        sub("instruments-low-ohm", "left", "Low-resistance ohmmeter"),
        sub("instruments-ir", "left", "Insulation resistance tester"),
        sub("instruments-loop", "right", "Loop impedance tester"),
        sub("instruments-rcd", "right", "RCD tester")
      ]),
      topic("dead-tests", "Dead tests", { notes: ["cheat-course-iv-test-sequence", "cheat-course-test-methods"] }, [
        sub("dead-cpc", "left", "Continuity of CPCs", { notes: ["cheat-course-test-methods"] }),
        sub("dead-ring", "left", "Ring final continuity", { notes: ["cheat-course-test-methods"] }),
        sub("dead-ir", "right", "Insulation resistance", { notes: ["cheat-course-ir-detail"] }),
        sub("dead-polarity", "right", "Polarity")
      ]),
      topic("live-tests", "Live tests", { notes: ["cheat-course-iv-test-sequence"], exams: ["fundamental-inspection-testing"] }, [
        sub("live-loop", "left", "Earth fault loop (Ze, Zs)", { notes: ["cheat-course-zs-tables"] }),
        sub("live-pfc", "left", "Prospective fault current", { notes: ["cheat-course-adiabatic-pfc"] }),
        sub("live-rcd", "right", "RCD testing", { notes: ["cheat-course-rcd-trip-times"] }),
        sub("live-functional", "right", "Functional testing"),
        exam("live-fundamental-exam", "right", "Fundamental I&T papers", "fundamental-inspection-testing")
      ]),
      topic("certification", "Certification", { notes: ["cheat-course-eic-paperwork"], exams: ["initial-verification"] }, [
        sub("cert-inspection", "left", "Inspection checklist", { notes: ["cheat-course-iv-inspection-checklist"] }),
        sub("cert-eic", "left", "Installation certificate", { notes: ["cheat-course-eic-paperwork"] }),
        sub("cert-minor-works", "right", "Minor works certificate", { notes: ["cheat-course-eic-paperwork"] }),
        sub("cert-schedules", "right", "Schedules of results"),
        exam("cert-iv-exam", "right", "Initial verification papers", "initial-verification")
      ]),
      topic("periodic", "Periodic inspection (EICR)", { notes: ["cheat-course-eicr-procedure"], exams: ["periodic-inspection"] }, [
        sub("periodic-codes", "left", "Classification codes", { notes: ["cheat-course-eicr-codes"] }),
        sub("periodic-limitations", "left", "Extent & limitations", { notes: ["cheat-course-eicr-procedure"] }),
        sub("periodic-outcome", "right", "Overall assessment"),
        exam("periodic-exam", "right", "Periodic inspection tests", "periodic-inspection")
      ])
    ]),
    stage("stage-qualify", "Getting qualified", [
      topic("level3-nvq", "Level 3 & NVQ", { exams: ["level-3-electrical-installation"] }, [
        sub("nvq-knowledge", "left", "Level 3 knowledge"),
        sub("nvq-portfolio", "left", "Portfolio evidence"),
        exam("nvq-level3-exam", "right", "Level 3 mock exams", "level-3-electrical-installation")
      ]),
      topic("am2", "AM2 assessment", { notes: ["cheat-course-safe-isolation"], exams: ["am2-installation-assessment"] }, [
        sub("am2-isolation", "left", "Safe isolation & risk", { notes: ["cheat-course-safe-isolation"] }),
        sub("am2-installation", "left", "Composite installation"),
        sub("am2-testing", "right", "Inspect, test & certify", { notes: ["cheat-course-iv-test-sequence"] }),
        sub("am2-faults", "right", "Fault diagnosis"),
        exam("am2-exam", "right", "AM2 mock tests", "am2-installation-assessment")
      ]),
      topic("ecs-card", "ECS Gold Card", { exams: ["ecs-health-safety"] }, [
        sub("ecs-hs-test", "left", "ECS H&S assessment"),
        sub("ecs-applying", "right", "Applying for your card")
      ])
    ]),
    stage("stage-grow", "Keep growing", [
      topic("pat", "Portable appliance testing", { notes: ["cheat-course-pat-testing"], exams: ["pat-testing"] }, [
        sub("pat-classes", "left", "Equipment classes", { notes: ["cheat-course-pat-testing"] }),
        sub("pat-tests", "right", "Tests & records", { notes: ["cheat-course-pat-testing"] }),
        exam("pat-exam", "right", "PAT mock tests", "pat-testing")
      ]),
      topic("design-2396", "Design & verification (2396)", { notes: ["cheat-course-cable-design-sequence"], exams: ["inspection-design-2396"] }, [
        sub("design-process", "left", "The design process", { notes: ["cheat-course-cable-design-sequence"] }),
        exam("design-exam", "right", "2396 design mocks", "inspection-design-2396")
      ]),
      topic("low-carbon", "Low-carbon technologies", {}, [
        sub("low-carbon-ev", "left", "EV charging (722)"),
        sub("low-carbon-pv", "left", "Solar PV (712)"),
        sub("low-carbon-battery", "right", "Battery storage"),
        sub("low-carbon-heat-pumps", "right", "Heat pumps")
      ])
    ])
  ]
};

export const LEARN_TOPICS: LearnTopic[] = LEARN_ROADMAP.stages.flatMap((item) => item.topics);

/** Every node a learner can mark: topics and subtopics. Exam nodes just open an exam. */
export const LEARN_TRACKABLE_NODES: LearnNode[] = LEARN_TOPICS.flatMap((item) => [
  item,
  ...item.branches.filter((branch) => branch.kind !== "exam")
]);

const NODE_INDEX = new Map<string, { node: LearnNode; stage: LearnStage; topic: LearnTopic }>(
  LEARN_ROADMAP.stages.flatMap((stageItem) =>
    stageItem.topics.flatMap((topicItem) => [
      [topicItem.id, { node: topicItem as LearnNode, stage: stageItem, topic: topicItem }] as const,
      ...topicItem.branches.map(
        (branch) => [branch.id, { node: branch as LearnNode, stage: stageItem, topic: topicItem }] as const
      )
    ])
  )
);

export function findLearnNode(id: string) {
  return NODE_INDEX.get(id);
}

export function isLearnStatus(value: unknown): value is LearnStatus {
  return value === "learning" || value === "done";
}

export function isLearnProgress(value: unknown): value is Record<string, LearnStatus> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.values(value as Record<string, unknown>).every(isLearnStatus)
  );
}
