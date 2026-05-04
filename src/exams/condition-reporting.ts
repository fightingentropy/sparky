import type { Exam } from "./types";

export const conditionReportingExam: Exam = {
  id: "condition-reporting",
  title: "Condition Reporting (EICR)",
  subtitle: "Webinar 7 — classifying and recording condition",
  description:
    "A focused exam built around Webinar 7 — Condition Reporting. Covers the EICR document set, the C1 / C2 / C3 / FI classification codes, what makes a report Satisfactory or Unsatisfactory, the inspector's on-site obligations when danger is found, and the landlord/duty-holder duties under the ESS PRS Regulations 2020. Added merged conductor identification, bathroom zoning, socket, bonding, test-lead and electrical-heating questions that support EICR observation judgement.",
  format:
    "Each attempt = 110 multiple-choice questions across all sections. Pass at 70%+. The bank rotates through 5 distinct variants per section so retries draw fresh material.",
  passPercent: 0.7,
  sections: [
    {
      id: "section-1",
      title: "Section 1 — Forms & Documents",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "EICR stands for:",
              options: {
                A: "Electrical Installation Compliance Record",
                B: "Electrical Installation Condition Report",
                C: "Electrical Inspection & Calibration Report",
                D: "Electricians' Industry Conformance Record"
              },
              answer: "B",
              explanation: "Electrical Installation Condition Report — the standard BS 7671 model form for reporting on the condition of an existing installation. The inspector applies current safety expectations and BPG4 coding guidance, but does not automatically require every older installation to be upgraded just because a later edition has introduced improvements."
            },
            {
              number: 2,
              prompt: "A complete EICR submission to the client comprises:",
              options: {
                A: "The EICR alone",
                B: "The EICR plus a Schedule of Inspections and a Schedule of Test Results",
                C: "Just the test results",
                D: "An EIC and a Minor Works Certificate"
              },
              answer: "B",
              explanation: "The EICR is the headline document; the Schedule of Inspections records what was visually checked, and the Schedule of Test Results records the numerical readings. All three together form the report — without the schedules the EICR is incomplete."
            },
            {
              number: 3,
              prompt: "An Electrical Installation Certificate (EIC) is issued for:",
              options: {
                A: "Existing installations being condition-assessed",
                B: "New installations, additions and alterations that introduce a new circuit",
                C: "Periodic inspections only",
                D: "PAT testing"
              },
              answer: "B",
              explanation: "EIC = new work. EICR = condition of existing work. The Minor Electrical Installation Works Certificate (MEIWC) is the equivalent of an EIC for additions/alterations not introducing a new circuit (e.g. an extra socket on a ring final)."
            },
            {
              number: 4,
              prompt: "Before commencing an EICR, the inspector must agree what with the client?",
              options: {
                A: "The colour of the report's cover",
                B: "The extent of the installation to be inspected and any limitations on access or testing — preferably in writing",
                C: "The names of any future tenants",
                D: "Nothing — the inspector decides"
              },
              answer: "B",
              explanation: "Extent and limitations must be agreed up-front and recorded on the report. Without this, both inspector and client are exposed: the inspector could be held responsible for areas they were never given access to, and the client may have a false sense of coverage."
            },
            {
              number: 5,
              prompt: "An additional socket-outlet is added to an existing ring final circuit. The correct certification is:",
              options: {
                A: "EIC",
                B: "EICR",
                C: "MEIWC (Minor Electrical Installation Works Certificate)",
                D: "No certificate — it's a like-for-like alteration"
              },
              answer: "C",
              explanation: "An MEIWC covers additions and alterations to an existing circuit that do not introduce a new circuit. Adding a spur or fused-spur socket is a textbook MEIWC job; if a brand-new circuit were installed, an EIC would be required instead."
            },
            {
              number: 6,
              prompt: "Operational and Agreed Limitations recorded on the EICR are intended to:",
              options: {
                A: "Reduce the inspector's fee",
                B: "Make clear what was and was not inspected/tested, why, and with whose agreement",
                C: "Allow the inspector to skip parts they don't fancy",
                D: "Override BS 7671"
              },
              answer: "B",
              explanation: "Operational limitations (e.g. machinery cannot be shut down) and Agreed limitations (e.g. tenant's bedroom not accessed) protect both parties. They are mandatory entries on the EICR and must be specific enough that a reader knows exactly what is covered."
            },
            {
              number: 7,
              prompt: "Which document records the numerical results of insulation resistance, Zs and RCD testing?",
              options: {
                A: "The EICR cover sheet",
                B: "The Schedule of Inspections",
                C: "The Schedule of Test Results",
                D: "The Operational Limitations sheet"
              },
              answer: "C",
              explanation: "The Schedule of Test Results captures every measured value circuit-by-circuit. The Schedule of Inspections is a tick-box record of visual checks. Both schedules must accompany the EICR for the document set to be complete."
            },
            {
              number: 8,
              prompt: "The recommended date for the next inspection on an EICR is determined primarily by:",
              options: {
                A: "Whatever the client wants printed",
                B: "The inspector's professional judgement, informed by the type of premises, condition found, age and use",
                C: "Five years for every installation regardless of condition",
                D: "The local authority's published table"
              },
              answer: "B",
              explanation: "The inspector sets the next inspection date using BPG4 / IET Guidance Note 3 default intervals as a starting point and adjusting for condition, environment, occupancy and any safety concerns recorded as C1/C2/C3/FI."
            },
            {
              number: 9,
              prompt: "A landlord asks for an EICR on a privately rented dwelling. The maximum interval between routine EICRs under the PRS Regulations 2020 is:",
              options: {
                A: "12 months",
                B: "3 years",
                C: "5 years or change of tenancy, whichever is sooner (subject to the report's stated interval)",
                D: "10 years"
              },
              answer: "C",
              explanation: "PRS Regulations 2020 require an EICR at least every 5 years, or sooner if the previous report specifies, with a fresh report on each new tenancy where one is not already in date. The inspector's recommended interval can be shorter than 5 years if the condition warrants it."
            },
            {
              number: 10,
              prompt: "The 'Summary of the condition of the installation' on an EICR is intended to:",
              options: {
                A: "Replace the schedules",
                B: "Give the duty holder a plain-English overview of the installation's condition",
                C: "Quote BS 7671 regulation numbers",
                D: "List the test instruments used"
              },
              answer: "B",
              explanation: "The summary is written so a non-technical reader (landlord, building owner, tenant) can understand the headline message. It sits alongside the coded observations, not instead of them."
            },
            {
              number: 11,
              prompt: "Who is named as the 'Person Ordering the Report' on an EICR?",
              options: {
                A: "The inspecting electrician",
                B: "The duty holder or their representative who instructed the inspection",
                C: "The local distribution network operator",
                D: "Building Control"
              },
              answer: "B",
              explanation: "The Person Ordering the Report is the client / instructing party (landlord, owner, tenant in some cases). They are the recipient of the report and the party who must act on its findings."
            },
            {
              number: 12,
              prompt: "An EICR is being produced for a newly purchased domestic property. Strictly speaking the report should:",
              options: {
                A: "Cover only the consumer unit",
                B: "Cover the whole installation unless specific limitations are agreed and recorded",
                C: "Be limited to circuits the inspector finds easy to access",
                D: "Default to a 'sample of one circuit'"
              },
              answer: "B",
              explanation: "An EICR by default covers the whole installation. Sampling and access restrictions must be explicit, agreed with the client and recorded on the report — otherwise the inspector takes responsibility for circuits they never actually inspected."
            },
            {
              number: 13,
              prompt: "The 'Extent of installation covered by this report' field should:",
              options: {
                A: "Match what was actually inspected and tested",
                B: "Always say 'whole installation' for tidiness",
                C: "Be left blank if it would take too long to write",
                D: "Refer the reader to the schedules without details"
              },
              answer: "A",
              explanation: "This field defines the inspector's scope. Mis-stating it (e.g. claiming a whole-installation cover when only the kitchen was tested) creates direct liability and undermines the report. It must reflect reality and tie back to the limitations recorded."
            },
            {
              number: 14,
              prompt: "Three signatures or names commonly appear on the EICR. They typically represent:",
              options: {
                A: "Inspector, tester and reporter",
                B: "Inspector, tester and client/duty holder",
                C: "Designer, installer and verifier",
                D: "Duty holder, tenant and DNO"
              },
              answer: "A",
              explanation: "On a full EICR there are usually three roles: the person who carried out the inspection, the person who carried out the testing, and the person responsible for the report (often the same person, but separately accountable). On smaller jobs they may be combined."
            },
            {
              number: 15,
              prompt: "When a circuit cannot be tested live because shutting it down would interrupt critical equipment, the correct action is to:",
              options: {
                A: "Leave the circuit out of the report and say nothing",
                B: "Record an Operational Limitation on the EICR explaining what could not be tested and why",
                C: "Switch off anyway",
                D: "Issue a Minor Works Certificate instead"
              },
              answer: "B",
              explanation: "Operational limitations (e.g. server-room circuits, refrigeration) are a recognised entry on the EICR. The inspector records what was excluded, the reason, and ensures the duty holder understands the gap in coverage."
            },
            {
              number: 16,
              prompt: "An EICR's 'Recommendations' / observations section is used for:",
              options: {
                A: "Marketing the inspector's other services",
                B: "Listing each item of non-compliance or concern with its assigned classification code (C1/C2/C3/FI)",
                C: "Recording the inspector's lunch break",
                D: "Quoting BS 7671 verbatim with no comment"
              },
              answer: "B",
              explanation: "The observations section is the heart of the EICR. Each entry should describe what was found, where, and the assigned code. Vague entries (\"old wiring\") are useless; specific entries (\"socket SK4 in kitchen — broken faceplate, exposed live terminal — C1\") drive remedial action."
            },
            {
              number: 17,
              prompt: "On the Schedule of Inspections, an item that does not apply to the installation (e.g. a SELV item in a non-SELV install) should be marked:",
              options: {
                A: "✓ for tidiness",
                B: "✗ as a fault",
                C: "N/A — not applicable",
                D: "Crossed through with no annotation"
              },
              answer: "C",
              explanation: "BS 7671 Appendix 6 model schedules use ✓ (acceptable), ✗ (defective) or N/A. Marking ✓ when the item doesn't exist is misleading; N/A is the correct entry and should be supportable from the inspection notes."
            },
            {
              number: 18,
              prompt: "An EICR is most accurately described as:",
              options: {
                A: "A guarantee that the installation will remain safe for 5 years",
                B: "A snapshot of the condition of the installation at the date and time of inspection",
                C: "A design certificate for new work",
                D: "A working drawing"
              },
              answer: "B",
              explanation: "An EICR documents condition at the inspection date — it cannot guarantee future safety. Subsequent damage, alterations, environmental changes or simple wear can change the picture, which is why a recommended re-inspection date is always given."
            },
            {
              number: 19,
              prompt: "A duty holder asks for the cheapest EICR possible and suggests skipping the Schedule of Test Results. The inspector should:",
              options: {
                A: "Agree, to win the work",
                B: "Refuse — the schedules are part of the EICR document set required by BS 7671",
                C: "Issue a Minor Works Certificate as a substitute",
                D: "Verbally describe the test results instead"
              },
              answer: "B",
              explanation: "An EICR without the Schedule of Test Results is not a valid EICR. Cutting the schedules is not a saving — it produces an invalid report and exposes both inspector and duty holder. Quote properly or decline."
            },
            {
              number: 20,
              prompt: "Where ownership of an installation has changed (e.g. property sale), the new EICR should:",
              options: {
                A: "Carry over the previous report's classifications without re-checking",
                B: "Be a fresh inspection by the new duty holder's chosen inspector, not a re-issue of the previous one",
                C: "Be issued by the buyer's solicitor",
                D: "Always be marked Unsatisfactory by default"
              },
              answer: "B",
              explanation: "Each EICR stands on the inspector who signs it. A new owner or new inspector cannot adopt someone else's earlier report; if they want a current EICR, they must commission a fresh inspection with its own observations and schedules."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "A school is having its electrical installation condition-assessed. The correct certification is:",
              options: {
                A: "Electrical Installation Certificate (EIC)",
                B: "Electrical Installation Condition Report (EICR)",
                C: "Minor Electrical Installation Works Certificate",
                D: "PAT certificate"
              },
              answer: "B",
              explanation: "An EICR records the condition of an existing installation. EICs and MEIWCs are issued for new work or alterations; PAT applies to portable appliances rather than the fixed installation."
            },
            {
              number: 2,
              prompt: "Which set of forms forms the complete EICR document set?",
              options: {
                A: "EICR only",
                B: "EICR plus Schedule of Inspections plus Schedule of Test Results",
                C: "EICR plus PAT register",
                D: "EICR plus design risk assessment only"
              },
              answer: "B",
              explanation: "BS 7671 Appendix 6 model forms: EICR (the headline report), Schedule of Inspections (visual), Schedule of Test Results (numerical). All three are required; the EICR is incomplete without the schedules."
            },
            {
              number: 3,
              prompt: "A factory production line cannot be shut down during normal hours. The inspector should:",
              options: {
                A: "Test live regardless",
                B: "Skip those circuits silently",
                C: "Record an Operational Limitation, agree out-of-hours access or a deferred testing plan, and cross-reference it on the EICR",
                D: "Issue a Minor Works Certificate"
              },
              answer: "C",
              explanation: "Operational limitations are routine on commercial/industrial sites. The inspector documents what could not be tested, why, and any agreed plan to revisit. The duty holder must understand the gap before signing off the EICR."
            },
            {
              number: 4,
              prompt: "On an EICR for a hospital ward, the 'Extent of installation covered' should:",
              options: {
                A: "Always claim whole-installation coverage",
                B: "Reflect exactly what was inspected and tested, with anything excluded recorded as an agreed limitation",
                C: "Default to a single sample circuit",
                D: "Be left blank because it's a complex site"
              },
              answer: "B",
              explanation: "Healthcare premises are notoriously full of access/operational constraints. The inspector documents both the extent and the limitations precisely — vague entries here create real liability."
            },
            {
              number: 5,
              prompt: "An MEIWC is appropriate for which of the following jobs?",
              options: {
                A: "Replacing a damaged faceplate on an existing socket without altering the circuit",
                B: "Installing a brand-new shower circuit",
                C: "Adding a fused spur to an existing ring final to feed a new fan",
                D: "Conducting a periodic inspection"
              },
              answer: "C",
              explanation: "An MEIWC covers an addition or alteration that does not introduce a new circuit. Adding a new shower circuit needs an EIC; a periodic inspection needs an EICR; a like-for-like accessory swap may not need a certificate at all under some interpretations."
            },
            {
              number: 6,
              prompt: "The 'Operational Limitations' section on an EICR is used for:",
              options: {
                A: "Excuses unrelated to inspection",
                B: "Items the inspector chose not to look at",
                C: "Constraints arising from how the installation operates (e.g. circuits that must remain energised) that prevent full inspection or testing",
                D: "Recording the inspector's working hours"
              },
              answer: "C",
              explanation: "Operational limitations are physical/process constraints — for example, life-safety circuits in a hospital that cannot be isolated. They differ from agreed limitations, which are scope decisions made with the client."
            },
            {
              number: 7,
              prompt: "A retail unit is being condition-reported. The recommended interval to the next inspection is:",
              options: {
                A: "Always 5 years",
                B: "Decided by the inspector based on installation condition, environment, occupancy and BPG4/IET GN3 guidance",
                C: "Always 1 year",
                D: "Whatever the client wants"
              },
              answer: "B",
              explanation: "BPG4 / IET Guidance Note 3 give default maximum intervals. The inspector must adjust them based on what they actually find — heavy retail use with a high-churn fit-out will normally pull the interval in."
            },
            {
              number: 8,
              prompt: "Where the EICR contains C1, C2 or FI observations, the overall outcome must be recorded as:",
              options: {
                A: "Satisfactory",
                B: "Unsatisfactory",
                C: "Conditional",
                D: "Pending"
              },
              answer: "B",
              explanation: "Any single C1, C2 or FI renders the overall classification Unsatisfactory. C3 alone keeps the report Satisfactory but with improvement recommendations. The Unsatisfactory result is the trigger for landlord / duty-holder action."
            },
            {
              number: 9,
              prompt: "If the inspector and the testing engineer are different people on a large EICR, the report should:",
              options: {
                A: "Use one signature only",
                B: "Carry separate sign-offs for inspection, testing and report responsibility",
                C: "Be signed by the office manager",
                D: "Not be issued"
              },
              answer: "B",
              explanation: "BS 7671 model EICR allows three roles to be signed off separately: the person carrying out the inspection, the person carrying out the testing, and the person responsible for the report. Each accepts responsibility for their part of the work."
            },
            {
              number: 10,
              prompt: "On the Schedule of Inspections for an existing dwelling, items that don't apply to the installation should be:",
              options: {
                A: "Marked ✓ for tidiness",
                B: "Marked ✗ as faults",
                C: "Marked N/A — not applicable",
                D: "Erased from the form"
              },
              answer: "C",
              explanation: "Standard convention is ✓ acceptable, ✗ defective and N/A not applicable. Marking ✓ for items that aren't present is misleading and could undermine the report if challenged."
            },
            {
              number: 11,
              prompt: "A privately rented dwelling has had remedial work after an Unsatisfactory EICR. The landlord must obtain:",
              options: {
                A: "Written confirmation from a qualified person that the remedial work has been carried out",
                B: "Verbal assurance only",
                C: "An invoice from any tradesperson",
                D: "Nothing — the original EICR is enough"
              },
              answer: "A",
              explanation: "Under PRS Regulations 2020, written confirmation from a qualified person that the remedial work has addressed the C1/C2/FI items is required, normally within 28 days, and copies must be supplied to the tenant and (on request) the local authority."
            },
            {
              number: 12,
              prompt: "Sampling on an EICR is permitted, but:",
              options: {
                A: "Must be agreed and explicitly recorded as a limitation",
                B: "Is implied automatically when the inspector is busy",
                C: "Removes the need for any test results",
                D: "Replaces the schedules"
              },
              answer: "A",
              explanation: "If less than 100% of an installation is to be inspected/tested, the sample size and basis must be agreed with the client, recorded as an agreed limitation, and the inspector must use BPG4 sampling escalation rules if defects are found in the sample."
            },
            {
              number: 13,
              prompt: "A duty holder asks the inspector to back-date the EICR by a month to cover an insurance gap. The inspector should:",
              options: {
                A: "Comply if the fee is right",
                B: "Refuse — the report must reflect the actual inspection date",
                C: "Use the next-due date instead",
                D: "Issue a Minor Works Certificate"
              },
              answer: "B",
              explanation: "Falsifying the inspection date is fraud and would render the report invalid. The inspector signs the document for the date the work was carried out — no exceptions."
            },
            {
              number: 14,
              prompt: "On an EICR, the field 'Reason for the report' typically records:",
              options: {
                A: "The inspector's mood",
                B: "Whether the report is a periodic inspection, change of tenancy, insurance requirement, post-incident check, etc.",
                C: "Marketing notes",
                D: "The DNO's reference number"
              },
              answer: "B",
              explanation: "The reason for the report shapes the inspector's approach. A change-of-tenancy EICR may focus on tenant-occupied areas; a post-fire check zooms in on the affected zone with appropriate sampling escalation."
            },
            {
              number: 15,
              prompt: "A small office has a recent satisfactory EICR. A new circuit is then added. The correct paperwork is:",
              options: {
                A: "A new EICR for the whole installation",
                B: "An EIC for the new circuit",
                C: "An MEIWC",
                D: "Verbal sign-off"
              },
              answer: "B",
              explanation: "A new circuit requires an EIC. The previous EICR remains valid for the existing installation. An MEIWC is only for additions/alterations that do not introduce a new circuit."
            },
            {
              number: 16,
              prompt: "The 'Recommended date for the next inspection' on an EICR is:",
              options: {
                A: "Always 5 years",
                B: "Set by the inspector and may be shorter if condition warrants — but cannot exceed BPG4/GN3 default maxima",
                C: "Set by the client",
                D: "Optional"
              },
              answer: "B",
              explanation: "The inspector chooses the next-inspection interval based on findings and BPG4/GN3 guidance. It can always be pulled in (e.g. due to environment or condition) but should not be longer than the default for the premises type."
            },
            {
              number: 17,
              prompt: "An agricultural installation with a high level of mechanical and environmental risk would normally be condition-reported:",
              options: {
                A: "Less often than a domestic property",
                B: "More often than a domestic property — typical default of 3 years or shorter",
                C: "Only when something fails",
                D: "Never"
              },
              answer: "B",
              explanation: "Agricultural premises carry higher risks (livestock, dust, water, mechanical damage) and are typically inspected at shorter intervals — BPG4/GN3 default is around 3 years, with shorter intervals for high-risk areas."
            },
            {
              number: 18,
              prompt: "On the Schedule of Test Results, the column for 'CPC continuity (R2)' records:",
              options: {
                A: "The phase-to-neutral resistance",
                B: "The end-to-end resistance of the circuit protective conductor",
                C: "The total earth fault loop impedance",
                D: "Insulation resistance"
              },
              answer: "B",
              explanation: "R2 is end-to-end CPC continuity. It feeds into the verification of (R1+R2) for fault loop calculations and Zs predictions. Recording it on the schedule is mandatory."
            },
            {
              number: 19,
              prompt: "A landlord must supply the EICR to an existing tenant within:",
              options: {
                A: "7 days",
                B: "28 days",
                C: "6 months",
                D: "On change of tenancy only"
              },
              answer: "B",
              explanation: "PRS Regulations 2020: the existing tenant must receive the EICR within 28 days of the inspection. New tenants must receive it before they move in; on request the local authority must receive it within 7 days."
            },
            {
              number: 20,
              prompt: "Photographs supporting the EICR observations:",
              options: {
                A: "Cannot be included in the report",
                B: "Are not required by BS 7671 but are good practice for clarity, especially for C1 and C2 observations",
                C: "Replace the need for written observations",
                D: "Make the report invalid"
              },
              answer: "B",
              explanation: "Photos are not mandated but support clear communication. A photo of the broken accessory or the missing bond clarifies the C1/C2 finding for the duty holder and reduces disputes about the inspector's interpretation."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "On a hospital EICR, a circuit feeding life-safety equipment cannot be safely isolated. The correct way to record this is:",
              options: {
                A: "Test it live anyway",
                B: "An Operational Limitation, with the affected circuits clearly identified and the reason recorded",
                C: "Mark it ✓ on the Schedule of Inspections to keep things tidy",
                D: "Issue a Minor Works Certificate"
              },
              answer: "B",
              explanation: "Operational limitations are common in healthcare. The inspector documents the circuits affected and the reason (life-safety, infection control, patient access). The duty holder must understand the gap before accepting the report."
            },
            {
              number: 2,
              prompt: "Which document is required when adding a new shower circuit to an existing dwelling?",
              options: {
                A: "EIC",
                B: "EICR",
                C: "MEIWC",
                D: "PAT certificate"
              },
              answer: "A",
              explanation: "A new circuit requires an EIC, with its accompanying schedules. An MEIWC is for changes to an existing circuit; an EICR is for condition assessment of an existing installation."
            },
            {
              number: 3,
              prompt: "The Schedule of Inspections on an EICR is primarily a:",
              options: {
                A: "Financial document",
                B: "Tick-box record of visual / observational checks against BS 7671 model items",
                C: "Numerical record of test readings",
                D: "Photographic log"
              },
              answer: "B",
              explanation: "The Schedule of Inspections is the visual / observational checklist (typical of Appendix 6 model forms). It complements the Schedule of Test Results (numerical) and the EICR observations (coded findings)."
            },
            {
              number: 4,
              prompt: "On a rented domestic EICR, who is responsible for acting on the Unsatisfactory result?",
              options: {
                A: "The tenant",
                B: "The landlord (duty holder)",
                C: "The DNO",
                D: "The inspector"
              },
              answer: "B",
              explanation: "Under PRS Regulations 2020, the landlord must arrange remedial work or further investigation within 28 days (or sooner if specified) and supply written confirmation. The inspector reports; the duty holder acts."
            },
            {
              number: 5,
              prompt: "An EICR is being produced after a small fire in one office area. The Reason for the Report should record:",
              options: {
                A: "Routine 5-yearly inspection",
                B: "Post-incident inspection following fire damage in the office area",
                C: "Change of tenancy",
                D: "PAT testing"
              },
              answer: "B",
              explanation: "The Reason for the Report shapes the scope. A post-incident inspection focuses on the affected area, with sampling escalation rules applied if defects are found, and limitations recorded for areas not inspected."
            },
            {
              number: 6,
              prompt: "An EICR is being prepared for a small B&B let on a short-term basis. The applicable maximum routine interval is:",
              options: {
                A: "1 year",
                B: "3 years (typical for non-domestic / commercial buildings used by the public)",
                C: "5 years",
                D: "10 years"
              },
              answer: "B",
              explanation: "Commercial premises (including small B&Bs / hotels) typically default to 5 years, but where there is significant public access or higher risk a 3-year interval is common. The inspector must adjust based on condition and use."
            },
            {
              number: 7,
              prompt: "An EICR's 'Departures from BS 7671' section is used for:",
              options: {
                A: "Reasoned alternatives that achieve at least the same level of safety as the standard",
                B: "Excuses for non-compliance",
                C: "Complaints about the client",
                D: "DNO contact details"
              },
              answer: "A",
              explanation: "Departures must be technically justified and signed off by a competent person. They are not a route to lower safety, but to recognise alternative solutions that meet or exceed BS 7671's intent. Departures must be clearly recorded on the EICR."
            },
            {
              number: 8,
              prompt: "A change-of-tenancy EICR is being undertaken on a privately rented dwelling. The landlord has the previous report from 18 months ago. The inspector should:",
              options: {
                A: "Refuse — the dwelling has had an EICR recently",
                B: "Treat the new inspection as required because of the change of tenancy and produce a fresh EICR",
                C: "Re-issue the old report",
                D: "Issue an MEIWC"
              },
              answer: "B",
              explanation: "Under PRS Regulations 2020, a fresh EICR must be supplied to the new tenant before they move in if the existing one is approaching expiry, but in practice many landlords commission a new EICR on each tenancy change to demonstrate compliance. The new report is the inspector's own work, not a re-issue."
            },
            {
              number: 9,
              prompt: "Operational vs Agreed Limitations on an EICR — the difference is:",
              options: {
                A: "There is none",
                B: "Operational limitations stem from how the installation is run; Agreed limitations are scope decisions made jointly with the client",
                C: "Operational limitations are illegal",
                D: "Agreed limitations are illegal"
              },
              answer: "B",
              explanation: "Operational = constraints from operation (cannot isolate critical kit). Agreed = inspector and client agree what is in/out of scope (e.g. tenant's bedroom not accessed). Both belong on the EICR; both must be specific."
            },
            {
              number: 10,
              prompt: "An EICR reports an item ✓ on the Schedule of Inspections that the inspector did not actually check. The risk is:",
              options: {
                A: "None",
                B: "The inspector takes responsibility for an item they have not verified, and the report is misleading",
                C: "Only a paperwork inconvenience",
                D: "Saved time"
              },
              answer: "B",
              explanation: "Marking ✓ creates a positive declaration that the item is acceptable. If the inspector hasn't checked it, that's fraudulent and dangerous. Use N/A or record an agreed limitation instead."
            },
            {
              number: 11,
              prompt: "A duty holder asks for a 'pass' EICR with no observations because they feel the property is fine. The inspector must:",
              options: {
                A: "Comply with the customer",
                B: "Record observations honestly and code them per BPG4 — the report cannot be tailored to a desired outcome",
                C: "Issue a Minor Works Certificate instead",
                D: "Refuse to inspect"
              },
              answer: "B",
              explanation: "The inspector's signature is a professional declaration. Suppressing observations to please a client exposes the inspector to legal liability if injury later results — and fundamentally undermines the safety system the EICR exists to support."
            },
            {
              number: 12,
              prompt: "On a 3-phase EICR, missing main protective bonding to a metallic gas service is recorded as:",
              options: {
                A: "An observation in the EICR's coded list",
                B: "A note on the Schedule of Test Results only",
                C: "Verbally to the duty holder",
                D: "Not at all if the rest of the system passes"
              },
              answer: "A",
              explanation: "All defects feed the coded observations list on the EICR. Bonding omissions to extraneous-conductive-parts are typically C2 (potentially dangerous). The Schedule of Test Results captures readings; the EICR observations capture defects."
            },
            {
              number: 13,
              prompt: "A small dwelling EICR with no observations is recorded as:",
              options: {
                A: "Satisfactory — no observations to code",
                B: "Unsatisfactory by default",
                C: "Pending",
                D: "FI"
              },
              answer: "A",
              explanation: "An EICR with no C1/C2/C3/FI observations is Satisfactory. The recommended next-inspection date still has to be set, schedules still have to be completed, and the inspector still signs and dates the report."
            },
            {
              number: 14,
              prompt: "A school EICR identifies an Unsatisfactory outcome with three C2 items. The duty holder under HSWA 1974 / EAWR 1989 should:",
              options: {
                A: "Wait until the next inspection",
                B: "Plan and execute remedial work within a reasonable timescale, prioritising by risk and recording action taken",
                C: "Hide the report",
                D: "Send it to OFSTED only"
              },
              answer: "B",
              explanation: "Schools are non-domestic premises subject to HSWA 1974 and EAWR 1989. The duty holder (typically the head teacher / governor body via their FM team) must act on Unsatisfactory findings within a sensible timeframe and keep records of the remediation."
            },
            {
              number: 15,
              prompt: "An MEIWC is being issued for a fused spur added to a ring final. The MEIWC must include:",
              options: {
                A: "A full inspection of the entire dwelling",
                B: "Test results for the part of the existing circuit affected by the addition (Zs, polarity, R1+R2, IR as relevant), and confirmation that the existing circuit's protective measures remain effective",
                C: "Just a description of the new accessory",
                D: "A schedule of test results for every circuit in the dwelling"
              },
              answer: "B",
              explanation: "An MEIWC requires testing of the circuit affected by the work, with confirmation that the existing protective measures remain effective. It is not a full periodic inspection — that's the EICR's job."
            },
            {
              number: 16,
              prompt: "A factory floor EICR has a 'Limitations' section recording: 'Cabinets MCC-3 to MCC-6 not opened due to live-working restrictions'. The duty holder should understand that:",
              options: {
                A: "Those cabinets are guaranteed safe",
                B: "Those cabinets were not inspected/tested and any defects within them are outside the scope of this report",
                C: "The next EICR can ignore them too",
                D: "The inspector will return free of charge"
              },
              answer: "B",
              explanation: "Limitations explicitly remove items from the inspector's declared scope. The duty holder must arrange separate access (out-of-hours, planned shutdown) to fill the gap or accept the residual risk."
            },
            {
              number: 17,
              prompt: "An EICR cover sheet shows the inspector's company contact details. The reason is:",
              options: {
                A: "Marketing only",
                B: "So the duty holder can contact the inspector or the firm regarding queries, remedial work or insurance traceability",
                C: "Required by the DNO",
                D: "Optional with no functional purpose"
              },
              answer: "B",
              explanation: "Traceability matters when the report is queried, audited or relied on years later. Insurers and local authorities may need to verify who carried out the work, and the firm's professional indemnity sits behind the signature."
            },
            {
              number: 18,
              prompt: "An EICR identifies one C3 and no C1/C2/FI items. The overall outcome is recorded as:",
              options: {
                A: "Unsatisfactory",
                B: "Satisfactory — with improvement recommendations",
                C: "Pending",
                D: "Conditional"
              },
              answer: "B",
              explanation: "C3 alone does not make the report Unsatisfactory. The outcome is Satisfactory and the C3 is recorded as an improvement recommendation. Only C1, C2 or FI drive an Unsatisfactory result."
            },
            {
              number: 19,
              prompt: "On an EICR for a privately rented dwelling, the landlord must supply a copy of the report to the local authority on request within:",
              options: {
                A: "24 hours",
                B: "7 days",
                C: "28 days",
                D: "6 months"
              },
              answer: "B",
              explanation: "PRS Regulations 2020: existing tenant within 28 days; new tenant before move-in; local authority within 7 days of a written request. The landlord must keep records to demonstrate compliance."
            },
            {
              number: 20,
              prompt: "A 'sample' EICR (only a percentage of circuits inspected and tested) is acceptable provided that:",
              options: {
                A: "The client doesn't notice",
                B: "The sample is agreed in writing, the basis is recorded, and BPG4 sampling escalation is applied if defects are found",
                C: "The inspector ticks every item ✓ for tidiness",
                D: "Sampling is never acceptable on an EICR"
              },
              answer: "B",
              explanation: "Sampling is allowed but must be transparent: agreed up-front, recorded, and escalated when defects appear in the sample (per BPG4). A silent sample dressed up as a whole-installation report is misleading and creates real liability."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "An office EICR includes the addition of a circuit and a periodic inspection in the same visit. The correct paperwork is:",
              options: {
                A: "Both an EIC for the new circuit and an EICR for the existing installation",
                B: "An EICR alone",
                C: "An EIC alone",
                D: "A Minor Works Certificate alone"
              },
              answer: "A",
              explanation: "New work and condition assessment are different deliverables. The new circuit is documented on an EIC; the existing installation is documented on an EICR. Combining them into a single document is incorrect."
            },
            {
              number: 2,
              prompt: "An MEIWC issued for an alteration to an existing circuit must:",
              options: {
                A: "Cover only the new accessory",
                B: "Confirm that the protective measures of the existing circuit remain effective and include the relevant test results",
                C: "Include test results for every circuit in the building",
                D: "Be issued without any tests"
              },
              answer: "B",
              explanation: "An MEIWC declares that the alteration is safe and that the parent circuit's protective measures still work. It includes Zs, R1+R2 (where applicable), polarity, IR for the affected length, and a description of the work."
            },
            {
              number: 3,
              prompt: "A factory EICR identifies that one motor circuit cannot be tested live. The most appropriate place to record this is:",
              options: {
                A: "On the cover sheet only",
                B: "In the Operational Limitations section, with the circuit clearly identified",
                C: "In the Schedule of Inspections only",
                D: "Verbally to the duty holder"
              },
              answer: "B",
              explanation: "Operational limitations belong on the EICR itself so they sit alongside the observations and the next-inspection date. The duty holder cannot miss them when reviewing the report."
            },
            {
              number: 4,
              prompt: "Where the report finds nothing wrong, the inspector still must:",
              options: {
                A: "Skip the schedules",
                B: "Complete the EICR, the Schedule of Inspections and the Schedule of Test Results, sign, date and set the next-inspection interval",
                C: "Issue an MEIWC",
                D: "Issue an EIC"
              },
              answer: "B",
              explanation: "A clean EICR still has all the deliverables — the absence of observations doesn't shorten the document set. The schedules are evidence that the inspector actually did the work that justifies the Satisfactory result."
            },
            {
              number: 5,
              prompt: "On an EICR for a school, the agreed limitations field reads 'Boiler-room circuits not inspected — locked, key with FM contractor unavailable'. This means:",
              options: {
                A: "The circuits are deemed Satisfactory",
                B: "The circuits are explicitly outside the scope of the report and the duty holder needs to arrange a follow-up to cover them",
                C: "The inspector will return free of charge later",
                D: "The EICR is automatically Unsatisfactory because of the limitation"
              },
              answer: "B",
              explanation: "An agreed limitation excludes from scope. It does not classify the missed circuits as good or bad — they are unknown. The duty holder must follow up if they want full coverage."
            },
            {
              number: 6,
              prompt: "A retail unit EICR is to be carried out outside trading hours. This is best handled by:",
              options: {
                A: "Recording an Operational Limitation if it cannot be arranged",
                B: "Agreeing the out-of-hours visit up-front and noting the timing on the EICR",
                C: "Skipping the busy circuits",
                D: "Issuing a Minor Works Certificate"
              },
              answer: "B",
              explanation: "Many commercial EICRs require out-of-hours work. The inspector and duty holder agree access in advance; the report records the date and the arrangements where they affect the scope."
            },
            {
              number: 7,
              prompt: "An EIC requires the test results to demonstrate that the new installation:",
              options: {
                A: "Has been used for at least 12 months",
                B: "Complies with BS 7671 at the time of certification",
                C: "Will pass a future EICR",
                D: "Does not need future maintenance"
              },
              answer: "B",
              explanation: "An EIC is the design-and-build sign-off for compliance with the current edition of BS 7671 at the certification date. Future EICRs are separate condition checks and may apply later editions of the standard."
            },
            {
              number: 8,
              prompt: "A school EICR notes ten C3 items but no C1, C2 or FI. The overall result is:",
              options: {
                A: "Satisfactory",
                B: "Unsatisfactory because there are too many C3s",
                C: "Pending",
                D: "FI"
              },
              answer: "A",
              explanation: "C3 quantity does not change the outcome — the report is Satisfactory regardless of how many C3s appear. A pattern of C3s does, however, signal an investment case the duty holder should consider."
            },
            {
              number: 9,
              prompt: "A privately rented dwelling EICR was issued 4 years and 11 months ago. The landlord should commission:",
              options: {
                A: "Nothing — it's still valid",
                B: "A new EICR before the 5-year anniversary, to maintain compliance with PRS Regulations 2020",
                C: "An MEIWC",
                D: "A PAT certificate"
              },
              answer: "B",
              explanation: "PRS Regulations 2020 mandate a routine EICR at least every 5 years. The landlord arranges the new inspection before expiry to avoid a compliance gap and to give time for any remedial work."
            },
            {
              number: 10,
              prompt: "When a landlord receives an Unsatisfactory EICR, the timescale to complete remedial or further investigation work is:",
              options: {
                A: "12 months",
                B: "28 days from the inspection, or sooner if specified by the report",
                C: "Within the next tenancy",
                D: "Whenever convenient"
              },
              answer: "B",
              explanation: "PRS Regulations 2020: 28 days from the inspection (or sooner if the report specifies). Written confirmation must be supplied to the tenant within 28 days of completion, and to the local authority on request within 7 days."
            },
            {
              number: 11,
              prompt: "A factory has a series of identical packaging machines fed from individual circuits. For sampling purposes, the inspector should:",
              options: {
                A: "Inspect every machine individually with no sampling allowed",
                B: "Agree a sample with the client (e.g. 25%), record it as an agreed limitation, and apply BPG4 escalation if defects are found in the sample",
                C: "Skip the machines entirely",
                D: "Test only the smallest one"
              },
              answer: "B",
              explanation: "BPG4 supports sampling on installations with repetitive elements. The inspector and client agree the size, record it on the EICR, and the inspector escalates the sample (or moves to 100%) if defects exceed the threshold."
            },
            {
              number: 12,
              prompt: "An EICR is being prepared for a property that has changed use from residential to small commercial office. The applicable inspection interval defaults to:",
              options: {
                A: "10 years",
                B: "5 years for offices (typical), with adjustment for actual condition and use",
                C: "1 year",
                D: "On change of tenancy only"
              },
              answer: "B",
              explanation: "Offices typically default to 5 years per BPG4/IET GN3, adjusted by inspector judgement. The inspector will also consider whether the change of use exposed the existing wiring to new mechanical or environmental risks."
            },
            {
              number: 13,
              prompt: "On a domestic EICR, missing main protective bonding to the gas service is normally listed:",
              options: {
                A: "On the EIC cover sheet",
                B: "In the EICR observations section, coded C2",
                C: "On the Schedule of Inspections only as a tick",
                D: "Not at all"
              },
              answer: "B",
              explanation: "Bonding omissions are coded observations. Missing bonding to an extraneous-conductive-part such as a gas service is typically C2 (potentially dangerous) under BPG4 — it doesn't kill anyone today, but a future fault could make exposed metalwork live."
            },
            {
              number: 14,
              prompt: "An EICR's 'Summary of the condition of the installation' is best written as:",
              options: {
                A: "A regulation-by-regulation list",
                B: "A short, plain-English overview the duty holder can read and act on",
                C: "Sales material for the inspector",
                D: "A copy of the schedules"
              },
              answer: "B",
              explanation: "The summary translates the technical findings into language the duty holder can use. \"The installation is generally in fair condition; however, there are two C2 observations that must be remedied within 28 days\" is more useful than a regulation list."
            },
            {
              number: 15,
              prompt: "An EIC issued for new work in a dwelling triggers a notification under Building Regulations Part P (England) when:",
              options: {
                A: "Always, regardless of work type",
                B: "Only for notifiable works (e.g. new circuits, special locations) — typically discharged via a registered competent person scheme",
                C: "Never",
                D: "Only when a Minor Works Certificate is also issued"
              },
              answer: "B",
              explanation: "Part P (England, post-2013) limits notifiable works mainly to new circuits and certain special-location work. Registered competent person schemes self-certify; otherwise Building Control notification applies. EICRs are not Part P notifiable."
            },
            {
              number: 16,
              prompt: "An EICR observation that recommends the consumer unit be upgraded to provide RCD protection on every final circuit (where currently only sockets benefit) would be coded:",
              options: {
                A: "C1",
                B: "C2",
                C: "C3 (improvement recommended in line with current edition)",
                D: "FI"
              },
              answer: "C",
              explanation: "BPG4: where the previous installation complied at the time, but the current edition requires more (e.g. RCD on lighting circuits in dwellings), the appropriate code is usually C3. The installation is not dangerous as installed, but improvement is recommended."
            },
            {
              number: 17,
              prompt: "Where the existing wiring is the older red/black colour code, the EICR should:",
              options: {
                A: "Code it C1",
                B: "Treat it as compliant for its era and code only the actual condition concerns; identification at boundaries between old and new colours must be clear",
                C: "Refuse to issue the report",
                D: "Recoded the entire installation before reporting"
              },
              answer: "B",
              explanation: "Old colours are not in themselves a defect. Where mixed colours appear in the same enclosure, identification at the joint is essential — usually a C2/C3 depending on whether the current identification is dangerous or just untidy."
            },
            {
              number: 18,
              prompt: "On an MEIWC for an additional socket, the absence of an installation-wide IR test is:",
              options: {
                A: "A reason to refuse the certificate",
                B: "Acceptable — only the affected circuit needs to be tested for the alteration",
                C: "Always required for the whole property",
                D: "Replaced by a PAT test"
              },
              answer: "B",
              explanation: "An MEIWC is scoped to the affected circuit. Whole-installation IR is the EICR's domain. The MEIWC confirms the alteration is safe and the parent circuit's protective measures still work."
            },
            {
              number: 19,
              prompt: "An EICR records 'Operational Limitations: data centre suite circuits not isolated due to client's no-shutdown requirement'. The duty holder should:",
              options: {
                A: "Treat the suite as Satisfactory",
                B: "Treat the suite as outside the EICR scope and arrange a planned-maintenance window for inspection at a future date",
                C: "Ignore the note",
                D: "Cancel the report"
              },
              answer: "B",
              explanation: "The duty holder retains the obligation under HSWA 1974 / EAWR 1989 to maintain safety. Operational limitations push the responsibility back onto them to plan the eventual coverage and act on any inferred risks in the meantime."
            },
            {
              number: 20,
              prompt: "Where the number of C3s is high but no C1/C2/FI exist, the inspector's commentary should:",
              options: {
                A: "Mark the report Unsatisfactory",
                B: "Mark the report Satisfactory but draw attention to the pattern of C3s and recommend planned remedial investment",
                C: "Refuse to sign",
                D: "Add an FI"
              },
              answer: "B",
              explanation: "C3 quantity doesn't shift the outcome, but the inspector should signal the pattern in the summary so the duty holder understands the cumulative case for upgrading. That's the value of professional judgement on top of the codes."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "An EICR cover sheet records the report's 'Date of inspection'. The inspector must:",
              options: {
                A: "Use the date the report was emailed",
                B: "Use the date the inspection actually took place",
                C: "Use the date the EICR document was created in the office",
                D: "Use any date that is convenient for the client"
              },
              answer: "B",
              explanation: "The inspection date governs many statutory clocks — landlord's 28-day remedial deadline, next-inspection interval and admissibility of the report. It must reflect the day the inspector was on site."
            },
            {
              number: 2,
              prompt: "On a small dwelling EICR, the ratings of the consumer unit's BS EN 60898 MCBs are recorded:",
              options: {
                A: "On the EIC only",
                B: "On the Schedule of Test Results, alongside circuit identification, type and rating",
                C: "Not at all",
                D: "Only verbally"
              },
              answer: "B",
              explanation: "The Schedule of Test Results includes circuit ID, location, type/rating of protective device, conductor sizes, polarity, R1+R2, IR, Zs, RCD and other relevant entries. It must be specific enough that someone else could re-test and reproduce the readings."
            },
            {
              number: 3,
              prompt: "On a hospital EICR, an Operational Limitation has been recorded for theatre circuits. The duty holder asks whether the report still gives them coverage. The honest answer is:",
              options: {
                A: "Yes — full coverage",
                B: "No — the limitation explicitly excludes those circuits, and a separate plan is needed to cover them",
                C: "Yes — the inspector silently inspected them anyway",
                D: "No — the report is automatically Unsatisfactory"
              },
              answer: "B",
              explanation: "Operational limitations carve out scope. The duty holder retains the legal obligation under HSWA 1974 / EAWR 1989 and must plan a route — out-of-hours, scheduled maintenance window — to fill the gap."
            },
            {
              number: 4,
              prompt: "An EICR is being undertaken on an agricultural building. The default routine interval is typically:",
              options: {
                A: "1 year",
                B: "3 years (BPG4/GN3 default for agricultural environments)",
                C: "10 years",
                D: "On request only"
              },
              answer: "B",
              explanation: "Agricultural premises sit at the more onerous end of the inspection-interval range due to environmental and mechanical risk. Three years is the typical default; the inspector pulls it shorter where condition or use justifies."
            },
            {
              number: 5,
              prompt: "A privately rented dwelling has had no EICR since the property was let in 2018. The landlord's compliance position under PRS Regulations 2020 is:",
              options: {
                A: "Compliant — only required from new tenancies",
                B: "Non-compliant — regulations applied to existing tenancies from April 2021 and require an EICR at least every 5 years",
                C: "Compliant — only required if asked",
                D: "Compliant only because the tenant has been there a long time"
              },
              answer: "B",
              explanation: "PRS Regulations 2020 applied to new tenancies from 1 July 2020 and to existing tenancies from 1 April 2021. A landlord without an EICR since 2018 is overdue and must rectify the position immediately."
            },
            {
              number: 6,
              prompt: "On the Schedule of Inspections, an item that is non-compliant should be:",
              options: {
                A: "✓",
                B: "✗ and cross-referenced to a coded observation on the EICR",
                C: "N/A",
                D: "Left blank"
              },
              answer: "B",
              explanation: "✗ marks a defective item; it must be tied back to a coded observation on the EICR (C1/C2/C3/FI) so the reader can trace from the schedule to the description and the action required."
            },
            {
              number: 7,
              prompt: "The inspector needs to record that the upstream supply was a TN-S earthing system. Where does this go?",
              options: {
                A: "Nowhere — the inspector ignores supply characteristics",
                B: "On the EICR cover under 'Supply characteristics and earthing arrangements'",
                C: "On the Schedule of Test Results only",
                D: "On the cover photo"
              },
              answer: "B",
              explanation: "Supply characteristics (system type, voltage, frequency, fault level, Ze, prospective fault current) are recorded on the EICR cover. They drive design verification (Zs limits, fault loop, RCD necessity) for the rest of the report."
            },
            {
              number: 8,
              prompt: "An EICR with one C2 and several C3s is overall:",
              options: {
                A: "Satisfactory",
                B: "Unsatisfactory because of the C2",
                C: "Conditional",
                D: "FI"
              },
              answer: "B",
              explanation: "A single C2 (or C1 or FI) renders the report Unsatisfactory regardless of the C3 count. Once the C2 is remedied and confirmed, the duty holder can update the position with the qualified person's written confirmation."
            },
            {
              number: 9,
              prompt: "On an EICR for a domestic property, an extension lead trailing through the kitchen is:",
              options: {
                A: "An EICR observation",
                B: "Not part of the fixed installation — the inspector may comment in the summary but it is outside the EICR scope",
                C: "An MEIWC item",
                D: "An EIC item"
              },
              answer: "B",
              explanation: "Portable / non-fixed equipment is outside the EICR scope. The inspector may flag a hazard like a daisy-chain lead in the summary or recommend a PAT-style separate review, but it doesn't drive a coded observation on the fixed installation."
            },
            {
              number: 10,
              prompt: "An office block EICR records 'Agreed limitation: tenant suite 4F not accessed; tenant could not be reached'. The duty holder must:",
              options: {
                A: "Treat the suite as Satisfactory",
                B: "Treat the suite as outside scope and arrange access for a follow-up inspection",
                C: "Ignore the limitation",
                D: "Mark the EICR Unsatisfactory automatically"
              },
              answer: "B",
              explanation: "An agreed limitation excludes from scope. The duty holder is on the hook to arrange the missed access — the inspector cannot inspect what they can't reach, and a written limitation is what protects both parties."
            },
            {
              number: 11,
              prompt: "On the Schedule of Test Results, the column for 'Maximum permitted Zs' is:",
              options: {
                A: "The Zs measured on site",
                B: "The maximum Zs allowed by BS 7671 for the protective device and disconnection time",
                C: "Twice the measured Zs",
                D: "Optional"
              },
              answer: "B",
              explanation: "Maximum permitted Zs is taken from BS 7671 Table 41.3 (or equivalent), corrected for temperature and supply tolerance as appropriate. Comparing measured Zs against permitted Zs is the headline check for ADS adequacy."
            },
            {
              number: 12,
              prompt: "An MEIWC includes a 'Description of work' field. It should be:",
              options: {
                A: "Vague (e.g. 'electrical work done')",
                B: "Specific (e.g. 'fused spur added to ring final circuit RFC-2 in kitchen, feeding new wall-mounted boiler')",
                C: "Replaced by a photo",
                D: "Optional"
              },
              answer: "B",
              explanation: "A specific description ties the certificate to the work and enables future inspection / fault finding. Vague descriptions are useless and undermine the certificate's audit value."
            },
            {
              number: 13,
              prompt: "A landlord receives an Unsatisfactory EICR with one C1. The first thing they should do is:",
              options: {
                A: "Wait 28 days",
                B: "Confirm with the inspector what was made safe on the day, then arrange permanent remedial work and obtain written confirmation as soon as possible",
                C: "Hide the report",
                D: "Switch off the entire dwelling"
              },
              answer: "B",
              explanation: "On a C1 the inspector should already have made safe (typically by isolation) and notified the duty holder same day. The landlord arranges permanent fix, gets written confirmation from a qualified person, and supplies it to the tenant."
            },
            {
              number: 14,
              prompt: "A retail unit EICR includes circuits that have been added since the previous report without certification. Those circuits should be:",
              options: {
                A: "Excluded from the report",
                B: "Inspected and tested as part of the EICR, with their lack of original certification noted as a coded observation (typically C3)",
                C: "Re-installed under a new EIC",
                D: "Ignored"
              },
              answer: "B",
              explanation: "Uncertified additions still belong to the existing installation and fall within EICR scope. The lack of original certification can be a C3 documentation finding; any actual technical defects feed their own observations with appropriate codes."
            },
            {
              number: 15,
              prompt: "An EICR 'Reason for the report' field reads 'Sale of property'. The inspector should:",
              options: {
                A: "Inspect only the rooms the buyer cares about",
                B: "Carry out a full EICR with all standard schedules; sale-of-property does not change scope unless agreed and recorded",
                C: "Skip testing entirely",
                D: "Issue a Minor Works Certificate"
              },
              answer: "B",
              explanation: "Sale-of-property is just a reason for instructing the EICR; it doesn't shrink the scope. If sampling or limitations are wanted, they must be agreed and recorded explicitly."
            },
            {
              number: 16,
              prompt: "On the Schedule of Test Results, the column for RCD test records:",
              options: {
                A: "The RCD's manufacturer only",
                B: "Tripping times at 1×IΔn and 5×IΔn (and the no-trip at IΔn/2 confirmation as appropriate)",
                C: "Just whether it tripped at all",
                D: "Optional notes"
              },
              answer: "B",
              explanation: "The schedule captures actual tripping times against the BS 7671 limits — typically ≤300 ms at 1×IΔn for general use and ≤40 ms at 5×IΔn for additional protection. The schedule must show numeric values where measured."
            },
            {
              number: 17,
              prompt: "The 'Recommended interval until next inspection' on an EICR can be longer than 5 years for which premises type?",
              options: {
                A: "Privately rented domestic",
                B: "Industrial premises with low risk and good condition (some BPG4 categories allow up to 10 years)",
                C: "Construction sites",
                D: "Residential leisure premises"
              },
              answer: "B",
              explanation: "BPG4/GN3 give longer default intervals (up to ~10 years) for some industrial or owner-occupied premises in good condition. PRS rented domestic is capped at 5 years; high-risk premises pull intervals shorter."
            },
            {
              number: 18,
              prompt: "An MEIWC issued for a kitchen-circuit alteration must include test results for:",
              options: {
                A: "Every circuit in the property",
                B: "The altered circuit only — Zs, R1+R2, IR, polarity and operation of any related RCD as relevant",
                C: "No tests at all",
                D: "PAT only"
              },
              answer: "B",
              explanation: "MEIWC testing is scoped to the affected circuit. Whole-property testing is the EICR's job. The MEIWC certifies that the alteration is safe and that the parent circuit's protective measures still work."
            },
            {
              number: 19,
              prompt: "On an EICR for a privately rented dwelling, the landlord must supply the new tenant with a copy of the latest EICR:",
              options: {
                A: "Within 28 days of move-in",
                B: "Before the new tenant occupies the property",
                C: "When the tenant asks",
                D: "Within 12 months"
              },
              answer: "B",
              explanation: "PRS Regulations 2020: new tenants must receive the EICR before occupation; existing tenants within 28 days; local authority within 7 days of written request. Landlords typically include the EICR in the new-tenancy pack alongside the gas safety certificate."
            },
            {
              number: 20,
              prompt: "An EICR is being produced for a holiday let. The applicable Regulations primarily are:",
              options: {
                A: "PRS Regulations 2020 (England) for short-term lets (varies — many short-term lets fall outside PRS Regs scope; HSWA 1974 / EAWR 1989 generally apply)",
                B: "Building Regulations Part P only",
                C: "PAT Code of Practice",
                D: "BS 7909"
              },
              answer: "A",
              explanation: "Short-term lets sit in a complex regulatory space — PRS Regulations 2020 cover assured / shorthold tenancies and licences but many holiday lets fall outside the strict definition. HSWA 1974 / EAWR 1989 apply to non-domestic / commercial use. The inspector should note the regime that applies and write the report to suit."
            }
          ]
        }
      ]
    },
    {
      id: "section-2",
      title: "Section 2 — EICR Codes",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "Code C1 on an EICR observation means:",
              options: {
                A: "Improvement recommended",
                B: "Danger present — risk of injury; immediate remedial action required",
                C: "Potentially dangerous — urgent remedial action required",
                D: "Further investigation required"
              },
              answer: "B",
              explanation: "C1 is the most serious — danger is present now (e.g. exposed live conductors at an accessible accessory). The inspector should make safe before leaving site (often by isolation), inform the duty holder immediately, and any C1 automatically renders the EICR Unsatisfactory."
            },
            {
              number: 2,
              prompt: "Code C2 on an EICR observation means:",
              options: {
                A: "Danger is present right now",
                B: "Potentially dangerous — urgent remedial action required",
                C: "Improvement recommended",
                D: "No action required"
              },
              answer: "B",
              explanation: "C2 is a fault that is not dangerous as it sits but is likely to become dangerous if circumstances change — for example, supplementary bonding missing in a bathroom where the four conditions of Reg 701.415.2 cannot be met. C2 makes the EICR Unsatisfactory and must be remedied promptly."
            },
            {
              number: 3,
              prompt: "Code C3 on an EICR observation means:",
              options: {
                A: "Improvement recommended — does not by itself render the report Unsatisfactory",
                B: "Danger present at the point of inspection",
                C: "Further investigation required because the inspector could not fully diagnose the observation",
                D: "Class 3 departure from the regulations requiring written derogation"
              },
              answer: "A",
              explanation: "C3 is the 'would be better if' code — non-compliance with the current edition that does not present an actual danger. A C3 alone does not make the report Unsatisfactory, but a recurring pattern of C3s tells the duty holder where to focus future investment."
            },
            {
              number: 4,
              prompt: "FI (Further Investigation) on an EICR observation means:",
              options: {
                A: "Further inspection deferred to the next periodic visit",
                B: "Further investigation required without delay because the inspector found something they could not fully diagnose during the visit",
                C: "Fault identified and made safe with no further action required",
                D: "Functional inspection completed satisfactorily"
              },
              answer: "B",
              explanation: "FI is used when the inspector has evidence of a possible defect but cannot definitively diagnose it during the inspection. Like C1 and C2, an FI renders the overall report Unsatisfactory because the installation's condition is genuinely unknown at that point."
            },
            {
              number: 5,
              prompt: "An exposed live conductor at an accessible accessory cover is most appropriately coded:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1",
                D: "FI"
              },
              answer: "C",
              explanation: "Basic protection has failed — a finger or metal object can reach a live part. This is the textbook C1: danger is present, the inspector should make safe by isolating the circuit and label it before leaving site."
            },
            {
              number: 6,
              prompt: "A 30 mA RCD does not trip when tested at 1×IΔn (it trips correctly at 5×IΔn). The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — protective measure is impaired and the device is not performing as required by BS 7671",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Failure to operate at 1×IΔn means additional protection / fault protection cannot be relied on. It's not danger present right now (the device tripped at 5×IΔn) but it is potentially dangerous and the device must be replaced. Coded C2."
            },
            {
              number: 7,
              prompt: "An older plastic consumer unit on a wooden backboard, otherwise sound, is most commonly coded under current BPG4 guidance:",
              options: {
                A: "C1",
                B: "C2",
                C: "C3 — improvement recommended (BPG4 revision moved this from C2 to C3 for non-DSEAR domestic environments)",
                D: "FI"
              },
              answer: "C",
              explanation: "Earlier BPG4 had this as C2 due to fire-spread concerns; later guidance pulled it back to C3 (improvement recommended) for typical domestic use, on the basis that the connection-quality fault driver is what matters and metal CUs / fire-rated enclosures address the spread concern."
            },
            {
              number: 8,
              prompt: "An unexplained low IR reading on a circuit, with the joint boxes inaccessible during the visit, is most appropriately coded:",
              options: {
                A: "C3",
                B: "FI — further investigation required",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "FI is used when there is evidence of a possible defect that cannot be fully diagnosed during the inspection. The low IR could be normal (electronic loads not isolated) or a genuine insulation fault — only further investigation will tell, and the report is Unsatisfactory until it is done."
            },
            {
              number: 9,
              prompt: "A broken lampholder shade ring on a pendant fitting, with the live parts not exposed, is most commonly coded:",
              options: {
                A: "C1",
                B: "C2",
                C: "C3 — improvement recommended",
                D: "FI"
              },
              answer: "C",
              explanation: "A broken cosmetic part with no exposed live conductor is normally a C3 — it ought to be replaced but it is not dangerous. If the breakage exposed live terminals, the call would lift to C1."
            },
            {
              number: 10,
              prompt: "Missing main protective bonding to a metallic gas service is most commonly coded:",
              options: {
                A: "C1",
                B: "C2 — protective measure (fault protection) is potentially impaired",
                C: "C3",
                D: "FI"
              },
              answer: "B",
              explanation: "Missing main bonding does not kill anyone today, but a fault elsewhere could make the gas pipe live, which is the textbook 'potentially dangerous' scenario. BPG4 codes this C2 — Unsatisfactory and remedy promptly."
            },
            {
              number: 11,
              prompt: "Discolouration / heat damage at a circuit termination, with no exposed live parts, is most commonly coded:",
              options: {
                A: "C1",
                B: "C2 — potentially dangerous (loose termination / overheating fault)",
                C: "C3",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Visible discolouration suggests sustained over-temperature — typically a loose termination or undersized conductor. The defect could deteriorate further and start a fire. C2 is the standard call. If the damage already exposes live parts, the call is C1."
            },
            {
              number: 12,
              prompt: "A measured Zs slightly above the Table 41.3 limit for a circuit's protective device is most appropriately coded:",
              options: {
                A: "C3",
                B: "C2 (likely) or FI if doubt about the source of the elevated reading",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "ADS may not operate within the required disconnection time — that is a potentially dangerous condition (C2). If the reading is borderline and the inspector is unsure (e.g. instrument tolerance, parallel earth paths), an FI may be appropriate — both render the EICR Unsatisfactory."
            },
            {
              number: 13,
              prompt: "An RCD that fails to trip at any test current (1×, 5×IΔn) is most appropriately coded:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 (where the RCD is the sole protective measure for additional protection / fault protection on a circuit accessible to ordinary persons)",
                D: "FI"
              },
              answer: "C",
              explanation: "An RCD providing additional protection that fails entirely leaves the user with no fault-clearance time guarantee for direct contact. Where it is the sole protective measure, the inspector should isolate and code C1. Where it is supplementary to ADS that still works, C2 may apply."
            },
            {
              number: 14,
              prompt: "The presence of any C1, C2 or FI observation on an EICR makes the overall outcome:",
              options: {
                A: "Satisfactory with notes",
                B: "Unsatisfactory",
                C: "Conditional",
                D: "Pending"
              },
              answer: "B",
              explanation: "Any single C1, C2 or FI = Unsatisfactory. The reasoning is that the duty holder needs a clear binary so they can act; the codes capture severity; the outcome captures action required."
            },
            {
              number: 15,
              prompt: "A consumer unit's RCD test push-button confirms mechanical operation but the inspector has not measured the trip times. The correct procedure is:",
              options: {
                A: "Tick the schedule and rely on the test button",
                B: "Measure trip times at 1×IΔn (and 5×IΔn where additional protection is required) and record the values; the test button only proves the test mechanism",
                C: "Skip the RCD test altogether",
                D: "Coded as Satisfactory by default"
              },
              answer: "B",
              explanation: "The test button is a mechanical check and does not verify trip-time performance. The inspector measures actual trip times against BS 7671 limits (typically ≤300 ms at 1×IΔn for fault protection and ≤40 ms at 5×IΔn for additional protection)."
            },
            {
              number: 16,
              prompt: "A missing sheath inside a switch box, with PVC singles exposed but basic insulation intact, is most commonly coded:",
              options: {
                A: "C1",
                B: "C2 (typical) — basic protection is intact but mechanical protection is reduced",
                C: "C3",
                D: "FI"
              },
              answer: "B",
              explanation: "BPG4: where the cable's outer sheath has been stripped back too far inside an enclosure, mechanical protection is degraded and a future event (vibration, refit) could expose live parts. Typical call is C2."
            },
            {
              number: 17,
              prompt: "A modern installation but with no Schedule of Inspections and Test Results held by the duty holder. The EICR observation should:",
              options: {
                A: "Be coded C1",
                B: "Note the absence of original certification as a coded observation (typically C3) and proceed to inspect/test as for any unfamiliar installation",
                C: "Refuse to inspect",
                D: "Mark Unsatisfactory automatically"
              },
              answer: "B",
              explanation: "Missing certification doesn't make the installation dangerous, but it deprives the duty holder of design information. Typically C3 (improvement recommended). The inspector still produces a full EICR based on what they find on site."
            },
            {
              number: 18,
              prompt: "An accessory with a hairline crack on the front, with no live parts visible or accessible, is most commonly coded:",
              options: {
                A: "C1",
                B: "C2 (typical) — could deteriorate to expose live parts",
                C: "C3 (if very minor with no risk of progression)",
                D: "Either C2 or C3 depending on severity and likelihood of progression"
              },
              answer: "D",
              explanation: "BPG4 acknowledges judgement: a small superficial crack on a stable accessory with no risk of expansion may be C3; a clear crack that could progress and expose live parts is C2; if live parts are already accessible it lifts to C1."
            },
            {
              number: 19,
              prompt: "An item the inspector cannot confidently classify (e.g. an unidentified cable disappearing into a wall, with no test access) is most appropriately:",
              options: {
                A: "Ignored",
                B: "Recorded with code FI (further investigation required)",
                C: "Recorded as C3",
                D: "Recorded as Satisfactory"
              },
              answer: "B",
              explanation: "FI is the catch-all when the inspector cannot diagnose during the visit. Quietly omitting an unknown cable from the report is the worst possible move — FI both records the concern and triggers the Unsatisfactory result that drives investigation."
            },
            {
              number: 20,
              prompt: "Current BPG4 guidance for plastic consumer units in non-DSEAR domestic premises sets the typical code at:",
              options: {
                A: "C1",
                B: "C2",
                C: "C3 (improvement recommended)",
                D: "Satisfactory only"
              },
              answer: "C",
              explanation: "The 2017 Amendment 3 driver behind metal CUs was fire spread from poor terminations. Later BPG4 revisions clarified that the typical code for an intact plastic CU on a wooden backboard in a domestic environment is C3, with the underlying termination quality coded separately if found to be a fault."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "An EICR observation reads 'Live conductors exposed at junction box in loft, basic insulation damaged'. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 — danger present, accessible live parts",
                D: "FI"
              },
              answer: "C",
              explanation: "Damaged basic insulation with accessible live parts is the textbook C1. The inspector should isolate the affected circuit and label it before leaving site, regardless of whether the loft is normally accessed."
            },
            {
              number: 2,
              prompt: "A bathroom is missing supplementary equipotential bonding and the four conditions of Reg 701.415.2 cannot all be confirmed. The correct code is:",
              options: {
                A: "C1",
                B: "C2 — protective measure not satisfied, potentially dangerous",
                C: "C3",
                D: "FI"
              },
              answer: "B",
              explanation: "Where 701.415.2 conditions (RCD protection, ADS Zs limits, all CPCs continuous, all extraneous parts bonded back to MET) cannot be confirmed, supplementary bonding is required. Its absence is C2 because a future fault could put extraneous-parts at line potential."
            },
            {
              number: 3,
              prompt: "A 30 mA RCD providing additional protection trips correctly at 5×IΔn but takes 350 ms at 1×IΔn (BS 7671 limit ≤300 ms). The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — protective measure impaired",
                C: "C1",
                D: "Satisfactory because it tripped at 5×IΔn"
              },
              answer: "B",
              explanation: "350 ms at 1×IΔn is non-compliant — fault-protection performance is degraded. The fact that it tripped at 5×IΔn shows mechanical operation but doesn't fix the issue. C2: replace the device promptly."
            },
            {
              number: 4,
              prompt: "An accessory has a chipped corner on the front, with no live parts visible and no risk of progression. The most appropriate code is:",
              options: {
                A: "C1",
                B: "C2",
                C: "C3 — improvement recommended (cosmetic damage with no danger)",
                D: "FI"
              },
              answer: "C",
              explanation: "Cosmetic damage without exposed live parts and without a clear progression risk is C3. The accessory should be replaced when convenient, but the EICR remains Satisfactory if this is the only issue."
            },
            {
              number: 5,
              prompt: "A circuit's IR test reads 0.4 MΩ between line and earth (BS 7671 minimum 1 MΩ for an in-service installation). The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 (typical) or FI if the cause is genuinely uncertain after isolation of suspect loads",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "An IR reading below the BS 7671 minimum is a potentially dangerous condition. The inspector should isolate suspect loads (electronic equipment, RCD electronics) and re-test; if the reading remains low, code C2 and remediate. If the cause cannot be established, FI."
            },
            {
              number: 6,
              prompt: "A label on a consumer unit reads '15A' on a circuit breaker that is actually rated 32A (mismatched label). The most appropriate code is:",
              options: {
                A: "C1",
                B: "C2 (likely) — incorrect labelling could mislead future maintenance and cause the wrong fuse to be substituted",
                C: "C3",
                D: "FI"
              },
              answer: "B",
              explanation: "Misleading identification can cause an incorrect device to be fitted in future maintenance, resulting in an under-rated cable being protected by an over-rated device. BPG4 typically calls this C2 due to the foreseeable hazard."
            },
            {
              number: 7,
              prompt: "Bonding clamp on the gas service is loose and oxidised but still continuous. The most appropriate code is:",
              options: {
                A: "C1",
                B: "C2 — mechanical and electrical reliability of the bond is reduced",
                C: "C3",
                D: "Satisfactory because continuity is intact"
              },
              answer: "B",
              explanation: "A loose, oxidised clamp could become open under vibration or a future fault. The bonding's protective function is compromised. C2: clean / replace the clamp and re-test."
            },
            {
              number: 8,
              prompt: "On an EICR, an item that was compliant when installed but does not meet a later edition (e.g. lighting circuit without RCD in a new dwelling) is most commonly coded:",
              options: {
                A: "C1",
                B: "C2",
                C: "C3 — improvement recommended (current edition exceeds the original requirement)",
                D: "FI"
              },
              answer: "C",
              explanation: "BS 7671 is not retrospective. Where an existing installation complied at the time but later editions have added requirements (e.g. RCD on lighting), the typical EICR call is C3 — improvement recommended, not Unsatisfactory."
            },
            {
              number: 9,
              prompt: "A circuit has no main earth bonding to the structural steel of the building (steel is extraneous-conductive-part, confirmed). The most appropriate code is:",
              options: {
                A: "C1",
                B: "C2 — bonding requirement not met",
                C: "C3",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Where structural steel is confirmed extraneous-conductive-part it must be bonded to the MET. Its omission is potentially dangerous — a future fault could make the steelwork live. C2 and remedy."
            },
            {
              number: 10,
              prompt: "An MCB has been replaced with one of the wrong type (Type B replaced with Type D for a lighting circuit, with a high Zs that the new device cannot satisfy). The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 (likely) — disconnection time may not be achieved",
                C: "C1",
                D: "FI"
              },
              answer: "B",
              explanation: "Type D requires lower Zs to achieve magnetic disconnection. If Zs is now above the Type D limit, ADS may not operate within the required time — potentially dangerous. C2: replace with the correct device."
            },
            {
              number: 11,
              prompt: "A circuit has had an additional load connected (e.g. an extra socket on a 32 A ring final) and the cable from the new connection back into the circuit is found to be 1.0 mm² T+E. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — undersized conductor, fault current capacity inadequate",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "1.0 mm² T+E is not suitable for a 32 A ring final spur. The conductor cannot carry the full circuit fault current safely; a fault could cause overheating or fire before the protective device clears. C2: replace with appropriately sized cable."
            },
            {
              number: 12,
              prompt: "A consumer unit is fitted in a normal domestic environment with split-load RCD protection. One RCD does not respond to the inspector's test button. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — but consider C1 if it is the only protective measure",
                C: "C1",
                D: "Satisfactory if mechanical operation can be confirmed"
              },
              answer: "B",
              explanation: "Failure of an RCD's test mechanism plus failure under instrument testing usually warrants C2; if the RCD provides the only fault protection / additional protection on accessible circuits and is non-functional, the call lifts to C1."
            },
            {
              number: 13,
              prompt: "An old rewireable fuse board is intact and operating, but with no RCD protection on accessible socket-outlets. The most appropriate code (current BS 7671 expects RCD additional protection on socket-outlets used by ordinary persons up to 32 A) is:",
              options: {
                A: "C1",
                B: "C2 (typical) — additional protection requirement not met for sockets accessible to ordinary persons",
                C: "C3 (only if all other protective measures are intact and the installation predates the requirement)",
                D: "Satisfactory because the fuse board still works"
              },
              answer: "B",
              explanation: "BPG4 typically calls absence of RCD additional protection on accessible socket-outlets as C2 in modern dwellings — the protective measure required by current safety expectations is missing. Some inspectors apply C3 if the installation is genuinely unaltered from a much earlier era; current consensus is more often C2."
            },
            {
              number: 14,
              prompt: "An EICR finds a circuit's polarity reversed at one socket. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 (likely) — a single-pole switch will now break neutral; potentially dangerous in fault scenarios",
                C: "C1",
                D: "FI"
              },
              answer: "B",
              explanation: "Reversed polarity means single-pole protection / switching is in the wrong conductor. Equipment internals can be left at line potential when the switch is off. Typical call is C2; some inspectors lift to C1 if there is foreseeable shock risk."
            },
            {
              number: 15,
              prompt: "A circuit is protected by a 32 A MCB; the cable is 4.0 mm² T+E run in insulation. The maximum continuous current the cable can carry under method 100 (insulated wall) at 70 °C is approximately 27 A. The appropriate EICR code is:",
              options: {
                A: "C3",
                B: "C2 — overload protection not coordinated, cable could be overloaded under design current",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Cable Iz < In(device) means the protective device cannot guarantee to clear an overload before the cable overheats. Potentially dangerous. C2: redesign the protection or reduce the load."
            },
            {
              number: 16,
              prompt: "A pendant lighting fitting has a wholly missing earth conductor (Class I luminaire with no CPC connected). The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — protective measure (fault protection) not satisfied",
                C: "C1 if a foreseeable fault could put the metal body at line potential where ordinary persons can touch it",
                D: "Either B or C depending on accessibility and the rest of the protective measures"
              },
              answer: "D",
              explanation: "BPG4 invites judgement here: a Class I fitting with no CPC has no fault protection. If the metalwork is reachable by ordinary persons and could become live under fault, the call is often C1. Where the body is well above reach and other layers (RCD) work, C2 may be appropriate."
            },
            {
              number: 17,
              prompt: "A circuit has been visibly altered (a spur added) but the original certification does not show the alteration. The most appropriate code is:",
              options: {
                A: "C3 (typical) — improvement recommended, lack of recent certification of the alteration",
                B: "C1 unless tested",
                C: "FI",
                D: "Satisfactory"
              },
              answer: "A",
              explanation: "Lack of certification of an alteration is typically C3 (documentation finding). The actual technical condition of the alteration is then judged on its merits — a spur in undersized cable would attract its own C2."
            },
            {
              number: 18,
              prompt: "An EICR observation reads 'Cable hung over a sharp metal edge in cupboard, sheath chafed but basic insulation intact'. The most appropriate code is:",
              options: {
                A: "C1",
                B: "C2 — mechanical protection compromised, foreseeable progression to exposed live parts",
                C: "C3",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Chafed sheath with intact basic insulation is the classic 'potentially dangerous' progression. C2 — sleeve/reroute the cable; if the basic insulation is also breached then C1."
            },
            {
              number: 19,
              prompt: "A 30 mA RCD trips at 1×IΔn within 200 ms, and at 5×IΔn within 35 ms. The appropriate EICR record is:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — both readings within BS 7671 limits",
                D: "FI"
              },
              answer: "C",
              explanation: "≤300 ms at 1×IΔn and ≤40 ms at 5×IΔn: both readings within limits. The RCD is operating correctly and the schedule entry is Satisfactory."
            },
            {
              number: 20,
              prompt: "An accessory front plate has its earth tail cut off inside the box. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — fault protection on the accessory is impaired",
                C: "C1 if the metal accessory is exposed and a future fault could energise it",
                D: "Either B or C depending on whether the metal can become live and is reachable"
              },
              answer: "D",
              explanation: "BPG4 recognises judgement: a metal faceplate that could become live with no CPC connected is often C1 if reachable. A plastic accessory in a non-conductive setting may be C2. Detail and accessibility drive the call."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "A factory EICR finds a damaged armoured cable gland with the steel wire armour exposed and the inner cores still in place. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 (typical) — mechanical protection and earthing reliability of the SWA are compromised",
                C: "C1 if the cores are also damaged exposing live parts",
                D: "Either B or C depending on the condition of the inner cores"
              },
              answer: "D",
              explanation: "BPG4 demands judgement: a damaged gland on intact cores is C2; if basic insulation is also breached and live parts exposed it is C1. The inspector documents what they see."
            },
            {
              number: 2,
              prompt: "A retail shop has a row of socket-outlets with no RCD additional protection. The shop is open to the public and used by ordinary persons. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — current edition requires RCD additional protection on socket-outlets used by ordinary persons up to 32 A",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "BPG4 typically classes the absence of RCD additional protection on accessible socket-outlets in commercial premises used by ordinary persons as C2. The protective measure required for shock protection is missing."
            },
            {
              number: 3,
              prompt: "An EICR observation reads 'Schedule of Test Results not available from previous works; previous EIC missing'. The most appropriate code is:",
              options: {
                A: "C1",
                B: "C2",
                C: "C3 — improvement recommended (documentation gap)",
                D: "FI"
              },
              answer: "C",
              explanation: "Missing previous certification is a documentation issue, not a current safety hazard. C3 is the typical call. The inspector will still produce a complete EICR and any technical defects will attract their own codes."
            },
            {
              number: 4,
              prompt: "An EICR finds a plastic CU on a wooden backboard in a domestic setting, with terminations that are visibly clean and tight. Under current BPG4 the typical code is:",
              options: {
                A: "C1",
                B: "C2",
                C: "C3 — improvement recommended",
                D: "Satisfactory"
              },
              answer: "C",
              explanation: "Current BPG4 puts plastic CUs on wooden backboards (non-DSEAR domestic) at C3 — improvement recommended. The 2017 amendment for metal CUs is not retrospective; the inspector documents the existing state with an improvement recommendation."
            },
            {
              number: 5,
              prompt: "A circuit's measured Zs is 20% above the BS 7671 Table 41.3 limit for the protective device. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — ADS may not operate within the required disconnection time",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Above-limit Zs means the protective device may not disconnect within the required time. The protective measure (ADS) is impaired. C2 — investigate and remedy (clean terminations, replace cable, change device, add RCD)."
            },
            {
              number: 6,
              prompt: "On a domestic EICR, the immersion heater's circuit shows discolouration at the junction box terminations and an FBI burning smell. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 — danger present (fire risk from overheating termination)",
                D: "FI"
              },
              answer: "C",
              explanation: "Active overheating with a burning smell is a present danger. The inspector should isolate the circuit and label it before leaving site, then code C1 with a clear description."
            },
            {
              number: 7,
              prompt: "An office EICR finds an exposed metal back box in a kitchenette with a cracked plastic faceplate held in place by a single screw, the second screw missing. Live parts are not currently exposed but the faceplate is loose. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — foreseeable progression to exposed live parts",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "A loose faceplate with one screw missing will progress quickly to exposed live parts in normal use. Potentially dangerous: C2 — refit the faceplate properly. If the faceplate is already detached so live terminals are reachable, C1."
            },
            {
              number: 8,
              prompt: "An EICR identifies a cable buried in plaster <50 mm from the surface, not in a safe zone, with no RCD additional protection. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — additional protection not provided where required for cables outside safe zones",
                C: "C1",
                D: "Satisfactory if no nail damage is visible"
              },
              answer: "B",
              explanation: "BS 7671 requires either RCD additional protection or earthed mechanical protection for cables <50 mm deep outside safe zones. Absence of both is C2; the inspector advises adding 30 mA RCD protection or rerouting the cable."
            },
            {
              number: 9,
              prompt: "An EICR finds two MCBs cross-connected at the consumer unit (live conductors swapped between two adjacent circuits) but circuit identification labels still match the original layout. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — incorrect identification could mislead future maintenance",
                C: "C1",
                D: "FI"
              },
              answer: "B",
              explanation: "Mislabelled circuits create a foreseeable hazard during isolation for future work. The protective devices may also no longer match their cable sizes if the swap involved different ratings. C2 — correct the identification or the connection as appropriate."
            },
            {
              number: 10,
              prompt: "A 30 mA RCBO providing both fault protection and additional protection trips at 25 ms at 5×IΔn but does not operate at 1×IΔn within 5 seconds. The most appropriate code is:",
              options: {
                A: "Satisfactory — it tripped at 5×IΔn",
                B: "C2 (likely) — fault protection performance is impaired",
                C: "C3",
                D: "C1 (where the device is the sole protective measure on accessible circuits)"
              },
              answer: "B",
              explanation: "Failure at 1×IΔn means the fault-protection function is unreliable. C2 typical, lifting to C1 where the device is the sole protective measure on accessible circuits used by ordinary persons."
            },
            {
              number: 11,
              prompt: "An EICR finds a Class II luminaire with a single-pole switch in the line conductor. The most appropriate record is:",
              options: {
                A: "C2 — switching incorrect",
                B: "C3 — improvement recommended",
                C: "Satisfactory — Class II appliances do not require an earth, single-pole line switching is normal",
                D: "C1"
              },
              answer: "C",
              explanation: "Class II equipment (double insulation) doesn't need an earth and single-pole line switching is correct UK practice. The inspector confirms basic insulation and double-insulation labelling are intact and records Satisfactory."
            },
            {
              number: 12,
              prompt: "A privately rented dwelling's gas boiler is on its own circuit fed from the consumer unit, with no main protective bonding to the metallic incoming gas service. The most appropriate code is:",
              options: {
                A: "C1",
                B: "C2 — main bonding requirement not met for an extraneous-conductive-part",
                C: "C3",
                D: "Satisfactory if RCD protection is in place"
              },
              answer: "B",
              explanation: "Missing main bonding to a metallic gas service is potentially dangerous and is the textbook BPG4 C2. Even with RCDs in place, the bonding is the equipotential measure that prevents touch voltages during a fault."
            },
            {
              number: 13,
              prompt: "An EICR finds that a property's main earthing conductor is 10 mm² copper for a 100 A PME supply. BS 7671 Table 54.7 minimum is 16 mm² for PME on a 100 A service. The most appropriate code is:",
              options: {
                A: "C1",
                B: "C2 — earthing conductor under-sized for the supply (PME requires larger CSA)",
                C: "C3",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Under-sized earthing conductor on a PME supply is potentially dangerous because PME requires the conductor to carry combined earth/neutral fault currents. C2: upgrade to the BS 7671 Table 54.7 minimum (typically 16 mm² for ≤100 A or 25 mm² for higher)."
            },
            {
              number: 14,
              prompt: "An EICR records that an accessible socket-outlet has a clear crack across the front face that does not yet expose the live parts but progresses up to within 1 mm of a live terminal. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — foreseeable progression to exposed live parts",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "A crack approaching a live terminal will progress to exposure under normal in-service forces (plug insertion / removal). Potentially dangerous: C2. If live parts already accessible, C1."
            },
            {
              number: 15,
              prompt: "An EICR finds the main switch of a domestic consumer unit identified as 'Lighting' instead of the actual function. The most appropriate code is:",
              options: {
                A: "C3 — improvement recommended (incorrect identification)",
                B: "C2",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "A",
              explanation: "Where the misidentification of a main switch could be quickly corrected by anyone present and does not present a current danger, C3 is typical. Where the misidentification is on a critical circuit (e.g. a labelled isolator that does not actually isolate the circuit it claims), the call may rise to C2."
            },
            {
              number: 16,
              prompt: "An EICR observation reads 'No earthing arrangement found at the supply intake; no Ze can be measured'. The most appropriate code is:",
              options: {
                A: "C1 — no fault protection means of earthing in place",
                B: "C2",
                C: "C3",
                D: "FI"
              },
              answer: "A",
              explanation: "Absence of an earthing arrangement at the supply intake means there is no means of fault protection — a fault could leave exposed-conductive-parts at line potential indefinitely. C1: isolate, notify the duty holder and the DNO, and pursue immediate remedy."
            },
            {
              number: 17,
              prompt: "An EICR finds a burnt-out neutral termination at the main distribution board, with the busbar surface discoloured. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 (where heat damage is contained, no exposed live parts and the joint can be re-tightened or rebuilt)",
                C: "C1 if there is a continuing fire risk or exposed live parts",
                D: "Either B or C depending on the extent of the damage and the immediate fire risk"
              },
              answer: "D",
              explanation: "BPG4 again rewards judgement. A localised, cooled discolouration with a sound joint can be C2 (rectify promptly). Active burning, smoke, or exposed live parts shifts the call to C1 with on-site make-safe."
            },
            {
              number: 18,
              prompt: "A 30 mA RCD providing additional protection on socket-outlets is found to be inoperative (no trip at any test current). The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — additional protection impaired",
                C: "C1 — sole protective measure for direct contact has failed; sockets accessible to ordinary persons",
                D: "Either B or C depending on whether other protective measures are fully effective"
              },
              answer: "D",
              explanation: "BPG4: RCD failure is C2 where the RCD is one layer of a complete protective scheme; where the RCD is the sole guarantee against direct contact (e.g. cables in safe zones with no earthed mechanical protection, or sockets used outdoors), the inspector typically lifts to C1."
            },
            {
              number: 19,
              prompt: "An EICR finds a circuit's R1+R2 measured at 0.43 Ω and the calculated Zs (Ze + R1+R2) at the limit for the device. Schedule reading is at the limit. The most appropriate record is:",
              options: {
                A: "C2",
                B: "FI — borderline reading; instrument tolerance / cable temperature could push it over the limit",
                C: "C3",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Borderline readings invite FI: the inspector may want to re-test under operating temperature, cross-check with the instrument's tolerance, or use the corrected Zs method (0.8×Table 41.3 in some guidance). FI is appropriate while the genuine value is uncertain."
            },
            {
              number: 20,
              prompt: "An EICR observation reads 'Earthing conductor present at MET but no main protective bonding to incoming water service (metallic, confirmed extraneous-conductive-part)'. The most appropriate code is:",
              options: {
                A: "C1",
                B: "C2 — main bonding requirement not met",
                C: "C3",
                D: "Satisfactory because earthing conductor is present"
              },
              answer: "B",
              explanation: "Bonding and earthing are different things. Main bonding to extraneous-conductive-parts is required to maintain equipotential during a fault. Its absence is potentially dangerous: C2 — install bonding to BS 7671 Table 54.8 sizing."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "An EICR observation reads 'Twin-and-earth cable run beneath floorboards in dwelling, no mechanical protection, no RCD additional protection'. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 (typical) — additional protection requirement not met (per BPG4 / current edition)",
                C: "C1",
                D: "Satisfactory if the cable is a long-standing legacy install"
              },
              answer: "B",
              explanation: "BS 7671 requires either RCD additional protection or earthed mechanical protection for cables in floors / walls in dwellings used by ordinary persons. Absence of both is C2 per current BPG4. C3 may be applied where the installation is a clearly historic one, but the current consensus is more often C2."
            },
            {
              number: 2,
              prompt: "An EICR finds the consumer unit located in a damp basement with active condensation and signs of corrosion at the busbar. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — environmental conditions degrading the equipment, foreseeable progression to fault",
                C: "C1 (if active arcing or exposed live parts)",
                D: "Either B or C depending on observed condition"
              },
              answer: "D",
              explanation: "BPG4 invites judgement: surface corrosion with no live parts exposed and no arcing is typically C2 (relocate / replace promptly). Active arcing or exposed corrosion damage that exposes live parts is C1 with on-site make-safe."
            },
            {
              number: 3,
              prompt: "A 30 mA RCD providing additional protection on a socket-outlet circuit measured at 28 ms at 5×IΔn. The most appropriate record is:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — within ≤40 ms BS 7671 limit",
                D: "FI"
              },
              answer: "C",
              explanation: "≤40 ms at 5×IΔn is the BS 7671 limit for additional protection. 28 ms is comfortably within. Schedule entry is Satisfactory; no observation needed."
            },
            {
              number: 4,
              prompt: "On a school EICR, the inspector finds a low-level socket in a corridor with a clear crack and the inner shutter mechanism damaged so the shutters no longer cover the live terminals. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 — basic protection compromised, accessible live parts",
                D: "FI"
              },
              answer: "C",
              explanation: "Damaged shutters with accessible live terminals fail basic protection, particularly in a school where children may be present. Textbook C1 — isolate the socket and label it before leaving site."
            },
            {
              number: 5,
              prompt: "An EICR finds a circuit's IR test reading at exactly 1.0 MΩ between line and earth (BS 7671 minimum). The most appropriate record is:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory but on the limit — investigate before next inspection and consider FI if the cause is unclear",
                D: "C1"
              },
              answer: "C",
              explanation: "Exactly at the limit is technically Satisfactory but warrants attention. The inspector may record an FI if the reading is suspiciously borderline and the cause cannot be established (e.g. moisture ingress, electronic loads). Where the reading is stable and explained, Satisfactory with a note suffices."
            },
            {
              number: 6,
              prompt: "An EICR finds that an existing rewireable fuse has been replaced with a length of foil. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 — overcurrent protection has effectively been defeated, danger present",
                D: "FI"
              },
              answer: "C",
              explanation: "Foil substitution defeats the protective device entirely — a fault could lead to fire before the supply tripped upstream (if at all). The inspector must isolate the circuit, label it and code C1; this is dangerous and the duty holder must be informed immediately."
            },
            {
              number: 7,
              prompt: "An EICR finds an outdoor socket-outlet at a domestic dwelling without RCD additional protection. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — outdoor sockets used by ordinary persons require RCD additional protection (current BS 7671 requirement)",
                C: "C1",
                D: "Satisfactory if the socket has weatherproof shutters"
              },
              answer: "B",
              explanation: "Outdoor / outside-equipped circuits used by ordinary persons require 30 mA RCD additional protection. A weatherproof enclosure is helpful but doesn't replace RCD. C2 is the typical call."
            },
            {
              number: 8,
              prompt: "An EICR observation reads 'Spare way in consumer unit — terminal block connected directly to MCB but no cable connected'. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — exposed live terminal could be inadvertently energised in a future event (cover removed for maintenance)",
                C: "C1 if the live terminal is currently exposed",
                D: "Either B or C depending on whether the terminal is now accessible"
              },
              answer: "D",
              explanation: "BPG4: an unused terminal can be C1 if currently accessible (basic protection failure) or C2 if covered now but a foreseeable maintenance event would expose it. The correct fix is to remove the MCB and blank the way."
            },
            {
              number: 9,
              prompt: "An EICR finds a Type B 6 A MCB on a circuit feeding only a small inductive transformer with frequent inrush trips. The most appropriate observation is:",
              options: {
                A: "C2 — incorrect device type",
                B: "C3 — improvement recommended (Type C may be more suitable to avoid nuisance tripping)",
                C: "C1",
                D: "Satisfactory unless the protective requirements of BS 7671 are not met"
              },
              answer: "D",
              explanation: "If the MCB still provides correct fault and overload protection per BS 7671, the nuisance-tripping issue is a functional / design preference rather than a safety code. The inspector may note a recommendation for a Type C device but this is not strictly an EICR coded observation unless protection is impaired."
            },
            {
              number: 10,
              prompt: "An EICR observation reads 'Hot-water boiler isolator switch fitted but not labelled; switching position uncertain'. The most appropriate code is:",
              options: {
                A: "C1",
                B: "C2 — labelling could mislead emergency isolation",
                C: "C3 — improvement recommended",
                D: "Satisfactory"
              },
              answer: "C",
              explanation: "An unlabelled switch is typically C3 unless its mis-operation could create immediate danger. The inspector recommends labelling per BS 7671 514.1.1, and the report remains Satisfactory unless other observations push it Unsatisfactory."
            },
            {
              number: 11,
              prompt: "An EICR finds a metal cable tray / containment system not connected to the protective earth. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — extraneous-conductive-part not bonded; foreseeable fault could energise the tray",
                C: "C1",
                D: "Satisfactory if the cables are insulated"
              },
              answer: "B",
              explanation: "Metal containment used to support insulated cables is treated as exposed-conductive-part if it could become live under fault. It must be earthed via a dedicated CPC or bonded; absence is potentially dangerous, typically C2."
            },
            {
              number: 12,
              prompt: "On an EICR, a socket-outlet's earth pin is found to be loose and not making reliable contact with the plug's earth. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 (typical) — fault protection on the connected appliance could be defeated",
                C: "C1 (where the appliance is Class I and routinely used by ordinary persons)",
                D: "Either B or C depending on use and accessibility"
              },
              answer: "D",
              explanation: "BPG4 again: poor earth contact at a socket can be C2 where it's a passive defect, or C1 if the connected appliance is Class I and frequently used. The inspector documents the use case and codes accordingly."
            },
            {
              number: 13,
              prompt: "An EICR finds a TT-system installation with no RCD between the consumer unit and the means of earthing. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 — TT systems require RCD as the only practical means of fault protection",
                D: "Satisfactory if the earth electrode resistance is low"
              },
              answer: "C",
              explanation: "TT systems rely on RCD for fault protection (because earth electrode loop impedance is generally too high for an MCB to meet disconnection times). Absence of RCD on a TT is C1 per BPG4 — the protective measure is essentially absent."
            },
            {
              number: 14,
              prompt: "An EICR finds a junction box used in a maintained location, accessible for inspection but containing a connection that has been wrapped in insulating tape rather than terminated in a proper terminal. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — improperly terminated joint, risk of failure / overheating",
                C: "C1 if visibly hot or showing signs of arcing",
                D: "Either B or C depending on the joint's current condition"
              },
              answer: "D",
              explanation: "Tape-wrapped joints are unreliable and can deteriorate to a high-resistance fault. Cool, intact, securely insulated joints are typically C2; hot or visibly arcing joints lift to C1 with on-site make-safe."
            },
            {
              number: 15,
              prompt: "An EICR observation reads 'Bath and basin in a dwelling installed but no main protective bonding to plumbing — extraneous-conductive-part status not yet confirmed'. The most appropriate code is:",
              options: {
                A: "C2 always",
                B: "FI — extraneous-conductive-part status must be confirmed before a code can be applied",
                C: "C3",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Where the extraneous-conductive-part status is genuinely unknown (modern plastic plumbing may not require bonding), an FI is appropriate. Once confirmed extraneous, missing bonding is C2; if confirmed not extraneous, no observation."
            },
            {
              number: 16,
              prompt: "An EICR finds an exposed metal back box at a switch position with a damaged faceplate. Live terminal accessible. The most appropriate code is:",
              options: {
                A: "C1",
                B: "C2",
                C: "C3",
                D: "FI"
              },
              answer: "A",
              explanation: "Accessible live terminal is C1 — basic protection failed. The inspector should isolate the circuit and label it before leaving site, regardless of how rarely the switch is used."
            },
            {
              number: 17,
              prompt: "An EICR observation reads 'BS 3036 rewireable fuse remaining on a 5 A lighting circuit in original 1960s installation, otherwise sound'. The most appropriate code is:",
              options: {
                A: "C1",
                B: "C2",
                C: "C3 — improvement recommended (older protective device technology, current edition expects HBC fuses or MCBs)",
                D: "Satisfactory unless ADS times cannot be met"
              },
              answer: "D",
              explanation: "BPG4: a BS 3036 fuse that still meets BS 7671 disconnection times for the circuit is generally Satisfactory or C3 (improvement recommended). The inspector confirms ADS performance via Zs measurement; if ADS is impaired, the call rises to C2."
            },
            {
              number: 18,
              prompt: "An EICR finds a domestic kitchen with no RCD additional protection on the socket-outlets. The most appropriate code is:",
              options: {
                A: "C3 if the installation is plainly a long-standing legacy install",
                B: "C2 (typical) — current BS 7671 requires additional protection on socket-outlets accessible to ordinary persons up to 32 A",
                C: "C1",
                D: "Either A or B depending on the inspector's judgement of the installation's age and recent works"
              },
              answer: "D",
              explanation: "BPG4 typically calls C2 in a current dwelling without RCD additional protection on accessible sockets; some inspectors apply C3 to genuinely untouched older installations. The current consensus favours C2 for any domestic install in active use."
            },
            {
              number: 19,
              prompt: "An EICR finds an undersized CPC on a circuit (e.g. 1.0 mm² CPC on a 4.0 mm² 32 A radial), with no parallel earth path and Zs at the limit. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 (typical) — adiabatic check fails / CPC inadequate for fault current",
                C: "C1",
                D: "FI to confirm"
              },
              answer: "B",
              explanation: "An undersized CPC may not survive the fault current within the protective device's clearance time. The protective measure is impaired. C2: replace with adequately sized CPC or upgrade the protective device."
            },
            {
              number: 20,
              prompt: "On an EICR, an item that has previously been coded C2 and remediated should be:",
              options: {
                A: "Coded C2 again on the new EICR",
                B: "Coded C3 to acknowledge previous concern",
                C: "Recorded as remediated, with the new EICR coding the current observed condition (typically Satisfactory if the remedy was effective)",
                D: "Coded FI"
              },
              answer: "C",
              explanation: "Each EICR captures the current condition. A previously fixed C2 that is now compliant is Satisfactory on the new report. The previous observation lives in the previous report; the new report doesn't carry it forward unless the issue has recurred."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "An EICR finds a domestic CU with mixed device types — one MCB, one RCBO and a wirewound BS 1361 fuse, all from different manufacturers. The most appropriate observation is:",
              options: {
                A: "C2 — manufacturer mixing impairs the assembly",
                B: "C3 (typical) — improvement recommended (mixing devices outside the CU's listed range is typically a manufacturer-conformance / BPG4 issue rather than an immediate danger)",
                C: "C1",
                D: "FI"
              },
              answer: "B",
              explanation: "Mixing devices that are not listed as compatible with the CU is a manufacturer-conformance concern. Where the protective measures still operate correctly the typical call is C3 with a recommendation for matched devices."
            },
            {
              number: 2,
              prompt: "An EICR finds visible arcing inside a distribution board cover on a factory site. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 — danger present (active fault)",
                D: "FI"
              },
              answer: "C",
              explanation: "Visible arcing is an immediate danger. The inspector must isolate the affected board and label it before leaving site, then code C1 with a clear description for the duty holder."
            },
            {
              number: 3,
              prompt: "An EICR finds an SPD (surge protection device) with the status indicator showing 'replace'. The most appropriate code is:",
              options: {
                A: "C1",
                B: "C2 — surge protective measure not effective",
                C: "C3 (typical) — improvement recommended (the SPD is past end-of-life and should be replaced; current edition recommends SPD where appropriate)",
                D: "Satisfactory"
              },
              answer: "C",
              explanation: "An SPD past end-of-life still allows the rest of the installation to operate, but no longer provides surge protection. Typical BPG4 call is C3 — improvement recommended; replace the SPD module."
            },
            {
              number: 4,
              prompt: "An EICR finds a circuit's polarity reversed at the consumer unit (line and neutral swapped) so single-pole MCBs are now in the neutral conductor. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 — protective device is in the wrong conductor; isolation switching does not break the line",
                D: "FI"
              },
              answer: "C",
              explanation: "Reversed polarity at the CU defeats single-pole isolation entirely — the line stays connected when the MCB is open. This is dangerous and the inspector should isolate at the main switch, label, and code C1."
            },
            {
              number: 5,
              prompt: "An EICR observation reads 'Tested with all loads connected; cannot determine whether low IR is from electronic loads or installation fault'. The most appropriate code is:",
              options: {
                A: "C3",
                B: "FI — further investigation required by isolating loads and re-testing",
                C: "C2",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "FI is the right code when the inspector cannot determine the cause during the inspection. A follow-up visit with electronic loads isolated will produce a clean reading; until then the report is Unsatisfactory."
            },
            {
              number: 6,
              prompt: "An EICR finds a Class I metal kitchen appliance plugged into a socket with no earth pin contact (the socket's earth contact is broken). The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — fault protection on the appliance is defeated",
                C: "C1 (typical) — Class I appliance with no earth, danger present in domestic kitchen use by ordinary persons",
                D: "FI"
              },
              answer: "C",
              explanation: "A Class I appliance relies on the CPC to clear faults to the metal body. With no earth at the socket, a fault could leave the appliance body live indefinitely. C1: isolate, label, replace the socket."
            },
            {
              number: 7,
              prompt: "An EICR finds a 50-year-old TN-S installation's main earthing conductor as a 4 mm² bare copper strap, undersized for current BS 7671 sizing. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — earthing conductor may be inadequate for current fault levels",
                C: "C1 if the installation has obviously been modified to higher fault current capacity",
                D: "FI to verify the historical sizing"
              },
              answer: "B",
              explanation: "Under-sized main earthing conductor is potentially dangerous — fault current may exceed conductor capacity and damage / open the earth path. C2: upgrade to BS 7671 Table 54.7 minimum."
            },
            {
              number: 8,
              prompt: "An EICR finds an isolator on the immersion heater circuit fitted as a single-pole switch. The most appropriate code is:",
              options: {
                A: "C1",
                B: "C2 (likely) — isolation switching incomplete (BS 7671 requires double-pole isolation for water heaters)",
                C: "C3",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Water heaters are typically required to be capable of all-pole isolation (BS 7671 Reg 537 / older 514). A single-pole isolator can leave the neutral connected during maintenance, with shock risk. C2: replace with a DP isolator."
            },
            {
              number: 9,
              prompt: "An EICR finds a 30 mA RCD providing additional protection on a circuit feeding several outdoor sockets. The RCD trips at 1×IΔn within 250 ms and at 5×IΔn within 32 ms. The most appropriate record is:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — both readings within BS 7671 limits",
                D: "FI"
              },
              answer: "C",
              explanation: "≤300 ms at 1×IΔn and ≤40 ms at 5×IΔn. The RCD is operating correctly; schedule entry is Satisfactory."
            },
            {
              number: 10,
              prompt: "An EICR finds an exposed conductor at the back of a luminaire's flex outlet that protrudes through the protective sleeve. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — basic protection compromised",
                C: "C1 (typical) — exposed live conductor at an accessible location",
                D: "FI"
              },
              answer: "C",
              explanation: "Exposed live conductor at an accessible point is C1 regardless of where the access is. The inspector should isolate the circuit and label it before leaving site."
            },
            {
              number: 11,
              prompt: "An EICR finds a metal-clad domestic CU with a small surface scratch on the door but otherwise sound. The most appropriate observation is:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — cosmetic only, no protective measure compromised",
                D: "C1"
              },
              answer: "C",
              explanation: "Cosmetic scratches that don't compromise the IP rating, basic protection or fire containment are not coded. The inspector may note the scratch in the schedule for completeness but the result is Satisfactory."
            },
            {
              number: 12,
              prompt: "An EICR finds that a circuit's RCD has been jumpered out (the RCD's output connections shorted together). The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 — protective device deliberately defeated, danger present",
                D: "FI"
              },
              answer: "C",
              explanation: "Deliberate defeat of a protective device is a serious C1: the protection has been removed entirely. The inspector must isolate, label and notify the duty holder same day."
            },
            {
              number: 13,
              prompt: "An EICR observation reads 'Cable concealed in stud wall, route unknown, no detection possible during inspection'. The most appropriate code is:",
              options: {
                A: "C2",
                B: "C3",
                C: "FI — further investigation required to establish route compliance",
                D: "Satisfactory"
              },
              answer: "C",
              explanation: "Where the inspector cannot determine cable routing and the route's compliance with safe-zone / depth requirements is uncertain, FI is appropriate. The investigation may use cable detectors or open-up access to confirm."
            },
            {
              number: 14,
              prompt: "An EICR finds an obvious DIY-quality joint at an exposed loft-level cable run, made with twisted-and-taped conductors. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 (typical) — joint not made in a suitable enclosure / using suitable terminals",
                C: "C1 if the joint is currently exposed and accessible",
                D: "Either B or C depending on the joint's accessibility and condition"
              },
              answer: "D",
              explanation: "BPG4: a non-compliant joint that is currently insulated and not accessible may be C2 (potentially dangerous, foreseeable progression). A joint with exposed live parts at the time of inspection is C1 with on-site make-safe."
            },
            {
              number: 15,
              prompt: "An EICR finds a circuit feeding a fixed mobility-aid charging point in a sheltered-housing dwelling, with no RCD protection. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — additional protection required for circuits used by ordinary persons / vulnerable occupants",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Fixed equipment in sheltered housing accessed by ordinary persons (often vulnerable) requires the protective measures expected of the current edition, including 30 mA RCD additional protection. Absence is potentially dangerous: C2."
            },
            {
              number: 16,
              prompt: "An EICR observation reads 'Earthing conductor terminated at MET via a cable lug; lug nut hand-tight only, found loose during inspection'. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — fault protection earth path could be lost under fault or vibration",
                C: "C1 if the conductor is so loose that fault protection is currently absent",
                D: "Either B or C depending on continuity testing of the joint"
              },
              answer: "D",
              explanation: "BPG4: a loose earthing termination with continuity intact is typically C2 (re-tighten); a termination so loose that earthing is effectively lost (no continuity, exposed conductor) is C1 with on-site remediation."
            },
            {
              number: 17,
              prompt: "An EICR finds a recently installed PV array DC isolator without correct DC-rated labelling. The most appropriate code is:",
              options: {
                A: "C1",
                B: "C2 (likely) — incorrect labelling and identification could cause unsafe operation during emergency isolation",
                C: "C3 (improvement recommended)",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "PV systems require correct DC isolation labelling so emergency responders can disconnect safely. Missing or incorrect labelling on a DC isolator is potentially dangerous: C2 — relabel and verify polarity / orientation."
            },
            {
              number: 18,
              prompt: "An EICR finds a cooker control unit with a switched 13 A socket, the socket switch left in the on position with no plug inserted, and the inner shutters non-functional. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — basic protection compromised at an accessible socket",
                C: "C1 (where exposed live terminals are accessible due to non-functional shutters)",
                D: "Either B or C depending on whether live terminals are currently accessible"
              },
              answer: "D",
              explanation: "Non-functional shutters are a basic-protection issue. If a finger or test pin can reach the live terminal, C1; if not currently accessible but shutters are unreliable, C2 with prompt remedy."
            },
            {
              number: 19,
              prompt: "An EICR observation reads 'TN-C-S supply with PME conditions, but no warning notice at consumer unit'. The most appropriate code is:",
              options: {
                A: "C3 — improvement recommended (warning notice / labelling)",
                B: "C2",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "A",
              explanation: "Missing safety / warning notices are typically C3 — the labelling is required for future safe maintenance, but its absence does not present an immediate danger. Add a PME / TN-C-S notice at the position of the main earthing terminal."
            },
            {
              number: 20,
              prompt: "An EICR finds a recently extended kitchen with a new dishwasher circuit without supplementary RCD protection on the new dishwasher socket. The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 — current BS 7671 requires RCD additional protection on socket-outlets used by ordinary persons",
                C: "C1",
                D: "Satisfactory because the dishwasher is fixed equipment"
              },
              answer: "B",
              explanation: "A socket-outlet (even one feeding a fixed appliance) used by ordinary persons up to 32 A requires 30 mA RCD additional protection per current BS 7671. Absence is C2 — Unsatisfactory and remedy promptly."
            }
          ]
        }
      ]
    },
    {
      id: "section-3",
      title: "Section 3 — Outcomes & Responsibilities",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "The overall classification of an EICR is rendered Unsatisfactory by:",
              options: {
                A: "Any C3",
                B: "Any C1, C2 or FI observation",
                C: "Only a C1",
                D: "More than ten C3s"
              },
              answer: "B",
              explanation: "Any single C1, C2 or FI is enough to make the overall report Unsatisfactory. C3s on their own do not — though they should still drive remedial planning. The Unsatisfactory result is what triggers the landlord/duty-holder's obligation to act."
            },
            {
              number: 2,
              prompt: "If a C1 is identified on site during an EICR, the inspector should:",
              options: {
                A: "Note it on the report and leave site",
                B: "Make safe before leaving (typically by isolation), notify the duty holder verbally and in writing, and record the action on the report",
                C: "Wait for the duty holder to call an electrician",
                D: "Switch off the entire installation regardless of impact"
              },
              answer: "B",
              explanation: "C1 = danger present now. Walking away leaves the inspector personally exposed and the public at risk. The standard response is to isolate the affected circuit, label it, notify the duty holder immediately and record exactly what was found and what action was taken."
            },
            {
              number: 3,
              prompt: "Under the ESS PRS Regulations 2020 (England), the landlord must provide the EICR to the existing tenant:",
              options: {
                A: "Within 7 days of the inspection",
                B: "Within 28 days of the inspection",
                C: "On request only",
                D: "Within 6 months"
              },
              answer: "B",
              explanation: "Within 28 days to existing tenants. To a new tenant, the EICR must be supplied before they move in. Where the report is Unsatisfactory, the landlord must complete the required remedial work and obtain written confirmation within 28 days of the inspection (or sooner if the report specifies)."
            },
            {
              number: 4,
              prompt: "An accessory (e.g. a socket-outlet) is found with the front plate broken away, exposing a live terminal accessible to a finger. The most appropriate code is:",
              options: {
                A: "C3 — improvement recommended",
                B: "C2 — potentially dangerous",
                C: "C1 — danger present",
                D: "FI — further investigation"
              },
              answer: "C",
              explanation: "Exposed accessible live parts are the textbook C1 — basic protection has failed. The inspector should isolate the affected circuit, label it, and the report is Unsatisfactory. C2 would apply if the live part were not directly accessible but a single foreseeable event could expose it."
            },
            {
              number: 5,
              prompt: "Under PRS Regulations 2020, on receipt of an Unsatisfactory EICR, the landlord must:",
              options: {
                A: "Wait for the next periodic inspection",
                B: "Carry out remedial or further investigative work within 28 days, or sooner if the report specifies, and obtain written confirmation from a qualified person",
                C: "Replace the entire installation",
                D: "Notify the local authority within 24 hours"
              },
              answer: "B",
              explanation: "PRS Regs 2020: 28 days to remedy, written confirmation from a qualified person, then supply written confirmation to the tenant within 28 days and to the local authority within 7 days of any written request."
            },
            {
              number: 6,
              prompt: "An EICR with one C1 has been issued. The inspector has isolated the affected circuit. The duty holder must:",
              options: {
                A: "Treat the report as Satisfactory because the danger was made safe",
                B: "Arrange permanent remediation, obtain written confirmation from a qualified person, and remember the report still records the original C1 condition",
                C: "Ignore it",
                D: "Switch off the whole supply"
              },
              answer: "B",
              explanation: "Make-safe is a temporary measure. The original C1 condition is recorded on the report and drives the Unsatisfactory result. Permanent remediation and written confirmation follow per the duty holder's regulatory regime (PRS Regs / HSWA / EAWR)."
            },
            {
              number: 7,
              prompt: "Under the Electricity at Work Regulations 1989, the legal duty to maintain electrical installations in non-domestic premises rests with:",
              options: {
                A: "The DNO",
                B: "The duty holder (typically the employer / responsible person)",
                C: "The inspector who issues the EICR",
                D: "The local authority"
              },
              answer: "B",
              explanation: "EAWR 1989 places legal duties on the duty holder for the workplace electrical system. The inspector reports condition; the duty holder acts. HSWA 1974 sits behind EAWR for general health and safety obligations."
            },
            {
              number: 8,
              prompt: "A non-domestic duty holder receives an EICR with two C2 observations and ignores them for six months. After an electrical fire causes injury, the inspector:",
              options: {
                A: "Is liable because they wrote the report",
                B: "Can demonstrate they reported the C2 and notified the duty holder; primary liability rests with the duty holder for failing to act",
                C: "Is liable because they did not personally fix the C2",
                D: "Is liable because the report became invalid after a year"
              },
              answer: "B",
              explanation: "An inspector's responsibility is to report condition accurately and inform the duty holder. The duty holder bears the legal responsibility under HSWA 1974 / EAWR 1989 to act on the report. Inspector liability arises if the report itself is negligent."
            },
            {
              number: 9,
              prompt: "An EICR is issued with the overall result 'Satisfactory' and three C3 observations. The duty holder is:",
              options: {
                A: "Required by law to act on the C3s within 28 days",
                B: "Not legally compelled to act on the C3s, but advised to plan and execute the improvements over time",
                C: "Required to issue a new EICR immediately",
                D: "Required to notify the DNO"
              },
              answer: "B",
              explanation: "C3 is an improvement recommendation, not a regulatory trigger. The duty holder should plan and budget for the improvements but is not legally required to act in a specific timeframe (unlike C1/C2/FI which trigger PRS/EAWR obligations)."
            },
            {
              number: 10,
              prompt: "Under PRS Regulations 2020, written confirmation that remedial work has been completed must be provided to the tenant within:",
              options: {
                A: "7 days",
                B: "28 days of completion",
                C: "6 months",
                D: "On request only"
              },
              answer: "B",
              explanation: "Landlord supplies written confirmation to the tenant within 28 days of the remedial work being completed. The local authority can request the same evidence and must receive it within 7 days of a written request."
            },
            {
              number: 11,
              prompt: "An inspector finding a C1 on a dwelling under a tenancy must:",
              options: {
                A: "Avoid telling the tenant",
                B: "Notify the duty holder (landlord / agent) immediately, and where the danger affects the tenant, ensure the tenant is also informed and the affected area is made safe",
                C: "Refuse to write the report",
                D: "Switch off the whole supply"
              },
              answer: "B",
              explanation: "The duty holder is the primary contact, but where the tenant's safety is at risk the inspector should ensure the affected area is made safe (typically by isolation) and the tenant is informed if appropriate. The make-safe action sits alongside the formal notification."
            },
            {
              number: 12,
              prompt: "On a privately rented dwelling, the landlord cannot find a qualified person to remediate within 28 days. They should:",
              options: {
                A: "Ignore the deadline",
                B: "Make best endeavours, document attempts, and supply the local authority with progress evidence — but the legal duty remains and a longer delay would breach the regulations",
                C: "Issue a fresh EICR to reset the clock",
                D: "Tell the tenant to fix it"
              },
              answer: "B",
              explanation: "PRS Regs 2020 do not have a formal 'extension' route — landlords must demonstrate reasonable efforts. Persistent delay risks enforcement action by the local authority and potential financial penalty."
            },
            {
              number: 13,
              prompt: "An inspector who walks away from a known C1 without making safe is:",
              options: {
                A: "Acting acceptably because the duty holder is responsible for action",
                B: "Personally exposed to potential prosecution under HSWA 1974 / EAWR 1989 if injury results — and to professional indemnity claims",
                C: "Required to do so",
                D: "Acting acceptably because make-safe is a separate paid service"
              },
              answer: "B",
              explanation: "Walking away from known immediate danger creates personal liability if injury follows. The standard professional response is isolation, labelling, written notification and recorded action — irrespective of fee or scope wording."
            },
            {
              number: 14,
              prompt: "The roles of designer, installer, inspector and duty holder are best described as:",
              options: {
                A: "Always the same person",
                B: "Distinct: the designer designs, the installer installs (and may certify), the inspector verifies condition, the duty holder maintains and acts on findings",
                C: "Optional",
                D: "Defined only in BS 7671"
              },
              answer: "B",
              explanation: "BS 7671, HSWA 1974 and EAWR 1989 distinguish the four roles. Some are combined in small jobs, but their accountabilities differ — particularly for certificates, condition reports and ongoing maintenance."
            },
            {
              number: 15,
              prompt: "A landlord asks the inspector to omit a C2 observation to keep the report Satisfactory. The inspector should:",
              options: {
                A: "Comply if the C2 is minor",
                B: "Refuse — falsifying the EICR is a regulatory and professional breach with personal liability if injury follows",
                C: "Mark it as C3 instead to avoid Unsatisfactory",
                D: "Walk away from the inspection"
              },
              answer: "B",
              explanation: "Coding decisions are professional judgements based on BPG4 and observed condition. The inspector's signature is a declaration; falsifying it for client convenience exposes the inspector to personal regulatory and civil liability."
            },
            {
              number: 16,
              prompt: "On a non-domestic site under HSWA 1974 / EAWR 1989, the duty to act on an Unsatisfactory EICR rests with:",
              options: {
                A: "The local authority",
                B: "The duty holder (typically the employer or responsible person), as defined under HSWA / EAWR",
                C: "The inspector",
                D: "The DNO"
              },
              answer: "B",
              explanation: "EAWR 1989 places the legal obligation on the duty holder. They must take action on Unsatisfactory findings within a reasonable timeframe, prioritising by risk, and keep records to demonstrate compliance with the regulations."
            },
            {
              number: 17,
              prompt: "A non-domestic premises has had an EICR with three C2 items. The reasonable timeframe for remediation is:",
              options: {
                A: "Always 28 days as for PRS rented dwellings",
                B: "A risk-based timeframe set by the duty holder, prioritising the highest-risk items first, with records kept to demonstrate compliance with HSWA / EAWR",
                C: "6 months in all cases",
                D: "Whenever convenient"
              },
              answer: "B",
              explanation: "Non-domestic premises don't have the PRS 28-day clock. HSWA / EAWR demand 'reasonably practicable' action; the duty holder prioritises by risk and documents what they did. 'Reasonable' is judged by what a competent duty holder would do given the same information."
            },
            {
              number: 18,
              prompt: "A C2 observation that has not been remedied within 28 days on a privately rented dwelling means the landlord:",
              options: {
                A: "Is in breach of PRS Regulations 2020 and may face local authority enforcement action / financial penalty",
                B: "Has nothing to worry about",
                C: "Can issue their own written confirmation",
                D: "Must demolish the property"
              },
              answer: "A",
              explanation: "PRS Regs 2020 give the local authority enforcement powers including financial penalties up to £30,000 per breach. The landlord must remediate within 28 days or be able to demonstrate they have made best endeavours and have a clear plan."
            },
            {
              number: 19,
              prompt: "An inspector finds a C1 in a hospital and isolates the affected circuit. The hospital's duty holder asks for the circuit back urgently. The inspector should:",
              options: {
                A: "Re-energise immediately",
                B: "Refuse to re-energise without permanent remediation; explain that the circuit will remain isolated until a competent person addresses the danger and the inspector has sight of the remedial work",
                C: "Hand the keys to the duty holder",
                D: "Walk away"
              },
              answer: "B",
              explanation: "C1 means danger present. Re-energising before remediation re-introduces the danger. The inspector explains the position to the duty holder, documents the conversation, and stands behind the make-safe — even when there is operational pressure."
            },
            {
              number: 20,
              prompt: "An EICR's overall outcome is set by:",
              options: {
                A: "The number of observations recorded",
                B: "The presence of any C1, C2 or FI (Unsatisfactory) versus none of those (Satisfactory)",
                C: "The premises type",
                D: "The inspector's mood"
              },
              answer: "B",
              explanation: "Outcome logic is binary: any C1/C2/FI = Unsatisfactory; otherwise Satisfactory. C3 quantity does not change the outcome. The duty holder's regulatory obligation flows from this binary result."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "A privately rented dwelling EICR is Unsatisfactory. The maximum time to remedy is:",
              options: {
                A: "12 months",
                B: "28 days from the inspection (or sooner if the report specifies)",
                C: "On change of tenancy only",
                D: "Whenever convenient"
              },
              answer: "B",
              explanation: "PRS Regs 2020: 28 days from the inspection date to remedy or to carry out further investigation, plus written confirmation supplied to the tenant within 28 days of the work, and to the local authority within 7 days of any written request."
            },
            {
              number: 2,
              prompt: "A C2 observation is added to an EICR on a domestic dwelling under PRS Regs 2020. The next-tenancy clock is:",
              options: {
                A: "Reset by the new EICR",
                B: "Independent — the landlord must remediate the C2 within 28 days of the inspection regardless of the next-tenancy date",
                C: "Suspended until remediation",
                D: "Optional"
              },
              answer: "B",
              explanation: "The 28-day remedy clock runs from the inspection regardless of tenancy events. A new tenancy doesn't pause the clock; the landlord must hit both deadlines independently."
            },
            {
              number: 3,
              prompt: "A non-domestic duty holder asks the inspector for the make-safe to be held off so business can continue. The inspector should:",
              options: {
                A: "Comply",
                B: "Refuse — make-safe of a known C1 is non-negotiable; offer to coordinate timing of permanent remediation but not the immediate isolation",
                C: "Withdraw from the site without making safe",
                D: "Switch off the entire installation"
              },
              answer: "B",
              explanation: "C1 isolation cannot be deferred for business convenience. The inspector explains the legal position, isolates and labels, records the conversation. Permanent fix can be planned around operational needs once the immediate danger is removed."
            },
            {
              number: 4,
              prompt: "Where remedial work follows an Unsatisfactory EICR, the written confirmation must come from:",
              options: {
                A: "Anyone who picks up the work",
                B: "A qualified person — typically a registered competent electrician",
                C: "The inspector who issued the EICR",
                D: "The local authority"
              },
              answer: "B",
              explanation: "PRS Regs 2020 require the written confirmation to be provided by a 'qualified person' competent in electrical inspection. This may be the original inspector or another suitably qualified electrician — the key is competence, not identity."
            },
            {
              number: 5,
              prompt: "Under HSWA 1974 / EAWR 1989, the duty holder for a workplace electrical installation is normally:",
              options: {
                A: "The electrician who maintains it",
                B: "The employer or person in control of the workplace, including their senior management chain",
                C: "The DNO",
                D: "The local authority"
              },
              answer: "B",
              explanation: "EAWR 1989 places duties on the employer / responsible person in control of the workplace. Senior managers can be personally liable under HSWA / corporate manslaughter legislation if a failure to act on safety reports leads to harm."
            },
            {
              number: 6,
              prompt: "An inspector finds a C2 on a critical circuit and the duty holder cannot fix it before the next inspection. The inspector should:",
              options: {
                A: "Reduce it to C3 informally",
                B: "Code it C2, document the duty holder's plan and prompt remediation; the EICR remains Unsatisfactory until the C2 is resolved",
                C: "Withdraw the report",
                D: "Refuse to inspect"
              },
              answer: "B",
              explanation: "Codes reflect observed condition, not the duty holder's plan. The C2 stays, the report is Unsatisfactory, and the remedy / written confirmation flow follows. Re-coding to keep a client happy is professional misconduct."
            },
            {
              number: 7,
              prompt: "Following an Unsatisfactory EICR with a C1 that the inspector has made safe, the duty holder should:",
              options: {
                A: "Treat the issue as resolved",
                B: "Arrange permanent remediation, retain the make-safe label and isolation until then, and obtain written confirmation when the work is completed",
                C: "Re-energise the circuit",
                D: "Issue an MEIWC for the make-safe"
              },
              answer: "B",
              explanation: "The make-safe is a temporary measure. The duty holder must commission permanent remediation by a qualified person, then collect written confirmation. The labelled isolation stays in place until the qualified person verifies the fix."
            },
            {
              number: 8,
              prompt: "Local authorities under PRS Regs 2020 can request a copy of the EICR and require it to be supplied within:",
              options: {
                A: "24 hours",
                B: "7 days of a written request",
                C: "28 days",
                D: "6 months"
              },
              answer: "B",
              explanation: "PRS Regs 2020: local authority written request → 7 days for the landlord to supply the EICR. Failure can trigger enforcement and financial penalty."
            },
            {
              number: 9,
              prompt: "A landlord refuses to act on an Unsatisfactory EICR. The local authority enforcement options include:",
              options: {
                A: "Formal remedial notice and a financial penalty (up to £30,000 per breach)",
                B: "Verbal request only",
                C: "Forced sale of the property",
                D: "Demolition order"
              },
              answer: "A",
              explanation: "PRS Regs 2020 give local authorities significant enforcement powers — formal notices to remedy and financial penalties up to £30,000 per breach. Repeat or aggravated breaches can attract additional penalties."
            },
            {
              number: 10,
              prompt: "A non-domestic duty holder under HSWA 1974 fails to act on a known C1 and an injury results. The likely consequences include:",
              options: {
                A: "No action because EICRs are advisory",
                B: "HSE investigation, possible prosecution under HSWA / EAWR, civil claims and reputational harm",
                C: "Polite warning only",
                D: "Higher insurance premium only"
              },
              answer: "B",
              explanation: "HSWA 1974 / EAWR 1989 create criminal and civil liability where a duty holder fails to act on identified risks. Senior managers can face personal prosecution; the organisation can face unlimited fines and reputational harm."
            },
            {
              number: 11,
              prompt: "A C3 observation alone makes the EICR overall:",
              options: {
                A: "Unsatisfactory",
                B: "Satisfactory with improvements recommended",
                C: "Conditional",
                D: "Pending"
              },
              answer: "B",
              explanation: "C3 alone keeps the report Satisfactory. The duty holder is not legally compelled to act in a regulated timeframe (per PRS Regs / EAWR), but should plan and budget the improvements."
            },
            {
              number: 12,
              prompt: "An EICR is Unsatisfactory and the duty holder asks the inspector for a quick top-up retest after remedial works. The inspector should:",
              options: {
                A: "Refuse",
                B: "Carry out a re-inspection of the remedied items and either issue a written confirmation per PRS Regs or update / re-issue the report as appropriate",
                C: "Sign a clean report without inspection",
                D: "Charge double"
              },
              answer: "B",
              explanation: "A re-inspection focused on the remedied items, with appropriate testing, can be issued as a written confirmation under PRS Regs or as an updated EICR. The inspector inspects what they sign for."
            },
            {
              number: 13,
              prompt: "A C1 observation always makes the EICR overall:",
              options: {
                A: "Satisfactory because it was made safe",
                B: "Unsatisfactory — the original observed condition is what the report records",
                C: "Conditional",
                D: "Pending"
              },
              answer: "B",
              explanation: "Make-safe is a remedy, not a coding override. The EICR records the condition observed; once a C1 has been observed, the report is Unsatisfactory and the duty holder's regulatory obligations flow from that result."
            },
            {
              number: 14,
              prompt: "On a non-domestic premises an EICR with two C2 items is issued. The duty holder's first risk-based step should be:",
              options: {
                A: "Postpone all action",
                B: "Identify which C2 has the higher residual risk and address it first while planning the second; document the prioritisation rationale",
                C: "Replace the entire installation",
                D: "Notify the DNO"
              },
              answer: "B",
              explanation: "Risk-based prioritisation is the standard EAWR 1989 approach. The duty holder ranks observations by likelihood and severity, addresses the worst first, and keeps a documented trail of decisions and actions taken."
            },
            {
              number: 15,
              prompt: "A landlord receives an EICR Satisfactory result with three C3s. They are required to:",
              options: {
                A: "Remediate within 28 days under PRS Regs 2020",
                B: "Plan and execute the C3 improvements over time; PRS Regs do not impose a strict timeframe for C3-only outcomes",
                C: "Issue a new tenancy",
                D: "Notify the local authority"
              },
              answer: "B",
              explanation: "C3-only EICRs are Satisfactory. PRS Regs 2020 don't impose the 28-day clock for C3 improvements; the landlord plans them as good practice and budgets accordingly."
            },
            {
              number: 16,
              prompt: "An inspector finds a C1 on a school's plant room circuit and isolates it. The school's premises manager wants the inspector to leave the keys to the isolation. The correct action is:",
              options: {
                A: "Hand over the keys",
                B: "Retain a record of who has the isolation key, ensure the circuit cannot be re-energised by the duty holder until permanent remediation is verified, and document the conversation",
                C: "Remove the isolation entirely",
                D: "Re-energise after the inspector leaves"
              },
              answer: "B",
              explanation: "Lock-out / tag-out arrangements protect both the inspector and the duty holder. The inspector ensures the isolation is robust and the re-energisation path requires verified permanent remediation, not informal premises-manager discretion."
            },
            {
              number: 17,
              prompt: "Under PRS Regs 2020, the maximum financial penalty per breach is:",
              options: {
                A: "£500",
                B: "£5,000",
                C: "£30,000",
                D: "£100,000"
              },
              answer: "C",
              explanation: "PRS Regs 2020 — financial penalties up to £30,000 per breach, with multiple breaches potentially compounded. Local authorities have discretion based on severity, history and cooperation."
            },
            {
              number: 18,
              prompt: "An inspector who suspects fraudulent prior certification (e.g. dates altered, signatures forged) on a previous EICR should:",
              options: {
                A: "Ignore it",
                B: "Document the concern, decline to rely on the suspect document, and report the concern through their professional body / scheme provider where appropriate",
                C: "Re-issue the suspect document",
                D: "Confront the previous inspector"
              },
              answer: "B",
              explanation: "Fraud concerns must be documented and escalated. The inspector cannot rely on fabricated evidence; their professional body has reporting routes. The local authority may need to be informed if it affects PRS compliance."
            },
            {
              number: 19,
              prompt: "On a TT-supplied dwelling, the inspector finds an inoperative RCD. Given TT systems rely on RCDs for fault protection, the appropriate code and on-site action is:",
              options: {
                A: "C3, no action needed",
                B: "C1 typically — fault protection is essentially absent; isolate the circuit and notify the duty holder same day",
                C: "C2, no action needed",
                D: "FI only"
              },
              answer: "B",
              explanation: "TT systems depend on RCDs because earth electrode loop impedance is too high for an MCB to clear faults in time. An inoperative RCD on a TT system means no functional fault protection — typically C1 with on-site make-safe and same-day notification."
            },
            {
              number: 20,
              prompt: "An inspector finds an Unsatisfactory result on a school. The duty holder under HSWA 1974 must act in a timeframe that is:",
              options: {
                A: "Always 28 days as for PRS dwellings",
                B: "Reasonable and risk-based per HSWA / EAWR — the duty holder must act 'so far as is reasonably practicable' and document the rationale",
                C: "Whenever convenient",
                D: "12 months"
              },
              answer: "B",
              explanation: "HSWA 1974 / EAWR 1989 don't have the 28-day clock. The duty holder applies risk-based prioritisation and acts 'so far as is reasonably practicable'. Documentation of decisions and actions is essential to demonstrate compliance."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "An EICR with no C1, C2, C3 or FI observations is overall:",
              options: {
                A: "Unsatisfactory",
                B: "Satisfactory",
                C: "Conditional",
                D: "Pending"
              },
              answer: "B",
              explanation: "An EICR with zero observations is straightforwardly Satisfactory — the schedules support that result, the inspector signs and dates the report, and the next-inspection interval is set."
            },
            {
              number: 2,
              prompt: "An EICR with one C3 only is overall:",
              options: {
                A: "Unsatisfactory",
                B: "Satisfactory with improvement recommended",
                C: "Conditional",
                D: "Pending"
              },
              answer: "B",
              explanation: "C3 alone keeps the report Satisfactory. The duty holder is encouraged to plan the improvement but has no specific 28-day-style obligation under PRS Regs."
            },
            {
              number: 3,
              prompt: "An inspector finds a C1 in a busy retail unit. The customer-facing area cannot be closed. The inspector should:",
              options: {
                A: "Skip the make-safe to avoid disruption",
                B: "Isolate the affected circuit and label it; agree with the duty holder how to manage customer access until permanent remediation is in place",
                C: "Switch off the entire shop",
                D: "Walk away"
              },
              answer: "B",
              explanation: "Isolating the affected circuit only is targeted make-safe. The duty holder manages the customer-facing impact (e.g. screening off the affected area, signage). The inspector documents the conversation and the actions taken."
            },
            {
              number: 4,
              prompt: "Following an Unsatisfactory EICR on a privately rented dwelling, the landlord must supply written confirmation of remedial work to the tenant:",
              options: {
                A: "Within 7 days of completion",
                B: "Within 28 days of completion",
                C: "On request only",
                D: "Within 12 months"
              },
              answer: "B",
              explanation: "PRS Regs 2020: tenant within 28 days of completion of remedial works; local authority within 7 days of any written request. Landlords usually keep a single dossier (EICR + remedial confirmation + invoices) to make compliance easy to demonstrate."
            },
            {
              number: 5,
              prompt: "An inspector who is also the duty holder for the same installation should:",
              options: {
                A: "Carry on as normal",
                B: "Recognise the conflict of interest and either decline the inspection or arrange independent verification of their findings",
                C: "Ignore the conflict",
                D: "Issue a Minor Works Certificate"
              },
              answer: "B",
              explanation: "Conflicts of interest undermine the report's credibility. Best practice is to engage an independent inspector; if that's not possible, the inspector / duty holder must declare the conflict and, where appropriate, have the report independently reviewed."
            },
            {
              number: 6,
              prompt: "A landlord supplies the local authority with a copy of the EICR within the required time but ignores the C2 observations beyond 28 days. The local authority can:",
              options: {
                A: "Take no action",
                B: "Issue a remedial notice and impose financial penalties up to £30,000 per breach",
                C: "Issue a public reprimand only",
                D: "Force the landlord to demolish the property"
              },
              answer: "B",
              explanation: "Compliance is the whole package — supplying the report and acting on Unsatisfactory findings. Failure on the action side is a separate breach with its own enforcement route, regardless of paperwork compliance."
            },
            {
              number: 7,
              prompt: "Under EAWR 1989, the duty to inspect and maintain in non-domestic premises:",
              options: {
                A: "Falls on the inspector",
                B: "Falls on the duty holder, who must arrange suitable inspection and maintenance regimes 'so far as is reasonably practicable'",
                C: "Falls on the DNO",
                D: "Is voluntary"
              },
              answer: "B",
              explanation: "EAWR 1989 places the legal duty on the employer / duty holder to ensure systems are constructed, maintained and used safely. Inspection regimes (EICRs at appropriate intervals) form part of demonstrating compliance."
            },
            {
              number: 8,
              prompt: "An EICR observation that is downgraded by the inspector from C2 to C3 to keep the report Satisfactory is:",
              options: {
                A: "Acceptable if the inspector explains why",
                B: "Professional misconduct — codes reflect observed condition, not desired outcome",
                C: "Acceptable if the duty holder agrees",
                D: "Acceptable if a regulatory body asks for it"
              },
              answer: "B",
              explanation: "Coding decisions are professional judgements based on BPG4. Downgrading to please the client is misconduct and exposes the inspector to civil and regulatory sanction. The right answer is to code accurately and let the duty holder act."
            },
            {
              number: 9,
              prompt: "An EICR is issued on a non-domestic premises with one FI. The duty holder under EAWR 1989 should:",
              options: {
                A: "Wait 5 years",
                B: "Arrange the further investigation without undue delay; the EICR is Unsatisfactory until the FI is resolved",
                C: "Treat the FI as advisory",
                D: "Issue a new EICR"
              },
              answer: "B",
              explanation: "FI = Unsatisfactory. The duty holder must arrange the investigation, take any further action it indicates, and obtain confirmation that the matter is resolved. Until then, the installation is in an unverified state."
            },
            {
              number: 10,
              prompt: "On a domestic EICR, the inspector advises the tenant of a C1 directly because the landlord cannot be reached. The inspector should:",
              options: {
                A: "Skip the tenant",
                B: "Inform the tenant of the immediate safety issue and the make-safe action, document the inability to reach the landlord, and continue trying to notify the duty holder",
                C: "Give the tenant the report",
                D: "Refuse to make safe"
              },
              answer: "B",
              explanation: "The inspector's primary contact is the duty holder, but where the tenant's safety is at risk and the landlord is unreachable, the inspector ensures the tenant understands the immediate safety position and the make-safe action taken. Documentation of attempts to reach the landlord is essential."
            },
            {
              number: 11,
              prompt: "An inspector finds a C2 and the duty holder asks 'Can I just leave it for next time?'. The correct response is:",
              options: {
                A: "Yes, it can wait",
                B: "No — the EICR is Unsatisfactory, and the duty holder's obligations under PRS Regs / EAWR / HSWA require remediation in a defined or risk-based timeframe",
                C: "Maybe, depending on the C2",
                D: "Yes if the next inspection is soon"
              },
              answer: "B",
              explanation: "C2 doesn't have a 'next time' option. The Unsatisfactory result triggers the duty holder's regulatory obligation to act — 28 days for PRS dwellings, risk-based for non-domestic premises under HSWA / EAWR."
            },
            {
              number: 12,
              prompt: "A landlord obtains an EICR result they don't agree with and asks the inspector to alter it. The inspector should:",
              options: {
                A: "Make the alteration",
                B: "Decline; the inspector's signature is a professional declaration. If the landlord wants a second opinion they can engage a different inspector",
                C: "Issue a Minor Works Certificate",
                D: "Re-inspect for free"
              },
              answer: "B",
              explanation: "Each EICR is the inspector's own work. Disagreement is resolved by a fresh inspection by another qualified inspector, not by altering the original report. The original inspector keeps their report intact."
            },
            {
              number: 13,
              prompt: "Under PRS Regs 2020, an Unsatisfactory EICR's 28-day clock starts from:",
              options: {
                A: "The date the landlord receives the report",
                B: "The date of the inspection (i.e. when the inspector was on site)",
                C: "The next tenancy date",
                D: "The end of the financial year"
              },
              answer: "B",
              explanation: "The clock starts on the date of the inspection, not the date the report is delivered. Landlords should not rely on slow report delivery to extend the clock — the inspection date is what counts."
            },
            {
              number: 14,
              prompt: "An inspector who agrees to issue a Satisfactory EICR after a known C2 has been remediated must:",
              options: {
                A: "Issue the new report without re-inspection",
                B: "Re-inspect and re-test the remedied items, confirm the C2 has been resolved, and reissue / update the EICR or written confirmation accordingly",
                C: "Trust the duty holder's word",
                D: "Charge the duty holder for a new full EICR"
              },
              answer: "B",
              explanation: "Re-issued / updated reports must be backed by re-inspection of the items that changed. The inspector signs for what they have actually verified — written confirmation of remedial works requires actual verification."
            },
            {
              number: 15,
              prompt: "A C2 on a hospital theatre circuit cannot be remedied without a planned-shutdown window of three months. The duty holder must:",
              options: {
                A: "Ignore the C2 because it's hard to fix",
                B: "Document risk-based interim controls (e.g. additional monitoring, restricted use), plan and book the shutdown, and keep the EICR record open with progress notes",
                C: "Re-issue an EICR Satisfactory",
                D: "Stop using the theatre indefinitely"
              },
              answer: "B",
              explanation: "Hospital duty holders must demonstrate risk-based action under HSWA / EAWR. Interim controls reduce residual risk while the planned shutdown is arranged. The EICR remains Unsatisfactory and the trail of evidence supports the duty holder's compliance position."
            },
            {
              number: 16,
              prompt: "An EICR is Unsatisfactory because of a single FI on a privately rented dwelling. The landlord must:",
              options: {
                A: "Treat the FI as a C3",
                B: "Arrange the further investigation within 28 days and obtain written confirmation that any defect found has been resolved",
                C: "Wait until the next EICR",
                D: "Issue a new tenancy"
              },
              answer: "B",
              explanation: "FI is treated like C1/C2 for outcome purposes — the report is Unsatisfactory and the 28-day clock applies. The landlord arranges the investigation, addresses anything found, and produces written confirmation of resolution."
            },
            {
              number: 17,
              prompt: "An inspector finds a C1 in a property they were not contracted to inspect (e.g. an adjacent shop unit during an EICR on the next-door unit). The inspector should:",
              options: {
                A: "Walk away",
                B: "Document the observation, ensure immediate make-safe of the danger if accessible, and notify the duty holder of the affected unit and the contracting client",
                C: "Tell only the contracting client",
                D: "Refuse to make safe"
              },
              answer: "B",
              explanation: "Knowledge of immediate danger triggers a duty to act regardless of scope. The inspector makes safe within their reach, documents the observation, and notifies the relevant duty holder. Walking away from a known C1 is not an option even outside the inspection scope."
            },
            {
              number: 18,
              prompt: "On a non-domestic premises, the inspector confirms a C2 and the duty holder commits to remediation 'within a couple of weeks' but signs no formal record. The inspector should:",
              options: {
                A: "Trust the verbal commitment",
                B: "Record the commitment in the EICR / cover letter so there is a written record of the duty holder's expressed intent and the date",
                C: "Cancel the EICR",
                D: "Issue a Minor Works Certificate"
              },
              answer: "B",
              explanation: "Verbal commitments are easy to forget in litigation. A written record (in the EICR cover letter, follow-up email or signed cover sheet) protects both parties and supports the duty holder's compliance trail."
            },
            {
              number: 19,
              prompt: "Following an Unsatisfactory EICR on a domestic dwelling, the landlord can demonstrate compliance by:",
              options: {
                A: "Producing the EICR alone",
                B: "Producing the EICR plus written confirmation from a qualified person that the remedial / further investigative work has been done within 28 days",
                C: "Producing an invoice only",
                D: "Producing a verbal account"
              },
              answer: "B",
              explanation: "Compliance documentation = original EICR + qualified person's written confirmation. Invoices are not enough; the confirmation needs to be from someone competent (typically a registered electrician) and must address the specific Unsatisfactory observations."
            },
            {
              number: 20,
              prompt: "An EICR issued on a non-domestic premises whose duty holder also runs other premises in the same chain should be:",
              options: {
                A: "Copied to all premises in the chain",
                B: "Treated as relating only to the inspected premises; other premises require their own inspections",
                C: "Used as evidence the others are compliant",
                D: "Sent to the DNO"
              },
              answer: "B",
              explanation: "Each EICR covers a specific installation. A chain duty holder needs separate inspections for each site to demonstrate compliance with HSWA / EAWR / PRS as applicable. Pattern findings across the chain may inform group-wide remedial planning, however."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "An EICR is Satisfactory with five C3s on an office. The duty holder under HSWA 1974 / EAWR 1989 should:",
              options: {
                A: "Ignore the C3s",
                B: "Plan the C3 improvements over time as a maintenance / capital programme; document the plan",
                C: "Replace the entire installation",
                D: "Issue a new EICR"
              },
              answer: "B",
              explanation: "C3s are improvement recommendations. Sensible duty holders capture them in a planned maintenance programme so the installation steadily improves between EICRs. HSWA / EAWR don't impose a strict timeframe but expect demonstrable management of identified risks."
            },
            {
              number: 2,
              prompt: "An inspector identifies a C1 at a hospital and the duty holder denies the issue and asks the inspector to leave site without making safe. The inspector should:",
              options: {
                A: "Comply",
                B: "Record the conversation, isolate the affected circuit before leaving (where they have access), notify the duty holder in writing the same day, and consider escalation through the inspector's professional / scheme provider",
                C: "Forget the issue",
                D: "Re-energise the affected circuit"
              },
              answer: "B",
              explanation: "Make-safe is not optional. The inspector documents the duty holder's response, makes safe within their access rights, sends written notification, and escalates through scheme providers if necessary. Walking away from a known C1 because a duty holder is unhappy is not professionally defensible."
            },
            {
              number: 3,
              prompt: "On a privately rented dwelling, where the EICR is Satisfactory but recommends the next inspection in 3 years rather than the maximum 5, the landlord should:",
              options: {
                A: "Use 5 years anyway",
                B: "Comply with the inspector's 3-year recommendation; PRS Regs reference the inspector's recommended interval",
                C: "Issue a new tenancy",
                D: "Wait for the local authority"
              },
              answer: "B",
              explanation: "The inspector's recommended interval is the upper limit. The landlord follows it; the 5-year regulatory maximum is the floor in absence of a shorter recommendation. Inspectors pull intervals shorter when condition justifies — duty holders honour the recommendation."
            },
            {
              number: 4,
              prompt: "An inspector who deliberately misrecords a C1 as a C3 to keep a customer happy is:",
              options: {
                A: "Acting professionally",
                B: "Committing professional misconduct, exposing themselves to civil and regulatory liability if injury results",
                C: "Acting in the duty holder's best interests",
                D: "Acceptable practice"
              },
              answer: "B",
              explanation: "Mis-coding is professional misconduct. If injury follows, the inspector faces personal civil and potential criminal liability. Insurers and scheme providers may also withdraw cover / accreditation on discovery."
            },
            {
              number: 5,
              prompt: "A landlord asks the inspector for a quick re-issue of an Unsatisfactory EICR with the C2 'just removed'. The inspector should:",
              options: {
                A: "Comply",
                B: "Refuse — the C2 reflects the observed condition. Re-issue follows verified remedy, not editing the original report",
                C: "Re-mark as C3",
                D: "Cancel the report"
              },
              answer: "B",
              explanation: "Reports are not editable artefacts of a previous inspection. The verified-remedy route is: remediate, re-inspect, written confirmation. Editing the original report retroactively would be falsification."
            },
            {
              number: 6,
              prompt: "Under PRS Regs 2020, a landlord who fails to provide an EICR to a new tenant before they move in:",
              options: {
                A: "Is fully compliant",
                B: "Is in breach of the regulations and exposed to local authority enforcement / penalty",
                C: "Has 28 days to fix it",
                D: "Has no obligation if the tenant doesn't ask"
              },
              answer: "B",
              explanation: "PRS Regs 2020: new tenants must receive the EICR before move-in. Failure is a discrete breach attracting the same enforcement / penalty regime as failing to remediate Unsatisfactory findings."
            },
            {
              number: 7,
              prompt: "An EICR with one C2 and four C3s on a non-domestic premises means the duty holder must:",
              options: {
                A: "Action all five within 28 days",
                B: "Address the C2 promptly per HSWA / EAWR risk-based principles; the C3s are improvement recommendations to plan over time",
                C: "Ignore the report",
                D: "Replace the entire installation"
              },
              answer: "B",
              explanation: "The C2 drives the Unsatisfactory result and demands prompt action. The C3s do not have a regulatory clock but should be planned. Duty holders document their decisions and timelines to demonstrate compliance with EAWR / HSWA."
            },
            {
              number: 8,
              prompt: "An inspector finds a C2 on the same day as a follow-up inspection scheduled for next week. The C2 should be:",
              options: {
                A: "Combined with next week's findings",
                B: "Recorded immediately on this report; the duty holder's clock starts from this inspection date",
                C: "Skipped",
                D: "Coded as C3"
              },
              answer: "B",
              explanation: "Each inspection's findings stand on the date of that inspection. The C2 enters this EICR, the report is Unsatisfactory, and the remedy clock runs from this inspection date. Future inspections are separate snapshots."
            },
            {
              number: 9,
              prompt: "On a domestic EICR, an FI is recorded for an unverified low IR reading. The landlord under PRS Regs 2020 must:",
              options: {
                A: "Treat it as a C3",
                B: "Arrange further investigation within 28 days, address any defect found, and obtain written confirmation",
                C: "Wait until the next inspection",
                D: "Cancel the tenancy"
              },
              answer: "B",
              explanation: "FI counts as Unsatisfactory. The 28-day clock applies. The landlord engages a qualified person to do the investigation, addresses any defect, and produces the written confirmation."
            },
            {
              number: 10,
              prompt: "A non-domestic duty holder who relies on an EICR with multiple Operational Limitations (large parts of the installation excluded) is:",
              options: {
                A: "Fully covered by the EICR",
                B: "Aware of an evidence gap — the Operational Limitations explicitly say what was not inspected; the duty holder must arrange a separate plan to cover those areas",
                C: "Free of regulatory duty for limited areas",
                D: "Required to issue a new EICR weekly"
              },
              answer: "B",
              explanation: "Limitations carve scope out of the inspection. The duty holder retains the legal duty under HSWA / EAWR to maintain safety in the limited areas; they must plan a route to inspect them (out-of-hours, planned shutdown) so the gap is closed."
            },
            {
              number: 11,
              prompt: "An EICR on a privately rented dwelling has been issued with a 'Satisfactory' result and three C3s. The landlord supplies the EICR to the tenant within 28 days. The compliance position is:",
              options: {
                A: "Non-compliant",
                B: "Compliant — Satisfactory result, EICR delivered within timeframe; C3s are improvements to plan but no specific PRS clock",
                C: "Conditional",
                D: "Pending"
              },
              answer: "B",
              explanation: "Satisfactory + EICR delivered in 28 days = compliant. The landlord can plan the C3 improvements at sensible intervals and isn't subject to the 28-day remediation clock that applies to Unsatisfactory results."
            },
            {
              number: 12,
              prompt: "A landlord challenges an inspector's C2 finding. The inspector's response should be:",
              options: {
                A: "Reduce the code immediately",
                B: "Stand behind the professional judgement, explain the BPG4 reasoning and the protective measure concerned, and offer the landlord a second opinion through another qualified inspector",
                C: "Withdraw the report",
                D: "Refuse to discuss"
              },
              answer: "B",
              explanation: "Codes are professional judgements. The inspector explains their reasoning (which protective measure is impaired, why current edition would expect different) and welcomes a second opinion. Reducing the code under pressure is misconduct."
            },
            {
              number: 13,
              prompt: "An inspector identifies a C1 in an unoccupied retail unit being prepared for fit-out. The duty holder is the landlord, not the incoming tenant. The inspector should:",
              options: {
                A: "Wait for the tenant to move in",
                B: "Notify the landlord (current duty holder) immediately, make safe, and ensure the C1 is documented before the new tenant takes occupation",
                C: "Skip the make-safe",
                D: "Forget the issue"
              },
              answer: "B",
              explanation: "The current duty holder (landlord) gets notified and the make-safe takes effect now. The incoming tenant inherits a safe installation; the EICR with the documented C1 (and its remediation) becomes part of the property's compliance record."
            },
            {
              number: 14,
              prompt: "An inspector finds a duty holder has hidden previous EICRs that showed C2s. The current EICR records the same C2s persisting. The inspector should:",
              options: {
                A: "Ignore the history",
                B: "Document the persistence of the C2 observations on the current report and note that prior reports have not been acted upon — the duty holder's regulatory exposure is heightened",
                C: "Refuse to issue the EICR",
                D: "Tip off the local authority"
              },
              answer: "B",
              explanation: "The current EICR records what the inspector currently sees. Persistence of unaddressed observations strengthens the case for action; documenting that earlier reports went unactioned (where the inspector has evidence) is a fair professional record. Decisions about local authority engagement sit with the duty holder."
            },
            {
              number: 15,
              prompt: "An EICR's 'Outcome' field is populated based on:",
              options: {
                A: "The number of observations",
                B: "Whether any C1, C2 or FI is present (Unsatisfactory) versus none of those (Satisfactory)",
                C: "The premises type",
                D: "Whether the inspector signs"
              },
              answer: "B",
              explanation: "Binary outcome logic — drives the duty holder's regulatory action. C3 quantity does not change the outcome. Inspectors should never blur this — it is the cleanest, most useful single field on the report."
            },
            {
              number: 16,
              prompt: "An EICR Satisfactory result on a domestic dwelling with C3s does not relieve the landlord of:",
              options: {
                A: "PRS Regs 2020 obligations",
                B: "The general obligation to maintain the installation in safe condition (per the tenancy and consumer protection law); C3s indicate areas where future investment is sensible",
                C: "Any obligation to act",
                D: "The need to renew the tenancy"
              },
              answer: "B",
              explanation: "PRS Regs 2020 + general consumer protection / tenancy law expect the dwelling to be safe over time. C3s flag where the installation is below current expectations; sensible landlords plan the investment to keep the dwelling current."
            },
            {
              number: 17,
              prompt: "Under EAWR 1989, an inspector who provides clearly negligent advice that leads to injury can:",
              options: {
                A: "Hide behind the duty holder",
                B: "Be personally pursued under HSWA / EAWR, civil law and professional indemnity insurance",
                C: "Disclaim liability via a 'best endeavours' clause",
                D: "Refuse to comment"
              },
              answer: "B",
              explanation: "Clear negligence opens personal civil and potentially criminal liability. Standard professional indemnity insurance covers civil claims; criminal prosecution is rare but possible for gross failures. Documentation, BPG4 alignment and care reduce exposure."
            },
            {
              number: 18,
              prompt: "An inspector's commentary on an EICR mentions that 'all observations should be acted on within 12 months'. This statement is:",
              options: {
                A: "Correct for all observations",
                B: "Misleading — C1, C2 and FI demand prompt or 28-day action under PRS Regs / risk-based action under EAWR; only C3 is genuinely a 'plan over time' category",
                C: "A safe default",
                D: "Recommended by BPG4"
              },
              answer: "B",
              explanation: "The 12-month blanket statement obscures the urgency of C1/C2/FI. The inspector's commentary should distinguish urgency by code — duty holders need clear direction, not a flat timescale."
            },
            {
              number: 19,
              prompt: "An EICR Satisfactory result with no observations does not relieve the duty holder of:",
              options: {
                A: "Anything — the report covers everything",
                B: "Future maintenance, future inspection cycles, and the obligation to act on conditions that develop after the inspection date",
                C: "The need to display the report",
                D: "PAT testing"
              },
              answer: "B",
              explanation: "An EICR is a snapshot. The duty holder must continue to maintain, inspect at the recommended interval, and act on any conditions that develop. The Satisfactory result is not a 5-year holiday."
            },
            {
              number: 20,
              prompt: "An inspector who refuses to make safe a known C1 because the duty holder hasn't paid the invoice is:",
              options: {
                A: "Acting reasonably",
                B: "Acting recklessly — payment terms do not absolve a duty to make safe known immediate danger",
                C: "Acting under contract",
                D: "Acting under HSWA"
              },
              answer: "B",
              explanation: "A known C1 must be made safe regardless of commercial dispute. Payment recovery is a separate civil matter; the safety duty is paramount. Walking away from a known C1 over an invoice is reckless and indefensible."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "An EICR is Unsatisfactory and the duty holder has actioned all C2 items but one C1 remains because the part needed is on backorder. The inspector should:",
              options: {
                A: "Sign off the C1 anyway",
                B: "Confirm interim isolation/make-safe is intact, document the position, and issue an updated record only when the part is fitted and tested",
                C: "Re-classify as C3",
                D: "Ignore the C1"
              },
              answer: "B",
              explanation: "C1 stays C1 until the danger is permanently removed. Interim controls (isolation, labelling, restricted access) are the bridge; the inspector signs off the closure only after permanent fix and verification."
            },
            {
              number: 2,
              prompt: "A landlord has the EICR but cannot find a 'qualified person' for the remedial work within 28 days. They should:",
              options: {
                A: "Ignore the deadline",
                B: "Make best endeavours, document attempts, contact alternative qualified persons promptly, and supply the local authority with progress evidence on request — the legal duty remains",
                C: "Issue an extension to themselves",
                D: "Tell the tenant to wait indefinitely"
              },
              answer: "B",
              explanation: "PRS Regs 2020 don't have a formal extension mechanism. Local authorities consider best-endeavours evidence on enforcement; the duty holder needs to demonstrate genuine attempts to comply, not silent inaction."
            },
            {
              number: 3,
              prompt: "An EICR's '14C' field — Recommended Date for Next Inspection — is set by:",
              options: {
                A: "The duty holder",
                B: "The inspector, based on the type of premises, observed condition, environment and BPG4 / GN3 guidance",
                C: "The DNO",
                D: "Building Control"
              },
              answer: "B",
              explanation: "The next-inspection date is the inspector's professional call. BPG4 / GN3 give defaults; observed condition, environment and use justify pulling the interval shorter where appropriate."
            },
            {
              number: 4,
              prompt: "Under HSWA 1974, senior managers of a non-domestic duty holder who knowingly ignore C2 findings can be:",
              options: {
                A: "Personally prosecuted under section 37 (corporate offences) if the failure was attributable to them",
                B: "Promoted",
                C: "Excused",
                D: "Indemnified by their company"
              },
              answer: "A",
              explanation: "HSWA section 37: where a corporate offence is attributable to the consent / connivance / neglect of a director or senior manager, that individual can be personally prosecuted in addition to the corporate body. Ignoring known safety findings risks exactly this."
            },
            {
              number: 5,
              prompt: "An inspector signs off on a written confirmation under PRS Regs 2020 stating that remedial works addressing the original C1/C2/FI items have been completed. They must:",
              options: {
                A: "Sign without inspection",
                B: "Have personally re-inspected and re-tested the affected items, verified they comply with BS 7671 / safety expectations, and recorded their findings",
                C: "Trust the contractor's word",
                D: "Refuse to sign"
              },
              answer: "B",
              explanation: "Written confirmation is a professional declaration. The signer must have verified the remedial works personally — re-inspection, re-test, documented evidence. Without that, signing is misconduct."
            },
            {
              number: 6,
              prompt: "An EICR Unsatisfactory with one C2 has been remediated by a different electrician. The original inspector is asked to issue the written confirmation. They should:",
              options: {
                A: "Sign without re-inspection",
                B: "Re-inspect the remedied item, verify compliance, and either sign or refuse based on the verified result",
                C: "Trust the second electrician's certificate",
                D: "Refuse to sign on principle"
              },
              answer: "B",
              explanation: "Written confirmation is what the signer can verify. Re-inspection of the remedied item and confirmation of compliance is the basis for signing. Trust without inspection is professional misconduct."
            },
            {
              number: 7,
              prompt: "An EICR is Unsatisfactory with one FI. Investigation reveals no actual defect (the suspect reading was normal once the cause was identified). The duty holder must:",
              options: {
                A: "Action a non-existent defect",
                B: "Obtain written confirmation that the further investigation found no defect and is documented as such; the original EICR should be supplemented to show the closure",
                C: "Issue a fresh EICR",
                D: "Pay a penalty"
              },
              answer: "B",
              explanation: "FI investigations sometimes resolve cleanly. The qualified person produces written confirmation explaining what was investigated and why no defect was found. This closes the regulatory loop without further action being required."
            },
            {
              number: 8,
              prompt: "An EICR's Unsatisfactory result is supplied to a new tenant before move-in. The landlord must also:",
              options: {
                A: "Cancel the tenancy",
                B: "Complete remedial works within 28 days of the inspection (or sooner if the report specifies) and supply written confirmation to the tenant within 28 days of completion",
                C: "Issue a verbal warning",
                D: "Wait for the tenant to act"
              },
              answer: "B",
              explanation: "PRS Regs 2020: supply EICR before move-in, remediate within 28 days of inspection, written confirmation within 28 days of completion. The new tenant gets both the original EICR and the remediation evidence."
            },
            {
              number: 9,
              prompt: "An inspector finds an immediate danger (C1) in a school during the half-term holiday with no school staff on site. The inspector should:",
              options: {
                A: "Leave it for the school's return",
                B: "Make safe (isolate the affected circuit), label, secure access, and notify the school's duty holder via emergency contact and in writing the same day",
                C: "Refuse to act",
                D: "Switch off the entire school"
              },
              answer: "B",
              explanation: "Make-safe doesn't depend on the duty holder being physically present. Use the emergency contact, document the action, send written notification the same day. The C1 stays in the report regardless of how convenient the timing is for the school."
            },
            {
              number: 10,
              prompt: "An inspector who fails to disclose a known conflict of interest (e.g. the duty holder is a close family member) and issues a Satisfactory EICR is:",
              options: {
                A: "Acting professionally",
                B: "Committing professional misconduct that could invalidate the report and expose them to civil / regulatory liability",
                C: "Acceptable practice",
                D: "Required to disclose only on request"
              },
              answer: "B",
              explanation: "Conflicts undermine the report's credibility. Best practice is to declare the conflict and either decline the inspection or have the report independently reviewed. Hidden conflicts are professional misconduct."
            },
            {
              number: 11,
              prompt: "On a privately rented dwelling, the landlord's PRS Regs 2020 obligations apply:",
              options: {
                A: "Only at the start of a tenancy",
                B: "Throughout the tenancy — EICR at least every 5 years (or sooner per the inspector's recommendation), action on Unsatisfactory findings, supply to tenants and local authority on request",
                C: "Only when an inspection is undertaken",
                D: "Only on request"
              },
              answer: "B",
              explanation: "PRS Regs 2020 apply continuously: maintain the cycle, act on findings, retain evidence, supply on request. The 5-year maximum is one element of an ongoing duty."
            },
            {
              number: 12,
              prompt: "A duty holder asks the inspector for a Satisfactory EICR after a quick visual walk-through (no testing). The inspector should:",
              options: {
                A: "Comply",
                B: "Refuse — an EICR requires inspection and testing per BS 7671 and BPG4; a quick visual is not a valid EICR",
                C: "Issue a Minor Works Certificate",
                D: "Charge less"
              },
              answer: "B",
              explanation: "An EICR without testing is not an EICR. Visual-only checks may be a separate informal report, but the BS 7671 model EICR requires testing — Zs, RCD operation, IR, polarity, continuity. The inspector cannot issue an EICR from a walk-through."
            },
            {
              number: 13,
              prompt: "A non-domestic duty holder's documented response to an Unsatisfactory EICR should include:",
              options: {
                A: "Nothing",
                B: "A risk-based remedial plan, target dates, evidence of work done, and post-remedial verification — kept on file for HSE / EAWR audit",
                C: "A simple email",
                D: "An invoice"
              },
              answer: "B",
              explanation: "Compliance with HSWA / EAWR demands a documented trail. Plan + execution + verification + records is the standard package. Auditors will ask for it; insurers will want it; courts will rely on it."
            },
            {
              number: 14,
              prompt: "An inspector finds a C2 on an extraneous-conductive-part bond. The duty holder asks 'Why is this dangerous when the building has worked fine for 30 years?'. The inspector should:",
              options: {
                A: "Cave and code C3",
                B: "Explain that the bond is a fault-condition protective measure — under fault, an unbonded extraneous-conductive-part can become live; 30 years of normal operation is not evidence of fault behaviour",
                C: "Refuse to discuss",
                D: "Withdraw the report"
              },
              answer: "B",
              explanation: "Most protective measures only matter under fault — they don't show in normal operation. The inspector explains the protective principle, the BPG4 reasoning and stands behind the C2. 'It's been fine until now' is not a coding argument."
            },
            {
              number: 15,
              prompt: "An EICR's 'Persons consulted' field can usefully record:",
              options: {
                A: "Nothing",
                B: "Names and roles of duty-holder representatives, contractors and others whose input shaped the inspection (e.g. agreed limitations, operational constraints)",
                C: "Tenant phone numbers",
                D: "DNO contact"
              },
              answer: "B",
              explanation: "Recording who was consulted helps trace decisions about scope, limitations and safe-working windows. It also supports the duty holder's compliance evidence — useful in any future dispute about what was agreed."
            },
            {
              number: 16,
              prompt: "An inspector finds clear evidence of fire damage on a circuit (charred sheath, melted accessory). The most appropriate code is:",
              options: {
                A: "C3",
                B: "C2 if the damage is contained and stable; C1 if there is a continuing fire risk or exposed live parts",
                C: "C1 always",
                D: "Either B or C depending on the inspector's site assessment"
              },
              answer: "D",
              explanation: "Fire damage demands judgement. Stable, cooled, no exposed live parts can be C2 with prompt remedial action. Active heat, smoke, exposed live parts is C1 with on-site make-safe and same-day notification."
            },
            {
              number: 17,
              prompt: "On a non-domestic premises with multiple Unsatisfactory items, the duty holder may benefit from:",
              options: {
                A: "Ignoring the report",
                B: "Engaging the original inspector or another qualified person to scope a remedial-works package, prioritise by risk, and provide written confirmation as items are completed",
                C: "A new EICR each week",
                D: "Reissuing the previous report"
              },
              answer: "B",
              explanation: "Larger remedial-works packages benefit from professional project management. The original inspector or another qualified person can scope, prioritise, deliver and verify — producing a clean compliance trail at the end."
            },
            {
              number: 18,
              prompt: "An EICR observation that is correctly coded but disputed by the duty holder should be:",
              options: {
                A: "Removed",
                B: "Defended by the inspector with reference to BPG4 / current edition; if the dispute persists, a second-opinion EICR by another qualified inspector is the resolution route",
                C: "Reduced under pressure",
                D: "Replaced with a verbal explanation"
              },
              answer: "B",
              explanation: "Disputes are resolved by professional dialogue or a second opinion, not by editing reports. The inspector stands behind their judgement; the duty holder is free to engage another qualified person if they want a different view."
            },
            {
              number: 19,
              prompt: "On a privately rented dwelling, the EICR's recommended next inspection is in 3 years. After 3 years, the landlord must:",
              options: {
                A: "Wait for 5 years",
                B: "Commission a new EICR within the recommended interval to maintain compliance with PRS Regs 2020",
                C: "Re-issue the previous report",
                D: "Notify the local authority"
              },
              answer: "B",
              explanation: "PRS Regs 2020 require routine EICRs at least every 5 years OR sooner if the inspector recommends. The landlord follows the recommended interval — extending to 5 years against the inspector's advice would breach the regulations."
            },
            {
              number: 20,
              prompt: "Under EAWR 1989, an inspector's professional indemnity insurance:",
              options: {
                A: "Replaces the inspector's duty of care",
                B: "Provides cover for civil claims arising from professional negligence; it does not absolve the inspector of professional / regulatory duties",
                C: "Means no inspection is needed",
                D: "Replaces the EICR"
              },
              answer: "B",
              explanation: "PI insurance is a financial risk-transfer mechanism. It pays out civil claims (subject to policy terms) but doesn't relieve the inspector of their professional duty of care, BPG4 alignment, and BS 7671 / EAWR / HSWA obligations."
            }
          ]
        }
      ]
    },
    {
      id: "section-4",
      title: "Section 4 — Consolidated EICR Coding",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "An EICR is best described as:",
              options: {
                A: "A certificate issued at the completion of new installation work",
                B: "A periodic record of the condition of an existing installation, with coded observations",
                C: "Issued only for failed installations",
                D: "A design certificate"
              },
              answer: "B",
              explanation: "The EICR is a snapshot of an existing installation's condition at the inspection date. Observations are coded C1/C2/C3/FI; outcome is Satisfactory unless any C1/C2/FI is present."
            },
            {
              number: 2,
              prompt: "Code C1 means:",
              options: {
                A: "Improvement recommended",
                B: "Danger present — risk of injury; immediate remedial action required",
                C: "Potentially dangerous",
                D: "Further investigation"
              },
              answer: "B",
              explanation: "C1 is danger present right now. The inspector makes safe before leaving site (typically by isolation), notifies the duty holder, and the EICR is automatically Unsatisfactory."
            },
            {
              number: 3,
              prompt: "Code C2 means:",
              options: {
                A: "Danger present",
                B: "Potentially dangerous — urgent remedial action required",
                C: "Improvement recommended",
                D: "No action"
              },
              answer: "B",
              explanation: "C2 = potentially dangerous. The fault is not dangerous as it sits but a single foreseeable event would make it so. C2 makes the EICR Unsatisfactory and must be remedied promptly."
            },
            {
              number: 4,
              prompt: "An EICR with only C3s is overall:",
              options: {
                A: "Unsatisfactory",
                B: "Satisfactory — improvements recommended",
                C: "FI",
                D: "Pending"
              },
              answer: "B",
              explanation: "C3 alone keeps the report Satisfactory; the duty holder is encouraged to plan the improvements but has no specific PRS Regs clock to hit."
            },
            {
              number: 5,
              prompt: "An accessory faceplate is broken away exposing live terminals. Code:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1",
                D: "FI"
              },
              answer: "C",
              explanation: "Exposed accessible live parts = C1. Basic protection failed; isolate the circuit and label it before leaving site."
            },
            {
              number: 6,
              prompt: "Missing main protective bonding to a metallic gas service. Code:",
              options: {
                A: "C1",
                B: "C2",
                C: "C3",
                D: "FI"
              },
              answer: "B",
              explanation: "Missing main bonding to an extraneous-conductive-part is potentially dangerous (C2) — equipotential is not maintained, a future fault could make the gas service live."
            },
            {
              number: 7,
              prompt: "A 30 mA RCD that does not trip at 1×IΔn within 5 seconds. Code (typical):",
              options: {
                A: "C3",
                B: "C2 — fault protection performance impaired",
                C: "C1 always",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Failure at 1×IΔn means fault protection cannot be relied on. C2 — replace the device. C1 may apply where the RCD is the sole protective measure on accessible circuits used by ordinary persons."
            },
            {
              number: 8,
              prompt: "Plastic CU on a wooden backboard in a domestic dwelling, no other defects. Current BPG4 typical code:",
              options: {
                A: "C1",
                B: "C2",
                C: "C3 — improvement recommended",
                D: "Satisfactory only"
              },
              answer: "C",
              explanation: "Current BPG4 places intact plastic CUs on wooden backboards (non-DSEAR domestic) at C3. Earlier guidance was C2; the consensus moved as the focus shifted to termination quality and metal-CU / fire-rated containment for new work."
            },
            {
              number: 9,
              prompt: "Broken cosmetic shade ring on a pendant lampholder, no live parts exposed. Code:",
              options: {
                A: "C1",
                B: "C2",
                C: "C3",
                D: "FI"
              },
              answer: "C",
              explanation: "Cosmetic damage with no exposed live parts and no progression risk is C3 — improvement recommended; the lampholder should be replaced when convenient."
            },
            {
              number: 10,
              prompt: "Unexplained low IR with concealed joint boxes inaccessible during the visit. Code:",
              options: {
                A: "C2",
                B: "FI — further investigation required",
                C: "C3",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "FI captures evidence of a possible defect that the inspector cannot diagnose during the inspection. Further investigation is needed; the EICR is Unsatisfactory until it is done."
            },
            {
              number: 11,
              prompt: "Cracked socket faceplate, live parts not exposed but progression possible. Code:",
              options: {
                A: "C1",
                B: "C2 (typical) — foreseeable progression to exposed live parts",
                C: "C3",
                D: "FI"
              },
              answer: "B",
              explanation: "A clear crack approaching live terminals is C2; the defect will progress in normal use. If the crack already exposes live parts, the call lifts to C1."
            },
            {
              number: 12,
              prompt: "Discolouration / heat damage at a circuit termination, no exposed live parts. Code:",
              options: {
                A: "C1",
                B: "C2 — likely loose / overheating termination",
                C: "C3",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Visible discolouration suggests sustained over-temperature — typically a loose termination. Potentially dangerous, C2. Active arcing / smoke would lift to C1."
            },
            {
              number: 13,
              prompt: "Measured Zs slightly above the Table 41.3 limit. Code:",
              options: {
                A: "C3",
                B: "C2 (or FI if doubt)",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Above-limit Zs threatens ADS performance — typically C2. Where the inspector is unsure (instrument tolerance, parallel paths, temperature correction), FI is the alternative."
            },
            {
              number: 14,
              prompt: "Foil substituting for a rewireable fuse. Code:",
              options: {
                A: "C2",
                B: "C3",
                C: "C1 — overcurrent protection defeated, danger present",
                D: "FI"
              },
              answer: "C",
              explanation: "Foil defeats overcurrent protection; a fault could lead to fire before the supply trips. Textbook C1 with on-site isolation and same-day notification."
            },
            {
              number: 15,
              prompt: "Outdoor socket-outlet at a dwelling without RCD additional protection. Code (typical):",
              options: {
                A: "C3",
                B: "C2 — additional protection required for outdoor sockets used by ordinary persons",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Outdoor sockets used by ordinary persons require 30 mA RCD additional protection; absence is potentially dangerous (C2) — install RCD protection promptly."
            },
            {
              number: 16,
              prompt: "Single C3 — overall outcome:",
              options: {
                A: "Unsatisfactory",
                B: "Satisfactory",
                C: "Pending",
                D: "FI"
              },
              answer: "B",
              explanation: "C3 alone = Satisfactory. The duty holder plans the improvement; no PRS 28-day clock applies in the absence of C1/C2/FI."
            },
            {
              number: 17,
              prompt: "Single C2 — overall outcome:",
              options: {
                A: "Satisfactory",
                B: "Unsatisfactory",
                C: "Pending",
                D: "Conditional"
              },
              answer: "B",
              explanation: "Any C2 = Unsatisfactory. Triggers PRS Regs 2020 28-day remedy clock for rented dwellings, or risk-based action under HSWA / EAWR for non-domestic premises."
            },
            {
              number: 18,
              prompt: "Single FI — overall outcome:",
              options: {
                A: "Satisfactory",
                B: "Unsatisfactory until investigated",
                C: "Conditional",
                D: "Pending"
              },
              answer: "B",
              explanation: "FI = Unsatisfactory. The further investigation must be carried out without undue delay; the EICR is updated / a written confirmation issued once the matter is closed."
            },
            {
              number: 19,
              prompt: "TT installation with no RCD protection. Code (typical):",
              options: {
                A: "C2",
                B: "C3",
                C: "C1 — fault protection essentially absent on a TT system",
                D: "Satisfactory if the earth electrode is low-resistance"
              },
              answer: "C",
              explanation: "TT systems rely on RCDs because earth electrode loop impedance is too high for an MCB to clear faults in time. No RCD = no functional fault protection — C1 with on-site make-safe and same-day notification."
            },
            {
              number: 20,
              prompt: "Cable buried <50 mm in plaster, outside safe zone, no RCD additional protection. Code:",
              options: {
                A: "C3",
                B: "C2 — additional protection or earthed mechanical protection required",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "BS 7671 requires either RCD additional protection or earthed mechanical protection for cables <50 mm deep outside safe zones. Absence of both is potentially dangerous (C2)."
            },
            {
              number: 21,
              prompt: "Misidentified MCB rating label (label says 15 A, device is 32 A). Code (typical):",
              options: {
                A: "C3",
                B: "C2 — incorrect labelling could mislead future maintenance",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Mislabelling is C2 because future maintenance could install the wrong device, leading to under-protected cable. The label and device must match — re-label or replace."
            },
            {
              number: 22,
              prompt: "Lighting circuit without RCD protection in a dwelling installed before the requirement applied. Code (typical):",
              options: {
                A: "C2",
                B: "C3 — improvement recommended (current edition exceeds the original requirement)",
                C: "C1",
                D: "Satisfactory only"
              },
              answer: "B",
              explanation: "BS 7671 is not retrospective. A circuit that complied at the time but does not meet a later edition is typically C3 — improvement recommended. The duty holder may wish to upgrade as part of planned works."
            },
            {
              number: 23,
              prompt: "Class I metal kitchen appliance plugged into a socket with the earth contact broken. Code:",
              options: {
                A: "C2",
                B: "C3",
                C: "C1 (typical) — Class I appliance with no earth in domestic kitchen",
                D: "Satisfactory"
              },
              answer: "C",
              explanation: "Class I metalwork relying on a CPC for fault protection is left unprotected — a fault could leave the metal body live indefinitely. C1 with on-site make-safe (replace the socket)."
            },
            {
              number: 24,
              prompt: "Polarity reversed at the consumer unit (line and neutral swapped). Code:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 — single-pole MCBs are now in the neutral; isolation does not break the line",
                D: "FI"
              },
              answer: "C",
              explanation: "Reversed polarity at the CU defeats isolation switching entirely. The line stays connected when the device opens — danger present, C1 with on-site make-safe."
            },
            {
              number: 25,
              prompt: "EICR observation that the inspector cannot definitively diagnose during the visit (e.g. unidentified cable disappearing into a wall, no test access). Code:",
              options: {
                A: "C3",
                B: "FI — further investigation required",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "FI is the right call when the inspector has evidence of a possible defect but cannot fully diagnose during the inspection. The investigation closes the loop; the EICR is Unsatisfactory until it does."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "An exposed live conductor at an accessible loft junction box. Code:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1",
                D: "FI"
              },
              answer: "C",
              explanation: "Exposed accessible live parts = C1 regardless of how rarely the loft is entered. The inspector isolates the circuit, labels it and notifies the duty holder same day."
            },
            {
              number: 2,
              prompt: "A bathroom missing supplementary equipotential bonding where the four conditions of Reg 701.415.2 cannot all be met. Code:",
              options: {
                A: "C1",
                B: "C2",
                C: "C3",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Where the omission conditions are not met, supplementary bonding is required; its absence is potentially dangerous (C2) — install bonding to comply."
            },
            {
              number: 3,
              prompt: "A 30 mA RCD trips at 1×IΔn within 280 ms (limit 300 ms) and 35 ms at 5×IΔn (limit 40 ms). Record:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — both readings within BS 7671 limits",
                D: "FI"
              },
              answer: "C",
              explanation: "Within limits = Satisfactory. The borderline reading at 1×IΔn might invite a future check or trend, but as recorded it satisfies BS 7671 disconnection time requirements."
            },
            {
              number: 4,
              prompt: "A cosmetic chip on the corner of a faceplate, no live parts visible. Code:",
              options: {
                A: "C1",
                B: "C2",
                C: "C3 — improvement recommended (cosmetic damage)",
                D: "Satisfactory"
              },
              answer: "C",
              explanation: "Cosmetic damage with no exposed live parts and no progression risk is C3. The accessory should be replaced when convenient; the EICR remains Satisfactory if this is the only issue."
            },
            {
              number: 5,
              prompt: "A circuit's IR test reads 0.4 MΩ between line and earth. Code (likely):",
              options: {
                A: "C3",
                B: "C2 — below BS 7671 minimum (1 MΩ for in-service)",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Below-limit IR is potentially dangerous; the inspector should isolate suspect electronic loads and re-test, then code C2 if the reading remains low and the cause is identified, or FI if uncertain."
            },
            {
              number: 6,
              prompt: "Misleading label on the consumer unit's main switch (says 'Lighting'). Code:",
              options: {
                A: "C1",
                B: "C2 if the misidentification could lead to dangerous incorrect isolation",
                C: "C3 (typical) — improvement recommended (correct identification)",
                D: "Satisfactory"
              },
              answer: "C",
              explanation: "Most misidentification labels are C3 because the operator can verify operation. Where misidentification could cause unsafe maintenance switching (e.g. circuit not actually isolated despite the label), the call lifts to C2."
            },
            {
              number: 7,
              prompt: "A loose, oxidised bonding clamp on the gas service, continuity intact. Code:",
              options: {
                A: "C1",
                B: "C2 — mechanical / electrical reliability of bond reduced",
                C: "C3",
                D: "Satisfactory because continuity exists"
              },
              answer: "B",
              explanation: "A loose/oxidised clamp could fail under vibration or fault; C2 — clean / replace. If continuity is lost completely with the bond effectively absent, the call lifts to C1 / on-site remedy."
            },
            {
              number: 8,
              prompt: "Lighting circuit installed in 1995 with no RCD, in current dwelling. Code (typical):",
              options: {
                A: "C2",
                B: "C3 — improvement recommended (later editions added RCD requirement)",
                C: "C1",
                D: "Satisfactory only"
              },
              answer: "B",
              explanation: "BS 7671 not retrospective. Lighting circuit complying with the 1995 edition but not the current edition is typically C3. The improvement is to add 30 mA RCD protection."
            },
            {
              number: 9,
              prompt: "Structural steel confirmed extraneous-conductive-part, no main bonding. Code:",
              options: {
                A: "C1",
                B: "C2 — extraneous-part not bonded",
                C: "C3",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Confirmed extraneous-conductive-part requires main bonding to maintain equipotential. Absence is potentially dangerous (C2) — install bonding sized per Table 54.8."
            },
            {
              number: 10,
              prompt: "MCB swapped to wrong type (Type D where Type B was needed; Zs no longer satisfies disconnection time). Code:",
              options: {
                A: "C3",
                B: "C2 — disconnection time may not be met",
                C: "C1",
                D: "FI"
              },
              answer: "B",
              explanation: "Type D requires lower Zs to disconnect within the required time. If measured Zs exceeds the Type D limit, ADS may fail; potentially dangerous, C2 — replace with the correct device or address Zs."
            },
            {
              number: 11,
              prompt: "Spur added to ring final in 1.0 mm² T+E. Code:",
              options: {
                A: "C3",
                B: "C2 — undersized conductor for circuit fault current",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "1.0 mm² T+E cannot carry a 32 A ring final's fault current safely. C2 — replace with appropriately sized cable (e.g. 2.5 mm² T+E)."
            },
            {
              number: 12,
              prompt: "Old rewireable fuse board, no RCD on accessible socket-outlets in active dwelling. Code (typical):",
              options: {
                A: "C3",
                B: "C2 — additional protection required for sockets used by ordinary persons",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Current consensus is C2 for missing RCD additional protection on accessible sockets in active dwellings. Some inspectors apply C3 to plainly historic untouched installations; the trend is toward C2."
            },
            {
              number: 13,
              prompt: "Polarity reversed at one socket (single socket only). Code:",
              options: {
                A: "C3",
                B: "C2 — switching is now in the neutral conductor",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Reversed polarity at a single socket means single-pole switching breaks the neutral, leaving line connected. Potentially dangerous (C2). Some inspectors lift to C1 if foreseeable shock risk is high."
            },
            {
              number: 14,
              prompt: "32 A MCB on 4 mm² T+E run in insulation (Iz ~27 A under method 100). Code:",
              options: {
                A: "C3",
                B: "C2 — overload protection not coordinated",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Cable Iz < device In means overload protection cannot be guaranteed; C2 — redesign protection or reduce load to match cable rating."
            },
            {
              number: 15,
              prompt: "Class I luminaire with no CPC connected, body within reach in a domestic kitchen. Code:",
              options: {
                A: "C3",
                B: "C2 — fault protection not satisfied",
                C: "C1 — likely where reachable Class I metalwork could become live under fault",
                D: "Either B or C depending on accessibility"
              },
              answer: "D",
              explanation: "BPG4 invites judgement: reachable Class I metalwork without a CPC is often C1; less accessible / low-risk metalwork can be C2. Document the use case and code accordingly."
            },
            {
              number: 16,
              prompt: "Recently extended kitchen with new dishwasher socket, no RCD additional protection. Code:",
              options: {
                A: "C3",
                B: "C2 — current edition requires RCD on accessible socket-outlets",
                C: "C1",
                D: "Satisfactory if dishwasher is fixed"
              },
              answer: "B",
              explanation: "Modern installation work must comply with the current edition. A new socket-outlet without RCD protection is C2; remedy by adding 30 mA RCD or RCBO protection promptly."
            },
            {
              number: 17,
              prompt: "Sheath stripped too far back inside an enclosure, basic insulation intact. Code:",
              options: {
                A: "C1",
                B: "C2 — mechanical protection reduced, foreseeable progression",
                C: "C3",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Inside an enclosure, missing sheath reduces mechanical protection. Re-make the termination so adequate sheath enters the enclosure. C2 typical; C1 if basic insulation already breached."
            },
            {
              number: 18,
              prompt: "An empty MCB way in the consumer unit with the MCB still fitted but no cable connected. Code:",
              options: {
                A: "C3",
                B: "C2 — exposed live terminal could be inadvertently energised in maintenance",
                C: "C1 (if currently exposed and accessible)",
                D: "Either B or C depending on accessibility"
              },
              answer: "D",
              explanation: "Currently exposed live terminal = C1 (basic protection); covered now but a foreseeable maintenance event would expose it = C2. Remedy is to remove the MCB and blank the way."
            },
            {
              number: 19,
              prompt: "Earthing conductor undersized at MET (10 mm² for 100 A PME, BS 7671 minimum 16 mm²). Code:",
              options: {
                A: "C3",
                B: "C2 — earthing conductor inadequate for PME fault current",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "PME earthing conductors must be sized to handle combined neutral / earth fault currents. Under-sized conductor is potentially dangerous (C2) — upgrade to BS 7671 Table 54.7 sizing."
            },
            {
              number: 20,
              prompt: "Active arcing inside a distribution board cover. Code:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 — danger present (active fault)",
                D: "FI"
              },
              answer: "C",
              explanation: "Active arcing is an immediate danger; isolate the affected board, label, notify duty holder same day. C1 — Unsatisfactory."
            },
            {
              number: 21,
              prompt: "Burnt-out neutral termination at a busbar, contained, cooled, no exposed live parts. Code:",
              options: {
                A: "C3",
                B: "C2 — repair / rebuild promptly",
                C: "C1 if active heat or exposed live parts",
                D: "Either B or C depending on observed condition"
              },
              answer: "D",
              explanation: "BPG4 calls for judgement. Cooled, contained burn damage is C2 with prompt remedy; active arcing or exposed live parts is C1 with on-site make-safe."
            },
            {
              number: 22,
              prompt: "RCD failure on a circuit feeding several outdoor sockets. Code:",
              options: {
                A: "C3",
                B: "C2 — additional protection impaired",
                C: "C1 — likely if the RCD is the sole protective measure on accessible outdoor sockets",
                D: "Either B or C depending on whether other protective measures are intact"
              },
              answer: "D",
              explanation: "Outdoor socket use depends on RCD additional protection. Where the RCD is the sole guarantor against direct contact, failure lifts to C1. Where ADS still works robustly, C2 with prompt replacement."
            },
            {
              number: 23,
              prompt: "Older red/black colour code wiring, used in installation that has not been altered. Code:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — old colours are not in themselves a defect",
                D: "C1"
              },
              answer: "C",
              explanation: "Old colours alone are compliant for their era. Where new and old wiring meet, identification is essential — typically a C2 or C3 depending on the situation. The colour itself is not a defect."
            },
            {
              number: 24,
              prompt: "BS 3036 fuse on a 5 A lighting circuit, otherwise sound, ADS times still met. Code:",
              options: {
                A: "C1",
                B: "C2",
                C: "C3 (or Satisfactory if ADS times comfortably met)",
                D: "FI"
              },
              answer: "C",
              explanation: "BPG4: a BS 3036 fuse with ADS times verified and the rest of the protective measures intact is typically Satisfactory or C3 (improvement recommended). Failure to meet disconnection times lifts to C2."
            },
            {
              number: 25,
              prompt: "Fire damage on a circuit's accessory and cable, contained, cooled, no exposed live parts. Code:",
              options: {
                A: "C3",
                B: "C2 — replace damaged components, re-test",
                C: "C1 if continuing fire risk or exposed live parts",
                D: "Either B or C depending on the inspector's assessment"
              },
              answer: "D",
              explanation: "Contained, cooled damage with no exposed live parts is C2 with prompt remedy. Active heat / smoke / exposed live parts is C1 with on-site make-safe."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "Damaged armoured cable gland with steel armour exposed, cores intact. Code:",
              options: {
                A: "C3",
                B: "C2 (likely) — mechanical / earthing reliability of SWA reduced",
                C: "C1 if the cores are damaged exposing live parts",
                D: "Either B or C depending on observed condition"
              },
              answer: "D",
              explanation: "BPG4 again: damaged gland with intact cores is C2; damaged gland with breached basic insulation and exposed live parts is C1. The inspector documents the actual condition."
            },
            {
              number: 2,
              prompt: "Retail unit with no RCD additional protection on customer-facing socket-outlets. Code:",
              options: {
                A: "C3",
                B: "C2 — additional protection required for accessible sockets in commercial premises used by ordinary persons",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Commercial premises with public access fall under the requirement for RCD additional protection on accessible sockets. Absence is C2."
            },
            {
              number: 3,
              prompt: "Missing previous EIC / Schedule of Test Results held by duty holder. Code (typical):",
              options: {
                A: "C1",
                B: "C2",
                C: "C3 — improvement recommended (documentation gap)",
                D: "FI"
              },
              answer: "C",
              explanation: "Missing certification is a documentation issue, not a present danger. C3 — the duty holder should retain certification going forward; the inspector still produces the EICR based on current condition."
            },
            {
              number: 4,
              prompt: "Visible discolouration / heat damage at a circuit termination, with active burning smell. Code:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 — fire risk, danger present",
                D: "FI"
              },
              answer: "C",
              explanation: "Active burning smell + discolouration is an active fault. Isolate the circuit and label it, notify the duty holder same day, and code C1 with a clear description."
            },
            {
              number: 5,
              prompt: "Cable tray (metal) used to support insulated cables, not connected to protective earth. Code:",
              options: {
                A: "C3",
                B: "C2 — exposed-conductive-part / extraneous-part not earthed",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Metal containment that could become live under fault is treated as exposed-conductive-part and must be earthed. Absence of earthing is C2 — install dedicated CPC or bond to MET."
            },
            {
              number: 6,
              prompt: "Loose earth pin contact at an accessible socket-outlet. Code (typical):",
              options: {
                A: "C3",
                B: "C2 — fault protection on connected appliances impaired",
                C: "C1 (likely if Class I appliance is regularly connected)",
                D: "Either B or C depending on use case"
              },
              answer: "D",
              explanation: "BPG4 invites judgement: a passively defective earth contact is C2; if the socket regularly feeds Class I appliances and is in a domestic kitchen / bathroom area, the call may lift to C1."
            },
            {
              number: 7,
              prompt: "PV system DC isolator without correct DC-rated labelling. Code:",
              options: {
                A: "C1",
                B: "C2 — emergency isolation could be unsafe due to incorrect identification",
                C: "C3",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "DC isolation labelling matters for emergency response. Wrong / missing labelling is potentially dangerous (C2) — relabel and verify polarity / orientation."
            },
            {
              number: 8,
              prompt: "Tape-wrapped twisted joint at exposed loft-level cable run. Code:",
              options: {
                A: "C3",
                B: "C2 (typical) — joint not made in suitable terminal/enclosure, foreseeable progression",
                C: "C1 if visibly hot, arcing, or with exposed live parts",
                D: "Either B or C depending on observed condition"
              },
              answer: "D",
              explanation: "BPG4 invites judgement: cool, intact, securely insulated tape joint is C2; hot or visibly arcing or with exposed live parts lifts to C1 with on-site make-safe."
            },
            {
              number: 9,
              prompt: "MET earth conductor terminated via a hand-tight cable lug, found loose. Code:",
              options: {
                A: "C3",
                B: "C2 — fault-protection earth path could be lost",
                C: "C1 if continuity is effectively lost or live conductor exposed",
                D: "Either B or C depending on continuity testing"
              },
              answer: "D",
              explanation: "BPG4 calls for judgement: loose-but-continuous is C2; effectively open earth or exposed conductor is C1 with on-site make-safe."
            },
            {
              number: 10,
              prompt: "Sheltered-housing dwelling with fixed mobility-aid charging point, no RCD protection. Code:",
              options: {
                A: "C3",
                B: "C2 — additional protection required for circuits accessible to ordinary persons (especially vulnerable occupants)",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Vulnerable-user environments demand the protective measures expected of the current edition. Absent RCD additional protection on a fixed-equipment circuit is potentially dangerous (C2)."
            },
            {
              number: 11,
              prompt: "Cooker control unit with switched 13 A socket on; non-functional shutters; live terminals not currently exposed. Code:",
              options: {
                A: "C3",
                B: "C2 — basic protection impaired (shutters non-functional), accessible socket",
                C: "C1 — if live terminals are reachable when probed",
                D: "Either B or C depending on whether live terminals are currently accessible"
              },
              answer: "D",
              explanation: "BPG4: non-functional shutters with live terminals reachable on probe = C1; not currently reachable but unreliable shutters = C2 with prompt remedy."
            },
            {
              number: 12,
              prompt: "TN-C-S supply with PME, no warning notice at consumer unit. Code:",
              options: {
                A: "C2",
                B: "C3 — improvement recommended (warning / labelling)",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Missing safety / warning notices are typically C3. Add a PME / TN-C-S warning at the position of the main earthing terminal so future maintenance / DNO operations are correctly informed."
            },
            {
              number: 13,
              prompt: "Cable run beneath floorboards, no mechanical protection, no RCD additional protection. Code (typical):",
              options: {
                A: "C3",
                B: "C2 — additional protection required by current edition",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "BS 7671 requires either RCD additional protection or earthed mechanical protection for cables hidden in floors / walls in dwellings used by ordinary persons. Absence of both is C2."
            },
            {
              number: 14,
              prompt: "Consumer unit located in damp basement with active condensation, surface corrosion. Code:",
              options: {
                A: "C3",
                B: "C2 — environmental conditions degrading equipment",
                C: "C1 if active arcing or exposed corrosion damage exposing live parts",
                D: "Either B or C depending on observed condition"
              },
              answer: "D",
              explanation: "BPG4: surface corrosion no exposed live parts no arcing = C2; active arcing / exposed live parts = C1 with on-site make-safe."
            },
            {
              number: 15,
              prompt: "30 mA RCD trips in 28 ms at 5×IΔn (limit 40 ms) and is otherwise intact. Record:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — within BS 7671 limit",
                D: "FI"
              },
              answer: "C",
              explanation: "Within the 40 ms limit at 5×IΔn = Satisfactory. Schedule entry records the value; no observation needed."
            },
            {
              number: 16,
              prompt: "Cracked socket front face approaching a live terminal (within 1 mm). Code:",
              options: {
                A: "C3",
                B: "C2 — foreseeable progression to exposed live parts",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "A clear crack approaching live terminals will progress to exposure under normal in-service forces. Potentially dangerous (C2). Replace the accessory promptly."
            },
            {
              number: 17,
              prompt: "Junction box in a maintained location with a tape-wrapped connection. Code (typical):",
              options: {
                A: "C3",
                B: "C2 — joint not made in suitable terminal",
                C: "C1 if visibly hot or arcing",
                D: "Either B or C depending on observed condition"
              },
              answer: "D",
              explanation: "BPG4 invites judgement; cool tape-wrapped joints in proper enclosures are C2; hot / arcing joints lift to C1 with on-site make-safe."
            },
            {
              number: 18,
              prompt: "Bath / basin in a dwelling with plastic plumbing throughout (extraneous-conductive-part status not relevant). No bonding present. Code:",
              options: {
                A: "C2 always",
                B: "Satisfactory — plastic plumbing is not extraneous-conductive-part requiring bonding",
                C: "C3",
                D: "FI"
              },
              answer: "B",
              explanation: "Plastic plumbing is not an extraneous-conductive-part. Bonding is therefore not required to it. The EICR confirms the status and records Satisfactory."
            },
            {
              number: 19,
              prompt: "Exposed metal back box at a switch position with damaged faceplate; live terminal accessible. Code:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 — accessible live terminal",
                D: "FI"
              },
              answer: "C",
              explanation: "Accessible live terminal at a switch position is C1. Isolate, label, notify the duty holder same day."
            },
            {
              number: 20,
              prompt: "Domestic kitchen with no RCD additional protection on socket-outlets, in active dwelling. Code (typical):",
              options: {
                A: "C3 only if installation is plainly historic",
                B: "C2 (typical for an actively used dwelling)",
                C: "C1",
                D: "Either A or B depending on inspector's judgement"
              },
              answer: "D",
              explanation: "Current consensus is C2 in active dwellings; C3 may be applied to clearly historic untouched installations. The inspector judges based on the installation's age, recent works and use pattern."
            },
            {
              number: 21,
              prompt: "Undersized CPC (1.0 mm² CPC on 4 mm² 32 A radial), no parallel earth path. Code:",
              options: {
                A: "C3",
                B: "C2 — adiabatic check fails / CPC inadequate for fault current",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Undersized CPC may not survive fault current within device clearance time. C2 — replace with adequately sized CPC or upgrade protective device."
            },
            {
              number: 22,
              prompt: "RCD trips at 5×IΔn but takes >5 s at 1×IΔn. Code:",
              options: {
                A: "C3",
                B: "C2 — fault protection performance impaired",
                C: "C1 if sole protective measure on accessible circuits",
                D: "Either B or C depending on protective scheme"
              },
              answer: "D",
              explanation: "Failure at 1×IΔn means fault protection is unreliable. C2 typical, lifting to C1 where the RCD is the sole protective measure on circuits used by ordinary persons."
            },
            {
              number: 23,
              prompt: "TN-S installation with 4 mm² bare main earthing conductor, undersized for current BS 7671 Table 54.7 sizing. Code:",
              options: {
                A: "C3",
                B: "C2 — earthing conductor inadequate for current fault levels",
                C: "C1 if installation has been modified to higher fault levels with the conductor unchanged",
                D: "Either B or C depending on supply / fault level"
              },
              answer: "D",
              explanation: "Undersized main earthing conductor is potentially dangerous; C2 typical. Where the supply has been upgraded to a higher fault level without changing the conductor, the call may rise to C1."
            },
            {
              number: 24,
              prompt: "Dwelling lighting circuit complies with original installation edition but lacks RCD required by current edition. Code:",
              options: {
                A: "C2",
                B: "C3 — improvement recommended (current edition exceeds original requirement)",
                C: "C1",
                D: "Satisfactory only"
              },
              answer: "B",
              explanation: "BS 7671 not retrospective. Where the installation complied at the time but does not match current edition, the typical EICR call is C3 — improvement recommended (e.g. add RCD protection)."
            },
            {
              number: 25,
              prompt: "Inspector finds an unidentified cable disappearing into a wall, no test access available. Code:",
              options: {
                A: "C3",
                B: "FI — further investigation required",
                C: "C2",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "FI captures evidence of a possible defect that the inspector cannot diagnose during the inspection. Investigation may use cable detection or open-up access; the EICR is Unsatisfactory until it is done."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "Cosmetic chip on a faceplate, no live parts visible, no risk of progression. Code:",
              options: {
                A: "C1",
                B: "C2",
                C: "C3 — improvement recommended",
                D: "Satisfactory"
              },
              answer: "C",
              explanation: "Cosmetic damage with no exposed live parts and no progression risk is C3. The accessory should be replaced when convenient; the EICR remains Satisfactory if this is the only issue."
            },
            {
              number: 2,
              prompt: "Single-pole switch on the line conductor of a Class II luminaire. Record:",
              options: {
                A: "C1",
                B: "C2",
                C: "C3",
                D: "Satisfactory — Class II equipment doesn't require an earth and single-pole line switching is normal UK practice"
              },
              answer: "D",
              explanation: "Class II equipment (double insulation) doesn't need an earth. Single-pole line switching is correct UK practice — confirm basic insulation and double-insulation labelling and record Satisfactory."
            },
            {
              number: 3,
              prompt: "Cooker socket switched on with no plug, non-functional shutters, live terminals reachable on probe. Code:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 — basic protection compromised",
                D: "FI"
              },
              answer: "C",
              explanation: "Reachable live terminals at an accessible socket = C1. Isolate, label, notify duty holder same day."
            },
            {
              number: 4,
              prompt: "Mains earthing strap broken at the MET (no continuity). Code:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 — fault protection earth path lost",
                D: "FI"
              },
              answer: "C",
              explanation: "Open earth at the MET means the entire installation has lost its means of earthing. Fault protection cannot operate. C1 with on-site make-safe / isolation and same-day notification."
            },
            {
              number: 5,
              prompt: "Inspector's IR test reads exactly 1.0 MΩ between line and earth. Record:",
              options: {
                A: "C2",
                B: "Satisfactory at the limit; investigate cause if borderline trend, consider FI if the reading is suspicious",
                C: "C3",
                D: "C1"
              },
              answer: "B",
              explanation: "Exactly at limit is technically Satisfactory; the inspector may use FI if the reading is borderline and the cause cannot be established. A stable, explained borderline reading is recorded as Satisfactory with a note."
            },
            {
              number: 6,
              prompt: "An MCB (BS EN 60898) Type B 16 A on a circuit feeding only a small inductive transformer with frequent inrush trips. The circuit is intrinsically safe, just nuisance-tripping. EICR record:",
              options: {
                A: "C2 — incorrect device type",
                B: "C3 — improvement recommended (Type C may be more suitable)",
                C: "Satisfactory unless protection is impaired; functional issue rather than safety code",
                D: "C1"
              },
              answer: "C",
              explanation: "If protection is intact and BS 7671 disconnection times are met, nuisance tripping is a functional preference rather than an EICR-coded defect. The inspector may note a recommendation for a Type C device."
            },
            {
              number: 7,
              prompt: "Hot-water boiler isolator fitted as single-pole switch (BS 7671 typically requires DP isolation). Code:",
              options: {
                A: "C3",
                B: "C2 — isolation switching incomplete",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "DP isolation requirement comes from the need to fully isolate during maintenance. SP isolators leave the neutral connected — potentially dangerous (C2). Replace with DP isolator."
            },
            {
              number: 8,
              prompt: "Crossed circuit IDs at the consumer unit (cables swapped, labels still match original layout). Code:",
              options: {
                A: "C3",
                B: "C2 — incorrect identification could mislead future maintenance",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Mislabelled circuits create unsafe maintenance switching. The protective devices may also no longer match cable sizes. Potentially dangerous (C2) — correct the identification or rewiring."
            },
            {
              number: 9,
              prompt: "Spare way in CU with MCB still fitted, cable not connected, terminal currently accessible (cover removed for inspection). Code:",
              options: {
                A: "C3",
                B: "C2 — exposed live terminal could be inadvertently energised in maintenance",
                C: "C1 — currently exposed, accessible live terminal",
                D: "Satisfactory"
              },
              answer: "C",
              explanation: "Currently accessible live terminal = C1 (basic protection failed). Make safe by removing the MCB and blanking the way."
            },
            {
              number: 10,
              prompt: "Cable concealed in stud wall, route unknown, no detection possible. Code:",
              options: {
                A: "C2",
                B: "C3",
                C: "FI — further investigation required",
                D: "Satisfactory"
              },
              answer: "C",
              explanation: "Unknown route compliance is FI. Use cable detection or open-up access to confirm safe-zone / depth requirements; the EICR is Unsatisfactory until the investigation is complete."
            },
            {
              number: 11,
              prompt: "Recently extended dishwasher socket without RCD additional protection. Code:",
              options: {
                A: "C3",
                B: "C2 — current edition requires RCD on accessible socket-outlets",
                C: "C1",
                D: "Satisfactory if dishwasher is fixed"
              },
              answer: "B",
              explanation: "Modern installation work must comply with current edition. New socket-outlet without 30 mA RCD additional protection is C2; remedy by adding RCD or RCBO promptly."
            },
            {
              number: 12,
              prompt: "Inspector finds a recently installed PV array where the AC isolator label says '230 V AC' but the wiring shows DC connections from PV array to inverter. Code:",
              options: {
                A: "C3",
                B: "C2 — incorrect labelling could result in unsafe isolation procedure",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Incorrect isolation labelling on a PV system is potentially dangerous in emergency or maintenance scenarios. C2 — relabel correctly with DC ratings and verify the isolator's compliance with PV requirements."
            },
            {
              number: 13,
              prompt: "Junction box screw missing, lid loose but in place, no live parts currently exposed. Code:",
              options: {
                A: "C1",
                B: "C2 — basic protection at risk of failure",
                C: "C3",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "A loose lid that could fall away in normal use exposes a foreseeable progression to live-parts exposure. C2 — refit the screw, check the joint quality. C1 if the lid is already off and live parts are accessible."
            },
            {
              number: 14,
              prompt: "Earth electrode resistance measured 200 Ω on a TT system (typical limit ~200 Ω depending on protective device, but 30 mA RCD provides protection). Record:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory if the 30 mA RCD provides correct fault protection within disconnection times",
                D: "C1"
              },
              answer: "C",
              explanation: "On TT systems with 30 mA RCD, the earth electrode resistance can be relatively high (BS 7671 historically allowed up to ~200 Ω with stable readings) provided the RCD operates correctly. Satisfactory if testing confirms RCD performance."
            },
            {
              number: 15,
              prompt: "Old mortice-tail bonding clamp on water service (legacy clamp on lead pipe). Code:",
              options: {
                A: "C2 — clamp not BS 951 compliant",
                B: "C3 — improvement recommended (replace with BS 951 clamp)",
                C: "C1",
                D: "Satisfactory if continuity is verified"
              },
              answer: "B",
              explanation: "Where continuity is intact and the bond is mechanically sound, an older clamp is typically C3 — replace with BS 951 type. If continuity is suspect or the clamp is compromised, the call lifts to C2."
            },
            {
              number: 16,
              prompt: "Exposed live conductor at a domestic ceiling rose (basic insulation breached, accessible if rose cover removed). Code:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 — basic protection failed at an accessible position",
                D: "FI"
              },
              answer: "C",
              explanation: "Exposed live parts under a removable cover are accessible during normal maintenance / lamp change. C1 — isolate, label, notify duty holder same day."
            },
            {
              number: 17,
              prompt: "Outdoor luminaire with damaged seal, water ingress visible, basic insulation intact. Code:",
              options: {
                A: "C1",
                B: "C2 — IP rating compromised, foreseeable progression to fault",
                C: "C3",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "IP rating breach with intact insulation is C2 — foreseeable progression to insulation failure. Replace the seal or the fitting promptly. If the fault has already produced exposed live parts or earth leakage, C1."
            },
            {
              number: 18,
              prompt: "Domestic dwelling with TT system and 30 mA RCD that fails to trip at any test current. Code:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 — TT depends on RCD for fault protection",
                D: "FI"
              },
              answer: "C",
              explanation: "TT systems rely on RCDs for fault clearance because earth electrode loop impedance is too high for an MCB. An inoperative RCD on TT means no fault protection — C1 with on-site make-safe."
            },
            {
              number: 19,
              prompt: "Bonding clamp on metallic water service in good condition, continuity verified. Record:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory",
                D: "FI"
              },
              answer: "C",
              explanation: "Bonding present, in good condition, continuity verified = Satisfactory. The schedule entry records the bond's presence and condition."
            },
            {
              number: 20,
              prompt: "Domestic CU with mixed manufacturer MCBs / RCBOs, all functioning correctly. Code:",
              options: {
                A: "C2",
                B: "C3 — manufacturer mixing typically a conformance recommendation rather than immediate danger",
                C: "C1",
                D: "Satisfactory only"
              },
              answer: "B",
              explanation: "Mixing devices outside the CU's listed range is a manufacturer-conformance issue. Where protective measures still operate correctly, the typical call is C3 — recommendation to fit matched / listed devices."
            },
            {
              number: 21,
              prompt: "RCD bypassed (output terminals jumpered together to defeat tripping). Code:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 — protective device deliberately defeated",
                D: "FI"
              },
              answer: "C",
              explanation: "Deliberate defeat of a protective device is C1 with on-site make-safe and same-day notification. Restore the RCD's functionality and re-test."
            },
            {
              number: 22,
              prompt: "BS 3036 fuse on a 30 A ring final, ADS times not met (Zs too high). Code:",
              options: {
                A: "C3",
                B: "C2 — disconnection time not met by protective device",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "BS 3036 fuses can meet ADS where Zs is low enough; if Zs exceeds the limit, ADS is impaired — C2. Remedy by replacing with HBC fuse or MCB / RCBO and verifying Zs."
            },
            {
              number: 23,
              prompt: "Single C2 + ten C3s on an EICR — overall outcome:",
              options: {
                A: "Satisfactory",
                B: "Unsatisfactory because of the C2",
                C: "Conditional",
                D: "Pending"
              },
              answer: "B",
              explanation: "Any C2 = Unsatisfactory. C3 quantity does not affect the binary outcome; the duty holder's regulatory clock starts running on the C2."
            },
            {
              number: 24,
              prompt: "EICR observation 'Boiler-room circuits not inspected — locked, key with FM contractor unavailable'. Outcome impact:",
              options: {
                A: "Unsatisfactory because of the limitation",
                B: "Outcome reflects what was inspected; the limitation explicitly excludes those circuits from scope",
                C: "Refuse to issue",
                D: "Code C2"
              },
              answer: "B",
              explanation: "Agreed limitations carve out scope. The EICR's outcome reflects the inspected items only; the duty holder must arrange follow-up access for the missed circuits to fill the gap."
            },
            {
              number: 25,
              prompt: "Foil substituting for a rewireable fuse — duty holder's response is required:",
              options: {
                A: "Eventually",
                B: "Same-day make-safe, immediate replacement with correct fuse / device, written confirmation when complete",
                C: "Within 28 days only",
                D: "On change of tenancy"
              },
              answer: "B",
              explanation: "C1 demands same-day make-safe (already done by the inspector if accessible). Permanent fix follows promptly with written confirmation. The 28-day clock applies under PRS Regs but the duty holder must act faster on a known C1."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "On an EICR, an item the inspector has previously coded C2 and that has now been remediated should be coded:",
              options: {
                A: "C2 again on principle",
                B: "Recorded as remediated; the new EICR coding the current observed condition (typically Satisfactory if the remedy was effective)",
                C: "C3 always",
                D: "FI"
              },
              answer: "B",
              explanation: "Each EICR captures current condition. A previously fixed C2 that is now compliant is Satisfactory on the new report. The previous observation lives in the previous report; the new one doesn't carry it forward."
            },
            {
              number: 2,
              prompt: "Inspector finds an exposed conductor at the back of a luminaire's flex outlet, protruding through the protective sleeve. Code:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 — exposed live conductor at an accessible location",
                D: "FI"
              },
              answer: "C",
              explanation: "Exposed live conductor at an accessible point is C1. Isolate, label, notify duty holder same day."
            },
            {
              number: 3,
              prompt: "Domestic CU has a small surface scratch on the door, otherwise sound. Record:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — cosmetic only, no protective measure compromised",
                D: "C1"
              },
              answer: "C",
              explanation: "Cosmetic scratches that don't affect IP rating, basic protection or fire containment are not coded. The inspector may note the scratch in the schedule for completeness; the result is Satisfactory."
            },
            {
              number: 4,
              prompt: "Cable at <50 mm in plaster, in a safe zone, no RCD additional protection but the installation is from a long-standing installation predating the requirement. Code (typical):",
              options: {
                A: "C2",
                B: "C3 — improvement recommended (current edition exceeds original requirement)",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Cable in a safe zone is partially covered by the safe-zone protection; the BS 7671 RCD-or-mechanical-protection requirement applies more strictly outside safe zones. Installation predating the requirement is typically C3 — improvement recommended (add 30 mA RCD)."
            },
            {
              number: 5,
              prompt: "Inspector finds a domestic CU with no labels at all. Code (typical):",
              options: {
                A: "C2",
                B: "C3 — improvement recommended (correct identification per BS 7671 514.1.1)",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Missing identification is typically C3 — apply correct labels per BS 7671 514.1.1. Where misidentification could cause unsafe maintenance switching, the call lifts to C2."
            },
            {
              number: 6,
              prompt: "Schedule of Test Results shows R1+R2 of 0.43 Ω + Ze of 0.18 Ω = Zs 0.61 Ω; protective device's Zs limit (Type B 32 A) is 1.37 Ω. Record:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — Zs comfortably within limit",
                D: "FI"
              },
              answer: "C",
              explanation: "Zs 0.61 Ω vs limit 1.37 Ω = comfortable margin. Schedule entry records the values; no observation needed."
            },
            {
              number: 7,
              prompt: "Inspector finds a damaged sheath at the entry to a metal back box; basic insulation intact; cable in dry, accessible location. Code:",
              options: {
                A: "C1",
                B: "C2 — mechanical protection compromised, foreseeable progression",
                C: "C3",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Damaged sheath at enclosure entry compromises mechanical protection; future vibration / movement could expose live parts. C2 — re-make the termination correctly. If basic insulation is already breached, C1."
            },
            {
              number: 8,
              prompt: "Privately rented dwelling EICR finds C2 missing main bonding to gas service. Landlord must remediate within:",
              options: {
                A: "12 months",
                B: "28 days from inspection (or sooner if specified)",
                C: "On change of tenancy",
                D: "Whenever convenient"
              },
              answer: "B",
              explanation: "PRS Regs 2020: 28 days from inspection for any Unsatisfactory outcome (C1/C2/FI). Written confirmation supplied to tenant within 28 days of completion; local authority within 7 days of any written request."
            },
            {
              number: 9,
              prompt: "An EICR for a non-domestic premises identifies six C3s and no C1/C2/FI. Outcome:",
              options: {
                A: "Unsatisfactory",
                B: "Satisfactory — improvements recommended; duty holder plans them per HSWA / EAWR",
                C: "FI",
                D: "Pending"
              },
              answer: "B",
              explanation: "C3 quantity does not affect the binary outcome. Satisfactory result; duty holder plans improvements as part of normal maintenance / capital programme."
            },
            {
              number: 10,
              prompt: "Inspector finds a damaged cable hung over a sharp metal edge in a cupboard, sheath chafed but basic insulation intact. Code:",
              options: {
                A: "C1",
                B: "C2 — mechanical protection compromised, foreseeable progression",
                C: "C3",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Chafed sheath with intact basic insulation is C2 — foreseeable progression to exposed live parts. Re-route the cable or apply mechanical protection. C1 if basic insulation is already breached."
            },
            {
              number: 11,
              prompt: "Inspector finds a circuit's protective device coordination issue — measured Zs is 1.4 Ω, BS 7671 Table 41.3 limit for Type B 16 A (5 s) is 1.37 Ω. Code:",
              options: {
                A: "C3",
                B: "C2 — Zs marginally above limit, ADS may not operate within required time",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Above limit Zs is potentially dangerous (C2). The inspector may use FI if there is genuine uncertainty about instrument tolerance / temperature correction. Remedy by reducing Zs (cable, terminations) or upgrading the protective device."
            },
            {
              number: 12,
              prompt: "Domestic CU is metal-clad, on a brick wall, with all terminations checked and clean. Record:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — typical compliant installation per current edition",
                D: "C1"
              },
              answer: "C",
              explanation: "Metal CU on a non-combustible support with intact terminations is the configuration current BS 7671 expects for new installations. Satisfactory."
            },
            {
              number: 13,
              prompt: "Inspector finds a circuit with no CPC (older 1.0 mm² T cable, no earth). Code:",
              options: {
                A: "C3",
                B: "C2 — fault protection essentially absent on the circuit",
                C: "C1 (likely if circuit feeds Class I metalwork accessible to ordinary persons)",
                D: "Either B or C depending on observed conditions"
              },
              answer: "D",
              explanation: "BPG4 invites judgement: a circuit with no CPC feeding Class II only (luminaires) may be C2; a circuit feeding Class I socket-outlets accessible to ordinary persons lifts to C1 with on-site make-safe."
            },
            {
              number: 14,
              prompt: "Outdoor socket-outlet at a dwelling, no RCD additional protection, no IP rating compromised, in active use. Code:",
              options: {
                A: "C3",
                B: "C2 — outdoor sockets used by ordinary persons require RCD additional protection",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Outdoor sockets used by ordinary persons require 30 mA RCD additional protection. Absence is potentially dangerous (C2)."
            },
            {
              number: 15,
              prompt: "Inspector finds a single ceiling rose with a connecting tail of solid copper visibly twisted to a flex tail with no terminal. Code:",
              options: {
                A: "C3",
                B: "C2 — joint not made in suitable terminal",
                C: "C1 if the joint is exposed and accessible to a finger",
                D: "Either B or C depending on whether the joint is currently accessible"
              },
              answer: "D",
              explanation: "BPG4 invites judgement: a tape-insulated, accessible joint is C2 if not currently exposed; if the joint is accessible to a finger, the call is C1 with on-site make-safe."
            },
            {
              number: 16,
              prompt: "On a non-domestic site, the inspector identifies a C2 and the duty holder commits to remediation within 14 days. The EICR overall outcome:",
              options: {
                A: "Becomes Satisfactory",
                B: "Remains Unsatisfactory at the time of inspection; the commitment is documented but the report records observed condition",
                C: "Pending",
                D: "Conditional"
              },
              answer: "B",
              explanation: "The EICR records the observed condition. Even with a remediation plan, the C2 makes the outcome Unsatisfactory until verified-remedy paperwork closes the loop."
            },
            {
              number: 17,
              prompt: "Inspector finds a heavy load on a ring final (multiple high-current appliances) with the cable visibly warm but not discoloured. Code:",
              options: {
                A: "C1",
                B: "C2 if measured load exceeds cable rating; C3 if within rating",
                C: "C3 always",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Warm cable in itself is not a coding trigger; the test is whether load exceeds cable Iz under the actual installation method. If overload protection is not coordinated, C2; if within rating but warm, the inspector may note for the duty holder but Satisfactory unless a defect is identified."
            },
            {
              number: 18,
              prompt: "EICR observation 'Cable concealed in stud wall, route unknown' coded FI. Subsequent investigation finds the cable in safe zones with no mechanical protection issues. Resolution:",
              options: {
                A: "Re-issue EICR Unsatisfactory",
                B: "Issue written confirmation that the FI investigation found no defect; the EICR is updated / a follow-up record produced",
                C: "Code C2",
                D: "Refuse to issue"
              },
              answer: "B",
              explanation: "FI sometimes resolves with no actual defect found. Written confirmation closes the regulatory loop without further action. The duty holder retains the original EICR + investigation evidence as the compliance record."
            },
            {
              number: 19,
              prompt: "Inspector finds a domestic kitchen with two RCBOs (ring final and lights) and no main RCD. The protective scheme is otherwise sound. Record:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory if the RCBOs provide additional protection on the circuits used by ordinary persons",
                D: "C1"
              },
              answer: "C",
              explanation: "RCBOs provide both fault protection and additional protection on individual circuits. A main RCD is not required where each accessible circuit has its own RCBO. Satisfactory if the protective scheme works correctly."
            },
            {
              number: 20,
              prompt: "Inspector finds a privately rented dwelling with a 4-year-old satisfactory EICR. The next inspection is recommended in 1 year (was originally 5-year recommendation, then later inspector pulled in due to environment). Landlord obligation:",
              options: {
                A: "Wait for the 5-year mark",
                B: "Commission new EICR within 1 year per the inspector's pulled-in recommendation",
                C: "Cancel the tenancy",
                D: "Issue a new tenancy"
              },
              answer: "B",
              explanation: "PRS Regs 2020 follow the inspector's recommendation. If the inspector pulled the interval in, the landlord must comply with the shorter interval — extending to 5 years would breach the regulations."
            },
            {
              number: 21,
              prompt: "Inspector finds a circuit with an RCBO that fails to operate at 1×IΔn within 5 seconds. Code:",
              options: {
                A: "C3",
                B: "C2 — fault protection performance impaired",
                C: "C1 if the RCBO is the sole protective measure on accessible circuits used by ordinary persons",
                D: "Either B or C depending on protective scheme"
              },
              answer: "D",
              explanation: "RCBO failure mirrors RCD failure. C2 typical, lifting to C1 where the device is the sole guarantor of fault protection on circuits used by ordinary persons."
            },
            {
              number: 22,
              prompt: "Inspector finds a domestic dwelling with a metal CU, all RCBOs, surge protection device (SPD) status indicator showing 'replace'. Code:",
              options: {
                A: "C2",
                B: "C3 — improvement recommended (replace SPD module)",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "An SPD past end-of-life still allows the rest of the installation to operate; the surge protection function is lost but the installation is otherwise compliant. Typical call is C3 — replace the SPD module promptly."
            },
            {
              number: 23,
              prompt: "Inspector finds an active arc visible inside a metal CU, with the cover removed for inspection. Action:",
              options: {
                A: "Close cover and leave",
                B: "Isolate the CU at the main switch / DNO upstream as appropriate, label, notify duty holder same day, code C1",
                C: "Code C2",
                D: "Code C3"
              },
              answer: "B",
              explanation: "Active arcing is danger present. Isolate at the safest upstream point, label, notify duty holder, code C1 with a clear description. Same-day notification is non-negotiable."
            },
            {
              number: 24,
              prompt: "Inspector finds a non-domestic premises with seven C2s and three C3s. The duty holder under HSWA / EAWR must:",
              options: {
                A: "Action all ten within 28 days",
                B: "Address the C2s with a risk-based remedial plan promptly; plan C3s as part of routine improvement; document the prioritisation",
                C: "Action only the highest-risk one",
                D: "Wait for the next inspection"
              },
              answer: "B",
              explanation: "C2s drive the Unsatisfactory result and demand prompt action under HSWA / EAWR risk-based principles. C3s are improvements to plan over time. Documentation of the prioritisation supports compliance with the regulations."
            },
            {
              number: 25,
              prompt: "An EICR observation 'Earthing conductor present at MET; no main protective bonding to incoming water service (metallic, confirmed extraneous-conductive-part)'. Code:",
              options: {
                A: "C1",
                B: "C2 — main bonding requirement not met",
                C: "C3",
                D: "Satisfactory because earthing conductor is present"
              },
              answer: "B",
              explanation: "Bonding and earthing serve different functions. Main bonding to extraneous-conductive-parts is required to maintain equipotential during a fault. Absence is potentially dangerous (C2)."
            }
          ]
        }
      ]
    },
    {
      id: "section-5-merged-observation-scenarios",
      title: "Section 5 — Merged Observation Scenarios",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "A two-way lighting circuit's strapper conductors are identified:",
              options: {
                A: "As neutral conductors",
                B: "Green / yellow",
                C: "As line conductors",
                D: "Black"
              },
              answer: "C",
              explanation: "Strappers between two-way switches carry switched line and are identified as line conductors — usually brown sleeving on each end where the cable colours don't match."
            },
            {
              number: 2,
              prompt: "Inrush current from an ELV transformer trips a Type B 6 A MCB. The most appropriate fix is:",
              options: {
                A: "Change to a Type C MCB",
                B: "Increase the size of the CPC",
                C: "Increase the cable CSA",
                D: "Use a 20 A Type B"
              },
              answer: "A",
              explanation: "Type B trips at 3-5×In; Type C at 5-10×In. Inrush currents up to 10-12× normal in transformers / motors are absorbed by Type C without nuisance tripping. Cable / CPC changes don't address the inrush behaviour."
            },
            {
              number: 3,
              prompt: "In a bathroom, a tool-less accessible space below a bath is classified as:",
              options: {
                A: "Outside the zones",
                B: "Zone 0",
                C: "Zone 2",
                D: "Zone 1"
              },
              answer: "D",
              explanation: "BS 7671 Section 701: tool-less accessible space below a bath / shower basin is Zone 1. If the panel is screwed on (tool needed), the space is excluded from any zone."
            },
            {
              number: 4,
              prompt: "Socket-outlets on a final circuit:",
              options: {
                A: "Must always be switched",
                B: "Can be switched or unswitched",
                C: "Only switched if outdoor",
                D: "Only switched if inaccessible"
              },
              answer: "B",
              explanation: "BS 7671 doesn't mandate switched sockets. Both switched and unswitched are acceptable; switched is more common in UK domestic for convenience and child safety."
            },
            {
              number: 5,
              prompt: "Which conductor connects the MET to incoming metallic water or gas service pipework?",
              options: {
                A: "Circuit protective conductor",
                B: "Main protective bonding conductor",
                C: "Earthing conductor",
                D: "Functional earthing conductor"
              },
              answer: "B",
              explanation: "Main protective bonding conductors connect extraneous-conductive-parts (gas, water services) to the MET. The earthing conductor connects the MET to the means of earthing; the CPC ties exposed-conductive-parts of circuits back to the installation earth."
            },
            {
              number: 6,
              prompt: "A GS38 live-testing safety concern about a multi-function tester is:",
              options: {
                A: "Case colour",
                B: "A long unshrouded probe tip that could bridge between live parts",
                C: "Bluetooth logging",
                D: "Whether the leads are pouched"
              },
              answer: "B",
              explanation: "GS38 covers safe test probes and leads — short exposed tips, finger barriers, suitable insulation, fused/current-limited leads where appropriate. Long bare tips risk bridging terminals."
            },
            {
              number: 7,
              prompt: "A 13 A current passes through 0.5 Ω. Power dissipated:",
              options: {
                A: "6.5 W",
                B: "26 W",
                C: "84.5 W",
                D: "169 W"
              },
              answer: "C",
              explanation: "P = I²R = 13² × 0.5 = 169 × 0.5 = 84.5 W. The I²R loss drives cable heating — and is why a loose termination on an otherwise-correct circuit can char an accessory."
            },
            {
              number: 8,
              prompt: "UK single-phase mains nominal voltage / frequency:",
              options: {
                A: "240 V / 60 Hz",
                B: "230 V / 50 Hz",
                C: "110 V / 50 Hz",
                D: "400 V / 50 Hz"
              },
              answer: "B",
              explanation: "230 V / 50 Hz nominal (harmonised across Europe in 1995, +10% / -6% tolerance). 240 V is the legacy figure, 110 V centre-tapped is the construction-site standard, 400 V is line-to-line on three-phase."
            },
            {
              number: 9,
              prompt: "For 230 V RMS sinusoidal, the approximate peak voltage is:",
              options: {
                A: "163 V",
                B: "230 V",
                C: "325 V",
                D: "460 V"
              },
              answer: "C",
              explanation: "Vpeak = Vrms × √2 = 230 × 1.414 ≈ 325 V. RMS is the equivalent DC value producing the same heating effect; peak matters for insulation, SPD selection and oscilloscope interpretation."
            },
            {
              number: 10,
              prompt: "Three 6 Ω resistors in parallel:",
              options: {
                A: "0.5 Ω",
                B: "2 Ω",
                C: "6 Ω",
                D: "18 Ω"
              },
              answer: "B",
              explanation: "RT = R / n = 6 / 3 = 2 Ω. The same three in series give 18 Ω. Parallel paths halve the loop resistance of a ring final compared to a radial of the same CSA."
            },
            {
              number: 11,
              prompt: "An EICR finds a damaged 230 V socket cover with live parts visible at finger reach. Code:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 — basic protection failed, accessible live parts",
                D: "FI"
              },
              answer: "C",
              explanation: "Exposed accessible live parts = C1 with on-site make-safe. Isolate the circuit, label it, notify duty holder same day."
            },
            {
              number: 12,
              prompt: "A circuit feeding a Class I 2 kW immersion heater shows R1+R2 of 1.7 Ω. Ze is 0.20 Ω; protective device is Type B 16 A (0.4 s disconnection limit). Calculated Zs = 1.9 Ω; Table 41.3 limit = 1.37 Ω. Code:",
              options: {
                A: "C3",
                B: "C2 — Zs above limit, ADS may not operate within required time",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Zs above the device's limit means ADS may not disconnect within the required time. The protective measure is impaired (C2) — investigate terminations, cable size, or change protective device."
            },
            {
              number: 13,
              prompt: "On a domestic dwelling EICR, an inspector finds a metal-clad CU with all RCBOs on a brick wall, all schedules clean. Outcome:",
              options: {
                A: "Unsatisfactory",
                B: "Satisfactory",
                C: "Pending",
                D: "FI"
              },
              answer: "B",
              explanation: "Compliant configuration, clean schedules, no observations = Satisfactory. The recommended next-inspection date is set per BPG4 / GN3."
            },
            {
              number: 14,
              prompt: "Inspector finds a circuit at high Zs with FI required because instrument tolerance / temperature correction makes the call genuinely uncertain. Outcome:",
              options: {
                A: "Satisfactory",
                B: "Unsatisfactory until investigation closes the loop",
                C: "Conditional",
                D: "Pending"
              },
              answer: "B",
              explanation: "FI = Unsatisfactory. The duty holder arranges further investigation without delay; written confirmation closes the report once the actual position is known."
            },
            {
              number: 15,
              prompt: "Bath panel screwed on so a tool is required to access the space below. The space is:",
              options: {
                A: "Zone 0",
                B: "Zone 1",
                C: "Zone 2",
                D: "Excluded from any zone"
              },
              answer: "D",
              explanation: "BS 7671 701: if the panel requires a tool to remove, the space below is excluded from the zone classification. Tool-less access lifts the space to Zone 1."
            },
            {
              number: 16,
              prompt: "Inspector finds an extraneous-conductive-part metal handrail on a school staircase, no main bonding. Code:",
              options: {
                A: "C1",
                B: "C2 — extraneous-part not bonded",
                C: "C3",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Confirmed extraneous-conductive-parts must be bonded to the MET. Absence is potentially dangerous (C2) — install bonding sized per Table 54.8."
            },
            {
              number: 17,
              prompt: "On a 100 A PME supply, the minimum BS 7671 main earthing conductor CSA is:",
              options: {
                A: "6 mm²",
                B: "10 mm²",
                C: "16 mm²",
                D: "25 mm²"
              },
              answer: "C",
              explanation: "BS 7671 Table 54.7 sets PME minimum earthing conductor at 16 mm² for ≤100 A and 25 mm² above; sizing larger than this may be required by the network operator."
            },
            {
              number: 18,
              prompt: "GS38 specifies test probe tips with a maximum exposed length of (typical):",
              options: {
                A: "2 mm",
                B: "4 mm",
                C: "10 mm",
                D: "15 mm"
              },
              answer: "B",
              explanation: "GS38 typical guidance: test probe tips with no more than ~4 mm exposed metal, finger barriers and current-limited leads. Aim is to prevent inadvertent bridging between live parts."
            },
            {
              number: 19,
              prompt: "An EICR finds a non-domestic premises with no Operational or Agreed Limitations recorded, and full inspection / testing completed. Outcome:",
              options: {
                A: "Unsatisfactory because no limitations",
                B: "Outcome reflects the observations only; full coverage with no carve-outs is normal",
                C: "Satisfactory only",
                D: "Pending"
              },
              answer: "B",
              explanation: "Limitations are only recorded if they apply. Their absence simply means full coverage; the outcome is governed by C1/C2/FI presence (Unsatisfactory) or absence (Satisfactory)."
            },
            {
              number: 20,
              prompt: "On a TT-supplied dwelling, the inspector finds a 30 mA RCD providing fault protection. Earth electrode resistance measured 80 Ω. Schedule entry for the electrode:",
              options: {
                A: "C2",
                B: "Satisfactory if RCD operates correctly within disconnection times",
                C: "C3",
                D: "FI"
              },
              answer: "B",
              explanation: "On TT systems the earth electrode resistance is acceptable if the RCD provides the required disconnection time at the calculated fault current. 80 Ω is well within typical TT operating range when 30 mA RCD is fitted."
            },
            {
              number: 21,
              prompt: "Inspector finds a 1 mm² CPC on a 6 mm² 32 A radial circuit (no parallel earth path). Code:",
              options: {
                A: "C3",
                B: "C2 — undersized CPC",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Adiabatic check fails for an undersized CPC; the CPC may not survive fault current within device clearance time. C2 — replace with adequately sized CPC or upgrade protective device."
            },
            {
              number: 22,
              prompt: "An EICR observation 'Boiler-room circuits not inspected — keys with FM contractor unavailable on the day'. The duty holder must:",
              options: {
                A: "Treat as Satisfactory",
                B: "Arrange follow-up inspection of the missed area; the limitation explicitly excludes those circuits from current scope",
                C: "Cancel the report",
                D: "Code as C2"
              },
              answer: "B",
              explanation: "Agreed limitations carve out scope. The duty holder retains the legal duty to maintain safety in those areas and must arrange follow-up access; the EICR's outcome reflects only the inspected items."
            },
            {
              number: 23,
              prompt: "Inspector finds a fused spur on a ring final, fed from a 1.0 mm² T+E spur, feeding a 13 A appliance. Code:",
              options: {
                A: "C3",
                B: "C2 — undersized spur conductor",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "1.0 mm² T+E is not suitable for a 32 A ring final spur. The conductor cannot safely carry the fault current; potentially dangerous (C2) — replace with appropriately sized cable (2.5 mm² T+E)."
            },
            {
              number: 24,
              prompt: "On a privately rented dwelling, EICR Unsatisfactory; landlord remediates within 14 days, supplies written confirmation to tenant within 28 days of completion. Compliance position:",
              options: {
                A: "Non-compliant",
                B: "Compliant — within PRS Regs 2020 timescales",
                C: "Pending",
                D: "Conditional"
              },
              answer: "B",
              explanation: "PRS Regs 2020: 28 days from inspection to remediate; 28 days from completion to supply written confirmation. Acting in 14 days plus prompt confirmation is well within the regulatory timescale."
            },
            {
              number: 25,
              prompt: "Inspector finds a non-domestic premises with a Type B MCB on a circuit where the connected load includes large-inrush LED drivers causing nuisance tripping. The schedules confirm protection is intact. Record:",
              options: {
                A: "C2",
                B: "C3 — improvement recommended (consider Type C)",
                C: "Satisfactory unless protective measures are impaired; the inspector may note the recommendation but it is not a coding trigger",
                D: "C1"
              },
              answer: "C",
              explanation: "Functional nuisance-tripping is a design preference rather than a safety code where protection is intact and BS 7671 disconnection times are met. The inspector may note a recommendation for the duty holder; the outcome is Satisfactory."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "An inspector finds an exposed live conductor at a domestic kitchen ceiling rose that is accessible when the rose cover is removed. Code:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 — basic protection failed at an accessible position",
                D: "FI"
              },
              answer: "C",
              explanation: "Exposed live parts under a removable cover are accessible during normal lamp change. C1 with on-site make-safe."
            },
            {
              number: 2,
              prompt: "Bathroom Zone 1 socket-outlet — BS 7671 status:",
              options: {
                A: "Permitted with RCD only",
                B: "Generally not permitted (except shaver supply units to BS EN 61558-2-5 in some locations)",
                C: "Permitted if waterproof",
                D: "Permitted with bonding"
              },
              answer: "B",
              explanation: "BS 7671 701: Zone 1 generally prohibits socket-outlets except specific shaver supply units to BS EN 61558-2-5. Outside zones, sockets must be at least 3 m from the boundary of Zone 1 (in dwellings)."
            },
            {
              number: 3,
              prompt: "An inspector finds a 30 mA RCBO trip times — 1×IΔn 250 ms, 5×IΔn 35 ms. Schedule entry:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — both within BS 7671 limits",
                D: "FI"
              },
              answer: "C",
              explanation: "≤300 ms at 1×IΔn for fault protection and ≤40 ms at 5×IΔn for additional protection. Both readings are within limits = Satisfactory."
            },
            {
              number: 4,
              prompt: "Inspector finds a domestic shower circuit on 2.5 mm² T+E with a 32 A MCB. Cable Iz 27 A under method 100. Code:",
              options: {
                A: "C3",
                B: "C2 — overload protection not coordinated",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Cable Iz < In(device) means overload protection is not coordinated; the cable could be overloaded under normal operation. C2 — redesign protection or reduce load to match cable Iz."
            },
            {
              number: 5,
              prompt: "Inspector finds a circuit's polarity reversed at the consumer unit (line and neutral swapped). Code:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 — single-pole MCB now in neutral, isolation does not break line",
                D: "FI"
              },
              answer: "C",
              explanation: "Reversed polarity at the CU defeats single-pole isolation entirely. The line stays connected when the device opens — danger present, C1 with on-site make-safe."
            },
            {
              number: 6,
              prompt: "On a domestic dwelling EICR, the inspector finds a Class II luminaire fitted with single-pole switch in the line conductor. Schedule entry:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — Class II equipment doesn't require an earth and SP line switching is normal UK practice",
                D: "C1"
              },
              answer: "C",
              explanation: "Class II equipment relies on double insulation rather than a CPC. SP line switching is correct UK practice. Confirm basic insulation and double-insulation labelling are intact and record Satisfactory."
            },
            {
              number: 7,
              prompt: "A 6 A Type B MCB on a lighting circuit has a measured Zs of 4.4 Ω. Table 41.3 limit for 0.4 s disconnection: 7.28 Ω. For 5 s disconnection (fixed equipment): 14.57 Ω. Most appropriate record:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory if the lighting circuit qualifies for 5 s disconnection (e.g. fixed equipment, distribution circuit) and Zs is comfortably within the relevant limit",
                D: "C1"
              },
              answer: "C",
              explanation: "Lighting circuits feeding fixed equipment in dwellings can qualify for 5 s disconnection times. Zs 4.4 Ω is well within the 5 s limit. The inspector confirms the disconnection time required and records Satisfactory if comfortably within."
            },
            {
              number: 8,
              prompt: "Three 4 Ω resistors connected in series:",
              options: {
                A: "1.33 Ω",
                B: "4 Ω",
                C: "12 Ω",
                D: "0.75 Ω"
              },
              answer: "C",
              explanation: "Series: RT = R1 + R2 + R3 = 4 + 4 + 4 = 12 Ω. Parallel of the same three would give 4/3 ≈ 1.33 Ω."
            },
            {
              number: 9,
              prompt: "A circuit's measured R1+R2 is 0.50 Ω; Ze 0.30 Ω; protective device 32 A Type B (limit 1.37 Ω). Calculated Zs:",
              options: {
                A: "0.20 Ω",
                B: "0.80 Ω",
                C: "1.37 Ω",
                D: "1.67 Ω"
              },
              answer: "B",
              explanation: "Zs = Ze + R1+R2 = 0.30 + 0.50 = 0.80 Ω. Comfortably within the 32 A Type B limit of 1.37 Ω; ADS will operate within required time."
            },
            {
              number: 10,
              prompt: "A multi-function tester is being checked before use. The lock-off probe shrouds are missing. Most appropriate action:",
              options: {
                A: "Use it carefully",
                B: "Replace the leads / probes with GS38-compliant items before testing",
                C: "Tape the probes",
                D: "Use only on dead circuits"
              },
              answer: "B",
              explanation: "GS38 requires test leads with proper finger barriers, short exposed tips and current-limited leads where appropriate. Missing shrouds compromise the safety of live testing — replace with compliant probes before continuing."
            },
            {
              number: 11,
              prompt: "Inspector finds a TN-C-S installation with a missing PME warning notice at the consumer unit. Code:",
              options: {
                A: "C2",
                B: "C3 — improvement recommended (warning / labelling)",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Missing safety / warning notices are typically C3. Add a PME / TN-C-S warning at the position of the main earthing terminal so future maintenance / DNO operations are correctly informed."
            },
            {
              number: 12,
              prompt: "A 230 V supply has a peak voltage of approximately 325 V. Insulation rated 'Cat II 300 V' is suitable for normal mains use because:",
              options: {
                A: "300 V is the RMS rating",
                B: "Cat II rating refers to peak voltage and includes design margin for mains operation",
                C: "Insulation doesn't matter",
                D: "300 V is the AC frequency"
              },
              answer: "B",
              explanation: "Cat II 300 V tester insulation is rated for normal mains use including peak voltages and transient overvoltages typical of low-voltage installations downstream of socket-outlets."
            },
            {
              number: 13,
              prompt: "On a non-domestic premises EICR, the inspector finds a Class I metal accessory body where the CPC has come loose at the terminal. Code:",
              options: {
                A: "C3",
                B: "C2 — fault protection earth path impaired",
                C: "C1 if the CPC is effectively open and the accessory metalwork is reachable by ordinary persons",
                D: "Either B or C depending on whether continuity is intact"
              },
              answer: "D",
              explanation: "BPG4: a loose CPC with continuity intact is C2 — re-tighten and verify; an effectively open CPC on Class I metalwork accessible to ordinary persons is C1 with on-site make-safe."
            },
            {
              number: 14,
              prompt: "Inspector finds a domestic kitchen with a fixed cooker connection unit, the unit's outgoing connection terminations not visible (concealed behind appliance). Most appropriate action:",
              options: {
                A: "Code C2 because not visible",
                B: "Withdraw appliance to inspect or record an Operational Limitation if access is not possible",
                C: "Skip the circuit",
                D: "Code FI"
              },
              answer: "B",
              explanation: "Concealed terminations behind appliances are common. The inspector either arranges withdrawal of the appliance or records an Operational Limitation. Coding without inspection / agreement is not appropriate."
            },
            {
              number: 15,
              prompt: "A circuit's R1+R2 reads 0.20 Ω at the point of testing. Cable resistance per metre at 20 °C is 0.0145 Ω/m for line and 0.0145 Ω/m for CPC for 4 mm² T+E. Cable length is approximately:",
              options: {
                A: "Approximately 7 metres",
                B: "Approximately 14 metres",
                C: "Approximately 28 metres",
                D: "Approximately 50 metres"
              },
              answer: "A",
              explanation: "R1+R2 ≈ 2 × 0.0145 × L, so L ≈ 0.20 / (2 × 0.0145) ≈ 6.9 m. The inspector can sense-check measured R1+R2 against expected length to identify discrepancies."
            },
            {
              number: 16,
              prompt: "Inspector finds a kitchen extractor fan with a damaged supply cable, basic insulation breached, accessible. Code:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 — accessible exposed live parts",
                D: "FI"
              },
              answer: "C",
              explanation: "Breached basic insulation with accessible live parts = C1 with on-site make-safe. Isolate the circuit, label, notify duty holder same day."
            },
            {
              number: 17,
              prompt: "On a TT supply, BS 7671 typical maximum earth electrode resistance for stable, reliable RCD-based fault protection is approximately:",
              options: {
                A: "200 Ω (with stable readings, RCD providing fault protection)",
                B: "50 Ω always",
                C: "1500 Ω",
                D: "No limit"
              },
              answer: "A",
              explanation: "On TT systems with RCD protection, BS 7671 historically allowed up to 200 Ω with stable readings, supporting reliable RCD operation. Lower values give greater margin and faster operation."
            },
            {
              number: 18,
              prompt: "An EICR observation 'Bathroom mirror cabinet light fitting (Class II) installed in Zone 2'. Schedule entry:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — Zone 2 typically permits IPX4-rated luminaires (Class II is appropriate)",
                D: "C1"
              },
              answer: "C",
              explanation: "Zone 2 in BS 7671 701 typically permits IPX4-rated equipment including Class II luminaires. The inspector confirms the IP rating and class are correct for the zone and records Satisfactory."
            },
            {
              number: 19,
              prompt: "Inspector finds a circuit's RCD test confirms the test button trips the device but the inspector hasn't measured trip times. Most appropriate action:",
              options: {
                A: "Tick Satisfactory based on test button operation",
                B: "Measure trip times at 1×IΔn (and 5×IΔn for additional protection) and record values; the test button only proves the test mechanism",
                C: "Skip RCD testing",
                D: "Code FI"
              },
              answer: "B",
              explanation: "The test button is a mechanical check; it doesn't verify trip-time performance against BS 7671 limits. The inspector measures actual trip times and records them on the schedule."
            },
            {
              number: 20,
              prompt: "Inspector finds a domestic CU with all RCBOs and a Type 2 SPD. The SPD status indicator shows 'replace'. Code:",
              options: {
                A: "C2",
                B: "C3 — improvement recommended (replace SPD module)",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "An SPD past end-of-life still allows the rest of the installation to operate; the surge protection function is lost but the installation is otherwise compliant. Typical call is C3 — replace the SPD module promptly."
            },
            {
              number: 21,
              prompt: "An EICR observation 'BS 1361 fuse on a 30 A ring final, ADS times verified within limit, conductors / terminations sound'. Schedule entry:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory or C3 (improvement recommended) depending on inspector judgement; modern installations would typically use MCBs / RCBOs",
                D: "C1"
              },
              answer: "C",
              explanation: "BS 1361 fuses are not in themselves a defect if they meet ADS requirements. The inspector may record Satisfactory if everything works, or C3 with a recommendation to consider modern protection — the call depends on the wider context."
            },
            {
              number: 22,
              prompt: "Inspector finds a non-domestic premises with a metal cable tray (extraneous-conductive-part) used to support insulated cables and not connected to protective earth. Code:",
              options: {
                A: "C3",
                B: "C2 — extraneous / exposed-part not earthed; foreseeable progression to fault",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Metal containment that could become live under fault is treated as exposed-conductive-part / extraneous-part and must be earthed. Absence of earthing is C2 — install dedicated CPC or bond to MET."
            },
            {
              number: 23,
              prompt: "On a domestic EICR, an inspector finds a circuit's IR test reading 200 MΩ between line and earth. Schedule entry:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — comfortably above BS 7671 minimum (1 MΩ for in-service)",
                D: "FI"
              },
              answer: "C",
              explanation: "200 MΩ is comfortably above the 1 MΩ in-service minimum. Schedule entry records the value; no observation needed."
            },
            {
              number: 24,
              prompt: "On a non-domestic premises, EICR Unsatisfactory with one C2 (overloaded ring final). Duty holder schedule under EAWR / HSWA:",
              options: {
                A: "28 days from inspection (mandatory)",
                B: "Risk-based — promptly with documented prioritisation; non-domestic is not on the PRS Regs 28-day clock",
                C: "12 months",
                D: "Whenever convenient"
              },
              answer: "B",
              explanation: "Non-domestic premises follow EAWR / HSWA risk-based principles. Promptly is the standard, supported by documented prioritisation. The 28-day clock is specific to PRS rented domestic dwellings."
            },
            {
              number: 25,
              prompt: "Inspector finds a circuit's protective device working at the limit of its operating envelope (Zs at limit, RCD trip times at limit). Most appropriate professional action:",
              options: {
                A: "Mark Satisfactory and walk away",
                B: "Note the borderline operation, consider FI or recommend planned remedial work to give margin, document the position clearly",
                C: "Code C2 automatically",
                D: "Refuse to issue the report"
              },
              answer: "B",
              explanation: "At-limit operation is technically Satisfactory but lacks margin against future deterioration. The inspector may use FI if the reading is genuinely uncertain, or note the borderline position with a recommendation for proactive maintenance — exposing the duty holder's residual risk for informed decision."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "An inspector finds a hospital theatre circuit's CPC has corroded to a fragile state at the busbar; continuity is intermittent. Code:",
              options: {
                A: "C3",
                B: "C2 — fault protection earth path unreliable",
                C: "C1 — accessible exposed-conductive-parts of theatre equipment depend on this CPC",
                D: "Either B or C depending on continuity testing and accessibility"
              },
              answer: "D",
              explanation: "BPG4 invites judgement: an intermittent CPC providing some fault protection is C2; an effectively open CPC on Class I theatre equipment used by ordinary persons is C1. Hospital duty holders typically take an aggressive risk-based view."
            },
            {
              number: 2,
              prompt: "BS 7671 Section 701 zones: Zone 0 in a bath:",
              options: {
                A: "Inside the bath itself",
                B: "Above the bath",
                C: "Outside the bath",
                D: "The whole bathroom"
              },
              answer: "A",
              explanation: "Zone 0 = the inside of a bath / shower basin. Zone 1 extends to 2.25 m above the floor or top of the bath / shower; Zone 2 is the 0.6 m horizontal extension from Zone 1."
            },
            {
              number: 3,
              prompt: "An EICR's Schedule of Test Results shows a circuit with 'IR open circuit' between line and earth. Most appropriate interpretation:",
              options: {
                A: "Cable damaged",
                B: "IR is so high the meter cannot resolve a value (effectively perfect insulation) — record as >999 MΩ or Satisfactory",
                C: "Cable shorted",
                D: "Code C2"
              },
              answer: "B",
              explanation: "'Open circuit' on an IR test means very high resistance — effectively perfect insulation. Record as >999 MΩ (or whatever the instrument shows) and Satisfactory."
            },
            {
              number: 4,
              prompt: "Inspector finds a non-domestic premises with a 5 m extension lead trailing through a corridor used by ordinary persons, with multiple appliances daisy-chained. Schedule entry:",
              options: {
                A: "C2 on the EICR",
                B: "C3 on the EICR",
                C: "Outside fixed-installation EICR scope; the inspector may flag it in the summary as a hazard but it doesn't drive a coded observation",
                D: "C1"
              },
              answer: "C",
              explanation: "Portable / non-fixed equipment is outside the fixed-installation EICR scope. The inspector may note the hazard in the summary or recommend a separate review (PAT-style) but it doesn't drive a coded observation on the fixed installation."
            },
            {
              number: 5,
              prompt: "On a domestic EICR, an inspector finds a 13 A plug fuse blown on a connected appliance. Schedule entry:",
              options: {
                A: "C2",
                B: "C3",
                C: "Outside fixed-installation EICR scope; appliances are PAT territory",
                D: "C1"
              },
              answer: "C",
              explanation: "Plug fuses on portable appliances are PAT scope, not fixed-installation EICR scope. The inspector may note the issue informally but it doesn't drive a coded EICR observation."
            },
            {
              number: 6,
              prompt: "An EICR identifies a circuit's R1+R2 reading much higher than expected for the cable length. Most appropriate next step:",
              options: {
                A: "Ignore",
                B: "Investigate for high-resistance terminations; if cause cannot be determined during inspection, code FI",
                C: "Code C2 automatically",
                D: "Code C3"
              },
              answer: "B",
              explanation: "Anomalously high R1+R2 typically indicates a high-resistance termination somewhere on the circuit. The inspector investigates by re-tightening / re-testing; if the cause cannot be determined during the visit, FI is appropriate."
            },
            {
              number: 7,
              prompt: "On a 230 V supply, the prospective short-circuit current at the origin is measured at 1.2 kA. The protective device's breaking capacity must be:",
              options: {
                A: "At least 1.2 kA",
                B: "At least 6 kA (BS EN 60898 standard rating typically used in UK domestic installations)",
                C: "At least 100 kA",
                D: "Optional"
              },
              answer: "B",
              explanation: "BS EN 60898 standard MCBs are rated to 6 kA — comfortably above typical domestic prospective short-circuit currents. Industrial settings may need higher Icu / Ics ratings."
            },
            {
              number: 8,
              prompt: "Inspector finds a circuit feeding outdoor 230 V garden lighting, RCD additional protection in place, IP rating of luminaires correct. Outcome:",
              options: {
                A: "Unsatisfactory",
                B: "Satisfactory if no other defects observed; the design appears compliant",
                C: "Pending",
                D: "FI"
              },
              answer: "B",
              explanation: "RCD additional protection on garden lighting + correct IP rating of luminaires + no other defects = Satisfactory. The schedules support the result."
            },
            {
              number: 9,
              prompt: "Five 10 Ω resistors connected in parallel:",
              options: {
                A: "0.5 Ω",
                B: "2 Ω",
                C: "10 Ω",
                D: "50 Ω"
              },
              answer: "B",
              explanation: "RT = R / n = 10 / 5 = 2 Ω. The same five in series would total 50 Ω."
            },
            {
              number: 10,
              prompt: "Inspector finds a non-domestic premises with a damaged metal-clad CU door, IP rating compromised. Code:",
              options: {
                A: "C1",
                B: "C2 — IP rating compromised, foreseeable progression to fault",
                C: "C3",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "IP rating breach with intact internals is C2 — replace the door / repair the seal. C1 if the breach has already exposed live parts or led to internal damage."
            },
            {
              number: 11,
              prompt: "On an EICR, an item the inspector cannot definitively assess (e.g. a sealed appliance enclosure that cannot be opened on the day) is most appropriately:",
              options: {
                A: "Recorded as C2",
                B: "Recorded as FI — further investigation required to determine condition",
                C: "Recorded as C3",
                D: "Skipped"
              },
              answer: "B",
              explanation: "FI captures evidence of a possible defect that the inspector cannot diagnose during the inspection. The investigation closes the loop; the EICR is Unsatisfactory until it is done."
            },
            {
              number: 12,
              prompt: "An inspector finds a damaged armoured cable gland on a school's playground supply (cable to outdoor security lighting), inner cores intact. Code (typical):",
              options: {
                A: "C3",
                B: "C2 (likely) — mechanical / earthing reliability of SWA reduced",
                C: "C1 if cores damaged exposing live parts",
                D: "Either B or C depending on observed condition"
              },
              answer: "D",
              explanation: "BPG4 again invites judgement: damaged gland with intact cores = C2; damaged gland with breached basic insulation = C1 with on-site make-safe. School / public-access setting may push the inspector toward stricter coding."
            },
            {
              number: 13,
              prompt: "Inspector finds a 30 mA RCD that does not respond to the test button or to the multi-function tester. Code:",
              options: {
                A: "C3",
                B: "C2",
                C: "C1 — protective device non-functional, sole protective measure on accessible circuits",
                D: "Either B or C depending on whether the RCD is the sole protective measure"
              },
              answer: "D",
              explanation: "BPG4: non-functional RCD where it is one of multiple protective layers may be C2; where it is the sole guarantor against direct contact (e.g. cables in safe zones with no earthed mechanical protection), the call lifts to C1."
            },
            {
              number: 14,
              prompt: "On a non-domestic EICR, an inspector finds an underground cable's gland-end visibly damp, with corrosion at the gland and basic insulation visibly degraded. Code:",
              options: {
                A: "C3",
                B: "C2 — environmental damage progressing toward fault",
                C: "C1 if basic insulation breach is exposing live parts",
                D: "Either B or C depending on observed condition"
              },
              answer: "D",
              explanation: "BPG4: contained corrosion with no exposed live parts = C2 with prompt remedy; exposed live parts = C1 with on-site make-safe."
            },
            {
              number: 15,
              prompt: "Inspector finds a domestic CU's spare way with the MCB removed and the way blanked correctly. Schedule entry:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — correctly blanked spare way is compliant",
                D: "FI"
              },
              answer: "C",
              explanation: "Correctly blanked spare way maintains basic protection / IP rating of the CU. Satisfactory; the schedule entry confirms the spare way's status."
            },
            {
              number: 16,
              prompt: "Inspector finds a 32 A radial circuit on 6 mm² T+E, run in conduit clipped direct (method 100 in BS 7671 Appendix 4). Cable Iz approximately 47 A. Schedule entry:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — cable Iz comfortably exceeds device In",
                D: "FI"
              },
              answer: "C",
              explanation: "Cable Iz 47 A > device In 32 A, with margin for derating factors. Schedule entry records the conductor / installation method and Satisfactory."
            },
            {
              number: 17,
              prompt: "An EICR observation 'Plastic CU on combustible (wooden) backboard' in a domestic dwelling, no other defects, current BPG4 typical code:",
              options: {
                A: "C1",
                B: "C2 (older BPG4 default)",
                C: "C3 (current BPG4 default for non-DSEAR domestic)",
                D: "Satisfactory only"
              },
              answer: "C",
              explanation: "Current BPG4 places intact plastic CUs on wooden backboards (non-DSEAR domestic) at C3. Earlier guidance was C2; the consensus moved as fire-spread concerns shifted to termination quality and metal-CU containment for new work."
            },
            {
              number: 18,
              prompt: "Inspector finds an undersized main bonding conductor (4 mm² where 10 mm² required for current PME supply). Code:",
              options: {
                A: "C3",
                B: "C2 — main bonding conductor inadequate for fault currents",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Undersized main bonding cannot reliably maintain equipotential during a fault. C2 — replace with adequately sized conductor per BS 7671 Table 54.8 (typically 10 mm² for main bonding on a TN-C-S supply with 16 mm² earthing conductor)."
            },
            {
              number: 19,
              prompt: "On a domestic EICR, an inspector finds a metal-clad CU with all RCBOs, surge protection device fitted and working. Outcome (no other observations):",
              options: {
                A: "Unsatisfactory",
                B: "Satisfactory — modern compliant configuration",
                C: "Pending",
                D: "FI"
              },
              answer: "B",
              explanation: "Modern compliant configuration with no observations = Satisfactory. The recommended next-inspection date is set per BPG4 / GN3 (typically 5 years for a domestic dwelling)."
            },
            {
              number: 20,
              prompt: "Inspector finds a cable that was previously coded C2 but has now been remediated and re-tested. The new EICR records:",
              options: {
                A: "C2 historically",
                B: "Satisfactory if the remedy is effective; the previous C2 lives in the previous report",
                C: "C3 to acknowledge the previous concern",
                D: "FI"
              },
              answer: "B",
              explanation: "Each EICR captures current condition. A previously fixed C2 that is now compliant is Satisfactory on the new report. The previous observation lives in the previous report; the new report doesn't carry it forward."
            },
            {
              number: 21,
              prompt: "An office EICR finds a 230 V mains-fed network switch in a desk-mounted server cabinet, fed via a portable extension lead. Schedule entry:",
              options: {
                A: "C2 because of the extension lead",
                B: "C3 on the fixed installation if the supply socket is satisfactory; the extension lead is outside fixed-installation scope but may be flagged in the summary",
                C: "C1",
                D: "FI"
              },
              answer: "B",
              explanation: "The fixed installation's role ends at the socket-outlet. The extension lead is portable equipment outside the EICR's coding scope; the inspector may flag the daisy-chain hazard in the summary but it doesn't drive a coded observation."
            },
            {
              number: 22,
              prompt: "On a non-domestic premises, the inspector finds a high-fault-level supply with a CU containing 6 kA standard MCBs. Code:",
              options: {
                A: "C3",
                B: "C2 — protective device breaking capacity inadequate for the supply",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "If the supply's prospective fault current exceeds the protective device's breaking capacity, the device cannot reliably clear a fault. C2 — replace with appropriately rated devices (e.g. 10 kA, 25 kA or backup-fused arrangement)."
            },
            {
              number: 23,
              prompt: "Inspector finds a domestic kitchen with a previously-installed RCBO on the ring final, and a separate non-RCD-protected MCB on the lighting circuit. Modern dwelling. Schedule entry:",
              options: {
                A: "C1",
                B: "C2 if cables are also outside safe zones / unprotected; C3 if otherwise compliant",
                C: "C3 only",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Lighting circuit without RCD in a modern dwelling is typically C3 — improvement recommended (current edition expects RCD on lighting in dwellings). If cables are also outside safe zones or otherwise unprotected, the call rises to C2."
            },
            {
              number: 24,
              prompt: "An EICR observation 'Bonding clamp on water service is BS 951 compliant, mechanically sound, continuity verified'. Schedule entry:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — bonding installation correct",
                D: "FI"
              },
              answer: "C",
              explanation: "BS 951 clamp, mechanically sound, continuity verified = Satisfactory. The schedule records the clamp type and condition."
            },
            {
              number: 25,
              prompt: "Inspector finds a domestic dwelling EICR with one C2 (missing main bonding to gas service). The remedy is:",
              options: {
                A: "Replace the entire CU",
                B: "Install main protective bonding conductor (typically 10 mm²) from MET to gas service entry, using BS 951 clamp; verify continuity; issue written confirmation",
                C: "Issue a new EICR",
                D: "Code C3"
              },
              answer: "B",
              explanation: "The remedy for missing main bonding is to install the bonding conductor and clamp, verify continuity, and confirm in writing. The PRS Regs 2020 28-day clock applies; the duty holder commissions the work and supplies confirmation to the tenant within 28 days of completion."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "An inspector finds a circuit feeding a domestic shower with no RCD protection. The shower is 9.5 kW with cable run partly through stud walls. Code:",
              options: {
                A: "C3",
                B: "C2 — required additional protection / cable-route protection not provided",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Modern shower circuits require 30 mA RCD additional protection (or RCBO). Cable run through stud walls without mechanical protection or RCD adds C2 weight. Remedy by adding 30 mA RCD or RCBO."
            },
            {
              number: 2,
              prompt: "On a 230 V single-phase circuit, voltage drop on a 10 m run of 4 mm² T+E carrying 25 A (typical mV/A/m ≈ 11 mV/A/m). Calculated voltage drop:",
              options: {
                A: "Approximately 0.55 V",
                B: "Approximately 2.75 V",
                C: "Approximately 11 V",
                D: "Approximately 27.5 V"
              },
              answer: "B",
              explanation: "Voltage drop = mV/A/m × A × m / 1000 = 11 × 25 × 10 / 1000 = 2.75 V. Within BS 7671 typical limits (3% for lighting / 5% for power on 230 V)."
            },
            {
              number: 3,
              prompt: "Inspector finds a hospital ward circuit with a Schedule of Test Results showing all readings within BS 7671 limits and no visible defects. Outcome:",
              options: {
                A: "Unsatisfactory",
                B: "Satisfactory if no observations are recorded",
                C: "Pending",
                D: "FI"
              },
              answer: "B",
              explanation: "All readings within limits + no observations = Satisfactory. The Schedule of Test Results supports the outcome; the inspector signs and dates the report."
            },
            {
              number: 4,
              prompt: "BS 7671 Section 701 zone for a basin-type shower with rim 1500 mm above the floor: Zone 1 extends to:",
              options: {
                A: "1500 mm above the rim",
                B: "2250 mm above the floor (the 'standard' Zone 1 ceiling)",
                C: "Floor level only",
                D: "The whole bathroom"
              },
              answer: "B",
              explanation: "Zone 1 typically extends to 2.25 m above the floor or top of the bath / shower (whichever is higher). Above 2.25 m the space is Zone 2 (where it qualifies)."
            },
            {
              number: 5,
              prompt: "Inspector finds an EICR Schedule of Inspections marked ✓ on items the inspector did not actually check. The risk is:",
              options: {
                A: "None",
                B: "The inspector takes responsibility for an item they have not verified, and the report is misleading",
                C: "Saved time",
                D: "Paperwork only"
              },
              answer: "B",
              explanation: "✓ creates a positive declaration of acceptable condition. Marking it without inspection is fraudulent and exposes the inspector to civil and regulatory liability. Use N/A or record an agreed limitation instead."
            },
            {
              number: 6,
              prompt: "On a TN-S supply, Ze measured at 0.20 Ω. R1+R2 measured 0.85 Ω. Calculated Zs:",
              options: {
                A: "0.65 Ω",
                B: "1.05 Ω",
                C: "1.70 Ω",
                D: "0.20 Ω"
              },
              answer: "B",
              explanation: "Zs = Ze + R1+R2 = 0.20 + 0.85 = 1.05 Ω. Compare with Table 41.3 limit for the protective device to verify ADS adequacy."
            },
            {
              number: 7,
              prompt: "Inspector finds a school's electrical isolator that does not actually de-energise the labelled circuit when operated (mis-installed). Code:",
              options: {
                A: "C3",
                B: "C2 — isolation switching incomplete; safety device misleading",
                C: "C1 if maintenance reliance on the isolator could leave operatives at exposed live parts",
                D: "Either B or C depending on the circumstances"
              },
              answer: "D",
              explanation: "BPG4: a misleading isolator is C2 with prompt remedy; if there is foreseeable risk that maintenance staff would rely on it for live work, the call lifts to C1. School premises with multiple maintenance contractors invite stricter coding."
            },
            {
              number: 8,
              prompt: "Inspector finds a domestic CU with one RCBO that fails the 5×IΔn test (no trip within 40 ms) but passes the 1×IΔn test (300 ms). Code:",
              options: {
                A: "C3",
                B: "C2 — additional protection performance impaired",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Failure at 5×IΔn means additional protection performance (≤40 ms) is not met. The fault-protection function (1×IΔn) operates correctly but additional protection for direct contact is unreliable. C2 — replace the device."
            },
            {
              number: 9,
              prompt: "On a domestic EICR, the inspector finds a circuit's RCBO that has had its test button pressed but the RCBO did not trip. Subsequent live-test instrument confirms inoperative. Code:",
              options: {
                A: "C3",
                B: "C2 — protective device non-functional, but other layers of protection may still apply",
                C: "C1 — sole protective measure on accessible circuits used by ordinary persons",
                D: "Either B or C depending on whether RCBO is the sole protective measure"
              },
              answer: "D",
              explanation: "BPG4 invites judgement: failure where RCBO is one of multiple protective layers may be C2; where it is the sole guarantor against direct contact (e.g. on accessible socket-outlets) the call lifts to C1."
            },
            {
              number: 10,
              prompt: "An EICR observation 'EICR document set incomplete: Schedule of Inspections present but Schedule of Test Results not held by duty holder' on a previous report. Code on current EICR:",
              options: {
                A: "C2",
                B: "C3 — improvement recommended (documentation gap on prior report)",
                C: "C1",
                D: "FI"
              },
              answer: "B",
              explanation: "Missing previous documentation is a C3 documentation finding. The current inspector produces a complete EICR + schedules; the past gap is recorded but not coded as a present danger."
            },
            {
              number: 11,
              prompt: "Inspector finds a domestic dwelling with active condensation visible inside a metal CU, surface corrosion at the busbar; no exposed live parts. Code:",
              options: {
                A: "C3",
                B: "C2 — environmental conditions degrading equipment, foreseeable progression",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Active moisture / corrosion in a CU is C2 — relocate / replace the CU, address the environmental cause. Active arcing or exposed live parts would lift to C1."
            },
            {
              number: 12,
              prompt: "Two 6 Ω resistors in series, then in parallel with a 3 Ω resistor:",
              options: {
                A: "1.5 Ω",
                B: "2.4 Ω",
                C: "3.0 Ω",
                D: "12 Ω"
              },
              answer: "B",
              explanation: "Series: 6 + 6 = 12 Ω. Parallel with 3 Ω: 1/RT = 1/12 + 1/3 = 1/12 + 4/12 = 5/12; RT = 12/5 = 2.4 Ω."
            },
            {
              number: 13,
              prompt: "An EICR observation 'Domestic dwelling with mortice-tail bonding clamp on lead water service pipe, mechanically sound, continuity verified'. Code:",
              options: {
                A: "C2",
                B: "C3 — improvement recommended (replace with BS 951 clamp)",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Older clamps are typically C3 — replace with BS 951 type for current compliance. Where continuity is intact and the clamp is sound, it functions but is not best-practice."
            },
            {
              number: 14,
              prompt: "Inspector finds a domestic CU with all RCBOs and a Type 2 SPD. Schedule of Test Results clean, no other observations. Outcome:",
              options: {
                A: "Unsatisfactory",
                B: "Satisfactory — modern compliant configuration",
                C: "Pending",
                D: "FI"
              },
              answer: "B",
              explanation: "Modern compliant configuration + clean schedules + no observations = Satisfactory. The recommended next-inspection date is set per BPG4 / GN3."
            },
            {
              number: 15,
              prompt: "On a non-domestic premises EICR, the inspector finds a 3-phase 32 A motor circuit with the motor's earth lug visibly loose, continuity intermittent. Code:",
              options: {
                A: "C3",
                B: "C2 — fault protection earth path unreliable",
                C: "C1 if continuity is effectively lost and motor body becomes potentially live",
                D: "Either B or C depending on continuity testing"
              },
              answer: "D",
              explanation: "BPG4: loose-but-intermittent CPC = C2 with prompt remedy; effectively open CPC on Class I motor body accessible to maintenance staff = C1 with on-site make-safe."
            },
            {
              number: 16,
              prompt: "Inspector finds a domestic kitchen with a fixed cooker hood (Class I) with the CPC connected and continuity verified. The cooker hood is fed from a switched fused spur. Schedule entry:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — Class I appliance correctly fed and earthed",
                D: "C1"
              },
              answer: "C",
              explanation: "Class I appliance with verified CPC, fed from a fused spur (rated for the load) = correctly installed. Schedule entry confirms the configuration; Satisfactory."
            },
            {
              number: 17,
              prompt: "Inspector finds a non-domestic premises with a 230 V circuit where measured Ze is 0.10 Ω, R1+R2 0.50 Ω, Zs 0.60 Ω; protective device is Type B 32 A (Table 41.3 limit 1.37 Ω). Schedule entry:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — Zs comfortably within limit",
                D: "FI"
              },
              answer: "C",
              explanation: "Zs 0.60 Ω vs limit 1.37 Ω = comfortable margin. Schedule entry records the values; ADS will operate within required time."
            },
            {
              number: 18,
              prompt: "An EICR observation 'Recently installed PV array, no AC isolator label visible'. Code:",
              options: {
                A: "C1",
                B: "C2 — labelling required for emergency isolation",
                C: "C3 — improvement recommended (label)",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "PV systems require correct AC and DC isolation labelling. Missing label is potentially dangerous (C2) — emergency responders need to identify and isolate correctly."
            },
            {
              number: 19,
              prompt: "Inspector finds a 13 A current passing through a conductor of resistance 0.3 Ω. Power dissipated:",
              options: {
                A: "13 W",
                B: "39 W",
                C: "50.7 W",
                D: "169 W"
              },
              answer: "C",
              explanation: "P = I²R = 13² × 0.3 = 169 × 0.3 = 50.7 W. The I²R loss drives cable heating — and is what makes a loose termination a developing fire risk."
            },
            {
              number: 20,
              prompt: "Inspector finds a school with a recently extended IT room and a new circuit installed without certification. The lack of EIC for the new circuit is recorded as:",
              options: {
                A: "C1",
                B: "C2",
                C: "C3 — improvement recommended (certification gap)",
                D: "FI"
              },
              answer: "C",
              explanation: "Lack of original certification is a documentation issue. C3 — improvement recommended (obtain certification or document the works retrospectively). The inspector still tests the circuit and codes any technical defects separately."
            },
            {
              number: 21,
              prompt: "An EICR observation 'Cable run in trunking with 70% fill factor exceeding BS 7671 reference values'. Code (typical):",
              options: {
                A: "C1",
                B: "C2 — derating not addressed, cable could be overloaded",
                C: "C3 — improvement recommended (verify cable rating with derating factors)",
                D: "Satisfactory"
              },
              answer: "C",
              explanation: "High fill factor reduces cable Iz via derating. C3 typical (verify cable rating with derating, redesign if necessary). C2 if measured load already exceeds derated cable rating."
            },
            {
              number: 22,
              prompt: "Inspector finds a domestic CU with a 30 mA RCD that protects the entire installation (one main RCD). Half the circuits are non-essential. Code:",
              options: {
                A: "C2 — single RCD protects too many circuits",
                B: "C3 — improvement recommended (modern installation would use separate RCBOs / split RCDs to reduce nuisance-tripping impact)",
                C: "C1",
                D: "Satisfactory if the protection works correctly"
              },
              answer: "D",
              explanation: "A single main RCD protecting all circuits was acceptable practice; modern installations use split-load or RCBOs to limit the impact of nuisance trips. If the RCD works correctly, Satisfactory; the inspector may note a recommendation for split protection."
            },
            {
              number: 23,
              prompt: "An EICR observation 'Damaged sheath at entry to switch box; basic insulation intact; cable not flexing'. Code:",
              options: {
                A: "C1",
                B: "C2 — mechanical protection compromised, foreseeable progression",
                C: "C3",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Damaged sheath at enclosure entry compromises mechanical protection. C2 — re-make the termination. C1 if basic insulation is also breached."
            },
            {
              number: 24,
              prompt: "Inspector finds a domestic dwelling with all observations addressed since the previous EICR (which was Unsatisfactory). The current EICR records:",
              options: {
                A: "Unsatisfactory by default",
                B: "Outcome based on currently observed condition; if remediation is verified and no new defects are found, Satisfactory",
                C: "Pending",
                D: "FI"
              },
              answer: "B",
              explanation: "Each EICR captures current condition. Verified remediation of previous Unsatisfactory items + no new defects = Satisfactory current outcome. The previous report's Unsatisfactory result lives in that report; the new one is independent."
            },
            {
              number: 25,
              prompt: "On a non-domestic site, the duty holder shows the inspector remediation evidence (invoices, photographs) for previous C2 items but no written confirmation from a qualified person. The inspector should:",
              options: {
                A: "Accept the evidence and issue Satisfactory",
                B: "Recommend the duty holder obtain proper written confirmation; carry out their own inspection / testing of the remediated items as part of the new EICR",
                C: "Refuse to inspect",
                D: "Code FI"
              },
              answer: "B",
              explanation: "Written confirmation from a qualified person is the standard compliance evidence. The new EICR may include re-inspection / re-test of the remediated items, with the inspector's own findings driving the outcome. The duty holder should keep the qualified-person confirmation as their compliance trail."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "An inspector finds an agricultural building's outdoor distribution board with seal failure and active water ingress, basic insulation visibly degrading. Code:",
              options: {
                A: "C3",
                B: "C2 — IP rating compromised, foreseeable progression to fault",
                C: "C1 if basic insulation is breached and live parts exposed",
                D: "Either B or C depending on observed condition"
              },
              answer: "D",
              explanation: "Agricultural premises have stricter environmental requirements (BS 7671 705). Compromised IP rating with intact insulation is C2; breached insulation exposing live parts is C1 with on-site make-safe."
            },
            {
              number: 2,
              prompt: "BS 7671 Section 705 (agricultural / horticultural premises) typically requires:",
              options: {
                A: "Additional protection by 30 mA RCD for socket-outlet circuits up to 32 A",
                B: "No RCD protection",
                C: "Class 0 equipment only",
                D: "Conventional dry-room protection"
              },
              answer: "A",
              explanation: "BS 7671 705 requires additional protection by 30 mA RCD for typical socket-outlet circuits in agricultural / horticultural premises, due to the wet, dirty, mechanically harsh environment that increases shock and fault risk."
            },
            {
              number: 3,
              prompt: "An inspector finds a non-domestic premises with a sub-main fed from a 100 A switch-fuse with HRC 80 A fuse links. Cable Iz is 75 A. Code:",
              options: {
                A: "C3",
                B: "C2 — overload protection not coordinated (In > Iz)",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Cable Iz < In(device) means overload protection is not coordinated; cable could be overloaded under normal operation. C2 — fit a smaller fuse link, upgrade cable, or reduce design current to match cable Iz."
            },
            {
              number: 4,
              prompt: "Inspector finds a kitchen with a fixed cooker (45 A circuit), where the cooker control unit and a 13 A switched socket are combined. Cable to the cooker is 6 mm² T+E. Schedule entry:",
              options: {
                A: "C2 because of the combined cooker / socket unit",
                B: "C3",
                C: "Satisfactory if the protective device, cable size and load are correctly coordinated; combined cooker / socket units are acceptable",
                D: "C1"
              },
              answer: "C",
              explanation: "Combined cooker control units with integrated 13 A socket are common UK practice. Schedule entry confirms cable size, protective device, polarity etc. Satisfactory if everything is correctly coordinated."
            },
            {
              number: 5,
              prompt: "Inspector finds a domestic dwelling with a 100 A main switch fed from the DNO supply, with neutral conductor visibly broken at the cut-out (sealed by the DNO). The inspector should:",
              options: {
                A: "Re-make the connection",
                B: "Notify the DNO immediately; the DNO's cut-out and meter tails up to the consumer's installation are the DNO's responsibility",
                C: "Code C1 and ignore the boundary",
                D: "Code C2"
              },
              answer: "B",
              explanation: "DNO equipment is the DNO's responsibility. The inspector notifies the DNO immediately for action on the cut-out; the inspector's coding applies to the consumer's installation downstream of the meter. Document the issue clearly on the EICR."
            },
            {
              number: 6,
              prompt: "An EICR observation 'Domestic dwelling lighting circuit, no RCD additional protection, dwelling pre-dates current edition'. Code (typical, BPG4):",
              options: {
                A: "C1",
                B: "C2",
                C: "C3 — improvement recommended (current edition exceeds original)",
                D: "Satisfactory only"
              },
              answer: "C",
              explanation: "BS 7671 not retrospective. Lighting circuit complying with original edition but not current is C3 — improvement recommended (add 30 mA RCD protection). C2 may apply if cables are also outside safe zones / unprotected."
            },
            {
              number: 7,
              prompt: "Inspector finds a domestic CU with three RCBOs and three MCBs. The MCB-protected circuits feed kitchen socket-outlets. Code:",
              options: {
                A: "C3",
                B: "C2 — accessible socket-outlets without RCD additional protection",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Kitchen socket-outlets used by ordinary persons require RCD additional protection per current edition. MCB-only protection is C2 — replace MCBs with RCBOs or add RCD protection."
            },
            {
              number: 8,
              prompt: "Inspector finds a domestic dwelling with a TT system, 30 mA RCD providing fault protection, earth electrode resistance 50 Ω. Schedule entry:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — TT with RCD protection at acceptable electrode resistance",
                D: "FI"
              },
              answer: "C",
              explanation: "TT system with 30 mA RCD providing fault protection at electrode resistance well within typical TT operating range = Satisfactory. The schedule records electrode resistance and RCD trip times."
            },
            {
              number: 9,
              prompt: "On a hospital EICR, an Operational Limitation has been recorded for theatre circuits that cannot be isolated. The duty holder's responsibility:",
              options: {
                A: "Accept the gap permanently",
                B: "Plan a follow-up inspection in a maintenance window; until then, retain risk-based interim controls and document the position",
                C: "Cancel the EICR",
                D: "Code C2"
              },
              answer: "B",
              explanation: "Operational limitations carve out scope; the duty holder retains the legal duty under HSWA / EAWR to ensure safety. They plan a maintenance window for the missed circuits and document interim risk controls."
            },
            {
              number: 10,
              prompt: "An EICR observation 'Bathroom Zone 1 luminaire with IP44 rating' on a domestic dwelling. Schedule entry:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — IP44 is acceptable for Zone 1 in BS 7671 701",
                D: "C1"
              },
              answer: "C",
              explanation: "BS 7671 701: Zone 1 typically requires IPX4 / IP4X-rated equipment; IP44 satisfies this requirement. The schedule confirms the IP rating; Satisfactory."
            },
            {
              number: 11,
              prompt: "Inspector finds a non-domestic premises with a main switch fitted as a single-pole device on a 230 V single-phase supply. Code:",
              options: {
                A: "C3",
                B: "C2 — main switch should be DP (or all poles) for full isolation",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Main switches on 230 V single-phase supplies should be DP (line + neutral) to provide full isolation per BS 7671 537. SP main switches leave the neutral connected — potentially dangerous (C2) — replace with DP."
            },
            {
              number: 12,
              prompt: "Inspector finds a domestic dwelling with a 30 mA RCD providing additional protection, trip times 1×IΔn 290 ms, 5×IΔn 38 ms. Schedule entry:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — within BS 7671 limits (≤300 ms / ≤40 ms)",
                D: "FI"
              },
              answer: "C",
              explanation: "Both readings within limits = Satisfactory. The borderline trip time at 1×IΔn might invite a future check, but as recorded it satisfies BS 7671 disconnection time requirements."
            },
            {
              number: 13,
              prompt: "An EICR observation 'Damaged extension lead in domestic kitchen, basic insulation visibly compromised'. Schedule entry:",
              options: {
                A: "C2 on the EICR",
                B: "C3 on the EICR",
                C: "Outside fixed-installation EICR scope; portable equipment is PAT territory; the inspector may flag the hazard in the summary",
                D: "C1"
              },
              answer: "C",
              explanation: "Extension leads are portable equipment outside the EICR's coding scope. The inspector may flag the hazard in the summary or recommend a separate review (PAT-style); fixed-installation EICR coding doesn't apply."
            },
            {
              number: 14,
              prompt: "Inspector finds a domestic CU with all RCBOs and a Type 2 SPD with status indicator green (within service life). Schedule entry:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — modern compliant configuration",
                D: "C1"
              },
              answer: "C",
              explanation: "Modern compliant configuration with SPD within service life = Satisfactory. The schedule confirms SPD presence and status; the inspector includes a note about expected SPD service life for the duty holder's planning."
            },
            {
              number: 15,
              prompt: "On a 100 A PME supply with fault level 16 kA at the origin, the protective devices' breaking capacity must be:",
              options: {
                A: "≥6 kA (BS EN 60898 standard)",
                B: "≥16 kA (matched to prospective fault current)",
                C: "≥1 kA",
                D: "Optional"
              },
              answer: "B",
              explanation: "Breaking capacity must equal or exceed prospective fault current. 6 kA standard MCBs would be inadequate; 10 kA / 16 kA / 25 kA devices or backup-fused arrangements would be required to safely interrupt a fault."
            },
            {
              number: 16,
              prompt: "Inspector finds a non-domestic premises with a 3-phase 32 A motor circuit, all protective measures intact, R1+R2 verified, motor body earthed. Schedule entry:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — protective measures intact",
                D: "FI"
              },
              answer: "C",
              explanation: "Protective measures intact, schedules clean = Satisfactory. The motor circuit's specific test set (Zs, R1+R2, IR, RCD if fitted) supports the entry."
            },
            {
              number: 17,
              prompt: "An EICR observation 'Bonding clamp on confirmed extraneous-conductive-part metallic gas pipe is loose, oxidised, but continuity intact'. Code:",
              options: {
                A: "C3",
                B: "C2 — mechanical / electrical reliability of bond reduced",
                C: "C1 if continuity is intermittent or effectively lost",
                D: "Either B or C depending on continuity testing"
              },
              answer: "D",
              explanation: "BPG4: loose-but-continuous = C2 with prompt remedy; effectively open / lost = C1 with on-site make-safe. The inspector documents the actual continuity reading."
            },
            {
              number: 18,
              prompt: "On a domestic EICR, the inspector finds a circuit's MCB rating mismatched with a label that says different rating (label says 16 A, MCB is 32 A). Code:",
              options: {
                A: "C3",
                B: "C2 — incorrect identification could mislead future maintenance",
                C: "C1",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Mismatched label / device creates a foreseeable hazard during future maintenance — the wrong device could be installed if the label is trusted, leading to under-protected cable. C2 — correct the label or replace the device to match."
            },
            {
              number: 19,
              prompt: "Inspector finds a non-domestic premises with an EICR that records two C2 observations and three C3 observations. The duty holder under HSWA / EAWR must:",
              options: {
                A: "Action all five within 28 days as for PRS dwellings",
                B: "Address the C2s with a documented risk-based remedial plan promptly; plan C3s as part of routine improvement",
                C: "Action only the most expensive one",
                D: "Wait for the next inspection"
              },
              answer: "B",
              explanation: "Non-domestic premises follow HSWA / EAWR risk-based principles. C2s drive prompt action with documented prioritisation; C3s are improvements to plan over time. The 28-day clock is specific to PRS Regs 2020 rented domestic dwellings."
            },
            {
              number: 20,
              prompt: "An EICR observation 'Class II light fitting in the dwelling kitchen, single-pole switch on the line conductor, basic insulation and double-insulation labelling intact'. Schedule entry:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — Class II equipment doesn't require an earth and SP line switching is normal UK practice",
                D: "C1"
              },
              answer: "C",
              explanation: "Class II equipment relies on double insulation rather than CPC. SP line switching is correct UK practice. Confirm basic insulation and double-insulation labelling and record Satisfactory."
            },
            {
              number: 21,
              prompt: "On a 230 V supply, the prospective short-circuit current at the origin is 6 kA. A 6 kA breaking capacity MCB is fitted. Schedule entry:",
              options: {
                A: "C2",
                B: "C3",
                C: "Satisfactory — breaking capacity equal to prospective fault current",
                D: "FI"
              },
              answer: "C",
              explanation: "Breaking capacity = prospective fault current at the origin = 6 kA. The device can safely interrupt the maximum credible fault. Satisfactory; the schedule records both values."
            },
            {
              number: 22,
              prompt: "Inspector finds a domestic dwelling EICR with a previous Unsatisfactory result that the landlord acted on within 28 days. The current EICR is being prepared at the next 5-year interval. Outcome basis:",
              options: {
                A: "Carry forward the previous Unsatisfactory",
                B: "Independent assessment based on current observed condition",
                C: "Pending until previous report is reviewed",
                D: "FI by default"
              },
              answer: "B",
              explanation: "Each EICR is an independent snapshot. The current report reflects the current observed condition; the previous report's Unsatisfactory result and remediation are part of the historical record but don't predetermine the current outcome."
            },
            {
              number: 23,
              prompt: "Inspector finds a domestic CU with no main bonding to a confirmed extraneous-conductive-part metal water service. Code:",
              options: {
                A: "C1",
                B: "C2 — main bonding requirement not met",
                C: "C3",
                D: "Satisfactory"
              },
              answer: "B",
              explanation: "Confirmed extraneous-conductive-part requires main bonding to maintain equipotential during a fault. Absence is potentially dangerous (C2) — install bonding sized per Table 54.8."
            },
            {
              number: 24,
              prompt: "Inspector finds an EICR with no observations and a recommended next-inspection date 5 years out. Outcome:",
              options: {
                A: "Unsatisfactory",
                B: "Satisfactory",
                C: "Pending",
                D: "FI"
              },
              answer: "B",
              explanation: "No observations + correctly set recommended interval + signed and dated = Satisfactory. The inspector's signature is a professional declaration that the schedules support the outcome."
            },
            {
              number: 25,
              prompt: "An EICR observation 'Inspector confirms all circuits inspected and tested per the agreed scope; one C2 (missing main bonding) and three C3 (improvement recommendations)'. Outcome and duty holder action under PRS Regs 2020:",
              options: {
                A: "Satisfactory; no specific action required",
                B: "Unsatisfactory because of the C2; remediate the C2 within 28 days from inspection, supply written confirmation to tenant within 28 days of completion; plan C3s over time",
                C: "Pending until C3s addressed",
                D: "Conditional"
              },
              answer: "B",
              explanation: "Any C2 = Unsatisfactory. PRS Regs 2020: 28-day remediation clock from inspection; 28-day written-confirmation clock from completion. C3s are improvements to plan; no specific PRS clock applies to C3s alone."
            }
          ]
        }
      ]
    }
  ],
  scoring: [
    { threshold: 0.9, label: "Strong — confident with EICR coding and observations" },
    { threshold: 0.7, label: "Solid — minor coding miscalls" },
    { threshold: 0.5, label: "Needs targeted revision — re-read Best Practice Guide 4 (BPG4)" },
    { threshold: 0, label: "Major gaps — return to fundamentals before retrying" }
  ],
  priorities: [
    "C1 / C2 / C3 / FI — be able to recite each definition exactly, and to apply them to real-world observations.",
    "Unsatisfactory triggers — any C1, C2 or FI; C3 alone is not Unsatisfactory.",
    "On-site response to a C1 — make safe, notify duty holder, record. Walking away from a known C1 is a personal-liability risk for the inspector.",
    "Document set — EICR + Schedule of Inspections + Schedule of Test Results; agree extent and limitations in writing before starting.",
    "PRS Regulations 2020 — landlord must remedy or further investigate within 28 days (or sooner if specified) and supply written confirmation."
  ]
};
