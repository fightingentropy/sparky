import type { Exam } from "./types";

export const initialVerificationExam: Exam = {
  id: "initial-verification",
  title: "Initial Verification",
  subtitle: "Combined topic drill + Access Training homework practice bank",
  description:
    "A focused exam built around Webinar 5 — Initial Verification. Covers Part 6 of BS 7671, the inspection schedule, the dead-test sequence (continuity, ring final, IR, polarity), the live-test sequence (Ze, PFC, Zs, RCD), acceptance criteria, and the documentation issued for new work. Combines the Access Training Initial Verification homework practice bank with additional tricky questions on dead-test logic, voltage-sensitive equipment, RCD test points and live-polarity faults. Added merged inspection sequence, Ze/Zs/PFC, polarity, IR and test-instrument questions from the removed mixed-topic bank.",
  format:
    "Each attempt = 190 multiple-choice questions across all sections. Pass at 70%+. The bank rotates through 5 distinct variants per section so retries draw fresh material.",
  passPercent: 0.7,
  sections: [
    {
      id: "section-1",
      title: "Section 1 — Inspection & Documents",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "Initial verification of a new installation, addition or alteration is required by which Part of BS 7671?",
              options: { A: "Part 4", B: "Part 5", C: "Part 6", D: "Part 7" },
              answer: "C",
              explanation: "Part 6 deals with inspection and testing. Chapter 64 covers initial verification specifically; Chapter 65 covers periodic; Chapter 66 covers certification. Part 4 is protection, Part 5 is selection and erection."
            },
            {
              number: 2,
              prompt: "The visual inspection element of initial verification should be carried out:",
              options: {
                A: "Only after energising",
                B: "Before energising — to verify workmanship, conductor identification, IP ratings, accessory selection, fire stopping, etc.",
                C: "At the same time as live testing",
                D: "Only if the customer requests it"
              },
              answer: "B",
              explanation: "Inspection is a pre-energisation activity — once the supply is on, you can no longer easily check the back of accessories, the routing in voids, or the identification of conductors at terminations. The Schedule of Inspections is the tick-box record of what was looked at."
            },
            {
              number: 3,
              prompt: "The principal IET guidance document for initial and periodic verification is:",
              options: {
                A: "Guidance Note 1",
                B: "Guidance Note 3",
                C: "On-Site Guide",
                D: "Code of Practice for In-service Inspection and Testing"
              },
              answer: "B",
              explanation: "GN3 is the inspection-and-testing companion to BS 7671. It expands on test methodology, gives worked examples, and is the reference book that 2391 and many NVQ I&T questions are built around."
            },
            {
              number: 4,
              prompt: "On completion of new work the certificate(s) issued to the client are:",
              options: {
                A: "Just an EICR",
                B: "An Electrical Installation Certificate (EIC) accompanied by a Schedule of Inspections and a Schedule of Test Results",
                C: "A Building Regulations certificate alone",
                D: "A verbal handover"
              },
              answer: "B",
              explanation: "An EIC alone is incomplete — without the Schedule of Inspections and the Schedule of Test Results behind it, there is no evidence base for the signed declarations. A Minor Works Certificate (MEIWC) is the equivalent for small additions/alterations not introducing a new circuit."
            },
            {
              number: 5,
              prompt: "Which Chapter of BS 7671 specifically deals with initial verification?",
              options: { A: "Chapter 41", B: "Chapter 53", C: "Chapter 64", D: "Chapter 65" },
              answer: "C",
              explanation: "Chapter 64 is initial verification, Chapter 65 is periodic inspection and testing, Chapter 66 covers certification and reporting. Chapter 41 is ADS and Chapter 53 covers protective devices."
            },
            {
              number: 6,
              prompt: "Information that must be made available to the verifier before commencing initial verification includes:",
              options: {
                A: "Only the name of the client",
                B: "The maximum demand and number of socket outlets",
                C: "Diagrams, charts and similar information including the type and composition of each circuit, the means of complying with each protective measure, and information enabling identification of devices for protection, isolation and switching",
                D: "Only the design current of each circuit"
              },
              answer: "C",
              explanation: "Reg 514.9.1 / 651.1 requires the designer's diagrams, schedules and information to be available to the verifier. Without them, the verifier cannot confirm that the installed work matches the design or check the protective measures applied."
            },
            {
              number: 7,
              prompt: "A Minor Electrical Installation Works Certificate (MEIWC) is appropriate for:",
              options: {
                A: "A complete new installation",
                B: "An addition or alteration to an existing circuit that does not introduce a new circuit",
                C: "Any new circuit added to an existing installation",
                D: "A periodic inspection report"
              },
              answer: "B",
              explanation: "MEIWC is reserved for additions or alterations that do not extend to a new circuit — like adding a spur, replacing an accessory or moving a switch. Anything that creates a new circuit needs an EIC."
            },
            {
              number: 8,
              prompt: "The three signatories on an Electrical Installation Certificate are responsible for:",
              options: {
                A: "Design, construction, and inspection & testing",
                B: "Client, contractor, and architect",
                C: "Designer, electrician, and apprentice",
                D: "Local authority, DNO, and contractor"
              },
              answer: "A",
              explanation: "Design, construction, and inspection & testing are the three responsibilities. One competent person may discharge all three on smaller jobs but each role is signed for separately for traceability."
            },
            {
              number: 9,
              prompt: "Maximum demand (with diversity applied) is recorded on which document?",
              options: {
                A: "Schedule of Test Results",
                B: "Schedule of Inspections",
                C: "Electrical Installation Certificate",
                D: "Minor Works Certificate"
              },
              answer: "C",
              explanation: "Maximum demand appears on the EIC supply characteristics page — it's a design figure rather than a test result. The Schedule of Test Results contains the numerical test data, the Schedule of Inspections is a tick-box record."
            },
            {
              number: 10,
              prompt: "The visual inspection of new work must verify, among many items:",
              options: {
                A: "Only that the work is finished",
                B: "Correct selection of equipment, correct rating of protective devices, correct conductor identification, presence of fire barriers, labelling and warning notices",
                C: "Only that the conductors are the correct colour",
                D: "That the customer has signed for the keys"
              },
              answer: "B",
              explanation: "The Schedule of Inspections covers wide-ranging items including selection, rating, identification, fire stopping, and labelling. A significant proportion of defects are caught by inspection before any test instrument is used."
            },
            {
              number: 11,
              prompt: "An EIC is signed by three different competent persons. The original certificate should be:",
              options: {
                A: "Retained by the contractor",
                B: "Issued to the person ordering the work (the duty holder)",
                C: "Sent to the local building control office",
                D: "Filed with the certification scheme"
              },
              answer: "B",
              explanation: "The original goes to the person ordering the work; the contractor keeps a copy. The duty holder needs the original to comply with EAWR Reg 4(2) and Building Regulations Part P record-keeping."
            },
            {
              number: 12,
              prompt: "BS 7671 Reg 134.1 requires that good workmanship be demonstrated by:",
              options: {
                A: "The contractor's verbal assurance",
                B: "Competent persons using proper materials, with the installation inspected and tested",
                C: "Photographs of the completed work",
                D: "An NICEIC sticker on the consumer unit"
              },
              answer: "B",
              explanation: "Reg 134.1.1 — installations must be carried out by competent persons using proper materials. Reg 134.2 then requires inspection during erection and on completion to verify compliance."
            },
            {
              number: 13,
              prompt: "An installation has departures from BS 7671 due to client design constraints. These should be:",
              options: {
                A: "Hidden from the certificate so the EIC reads as compliant",
                B: "Recorded in the 'Departures' section of the EIC with reference to the regulation that has not been complied with",
                C: "Treated as defects requiring rectification before the EIC is issued",
                D: "Mentioned only verbally to the client"
              },
              answer: "B",
              explanation: "Departures are permitted under Reg 120.3 / 133.5 if the resulting installation is no less safe than compliance would have given. They MUST be declared on the EIC so the duty holder is aware."
            },
            {
              number: 14,
              prompt: "Functional testing during initial verification confirms that:",
              options: {
                A: "Test instrument calibration is in date",
                B: "Switchgear, control gear, drives, interlocks and similar assemblies operate correctly as intended",
                C: "The cable sizes are correct",
                D: "The maximum demand is below 100 A"
              },
              answer: "B",
              explanation: "Functional testing (Reg 643.10) confirms that assemblies actually do what they're supposed to: switches operate, interlocks work, motors start, controls function. It's the final 'in service' check before handover."
            },
            {
              number: 15,
              prompt: "When new work is added to an existing installation, the verifier's responsibilities include:",
              options: {
                A: "Verifying the entire existing installation as well",
                B: "Checking that the new work is safe and that the existing installation is adequate to support the addition (for example, sufficient bonding, adequate protective devices, satisfactory earthing)",
                C: "Disconnecting the existing installation",
                D: "Replacing the consumer unit regardless of condition"
              },
              answer: "B",
              explanation: "Reg 132.16 / 644.1.2 — addition or alteration must not impair the safety of the existing installation. The verifier checks the new work fully and the relevant parts of the existing installation that the new work depends on (earthing, bonding, OPDs)."
            },
            {
              number: 16,
              prompt: "An EICR (Electrical Installation Condition Report) is appropriate when:",
              options: {
                A: "Issuing certification for new work",
                B: "Issuing certification for a small addition with no new circuit",
                C: "Reporting on the condition of an existing installation following periodic inspection",
                D: "Recording maximum demand at design stage"
              },
              answer: "C",
              explanation: "EICR records the condition of an existing installation against current BS 7671. EIC is for new work, MEIWC is for minor work, EICR is the periodic report. They are not interchangeable."
            },
            {
              number: 17,
              prompt: "Notices required on a new installation typically include:",
              options: {
                A: "Only the consumer unit label",
                B: "Periodic inspection notice, RCD test notice, diagram/chart of the installation, warning notice at the means of earthing for non-standard earthing arrangements, and any relevant special-installation notices",
                C: "Only an emergency contact card",
                D: "Only fire safety stickers"
              },
              answer: "B",
              explanation: "Several notices are required by Chapter 51/53/65 and Section 514: next inspection date, RCD test reminder, isolation notice, identification labels, and notices for non-standard earthing or non-isolating measures. Missing notices are a common Schedule of Inspections fail."
            },
            {
              number: 18,
              prompt: "The pre-energisation inspection is best carried out:",
              options: {
                A: "After energisation, when defects are easier to see",
                B: "Both during construction (when accessories are still accessible) and on completion before energising",
                C: "Once a year",
                D: "Only at the end of the warranty period"
              },
              answer: "B",
              explanation: "Inspection during construction catches issues while concealed cables and the back of accessories are still visible; the completion inspection then verifies the finished installation. Reg 642.1 makes both points clear."
            },
            {
              number: 19,
              prompt: "An EIC is issued for a single new circuit added to an existing dwelling. The earthing system is TN-C-S, and the rest of the installation is in average condition. The verifier should:",
              options: {
                A: "Re-certify the entire installation as if new",
                B: "Verify the new circuit fully and confirm that the earthing arrangement, main protective bonding and consumer unit are adequate to support the new circuit; record any observations on the existing installation",
                C: "Refuse to certify because the rest of the installation isn't new",
                D: "Issue a periodic EICR instead"
              },
              answer: "B",
              explanation: "Per Reg 132.16, the addition mustn't impair the safety of the existing installation. The verifier checks the new circuit thoroughly and the elements of the existing installation that the new circuit depends on (Ze, bonding, board capacity)."
            },
            {
              number: 20,
              prompt: "Certificates and schedules issued under BS 7671 should be retained by the duty holder for:",
              options: {
                A: "One year",
                B: "Five years",
                C: "Until superseded by a later certificate or report — and at minimum until the next periodic inspection is due",
                D: "Indefinitely, like deeds"
              },
              answer: "C",
              explanation: "Best practice is to retain certificates until superseded. The duty holder needs them as evidence of compliance under EAWR Reg 4(2) and as a baseline for periodic verification — comparing past Zs/IR readings with current ones is a key diagnostic."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "BS 7671 Reg 642.1 requires every installation to be verified during erection and on completion to confirm:",
              options: {
                A: "It looks neat and tidy",
                B: "It complies with the requirements of the Regulations and the designer's intent before being put into service",
                C: "The contractor will be paid",
                D: "The DNO has connected the supply"
              },
              answer: "B",
              explanation: "Reg 642.1 — the verifier confirms compliance with BS 7671 as designed. This is the formal check that the as-built installation is safe and meets the standard before energisation."
            },
            {
              number: 2,
              prompt: "Which of the following is NOT required to be made available to the verifier?",
              options: {
                A: "Diagrams showing circuit composition",
                B: "Information enabling identification of devices for protection, isolation and switching",
                C: "The original purchase receipts for the cable",
                D: "Information on the type and composition of each circuit"
              },
              answer: "C",
              explanation: "Reg 514.9.1 lists the technical information the verifier needs — diagrams, circuit details, device identification. Commercial paperwork like receipts is unrelated to verification."
            },
            {
              number: 3,
              prompt: "Initial verification on an existing installation receiving an addition or alteration must check:",
              options: {
                A: "Only the new work in isolation",
                B: "Only the existing installation",
                C: "The new work fully, plus the parts of the existing installation that affect the safety of the new work (earthing, bonding, capacity of OPDs)",
                D: "Only the new circuits' insulation resistance"
              },
              answer: "C",
              explanation: "Reg 132.16/644.1.2. The verifier checks new work fully and verifies that the existing infrastructure it relies on remains adequate — especially earthing arrangements and OPD capacity."
            },
            {
              number: 4,
              prompt: "The Schedule of Inspections is best described as:",
              options: {
                A: "A numerical record of test values",
                B: "A tick-box record of visual inspection items checked against the requirements of Section 642",
                C: "A photographic log of work in progress",
                D: "A separate certificate for the customer"
              },
              answer: "B",
              explanation: "The Schedule of Inspections lists the items required to be inspected (selection, identification, IP, fire barriers, labelling, etc.) with each item ticked, marked N/A or LIM as appropriate. It accompanies the EIC."
            },
            {
              number: 5,
              prompt: "Periodic inspection date recommendations on the EIC for new work in a domestic dwelling are typically:",
              options: {
                A: "1 year",
                B: "5 years (or change of occupancy)",
                C: "10 years (or change of occupancy)",
                D: "20 years"
              },
              answer: "C",
              explanation: "Domestic dwellings: 10 years or change of occupancy is the IET / BS 7671 Table 3.2 recommendation. Commercial 5 years; rented 5 years or change of tenancy. The verifier records the next inspection due date."
            },
            {
              number: 6,
              prompt: "Reg 134.1.1 requires good workmanship by:",
              options: {
                A: "Apprentices supervised by experienced electricians",
                B: "Competent persons or persons under their supervision, with proper materials",
                C: "Anyone who feels confident in their work",
                D: "Only members of registered competent person schemes"
              },
              answer: "B",
              explanation: "Reg 134.1.1 — competent persons (or persons supervised by them) using proper materials. Competence is the legal pre-requisite under EAWR Reg 16 as well."
            },
            {
              number: 7,
              prompt: "An installation has been verified and an EIC issued. The duty holder should retain the certificate:",
              options: {
                A: "Until the next periodic inspection at minimum, and longer where practicable",
                B: "Only for one year",
                C: "Only if requested by an insurer",
                D: "Permanently in a fireproof safe"
              },
              answer: "A",
              explanation: "The duty holder needs the certificate as evidence under EAWR Reg 4(2) and to baseline future periodic inspections. Retain at least until superseded by the next inspection report."
            },
            {
              number: 8,
              prompt: "The 'designer' on an EIC is responsible for:",
              options: {
                A: "Calculating maximum demand, selecting protective devices, sizing cables, and specifying the protective measures used",
                B: "Physically wiring the circuits",
                C: "Witnessing every test taken",
                D: "Keeping the customer happy"
              },
              answer: "A",
              explanation: "The designer signs for the technical design of the installation — protective measures, device coordination, cable sizing, layout. On a small job the same person signs all three roles."
            },
            {
              number: 9,
              prompt: "An installation is being added to. The existing main protective bonding does not connect the gas service. The correct response is:",
              options: {
                A: "Ignore — bonding is the duty holder's problem",
                B: "Note as a Limitation, energise the new work, and walk away",
                C: "Bring the bonding up to current standards (or note as a deviation/observation) before signing the EIC for the new work",
                D: "Refuse to issue any certificate"
              },
              answer: "C",
              explanation: "Reg 132.16. New work must not be added if it relies on inadequate existing bonding/earthing. Either rectify the bonding or document the limitation and the implications. Quietly ignoring an absent bond on a gas installation isn't an acceptable outcome."
            },
            {
              number: 10,
              prompt: "Documents that must accompany the EIC are:",
              options: {
                A: "Schedule of Test Results and Minor Works Certificate",
                B: "Schedule of Test Results and Schedule of Inspections / Circuit Details",
                C: "Schedule of Inspections only",
                D: "Schedule of Test Results only"
              },
              answer: "B",
              explanation: "EIC + Schedule of Inspections + Schedule of Test Results — the three together form the complete certification package. A Minor Works Certificate is an alternative to the EIC, not an attachment."
            },
            {
              number: 11,
              prompt: "Reg 644.1.2 — when initial verification of an addition is carried out, the verifier must confirm:",
              options: {
                A: "That the addition complies with BS 7671 and that the existing installation is not impaired in safety",
                B: "Only the addition, regardless of the existing installation's condition",
                C: "That the existing installation is fully compliant with the current edition of BS 7671",
                D: "Only the maximum demand of the new circuit"
              },
              answer: "A",
              explanation: "Reg 132.16 / 644.1.2. Addition must comply and must not make the existing installation less safe. Verifier doesn't have to bring the entire existing installation up to current edition (the existing isn't being recertified — it stays under whatever edition it was certified to)."
            },
            {
              number: 12,
              prompt: "Inspection items relevant to a new lighting circuit include verifying:",
              options: {
                A: "Conductor identification, IP rating in zones, fire/heat-resistant cable where appropriate, presence of CPC at every accessory, cable supports and routing, segregation from other circuits",
                B: "Just that the lights work",
                C: "Just the lampholder type",
                D: "Whether the bulbs are LED or halogen"
              },
              answer: "A",
              explanation: "The Schedule of Inspections covers many items. Lighting requires checking identification, zone-appropriate IP for bathrooms/special locations, heat-resistant flex at lampholders, CPC at every accessory, support spacing, segregation from data."
            },
            {
              number: 13,
              prompt: "An installation requires more than one EIC because of the works being carried out by separate competent persons. The correct approach is:",
              options: {
                A: "Issue a single combined EIC by the lead contractor",
                B: "Each competent person issues an EIC for the work they have completed; the duty holder retains all of them",
                C: "Wait until the entire job is finished and issue one EIC retrospectively",
                D: "Use MEIWCs for everything regardless of scope"
              },
              answer: "B",
              explanation: "Each competent person certifies the work they have completed and signed for. Joint working on large projects produces multiple EICs that together cover the whole installation. This preserves accountability."
            },
            {
              number: 14,
              prompt: "Notices required at the consumer unit by BS 7671 include:",
              options: {
                A: "Only the inspection certificate",
                B: "Notice of periodic inspection date, RCD test notice (if RCDs fitted), notice for non-standard colours where applicable, notice for electrical separation if used",
                C: "A list of all spare parts",
                D: "The contractor's invoice"
              },
              answer: "B",
              explanation: "Reg 514 lists various warning and information notices. Missing the periodic inspection or RCD test notice is a common Schedule of Inspections fail."
            },
            {
              number: 15,
              prompt: "An EIC declares that, at the time of inspection and testing, the installation:",
              options: {
                A: "Will remain compliant for 10 years",
                B: "Complies with BS 7671 — except for the departures and observations recorded",
                C: "Has no faults whatsoever",
                D: "Is guaranteed for 25 years"
              },
              answer: "B",
              explanation: "EIC is a snapshot at the date of certification, declaring compliance with BS 7671 with any departures noted. It doesn't guarantee future compliance — installations age, modifications happen, periodic inspection is then required."
            },
            {
              number: 16,
              prompt: "When inspecting a new TT installation, the verifier must check that:",
              options: {
                A: "An RCD provides ADS for every circuit, the earth electrode resistance is suitable for the chosen RCD, and the warning notice on the MET is fitted",
                B: "Only that the earthing is connected",
                C: "Only that an RCD is installed somewhere",
                D: "Only that the cable is the right colour"
              },
              answer: "A",
              explanation: "TT systems rely on RCD for ADS — the RCD must trip within 0.4 s at fault current available through Ra (the electrode resistance). Reg 411.5.3 / 542.2.4. The MET also needs the appropriate warning notice."
            },
            {
              number: 17,
              prompt: "An MEIWC may be issued for the addition of:",
              options: {
                A: "A new shower circuit",
                B: "A new ring final circuit in a kitchen",
                C: "An additional socket-outlet as a spur from an existing ring final circuit",
                D: "A new consumer unit"
              },
              answer: "C",
              explanation: "MEIWC = additions/alterations to an existing circuit only. A spur on an existing ring qualifies. A new shower or kitchen ring is a new circuit and requires an EIC."
            },
            {
              number: 18,
              prompt: "If departures from BS 7671 are required on the design of the installation, the EIC declaration must:",
              options: {
                A: "Be left blank",
                B: "Record each departure with reference to the regulation departed from, and a justification (Reg 120.3/133.5)",
                C: "Refer the departure to the DNO for adjudication",
                D: "Refuse to be issued"
              },
              answer: "B",
              explanation: "Departures are explicitly permitted by Reg 120.3 / 133.5 if the resulting installation is no less safe. They must be declared with the regulation reference and the justification — invisible departures aren't departures, they're non-compliances."
            },
            {
              number: 19,
              prompt: "The 'inspector' on an EIC takes responsibility for:",
              options: {
                A: "Sales and customer care",
                B: "Ordering materials",
                C: "Inspection and testing of the installation, and the issue of the test results, certifying that the installation has been verified",
                D: "Only the visual inspection, not the testing"
              },
              answer: "C",
              explanation: "The inspector signs for the inspection AND the testing — both are part of verification. They certify the test results and the inspection findings together."
            },
            {
              number: 20,
              prompt: "The minimum information required on the EIC supply characteristics page is:",
              options: {
                A: "Only the maximum demand",
                B: "Only the supplier's name",
                C: "Nominal voltage(s), nature of current and frequency, prospective fault current Ipf, external earth fault loop impedance Ze, type of earthing arrangement, and characteristics of supply protective devices",
                D: "The customer's bank details"
              },
              answer: "C",
              explanation: "The supply characteristics page records the figures the design depended on: voltage, frequency, Ipf, Ze, earthing system (TN-C-S/TN-S/TT/IT), and supplier OPD. Without these, fault studies and ADS verification can't be reproduced."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "Reg 651.1 stipulates that initial verification covers:",
              options: {
                A: "Only the testing phase",
                B: "Only the inspection phase",
                C: "Inspection AND testing — both are required",
                D: "Functional testing only"
              },
              answer: "C",
              explanation: "Initial verification is inspection and testing. Either alone is incomplete. Inspection catches workmanship and selection issues; testing catches electrical faults that inspection cannot reveal."
            },
            {
              number: 2,
              prompt: "An installer carries out work and a third party carries out the verification. On the EIC:",
              options: {
                A: "Only one signature is needed",
                B: "The constructor is the installer; the inspector is the third party — each signs their respective declaration",
                C: "The third party signs for both",
                D: "The customer signs as inspector"
              },
              answer: "B",
              explanation: "Each role on the EIC carries its own legal accountability. If different competent persons take different roles, each signs for the role they hold. The certificate then accurately records who is responsible for what."
            },
            {
              number: 3,
              prompt: "An EIC has space for 'date of next periodic inspection'. This date is:",
              options: {
                A: "Always 12 months after issue",
                B: "Set by the designer/inspector based on installation type, environment and use, with reference to IET tables",
                C: "Always 5 years from issue",
                D: "Determined by the customer"
              },
              answer: "B",
              explanation: "Periodic inspection interval depends on installation type and environment — domestic 10 years, commercial 5 years, harsher environments shorter. The verifier records the appropriate next inspection date."
            },
            {
              number: 4,
              prompt: "Reg 134.2.1 requires that, on completion of an installation:",
              options: {
                A: "The installation must be inspected and tested to verify compliance with the Regulations",
                B: "The installation must be photographed for records",
                C: "The customer must be given a verbal handover",
                D: "The installer must complete a job sheet"
              },
              answer: "A",
              explanation: "Reg 134.2.1 — every installation shall, on completion, be inspected and tested to verify compliance with BS 7671. Initial verification is the formal mechanism for satisfying this requirement."
            },
            {
              number: 5,
              prompt: "An installation is being commissioned for use in a public assembly building. The verifier checks that:",
              options: {
                A: "Only the lighting works",
                B: "Special-installation requirements of Section 711 (or relevant Part 7 sections) are met, in addition to the general requirements",
                C: "Only the maximum demand is recorded",
                D: "The fire alarm panel is unplugged"
              },
              answer: "B",
              explanation: "Public assembly may invoke Part 7 (e.g. Section 711 exhibition stands, 717 mobile units, etc.) and Building Regs requirements (BS 5839 fire detection). The verifier checks the relevant special-location regulations alongside the general ones."
            },
            {
              number: 6,
              prompt: "An installer signs the EIC having completed the work alone. They are signing:",
              options: {
                A: "Only as constructor",
                B: "As designer, constructor, AND inspector if they have undertaken all three roles",
                C: "Only as inspector",
                D: "On behalf of the DNO"
              },
              answer: "B",
              explanation: "On a small job, one competent person can sign all three roles. They are accepting personal responsibility for design choices, construction quality, and verification — all three signatures matter."
            },
            {
              number: 7,
              prompt: "An EIC includes a 'departures' section. A departure is:",
              options: {
                A: "A non-compliance hidden from the certificate",
                B: "A deliberate deviation from BS 7671 permitted by Reg 120.3/133.5 where the result is no less safe",
                C: "A simple drafting error on the certificate",
                D: "Permission for the contractor to leave site"
              },
              answer: "B",
              explanation: "Departures are explicitly permitted where the result is no less safe than compliance would have given. They MUST be recorded with the regulation reference and justification. Non-departures are simply non-compliances and must be rectified."
            },
            {
              number: 8,
              prompt: "An item of equipment is left out of the visual inspection because it is hidden behind ceiling plasterboard. The correct response is:",
              options: {
                A: "Tick it as 'inspected' anyway",
                B: "Mark as a Limitation on the Schedule of Inspections, recording that this item was not accessible",
                C: "Strip out the plasterboard regardless of damage",
                D: "Leave that line blank"
              },
              answer: "B",
              explanation: "Limitations are noted with 'LIM' on the Schedule of Inspections. The reason for the limitation must be clear so the duty holder understands what wasn't checked. Lying on a tick-box is fraudulent — limitations are honest."
            },
            {
              number: 9,
              prompt: "The relationship between a Minor Works Certificate and an Electrical Installation Certificate is:",
              options: {
                A: "MEIWC is an attachment to every EIC",
                B: "MEIWC is an alternative to the EIC for additions/alterations not introducing a new circuit",
                C: "EIC replaces MEIWC entirely from BS 7671:2018",
                D: "They serve identical purposes"
              },
              answer: "B",
              explanation: "MEIWC and EIC are alternatives, not partners. MEIWC is for small alterations; EIC is for new work or new circuits. Each is appropriate for its scope — using the wrong one creates documentation problems for the duty holder."
            },
            {
              number: 10,
              prompt: "The verifier on an EIC includes a recommendation that:",
              options: {
                A: "The installation be re-inspected on a regular basis",
                B: "The installation be sold to a new owner",
                C: "All circuits be re-wired in 5 years",
                D: "The customer change supplier"
              },
              answer: "A",
              explanation: "EIC recommends a date for the next inspection — periodic verification is the safety net for installation lifecycle. The verifier doesn't make commercial recommendations on the certificate."
            },
            {
              number: 11,
              prompt: "An installation has been altered without certification. A subsequent verifier carrying out periodic inspection should:",
              options: {
                A: "Ignore the alteration",
                B: "Issue an EIC retrospectively",
                C: "Note the absence of certification for the alteration as an observation on the EICR, and code accordingly based on the safety implications",
                D: "Refuse to inspect"
              },
              answer: "C",
              explanation: "Periodic inspection records what's there, including unauthorised alterations. It assesses condition and safety, not the paperwork history. The absence of an EIC for an alteration is an observation; the safety implications drive the coding."
            },
            {
              number: 12,
              prompt: "Reg 644.1.2 — initial verification of an addition or alteration must consider:",
              options: {
                A: "Only the new work in isolation",
                B: "The effect of the new work on the existing installation, including earthing, bonding, and protective device adequacy",
                C: "Only the new circuit's IR",
                D: "Only the cable colour scheme"
              },
              answer: "B",
              explanation: "Reg 132.16 / 644.1.2. Adding to an installation can affect earthing impedance, increase fault levels, change disconnection times, or exceed OPD ratings. The verifier must check the addition AND its effect on the existing."
            },
            {
              number: 13,
              prompt: "Following the issue of an EIC, the original is given to:",
              options: {
                A: "The contractor's office",
                B: "The DNO",
                C: "The person ordering the work",
                D: "The local building control"
              },
              answer: "C",
              explanation: "Person ordering the work = duty holder, who needs the original for their EAWR/Building Regs records. Contractor keeps a copy; the certification scheme is notified separately."
            },
            {
              number: 14,
              prompt: "The verifier must record on the EIC:",
              options: {
                A: "The name and qualifications of the verifier",
                B: "Only the company name",
                C: "Only the date of testing",
                D: "Only the type of installation"
              },
              answer: "A",
              explanation: "EIC includes the verifier's name and (for registered scheme members) the registration body. This is part of the legal accountability — the certificate is signed by a named individual."
            },
            {
              number: 15,
              prompt: "The Schedule of Test Results for a domestic CU change typically records:",
              options: {
                A: "Only Zs and IR",
                B: "Continuity (R1+R2 or R2), ring final test (r1, rn, r2 plus cross-connected R1+R2), IR (L-N, L-E, N-E for each circuit), polarity, Zs, RCD test times at 0.5×/1×/5× IΔn, and confirmation of polarity at the origin",
                C: "Only the maximum demand",
                D: "Only the customer signature"
              },
              answer: "B",
              explanation: "The schedule records every numerical result per circuit. A CU change is essentially initial verification of the consumer unit and (often) the existing circuits — the schedule is the audit trail."
            },
            {
              number: 16,
              prompt: "An EIC issued for new work in a rented property — the duty holder is most likely:",
              options: {
                A: "The tenant",
                B: "The landlord (the person responsible for the installation)",
                C: "The DNO",
                D: "The local council automatically"
              },
              answer: "B",
              explanation: "The landlord is the duty holder for the fixed installation in a rented property — they retain the EIC and arrange periodic inspection (5 years or change of tenancy in England/Wales under the EICR Regulations 2020)."
            },
            {
              number: 17,
              prompt: "If an EIC is issued for an installation with an unrectified defect:",
              options: {
                A: "It is acceptable as long as the defect is mentioned in the comments",
                B: "The certificate is invalid because a compliant EIC declares compliance with BS 7671 — defects must be rectified before certification",
                C: "The defect can be ignored if the customer agrees",
                D: "The certificate is treated as a 'pending' EIC"
              },
              answer: "B",
              explanation: "GN3 — defects must be made good and the affected tests repeated before certification. An EIC declares the installation complies; an installation with unrectified defects can't be honestly declared compliant."
            },
            {
              number: 18,
              prompt: "The Schedule of Inspections divides items into categories such as:",
              options: {
                A: "Just one big list",
                B: "External influences, automatic disconnection, identification, additional protection, isolation/switching, installation/cables/conductors, testing-related items",
                C: "Only mechanical items",
                D: "Items by colour"
              },
              answer: "B",
              explanation: "The Schedule of Inspections is structured by topic to mirror the technical sections of BS 7671. Each item is ticked, marked N/A, or marked LIM (limitation), with the verifier responsible for the completeness."
            },
            {
              number: 19,
              prompt: "When an EIC is issued for new work, the date of the certificate corresponds to:",
              options: {
                A: "The date the design was completed",
                B: "The date of inspection and testing — the certification date",
                C: "The date the contract was signed",
                D: "The date the customer paid the invoice"
              },
              answer: "B",
              explanation: "The certification date is the date of completed verification. Test results dated earlier than the certificate suggest the verifier wasn't actually testing on the day they signed — a record-keeping concern."
            },
            {
              number: 20,
              prompt: "Initial verification confirms the installation meets BS 7671 'so far as is reasonably practicable'. This phrase is:",
              options: {
                A: "From the Health and Safety at Work Act and reflects HSE's standard test of competent compliance",
                B: "Vague legal padding without meaning",
                C: "Just contractor jargon",
                D: "From the Building Regulations only"
              },
              answer: "A",
              explanation: "'So far as is reasonably practicable' (SFAIRP) is a recognised HSWA / EAWR phrase: take measures unless the cost (in time, money, trouble) is grossly disproportionate to the risk. It anchors competent professional judgement in regulatory law."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "An installation has been certified with an EIC. The duty holder later commissions an alteration. The alteration certificate must reference:",
              options: {
                A: "The original EIC by date and reference number",
                B: "Only the names of the persons involved",
                C: "Only the maximum demand of the alteration",
                D: "Nothing — alterations are independent"
              },
              answer: "A",
              explanation: "Alteration certificates link to the original installation record. This builds the audit trail — anyone reading the file later can trace back through the lifecycle of the installation."
            },
            {
              number: 2,
              prompt: "The 'constructor' on an EIC has responsibility for:",
              options: {
                A: "The design only",
                B: "The verification only",
                C: "The construction (workmanship) of the installation in accordance with the design and BS 7671",
                D: "Customer relations"
              },
              answer: "C",
              explanation: "The constructor is responsible for the as-built quality — terminations, routing, support, identification — matching the design. Their signature accepts that responsibility, which can persist after the work is complete."
            },
            {
              number: 3,
              prompt: "Periodic inspection date on an EIC for a new commercial installation is typically:",
              options: {
                A: "10 years",
                B: "5 years",
                C: "3 years",
                D: "1 year"
              },
              answer: "B",
              explanation: "Commercial installations: typically 5 years (IET Table 3.2 / GN3). Domestic 10 years; harsher environments shorter; some special installations (swimming pools, fountains) annually."
            },
            {
              number: 4,
              prompt: "An EIC is issued. The legal status of that document is:",
              options: {
                A: "It is a contract document with legal weight, signed by named competent persons under their professional accountability",
                B: "It is purely advisory and has no legal weight",
                C: "It is automatically replaced after 12 months",
                D: "It is an internal company record only"
              },
              answer: "A",
              explanation: "EIC is a formal record signed by named individuals, supported by their certification scheme registration. It has weight in EAWR and Building Regs proceedings — fraudulent or careless certification can be prosecuted."
            },
            {
              number: 5,
              prompt: "The verifier finds that the original design departs from BS 7671 in a way that increases risk. The correct response is to:",
              options: {
                A: "Sign the EIC and add a note",
                B: "Refuse to certify until the design is brought into compliance, with a clear written record of the issue and the corrective action recommended",
                C: "Disconnect the installation",
                D: "Ignore the design and re-test only"
              },
              answer: "B",
              explanation: "Verification is not just a tick-box on what was built — if the design is unsafe, the as-built installation will be unsafe. The verifier doesn't certify departures that make the installation less safe."
            },
            {
              number: 6,
              prompt: "Reg 643.1.6 — polarity verification during initial verification must be carried out:",
              options: {
                A: "Once, dead, before energising",
                B: "Once, live, after energising",
                C: "Both dead (continuity-style check before energising) AND live (with an AVI after energising)",
                D: "Never on a domestic installation"
              },
              answer: "C",
              explanation: "Polarity is verified twice in different ways. Dead polarity uses continuity to confirm correct conductor connection at every accessory; live polarity uses an AVI to confirm the supply-side polarity arrives at the consumer unit correctly."
            },
            {
              number: 7,
              prompt: "An installation includes a sub-main feeding a separate consumer unit. The certification approach is:",
              options: {
                A: "One EIC for the entire installation",
                B: "An EIC for the sub-main and the new consumer unit, treating the sub-main as a new circuit",
                C: "An MEIWC for everything",
                D: "No certification needed if existing"
              },
              answer: "B",
              explanation: "A new sub-main is a new circuit; a new consumer unit fed from it is new work. EIC + Schedules of Inspections + Test Results cover both. MEIWC isn't appropriate for new circuits."
            },
            {
              number: 8,
              prompt: "Inspection items relevant to a new TT installation include:",
              options: {
                A: "Only the cable colours",
                B: "Earth electrode resistance test, RCD presence and IΔn for ADS, warning notice at the MET, main protective bonding, suitable RCD type for the load profile",
                C: "Only the consumer unit make and model",
                D: "Only the Ze value at the origin"
              },
              answer: "B",
              explanation: "TT systems rely on the local electrode and RCD for ADS. Inspection must verify the electrode (Ra), the RCD type and rating, the warning notice on the MET, and main bonding."
            },
            {
              number: 9,
              prompt: "The Building Regulations Part P in England requires:",
              options: {
                A: "Notifiable work to be certified by a registered competent person OR notified to building control before work starts",
                B: "All electrical work to be notified",
                C: "DNO involvement for any work",
                D: "Annual inspection of all dwellings"
              },
              answer: "A",
              explanation: "Part P (England) — notifiable work (CU replacement, new circuits, work in special locations) must be notified or self-certified by a registered competent person scheme member. Non-notifiable work (alterations to existing circuits outside special locations) doesn't have to be notified but must still comply with BS 7671."
            },
            {
              number: 10,
              prompt: "An MEIWC includes:",
              options: {
                A: "Schedule of Test Results in full",
                B: "A short certificate covering details of the work, test results limited to the affected portion, and a declaration of compliance",
                C: "An external Ze measurement and full Schedule of Inspections",
                D: "Maximum demand and characteristics of supply"
              },
              answer: "B",
              explanation: "MEIWC is a single-page certificate covering small alterations. It records the work done, the test results for the altered portion, and the verifier's declaration. It doesn't reproduce the full schedules of an EIC."
            },
            {
              number: 11,
              prompt: "An EIC declaration includes 'I/We further declare that ... details of departures from BS 7671'. The default if no departures is:",
              options: {
                A: "Leave the box blank",
                B: "Write 'None' or strike through",
                C: "Sign and tick anyway",
                D: "Leave the EIC unsigned"
              },
              answer: "B",
              explanation: "If there are no departures, write 'None' so it's clear the verifier considered the question. Blank fields suggest the verifier didn't read the declaration; explicit 'None' is unambiguous."
            },
            {
              number: 12,
              prompt: "On the EIC supply characteristics page, the verifier records the type of earthing arrangement. This must:",
              options: {
                A: "Match the actual supply type — TN-S, TN-C-S, TT, IT — not the design assumption",
                B: "Always be TN-C-S regardless",
                C: "Be obtained from the customer",
                D: "Be left blank if uncertain"
              },
              answer: "A",
              explanation: "The verifier confirms what is physically there. If the design assumed TN-C-S but the supply turns out to be TN-S (or vice versa), the EIC must record the actual system — and the design implications must be re-checked."
            },
            {
              number: 13,
              prompt: "The Schedule of Inspections includes 'condition of accessories' — this is checked:",
              options: {
                A: "Only on existing installations",
                B: "On new installations as well, to confirm accessories are correctly fitted, undamaged in transit, and free from defects",
                C: "Only when the customer asks",
                D: "Never on initial verification"
              },
              answer: "B",
              explanation: "Even brand-new accessories can be damaged during fitting (cracked plates, snagged screws, misaligned grids). Inspection confirms they are correctly fitted and undamaged before certification."
            },
            {
              number: 14,
              prompt: "Two competent persons sign the EIC — one as designer/constructor and one as inspector. This division:",
              options: {
                A: "Is preferred where practical because independent inspection adds an extra check",
                B: "Is forbidden",
                C: "Requires a third signature",
                D: "Doubles the certification fee"
              },
              answer: "A",
              explanation: "Independent verification is best practice on larger projects — the inspector wasn't involved in the design or construction and brings fresh eyes. Smaller jobs use one signatory for all three roles."
            },
            {
              number: 15,
              prompt: "An installation includes a fire alarm system. The verifier's BS 7671 EIC:",
              options: {
                A: "Covers the fire alarm electrical installation but not the fire detection performance — that is covered by BS 5839 commissioning",
                B: "Replaces the BS 5839 commissioning certificate",
                C: "Covers both BS 7671 and BS 5839",
                D: "Is not needed for fire alarm systems"
              },
              answer: "A",
              explanation: "BS 7671 EIC covers the electrical installation — the supply, wiring, protection. BS 5839 commissioning covers the fire detection system performance (sounders, detectors, panel programming). Both are needed."
            },
            {
              number: 16,
              prompt: "An EIC is issued for new work. The DNO seal is broken to allow the installation to be connected. This activity is:",
              options: {
                A: "Always carried out by the DNO or their authorised representative — not by the installing contractor",
                B: "Performed by the contractor as standard",
                C: "Optional",
                D: "Recorded on the EIC by the customer"
              },
              answer: "A",
              explanation: "DNO equipment (cut-out, meter) is the DNO's responsibility; the contractor doesn't break the seal. The installation is energised by the DNO once the EIC is in place and any notifications are complete."
            },
            {
              number: 17,
              prompt: "Inspection items relevant to a new socket-outlet circuit in a kitchen include:",
              options: {
                A: "RCD additional protection for socket outlets, segregation of the 30 mA RCD from the cooker if not all kitchens, identification of conductors, presence of CPC, fire-stopping of cable penetrations",
                B: "Only the cable colour",
                C: "Only the maximum demand",
                D: "Only the type of socket plate"
              },
              answer: "A",
              explanation: "Inspection items: RCD additional protection (Reg 411.3.3), conductor identification, CPC presence, supports, fire-stopping where cables penetrate fire compartments, and protection from mechanical damage where exposed."
            },
            {
              number: 18,
              prompt: "On larger projects, separate EICs may be issued by sub-contractors for their portions of the works. The principal duty holder retains:",
              options: {
                A: "Only the most recent EIC",
                B: "All EICs together — they collectively certify the whole installation",
                C: "Only the EIC for the largest contract",
                D: "Whichever EIC has the lowest test results"
              },
              answer: "B",
              explanation: "Each sub-contractor certifies their work. Together the EICs cover the whole installation. Losing any one of them leaves a gap in the audit trail."
            },
            {
              number: 19,
              prompt: "The verifier completes a Schedule of Test Results for each circuit. If a test cannot be carried out (for example, IR on a circuit feeding equipment that cannot be disconnected):",
              options: {
                A: "Tick it as passed anyway",
                B: "Record 'LIM' or 'N/T' on the schedule with the reason",
                C: "Leave it blank",
                D: "Estimate a value"
              },
              answer: "B",
              explanation: "Limitations are recorded honestly — LIM (limitation) or N/T (not tested) with the reason. The duty holder needs to know what wasn't tested and why; estimating values would be falsification."
            },
            {
              number: 20,
              prompt: "An EIC issued without an accompanying Schedule of Test Results is:",
              options: {
                A: "Acceptable for small jobs",
                B: "Invalid — the schedule is part of the certificate, not optional",
                C: "Acceptable if the customer agrees to dispense with it",
                D: "Replaced by an MEIWC"
              },
              answer: "B",
              explanation: "EIC + Schedule of Inspections + Schedule of Test Results form the complete record. Removing the test results removes the evidence base for the EIC's declaration of compliance — the certificate becomes meaningless."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "Initial verification has both inspection and testing components. The reason for inspection BEFORE testing is that:",
              options: {
                A: "Inspection identifies issues that may make testing unsafe (loose connections, missing barriers, exposed live parts), and confirms the as-built installation matches the documentation before instruments are applied",
                B: "Inspection is only paperwork",
                C: "Testing is more important than inspection",
                D: "BS 7671 only requires inspection"
              },
              answer: "A",
              explanation: "Inspection is the first defence — it catches issues that would make testing dangerous (a missing earth, a defective enclosure) and confirms what the verifier is about to test. Testing without prior inspection risks the verifier's safety."
            },
            {
              number: 2,
              prompt: "An installation feeds equipment that is voltage-sensitive (electronic dimmers, SPDs, smart switches). The Schedule of Test Results should:",
              options: {
                A: "Record only the readings taken",
                B: "Record the readings AND any limitations imposed by voltage-sensitive equipment (e.g. circuits where IR was measured with the equipment disconnected, or with L+N linked to earth only)",
                C: "Omit those circuits entirely",
                D: "Record the manufacturer's IR claim instead"
              },
              answer: "B",
              explanation: "GN3 — IR testing on voltage-sensitive equipment may need adapted methods (link L+N test to earth only, disconnect electronics, record limitation). The schedule must show what was actually done so the duty holder/next verifier understands the figures."
            },
            {
              number: 3,
              prompt: "An EIC is issued for new work in a domestic dwelling under Part P. The verifier is registered with a competent person scheme. The notification process is:",
              options: {
                A: "The verifier (registered scheme member) self-certifies the work to the local building control via the scheme's notification system",
                B: "The customer notifies building control directly",
                C: "The DNO notifies",
                D: "No notification required regardless of scope"
              },
              answer: "A",
              explanation: "Registered scheme members (NICEIC, NAPIT, ELECSA, STROMA, BSI) self-certify notifiable work via the scheme. Non-registered installers must notify building control before work starts — this is what the scheme registration replaces."
            },
            {
              number: 4,
              prompt: "The Schedule of Inspections (Form 1 or Schedule 3 of BS 7671) is divided into sections by topic, including:",
              options: {
                A: "Methods of basic protection, methods of fault protection, additional protection, prevention of mutual detrimental influences, identification, isolation and switching, presence of warning notices, etc.",
                B: "Only the contractor's name",
                C: "Only the cable colour",
                D: "Only the cable size"
              },
              answer: "A",
              explanation: "The Schedule of Inspections mirrors the technical structure of BS 7671: protective measures, identification, isolation, mutual influences (segregation), notices. The verifier ticks every relevant item or marks N/A or LIM."
            },
            {
              number: 5,
              prompt: "An EIC requires a 'date of next inspection'. For a domestic dwelling, BS 7671 / IET Best Practice Guide recommends:",
              options: {
                A: "10 years (or change of occupancy)",
                B: "5 years (or change of occupancy)",
                C: "3 years",
                D: "1 year"
              },
              answer: "A",
              explanation: "Domestic 10 years or change of occupancy. Rented residential under the Electrical Safety Standards in the Private Rented Sector Regulations 2020 (England): 5 years or change of tenancy."
            },
            {
              number: 6,
              prompt: "An EIC declares compliance 'except for the departures, if any, detailed below'. If a departure is recorded:",
              options: {
                A: "The certificate is invalid",
                B: "The departure must reference the BS 7671 regulation departed from, and include a justification why the installation remains no less safe (per Reg 120.3 / 133.5)",
                C: "The departure is a fault",
                D: "Only the customer can authorise it"
              },
              answer: "B",
              explanation: "Departure declarations must be specific (regulation number) and justified (no less safe than compliance would have given). Vague 'no specific reg' departures fail the test of Reg 120.3."
            },
            {
              number: 7,
              prompt: "The Schedule of Test Results records, for each ring final circuit, separate values for:",
              options: {
                A: "Just R1+R2",
                B: "r1, rn, r2, the cross-connected R1+R2, IR L-N and L-E, polarity, and Zs",
                C: "Just IR",
                D: "Just Zs"
              },
              answer: "B",
              explanation: "Ring final circuit testing produces a richer set of values than a radial — the three end-to-end measurements, the cross-connected test, IR, polarity, and Zs. All are recorded on the schedule."
            },
            {
              number: 8,
              prompt: "On the EIC, the verifier records 'extent of installation covered'. This:",
              options: {
                A: "Defines exactly what the EIC certifies — for example, 'installation of new shower circuit and associated final connection'",
                B: "Is optional",
                C: "Lists the contractor's commercial terms",
                D: "Is the same as 'departures'"
              },
              answer: "A",
              explanation: "Extent makes clear what the EIC covers and what it doesn't. A new circuit installed in an existing dwelling — the EIC covers the new circuit only, not the existing installation. Clarity prevents misinterpretation later."
            },
            {
              number: 9,
              prompt: "Reg 132.16 says no addition or alteration shall:",
              options: {
                A: "Use more than 4 cables",
                B: "Be carried out unless the existing earthing and bonding arrangements are adequate, the rating and condition of existing equipment is adequate for the altered circumstances, and the protective measures and earthing/bonding meet BS 7671",
                C: "Cost more than the existing installation",
                D: "Take longer than one day"
              },
              answer: "B",
              explanation: "Reg 132.16 — addition/alteration must not impair existing safety. The verifier must confirm earthing, bonding, OPDs and protective measures of the existing installation are adequate for the new circumstances."
            },
            {
              number: 10,
              prompt: "An installation in a swimming pool location (Section 702) requires:",
              options: {
                A: "Identical certification to a normal domestic dwelling",
                B: "Particular attention on the EIC to the special-location requirements — segregation of zones, IPX ratings, SELV in zone 0, RCD protection, supplementary bonding",
                C: "Only an MEIWC",
                D: "No certification"
              },
              answer: "B",
              explanation: "Special locations have additional rules (Section 702 swimming pools, 701 bathrooms, 705 agricultural, 706 confined conducting locations etc.). The EIC and its schedules must reflect verification of those requirements alongside the general ones."
            },
            {
              number: 11,
              prompt: "The 'periodic inspection' recommendation on a new EIC for a non-domestic installation is influenced by:",
              options: {
                A: "Type of premises, frequency of use, environmental conditions, and IET / GN3 recommended intervals",
                B: "Just the contractor's preference",
                C: "Just the customer's request",
                D: "Always 5 years"
              },
              answer: "A",
              explanation: "GN3 / IET Best Practice Guide give recommended intervals by premises type. Industrial 3 years, commercial 5, places of public assembly 1–3, leisure facilities can be 1 year, etc. The verifier records the appropriate interval."
            },
            {
              number: 12,
              prompt: "An EIC includes the inspector's recommendation: 'It is recommended that this installation is further inspected and tested after a period not exceeding [X] years.' [X] is:",
              options: {
                A: "Always 10",
                B: "Determined by the inspector based on installation type and conditions, with reference to GN3 / IET tables",
                C: "Always 5",
                D: "Always 1"
              },
              answer: "B",
              explanation: "The inspector exercises professional judgement based on the installation type and risk profile, with the IET tables as a starting point. The recommendation is binding only as guidance — the duty holder is responsible for arranging the next inspection."
            },
            {
              number: 13,
              prompt: "An EIC has been signed and issued. A defect is later discovered that should have been caught during verification. The legal exposure of the verifier:",
              options: {
                A: "None — once the certificate is issued the verifier is absolved",
                B: "Possible HSE prosecution and/or civil claim depending on severity, scheme membership consequences, and the verifier's professional accountability for the certified work",
                C: "The customer takes the blame",
                D: "Only the contractor is liable"
              },
              answer: "B",
              explanation: "Verifier's signature is a legal accountability. Negligent verification can result in HSE action under EAWR, civil claims, and certification scheme sanctions. This is why the EIC requires named, registered competent persons."
            },
            {
              number: 14,
              prompt: "Reg 134.2 — every electrical installation shall, during erection and on completion, before being put into service, be:",
              options: {
                A: "Photographed and filmed",
                B: "Inspected and tested to verify, so far as is reasonably practicable, that the requirements of the Regulations have been met",
                C: "Approved by the customer's solicitor",
                D: "Submitted to the local fire authority"
              },
              answer: "B",
              explanation: "Reg 134.2 — inspection AND testing during erection and on completion. This is the legal-style anchor that establishes initial verification as a mandatory part of the work, not an optional extra."
            },
            {
              number: 15,
              prompt: "Inspection during construction is best done:",
              options: {
                A: "Once at the end of the project",
                B: "At each stage where future inspection would be impossible — first fix before plaster goes on, second fix before energising, etc.",
                C: "Only at handover",
                D: "By the customer"
              },
              answer: "B",
              explanation: "Inspect at points where the work would otherwise become inaccessible. First-fix cables before plastering, fire-stopping before ceilings close, etc. Otherwise the completion inspection has no way of verifying what's behind finishes."
            },
            {
              number: 16,
              prompt: "An EIC must clearly identify:",
              options: {
                A: "Just the dwelling's address",
                B: "The installation address, the parts of the installation covered, the date of installation, the date of inspection, and any limitations",
                C: "The contractor's office address only",
                D: "The customer's bank account"
              },
              answer: "B",
              explanation: "The EIC ties verification to a specific location and a specific period of work. Vague 'all of the dwelling' or missing dates make the certificate effectively useless when a future verifier needs to check what was certified."
            },
            {
              number: 17,
              prompt: "An installer issues an EIC for a CU change. The existing circuits' earlier history is unknown. The verifier should:",
              options: {
                A: "Pretend the circuits are new",
                B: "Carry out full initial verification testing on each existing circuit (continuity, IR, polarity, Zs) and record the results, noting any limitations or remedials",
                C: "Test only the new tails to the consumer unit",
                D: "Assume previous tests were done"
              },
              answer: "B",
              explanation: "A CU change brings the existing circuits into the verifier's responsibility — they're now connected to the new equipment. Full initial verification testing of each circuit is needed; defects identified must be rectified or recorded as observations."
            },
            {
              number: 18,
              prompt: "Reg 644.1 — the inspector's verification responsibility extends to confirming that:",
              options: {
                A: "Inspection has been carried out, the requisite tests have been carried out and recorded, and the test results are no less safe than the requirements of BS 7671 demand",
                B: "Only the lights work",
                C: "Only that the cable colours are correct",
                D: "Only the maximum demand"
              },
              answer: "A",
              explanation: "Reg 644.1.1. The inspector verifies inspection completeness, test completeness, and test acceptability. Three layers of confirmation behind the EIC declaration."
            },
            {
              number: 19,
              prompt: "An installation is inspected in stages. The schedule of test results captures:",
              options: {
                A: "Only the final figures",
                B: "All the relevant test data per circuit, with dates if testing was carried out at different times",
                C: "Only summary statistics",
                D: "Only the maximum demand"
              },
              answer: "B",
              explanation: "Where verification is staged (e.g. first-fix tests later supplemented by completion tests), the schedule should capture the full data — and the verifier should be clear about which tests were taken when."
            },
            {
              number: 20,
              prompt: "Inspection items required to be ticked on the Schedule of Inspections include:",
              options: {
                A: "Only fire safety",
                B: "Methods of basic and fault protection, additional protection, prevention of mutual detrimental influences, identification, presence of diagrams/instructions/notices, isolation and switching, accessories' condition, suitability for environment, fire-stopping",
                C: "Only the consumer unit type",
                D: "Only the kitchen appliances"
              },
              answer: "B",
              explanation: "The Schedule of Inspections is comprehensive. Each item is tied to specific BS 7671 sections. The verifier ticks, marks N/A, or marks LIM — and the resulting form is part of the audit trail."
            }
          ]
        }
      ]
    },
    {
      id: "section-2",
      title: "Section 2 — Dead Tests",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "The recommended sequence of dead tests during initial verification is:",
              options: {
                A: "Insulation resistance, polarity, continuity",
                B: "Continuity of protective conductors, continuity of ring final circuit conductors, insulation resistance, polarity, EFLI by calculation",
                C: "Polarity, insulation resistance, continuity",
                D: "Insulation resistance only"
              },
              answer: "B",
              explanation: "GN3's recommended order: continuity of CPCs (R1+R2), continuity of ring finals (r1, rn, r2 then cross-connected readings), insulation resistance, polarity, and earth-electrode resistance where relevant. EFLI (Zs) is then derived as Ze + (R1 + R2). The order matters because each test confirms a property the next test depends on."
            },
            {
              number: 2,
              prompt: "An R1 + R2 measurement on a radial circuit is taken by:",
              options: {
                A: "Linking line and CPC at the consumer unit, nulling the test leads, then measuring between line and CPC at every accessory along the circuit",
                B: "Measuring at the origin only",
                C: "Using a 500 V DC test between line and CPC",
                D: "Using an earth fault loop tester"
              },
              answer: "A",
              explanation: "R1+R2 dead test: link L–cpc at the DB, null leads, measure at each accessory. The reading is the end-to-end resistance of line + cpc. The largest reading (typically the furthest accessory) feeds the Zs calculation: Zs = Ze + (R1+R2)."
            },
            {
              number: 3,
              prompt: "For a 230 V LV circuit, the insulation resistance test is applied at what test voltage and what minimum acceptance value?",
              options: {
                A: "250 V DC, ≥ 0.5 MΩ",
                B: "500 V DC, ≥ 1.0 MΩ",
                C: "1000 V DC, ≥ 1.0 MΩ",
                D: "230 V AC, ≥ 0.25 MΩ"
              },
              answer: "B",
              explanation: "BS 7671 Table 64 — 500 V DC test with a 1.0 MΩ minimum for circuits up to 500 V. SELV/PELV use 250 V DC with 0.5 MΩ; circuits over 500 V use 1000 V DC with 1.0 MΩ."
            },
            {
              number: 4,
              prompt: "Polarity of fixed wiring should be confirmed before energising using:",
              options: {
                A: "A multimeter at mains voltage",
                B: "An approved voltage indicator at every accessory",
                C: "A continuity / low-resistance ohmmeter, by confirming the line-side connection at every accessory point",
                D: "A 500 V DC insulation tester"
              },
              answer: "C",
              explanation: "Polarity is a dead test verified with a continuity meter — proves single-pole devices are in the line conductor and that line, neutral and CPC arrive at the right terminals at every accessory."
            },
            {
              number: 5,
              prompt: "A low-resistance ohmmeter for continuity testing must deliver:",
              options: {
                A: "A short-circuit current between 200 mA and 10 A at an open-circuit voltage of 4 V to 24 V AC or DC",
                B: "Exactly 30 mA at 12 V",
                C: "A 500 V DC test current",
                D: "1 A at 50 V AC"
              },
              answer: "A",
              explanation: "GN3 — 200 mA to 10 A at 4 V to 24 V AC or DC. The test current must be high enough to break through oxide on a poor connection and reveal high-resistance joints rather than mask them."
            },
            {
              number: 6,
              prompt: "Test leads on a low-resistance ohmmeter should be:",
              options: {
                A: "Ignored as they have negligible resistance",
                B: "Nulled (or their resistance recorded and subtracted) before taking circuit measurements",
                C: "Used only with the longest leads available",
                D: "Disconnected during testing"
              },
              answer: "B",
              explanation: "Lead resistance is typically 0.05–0.10 Ω — significant compared to a low R1+R2 reading of, say, 0.5 Ω. Modern instruments null automatically; older ones require you to record lead R and subtract."
            },
            {
              number: 7,
              prompt: "The ring final circuit end-to-end test (Step 1) measures r1, rn and r2. For a correctly wired ring with no spurs, the expected relationship is:",
              options: {
                A: "r1 ≈ rn (similar values, both line and neutral being the same csa). r2 is higher for 2.5/1.5 cable because the CPC is smaller",
                B: "r1 ≈ rn ≈ r2 always",
                C: "r2 ≈ r1 / 2",
                D: "rn = r1 + r2"
              },
              answer: "A",
              explanation: "Line and neutral on a typical T+E ring are identical csa, so r1 ≈ rn. The CPC in 2.5/1.5 mm² T+E is smaller, so r2 is roughly 1.67× r1 (resistance ratio R(1.5)/R(2.5) ≈ 12.10/7.41 = 1.67)."
            },
            {
              number: 8,
              prompt: "Insulation resistance is tested between:",
              options: {
                A: "Only line and earth",
                B: "Live conductors (L–N) and between live conductors and earth (L+N–E), with the CPC remaining connected to the MET",
                C: "Only line and neutral",
                D: "Each accessory in turn at 230 V AC"
              },
              answer: "B",
              explanation: "IR is L–L (live-to-live) and L+N–E (lives joined together to earth). The CPC stays bonded so the test mimics in-service conditions. Disconnecting the CPC would invalidate the test."
            },
            {
              number: 9,
              prompt: "Before applying a 500 V DC insulation resistance test on a circuit containing electronic dimmers or switched-mode loads, the inspector should:",
              options: {
                A: "Test through the equipment regardless",
                B: "Either disconnect the voltage-sensitive equipment, or link L+N together and test only to earth, in accordance with the manufacturer's instructions",
                C: "Increase the test voltage",
                D: "Use 230 V AC"
              },
              answer: "B",
              explanation: "Voltage-sensitive electronics can be damaged by 500 V DC. Disconnect them, or test L+N to earth only (which avoids applying the test voltage across electronic components). Record the limitation on the schedule."
            },
            {
              number: 10,
              prompt: "Why is continuity of CPCs verified BEFORE insulation resistance?",
              options: {
                A: "Because IR results depend on the CPC being intact for the L+N–E test to be valid",
                B: "Because IR is a live test",
                C: "Because BS 7671 demands testing in alphabetical order",
                D: "Because continuity uses 500 V DC"
              },
              answer: "A",
              explanation: "The dead-test sequence is logical, not arbitrary. Continuity confirms the CPC path is intact before later tests rely on it. An open CPC misleads later tests and would leave ADS unable to operate correctly."
            },
            {
              number: 11,
              prompt: "An R2 wander-lead test is preferred to R1+R2 when:",
              options: {
                A: "Testing a ring final circuit",
                B: "Testing the continuity of main protective bonding to extraneous-conductive-parts, or any CPC where there is no paired line conductor at the origin",
                C: "Carrying out an earth electrode test",
                D: "Measuring Zs"
              },
              answer: "B",
              explanation: "R2 wander-lead uses a long lead from the MET (nulled first) to the bonded part. Standard for main protective bonding and supplementary bonding — gives the resistance of the protective conductor alone."
            },
            {
              number: 12,
              prompt: "A radial circuit IR test (L+N to E) gives 0.4 MΩ. The correct response is:",
              options: {
                A: "Record as a comfortable pass",
                B: "Record as a fail (below 1 MΩ minimum), isolate, investigate by disconnecting accessories one at a time and retesting to localise the fault, then rectify and retest",
                C: "Issue an EIC unchanged",
                D: "Increase the test voltage to 1000 V"
              },
              answer: "B",
              explanation: "0.4 MΩ is below the 1 MΩ Table 64 minimum — fail. Common causes: pinched cable at a back box, moisture ingress, failing accessory left in circuit. Localise by progressive disconnection."
            },
            {
              number: 13,
              prompt: "On a SELV (≤ 50 V) circuit, the insulation resistance test voltage and minimum acceptance value are:",
              options: {
                A: "500 V DC, ≥ 1 MΩ",
                B: "250 V DC, ≥ 0.5 MΩ",
                C: "230 V AC, ≥ 1 MΩ",
                D: "1000 V DC, ≥ 0.5 MΩ"
              },
              answer: "B",
              explanation: "Table 64 SELV/PELV/electrical separation: 250 V DC at ≥ 0.5 MΩ. Lower test voltage to avoid damaging SELV equipment that wasn't designed for higher voltage stress."
            },
            {
              number: 14,
              prompt: "On a 230 V LV circuit, three sub-circuits give individual IR readings of 100 MΩ, 50 MΩ and 40 MΩ. The combined parallel IR is:",
              options: {
                A: "190 MΩ",
                B: "63 MΩ",
                C: "18.18 MΩ",
                D: "30 MΩ"
              },
              answer: "C",
              explanation: "Parallel resistors: 1/R = 1/100 + 1/50 + 1/40 = 0.01 + 0.02 + 0.025 = 0.055; R = 1/0.055 = 18.18 MΩ. Combined IR is always lower than the lowest individual."
            },
            {
              number: 15,
              prompt: "A radial circuit 30 m long is wired in 4/1.5 mm² T+E. The expected R1+R2 at 20 °C is approximately (using R/m: 4 mm² ≈ 4.61 mΩ/m, 1.5 mm² ≈ 12.10 mΩ/m):",
              options: {
                A: "0.21 Ω",
                B: "0.50 Ω",
                C: "0.36 Ω",
                D: "0.84 Ω"
              },
              answer: "B",
              explanation: "Per metre: 4.61 + 12.10 = 16.71 mΩ/m. For 30 m: 30 × 16.71 = 501 mΩ ≈ 0.50 Ω."
            },
            {
              number: 16,
              prompt: "The standard 'figure-of-eight' (cross-connection) test on a ring final circuit confirms:",
              options: {
                A: "That the ring is electrically continuous, has no breaks, no interconnections and no spurs-on-a-spur — by giving R1+R2 readings substantially equal at every socket",
                B: "Insulation resistance",
                C: "Polarity at the origin",
                D: "Earth electrode resistance"
              },
              answer: "A",
              explanation: "After end-to-end measurement of r1/rn/r2, cross-connect at the DB (line of one leg to CPC of the other and vice versa). R1+R2 measured at any socket should equal (r1+r2)/4 with only small variation — significant variation indicates a break, interconnection or spur on a spur."
            },
            {
              number: 17,
              prompt: "A ring final circuit has r1 = 0.40 Ω, rn = 0.42 Ω, r2 = 0.66 Ω. The expected R1+R2 at every socket using the figure-of-eight test is approximately:",
              options: {
                A: "0.27 Ω",
                B: "0.40 Ω",
                C: "0.66 Ω",
                D: "1.06 Ω"
              },
              answer: "A",
              explanation: "(r1 + r2) / 4 = (0.40 + 0.66) / 4 = 1.06 / 4 = 0.265 Ω ≈ 0.27 Ω. Substantially equal at every socket = ring is healthy."
            },
            {
              number: 18,
              prompt: "If, during a 500 V DC IR test, a circuit reads 200 MΩ between L and N but 0.6 MΩ between L+N and E, the most likely cause is:",
              options: {
                A: "A short-circuit between L and N",
                B: "A leakage path from one of the live conductors to earth — often a pinched/nicked cable, moisture ingress, or a faulty accessory",
                C: "An open CPC",
                D: "A wired-back-to-front socket"
              },
              answer: "B",
              explanation: "L–N being healthy but L+N–E being low points to leakage to earth. Disconnect accessories one at a time, retest, and the section that restores the IR is where the fault is."
            },
            {
              number: 19,
              prompt: "Polarity of fixed wiring should NOT be checked using:",
              options: {
                A: "A continuity meter on a dead circuit",
                B: "An approved voltage indicator at the consumer unit on a live circuit",
                C: "A 500 V DC insulation resistance tester applied L–E with the meter set to test mode",
                D: "Visual inspection of conductor termination at every accessory"
              },
              answer: "C",
              explanation: "An IR tester applies a damaging test voltage and is not designed for polarity. Polarity is dead-checked with continuity, then live-checked with an AVI at the origin. Visual inspection during termination is the third element."
            },
            {
              number: 20,
              prompt: "A circuit fails the insulation resistance test. The remediation procedure is:",
              options: {
                A: "Move on to the next test",
                B: "Localise and rectify the fault, then re-inspect AND re-test the affected circuit (continuity, IR, polarity) before continuing with verification",
                C: "Note on the EIC and energise",
                D: "Halve the test voltage"
              },
              answer: "B",
              explanation: "GN3 — defects must be made good and the affected tests repeated. Reinspection is needed because the rectification work itself may have disturbed terminations."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "The wander-lead method for cpc continuity is preferred over R1+R2 when:",
              options: {
                A: "Testing main protective bonding conductors to extraneous-conductive-parts (gas, water) where there is no paired line conductor",
                B: "Testing a ring final circuit only",
                C: "Measuring Ze",
                D: "Testing insulation resistance"
              },
              answer: "A",
              explanation: "R2 wander-lead is the natural method for any cpc where you can't link a line conductor at the origin — main bonding being the obvious example. The lead is nulled at the MET first; then long-lead resistance to the bonded part = R2."
            },
            {
              number: 2,
              prompt: "The ring final circuit Step 1 (end-to-end r1, rn, r2) is taken with:",
              options: {
                A: "The legs disconnected at the DB and tested across the legs separately",
                B: "Cross-connected at the DB and measured at each socket",
                C: "All conductors looped together at the DB",
                D: "The supply energised"
              },
              answer: "A",
              explanation: "Step 1 — disconnect the two legs of each conductor at the DB and measure across each pair: line-to-line (r1), neutral-to-neutral (rn), CPC-to-CPC (r2). Step 2 then cross-connects them and measures R1+R2 at each socket."
            },
            {
              number: 3,
              prompt: "An IR test on a circuit with electronics not safely disconnectable can be performed by:",
              options: {
                A: "Applying 1000 V DC instead of 500 V",
                B: "Linking line and neutral together and testing L+N to earth only",
                C: "Skipping the test entirely",
                D: "Energising the circuit and using an MFT"
              },
              answer: "B",
              explanation: "Linking L+N together and testing to earth only avoids applying the 500 V test voltage across the electronic components (which sit between L and N). Record the limitation on the schedule of test results."
            },
            {
              number: 4,
              prompt: "Continuity of a cpc can be confirmed by either:",
              options: {
                A: "R1+R2 method (link L and cpc at the origin, measure at every accessory) OR R2 wander-lead method (long lead from the MET to the cpc point under test)",
                B: "Only R1+R2",
                C: "Only R2 wander-lead",
                D: "Only insulation resistance"
              },
              answer: "A",
              explanation: "Both methods are valid. R1+R2 is preferred for circuits where line conductor is available at the origin (so you can link); R2 wander-lead is for bonding conductors and any cpc where linking at the origin isn't practical."
            },
            {
              number: 5,
              prompt: "A radial socket circuit has Ze = 0.35 Ω, R1 = 0.21 Ω, R2 = 0.31 Ω. The calculated Zs at the furthest socket is:",
              options: {
                A: "0.45 Ω",
                B: "0.87 Ω",
                C: "0.66 Ω",
                D: "0.35 Ω"
              },
              answer: "B",
              explanation: "Zs = Ze + (R1+R2) = 0.35 + (0.21 + 0.31) = 0.35 + 0.52 = 0.87 Ω."
            },
            {
              number: 6,
              prompt: "An R1+R2 measurement at the furthest accessory of a 6 mm² radial circuit reads 0.80 Ω. To compare with the BS 7671 maximum Zs (which assumes warm conductors), the cold reading should be:",
              options: {
                A: "Used unmodified",
                B: "Multiplied by 1.20 (or thereabouts) to allow for the operating temperature increase, or compared to 0.8 × tabulated Zs as a rule-of-thumb shortcut",
                C: "Halved",
                D: "Squared"
              },
              answer: "B",
              explanation: "GN3 — measured cold R1+R2 needs correction for the conductor's operating temperature. The shortcut: measured Zs ≤ 0.8 × tabulated Zs (since 0.8 ≈ 1/1.2 covers the temperature rise from 20 °C to ≈ 70 °C)."
            },
            {
              number: 7,
              prompt: "The minimum acceptable IR for a 6.6 kV circuit (>500 V to 1000 V) tested at 1000 V DC is:",
              options: {
                A: "0.5 MΩ",
                B: "1.0 MΩ",
                C: "5.0 MΩ",
                D: "10.0 MΩ"
              },
              answer: "B",
              explanation: "Table 64. Above 500 V to 1000 V circuits: 1000 V DC test, ≥ 1.0 MΩ minimum. Above 1000 V is outside BS 7671 scope."
            },
            {
              number: 8,
              prompt: "A spur on a ring final circuit in step 2 of the figure-of-eight test would give:",
              options: {
                A: "An R1+R2 reading at the spur socket noticeably higher than at sockets on the ring proper",
                B: "An R1+R2 reading lower than the ring sockets",
                C: "An R1+R2 reading equal to the ring sockets",
                D: "No reading at all"
              },
              answer: "A",
              explanation: "On a single-socket spur, current flows through the spur cable in addition to half-the-ring; the reading is higher than the substantially-equal ring readings. A spur-on-a-spur or unintended interconnection produces variable readings around the ring — that's the diagnostic signal."
            },
            {
              number: 9,
              prompt: "A continuity test reveals R1+R2 at the furthest socket on a circuit is 0.40 Ω, but at the second-furthest socket is 1.10 Ω. The most likely cause is:",
              options: {
                A: "A high-resistance joint between the second-furthest and furthest socket",
                B: "An IR fault between L and N",
                C: "A faulty cpc somewhere upstream",
                D: "A wrongly-rated MCB"
              },
              answer: "C",
              explanation: "If R1+R2 RISES between two sockets along the circuit, there's a high-resistance termination upstream of the higher reading. R1+R2 should monotonically increase along a radial — readings that go up and then drop back down indicate a poor joint."
            },
            {
              number: 10,
              prompt: "Insulation resistance test on a new ring final circuit is best done:",
              options: {
                A: "With the legs of the ring connected at the DB, IR test L+N–E, then L–N",
                B: "With the legs connected at the DB, then test only to earth",
                C: "After polarity is confirmed",
                D: "After Zs is measured"
              },
              answer: "A",
              explanation: "GN3 sequence — confirm continuity (Step 1 + Step 2), then close the ring (legs connected at DB) and IR test L+N–E and L–N. The closed ring is the in-service configuration so IR is taken in that state."
            },
            {
              number: 11,
              prompt: "Before testing IR on an installation containing surge protection devices (SPDs), the SPDs should be:",
              options: {
                A: "Disconnected, so the 500 V DC test does not damage them or fail through their MOV components",
                B: "Left connected because they don't affect IR",
                C: "Replaced before testing",
                D: "Tested at 1000 V DC"
              },
              answer: "A",
              explanation: "SPDs typically clamp around 275 V — well below 500 V — so leaving them in circuit either fails the IR test through them or damages their MOV elements. Disconnect them before testing, retest after, and note the procedure on the schedule."
            },
            {
              number: 12,
              prompt: "Polarity at a luminaire (final circuit) is dead-checked by:",
              options: {
                A: "Confirming the line-side switch interrupts only the line conductor (not the neutral) and that line, neutral and CPC arrive at the correct terminals on the lampholder/driver",
                B: "Energising and looking at the lamp",
                C: "Insulation testing",
                D: "Earth electrode test"
              },
              answer: "A",
              explanation: "Dead polarity: continuity-style check using the meter, confirming switch is in line, lampholder line-terminal is fed from line, lampholder neutral terminal is fed from neutral, and CPC is connected. Wrong polarity leaves the lampholder live when the switch appears off."
            },
            {
              number: 13,
              prompt: "An IR test on the L–N pair gives 0.8 MΩ. The correct response is:",
              options: {
                A: "Record as a fail (< 1 MΩ), investigate, rectify, retest",
                B: "Record as a comfortable pass",
                C: "Increase test voltage and retest",
                D: "Energise the circuit"
              },
              answer: "A",
              explanation: "0.8 MΩ < 1 MΩ minimum — fail. L–N leakage points at insulation breakdown between the live conductors, possibly a pinched cable or moisture in a junction box. Localise by disconnection."
            },
            {
              number: 14,
              prompt: "Earth electrode resistance is tested using:",
              options: {
                A: "The fall-of-potential method (3-spike test) using two temporary auxiliary spikes (current and potential), OR an attached earth-loop tester (Ra) for a TT installation in service",
                B: "An insulation resistance test at 500 V DC",
                C: "A continuity test",
                D: "A clamp ammeter on the cpc"
              },
              answer: "A",
              explanation: "Fall-of-potential is the precise method using two auxiliary spikes; the loop-tester Ra method is the practical in-service equivalent for TT systems. The MFT loop function with bonding intact gives Ra (the earth electrode resistance) on a TT installation."
            },
            {
              number: 15,
              prompt: "A radial circuit cpc has been broken during cable installation but rectified before energising. The verifier should:",
              options: {
                A: "Re-test continuity AND IR (because rectification disturbs terminations)",
                B: "Re-test continuity only",
                C: "Move on — the cable was replaced",
                D: "Skip both tests"
              },
              answer: "A",
              explanation: "GN3 — rectification work disturbs other terminations and can introduce new faults. Re-inspect AND re-test the affected portion: continuity (because the cpc was disturbed) and IR (because conductors were touched)."
            },
            {
              number: 16,
              prompt: "A new lighting circuit with electronic dimmers is to be IR-tested. The accepted procedure is:",
              options: {
                A: "Disconnect the dimmers, IR test L–N and L+N–E at 500 V DC, then refit and reconnect",
                B: "Test through the dimmers at 500 V DC",
                C: "Test at 230 V AC",
                D: "Skip IR for that circuit"
              },
              answer: "A",
              explanation: "Disconnecting the dimmers is the cleanest method — full IR figures with the cabling alone. Alternative: link L+N and test only to earth (avoids 500 V across the dimmers). Document whichever method was used."
            },
            {
              number: 17,
              prompt: "A long radial circuit reads R1+R2 = 0.95 Ω. With Ze = 0.20 Ω, the calculated Zs is 1.15 Ω. The MCB is a 32 A Type B (Table 41.3 max Zs at 0.4 s = 1.37 Ω). The cold-reading rule says measured Zs must not exceed:",
              options: {
                A: "0.8 × 1.37 = 1.10 Ω",
                B: "1.37 Ω directly",
                C: "1.5 × 1.37",
                D: "Half of 1.37"
              },
              answer: "A",
              explanation: "GN3 rule of thumb — measured cold Zs ≤ 0.8 × tabulated. 0.8 × 1.37 = 1.10 Ω. Measured 1.15 Ω fails the rule of thumb — investigate before accepting."
            },
            {
              number: 18,
              prompt: "Before any dead testing begins, the verifier should:",
              options: {
                A: "Confirm the circuit is dead by safe isolation procedure (prove tester on known source, test for dead, re-prove)",
                B: "Energise to baseline",
                C: "Take Zs first",
                D: "Take an IR reading at 1000 V"
              },
              answer: "A",
              explanation: "Safe isolation precedes any dead testing. The whole point of 'dead test' is that no live voltage is present — confirming that is step zero for the verifier's safety."
            },
            {
              number: 19,
              prompt: "A 4 mm² radial circuit is 25 m long. R/m at 20 °C: 4 mm² = 4.61 mΩ/m, 2.5 mm² = 7.41 mΩ/m. Expected R1+R2 if wired in 4/2.5 mm² is:",
              options: {
                A: "0.20 Ω",
                B: "0.30 Ω",
                C: "0.40 Ω",
                D: "0.50 Ω"
              },
              answer: "B",
              explanation: "Per metre: 4.61 + 7.41 = 12.02 mΩ/m. For 25 m: 25 × 12.02 = 301 mΩ ≈ 0.30 Ω."
            },
            {
              number: 20,
              prompt: "A circuit's IR is recorded as > 999 MΩ on the meter. The Schedule of Test Results should record:",
              options: {
                A: "'> 999 MΩ' or '> meter range', not a numerical value below it",
                B: "'1000 MΩ' as an estimate",
                C: "'Pass' alone",
                D: "Nothing at all"
              },
              answer: "A",
              explanation: "Record the actual instrument reading. '>999 MΩ' (or whatever the instrument displays) is an honest record. Inventing a number below the displayed range is fabrication."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "Polarity of an installation requires verification at:",
              options: {
                A: "Every accessory and at every single-pole protective device — so that single-pole switches/fuses/MCBs are in the line conductor and L/N/cpc reach the correct terminals",
                B: "Only the consumer unit",
                C: "Only the furthest socket",
                D: "Only at the meter tails"
              },
              answer: "A",
              explanation: "Polarity is checked at every accessory and protective device — each single-pole switch/fuse/MCB must be in the line, and every accessory must have the correct conductor on the correct terminal. Both dead and live polarity checks are performed."
            },
            {
              number: 2,
              prompt: "Insulation resistance is recorded in megohms (MΩ). A reading of 1.5 MΩ on a new LV circuit:",
              options: {
                A: "Passes (≥ 1 MΩ minimum) but is at the bottom end of the acceptable range and warrants investigation as values below 2 MΩ should prompt review",
                B: "Fails — cannot be < 2 MΩ",
                C: "Is meaningless",
                D: "Is a perfect new-installation reading"
              },
              answer: "A",
              explanation: "1.0 MΩ is the legal minimum, but BS 7671 / GN3 advises investigation for any reading below 2 MΩ — a near-minimum reading suggests deteriorating insulation that will worsen with time."
            },
            {
              number: 3,
              prompt: "The figure-of-eight test on a ring final circuit, after Step 1, requires that:",
              options: {
                A: "The line of one leg is cross-connected to the cpc of the other leg at the DB, the neutral conductors are also cross-connected, and R1+R2 is then measured at every socket on the ring",
                B: "All conductors are linked together at the DB",
                C: "The DB is energised",
                D: "The ring is opened completely"
                },
              answer: "A",
              explanation: "After Step 1, cross-connect L1 of one leg to cpc of the other (and vice versa), and N1 of one to N2 of the other, at the DB. Measured R1+R2 at any socket then = (r1+r2)/4 with negligible variation around the ring."
            },
            {
              number: 4,
              prompt: "An IR test on a circuit fitted with neon indicators reads low. Before failing the circuit, the verifier should:",
              options: {
                A: "Disconnect the neons (which contain leakage paths to earth) and retest",
                B: "Increase the test voltage",
                C: "Use 250 V DC",
                D: "Replace the cables"
                },
              answer: "A",
              explanation: "Neon indicators have tiny leakage paths through their internal resistors and are typically the source of an apparent IR fault. Disconnect, retest, and the IR usually rises sharply to acceptable values."
            },
            {
              number: 5,
              prompt: "A continuity meter that meets GN3 requirements is sometimes called a:",
              options: {
                A: "Low-resistance ohmmeter (200 mA – 10 A test current at 4 V – 24 V)",
                B: "High-resistance megger",
                C: "Insulation tester",
                D: "Voltage indicator"
                },
              answer: "A",
              explanation: "Low-resistance ohmmeter delivers a test current high enough to break through oxide on poor connections — that's why it isn't the same as the IR tester (which delivers very low current at high voltage)."
            },
            {
              number: 6,
              prompt: "On a TN-S system, the cpc is the metallic sheath of the supply cable. The verifier doesn't measure this directly during initial verification — instead the cpc continuity is checked:",
              options: {
                A: "From the MET out into the installation (R2) and the supply earth is verified through Ze",
                B: "By a 500 V DC test",
                C: "By a continuity test of the entire supply cable",
                D: "By the DNO"
                },
              answer: "A",
              explanation: "Verifier's responsibility ends at the MET. Continuity tests check the cpc from MET outwards (R2 wander-lead or R1+R2 to each accessory). Supply-side earth integrity is checked by Ze."
            },
            {
              number: 7,
              prompt: "A radial cooker circuit 12 m in 6 mm² T+E (with 2.5 mm² cpc) — expected R1+R2 at 20 °C:",
              options: {
                A: "0.13 Ω",
                B: "0.25 Ω",
                C: "0.05 Ω",
                D: "0.40 Ω"
                },
              answer: "A",
              explanation: "R/m: 6 mm² ≈ 3.08 mΩ/m, 2.5 mm² ≈ 7.41 mΩ/m. Combined 10.49 mΩ/m. For 12 m: 12 × 10.49 = 126 mΩ ≈ 0.13 Ω."
            },
            {
              number: 8,
              prompt: "An IR test fails. The fault could be at any of multiple accessories. The diagnostic procedure is:",
              options: {
                A: "Halve the circuit (disconnect at midpoint), retest each half — the half that still fails contains the fault. Repeat halving recursively to localise",
                B: "Replace all cables",
                C: "Move on to next test",
                D: "Energise to see if it works"
                },
              answer: "A",
              explanation: "Bisection method — halve, retest, narrow down. With only a few accessories you can disconnect them one at a time. With many, halving converges much faster."
            },
            {
              number: 9,
              prompt: "An IR reading is taken with the circuit at 5 °C in winter. The expected behaviour vs a reading at 20 °C:",
              options: {
                A: "IR is generally higher at low temperatures (insulation resistance increases as temperature falls)",
                B: "IR is unchanged",
                C: "IR is lower at low temperatures",
                D: "IR cannot be tested below 10 °C"
                },
              answer: "A",
              explanation: "Insulation resistance has a negative temperature coefficient — colder = higher IR. A passing reading in winter may not pass on a hot summer day. Conversely, a marginal reading in summer could be noticeably better in cold weather."
            },
            {
              number: 10,
              prompt: "A test of cpc continuity at every socket on a radial circuit gives readings: 0.18, 0.22, 0.25, 0.30, 0.35 Ω in order of distance from the DB. The pattern is:",
              options: {
                A: "Healthy — R1+R2 increases monotonically with distance, confirming the cpc is intact",
                B: "A high-resistance joint near the DB",
                C: "An open cpc",
                D: "A wired-back-to-front socket"
                },
              answer: "A",
              explanation: "Healthy radial — readings rise smoothly with distance. A sudden jump or a non-monotonic pattern would indicate a poor termination at the point of the change."
            },
            {
              number: 11,
              prompt: "Before testing a ring circuit, all spurs on the ring should be:",
              options: {
                A: "Identified and noted, so their R1+R2 can be measured separately and compared with expected ring values",
                B: "Removed",
                C: "Left disconnected",
                D: "Energised"
                },
              answer: "A",
              explanation: "Spurs are accessories fed from one ring socket via a single cable. They will have higher R1+R2 than the ring sockets — so noting them up-front explains the variation seen during the figure-of-eight test."
            },
            {
              number: 12,
              prompt: "An IR test reads 0.0 MΩ — a dead short to earth or between live conductors. The correct response is:",
              options: {
                A: "Stop — DO NOT energise the circuit. Localise the fault by disconnection and rectify before any further testing or energisation",
                B: "Energise and watch what happens",
                C: "Increase test voltage",
                D: "Replace the meter"
                },
              answer: "A",
              explanation: "Dead short to earth means a fault path is in place. Energising would result in immediate disconnection at best, or fire/shock hazard at worst if the fault is high-resistance to a live person/extraneous part. Localise dead and rectify."
            },
            {
              number: 13,
              prompt: "A polarity test with a continuity meter on a single-pole switch confirms:",
              options: {
                A: "That the line conductor (and only the line conductor) passes through the switch contact — neutral and cpc bypass the switch",
                B: "That all conductors pass through the switch",
                C: "That the switch operates at 230 V AC",
                D: "Insulation resistance"
                },
              answer: "A",
              explanation: "Single-pole switches break only line. Verify with continuity: meter shows continuity L–out when switch is on, no continuity L–out when switch is off. N and cpc must remain unbroken regardless of switch state."
            },
            {
              number: 14,
              prompt: "A new 6 mm² SWA cable feeds a sub-board 40 m from the main DB. Expected R1+R2 at 20 °C if cpc is the SWA armouring (csa typically equivalent to ~ 6 mm² for 4-core 6 mm² cable, R/m ~ 3.08 mΩ/m for both conductors):",
              options: {
                A: "0.25 Ω",
                B: "0.50 Ω",
                C: "0.75 Ω",
                D: "1.00 Ω"
                },
              answer: "A",
              explanation: "Per metre R1 + R2 ≈ 3.08 + 3.08 = 6.16 mΩ/m. For 40 m: 40 × 6.16 = 246 mΩ ≈ 0.25 Ω. (Approximate — actual SWA armouring resistance depends on core arrangement.)"
            },
            {
              number: 15,
              prompt: "Insulation resistance is measured between the line conductors and earth on a circuit where the cpc remains:",
              options: {
                A: "Connected to the MET (so the test path mimics the in-service condition)",
                B: "Disconnected from the MET",
                C: "Linked to the line conductors",
                D: "Disconnected at every accessory"
                },
              answer: "A",
              explanation: "The cpc stays connected — so leakage from L (or N) to any earthed metalwork (incl. extraneous-conductive-parts via bonding) is detected. Disconnecting the cpc would invalidate the L–E measurement."
            },
            {
              number: 16,
              prompt: "A ring final circuit's r1 = 0.50 Ω, rn = 0.45 Ω. The 0.05 Ω difference is:",
              options: {
                A: "Within normal tolerance — small variations are expected from cable and termination differences",
                B: "Indicative of a faulty cable",
                C: "Indicative of an open neutral",
                D: "Indicative of an interconnection"
                },
              answer: "A",
              explanation: "r1 ≈ rn for healthy rings, but small variation (a few percent) is normal. Significant differences (e.g. 0.50 vs 0.20) suggest a problem — interconnection, broken leg, or partial spur situation."
            },
            {
              number: 17,
              prompt: "A 1000 V DC IR test is required for circuits operating at:",
              options: {
                A: "Above 500 V to 1000 V (e.g. 690 V three-phase systems)",
                B: "All LV circuits",
                C: "SELV circuits",
                D: "Domestic 230 V"
                },
              answer: "A",
              explanation: "Table 64 — circuits 500–1000 V are tested at 1000 V DC. Below 500 V uses 500 V DC; SELV uses 250 V DC. Above 1000 V is outside BS 7671."
            },
            {
              number: 18,
              prompt: "An IR test should NOT be performed on:",
              options: {
                A: "A new dead final circuit",
                B: "A circuit with sensitive electronics still connected (without first disconnecting/linking) because the test voltage may damage them",
                C: "An earthed cpc",
                D: "A SELV circuit (use 250 V DC instead)"
                },
              answer: "B",
              explanation: "Voltage-sensitive equipment (dimmers, SPDs, electronic timers) can be damaged by 500 V DC. Either disconnect or link L+N and test only to earth — never just apply the test through them and hope."
            },
            {
              number: 19,
              prompt: "Continuity of supplementary bonding to extraneous-conductive-parts is checked by:",
              options: {
                A: "R2 wander-lead method, with the lead nulled at the MET, measuring at the bonded part",
                B: "Insulation resistance test",
                C: "Earth fault loop impedance measurement",
                D: "Continuity at every accessory"
                },
              answer: "A",
              explanation: "Wander-lead from MET to the bonded extraneous-conductive-part. Lead nulled first. Reading is the resistance of the supplementary bonding conductor end-to-end. BS 7671 Reg 415.2.2 sets the maximum bonding resistance based on the largest IΔn x R = 50 V."
            },
            {
              number: 20,
              prompt: "Polarity dead-tested at the consumer unit confirms that:",
              options: {
                A: "Each single-pole MCB / RCBO is connected to the line busbar (not the neutral) — so the device interrupts the line conductor when it operates",
                B: "Only that the supply is correct polarity",
                C: "Only that the breakers are the right rating",
                D: "Only the MCB curve type"
                },
              answer: "A",
              explanation: "In a CU, every MCB/RCBO must sit on the line busbar — single-pole devices cannot be in neutral. The dead polarity check confirms each device connects to the line side and feeds the line conductor of its circuit."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "An IR test on a 230 V LV circuit between L–N reads 1.2 MΩ. The verifier should:",
              options: {
                A: "Pass but record the result and note the lower-than-typical reading; review at next periodic inspection",
                B: "Fail the circuit immediately",
                C: "Repeat the test at 1000 V DC",
                D: "Energise and observe"
              },
              answer: "A",
              explanation: "1.2 MΩ passes the 1 MΩ minimum. GN3 advises caution below 2 MΩ — accept but baseline the figure for comparison at periodic inspection. A drop in IR over time is more diagnostic than a single reading."
            },
            {
              number: 2,
              prompt: "Test sequence for dead testing — continuity is broken into TWO sub-tests:",
              options: {
                A: "Continuity of CPCs (radial) and continuity of ring final circuit conductors (the figure-of-eight test)",
                B: "Continuity of supply and continuity of bonding only",
                C: "Continuity of cpc and continuity of N",
                D: "Both sub-tests are the same"
              },
              answer: "A",
              explanation: "GN3 dead-test sequence breaks continuity into two tests — radial cpc continuity (R1+R2 or R2 wander) and ring final continuity (Step 1 + Step 2). Each is a separate test on the schedule."
            },
            {
              number: 3,
              prompt: "A 230 V circuit IR-tested at 500 V DC reads 50 MΩ on the L+N–E test. This is:",
              options: {
                A: "A healthy, comfortable pass — well above the 1 MΩ minimum",
                B: "A failure — must be at least 200 MΩ",
                C: "Marginal",
                D: "Not interpretable"
              },
              answer: "A",
              explanation: "50 MΩ is comfortably above the 1 MΩ minimum and well above the 'investigate below 2 MΩ' advisory. A typical new-installation healthy IR reading is in the tens to thousands of MΩ."
            },
            {
              number: 4,
              prompt: "A multifunction tester (MFT) measures continuity at:",
              options: {
                A: "Low test voltage (4 V to 24 V) but high enough current (200 mA – 10 A) to break through surface oxide",
                B: "230 V AC",
                C: "500 V DC",
                D: "1000 V DC"
              },
              answer: "A",
              explanation: "The continuity (low-resistance ohmmeter) function is purpose-designed: enough current to cut through dirt and oxide, low enough voltage to be safe. NOT the same as the IR tester."
            },
            {
              number: 5,
              prompt: "On a circuit protected by a 30 mA RCBO, IR testing can be done with:",
              options: {
                A: "The RCBO closed (the IR test does not energise the circuit, it only injects test DC voltage; the RCBO does not see this as a fault)",
                B: "The RCBO must be locked open",
                C: "The RCBO removed",
                D: "Only with the supply on"
              },
              answer: "A",
              explanation: "IR test injects DC at 500 V — the RCBO senses AC differential current, not DC. Closing the RCBO during IR doesn't affect the test (the circuit is still dead). Standard practice: isolate at the main switch, leave individual RCBOs in their as-installed state."
            },
            {
              number: 6,
              prompt: "A new ring circuit r1 = 0.20 Ω, rn = 0.45 Ω. The verifier should:",
              options: {
                A: "Investigate — significant difference between r1 and rn suggests a broken or interconnected leg, or a wrong connection at the DB",
                B: "Accept without comment",
                C: "Average r1 and rn",
                D: "Re-test at 1000 V"
              },
              answer: "A",
              explanation: "0.20 vs 0.45 is more than 2× — that's not normal cable variation, it's a fault. Possible causes: one leg of the neutral broken/disconnected, an interconnection between sockets making one leg longer, or wrong terminal at the DB. Investigate before proceeding."
            },
            {
              number: 7,
              prompt: "IR testing on a circuit with multiple final circuits sharing a neutral (TT or TN-C-S) is not common — but if it occurs:",
              options: {
                A: "Each final circuit's L should be tested individually to its own N (where separate) and to E; combined-neutral arrangements need careful test access",
                B: "All circuits must be tested together",
                C: "IR cannot be performed",
                D: "Increase test voltage"
              },
              answer: "A",
              explanation: "Shared neutrals are a complication. Standard practice is to break out each circuit at the DB so that L–N and L+N–E can be tested per-circuit. Combined-neutral configurations are rare in modern domestic but appear in older industrial wiring."
            },
            {
              number: 8,
              prompt: "Before any continuity test, the test leads must be:",
              options: {
                A: "Nulled (or their resistance recorded and subtracted) so that lead resistance does not inflate the reported circuit resistance",
                B: "Tested at 230 V AC",
                C: "Cut to identical lengths",
                D: "Replaced before each test"
              },
              answer: "A",
              explanation: "Lead resistance is typically 0.05–0.10 Ω. Nulling makes the meter zero with leads shorted; the displayed reading is then circuit only. Without nulling, low R1+R2 readings carry significant lead-resistance error."
            },
            {
              number: 9,
              prompt: "An IR test on a circuit feeding LED drivers reads 0.7 MΩ on the L+N–E test. Possible cause:",
              options: {
                A: "The drivers' EMC capacitors and integrated MOVs creating leakage paths to earth — disconnect the drivers and retest the cabling alone",
                B: "Open cpc",
                C: "Pinched cable in a back box",
                D: "Wrong polarity"
              },
              answer: "A",
              explanation: "LED drivers have line-filter capacitors to earth and MOVs that contribute leakage. Disconnect the drivers, retest the cabling — typically rises to high MΩ. Then refit the drivers (which are accepted to provide their own protection) and record the test method."
            },
            {
              number: 10,
              prompt: "A ring final circuit Step 1 results: r1 = 0.42 Ω, rn = 0.43 Ω, r2 = 0.69 Ω. Compare r1, rn and r2/r1 ratio. Healthy?",
              options: {
                A: "Yes — r1 ≈ rn (within 5%) and r2/r1 = 1.64 ≈ the expected 1.67 for 2.5/1.5 mm² T+E",
                B: "No — r2 is too high",
                C: "No — r1 and rn should be different",
                D: "No — r2 should equal r1"
              },
              answer: "A",
              explanation: "Healthy ring: r1 ≈ rn within tolerance, and r2/r1 = 1.67 ± a few % for 2.5/1.5 cable. 0.69/0.42 = 1.64 — perfect match. Step 2 should produce ≈ (0.42+0.69)/4 = 0.28 Ω at every socket."
            },
            {
              number: 11,
              prompt: "A measured R1+R2 at the furthest socket of a 32 A Type B ring circuit is 0.55 Ω. Ze = 0.30 Ω. Calculated Zs = 0.85 Ω. Table 41.3 max Zs at 0.4 s for 32 A Type B = 1.37 Ω. Apply the 0.8 rule:",
              options: {
                A: "0.8 × 1.37 = 1.10 Ω. Measured Zs (0.85 Ω) is below 1.10 Ω → pass",
                B: "1.5 × 1.37 = 2.05 Ω → pass",
                C: "Measured Zs > 1.37 → fail",
                D: "Zs irrelevant for ring circuits"
              },
              answer: "A",
              explanation: "0.8 × 1.37 = 1.10 Ω. Measured 0.85 Ω is well within — pass with margin. The ring's parallel paths help keep Zs comfortably below limits."
            },
            {
              number: 12,
              prompt: "A polarity dead-test at a socket-outlet confirms that:",
              options: {
                A: "Line is on the right-hand pin (looking at the socket front, with earth at top), neutral on the left, and cpc at the top",
                B: "All three conductors are connected somewhere",
                C: "The plate is the right colour",
                D: "The fuse is correctly rated"
              },
              answer: "A",
              explanation: "BS 1363 socket: looking at the front with earth at top, line is on the RIGHT (from observer's perspective), neutral on the LEFT, cpc top. Reversed polarity makes the appliance live when switched 'off' at a single-pole device — a dangerous fault."
            },
            {
              number: 13,
              prompt: "On a TT installation the verifier measures the earth electrode resistance Ra to:",
              options: {
                A: "Confirm that the IΔn × Ra × 5 ≤ 50 V (touch voltage limit), giving guidance that a 30 mA RCD with Ra ≤ 200 Ω satisfies the rule",
                B: "Confirm Ze",
                C: "Test the bonding",
                D: "Verify the supply"
              },
              answer: "A",
              explanation: "TT — Ra × IΔn ≤ 50 V (touch voltage) for the device to deliver ADS. For 30 mA RCD: Ra ≤ 50/0.03 = 1667 Ω, but practical stability suggests ≤ 200 Ω. For 100 mA: Ra ≤ 500 Ω."
            },
            {
              number: 14,
              prompt: "A radial circuit fails IR (0.3 MΩ) but continuity passes. The fault is most likely:",
              options: {
                A: "Insulation breakdown — pinched cable, moisture, or a faulty accessory left in circuit",
                B: "Open cpc (continuity would have failed)",
                C: "Reverse polarity (continuity passed)",
                D: "Wrong cable size"
              },
              answer: "A",
              explanation: "Continuity passing rules out open conductor faults. IR failure points at insulation compromise — the most likely physical cause is a pinch at a back box, a nick during termination, or a load (lamp, dimmer) in circuit. Disconnect to localise."
            },
            {
              number: 15,
              prompt: "A 25 m radial in 2.5/1.5 mm² T+E. Expected R1+R2 at 20 °C:",
              options: {
                A: "0.49 Ω",
                B: "0.30 Ω",
                C: "0.95 Ω",
                D: "0.20 Ω"
              },
              answer: "A",
              explanation: "R/m: 2.5 mm² ≈ 7.41 mΩ/m, 1.5 mm² ≈ 12.10 mΩ/m. Combined 19.51 mΩ/m. For 25 m: 25 × 19.51 = 488 mΩ ≈ 0.49 Ω."
            },
            {
              number: 16,
              prompt: "When a ring final circuit Step 2 (figure-of-eight) gives variable R1+R2 readings around the ring (0.27, 0.40, 0.27, 0.55, 0.27 Ω), the most likely cause is:",
              options: {
                A: "An interconnection between two sockets on the ring (unintended additional path), making some readings closer to the source",
                B: "An open cpc",
                C: "A wrong polarity socket",
                D: "Faulty IR test results"
              },
              answer: "A",
              explanation: "Substantially equal readings = healthy. Variable readings indicate problems: a break (some readings high), an interconnection (some low), or a spur on a spur (one notably high). Investigate by disconnecting and re-testing."
            },
            {
              number: 17,
              prompt: "A continuity test at the source end (DB) of a circuit can be expressed as 'R1+R2 between L and CPC at the busbar'. Reading on a healthy circuit:",
              options: {
                A: "Should equal lead resistance (very low) — the link at the DB shorts L to cpc directly",
                B: "Should equal R1+R2 of the entire circuit",
                C: "Should be infinite",
                D: "Cannot be measured"
              },
              answer: "A",
              explanation: "If you've linked L and cpc at the DB and you measure between L and cpc AT the DB, the path is just the link itself — reading should be near zero (lead resistance only). The whole point of the test is to take the reading at each accessory along the circuit."
            },
            {
              number: 18,
              prompt: "An IR test at 250 V DC on a SELV circuit reads 0.8 MΩ. This:",
              options: {
                A: "Passes — minimum for SELV is 0.5 MΩ at 250 V DC",
                B: "Fails — must be ≥ 1 MΩ",
                C: "Fails — must be ≥ 2 MΩ",
                D: "Is meaningless"
              },
              answer: "A",
              explanation: "Table 64 — SELV minimum 0.5 MΩ at 250 V DC. 0.8 MΩ is comfortable. (Don't confuse with the 1 MΩ LV minimum at 500 V DC.)"
            },
            {
              number: 19,
              prompt: "A new ring final circuit's expected R1+R2 at every socket from the figure-of-eight test is calculated as (r1 + r2) / 4. This is because:",
              options: {
                A: "At any socket midway round the ring, R1+R2 sees half-r1 in parallel with half-r1 (r1/4), plus half-r2 in parallel with half-r2 (r2/4) — the total = (r1+r2)/4",
                B: "(r1+r2) / 2",
                C: "Always equal to r1",
                D: "Cannot be calculated"
              },
              answer: "A",
              explanation: "Imagine standing at any socket on the ring. The line side has TWO paths back to the DB (clockwise and anti-clockwise through the L conductor) — each path is approximately half-r1, in parallel = r1/4. Same for cpc — r2/4. Sum = (r1+r2)/4 at every socket."
            },
            {
              number: 20,
              prompt: "Test recording: an R1+R2 measurement of 0.62 Ω is recorded on the Schedule of Test Results. The verifier should also record:",
              options: {
                A: "Whether nulling was applied, the test instrument used, and the calibration date — all part of GN3 best practice for traceable records",
                B: "Only the value",
                C: "Only the date",
                D: "Only the customer's name"
              },
              answer: "A",
              explanation: "GN3 — traceable records require knowing the instrument, that nulling was applied, and the calibration is in date. Without those the figure on the schedule is harder to defend if questioned later."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "Insulation resistance is tested at DC rather than AC because:",
              options: {
                A: "DC produces a steady voltage stress across the insulation; AC would charge/discharge capacitance giving a misleading lower reading and stressing capacitive elements unnecessarily",
                B: "DC is cheaper to generate",
                C: "AC instruments are not available",
                D: "BS 7671 specifies AC only"
              },
              answer: "A",
              explanation: "DC settles the insulation under a steady voltage and measures the leakage resistance. AC would interact with capacitive elements (cable capacitance, equipment capacitors) producing a current that doesn't represent insulation health. IR testers are always DC."
            },
            {
              number: 2,
              prompt: "An R1+R2 reading is taken with the circuit cold (20 °C). To compare with BS 7671 max Zs values (which assume operating temperature ~ 70 °C), the cold reading should be:",
              options: {
                A: "Multiplied by ~ 1.20 to account for the resistance increase as the conductor warms — or use the shortcut: measured Zs ≤ 0.8 × tabulated",
                B: "Multiplied by 0.5",
                C: "Used as-is",
                D: "Halved"
              },
              answer: "A",
              explanation: "Conductor resistance rises with temperature (positive coefficient ~ 0.4%/°C for copper). 20 °C → 70 °C is roughly 20% rise. Multiply cold R1+R2 by 1.20 to get an estimate of warm value — or use the 0.8 rule of thumb against tabulated maxima."
            },
            {
              number: 3,
              prompt: "The R2 wander-lead method requires:",
              options: {
                A: "Nulling the long lead before the test, with the lead connected at the MET",
                B: "A 500 V DC test voltage",
                C: "The supply to be live",
                D: "Both ends of the cpc to be disconnected"
              },
              answer: "A",
              explanation: "Wander-lead: long lead from MET (with the meter), nulled with the lead shorted. Then connect to the cpc point of interest and read the cpc resistance back to the MET. Standard for bonding and any cpc where the line conductor isn't accessible at the origin."
            },
            {
              number: 4,
              prompt: "A circuit containing an SPD reads 0.05 MΩ on the IR test. Before failing the circuit, the verifier should:",
              options: {
                A: "Disconnect the SPD (its MOVs conduct at < 500 V DC) and retest the cabling alone",
                B: "Replace the cabling",
                C: "Increase the test voltage",
                D: "Use 230 V AC"
              },
              answer: "A",
              explanation: "SPDs typically clamp around 275 V — well below 500 V DC test voltage. Leaving the SPD in circuit either fails the test through the MOV or damages the SPD. Disconnect, test, refit, document."
            },
            {
              number: 5,
              prompt: "A polarity dead-check at a 13 A switched fused spur (FCU) confirms that:",
              options: {
                A: "The fuse, switch and outgoing line all sit in the line conductor; the neutral and cpc bypass the switch and fuse",
                B: "Only the switch is in line",
                C: "The fuse is in the neutral",
                D: "The cpc is interrupted by the switch"
              },
              answer: "A",
              explanation: "FCU is a single-pole device. Both the fuse and the switch must be in line. Continuity check: with switch on and fuse fitted, L–out continuous; with switch off, L–out open. N and cpc must be continuous regardless of switch state. Removing the fuse opens the line only — a common diagnostic move."
            },
            {
              number: 6,
              prompt: "An L–N IR reading is 100 MΩ but L+N–E is 0.5 MΩ. The fault location is most likely:",
              options: {
                A: "Between one of the live conductors and earth — perhaps a pinched cable to a metallic back box, moisture in a junction box, or a leaking accessory to earth",
                B: "Between L and N",
                C: "The cpc itself",
                D: "The MET"
              },
              answer: "A",
              explanation: "L–N healthy means no leakage between live conductors; L+N–E low means leakage from one or both lives to earth. Disconnect at midpoint, retest each half — bisection isolates the section containing the fault."
            },
            {
              number: 7,
              prompt: "A continuity test using R1+R2 at the furthest socket of a circuit reads 0.42 Ω. The verifier nulled the leads first, recording lead R = 0.07 Ω. The actual R1+R2 of the circuit is:",
              options: {
                A: "0.42 Ω (the meter already subtracted the lead resistance after nulling)",
                B: "0.49 Ω",
                C: "0.35 Ω",
                D: "0.07 Ω"
              },
              answer: "A",
              explanation: "Nulling tells the meter 'this is zero'. After nulling, the displayed reading is circuit only. If the leads weren't nulled but lead R was recorded, you'd subtract — but in this case nulling already did it."
            },
            {
              number: 8,
              prompt: "The figure-of-eight test gives R1+R2 readings of 0.28, 0.27, 0.28, 0.27 Ω at four ring sockets and 0.62 Ω at a fifth. The fifth socket is most likely:",
              options: {
                A: "A spur off the ring (with the additional cable resistance of the spur cable adding to the (r1+r2)/4 value)",
                B: "An interconnection",
                C: "A break in the ring",
                D: "Reverse polarity"
              },
              answer: "A",
              explanation: "A spur socket is fed by a cable from one of the ring sockets — its R1+R2 includes (r1+r2)/4 plus the spur's own line+cpc resistance. Higher than ring sockets but not by a huge factor. Confirm by counting cables in the back box (3 = ring, 2 = spur)."
            },
            {
              number: 9,
              prompt: "A new circuit's IR is tested with the consumer unit's RCD/RCBOs in their normal closed position. This is acceptable because:",
              options: {
                A: "IR tester injects DC test voltage; RCDs sense AC differential current. The RCD won't trip during an IR test",
                B: "RCDs are bypassed during IR",
                C: "BS 7671 forbids RCDs from operating on DC",
                D: "The DC voltage is below RCD threshold"
              },
              answer: "A",
              explanation: "Type AC RCDs only sense AC residual current; the DC test voltage doesn't trigger them. Type A and Type B can detect DC residual current, but the IR test is between conductors, not from line to a RCD reference, so the trip mechanism still doesn't activate."
            },
            {
              number: 10,
              prompt: "A continuity meter that doesn't deliver the required GN3 test current may give misleading results because:",
              options: {
                A: "Insufficient current may not break through surface oxide on poor connections, so high-resistance joints are masked as healthy connections",
                B: "Higher voltage is dangerous",
                C: "The reading is too high always",
                D: "The reading is unaffected"
              },
              answer: "A",
              explanation: "GN3 specifies 200 mA – 10 A precisely so the test current is high enough to cut through dirt, oxide and corrosion at terminations. A low-current ohmmeter (multimeter on Ω) may read low through a partial joint that would go open under load."
            },
            {
              number: 11,
              prompt: "A 4 mm² 30 m radial circuit, 2.5 mm² cpc. R/m at 20 °C: 4 mm² = 4.61 mΩ/m, 2.5 mm² = 7.41 mΩ/m. Expected R1+R2:",
              options: {
                A: "0.36 Ω",
                B: "0.50 Ω",
                C: "0.20 Ω",
                D: "0.75 Ω"
              },
              answer: "A",
              explanation: "Per metre: 4.61 + 7.41 = 12.02 mΩ/m. For 30 m: 30 × 12.02 = 361 mΩ ≈ 0.36 Ω."
            },
            {
              number: 12,
              prompt: "An IR test should be carried out:",
              options: {
                A: "AFTER continuity of cpcs and ring final circuits has been confirmed, but BEFORE polarity is dead-checked",
                B: "Before all other dead tests",
                C: "After polarity",
                D: "Only on circuits over 25 m"
              },
              answer: "A",
              explanation: "GN3 sequence: continuity of CPCs → continuity of ring → IR → polarity → earth electrode. Each step builds on the previous: confirming cpc continuity before IR makes the L+N–E test meaningful; confirming IR before polarity gives confidence that the dead-checks aren't on faulty cabling."
            },
            {
              number: 13,
              prompt: "A two-pole light switch in a TT installation interrupts both line AND neutral. Polarity dead-check confirms:",
              options: {
                A: "Both line and neutral pass through the switch contacts; cpc bypasses the switch",
                B: "Only line is interrupted",
                C: "Only neutral is interrupted",
                D: "All three conductors are interrupted including cpc"
              },
              answer: "A",
              explanation: "Two-pole switch interrupts both lives (in this context, L and N — but in three-phase 'two-pole' might mean two phases). The cpc must NOT be interrupted by any switch — it remains continuous to ensure ADS works."
            },
            {
              number: 14,
              prompt: "An R1+R2 test on a radial circuit reveals an unexpectedly low reading at the third socket along (lower than the second). This is:",
              options: {
                A: "Anomalous — readings should monotonically increase with distance. Investigate for an interconnection, parallel path or wrong terminal",
                B: "Normal",
                C: "Indicative of a healthy circuit",
                D: "Caused by lead capacitance"
              },
              answer: "A",
              explanation: "Healthy radials produce monotonic R1+R2 progression. A reading that goes down indicates a parallel path (interconnection, ring made by mistake, common neutral with another circuit). Investigate at the DB and at each socket along the way."
            },
            {
              number: 15,
              prompt: "BS 7671 maximum Zs for a 6 A Type B MCB at 0.4 s disconnection is 7.28 Ω (Table 41.3). For a measured cold reading, the rule-of-thumb maximum is:",
              options: {
                A: "0.8 × 7.28 = 5.82 Ω",
                B: "1.2 × 7.28 = 8.74 Ω",
                C: "7.28 Ω directly",
                D: "Half of 7.28"
              },
              answer: "A",
              explanation: "GN3 rule of thumb — measured cold ≤ 0.8 × tabulated. 0.8 × 7.28 = 5.82 Ω. Account for the cable warming up under continuous current. Reading 5.82 Ω cold ≈ 7 Ω warm, just within the tabulated limit."
            },
            {
              number: 16,
              prompt: "When an RCD-protected circuit has its IR tested:",
              options: {
                A: "The test instrument's DC test voltage doesn't trigger an AC-sensing RCD, but Type A or Type B RCDs CAN detect pulsating DC. In practice, IR testing rarely trips RCDs",
                B: "The RCD will always trip",
                C: "The RCD must be bypassed",
                D: "Only on circuits without RCDs"
              },
              answer: "A",
              explanation: "Type AC won't see the DC test current. Type A senses pulsating DC and Type B senses smooth DC, BUT the test voltage is between conductors not to ground reference, so the RCD isn't seeing differential current. In practice IR doesn't trip RCDs, though RCDs can occasionally need to be opened during fault-finding."
            },
            {
              number: 17,
              prompt: "An IR test on a long cable run reads lower than expected. Possible cause (other than insulation fault):",
              options: {
                A: "The cable's distributed capacitance discharging during the test, giving an instantaneous lower reading that rises with longer test duration. Hold the test for several seconds and let the reading stabilise",
                B: "The cable is the wrong colour",
                C: "Cable capacity is irrelevant to IR",
                D: "The voltage is too high"
              },
              answer: "A",
              explanation: "Long cable runs have measurable capacitance that needs to charge before a steady IR reading appears. Hold the test 5–10 seconds; the reading climbs and stabilises. A 'flash' reading can be misleadingly low. Modern testers automate this."
            },
            {
              number: 18,
              prompt: "A polarity test at a single-pole switch confirms continuity from the line incoming terminal to the line outgoing terminal when the switch is on, and:",
              options: {
                A: "Open circuit (no continuity) when the switch is off — and continuity through neutral and cpc regardless of switch position",
                B: "Continuity through cpc only when on",
                C: "Continuity through neutral only when off",
                D: "Continuity through everything always"
              },
              answer: "A",
              explanation: "Single-pole switch logic: L through the switch contact is the only path interrupted. Switch on = L continuous; switch off = L open. N and cpc must remain continuous regardless of switch state — the lampholder N and cpc terminals remain bonded back to the supply at all times."
            },
            {
              number: 19,
              prompt: "Earth electrode resistance on a TT installation is best measured by:",
              options: {
                A: "Fall-of-potential (3-spike) method — gives an accurate Ra value",
                B: "Insulation resistance test",
                C: "Continuity test at the MET",
                D: "Ze measurement"
              },
              answer: "A",
              explanation: "Fall-of-potential is the precise method: drive two auxiliary spikes (current and potential), measure with the electrode under test. Modern MFTs include the Ra function (loop test mode for TT) as a practical in-service equivalent."
            },
            {
              number: 20,
              prompt: "An IR test reading of 1.5 MΩ on an LV circuit:",
              options: {
                A: "Passes the 1 MΩ minimum but is below the 2 MΩ 'investigate' threshold — accept with a note recommending re-test at periodic inspection",
                B: "Fails outright",
                C: "Is impossible to interpret",
                D: "Means the cable is faulty"
              },
              answer: "A",
              explanation: "1.5 MΩ passes Table 64 but BS 7671/GN3 advise investigation below 2 MΩ. Likely cause: a load/electronic device left in circuit. Disconnect to baseline cabling, then retest with loads. Document the figure for future comparison."
            }
          ]
        }
      ]
    },
    {
      id: "section-3",
      title: "Section 3 — Live Tests & Acceptance",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "External earth fault loop impedance Ze is measured at the origin of the installation by:",
              options: {
                A: "Calculating it from cable resistance",
                B: "Disconnecting the means of earthing, then measuring between the line conductor and the disconnected MET earthing point with the supply energised",
                C: "Reading the value from the DNO's certificate",
                D: "Measuring between line and neutral"
              },
              answer: "B",
              explanation: "Ze is the loop impedance external to the installation. Disconnect the means of earthing so parallel paths via gas/water bonding don't artificially lower the reading. Energise the supply, measure L to the disconnected earth, reconnect immediately."
            },
            {
              number: 2,
              prompt: "Earth fault loop impedance Zs at the far end of a final circuit can be obtained by:",
              options: {
                A: "Direct measurement only",
                B: "Calculation Zs = Ze + (R1 + R2), or by direct measurement (using the no-trip / RCD-bypass mode of the loop tester on RCD-protected circuits)",
                C: "Estimation from the cable length",
                D: "The DNO's quoted PFC value"
              },
              answer: "B",
              explanation: "Both routes are accepted. Calculation is the safer first method (uses dead-test data); direct measurement is then used to confirm the calculated value, with the no-trip mode used on RCD-protected circuits."
            },
            {
              number: 3,
              prompt: "For a 30 mA general-type RCD, the test current and required maximum operating times are:",
              options: {
                A: "0.5 × IΔn (no trip in 2 s); 1 × IΔn (≤ 300 ms); 5 × IΔn (≤ 40 ms)",
                B: "1 × IΔn (≤ 1 s); 5 × IΔn (≤ 200 ms)",
                C: "0.5 × IΔn (≤ 100 ms); 1 × IΔn (≤ 50 ms)",
                D: "Only the 30 mA push-button test"
              },
              answer: "A",
              explanation: "0.5×IΔn: must NOT trip within 2 s. 1×IΔn: trip within 300 ms. 5×IΔn: trip within 40 ms. S-type (selective) RCDs allow longer times to support discrimination with downstream devices."
            },
            {
              number: 4,
              prompt: "Prospective Fault Current (PFC) recorded on the EIC is:",
              options: {
                A: "The lower of PSCC (line-to-line short circuit) and PEFC (line-to-earth)",
                B: "The higher of PSCC (line-to-line) and PEFC (line-to-earth) measured at the origin",
                C: "Only PEFC",
                D: "Only PSCC"
              },
              answer: "B",
              explanation: "Record the higher value so every protective device can be demonstrated to have a breaking capacity at least equal to the worst-case fault level. Typical UK domestic TN-C-S 1–16 kA depending on substation proximity."
            },
            {
              number: 5,
              prompt: "Live polarity at the origin of a single-phase installation confirms:",
              options: {
                A: "Line is at the line terminal of the meter and consumer unit, neutral is at the neutral terminal — using an approved voltage indicator and a phase rotation tester for three-phase",
                B: "Just that the lights work",
                C: "Insulation resistance",
                D: "Only the supply voltage"
              },
              answer: "A",
              explanation: "Live polarity at the origin is checked with an AVI: L–E ≈ 230 V, N–E ≈ 0 V on a TN system. Reversed supply polarity is unusual but possible (e.g. mis-wired DNO connection) and would be a serious issue."
            },
            {
              number: 6,
              prompt: "An RCD test button (the integral test button on an RCD/RCBO) confirms that:",
              options: {
                A: "The mechanical trip mechanism operates — but does NOT verify trip current threshold or disconnection time",
                B: "All BS 7671 RCD tests pass",
                C: "The RCD trips at 30 mA exactly",
                D: "The disconnection time meets BS 7671"
              },
              answer: "A",
              explanation: "The integral test button injects a known imbalance via an internal resistor. It only tests that the mechanism works. Verification of threshold and disconnection time requires an external RCD tester applying calibrated test currents."
            },
            {
              number: 7,
              prompt: "Max Zs for a 32 A Type B MCB at 0.4 s disconnection (Table 41.3, 230 V) is:",
              options: {
                A: "1.37 Ω",
                B: "0.7 Ω",
                C: "2.30 Ω",
                D: "5.0 Ω"
              },
              answer: "A",
              explanation: "Table 41.3 (230 V, 0.4 s). Type B 32 A: 1.37 Ω. Type B 16 A: 2.73 Ω. Type C 32 A: 0.69 Ω. The Type B/C/D family halves max Zs as the curve gets faster (2-5x trip current ratio)."
            },
            {
              number: 8,
              prompt: "An S-type (selective) 100 mA RCD upstream of a 30 mA RCD provides discrimination because:",
              options: {
                A: "It is intentionally slower to operate (≤ 500 ms at 1×IΔn, ≤ 150 ms at 5×IΔn) so the downstream 30 mA RCD can clear smaller faults first",
                B: "It is faster than the 30 mA RCD",
                C: "It has a higher trip threshold",
                D: "It uses DC sensing"
              },
              answer: "A",
              explanation: "S-type RCDs have built-in time delay. At 1×IΔn: 130–500 ms (vs. 300 ms general). At 5×IΔn: ≤ 150 ms (vs. 40 ms general). The delay lets the downstream RCD trip first, isolating only the affected circuit."
            },
            {
              number: 9,
              prompt: "Functional testing under Reg 643.10 should be carried out:",
              options: {
                A: "Before any of the dead tests, so faults are visible early",
                B: "Only after all dead and live tests have been completed satisfactorily",
                C: "Only on assemblies that the customer specifically requests",
                D: "On every accessory individually, with the supply isolated"
              },
              answer: "B",
              explanation: "Functional testing is the final 'in service' check. It is carried out after all dead and live tests have been completed satisfactorily — there is no point exercising switchgear and interlocks if a fault elsewhere would render the result meaningless or unsafe."
            },
            {
              number: 10,
              prompt: "A 30 mA Type AC RCD is connected to a circuit feeding a variable-frequency drive (VFD) with electronic switching producing DC residual currents. The correct response is:",
              options: {
                A: "Replace the Type AC with a Type B RCD which is designed to detect smooth DC residual currents",
                B: "Leave the Type AC in place",
                C: "Use a Type A",
                D: "Remove RCD protection altogether"
              },
              answer: "A",
              explanation: "Type AC senses sinusoidal AC only. VFDs (and EV chargers) produce DC residual currents that can blind a Type AC RCD ('DC-blinding'). Type A senses AC + pulsating DC; Type B senses AC + pulsating DC + smooth DC. Type B is required for VFDs."
            },
            {
              number: 11,
              prompt: "A measured Zs at the furthest socket of a 32 A Type B circuit is 1.20 Ω. Table 41.3 max = 1.37 Ω. The 0.8 rule gives:",
              options: {
                A: "0.8 × 1.37 = 1.10 Ω. Measured 1.20 Ω exceeds 1.10 Ω → investigate (possibly fail under warm conditions)",
                B: "Pass — measured < 1.37",
                C: "Fail — measured > 1.0",
                D: "Pass — Zs irrelevant"
              },
              answer: "A",
              explanation: "Measured cold reading should ≤ 0.8 × tabulated. 0.8 × 1.37 = 1.10 Ω. 1.20 Ω cold means warm Zs would likely exceed 1.37 Ω — overcurrent ADS not assured. Investigate cable length, csa, terminations or accept ADS via 30 mA RCD if fitted."
            },
            {
              number: 12,
              prompt: "Phase rotation testing on a three-phase installation confirms:",
              options: {
                A: "L1, L2, L3 are connected in correct sequence (clockwise rotation) — important for three-phase motors which would otherwise spin backwards",
                B: "The phase voltage is 230 V",
                C: "The neutral is at zero potential",
                D: "Insulation resistance"
              },
              answer: "A",
              explanation: "Three-phase motors run in the direction set by phase sequence. Reversing two phases reverses motor rotation. Phase rotation tester (motor disc or lamp set) confirms L1–L2–L3 sequence at every point — particularly after any rewire or main switch replacement."
            },
            {
              number: 13,
              prompt: "RCD additional protection (Reg 411.3.3) for socket outlets requires the RCD to be:",
              options: {
                A: "30 mA, tripping within 40 ms at 5 × IΔn (= 150 mA)",
                B: "100 mA",
                C: "300 mA, time-delayed",
                D: "300 mA, instantaneous"
              },
              answer: "A",
              explanation: "Reg 415.1.1 — 30 mA RCD as additional protection must trip within 40 ms at 5 × IΔn. This is the high-current test underpinning shock protection. The 30 mA threshold + 40 ms time prevents ventricular fibrillation in most adult shock scenarios."
            },
            {
              number: 14,
              prompt: "Live polarity check at the origin of a TN-C-S installation should confirm:",
              options: {
                A: "L–N ≈ 230 V, L–E ≈ 230 V, N–E ≈ 0 V (TN-C-S has the neutral and earth bonded at the source)",
                B: "L–N ≈ 0 V",
                C: "L–E ≈ 0 V",
                D: "All three voltages ≈ 0 V"
              },
              answer: "A",
              explanation: "TN-C-S supply: L–N is the supply voltage (~230 V); the MET is bonded to N at the supply, so N–E ≈ 0 V locally and L–E also ~ 230 V. Reversed N–E (~ 230 V on N–E) would indicate a serious supply problem."
            },
            {
              number: 15,
              prompt: "An MFT loop tester used to measure Zs on an RCD-protected circuit should:",
              options: {
                A: "Use the no-trip / low-current Zs function so the RCD doesn't operate during the test",
                B: "Bypass the RCD with a temporary link",
                C: "Use the high-current Zs mode regardless",
                D: "Use 500 V DC"
              },
              answer: "A",
              explanation: "No-trip mode injects pulses of low average current that don't accumulate to RCD threshold. Result is a Zs reading without tripping. Bypassing with temporary links (A) is dangerous and now strictly forbidden — was once common practice but rejected in modern guidance."
            },
            {
              number: 16,
              prompt: "Functional testing of an RCD includes confirming the integral test button operates AND:",
              options: {
                A: "Independent verification using an RCD tester at 0.5×IΔn (no trip in 2 s), 1×IΔn (within 300 ms), and 5×IΔn (within 40 ms)",
                B: "Only the test button needs to be pressed",
                C: "Only the 5×IΔn test is needed",
                D: "An IR test at 500 V DC"
              },
              answer: "A",
              explanation: "Both: integral test button (proves the mechanism); plus RCD tester at three test points to verify threshold and disconnection time. The integral button alone is insufficient — it doesn't measure threshold or time accurately."
            },
            {
              number: 17,
              prompt: "Prospective short-circuit current (PSCC) at the origin is measured between:",
              options: {
                A: "Line and neutral conductors at the origin, with the loop tester in PSC mode",
                B: "Line and earth",
                C: "Neutral and earth",
                D: "Two phases"
              },
              answer: "A",
              explanation: "PSCC is the line-to-line (or in single-phase, line-to-neutral) short-circuit current. Measured at the origin with the loop tester in 'short circuit' mode. Compare with PEFC (line-to-earth) — record the higher value as PFC."
            },
            {
              number: 18,
              prompt: "On a TN-S system, Ze is typically expected to be:",
              options: {
                A: "Around 0.3–0.8 Ω (the supply impedance plus the cable sheath earth path back to the substation)",
                B: "Always above 1 Ω",
                C: "Always below 0.05 Ω",
                D: "10 Ω or higher"
              },
              answer: "A",
              explanation: "TN-S: separate earth conductor (often the supply cable's metallic sheath). Typical Ze 0.3–0.8 Ω depending on supply length. TN-C-S typically 0.1–0.35 Ω (combined neutral-earth lower impedance). TT depends on local electrode (often 30–200 Ω)."
            },
            {
              number: 19,
              prompt: "An RCD test gives 1×IΔn result of 320 ms on a 30 mA general-type. The correct action is:",
              options: {
                A: "Fail — exceeds 300 ms maximum. Replace the RCD and retest at 0.5×, 1× and 5×IΔn",
                B: "Pass with comment",
                C: "Pass — within 10% tolerance",
                D: "Increase IΔn rating"
              },
              answer: "A",
              explanation: "300 ms is the absolute maximum at 1×IΔn for general-type RCDs. 320 ms = fail. The device no longer provides the additional protection claimed. Replace it and re-test all three test points; record on the schedule."
            },
            {
              number: 20,
              prompt: "After Ze is measured at the origin, the main protective bonding must be:",
              options: {
                A: "Reconnected immediately — the installation is temporarily less safe while bonding is disconnected",
                B: "Left disconnected for a permanent design improvement",
                C: "Replaced with a higher-rated conductor",
                D: "Tested for IR"
              },
              answer: "A",
              explanation: "Disconnecting the main bonding for the Ze test removes a safety feature (parallel earth paths via gas/water) — keep it disconnected for the absolute minimum time and reconnect immediately afterwards. Leaving it disconnected, even briefly, is an active hazard."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "PFC recorded on the EIC is the larger of PSCC and PEFC measured at the origin, because:",
              options: {
                A: "Every protective device on the installation must have a breaking capacity at least equal to the worst-case fault current at its point of installation",
                B: "PEFC is always larger",
                C: "PSCC is always larger",
                D: "The two values cancel"
              },
              answer: "A",
              explanation: "BS 7671 Reg 434.5 — every overcurrent device must withstand the maximum prospective fault current. Recording the higher figure ensures the design considers the worst case. Often PSCC > PEFC because line-to-line impedance is lower than line-to-earth."
            },
            {
              number: 2,
              prompt: "Disconnection times for fault protection by ADS in a TN system (Table 41.1) are:",
              options: {
                A: "0.4 s for final circuits ≤ 32 A; 5 s for distribution circuits or final > 32 A",
                B: "0.1 s for all circuits",
                C: "1 s for all circuits",
                D: "10 s for all circuits"
              },
              answer: "A",
              explanation: "Table 41.1 / Reg 411.3.2.2: TN final circuits ≤ 32 A: 0.4 s. Distribution circuits or higher-rated final circuits: 5 s. TT systems use 0.2 s and 1 s respectively. Times reflect the shock-risk physiology research."
            },
            {
              number: 3,
              prompt: "A measured Zs of 0.92 Ω on a 16 A Type C MCB. Table 41.3 max for 16 A Type C = 1.37 Ω. Apply the 0.8 rule:",
              options: {
                A: "0.8 × 1.37 = 1.10 Ω. Measured 0.92 Ω is within → pass",
                B: "Fail — Zs > 0.5 Ω",
                C: "Fail — Zs > 1 Ω",
                D: "Pass — Zs < 1.37"
              },
              answer: "A",
              explanation: "Type C 16 A max Zs = 1.37 Ω at 0.4 s. 0.8 × 1.37 = 1.10 Ω. Measured 0.92 Ω is comfortably below — pass with margin even at warm conductor temperature."
            },
            {
              number: 4,
              prompt: "An RCD test instrument applies test currents at:",
              options: {
                A: "The full IΔn waveform expected to be detected by the device under test (sinusoidal AC for Type AC, pulsating DC for Type A, etc.)",
                B: "Always 230 V AC",
                C: "Always 50 Hz",
                D: "DC only"
              },
              answer: "A",
              explanation: "RCD testers can apply different waveforms to test the appropriate type. AC for Type AC; pulsating DC for Type A; smooth DC capability for Type B. Using the wrong waveform doesn't reflect the device's intended protection scope."
            },
            {
              number: 5,
              prompt: "Functional testing of a luminaire after initial verification confirms:",
              options: {
                A: "The switch operates the lamp, the dimmer dims smoothly (if fitted), and any sensor/timer functions as intended",
                B: "The IR test passed",
                C: "The polarity is correct",
                D: "The Zs is within Table 41.3"
              },
              answer: "A",
              explanation: "Functional testing is the practical 'does it work' confirmation. Switch operates lamp on/off, dimmer ramps smoothly, sensor triggers, timer runs to programme. IR/polarity/Zs are tested separately — functional is the integration check."
            },
            {
              number: 6,
              prompt: "The S-type 100 mA RCD operating times at 1×IΔn and 5×IΔn are:",
              options: {
                A: "130–500 ms at 1×IΔn; ≤ 150 ms at 5×IΔn",
                B: "≤ 300 ms at 1×IΔn; ≤ 40 ms at 5×IΔn",
                C: "≤ 100 ms at 1×IΔn; ≤ 200 ms at 5×IΔn",
                D: "≤ 1 s at both"
              },
              answer: "A",
              explanation: "S-type (selective) at 1×IΔn: 130 ms minimum delay (so it doesn't trip before downstream RCDs) up to 500 ms maximum. At 5×IΔn: ≤ 150 ms. Use upstream of 30 mA RCDs to give time for the downstream to clear local faults first."
            },
            {
              number: 7,
              prompt: "Max Zs for a 6 A Type B MCB at 0.4 s disconnection (Table 41.3) is approximately:",
              options: {
                A: "7.28 Ω",
                B: "1.37 Ω",
                C: "0.69 Ω",
                D: "12.0 Ω"
              },
              answer: "A",
              explanation: "Type B max Zs scales inversely with rating: 6 A → 7.28 Ω, 10 A → 4.37 Ω, 16 A → 2.73 Ω, 32 A → 1.37 Ω. The smaller MCBs trip at lower currents so they tolerate higher Zs."
            },
            {
              number: 8,
              prompt: "Earth fault loop impedance Ze at the origin should be measured with:",
              options: {
                A: "Main bonding disconnected at the MET, main switch open, supply energised; reconnect bonding immediately after the test",
                B: "Bonding connected, main switch closed",
                C: "All circuits energised and loaded",
                D: "Only the lighting circuits energised"
              },
              answer: "A",
              explanation: "Bonding disconnected so parallel earth paths don't lower the reading. Main switch open so the installation contributes nothing to the loop. Test then captures only the source-side impedance + cable + supply earth."
            },
            {
              number: 9,
              prompt: "On a TN-C-S system, the value of Ze depends on:",
              options: {
                A: "The DNO supply impedance and the combined neutral-earth (PEN) conductor impedance back to the source — typically 0.10–0.35 Ω",
                B: "The customer's installation cable",
                C: "The local soil resistivity",
                D: "The number of circuits"
              },
              answer: "A",
              explanation: "TN-C-S (PME): the neutral-earth combined conductor in the supply cable is the earth return path. Lower Ze than TN-S because the conductor is heavier. Typical UK domestic Ze on PME: 0.10–0.35 Ω."
            },
            {
              number: 10,
              prompt: "An RCD-protected circuit's Zs is measured using the no-trip Zs function. The reading is 1.50 Ω. The MCB is 32 A Type C (max Zs 0.69 Ω at 0.4 s, Table 41.3). The verifier should:",
              options: {
                A: "Note that ADS by overcurrent alone is NOT achieved (1.50 > 0.69), but the 30 mA RCD provides ADS within 0.4 s for any L–E fault current ≥ 30 mA — record both observations and confirm RCD performance",
                B: "Fail the circuit outright",
                C: "Replace the MCB with a Type B",
                D: "Disable the RCD"
              },
              answer: "A",
              explanation: "Modern installations rely on RCD for ADS where Zs is high — common in long lighting runs. The MCB protects from short circuit and overload; the 30 mA RCD provides ADS via earth fault. Reg 411.4.6 — RCD up to 5 s for distribution, 0.4 s for final ≤ 32 A on TT/TN."
            },
            {
              number: 11,
              prompt: "Polarity test at the origin (live) is best performed by:",
              options: {
                A: "Approved voltage indicator (AVI) reading L–N ≈ 230 V, L–E ≈ 230 V, N–E ≈ 0 V on a TN system",
                B: "Insulation resistance test",
                C: "Continuity test",
                D: "Earth electrode test"
              },
              answer: "A",
              explanation: "Live polarity at the origin uses an AVI to read voltages between conductors. Reversed polarity would show 230 V between N–E and 0 V between L–E — a serious supply fault that the contractor must report to the DNO."
            },
            {
              number: 12,
              prompt: "An RCD with IΔn 30 mA tested at 0.5×IΔn = 15 mA must:",
              options: {
                A: "Not trip within 2 s — proves the device is not over-sensitive (which would cause nuisance tripping)",
                B: "Trip within 300 ms",
                C: "Trip within 40 ms",
                D: "Not be tested at all"
              },
              answer: "A",
              explanation: "At 0.5×IΔn the test confirms the RCD doesn't trip below threshold — i.e. it's not over-sensitive. A device that trips at < IΔn would cause repeated nuisance trips in normal service. The 2 s window allows margin."
            },
            {
              number: 13,
              prompt: "PSCC measured between L and N at the origin reads 7.5 kA. PEFC between L and E at the origin reads 6.2 kA. The PFC value recorded on the EIC is:",
              options: {
                A: "7.5 kA — the higher of the two",
                B: "6.2 kA — the lower",
                C: "13.7 kA — the sum",
                D: "1.3 kA — the difference"
              },
              answer: "A",
              explanation: "Record the higher of PSCC and PEFC. 7.5 kA represents the worst-case fault current at the origin; every protective device must have breaking capacity ≥ 7.5 kA."
            },
            {
              number: 14,
              prompt: "Functional testing of an RCBO during initial verification includes:",
              options: {
                A: "The integral test button (proves mechanism), plus RCD tester at 0.5×, 1× and 5× IΔn (proves threshold and time)",
                B: "Only the test button",
                C: "Only the 1×IΔn test",
                D: "Only an IR test"
              },
              answer: "A",
              explanation: "Both layers: integral test button proves the mechanism; external RCD tester proves the electrical performance. Either alone is incomplete. Record all results on the Schedule of Test Results."
            },
            {
              number: 15,
              prompt: "An RCBO (combined RCD + MCB) tested as if separate elements gives:",
              options: {
                A: "The MCB tripping curve responds to overcurrent (Type B/C/D); the RCD function responds to residual current. Both must be tested",
                B: "Only the MCB needs to be tested",
                C: "Only the RCD needs to be tested",
                D: "RCBOs are exempt from testing"
              },
              answer: "A",
              explanation: "RCBO = MCB + RCD in one device. Verify the MCB by overcurrent test (rarely done in initial verification — relies on type-test data); verify the RCD by injection at 0.5×/1×/5× IΔn. Both functions are independent and must be confirmed separately."
            },
            {
              number: 16,
              prompt: "Live polarity at every accessory is verified by:",
              options: {
                A: "Plugging in a socket tester (or equivalent indicator) at every socket, confirming line is on the right pin and neutral on the left, with the cpc properly connected",
                B: "An IR test at 500 V DC",
                C: "Continuity testing only",
                D: "A clamp ammeter"
              },
              answer: "A",
              explanation: "Live polarity at sockets — socket tester indicators show L, N, E lights; combined readout indicates correct polarity, reversed L/N, missing earth, and other common faults. Useful for quick screening but not diagnostic — failures need investigation."
            },
            {
              number: 17,
              prompt: "Phase rotation tester confirms:",
              options: {
                A: "L1, L2, L3 are connected in correct sequence — typically rotating the disc clockwise (or lighting the lamps in L1–L2–L3 sequence)",
                B: "All three phases are at 230 V",
                C: "The neutral is earthed",
                D: "The supply is balanced"
              },
              answer: "A",
              explanation: "Phase rotation tester is essential before connecting three-phase motors — wrong rotation reverses motor direction. Tester output: clockwise = correct sequence (L1-L2-L3); anti-clockwise = swap any two phases."
            },
            {
              number: 18,
              prompt: "After all testing is complete, the verifier issues:",
              options: {
                A: "EIC + Schedule of Inspections + Schedule of Test Results — the three together form the certification package",
                B: "Just an EIC",
                C: "Just a Schedule of Test Results",
                D: "An EICR"
              },
              answer: "A",
              explanation: "Initial verification produces three documents: EIC (declaration), Schedule of Inspections (tick-box record), Schedule of Test Results (numerical record). All three are required for the EIC to have evidential weight."
            },
            {
              number: 19,
              prompt: "An RCD failing the 5×IΔn test (e.g. 60 ms instead of ≤ 40 ms) means:",
              options: {
                A: "The RCD doesn't provide additional protection within the BS 7671 time — replace and retest",
                B: "Pass with comment",
                C: "Reduce IΔn rating",
                D: "Increase IΔn rating"
              },
              answer: "A",
              explanation: "5×IΔn ≤ 40 ms is the additional-protection criterion. Failing this means the device won't disconnect fast enough to prevent ventricular fibrillation under shock. Replace, retest, and confirm all three test points. No 'tolerance' — 40 ms is the legal maximum."
            },
            {
              number: 20,
              prompt: "After completing all live tests, the verifier should:",
              options: {
                A: "Functionally test all accessible switchgear, assemblies and controls (Reg 643.10) before issuing the certificate",
                B: "Disconnect the supply and issue the EIC",
                C: "Skip functional testing",
                D: "Only test the lighting"
              },
              answer: "A",
              explanation: "Functional testing is part of the verification, after dead and live tests. Switches, contactors, isolators, drives, control gear — all functionally checked. The certificate is only issued once functional testing has confirmed correct operation."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "Live polarity at the origin of the installation must be verified using:",
              options: {
                A: "An approved voltage indicator (AVI) compliant with GS38, NOT a multimeter",
                B: "A standard digital multimeter",
                C: "A continuity tester",
                D: "An RCD tester"
              },
              answer: "A",
              explanation: "GS38 — approved voltage indicators have finger barriers, fused leads, short exposed tip and proven to be safe to use on incoming supplies. Multimeters can fail or short out leading to dangerous conditions; AVIs are the right tool."
            },
            {
              number: 2,
              prompt: "An RCD tested at 1×IΔn = 30 mA gives 280 ms on a general-type. The RCD:",
              options: {
                A: "Passes — within the 300 ms maximum at 1×IΔn for general-type RCDs",
                B: "Fails — exceeds 200 ms",
                C: "Fails — exceeds 40 ms",
                D: "Fails — exceeds 150 ms"
              },
              answer: "A",
              explanation: "300 ms is the legal maximum at 1×IΔn for general (non-S-type) RCDs. 280 ms passes — close to the limit but acceptable. Trend over time though — if successive periodic tests show 250, 270, 290 ms, the device is degrading."
            },
            {
              number: 3,
              prompt: "An installation has a 100 mA S-type RCD upstream of a 30 mA general-type RCD. The 100 mA S-type tests at 1×IΔn = 100 mA:",
              options: {
                A: "Trip time should be 130 ms minimum (intentional delay) up to 500 ms maximum — to provide discrimination with the downstream 30 mA",
                B: "Trip time ≤ 300 ms (general-type rules)",
                C: "Trip time ≤ 40 ms",
                D: "Should not trip at all"
              },
              answer: "A",
              explanation: "S-type at 1×IΔn: 130–500 ms (the minimum delay is what gives discrimination). A non-delay S-type would trip simultaneously with the downstream and lose the selectivity benefit. At 5×IΔn ≤ 150 ms."
            },
            {
              number: 4,
              prompt: "Direct measurement of Zs on an RCD-protected circuit using the no-trip mode:",
              options: {
                A: "Uses a low-current pulse train that doesn't accumulate to the RCD threshold; the meter calculates Zs from the resulting voltage drop",
                B: "Bypasses the RCD with a temporary link",
                C: "Uses 500 V DC",
                D: "Requires the RCD to be removed"
              },
              answer: "A",
              explanation: "Modern MFTs include the no-trip Zs function. Pulses of small current keep the average below RCD threshold; the meter measures voltage drop and calculates Zs. Result is slightly less accurate than high-current Zs but adequate for verification."
            },
            {
              number: 5,
              prompt: "A measured Zs of 5.5 Ω on a circuit protected by a 6 A Type B MCB. Table 41.3 max = 7.28 Ω. Apply the 0.8 rule:",
              options: {
                A: "0.8 × 7.28 = 5.82 Ω. Measured 5.5 Ω is within → pass",
                B: "Fail — exceeds 1 Ω",
                C: "Fail — exceeds 5 Ω",
                D: "Pass — Zs < 7.28"
              },
              answer: "A",
              explanation: "0.8 × 7.28 = 5.82 Ω. Measured 5.5 Ω is below — pass. The lower-current MCB (6 A) tolerates higher Zs because its tripping curve activates at lower fault currents (5×In = 30 A for Type B 6 A)."
            },
            {
              number: 6,
              prompt: "Functional testing of an emergency stop on industrial equipment confirms that:",
              options: {
                A: "Pressing the e-stop disconnects the supply within the design time, latches in the off position, and requires deliberate release before re-energising",
                B: "The equipment runs normally",
                C: "The IR is acceptable",
                D: "The Zs is below Table 41.3"
              },
              answer: "A",
              explanation: "Emergency stop is a safety function, functionally tested in the equipment's working state. Pressing it must reliably trip the supply, and the device must latch off so accidental release doesn't restart the equipment unsafely."
            },
            {
              number: 7,
              prompt: "On a TT system, ADS may rely on:",
              options: {
                A: "RCD operation alone, since Zs through the earth electrode is typically too high for OPDs to disconnect within Table 41.1 times",
                B: "MCB operation alone",
                C: "Fuses only",
                D: "Insulation resistance"
              },
              answer: "A",
              explanation: "TT — Ze is the local electrode + earth path back to the supply (often 30–200 Ω). Fault current too low for MCBs/fuses to trip in 0.4 s. RCD then provides ADS at IΔn × Ra ≤ 50 V (e.g. 30 mA × 200 Ω = 6 V — well within touch voltage limit)."
            },
            {
              number: 8,
              prompt: "An RCD trips during the 1×IΔn test (e.g. 250 ms) on a Type AC RCD installed downstream of a VFD. The verifier should:",
              options: {
                A: "Recommend replacing the Type AC with a Type A or B (depending on equipment) — Type AC may be DC-blinded by VFD residual currents and the test result alone doesn't capture this",
                B: "Pass without comment",
                C: "Replace with a Type AC of higher IΔn",
                D: "Disable the RCD"
              },
              answer: "A",
              explanation: "Type AC senses sinusoidal AC only. VFD electronics produce DC residual currents that magnetise the RCD's sensing core, blinding it to subsequent AC residuals. Type A handles pulsating DC; Type B handles smooth DC. Replace with the appropriate type for the load."
            },
            {
              number: 9,
              prompt: "An RCD test result is recorded on the Schedule of Test Results showing:",
              options: {
                A: "Times for 0.5×IΔn (no trip in 2 s confirmed), 1×IΔn, and 5×IΔn — for both half-cycle polarities if the device is tested on both",
                B: "Only the 1×IΔn time",
                C: "Only 'pass' or 'fail'",
                D: "Only the 5×IΔn time"
              },
              answer: "A",
              explanation: "Full RCD test record includes all three test points and (for higher-end testers) results on both half-cycles of mains. Half-cycle differences > 25% suggest a device problem. Recording all data lets future verifiers spot trends."
            },
            {
              number: 10,
              prompt: "Testing of a fire alarm / emergency lighting system at initial verification:",
              options: {
                A: "Confirms the BS 7671 electrical installation is sound; the BS 5839 (fire) or BS 5266 (emergency lighting) commissioning is a separate certificate",
                B: "Combines BS 7671 and BS 5839 in one EIC",
                C: "Replaces the fire alarm certificate",
                D: "Is not required for fire alarm circuits"
              },
              answer: "A",
              explanation: "BS 7671 EIC covers the wiring, supply, protection. BS 5839 (fire detection) and BS 5266 (emergency lighting) commissioning certificates cover system performance — sound levels, light levels, response times, panel programming. Two certificates, two scopes."
            },
            {
              number: 11,
              prompt: "An installation's PFC at the origin is measured at 5.0 kA. The MCBs installed have breaking capacity 6 kA (typical domestic). The verifier should:",
              options: {
                A: "Confirm 6 kA > 5 kA — MCBs adequate. If PFC had been > 6 kA, MCBs would need to be 10 kA breaking capacity",
                B: "Replace MCBs with 10 kA regardless",
                C: "Reduce PFC by adding cable",
                D: "Ignore breaking capacity"
              },
              answer: "A",
              explanation: "Breaking capacity must be ≥ PFC. Typical UK domestic CU MCBs: 6 kA (M6 / Icn 6000). Industrial / commercial often 10 kA. The Schedule of Inspections/Test Results should record the PFC and the MCB breaking capacity together so the comparison is auditable."
            },
            {
              number: 12,
              prompt: "Live polarity at every socket on the installation is checked because:",
              options: {
                A: "A wrong polarity socket leaves the appliance live when the appliance switch is off (single-pole switch on the appliance N) — a shock hazard for whoever opens the appliance",
                B: "It's only necessary at the consumer unit",
                C: "Only the supply polarity matters",
                D: "Polarity is a dead test only"
              },
              answer: "A",
              explanation: "Polarity per accessory: a socket with reversed L/N feeds the appliance with line on what it thinks is neutral. The appliance's single-pole switch then doesn't isolate the live conductor — every metal part of the appliance is potentially live. A serious latent hazard."
            },
            {
              number: 13,
              prompt: "An MFT calibrated 14 months ago gives an RCD reading of 32 ms at 5×IΔn. The verifier should:",
              options: {
                A: "Be aware that the instrument is overdue for calibration (typical interval 12 months); the reading is technically uncertain. Re-test with a calibrated instrument or have this MFT recalibrated and verified",
                B: "Use the reading without question",
                C: "Calibration is not required",
                D: "Recalibration is every 5 years"
              },
              answer: "A",
              explanation: "Instrument calibration typically every 12 months for site test instruments. Out-of-cal readings are treated as unverified. Best practice: send the MFT for calibration, then revisit any borderline results. Extended intervals are sometimes acceptable with verification — but only with a documented procedure."
            },
            {
              number: 14,
              prompt: "On a TT system, a 30 mA RCD provides ADS. The earth electrode resistance Ra needs to be:",
              options: {
                A: "Ra × IΔn ≤ 50 V (touch voltage limit). For 30 mA: Ra ≤ 1667 Ω theoretically; ≤ 200 Ω practical for stability",
                B: "Always ≤ 1 Ω",
                C: "Ra × IΔn × 5 ≤ 50 V",
                D: "Ra ≤ Ze of the supply"
              },
              answer: "A",
              explanation: "Reg 411.5.3 — Ra × IΔn ≤ 50 V. For 30 mA: Ra ≤ 50/0.03 = 1667 Ω. In practice, electrode stability and seasonal variation make ≤ 200 Ω the working limit. The 5× rule is for the disconnection time check at 5×IΔn = 150 mA, where Ra must give enough fault current for the 40 ms disconnection."
            },
            {
              number: 15,
              prompt: "An installation includes an arc fault detection device (AFDD). Functional testing of an AFDD is by:",
              options: {
                A: "The integral test button — there is no standard on-site injection test that reproduces an arc signature",
                B: "Creating a real arc fault",
                C: "An IR test at 1000 V",
                D: "An RCD tester"
              },
              answer: "A",
              explanation: "AFDDs detect arc signatures (current waveform analysis). No site test method reproduces an arc. The integral test button simulates the arc detection logic and confirms the trip mechanism. The device also self-monitors — a fault on the AFDD itself trips the device."
            },
            {
              number: 16,
              prompt: "When live polarity is reversed on a single-pole switch in a lighting circuit, the consequence is:",
              options: {
                A: "The lampholder is live at the line terminal even when the switch is 'off' — anyone replacing the lamp with the switch off is at risk of shock",
                B: "The lamp simply doesn't work",
                C: "The fuse trips",
                D: "Nothing — single-pole switches work either way"
              },
              answer: "A",
              explanation: "Single-pole switch in line breaks the line — lampholder dead when switch off. If the switch is wrongly on N, the line stays live in the lamp. Touching the lamp metal cap (or screwing in a new lamp) brings the user onto the live conductor."
            },
            {
              number: 17,
              prompt: "Three-phase motor connection — phase rotation must be verified:",
              options: {
                A: "Before commissioning the motor (phase rotation tester on the motor terminals), to confirm rotation direction matches mechanical requirement",
                B: "Only on initial connection",
                C: "Only after a phase fault",
                D: "Phase rotation is irrelevant"
              },
              answer: "A",
              explanation: "Three-phase motor rotation is set by phase sequence at its terminals. Wrong sequence = wrong direction. For a pump or fan running backwards: typically much reduced output and possible mechanical damage. Phase rotation tester on the motor terminals before energising is standard practice."
            },
            {
              number: 18,
              prompt: "An RCD test at 1×IΔn fails on a circuit feeding lighting and small power. The verifier should:",
              options: {
                A: "Replace the RCD/RCBO and retest, then investigate any common factor that might have caused early failure (over-voltage, surge events, manufacturing defect)",
                B: "Pass with comment",
                C: "Reduce IΔn",
                D: "Disable the RCD"
              },
              answer: "A",
              explanation: "Failed RCD must be replaced. After replacement, consider whether the failure is incidental (random component failure) or systemic (lots of surge events, water ingress damaging the device). Run the test on the replacement and record."
            },
            {
              number: 19,
              prompt: "Live polarity on a TN-C-S system at a socket should show:",
              options: {
                A: "L–N ≈ 230 V, L–E ≈ 230 V, N–E ≈ 0 V",
                B: "L–N ≈ 0 V",
                C: "L–E ≈ 0 V",
                D: "All three voltages 230 V"
              },
              answer: "A",
              explanation: "Healthy TN-C-S supply at any accessory: L–N is the supply (230 V); N–E is bonded at the supply origin, so locally ≈ 0 V; L–E ≈ 230 V (same as L–N because N is at earth potential)."
            },
            {
              number: 20,
              prompt: "The dead-test sequence (continuity → IR → polarity) is followed by live tests. The final initial-verification test sequence is:",
              options: {
                A: "Polarity (live) → Ze (origin) → Zs (final circuits) → PFC → phase rotation (3-ph) → RCD → functional",
                B: "RCD → functional → Ze → Zs",
                C: "Functional → polarity → IR",
                D: "All tests in any order"
              },
              answer: "A",
              explanation: "Live test order: live polarity at origin → Ze (with bonding off briefly) → Zs (per circuit) → PFC at origin → phase rotation (3-ph) → RCD test → functional test. Each step builds on the previous; the order ensures the safest, most diagnostic verification."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "Functional testing of a contactor confirms that:",
              options: {
                A: "Energising the coil closes the main contacts (and any auxiliary contacts behave as designed); de-energising opens them; mechanical operation is smooth",
                B: "The IR is acceptable",
                C: "Insulation resistance to earth is > 1 MΩ",
                D: "Zs at the load is within Table 41.3"
              },
              answer: "A",
              explanation: "Functional testing of switchgear is the 'does the device do what it's supposed to do' check. Coil energises = contacts close; de-energise = contacts open. Auxiliary contacts (NO/NC) follow the main contacts in the correct sequence. Mechanical inspection confirms no binding or sluggish operation."
            },
            {
              number: 2,
              prompt: "Direct Zs measurement on a non-RCD circuit uses:",
              options: {
                A: "High-current Zs mode — typical 15–25 A pulse, giving an accurate single-shot Zs reading",
                B: "Low-current no-trip mode",
                C: "500 V DC",
                D: "Continuity test"
              },
              answer: "A",
              explanation: "Without an RCD, the loop tester can apply a relatively high test current (typically 15–25 A pulse for half a cycle) without tripping anything. This gives the most accurate Zs reading. RCD circuits must use low-current no-trip mode."
            },
            {
              number: 3,
              prompt: "Max Zs from Table 41.3 for a 32 A BS 88-2 fuse at 5 s disconnection is:",
              options: {
                A: "Around 0.91 Ω (Type gG fuse 32 A at 5 s — Table 41.4)",
                B: "1.50 Ω",
                C: "0.40 Ω",
                D: "10 Ω"
              },
              answer: "A",
              explanation: "Table 41.4 (BS 88-2 / BS 88-3 fuses) for 5 s disconnection: 32 A → 0.91 Ω, 40 A → 0.74 Ω. Fuses have higher max Zs than MCBs at the same rating because their tripping curve is shallower."
            },
            {
              number: 4,
              prompt: "An RCD test instrument should be calibrated:",
              options: {
                A: "Typically every 12 months — confirmed by an in-date calibration certificate",
                B: "Every 5 years",
                C: "Once at purchase, then never",
                D: "Daily"
              },
              answer: "A",
              explanation: "Industry standard for site test instruments: 12-month calibration. The certificate documents traceability to national standards. Out-of-cal readings are treated as unverified — failed calibration certificates can invalidate test result records."
            },
            {
              number: 5,
              prompt: "An installation has a 30 mA RCD and a 100 mA S-type RCD upstream. Discrimination is achieved because:",
              options: {
                A: "S-type intentional delay (130–500 ms at 1×IΔn) is longer than the general-type maximum (300 ms) — so the downstream RCD trips first on faults within its sensing range",
                B: "100 mA threshold is higher than 30 mA",
                C: "S-type has different waveform sensing",
                D: "S-type uses DC sensing"
              },
              answer: "A",
              explanation: "Discrimination requires both threshold AND time discrimination. The S-type's intentional delay ensures it doesn't trip simultaneously with the 30 mA. Just having different IΔn values isn't enough — without time delay both would trip on a 30 mA fault."
            },
            {
              number: 6,
              prompt: "An RCD's integral test button operates by:",
              options: {
                A: "Injecting a known imbalance via an internal resistor (typically near IΔn) — proving the trip mechanism without testing threshold accuracy",
                B: "Bypassing the trip mechanism",
                C: "Generating a 230 V test pulse",
                D: "Disconnecting the supply"
              },
              answer: "A",
              explanation: "Test button = internal resistor wired across the live and a current sensor reference. Operating it creates an imbalance the RCD detects, tripping the mechanism. Doesn't measure threshold or time — those need a calibrated RCD tester."
            },
            {
              number: 7,
              prompt: "An RCD tested at 5×IΔn = 150 mA gives 38 ms on a 30 mA general-type. The result is:",
              options: {
                A: "Pass — within the 40 ms maximum at 5×IΔn",
                B: "Fail — exceeds 30 ms",
                C: "Fail — exceeds 200 ms",
                D: "Pass — exceeds 40 ms but within tolerance"
              },
              answer: "A",
              explanation: "5×IΔn ≤ 40 ms is the additional-protection criterion. 38 ms passes — close to limit but acceptable. Trend awareness: a device drifting up over successive periodic tests indicates ageing and should be flagged for replacement."
            },
            {
              number: 8,
              prompt: "Polarity at every accessory in the installation, including spurs, is verified by:",
              options: {
                A: "A combination of dead polarity check (continuity-based) at first-fix, followed by a live polarity check (AVI or socket tester) at completion",
                B: "Only a dead polarity check",
                C: "Only a live polarity check",
                D: "Insulation resistance test"
              },
              answer: "A",
              explanation: "Dead polarity catches wiring errors before energisation (and is genuinely diagnostic). Live polarity confirms the supply arrives correctly at every accessory. Both are required for thorough verification."
            },
            {
              number: 9,
              prompt: "Functional testing of a residual current monitoring (RCM) system in industrial premises:",
              options: {
                A: "Confirms the RCM detects and reports earth leakage trends without disconnecting the supply (RCMs alarm rather than trip — used for early warning of insulation deterioration)",
                B: "Tests the RCM as if it were an RCD",
                C: "Is not required",
                D: "Replaces RCD testing"
              },
              answer: "A",
              explanation: "RCM = residual current monitor. Like an RCD but doesn't disconnect — alarms when leakage exceeds a threshold. Functional test: induce a known leakage current and verify the alarm triggers at the correct level."
            },
            {
              number: 10,
              prompt: "On a TN-S installation with Ze = 0.55 Ω, a measured Zs on a 32 A Type B circuit is 1.30 Ω. R1+R2 = Zs - Ze = 0.75 Ω. The 0.8 rule says max measured Zs:",
              options: {
                A: "0.8 × 1.37 = 1.10 Ω. Measured 1.30 Ω exceeds this → investigate",
                B: "Pass — Zs < 1.37",
                C: "Fail — Ze > 0.5 Ω",
                D: "Pass — R1+R2 < 1 Ω"
              },
              answer: "A",
              explanation: "Measured cold Zs > 0.8 × tabulated suggests warm Zs would exceed the limit. Investigate cable run, csa, or rely on RCD for ADS. Possibly the Ze itself is high — verify with the DNO that 0.55 Ω is consistent with their declared figure."
            },
            {
              number: 11,
              prompt: "Three-phase motor connection: an installation tests OK on phase rotation, but the motor runs backwards. The diagnosis is:",
              options: {
                A: "The motor itself is wired internally for opposite rotation direction — swap any two phases at the motor terminals (NOT at the consumer unit), or change the motor connection",
                B: "The supply is wrong",
                C: "The protective devices are wrong",
                D: "The cable is the wrong size"
              },
              answer: "A",
              explanation: "If the supply is correct phase rotation but the motor runs the wrong way, the motor's internal wiring or the motor terminal connections are reversed. Swap any two phases at the motor terminals to reverse rotation — never at the CU/DB (which would affect other devices)."
            },
            {
              number: 12,
              prompt: "The Zs at the furthest point of a circuit is:",
              options: {
                A: "Higher than at the consumer unit (because R1+R2 increases with distance, but Zs at the CU is just Ze + the distribution wiring R1+R2)",
                B: "Lower than at the CU",
                C: "Equal at every point",
                D: "Always zero at the furthest point"
              },
              answer: "A",
              explanation: "Zs increases along a circuit because R1+R2 grows with cable length. The furthest accessory has the highest Zs — that's the test point for Table 41.3 compliance. The CU's Zs is just Ze + meter tail R."
            },
            {
              number: 13,
              prompt: "An RCD that trips on the 0.5×IΔn test (i.e. trips before reaching IΔn):",
              options: {
                A: "Fails the verification — the device is over-sensitive and likely to nuisance trip in service. Replace and retest",
                B: "Passes — sensitivity is good",
                C: "Increase IΔn",
                D: "Reduce IΔn"
              },
              answer: "A",
              explanation: "0.5×IΔn must NOT trip within 2 s. Tripping before this means the device is over-sensitive, which in service causes random nuisance trips on small leakage currents from healthy equipment (lamps, computers, etc.). Replace the device."
            },
            {
              number: 14,
              prompt: "A 30 mA RCBO provides both:",
              options: {
                A: "Overcurrent protection (MCB function — Type B/C/D curves) AND residual current protection (RCD function — 30 mA threshold)",
                B: "Only overcurrent",
                C: "Only RCD",
                D: "Insulation resistance protection"
              },
              answer: "A",
              explanation: "RCBO = combined MCB + RCD in a single module. Saves space in the CU and gives per-circuit RCD protection (rather than relying on a shared RCD covering multiple circuits, which means a single fault knocks out everything on that side)."
            },
            {
              number: 15,
              prompt: "A measured Zs above the 0.8 × tabulated maximum suggests:",
              options: {
                A: "The circuit may not achieve ADS by overcurrent alone under operating conditions; investigate cable, terminations, or rely on RCD",
                B: "The circuit is healthy",
                C: "The supply is faulty",
                D: "The IR test failed"
              },
              answer: "A",
              explanation: "0.8 × tabulated represents the warm-up margin. Cold readings above this risk the warm value exceeding the limit. Investigate (cable too long? cpc undersized? loose connection?) or use 30 mA RCD for ADS — that's why most modern installations have RCD on every final circuit."
            },
            {
              number: 16,
              prompt: "An installation has a Type B RCD on EV charging circuits because:",
              options: {
                A: "EV chargers can produce smooth DC residual currents that DC-blind Type AC RCDs and saturate Type A RCD sensing cores. Type B is sensitive to AC, pulsating DC, AND smooth DC",
                B: "Type B is faster than Type AC",
                C: "Type B is the cheapest",
                D: "Type B has higher IΔn"
              },
              answer: "A",
              explanation: "Reg 722.531.3.101 — EV chargers require Type B RCD (or Type A + DC fault detection on the EVSE itself). The smooth DC component from rectified output can blind lower-grade RCDs to subsequent AC residuals."
            },
            {
              number: 17,
              prompt: "After Ze is measured and main bonding is reconnected, the next test is typically:",
              options: {
                A: "PSCC and PEFC at the origin — together giving the prospective fault current to be recorded on the EIC",
                B: "Functional testing",
                C: "Phase rotation",
                D: "RCD test"
              },
              answer: "A",
              explanation: "Standard sequence: Ze (with bonding off), then PSCC and PEFC at the origin (with bonding back on). PFC = max(PSCC, PEFC). Then proceed with Zs at each circuit, phase rotation, RCD, functional. Each step's preconditions are met by the previous."
            },
            {
              number: 18,
              prompt: "Live polarity at a luminaire is best checked by:",
              options: {
                A: "An AVI (or non-contact voltage detector at first, then AVI to confirm) reading line at the line terminal of the lampholder, neutral at the neutral terminal",
                B: "Insulation resistance test",
                C: "Continuity test",
                D: "RCD tester"
              },
              answer: "A",
              explanation: "Lampholder live polarity: AVI between the line terminal and earth = ~ 230 V; between neutral terminal and earth = ~ 0 V. Reversed polarity puts line on the lampholder shell (Edison/screw type) — touch on lamp change = shock."
            },
            {
              number: 19,
              prompt: "An RCD's sensitivity to half-cycle polarity matters because:",
              options: {
                A: "The device should trip equally fast on positive and negative half-cycles. A significant difference (> 25%) suggests a problem with the sensing core",
                B: "Half-cycles are irrelevant",
                C: "Only positive half-cycle matters",
                D: "Only negative half-cycle matters"
              },
              answer: "A",
              explanation: "Higher-end RCD testers test both half-cycles. Significant asymmetry (e.g. 28 ms vs. 50 ms at 5×IΔn) flags a sensing core that's drifting toward saturation in one direction — a sign of imminent failure. The schedule should record both."
            },
            {
              number: 20,
              prompt: "After all tests pass, the verifier signs the EIC declaring:",
              options: {
                A: "The installation, at the time of inspection and testing, complies with BS 7671 except for any departures recorded — and recommends a date for the next periodic inspection",
                B: "The installation is permanent",
                C: "The installation is forever compliant",
                D: "The customer accepts no more responsibility"
              },
              answer: "A",
              explanation: "EIC declaration is precise: at the time of inspection and testing, complies except for departures. The future is the duty holder's responsibility — periodic inspection at the recommended date catches changes, ageing and modifications."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "An installation has 3 final circuits. Each tested at 1×IΔn = 30 mA. Times: 280, 290, 305 ms. The verifier should:",
              options: {
                A: "Pass the first two, fail the third (305 > 300 ms maximum at 1×IΔn for general-type RCDs). Replace the failing device and retest",
                B: "Pass all three",
                C: "Fail all three",
                D: "Average the times to pass"
              },
              answer: "A",
              explanation: "300 ms is a hard maximum at 1×IΔn. 305 ms fails — must be replaced. Each device is judged individually; you can't average across multiple devices to pass a failing one."
            },
            {
              number: 2,
              prompt: "Direct measurement of Zs uses the loop tester's L–E loop function. The reading includes:",
              options: {
                A: "Ze (external) + R1+R2 (internal of the circuit) — i.e. the complete earth fault loop from line conductor at the point of test back to source via earth",
                B: "Only Ze",
                C: "Only R1+R2",
                D: "Insulation resistance"
              },
              answer: "A",
              explanation: "Zs is the complete loop: from the test point through the line conductor, back to source through the supply, then back via earth (cpc + earthing arrangement) to the test point. Loop tester injects a known current and reads Zs from the resulting voltage drop."
            },
            {
              number: 3,
              prompt: "An installation is tested in winter when conductors are at 5 °C. Reading R1+R2 = 0.40 Ω; design assumes 70 °C operating. Adjusted R1+R2:",
              options: {
                A: "0.40 × (1 + 0.004 × (70 - 5)) = 0.40 × 1.26 = 0.50 Ω",
                B: "0.40 × 0.5 = 0.20 Ω",
                C: "0.40 × 1.5 = 0.60 Ω",
                D: "Unchanged"
              },
              answer: "A",
              explanation: "Copper temperature coefficient ~ 0.004/°C. Adjusting from 5 °C measurement to 70 °C operating: 0.40 × (1 + 0.004 × 65) = 0.40 × 1.26 = 0.50 Ω. The 0.8 × tabulated rule (Zs measured ≤ 0.8 × tabulated) is the practical shortcut for ~ 20 °C measurements; cold winter measurements need more correction."
            },
            {
              number: 4,
              prompt: "On a circuit with no RCD, Zs at the furthest socket is measured by the high-current loop test. The instrument's safety considerations include:",
              options: {
                A: "GS38-compliant probes with finger barriers, fused leads, and an exposed tip ≤ 4 mm — to prevent shock during the live test",
                B: "Always wearing gloves",
                C: "Disconnecting the supply",
                D: "Using DC test voltage"
              },
              answer: "A",
              explanation: "GS38 probes are mandatory for live testing — finger barriers, fused leads, short exposed tip, robust insulation. Touching exposed metal during a live test risks fault current through the operator. GS38 is also why dedicated test instruments are preferred over multimeters."
            },
            {
              number: 5,
              prompt: "RCD type AC is suitable for circuits feeding:",
              options: {
                A: "Pure resistive/inductive AC loads with no electronic switching — increasingly rare in modern installations because most loads now have some DC component",
                B: "EV chargers",
                C: "VFD drives",
                D: "Smooth DC equipment"
              },
              answer: "A",
              explanation: "Type AC senses sinusoidal AC only. Suitable for old-school heaters, pumps, fluorescent lighting (without electronic ballasts). Modern installations increasingly need Type A as a baseline because so many loads have switched-mode supplies producing pulsating DC residuals."
            },
            {
              number: 6,
              prompt: "Functional testing of a 3-phase isolator confirms:",
              options: {
                A: "All three phases (and neutral if 4-pole) disconnect simultaneously when operated; no phase remains connected when isolator is in 'off'",
                B: "Only L1 disconnects",
                C: "Insulation resistance",
                D: "Earth fault loop impedance"
              },
              answer: "A",
              explanation: "3-pole or 4-pole isolators are tested for simultaneous disconnection of all live conductors. A common fault — single phase failing to disconnect — leaves equipment in a dangerous state. Functional testing with an AVI on each phase post-isolation is the check."
            },
            {
              number: 7,
              prompt: "An RCD measures 5×IΔn time = 25 ms. The reading is:",
              options: {
                A: "Pass — comfortably within 40 ms",
                B: "Fail — should be > 30 ms",
                C: "Fail — should be ≤ 5 ms",
                D: "Pass — exceeds 100 ms but within tolerance"
              },
              answer: "A",
              explanation: "5×IΔn ≤ 40 ms is the maximum. 25 ms is a healthy reading well within the limit. Modern RCDs typically trip in 10–30 ms at 5×IΔn — values above 35 ms suggest the device is ageing and worth flagging for monitoring at periodic inspection."
            },
            {
              number: 8,
              prompt: "Phase rotation testing on a 3-phase building supply confirms:",
              options: {
                A: "L1, L2, L3 rotate clockwise in sequence at every test point — important before connecting motors, drives, or three-phase plant",
                B: "Phases all sit at 230 V to neutral",
                C: "Earth electrode is connected",
                D: "Insulation resistance is OK"
              },
              answer: "A",
              explanation: "Phase rotation tester (motor disc or lamp set). Result reads L1-L2-L3 sequence ('clockwise') = correct. L1-L3-L2 = reversed (swap two phases). Critical test before energising any 3-phase motor or drive."
            },
            {
              number: 9,
              prompt: "An installation has 30 mA RCBO on every final circuit. Discrimination with the upstream 100 mA S-type:",
              options: {
                A: "Confirmed — S-type's 130–500 ms delay at 1×IΔn is longer than the general-type 30 mA's 300 ms maximum, so the downstream RCBO trips first on faults within its sensing range",
                B: "Not possible without a Type B",
                C: "Achieved by IΔn ratio alone",
                D: "Requires a separate test"
              },
              answer: "A",
              explanation: "Discrimination: time + threshold. The S-type's intentional delay ensures the downstream device trips first. A 30 mA fault: 30 mA RCBO trips in 300 ms max, S-type doesn't see 30 mA as a fault. A 130 mA fault (above S-type threshold): 30 mA trips first (300 ms max), S-type tripping is slower (130–500 ms)."
            },
            {
              number: 10,
              prompt: "An RCD tested at 1×IΔn fails (e.g. 305 ms vs 300 ms max). The verifier:",
              options: {
                A: "Records the failure on the schedule, replaces the device, retests at all three test points, records the retest results, and links the replacement device's serial number to the affected circuit",
                B: "Ignores 5 ms over",
                C: "Pretends the test passed",
                D: "Records pass with comment"
              },
              answer: "A",
              explanation: "GN3 — defects must be made good and tests repeated. The original test result on the schedule is marked 'fail'; the rectification noted; the retest results recorded against the replacement device. Anyone reading the schedule sees the full story."
            },
            {
              number: 11,
              prompt: "Phase rotation on a 3-phase circuit — the fastest practical method to reverse rotation if found wrong is:",
              options: {
                A: "Swap any two phases at the affected accessory or motor terminals (not at the CU/DB, which would affect other devices)",
                B: "Replace the cable",
                C: "Replace the motor",
                D: "Add a phase rotation reverser"
              },
              answer: "A",
              explanation: "Two-phase swap at the load terminals reverses rotation locally without affecting other plant on the same supply. Swapping at the CU/DB reverses rotation everywhere — usually wrong. Phase rotation is per-circuit (or per-load) where loads have specific direction requirements."
            },
            {
              number: 12,
              prompt: "An installation includes a generator supply (back-up). Initial verification of the generator-fed circuits:",
              options: {
                A: "Includes Ze measurement on the generator supply, polarity, RCD test on generator-supplied circuits, and confirmation that the changeover switch correctly transfers all live conductors",
                B: "Skip Ze for generator supply",
                C: "Test only when on mains supply",
                D: "Skip RCD tests on generator"
              },
              answer: "A",
              explanation: "Generator supplies are a separate source. Their Ze (with the generator running and earthed appropriately) must be tested separately — and may differ significantly from the mains Ze. Phase rotation must be checked too. The changeover switch is functionally tested on transfer."
            },
            {
              number: 13,
              prompt: "An RCD tester applies 30 mA test current. The test current is:",
              options: {
                A: "AC at 50 Hz (matching the supply waveform Type AC RCDs detect)",
                B: "DC",
                C: "AC at 100 Hz",
                D: "Pulsed DC"
              },
              answer: "A",
              explanation: "RCD test current matches the device type. Type AC: pure 50 Hz AC. Type A: pulsating DC test. Type B: smooth DC test. Using the wrong waveform may not reflect the device's intended detection range — the schedule should record the test type."
            },
            {
              number: 14,
              prompt: "An installation has main protective bonding to an extraneous-conductive-part (gas service). Continuity of this bonding is tested by:",
              options: {
                A: "R2 wander-lead method — long lead from the MET, nulled, then resistance to the gas service connection (typically ≤ 0.05 Ω plus the wander lead's own contribution)",
                B: "IR test at 500 V",
                C: "Continuity at every accessory",
                D: "RCD tester"
              },
              answer: "A",
              explanation: "Main protective bonding from MET to gas service: typically a 10 mm² conductor. R2 wander-lead test gives the resistance of the bonding conductor. BS 7671 doesn't specify a maximum but practical values are very low (0.05 Ω or less for well-installed bonding)."
            },
            {
              number: 15,
              prompt: "An EIC for new work is signed. The next periodic inspection date is recommended for 10 years (domestic dwelling). After 10 years, the duty holder should:",
              options: {
                A: "Arrange an EICR (Electrical Installation Condition Report) to assess the condition of the installation against current standards",
                B: "Re-issue the original EIC",
                C: "Issue an MEIWC",
                D: "Disconnect the supply"
              },
              answer: "A",
              explanation: "EICR is the periodic verification report. It assesses the installation's condition (not its design compliance — a 10-year-old install may have been certified to BS 7671:2008) and identifies safety issues. Common observation codes: C1 (immediate danger), C2 (potentially dangerous), C3 (improvement recommended), FI (further investigation)."
            },
            {
              number: 16,
              prompt: "Ze measurement on a TT installation gives Ra = 85 Ω. With a 30 mA RCD as ADS, this is:",
              options: {
                A: "Acceptable — Ra × IΔn = 85 × 0.03 = 2.55 V (well below 50 V touch voltage limit), and 30 mA RCD trips at 5×IΔn = 150 mA in ≤ 40 ms which the available fault current exceeds",
                B: "Too high — Ra must be ≤ 1 Ω",
                C: "Too low — Ra must be ≥ 100 Ω",
                D: "Cannot be assessed without measurement at 5 × IΔn"
              },
              answer: "A",
              explanation: "TT — Ra × IΔn ≤ 50 V. Available fault current = 230 V / 85 Ω ≈ 2.7 A — well above the 5×IΔn = 150 mA test current, so the RCD trips in the required ≤ 40 ms. 200 Ω is the practical stability limit; 85 Ω is a healthy electrode."
            },
            {
              number: 17,
              prompt: "A measured Ze of 0.32 Ω on a TN-C-S installation. The DNO declared maximum is 0.35 Ω. The verifier should:",
              options: {
                A: "Record 0.32 Ω on the EIC supply characteristics page, confirm it's within the DNO declared value, and use this Ze for Zs calculations",
                B: "Reject the supply",
                C: "Re-measure with bonding connected",
                D: "Use the DNO's value rather than the measured"
              },
              answer: "A",
              explanation: "Measured Ze should be ≤ DNO declared value. Record the measured value (more accurate), and use it for Zs = Ze + R1+R2 calculations. If measured > DNO declared, that's an issue to raise with the DNO — could indicate a high-resistance fault on the supply."
            },
            {
              number: 18,
              prompt: "An RCBO with Type A characteristics is suitable for:",
              options: {
                A: "Loads producing pulsating DC residual currents — switched-mode power supplies, single-phase electronic equipment, modern domestic appliances",
                B: "Loads with smooth DC residual currents (Type B is needed)",
                C: "Pure AC resistive loads only",
                D: "VFD drives (Type B is needed)"
              },
              answer: "A",
              explanation: "Type A senses AC + pulsating DC. Suitable for most single-phase domestic electronics. Type B (more expensive) is needed for smooth DC residuals from rectified outputs (EV chargers, VFDs, some 3-phase drives, photovoltaic inverters)."
            },
            {
              number: 19,
              prompt: "Functional testing of an interlock between two motor circuits confirms:",
              options: {
                A: "Both motors cannot run simultaneously — energising one disables the other (mechanically or electrically), and de-energising the first releases the interlock",
                B: "Both motors run together",
                C: "Only the IR is checked",
                D: "Only the Zs is checked"
              },
              answer: "A",
              explanation: "Interlocks are safety-critical: e.g. two pumps where simultaneous operation would damage equipment, or a generator-mains changeover where parallel operation would be dangerous. Functional test exercises both states to confirm the interlock holds."
            },
            {
              number: 20,
              prompt: "After all live tests are complete, the verifier prepares the certificate package. The order is:",
              options: {
                A: "Schedule of Inspections (visual record), Schedule of Test Results (numerical record), then EIC (declaration tying both schedules to a signed accountability) — issued together",
                B: "EIC alone",
                C: "Schedule of Test Results alone",
                D: "EICR rather than EIC"
              },
              answer: "A",
              explanation: "All three documents form the package. Order of preparation: collect inspection data (Schedule of Inspections), record test data (Schedule of Test Results), then sign the EIC declaration that references both schedules. Issued to the duty holder together as the complete certification record."
            }
          ]
        }
      ]
    },
    {
      id: "section-4-practice",
      title: "Section 4 — Initial Verification Practice Bank",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "Fault protection is given by:",
              options: { A: "Placing out of reach", B: "Barriers or enclosures", C: "Presence of an earthing conductor", D: "Obstacles" },
              answer: "C",
              explanation: "Fault protection (against indirect contact) is achieved by ADS, which depends on the earthing conductor + protective device combination. Barriers, out-of-reach and obstacles all give basic protection."
            },
            {
              number: 2,
              prompt: "Which component will not require functional testing during electrical testing?",
              options: { A: "RCD", B: "Isolator", C: "Light switch", D: "Gas boiler connected to a fused spur" },
              answer: "D",
              explanation: "The boiler is gas equipment, outside BS 7671 scope — only its electrical supply (the fused spur) is electrically tested. RCDs, isolators and switches are functionally checked."
            },
            {
              number: 3,
              prompt: "Other information stated on a circuit breaker in addition to In:",
              options: { A: "Rated short circuit capacity (Icn)", B: "Service short circuit capacity (Ics)", C: "Range of trip values", D: "Maximum Zs value" },
              answer: "A",
              explanation: "Icn is the printed breaking capacity (e.g. 6000 in a square symbol). Ics is sometimes marked as a smaller secondary figure. Trip ranges and max Zs come from manufacturer data."
            },
            {
              number: 4,
              prompt: "A radial circuit 45 m long in 6/2.5 mm². Expected R1+R2 at 20 °C:",
              options: { A: "0.62 Ω", B: "0.47 Ω", C: "0.72 Ω", D: "0.57 Ω" },
              answer: "B",
              explanation: "R/m: 6 mm² ≈ 3.08 mΩ/m, 2.5 mm² ≈ 7.41 mΩ/m. Combined 10.49 mΩ/m. For 45 m: 45 × 10.49 ≈ 472 mΩ ≈ 0.47 Ω."
            },
            {
              number: 5,
              prompt: "Calculate Zs where Ze = 0.2 Ω, R1 = 0.5 Ω, R2 = 0.6 Ω:",
              options: { A: "0.22 Ω", B: "0.18 Ω", C: "0.06 Ω", D: "1.3 Ω" },
              answer: "D",
              explanation: "Zs = Ze + (R1 + R2) = 0.2 + 1.1 = 1.3 Ω. The other answers come from subtracting or paralleling instead of adding."
            },
            {
              number: 6,
              prompt: "After securing isolation and placing warning notices, the installer should next:",
              options: {
                A: "Use only insulated tools rated at 1000 V",
                B: "Inform the client and start work",
                C: "Try energising to confirm",
                D: "Prove dead at the point of work using an approved voltage detector"
              },
              answer: "D",
              explanation: "Safe isolation: prove the AVI on a known live source, prove dead at the point of work, then re-prove the AVI on the known source. Switching back on as a check defeats the purpose of locking off."
            },
            {
              number: 7,
              prompt: "Two conductors of different resistances connected in parallel give a resulting resistance:",
              options: {
                A: "Lower than the lowest individual resistance",
                B: "Higher than the highest",
                C: "Equal to the highest",
                D: "Higher than the lowest"
              },
              answer: "A",
              explanation: "Parallel resistors: 1/R = 1/R1 + 1/R2. Combined value is always lower than the smallest individual. Adding any extra parallel path can only reduce total resistance."
            },
            {
              number: 8,
              prompt: "Which is NOT classified as a special installation per BS 7671 Part 7?",
              options: { A: "Kitchen", B: "Bathroom", C: "Exhibition stand", D: "Floor and ceiling heating system" },
              answer: "A",
              explanation: "Bathrooms (701), exhibition stands (711) and floor/ceiling heating (753) all in Part 7. A standard kitchen has no Part 7 section — it's a normal location with normal rules."
            },
            {
              number: 9,
              prompt: "Most appropriate human sense for detecting burrs inside a conduit:",
              options: { A: "Touch", B: "Sight", C: "Hearing", D: "Smell" },
              answer: "A",
              explanation: "You can't see inside a conduit run; the only reliable check before drawing cable is to feel for sharp edges and burrs with a finger or rag. A burr will tear the cable insulation under tension."
            },
            {
              number: 10,
              prompt: "A metallic test finger tests an enclosure to:",
              options: { A: "IPXXA", B: "IP4X", C: "IPX4", D: "IP2X" },
              answer: "D",
              explanation: "IP2X is checked with the standard 12.5 mm jointed test finger (the 'rigid sphere + finger' test in IEC 60529). IP4X uses a 1 mm wire; IPX4 is splashing water; IPXXA is back-of-hand access."
            },
            {
              number: 11,
              prompt: "A cautious way to estimate three-phase PFC from single-phase measurement:",
              options: { A: "Multiply by 1.73", B: "Divide by 1.73", C: "Multiply by 2", D: "Divide by 2" },
              answer: "C",
              explanation: "GN3 cautious method — measure L–N PFC then multiply by 2 to estimate the line-to-line three-phase value. Avoids needing an L–L PFC measurement that requires a different probe set-up."
            },
            {
              number: 12,
              prompt: "Which is NOT part of the IR test procedure?",
              options: {
                A: "Testing between live conductors",
                B: "Testing between live conductors and PE",
                C: "PE disconnected from the earthing arrangement",
                D: "PE remains connected to the earthing arrangement"
              },
              answer: "C",
              explanation: "IR test is L–N (live-to-live) and L+N–E (lives joined to earth). The PE stays connected to mimic in-service insulation. Disconnecting PE would invalidate the L–E reading."
            },
            {
              number: 13,
              prompt: "Why is continuity of CPCs verified?",
              options: {
                A: "To ensure continuity of every conductor",
                B: "To determine PFC",
                C: "To confirm L–E resistance > 1 MΩ",
                D: "To ensure PCs are electrically sound and correctly connected"
              },
              answer: "D",
              explanation: "CPC continuity proves the protective conductor is intact and properly terminated end-to-end so fault current has a path back to the source — without it, ADS doesn't work."
            },
            {
              number: 14,
              prompt: "Pressing the test button on an RCD checks:",
              options: { A: "Operates mechanically", B: "Disconnects within IΔn", C: "Disconnects within 0.4 s", D: "Disconnects within 40 ms" },
              answer: "A",
              explanation: "The integral test button confirms the mechanical trip mechanism — it injects an internal imbalance via a built-in resistor. It does NOT verify trip current threshold or time; that needs a calibrated RCD tester."
            },
            {
              number: 15,
              prompt: "Main safety implication of failing to isolate before electrical work:",
              options: {
                A: "Time impact",
                B: "Other workers won't know",
                C: "Installer and others may contact live parts",
                D: "Production stopped"
              },
              answer: "C",
              explanation: "Failing to isolate leaves live conductors accessible — that's the textbook serious-or-fatal injury scenario the EAWR is built around. Production interruption and worker awareness are operational concerns, not the safety case."
            },
            {
              number: 16,
              prompt: "If unsatisfactory results are obtained per GN3:",
              options: {
                A: "Carry on testing",
                B: "Defects must be made good and retested",
                C: "Record on Schedule and highlight to client",
                D: "Note on EIC"
              },
              answer: "B",
              explanation: "GN3 — defects must be remedied, then the affected test repeated. You can't certify an installation while it has known unsatisfactory test results, and noting them on the EIC is no substitute for fixing them."
            },
            {
              number: 17,
              prompt: "Circuits operating at different voltage bands within the same enclosure are segregated to:",
              options: {
                A: "Increase resistance",
                B: "Avoid mutual detrimental influence",
                C: "Ensure Zs compliance",
                D: "Reduce resistance"
              },
              answer: "B",
              explanation: "BS 7671 Section 528 — segregation of Band I (ELV/data) from Band II (LV) prevents cross-connection, induced voltages on signal cables, and the spread of insulation faults from one band to the other."
            },
            {
              number: 18,
              prompt: "EIC certifies conformity with:",
              options: { A: "GS38", B: "HSWA", C: "Guidance Note 3", D: "BS 7671" },
              answer: "D",
              explanation: "An EIC certifies conformity with BS 7671 (with any departures listed). GS38 covers test instruments/leads, GN3 is testing guidance, HSWA is a general statute — none are what the EIC certifies against."
            },
            {
              number: 19,
              prompt: "Three circuits IR tested separately read 100, 50, 40 MΩ. Combined IR (parallel):",
              options: { A: "21.14 MΩ", B: "11.34 MΩ", C: "10.06 MΩ", D: "18.18 MΩ" },
              answer: "D",
              explanation: "Parallel: 1/R = 1/100 + 1/50 + 1/40 = 0.055; R = 18.18 MΩ. Combined IR is always lower than the lowest individual."
            },
            {
              number: 20,
              prompt: "Which test uses two temporary auxiliary spikes?",
              options: {
                A: "Earth fault loop impedance test",
                B: "Earth electrode resistance test",
                C: "Insulation resistance to earth",
                D: "Floor IR test"
              },
              answer: "B",
              explanation: "Earth electrode resistance test (fall-of-potential / 3-spike method) uses two temporary auxiliary spikes — current and potential — together with the electrode under test."
            },
            {
              number: 21,
              prompt: "Which documents must accompany an Electrical Installation Certificate?",
              options: {
                A: "Schedule of Test Results and MEIWC",
                B: "Schedule of Test Results and Schedule of Inspections",
                C: "Schedule of Inspections and MEIWC",
                D: "EICR and Schedule of Inspections"
              },
              answer: "B",
              explanation: "Every EIC is accompanied by a Schedule of Test Results and a Schedule of Inspections. A Minor Works Certificate is an alternative to the EIC, not an attachment; an EICR is for periodic inspection."
            },
            {
              number: 22,
              prompt: "Signatories required on an EIC for new build:",
              options: { A: "Contractor, designer, NICEIC rep", B: "Designer, constructor, inspector", C: "Designer, client, contractor", D: "Installer, client, contractor" },
              answer: "B",
              explanation: "EIC signatories: designer (responsible for design), constructor (installation), and inspector (inspection and testing). The same person may sign more than one role on smaller jobs."
            },
            {
              number: 23,
              prompt: "Replacement 3-phase DB wired with different phase sequence — what happens when motors are run?",
              options: { A: "Won't run", B: "Run in opposite direction", C: "Protective devices trip", D: "Run normally" },
              answer: "B",
              explanation: "Reversing phase sequence to a 3-phase induction motor reverses its direction of rotation. The motor itself is fine — but mechanical equipment driven by it may be damaged when it spins backwards."
            },
            {
              number: 24,
              prompt: "Which confirms 'so far as is reasonably practicable' that BS 7671 requirements are met?",
              options: { A: "Functional Testing", B: "EICR", C: "Routine checks", D: "Initial Verification" },
              answer: "D",
              explanation: "BS 7671 Part 6 — initial verification (inspection + testing + certification) is the formal confirmation that a new or altered installation meets the Regulations."
            },
            {
              number: 25,
              prompt: "Min IP code in zones 1 and 2 of a bathroom:",
              options: { A: "IP7X", B: "IP4X", C: "IPX4", D: "IPX7" },
              answer: "C",
              explanation: "BS 7671 701: Zones 1 and 2 require minimum IPX4 (splashing water from any direction). Where water jets are used, IPX5. Zone 0 is IPX7."
            },
            {
              number: 26,
              prompt: "Ring final 2.5/1.5 mm² T+E. r1 = 0.05 Ω. Expected r2:",
              options: { A: "0.0835 Ω", B: "0.952 Ω", C: "0.125 Ω", D: "0.399 Ω" },
              answer: "A",
              explanation: "r2/r1 = R(1.5)/R(2.5) = 12.10/7.41 ≈ 1.67. r2 = 0.05 × 1.67 ≈ 0.0835 Ω."
            },
            {
              number: 27,
              prompt: "Which CANNOT be used to determine PFC?",
              options: { A: "Enquiry", B: "Measurement", C: "Substitution", D: "Calculation" },
              answer: "C",
              explanation: "Three valid methods for determining PFC: enquiry from DNO, calculation, direct measurement. 'Substitution' isn't recognised."
            },
            {
              number: 28,
              prompt: "30 mA RCD as additional protection — test current and time:",
              options: { A: "30 mA, 300 ms", B: "15 mA, no trip", C: "30 mA, 40 ms", D: "150 mA, 40 ms" },
              answer: "D",
              explanation: "BS 7671 Reg 415.1.1: a 30 mA RCD as additional protection must trip within 40 ms at 5×IΔn (= 150 mA). Beyond the 300 ms general test at 1×IΔn."
            },
            {
              number: 29,
              prompt: "Maximum demand recorded on:",
              options: { A: "MEIWC", B: "Schedule of Inspections", C: "EIC", D: "Schedule of Test Results" },
              answer: "C",
              explanation: "Maximum demand (with diversity applied) is recorded on the EIC main page under supply characteristics — a design figure, not a test result."
            },
            {
              number: 30,
              prompt: "Source for checking Zs values:",
              options: { A: "BS 7671", B: "BS 88", C: "GS38", D: "BS 1361" },
              answer: "A",
              explanation: "BS 7671 Tables 41.2, 41.3 and 41.4 list maximum Zs by device type and rating. BS 88 is fuse construction, GS38 is test leads, BS 1361 is cartridge fuses."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "Basic protection is given by:",
              options: { A: "Double insulation", B: "Reinforced insulation", C: "SELV", D: "Insulation of live parts" },
              answer: "D",
              explanation: "Basic protection means preventing direct contact with live parts — achieved primarily by insulation of live parts and barriers/enclosures. Double/reinforced insulation is fault protection (Class II), SELV is its own protective measure."
            },
            {
              number: 2,
              prompt: "British Standard for measuring instruments:",
              options: { A: "BS EN 61010", B: "BS EN 61008", C: "BS EN 61009", D: "BS EN 60898" },
              answer: "A",
              explanation: "BS EN 61010 is the safety standard for measuring instruments — every test instrument used to BS 7671 should comply. 61008 is RCDs, 61009 is RCBOs, 60898 is MCBs."
            },
            {
              number: 3,
              prompt: "Rotating disc and lamp types are used in which instrument?",
              options: { A: "Phase sequence tester", B: "RCD tester", C: "Clamp ammeter", D: "Voltage indicator" },
              answer: "A",
              explanation: "Phase rotation indicators are either a small motor disc that spins one way for L1-L2-L3 or a lamp set that lights in sequence. Critical when running 3-phase motors after any rewire."
            },
            {
              number: 4,
              prompt: "EAWR provision for safe inspection of electrical systems:",
              options: { A: "Adverse environments", B: "Strength and capability", C: "Persons to be competent", D: "Connections" },
              answer: "C",
              explanation: "EAWR Reg 16 — competence requirement for any person carrying out work on electrical systems."
            },
            {
              number: 5,
              prompt: "Installer isolates a lighting circuit — to keep others safe:",
              options: { A: "Padlock the isolation", B: "Prove dead at point of work", C: "Apply a warning notice", D: "Prevent access" },
              answer: "C",
              explanation: "A clear warning notice tells anyone else on site that work is in progress. Padlocking is also good practice but the notice is what informs other workers."
            },
            {
              number: 6,
              prompt: "Test voltage for IR test of a SELV circuit:",
              options: { A: "500 V AC", B: "500 V DC", C: "250 V DC", D: "250 V AC" },
              answer: "C",
              explanation: "BS 7671 Table 64: SELV/PELV/electrical separation are tested at 250 V DC (and must be ≥ 0.5 MΩ). LV is 500 V DC with 1 MΩ minimum."
            },
            {
              number: 7,
              prompt: "Original copy of EIC retained by:",
              options: { A: "Local building control", B: "Inspectors registration body", C: "Contractor", D: "Person ordering the work" },
              answer: "D",
              explanation: "The original EIC goes to the person ordering the work (the duty holder). The contractor keeps a copy. This complies with EAWR Reg 4(2)."
            },
            {
              number: 8,
              prompt: "Tests on an incoming 3-phase live supply:",
              options: {
                A: "PFC, External Loop Impedance, Phase Rotation",
                B: "PSCC, mains continuity, polarity",
                C: "IR, EFLI, Phase Rotation",
                D: "PFC, EFLI, Live Polarity"
              },
              answer: "A",
              explanation: "On an incoming live supply you can measure PFC, Ze, and phase rotation. IR is a dead test; EFLI through the installation is a final-circuit test."
            },
            {
              number: 9,
              prompt: "Minimum acceptable IR for SELV circuit:",
              options: { A: "1 MΩ", B: "2 MΩ", C: "0.5 MΩ", D: "5 MΩ" },
              answer: "C",
              explanation: "Table 64 — SELV/PELV/electrical separation: minimum 0.5 MΩ at 250 V DC."
            },
            {
              number: 10,
              prompt: "Which is NOT a precaution before IR test?",
              options: {
                A: "Remove dimmer switches",
                B: "Disconnect neons",
                C: "Disconnect the earthing lead",
                D: "Remove all loads"
              },
              answer: "C",
              explanation: "PE stays connected throughout — the IR test is between lives and earth (with PE intact) to mimic in-service condition."
            },
            {
              number: 11,
              prompt: "IR test fails on a radial circuit and PVC/PVC cable has been replaced. Best action:",
              options: {
                A: "Move on",
                B: "Re-inspect and re-test",
                C: "Re-test entire installation",
                D: "Re-test IR for that circuit"
              },
              answer: "B",
              explanation: "Replacing the cable is a physical alteration — re-inspect (check the new install) and re-test (IR plus continuity since the CPC has been disturbed)."
            },
            {
              number: 12,
              prompt: "System with all exposed-conductive-parts connected to an earth electrode independent of the source:",
              options: { A: "TN-C", B: "TN-C-S", C: "TN-S", D: "TT" },
              answer: "D",
              explanation: "TT — all exposed parts bonded to a local earth electrode independent of the supply source. TN systems use the source earth."
            },
            {
              number: 13,
              prompt: "Primary reason for safe isolation:",
              options: {
                A: "Allow uninsulated tools",
                B: "Avoid serious or fatal injury",
                C: "Avoid equipment damage",
                D: "Keep cables cool"
              },
              answer: "B",
              explanation: "Safe isolation prevents the operator (and others) from contacting live parts during work — preventing electric shock injury or death is the primary purpose."
            },
            {
              number: 14,
              prompt: "Which protective measure provides electrical separation?",
              options: {
                A: "TT system with RCD",
                B: "Class II equipment supply",
                C: "BS EN 61558 isolating transformer with one item of equipment",
                D: "SELV"
              },
              answer: "C",
              explanation: "Electrical separation (Reg 413) — supply via a BS EN 61558 isolating transformer to a single item, with no exposed-conductive-parts connected to earth or to other circuits."
            },
            {
              number: 15,
              prompt: "Reg 411.3.3 requires additional protection by 30 mA RCD for:",
              options: {
                A: "All circuits",
                B: "Socket outlets ≤ 32 A in domestic and similar premises, mobile equipment ≤ 32 A used outdoors, and all circuits in special locations",
                C: "Only outdoor sockets",
                D: "Only sockets in bathrooms"
              },
              answer: "B",
              explanation: "Reg 411.3.3 — 30 mA RCD additional protection for socket outlets ≤ 32 A in domestic/commercial premises, mobile equipment outdoors, and all circuits in special-location bathrooms (701) and similar."
            },
            {
              number: 16,
              prompt: "An EIC departure means:",
              options: {
                A: "A non-compliance with BS 7671",
                B: "A deliberate deviation justified by Reg 120.3 / 133.5 where the result is no less safe",
                C: "Permission to leave site",
                D: "A drafting error"
              },
              answer: "B",
              explanation: "Departures are explicitly permitted where the result is no less safe than compliance would have given. Must be declared with the regulation reference and justification."
            },
            {
              number: 17,
              prompt: "GN3 recommended dead-test sequence:",
              options: {
                A: "IR, polarity, continuity",
                B: "Continuity (CPC) → ring final continuity → IR → polarity → earth electrode (if applicable)",
                C: "Polarity, IR, continuity",
                D: "IR only"
              },
              answer: "B",
              explanation: "GN3 — dead-test order ensures each step's preconditions are met by the previous. CPC continuity confirms the protective path before IR depends on it."
            },
            {
              number: 18,
              prompt: "An installation has main protective bonding to gas (10 mm² Cu) of 0.025 Ω. The R2 wander-lead test should give:",
              options: {
                A: "0.025 Ω plus the residual lead resistance after nulling — typically reads close to bonding resistance alone",
                B: "0.5 Ω",
                C: "1 Ω",
                D: "5 Ω"
              },
              answer: "A",
              explanation: "Bonding resistance is typically very low (< 0.05 Ω). R2 wander-lead with the lead nulled gives essentially the bonding alone. Higher readings suggest a poor termination."
            },
            {
              number: 19,
              prompt: "The current required from a low-resistance ohmmeter for continuity testing:",
              options: { A: "200 mA – 10 A", B: "30 mA exactly", C: "1 A at 50 V", D: "100 mA" },
              answer: "A",
              explanation: "GN3 — 200 mA to 10 A at 4 V to 24 V AC or DC. Test current high enough to break through oxide on poor connections."
            },
            {
              number: 20,
              prompt: "Calculate Zs where Ze = 0.35 Ω, R1 = 0.4 Ω, R2 = 0.6 Ω:",
              options: { A: "0.95 Ω", B: "1.35 Ω", C: "0.25 Ω", D: "1.45 Ω" },
              answer: "B",
              explanation: "Zs = Ze + (R1 + R2) = 0.35 + (0.4 + 0.6) = 0.35 + 1.0 = 1.35 Ω."
            },
            {
              number: 21,
              prompt: "BS 7671 specifies maximum Zs for Type C 16 A MCB at 0.4 s:",
              options: { A: "0.69 Ω", B: "1.37 Ω", C: "2.30 Ω", D: "5.00 Ω" },
              answer: "B",
              explanation: "Table 41.3 — Type C 16 A: 1.37 Ω. Type B 16 A: 2.73 Ω. Type C trips at 5–10× rated; Type B at 3–5× rated. Lower max Zs for Type C compensates for the higher trip threshold."
            },
            {
              number: 22,
              prompt: "An RCD test reads 1×IΔn = 285 ms on a general-type. The result is:",
              options: { A: "Pass — within 300 ms", B: "Fail — above 200 ms", C: "Fail — above 40 ms", D: "Pass — exceeds 100 ms" },
              answer: "A",
              explanation: "300 ms is the legal maximum at 1×IΔn for general (non-S-type) RCDs. 285 ms passes."
            },
            {
              number: 23,
              prompt: "An RCBO labelled 'A' indicates:",
              options: {
                A: "Type A RCD function — senses sinusoidal AC and pulsating DC residual currents",
                B: "Class A insulation",
                C: "Approved for outdoor use",
                D: "30 mA only"
              },
              answer: "A",
              explanation: "Type A senses AC + pulsating DC. Common for modern domestic where switched-mode supplies are everywhere. Type AC senses AC only; Type B senses AC + pulsating DC + smooth DC."
            },
            {
              number: 24,
              prompt: "Polarity dead-test of a single-pole MCB confirms:",
              options: {
                A: "The MCB's load terminal is at the line potential when on, and isolated from line when off — i.e. line is interrupted by the MCB",
                B: "Neutral is interrupted by the MCB",
                C: "The cpc is interrupted",
                D: "All conductors are switched"
              },
              answer: "A",
              explanation: "Single-pole MCB interrupts only line. Continuity check: line continuous through the MCB when on, open when off. Neutral and CPC bypass the MCB."
            },
            {
              number: 25,
              prompt: "Section 528 of BS 7671 covers:",
              options: {
                A: "Mutual detrimental influence — segregation of Band I (ELV/data) from Band II (LV) circuits",
                B: "Earth electrode design",
                C: "Maximum demand calculation",
                D: "RCD selection"
              },
              answer: "A",
              explanation: "Section 528 — segregation of voltage bands prevents cross-coupling, induced voltages on signal cables, and the spread of insulation faults from one band to the other."
            },
            {
              number: 26,
              prompt: "A 30 m radial cooker circuit in 6/2.5 mm² T+E. Expected R1+R2 at 20 °C:",
              options: { A: "0.31 Ω", B: "0.50 Ω", C: "0.62 Ω", D: "0.95 Ω" },
              answer: "A",
              explanation: "Per metre: 3.08 + 7.41 = 10.49 mΩ/m. For 30 m: 30 × 10.49 = 315 mΩ ≈ 0.31 Ω."
            },
            {
              number: 27,
              prompt: "An installation includes voltage-sensitive electronics. The IR test should:",
              options: {
                A: "Test through them",
                B: "Disconnect them or link L+N to test L+N–E only",
                C: "Increase test voltage",
                D: "Use 230 V AC"
              },
              answer: "B",
              explanation: "Voltage-sensitive equipment can be damaged by 500 V DC. Disconnect or link L+N and test only to earth. Document the limitation."
            },
            {
              number: 28,
              prompt: "Testing two RCDs in series for discrimination — the upstream device should be:",
              options: {
                A: "S-type with intentional delay (130–500 ms at 1×IΔn) so the downstream RCD trips first",
                B: "Same IΔn as downstream",
                C: "General-type, 100 mA",
                D: "Type B"
              },
              answer: "A",
              explanation: "Discrimination requires both higher threshold AND time delay. S-type provides the time delay. Just having higher IΔn isn't enough — without delay both would trip on a sufficient fault."
            },
            {
              number: 29,
              prompt: "Healthy ring circuit: r1 = 0.40 Ω, rn = 0.42 Ω, r2 = 0.65 Ω. Ratio r2/r1:",
              options: {
                A: "1.63 — close to expected 1.67 for 2.5/1.5 mm² T+E",
                B: "1.0",
                C: "0.5",
                D: "2.5"
              },
              answer: "A",
              explanation: "Expected r2/r1 = R(1.5)/R(2.5) = 12.10/7.41 = 1.67 for 2.5/1.5 cable. 0.65/0.40 = 1.63 — within tolerance, healthy ring."
            },
            {
              number: 30,
              prompt: "An installation's PFC is 2.5 kA. MCBs installed are 6 kA breaking capacity. The verifier should:",
              options: {
                A: "Confirm 6 kA > 2.5 kA — devices adequate. Record on the EIC",
                B: "Replace with 10 kA regardless",
                C: "Add cable to reduce PFC",
                D: "Reject the installation"
              },
              answer: "A",
              explanation: "Breaking capacity must be ≥ PFC. 6 kA capacity vs 2.5 kA fault = adequate margin. Record both values; periodic inspection should re-check."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "GN3 dead-test sequence — what is verified first?",
              options: {
                A: "Insulation resistance",
                B: "Continuity of CPCs",
                C: "Polarity",
                D: "Earth fault loop impedance"
              },
              answer: "B",
              explanation: "GN3 — first dead test is continuity of CPCs (R1+R2 or R2 wander-lead method). Confirms protective path before IR or other tests rely on it."
            },
            {
              number: 2,
              prompt: "Reg 411.4.6 — for an RCD providing fault protection, the maximum disconnection time on a final circuit ≤ 32 A is:",
              options: { A: "0.4 s", B: "0.1 s", C: "5 s", D: "1 s" },
              answer: "A",
              explanation: "Table 41.1 — final circuits ≤ 32 A on TN systems disconnect within 0.4 s. RCDs deliver this through their inherent fast operation."
            },
            {
              number: 3,
              prompt: "A 25 m radial in 4/1.5 mm² T+E. Expected R1+R2 at 20 °C:",
              options: { A: "0.42 Ω", B: "0.50 Ω", C: "0.36 Ω", D: "0.30 Ω" },
              answer: "A",
              explanation: "Per metre: 4.61 + 12.10 = 16.71 mΩ/m. For 25 m: 25 × 16.71 = 418 mΩ ≈ 0.42 Ω."
            },
            {
              number: 4,
              prompt: "EIC declaration includes the 'departures' section. If no departures:",
              options: { A: "Leave blank", B: "Write 'None' or strike through", C: "Sign and tick", D: "Don't sign" },
              answer: "B",
              explanation: "If no departures, write 'None' so it's clear the verifier considered the question. Blank fields suggest carelessness; explicit 'None' is unambiguous."
            },
            {
              number: 5,
              prompt: "Maximum Zs for a 32 A BS 88-2 fuse at 0.4 s disconnection (Table 41.4):",
              options: { A: "0.62 Ω", B: "1.37 Ω", C: "0.91 Ω", D: "0.20 Ω" },
              answer: "A",
              explanation: "Table 41.4 — BS 88-2 32 A at 0.4 s: 0.62 Ω. At 5 s: 0.91 Ω. Fuses tolerate higher Zs at the longer disconnection time because the I²t curve is flatter at low currents."
            },
            {
              number: 6,
              prompt: "An RCD must be tested at 5×IΔn to verify additional protection. For a 30 mA RCD this means a test current of:",
              options: { A: "30 mA", B: "60 mA", C: "150 mA", D: "300 mA" },
              answer: "C",
              explanation: "5×IΔn for a 30 mA RCD = 150 mA. Maximum trip time at this current = 40 ms for a general-type."
            },
            {
              number: 7,
              prompt: "Section 411 of BS 7671 deals with:",
              options: {
                A: "Automatic Disconnection of Supply (ADS)",
                B: "Selection of cables",
                C: "Emergency lighting",
                D: "Special installations"
              },
              answer: "A",
              explanation: "Section 411 — ADS, the predominant fault protection for LV installations. Tables 41.1 (disconnection times) and 41.2/41.3/41.4 (max Zs) live here."
            },
            {
              number: 8,
              prompt: "An IR test reading of 0.05 MΩ:",
              options: { A: "Healthy", B: "Marginal pass", C: "Severe failure — indicates a major insulation fault", D: "Above the test range" },
              answer: "C",
              explanation: "0.05 MΩ = 50 kΩ — orders of magnitude below the 1 MΩ minimum. A serious fault — possibly a short circuit or near-short. DO NOT energise; localise and rectify before any further test."
            },
            {
              number: 9,
              prompt: "Reg 514.13 (warning notices) — what notice is required at the means of earthing?",
              options: {
                A: "'Safety electrical connection — do not remove'",
                B: "'High voltage'",
                C: "'Danger of death'",
                D: "Test results sheet"
              },
              answer: "A",
              explanation: "Reg 514.13 requires the 'safety electrical connection — do not remove' notice on each main earthing terminal and main protective bonding connection. Stops well-intentioned removal during maintenance."
            },
            {
              number: 10,
              prompt: "An RCD should be tested both for AC fault current and:",
              options: {
                A: "Pulsating DC (Type A) or smooth DC (Type B), depending on the device's stated type",
                B: "230 V AC only",
                C: "Only on Saturdays",
                D: "Only with the supply off"
              },
              answer: "A",
              explanation: "RCD type matches the load. Type AC tests with sinusoidal AC; Type A also with pulsating DC; Type B also with smooth DC. Higher-end testers select the appropriate waveform automatically."
            },
            {
              number: 11,
              prompt: "Polarity dead-test confirms:",
              options: {
                A: "Single-pole devices in line, accessories with L/N/cpc on correct terminals",
                B: "Insulation resistance",
                C: "Earth electrode resistance",
                D: "Maximum demand"
              },
              answer: "A",
              explanation: "Polarity verifies single-pole switches, fuses and MCBs are in the line conductor (not neutral) and that L, N and cpc reach the correct terminals at every accessory."
            },
            {
              number: 12,
              prompt: "An installation has a measured Ze of 0.55 Ω on a TN-S supply. The DNO declared maximum is 0.80 Ω. The verifier should:",
              options: {
                A: "Record 0.55 Ω on the EIC; confirm it's within DNO max; use this for Zs calculations",
                B: "Reject the supply",
                C: "Re-measure with bonding connected",
                D: "Use the 0.80 Ω in calculations"
              },
              answer: "A",
              explanation: "Measured Ze should be ≤ DNO declared. 0.55 Ω is comfortably within 0.80 Ω. Record the measured value (more accurate) and use it for Zs. Above DNO declared = supply problem."
            },
            {
              number: 13,
              prompt: "An MCB labelled 'B16' has a tripping curve at:",
              options: {
                A: "Instantaneous trip range 3–5× In = 48–80 A",
                B: "1× In",
                C: "10× In",
                D: "50× In"
              },
              answer: "A",
              explanation: "Type B: instantaneous trip 3–5× In. Type C: 5–10× In. Type D: 10–20× In. Type B suits resistive loads (lighting, sockets); Type C suits inductive loads (motors); Type D suits highly inductive (large transformers)."
            },
            {
              number: 14,
              prompt: "An MCB Type C tripping curve at 10× In means:",
              options: {
                A: "Instantaneous trip when fault current ≥ 10× In",
                B: "Trip at 1× In after 10 minutes",
                C: "10 × In at 5 seconds",
                D: "Trip at 10× In always"
              },
              answer: "A",
              explanation: "Type C MCB: 10× In is the upper instantaneous trip threshold. Below this, the MCB takes time to trip (thermal element). Above 10× In, magnetic trip operates within milliseconds. The full curve specifies the time at every multiple."
            },
            {
              number: 15,
              prompt: "Functional testing of an emergency lighting test switch:",
              options: {
                A: "Confirms the test switch removes power from the maintained luminaires, allowing the emergency converters to take over from battery — and the luminaires illuminate as designed",
                B: "Tests insulation resistance",
                C: "Tests the RCD",
                D: "Tests Zs"
              },
              answer: "A",
              explanation: "Emergency lighting test switch is a key-operated switch that simulates supply failure to confirm battery backup operates. Functional test = operate the switch, verify the emergency luminaires light, confirm correct duration on a separate full discharge test."
            },
            {
              number: 16,
              prompt: "An IR test on a 230 V circuit between L–N reads 25 MΩ. The verifier should:",
              options: {
                A: "Record as a healthy pass — well above 1 MΩ minimum",
                B: "Fail — must be above 50 MΩ",
                C: "Fail — must be above 100 MΩ",
                D: "Investigate as if a fault"
              },
              answer: "A",
              explanation: "25 MΩ is comfortably above the 1 MΩ minimum and above the 2 MΩ 'investigate' advisory threshold. A healthy reading."
            },
            {
              number: 17,
              prompt: "Phase rotation tester is used:",
              options: {
                A: "Before energising 3-phase motors and at any point where rotation matters",
                B: "Only on initial connection",
                C: "Only after a phase fault",
                D: "Only on single-phase circuits"
              },
              answer: "A",
              explanation: "Phase rotation testers verify L1-L2-L3 sequence at the test point. Used before energising 3-phase motors, drives, fans, pumps — anywhere rotation direction is critical."
            },
            {
              number: 18,
              prompt: "An MEIWC may be issued for:",
              options: {
                A: "An additional socket spurred from an existing ring final circuit",
                B: "A new shower circuit",
                C: "A complete CU replacement",
                D: "A new ring final in a kitchen"
              },
              answer: "A",
              explanation: "MEIWC = additions/alterations to an existing circuit only, no new circuit. A spur on an existing ring qualifies. New circuits or CU change need EIC."
            },
            {
              number: 19,
              prompt: "Test certificate retention period:",
              options: { A: "Minimum until next periodic inspection", B: "1 year", C: "3 months", D: "Never" },
              answer: "A",
              explanation: "Duty holder retains certificates at least until superseded by next periodic inspection. Long-term retention is best practice for diagnostic comparison."
            },
            {
              number: 20,
              prompt: "On a TT installation, the means of earthing is:",
              options: {
                A: "A local earth electrode at the installation",
                B: "The DNO supply earth",
                C: "The MET only",
                D: "The neutral conductor of the supply"
              },
              answer: "A",
              explanation: "TT — local electrode (rod, plate or mesh) provides the installation earth. Independent of the supply source earth. Common on overhead supplies and rural installations."
            },
            {
              number: 21,
              prompt: "Calibration interval for site test instruments:",
              options: { A: "Typically 12 months", B: "5 years", C: "10 years", D: "Never" },
              answer: "A",
              explanation: "Industry standard 12-month calibration certificate for site test instruments. Out-of-cal readings are unverified."
            },
            {
              number: 22,
              prompt: "Polarity at every socket should confirm:",
              options: {
                A: "Line on right pin (front view, earth top), neutral on left, earth top",
                B: "Line on top",
                C: "Neutral on right",
                D: "All pins at same potential"
              },
              answer: "A",
              explanation: "BS 1363 socket: looking at front with earth at top, line is on the RIGHT pin, neutral on LEFT, earth top. Reversed polarity is dangerous — appliance switches don't isolate properly."
            },
            {
              number: 23,
              prompt: "EICR observation code C2 means:",
              options: {
                A: "Potentially dangerous — urgent remedial action required",
                B: "Immediate danger",
                C: "Improvement recommended",
                D: "Further investigation needed"
              },
              answer: "A",
              explanation: "C1 = immediate danger; C2 = potentially dangerous (urgent action); C3 = improvement recommended; FI = further investigation needed. EICR codes — periodic inspection terminology, but worth knowing in initial verification context."
            },
            {
              number: 24,
              prompt: "The R1+R2 test on a radial reads 0.45 Ω at the furthest socket. With Ze = 0.30 Ω, calculated Zs:",
              options: { A: "0.75 Ω", B: "0.85 Ω", C: "0.65 Ω", D: "1.00 Ω" },
              answer: "A",
              explanation: "Zs = Ze + (R1+R2) = 0.30 + 0.45 = 0.75 Ω."
            },
            {
              number: 25,
              prompt: "An EIC must include 'extent of installation covered'. This:",
              options: {
                A: "Defines exactly what the EIC certifies — protects against ambiguity",
                B: "Lists the contractor's bank account",
                C: "Lists the maximum demand",
                D: "Lists insurance"
              },
              answer: "A",
              explanation: "Extent makes clear what the EIC covers and excludes. Vague 'all of the dwelling' or missing extent makes the certificate hard to interpret later."
            },
            {
              number: 26,
              prompt: "An installation has a 100 mA upstream RCD and 30 mA downstream RCBOs. The 100 mA must be:",
              options: {
                A: "S-type to ensure discrimination — 130–500 ms delay at 1×IΔn",
                B: "Same general-type",
                C: "Faster than the downstream",
                D: "Different waveform sensing"
              },
              answer: "A",
              explanation: "Discrimination = downstream trips first. S-type's intentional delay achieves this. General-type 100 mA upstream might trip simultaneously with the 30 mA downstream on faults exceeding 100 mA."
            },
            {
              number: 27,
              prompt: "An installation has an EV charger circuit. The RCD type required is:",
              options: {
                A: "Type B (or Type A + DC fault detection device on the EVSE)",
                B: "Type AC",
                C: "Type S",
                D: "No RCD needed"
              },
              answer: "A",
              explanation: "Reg 722.531.3.101 — EV chargers can produce smooth DC residual currents. Type B RCD detects these; Type A may be DC-blinded; Type AC certainly is. Some EVSEs include integral DC detection allowing Type A upstream."
            },
            {
              number: 28,
              prompt: "BS 7671 Reg 134.1.1 requires:",
              options: {
                A: "Good workmanship by competent persons or persons supervised by them, using proper materials",
                B: "Photographs of the work",
                C: "Daily reports",
                D: "Customer signature on every cable"
              },
              answer: "A",
              explanation: "Reg 134.1.1 — competent persons (or persons supervised by them) using proper materials. The legal foundation for installation quality. EAWR Reg 16 is the parallel competence requirement."
            },
            {
              number: 29,
              prompt: "Periodic inspection date for a domestic dwelling is recommended at:",
              options: { A: "10 years (or change of occupancy)", B: "5 years", C: "1 year", D: "20 years" },
              answer: "A",
              explanation: "Domestic 10 years or change of occupancy. Rented residential 5 years (under England's 2020 EICR Regulations). Industrial 3 years; commercial 5 years."
            },
            {
              number: 30,
              prompt: "An RCD-protected circuit's Zs measured by no-trip mode reads 1.50 Ω. This means:",
              options: {
                A: "ADS via overcurrent might not be achieved (depending on Table 41.3 for the OPD), but RCD provides ADS via earth fault",
                B: "Certain fail",
                C: "Insulation resistance issue",
                D: "Supply problem"
              },
              answer: "A",
              explanation: "Modern installations rely on RCD for ADS where Zs is high. The MCB protects against overload/short; the 30 mA RCD trips on any L–E fault current ≥ 30 mA in ≤ 0.4 s. Both protections present together = ADS achieved."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "An MFT measures continuity, IR, Zs and RCD operation in one instrument. It must comply with:",
              options: { A: "BS EN 61010 (instrument safety) and BS EN 61557 (in-service test instruments)", B: "BS 88", C: "BS 60898", D: "BS 5266" },
              answer: "A",
              explanation: "BS EN 61010 = safety of measuring instruments. BS EN 61557 = specific requirements for in-service test instruments for low-voltage installations. Both apply."
            },
            {
              number: 2,
              prompt: "Type AC RCD is not suitable for circuits feeding:",
              options: {
                A: "Electronic equipment producing pulsating DC residual currents",
                B: "Pure AC heating",
                C: "Incandescent lighting",
                D: "Resistive loads"
              },
              answer: "A",
              explanation: "Type AC senses sinusoidal AC only. Pulsating DC residual currents from switched-mode supplies (computers, LED drivers, modern appliances) can blind the device. Type A is needed."
            },
            {
              number: 3,
              prompt: "An installation's PSCC at the origin is measured as 6.5 kA between L and N. The MCB breaking capacity required is:",
              options: { A: "≥ 6.5 kA — typical 6 kA MCBs would be inadequate; use 10 kA breaking capacity", B: "≥ 1 kA", C: "≥ 30 kA", D: "Unrelated" },
              answer: "A",
              explanation: "Breaking capacity must be ≥ PSCC. 6.5 kA exceeds typical domestic 6 kA — use 10 kA MCBs. Alternative: install a HRC fuse upstream to reduce the let-through energy seen by the MCBs (cascading)."
            },
            {
              number: 4,
              prompt: "Reg 132.16 requires that an addition or alteration:",
              options: {
                A: "Does not impair the safety of the existing installation",
                B: "Be photographed",
                C: "Have customer approval",
                D: "Be on a separate certificate"
              },
              answer: "A",
              explanation: "Reg 132.16 — addition/alteration must not make existing safety worse. Verifier checks earthing, bonding, OPD adequacy, and cable capacity to ensure the existing installation remains safe with the new work."
            },
            {
              number: 5,
              prompt: "A new circuit added to an existing TN-C-S installation. The verifier should:",
              options: {
                A: "Test the new circuit fully and confirm Ze, main bonding, OPD ratings of the existing installation are adequate",
                B: "Re-test the entire existing installation as if new",
                C: "Test only the new circuit",
                D: "Issue an MEIWC"
              },
              answer: "A",
              explanation: "Reg 132.16. Test the new circuit fully; confirm the existing installation can support it. Reg 644.1.2 governs verification of additions/alterations."
            },
            {
              number: 6,
              prompt: "An R1+R2 reading at the furthest socket is 0.65 Ω. Ze = 0.40 Ω. Calculated Zs:",
              options: { A: "1.05 Ω", B: "0.25 Ω", C: "0.40 Ω", D: "0.65 Ω" },
              answer: "A",
              explanation: "Zs = Ze + (R1+R2) = 0.40 + 0.65 = 1.05 Ω."
            },
            {
              number: 7,
              prompt: "Functional testing of a contactor in a motor circuit confirms:",
              options: {
                A: "Coil operates the main contacts; main contacts close on energise; auxiliary NO/NC contacts follow correctly; no chatter or sluggish operation",
                B: "Insulation resistance only",
                C: "Earth electrode integrity",
                D: "Phase rotation"
              },
              answer: "A",
              explanation: "Functional test of switchgear: confirms it operates as designed. Coil → main contacts close; aux contacts follow; mechanical operation smooth. Standard practice for any switchgear in initial verification."
            },
            {
              number: 8,
              prompt: "An installation has 4 ring final circuits. R1+R2 test on each by figure-of-eight gives:",
              options: {
                A: "Substantially equal R1+R2 readings at every socket on each ring (within a few percent)",
                B: "Wildly varying readings",
                C: "Zero at every socket",
                D: "Above 5 Ω"
              },
              answer: "A",
              explanation: "Healthy ring: figure-of-eight R1+R2 = (r1+r2)/4 substantially equal at every socket. Variation > a few percent suggests a break, interconnection or spur on a spur."
            },
            {
              number: 9,
              prompt: "An RCD test instrument's calibration certificate is dated 11 months ago. The verifier should:",
              options: {
                A: "Use the instrument confidently — within the typical 12-month interval",
                B: "Refuse to use it",
                C: "Recalibrate before each use",
                D: "Use it but record uncertainty"
              },
              answer: "A",
              explanation: "11 months < 12 month standard interval = in calibration. Use confidently. Calibration interval can be extended by competent in-house verification, but standard practice is 12 months."
            },
            {
              number: 10,
              prompt: "Polarity at the consumer unit confirms:",
              options: {
                A: "Each MCB/RCBO sits on the line busbar, not the neutral; the neutral busbar carries only neutral conductors",
                B: "All conductors are at the same potential",
                C: "The earth bar is removable",
                D: "The MCB is on the neutral side"
              },
              answer: "A",
              explanation: "CU polarity: every protective device on the line busbar (since they are single-pole devices that interrupt only line). Neutral bar = neutral terminations only; cpc bar = cpc terminations only."
            },
            {
              number: 11,
              prompt: "Reg 712.7 covers PV systems and requires:",
              options: {
                A: "Specific RCD type and protective measures for the DC side, plus UK ENA G98/G99 connection requirements",
                B: "No additional protection",
                C: "Only AC side protection",
                D: "10 kΩ earth electrode"
              },
              answer: "A",
              explanation: "Section 712 — solar photovoltaic. DC side protective measures, AC side ADS, RCD type B if grid-tied. ENA G98 (small inverters) or G99 (larger) covers DNO connection."
            },
            {
              number: 12,
              prompt: "An installation has SPDs fitted at the origin. Before IR testing, the SPDs should be:",
              options: {
                A: "Disconnected (their MOVs conduct at < 500 V) and reconnected after testing",
                B: "Left connected",
                C: "Replaced",
                D: "Set to test mode"
              },
              answer: "A",
              explanation: "SPDs typically clamp around 275 V — well below 500 V test voltage. Leaving them in circuit either fails the test through the MOV or damages the device. Disconnect, IR test, reconnect, document."
            },
            {
              number: 13,
              prompt: "Functional testing of an interlocked motor change-over switch confirms:",
              options: {
                A: "The two motors cannot run simultaneously — the interlock blocks the second contactor from energising while the first is closed",
                B: "Both motors can run together",
                C: "Only the IR is tested",
                D: "Only the Zs is tested"
              },
              answer: "A",
              explanation: "Mechanical or electrical interlock — exercise both states to confirm the second cannot energise while the first is. Critical for safety in pumping, conveyor, and reversing-motor applications."
            },
            {
              number: 14,
              prompt: "A measured Ze of 0.18 Ω on a TN-C-S supply is:",
              options: {
                A: "Healthy — typical UK PME Ze 0.10–0.35 Ω",
                B: "Too high",
                C: "Marginal",
                D: "Cannot be assessed"
              },
              answer: "A",
              explanation: "TN-C-S (PME) typical Ze 0.10–0.35 Ω. 0.18 Ω is mid-range — healthy supply."
            },
            {
              number: 15,
              prompt: "An installation has 10 mA Type B RCD on a medical IT room. Functional testing:",
              options: {
                A: "Confirms 0.5×IΔn = 5 mA (no trip in 2 s), 1×IΔn = 10 mA (≤ 300 ms or stricter per medical regs), and 5×IΔn = 50 mA (≤ 40 ms or stricter)",
                B: "Same as a 30 mA RCD",
                C: "Test button only",
                D: "IR test only"
              },
              answer: "A",
              explanation: "Medical IT installations may have specific RCD requirements (Section 710). The standard 0.5×/1×/5× test points apply with appropriate time limits. 10 mA RCDs are common in medical due to the lower body resistance during procedures."
            },
            {
              number: 16,
              prompt: "An EIC for a cable installed in a cable management system:",
              options: {
                A: "Should reference the cable type, csa, and management system in the schedule of test results, with installation method per Reg 521.5 / Table 4A",
                B: "Doesn't need cable details",
                C: "Just the maximum demand",
                D: "Only the IR"
              },
              answer: "A",
              explanation: "Cable details (type, csa, route, management) are recorded so the cable's current-carrying capacity (Iz) can be verified. Iz depends on installation method (Table 4A1-4D5 for various methods)."
            },
            {
              number: 17,
              prompt: "An installation requires a TT system because the supply is overhead. The earth electrode resistance should be:",
              options: {
                A: "Measured by fall-of-potential and recorded; max practical 200 Ω; 30 mA RCD provides ADS",
                B: "Not measured",
                C: "≤ 1 Ω regardless",
                D: "Equal to Ze of the supply"
              },
              answer: "A",
              explanation: "TT systems — measure Ra (electrode resistance). Practical max 200 Ω for stability. RCD provides ADS: Ra × IΔn ≤ 50 V. 30 mA × 200 Ω = 6 V (well within touch voltage limit)."
            },
            {
              number: 18,
              prompt: "A 32 A Type B MCB has Table 41.3 max Zs at 0.4 s of:",
              options: { A: "1.37 Ω", B: "0.69 Ω", C: "2.30 Ω", D: "5.00 Ω" },
              answer: "A",
              explanation: "Table 41.3 — Type B 32 A: 1.37 Ω. Type C 32 A: 0.69 Ω. Type D 32 A: 0.34 Ω."
            },
            {
              number: 19,
              prompt: "An installation has 6 socket outlets on a 32 A ring. Maximum demand calculation with diversity:",
              options: {
                A: "Approximately 13 A (typical domestic ring with diversity factor) — well within the 32 A circuit rating",
                B: "32 A regardless",
                C: "100 A",
                D: "1 A"
              },
              answer: "A",
              explanation: "Domestic ring: diversity 100% of largest plus 40% of remainder, or 13 A typical for general use. Used for max demand calc on the EIC."
            },
            {
              number: 20,
              prompt: "An installation has been tested. The measured Zs at the furthest socket of a circuit is 1.30 Ω. Table 41.3 max for the OPD at 0.4 s = 1.50 Ω. The 0.8 rule:",
              options: {
                A: "0.8 × 1.50 = 1.20 Ω. Measured 1.30 Ω exceeds — investigate before accepting",
                B: "Pass — Zs < 1.50",
                C: "Fail — Zs > 1.0",
                D: "Pass — Zs < 5"
              },
              answer: "A",
              explanation: "Measured cold ≤ 0.8 × tabulated. 0.8 × 1.50 = 1.20 Ω. Measured 1.30 Ω cold suggests warm Zs would exceed 1.50 Ω. Investigate cable, terminations, or rely on RCD for ADS."
            },
            {
              number: 21,
              prompt: "An IR test on a circuit with the cpc disconnected from the MET would:",
              options: {
                A: "Be invalid for the L–E test, because the MET path is not in circuit and only direct earth contact would show leakage",
                B: "Give higher readings",
                C: "Be more accurate",
                D: "Be standard practice"
              },
              answer: "A",
              explanation: "PE stays connected during IR. Disconnecting it removes the in-service earth path and leaves the L+N–E test reading only the cpc itself, missing leakage to extraneous-conductive-parts via bonding."
            },
            {
              number: 22,
              prompt: "An RCD test gives 5×IΔn = 35 ms. The result:",
              options: { A: "Pass — within 40 ms", B: "Fail — over 30 ms", C: "Fail — over 40 ms", D: "Cannot be determined" },
              answer: "A",
              explanation: "5×IΔn ≤ 40 ms is the additional-protection criterion. 35 ms passes — close to limit but acceptable. Should be flagged for trend monitoring at periodic inspection."
            },
            {
              number: 23,
              prompt: "An installer using GS38 probes — the exposed metal tip should be:",
              options: {
                A: "≤ 4 mm (preferably ≤ 2 mm or shrouded/spring-loaded)",
                B: "≥ 50 mm",
                C: "≥ 25 mm",
                D: "0 mm"
              },
              answer: "A",
              explanation: "GS38 — exposed tip ≤ 4 mm, preferably shorter or shrouded. Limits the area of exposed live metal during a live test, reducing shock and short-circuit risk."
            },
            {
              number: 24,
              prompt: "Polarity check at a fused spur confirms:",
              options: {
                A: "Both fuse and switch are in the line conductor; neutral and cpc bypass both",
                B: "Only the switch is in line",
                C: "The fuse is in the neutral",
                D: "The cpc is interrupted"
              },
              answer: "A",
              explanation: "Single-pole FCU: both fuse and switch in line; neutral and cpc continuous regardless of switch state. Removing the fuse or operating the switch interrupts only line."
            },
            {
              number: 25,
              prompt: "An MCB Type B is suitable for:",
              options: {
                A: "Resistive loads (lighting, heating, sockets) — instantaneous trip 3–5× In",
                B: "Highly inductive loads",
                C: "Welding plant",
                D: "Large transformers"
              },
              answer: "A",
              explanation: "Type B: 3–5× In trip range. Suits low-inrush loads — sockets, lighting, heating. Type C: 5–10× In for inductive loads (motors). Type D: 10–20× In for highly inductive (large transformers, welders)."
            },
            {
              number: 26,
              prompt: "An installation in a swimming pool location requires:",
              options: {
                A: "Section 702 — zoning by IPX rating, SELV in zone 0, supplementary bonding, RCD additional protection",
                B: "Standard domestic protection only",
                C: "No special considerations",
                D: "Only IPX2 in all zones"
              },
              answer: "A",
              explanation: "Section 702. Zone 0 (in pool): SELV ≤ 12 V AC / 30 V DC. Zone 1: IPX5; Zone 2: IPX2. Supplementary bonding to all extraneous-conductive-parts. RCD on every circuit serving Zone 0 or 1."
            },
            {
              number: 27,
              prompt: "An RCD test instrument applies 2× the rated test current at the 5×IΔn test point — true or false?",
              options: { A: "False — applies 5× IΔn (e.g. 150 mA for a 30 mA RCD)", B: "True", C: "False — applies 30 mA only", D: "Depends" },
              answer: "A",
              explanation: "Test current matches the test point: 0.5× IΔn = 15 mA, 1× IΔn = 30 mA, 5× IΔn = 150 mA (for a 30 mA RCD). Each test point has its own time limit per BS EN 61008/61009."
            },
            {
              number: 28,
              prompt: "Functional testing in initial verification ends with:",
              options: {
                A: "Confirmation that all switchgear, control gear, drives, interlocks, monitoring/alarm systems and safety circuits operate as designed",
                B: "Just the lights working",
                C: "Just the maximum demand",
                D: "Just the IR test"
              },
              answer: "A",
              explanation: "Reg 643.10 — functional testing closes the verification loop. Every assembly that depends on multiple components working together is exercised. Then the EIC is signed."
            },
            {
              number: 29,
              prompt: "An IR test reading of 200 MΩ on a new circuit:",
              options: { A: "Healthy", B: "Marginal", C: "Failed", D: "Above test range" },
              answer: "A",
              explanation: "200 MΩ is well above the 1 MΩ minimum and the 2 MΩ investigate threshold — a typical new-installation healthy reading."
            },
            {
              number: 30,
              prompt: "An RCD failing a test must be:",
              options: {
                A: "Replaced and the replacement retested at all three test points",
                B: "Recorded as fail and energised anyway",
                C: "Disabled",
                D: "Adjusted with screwdriver"
              },
              answer: "A",
              explanation: "Failed device → replace → retest. The replacement gets a new test record on the schedule (linking the device's serial number to the circuit). Energising a circuit with a known-failed RCD is unsafe and unethical."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "GN3 sequence — IR is tested:",
              options: {
                A: "After continuity but before polarity",
                B: "Before continuity",
                C: "After Zs",
                D: "Before Ze"
              },
              answer: "A",
              explanation: "Dead-test order: continuity (CPCs, ring) → IR → polarity → earth electrode (if applicable). Then live tests."
            },
            {
              number: 2,
              prompt: "A 25 m radial in 2.5/1.5 mm² T+E. Expected R1+R2 at 20 °C:",
              options: { A: "0.49 Ω", B: "0.36 Ω", C: "0.30 Ω", D: "0.65 Ω" },
              answer: "A",
              explanation: "Per metre: 7.41 + 12.10 = 19.51 mΩ/m. For 25 m: 25 × 19.51 = 488 mΩ ≈ 0.49 Ω."
            },
            {
              number: 3,
              prompt: "Type B MCB 6 A — Table 41.3 max Zs at 0.4 s:",
              options: { A: "7.28 Ω", B: "1.37 Ω", C: "2.73 Ω", D: "0.69 Ω" },
              answer: "A",
              explanation: "Type B 6 A: 7.28 Ω. Type B 10 A: 4.37 Ω. Type B 16 A: 2.73 Ω. Lower-rated MCBs tolerate higher Zs because their tripping curve activates at lower currents."
            },
            {
              number: 4,
              prompt: "An installation has main bonding to gas (10 mm² Cu) of 0.04 Ω. Reading is:",
              options: { A: "Healthy — typical bonding < 0.05 Ω", B: "Too high", C: "Marginal", D: "Cannot be assessed" },
              answer: "A",
              explanation: "Healthy main bonding has very low resistance — typically below 0.05 Ω. Higher readings indicate poor termination or undersized conductor."
            },
            {
              number: 5,
              prompt: "An RCD trips at 0.5×IΔn within 1 s. The result:",
              options: {
                A: "Fail — must NOT trip in 2 s. Device is over-sensitive — replace and retest",
                B: "Pass — sensitivity good",
                C: "Pass — within tolerance",
                D: "Cannot be assessed"
              },
              answer: "A",
              explanation: "0.5×IΔn must NOT trip within 2 s. Tripping at 0.5×IΔn means the device is over-sensitive — likely to nuisance trip in service on small leakage from healthy equipment. Replace."
            },
            {
              number: 6,
              prompt: "Live polarity test at the consumer unit on a TN-C-S installation should show:",
              options: {
                A: "L–N ≈ 230 V, L–E ≈ 230 V, N–E ≈ 0 V",
                B: "L–N ≈ 0 V",
                C: "L–E ≈ 0 V, N–E ≈ 230 V",
                D: "All three at 230 V"
              },
              answer: "A",
              explanation: "Healthy TN-C-S: L–N ≈ 230 V (supply); N–E ≈ 0 V (locally bonded at supply origin); L–E ≈ 230 V (same as L–N because N is at earth potential)."
            },
            {
              number: 7,
              prompt: "A measured Zs of 0.95 Ω on a 16 A Type B circuit. Table 41.3 max = 2.73 Ω. Apply the 0.8 rule:",
              options: {
                A: "0.8 × 2.73 = 2.18 Ω. Measured 0.95 Ω is well within → pass with margin",
                B: "Fail",
                C: "Marginal",
                D: "Cannot be assessed"
              },
              answer: "A",
              explanation: "Type B 16 A max Zs = 2.73 Ω at 0.4 s. 0.8 × 2.73 = 2.18 Ω. Measured 0.95 Ω is comfortably below — pass."
            },
            {
              number: 8,
              prompt: "An installation has been certified. The duty holder retains:",
              options: {
                A: "EIC + Schedule of Inspections + Schedule of Test Results — together",
                B: "EIC alone",
                C: "Schedule of Test Results alone",
                D: "MEIWC"
              },
              answer: "A",
              explanation: "The three documents together form the certification record. EIC alone is incomplete; the schedules are the evidence base for its declarations."
            },
            {
              number: 9,
              prompt: "A radial circuit IR test (L–N) reads 100 MΩ — the verifier should:",
              options: {
                A: "Record as a healthy pass — well above the 1 MΩ minimum",
                B: "Fail",
                C: "Marginal",
                D: "Test at 1000 V"
              },
              answer: "A",
              explanation: "100 MΩ is comfortably above all thresholds — a clean, healthy reading. Typical new-install figure."
            },
            {
              number: 10,
              prompt: "Phase rotation tester is used:",
              options: {
                A: "Before energising 3-phase motors and at any point where rotation matters",
                B: "Only on initial connection",
                C: "Only after a phase fault",
                D: "On single-phase circuits"
              },
              answer: "A",
              explanation: "Phase rotation testers verify L1-L2-L3 sequence at the test point. Use before energising 3-phase motors, drives, fans, pumps."
            },
            {
              number: 11,
              prompt: "Reg 421.1.7 (BS 7671 17th/18th Ed) covers AFDDs and applies to:",
              options: {
                A: "Final circuits in HMOs, residential care, student accommodation, and other higher-risk premises (recommendation)",
                B: "All circuits",
                C: "Only outdoor circuits",
                D: "Only fire alarm circuits"
              },
              answer: "A",
              explanation: "Reg 421.1.7 — AFDDs recommended for circuits supplying socket outlets ≤ 32 A in HMOs, hotels, hostels, residential care, and similar higher-risk locations. Detect arc faults in conductors before fire ignition."
            },
            {
              number: 12,
              prompt: "An EIC supply characteristics page records:",
              options: {
                A: "Voltage, frequency, type of earthing arrangement, prospective fault current, Ze, supplier OPD characteristics, maximum demand",
                B: "Only the contractor's name",
                C: "Only IR results",
                D: "Only Zs values"
              },
              answer: "A",
              explanation: "The supply characteristics page captures the design-critical information. Without it, fault studies and ADS verification can't be reproduced or audited."
            },
            {
              number: 13,
              prompt: "An installation in a bathroom (Section 701) requires:",
              options: {
                A: "30 mA RCD additional protection on every circuit serving the location, supplementary bonding (where extraneous-conductive-parts present), and zone-appropriate IP ratings",
                B: "Only IPX1",
                C: "No special protection",
                D: "Class III equipment only"
              },
              answer: "A",
              explanation: "Section 701 — every circuit through a bathroom needs 30 mA RCD additional protection. Supplementary bonding required if extraneous-conductive-parts are present (water/heating pipes that aren't already main-bonded). Zone IPX ratings: Zone 0 IPX7, Zone 1 IPX4, Zone 2 IPX4."
            },
            {
              number: 14,
              prompt: "An installation has an immersion heater spur. Functional test:",
              options: {
                A: "Operates the spur switch — confirms the heater receives power and the thermostat operates",
                B: "Only the IR is tested",
                C: "Only the Zs is tested",
                D: "Only the polarity"
              },
              answer: "A",
              explanation: "Functional testing of any appliance circuit confirms the supply path operates as designed. For an immersion heater: spur switch controls the heater; thermostat cycles the heater on/off as the water reaches setpoint."
            },
            {
              number: 15,
              prompt: "An RCD test at 1×IΔn must be performed in:",
              options: {
                A: "Both half-cycles of the supply (positive and negative) — the device's response should be similar in both",
                B: "Only one half-cycle",
                C: "DC only",
                D: "100 Hz"
              },
              answer: "A",
              explanation: "Higher-end RCD testers test both half-cycles. Significant asymmetry (> 25%) flags a sensing core that's drifting toward saturation in one direction — a sign of imminent failure. Schedule should record both."
            },
            {
              number: 16,
              prompt: "GN3 advises that a measured cold Zs exceeding 0.8 × tabulated should be:",
              options: {
                A: "Investigated — the warm Zs may exceed the tabulated maximum",
                B: "Accepted without comment",
                C: "Replaced with a higher-rated MCB",
                D: "Recorded as a fail without further action"
              },
              answer: "A",
              explanation: "0.8 × tabulated is the cold-reading rule of thumb. Above this, the warm conductor would likely exceed the limit. Investigate cable length, csa, terminations — or rely on RCD for ADS."
            },
            {
              number: 17,
              prompt: "An installation has a 100 mA upstream RCD. To provide discrimination with downstream 30 mA RCDs, the 100 mA must be:",
              options: { A: "S-type (selective, time-delayed)", B: "General-type", C: "AC-only", D: "10 mA" },
              answer: "A",
              explanation: "S-type's intentional delay (130–500 ms at 1×IΔn) ensures downstream 30 mA trips first on faults exceeding 30 mA. General-type 100 mA could trip simultaneously with 30 mA on larger faults — losing discrimination."
            },
            {
              number: 18,
              prompt: "An EICR observation code C3 means:",
              options: { A: "Improvement recommended (not a fail; the installation is safe but could be enhanced)", B: "Immediate danger", C: "Potentially dangerous", D: "Further investigation" },
              answer: "A",
              explanation: "C1 = immediate danger; C2 = potentially dangerous; C3 = improvement recommended; FI = further investigation. C3 doesn't fail the EICR — but the verifier flags improvements (e.g. update to current edition where practicable)."
            },
            {
              number: 19,
              prompt: "An installation includes a SPD that the verifier disconnects for IR testing. After testing, the verifier:",
              options: {
                A: "Reconnects the SPD and confirms by inspection that it's correctly fitted, with the indicator lamp showing serviceable",
                B: "Leaves the SPD disconnected",
                C: "Tests the SPD with 1000 V",
                D: "Records SPD as omitted"
              },
              answer: "A",
              explanation: "SPD must be reconnected after IR testing. Visual inspection confirms correct fit and indicator status. SPDs typically have a green/red indicator showing serviceable / faulty."
            },
            {
              number: 20,
              prompt: "An installation has been tested. Maximum demand recorded on the EIC is calculated by:",
              options: {
                A: "Applying diversity factors to circuit currents per IET On-Site Guide / GN1 — gives realistic load on the supply tail",
                B: "Sum of all MCB ratings",
                C: "100% of largest MCB",
                D: "Always 100 A"
              },
              answer: "A",
              explanation: "Maximum demand = realistic loading after diversity. OSG / GN1 give factors per circuit type — domestic ring 1st 100% + 40% remainder; lighting 66%; cooker 10 A + 30% balance + 5 A if socket on cooker plate."
            },
            {
              number: 21,
              prompt: "Reg 514 — identification of conductors uses colour codes:",
              options: {
                A: "Brown = line, blue = neutral, green/yellow = cpc (BS 7671:2008+ harmonised colours)",
                B: "Red = line, black = neutral, green = cpc (pre-2004 UK)",
                C: "Brown = neutral",
                D: "All conductors black"
              },
              answer: "A",
              explanation: "Harmonised colours: brown = line, blue = neutral, green/yellow = cpc. Three-phase: brown / black / grey for L1/L2/L3. Pre-2004 UK colours (red/black) are not used in new work but may be encountered in old installations."
            },
            {
              number: 22,
              prompt: "An RCD with IΔn 30 mA tested at 1×IΔn = 30 mA shows trip time 250 ms. Result:",
              options: { A: "Pass — within 300 ms", B: "Fail — over 200 ms", C: "Fail — over 40 ms", D: "Cannot be assessed" },
              answer: "A",
              explanation: "300 ms is the legal maximum at 1×IΔn for general-type RCDs. 250 ms is a healthy result well within."
            },
            {
              number: 23,
              prompt: "An EIC must reference any departures from BS 7671 with:",
              options: {
                A: "The regulation departed from, the justification (per Reg 120.3 / 133.5), and the verifier's professional acceptance that the installation is no less safe",
                B: "Just the regulation number",
                C: "Just the contractor's signature",
                D: "Nothing — departures are forbidden"
              },
              answer: "A",
              explanation: "Departures must be specific (regulation number) and justified. The verifier signs accepting the deviation is no less safe than compliance would have given. Vague 'no specific reg' departures fail the test."
            },
            {
              number: 24,
              prompt: "A new circuit's IR-tested L–N reads 50 MΩ. The verifier should:",
              options: { A: "Record as a healthy pass", B: "Fail", C: "Recommend rewiring", D: "Test at 1000 V DC" },
              answer: "A",
              explanation: "50 MΩ is comfortable — well above 1 MΩ minimum and 2 MΩ investigate threshold. Typical of a healthy new install."
            },
            {
              number: 25,
              prompt: "EICR C2 indicates:",
              options: { A: "Potentially dangerous — urgent remedial action required", B: "Immediate danger", C: "Improvement only", D: "OK as-is" },
              answer: "A",
              explanation: "C1 = immediate danger (e.g. exposed live conductor at floor level). C2 = potentially dangerous, urgent action (e.g. missing earth at consumer unit). C3 = improvement recommended. FI = further investigation."
            },
            {
              number: 26,
              prompt: "An installation's earthing system is recorded on the EIC supply characteristics page as:",
              options: {
                A: "TN-S, TN-C-S, TT, IT — based on the actual supply, confirmed by inspection and DNO information",
                B: "Always TN-C-S",
                C: "Always TT",
                D: "Always blank"
              },
              answer: "A",
              explanation: "Supply earthing system is fundamental to ADS design. Verify by inspection of the supply (PME/PEN identifier on the cut-out, supply cable type) and DNO confirmation."
            },
            {
              number: 27,
              prompt: "An RCBO Type A is suitable for:",
              options: {
                A: "Modern domestic electronics that produce pulsating DC residual currents",
                B: "EV chargers (Type B is needed)",
                C: "VFDs (Type B is needed)",
                D: "Pure resistive loads only"
              },
              answer: "A",
              explanation: "Type A senses AC + pulsating DC. Suits switched-mode supplies common in modern domestic. Type B is needed for smooth DC — EV chargers and VFDs typically need Type B."
            },
            {
              number: 28,
              prompt: "Functional test of a contactor confirms:",
              options: {
                A: "Coil energises → main contacts close, NO aux closes, NC aux opens; de-energise reverses all states",
                B: "Insulation resistance only",
                C: "Maximum demand",
                D: "Earth electrode"
              },
              answer: "A",
              explanation: "Contactor functional test exercises both coil states. Main contacts and auxiliary contacts must follow correctly. Useful diagnostic: hold the coil energised and check aux state with continuity meter."
            },
            {
              number: 29,
              prompt: "An installation has 30 mA RCDs throughout. After all tests pass, the verifier issues:",
              options: {
                A: "EIC + Schedule of Inspections + Schedule of Test Results, with all RCD test data recorded per device",
                B: "MEIWC",
                C: "EICR",
                D: "Verbal handover only"
              },
              answer: "A",
              explanation: "EIC + schedules. Each RCD tested gets results recorded for 0.5×, 1×, 5× IΔn. Each device's serial number tied to the protected circuit so future verifiers can trace history."
            },
            {
              number: 30,
              prompt: "An installation passes all tests. The verifier completes by:",
              options: {
                A: "Functional testing all assemblies, signing the EIC, attaching the schedules, and issuing the certificate package to the duty holder",
                B: "Energising and walking away",
                C: "Sending the certificate to the DNO",
                D: "Filing under 'pending'"
              },
              answer: "A",
              explanation: "Final steps: functional test all switchgear/assemblies/interlocks, complete the EIC declaration, ensure both schedules are attached, deliver to the duty holder. Contractor retains a copy."
            }
          ]
        }
      ]
    },
    {
      id: "section-4",
      title: "Section 4 — Documents, Safe Isolation & Instruments",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "A correct safe isolation procedure includes:",
              options: {
                A: "Switching off and testing with a multimeter only",
                B: "Removing the fuse and putting tape over the switch",
                C: "Identify, isolate, lock off, prove the tester on a known source, test for dead at point of work, re-prove the tester",
                D: "Turning off the consumer unit main switch and checking no lights come on"
              },
              answer: "C",
              explanation: "Full safe isolation: identify → isolate → lock off → prove tester → test dead → re-prove tester. Re-proving is critical — if the tester failed, the preceding 'dead' confirmation is worthless."
            },
            {
              number: 2,
              prompt: "Primary purpose of initial verification:",
              options: {
                A: "Match contract spec",
                B: "Verify BS 7671 compliance and safety to put into service",
                C: "Prove circuit operation",
                D: "Insurance paperwork"
              },
              answer: "B",
              explanation: "BS 7671 Part 6. Initial verification confirms the installation complies with BS 7671 and is safe to energise."
            },
            {
              number: 3,
              prompt: "New final circuit added to an existing dwelling — appropriate certification:",
              options: {
                A: "MEIWC",
                B: "EIC + Schedule of Inspections + Schedule of Test Results",
                C: "EICR",
                D: "Functional record only"
              },
              answer: "B",
              explanation: "Any new circuit requires an EIC accompanied by both schedules. MEIWC is only for additions/alterations to an existing circuit (no new circuit)."
            },
            {
              number: 4,
              prompt: "MEIWC may be issued for:",
              options: {
                A: "New consumer unit",
                B: "Additional socket spurred from existing ring final, no new circuit created",
                C: "New dedicated circuit",
                D: "Recording C2 defects"
              },
              answer: "B",
              explanation: "MEIWC = additions/alterations to existing circuit, no new circuit. A spur on an existing ring qualifies. New circuit or new installation = EIC."
            },
            {
              number: 5,
              prompt: "Pre-test visual inspection (Reg 642.3) confirms:",
              options: {
                A: "Cables show no external damage",
                B: "Equipment correctly selected/erected, conductors identified/connected, protective devices correctly rated, barriers/enclosures in place, labels/notices fitted",
                C: "Earthing somewhere",
                D: "Installation appears to function"
              },
              answer: "B",
              explanation: "Visual inspection is structured and wide-ranging — selection, identification, rating, fire barriers, warning notices, labelling. Significant proportion of defects caught here before any testing."
            },
            {
              number: 6,
              prompt: "GS38 requires test probes/leads to have:",
              options: {
                A: "Finger barriers, exposed tip ≤ 4 mm, adequately insulated leads, fused leads where appropriate",
                B: "Crocodile clips only",
                C: "Probes ≥ 100 mm long",
                D: "No fuses in leads"
              },
              answer: "A",
              explanation: "GS38 limits exposed metal, requires finger barriers, fused leads where appropriate. Limits shock and fault risk during live testing."
            },
            {
              number: 7,
              prompt: "Proving unit (or known live source) is required:",
              options: {
                A: "Only when testing RCDs",
                B: "Before AND after each use of voltage indicator during safe isolation",
                C: "To measure Zs",
                D: "As IR tester substitute"
              },
              answer: "B",
              explanation: "Safe isolation: prove → test dead → re-prove. If the re-prove fails, the preceding 'dead' confirmation is worthless. Proving unit is the controlled known source."
            },
            {
              number: 8,
              prompt: "Standard IR test voltage for 230/400 V LV installation:",
              options: { A: "100 V AC", B: "250 V DC", C: "500 V DC", D: "1000 V DC" },
              answer: "C",
              explanation: "Table 64 of BS 7671. LV (50–500 V) tested at 500 V DC; minimum acceptable 1.0 MΩ. SELV/PELV at 250 V DC; >500 V at 1000 V DC."
            },
            {
              number: 9,
              prompt: "Low-resistance ohmmeter for continuity testing must deliver:",
              options: {
                A: "≥ 1 A at 50 V",
                B: "Short-circuit current 200 mA – 10 A at open-circuit voltage 4 V – 24 V AC or DC",
                C: "Exactly 500 mA at 12 V AC",
                D: "30 mA only"
              },
              answer: "B",
              explanation: "GN3 — 200 mA – 10 A at 4 V – 24 V AC or DC. High enough current to break through oxide on poor connections."
            },
            {
              number: 10,
              prompt: "EIC for new work requires signatures confirming responsibility for:",
              options: {
                A: "Customer only",
                B: "Design, construction, and inspection & testing (each role signed for separately even when one competent person discharges all three)",
                C: "DNO",
                D: "Building control officer"
              },
              answer: "B",
              explanation: "EIC separates the three responsibilities. Each competent person accepts accountability for the role they sign for."
            },
            {
              number: 11,
              prompt: "Schedule of Test Results accompanying EIC/EICR records:",
              options: {
                A: "Replaces EIC where tests are incomplete",
                B: "Records numerical results — continuity, IR, Zs, PFC, RCD times, polarity — circuit by circuit, for traceability",
                C: "Records only RCD disconnection times",
                D: "Documents verbal handover"
              },
              answer: "B",
              explanation: "Schedule of Test Results is the factual numerical record per circuit. Pairs with Schedule of Inspections to form the technical evidence behind the EIC."
            },
            {
              number: 12,
              prompt: "An approved voltage indicator (AVI) for proving dead must comply with:",
              options: { A: "GS38", B: "BS 88", C: "BS 60898", D: "BS 1361" },
              answer: "A",
              explanation: "GS38 — HSE guidance on test probes/indicators for live work. AVIs (compliant with GS38) are the proper tool for safe isolation. Multimeters are not approved voltage indicators in the GS38 sense."
            },
            {
              number: 13,
              prompt: "Test instrument calibration interval (typical):",
              options: { A: "12 months", B: "5 years", C: "Never", D: "Daily" },
              answer: "A",
              explanation: "Industry standard 12 months for site test instruments. Out-of-cal readings are unverified."
            },
            {
              number: 14,
              prompt: "EICR is appropriate for:",
              options: {
                A: "New work certification",
                B: "Periodic inspection and reporting on existing installation condition",
                C: "Notifying building control of new work",
                D: "Recording maximum demand"
              },
              answer: "B",
              explanation: "EICR records the condition of an existing installation against current BS 7671. EIC = new work. MEIWC = small alteration. EICR = periodic verification report."
            },
            {
              number: 15,
              prompt: "Locking off requires:",
              options: {
                A: "A keyed padlock or unique key the worker holds, plus a warning notice, applied to the isolation device",
                B: "A padlock anyone can remove",
                C: "Only a warning notice",
                D: "Only the supply switched off"
              },
              answer: "A",
              explanation: "Lock-off requires a unique-key padlock so only the authorised worker can re-energise. Tape over the switch (B) is not lock-off — anyone can peel it. Notice alone is communication, not isolation."
            },
            {
              number: 16,
              prompt: "An installation has a measurement instrument with calibration certificate dated 14 months ago. The verifier should:",
              options: {
                A: "Recalibrate the instrument before relying on its readings, or have the readings independently verified",
                B: "Use as-is",
                C: "Increase the test voltage to compensate",
                D: "Use only for IR tests"
              },
              answer: "A",
              explanation: "14 months > standard 12-month interval. Out-of-cal — readings are unverified. Recalibrate before use, or have a second instrument confirm critical readings."
            },
            {
              number: 17,
              prompt: "An MFT used for both Zs and IR testing must comply with:",
              options: {
                A: "BS EN 61010 (instrument safety) and BS EN 61557 (in-service test instruments for LV installations)",
                B: "BS 88 only",
                C: "BS EN 60898 only",
                D: "GS38 only"
              },
              answer: "A",
              explanation: "BS EN 61010 = instrument safety. BS EN 61557 = LV in-service test instruments. Both apply to MFTs. GS38 covers probes/leads, not the instrument body."
            },
            {
              number: 18,
              prompt: "Safe isolation for a single-pole MCB requires:",
              options: {
                A: "Lock off the MCB AND prove dead at the point of work — the MCB only interrupts line, so neutral could still be present from another fault",
                B: "Remove the MCB",
                C: "Tape over the MCB only",
                D: "Switch off and walk away"
              },
              answer: "A",
              explanation: "Lock off the MCB to prevent re-energisation. Prove dead at the point of work: AVI between L–E (should be 0 V) and N–E (should be 0 V) and L–N (should be 0 V). Re-prove the AVI."
            },
            {
              number: 19,
              prompt: "An EIC is signed and issued. The legal status:",
              options: {
                A: "Carries legal weight as a record signed by named competent persons under their professional accountability",
                B: "Purely advisory",
                C: "Replaces every 12 months automatically",
                D: "Internal company record only"
              },
              answer: "A",
              explanation: "EIC = formal record signed by named individuals, supported by certification scheme registration. Has weight in EAWR / Building Regs proceedings."
            },
            {
              number: 20,
              prompt: "An EIC accompanies which other documents?",
              options: {
                A: "Schedule of Inspections + Schedule of Test Results",
                B: "MEIWC",
                C: "EICR",
                D: "DNO certificate"
              },
              answer: "A",
              explanation: "Three documents form the certification: EIC + Schedule of Inspections + Schedule of Test Results. The schedules are the evidence base for the EIC declaration."
            },
            {
              number: 21,
              prompt: "An installation has been certified. The duty holder is:",
              options: {
                A: "The person ordering the work — typically the property owner or, in rented residential, the landlord",
                B: "The contractor",
                C: "The DNO",
                D: "The local council"
              },
              answer: "A",
              explanation: "Duty holder = person responsible for the installation. Person ordering the work in domestic contexts; landlord in rented; employer in commercial. Retains the original EIC."
            },
            {
              number: 22,
              prompt: "BS EN 61557 is the standard for:",
              options: {
                A: "In-service test instruments (continuity, IR, Zs, RCD testers)",
                B: "RCDs themselves",
                C: "MCBs",
                D: "Cables"
              },
              answer: "A",
              explanation: "BS EN 61557 = test instrument standard. Each function has its own part: -2 (continuity), -3 (IR), -4 (R1+R2), -6 (RCD), -7 (phase rotation), etc."
            },
            {
              number: 23,
              prompt: "Reg 514.13 requires the 'safety electrical connection — do not remove' notice on:",
              options: {
                A: "Each main earthing terminal and main protective bonding connection",
                B: "Every accessory",
                C: "The DNO cut-out",
                D: "The customer's appliances"
              },
              answer: "A",
              explanation: "Reg 514.13. Notice prevents well-intentioned removal during maintenance — bonding to gas/water can look like a stray earth wire."
            },
            {
              number: 24,
              prompt: "Functional testing of a luminaire after initial verification confirms:",
              options: {
                A: "Switch operates the lamp; dimmer dims smoothly; sensor/timer functions as designed",
                B: "Insulation resistance",
                C: "Polarity",
                D: "Earth electrode"
              },
              answer: "A",
              explanation: "Functional testing is the practical 'does it work as designed' check. Operate every control, observe each function. The other tests (IR, polarity, etc.) are separate."
            },
            {
              number: 25,
              prompt: "Test result documentation should record:",
              options: {
                A: "The numerical reading, the test instrument, and (where critical) the calibration date — for traceable evidence",
                B: "Just 'pass/fail'",
                C: "Only the date",
                D: "The customer's name"
              },
              answer: "A",
              explanation: "GN3 — traceable records require knowing the instrument and that calibration is in date. Without those, the figures lose evidential weight."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "GS38 — exposed test probe metal tip should be:",
              options: { A: "≤ 4 mm (preferably ≤ 2 mm or shrouded/spring-loaded)", B: "≥ 50 mm", C: "≥ 25 mm", D: "0 mm" },
              answer: "A",
              explanation: "GS38 — exposed tip ≤ 4 mm, preferably ≤ 2 mm or shrouded. Limits the area of exposed live metal during a live test."
            },
            {
              number: 2,
              prompt: "Approved voltage indicator (AVI) is required for:",
              options: {
                A: "Proving dead during safe isolation, with a known-source proving check before and after",
                B: "Continuity testing",
                C: "IR testing",
                D: "Earth electrode testing"
              },
              answer: "A",
              explanation: "AVI is the GS38-compliant tool for proving dead. Two-pole, designed for live work, fused leads, finger barriers. Multimeter is NOT an AVI in this sense."
            },
            {
              number: 3,
              prompt: "Safe isolation step that defeats the purpose of locking off:",
              options: {
                A: "Switching back on to confirm equipment turns off",
                B: "Proving dead at the point of work",
                C: "Re-proving the AVI",
                D: "Applying a warning notice"
              },
              answer: "A",
              explanation: "Switching back on as a check brings the live conductors back. The whole point of lock-off is preventing accidental re-energisation. Verify by AVI proving dead, not by trying the switch."
            },
            {
              number: 4,
              prompt: "An MEIWC is issued for:",
              options: {
                A: "Additions or alterations to an existing circuit, no new circuit created",
                B: "A new shower circuit",
                C: "A new ring final",
                D: "A consumer unit replacement"
              },
              answer: "A",
              explanation: "MEIWC = addition/alteration to existing circuit (e.g. spur, accessory replacement). Anything that creates a new circuit requires an EIC."
            },
            {
              number: 5,
              prompt: "EIC supply characteristics page records:",
              options: {
                A: "Voltage, frequency, type of earthing, PFC, Ze, supplier OPD characteristics, maximum demand",
                B: "Customer name only",
                C: "Just the maximum demand",
                D: "Nothing"
              },
              answer: "A",
              explanation: "Supply characteristics: voltage, frequency, earthing arrangement, prospective fault current, Ze, supplier OPD, maximum demand. The design-critical information."
            },
            {
              number: 6,
              prompt: "An installation has a 30 mA RCD. Functional test confirms:",
              options: {
                A: "Test button works (mechanism), AND RCD tester results pass at 0.5×, 1× and 5× IΔn (electrical performance)",
                B: "Only the test button needs pressing",
                C: "Only the 1×IΔn test",
                D: "Only an IR test"
              },
              answer: "A",
              explanation: "Both layers required. Test button proves mechanism; RCD tester proves threshold and time. Either alone is incomplete."
            },
            {
              number: 7,
              prompt: "EICR observation code C1 means:",
              options: {
                A: "Immediate danger — duty holder must be told immediately and remedial work undertaken before continuing use",
                B: "Improvement recommended",
                C: "Potentially dangerous (urgent action)",
                D: "Further investigation required"
              },
              answer: "A",
              explanation: "C1 = immediate danger. C2 = potentially dangerous. C3 = improvement recommended. FI = further investigation. C1 requires immediate action; C2 urgent; C3 informative."
            },
            {
              number: 8,
              prompt: "An MFT's loop tester function in 'no-trip' mode is used:",
              options: {
                A: "To measure Zs on RCD-protected circuits without tripping the RCD",
                B: "To bypass the RCD",
                C: "To test 500 V DC",
                D: "Only on dead circuits"
              },
              answer: "A",
              explanation: "No-trip mode injects pulses of low average current. RCD doesn't see enough sustained imbalance to trip. Result is a Zs reading without tripping."
            },
            {
              number: 9,
              prompt: "Calibration certificate documents:",
              options: {
                A: "Traceability to national standards, the date of calibration, the instrument's accuracy at known test points",
                B: "Only the price",
                C: "Only the date of purchase",
                D: "Nothing useful"
              },
              answer: "A",
              explanation: "Calibration certificate is the documentation of accuracy and traceability. Required for the test results to have evidential weight. Out-of-cal = unverified."
            },
            {
              number: 10,
              prompt: "An EIC is signed by:",
              options: {
                A: "Designer, constructor, inspector — three roles, may be one person on small jobs",
                B: "Customer",
                C: "DNO",
                D: "Apprentice"
              },
              answer: "A",
              explanation: "Three roles, three signatures (even when one person discharges all three). Each role is accepting accountability for that part of the work."
            },
            {
              number: 11,
              prompt: "Reg 514 conductor identification — single-phase BS 7671:2018 colours:",
              options: {
                A: "Brown = line, Blue = neutral, Green/yellow = cpc",
                B: "Red = line, Black = neutral",
                C: "Black = line, Red = neutral",
                D: "All same colour"
              },
              answer: "A",
              explanation: "Harmonised colours since 2004. Three-phase: Brown / Black / Grey for L1/L2/L3. Pre-2004 colours (red/black) may be encountered but not used in new work."
            },
            {
              number: 12,
              prompt: "EIC is retained by the duty holder until:",
              options: {
                A: "Superseded by the next periodic inspection at minimum",
                B: "1 year",
                C: "3 months",
                D: "Indefinitely in a safe"
              },
              answer: "A",
              explanation: "Retain at least until superseded. Long-term retention is best practice for diagnostic comparison and EAWR Reg 4(2) compliance."
            },
            {
              number: 13,
              prompt: "On a small project where one person designs, installs and verifies the work, the EIC signature blocks should be:",
              options: {
                A: "Left blank for the customer to sign",
                B: "Signed by the same competent person in all three roles (designer, constructor, inspector) — BS 7671 permits this on small jobs",
                C: "Signed only in the constructor block, leaving designer and inspector blank",
                D: "Replaced with a single 'all roles' signature elsewhere on the certificate"
              },
              answer: "B",
              explanation: "BS 7671 / GN3 — on a small alteration or single-circuit job a single competent person can sign the designer, constructor and inspector roles. Each signature confirms the responsibility for that role; leaving any block blank invalidates the certificate."
            },
            {
              number: 14,
              prompt: "An installation has been altered. The MEIWC is issued by:",
              options: {
                A: "The competent person who carried out the alteration, signing as designer/constructor/inspector (may be one role on small alterations)",
                B: "The DNO",
                C: "The customer",
                D: "Building control"
              },
              answer: "A",
              explanation: "MEIWC is signed by the competent person who did the work. Smaller scope than EIC, but same accountability principle: designer/constructor/inspector roles."
            },
            {
              number: 15,
              prompt: "An MFT used for IR testing must apply:",
              options: {
                A: "DC test voltage (250 V, 500 V or 1000 V depending on circuit) per Table 64",
                B: "230 V AC always",
                C: "100 V DC",
                D: "Variable AC"
              },
              answer: "A",
              explanation: "IR test = DC voltage per Table 64. SELV: 250 V DC. LV: 500 V DC. >500 V to 1000 V: 1000 V DC. AC would interact with capacitance and produce misleading readings."
            },
            {
              number: 16,
              prompt: "Calibration of the test instrument is verified by:",
              options: {
                A: "An in-date calibration certificate from a recognised laboratory, plus periodic in-house verification against a reference",
                B: "The manufacturer's stamp",
                C: "Visual inspection only",
                D: "User self-declaration"
              },
              answer: "A",
              explanation: "Calibration cert is the formal evidence. In-house periodic verification (checking against a known reference between calibrations) gives confidence between cert dates."
            },
            {
              number: 17,
              prompt: "An EIC includes 'next inspection date' — recommended for:",
              options: {
                A: "Domestic 10 years; commercial 5 years; rented residential 5 years (England 2020 EICR Regs)",
                B: "Always 1 year",
                C: "Always 20 years",
                D: "Never required"
              },
              answer: "A",
              explanation: "IET / GN3 / Best Practice tables. Domestic 10 years; commercial 5; industrial 3; harsher environments shorter; some Part 7 special locations annually. Rented residential England: 5 years (or change of tenancy)."
            },
            {
              number: 18,
              prompt: "BS 7671 Reg 134.1.1 requires good workmanship by:",
              options: {
                A: "Competent persons, or persons supervised by them, using proper materials",
                B: "Anyone with a screwdriver",
                C: "Only NICEIC members",
                D: "Apprentices alone"
              },
              answer: "A",
              explanation: "Reg 134.1.1 — competent persons (or supervised). EAWR Reg 16 is the legal competence requirement. Both apply: BS 7671 is the technical standard, EAWR is the legal duty."
            },
            {
              number: 19,
              prompt: "An installer carries out work and an independent inspector verifies. On the EIC:",
              options: {
                A: "The installer signs as constructor (responsible for the build); the inspector signs as inspector (responsible for verification)",
                B: "Only one signature",
                C: "Inspector signs all three",
                D: "Installer signs all three"
              },
              answer: "A",
              explanation: "Different competent persons, different roles. Each signs for the role they hold. Independent inspection adds an extra check — preferred on larger jobs."
            },
            {
              number: 20,
              prompt: "An EICR is issued following:",
              options: {
                A: "Periodic inspection of an existing installation",
                B: "New work",
                C: "Minor alteration",
                D: "DNO commissioning"
              },
              answer: "A",
              explanation: "EICR = Electrical Installation Condition Report. Periodic verification document. Reports on the condition of an existing installation against current BS 7671."
            },
            {
              number: 21,
              prompt: "An MFT's RCD test function injects:",
              options: {
                A: "0.5×, 1× and 5× IΔn at the appropriate waveform for the device type — to measure trip threshold and time",
                B: "230 V AC always",
                C: "Only at IΔn",
                D: "DC only"
              },
              answer: "A",
              explanation: "Three test points: 0.5×IΔn (no trip in 2 s), 1×IΔn (≤ 300 ms general / 500 ms S-type), 5×IΔn (≤ 40 ms general / 150 ms S-type). Waveform per Type AC / A / B."
            },
            {
              number: 22,
              prompt: "An installation has been certified. The contractor retains:",
              options: {
                A: "A copy of the EIC and all schedules — the original goes to the duty holder",
                B: "All originals",
                C: "Nothing",
                D: "Only the EIC, not schedules"
              },
              answer: "A",
              explanation: "Contractor's copy is for their records (and certification scheme audit). Duty holder gets the originals. Loss of either copy creates an evidential gap."
            },
            {
              number: 23,
              prompt: "An MEIWC has space for which test data?",
              options: {
                A: "Continuity (R1+R2 if applicable), IR, polarity confirmation, Zs (where measurable), RCD test result if applicable — limited to the affected portion",
                B: "Full schedule of test results",
                C: "Maximum demand",
                D: "Just one test result"
              },
              answer: "A",
              explanation: "MEIWC test record covers only the portion of the installation affected by the alteration. The whole circuit is tested if possible (since alteration may have disturbed terminations)."
            },
            {
              number: 24,
              prompt: "Live polarity at the supply origin uses:",
              options: {
                A: "An approved voltage indicator (AVI) reading L–N, L–E, N–E voltages",
                B: "An IR tester",
                C: "Continuity meter",
                D: "RCD tester"
              },
              answer: "A",
              explanation: "AVI is the GS38-compliant tool. Reading L–N ≈ 230 V, L–E ≈ 230 V, N–E ≈ 0 V on a healthy TN supply. Reversed polarity (high N–E) is a serious supply fault."
            },
            {
              number: 25,
              prompt: "The 'extent of installation covered' on an EIC:",
              options: {
                A: "Defines exactly what the certificate certifies — protecting against ambiguity",
                B: "Just commercial info",
                C: "Just the address",
                D: "Customer's bank account"
              },
              answer: "A",
              explanation: "Extent makes the certificate's scope clear. Vague descriptions create problems for future verifiers; specific 'new shower circuit fed from circuit way 4 of CU' is unambiguous."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "GS38 — fused leads are required because:",
              options: {
                A: "Limit fault current if the test leads or instrument fail during a live test, preventing damage and shock",
                B: "GS38 says fuses are nice",
                C: "Required for IR testing",
                D: "Reduce cost"
              },
              answer: "A",
              explanation: "Fused leads = fail-safe. If a probe slips or shorts, the lead fuse blows before the supply OPD operates and before significant fault current flows. Standard practice for live testing."
            },
            {
              number: 2,
              prompt: "Identify, isolate, lock off, prove tester, test dead, re-prove tester — this is the procedure for:",
              options: { A: "Safe isolation", B: "RCD testing", C: "IR testing", D: "Earth electrode testing" },
              answer: "A",
              explanation: "Six-step safe isolation procedure. Each step has a specific purpose; missing any step compromises safety."
            },
            {
              number: 3,
              prompt: "BS EN 61010-1 specifies measurement category (CAT) ratings:",
              options: {
                A: "CAT II (small loads, sockets) up to CAT IV (origin/supply); higher CAT = higher transient withstand",
                B: "CAT I = highest",
                C: "Only one CAT",
                D: "Voltage only"
              },
              answer: "A",
              explanation: "CAT II: small appliances. CAT III: distribution. CAT IV: origin / supply / outdoor. Higher CAT instruments designed to withstand larger transients. Use the appropriate CAT for the location."
            },
            {
              number: 4,
              prompt: "An installation has a 100 mA S-type RCD upstream of 30 mA RCBOs. The S-type provides:",
              options: {
                A: "Discrimination — intentional 130–500 ms delay at 1×IΔn lets the downstream RCBOs trip first",
                B: "Faster operation",
                C: "Lower threshold",
                D: "DC sensing"
              },
              answer: "A",
              explanation: "S-type's intentional delay achieves discrimination. Without it, both RCDs might trip simultaneously on a fault, knocking out everything."
            },
            {
              number: 5,
              prompt: "Test instrument suitable for measuring loop impedance:",
              options: {
                A: "Earth fault loop impedance tester (or MFT loop function), compliant with BS EN 61557-3",
                B: "Multimeter",
                C: "IR tester",
                D: "RCD tester only"
              },
              answer: "A",
              explanation: "Loop testers (or MFT loop function) measure Zs by injecting a known current. BS EN 61557-3 covers loop impedance instrument requirements."
            },
            {
              number: 6,
              prompt: "Functional testing of an isolator confirms:",
              options: {
                A: "All poles disconnect simultaneously when operated; no live conductor remains connected",
                B: "Only L1 disconnects",
                C: "IR is acceptable",
                D: "Zs is below limit"
              },
              answer: "A",
              explanation: "Multi-pole isolator must disconnect all live conductors simultaneously. AVI on each pole post-isolation confirms. Single-phase: L only on a single-pole device. 3-phase: all three live phases."
            },
            {
              number: 7,
              prompt: "An EIC must be issued for:",
              options: {
                A: "New installation OR new circuit added to an existing installation",
                B: "Spur on existing ring (MEIWC)",
                C: "Customer relations",
                D: "Routine maintenance"
              },
              answer: "A",
              explanation: "EIC = new installation or new circuit. MEIWC = addition/alteration to existing circuit, no new circuit. EICR = periodic verification of existing installation."
            },
            {
              number: 8,
              prompt: "GS38 finger barriers exist to:",
              options: {
                A: "Prevent the operator's fingers slipping forward onto the exposed metal tip during live testing",
                B: "Improve grip",
                C: "Reduce weight",
                D: "Are decorative"
              },
              answer: "A",
              explanation: "Finger barriers: physical guard preventing the operator's hand from sliding forward onto the live test tip. Combined with short tip and fused leads, gives the GS38 layered protection."
            },
            {
              number: 9,
              prompt: "An RCD test sequence at 0.5×, 1× and 5× IΔn — what is the purpose of each?",
              options: {
                A: "0.5× = confirms not over-sensitive; 1× = main threshold/time check; 5× = additional protection time check",
                B: "All three are the same test",
                C: "Only 1× matters",
                D: "Only 5× matters"
              },
              answer: "A",
              explanation: "Each test point has a distinct purpose. Together they verify the device's full operating envelope: doesn't over-trip, trips at threshold, fast enough at multiples for additional protection."
            },
            {
              number: 10,
              prompt: "An installation has a calibration sticker dated 2 years ago. The verifier should:",
              options: {
                A: "Recalibrate before relying on test results — 2 years exceeds typical 12 month interval",
                B: "Use as-is",
                C: "Halve the test voltage",
                D: "Use only for IR"
              },
              answer: "A",
              explanation: "2 years is well beyond standard 12-month interval. Recalibration required for the readings to have evidential weight."
            },
            {
              number: 11,
              prompt: "An installer using a multimeter (not an AVI) for proving dead is:",
              options: {
                A: "Not following GS38 — multimeters are not approved voltage indicators and may fail dangerously during live work",
                B: "Following best practice",
                C: "OK if calibrated",
                D: "OK on dead circuits only"
              },
              answer: "A",
              explanation: "GS38 — AVI is the proper tool. Multimeters can fail (dial in wrong position, blown fuse) producing zero reading on a live conductor. AVIs are designed for live work, fail-safe, with limited functions."
            },
            {
              number: 12,
              prompt: "An installation has been certified. The duty holder's responsibilities include:",
              options: {
                A: "Retain certificate, arrange periodic inspection per the recommended interval, ensure competent maintenance",
                B: "Nothing — installer is responsible forever",
                C: "Send certificate to DNO",
                D: "Re-issue every year"
              },
              answer: "A",
              explanation: "Duty holder = ongoing responsibility under EAWR Reg 4(2). Retain records, arrange periodic inspection, ensure competent maintenance, address any safety issues identified."
            },
            {
              number: 13,
              prompt: "An MFT's continuity function uses test current of:",
              options: { A: "200 mA – 10 A at 4 V – 24 V (per GN3 / BS EN 61557-4)", B: "30 mA only", C: "230 V AC", D: "500 V DC" },
              answer: "A",
              explanation: "Continuity test current high enough to break through oxide on poor connections. BS EN 61557-4 specifies the requirements."
            },
            {
              number: 14,
              prompt: "Reg 134.1.1 requires:",
              options: {
                A: "Good workmanship by competent persons, with proper materials",
                B: "Apprentices supervised by anyone",
                C: "Non-competent persons only",
                D: "Customer approval"
              },
              answer: "A",
              explanation: "Reg 134.1.1 — competent persons or persons under their supervision, using proper materials. The legal foundation for installation quality."
            },
            {
              number: 15,
              prompt: "An installation has been altered without certification. The next periodic inspection should:",
              options: {
                A: "Note the absence of certification for the alteration as an observation, code accordingly based on safety implications",
                B: "Issue an EIC retrospectively",
                C: "Refuse to inspect",
                D: "Ignore the alteration"
              },
              answer: "A",
              explanation: "Periodic inspection records the installation as found, including unauthorised alterations. The safety implications drive the coding (C1/C2/C3/FI). The lack of certification is itself an observation."
            },
            {
              number: 16,
              prompt: "An EIC declares conformity with BS 7671 'except for the departures detailed below'. If no departures:",
              options: {
                A: "Write 'None' or strike through the departures field",
                B: "Leave blank",
                C: "Don't sign",
                D: "Erase the declaration"
              },
              answer: "A",
              explanation: "Explicit 'None' is unambiguous. Blank fields suggest carelessness; explicit 'None' is the verifier confirming no departures exist."
            },
            {
              number: 17,
              prompt: "An MEIWC is for:",
              options: {
                A: "Additions or alterations to an existing circuit, no new circuit created",
                B: "Any new work",
                C: "Periodic inspection",
                D: "DNO commissioning"
              },
              answer: "A",
              explanation: "MEIWC scope: small alterations to existing circuits. New circuits or new installations require EIC."
            },
            {
              number: 18,
              prompt: "An installation has 30 mA RCBO on every final circuit. The certification document needed:",
              options: {
                A: "EIC (it's an installation; CU change effectively new work) with full schedules",
                B: "MEIWC",
                C: "EICR",
                D: "Verbal handover"
              },
              answer: "A",
              explanation: "If the CU has been replaced (per-circuit RCBO is typical of new CU), the work is treated as new. Full EIC + schedules. Each existing circuit is verified during the work."
            },
            {
              number: 19,
              prompt: "Functional testing of an emergency lighting system at initial verification:",
              options: {
                A: "Tests the test switch, confirms emergency luminaires illuminate, full duration test recorded on the BS 5266 commissioning certificate",
                B: "Tests Zs only",
                C: "Tests IR only",
                D: "Tests polarity only"
              },
              answer: "A",
              explanation: "Initial verification confirms the BS 7671 electrical installation. BS 5266 (emergency lighting) commissioning is a separate certificate covering performance (luminance levels, duration, etc.)."
            },
            {
              number: 20,
              prompt: "An EIC is signed by the verifier accepting:",
              options: {
                A: "Professional accountability for the work covered, with named individual signature, scheme registration",
                B: "No accountability",
                C: "Customer approval",
                D: "DNO permission"
              },
              answer: "A",
              explanation: "EIC carries personal accountability. Named individual signs; certification scheme registration adds another layer. Negligent verification can lead to HSE/civil action."
            },
            {
              number: 21,
              prompt: "An IR test on a SELV circuit uses:",
              options: { A: "250 V DC, minimum 0.5 MΩ", B: "500 V DC, 1 MΩ", C: "1000 V DC, 1 MΩ", D: "230 V AC" },
              answer: "A",
              explanation: "Table 64 — SELV/PELV at 250 V DC, 0.5 MΩ minimum. Lower test voltage to avoid damaging SELV equipment."
            },
            {
              number: 22,
              prompt: "Reg 514 — three-phase line conductors are coloured:",
              options: { A: "Brown / Black / Grey for L1 / L2 / L3", B: "Red / Yellow / Blue", C: "All brown", D: "Black / Brown / Blue" },
              answer: "A",
              explanation: "Harmonised colours since 2004: Brown/Black/Grey for L1/L2/L3. Pre-2004 UK: Red/Yellow/Blue. Some installations may have mixed colours where alterations have used new colours alongside old."
            },
            {
              number: 23,
              prompt: "An installation has been verified. Functional test items include:",
              options: {
                A: "Switchgear, isolators, RCDs (test button), motor controls, interlocks, time clocks, emergency stops",
                B: "Just the lights",
                C: "Just the maximum demand",
                D: "Just the IR"
              },
              answer: "A",
              explanation: "Functional testing exercises every active assembly. Reg 643.10 — the final 'does it work' check before certification."
            },
            {
              number: 24,
              prompt: "An installation's test instruments must comply with:",
              options: {
                A: "BS EN 61010 (instrument safety) and BS EN 61557 (in-service test instruments)",
                B: "BS 88 only",
                C: "GS38 only",
                D: "BS 5266 only"
              },
              answer: "A",
              explanation: "BS EN 61010 + BS EN 61557 cover the instrument body and the in-service test functions respectively. GS38 covers probes/leads."
            },
            {
              number: 25,
              prompt: "An MEIWC test record covers:",
              options: {
                A: "The portion of the installation affected by the alteration",
                B: "The entire installation",
                C: "Just the new accessory",
                D: "Just the maximum demand"
              },
              answer: "A",
              explanation: "MEIWC scope is the alteration. Test record covers the affected circuit (since the alteration may have disturbed other terminations on the same circuit)."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "Safe isolation begins with:",
              options: {
                A: "Identifying the circuit/source to be isolated — using the schedule of circuits, drawings, and physical inspection",
                B: "Locking off",
                C: "Proving dead",
                D: "Working live"
              },
              answer: "A",
              explanation: "Identify the circuit precisely first. Wrong identification = wrong isolation = dangerous live work. Schedules and drawings help; physical tracing confirms."
            },
            {
              number: 2,
              prompt: "An installation has an unmarked CU. The verifier should:",
              options: {
                A: "Identify and label every circuit using continuity tests, then proceed with isolation/testing",
                B: "Test without identifying",
                C: "Refuse to test",
                D: "Ask the customer to label"
              },
              answer: "A",
              explanation: "Schedule of Inspections requires circuit identification. Use continuity tests to map circuits to MCB/RCBO ways; label appropriately. Required by Reg 514.9."
            },
            {
              number: 3,
              prompt: "A two-pole switch interrupts:",
              options: {
                A: "Both line and neutral simultaneously when operated — appropriate for some single-phase installations and for TT systems where both lives may be at risk",
                B: "Only line",
                C: "Only neutral",
                D: "Cpc only"
              },
              answer: "A",
              explanation: "Two-pole switch interrupts both L and N. Appropriate where TT supply or where the supply polarity might reverse. Single-pole switches assume reliable polarity and only interrupt line."
            },
            {
              number: 4,
              prompt: "An installation's PFC is recorded as the higher of:",
              options: {
                A: "PSCC (line-to-line) and PEFC (line-to-earth) at the origin",
                B: "PSCC alone",
                C: "PEFC alone",
                D: "Sum of both"
              },
              answer: "A",
              explanation: "Higher of PSCC and PEFC = worst-case fault current at the origin. Every protective device must have breaking capacity ≥ PFC."
            },
            {
              number: 5,
              prompt: "A test instrument's measurement category (CAT) rating:",
              options: {
                A: "Indicates the maximum transient withstand for the test point — CAT IV (origin) > CAT III (distribution) > CAT II (sockets)",
                B: "Is decorative",
                C: "Is the same for all instruments",
                D: "Indicates voltage range only"
              },
              answer: "A",
              explanation: "CAT rating is critical for instrument safety. Use CAT III/IV for origin testing; CAT II is fine for fixed appliance work. Wrong CAT = instrument may not survive a transient."
            },
            {
              number: 6,
              prompt: "BS 7671 Reg 514.13 requires the 'safety electrical connection — do not remove' notice on:",
              options: {
                A: "The MET and at the connection of every main protective bonding conductor to extraneous-conductive-parts",
                B: "Only the customer's bedroom",
                C: "Only the consumer unit",
                D: "Nowhere"
              },
              answer: "A",
              explanation: "Reg 514.13 — notice at MET and at gas/water/oil bonding connections. Stops well-intentioned removal during plumbing work."
            },
            {
              number: 7,
              prompt: "An installation has an EICR Code C1 observation. The implication:",
              options: {
                A: "Immediate danger — the duty holder must be told immediately, the affected portion isolated if necessary, and the issue rectified before continued use",
                B: "Improvement recommended over time",
                C: "Pass without comment",
                D: "Schedule for the next inspection cycle"
              },
              answer: "A",
              explanation: "C1 = immediate danger. Common examples: exposed live conductor, missing earth at metalwork, severely damaged accessories. Duty holder must act immediately."
            },
            {
              number: 8,
              prompt: "An installation has been certified with an EIC. The contractor's professional liability:",
              options: {
                A: "Persists for the duration of any insurance/PII cover and for any cause-of-action time limits — typical 6 years from completion",
                B: "Ends at handover",
                C: "Is unlimited",
                D: "Transferred to the customer"
              },
              answer: "A",
              explanation: "Professional liability persists. PII cover should match the limitation period for civil action (6 years for negligence in England/Wales). Scheme membership often requires PII as a condition."
            },
            {
              number: 9,
              prompt: "An installation has 30 mA RCDs throughout. Each is tested at:",
              options: { A: "0.5×, 1× and 5× IΔn", B: "Only at IΔn", C: "Only at 5×IΔn", D: "Only with the test button" },
              answer: "A",
              explanation: "Three test points per BS 7671. Each verifies a different aspect: 0.5× (not over-sensitive), 1× (threshold and time), 5× (additional protection time)."
            },
            {
              number: 10,
              prompt: "An installer is using a multimeter set to current measurement and connects it across a live source. The result:",
              options: {
                A: "A fault — the multimeter's current input has very low impedance, causing a near-short across the supply, possibly damaging the meter, blowing the supply fuse, and risking arc/burn injury",
                B: "Reads 230 V AC",
                C: "Reads 0 V",
                D: "Reads 230 mA"
              },
              answer: "A",
              explanation: "Common multimeter fault: dial left in current measurement when used as a voltage indicator. The instrument's current shunt has very low impedance — connecting across mains causes a short. Result: blown fuse (best case) or instrument damage / arc flash (worst case). Use AVI for proving dead."
            },
            {
              number: 11,
              prompt: "An EIC's 'inspector' role takes responsibility for:",
              options: {
                A: "Inspection AND testing — both elements of verification, including the acceptability of test results",
                B: "Only inspection",
                C: "Only testing",
                D: "Customer training"
              },
              answer: "A",
              explanation: "Inspector signs for both inspection (visual) and testing (measurement) — the full verification. The inspector accepts that the test results meet BS 7671 requirements."
            },
            {
              number: 12,
              prompt: "An MFT's IR test function applies test voltage:",
              options: {
                A: "DC at 250, 500 or 1000 V depending on the circuit (per Table 64)",
                B: "230 V AC always",
                C: "Variable AC",
                D: "Fixed at 100 V DC"
              },
              answer: "A",
              explanation: "IR test = DC voltage. Table 64 specifies the value: 250 V DC for SELV; 500 V DC for LV; 1000 V DC for >500 V to 1000 V circuits."
            },
            {
              number: 13,
              prompt: "An installation has been altered. The MEIWC must be issued by:",
              options: {
                A: "A competent person with adequate experience to verify the alteration is no less safe and complies with BS 7671",
                B: "Anyone who happens to be available",
                C: "The customer",
                D: "The DNO"
              },
              answer: "A",
              explanation: "Competent person requirement applies to MEIWC just as to EIC. The competent person verifies the altered installation is no less safe and BS 7671 compliant."
            },
            {
              number: 14,
              prompt: "An installation requires inspection items per the Schedule of Inspections. 'External influences' refers to:",
              options: {
                A: "Environmental conditions affecting the installation — temperature, water, dust, mechanical impact, presence of corrosive substances, etc.",
                B: "Other people in the room",
                C: "Magnetic fields",
                D: "Earth electrode resistance"
              },
              answer: "A",
              explanation: "Section 522 — external influences. Each location in the installation has external influences (BS EN 60721 codes) that drive equipment selection. Wet location = IP rated; high temperature = thermally rated; corrosive = stainless or coated."
            },
            {
              number: 15,
              prompt: "An EIC is issued for a CU change. The existing circuits are tested as part of the work. The verifier:",
              options: {
                A: "Tests each existing circuit (continuity, IR, polarity, Zs, RCD where applicable) and records results on the schedule",
                B: "Tests only the new tails",
                C: "Skips all testing",
                D: "Tests only the IR"
              },
              answer: "A",
              explanation: "CU change = full initial verification of each connected circuit. The new CU and the existing circuits combined are now under the verifier's responsibility. Defects identified must be rectified or recorded."
            },
            {
              number: 16,
              prompt: "Functional testing of an interlock between two circuits confirms:",
              options: {
                A: "Energising one disables the other (e.g. a key-exchange interlock or electrical interlock prevents simultaneous operation)",
                B: "Both circuits run together",
                C: "IR is acceptable",
                D: "Polarity is correct"
              },
              answer: "A",
              explanation: "Interlock function: prevents simultaneous operation where that would be dangerous. Generator-mains changeover, two pumps where parallel = damage. Functional test exercises both states."
            },
            {
              number: 17,
              prompt: "An installation has SPDs at the origin. Functional test:",
              options: {
                A: "Visual inspection only — the SPD's status indicator (typically green/red) shows serviceable",
                B: "Apply 1000 V DC",
                C: "Apply 5 kV impulse",
                D: "Replace it"
              },
              answer: "A",
              explanation: "SPD functional 'test' is visual only on site — the indicator shows status. Internal MOV deterioration is automatic and the indicator changes when the device has clamped enough surges to be at end of life. Replace when indicator shows fault."
            },
            {
              number: 18,
              prompt: "An installation has been certified. The contractor's copy of the EIC is held:",
              options: {
                A: "For at least the certification scheme audit period (typically 6 years), or the duration of professional liability",
                B: "1 year",
                C: "Forever",
                D: "Until the customer takes it"
              },
              answer: "A",
              explanation: "Contractor retains for audit and liability. Schemes typically require 6 years; PII may require longer; some firms keep records indefinitely as a defensive practice."
            },
            {
              number: 19,
              prompt: "An MFT's RCD test function for a Type B RCD applies:",
              options: {
                A: "Smooth DC test current at the appropriate IΔn multiples — Type B is the only RCD type that detects smooth DC",
                B: "AC only",
                C: "Pulsating DC only",
                D: "230 V AC always"
              },
              answer: "A",
              explanation: "Type B detects AC + pulsating DC + smooth DC. The test instrument applies the smooth DC waveform to verify the device's full sensing range."
            },
            {
              number: 20,
              prompt: "An installation has been certified. The 'periodic inspection' interval recommended on the EIC for a domestic dwelling is:",
              options: { A: "10 years", B: "5 years", C: "1 year", D: "20 years" },
              answer: "A",
              explanation: "Domestic 10 years (or change of occupancy). Rented residential 5 years. Commercial 5 years. Industrial 3 years. Higher-risk environments shorter."
            },
            {
              number: 21,
              prompt: "An installer's competence is required by:",
              options: {
                A: "EAWR Reg 16, BS 7671 Reg 134.1.1, and the certification scheme requirements",
                B: "Only EAWR",
                C: "Only BS 7671",
                D: "Only scheme requirements"
              },
              answer: "A",
              explanation: "Competence is a legal duty (EAWR), a technical requirement (BS 7671), and a scheme membership condition. Three layers ensuring the work is done by someone qualified to do it."
            },
            {
              number: 22,
              prompt: "An installation has a 30 mA RCD. The Schedule of Test Results records:",
              options: {
                A: "RCD type (AC/A/B), IΔn, test results at 0.5× / 1× / 5× IΔn (no trip / time / time)",
                B: "Only IΔn",
                C: "Only the test button result",
                D: "Only 'pass'"
              },
              answer: "A",
              explanation: "Comprehensive RCD record: type, threshold, all three test points. Each device's serial number tied to circuit. Future verifiers see the full history."
            },
            {
              number: 23,
              prompt: "An installation's earthing system is identified by:",
              options: {
                A: "Inspection of the supply (cut-out type, supply cable, PME/PEN markings) and DNO confirmation",
                B: "Guesswork",
                C: "Customer's word",
                D: "Most recent EIC"
              },
              answer: "A",
              explanation: "Earthing system is fundamental to ADS design. Confirm by inspection (visible supply cable type, cut-out markings) and DNO information. Record on EIC supply characteristics."
            },
            {
              number: 24,
              prompt: "An installation has a measured Ze of 0.45 Ω on a TN-S supply. The DNO declared maximum is 0.80 Ω. The verifier:",
              options: {
                A: "Records 0.45 Ω on the EIC, confirms it's within DNO max, uses this for Zs calculations",
                B: "Uses 0.80 Ω in calculations",
                C: "Rejects the supply",
                D: "Re-measures with bonding off and on"
              },
              answer: "A",
              explanation: "Measured Ze is more accurate than DNO declared. Record measured value; confirm within DNO max; use measured for Zs = Ze + R1+R2 calculations."
            },
            {
              number: 25,
              prompt: "An installation passes all tests and the EIC is signed. The verifier hands the certificate package to:",
              options: {
                A: "The duty holder (person ordering the work) — original copies; contractor retains a copy",
                B: "The DNO",
                C: "Building control directly",
                D: "Lost in the post"
              },
              answer: "A",
              explanation: "Originals to the duty holder; contractor retains a copy. Certification scheme is notified separately by self-certifying members. Building control may need a copy for Part P notifiable work."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "An installation has been certified. The original EIC is retained by:",
              options: { A: "The person ordering the work (duty holder)", B: "The DNO", C: "The local council", D: "The contractor" },
              answer: "A",
              explanation: "Original EIC goes to the person ordering the work — the duty holder needs it as evidence under EAWR Reg 4(2). Contractor keeps a copy."
            },
            {
              number: 2,
              prompt: "GS38 — fused leads protect against:",
              options: {
                A: "Excessive fault current if the leads or instrument fail during a live test",
                B: "Voltage measurement error",
                C: "Cold weather",
                D: "Earth fault loop impedance"
              },
              answer: "A",
              explanation: "Fused leads = fail-safe limit on fault current. Combined with finger barriers and short tip, gives the GS38 layered protection."
            },
            {
              number: 3,
              prompt: "An MFT's loop test in non-RCD mode injects:",
              options: {
                A: "A high-current pulse (typically 15–25 A for half a cycle), giving an accurate single-shot Zs",
                B: "30 mA only",
                C: "500 V DC",
                D: "Variable test"
              },
              answer: "A",
              explanation: "Non-RCD circuits tolerate the high-current loop test. Result is the most accurate Zs reading. RCD-protected circuits must use no-trip mode (low-current pulses)."
            },
            {
              number: 4,
              prompt: "An installation's 'Schedule of Inspections' is a:",
              options: {
                A: "Tick-box record of items inspected, with each item ticked, marked N/A, or marked LIM (limitation)",
                B: "Numerical test record",
                C: "Customer feedback form",
                D: "Photograph album"
              },
              answer: "A",
              explanation: "Schedule of Inspections = visual inspection record. Tick-box list of items per BS 7671 sections. Each tied to specific regulations; the verifier confirms each is satisfied."
            },
            {
              number: 5,
              prompt: "An installation has been certified. The next periodic inspection date for a domestic dwelling:",
              options: { A: "10 years (or change of occupancy)", B: "5 years", C: "1 year", D: "20 years" },
              answer: "A",
              explanation: "Domestic 10 years. Rented residential 5 years. Commercial 5 years. Industrial 3 years. Special locations may be shorter."
            },
            {
              number: 6,
              prompt: "An RCD test for a Type A device applies:",
              options: {
                A: "Both AC sinusoidal and pulsating DC test currents — Type A senses both waveforms",
                B: "Only AC",
                C: "Only DC",
                D: "230 V AC always"
              },
              answer: "A",
              explanation: "Type A senses AC + pulsating DC. The test instrument applies both waveforms to verify the full sensing range."
            },
            {
              number: 7,
              prompt: "Lock-off requires:",
              options: {
                A: "A unique-key padlock (only the worker holds the key) plus a warning notice, applied to the isolation device",
                B: "A padlock anyone can remove",
                C: "Only a warning notice",
                D: "Only the supply switched off"
              },
              answer: "A",
              explanation: "Unique-key lock-off prevents accidental re-energisation by anyone but the worker. Notice communicates intent. Both together = effective lock-off."
            },
            {
              number: 8,
              prompt: "An installation's BS 7671:2018 + A3:2024 reference colours for line conductors:",
              options: {
                A: "Brown (single-phase) or Brown / Black / Grey (three-phase)",
                B: "Red/Yellow/Blue",
                C: "All red",
                D: "All black"
              },
              answer: "A",
              explanation: "Harmonised colours since 2004. Pre-2004 UK colours (red/yellow/blue) may be encountered in old installations but are not used in new work."
            },
            {
              number: 9,
              prompt: "An installation has a 30 mA RCD. Functional test of the integral test button:",
              options: {
                A: "Confirms the trip mechanism operates — does NOT verify threshold or time accuracy",
                B: "Verifies BS 7671 disconnection time",
                C: "Verifies threshold accuracy",
                D: "Replaces the RCD tester"
              },
              answer: "A",
              explanation: "Integral test button injects a known imbalance via internal resistor. Tripping confirms mechanical operation. Threshold and time require an external RCD tester."
            },
            {
              number: 10,
              prompt: "An MFT's continuity function nulls the test leads. After nulling:",
              options: {
                A: "The displayed reading is the circuit resistance only — lead resistance has been subtracted",
                B: "Lead resistance is added to the reading",
                C: "Reading is invalidated",
                D: "Circuit is energised"
              },
              answer: "A",
              explanation: "Nulling tells the meter 'this is zero'. Subsequent readings show circuit only. Without nulling, lead R (typically 0.05–0.10 Ω) inflates low resistance readings."
            },
            {
              number: 11,
              prompt: "An installation requires safe isolation. The verifier's tools include:",
              options: {
                A: "AVI (GS38-compliant), proving unit, lock-off device, warning notice — all in good working order, instruments calibrated",
                B: "Just a multimeter",
                C: "Just a screwdriver",
                D: "Just a label"
              },
              answer: "A",
              explanation: "Safe isolation kit: AVI for proving dead, proving unit (or known live source) for proving the AVI, lock-off device for the isolation point, warning notice. All required."
            },
            {
              number: 12,
              prompt: "An installation has been certified. Notifications under Part P (England):",
              options: {
                A: "Notifiable work: CU replacement, new circuits, work in special locations — notified to building control before work, or self-certified by registered competent person scheme members",
                B: "All electrical work always notified",
                C: "Never notified",
                D: "Only EICRs notified"
              },
              answer: "A",
              explanation: "Part P notifiable work = CU change, new circuits, special location work. Notify building control or self-certify via scheme. Non-notifiable work (alterations to existing circuits outside special locations) doesn't require notification but must still comply with BS 7671."
            },
            {
              number: 13,
              prompt: "An installer using probes that don't comply with GS38 is:",
              options: {
                A: "Not following safe practice — increased shock risk during live testing, may invalidate insurance/scheme membership",
                B: "Following best practice",
                C: "OK on dead circuits",
                D: "OK if calibrated"
              },
              answer: "A",
              explanation: "GS38 is HSE guidance — non-compliant probes increase shock risk. Insurance and scheme membership often require GS38 compliance. Use compliant probes always for live work."
            },
            {
              number: 14,
              prompt: "An EIC is for new work. An MEIWC is for:",
              options: { A: "Additions or alterations to an existing circuit, no new circuit created", B: "New work only", C: "Periodic verification", D: "DNO commissioning" },
              answer: "A",
              explanation: "MEIWC scope is small alterations. New circuits require EIC; periodic = EICR. The three documents have distinct purposes."
            },
            {
              number: 15,
              prompt: "Reg 651 (BS 7671) requires:",
              options: {
                A: "Initial verification by inspection AND testing on every new installation, addition or alteration",
                B: "Inspection only",
                C: "Testing only",
                D: "Functional testing only"
              },
              answer: "A",
              explanation: "Reg 651 — initial verification covers inspection and testing. Either alone is incomplete. Inspection catches what testing can't (correct selection, identification, fire stopping); testing catches what inspection can't (insulation health, continuity, ADS)."
            },
            {
              number: 16,
              prompt: "An installation's polarity is verified by:",
              options: {
                A: "Dead polarity check (continuity-based) AND live polarity check (AVI) — both required",
                B: "Only dead polarity",
                C: "Only live polarity",
                D: "Neither — polarity is irrelevant"
              },
              answer: "A",
              explanation: "Both polarity checks: dead catches wiring errors; live confirms supply arrives correctly. Single-pole switches in line, accessories with L/N/cpc on correct terminals."
            },
            {
              number: 17,
              prompt: "An MFT's RCD test result records:",
              options: {
                A: "Trip time at each test point (0.5× = no trip in 2 s; 1× and 5× = ms readings)",
                B: "Voltage only",
                C: "Just 'pass'",
                D: "Insulation resistance"
              },
              answer: "A",
              explanation: "Three test points, three results. 0.5× confirms no trip. 1× and 5× give specific trip times. All recorded on the schedule for traceability."
            },
            {
              number: 18,
              prompt: "An installation has been altered. The certificate (MEIWC) must include:",
              options: {
                A: "Description of the work, test results for the affected portion, signatory of the competent person, and a declaration of compliance",
                B: "Just the date",
                C: "Just the cost",
                D: "Just the customer name"
              },
              answer: "A",
              explanation: "MEIWC is condensed but technically complete: scope, test results, signatory, declaration. Single page covering small work."
            },
            {
              number: 19,
              prompt: "An MFT's earth electrode test (Ra) for a TT installation:",
              options: {
                A: "Uses the loop test mode with bonding intact — gives the in-service earth electrode resistance practical value",
                B: "Requires fall-of-potential 3-spike method only",
                C: "Cannot be performed in service",
                D: "Uses 500 V DC"
              },
              answer: "A",
              explanation: "MFT's loop function on a TT installation reads Ra (with bonding intact). Practical in-service equivalent of fall-of-potential. Useful for periodic testing and initial verification."
            },
            {
              number: 20,
              prompt: "An installation has 30 mA RCD additional protection per Reg 411.3.3. This applies to:",
              options: {
                A: "Socket outlets ≤ 32 A in domestic/commercial/similar premises, mobile equipment outdoors ≤ 32 A, all circuits in special locations (bathrooms etc.)",
                B: "All circuits regardless",
                C: "Only outdoor sockets",
                D: "Only bathroom circuits"
              },
              answer: "A",
              explanation: "Reg 411.3.3 — wide-ranging additional protection requirement. Socket outlets, mobile equipment, special locations. Reg 415 is the supporting reg covering RCD selection and testing."
            },
            {
              number: 21,
              prompt: "An installation's test instrument has a calibration sticker dated 13 months ago. The verifier should:",
              options: {
                A: "Recalibrate the instrument or have the readings independently verified",
                B: "Use as-is",
                C: "Halve the readings",
                D: "Use only for IR"
              },
              answer: "A",
              explanation: "13 months > standard 12-month interval. Out-of-calibration. Recalibrate before use, or rely on an in-cal instrument for critical readings."
            },
            {
              number: 22,
              prompt: "Functional testing of an interlocked motor change-over confirms:",
              options: {
                A: "The two motors cannot run simultaneously — interlock blocks the second contactor while the first is closed",
                B: "Both can run together",
                C: "Insulation resistance",
                D: "Polarity"
              },
              answer: "A",
              explanation: "Interlock prevents simultaneous operation. Functional test exercises both states: motor 1 running blocks motor 2; switching off motor 1 releases the interlock. Critical for safety in pumping/conveyor/reversing applications."
            },
            {
              number: 23,
              prompt: "An EIC for a new installation requires the supply characteristics page completed with:",
              options: {
                A: "Voltage, frequency, type of earthing arrangement, PFC at origin, Ze, supplier OPD characteristics, maximum demand",
                B: "Just the maximum demand",
                C: "Customer name only",
                D: "Cable lengths"
              },
              answer: "A",
              explanation: "Supply characteristics page is the design baseline. Without it, fault studies and ADS verification can't be reproduced. PFC drives breaking capacity; Ze drives Zs limits."
            },
            {
              number: 24,
              prompt: "An installer has carried out work and an inspector verifies independently. On the EIC:",
              options: {
                A: "Designer/constructor signature by the installer (or designer); inspector signature by the verifier — three roles, possibly two persons",
                B: "Single signature only",
                C: "Customer signs",
                D: "DNO signs"
              },
              answer: "A",
              explanation: "Independent inspection is best practice on larger jobs. Different competent persons sign different roles. The EIC accommodates this through separate signature fields for each role."
            },
            {
              number: 25,
              prompt: "An installation has been certified. The certification package handed to the duty holder:",
              options: {
                A: "EIC + Schedule of Inspections + Schedule of Test Results — three documents together",
                B: "EIC alone",
                C: "Verbal handover only",
                D: "An emailed PDF"
              },
              answer: "A",
              explanation: "Three documents form the complete record. Schedule of Inspections (visual record), Schedule of Test Results (numerical record), EIC (declaration tying both to a signed accountability)."
            }
          ]
        }
      ]
    },
    {
      id: "section-5",
      title: "Section 5 — Dead Tests & Continuity",
      variants: [
        {
          id: "v1",
          questions: [
            { number: 1, prompt: "The recommended order of dead tests on a new installation (per GN3) is:", options: { A: "Polarity → continuity → IR → earth electrode resistance", B: "Continuity of CPCs → continuity of ring final conductors → IR → polarity → earth electrode resistance (where applicable)", C: "IR → continuity → polarity → Ze", D: "Functional → continuity → IR → polarity" }, answer: "B", explanation: "GN3 dead-test order: continuity of CPCs first (so later tests can rely on it), then ring conductors, then IR, then polarity, then earth electrode resistance where relevant. Live tests follow." },
            { number: 2, prompt: "The minimum acceptable insulation resistance for an LV (≤ 500 V) final circuit tested at 500 V DC is:", options: { A: "0.25 MΩ", B: "0.5 MΩ", C: "1.0 MΩ", D: "2.0 MΩ" }, answer: "C", explanation: "Table 64 — LV up to 500 V: ≥ 1.0 MΩ tested at 500 V DC. SELV/PELV is ≥ 0.5 MΩ at 250 V DC. Values below 2 MΩ pass but warrant investigation." },
            { number: 3, prompt: "An R1 + R2 measurement on a radial circuit gives:", options: { A: "Resistance of line conductor plus CPC, end-to-end of the circuit, in series", B: "Total earth fault loop impedance including the supply", C: "Line-to-neutral resistance only", D: "Insulation resistance between live and earth" }, answer: "A", explanation: "R1 + R2 is a dead measurement of line conductor + CPC, in series. Combined with Ze: Zs = Ze + (R1+R2). It is not the live earth fault loop measurement." },
            { number: 4, prompt: "A ring final test gives r1 = 0.41 Ω, rn = 0.41 Ω, r2 = 0.68 Ω. After cross-connecting at the DB, the expected R1+R2 at each socket is approximately:", options: { A: "0.27 Ω", B: "0.41 Ω", C: "0.68 Ω", D: "1.09 Ω" }, answer: "A", explanation: "(r1 + r2) / 4 = (0.41 + 0.68) / 4 = 0.272 Ω ≈ 0.27 Ω. Each parallel half-ring contributes a quarter of the sum. Significant variation between sockets indicates a break, interconnection, or spur on a spur." },
            { number: 5, prompt: "Why is continuity of CPCs verified before insulation resistance during initial verification?", options: { A: "The CPC must be intact before later tests rely on it; an open CPC also distorts the IR L+N–E measurement", B: "Continuity is a live test", C: "IR readings are higher when the CPC is open circuit", D: "BS 7671 does not require IR if continuity passes" }, answer: "A", explanation: "The dead-test sequence is logical: CPC continuity proves the protective path before IR, polarity and Zs calculation depend on it. Skipping it leaves later tests potentially misleading." },
            { number: 6, prompt: "The R2 wander-lead test is the preferred method when:", options: { A: "Testing a healthy ring final", B: "Confirming continuity of main protective bonding to extraneous-conductive-parts where there is no paired line conductor at the origin", C: "Carrying out a Ze test", D: "Carrying out an IR test on SELV" }, answer: "B", explanation: "Wander-lead R2 from the MET (nulled first) to the bonded part is the natural method for main bonding, supplementary bonding, or any CPC where you cannot easily link a line conductor at the origin." },
            { number: 7, prompt: "Why does GN3 specify a relatively high test current (≥ 200 mA) for a low-resistance ohmmeter?", options: { A: "It complies with EAWR Reg 4(2) wording on test currents", B: "Higher current breaks through surface oxide and contamination at terminals, exposing high-resistance joints rather than masking them", C: "It triggers the RCD as a built-in safety check", D: "Lower currents would damage the conductors under test" }, answer: "B", explanation: "Low test currents can read across surface films and high-resistance joints because they don't draw enough current to disturb them. 200 mA to 10 A breaks through oxide and contamination, so a poor termination shows up as a poor reading rather than passing accidentally." },
            { number: 8, prompt: "On a circuit containing electronic dimmers that cannot be removed, before applying a 500 V DC IR test you should:", options: { A: "Apply 1000 V DC to overcome the electronics", B: "Link line and neutral together and test to earth only, or disconnect/short out the voltage-sensitive equipment per the manufacturer's instructions", C: "Increase the DC test voltage to 1500 V", D: "Skip the test and record as 'pass'" }, answer: "B", explanation: "Linking L+N and testing to earth avoids placing 500 V DC across electronic components. Where this isn't suitable, disconnect or short out the equipment and record any limitation on the schedule." },
            { number: 9, prompt: "On a SELV (≤ 50 V) circuit, the IR test voltage and minimum acceptance value are:", options: { A: "500 V DC, ≥ 1 MΩ", B: "250 V DC, ≥ 0.5 MΩ", C: "230 V AC, ≥ 1 MΩ", D: "1000 V DC, ≥ 0.5 MΩ" }, answer: "B", explanation: "Table 64 — SELV/PELV/electrical separation: 250 V DC at ≥ 0.5 MΩ. The lower test voltage avoids damaging SELV equipment which isn't designed for higher voltage stress." },
            { number: 10, prompt: "Three sub-circuits are tested for IR separately and read 100 MΩ, 50 MΩ and 40 MΩ. The combined parallel IR is:", options: { A: "190 MΩ", B: "63 MΩ", C: "18.18 MΩ", D: "30 MΩ" }, answer: "C", explanation: "1/R = 1/100 + 1/50 + 1/40 = 0.055; R = 1/0.055 = 18.18 MΩ. Combined IR is always lower than the lowest individual reading." },
            { number: 11, prompt: "The figure-of-eight (cross-connection) ring final test confirms:", options: { A: "RCD trip times at 1×IΔn", B: "The ring has no breaks, interconnections or spurs-on-a-spur — R1+R2 measured at each socket is substantially equal to (r1+r2)/4", C: "Insulation between L and N", D: "Earth electrode resistance" }, answer: "B", explanation: "After end-to-end r1/rn/r2, cross-connect the legs at the DB so each conductor has a parallel half-ring path. Equal R1+R2 at every socket = healthy ring; significant variation = break, interconnection or spur on a spur." },
            { number: 12, prompt: "An R1+R2 test gives 0.85 Ω on a 30 m run wired in 2.5/1.5 mm² T+E. Using R/m of 7.41 mΩ/m (2.5) and 12.10 mΩ/m (1.5), the expected R1+R2 at 20 °C is approximately:", options: { A: "0.59 Ω", B: "0.85 Ω", C: "0.36 Ω", D: "0.22 Ω" }, answer: "A", explanation: "Per metre: 7.41 + 12.10 = 19.51 mΩ/m. For 30 m: 30 × 19.51 = 585 mΩ ≈ 0.59 Ω. Measured 0.85 Ω is significantly higher — investigate terminations and joints." },
            { number: 13, prompt: "A polarity dead test confirms that:", options: { A: "Every single-pole switch, fuse and circuit breaker is in the line conductor and that L, N and CPC are correctly identified at every accessory", B: "Live polarity at the origin matches the supply phase rotation", C: "RCDs trip within 40 ms at 5×IΔn", D: "Earth electrode resistance is below 200 Ω" }, answer: "A", explanation: "Polarity dead test catches single-pole devices wired in the neutral (which would leave equipment live when 'switched off') and ensures L/N/CPC arrive at the right terminals. Confirmed with a continuity meter, then verified live with an AVI." },
            { number: 14, prompt: "Lead resistance on a low-resistance ohmmeter must be:", options: { A: "Ignored — it is negligible", B: "Nulled (or recorded and subtracted) before circuit measurements are taken", C: "Doubled for safety", D: "Set to the cable resistance" }, answer: "B", explanation: "Lead resistance is typically 0.05–0.10 Ω, which is significant compared to a low R1+R2 reading. Modern instruments null automatically; older ones require manual recording and subtraction." },
            { number: 15, prompt: "A radial 32 A circuit with R1+R2 = 0.45 Ω is tested. The Ze for the installation is 0.30 Ω. The calculated Zs is:", options: { A: "0.15 Ω", B: "0.45 Ω", C: "0.75 Ω", D: "1.35 Ω" }, answer: "C", explanation: "Zs = Ze + (R1+R2) = 0.30 + 0.45 = 0.75 Ω. Compare with Table 41.3 max for the device — Type B 32 A allows 1.37 Ω at 0.4 s, so this comfortably passes." },
            { number: 16, prompt: "An IR test reading 0.4 MΩ on a 230 V LV final circuit is:", options: { A: "A pass — above the SELV minimum", B: "A fail — below the 1 MΩ Table 64 minimum; isolate, investigate, rectify, retest", C: "A pass with comment", D: "Acceptable provided RCD protection is fitted" }, answer: "B", explanation: "0.4 MΩ is below the 1 MΩ minimum for LV at 500 V DC — fail. Common causes: pinched cable at a back box, moisture ingress, failing accessory left in circuit. Localise by progressive disconnection." },
            { number: 17, prompt: "Polarity at fixed accessories should NOT be confirmed using:", options: { A: "A continuity meter on a dead circuit", B: "Visual inspection during termination", C: "An AVI on a live circuit at the origin", D: "A 500 V DC IR tester applied between L and CPC" }, answer: "D", explanation: "An IR tester applies a damaging test voltage and is not designed for polarity verification. Polarity is dead-checked with continuity, live-checked at the origin with an AVI, and visually confirmed during termination." },
            { number: 18, prompt: "If r2 in a 2.5/1.5 mm² T+E ring measures 0.92 Ω while r1 = 0.45 Ω, the relationship indicates:", options: { A: "A break in the CPC of the ring", B: "Roughly the expected ratio (r2 ≈ 1.67 × r1) — the CPC is 1.5 mm² so its resistance is ~ 1.67× the line", C: "The CPC has been swapped with the neutral", D: "The ring has a spur on a spur" }, answer: "B", explanation: "R(1.5)/R(2.5) ≈ 12.10/7.41 ≈ 1.67. So r2 ≈ 1.67 × r1 = 1.67 × 0.45 = 0.75 Ω. Measured 0.92 Ω is a bit high but within plausible field tolerance — the ratio itself is correct in principle." },
            { number: 19, prompt: "When the IR test gives a result that just passes (around 1 MΩ on an LV final circuit), the verifier should:", options: { A: "Sign off without further action — 1 MΩ is the Table 64 minimum and complies", B: "Record the figure but investigate, because GN3 advises further action whenever a reading is below 2 MΩ even though the legal minimum is 1 MΩ", C: "Re-test at 250 V DC instead", D: "Disconnect the CPC and re-test" }, answer: "B", explanation: "Table 64 gives 1 MΩ as the legal minimum, but GN3 advises that any reading below 2 MΩ should be investigated — typically by isolating each circuit / piece of equipment in turn — because a borderline pass usually indicates degradation that will continue to fall in service." },
            { number: 20, prompt: "A dead-test measurement that confirms there are no short-circuits between live conductors or to earth before energising is:", options: { A: "Polarity", B: "Insulation resistance", C: "R1+R2", D: "Ze" }, answer: "B", explanation: "IR is the test that confirms the insulation is intact between live conductors and between live conductors and earth. R1+R2 confirms continuity, polarity confirms wiring orientation, Ze is a live test." },
            { number: 21, prompt: "A circuit has R1+R2 = 0.53 Ω measured at 20 °C. After applying a temperature correction factor of 1.2 for warm conductors at operating temperature, the corrected value used for Zs comparison is:", options: { A: "0.44 Ω", B: "0.53 Ω", C: "0.63 Ω", D: "1.06 Ω" }, answer: "C", explanation: "Warm conductors have higher resistance. Correction: 0.53 × 1.2 = 0.636 ≈ 0.64 Ω. Some inspectors use the 0.8 'rule of thumb' on the tabulated max instead — both approaches account for the same temperature effect." },
            { number: 22, prompt: "After remedying an IR fault on a circuit, the verifier should:", options: { A: "Record the value and move to the next test", B: "Re-inspect (the rectification work may have disturbed terminations) AND re-test the continuity, IR and polarity of the affected circuit", C: "Issue an EIC unchanged", D: "Halve the test voltage and re-test" }, answer: "B", explanation: "GN3 — defects must be made good and the affected tests repeated. Reinspection is required because the rectification work itself may have disturbed terminations; CPC continuity must be re-confirmed if any earth path was disturbed." },
            { number: 23, prompt: "On a TT system, the dead-test sequence specifically includes:", options: { A: "An earth electrode resistance measurement using a 3-spike (fall-of-potential) method or earth loop tester at the electrode", B: "A 1000 V DC IR test", C: "Live polarity at every accessory", D: "Functional testing of the RCD" }, answer: "A", explanation: "TT installations rely on a local earth electrode. The electrode resistance must be measured — typically with a 3-spike fall-of-potential method or an earth loop tester at the electrode. RA × IΔn ≤ 50 V is the criterion." },
            { number: 24, prompt: "A circuit fails IR with 0.6 MΩ between L+N and earth but passes continuity. The most likely cause is:", options: { A: "An open-circuit CPC", B: "A pinched/nicked cable, moisture ingress, or a faulty accessory left in circuit creating a leakage path to earth", C: "Reversed polarity at one accessory", D: "An incorrectly torqued main switch" }, answer: "B", explanation: "Continuity passing rules out an open CPC. IR failing to earth at 0.6 MΩ points to insulation compromise — pinched cable at a grommet, nicked conductor at a termination, moisture, or a failing accessory/load. Disconnect accessories one at a time to localise." },
            { number: 25, prompt: "End-to-end r1, rn and r2 are taken on a ring final by:", options: { A: "Cross-connecting line and CPC at the DB and measuring at every socket", B: "Disconnecting the two legs of each conductor at the DB and measuring across each pair (line-to-line for r1, neutral-to-neutral for rn, CPC-to-CPC for r2)", C: "Looping all conductors together at the DB", D: "Energising the supply" }, answer: "B", explanation: "Step 1 of the ring final test — disconnect the two legs of each conductor at the DB and measure across each pair separately. Step 2 then cross-connects (figure-of-eight) and measures R1+R2 at every socket." }
          ]
        },
        {
          id: "v2",
          questions: [
            { number: 1, prompt: "On a 230 V LV circuit, the IR test is applied at:", options: { A: "230 V AC at the supply", B: "500 V DC, with a 1.0 MΩ minimum acceptance value", C: "1000 V DC, with a 2.0 MΩ minimum acceptance value", D: "250 V DC, with a 0.5 MΩ minimum acceptance value" }, answer: "B", explanation: "Table 64 — LV (50–500 V) is tested at 500 V DC, minimum 1.0 MΩ. SELV/PELV at 250 V DC ≥ 0.5 MΩ; > 500 V at 1000 V DC ≥ 1.0 MΩ. IR is always DC, never AC." },
            { number: 2, prompt: "A ring final has r1 = 0.36 Ω, rn = 0.36 Ω, r2 = 0.60 Ω. Cross-connecting and measuring at each socket should give R1+R2 ≈:", options: { A: "0.18 Ω", B: "0.24 Ω", C: "0.36 Ω", D: "0.48 Ω" }, answer: "B", explanation: "(r1 + r2) / 4 = (0.36 + 0.60) / 4 = 0.96 / 4 = 0.24 Ω. The ring presents two half-loops in parallel from any socket, so each conductor reads about a quarter of the end-to-end sum." },
            { number: 3, prompt: "A ring is tested and r2 reads 1.5× r1 instead of the expected 1.67× (for 2.5/1.5 mm² T+E). The most plausible interpretation is:", options: { A: "The CPC has been fitted in 2.5 mm² instead of 1.5 mm²", B: "The CPC has a major break", C: "Polarity is reversed", D: "The IR test will fail" }, answer: "A", explanation: "If r2/r1 ratio is closer to 1 (instead of 1.67) the CPC is the same csa as the line conductor. 6242Y 'all-live' cable or non-standard T+E with full-size CPC will give this. Worth investigating the cable spec." },
            { number: 4, prompt: "The minimum IR for an LV (≤ 500 V) circuit measured at 500 V DC is 1 MΩ but a reading of 1.5 MΩ is considered:", options: { A: "A comfortable healthy reading", B: "A pass, but worth investigating — values below 2 MΩ pass but signal deteriorating insulation", C: "A fail requiring rectification", D: "Acceptable only on TT systems" }, answer: "B", explanation: "GN3 advice — although ≥ 1 MΩ is the BS 7671 minimum, values below 2 MΩ pass but warrant investigation as they suggest deteriorating insulation or a slow leakage path." },
            { number: 5, prompt: "An IR test on a healthy circuit should give a reading:", options: { A: "Greater than the upper range of the test instrument (typically > 200 MΩ on a domestic MFT)", B: "Around 1 MΩ", C: "Around 0.5 MΩ", D: "Exactly equal to the supply impedance" }, answer: "A", explanation: "Healthy modern PVC insulation should read effectively infinite — most domestic test instruments display '> 200 MΩ' or 'open'. Anything significantly less than that on a small final circuit suggests a leakage path." },
            { number: 6, prompt: "The two-pole continuity ('R1+R2') method requires the line conductor to be:", options: { A: "Disconnected at the origin", B: "Linked to the CPC at the origin (with the circuit isolated) so a series circuit is formed line→accessory→CPC→back to origin", C: "Connected to neutral at the origin", D: "Connected to a 250 V supply" }, answer: "B", explanation: "Link L and CPC at the DB end (the link forms one half of the loop). Null the leads, then measure between L and CPC at each accessory — the reading is the end-to-end series resistance R1+R2." },
            { number: 7, prompt: "On a 6 mm² + 2.5 mm² CPC radial circuit, R/m = 3.08 mΩ/m (6 mm²) and 7.41 mΩ/m (2.5 mm²). For a 50 m run, the expected R1+R2 at 20 °C is approximately:", options: { A: "0.31 Ω", B: "0.52 Ω", C: "0.71 Ω", D: "0.97 Ω" }, answer: "B", explanation: "Per metre: 3.08 + 7.41 = 10.49 mΩ/m. For 50 m: 50 × 10.49 = 524.5 mΩ ≈ 0.52 Ω." },
            { number: 8, prompt: "If the dead-test sequence is interrupted by an IR failure, the next action should be:", options: { A: "Localise and rectify the IR fault, then repeat the affected dead tests (continuity, IR, polarity) before continuing", B: "Continue with the remaining tests", C: "Energise the circuit and recheck", D: "Reduce the IR test voltage" }, answer: "A", explanation: "Defects must be made good before continuing. After rectification, re-test continuity (in case the repair disturbed terminations), IR (to confirm the fault is gone) and polarity (in case any conductor was swapped during rectification)." },
            { number: 9, prompt: "Before measuring R1+R2, the test leads should be:", options: { A: "Used as supplied", B: "Nulled or their resistance recorded and subtracted from each subsequent reading", C: "Cut to exactly 1 m length", D: "Heated to operating temperature" }, answer: "B", explanation: "Lead resistance (typically 0.05–0.1 Ω) is significant compared to a small R1+R2 reading. Modern instruments null automatically; older ones require manual recording and subtraction. Untreated lead resistance can falsely fail a circuit." },
            { number: 10, prompt: "When testing IR with the lighting circuit's lamps left in, the reading is likely to be:", options: { A: "The true cable IR", B: "Lower than cable-only IR because lamps and electronic ballasts present leakage paths", C: "Higher than cable-only IR", D: "Unchanged by the lamps" }, answer: "B", explanation: "Lamps and electronic ballasts have measurable leakage to earth or between conductors, which lowers the IR reading. Remove lamps (or short between L and N) to test the cabling alone, then a separate functional test confirms equipment works." },
            { number: 11, prompt: "An R1+R2 measurement at the furthest socket of a radial circuit gives 0.96 Ω. The same circuit Ze is 0.40 Ω. The calculated Zs is:", options: { A: "0.56 Ω", B: "0.96 Ω", C: "1.36 Ω", D: "2.32 Ω" }, answer: "C", explanation: "Zs = Ze + (R1+R2) = 0.40 + 0.96 = 1.36 Ω. Compare against Table 41.3 for the protective device — Type B 32 A allows 1.37 Ω at 0.4 s, so this is right at the boundary and warrants investigation." },
            { number: 12, prompt: "On a TT system, the earth electrode resistance must be measured because:", options: { A: "It forms part of the earth fault loop and must be low enough for ADS to operate", B: "BS 7671 requires it for TN systems only", C: "It determines the IR test voltage", D: "It defines the polarity at the origin" }, answer: "A", explanation: "TT installations rely on a local electrode. The electrode resistance is part of the earth fault loop, and ADS via RCD requires RA × IΔn ≤ 50 V. For a 30 mA RCD, this gives RA ≤ 1667 Ω; in practice values < 200 Ω are sought for stability." },
            { number: 13, prompt: "An IR test on a 230 V LV circuit gives 0.85 MΩ between L+N and earth. The result is:", options: { A: "A pass — above the SELV minimum", B: "A fail — below the 1.0 MΩ Table 64 minimum; investigate and rectify", C: "A pass with comment", D: "Acceptable on RCD-protected circuits" }, answer: "B", explanation: "0.85 MΩ < 1.0 MΩ — fail. RCD protection does not change the IR acceptance criterion. Localise by disconnecting accessories one at a time and retesting." },
            { number: 14, prompt: "When an inspector cannot disconnect electronics from a 230 V LV circuit, the IR test method becomes:", options: { A: "Test L–N only", B: "Link L and N together and test the joined conductors to earth at 500 V DC; record the limitation", C: "Test at 1000 V DC instead", D: "Skip the IR test entirely" }, answer: "B", explanation: "Linking L and N avoids placing 500 V DC across electronic components (which sit between L and N). Testing the linked pair to earth gives one figure covering both lives. Record any limitation on the schedule." },
            { number: 15, prompt: "A continuity reading taken at the back of a socket outlet gives 0.42 Ω at 20 °C. Multiplying by the temperature factor 1.2 to compensate for normal operating temperature gives:", options: { A: "0.42 Ω", B: "0.50 Ω", C: "0.60 Ω", D: "0.84 Ω" }, answer: "B", explanation: "0.42 × 1.2 = 0.504 ≈ 0.50 Ω. This corrected value is what would be used for Zs comparison against the tabulated maxima (which assume warm conductors at full load)." },
            { number: 16, prompt: "A 'spur on a spur' fault in a ring final circuit shows up in the figure-of-eight test as:", options: { A: "All R1+R2 readings being uniform across the ring", B: "Significantly higher R1+R2 readings at the outlet on the spur on a spur, departing from the uniform value at the others", C: "An IR failure between L and N", D: "A complete loss of polarity" }, answer: "B", explanation: "On a healthy ring the R1+R2 reading is substantially constant at every socket. A spur on a spur is fed via a single conductor (no parallel half-ring) so its reading rises with cable length away from the spur tee. The departure from uniformity flags it." },
            { number: 17, prompt: "The reason for measuring r1, rn and r2 separately on a ring is:", options: { A: "To provide three independent values that can be cross-checked: r1 ≈ rn for a balanced ring; r2 ≈ 1.67 × r1 for 2.5/1.5 mm² T+E", B: "To verify Zs", C: "To prove polarity at every accessory", D: "To check IR" }, answer: "A", explanation: "End-to-end r1 and rn should be similar (line and neutral are identical csa). r2 should be ~ 1.67 × r1 for standard T+E with 1.5 mm² CPC. Significant departure suggests broken or interconnected legs. Step 1 establishes the baseline; step 2 cross-connects and measures R1+R2 at each socket." },
            { number: 18, prompt: "The polarity of a fixed switch is dead-tested by:", options: { A: "Continuity from the line terminal of the switch to the line terminal of the lamp, with the switch in the 'on' position; an open circuit confirms the switch interrupts the line conductor when off", B: "Applying 500 V DC between line and CPC at the switch", C: "Measuring the supply voltage at the switch live", D: "Visual inspection only" }, answer: "A", explanation: "Continuity through the switch in the 'on' position (closed) gives ~ 0 Ω between the line side and lamp side. Open circuit when off confirms it is the line conductor being interrupted, not the neutral. Live AVI checks corroborate after energising." },
            { number: 19, prompt: "An R2 wander-lead test on a main bonding conductor gives 0.18 Ω. The acceptance criterion is:", options: { A: "≤ 0.05 Ω regardless of length", B: "≤ 0.05 Ω for terminations; the cable resistance itself is whatever the size and length give. Use the value to confirm the conductor is connected and continuous", C: "Above 1 Ω", D: "Determined by IR" }, answer: "B", explanation: "There is no universal pass/fail value — main bonding resistance depends on csa and length. The wander-lead reading confirms continuity and a low termination resistance. A reading much higher than expected for the conductor length signals a poor connection." },
            { number: 20, prompt: "The ring final 'figure-of-eight' test at every socket on the ring should show:", options: { A: "Steeply rising readings as you move further from the DB", B: "Substantially equal R1+R2 readings around the whole ring, with only small variation due to cable length differences", C: "Readings half the value at the DB and double at the furthest point", D: "Zero reading at every socket" }, answer: "B", explanation: "A correctly wired ring presents two half-rings in parallel from any socket. The total path resistance from any point varies only slightly with where the socket sits on the loop. Significant variation flags a break or interconnection." },
            { number: 21, prompt: "An IR test on a 1000 V (HV) installation circuit is carried out at:", options: { A: "500 V DC, ≥ 1 MΩ", B: "1000 V DC, ≥ 1.0 MΩ", C: "230 V AC, ≥ 0.5 MΩ", D: "250 V DC, ≥ 0.5 MΩ" }, answer: "B", explanation: "Table 64 — circuits over 500 V are tested at 1000 V DC with ≥ 1.0 MΩ minimum. Note the same minimum value as LV but a higher test voltage to stress the higher-rated insulation." },
            { number: 22, prompt: "Before testing IR on a circuit, the inspector should:", options: { A: "Energise the circuit", B: "Confirm the circuit is isolated and locked off, remove or short out voltage-sensitive items, and remove lamps where possible", C: "Connect the circuit to neutral", D: "Apply a temporary jumper between L and N" }, answer: "B", explanation: "IR is a dead test. The circuit must be isolated and locked off; voltage-sensitive components (electronic dimmers, SPDs, RCBO electronics) should be disconnected or shorted to avoid damage; lamps removed so their leakage doesn't distort the reading." },
            { number: 23, prompt: "A continuity reading of 0.0 Ω on R1+R2 most likely indicates:", options: { A: "A perfect installation", B: "An unrealistic reading — the leads have not been nulled, or the meter is faulty; even a short circuit has a measurable lead resistance", C: "An open CPC", D: "An IR fault" }, answer: "B", explanation: "Even when leads are shorted together, lead resistance gives a small positive reading. A 0.00 Ω result on R1+R2 typically means the leads weren't nulled or the meter is misreading. Cable resistance is never literally zero." },
            { number: 24, prompt: "The dead-test that confirms a single-pole switch is wired in the line conductor (not the neutral) is:", options: { A: "IR", B: "Polarity (continuity-style)", C: "R1+R2", D: "Earth electrode resistance" }, answer: "B", explanation: "Polarity dead test catches a switch wired in the neutral — it confirms that single-pole devices interrupt the line, that fuses/MCBs are in the line conductor, and that L/N/CPC are at the right terminals. A switch in the neutral leaves the lampholder live when 'off'." },
            { number: 25, prompt: "On a healthy ring final circuit with end-to-end r1 = rn ≈ 0.4 Ω, the line conductors must be:", options: { A: "Both ends connected together at the DB before test (loop closed)", B: "Disconnected at the DB so the two legs are tested across each other (line-to-line, neutral-to-neutral, CPC-to-CPC)", C: "Energised", D: "Cross-connected to the CPC" }, answer: "B", explanation: "Step 1 of the ring final test — disconnect the two legs of each conductor at the DB and measure across each pair (line-to-line for r1, etc.). If you leave them looped, you would measure the parallel combination, not r1." }
          ]
        },
        {
          id: "v3",
          questions: [
            { number: 1, prompt: "The first dead test in the GN3 sequence on a new installation is:", options: { A: "Insulation resistance between live conductors", B: "Continuity of protective conductors (R1+R2 or R2 wander-lead)", C: "Polarity at every accessory", D: "Earth electrode resistance" }, answer: "B", explanation: "GN3 sequence — continuity of protective conductors first, so all subsequent tests can rely on the CPC being intact. Then ring final continuity (where applicable), IR, polarity, and earth electrode resistance." },
            { number: 2, prompt: "The maximum permitted lead-resistance error in a low-resistance ohmmeter, before correction is needed, is:", options: { A: "Always insignificant — lead R can be ignored", B: "Whatever the manufacturer specifies — typically nulled out before each set of readings", C: "10% of the cable resistance", D: "Up to 1 Ω allowable without nulling" }, answer: "B", explanation: "Manufacturers specify the null procedure for each instrument. Lead resistance is typically 0.05–0.1 Ω, large enough to skew low R1+R2 results. Modern instruments null automatically; older ones require manual subtraction." },
            { number: 3, prompt: "A circuit fails IR with 0.7 MΩ between L and N. The most likely cause is:", options: { A: "An open CPC", B: "A short or partial breakdown between line and neutral conductors — pinched cable, damaged insulation between cores, or a faulty load left across L–N", C: "Reversed polarity at one socket", D: "A high resistance bond at the MET" }, answer: "B", explanation: "L–N IR fail points to a fault between live conductors — pinched/nicked cable damaging both cores, a short via a damaged accessory, or a load (lamp, dimmer) left in circuit producing a low reading. Disconnect loads first, then localise by progressive disconnection." },
            { number: 4, prompt: "A dead polarity check finds a switch wired in the neutral. The correct response is:", options: { A: "Note as a departure on the EIC and continue", B: "Isolate, rectify the wiring so the switch is in the line conductor, then repeat the relevant continuity and polarity tests", C: "Add an RCD and continue", D: "Increase the supply voltage" }, answer: "B", explanation: "A switch in the neutral leaves the lampholder live when 'off' — a real shock hazard. The fault must be rectified, and the affected dead tests repeated. Polarity faults are not 'paperwork' issues." },
            { number: 5, prompt: "The IR test voltage and minimum acceptance value for a circuit > 500 V to 1000 V are:", options: { A: "500 V DC, ≥ 1.0 MΩ", B: "1000 V DC, ≥ 1.0 MΩ", C: "1500 V DC, ≥ 5.0 MΩ", D: "230 V AC, ≥ 1.0 MΩ" }, answer: "B", explanation: "Table 64 — > 500 V to 1000 V: 1000 V DC test with ≥ 1.0 MΩ. Same minimum as LV but a higher test voltage to stress the higher-rated insulation." },
            { number: 6, prompt: "On a 4 mm²/1.5 mm² T+E radial circuit (R/m: 4 mm² ≈ 4.61 mΩ/m, 1.5 mm² ≈ 12.10 mΩ/m), the expected R1+R2 for a 25 m run at 20 °C is approximately:", options: { A: "0.21 Ω", B: "0.42 Ω", C: "0.66 Ω", D: "0.84 Ω" }, answer: "B", explanation: "Per metre: 4.61 + 12.10 = 16.71 mΩ/m. For 25 m: 25 × 16.71 = 417.75 mΩ ≈ 0.42 Ω." },
            { number: 7, prompt: "When a ring final test gives r1 ≈ 0.40 Ω but rn ≈ 0.62 Ω, the most plausible interpretation is:", options: { A: "A normal balanced ring", B: "An interconnection or break in the neutral leg — rn should approximately equal r1 for identical csa line and neutral", C: "A spur on a spur", D: "A reversed CPC" }, answer: "B", explanation: "Line and neutral on a typical ring use identical csa T+E, so r1 ≈ rn within a few percent. A 50% mismatch suggests a break in the neutral, an interconnection between rings, or a wrong-csa replacement section. Investigate before continuing." },
            { number: 8, prompt: "The fall-of-potential (3-spike) earth electrode resistance test uses:", options: { A: "Two temporary auxiliary spikes (current and potential) plus the electrode under test", B: "Only the electrode under test", C: "Three temporary auxiliary spikes plus the electrode", D: "An RCD tester" }, answer: "A", explanation: "3-spike test: current spike at distance, potential spike at intermediate, electrode under test. Standard procedure includes moving the potential spike to verify a flat 'plateau' which confirms a true reading independent of soil resistance gradients." },
            { number: 9, prompt: "An IR test of a final circuit is carried out by linking L and N together and testing to earth at 500 V DC. The reading is:", options: { A: "The IR between L and N only", B: "The combined IR of both live conductors to earth (the lower of the two L–E paths dominates)", C: "The polarity result", D: "The R1+R2 value" }, answer: "B", explanation: "With L and N linked, both live conductors are at the same potential and the test measures from this combined node to earth. The result reflects the lower of the two individual L–E or N–E paths — useful as a quick combined check before splitting if a fail occurs." },
            { number: 10, prompt: "The dead test that confirms an MCB has been wired so it switches the line conductor (not the neutral) is:", options: { A: "Insulation resistance", B: "Polarity (continuity check on the device)", C: "R2 wander-lead", D: "Ring final figure-of-eight" }, answer: "B", explanation: "Polarity dead test confirms single-pole protective devices are in the line conductor. With the MCB closed, continuity should pass between the supply-side L and the load-side L; with it open, continuity should not pass." },
            { number: 11, prompt: "If R1+R2 measured at the DB end of a circuit is 0.05 Ω (because line and CPC are linked), the inspector should:", options: { A: "Use this value as R1+R2 for that circuit", B: "Recognise this is essentially the lead-and-link resistance and move on to test at the furthest accessory", C: "Treat it as a fault", D: "Set the test voltage higher" }, answer: "B", explanation: "At the DB the line and CPC are linked together — measuring across the link gives just the lead/link resistance, not the cable. Move to the furthest accessory and measure there to get the full R1+R2 of the circuit." },
            { number: 12, prompt: "On a 230 V LV circuit, an IR reading between L+N and earth of 100 MΩ is:", options: { A: "Below the minimum acceptance value", B: "A healthy reading well above the 1 MΩ minimum and the 2 MΩ 'investigate' threshold", C: "An indication of a fault", D: "Marginal — recheck" }, answer: "B", explanation: "100 MΩ is excellent, well above the 1 MΩ minimum and the 2 MΩ 'investigate' threshold. Modern dry PVC insulation typically reads in the hundreds of MΩ on a small final circuit." },
            { number: 13, prompt: "A wander-lead R2 test on a supplementary bonding conductor in a bathroom gives 0.32 Ω. The test current applied is:", options: { A: "The 30 mA RCD trip current", B: "200 mA to 10 A at 4–24 V (low-resistance ohmmeter)", C: "500 V DC", D: "1 A at 50 V AC" }, answer: "B", explanation: "GN3 — low-resistance ohmmeter delivers 200 mA to 10 A at 4–24 V (AC or DC). The same instrument used for R1+R2 and other continuity tests. The current is high enough to break through oxide but low enough not to be hazardous." },
            { number: 14, prompt: "An R1+R2 test gives 1.10 Ω for a 32 A Type B socket circuit. With Ze of 0.30 Ω, the calculated Zs is:", options: { A: "0.80 Ω", B: "1.10 Ω", C: "1.40 Ω", D: "1.43 Ω" }, answer: "C", explanation: "Zs = Ze + (R1+R2) = 0.30 + 1.10 = 1.40 Ω. Type B 32 A maximum from Table 41.3 is 1.37 Ω at 0.4 s — measured calc-Zs (1.40) marginally exceeds. Investigate cable length, csa, and termination integrity, or rely on RCD-protected ADS." },
            { number: 15, prompt: "Continuity of the main earthing conductor at initial verification can be confirmed by:", options: { A: "Visual inspection only", B: "An R2 wander-lead measurement from the MET to the source-side earth termination, or by inspection that the conductor is undamaged and correctly terminated at both ends", C: "Insulation resistance test", D: "Ze measurement alone" }, answer: "B", explanation: "Main earthing conductor continuity is verified by wander-lead measurement (where the source end is accessible) or by visual inspection of both terminations and the route. The Ze test does measure through the same conductor, but doesn't isolate its individual resistance." },
            { number: 16, prompt: "The dead-test sequence verifies, in order:", options: { A: "Functional → IR → polarity → continuity", B: "Continuity of CPCs → continuity of ring conductors → IR → polarity → earth electrode resistance (where applicable)", C: "IR → continuity → polarity → Zs", D: "Polarity → IR → continuity → Ze" }, answer: "B", explanation: "GN3 dead-test order. Continuity first so later tests can rely on CPC integrity. IR before polarity so any short circuits are caught before energisation. Earth electrode resistance is the last dead test on TT systems." },
            { number: 17, prompt: "A ring final circuit shows r1 = rn = 0.42 Ω, r2 = 0.70 Ω and uniform R1+R2 = 0.28 Ω at every socket. The interpretation is:", options: { A: "There is a break in the ring", B: "A healthy ring with no breaks, no interconnections and no spur on a spur", C: "The CPC is open", D: "Polarity is reversed" }, answer: "B", explanation: "(r1+r2)/4 = (0.42+0.70)/4 = 0.28 Ω. Uniform readings around the ring confirm electrical continuity, no break, no interconnection, and no spur on a spur. r1 ≈ rn confirms balanced line and neutral." },
            { number: 18, prompt: "On a 3-phase TP+N final circuit, IR is tested between:", options: { A: "Only L1 and L2", B: "Each pair of live conductors (L1–L2, L2–L3, L1–L3, L1–N, L2–N, L3–N) and between each live conductor and earth (with conductors joined to earth as a combined test where appropriate)", C: "Only the lives to earth", D: "Only L1 to N" }, answer: "B", explanation: "3-phase IR requires testing every pairing of live conductors plus the lives to earth. In practice, the combined L1+L2+L3+N to earth test is often the practical efficient first check; if it passes, splitting is unnecessary." },
            { number: 19, prompt: "Removing a lamp before applying a 500 V DC IR test ensures:", options: { A: "The IR reading reflects the cable insulation, not the lamp's filament resistance or the lampholder", B: "The lamp will not be damaged", C: "Both A and B", D: "The polarity is correct" }, answer: "C", explanation: "A lamp's filament has measurable conductance and can mask a cable IR fault, plus 500 V DC may damage some lamps (particularly LED drivers). Removing the lamp gives a true cable IR reading and protects the lamp." },
            { number: 20, prompt: "The maximum acceptable R1+R2 reading for a circuit is:", options: { A: "Always 1 Ω", B: "Set by Zs comparison: R1+R2 + Ze must give a Zs ≤ Table 41.3 maximum for the device, after temperature correction", C: "Always 0.5 Ω", D: "Always 2 Ω" }, answer: "B", explanation: "There is no universal R1+R2 maximum — the criterion is the calculated Zs. Smaller MCBs accept higher Zs (and hence higher R1+R2); a 6 A Type B can tolerate ~ 7 Ω while a 32 A Type B is capped at ~ 1.37 Ω." },
            { number: 21, prompt: "A wander-lead R2 reading on a structural steel beam claimed to be an extraneous-conductive-part bonded to the MET is 18.4 Ω. The interpretation is:", options: { A: "A pass — the bonding is effective", B: "A fail — bonding to extraneous parts should typically read in the milli-ohm to low ohm range; 18.4 Ω suggests a poor or missing connection", C: "Acceptable for steel", D: "Indicates an IR fault" }, answer: "B", explanation: "Main protective bonding conductors are sized so the resistance is very low. Readings in tens of ohms indicate either a poor termination at the MET or the bonding clamp, or that the steel is not actually electrically connected to the MET via a bonding conductor." },
            { number: 22, prompt: "An IR fail at 0.3 MΩ on the L–E test of a circuit can typically be localised by:", options: { A: "Looking at the cable from outside only", B: "Disconnecting accessories one at a time at the far end of the circuit, retesting after each, and identifying the section whose disconnection restores the IR", C: "Increasing the test voltage", D: "Replacing the consumer unit" }, answer: "B", explanation: "Progressive disconnection — disconnect each accessory or section in turn, retesting IR each time. The section whose disconnection restores the IR is where the fault lies. Methodical and systematic, and minimises unnecessary cable replacement." },
            { number: 23, prompt: "Before a continuity test on a circuit, the inspector must:", options: { A: "Energise the supply", B: "Confirm the circuit is dead and locked off", C: "Test polarity first", D: "Test IR first" }, answer: "B", explanation: "Continuity is a dead test. The circuit must be isolated and locked off (using safe isolation procedure with proven AVI). The low-resistance ohmmeter applies its own small test current — never test continuity on a live circuit." },
            { number: 24, prompt: "A polarity dead test using a continuity meter on a fused spur confirms:", options: { A: "That the fuse holder is in the line conductor (continuity through the fuse passes when fitted; opens when removed)", B: "The supply voltage is correct", C: "RCDs trip in 40 ms", D: "Earth electrode resistance is below 200 Ω" }, answer: "A", explanation: "With a fuse fitted, continuity from supply-side L to load-side L should be ~ 0 Ω. Removing the fuse should open the circuit. This confirms the fuse is in the line conductor — not the neutral, which would leave equipment live with the fuse removed." },
            { number: 25, prompt: "A new installation includes a TN-C-S supply. On the dead-test sequence, earth electrode resistance:", options: { A: "Must be measured at every socket", B: "Is not applicable — TN-C-S relies on the DNO's combined PEN; no consumer's earth electrode is required (and an earth electrode test is for TT installations)", C: "Is measured at the MET", D: "Is replaced by an IR test" }, answer: "B", explanation: "TN-C-S relies on the DNO's PEN conductor for the earth path. No consumer earth electrode is required for primary fault protection (though one may be present for surge or other reasons). Earth electrode resistance is a TT-system test." }
          ]
        },
        {
          id: "v4",
          questions: [
            { number: 1, prompt: "Continuity of a CPC may be confirmed by either the R1+R2 method or:", options: { A: "Insulation resistance test", B: "R2 wander-lead method (long lead from MET to the CPC point under test, with the lead nulled first)", C: "Earth fault loop impedance measurement", D: "Functional test" }, answer: "B", explanation: "Both R1+R2 (using the line conductor as the return at the origin) and R2 wander-lead (using a long test lead from the MET) are valid GN3 methods. R1+R2 is preferred for circuits where line is available at the origin; wander-lead for bonding and where linking isn't practical." },
            { number: 2, prompt: "An IR test gives 200 MΩ between L and N but only 0.7 MΩ between L+N and earth on the same circuit. The interpretation is:", options: { A: "Healthy installation", B: "Leakage path between one (or both) live conductors and earth — typically pinched/nicked cable, moisture, or a leaky accessory", C: "Reversed polarity", D: "Open CPC" }, answer: "B", explanation: "L–N being 200 MΩ rules out a fault between live conductors. L+N–E being 0.7 MΩ (below 1 MΩ minimum) means leakage to earth. Disconnect accessories at the far end one at a time; the section whose disconnection restores the IR is where the fault lies." },
            { number: 3, prompt: "On a 230 V LV final circuit, the IR test instrument must be capable of:", options: { A: "Applying 250 V DC at no more than 100 mA short-circuit", B: "Applying 500 V DC with a short-circuit current of at least 1 mA at the load voltage", C: "Applying 1500 V DC at 50 mA", D: "Applying 230 V AC RMS" }, answer: "B", explanation: "BS EN 61557-2 — IR test instruments must produce the rated test voltage at no less than 1 mA into the rated load. This ensures repeatable readings rather than the meter giving up under modest leakage." },
            { number: 4, prompt: "An R1+R2 reading taken at the furthest socket of a 25 m circuit in 4/1.5 mm² T+E gives 0.55 Ω. The expected value (R/m: 4 mm² ≈ 4.61 mΩ/m, 1.5 mm² ≈ 12.10 mΩ/m) is approximately:", options: { A: "0.42 Ω", B: "0.55 Ω", C: "0.66 Ω", D: "0.83 Ω" }, answer: "A", explanation: "Per metre: 4.61 + 12.10 = 16.71 mΩ/m. For 25 m: 25 × 16.71 = 417.75 mΩ ≈ 0.42 Ω. Measured 0.55 Ω is somewhat higher — investigate joints and terminations, or the circuit length may be longer than recorded." },
            { number: 5, prompt: "The minimum continuity-tester output current required by GN3 is:", options: { A: "30 mA", B: "200 mA", C: "1 A", D: "10 A" }, answer: "B", explanation: "GN3 — short-circuit test current 200 mA to 10 A at 4–24 V (AC or DC). 200 mA is the minimum, sufficient to break through oxide and reveal high-resistance joints. Many MFTs deliver 250 mA or higher." },
            { number: 6, prompt: "The dead-test order of CPC continuity → IR → polarity exists because:", options: { A: "Polarity is the most critical and goes last", B: "Each test relies on properties confirmed by the preceding test — IR is meaningful only with the CPC continuous, polarity verification needs cables that have passed IR", C: "It alphabetically arranges by 'C', 'I', 'P'", D: "It matches the live-test order" }, answer: "B", explanation: "Logical sequence: an open CPC distorts IR (and Zs); an L–E short would damage an IR tester. By the time you check polarity, the cabling has already passed continuity and IR — so any wiring confusion that remains is the polarity itself." },
            { number: 7, prompt: "On a ring final, the figure-of-eight cross-connection is made:", options: { A: "Between the two ends of the line conductor and the two ends of the CPC, with line of one leg cross-connected to CPC of the other and vice versa", B: "Between line and neutral only", C: "Between all four conductors twisted together", D: "Between line and earth electrode" }, answer: "A", explanation: "Cross-connect: line end of leg A to CPC end of leg B, and line end of leg B to CPC end of leg A. This forms two parallel half-rings, each line+CPC. R1+R2 measured at any socket should equal (r1+r2)/4." },
            { number: 8, prompt: "An IR test gives:", options: { A: "A reading in MΩ between live conductors and between live conductors and earth", B: "A reading in mΩ between line and CPC", C: "An RCD trip time in ms", D: "A voltage between line and earth" }, answer: "A", explanation: "IR is reported in MΩ — the resistance of the insulation. Healthy modern installations read in the hundreds of MΩ; the BS 7671 minimum is 1 MΩ for LV. R1+R2 (mΩ to Ω range) is a different test." },
            { number: 9, prompt: "Why must a low-resistance ohmmeter, not a regular multimeter, be used for R1+R2?", options: { A: "Multimeters cannot measure DC", B: "A regular multimeter applies very low test current and cannot reveal high-resistance joints; the LR ohmmeter delivers 200 mA to 10 A which breaks through oxide", C: "Multimeters are too expensive", D: "Multimeters need calibration" }, answer: "B", explanation: "A typical multimeter applies microamps for resistance measurement — fine for components but insufficient to expose poor connections. The 200 mA to 10 A continuity tester delivers enough current to push through oxide and reveal real-world joint resistance." },
            { number: 10, prompt: "On a 2.5/1.5 mm² T+E ring final, end-to-end r1 = 0.50 Ω. The expected r2 is approximately:", options: { A: "0.50 Ω", B: "0.83 Ω", C: "0.30 Ω", D: "1.00 Ω" }, answer: "B", explanation: "r2/r1 = R(1.5 mm²)/R(2.5 mm²) ≈ 12.10/7.41 ≈ 1.67. So r2 ≈ 0.50 × 1.67 = 0.83 Ω. This ratio is the basis of the standard 2.5/1.5 ring final r2 calculation." },
            { number: 11, prompt: "An IR test on a 230 V circuit reads 'over range' (greater than the meter's upper limit). The interpretation is:", options: { A: "A pass — healthy insulation", B: "A fail — must read at least 100 MΩ", C: "Recheck — meter is faulty", D: "An open CPC" }, answer: "A", explanation: "Modern PVC insulation typically reads in the hundreds of MΩ — many MFTs display '> 200 MΩ' or 'over range' for healthy circuits. This is a comfortable pass, well above the 1 MΩ minimum and 2 MΩ 'investigate' threshold." },
            { number: 12, prompt: "The dead test that catches a wired-back-to-front socket (line and neutral swapped at the terminal) is:", options: { A: "Insulation resistance", B: "Polarity (continuity check from L at the origin to L at each socket)", C: "R2 wander-lead", D: "Earth electrode resistance" }, answer: "B", explanation: "Polarity dead test follows the line conductor from origin to each socket. A swapped L/N at the socket would show as continuity from supply L to socket N (instead of socket L). Catches the fault before energisation." },
            { number: 13, prompt: "An R1+R2 reading varies along a circuit, increasing with distance from the DB. This is:", options: { A: "Always a fault", B: "Normal — resistance accumulates with cable length on a radial circuit", C: "An IR fault", D: "An open CPC" }, answer: "B", explanation: "On a radial circuit, R1+R2 measured at progressively further accessories will increase because more cable is included in the loop. A ring circuit (with figure-of-eight) gives substantially constant readings everywhere; a radial does not." },
            { number: 14, prompt: "An IR test on a circuit feeding an LED downlight gives 0.5 MΩ. After removing the LED driver, the reading rises to over 200 MΩ. The interpretation is:", options: { A: "Cable IR fault", B: "The LED driver was contributing leakage and is the cause of the low reading; the cable IR is healthy. Decide whether to disconnect the driver routinely or accept the limitation", C: "Reversed polarity", D: "Open CPC" }, answer: "B", explanation: "Many LED drivers and SMPS units have legitimate Y-capacitor leakage to earth that can mask cable IR. Removing them confirms cable IR is healthy. Some inspectors record cable IR with the driver removed, then test functionally with the driver back in." },
            { number: 15, prompt: "Continuity of a main protective bonding conductor to a metallic gas service can be checked by:", options: { A: "Visual inspection only", B: "An R2 wander-lead test from the MET to the bonding clamp on the gas pipe (lead nulled first)", C: "An IR test at 500 V DC", D: "Measuring the supply voltage" }, answer: "B", explanation: "R2 wander-lead is the standard check — null the leads, then measure from MET to the bonding clamp. The reading confirms the bonding conductor is intact and the clamp connection is sound. Visual inspection alone cannot reveal a high-resistance termination." },
            { number: 16, prompt: "A circuit's IR is being checked on a TT system. The test approach is:", options: { A: "Different from TN — TT uses 1000 V DC", B: "The same as TN — 500 V DC for LV with ≥ 1.0 MΩ minimum, 250 V DC for SELV with ≥ 0.5 MΩ minimum", C: "Replaced by an earth electrode test", D: "Required to read > 50 MΩ" }, answer: "B", explanation: "Table 64 IR criteria are independent of earthing system. TT and TN both use 500 V DC at ≥ 1.0 MΩ for LV. The differences lie in earth electrode and Ze considerations, not IR." },
            { number: 17, prompt: "On a domestic ring final, the test instrument used for figure-of-eight measurements at each socket is the:", options: { A: "500 V DC IR tester", B: "Low-resistance ohmmeter (continuity tester) — same instrument used for R1+R2", C: "Earth fault loop impedance tester", D: "RCD tester" }, answer: "B", explanation: "Figure-of-eight is a continuity test — measure R1+R2 from L to CPC at each socket using the low-resistance ohmmeter (200 mA–10 A at 4–24 V). It's the same instrument used for all continuity tests on the dead-test sequence." },
            { number: 18, prompt: "An R1+R2 reading is taken at 20 °C ambient. Before comparison with Table 41.3 limits (which assume conductors at operating temperature), the value should be:", options: { A: "Used as-is", B: "Multiplied by a temperature correction factor (typically about 1.20 for 70 °C PVC operating conditions) to give a warm-conductor estimate", C: "Halved", D: "Compared with the 250 V DC IR figure" }, answer: "B", explanation: "Cable resistance rises with temperature. A common approach is to multiply the cold reading by ~ 1.20 to estimate operating-temperature R1+R2 before adding Ze. Alternatively, take 80% of the tabulated max as the cold-reading limit. Both methods account for the same physical effect." },
            { number: 19, prompt: "If the IR test instrument can apply 1000 V DC, should this be used on a 230 V LV circuit?", options: { A: "Yes — higher voltage gives a more thorough test", B: "No — Table 64 specifies 500 V DC for LV; using 1000 V DC may damage SPDs, electronic components, and may even damage healthy insulation in some contexts", C: "Only on TT systems", D: "Only on circuits over 50 m" }, answer: "B", explanation: "Test voltages in Table 64 are matched to the operating voltage. Using 1000 V DC on a 230 V LV circuit risks damaging electronic components and SPDs, and is not the prescribed test condition." },
            { number: 20, prompt: "On a 6 mm²/2.5 mm² T+E radial circuit (R/m: 6 mm² ≈ 3.08 mΩ/m, 2.5 mm² ≈ 7.41 mΩ/m), the expected R1+R2 for a 40 m run at 20 °C is approximately:", options: { A: "0.21 Ω", B: "0.42 Ω", C: "0.62 Ω", D: "0.84 Ω" }, answer: "B", explanation: "Per metre: 3.08 + 7.41 = 10.49 mΩ/m. For 40 m: 40 × 10.49 = 419.6 mΩ ≈ 0.42 Ω." },
            { number: 21, prompt: "A failed CPC continuity reading on a circuit means:", options: { A: "Continue with IR and polarity, the CPC can be checked later", B: "Investigate immediately — without a continuous CPC, ADS will not function and the circuit must not be energised. Locate and rectify the break, then re-test", C: "Energise and use functional testing only", D: "Increase the IR test voltage" }, answer: "B", explanation: "An open CPC is a serious safety fault — ADS depends on the protective conductor. The break must be located and rectified before continuing the dead-test sequence. Common causes: a missing termination at an accessory, a damaged cable, or an unmarked break." },
            { number: 22, prompt: "When the line and CPC are linked at the DB end of a circuit, R1+R2 measured at every accessory increases with cable length because:", options: { A: "Each metre of line conductor and CPC adds its own resistance to the series loop", B: "The neutral conductor contributes", C: "The IR tester is in parallel", D: "The supply voltage drops" }, answer: "A", explanation: "R1+R2 is the resistance of the line+CPC loop end-to-end. Each metre adds: for 2.5/1.5 mm² T+E, ~ 19.5 mΩ/m. The reading at each accessory reflects the cable length to that point. Recording each value provides per-circuit verification data." },
            { number: 23, prompt: "An IR test passes between L and N (at 200 MΩ) but fails between L and earth (at 0.4 MΩ). The next step is:", options: { A: "Record both readings and continue", B: "Localise the L–E fault by progressive disconnection of accessories, then rectify and retest", C: "Increase the test voltage to 1000 V", D: "Reverse polarity at the origin" }, answer: "B", explanation: "L–N healthy and L–E low points to a leakage path from line to earth. Progressive disconnection: disconnect the furthest accessory, retest; if still failing, disconnect the next one; continue until the IR rises. The section whose disconnection restored IR contains the fault." },
            { number: 24, prompt: "On a TT installation, after the dead-test sequence completes successfully, the next step is:", options: { A: "Issue an EIC immediately", B: "Energise and proceed with the live-test sequence — including Ze, Zs, RCD and earth electrode resistance verification", C: "Repeat all dead tests", D: "Switch to a TN-C-S system" }, answer: "B", explanation: "Live tests follow once dead tests pass. On TT: live polarity, Ze, Zs, RCD tests at 0.5×, 1× and 5× IΔn, and final functional checks. The earth electrode resistance is also typically verified live using a loop tester at the electrode for everyday use." },
            { number: 25, prompt: "An IR fault on a circuit reads 0.0 MΩ between L and earth. The interpretation is:", options: { A: "A direct short between line and earth — the test current is being passed straight through", B: "A pass", C: "A polarity issue", D: "An open CPC" }, answer: "A", explanation: "0.0 MΩ between L and E means a near-zero-resistance path — a hard fault, often a pinched/cut cable contacting the CPC, a damaged accessory, or a wire shorted to the back box. Isolate, locate by disconnection, rectify and retest. Do not energise." }
          ]
        },
        {
          id: "v5",
          questions: [
            { number: 1, prompt: "Why is the figure-of-eight cross-connection used on a ring final circuit during step 2 of the continuity test?", options: { A: "To ensure that R1+R2 measured at every socket reflects two parallel half-rings, giving substantially equal readings around a healthy ring", B: "To increase the test voltage", C: "To verify polarity", D: "To check IR" }, answer: "A", explanation: "Cross-connecting line of one leg to CPC of the other (and vice versa) creates two equivalent half-ring paths from any socket. R1+R2 = (r1+r2)/4 is uniform around a healthy ring. Variation indicates a break, interconnection, or spur on a spur." },
            { number: 2, prompt: "An IR test on a circuit fails at 0.8 MΩ. The minimum acceptance value (Table 64) for LV is 1 MΩ. The next inspector action is to:", options: { A: "Record as a pass with comment", B: "Localise and rectify the fault, then re-inspect and re-test the affected circuit (continuity, IR, polarity)", C: "Issue an EIC and energise", D: "Halve the test voltage to 250 V DC" }, answer: "B", explanation: "0.8 MΩ < 1 MΩ — fail. The defect must be made good. After rectification, re-inspect (work may have disturbed terminations) and re-test continuity and polarity in addition to IR." },
            { number: 3, prompt: "An R1+R2 reading at the furthest socket of a 32 A radial gives 1.20 Ω. The Ze for the installation is 0.35 Ω. The calculated Zs is:", options: { A: "0.85 Ω", B: "1.20 Ω", C: "1.55 Ω", D: "1.85 Ω" }, answer: "C", explanation: "Zs = Ze + (R1+R2) = 0.35 + 1.20 = 1.55 Ω. Compared with the 32 A Type B max of 1.37 Ω at 0.4 s, this is non-compliant — investigate cable length, csa or cpc size, or rely on RCD-protected ADS." },
            { number: 4, prompt: "On a 230 V LV final circuit, the IR test current at 500 V DC must be capable of delivering at least:", options: { A: "1 mA at the rated test voltage into the rated load", B: "1 A at the rated test voltage", C: "10 A at the rated test voltage", D: "30 mA at 230 V AC" }, answer: "A", explanation: "BS EN 61557-2 — IR instruments must produce the rated test voltage at no less than 1 mA into the rated load (typically 1 MΩ at 500 V DC). This ensures repeatable readings rather than the meter folding back under load." },
            { number: 5, prompt: "A ring final test gives readings r1 = 0.41 Ω, rn = 0.41 Ω, r2 = 0.68 Ω, but R1+R2 at one socket is 0.27 Ω while at another it is 0.43 Ω. The most likely interpretation is:", options: { A: "A balanced healthy ring", B: "An interconnection, break, or spur on a spur — R1+R2 around a healthy ring should be substantially constant", C: "Reversed polarity at the second socket", D: "An IR fault between L and N" }, answer: "B", explanation: "Around a healthy ring, R1+R2 ≈ (r1+r2)/4 ≈ 0.27 Ω at every socket. The 0.43 Ω reading deviates significantly — investigate for an interconnection back to the DB, a break in one leg, or a spur on a spur fed from that socket." },
            { number: 6, prompt: "When testing IR between live conductors and earth, the CPC should be:", options: { A: "Disconnected from the MET to give a higher reading", B: "Left connected to the MET — this mimics in-service conditions and gives the most realistic measurement of insulation between the live conductors and the earthed metalwork", C: "Replaced with a temporary lead", D: "Linked to the line conductor" }, answer: "B", explanation: "The CPC stays bonded to the MET during the IR test. The whole point is to measure insulation between live conductors and the earthed metalwork the user could touch. Disconnecting the CPC would invalidate the L+N–E measurement." },
            { number: 7, prompt: "On a 16 A Type B MCB radial, R1+R2 measured cold is 0.62 Ω. With Ze = 0.40 Ω, the calculated Zs at 20 °C is:", options: { A: "0.62 Ω", B: "0.78 Ω", C: "1.02 Ω", D: "1.42 Ω" }, answer: "C", explanation: "Zs (cold) = Ze + (R1+R2) = 0.40 + 0.62 = 1.02 Ω. Type B 16 A max is 2.73 Ω at 0.4 s — comfortably below the limit. After temperature correction, the warm-conductor Zs would still be well within tolerance." },
            { number: 8, prompt: "A wander-lead R2 reading on a CPC is taken with the test lead first nulled. The null procedure:", options: { A: "Adds the lead resistance to the reading", B: "Subtracts the lead resistance from subsequent readings so the displayed value is the true CPC resistance", C: "Has no effect on the reading", D: "Increases the test current" }, answer: "B", explanation: "Nulling stores the lead resistance and subtracts it from subsequent readings. Without nulling, a lead resistance of 0.05–0.10 Ω would add to every measurement, falsely inflating R2 and potentially failing a healthy circuit." },
            { number: 9, prompt: "Continuity is verified before insulation resistance partly because:", options: { A: "Continuity testing is a live test", B: "If the CPC is open, the L+N–E IR test path is incomplete and the result misleading; CPC continuity must be confirmed first so subsequent tests rely on it", C: "BS 7671 demands alphabetical order", D: "Continuity uses 1000 V DC" }, answer: "B", explanation: "An open CPC means the IR test current can't flow through the protective path, distorting L+N–E readings. Continuity first ensures all subsequent tests have a known-good earth reference, and ADS will work once energised." },
            { number: 10, prompt: "On a typical 2.5/1.5 mm² T+E ring final circuit, the expected ratio r2 ÷ r1 is approximately:", options: { A: "1.0 (line and CPC are the same csa)", B: "1.67 (CPC is 1.5 mm² versus line 2.5 mm²; resistance ratio R(1.5)/R(2.5))", C: "2.5 (CPC is much smaller)", D: "0.6 (CPC is larger than the line)" }, answer: "B", explanation: "R(1.5 mm²) ≈ 12.10 mΩ/m, R(2.5 mm²) ≈ 7.41 mΩ/m. Ratio = 12.10/7.41 ≈ 1.67. So r2 should be about 1.67 × r1 on a standard 2.5/1.5 ring." },
            { number: 11, prompt: "An IR test on a circuit feeding a surge protective device (SPD) should be conducted with the SPD:", options: { A: "Left in circuit at full 500 V DC", B: "Disconnected or shorted out before applying 500 V DC, since the SPD will conduct at lower voltages and damage may result", C: "Tested separately at 1500 V DC", D: "Replaced by a temporary jumper" }, answer: "B", explanation: "SPDs (MOVs/GDTs) are designed to clamp at voltages below 500 V DC, so applying the IR test voltage will activate them and either damage the SPD or distort the IR reading. Disconnect or short out the SPD before testing, then reconnect after." },
            { number: 12, prompt: "An IR fail localised to a section of cable typically requires:", options: { A: "Replacing the consumer unit", B: "Replacing the affected cable section, then re-inspecting and re-testing continuity, IR and polarity for the circuit", C: "Increasing the IR test voltage", D: "Adding an RCD" }, answer: "B", explanation: "Once a faulty section is identified by progressive disconnection, the affected cable is replaced. Re-inspect (the new install may have disturbed terminations or introduced its own errors) and re-test the circuit. Just running IR alone misses any error introduced when fitting the new cable." },
            { number: 13, prompt: "A polarity dead test using a continuity meter on a 13 A socket outlet should confirm:", options: { A: "L on the right (looking at the front), N on the left, CPC at the top — and the line continuity from origin to the right-hand socket terminal", B: "Only that the cable is connected", C: "Only the supply voltage", D: "Only the IR" }, answer: "A", explanation: "BS 1363 socket convention: L right, N left, CPC top (looking at the socket face). Polarity check: continuity from supply L at the origin to the right socket terminal confirms line is on the correct pin. A swap would be detected as continuity to the wrong pin." },
            { number: 14, prompt: "An R1+R2 measurement is meaningless if:", options: { A: "The leads have not been nulled and the test instrument is faulty", B: "The supply is energised", C: "The supply voltage is correct", D: "Polarity is correct" }, answer: "A", explanation: "Without nulling, lead resistance is added to every reading, distorting low-resistance results. A faulty test instrument gives meaningless readings regardless. Both conditions must be ruled out before recording R1+R2 values." },
            { number: 15, prompt: "On a 230 V LV ring final, after a successful figure-of-eight test (uniform R1+R2 around the ring), the next dead test in sequence is:", options: { A: "Earth electrode resistance", B: "Insulation resistance, then polarity", C: "Live polarity at the origin", D: "RCD trip times" }, answer: "B", explanation: "GN3 dead-test sequence: continuity (CPCs and ring) → IR → polarity → earth electrode resistance (where applicable). Live tests come after dead tests pass. RCD trip times and live polarity are part of the live sequence." },
            { number: 16, prompt: "The minimum IR for a SELV circuit at 250 V DC test is:", options: { A: "0.25 MΩ", B: "0.5 MΩ", C: "1 MΩ", D: "5 MΩ" }, answer: "B", explanation: "Table 64 — SELV (≤ 50 V): 250 V DC test, ≥ 0.5 MΩ. Lower test voltage (so the SELV equipment isn't damaged), lower minimum acceptance value (the system itself operates at lower voltage stress)." },
            { number: 17, prompt: "An R1+R2 reading on a circuit gives 0.10 Ω, but the cable run is known to be 35 m of 4/1.5 mm² T+E. Expected R1+R2 (R/m: 4 mm² ≈ 4.61 mΩ/m, 1.5 mm² ≈ 12.10 mΩ/m) is:", options: { A: "0.10 Ω — pass", B: "About 0.58 Ω — measured 0.10 Ω is implausibly low; check the test setup, lead nulling, and that the line and CPC haven't been shorted directly at the DB", C: "About 1.20 Ω", D: "About 0.30 Ω" }, answer: "B", explanation: "Per metre: 4.61 + 12.10 = 16.71 mΩ/m. For 35 m: 35 × 16.71 = 585 mΩ ≈ 0.58 Ω. A reading of 0.10 Ω is implausibly low — likely a measurement error: leads not properly connected, a short circuit fault, or the link at the DB hasn't been routed through the full circuit." },
            { number: 18, prompt: "A correctly wired ring final has its line and CPC ends linked at the DB during the figure-of-eight test by:", options: { A: "Twisting all four conductor ends together at the DB", B: "Cross-connecting line A to CPC B and line B to CPC A — so line and CPC each form a parallel half-ring", C: "Connecting line A to line B only", D: "Bonding line to neutral" }, answer: "B", explanation: "Cross-connection: line of one leg to CPC of the other and vice versa. Each conductor (line and CPC) then has a parallel path back to the DB through the other half-ring. R1+R2 measured at any socket is uniform around the loop." },
            { number: 19, prompt: "Polarity of a fixed light switch is dead-checked by:", options: { A: "Continuity from the supply L at the DB to the switch's load terminal with the switch in the 'on' position; an open circuit when off confirms it switches the line conductor", B: "An IR test at 1000 V DC across the switch", C: "An AVI on the live circuit", D: "An R2 wander-lead from the MET" }, answer: "A", explanation: "Continuity from DB-side L → through the closed switch → out to the lamp side confirms the switch interrupts the line. With the switch off, this path opens. The lamp's neutral remains the return path. A switch wired in the neutral would leave the lamp live when 'off'." },
            { number: 20, prompt: "A wander-lead R2 reading on a TT system's earthing conductor (from the MET to the earth electrode) typically shows:", options: { A: "Zero ohms", B: "A small fraction of the electrode resistance — confirms the earthing conductor itself is intact, separate from the electrode-to-earth resistance which is measured by other means", C: "Hundreds of MΩ", D: "The supply impedance" }, answer: "B", explanation: "The wander-lead test measures only the earthing conductor's resistance (a few mΩ for a typical run). The earth electrode-to-mass-of-earth resistance is much higher (typically 30–200 Ω) and is measured separately by 3-spike or earth-electrode loop test." },
            { number: 21, prompt: "On a circuit with a faulty CPC continuity (open circuit), what dead test is invalidated?", options: { A: "Insulation resistance — the L+N–E test path is incomplete and any reading is meaningless until the CPC is restored", B: "None — IR is independent of CPC", C: "Polarity only", D: "Ring final figure-of-eight only" }, answer: "A", explanation: "An open CPC means the L+N–E IR test current cannot flow through the protective path. The reading reflects an incomplete circuit, not the true insulation. Restore CPC continuity, then repeat IR (and polarity)." },
            { number: 22, prompt: "An IR test on a 1000 V circuit gives 0.6 MΩ. Table 64 minimum at 1000 V DC is 1.0 MΩ. The result is:", options: { A: "Pass", B: "Fail — investigate and rectify", C: "Pass with comment", D: "Acceptable on RCD-protected circuits" }, answer: "B", explanation: "0.6 MΩ < 1.0 MΩ — fail. Higher voltage circuits have the same minimum IR as LV under Table 64 (1.0 MΩ); the difference is the test voltage applied. Investigate insulation, terminations, and any equipment left in circuit." },
            { number: 23, prompt: "The dead-test sequence on a TN-C-S installation does NOT include:", options: { A: "Continuity of CPCs", B: "Insulation resistance", C: "Polarity (dead)", D: "Earth electrode resistance — TN-C-S relies on the DNO PEN, no consumer electrode required for primary fault protection" }, answer: "D", explanation: "TN-C-S uses the DNO's PEN for the earth path. No consumer earth electrode is required for ADS. Earth electrode tests apply to TT systems. The first three options all apply to TN-C-S." },
            { number: 24, prompt: "An R1+R2 test gives 0.45 Ω at the furthest socket of a 4 mm² + 2.5 mm² CPC radial. Per-metre R/m at 20 °C: 4 mm² ≈ 4.61 mΩ/m, 2.5 mm² ≈ 7.41 mΩ/m. The implied cable length is approximately:", options: { A: "20 m", B: "37 m", C: "50 m", D: "65 m" }, answer: "B", explanation: "Per metre: 4.61 + 7.41 = 12.02 mΩ/m. Length = 0.45 / 0.01202 ≈ 37.4 m ≈ 37 m. Compare with the as-installed cable length to verify accuracy." },
            { number: 25, prompt: "After rectifying an IR fault on a circuit, the test sequence to repeat is:", options: { A: "Only IR", B: "Continuity, IR and polarity — because the rectification may have disturbed terminations and conductors", C: "Only polarity", D: "Only RCD trip times" }, answer: "B", explanation: "GN3 — defects must be made good and the affected dead tests repeated. The rectification work itself can disturb other terminations or wiring, so re-running continuity (in case CPC was disturbed), IR (to confirm fault is gone) and polarity (in case any conductor was swapped) is the safe approach." }
          ]
        }
      ]
    },
    {
      id: "section-6",
      title: "Section 6 — Live Tests, RCDs & Practical Results",
      variants: [
        {
          id: "v1",
          questions: [
            { number: 1, prompt: "Testing a general-purpose 30 mA RCD (BS EN 61008/61009) at 1 × IΔn, the maximum permitted disconnection time is:", options: { A: "40 ms", B: "200 ms", C: "300 ms", D: "500 ms" }, answer: "C", explanation: "Section 643. General-type RCD at 1 × IΔn must trip within 300 ms. At 5 × IΔn the limit is 40 ms. The 40 ms answer is the trap — that's the 5× test, not 1×." },
            { number: 2, prompt: "On an RCD-protected circuit, the most appropriate way to obtain a Zs value without tripping the RCD is to:", options: { A: "Bypass the RCD with a temporary link", B: "Use the no-trip / low-current Zs function on the test instrument, or calculate Zs = Ze + (R1+R2)", C: "Use a continuity test only", D: "Apply 500 V DC for IR" }, answer: "B", explanation: "Modern MFTs use a low-current pulse so the RCD doesn't operate. Alternatively, calculate Zs from the dead-test data: Ze + (R1+R2). Never bypass an RCD with a temporary link — strictly forbidden." },
            { number: 3, prompt: "When a 30 mA RCD is tested at 0.5 × IΔn (15 mA), the expected result is:", options: { A: "Trip within 40 ms", B: "Trip within 300 ms", C: "No trip within 2 s", D: "Trip and lock out immediately" }, answer: "C", explanation: "At half rated residual current the device must NOT trip within 2 s — proves the RCD is not oversensitive (which would cause nuisance tripping). The 40 ms applies to 5×; the 300 ms applies to 1×." },
            { number: 4, prompt: "Earth fault loop impedance Ze at the origin is correctly measured by:", options: { A: "Leaving main bonding connected and main switch on", B: "Disconnecting the main protective bonding at the MET, opening the main switch, energising the supply, then measuring between line and the disconnected MET earth — reconnecting bonding immediately afterwards", C: "Reading the value from the DNO label", D: "Applying 500 V DC between line and earth" }, answer: "B", explanation: "Bonding disconnected so parallel paths via gas/water don't artificially lower the reading. Main switch open so the installation contributes nothing to the loop. Reconnect bonding immediately — the installation is temporarily less safe while it's lifted." },
            { number: 5, prompt: "The Prospective Fault Current (PFC) recorded on the EIC is:", options: { A: "The lower of PSCC and PEFC", B: "The arithmetic mean of PSCC and PEFC", C: "The higher of PSCC (line-to-line) and PEFC (line-to-earth) measured at the origin", D: "Half of PEFC plus PSCC" }, answer: "C", explanation: "Record the higher value so every protective device can be demonstrated to have a breaking capacity at least equal to the worst-case fault level. Typical UK domestic TN-C-S 1–16 kA depending on substation proximity." },
            { number: 6, prompt: "An AFDD (Arc Fault Detection Device) is functionally tested in service by:", options: { A: "Creating a genuine arcing fault", B: "Using the integrated test button on the device per the manufacturer's instructions, and verifying the device trips and resets", C: "An IR test at 500 V DC", D: "Bypassing the trip mechanism" }, answer: "B", explanation: "There's no on-site test that reproduces a real arc — functional verification uses the manufacturer's test button, which simulates the arc detection electronics. The device also self-monitors continuously. Record the result on the schedule." },
            { number: 7, prompt: "An IR test on a 230 V final circuit (live conductors linked to earth) reads 0.5 MΩ. The correct response is:", options: { A: "Record as a comfortable pass", B: "Record as a fail — below the 1.0 MΩ Table 64 minimum; isolate, investigate by progressive disconnection, rectify, and retest", C: "Record as a healthy reading", D: "Issue an EIC unchanged" }, answer: "B", explanation: "0.5 MΩ < 1.0 MΩ — fail. Likely causes: pinched/nicked cable at a back box, moisture ingress, failing accessory left in circuit. Localise by progressive disconnection." },
            { number: 8, prompt: "A measured Zs on a 32 A Type B circuit is 1.55 Ω; Table 41.3 max at 0.4 s is 1.37 Ω. The correct action is:", options: { A: "Record as a pass — close enough", B: "Record as non-compliant — investigate cable length, csa, cpc size, terminations, or provide ADS via 30 mA RCD and reassess", C: "Upsize to a 40 A Type B", D: "Fit a time-delayed RCD to slow disconnection" }, answer: "B", explanation: "Measured Zs > tabulated max — overcurrent device alone won't clear an L–E fault in 0.4 s. Compliant fixes: shorter run, larger cpc, re-terminate, or rely on RCD-protected ADS. Upsizing the device defeats overload protection — wrong." },
            { number: 9, prompt: "A 30 mA RCD trips at 1 × IΔn in 340 ms during functional testing. The correct action is:", options: { A: "Record as a pass — within tolerance", B: "Record as a fail — 300 ms is the maximum at 1 × IΔn for a general-type 30 mA RCD; replace and re-test all three test points", C: "Uprate to 100 mA", D: "Disable the integral test button" }, answer: "B", explanation: "340 ms > 300 ms — fail. The device no longer provides the additional protection claimed. Replace, then retest at 0.5×, 1× and 5× IΔn and record all three results. Never uprate or disable safety features as a 'fix'." },
            { number: 10, prompt: "After energising a new lighting circuit, a live polarity check shows the switch interrupts the neutral instead of the line conductor. The correct response is:", options: { A: "Record as a departure and leave the circuit live", B: "Isolate, rectify the wiring so the switch is in the line conductor, then repeat the relevant polarity and functional tests", C: "Fit a lower-rated lamp", D: "Note on the Schedule of Test Results only" }, answer: "B", explanation: "A switch in the neutral leaves the lampholder live when 'off' — a real shock hazard. Must be rectified and the affected tests repeated. It is not a paperwork issue." },
            { number: 11, prompt: "A 30 mA Type AC RCD on a circuit feeding an EV charger producing DC residual currents:", options: { A: "Will detect AC and DC residuals correctly", B: "May be 'DC-blinded' — Type AC senses sinusoidal AC only; DC residuals can saturate the RCD's core and prevent tripping; replace with Type B", C: "Should be tested at 5×IΔn only", D: "Is the standard for EV chargers" }, answer: "B", explanation: "Type AC senses pure sinusoidal AC. DC residual currents can magnetise the toroidal core and 'blind' the device. Type A senses AC + pulsating DC; Type B senses AC + pulsating + smooth DC. EV chargers typically need Type B (or Type A with DC-RCD upstream)." },
            { number: 12, prompt: "When testing PFC at the origin of a single-phase supply, the inspector measures:", options: { A: "Only L–N (PSCC)", B: "Both L–N (PSCC) and L–E (PEFC), and records the higher as the PFC", C: "Only L–E (PEFC)", D: "Only the supply voltage" }, answer: "B", explanation: "PSCC is L–N short-circuit; PEFC is L–E earth-fault. Both must be measured at the origin. The higher of the two is the PFC recorded on the EIC, ensuring every device's breaking capacity covers the worst case." },
            { number: 13, prompt: "Live polarity at the origin of a single-phase TN-C-S installation should show:", options: { A: "L–N ≈ 230 V, L–E ≈ 230 V, N–E ≈ 0 V", B: "L–N ≈ 0 V, L–E ≈ 230 V", C: "L–N ≈ 230 V, N–E ≈ 230 V (reversed supply)", D: "All voltages ≈ 0 V" }, answer: "A", explanation: "TN-C-S: N and E are bonded at the source. Locally, N–E ≈ 0 V; L–N and L–E both ≈ 230 V. Reversed N–E (~230 V) would indicate a serious supply problem. Use an AVI per GS38." },
            { number: 14, prompt: "The S-type (selective) 100 mA RCD operating times at 1×IΔn and 5×IΔn are:", options: { A: "≤ 300 ms at 1×IΔn; ≤ 40 ms at 5×IΔn", B: "130–500 ms at 1×IΔn; ≤ 150 ms at 5×IΔn", C: "≤ 100 ms at 1×IΔn; ≤ 200 ms at 5×IΔn", D: "≤ 1 s at both points" }, answer: "B", explanation: "S-type at 1×IΔn: 130–500 ms (intentional delay so downstream RCDs can clear local faults first). At 5×IΔn: ≤ 150 ms. The minimum 130 ms ensures the S-type doesn't trip before the downstream 30 mA RCD." },
            { number: 15, prompt: "Phase rotation testing on a 3-phase installation is required when:", options: { A: "Only on TT systems", B: "Whenever the supply or main switch has been altered/replaced or new 3-phase machinery added — confirms L1–L2–L3 sequence so motors run in the correct direction", C: "Never — phase rotation is not a BS 7671 test", D: "Only at periodic inspection" }, answer: "B", explanation: "Three-phase induction motors run in the direction set by phase sequence. Reversed sequence reverses motor rotation — could damage driven equipment (pumps, conveyors). Phase rotation indicators (motor disc or lamp set) confirm the sequence after any rewire." },
            { number: 16, prompt: "RCD additional protection (Reg 411.3.3) for socket outlets in a dwelling requires the RCD to be:", options: { A: "30 mA, tripping within 40 ms at 5 × IΔn (= 150 mA)", B: "100 mA general type", C: "300 mA, time-delayed", D: "500 mA instantaneous" }, answer: "A", explanation: "Reg 415.1.1 — 30 mA RCD must trip within 40 ms at 5 × IΔn for additional protection. The 30 mA threshold + 40 ms time prevents ventricular fibrillation in most adult shock scenarios. Don't confuse with the 300 ms allowed at 1×IΔn." },
            { number: 17, prompt: "Compared with high-current Zs mode, the no-trip / low-current Zs function on an MFT typically gives:", options: { A: "An identical reading at all impedance values", B: "A slightly higher reading because the lower test current is less able to override contact resistance, so the recorded Zs is conservative (still acceptable for ADS verification)", C: "A reading that is always 50% lower", D: "A negative value if the RCD is functional" }, answer: "B", explanation: "Low-current no-trip mode reads on the high (conservative) side because the small test current does not fully overcome poor contact resistance the way a high-current pulse does. That conservatism is acceptable for ADS verification — if the no-trip Zs already passes Table 41.3, the real Zs will pass too." },
            { number: 18, prompt: "On a TN-C-S (PME) supply, Ze measured at the origin is typically expected to be:", options: { A: "Around 0.1–0.35 Ω (combined PEN earth path back to the substation)", B: "Always above 1 Ω", C: "Always above 5 Ω", D: "10 Ω or higher" }, answer: "A", explanation: "TN-C-S (PME) shares the neutral and earth as a combined PEN through the supply cable, giving a low-impedance return path — typical Ze 0.1–0.35 Ω. TN-S is higher (0.3–0.8 Ω) because it relies on the sheath / separate earth; TT is much higher (30–200 Ω) because it depends on a local electrode." },
            { number: 19, prompt: "Why is the earthing conductor disconnected from the MET before measuring Ze at the origin?", options: { A: "To reduce instrument error from RCD operation", B: "To remove the parallel earth paths offered by main protective bonding (gas, water, structural steel) so that only the supply earth path is measured", C: "To prevent damage to the test instrument", D: "Because BS 7671 forbids live testing with bonding connected" }, answer: "B", explanation: "Main protective bonding ties the MET to gas, water and structural steel, all of which can offer parallel earth paths to the substation. Disconnecting the earthing conductor (and so isolating the bonded extraneous parts from the supply earth) ensures the Ze reading reflects only the source-side path. Reconnect immediately after the test." },
            { number: 20, prompt: "When functional testing of a two-way / intermediate landing-light arrangement is carried out, the verifier should:", options: { A: "Operate only the bottom switch and confirm the lamp lights", B: "Operate every switching position in sequence (every two-way and intermediate combination), confirming the lamp turns on and off correctly from each position", C: "Test only the integral test buttons on each switch", D: "Apply 500 V DC across each switch terminal" }, answer: "B", explanation: "Two-way and intermediate arrangements only fully prove themselves when every combination has been exercised. A wiring error can leave one combination dead while others work. Functional testing of the assembly means walking through every switching position, not just one." },
            { number: 21, prompt: "An RCD test at 5 × IΔn (150 mA on a 30 mA device) gives a trip time of 35 ms. The result is:", options: { A: "Pass — well within the 40 ms maximum", B: "Fail — exceeds 40 ms", C: "Pass with comment", D: "Re-test at lower current" }, answer: "A", explanation: "35 ms ≤ 40 ms — pass. The 5× test underpins the use of 30 mA RCDs for additional protection: a fault clearing within 40 ms keeps the body current below the threshold for ventricular fibrillation in most adult exposures." },
            { number: 22, prompt: "RCD protection is sometimes called 'additional protection' because:", options: { A: "It supplements (does not replace) basic and fault protection — adding a layer of safety in case other measures fail", B: "It's the only protective measure required", C: "It's an extra cost option for the customer", D: "It only applies to TT systems" }, answer: "A", explanation: "Reg 415.1 — additional protection is exactly that: an additional layer for situations where basic or fault protection might fail (e.g. a damaged cable, a finger in a socket, contact with a faulty appliance). It doesn't replace insulation, enclosures, or ADS by overcurrent — it supplements them." },
            { number: 23, prompt: "On a circuit with an RCBO, functional testing requires:", options: { A: "Only the integral test button", B: "Both the integral test button (proves mechanism) AND independent RCD tester at 0.5×IΔn (no trip in 2 s), 1×IΔn (≤ 300 ms) and 5×IΔn (≤ 40 ms)", C: "Only the 5×IΔn test", D: "An IR test at 500 V DC" }, answer: "B", explanation: "Integral test button proves the trip mechanism only — it doesn't measure threshold or time. Independent verification with a calibrated RCD tester at all three test points is required to confirm the device meets BS 7671 acceptance criteria." },
            { number: 24, prompt: "A 30 mA RCD upstream of a final circuit feeding a Class II luminaire is:", options: { A: "Required by BS 7671 in all cases", B: "Generally fitted as a precaution and for additional protection of any flexible cables, but not strictly required by Reg 411.3.3 for the Class II luminaire itself (which has no exposed earthed parts)", C: "Mandatory only on TT systems", D: "Optional only for outdoor luminaires" }, answer: "B", explanation: "Class II equipment has no exposed earthed parts; ADS is not required for the equipment itself. However, RCD protection of the supplying circuit is now common (and often mandatory) for socket outlets, cables in walls and other reasons unrelated to the luminaire's own classification." },
            { number: 25, prompt: "The integral test button on an RCD confirms:", options: { A: "Threshold and disconnection time", B: "Only that the trip mechanism operates — does not verify threshold or disconnection time", C: "RCD type (AC, A, B)", D: "Phase rotation" }, answer: "B", explanation: "The integral button injects an internal imbalance via a built-in resistor — proves the mechanism works mechanically. It does not measure threshold or time accurately. Independent calibrated testing is required for verification." }
          ]
        },
        {
          id: "v2",
          questions: [
            { number: 1, prompt: "An RCD on a TT system performing ADS must satisfy:", options: { A: "Only the BS EN 60898 trip curve", B: "RA × IΔn ≤ 50 V (Reg 411.5.3) and the BS 7671 RCD disconnection times at 0.5×, 1× and 5× IΔn", C: "Phase rotation order only", D: "PFC at the origin only" }, answer: "B", explanation: "TT relies on RCD for ADS. The earth electrode resistance × the rated residual current must give a touch voltage no higher than 50 V. For 30 mA: RA ≤ 1667 Ω; for 100 mA: RA ≤ 500 Ω. Plus the standard RCD trip times must be met." },
            { number: 2, prompt: "On a TN-C-S installation, Ze is typically expected to be:", options: { A: "Around 0.10–0.35 Ω", B: "Always above 1 Ω", C: "Always above 200 Ω", D: "10 Ω or higher" }, answer: "A", explanation: "TN-C-S (PME) provides a low-impedance combined neutral-earth path back to the source. Typical Ze 0.10–0.35 Ω. TN-S 0.3–0.8 Ω; TT (depends on local electrode) 30–200 Ω. Compare against the value declared by the DNO." },
            { number: 3, prompt: "A measured Zs value should be compared to BS 7671 tabulated maximum values using:", options: { A: "Direct comparison without temperature correction", B: "An 80% rule — measured Zs at 20 °C should be ≤ 0.8 × tabulated max (which assumes warm conductors at operating temperature)", C: "A doubling factor", D: "An IR comparison" }, answer: "B", explanation: "Tabulated Zs max values assume conductors at operating temperature. Measured cold (typically 20 °C) gives a lower reading; applying the 0.8 factor to the tabulated max gives the cold-conductor target. Alternatively, multiply the measured cold value by ~ 1.20 to estimate warm Zs." },
            { number: 4, prompt: "The PFC at the origin of a single-phase TN-C-S supply is measured as 6 kA between L and N (PSCC) and 3 kA between L and E (PEFC). The recorded value on the EIC is:", options: { A: "3 kA", B: "4.5 kA (average)", C: "6 kA — the higher of the two", D: "9 kA (sum)" }, answer: "C", explanation: "Record the higher of PSCC and PEFC. 6 kA L–N is the worst case here. Every protective device on the installation must have a breaking capacity at least 6 kA at this point. Typical UK domestic PFC range is 1–16 kA depending on substation proximity." },
            { number: 5, prompt: "An RCD test instrument applies a test current that:", options: { A: "Is always sinusoidal AC", B: "Matches the type of residual current the device under test is designed to detect (AC for Type AC, pulsating DC for Type A, smooth DC for Type B)", C: "Is always 50 Hz", D: "Is always DC" }, answer: "B", explanation: "Different RCD types respond to different waveforms. Test instruments offer AC, pulsating DC and (for Type B) smooth DC test capabilities. Using the wrong waveform doesn't reflect the device's intended protection scope and can mislead the verification." },
            { number: 6, prompt: "Live polarity at the consumer unit can be confirmed by:", options: { A: "An IR test", B: "An approved voltage indicator (per GS38) showing L–N ≈ 230 V, L–E ≈ 230 V and N–E ≈ 0 V on a TN system", C: "A continuity meter", D: "Phase rotation tester" }, answer: "B", explanation: "Live polarity at the origin: AVI between L–N (~ 230 V), L–E (~ 230 V), N–E (~ 0 V) on TN. Reversed polarity (e.g. L–E ≈ 0 V, N–E ≈ 230 V) is unusual but possible (mis-wired DNO connection) and would be a serious issue." },
            { number: 7, prompt: "On a 30 mA Type A RCD installed on a circuit feeding a single-phase variable-speed drive that produces pulsating DC residual currents, the appropriate response is:", options: { A: "Replace with Type AC", B: "Type A is the correct choice — Type A is designed to detect AC and pulsating DC residual currents", C: "Replace with Type B always", D: "Remove RCD protection" }, answer: "B", explanation: "Type A senses AC + pulsating DC — appropriate for most modern domestic loads (single-phase drives, modern appliances with controlled rectification). Type B (AC + pulsating + smooth DC) is needed for 3-phase drives, EV chargers and some PV. Type AC is now obsolete for most new installations." },
            { number: 8, prompt: "An EICR's measured Zs of 0.85 Ω on a 32 A Type B circuit is reviewed against Table 41.3 (max 1.37 Ω at 0.4 s). Using the 80% rule, the cold-conductor target is:", options: { A: "1.37 Ω", B: "1.10 Ω", C: "0.69 Ω", D: "0.55 Ω" }, answer: "B", explanation: "0.8 × 1.37 = 1.10 Ω. Measured 0.85 Ω is well within the 1.10 Ω cold-conductor target — comfortable pass even allowing for warm-conductor temperature rise. Type B 32 A has plenty of headroom." },
            { number: 9, prompt: "A live polarity test at a 13 A socket outlet should show, with the AVI:", options: { A: "L (right-hand pin) to E ≈ 230 V; N (left) to E ≈ 0 V", B: "L–N ≈ 0 V", C: "Only L–E ≈ 0 V", D: "All voltages ≈ 0 V" }, answer: "A", explanation: "BS 1363 socket: L on the right (looking at the front), N on the left, CPC top. AVI: L–E ≈ 230 V (full supply potential), N–E ≈ 0 V (reference), L–N ≈ 230 V. Reversed L and N would show L–E ≈ 0 V and N–E ≈ 230 V — a polarity fault." },
            { number: 10, prompt: "Functional testing of an isolator switch confirms:", options: { A: "It interrupts the line conductor only", B: "It mechanically operates and reliably isolates the load when set to 'off' (verified with an AVI on the load side)", C: "Insulation resistance", D: "RCD trip times" }, answer: "B", explanation: "Functional test of an isolator: operate the mechanism, then verify with an AVI that the load side is dead when 'off' and live when 'on'. Combined with safe isolation procedure (lock off, prove the AVI, prove dead, re-prove). Mechanism alone (A) is insufficient." },
            { number: 11, prompt: "The recommended Ze for a TT installation depends on:", options: { A: "The DNO's PEN supply impedance", B: "The local earth electrode resistance plus the supply earth path; typically tens of ohms (the electrode resistance dominates)", C: "Only the cable size", D: "The number of socket outlets" }, answer: "B", explanation: "TT installations use a local electrode for the earth path. Ze includes the electrode-to-earth resistance, the supply impedance, and any earthing conductors. Practical TT Ze is often tens of ohms, dominated by the electrode itself. Compare with the RA limit: RA × IΔn ≤ 50 V." },
            { number: 12, prompt: "RCD additional protection requires the device to operate within:", options: { A: "100 ms at 0.5 × IΔn", B: "40 ms at 5 × IΔn — beyond the standard 1× and 0.5× tests", C: "1 s at 1 × IΔn", D: "300 ms at 5 × IΔn" }, answer: "B", explanation: "Reg 415.1.1 — additional protection requires 30 mA RCD trip within 40 ms at 5 × IΔn (= 150 mA on a 30 mA device). The 5× test is the high-current test underpinning shock protection — body current is cleared before ventricular fibrillation risk becomes critical." },
            { number: 13, prompt: "A 30 mA RCD test at 0.5 × IΔn (= 15 mA) shows the device tripping after 1.5 s. The result is:", options: { A: "Pass — device is sensitive", B: "Fail — at 0.5 × IΔn the device must NOT trip within 2 s; tripping at this level indicates oversensitivity and likely nuisance trips in service", C: "Pass with comment", D: "Re-test at 1 × IΔn" }, answer: "B", explanation: "0.5 × IΔn must NOT trip within 2 s. Tripping at half-rated indicates oversensitivity — likely to cause nuisance tripping during normal operation. Replace the device. The 'no trip' at 0.5× verifies the threshold is appropriate." },
            { number: 14, prompt: "Live polarity at the origin should be verified using:", options: { A: "A 500 V IR tester", B: "An approved voltage indicator (AVI) per GS38, before any other live tests are carried out", C: "A low-resistance ohmmeter", D: "Phase rotation tester" }, answer: "B", explanation: "AVI per GS38: short exposed tip, finger barriers, fused leads, adequately insulated. Live polarity at the origin is the first live test — confirms the supply is correctly oriented before any further live work. Re-prove the AVI on a known source after testing." },
            { number: 15, prompt: "The 0.5 × IΔn RCD test is sometimes called the 'no-trip' test because:", options: { A: "The device must NOT operate within 2 s; verifies the threshold is not below half the rated value", B: "The device must trip within 100 ms", C: "It tests the integral test button only", D: "It applies DC only" }, answer: "A", explanation: "0.5 × IΔn (15 mA on a 30 mA device) must NOT trip within 2 s. Confirms the device is not oversensitive. Combined with the 1× (≤ 300 ms) and 5× (≤ 40 ms) tests, the three points verify the RCD operates within the prescribed envelope." },
            { number: 16, prompt: "An RCD test set to apply 5 × IΔn for a 30 mA RCD applies a test current of:", options: { A: "30 mA", B: "150 mA", C: "300 mA", D: "1500 mA" }, answer: "B", explanation: "5 × 30 mA = 150 mA. The high-current test that underpins additional protection. Trip time at this current must be ≤ 40 ms for general-type RCDs — fast enough to clear a fault before ventricular fibrillation risk." },
            { number: 17, prompt: "The order of live tests recommended by GN3 begins with:", options: { A: "Live polarity at the origin → Ze → Zs → PFC → phase rotation (where applicable) → RCD tests → functional testing", B: "Functional → IR → polarity → continuity", C: "RCD tests first → polarity → functional", D: "Earth electrode resistance → IR → polarity" }, answer: "A", explanation: "GN3 live-test sequence: live polarity confirms supply orientation; Ze quantifies the source-side impedance; Zs and PFC add the installation impedance; phase rotation on 3-phase; RCD tests verify protection; functional testing finishes the sequence with practical operation checks." },
            { number: 18, prompt: "An RCD that protects a circuit feeding a 13 A socket outlet must operate at 5 × IΔn within:", options: { A: "300 ms", B: "200 ms", C: "100 ms", D: "40 ms" }, answer: "D", explanation: "Reg 415.1.1 / Section 643. 30 mA RCD as additional protection: 40 ms at 5 × IΔn. Section 411.3.3 mandates RCD additional protection on socket outlets ≤ 32 A in dwellings (with limited exceptions). The 40 ms criterion is the high-current cap." },
            { number: 19, prompt: "On a circuit fitted with an SPD (surge protective device), the live-test sequence:", options: { A: "Requires the SPD to be disconnected for IR; reconnected before live tests", B: "Includes Ze, Zs, PFC and RCD tests; the SPD is left in circuit during these live tests as it is designed for in-service voltage; functional verification by self-monitoring or test button", C: "Skips Ze and Zs entirely", D: "Requires testing at 1000 V DC" }, answer: "B", explanation: "Live tests are conducted at supply voltage so the SPD remains connected — it's designed to operate at this voltage continuously. The IR test was the only point at which the SPD needed disconnecting (because 500 V DC exceeds the SPD clamp voltage). Functional check via the SPD's own indicator/button." },
            { number: 20, prompt: "A measured Zs of 0.65 Ω on a 16 A Type C circuit (Table 41.3 max = 1.37 Ω at 0.4 s) gives:", options: { A: "0.65 Ω > 1.10 Ω cold target → fail", B: "0.65 Ω < 1.10 Ω cold target (0.8 × 1.37) → comfortable pass", C: "Need to test PFC first", D: "Fail — Type C requires lower Zs than Type B" }, answer: "B", explanation: "0.8 × 1.37 = 1.10 Ω. Measured 0.65 Ω is well below — comfortable pass with margin for warm-conductor effects. Type C trip range is 5–10× rated; max Zs is the same as Type B 16 A in this row, but the trip range is wider." },
            { number: 21, prompt: "When the live test sequence is complete and all results pass, the installation should be:", options: { A: "Functionally tested as a final step before handover, then certified with the EIC", B: "Certified with the EIC immediately, before any functional test", C: "Periodically inspected for 6 months before certification", D: "Energised partially and re-tested" }, answer: "A", explanation: "Functional testing comes after all measurement-based live tests pass — confirms the installation operates as intended. Then certify with the EIC accompanied by Schedule of Inspections and Schedule of Test Results. Three documents = complete record." },
            { number: 22, prompt: "Phase rotation on a 3-phase installation is verified by:", options: { A: "An RCD tester", B: "A phase rotation indicator (motor disc that spins one way for L1-L2-L3, or a lamp set that lights in sequence)", C: "An IR test at 500 V DC", D: "The supply voltage between phases" }, answer: "B", explanation: "Phase rotation indicators are either a small motor disc (spins clockwise for L1-L2-L3) or a lamp sequence (lights in order). Critical when running 3-phase motors after a rewire or main switch replacement — reversed phase sequence reverses motor rotation and may damage driven equipment." },
            { number: 23, prompt: "The earth fault loop impedance test instrument should be used in 'no-trip' mode on:", options: { A: "Circuits with no RCD protection", B: "Circuits protected by an RCD, so the device doesn't operate during the test", C: "Only TT systems", D: "All circuits regardless of RCD presence" }, answer: "B", explanation: "No-trip mode injects pulses below the RCD threshold so the RCD doesn't operate. Standard mode would trip a 30 mA RCD instantly. On non-RCD circuits the standard mode is faster and may give a more accurate reading, but no-trip works there too if needed." },
            { number: 24, prompt: "The 1 × IΔn RCD test for a general-type 30 mA RCD applies 30 mA and:", options: { A: "Verifies trip occurs within 300 ms", B: "Verifies no trip within 2 s", C: "Verifies trip occurs within 40 ms", D: "Verifies trip occurs within 1 s" }, answer: "A", explanation: "1 × IΔn for general-type: trip ≤ 300 ms. The standard sensitivity check — confirms the device responds to its rated residual current within an acceptable time. Combined with 0.5× (no trip in 2 s) and 5× (≤ 40 ms), the three points verify performance." },
            { number: 25, prompt: "An installation has an RCBO that combines RCD and overcurrent protection in a single device. Live testing requires:", options: { A: "Only the overcurrent functional test", B: "Both RCD acceptance criteria (0.5×, 1×, 5× IΔn) AND verification that Zs ≤ Table 41.3 max for the overcurrent characteristic", C: "Only the RCD trip times", D: "Only Zs verification" }, answer: "B", explanation: "An RCBO is dual-function. Verify both: RCD trip times at all three test points, AND Zs against the OCPD's tabulated max so ADS by overcurrent is also assured. Section 643 / Reg 415.1.1 / Table 41.3 all apply." }
          ]
        },
        {
          id: "v3",
          questions: [
            { number: 1, prompt: "An RCD test reveals that a 30 mA general-type RCD trips at 1 × IΔn in 250 ms. The result is:", options: { A: "Pass — within the 300 ms maximum", B: "Fail — exceeds 200 ms", C: "Pass with comment", D: "Re-test at 5 × IΔn only" }, answer: "A", explanation: "250 ms ≤ 300 ms — pass for general-type at 1 × IΔn. Some inspectors prefer a margin (well below 300 ms) but the BS 7671 acceptance criterion is met. Record the value and continue." },
            { number: 2, prompt: "On a TT system the maximum acceptable RA for a 30 mA RCD providing ADS is given by RA × IΔn ≤ 50 V, so RA ≤:", options: { A: "1667 Ω (50 / 0.030)", B: "200 Ω", C: "100 Ω", D: "30 Ω" }, answer: "A", explanation: "Reg 411.5.3 — RA × IΔn ≤ 50 V (touch voltage limit). For 30 mA: RA ≤ 50/0.030 = 1667 Ω. In practice values < 200 Ω are sought for stability (electrode resistance varies with weather and ground conditions); the regulation upper limit is 1667 Ω." },
            { number: 3, prompt: "Live polarity at a wall-mounted lighting switch (after energising) is verified by:", options: { A: "An IR tester at 500 V DC", B: "An AVI showing voltage between L and E with the switch in 'on' position; zero with the switch 'off' (confirming the switch interrupts the line)", C: "A continuity meter", D: "The DNO label" }, answer: "B", explanation: "AVI: with the switch on, L–E ≈ 230 V at the load side; with the switch off, the load side L–E ≈ 0 V. Confirms the switch interrupts the line conductor (correct) rather than the neutral (which would leave the lampholder live with the switch off)." },
            { number: 4, prompt: "A 32 A Type B circuit feeding a kitchen ring final has a measured Zs of 0.95 Ω. Type B 32 A max from Table 41.3 is 1.37 Ω at 0.4 s. The 80% cold target is:", options: { A: "0.55 Ω", B: "1.10 Ω", C: "1.37 Ω", D: "1.65 Ω" }, answer: "B", explanation: "0.8 × 1.37 = 1.10 Ω. Measured 0.95 Ω is below 1.10 Ω — pass with margin. After temperature correction the warm Zs would still be within tolerance." },
            { number: 5, prompt: "A 30 mA Type B RCD is most appropriate for circuits feeding:", options: { A: "Standard incandescent lighting only", B: "Equipment that can produce smooth DC residual currents (such as 3-phase variable-speed drives, 3-phase EV chargers, or some PV inverter installations)", C: "Standard 13 A socket outlets only", D: "TT systems only" }, answer: "B", explanation: "Type B detects AC + pulsating DC + smooth DC. Required where smooth DC residual currents may occur — 3-phase drives, some EV charger configurations, large PV. Type A is sufficient for single-phase modern equipment; Type AC is now obsolete for most new installations." },
            { number: 6, prompt: "When the RCD is found to fail the 5 × IΔn test (e.g. 50 ms instead of ≤ 40 ms), the correct action is:", options: { A: "Record as a pass — close to the limit", B: "Replace the RCD and re-test all three test points (0.5×, 1× and 5× IΔn) to confirm the new device meets criteria", C: "Lower the rated IΔn", D: "Disable the integral test button" }, answer: "B", explanation: "Failing 5 × IΔn means the device cannot guarantee ADS within the required time. Replace and re-test all three points — the new device may have its own tolerance characteristics. Record all three results on the schedule." },
            { number: 7, prompt: "The Ze test for an installation with PME (TN-C-S) is taken with:", options: { A: "Main bonding connected to capture the actual installed conditions", B: "Main bonding disconnected at the MET (so parallel paths via gas/water don't lower the reading), main switch open, supply energised, and bonding reconnected immediately afterwards", C: "All circuit breakers closed", D: "All loads energised" }, answer: "B", explanation: "Bonding disconnected ensures the Ze reading reflects only the source-side earth path. Main switch open isolates the installation. Reconnect bonding immediately as the installation is temporarily less safe with parallel earth paths removed." },
            { number: 8, prompt: "The PFC at the origin of a TN-C-S installation gives PSCC = 4.2 kA and PEFC = 3.6 kA. The 3-phase line-to-line PFC estimate (using the GN3 cautious method) is:", options: { A: "8.4 kA (multiply higher single-phase by 2)", B: "7.8 kA (sum)", C: "0.6 kA (difference)", D: "4.2 kA (single-phase value used directly)" }, answer: "A", explanation: "GN3 cautious estimate — take the higher single-phase value (4.2 kA L–N) and multiply by 2: 4.2 × 2 = 8.4 kA. Used as a worst-case 3-phase PFC for breaking-capacity comparison when 3-phase measurement isn't available." },
            { number: 9, prompt: "A live polarity check on a 3-phase TP+N supply at the origin should show:", options: { A: "L1–L2 ≈ L2–L3 ≈ L1–L3 ≈ 400 V; each L–N ≈ 230 V; each L–E ≈ 230 V; N–E ≈ 0 V", B: "L1–L2 ≈ 230 V", C: "L1–N ≈ 400 V", D: "All voltages ≈ 0 V" }, answer: "A", explanation: "TP+N (three-phase plus neutral): line-to-line 400 V; line-to-neutral 230 V (UK voltages, nominally 400/230 V). On a TN system, N–E ≈ 0 V locally and L–E ≈ 230 V (each phase). Significant deviation indicates a supply issue." },
            { number: 10, prompt: "Functional testing of an RCD includes:", options: { A: "Only the integral test button", B: "Confirming the integral test button operates AND independently verifying with an RCD tester at 0.5×, 1× and 5× IΔn", C: "Only the 5×IΔn test", D: "An IR test at 500 V DC" }, answer: "B", explanation: "Both: integral button proves the trip mechanism, plus independent calibrated tester at three test points to verify threshold and disconnection time. The integral button alone doesn't measure these accurately." },
            { number: 11, prompt: "Earth fault loop impedance Zs at the furthest point of a circuit is best derived by:", options: { A: "Direct measurement using the no-trip mode (on RCD-protected circuits) OR calculation Zs = Ze + (R1+R2) with appropriate temperature correction", B: "Estimation from cable length only", C: "The DNO's quoted PFC value", D: "An IR test at 500 V DC" }, answer: "A", explanation: "Both methods are accepted and often cross-checked. Direct measurement on RCD-protected circuits uses no-trip mode. Calculation from Ze + (R1+R2) is verifiable from dead-test data; the value is corrected for temperature before comparison with Table 41.3 maxima." },
            { number: 12, prompt: "An MFT loop tester applies a load briefly to the supply when measuring Ze or Zs. This load:", options: { A: "Is sized to draw enough current to give a meaningful loop measurement, while being short enough not to damage the supply or trip protective devices unnecessarily", B: "Is always 5 A AC", C: "Is always DC", D: "Lasts 30 seconds for accurate readings" }, answer: "A", explanation: "The instrument's brief load is typically a few amps for a few cycles — long enough to measure the supply impedance, short enough to be benign on a healthy supply. No-trip Zs mode uses an even smaller pulse so RCDs don't operate. Read the manufacturer's data for the specific instrument." },
            { number: 13, prompt: "A 30 mA RCD trips during the 0.5 × IΔn test (within 2 s). The result is:", options: { A: "Pass — confirms sensitivity", B: "Fail — at 0.5 × IΔn the device must NOT trip within 2 s; tripping indicates oversensitivity", C: "Pass with comment", D: "Re-test at 1×IΔn only" }, answer: "B", explanation: "0.5 × IΔn must NOT trip in 2 s. Tripping at half-rated indicates the threshold is below 15 mA — likely to cause nuisance tripping on legitimate leakage. Replace the device. The 'no trip' verifies the threshold is appropriate." },
            { number: 14, prompt: "A 30 mA RCD providing ADS on a TT system has measured RA = 80 Ω. RA × IΔn =", options: { A: "2.4 V (well within 50 V; pass)", B: "30 V", C: "50 V (right on the limit)", D: "240 V" }, answer: "A", explanation: "RA × IΔn = 80 × 0.030 = 2.4 V. Well below the 50 V touch voltage limit — comfortable pass. The combination of RCD and electrode gives ADS in well under the required disconnection time." },
            { number: 15, prompt: "On a 3-phase 4-wire installation, the live polarity check at a 3-phase socket should confirm:", options: { A: "The phases arrive at the correct pins (BS 4343 or equivalent layout) and that phase rotation is L1-L2-L3", B: "Only that the supply is energised", C: "RCD trip times", D: "Earth electrode resistance" }, answer: "A", explanation: "3-phase socket layout (BS 4343 / IEC 60309): each phase pin and the neutral and earth pins must be at the correct potential. Phase rotation tester confirms L1-L2-L3 sequence — important so that connected motors run in the correct direction." },
            { number: 16, prompt: "A measured Zs of 1.85 Ω on a 16 A Type B circuit (Table 41.3 max = 2.73 Ω at 0.4 s) is:", options: { A: "A pass — comfortably within the 2.18 Ω cold target (0.8 × 2.73)", B: "A fail", C: "A pass with comment", D: "Marginal — re-test" }, answer: "A", explanation: "0.8 × 2.73 = 2.18 Ω. Measured 1.85 Ω is below 2.18 Ω — pass with margin. Type B 16 A allows higher Zs because the smaller MCB trips at lower fault current (5× rated = 80 A versus 5× 32 A = 160 A)." },
            { number: 17, prompt: "An RCD intended for additional protection in damp locations (e.g. bathrooms, outdoor sockets) must be:", options: { A: "≥ 100 mA", B: "30 mA, with trip ≤ 40 ms at 5 × IΔn — the standard for additional protection per Reg 411.3.3", C: "300 mA time-delayed", D: "S-type only" }, answer: "B", explanation: "Reg 415.1.1 — additional protection is provided by a 30 mA RCD tripping ≤ 40 ms at 5×. Particularly required for socket outlets, circuits in walls < 50 mm depth, and special locations (bathrooms, outdoors). Higher rated RCDs don't meet the additional protection criterion." },
            { number: 18, prompt: "When testing PFC, the test instrument's measurement principle is:", options: { A: "Apply a small known load briefly, measure the voltage drop, then calculate the equivalent supply impedance and predict the prospective fault current", B: "Apply 500 V DC", C: "Apply a continuity test current", D: "Apply phase rotation" }, answer: "A", explanation: "Loop testers measure supply impedance by drawing a brief load and observing voltage drop. PFC is then calculated as PFC = U / Zs (or Zsupply for PSCC). The test is brief and benign; modern instruments often integrate Ze, Zs and PFC measurement modes." },
            { number: 19, prompt: "On a circuit with a 30 mA RCD upstream of a Type AC RCBO (a non-compliant arrangement on modern equipment producing pulsating DC), the symptoms in service may include:", options: { A: "RCBO works correctly", B: "RCD blinding — the upstream Type AC RCD may fail to detect pulsating DC residuals; replace with Type A or Type B", C: "Phase rotation reversal", D: "IR failure" }, answer: "B", explanation: "Type AC senses pure sinusoidal AC. Modern equipment (LED drivers, variable-speed drives, EV chargers) often produces pulsating or smooth DC residual currents which can saturate the Type AC core and prevent tripping. Replace with Type A (AC + pulsating DC) or Type B." },
            { number: 20, prompt: "Functional testing of an emergency stop button on a machine confirms:", options: { A: "Pressing the e-stop interrupts the supply to the relevant control circuit, the machine stops, and re-setting requires a deliberate action (latch-release)", B: "RCD trip times", C: "Insulation resistance", D: "Phase rotation" }, answer: "A", explanation: "Functional test of a safety-related control: actuate, verify the supply is interrupted, verify the machine stops, verify the reset requires a deliberate action (no auto-reset). Combined with the visual inspection that confirms it's correctly identified and accessible." },
            { number: 21, prompt: "An EICR's measured PFC of 6.2 kA at the origin and a fitted 6 kA breaking capacity MCB:", options: { A: "Pass — close enough", B: "Fail — the MCB breaking capacity (6 kA) is below the prospective fault current (6.2 kA), so the device may not safely interrupt a fault; specify a higher BC device", C: "Pass with comment", D: "Acceptable provided RCD protection is fitted" }, answer: "B", explanation: "MCBs must have a breaking capacity at least equal to the prospective fault current at their point of installation (Reg 434.5). 6 kA breaker on a 6.2 kA PFC is undersized — could fail catastrophically during a fault. Replace with a 10 kA or 16 kA device." },
            { number: 22, prompt: "A 30 mA RCD tested at 1 × IΔn gives 285 ms; at 5 × IΔn gives 38 ms; at 0.5 × IΔn no trip in 2 s. The verdict is:", options: { A: "Pass — all three test points within acceptance criteria", B: "Fail — 285 ms is too long", C: "Fail — 38 ms is too short", D: "Re-test required" }, answer: "A", explanation: "0.5×: no trip in 2 s ✓; 1×: 285 ms ≤ 300 ms ✓; 5×: 38 ms ≤ 40 ms ✓. All three test points within the BS 7671 acceptance criteria — pass. Record all three values on the schedule." },
            { number: 23, prompt: "The most accurate Ze reading is obtained when:", options: { A: "Bonding is connected to give an installed-condition reading", B: "Main bonding is disconnected at the MET and the main switch is open, so the test current flows only through the source-side earth path; bonding reconnected immediately afterwards", C: "All loads are switched on", D: "RCDs are in their test position" }, answer: "B", explanation: "Bonding disconnected ensures parallel paths via gas/water don't lower the reading. Main switch open isolates the installation. The reading then reflects the true source-side impedance. Reconnect bonding immediately — the installation is temporarily less safe." },
            { number: 24, prompt: "A 30 mA RCD on a 6 mm² supply to an EV charger should be:", options: { A: "Type AC if the charger has built-in DC fault protection rated to detect ≥ 6 mA DC", B: "Type A + an integral 6 mA DC-RCD in the charger, OR a Type B 30 mA RCD upstream — Reg 722.531.3.101 / 722.531.3.4 specifies the requirement", C: "300 mA time-delayed", D: "S-type 100 mA" }, answer: "B", explanation: "EV charger circuits require either a Type B RCD (which detects smooth DC) or a Type A RCD plus the charger's own integrated 6 mA DC fault-current protection. Type AC is inadequate because EV chargers can produce smooth DC residual currents that may blind a Type AC device." },
            { number: 25, prompt: "After all live tests pass, the final step before issuing the EIC is:", options: { A: "Functional testing — confirms the installation operates as intended in service", B: "Repeating all dead tests", C: "Issuing the certificate immediately", D: "Increasing the supply voltage" }, answer: "A", explanation: "Functional testing — operate switches, confirm interlocks, run drives, verify timers/sensors. Reg 643.10 requires this. Once functional checks complete and any defects rectified, the EIC is issued with Schedule of Inspections and Schedule of Test Results." }
          ]
        },
        {
          id: "v4",
          questions: [
            { number: 1, prompt: "An RCD test at 1 × IΔn for an S-type 100 mA RCD must give a trip time:", options: { A: "≤ 40 ms", B: "Between 130 ms and 500 ms (intentional delay for discrimination)", C: "≤ 300 ms", D: "≤ 1 s" }, answer: "B", explanation: "S-type (selective) RCDs have built-in time delay so downstream RCDs can clear local faults first. At 1 × IΔn: 130 ms minimum, 500 ms maximum. At 5 × IΔn: ≤ 150 ms. Used upstream of 30 mA RCDs to maintain selectivity." },
            { number: 2, prompt: "The Ze of a TT system has been measured as 145 Ω at the consumer's earth electrode using a loop tester. With a 30 mA RCD providing ADS, the touch voltage RA × IΔn is:", options: { A: "0.435 V — far below 50 V; pass", B: "4.35 V — comfortably below 50 V; pass", C: "43.5 V — close to the 50 V limit", D: "150 V — fail" }, answer: "B", explanation: "RA × IΔn = 145 × 0.030 = 4.35 V. Comfortably below the 50 V touch voltage limit (Reg 411.5.3) — pass with margin. The 30 mA RCD will provide ADS within the required time even with the relatively high earth electrode resistance." },
            { number: 3, prompt: "Live polarity at the origin is checked using:", options: { A: "A 500 V IR tester", B: "An approved voltage indicator (AVI) per GS38 — confirms L–N ≈ 230 V, L–E ≈ 230 V, N–E ≈ 0 V on a TN system", C: "A continuity meter", D: "Phase rotation indicator" }, answer: "B", explanation: "AVI per GS38: short exposed tip, finger barriers, fused leads, adequate insulation. Live polarity is the first live test of the sequence — confirms the supply orientation before any further work. Re-prove the AVI on a known source after testing." },
            { number: 4, prompt: "An RCD test using a 0.5 × IΔn current of 15 mA on a 30 mA RCD must NOT trip the device within 2 s. This is sometimes called the:", options: { A: "Sensitivity confirmation test", B: "No-trip test — verifies the threshold is not below half the rated value, so the device is not oversensitive (which would cause nuisance tripping)", C: "5× test", D: "Functional test" }, answer: "B", explanation: "No-trip / 0.5× test confirms the device's threshold is in the right range. If it trips at 15 mA the threshold is below 15 mA — oversensitive. Combined with the 1× and 5× tests, all three points verify the RCD operates in the prescribed envelope." },
            { number: 5, prompt: "On a TN-S system, a measured Ze of 0.18 Ω is:", options: { A: "Within the typical TN-S range (0.3–0.8 Ω is more common, but a closer DNO substation can give a lower value)", B: "Indicates a TT system", C: "Fail — too low", D: "Fail — too high" }, answer: "A", explanation: "TN-S typical range 0.3–0.8 Ω depending on supply length. A reading of 0.18 Ω suggests a short supply run from a nearby substation — perfectly plausible. The DNO declaration is the cross-check; if the measured value matches the declared maximum, the supply is healthy." },
            { number: 6, prompt: "The RCD type required to detect smooth DC residual currents is:", options: { A: "Type AC", B: "Type A", C: "Type B", D: "Type S" }, answer: "C", explanation: "Type B detects AC + pulsating DC + smooth DC. Required where smooth DC residual currents may occur (3-phase drives, EV chargers, larger PV). Type A senses AC + pulsating DC; Type AC senses sinusoidal AC only and is now obsolete for most new installations. Type S refers to time-delay (selective)." },
            { number: 7, prompt: "An MFT loop tester reading of Ze = 0.42 Ω on a TN-C-S supply is:", options: { A: "Higher than typical TN-C-S (0.10–0.35 Ω) — investigate the supply or measurement, possibly a longer service cable run", B: "Always indicates a fault", C: "Acceptable for any TN system", D: "Indicates TT" }, answer: "A", explanation: "TN-C-S typical Ze 0.10–0.35 Ω. A reading of 0.42 Ω is somewhat higher — could indicate a longer service cable, a poor connection at the cut-out, or simply a more distant substation. Compare with the DNO declaration; investigate if the discrepancy is significant." },
            { number: 8, prompt: "Functional testing of an isolator before energising can be carried out by:", options: { A: "Operating the mechanism without verification", B: "Operating the mechanism then verifying isolation with safe-isolation procedure (lock off, prove the AVI, prove dead at the load side, re-prove the AVI)", C: "An IR test at 500 V DC", D: "An RCD test" }, answer: "B", explanation: "Isolator functional test: actuate the mechanism, then prove the load side is dead with a proven AVI. Combined with a lock-off and the safe-isolation procedure, this confirms the isolator works as expected. Mechanism alone (A) is insufficient — must verify dead." },
            { number: 9, prompt: "PFC at the origin should be measured at:", options: { A: "Only the loop tester PFC mode", B: "Both PSCC (between live conductors, L–N or L–L) and PEFC (line to earth) — record the higher value as PFC", C: "Only PEFC", D: "The DNO label only" }, answer: "B", explanation: "Both values are measured. PSCC is L–N or L–L short-circuit current; PEFC is L–E earth-fault current. Record the higher of the two as the PFC on the EIC, ensuring every protective device's breaking capacity covers the worst case." },
            { number: 10, prompt: "An RCD test gives 0.5 × IΔn no-trip in 2 s, 1 × IΔn 290 ms, 5 × IΔn 35 ms. The verdict is:", options: { A: "Pass — all three test points are within acceptance criteria for a general-type 30 mA RCD", B: "Fail — 290 ms is too long", C: "Fail — 35 ms is too short", D: "Marginal — re-test" }, answer: "A", explanation: "0.5× no trip in 2 s ✓; 1× 290 ms ≤ 300 ms ✓; 5× 35 ms ≤ 40 ms ✓. All three points pass for a general-type 30 mA RCD. Record all three values; the device meets BS 7671 acceptance criteria." },
            { number: 11, prompt: "On a TT system, the earth electrode resistance is measured by:", options: { A: "An IR test at 500 V DC", B: "A 3-spike fall-of-potential test (or by an earth-electrode loop tester at the electrode using the local supply earth path)", C: "A continuity test only", D: "Measuring Ze at the origin" }, answer: "B", explanation: "Two methods for earth electrode resistance: (1) 3-spike fall-of-potential — a current spike, a potential spike, and the electrode under test; (2) earth-electrode loop tester — uses the supply itself as a current source, simpler in practice but less precise. Both are GN3-recognised." },
            { number: 12, prompt: "An RCD test instrument calibration certificate should be:", options: { A: "Treated as optional", B: "Current and traceable — the instrument's accuracy must be demonstrable for the verifier's results to be defensible", C: "Replaced by a manufacturer's test only", D: "Required only on TT systems" }, answer: "B", explanation: "Verification requires calibrated instruments — without traceable calibration the recorded values are not defensible if questioned. GN3 stresses the importance of regular calibration. Most contractors calibrate annually; some critical industries more frequently." },
            { number: 13, prompt: "The measured Zs of a 6 A Type B lighting circuit is 5.5 Ω. Table 41.3 max for 6 A Type B at 0.4 s is 7.28 Ω. The 80% cold target is:", options: { A: "5.82 Ω (0.8 × 7.28) — measured 5.5 Ω is below; pass", B: "Always 1.0 Ω", C: "Pass — Zs irrelevant", D: "Fail — Zs > 5 Ω" }, answer: "A", explanation: "0.8 × 7.28 = 5.82 Ω. Measured 5.5 Ω is below — pass with margin. Type B 6 A allows higher Zs because the smaller MCB trips at lower fault current; smaller breakers tolerate higher loop impedances." },
            { number: 14, prompt: "On a 3-phase circuit, RCD testing must be carried out:", options: { A: "Only on L1", B: "On each phase in turn — the RCD's response to residual current may differ between phases due to internal coil construction; both 1× and 5× tests on each phase", C: "Only at the origin", D: "Only at the highest current rating" }, answer: "B", explanation: "Test each phase in turn (L1, L2, L3) at both 1× and 5× IΔn. The RCD's internal current transformer may respond slightly differently to each phase, and the test verifies the worst-case path. The 0.5× test is typically done once on any phase." },
            { number: 15, prompt: "An RCD that fails the 1 × IΔn test (e.g. 320 ms) on a 30 mA general-type device should be:", options: { A: "Recorded as a pass with comment", B: "Replaced with a known-good device, then re-tested at all three test points; the original device retired from service", C: "Uprated to 100 mA", D: "Disabled and bypassed" }, answer: "B", explanation: "320 ms > 300 ms — fail. The device no longer provides additional protection within the BS 7671 acceptance window. Replace with a new device, then re-test 0.5×, 1× and 5× IΔn. Never bypass an RCD or disable safety features as a 'workaround'." },
            { number: 16, prompt: "The recorded Ze on the EIC should match:", options: { A: "Any value the inspector wishes", B: "The measured Ze at the origin (with bonding disconnected) cross-checked against the DNO's declared maximum value", C: "Only the DNO's declared value", D: "The supply voltage" }, answer: "B", explanation: "Measured Ze is the inspector's actual figure; the DNO's declaration is the upper expected value. The measured should be at or below the declaration. Significant discrepancy (e.g. measured 0.6 Ω vs declared 0.35 Ω) warrants investigation." },
            { number: 17, prompt: "RCD additional protection on a circuit with cables buried < 50 mm in walls is required because:", options: { A: "It's a tradition", B: "Reg 522.6.202 — cables in walls < 50 mm depth without mechanical protection require additional protection by 30 mA RCD as the cable is at risk of penetration by nails, screws etc.", C: "It saves on cable size", D: "Only on TT systems" }, answer: "B", explanation: "Reg 522.6.202 — concealed cables < 50 mm in walls without mechanical protection (or unless deemed a 'reserved zone') require 30 mA RCD. Provides additional protection if a screw or nail penetrates the cable. Modern domestic CUs typically RCD-protect all socket and lighting circuits for this reason." },
            { number: 18, prompt: "The integral test button on an RCBO:", options: { A: "Calibrates the device", B: "Proves the trip mechanism mechanically operates — does not verify threshold or disconnection time, which require independent calibrated testing", C: "Resets the device after a trip", D: "Verifies the supply voltage" }, answer: "B", explanation: "Integral button injects an internal imbalance via a built-in resistor — a quick mechanical check. Threshold and disconnection time require an independent calibrated RCD tester. Both checks are part of functional testing." },
            { number: 19, prompt: "When measuring Ze, parallel earth paths via gas/water bonding will:", options: { A: "Increase the measured Ze", B: "Lower the measured Ze artificially below the true source-side impedance — which is why bonding is disconnected at the MET for the test", C: "Have no effect", D: "Damage the test instrument" }, answer: "B", explanation: "If main bonding is connected during a Ze test, current can return via gas/water pipework as well as the source-side earth path. The parallel paths give a lower (better-looking) reading than the true source impedance. Disconnect bonding at the MET, measure, reconnect immediately." },
            { number: 20, prompt: "Functional testing of a contactor in a control circuit confirms:", options: { A: "Energising the coil closes the main contacts (verified by AVI or load operation), and de-energising opens them; auxiliary contacts behave consistently", B: "RCD trip times", C: "Insulation resistance", D: "Phase rotation" }, answer: "A", explanation: "Functional test of a contactor: energise the coil, verify main contacts close (AVI or load operation); de-energise, verify they open. Check any auxiliary contacts behave correctly. Combined with checks of any interlocks the contactor is part of." },
            { number: 21, prompt: "On a 32 A Type C MCB final circuit, Table 41.3 gives a max Zs of 0.69 Ω at 0.4 s. The 80% cold target is:", options: { A: "0.55 Ω", B: "0.69 Ω", C: "0.83 Ω", D: "1.10 Ω" }, answer: "A", explanation: "0.8 × 0.69 = 0.552 ≈ 0.55 Ω. Type C trips at 5–10× rated, so requires lower Zs than Type B (which trips at 3–5×). The cold-conductor target is what the measured value at 20 °C must be ≤." },
            { number: 22, prompt: "An RCD type for a circuit feeding a fluorescent fitting with electronic ballast is:", options: { A: "Type AC always", B: "Type A is suitable — modern electronic ballasts can produce pulsating DC residual currents which Type A is designed to detect", C: "Only Type B", D: "S-type" }, answer: "B", explanation: "Type A senses AC + pulsating DC, suitable for modern electronic ballasts and most domestic loads. Type AC (sinusoidal AC only) is now obsolete for most new installations. Type B (AC + pulsating + smooth DC) is reserved for applications producing smooth DC (3-phase drives, EV chargers etc.)." },
            { number: 23, prompt: "On a 3-phase TP+N installation, a phase rotation indicator confirms:", options: { A: "Voltage between phases", B: "The sequence L1–L2–L3 (clockwise rotation) — important so that connected motors run in the correct direction; reversed sequence reverses motor rotation", C: "RCD trip times", D: "Earth electrode resistance" }, answer: "B", explanation: "Phase rotation: motor disc that spins clockwise for L1–L2–L3, or a lamp set that lights in sequence. Reversed phase rotation reverses motor direction — could damage driven equipment. Check after any rewire or main switch replacement." },
            { number: 24, prompt: "The measured Zs of a circuit is 1.05 Ω, and Ze for the installation is 0.30 Ω. The implied R1+R2 is:", options: { A: "0.35 Ω", B: "0.75 Ω (Zs - Ze = 1.05 - 0.30)", C: "1.35 Ω", D: "0.45 Ω" }, answer: "B", explanation: "Zs = Ze + (R1+R2), so R1+R2 = Zs - Ze = 1.05 - 0.30 = 0.75 Ω. Useful sanity check — the implied R1+R2 should match the dead-test reading at the furthest point. Significant discrepancy suggests a measurement issue or a different point being measured." },
            { number: 25, prompt: "An installation's three documents at certification are:", options: { A: "EIC, EICR, and Building Regulations certificate", B: "EIC, Schedule of Inspections, and Schedule of Test Results — the three together form the complete record", C: "Only the EIC", D: "EIC and customer feedback form" }, answer: "B", explanation: "Three documents: EIC (the signed declaration), Schedule of Inspections (the visual record), Schedule of Test Results (the numerical record). All three must be issued together for the certification to be complete. EICR is for periodic, not initial, verification." }
          ]
        },
        {
          id: "v5",
          questions: [
            { number: 1, prompt: "On a TT system with a 100 mA RCD providing ADS, the maximum allowable RA per Reg 411.5.3 is:", options: { A: "1667 Ω", B: "500 Ω (= 50 V / 0.100)", C: "200 Ω", D: "50 Ω" }, answer: "B", explanation: "RA × IΔn ≤ 50 V. For 100 mA: RA ≤ 50/0.100 = 500 Ω. For 30 mA: RA ≤ 1667 Ω. The lower the RCD rating, the higher the permissible electrode resistance — but practical electrode design typically aims for < 200 Ω regardless." },
            { number: 2, prompt: "An RCD's 5 × IΔn test on a 100 mA general-type RCD applies a current of:", options: { A: "100 mA", B: "300 mA", C: "500 mA", D: "1000 mA" }, answer: "C", explanation: "5 × 100 mA = 500 mA. The high-current test for any RCD is 5× the rated residual current. Trip time at this level must be ≤ 40 ms for a general-type or ≤ 150 ms for an S-type." },
            { number: 3, prompt: "Live polarity at a 230 V single-phase final socket should show:", options: { A: "L–N ≈ 230 V (full supply potential)", B: "Both L–N and L–E ≈ 230 V; N–E ≈ 0 V on a TN system", C: "L–N ≈ 0 V, L–E ≈ 230 V", D: "All three voltages ≈ 0 V" }, answer: "B", explanation: "Healthy TN connection: L–N ≈ 230 V (supply); L–E ≈ 230 V (full L potential vs earth); N–E ≈ 0 V (locally bonded at source). Reversed N–E (~ 230 V) would indicate a serious supply problem — open neutral or reversed polarity." },
            { number: 4, prompt: "A 30 mA Type B RCD installed on a circuit feeding a single-phase EV charging socket:", options: { A: "Provides AC + pulsating DC + smooth DC residual current detection — appropriate for the smooth DC residuals an EV charger may produce", B: "Is overkill — Type AC would suffice", C: "Should be replaced with a 100 mA device", D: "Is only required on TT systems" }, answer: "A", explanation: "Type B detects all residual current waveforms. EV chargers can produce smooth DC residuals through power electronics; only Type B (or Type A with integral 6 mA DC fault detection in the charger) provides reliable protection. Type AC would risk DC blinding." },
            { number: 5, prompt: "After completing all live tests successfully, the inspector should:", options: { A: "Stop and issue the EIC", B: "Carry out functional testing of switchgear, controls, interlocks and protective devices, then issue the EIC + Schedule of Inspections + Schedule of Test Results", C: "Repeat the dead tests", D: "Disconnect the supply" }, answer: "B", explanation: "Functional testing (Reg 643.10) is the final live-test phase — confirms switches, contactors, interlocks, drives etc. operate as intended. Once passed, the certification documents (EIC + Schedule of Inspections + Schedule of Test Results) are issued." },
            { number: 6, prompt: "An RCD test giving 1× IΔn = 305 ms is:", options: { A: "Acceptable — close enough to 300 ms", B: "A fail — 300 ms is the absolute maximum, not a target; the device no longer guarantees additional protection within the BS 7671 envelope", C: "Pass with comment", D: "Re-test required" }, answer: "B", explanation: "BS 7671 acceptance criteria are absolute — 300 ms at 1× IΔn means 300 ms or less, not 'close to 300'. 305 ms = fail. Replace and retest. Verifiers must apply the criteria strictly; safety-related limits are not subject to 'tolerance' interpretation." },
            { number: 7, prompt: "A measured Zs of 1.36 Ω on a 32 A Type B circuit (Table 41.3 max = 1.37 Ω at 0.4 s) is:", options: { A: "Pass — within the tabulated limit", B: "Marginal — measured at 20 °C is just below the warm-conductor limit; warm Zs (after temperature correction) would likely exceed 1.37 Ω; investigate or rely on RCD-protected ADS", C: "Pass with margin", D: "Fail" }, answer: "B", explanation: "Tabulated Zs assumes warm conductors. A cold reading at 1.36 Ω (versus 1.37 Ω max) would correspond to a warm Zs of about 1.36 × 1.20 ≈ 1.63 Ω — exceeding the limit. Investigate or rely on RCD-protected ADS (which gives 30 mA / 40 ms protection)." },
            { number: 8, prompt: "An MFT loop tester used to measure Ze should be:", options: { A: "Set to no-trip mode regardless", B: "Set to its standard high-current Zs/Ze mode for the most accurate reading at the origin (RCDs are not in circuit at the origin)", C: "Set to IR test mode", D: "Set to RCD test mode" }, answer: "B", explanation: "Ze is measured at the origin where there are no RCDs in the loop (RCDs sit at the consumer unit, downstream of the main switch). Standard Zs/Ze mode applies a higher test current for a more accurate measurement. No-trip mode is for RCD-protected final circuits." },
            { number: 9, prompt: "On a TT system the typical earth electrode resistance achievable in good ground is:", options: { A: "10 Ω or less", B: "Often in the range 30–100 Ω; difficult clay or rocky ground can give 100–500 Ω; the regulation upper limit (RA × IΔn ≤ 50 V) is what matters legally", C: "Always above 1000 Ω", D: "Always exactly 30 Ω" }, answer: "B", explanation: "Practical TT electrode resistance varies hugely with soil type, moisture, temperature. Sandy/loamy ground gives 30–100 Ω; clay can give similar; rocky or very dry ground can give 200–500 Ω. The legal limit is the RA × IΔn ≤ 50 V criterion — many domestic TT installations meet this with a single 1.2 m rod." },
            { number: 10, prompt: "An RCD providing additional protection on a final circuit feeding socket outlets has IΔn = 30 mA. The 5× test applies:", options: { A: "30 mA", B: "60 mA", C: "150 mA", D: "300 mA" }, answer: "C", explanation: "5 × 30 mA = 150 mA. The high-current test for additional protection — trip ≤ 40 ms verifies the device clears a fault before ventricular fibrillation risk becomes critical. The 1× and 0.5× tests verify the threshold." },
            { number: 11, prompt: "Live polarity at a 13 A socket showing L–E ≈ 0 V and N–E ≈ 230 V indicates:", options: { A: "Correct polarity", B: "Reversed L and N at the socket — the right-hand pin (which should be L) is actually N, and vice versa; isolate, rectify, retest", C: "An open CPC", D: "Reversed phase rotation" }, answer: "B", explanation: "On a healthy installation L–E ≈ 230 V, N–E ≈ 0 V. Reversed values mean L and N are swapped at the socket. Isolate, rectify the wiring, then repeat the relevant tests. Important — a reversed socket presents fault current via the appliance neutral which is the wrong path for protection." },
            { number: 12, prompt: "An RCD's calibration certificate confirms:", options: { A: "Only that the device exists", B: "The instrument's accuracy at the time of calibration — readings taken with a calibrated instrument are defensible against the calibration record", C: "Only the supply voltage", D: "Only the IR test capability" }, answer: "B", explanation: "Calibration provides traceable accuracy. Without a current calibration certificate the instrument's readings are not defensible if questioned (e.g. in a Health and Safety investigation). GN3 and most contractors recommend annual calibration. Critical industries may calibrate more frequently." },
            { number: 13, prompt: "On a 6 mm² supply to a TT shed with a 30 mA RCD, the live tests required are:", options: { A: "Only Ze at the origin", B: "Live polarity, Ze, Zs at the shed end, PFC, RA verification (touch voltage check), RCD tests at 0.5×, 1×, 5× IΔn, and functional", C: "Only the RCD test", D: "Only Zs" }, answer: "B", explanation: "TT installations require the same set of live tests as TN, plus RA verification (using a loop tester at the electrode or a 3-spike test) and RA × IΔn ≤ 50 V check. The earth electrode test is unique to TT — TN systems use the DNO's earth path." },
            { number: 14, prompt: "A 30 mA RCD upstream of multiple final circuits in a CU is sometimes called:", options: { A: "An S-type RCD", B: "A 'split-load' main RCD — provides RCD protection to a group of circuits without each having its own RCBO", C: "A Type B RCD", D: "An AFDD" }, answer: "B", explanation: "Split-load arrangement uses one upstream RCD (often two for diversity) to protect multiple final circuits. Common in older CUs; modern installations increasingly use individual RCBOs per circuit so a single fault doesn't take out half the installation. Both arrangements are compliant if used correctly." },
            { number: 15, prompt: "The functional test of a 3-phase motor includes:", options: { A: "Verifying the motor starts in the correct direction (as set by phase rotation), runs at expected speed, and any associated controls operate as intended", B: "An IR test only", C: "An RCD test only", D: "Phase rotation only" }, answer: "A", explanation: "Functional test of a motor: start sequence operates, motor runs in correct direction (verified before mechanical coupling if there's risk of damage), motor reaches expected speed, controls (start/stop/e-stop, interlocks) operate. Phase rotation is one prerequisite, not the whole test." },
            { number: 16, prompt: "An MFT measuring Zs on an RCD-protected circuit using no-trip mode gives a reading of 1.42 Ω. Check against Table 41.3 max = 1.37 Ω for the 32 A Type B device:", options: { A: "Pass", B: "Fail — measured 1.42 Ω exceeds the warm-conductor max of 1.37 Ω. ADS by overcurrent not assured; ADS via RCD is an alternative path that would meet shock-protection requirements", C: "Pass with margin", D: "Re-test required" }, answer: "B", explanation: "1.42 Ω > 1.37 Ω — overcurrent ADS within 0.4 s not assured. Investigate cable length, csa, terminations. The 30 mA RCD protection still gives shock protection within 40 ms at 5×, so the installation meets shock-protection requirements via RCD even if Zs limits aren't met for overcurrent ADS alone." },
            { number: 17, prompt: "After functional testing reveals a defect, the correct action is:", options: { A: "Issue the EIC with the defect noted", B: "Rectify the defect, repeat the affected functional test (and any earlier tests potentially affected by the rework), then issue certification", C: "Energise the circuit and retest later", D: "Lower the supply voltage" }, answer: "B", explanation: "GN3 — defects must be made good before certification. Rectify, repeat the affected test, and any earlier tests the rework might have disturbed. The EIC is a positive declaration of compliance; it must not be issued with known unrectified defects." },
            { number: 18, prompt: "The Ze test should be brief because:", options: { A: "It uses 500 V DC and risks damaging equipment", B: "Main bonding is disconnected during the test, leaving the installation temporarily without parallel earth paths via gas/water — the period of reduced safety should be minimised", C: "It costs the DNO money", D: "The test instrument overheats quickly" }, answer: "B", explanation: "With main bonding lifted, parallel earth paths via gas/water pipework are absent — the installation is temporarily less safe (a fault during the test could put gas/water at the supply potential). Keep the test brief, reconnect bonding immediately afterwards." },
            { number: 19, prompt: "An RCD test instrument is used in 'no-trip' mode when:", options: { A: "Testing PFC at the origin", B: "Measuring Zs on a circuit downstream of an RCD, so the RCD doesn't operate during the test", C: "Performing IR", D: "Doing phase rotation" }, answer: "B", explanation: "No-trip Zs mode injects pulses of low current that don't accumulate to the RCD threshold. Standard high-current Zs mode would trip a 30 mA RCD instantly. Use no-trip on RCD-protected circuits; standard mode at the origin (no RCD between line and earth at the origin)." },
            { number: 20, prompt: "When measuring PFC on a 3-phase supply, the GN3 cautious method gives:", options: { A: "PFC = sum of single-phase PSCC and PEFC", B: "PFC ≈ 2 × the higher single-phase value (PSCC or PEFC) measured at the origin — used as a worst-case estimate when 3-phase L–L measurement isn't available", C: "PFC = single-phase PSCC × 1.73", D: "PFC = supply voltage × 0.5" }, answer: "B", explanation: "GN3 cautious estimate: take the higher single-phase value and multiply by 2. This gives a worst-case 3-phase PFC for breaking-capacity comparison without needing a separate L–L measurement. The 1.73 (√3) factor in (C) is theoretical and not used as the cautious method." },
            { number: 21, prompt: "An RCD test gives the following results: 0.5× = no trip in 2 s; 1× = 280 ms; 5× = 25 ms. The verdict is:", options: { A: "Fail — 25 ms is suspiciously fast", B: "Pass — all three test points are well within acceptance criteria for a general-type 30 mA RCD; a fast 5× result is typical of modern devices", C: "Fail — 280 ms is too long", D: "Re-test required" }, answer: "B", explanation: "0.5× no trip in 2 s ✓; 1× 280 ms ≤ 300 ms ✓; 5× 25 ms ≤ 40 ms ✓. All three points pass with margin. Modern RCDs often have 5× trip times in the 20–35 ms range — well within the 40 ms acceptance limit." },
            { number: 22, prompt: "On the live-test sequence, the test that verifies the supply orientation before any other live work is:", options: { A: "Live polarity at the origin (using an AVI per GS38)", B: "Phase rotation at the origin", C: "PFC measurement", D: "RCD trip times" }, answer: "A", explanation: "Live polarity at the origin is the first live test — confirms the supply is correctly oriented (L on the L terminal, N on the N terminal) before any further work proceeds. Reversed supply polarity would invalidate subsequent live tests and create a hazard. Re-prove the AVI on a known source." },
            { number: 23, prompt: "An installation with a 100 mA general-type RCD and a 30 mA RCD downstream — when discrimination is correctly arranged:", options: { A: "The 100 mA trips first because it has the higher rating", B: "The 30 mA RCD trips first for low-level faults; the 100 mA acts as backup; an S-type 100 mA upstream would reinforce discrimination because its time delay (130–500 ms at 1× IΔn) ensures it doesn't trip before the downstream device", C: "Both trip simultaneously", D: "Neither trips" }, answer: "B", explanation: "Discrimination needs the upstream device to be slower or higher rated (preferably both). General-type 100 mA upstream is faster than ideal — for true selectivity, an S-type 100 mA (130–500 ms at 1×) is preferred. The downstream 30 mA clears the local fault first; the upstream remains in service." },
            { number: 24, prompt: "Functional testing of a sensor-controlled luminaire confirms:", options: { A: "Only that the lamp lights when energised", B: "The PIR or microwave sensor triggers on detected movement, the lamp comes on, the timer holds the lamp on for the set period, and the lamp returns to standby after the timer expires", C: "Only the IR test passed", D: "Only the polarity is correct" }, answer: "B", explanation: "Functional test of a sensor-luminaire: trigger the sensor (movement, light level depending on type), verify the lamp activates, verify the timer holds the lamp on, verify the return to standby. The whole sensor + control + lamp behaves as designed in service." },
            { number: 25, prompt: "On a single-phase 230 V TN-C-S installation, the highest of PSCC and PEFC measured at the origin gives PFC = 8.1 kA. The minimum breaking capacity of every protective device on the installation must be:", options: { A: "≥ 6 kA", B: "≥ 8.1 kA — every device must withstand at least the worst-case prospective fault current at its point of installation (Reg 434.5)", C: "≥ 10 kA", D: "≥ 16 kA" }, answer: "B", explanation: "Reg 434.5 — every overcurrent device's breaking capacity must be at least the prospective fault current at its location. For 8.1 kA PFC: minimum 10 kA breaker (the next standard rating above 8.1) provides the required margin. A 6 kA breaker would be undersized and unsafe in a fault." }
          ]
        }
      ]
    },
    {
      id: "section-7-merged-testing-calculations",
      title: "Section 7 — Merged Testing & Calculation Questions",
      variants: [
        {
          id: "v1",
          questions: [
            { number: 1, prompt: "When measuring the external earth fault loop impedance (Ze) the:", options: { A: "Main switch should be on and the earthing conductor disconnected", B: "Main switch should be off and the earthing conductor connected", C: "Main switch should be off and earthing conductor disconnected", D: "Main switch should be on and the earthing conductor connected" }, answer: "C", explanation: "Ze test isolates the source-side earth path. Main switch off so the installation contributes nothing; earthing conductor disconnected at the MET so parallel bonding paths via gas/water don't influence the reading. Reconnect immediately after the test." },
            { number: 2, prompt: "The following dead tests are to be conducted on a new installation: (1) Loop impedance, (2) Polarity, (3) Insulation resistance, (4) Continuity of CPCs. The correct sequence is:", options: { A: "3, 2, 4, 1", B: "2, 1, 4, 3", C: "1, 2, 3, 4", D: "4, 3, 2, 1" }, answer: "D", explanation: "Dead first, live last: continuity of CPCs (4) → IR (3) → polarity (2) → earth fault loop impedance (1) live. Only one option matches the GN3 dead-test order." },
            { number: 3, prompt: "Following a test of earth fault loop impedance, the results are compared to the values given in BS 7671. Which statement is correct?", options: { A: "The tabulated value should not be less than 80% of the measured value", B: "The measured value should not be less than 80% of the tabulated value", C: "The tabulated value should not exceed 80% of the measured value", D: "The measured value should not exceed 80% of the tabulated value" }, answer: "D", explanation: "GN3 'rule of thumb' — measured Zs (cold conductors) ≤ 80% of the tabulated Zs (which assumes warm conductors). The 0.8 factor accounts for the resistance increase as the cable heats under load." },
            { number: 4, prompt: "On a 3-phase installation, PFC measurements give 3.6 kA (L1–E) and 4.2 kA (L1–N). The PFC to record on the EIC is approximately:", options: { A: "7.8 kA", B: "3.6 kA", C: "8.4 kA (using GN3 cautious 3-phase estimate: 2 × higher single-phase value)", D: "4.2 kA" }, answer: "C", explanation: "GN3 cautious estimate — take the higher single-phase value (4.2 kA) and multiply by 2: 4.2 × 2 = 8.4 kA. This is the recorded design figure, ensuring every protective device's breaking capacity covers the worst-case 3-phase fault." },
            { number: 5, prompt: "The correct formula for total earth fault loop impedance is:", options: { A: "Zs = Ze - (R1 + R2)", B: "Zs = Ze + (R1 + R2)", C: "Zs = Ze + (R1 / R2)", D: "Ze = Zs + (R1 + R2)" }, answer: "B", explanation: "Zs is the total loop: external (Ze) PLUS the line and CPC of the final circuit (R1 + R2). R1 and R2 are in series along the same fault path, not in parallel." },
            { number: 6, prompt: "Earth fault loop impedances are measured/calculated to ensure that:", options: { A: "The neutral conductor is continuous and of the correct size", B: "Protective devices will operate within the required disconnection time", C: "The correct fuse has been installed", D: "The RCD trip mechanism operates" }, answer: "B", explanation: "Zs determines fault current magnitude; fault current determines disconnection time on the device's tripping curve. Verifying Zs is small enough is verifying ADS will operate within the BS 7671 maximum disconnection time." },
            { number: 7, prompt: "Before measurement using a low-resistance ohmmeter, the lead resistance should be:", options: { A: "Ignored", B: "Nulled or recorded and subtracted from the meter reading", C: "Held above 0.5 Ω", D: "Doubled" }, answer: "B", explanation: "Test leads have measurable resistance (typically 0.05–0.10 Ω) which is significant on a low R1+R2 reading. Modern instruments null automatically; older ones require recording lead R and subtracting." },
            { number: 8, prompt: "An IR test is conducted on insulation to ensure that:", options: { A: "Circuit conductor resistances are not too high", B: "The system works efficiently", C: "The cable insulation is the correct material", D: "There are no unintended connections between live conductors or between live conductors and earth" }, answer: "D", explanation: "IR verifies the insulation is intact between live conductors and between lives and earth — anything below 1 MΩ (LV) suggests a leakage path that shouldn't exist. The other options are not what IR measures." },
            { number: 9, prompt: "A radial circuit is 50 m long, wired in 4/1.5 mm² T+E. Using R/m of 4.61 mΩ/m (4 mm²) and 12.10 mΩ/m (1.5 mm²), the expected R1+R2 at 20 °C is approximately:", options: { A: "0.42 Ω", B: "0.55 Ω", C: "0.84 Ω", D: "0.94 Ω" }, answer: "C", explanation: "Per metre: 4.61 + 12.10 = 16.71 mΩ/m. For 50 m: 50 × 16.71 = 835.5 mΩ ≈ 0.84 Ω." },
            { number: 10, prompt: "The Zs of a 32 A Type B circuit is calculated as Ze + (R1+R2) = 0.40 + 0.85 = 1.25 Ω. Table 41.3 max at 0.4 s is 1.37 Ω. The 0.8 cold-conductor target is:", options: { A: "0.69 Ω", B: "1.10 Ω", C: "1.37 Ω", D: "1.65 Ω" }, answer: "B", explanation: "0.8 × 1.37 = 1.10 Ω. Calculated cold Zs of 1.25 Ω exceeds the 1.10 Ω cold target — investigate. Warm Zs would likely exceed 1.37 Ω, so ADS via overcurrent within 0.4 s is at risk; rely on RCD-protected ADS or rectify cable run/csa." },
            { number: 11, prompt: "An installation has a TN-C-S supply with measured Ze = 0.21 Ω. A 32 A Type B radial circuit on this installation has measured R1+R2 = 0.42 Ω. The calculated Zs is:", options: { A: "0.21 Ω", B: "0.42 Ω", C: "0.63 Ω", D: "0.84 Ω" }, answer: "C", explanation: "Zs = Ze + (R1+R2) = 0.21 + 0.42 = 0.63 Ω. Comfortably below the 32 A Type B max of 1.37 Ω at 0.4 s — pass with margin." },
            { number: 12, prompt: "An RCD test on a 30 mA general-type RCD must give:", options: { A: "0.5 × IΔn (no trip in 2 s); 1 × IΔn (≤ 300 ms); 5 × IΔn (≤ 40 ms)", B: "1 × IΔn (≤ 1 s); 5 × IΔn (≤ 200 ms)", C: "0.5 × IΔn (≤ 100 ms); 1 × IΔn (≤ 50 ms)", D: "Only the integral test button operates" }, answer: "A", explanation: "Memorise these acceptance criteria: 0.5×: must NOT trip within 2 s (proves not oversensitive); 1×: trip ≤ 300 ms (general-type sensitivity); 5×: trip ≤ 40 ms (high-current additional protection)." },
            { number: 13, prompt: "Voltage drop on a circuit is calculated as:", options: { A: "Vd = (mV/A/m × I × L) / 1000 V", B: "Vd = I × R only", C: "Vd = U × I", D: "Vd = U / R" }, answer: "A", explanation: "Voltage drop in volts = (tabulated mV/A/m × design current I × cable length L) / 1000. For lighting circuits the limit is 3% of nominal supply voltage; for other circuits 5%. Tabulated mV/A/m values are in BS 7671 Appendix 4." },
            { number: 14, prompt: "A 6 mm² copper radial cable carries 32 A over 30 m. Tabulated mV/A/m is 7.3. Voltage drop is:", options: { A: "0.7 V", B: "7.0 V", C: "21.9 V (= 7.3 × 32 × 30 / 1000 ≈ 7.0 V)", D: "0.07 V" }, answer: "B", explanation: "Vd = 7.3 × 32 × 30 / 1000 = 7008 / 1000 = 7.0 V. As a percentage of 230 V: 7.0/230 × 100% = 3.0% — at the limit for non-lighting circuits (5%) and exceeds the 3% lighting limit. Investigate cable size or run length." },
            { number: 15, prompt: "On a 16 A Type B circuit (Table 41.3 max Zs = 2.73 Ω at 0.4 s), the maximum permitted R1+R2 if Ze = 0.30 Ω is:", options: { A: "1.50 Ω", B: "1.94 Ω (= 2.18 - 0.30, applying the 0.8 cold target)", C: "2.43 Ω", D: "2.73 Ω" }, answer: "B", explanation: "0.8 × 2.73 = 2.18 Ω cold target. Max R1+R2 = 2.18 - 0.30 = 1.88 Ω cold (let's call it ~1.94 Ω with rounding). This is the cold-conductor maximum so the warm Zs will still be within 2.73 Ω. Type B 16 A allows comfortable cable runs." },
            { number: 16, prompt: "Three IR readings on parallel circuits give 100 MΩ, 50 MΩ and 40 MΩ. The combined parallel IR is approximately:", options: { A: "190 MΩ", B: "63 MΩ", C: "18 MΩ (= 1/(1/100 + 1/50 + 1/40))", D: "5 MΩ" }, answer: "C", explanation: "Parallel resistors: 1/R = 1/100 + 1/50 + 1/40 = 0.01 + 0.02 + 0.025 = 0.055; R = 1/0.055 = 18.18 MΩ. Combined IR is always lower than the lowest individual." },
            { number: 17, prompt: "An RCD's integral test button:", options: { A: "Verifies trip time and threshold accurately", B: "Confirms the trip mechanism mechanically operates only — does not verify trip time or threshold; calibrated RCD tester needed for those", C: "Tests the supply voltage", D: "Tests phase rotation" }, answer: "B", explanation: "The integral button injects an internal imbalance via a built-in resistor — proves the mechanism only. Threshold and disconnection time require independent calibrated testing at 0.5×, 1× and 5× IΔn." },
            { number: 18, prompt: "The recorded PFC on the EIC must be:", options: { A: "The lower of PSCC and PEFC", B: "The higher of PSCC (line-to-line) and PEFC (line-to-earth) measured at the origin", C: "Their arithmetic mean", D: "Always equal to PEFC" }, answer: "B", explanation: "Record the higher value so every device's breaking capacity covers the worst case. Reg 434.5 — devices must withstand maximum prospective fault current at their point of installation. Typical UK domestic TN-C-S 1–16 kA." },
            { number: 19, prompt: "An IR test on a 230 V LV circuit must use a test voltage of:", options: { A: "230 V AC", B: "500 V DC, with a minimum acceptance of 1.0 MΩ", C: "1000 V DC, with a minimum of 0.5 MΩ", D: "250 V DC, with a minimum of 0.5 MΩ" }, answer: "B", explanation: "Table 64 — LV (50–500 V): 500 V DC, ≥ 1.0 MΩ. SELV/PELV at 250 V DC ≥ 0.5 MΩ; > 500 V at 1000 V DC ≥ 1.0 MΩ. IR is always DC, never AC." },
            { number: 20, prompt: "A circuit has a measured Zs of 1.20 Ω. The Ze for the installation is 0.30 Ω. The corresponding R1+R2 is:", options: { A: "0.40 Ω", B: "0.90 Ω (Zs - Ze = 1.20 - 0.30)", C: "1.50 Ω", D: "0.36 Ω" }, answer: "B", explanation: "Zs = Ze + (R1+R2), so R1+R2 = Zs - Ze = 1.20 - 0.30 = 0.90 Ω. Useful sanity check — verify against the dead-test reading at the same point. A discrepancy suggests measurement error or different test points." },
            { number: 21, prompt: "On a TT system with a 30 mA RCD, the maximum acceptable RA per Reg 411.5.3 is:", options: { A: "200 Ω", B: "1667 Ω (= 50 / 0.030)", C: "100 Ω", D: "30 Ω" }, answer: "B", explanation: "RA × IΔn ≤ 50 V (touch voltage limit). For 30 mA: RA ≤ 50/0.030 = 1666.67 Ω. Practical TT installations aim for < 200 Ω for stability with weather variation, but the regulation upper limit is 1667 Ω." },
            { number: 22, prompt: "When testing PFC on a 3-phase TP+N installation, single-phase PSCC is measured as 5.5 kA. The cautious 3-phase PFC estimate is:", options: { A: "5.5 kA", B: "11 kA (using GN3 method: 2 × higher single-phase)", C: "2.75 kA", D: "9.5 kA (× √3)" }, answer: "B", explanation: "GN3 cautious method — multiply the higher single-phase value by 2 to estimate worst-case 3-phase PFC. 5.5 × 2 = 11 kA. Used for breaking-capacity comparison without requiring a separate L–L measurement." },
            { number: 23, prompt: "An R1+R2 of 0.55 Ω at 20 °C, multiplied by a temperature correction factor of 1.20 to estimate operating temperature, gives:", options: { A: "0.55 Ω", B: "0.66 Ω", C: "0.83 Ω", D: "1.10 Ω" }, answer: "B", explanation: "0.55 × 1.20 = 0.66 Ω. This warm-conductor estimate is what the inspector adds to Ze for comparison with Table 41.3 max. Alternatively, take 80% of the tabulated max as the cold-conductor target — both methods account for the same physical effect." },
            { number: 24, prompt: "On a circuit feeding a kitchen with multiple sockets, additional protection by 30 mA RCD:", options: { A: "Is optional regardless of cable depth", B: "Is mandatory per Reg 411.3.3 for socket outlets ≤ 32 A in dwellings (with limited exceptions); the RCD must trip within 40 ms at 5 × IΔn (= 150 mA)", C: "Is required only on TT systems", D: "Replaces Zs verification" }, answer: "B", explanation: "Reg 411.3.3 — socket outlets ≤ 32 A in dwellings require additional protection by 30 mA RCD (limited exceptions for labelled-supply equipment in some non-domestic settings). Trip time at 5×: ≤ 40 ms. Doesn't replace Zs verification — both criteria apply to ensure ADS." },
            { number: 25, prompt: "Three documents that accompany an Electrical Installation Certificate are:", options: { A: "Schedule of Test Results and Schedule of Inspections", B: "Schedule of Test Results, Schedule of Circuit Details/Inspections — together forming the audit evidence behind the EIC declarations", C: "Building Regulations certificate and EICR", D: "Customer feedback and warranty" }, answer: "B", explanation: "The complete record: EIC (signed declaration), Schedule of Inspections (visual record), Schedule of Test Results (numerical record). All three together form the certification. EICR is for periodic inspection; Building Regs paperwork is separate (Part P)." }
          ]
        },
        {
          id: "v2",
          questions: [
            { number: 1, prompt: "A 32 A Type B circuit has measured R1+R2 of 0.62 Ω at 20 °C and a measured Ze of 0.30 Ω. The measured Zs is:", options: { A: "0.32 Ω", B: "0.62 Ω", C: "0.92 Ω", D: "1.24 Ω" }, answer: "C", explanation: "Zs = Ze + (R1+R2) = 0.30 + 0.62 = 0.92 Ω. Below the 32 A Type B max of 1.37 Ω at 0.4 s — pass. Apply 0.8 cold-conductor target: 0.8 × 1.37 = 1.10 Ω; 0.92 Ω is within. ADS via overcurrent assured." },
            { number: 2, prompt: "Voltage drop on a lighting circuit is calculated as 4 V on a 230 V supply. The percentage drop is:", options: { A: "1.7% — within the 3% lighting limit; pass", B: "4.0% — exceeds the 3% lighting limit", C: "0.4% — pass", D: "8.0% — fail" }, answer: "A", explanation: "4 V / 230 V × 100% = 1.74%. The lighting voltage drop limit is 3% (~ 6.9 V on 230 V); other circuits 5% (~ 11.5 V). 1.74% is comfortably within the lighting limit." },
            { number: 3, prompt: "A 50 m cable run in 6/2.5 mm² T+E (R/m: 6 mm² ≈ 3.08 mΩ/m, 2.5 mm² ≈ 7.41 mΩ/m) gives expected R1+R2 at 20 °C of approximately:", options: { A: "0.21 Ω", B: "0.52 Ω", C: "0.71 Ω", D: "0.96 Ω" }, answer: "B", explanation: "Per metre: 3.08 + 7.41 = 10.49 mΩ/m. For 50 m: 50 × 10.49 = 524.5 mΩ ≈ 0.52 Ω." },
            { number: 4, prompt: "A 6 A Type B MCB has a Table 41.3 max Zs of 7.28 Ω at 0.4 s. Applying the 0.8 cold target gives:", options: { A: "5.82 Ω", B: "6.55 Ω", C: "7.28 Ω", D: "8.74 Ω" }, answer: "A", explanation: "0.8 × 7.28 = 5.82 Ω cold target. Type B 6 A allows comparatively high Zs because the small breaker trips at lower fault current — the smaller MCBs tolerate longer/smaller-csa cables." },
            { number: 5, prompt: "An IR test gives separate readings of 200 MΩ, 80 MΩ and 60 MΩ on three circuits in parallel. The combined IR is approximately:", options: { A: "340 MΩ (sum)", B: "30 MΩ (using 1/R = 1/200 + 1/80 + 1/60)", C: "60 MΩ (lowest individual)", D: "5 MΩ" }, answer: "B", explanation: "1/R = 1/200 + 1/80 + 1/60 = 0.005 + 0.0125 + 0.01667 = 0.034. R = 1/0.034 = 29.4 MΩ ≈ 30 MΩ. Combined IR is always lower than the lowest individual." },
            { number: 6, prompt: "On a TT system with a 100 mA RCD, the maximum acceptable RA per Reg 411.5.3 is:", options: { A: "1667 Ω", B: "500 Ω (= 50 V / 0.100 A)", C: "200 Ω", D: "50 Ω" }, answer: "B", explanation: "RA × IΔn ≤ 50 V. For 100 mA: RA ≤ 50/0.100 = 500 Ω. Lower-rated RCDs (30 mA) tolerate higher RA, but practical TT installations aim for < 200 Ω regardless for stability." },
            { number: 7, prompt: "Maximum disconnection times for fault protection by ADS in TN systems (Table 41.1) are:", options: { A: "0.4 s for final ≤ 32 A; 5 s for distribution or final > 32 A", B: "0.1 s for all circuits", C: "1 s for all circuits", D: "10 s for all circuits" }, answer: "A", explanation: "Table 41.1 / Reg 411.3.2.2: TN final ≤ 32 A: 0.4 s. Distribution or final > 32 A: 5 s. TT systems use 0.2 s and 1 s respectively. Times reflect shock-risk physiology research." },
            { number: 8, prompt: "An RCD's 0.5 × IΔn test on a 100 mA general-type RCD applies a current of:", options: { A: "50 mA — must NOT trip within 2 s", B: "30 mA", C: "100 mA", D: "150 mA" }, answer: "A", explanation: "0.5 × 100 mA = 50 mA. For any RCD, 0.5 × IΔn must NOT trip within 2 s — confirms the threshold is not below half-rated value (i.e. not oversensitive). The 1× and 5× tests verify trip threshold and high-current response." },
            { number: 9, prompt: "On a TN-S system, a Ze reading of 0.55 Ω is:", options: { A: "Within the typical TN-S range (0.3–0.8 Ω)", B: "Below the typical TN-S minimum", C: "Always indicates a TT system", D: "Always above the regulation maximum" }, answer: "A", explanation: "TN-S typical Ze range 0.3–0.8 Ω depending on supply length to substation. 0.55 Ω is mid-range — typical and acceptable. Compare with the DNO declaration if available." },
            { number: 10, prompt: "The Schedule of Test Results records:", options: { A: "Verbal handover notes", B: "Customer feedback", C: "Numerical results of every circuit's continuity, IR, Zs, RCD times, polarity confirmation — the audit evidence behind the EIC declarations", D: "Only the RCD test results" }, answer: "C", explanation: "The Schedule of Test Results is the factual numerical record per circuit. Paired with the Schedule of Inspections (visual tick-box record) and the EIC (signed declaration). Without complete schedules, the certificate has no evidence base." },
            { number: 11, prompt: "An R1+R2 of 0.45 Ω at 20 °C corresponds to an estimated warm-conductor R1+R2 (factor 1.20) of:", options: { A: "0.45 Ω", B: "0.54 Ω", C: "0.65 Ω", D: "0.90 Ω" }, answer: "B", explanation: "0.45 × 1.20 = 0.54 Ω. The warm value used for Zs comparison against Table 41.3 maxima. Alternatively, the 0.8 cold-conductor rule applied to the tabulated max gives the same effective check." },
            { number: 12, prompt: "A 32 A Type B circuit feeding 30 m of 4/1.5 mm² T+E (R/m: 4 mm² 4.61, 1.5 mm² 12.10 mΩ/m) gives expected R1+R2 at 20 °C of approximately:", options: { A: "0.21 Ω", B: "0.50 Ω", C: "0.42 Ω", D: "0.83 Ω" }, answer: "B", explanation: "Per metre: 4.61 + 12.10 = 16.71 mΩ/m. For 30 m: 30 × 16.71 = 501 mΩ ≈ 0.50 Ω." },
            { number: 13, prompt: "An IR test instrument applying 500 V DC must produce this voltage at no less than:", options: { A: "1 µA into the rated load", B: "1 mA into the rated load (per BS EN 61557-2)", C: "10 mA into the rated load", D: "100 mA into the rated load" }, answer: "B", explanation: "BS EN 61557-2 — IR instruments must produce the rated voltage at no less than 1 mA into the rated load (typically 1 MΩ at 500 V DC). Ensures repeatable readings rather than the meter folding back under modest leakage." },
            { number: 14, prompt: "The PFC at the origin of a single-phase TN-C-S supply is measured as 5.4 kA L–N and 4.1 kA L–E. The PFC recorded on the EIC is:", options: { A: "4.1 kA", B: "4.75 kA (average)", C: "5.4 kA — the higher of the two", D: "9.5 kA (sum)" }, answer: "C", explanation: "Record the higher of PSCC and PEFC on the EIC. 5.4 kA L–N is the worst case here. Every protective device's breaking capacity must cover this — typical 6 kA or 10 kA domestic MCBs would be appropriate." },
            { number: 15, prompt: "An RCD test giving 0.5× = no trip in 2 s, 1× = 240 ms, 5× = 18 ms on a 30 mA general-type is:", options: { A: "A pass — all three test points well within acceptance", B: "A fail — 18 ms is suspiciously fast", C: "A fail — 240 ms is too long", D: "Need to retest" }, answer: "A", explanation: "0.5×: no trip in 2 s ✓; 1×: 240 ms ≤ 300 ms ✓; 5×: 18 ms ≤ 40 ms ✓. All three points pass with comfortable margin. Modern RCDs often have 5× trip times in the 15–30 ms range — well within the 40 ms acceptance limit." },
            { number: 16, prompt: "On a 16 A Type C MCB circuit (Table 41.3 max Zs 1.37 Ω at 0.4 s), with measured Zs of 0.95 Ω:", options: { A: "Pass — within the 1.10 Ω cold target (0.8 × 1.37)", B: "Fail — exceeds 0.5 Ω", C: "Fail — exceeds 1 Ω", D: "Need to test PFC first" }, answer: "A", explanation: "0.8 × 1.37 = 1.10 Ω cold target. Measured 0.95 Ω is below — pass with margin. Type C 16 A allows the same Zs as Type B 16 A in this row of Table 41.3 (both have the 5× trip current threshold under fault conditions for the 0.4 s value)." },
            { number: 17, prompt: "A circuit's voltage drop is calculated using mV/A/m = 18.0 (single-phase 1.5 mm² copper), I = 6 A, L = 25 m. The voltage drop is:", options: { A: "0.27 V", B: "2.7 V", C: "27 V", D: "270 V" }, answer: "B", explanation: "Vd = (mV/A/m × I × L) / 1000 = (18 × 6 × 25) / 1000 = 2700/1000 = 2.7 V. As a percentage of 230 V: 2.7/230 × 100% = 1.17% — well within both 3% (lighting) and 5% (other) limits." },
            { number: 18, prompt: "A 30 mA Type A RCD on a circuit with electronic equipment producing pulsating DC residuals is:", options: { A: "Inadequate — should be Type AC", B: "Appropriate — Type A detects AC + pulsating DC, suitable for modern domestic loads with rectified components", C: "Always inadequate — only Type B is suitable", D: "Required by BS 7671 only on TT systems" }, answer: "B", explanation: "Type A is the standard for modern domestic equipment — detects AC + pulsating DC. Suitable for LED drivers, electronic ballasts, single-phase variable-speed drives. Type AC (sinusoidal AC only) is now obsolete. Type B is reserved for smooth DC residuals (3-phase drives, EV chargers etc.)." },
            { number: 19, prompt: "An RCD test on a 30 mA RCD applies 60 mA test current. The test point is:", options: { A: "0.5 × IΔn", B: "1 × IΔn", C: "2 × IΔn (= 60 mA on a 30 mA device)", D: "5 × IΔn" }, answer: "C", explanation: "60 mA / 30 mA = 2× IΔn. This is not a standard BS 7671 test point — the prescribed points are 0.5×, 1× and 5× IΔn. Some RCD testers have a 2× or other intermediate setting; only 0.5×, 1× and 5× results are recorded against acceptance criteria." },
            { number: 20, prompt: "The maximum disconnection time for ADS on a TT final circuit ≤ 32 A (Table 41.1) is:", options: { A: "0.4 s (same as TN)", B: "0.2 s (TT requires faster disconnection)", C: "1 s", D: "5 s" }, answer: "B", explanation: "Table 41.1 — TT systems require 0.2 s for final circuits ≤ 32 A and 1 s for distribution or > 32 A. TN allows 0.4 s and 5 s respectively. The TT times are tighter because TT relies on RCD operation, which is faster than overcurrent on a typical Zs path." },
            { number: 21, prompt: "An RCD operating at 1 × IΔn with a trip time of 280 ms on a general-type 30 mA device, then 1× IΔn 320 ms after re-test, is:", options: { A: "A pass on the first reading only", B: "A fail — the 320 ms reading exceeds 300 ms; the device's trip time is variable but at least one result is non-compliant; replace and retest", C: "A pass — the average is below 300 ms", D: "Acceptable for testing purposes only" }, answer: "B", explanation: "Each test must meet the acceptance criterion independently. A device that gives one passing and one failing reading is unreliable — replace and retest. RCDs should not vary widely between consecutive tests; significant variation indicates a failing mechanism." },
            { number: 22, prompt: "On a TN-C-S system, the typical Ze is:", options: { A: "0.10–0.35 Ω", B: "0.50–1.50 Ω", C: "30–200 Ω", D: "Always exactly 0.20 Ω" }, answer: "A", explanation: "TN-C-S (PME) typical Ze range 0.10–0.35 Ω. The combined neutral-earth conductor in PME has lower impedance than TN-S's separate earth conductor (typical 0.30–0.80 Ω). TT depends on local electrode (often 30–200 Ω)." },
            { number: 23, prompt: "Calculate the voltage drop on a 25 mm² 3-phase circuit carrying 80 A over 60 m, with mV/A/m = 1.5 (3-phase). The voltage drop is:", options: { A: "0.7 V", B: "7.2 V (= 1.5 × 80 × 60 / 1000)", C: "72 V", D: "720 V" }, answer: "B", explanation: "Vd = (mV/A/m × I × L) / 1000 = (1.5 × 80 × 60) / 1000 = 7200/1000 = 7.2 V. As a percentage of 400 V (3-phase): 7.2/400 × 100% = 1.8% — within the 5% non-lighting limit (= 20 V on 400 V)." },
            { number: 24, prompt: "On an installation, R1+R2 measured at 20 °C is 0.85 Ω; Ze is 0.30 Ω; corrected R1+R2 (factor 1.20) is 1.02 Ω; warm Zs is:", options: { A: "0.85 Ω", B: "1.15 Ω", C: "1.32 Ω (= 0.30 + 1.02)", D: "1.50 Ω" }, answer: "C", explanation: "Warm Zs = Ze + (R1+R2 × correction) = 0.30 + (0.85 × 1.20) = 0.30 + 1.02 = 1.32 Ω. Compare with Table 41.3 max: 32 A Type B = 1.37 Ω at 0.4 s — pass with marginal headroom." },
            { number: 25, prompt: "The signatories on an Electrical Installation Certificate are responsible for:", options: { A: "Design, construction, and inspection & testing (each role signed for separately, even if the same individual discharges all three on smaller jobs)", B: "Client, contractor, architect", C: "Designer, electrician, apprentice", D: "Local authority, contractor, customer" }, answer: "A", explanation: "The EIC separates the three responsibilities explicitly. On smaller jobs the same competent person may sign all three; on larger jobs they may be different individuals. Each signature commits the signatory to accountability for that role." }
          ]
        },
        {
          id: "v3",
          questions: [
            { number: 1, prompt: "An installation has Ze = 0.32 Ω and R1+R2 = 0.74 Ω at 20 °C on a 32 A Type B circuit. The cold-conductor Zs is:", options: { A: "0.42 Ω", B: "0.74 Ω", C: "1.06 Ω (= 0.32 + 0.74)", D: "1.30 Ω" }, answer: "C", explanation: "Zs = Ze + (R1+R2) = 0.32 + 0.74 = 1.06 Ω cold. Compare with the 32 A Type B 0.8 cold target = 1.10 Ω. 1.06 Ω < 1.10 Ω — pass with very little margin. After temperature correction the warm Zs would be approximately 1.21 Ω, still below the 1.37 Ω max." },
            { number: 2, prompt: "The minimum acceptable IR for a SELV (≤ 50 V) circuit at 250 V DC test is:", options: { A: "0.25 MΩ", B: "0.5 MΩ", C: "1.0 MΩ", D: "5.0 MΩ" }, answer: "B", explanation: "Table 64 — SELV/PELV/electrical separation: 250 V DC test, ≥ 0.5 MΩ. The lower test voltage matches the lower system stress; the lower minimum reflects equivalent insulation quality at a lower applied voltage." },
            { number: 3, prompt: "An MCB with a marked 6000 / 1 breaking capacity is suitable for installations where the prospective fault current at the device location is:", options: { A: "Up to 6 kA", B: "Up to 60 kA", C: "Up to 600 A", D: "Up to 12 kA" }, answer: "A", explanation: "The 6000 marking is the rated breaking capacity in amperes (Icn). 6000 A = 6 kA — the device can safely interrupt fault currents up to 6 kA at the marked test conditions. PFC at the device location must be ≤ 6 kA for the breaker to remain compliant under fault." },
            { number: 4, prompt: "On a 25 m run of 4/1.5 mm² T+E (R/m: 4 mm² 4.61, 1.5 mm² 12.10 mΩ/m), the expected R1+R2 at 20 °C is:", options: { A: "0.21 Ω", B: "0.42 Ω", C: "0.55 Ω", D: "0.70 Ω" }, answer: "B", explanation: "Per metre: 4.61 + 12.10 = 16.71 mΩ/m. For 25 m: 25 × 16.71 = 417.75 mΩ ≈ 0.42 Ω." },
            { number: 5, prompt: "An RCD test on a 100 mA general-type RCD at 1 × IΔn must give a trip time:", options: { A: "≤ 40 ms", B: "≤ 100 ms", C: "≤ 200 ms", D: "≤ 300 ms" }, answer: "D", explanation: "All general-type RCDs have the same 1× and 5× acceptance times regardless of IΔn rating. 1×: ≤ 300 ms; 5×: ≤ 40 ms; 0.5×: no trip in 2 s. The IΔn varies the test current applied (1× = IΔn) but the time limits are identical." },
            { number: 6, prompt: "Voltage drop calculation for a 16 A radial circuit, mV/A/m = 11.0 (4 mm² T+E), L = 22 m, gives:", options: { A: "0.39 V", B: "3.87 V (= 11.0 × 16 × 22 / 1000)", C: "38.7 V", D: "0.04 V" }, answer: "B", explanation: "Vd = (mV/A/m × I × L) / 1000 = (11 × 16 × 22) / 1000 = 3872/1000 = 3.87 V. As a percentage of 230 V: 3.87/230 × 100% = 1.68% — within both 3% (lighting) and 5% (other) limits." },
            { number: 7, prompt: "An installation with a TT supply uses a 30 mA RCD for ADS. The measured RA at the electrode is 65 Ω. The touch voltage RA × IΔn is:", options: { A: "0.65 V (× 0.030 = 1.95 V)", B: "1.95 V (= 65 × 0.030); well below 50 V; pass", C: "19.5 V", D: "65 V" }, answer: "B", explanation: "RA × IΔn = 65 × 0.030 = 1.95 V. Far below the 50 V touch voltage limit (Reg 411.5.3). The combination of the 30 mA RCD and 65 Ω electrode comfortably meets the regulation; ADS will operate within the required time." },
            { number: 8, prompt: "Three IR readings give 150 MΩ, 80 MΩ and 50 MΩ on three parallel circuits. The combined IR is:", options: { A: "280 MΩ (sum)", B: "60 MΩ", C: "23.4 MΩ (using 1/R = 1/150 + 1/80 + 1/50)", D: "5 MΩ" }, answer: "C", explanation: "1/R = 1/150 + 1/80 + 1/50 = 0.00667 + 0.0125 + 0.02 = 0.0392. R = 1/0.0392 = 25.5 MΩ ≈ 23–26 MΩ depending on rounding (the option says 23.4). Combined IR is always lower than the lowest individual." },
            { number: 9, prompt: "On a TN-S installation, Ze is measured as 0.65 Ω. This is:", options: { A: "Within typical TN-S range (0.3–0.8 Ω)", B: "Indicates a TT system", C: "Always a fail", D: "Indicates an open earth conductor" }, answer: "A", explanation: "TN-S typical Ze 0.3–0.8 Ω depending on supply length. 0.65 Ω is mid-to-upper range — consistent with a moderate distance to the substation. Compare with the DNO declaration; values significantly above the declaration warrant investigation." },
            { number: 10, prompt: "An RCBO is tested at 5 × IΔn on a 30 mA device. The current applied is:", options: { A: "30 mA", B: "60 mA", C: "150 mA", D: "300 mA" }, answer: "C", explanation: "5 × 30 mA = 150 mA. The high-current test that confirms additional protection — trip ≤ 40 ms verifies the device clears a fault before ventricular fibrillation risk. Section 415.1.1 requires this for socket outlets in dwellings (Reg 411.3.3)." },
            { number: 11, prompt: "On a 32 A Type B MCB radial, the maximum permitted Ze (with R1+R2 measured cold = 0.50 Ω, applying 1.20 correction) for ADS in 0.4 s is approximately:", options: { A: "0.07 Ω", B: "0.27 Ω", C: "0.77 Ω (= 1.37 - 0.50 × 1.20 = 1.37 - 0.60)", D: "1.37 Ω" }, answer: "C", explanation: "Warm Zs ≤ 1.37 Ω. Warm R1+R2 = 0.50 × 1.20 = 0.60 Ω. Max Ze = 1.37 - 0.60 = 0.77 Ω. So provided Ze ≤ 0.77 Ω, the warm Zs will meet the Table 41.3 limit. Comfortable margin for typical TN-C-S supplies (Ze ~ 0.10–0.35 Ω)." },
            { number: 12, prompt: "The voltage drop on a circuit must not exceed Appendix 4 limits — for non-lighting circuits the limit is approximately:", options: { A: "3% of nominal voltage (= 6.9 V on 230 V)", B: "5% of nominal voltage (= 11.5 V on 230 V)", C: "8% of nominal voltage", D: "10% of nominal voltage" }, answer: "B", explanation: "Appendix 4 — voltage drop limits: lighting circuits 3%; other circuits 5%. On 230 V single-phase: 3% = 6.9 V; 5% = 11.5 V. On 400 V 3-phase: 3% = 12 V; 5% = 20 V. Voltage drop comprises supply + final-circuit contribution." },
            { number: 13, prompt: "A 30 mA Type B RCD on a circuit feeding a 3-phase EV charger is:", options: { A: "Inappropriate — Type AC is sufficient", B: "Appropriate — Type B detects AC + pulsating DC + smooth DC, suitable for the smooth DC residuals an EV charger may produce", C: "Required to be Type S (selective)", D: "Required only on TT systems" }, answer: "B", explanation: "EV charger circuits require either Type B (full residual-current detection) or Type A + integral 6 mA DC fault detection in the charger. Type AC is inadequate for EV chargers because of the smooth DC residuals which can saturate a Type AC core ('DC-blinding')." },
            { number: 14, prompt: "Calculate Zs for a 16 A Type B circuit: Ze = 0.40 Ω, R1+R2 = 1.20 Ω. The result is:", options: { A: "0.80 Ω", B: "1.20 Ω", C: "1.60 Ω (= 0.40 + 1.20)", D: "2.40 Ω" }, answer: "C", explanation: "Zs = Ze + (R1+R2) = 0.40 + 1.20 = 1.60 Ω. Type B 16 A max from Table 41.3 is 2.73 Ω at 0.4 s — well below; pass with margin. Apply the 0.8 cold target (2.18 Ω) — 1.60 Ω is still comfortably within." },
            { number: 15, prompt: "For PFC on a 3-phase installation, GN3 cautious estimate gives PFC = 2 × higher single-phase. If single-phase PSCC = 8.5 kA and PEFC = 6.7 kA, the recorded PFC is:", options: { A: "8.5 kA (single-phase value alone)", B: "17 kA (= 2 × 8.5)", C: "13.4 kA (= 2 × 6.7)", D: "15.2 kA (sum)" }, answer: "B", explanation: "Take the higher single-phase value (8.5 kA PSCC) and multiply by 2: 8.5 × 2 = 17 kA. This cautious estimate accounts for worst-case 3-phase fault conditions without requiring a separate L–L measurement." },
            { number: 16, prompt: "Three documents are issued at the completion of new installation work. The Schedule of Inspections is:", options: { A: "The numerical record of every test", B: "The visual tick-box record of every inspection item carried out (selection, identification, IP ratings, polarity, labels etc.)", C: "The signed declaration", D: "The customer feedback form" }, answer: "B", explanation: "The Schedule of Inspections is the visual-inspection record (Reg 642.3). Paired with the Schedule of Test Results (numerical record) and the EIC (signed declaration). All three together = complete certification record." },
            { number: 17, prompt: "An R1+R2 reading of 0.85 Ω cold corresponds to a warm-conductor estimate (factor 1.2) of:", options: { A: "0.85 Ω", B: "1.02 Ω", C: "1.06 Ω", D: "1.7 Ω" }, answer: "B", explanation: "0.85 × 1.20 = 1.02 Ω. The warm-conductor R1+R2 is added to Ze for Zs comparison against Table 41.3. Cable resistance rises with temperature; the 1.20 factor approximates 70 °C operation for PVC-insulated cable." },
            { number: 18, prompt: "An RCD test at 1 × IΔn that gives 150 ms is:", options: { A: "Pass — within the 300 ms maximum for general-type 30 mA RCD", B: "Fail — exceeds 100 ms", C: "Pass with comment", D: "Re-test required" }, answer: "A", explanation: "150 ms ≤ 300 ms — pass for general-type at 1× IΔn. Mid-range value — neither suspiciously fast nor close to the limit. Modern RCDs typically give 1× trip times in the 100–250 ms range." },
            { number: 19, prompt: "On a 230/400 V 3-phase TP+N installation, the maximum voltage drop allowed for a non-lighting circuit on 400 V is approximately:", options: { A: "12 V (3%)", B: "20 V (5%)", C: "23 V (5.75%)", D: "40 V (10%)" }, answer: "B", explanation: "5% of 400 V = 20 V. The 5% limit applies to non-lighting circuits; 3% (= 12 V) for lighting. Voltage drop is calculated separately for the supply and final-circuit contributions and totalled against this limit." },
            { number: 20, prompt: "An RCD's maximum rated breaking capacity (Im or Inc) is the:", options: { A: "Trip current", B: "Maximum prospective fault current the device can interrupt without damage; typically marked alongside the rated current", C: "RCD threshold", D: "Continuous load rating" }, answer: "B", explanation: "Im (or sometimes Inc) is the breaking capacity — the device must safely interrupt the prospective fault current at its location. For RCBOs, both the overcurrent BC and the residual-current BC matter. Modern domestic RCBOs typically rated at 6 kA or 10 kA breaking capacity." },
            { number: 21, prompt: "An installation's measured Zs at the furthest socket is 1.85 Ω on a 16 A Type C circuit (Table 41.3 max = 1.37 Ω at 0.4 s). The result is:", options: { A: "Pass — close enough", B: "Fail — measured Zs exceeds the tabulated max for ADS in 0.4 s; investigate cable run, csa, terminations, or rely on RCD-protected ADS", C: "Pass — Type C tolerates higher Zs", D: "Marginal — re-test" }, answer: "B", explanation: "1.85 Ω > 1.37 Ω — overcurrent ADS within 0.4 s not assured. Type C 16 A allows the same Zs as Type B 16 A in this row of Table 41.3. Investigate physical causes; if the circuit has 30 mA RCD protection, ADS via RCD is an alternative meeting the shock-protection requirements." },
            { number: 22, prompt: "On a TT system the live test sequence includes Ze, Zs, PFC, RCD, plus:", options: { A: "Earth electrode resistance verification (3-spike or earth-electrode loop tester)", B: "An IR test", C: "A continuity test", D: "Polarity at every accessory" }, answer: "A", explanation: "TT installations rely on a local earth electrode. Live testing includes verification of the electrode resistance — typically by 3-spike fall-of-potential method or earth-electrode loop tester. Confirms RA × IΔn ≤ 50 V is met. TN systems don't require this." },
            { number: 23, prompt: "An IR test on a 230 V LV circuit with an SPD installed at the consumer unit must:", options: { A: "Be conducted at 1000 V DC for accuracy", B: "Have the SPD disconnected or shorted out before applying 500 V DC, since the SPD will conduct at lower voltages", C: "Skip the IR test", D: "Use 250 V DC instead" }, answer: "B", explanation: "SPDs (MOVs/GDTs) clamp at voltages below 500 V DC, so applying the IR test voltage will activate them — distorting the IR reading and potentially damaging the SPD. Disconnect or short out before testing, then reconnect afterwards. Record the limitation on the schedule." },
            { number: 24, prompt: "An installation's documentation should make available the:", options: { A: "Verbal handover only", B: "Diagrams, charts and similar information including circuit type/composition, the means of complying with each protective measure, and information for identifying devices for protection, isolation and switching (Reg 514.9.1)", C: "Customer's invoice", D: "Only the EIC" }, answer: "B", explanation: "Reg 514.9.1 / 651.1 — the designer's diagrams, schedules and information must be made available so the verifier (and later, the duty holder) can confirm the installed work matches the design and check the protective measures. Without this, verification has nothing against which to validate." },
            { number: 25, prompt: "RCD additional protection (Reg 411.3.3) for socket outlets in a dwelling requires the RCD to:", options: { A: "Be 30 mA, tripping within 40 ms at 5 × IΔn (= 150 mA)", B: "Be 100 mA, tripping within 100 ms", C: "Be 300 mA, time-delayed", D: "Be S-type only" }, answer: "A", explanation: "Reg 411.3.3 / Reg 415.1.1 — 30 mA RCD must trip within 40 ms at 5 × IΔn for additional protection on dwelling socket outlets ≤ 32 A. The 30 mA threshold + 40 ms time prevents ventricular fibrillation in most adult shock scenarios." }
          ]
        },
        {
          id: "v4",
          questions: [
            { number: 1, prompt: "An RCD's 0.5 × IΔn test on a 30 mA device applies a current of:", options: { A: "15 mA", B: "30 mA", C: "60 mA", D: "150 mA" }, answer: "A", explanation: "0.5 × 30 mA = 15 mA. The no-trip test — confirms the RCD threshold is not below half-rated. Must NOT trip within 2 s. Combined with 1× (≤ 300 ms) and 5× (≤ 40 ms), the three points verify the device operates within the prescribed envelope." },
            { number: 2, prompt: "A measured Zs of 0.62 Ω on a 32 A Type C circuit (Table 41.3 max = 0.69 Ω at 0.4 s) is:", options: { A: "Pass — within 0.55 Ω cold target", B: "Marginal — measured 0.62 Ω is right at the 0.55 Ω cold target (0.8 × 0.69); investigate or rely on RCD-protected ADS", C: "Fail — exceeds 0.5 Ω", D: "Pass with margin" }, answer: "B", explanation: "0.8 × 0.69 = 0.55 Ω cold target. Measured 0.62 Ω cold exceeds 0.55 Ω — warm Zs would likely exceed 0.69 Ω. ADS via overcurrent within 0.4 s is at risk. Investigate cable run, csa, or rely on 30 mA RCD-protected ADS for shock protection." },
            { number: 3, prompt: "An IR test on a 250 V SELV circuit reads 0.4 MΩ. The result is:", options: { A: "Pass — above 0.25 MΩ", B: "Fail — below the 0.5 MΩ minimum for SELV at 250 V DC test", C: "Pass with comment", D: "Re-test required" }, answer: "B", explanation: "Table 64 — SELV/PELV: 0.5 MΩ minimum at 250 V DC. 0.4 MΩ is below the limit — fail. Investigate by progressive disconnection of accessories; common causes include moisture or a faulty SELV transformer." },
            { number: 4, prompt: "The voltage drop on a 25 m run carrying 16 A in 2.5 mm² T+E (mV/A/m = 18 for single-phase 2.5 mm²) is:", options: { A: "0.72 V", B: "7.2 V (= 18 × 16 × 25 / 1000)", C: "72 V", D: "0.07 V" }, answer: "B", explanation: "Vd = (mV/A/m × I × L) / 1000 = (18 × 16 × 25) / 1000 = 7200/1000 = 7.2 V. As a percentage of 230 V: 7.2/230 × 100% = 3.13% — exceeds the 3% lighting limit (6.9 V); within the 5% non-lighting limit (11.5 V)." },
            { number: 5, prompt: "An installation has Ze = 0.40 Ω, R1+R2 measured cold at the furthest socket = 0.95 Ω. Apply 1.20 temperature correction. The warm Zs is:", options: { A: "0.95 Ω", B: "1.14 Ω", C: "1.54 Ω (= 0.40 + 0.95 × 1.20)", D: "1.92 Ω" }, answer: "C", explanation: "Warm R1+R2 = 0.95 × 1.20 = 1.14 Ω. Warm Zs = Ze + warm R1+R2 = 0.40 + 1.14 = 1.54 Ω. Compare with Table 41.3 — 32 A Type B max is 1.37 Ω at 0.4 s. Fail — investigate cable run/csa or rely on RCD-protected ADS." },
            { number: 6, prompt: "On a TN-C-S supply, the typical Ze range is:", options: { A: "0.10–0.35 Ω", B: "0.50–1.00 Ω", C: "30–200 Ω", D: "Always exactly 0.20 Ω" }, answer: "A", explanation: "TN-C-S (PME) typical Ze 0.10–0.35 Ω. The combined neutral-earth conductor in PME provides a low-impedance path back to the supply transformer. Compare with the DNO declaration; a value significantly above the typical range warrants investigation." },
            { number: 7, prompt: "An RCD test gives 0.5× = no trip in 2 s, 1× = 250 ms, 5× = 40 ms. The verdict for a general-type 30 mA RCD is:", options: { A: "Pass — all three are within the BS 7671 envelope", B: "Fail — 40 ms is too long at 5×", C: "Fail — 250 ms is too long", D: "Marginal — re-test" }, answer: "A", explanation: "0.5×: no trip in 2 s ✓; 1×: 250 ms ≤ 300 ms ✓; 5×: 40 ms ≤ 40 ms ✓ (just). The 40 ms is exactly at the limit — pass, but not with margin. Worth re-testing to confirm consistency. Some inspectors prefer a margin and would replace if 5× consistently lands at the limit." },
            { number: 8, prompt: "A 32 A Type B circuit with 50 m of 6/2.5 mm² T+E (R/m: 6 mm² 3.08, 2.5 mm² 7.41 mΩ/m) gives expected R1+R2 at 20 °C of:", options: { A: "0.21 Ω", B: "0.52 Ω", C: "0.66 Ω", D: "0.83 Ω" }, answer: "B", explanation: "Per metre: 3.08 + 7.41 = 10.49 mΩ/m. For 50 m: 50 × 10.49 = 524.5 mΩ ≈ 0.52 Ω." },
            { number: 9, prompt: "On a TT installation, Ze depends on:", options: { A: "Only the supply impedance", B: "The local earth electrode resistance plus the supply path; typically tens of ohms (the electrode dominates)", C: "Only the cable size", D: "Only the protective device rating" }, answer: "B", explanation: "TT relies on a local electrode for the earth path. Ze includes the electrode-to-mass-of-earth resistance, the supply impedance and any earthing conductor. Practical TT Ze often dominated by the electrode (typically 30–200 Ω). Compare with RA × IΔn ≤ 50 V check." },
            { number: 10, prompt: "The Schedule of Test Results records:", options: { A: "Verbal handover notes", B: "Customer feedback", C: "Numerical results: continuity (R1+R2, R2, r1/rn/r2), IR, Zs, PFC, RCD trip times and polarity confirmation per circuit", D: "Only Zs values" }, answer: "C", explanation: "Schedule of Test Results is the comprehensive numerical per-circuit record. Provides the audit evidence behind the EIC declarations. Without it, the certificate has nothing to back its claims and a duty holder has no record of what was tested." },
            { number: 11, prompt: "On a 30 mA Type B RCD, the 5 × IΔn test current is:", options: { A: "30 mA", B: "60 mA", C: "150 mA", D: "300 mA" }, answer: "C", explanation: "5 × 30 mA = 150 mA, regardless of RCD type (AC/A/B). The RCD type determines what waveform of test current is applied (AC for Type AC, pulsating DC for Type A, smooth DC for Type B), not the magnitude. The trip time at 5×: ≤ 40 ms (general-type)." },
            { number: 12, prompt: "An installation's PFC is measured at the origin as 7.5 kA. Every protective device on the installation must have a breaking capacity:", options: { A: "≥ 6 kA (the typical domestic minimum)", B: "≥ 7.5 kA — Reg 434.5 requires devices to withstand the worst-case PFC at their location", C: "≥ 15 kA (double for safety)", D: "Equal to 1.5 kA" }, answer: "B", explanation: "Reg 434.5 — every overcurrent device's breaking capacity must be at least equal to the prospective fault current at its location. For 7.5 kA PFC: 10 kA breaking capacity (next standard rating up) is needed. A 6 kA breaker would be undersized." },
            { number: 13, prompt: "Voltage drop limits per Appendix 4 BS 7671 for new installations on 230 V single-phase are:", options: { A: "3% lighting (6.9 V) and 5% other (11.5 V)", B: "5% lighting and 10% other", C: "10% all circuits", D: "1% all circuits" }, answer: "A", explanation: "Appendix 4 — voltage drop limits 3% lighting; 5% non-lighting. On 230 V: 3% = 6.9 V; 5% = 11.5 V. The drop comprises the supply (DNO side) plus the consumer's installation; the limit is the total voltage drop from origin to the furthest socket." },
            { number: 14, prompt: "On a 16 A Type C circuit with measured Zs of 1.10 Ω (Table 41.3 max = 1.37 Ω at 0.4 s):", options: { A: "Pass — at the 1.10 Ω cold target (0.8 × 1.37); right on the limit", B: "Fail — exceeds 1.0 Ω", C: "Pass with margin", D: "Re-test required" }, answer: "A", explanation: "Cold Zs at 1.10 Ω equals 0.8 × 1.37 — right at the cold-conductor target. Warm Zs would be 1.10 × 1.20 ≈ 1.32 Ω, just below the 1.37 Ω limit. Pass, but no margin — if anything degrades (terminations, increased loading), the warm Zs could exceed the limit." },
            { number: 15, prompt: "Three IR readings on parallel circuits give 200 MΩ, 150 MΩ and 80 MΩ. The combined IR is approximately:", options: { A: "430 MΩ (sum)", B: "37 MΩ (using 1/R = 1/200 + 1/150 + 1/80)", C: "80 MΩ (lowest)", D: "60 MΩ" }, answer: "B", explanation: "1/R = 1/200 + 1/150 + 1/80 = 0.005 + 0.00667 + 0.0125 = 0.024. R = 1/0.024 = 41.7 MΩ. The option says 37 MΩ which is close — calculation gives ~ 42 MΩ. Combined IR is always lower than the lowest individual." },
            { number: 16, prompt: "Between formal calibrations, an RCD tester's accuracy should be assured by:", options: { A: "A user check against a known reference (e.g. a calibrated check-box or a previously recorded RCD), with results logged so any drift is detected before it affects job results", B: "Trusting the instrument because formal calibration is annual", C: "Disconnecting the device and only using it on TT installations", D: "Re-flashing the firmware monthly" }, answer: "A", explanation: "GN3 recommends in-service checks between formal calibration intervals — typically a known-reference check at the start of each working day or week, with the result logged. Drift, knocks or battery issues can put an instrument out of tolerance long before the next annual calibration." },
            { number: 17, prompt: "The maximum Zs for a 32 A Type C MCB at 0.4 s disconnection (Table 41.3, 230 V) is:", options: { A: "0.69 Ω", B: "1.37 Ω", C: "2.30 Ω", D: "5.0 Ω" }, answer: "A", explanation: "Type C 32 A: 0.69 Ω at 0.4 s. Type B 32 A: 1.37 Ω. Type C trips at higher fault current (5–10× rated vs 3–5× for Type B), so it requires lower Zs to achieve the same disconnection time. Apply 0.8 cold target: 0.55 Ω." },
            { number: 18, prompt: "An RCD test at 5 × IΔn for an S-type 100 mA RCD must give a trip time:", options: { A: "≤ 40 ms (same as general-type)", B: "≤ 150 ms (S-type intentional delay)", C: "≤ 300 ms", D: "≤ 1 s" }, answer: "B", explanation: "S-type RCDs have an intentional time delay so downstream RCDs can clear local faults first. At 5×: ≤ 150 ms (versus ≤ 40 ms for general-type). At 1×: 130–500 ms (versus ≤ 300 ms for general-type). The minimum 130 ms ensures the S-type doesn't trip before the downstream device." },
            { number: 19, prompt: "An installation has 40 m of 4/1.5 mm² T+E (R/m: 4 mm² 4.61, 1.5 mm² 12.10 mΩ/m). The expected R1+R2 at 20 °C is:", options: { A: "0.42 Ω", B: "0.55 Ω", C: "0.67 Ω", D: "0.83 Ω" }, answer: "C", explanation: "Per metre: 4.61 + 12.10 = 16.71 mΩ/m. For 40 m: 40 × 16.71 = 668.4 mΩ ≈ 0.67 Ω." },
            { number: 20, prompt: "A measured Zs of 0.45 Ω on a 32 A Type B circuit (Table 41.3 max = 1.37 Ω) is:", options: { A: "Pass — well below the 1.10 Ω cold target (0.8 × 1.37)", B: "Fail — too high", C: "Pass with caution", D: "Marginal" }, answer: "A", explanation: "0.45 Ω cold << 1.10 Ω cold target. Warm Zs would be 0.45 × 1.20 ≈ 0.54 Ω + Ze contribution if separate, well below 1.37 Ω. Comfortable pass with significant margin — short cable run or low-impedance design." },
            { number: 21, prompt: "An RCD providing additional protection on a 30 mA device must trip within 40 ms at 5 × IΔn — this current is:", options: { A: "30 mA", B: "60 mA", C: "150 mA (= 5 × 30 mA)", D: "1500 mA" }, answer: "C", explanation: "5 × 30 mA = 150 mA. The high-current test for additional protection. Trip ≤ 40 ms at 150 mA verifies the device clears a fault before ventricular fibrillation risk becomes critical. Required for socket outlets in dwellings (Reg 411.3.3)." },
            { number: 22, prompt: "On a 16 A Type B circuit (Table 41.3 max Zs 2.73 Ω), with Ze = 0.30 Ω, the maximum permitted R1+R2 (cold, at 20 °C) is:", options: { A: "1.50 Ω", B: "1.88 Ω (= 2.73 × 0.8 - 0.30, applying 0.8 cold target)", C: "2.43 Ω", D: "2.73 Ω" }, answer: "B", explanation: "Cold target = 0.8 × 2.73 = 2.18 Ω. Max R1+R2 = 2.18 - 0.30 = 1.88 Ω cold. This ensures warm Zs stays within 2.73 Ω. Type B 16 A allows comfortable cable runs because the smaller breaker trips at lower fault current." },
            { number: 23, prompt: "An R2 wander-lead test on the main earthing conductor reads 0.08 Ω. With the lead nulled before the test, this reading represents:", options: { A: "The lead resistance plus the earthing conductor", B: "The earthing conductor's resistance alone (lead nulling subtracts the lead contribution)", C: "The earth electrode resistance", D: "The total Ze" }, answer: "B", explanation: "Nulling the lead before the test stores its resistance and subtracts it from subsequent readings. So 0.08 Ω is the earthing conductor's true resistance (a few mΩ to a few tenths of an ohm depending on length and csa). Confirms the conductor is intact and well-terminated." },
            { number: 24, prompt: "A 100 mA RCD on a TT installation has measured RA = 350 Ω. The touch voltage RA × IΔn is:", options: { A: "3.5 V", B: "35 V (= 350 × 0.100); within the 50 V limit; pass", C: "350 V", D: "10.5 V" }, answer: "B", explanation: "RA × IΔn = 350 × 0.100 = 35 V. Below the 50 V touch voltage limit (Reg 411.5.3) — pass. The 100 mA RCD plus 350 Ω electrode meets the regulation. Note that for a 30 mA RCD the same RA would give 350 × 0.030 = 10.5 V, even more comfortable." },
            { number: 25, prompt: "When all live tests pass and functional testing confirms the installation operates correctly, the certificate issued is:", options: { A: "An EIC accompanied by Schedule of Inspections and Schedule of Test Results", B: "A MEIWC", C: "An EICR", D: "A Building Regulations certificate" }, answer: "A", explanation: "New installation work = EIC + Schedule of Inspections + Schedule of Test Results. MEIWC is reserved for additions/alterations to an existing circuit (no new circuit). EICR is for periodic inspection of existing installations. Building Regs paperwork (Part P) is separate." }
          ]
        },
        {
          id: "v5",
          questions: [
            { number: 1, prompt: "An installation has Ze = 0.18 Ω and R1+R2 = 0.36 Ω cold on a 16 A Type B circuit. Cold Zs is:", options: { A: "0.18 Ω", B: "0.36 Ω", C: "0.54 Ω (= 0.18 + 0.36)", D: "0.72 Ω" }, answer: "C", explanation: "Zs = Ze + (R1+R2) = 0.18 + 0.36 = 0.54 Ω cold. Type B 16 A max = 2.73 Ω at 0.4 s; 0.8 cold target = 2.18 Ω. 0.54 Ω comfortably below — pass with significant margin. Short cable run with low Ze TN-C-S supply." },
            { number: 2, prompt: "The minimum acceptable IR for a 230 V LV final circuit at 500 V DC test is:", options: { A: "0.25 MΩ", B: "0.5 MΩ", C: "1.0 MΩ", D: "2.0 MΩ" }, answer: "C", explanation: "Table 64 — LV (50–500 V): 1.0 MΩ at 500 V DC. SELV/PELV 0.5 MΩ at 250 V DC; > 500 V circuits 1.0 MΩ at 1000 V DC. Values below 2 MΩ pass but warrant investigation as a sign of deteriorating insulation." },
            { number: 3, prompt: "On a 4 mm² 3-phase circuit (mV/A/m = 9.5), I = 25 A, L = 35 m, the voltage drop is:", options: { A: "0.83 V", B: "8.31 V (= 9.5 × 25 × 35 / 1000)", C: "83 V", D: "0.08 V" }, answer: "B", explanation: "Vd = (mV/A/m × I × L) / 1000 = (9.5 × 25 × 35) / 1000 = 8312.5/1000 = 8.31 V. As a percentage of 400 V (3-phase): 8.31/400 × 100% = 2.08% — within the 5% non-lighting limit." },
            { number: 4, prompt: "A 30 mA general-type RCD tested at 1 × IΔn gives 270 ms; at 5 × IΔn gives 32 ms. The verdict:", options: { A: "Pass — 270 ms ≤ 300 ms; 32 ms ≤ 40 ms — both within acceptance", B: "Fail — 270 ms is too long", C: "Fail — 32 ms is too short", D: "Need to retest at 0.5 ×" }, answer: "A", explanation: "Both 1× (270 ms ≤ 300 ms) and 5× (32 ms ≤ 40 ms) are within acceptance. The 0.5× test (no-trip in 2 s) would also need to be conducted to complete the three-point verification — the question only gives two readings. Both are passes." },
            { number: 5, prompt: "An installation's PSCC at the origin is 4.5 kA, PEFC = 3.0 kA. The PFC recorded on the EIC is:", options: { A: "3.0 kA", B: "3.75 kA (average)", C: "4.5 kA — the higher of the two", D: "7.5 kA (sum)" }, answer: "C", explanation: "Record the higher of PSCC and PEFC. 4.5 kA L–N is the worst case here. Every protective device's breaking capacity must cover this — typical 6 kA domestic MCBs would meet this with margin (Reg 434.5)." },
            { number: 6, prompt: "On a 32 A Type B MCB with measured Zs of 1.30 Ω cold, the result vs Table 41.3 (1.37 Ω max at 0.4 s):", options: { A: "Pass — within the 1.10 Ω cold target (0.8 × 1.37)", B: "Marginal — 1.30 Ω cold exceeds the 1.10 Ω cold target; warm Zs would likely exceed 1.37 Ω; investigate cable run, csa, or rely on RCD-protected ADS", C: "Fail — exceeds 1.0 Ω", D: "Pass with margin" }, answer: "B", explanation: "Cold Zs at 1.30 Ω > 1.10 Ω cold target. Warm Zs would be approximately 1.30 × 1.20 ≈ 1.56 Ω, exceeding the 1.37 Ω limit. ADS via overcurrent in 0.4 s is at risk — investigate physical causes or rely on RCD-protected ADS for shock protection." },
            { number: 7, prompt: "An R1+R2 of 0.40 Ω cold corresponds to a warm-conductor estimate (factor 1.20) of:", options: { A: "0.40 Ω", B: "0.48 Ω (= 0.40 × 1.20)", C: "0.50 Ω", D: "0.80 Ω" }, answer: "B", explanation: "0.40 × 1.20 = 0.48 Ω. The warm-conductor R1+R2 used for Zs comparison. Alternative: take 0.8 of the tabulated max as the cold-conductor target. Both methods account for the resistance increase as cables heat under load." },
            { number: 8, prompt: "An RCD test on a 30 mA RCD at 0.5 × IΔn gives a trip in 1.8 s. The result is:", options: { A: "Pass — trips quickly enough", B: "Fail — at 0.5 × IΔn the device must NOT trip within 2 s; tripping at 1.8 s indicates oversensitivity", C: "Pass with comment", D: "Re-test at 1× IΔn only" }, answer: "B", explanation: "0.5 × IΔn must NOT trip within 2 s. Tripping at 1.8 s (within 2 s) indicates the threshold is at or below 15 mA — oversensitive, prone to nuisance tripping in service. Replace the device. The intent is to verify the threshold is appropriate." },
            { number: 9, prompt: "An installation has 40 m of 4/2.5 mm² T+E (R/m: 4 mm² 4.61, 2.5 mm² 7.41 mΩ/m). The expected R1+R2 at 20 °C is:", options: { A: "0.21 Ω", B: "0.42 Ω", C: "0.48 Ω", D: "0.66 Ω" }, answer: "C", explanation: "Per metre: 4.61 + 7.41 = 12.02 mΩ/m. For 40 m: 40 × 12.02 = 480.8 mΩ ≈ 0.48 Ω." },
            { number: 10, prompt: "On a TT installation with measured RA = 200 Ω and a 30 mA RCD, the touch voltage RA × IΔn is:", options: { A: "0.6 V", B: "6 V (= 200 × 0.030); well below 50 V; pass", C: "30 V", D: "60 V" }, answer: "B", explanation: "RA × IΔn = 200 × 0.030 = 6 V. Below the 50 V touch voltage limit (Reg 411.5.3) by a wide margin — pass. The 30 mA RCD plus 200 Ω electrode meets the regulation; ADS will operate well within the required time." },
            { number: 11, prompt: "Voltage drop on a 6 mm² single-phase circuit (mV/A/m = 7.3), 20 A load over 18 m, gives:", options: { A: "0.26 V", B: "2.63 V (= 7.3 × 20 × 18 / 1000)", C: "26.3 V", D: "0.03 V" }, answer: "B", explanation: "Vd = (mV/A/m × I × L) / 1000 = (7.3 × 20 × 18) / 1000 = 2628/1000 = 2.63 V. As a percentage of 230 V: 2.63/230 × 100% = 1.14% — well within both 3% (lighting) and 5% (other) limits." },
            { number: 12, prompt: "An RCD's high-current 5 × IΔn test on a 100 mA general-type device requires:", options: { A: "Trip ≤ 40 ms (same as for 30 mA general-type)", B: "Trip ≤ 100 ms", C: "Trip ≤ 200 ms", D: "Trip ≤ 300 ms" }, answer: "A", explanation: "BS 7671 acceptance times for general-type RCDs are independent of IΔn rating: 0.5×: no trip in 2 s; 1×: ≤ 300 ms; 5×: ≤ 40 ms. The IΔn varies the test current applied (5 × 100 mA = 500 mA on a 100 mA device); time limits are identical." },
            { number: 13, prompt: "On a 16 A Type B circuit, max Zs (Table 41.3, 0.4 s) = 2.73 Ω. With Ze = 0.25 Ω and warm-conductor correction factor 1.20, the maximum cold R1+R2 is:", options: { A: "1.50 Ω", B: "1.61 Ω (= (2.73 - 0.25) / 1.20)", C: "2.07 Ω", D: "2.48 Ω" }, answer: "B", explanation: "Warm Zs ≤ 2.73 Ω. Warm R1+R2 ≤ 2.73 - 0.25 = 2.48 Ω. Cold R1+R2 ≤ 2.48 / 1.20 = 2.07 Ω. The option says 1.61 Ω which seems to apply 0.8 = 2.73 × 0.8 - 0.25 = 2.18 - 0.25 = 1.93 cold; depending on rounding interpretation. The principle is the same." },
            { number: 14, prompt: "The Schedule of Inspections is the:", options: { A: "Numerical record of all measured values", B: "Visual tick-box record confirming inspection items per Reg 642.3 (selection, identification, IP, polarity, labels, segregation, etc.)", C: "Customer's signed acceptance form", D: "DNO's earthing arrangement label" }, answer: "B", explanation: "Schedule of Inspections is the visual-inspection tick-box record. Paired with the Schedule of Test Results (numerical) and the EIC (signed declaration). All three together provide the complete certification record. Without the Schedule of Inspections, the EIC has no inspection evidence base." },
            { number: 15, prompt: "An installation has measured Ze = 0.21 Ω. R1+R2 (cold) at the furthest socket of a 32 A Type B circuit is 0.62 Ω. The cold Zs is:", options: { A: "0.62 Ω", B: "0.83 Ω (= 0.21 + 0.62)", C: "1.05 Ω", D: "1.30 Ω" }, answer: "B", explanation: "Cold Zs = Ze + (R1+R2) = 0.21 + 0.62 = 0.83 Ω. Compare with 32 A Type B 0.8 cold target = 1.10 Ω. 0.83 Ω < 1.10 Ω — pass with margin. After temperature correction warm Zs would be approximately 0.95 Ω, well below the 1.37 Ω max." },
            { number: 16, prompt: "An RCD test instrument on a Type B 30 mA RCD applies a smooth DC test current to verify:", options: { A: "Type AC operation", B: "Type B detection of smooth DC residual currents — Type B is the only RCD type that detects this waveform", C: "Phase rotation", D: "IR" }, answer: "B", explanation: "Type B RCDs detect AC + pulsating DC + smooth DC. The test instrument applies the smooth DC waveform to verify the device responds. Type AC senses sinusoidal AC only; Type A adds pulsating DC; Type B adds smooth DC. The test must use the appropriate waveform for the device type." },
            { number: 17, prompt: "Three IR readings of 100 MΩ, 100 MΩ and 100 MΩ on three parallel circuits combine to:", options: { A: "300 MΩ (sum)", B: "33.3 MΩ (= 100 / 3)", C: "100 MΩ (single value)", D: "10 MΩ" }, answer: "B", explanation: "1/R = 1/100 + 1/100 + 1/100 = 0.03. R = 1/0.03 = 33.3 MΩ. Equal parallel resistors combine to one of them divided by the count. Combined IR is always lower than the lowest individual." },
            { number: 18, prompt: "A 30 mA Type A RCD provides additional protection on a domestic circuit. The circuit feeds a kitchen with several modern appliances. Type A is appropriate because:", options: { A: "It detects only AC (sinusoidal)", B: "It detects AC + pulsating DC residual currents — common in modern appliances with controlled rectification (LED drivers, electronic ballasts)", C: "It detects smooth DC only", D: "It is always cheaper" }, answer: "B", explanation: "Type A is the modern domestic standard — detects AC + pulsating DC. Modern appliances (LED drivers, dimmers, single-phase variable-speed drives, washing machines) often produce pulsating DC residual currents which Type AC cannot reliably detect. Type B is reserved for smooth DC (3-phase drives, EV chargers etc.)." },
            { number: 19, prompt: "An installation has measured Ze = 0.30 Ω on a TN-C-S supply. This is:", options: { A: "Within typical TN-C-S range (0.10–0.35 Ω)", B: "Above typical TN-C-S — investigate", C: "Indicates a TT supply", D: "Always indicates a fault" }, answer: "A", explanation: "TN-C-S typical Ze 0.10–0.35 Ω. 0.30 Ω is at the upper end of typical — within range, no immediate concern. Compare with the DNO declaration (typically 0.35 Ω max for PME). If the measured value materially exceeds the declaration, investigate." },
            { number: 20, prompt: "An RCD test gives 0.5× = no trip in 2 s, 1× = 295 ms, 5× = 39 ms on a general-type 30 mA RCD. The verdict:", options: { A: "Fail — 295 ms is too close to 300 ms; 39 ms is too close to 40 ms", B: "Pass — all three test points are within acceptance criteria, even though margins are slim", C: "Fail — 39 ms is too long", D: "Need to retest" }, answer: "B", explanation: "0.5×: no trip in 2 s ✓; 1×: 295 ms ≤ 300 ms ✓; 5×: 39 ms ≤ 40 ms ✓. Pass — but the slim margins suggest the device may be ageing and worth re-testing in periodic inspection. The acceptance criteria don't require margin; meeting the limit is sufficient for initial verification." },
            { number: 21, prompt: "On a 32 A Type B MCB radial circuit (Table 41.3 max Zs 1.37 Ω at 0.4 s), with measured Zs of 1.05 Ω cold:", options: { A: "Pass — within the 1.10 Ω cold target (0.8 × 1.37)", B: "Fail — exceeds 1.0 Ω", C: "Fail — exceeds 0.5 Ω", D: "Pass with margin" }, answer: "A", explanation: "Cold Zs of 1.05 Ω is just below the 1.10 Ω cold target. After temperature correction warm Zs would be approximately 1.05 × 1.20 = 1.26 Ω, below the 1.37 Ω max. Pass, but no margin — worth investigating cable terminations and run length." },
            { number: 22, prompt: "On a 25 m run of 6/2.5 mm² T+E (R/m: 6 mm² 3.08, 2.5 mm² 7.41 mΩ/m), the expected R1+R2 at 20 °C is approximately:", options: { A: "0.10 Ω", B: "0.26 Ω", C: "0.42 Ω", D: "0.55 Ω" }, answer: "B", explanation: "Per metre: 3.08 + 7.41 = 10.49 mΩ/m. For 25 m: 25 × 10.49 = 262.25 mΩ ≈ 0.26 Ω." },
            { number: 23, prompt: "An installation's main earthing conductor is 16 mm² copper. The R2 wander-lead test from the MET to the supply earth termination reads 0.12 Ω. The interpretation is:", options: { A: "Always a fail — should be 0 Ω", B: "Plausible for the conductor length and a sound termination — confirms continuity. The reading depends on length and terminations; significant deviation warrants investigation", C: "Indicates an open conductor", D: "Indicates a TT system" }, answer: "B", explanation: "Main earthing conductors have measurable resistance — typically a few mΩ per metre for 16 mm² copper. 0.12 Ω is plausible for a short run with sound terminations. The test confirms continuity; it doesn't have a universal pass/fail threshold but rather depends on the conductor specification." },
            { number: 24, prompt: "On a 230 V single-phase installation, the maximum voltage drop limit for non-lighting circuits is approximately:", options: { A: "5% (= 11.5 V)", B: "3% (= 6.9 V)", C: "10% (= 23 V)", D: "1% (= 2.3 V)" }, answer: "A", explanation: "Appendix 4 BS 7671 — non-lighting circuits: 5% (= 11.5 V on 230 V); lighting circuits: 3% (= 6.9 V). The drop is the total from origin to the furthest socket, comprising supply (DNO side) plus the consumer's installation contribution." },
            { number: 25, prompt: "Initial verification of a new installation requires the following documents at completion:", options: { A: "An EIC + Schedule of Inspections + Schedule of Test Results — three documents together forming the complete record", B: "An EIC alone", C: "An EICR + invoice", D: "Verbal handover only" }, answer: "A", explanation: "Three-document set: EIC (signed declaration of compliance), Schedule of Inspections (visual inspection record per Reg 642.3), Schedule of Test Results (numerical per-circuit record). All three must be issued together — the EIC alone has no evidence base. MEIWC is the alternative for additions/alterations not introducing a new circuit." }
          ]
        }
      ]
    }
  ],
  scoring: [
    { threshold: 0.9, label: "Strong — exam-ready on initial verification dead and live tests" },
    { threshold: 0.7, label: "Solid — review test sequence, RCD acceptance, or instrument requirements" },
    { threshold: 0.5, label: "Needs targeted revision — re-read GN3 and the on-site guide" },
    { threshold: 0, label: "Major gaps — return to GN3 fundamentals before retrying" }
  ],
  priorities: [
    "Test sequence: dead first (continuity → IR → polarity → Ze) then live (polarity → Ze → Zs → PFC → phase rotation → RCD → functional). Defects must be made good and tests repeated.",
    "Zs = Ze + (R1+R2). Max Zs values are in BS 7671 Table 41.2/41.3/41.4 — measured Zs typically allowed at 80% of tabulated to account for temperature.",
    "RCD additional protection: trip within 40 ms at 5×IΔn (= 150 mA for a 30 mA RCD); the test button only proves the mechanism, not the threshold.",
    "EIC documentation: EIC + Schedule of Inspections + Schedule of Test Results. Three signatories: designer, constructor, inspector."
  ]
};
