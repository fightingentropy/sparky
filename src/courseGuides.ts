import type { ExamId } from "./examRegistry";

export type GuideCategory = "route" | "qualification" | "assessment" | "reference";

export type GuideFact = {
  label: string;
  value: string;
};

export type GuideNoteLink = {
  noteId: string;
  label: string;
};

export type GuideSection = {
  title: string;
  items: string[];
};

export type CourseGuide = {
  id: string;
  title: string;
  kicker: string;
  category: GuideCategory;
  summary: string;
  sourceUrl: string;
  sourceLabel: string;
  examId?: ExamId;
  examLabel?: string;
  noteLinks?: GuideNoteLink[];
  facts: GuideFact[];
  sections: GuideSection[];
  pitfalls: string[];
  nextActions: string[];
};

export const GUIDE_CATEGORY_LABELS: Record<GuideCategory, string> = {
  route: "Career Route",
  qualification: "Qualification",
  assessment: "Assessment",
  reference: "Reference"
};

export const COURSE_GUIDES: CourseGuide[] = [
  {
    id: "becoming-an-electrician-route",
    title: "Becoming an Electrician Route Planner",
    kicker: "Route map",
    category: "route",
    summary:
      "A practical map from first training choice through Level 2, Level 3, NVQ, AM2 and ECS card status.",
    sourceUrl: "https://electriciantraining.co.uk/",
    sourceLabel: "ElectricianTraining career guide",
    facts: [
      { label: "Main routes", value: "Apprenticeship or diploma/NVQ" },
      { label: "Final gate", value: "NVQ Level 3 plus AM2" },
      { label: "Card target", value: "ECS Gold Card" }
    ],
    sections: [
      {
        title: "Route choices",
        items: [
          "Apprenticeship route: employer backed, work based, usually longer, and normally funded or part funded.",
          "Diploma/NVQ route: self-funded, classroom led at the start, often chosen by adult learners or career changers.",
          "Both routes need workplace evidence and still end with AM2 before fully qualified status is unlocked."
        ]
      },
      {
        title: "Milestone order",
        items: [
          "Build the foundation through Level 2 installation knowledge and safe working.",
          "Progress into Level 3 design, inspection, installation and fault-finding depth.",
          "Collect NVQ workplace evidence as early as possible instead of treating it as a last-minute paperwork task.",
          "Use AM2 as the final occupational competence check, then apply for the appropriate ECS card."
        ]
      },
      {
        title: "Decision checks",
        items: [
          "Younger learners usually benefit from an apprenticeship if a strong employer is available.",
          "Adult learners often need to weigh cost, time away from work, and access to real evidence for NVQ sign-off.",
          "Anyone aiming for Qualified Supervisor work should treat NVQ Level 3 as the minimum end target."
        ]
      }
    ],
    pitfalls: [
      "Choosing a fast course without a realistic plan for workplace evidence.",
      "Treating diplomas as full electrician status before NVQ and AM2 are complete.",
      "Leaving ECS card evidence until site access is urgently needed."
    ],
    nextActions: [
      "Pick apprenticeship or diploma/NVQ based on employment access, budget and age/career stage.",
      "Use the Level 2 and Level 3 exams to expose weak foundations before paying for later stages.",
      "Start an evidence folder before the first proper site task."
    ]
  },
  {
    id: "level-2-installation-foundation",
    title: "Level 2 Installation Foundation",
    kicker: "Foundation",
    category: "qualification",
    summary:
      "The baseline knowledge set for electrical science, safe systems of work, common installation methods and entry-level site competence.",
    sourceUrl: "https://electriciantraining.co.uk/electrician-courses/",
    sourceLabel: "ElectricianTraining course guide",
    examId: "level-2-electrical-installation",
    examLabel: "Level 2",
    noteLinks: [
      { noteId: "cheat-core-formulas", label: "Core formulas" },
      { noteId: "cheat-protection-devices", label: "Protection devices" },
      { noteId: "cheat-course-three-phase-basics", label: "Three-phase basics" }
    ],
    facts: [
      { label: "Best for", value: "Early learners and improvers" },
      { label: "Focus", value: "Science, safety, basic installation" },
      { label: "Revision style", value: "Short drills plus calculation practice" }
    ],
    sections: [
      {
        title: "Core knowledge",
        items: [
          "Ohm's law, power, simple circuit behaviour, conductor resistance and basic protective-device purpose.",
          "Common containment, cable types, terminations, safe isolation awareness and site safety behaviour.",
          "Drawing symbols, basic measurement, materials selection and installation sequencing."
        ]
      },
      {
        title: "What makes it hard",
        items: [
          "The questions are usually simple only if the underlying vocabulary is solid.",
          "Learners often know the practical answer but lose marks because they do not recognise the formal term.",
          "Small formula mistakes compound quickly when units are mixed."
        ]
      },
      {
        title: "Readiness check",
        items: [
          "Explain the difference between voltage, current, resistance and power without using a memorised slogan.",
          "Identify common protective devices and state what each one protects against.",
          "Work basic current, power and voltage-drop examples without reaching for answer options first."
        ]
      }
    ],
    pitfalls: [
      "Relying on site familiarity while ignoring formal terms.",
      "Mixing single-phase and three-phase formula structure.",
      "Using answer elimination instead of knowing the principle."
    ],
    nextActions: [
      "Run one Level 2 mock cold, then revise only the weakest three topics.",
      "Use the kW/A/V and voltage-drop tools to repeat calculations until the steps feel automatic.",
      "Move to Level 3 only when basic science questions stop feeling like guessing."
    ]
  },
  {
    id: "level-3-nvq-portfolio",
    title: "Level 3 and NVQ Portfolio Readiness",
    kicker: "Progression",
    category: "qualification",
    summary:
      "A bridge from advanced diploma knowledge into the NVQ evidence mindset: prove competence, not just recall.",
    sourceUrl: "https://electriciantraining.co.uk/electrician-qualifications/",
    sourceLabel: "ElectricianTraining qualifications guide",
    examId: "level-3-electrical-installation",
    examLabel: "Level 3",
    noteLinks: [
      { noteId: "cheat-course-cable-design-sequence", label: "Cable design sequence" },
      { noteId: "cheat-course-diversity", label: "Diversity and max demand" },
      { noteId: "cheat-course-eic-paperwork", label: "EIC paperwork" }
    ],
    facts: [
      { label: "Evidence types", value: "Witness, reflection, photos, observation" },
      { label: "Level", value: "Advanced craft plus workplace judgement" },
      { label: "End target", value: "AM2 eligibility" }
    ],
    sections: [
      {
        title: "Evidence that matters",
        items: [
          "Witness testimony proves a competent person saw the task performed safely.",
          "Reflective accounts explain the reason behind decisions, not just what happened.",
          "Photographs should prove workmanship, sequencing, testing and compliance details.",
          "Direct observation confirms the candidate can perform under assessment conditions."
        ]
      },
      {
        title: "Technical focus",
        items: [
          "Circuit design, protective devices, inspection, testing, certification and fault diagnosis all need to connect together.",
          "Level 3 learners must be able to justify choices using BS 7671, the On-Site Guide and practical site constraints.",
          "Calculations should be checked against real installation outcomes, not treated as paper exercises."
        ]
      },
      {
        title: "Portfolio habits",
        items: [
          "Capture evidence while the work is live, including labels, test instruments, DB schedules and finished terminations.",
          "Write reflections shortly after the job while the reasoning is still clear.",
          "Map each piece of evidence to a standard so gaps are visible early."
        ]
      }
    ],
    pitfalls: [
      "Taking photos that show the job but not the competence being claimed.",
      "Writing reflections that describe actions but never explain technical judgement.",
      "Waiting until AM2 preparation to fix Level 3 weaknesses."
    ],
    nextActions: [
      "Use Level 3 mocks to separate knowledge gaps from exam-reading mistakes.",
      "Build a checklist of required portfolio evidence before the next site rotation.",
      "Practise explaining why a protective device, cable size or test method was chosen."
    ]
  },
  {
    id: "18th-edition-bs7671-study",
    title: "18th Edition BS 7671 Study Guide",
    kicker: "Regulations",
    category: "reference",
    summary:
      "A structured approach to using BS 7671 as a working document instead of memorising isolated regulation snippets.",
    sourceUrl: "https://electriciantraining.co.uk/18th-edition/",
    sourceLabel: "ElectricianTraining 18th Edition guide",
    examId: "18th-edition",
    examLabel: "18th Edition",
    noteLinks: [
      { noteId: "cheat-course-where-rcd-required", label: "Where RCDs are required" },
      { noteId: "cheat-course-zs-tables", label: "Zs tables" },
      { noteId: "cheat-course-consumer-unit", label: "Consumer units" }
    ],
    facts: [
      { label: "Book status", value: "Required working reference" },
      { label: "Exam style", value: "Open-book navigation and interpretation" },
      { label: "Hard part", value: "Finding the right rule quickly" }
    ],
    sections: [
      {
        title: "Book structure",
        items: [
          "Part 1 sets scope and principles; Part 2 defines the language used elsewhere.",
          "Parts 3 to 7 carry the main design, protection, installation, inspection and special-location requirements.",
          "Appendices and tables are where many calculation and selection questions are answered."
        ]
      },
      {
        title: "Study method",
        items: [
          "Practise locating rules from the index and table numbers, not just recognising familiar text.",
          "Group revision by task: design, protection, selection, inspection, special locations and appendices.",
          "Use source mocks to train speed, then use notes to fix the underlying concept."
        ]
      },
      {
        title: "Working knowledge",
        items: [
          "Know when RCD additional protection is mandatory and when an exception is realistic.",
          "Understand Zs, disconnection times, cable correction factors and voltage-drop limits as connected design checks.",
          "Treat updates as compliance changes that affect real installation work, not only exam questions."
        ]
      }
    ],
    pitfalls: [
      "Thinking open-book means easy.",
      "Knowing a rule exists but not knowing which part of the book contains it.",
      "Answering from old habit when current BS 7671 wording has moved on."
    ],
    nextActions: [
      "Run a 60-question 18th Edition attempt under time pressure.",
      "After every wrong answer, write down the book part or table that would have found it.",
      "Use Notes as a quick recall layer, then confirm against the official book."
    ]
  },
  {
    id: "part-p-building-regulations",
    title: "Part P and Building Regulations Guide",
    kicker: "Domestic compliance",
    category: "qualification",
    summary:
      "A domestic-work guide covering Part P scope, LABC interaction, notifiable work and the certificate trail.",
    sourceUrl: "https://electriciantraining.co.uk/part-p/",
    sourceLabel: "ElectricianTraining Part P guide",
    examId: "building-regulations",
    examLabel: "Building regs",
    noteLinks: [
      { noteId: "cheat-regulations", label: "Regulations and scope" },
      { noteId: "cheat-safe-zones", label: "Safe zones" },
      { noteId: "cheat-structural-limits", label: "Structural limits" }
    ],
    facts: [
      { label: "Applies to", value: "Electrical work in dwellings" },
      { label: "Control route", value: "CPS notification or LABC" },
      { label: "Core skill", value: "Notifiable vs non-notifiable judgement" }
    ],
    sections: [
      {
        title: "What Part P controls",
        items: [
          "Electrical work in domestic dwellings must be designed and installed so it protects occupants from fire and electric shock.",
          "New-build work is judged against the rules in force at completion; additions and alterations must improve the existing installation.",
          "Domestic installers and electricians both need to understand when Building Control must be involved."
        ]
      },
      {
        title: "Notification routes",
        items: [
          "A competent person scheme member can self-certify and notify through the scheme route.",
          "Non-members need LABC involvement for notifiable work before or during the job.",
          "The Part P certificate is separate from the electrical certificate and supports the Building Regulations side."
        ]
      },
      {
        title: "Paperwork discipline",
        items: [
          "Minor Works Certificates suit additions or alterations to one existing circuit.",
          "Electrical Installation Certificates suit new circuits, CU changes and new installation work.",
          "Snagging lists do not replace proper certification."
        ]
      }
    ],
    pitfalls: [
      "Confusing electrical certification with Building Control notification.",
      "Assuming a job is non-notifiable because it is small.",
      "Forgetting that domestic work still needs BS 7671 inspection, testing and certification."
    ],
    nextActions: [
      "Drill notifiable/non-notifiable examples until the decision is automatic.",
      "Pair Part P mocks with the safe-zones and structural-limit notes.",
      "Practise selecting EIC vs MEIWC for real job examples."
    ]
  },
  {
    id: "2391-inspection-testing",
    title: "2391 Inspection and Testing Guide",
    kicker: "Initial + periodic",
    category: "assessment",
    summary:
      "The structure behind 2391-50, 2391-51 and 2391-52, with the theory and practical areas candidates must be sharp on.",
    sourceUrl: "https://electriciantraining.co.uk/2391-course-city-and-guilds-inspection-and-testing/",
    sourceLabel: "ElectricianTraining 2391 course guide",
    examId: "initial-verification",
    examLabel: "Initial verification",
    noteLinks: [
      { noteId: "cheat-course-iv-test-sequence", label: "Initial verification sequence" },
      { noteId: "cheat-course-test-methods", label: "Test methods" },
      { noteId: "cheat-course-safe-isolation", label: "Safe isolation" }
    ],
    facts: [
      { label: "Combined course", value: "C&G 2391-52" },
      { label: "Separate routes", value: "2391-50 initial, 2391-51 periodic" },
      { label: "Hard part", value: "Sequencing plus judgement" }
    ],
    sections: [
      {
        title: "Coverage",
        items: [
          "Initial verification: inspect and test new work before it is put into service.",
          "Periodic inspection: assess an existing installation and report whether it is safe for continued use.",
          "The course links safe isolation, dead testing, live testing, instruments, certification and defect judgement."
        ]
      },
      {
        title: "Practical focus",
        items: [
          "Continuity of protective conductors, ring-final continuity, insulation resistance, polarity, Ze, Zs, PFC and RCD testing.",
          "Visual inspection needs fault recognition, not just paperwork familiarity.",
          "Candidates must know which tests are dead, which are live, and what can be damaged by the wrong method."
        ]
      },
      {
        title: "Exam readiness",
        items: [
          "Use the exact 2391 mocks as the benchmark for difficulty.",
          "Do not accept obvious distractor elimination as competence; you should be able to explain why the other options fail.",
          "Revise initial and periodic together because many questions test the boundary between them."
        ]
      }
    ],
    pitfalls: [
      "Putting live tests before dead-test evidence is complete.",
      "Testing sensitive equipment without linking or disconnecting it.",
      "Using initial-verification rules blindly on an existing occupied installation."
    ],
    nextActions: [
      "Alternate 2391 mocks with the Initial Verification notes.",
      "Build a one-page dead/live sequence from memory, then check it.",
      "When wrong, classify the error as sequence, instrument, value, safety or paperwork."
    ]
  },
  {
    id: "periodic-inspection-eicr",
    title: "Periodic Inspection and EICR Guide",
    kicker: "Condition reporting",
    category: "assessment",
    summary:
      "A judgement guide for existing installations: extent, limitations, sampling, coding and defensible EICR outcomes.",
    sourceUrl: "https://electriciantraining.co.uk/2391-exam/",
    sourceLabel: "ElectricianTraining 2391 exam guide",
    examId: "periodic-inspection",
    examLabel: "Periodic / EICR",
    noteLinks: [
      { noteId: "cheat-course-eicr-procedure", label: "EICR procedure" },
      { noteId: "cheat-course-eicr-codes", label: "EICR codes" },
      { noteId: "cheat-course-eic-paperwork", label: "EIC paperwork" }
    ],
    facts: [
      { label: "Report outcome", value: "Satisfactory or unsatisfactory" },
      { label: "Core judgement", value: "C1, C2, C3 or FI" },
      { label: "Purpose", value: "Safe for continued use" }
    ],
    sections: [
      {
        title: "Periodic mindset",
        items: [
          "You are inspecting an installation already in service, so sampling and limitations must be agreed and recorded.",
          "Extent defines what is being inspected; limitations define what could not be inspected or tested.",
          "A found defect should widen the sample and sharpen judgement, not be hidden behind the original sample size."
        ]
      },
      {
        title: "Coding discipline",
        items: [
          "C1 is immediate danger; C2 is potentially dangerous; C3 is improvement recommended; FI demands further investigation without delay.",
          "Any C1, C2 or FI makes the report unsatisfactory.",
          "The code must describe the risk and condition, not the inconvenience or cost of repair."
        ]
      },
      {
        title: "Practical EICR checks",
        items: [
          "Visual inspection remains critical: consumer unit condition, bonding, exposed live parts, cable damage, water ingress and incorrect equipment.",
          "Test selection must respect occupied premises, connected loads and sensitive equipment.",
          "The final report needs clear observations, defensible codes and a realistic next inspection interval."
        ]
      }
    ],
    pitfalls: [
      "Using C3 to avoid an uncomfortable conversation with the duty holder.",
      "Recording a limitation after you have already seen a dangerous defect.",
      "Copying a code without explaining the actual risk on that installation."
    ],
    nextActions: [
      "Use the merged Periodic / EICR exam as the hard judgement bank.",
      "For every wrong code, write the risk that would justify the correct code.",
      "Practise turning observations into professional report wording."
    ]
  },
  {
    id: "2396-design-verification",
    title: "2396 Design and Verification Guide",
    kicker: "Advanced design",
    category: "assessment",
    summary:
      "A Level 4 design guide for experienced candidates who need to connect design, verification, installation and certification.",
    sourceUrl: "https://electriciantraining.co.uk/2396-course/",
    sourceLabel: "ElectricianTraining 2396 course guide",
    examId: "inspection-design-2396",
    examLabel: "2396",
    noteLinks: [
      { noteId: "cheat-course-cable-design-sequence", label: "Cable design sequence" },
      { noteId: "cheat-course-correction-factors", label: "Correction factors" },
      { noteId: "cheat-course-adiabatic-pfc", label: "Adiabatic and PFC" }
    ],
    facts: [
      { label: "Level", value: "Level 4 advanced" },
      { label: "Assessment", value: "401 design project, 402 written test" },
      { label: "Project load", value: "Around 40 hours" }
    ],
    sections: [
      {
        title: "Entry expectations",
        items: [
          "Candidates should already be strong on inspection and testing, 18th Edition navigation and Guidance Note 3.",
          "This is not a first design course; weak fundamentals show up quickly in cable selection and protective-system decisions.",
          "The qualification expects written explanation as well as calculation accuracy."
        ]
      },
      {
        title: "Design coverage",
        items: [
          "Legislative and non-legislative requirements across design, verification, installation, inspection, testing and certification.",
          "Single-phase and three-phase circuits, lighting systems, protective systems and environmental technologies.",
          "Documentation and certification for initial verification and periodic condition reporting."
        ]
      },
      {
        title: "Assessment strategy",
        items: [
          "The written test is open-book, but speed depends on knowing where evidence sits in BS 7671, the On-Site Guide and GN3.",
          "The design project needs a coherent report, not just a set of disconnected calculations.",
          "Use worked design examples to practise explaining trade-offs and assumptions."
        ]
      }
    ],
    pitfalls: [
      "Entering 2396 before 18th Edition and 2391 knowledge is genuinely fluent.",
      "Producing calculations without a clear design narrative.",
      "Treating the project as a memory exercise instead of a professional design report."
    ],
    nextActions: [
      "Run a 2396 mock, then categorise misses by design principle, calculation or documentation.",
      "Practise one full circuit design from load to certificate.",
      "Build a personal index for BS 7671, OSG and GN3 references used in written answers."
    ]
  },
  {
    id: "pat-eet-equipment",
    title: "PAT and EET Practical Guide",
    kicker: "Equipment testing",
    category: "qualification",
    summary:
      "A compact guide to C&G 2377-77, the IET Code of Practice, tester types, equipment classes, labels and records.",
    sourceUrl: "https://electriciantraining.co.uk/pat-testing-equipment/",
    sourceLabel: "ElectricianTraining PAT equipment guide",
    examId: "pat-testing",
    examLabel: "PAT testing",
    noteLinks: [{ noteId: "cheat-course-pat-testing", label: "PAT classes and pass criteria" }],
    facts: [
      { label: "Course", value: "C&G 2377-77 EET/PAT" },
      { label: "Key document", value: "IET CoP 5th Edition" },
      { label: "Tester groups", value: "Basic, advanced, computerised, medical" }
    ],
    sections: [
      {
        title: "Course focus",
        items: [
          "The modern course is broader EET, not just the old narrow PAT label.",
          "The IET Code of Practice is the working reference for inspection, testing, records and competence.",
          "Entry knowledge is lower than many installation courses, but practical judgement still matters."
        ]
      },
      {
        title: "Equipment and records",
        items: [
          "Basic pass/fail testers suit simple low-data checks; advanced testers give more measurement detail.",
          "Computerised testers support record handling and advanced functions; medical testers suit medical environments.",
          "Labels, registers, adaptors, printers and scanners support traceability, but do not replace the inspection."
        ]
      },
      {
        title: "Classification",
        items: [
          "Class I equipment relies on a protective conductor and needs earth-continuity judgement.",
          "Class II equipment relies on double or reinforced insulation and has no protective conductor test.",
          "Class III equipment is supplied at separated extra-low voltage and is treated differently from mains appliances."
        ]
      }
    ],
    pitfalls: [
      "Thinking the sticker is the test.",
      "Applying Class I limits to Class II equipment.",
      "Ignoring formal visual inspection because the electrical test passed."
    ],
    nextActions: [
      "Use the PAT exam after reading the PAT note, then repeat only the failed classes.",
      "Practise choosing the correct test approach from appliance description alone.",
      "Build a sample asset register and failed-equipment workflow."
    ]
  },
  {
    id: "am2-assessment-breakdown",
    title: "AM2 Assessment Breakdown",
    kicker: "Final gate",
    category: "assessment",
    summary:
      "The final occupational competence assessment broken into its practical, fault-finding, testing and online exam demands.",
    sourceUrl: "https://electriciantraining.co.uk/am2-exam/",
    sourceLabel: "ElectricianTraining AM2 guide",
    examId: "am2-installation-assessment",
    examLabel: "AM2",
    noteLinks: [
      { noteId: "cheat-course-safe-isolation", label: "Safe isolation" },
      { noteId: "cheat-course-iv-test-sequence", label: "Test sequence" },
      { noteId: "cheat-course-test-methods", label: "Test methods" }
    ],
    facts: [
      { label: "Status", value: "Final occupational assessment" },
      { label: "Online exam", value: "30 questions, 80 percent pass" },
      { label: "Approved refs", value: "BS 7671 and GN3" }
    ],
    sections: [
      {
        title: "Assessment sections",
        items: [
          "A1 tests safe isolation and risk assessment discipline before practical work starts.",
          "Section A is the long composite installation task using drawings, containment, wiring systems and terminations.",
          "Section B covers inspection and testing of the installation.",
          "Section C covers fault diagnosis and rectification.",
          "Section D is the online multiple-choice exam."
        ]
      },
      {
        title: "Practical tasks",
        items: [
          "Candidates need to interpret drawings, select protective devices, install bonding and terminate multiple wiring systems.",
          "Expect lighting, power, three-phase distribution, motor control, data, safety circuits and sustainable-energy related elements.",
          "Testing and certification must be practised as real tasks, not revised only as theory."
        ]
      },
      {
        title: "Preparation focus",
        items: [
          "Complete the assessment checklist honestly before booking.",
          "Practise safe isolation until no step is negotiable.",
          "Use the online exam to train judgement across health and safety, BS 7671, Building Regulations and inspection/testing."
        ]
      }
    ],
    pitfalls: [
      "Treating AM2 like new teaching instead of assessment of existing competence.",
      "Losing marks on sequence, labelling or lock-off details rather than technical knowledge.",
      "Arriving with weak practical repetition because the theory mocks look comfortable."
    ],
    nextActions: [
      "Run both AM2 mocks and turn misses into workshop practice topics.",
      "Perform a timed safe-isolation rehearsal with the full prove-isolate-prove routine.",
      "Practise one full inspect-test-certify loop without notes."
    ]
  },
  {
    id: "ecs-card-health-safety",
    title: "ECS Card and Health & Safety Test Guide",
    kicker: "Site access",
    category: "assessment",
    summary:
      "A card-route and test-prep guide covering trainee stages, labourer route, Gold Card target and ECS H&S test structure.",
    sourceUrl: "https://electriciantraining.co.uk/ecs-card/",
    sourceLabel: "ElectricianTraining ECS card guide",
    examId: "ecs-health-safety",
    examLabel: "ECS H&S",
    facts: [
      { label: "Test format", value: "50 questions in 30 minutes" },
      { label: "Pass mark", value: "86 percent, 43 out of 50" },
      { label: "Validity focus", value: "Recent H&S evidence" }
    ],
    sections: [
      {
        title: "Card route",
        items: [
          "Trainee cards progress through staged evidence while a learner is in electrotechnical training.",
          "The Gold Card identifies fully trained electrician status after the required qualification route is complete.",
          "Labourer and industry-placement routes can support site access but do not replace the qualified route."
        ]
      },
      {
        title: "Test subjects",
        items: [
          "General health and safety, manual handling, PPE, health and hygiene, fire and emergency, working at height, workplace equipment, special hazards, electrotechnical content and environmental knowledge.",
          "Fire and emergency plus electrotechnical knowledge deserve extra time because they carry a meaningful question count.",
          "The official question-and-answer resource should be treated as the baseline, then Sparky mocks can train recall."
        ]
      },
      {
        title: "Application discipline",
        items: [
          "Check evidence dates before booking because stale health and safety proof can block an application.",
          "Use employer endorsement, training agreements and certificates as a tidy evidence bundle.",
          "Keep card route and qualification route aligned so site access supports the next learning milestone."
        ]
      }
    ],
    pitfalls: [
      "Passing the H&S test but failing to gather the card evidence.",
      "Under-revising environmental and special hazard questions.",
      "Confusing temporary site-access cards with qualified electrician status."
    ],
    nextActions: [
      "Run an ECS mock and revise by test subject, not just total score.",
      "Check current ECS evidence dates before paying for any application.",
      "Use the career route guide to confirm which card stage fits your training status."
    ]
  },
  {
    id: "special-locations-bs7671",
    title: "Special Locations BS 7671 Part 7 Guide",
    kicker: "Part 7",
    category: "reference",
    summary:
      "A high-risk-location guide for bathrooms, pools, saunas, medical locations, marinas, caravans and similar Part 7 scenarios.",
    sourceUrl: "https://electriciantraining.co.uk/18th-edition/",
    sourceLabel: "ElectricianTraining 18th Edition guide",
    examId: "special-locations",
    examLabel: "Special locations",
    noteLinks: [
      { noteId: "cheat-course-bathroom-zones", label: "Bathroom and pool zones" },
      { noteId: "cheat-course-where-rcd-required", label: "RCD requirements" },
      { noteId: "cheat-course-protective-measures", label: "Shock protection" }
    ],
    facts: [
      { label: "BS 7671 area", value: "Part 7" },
      { label: "Common trap", value: "Zones and IP ratings" },
      { label: "Risk driver", value: "Environment changes protection requirements" }
    ],
    sections: [
      {
        title: "What changes in special locations",
        items: [
          "External influences such as water, corrosion, livestock, medical risk or public use change equipment selection and protection.",
          "Section 701 bathrooms and 702 pools demand precise zone, distance and IP-rating knowledge.",
          "Other locations such as saunas, marinas, caravan parks and medical areas need their own Part 7 rules checked directly."
        ]
      },
      {
        title: "Revision method",
        items: [
          "Do not revise special locations as one topic; each location has its own trigger conditions.",
          "Use diagrams or sketches to place zones, then attach permitted equipment and IP requirements.",
          "Link every special-location answer back to the additional risk that caused the rule."
        ]
      },
      {
        title: "Exam judgement",
        items: [
          "Watch distances, heights and edge references carefully.",
          "Do not assume 30 mA RCD protection makes prohibited equipment acceptable.",
          "If a question gives an environment code or location name, use the Part 7 section before defaulting to a general rule."
        ]
      }
    ],
    pitfalls: [
      "Applying bathroom zone rules to pools or saunas without checking the section.",
      "Remembering IPX4 but missing when IPX5 or IPX6 is required.",
      "Treating special locations as an exception list instead of risk-based requirements."
    ],
    nextActions: [
      "Run the Special Locations exam after reviewing bathroom and pool zones.",
      "Draw the zones from memory, then compare against the note.",
      "Build one card per Part 7 location with trigger, IP, RCD and prohibited-equipment rules."
    ]
  }
];
