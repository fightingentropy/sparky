import type { Exam } from "./types";

export const periodicInspectionExam: Exam = {
  id: "periodic-inspection",
  title: "Periodic Inspection & Testing",
  subtitle: "Combined topic drill + Access Training homework practice bank",
  description:
    "A focused exam built around Webinar 6 – Periodic Inspection and Testing. Covers the purpose of PIT, recommended intervals, sampling, limitations, the dead/live test approach for an in-service installation, and the legal drivers behind periodic verification. Combines the Access Training Periodic Inspection homework practice bank with additional tricky questions on EICR coding, sampling escalation, limitations, and diagnostic interpretation of common test results. Added merged EICR documentation, earthing, Zs comparison and conductor-resistance questions that fit periodic inspection work.",
  format:
    "Each attempt = 115 multiple-choice questions across all sections. Pass at 70%+. The bank rotates through 5 distinct variants per section so retries draw fresh material.",
  passPercent: 0.7,
  sections: [
    {
      id: "section-1",
      title: "Section 1 — Purpose & Intervals",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt:
                "The IET-recommended maximum interval between periodic inspections of an owner-occupied domestic installation is:",
              options: {
                A: "1 year, in line with HMOs and shared dwellings",
                B: "3 years, the figure used for general industrial premises",
                C: "5 years, mirroring the maximum mandated for privately rented dwellings",
                D: "10 years, or at change of occupancy if sooner"
              },
              answer: "D",
              explanation:
                "GN3 Table 3.2 sets 10 years as the recommended maximum for owner-occupied domestic, with a fresh inspection at change of occupancy. The 5-year figure for rented homes comes from separate legislation (ESS PRS Regs 2020), not from GN3."
            },
            {
              number: 2,
              prompt:
                "Under the Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020, the maximum interval between EICRs on a privately rented domestic property is:",
              options: {
                A: "1 year, or at every change of tenancy whichever falls sooner",
                B: "3 years, with no change-of-tenancy trigger",
                C: "5 years, or at change of tenancy if sooner",
                D: "10 years, mirroring the IET figure for owner-occupied homes"
              },
              answer: "C",
              explanation:
                "The 2020 Regulations set a 5-year statutory maximum, with a fresh EICR at change of tenancy if that falls sooner. The landlord must give the report to existing tenants within 28 days and to a new tenant before they move in."
            },
            {
              number: 3,
              prompt:
                "Typical IET-recommended maximum interval for a general commercial premises (offices, shops, restaurants):",
              options: {
                A: "1 year",
                B: "3 years",
                C: "5 years, or at change of occupancy",
                D: "10 years"
              },
              answer: "C",
              explanation:
                "GN3 typically gives 5 years for commercial, with industrial usually at 3 years and high-risk environments (petrol stations, cinemas, swimming pools, leisure complexes, theatres) at 1 year."
            },
            {
              number: 4,
              prompt:
                "Typical IET-recommended maximum interval for a swimming pool installation:",
              options: { A: "1 year", B: "3 years", C: "5 years", D: "10 years" },
              answer: "A",
              explanation:
                "1 year. Water plus continuous public footfall is one of the highest-risk LV environments. Petrol filling stations, fish farms, marinas, leisure complexes and theatres also fall into the 1-year band."
            },
            {
              number: 5,
              prompt:
                "Typical IET-recommended maximum interval for a general industrial unit:",
              options: { A: "1 year", B: "3 years", C: "5 years", D: "10 years" },
              answer: "B",
              explanation:
                "Industrial premises are typically 3 years in GN3 Table 3.2 — heavier service conditions and a higher rate of mechanical and thermal stress on the installation justify a shorter interval than general commercial."
            },
            {
              number: 6,
              prompt:
                "Typical IET-recommended maximum interval for a working agricultural premises:",
              options: { A: "1 year", B: "3 years", C: "5 years", D: "10 years" },
              answer: "B",
              explanation:
                "Agricultural and horticultural premises are typically 3 years. The combined effect of livestock, dust, moisture, ammonia and rough use accelerates deterioration of the fixed wiring."
            },
            {
              number: 7,
              prompt:
                "Typical IET-recommended maximum interval for a construction site installation:",
              options: { A: "3 months", B: "1 year", C: "3 years", D: "5 years" },
              answer: "A",
              explanation:
                "GN3 recommends 3 months for construction-site installations because temporary cabling, accessories and switchgear take heavy mechanical abuse. Reducing the interval is a recognised way to keep risk under control."
            },
            {
              number: 8,
              prompt:
                "Typical IET-recommended maximum interval for a cinema:",
              options: { A: "1 year", B: "3 years", C: "5 years", D: "10 years" },
              answer: "B",
              explanation:
                "Cinemas are typically 3 years in GN3. Theatres, places of public entertainment and large public-assembly venues are usually shorter (often 1 year) because of the mix of public access and heavy service conditions."
            },
            {
              number: 9,
              prompt:
                "Typical IET-recommended maximum interval for a caravan pitch or holiday park supply:",
              options: { A: "1 year", B: "3 years", C: "5 years", D: "10 years" },
              answer: "B",
              explanation:
                "Caravan pitch installations are typically 3 years (the rental caravan unit itself is 1 year). The pitch socket-outlets are exposed to weather and frequent disconnect/reconnect, so a shorter interval than commercial fixed wiring is justified."
            },
            {
              number: 10,
              prompt:
                "An owner-occupied dwelling has just changed hands. The previous EICR is dated three years ago and was satisfactory. The IET position is that:",
              options: {
                A: "The new owner can rely on the existing report to the original 10-year date",
                B: "A fresh EICR should be carried out at the change of occupancy regardless of the original date",
                C: "No EICR is needed because the previous one was satisfactory",
                D: "The new owner can extend the interval to 15 years"
              },
              answer: "B",
              explanation:
                "Change of occupancy is a recommended trigger for a fresh EICR even on owner-occupied homes — the new occupier needs an up-to-date assessment and the previous report cannot speak to use, alterations or wear since it was issued."
            },
            {
              number: 11,
              prompt:
                "Periodic inspection and testing is best described as:",
              options: {
                A: "A guarantee that no fault will occur before the next inspection",
                B: "A proactive replacement of every component approaching end-of-life",
                C: "A snapshot in time — a defensible view of the installation's condition on the day of inspection that does not guarantee future performance",
                D: "A purely paperwork exercise"
              },
              answer: "C",
              explanation:
                "PIT is a condition assessment at a moment in time. The interval is risk-based precisely because faults can develop in service — and the duty holder remains responsible for in-service safety throughout, not only at inspection time."
            },
            {
              number: 12,
              prompt:
                "BS 7671 651.1 states that periodic inspection and testing is carried out, so far as reasonably practicable, to verify:",
              options: {
                A: "The competence of the original installer",
                B: "The safety of persons and livestock against electric shock and burns, protection against fire and damage by heat, that the installation is not damaged so as to impair safety, and that the installation is not defective",
                C: "Only the earth fault loop impedance values",
                D: "The cost of bringing the installation to current edition"
              },
              answer: "B",
              explanation:
                "Reg 651.1 sets the four objectives of periodic verification. These are the four boxes the inspector is making a judgement against — not the original installer's workmanship."
            },
            {
              number: 13,
              prompt:
                "Following a serious fire on the premises, the most appropriate action regarding the planned EICR interval is:",
              options: {
                A: "Carry on with the original interval",
                B: "Bring the periodic inspection forward — fire is a recognised trigger for an unscheduled inspection",
                C: "Wait until the next change of occupancy",
                D: "Cancel the EICR until the building is fully refurbished"
              },
              answer: "B",
              explanation:
                "Fire, flood, electric shock or significant damage are recognised triggers in GN3 for an unscheduled inspection. The installation may have been compromised in ways the original interval cannot anticipate."
            },
            {
              number: 14,
              prompt:
                "A change of use of the premises (for example a domestic dwelling converted into a HMO) means that:",
              options: {
                A: "The existing EICR continues to apply unchanged",
                B: "A fresh assessment is needed because the risk profile and the applicable legislation have changed",
                C: "Only the front door circuit needs retesting",
                D: "The interval automatically becomes 10 years"
              },
              answer: "B",
              explanation:
                "Change of use changes the risk profile — different occupants, different loads, different statutory regime. GN3 treats change of use as a trigger for a fresh inspection, not just a re-date of the previous one."
            },
            {
              number: 15,
              prompt:
                "Petrol filling station forecourt installation: typical IET-recommended interval:",
              options: { A: "1 year", B: "3 years", C: "5 years", D: "10 years" },
              answer: "A",
              explanation:
                "Petrol stations are 1 year. The hazardous-area classification, the consequences of an ignition, and constant public traffic justify the shortest practical interval."
            },
            {
              number: 16,
              prompt:
                "A privately rented domestic installation in England has its EICR carried out. The landlord must supply a copy of the report to the existing tenant within:",
              options: { A: "7 days", B: "14 days", C: "28 days", D: "3 months" },
              answer: "C",
              explanation:
                "ESS PRS 2020: existing tenants must receive the EICR within 28 days. A new tenant must receive it before they move in. Local authorities can also request the report and the landlord must provide it."
            },
            {
              number: 17,
              prompt:
                "If an EICR identifies a C1 or C2 (or FI requiring further investigation), the landlord under the 2020 Regs must arrange remedial action within:",
              options: {
                A: "28 days, or sooner if specified in the report",
                B: "3 months",
                C: "12 months",
                D: "Before the next EICR cycle"
              },
              answer: "A",
              explanation:
                "ESS PRS Regs 2020: required remedial work must be completed within 28 days (or shorter if the inspector specifies) and written confirmation supplied to the tenant and to the local authority on request."
            },
            {
              number: 18,
              prompt:
                "Periodic inspection of a school is being planned. The installation is heavily used and contains kitchens, science labs and ICT. The most defensible interval choice is:",
              options: {
                A: "Treat it as domestic at 10 years",
                B: "Apply the commercial 5-year figure as a starting point and adjust for use, with shorter intervals for higher-risk areas",
                C: "Treat it as a swimming pool at 1 year throughout",
                D: "Use a 25-year interval to match the building life"
              },
              answer: "B",
              explanation:
                "Schools are commonly inspected at the commercial 5-year figure, with risk-based shortening for kitchens, labs, swimming pools and other special locations. GN3 intervals are starting points — duty-holder judgement adjusts them up or down."
            },
            {
              number: 19,
              prompt:
                "A leisure complex containing a swimming pool, sauna and changing rooms forms part of a hotel. For the swimming-pool zone, the recommended interval is:",
              options: { A: "1 year", B: "3 years", C: "5 years", D: "10 years" },
              answer: "A",
              explanation:
                "The pool zone keeps its 1-year interval even though it is part of a wider hotel. Special locations follow their own GN3 figures regardless of the parent building's headline interval."
            },
            {
              number: 20,
              prompt:
                "Documentary purpose of fixing the IET-recommended interval is to:",
              options: {
                A: "Set a guaranteed maintenance-free period for the installation",
                B: "Replace the duty holder's responsibility for in-service safety between inspections",
                C: "Provide a defensible, risk-based starting point that the duty holder can adjust based on conditions, use and previous reports",
                D: "Limit the inspector's liability to the day of inspection only"
              },
              answer: "C",
              explanation:
                "Intervals in GN3 are starting points — the duty holder still has the in-service responsibility throughout. Conditions, alterations, abuse, environment and previous reports all justify shortening (or, occasionally, extending) the headline figure."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt:
                "An owner-occupied flat is up for sale. The buyer asks whether the existing 8-year-old EICR is still valid. The most accurate response is:",
              options: {
                A: "Yes — owner-occupied is 10 years and the report runs to that date",
                B: "Yes — EICRs run for 25 years",
                C: "GN3 recommends a fresh EICR at change of occupancy regardless of how recent the previous report was",
                D: "No — once the property is for sale all reports are void"
              },
              answer: "C",
              explanation:
                "The 10-year owner-occupied figure is qualified by 'or at change of occupancy if sooner'. A new occupier needs an up-to-date condition assessment — the previous report cannot speak to alterations or wear since it was issued."
            },
            {
              number: 2,
              prompt:
                "A landlord re-lets a privately rented house in England. The previous EICR is dated 4 years and 11 months ago and was satisfactory. Under ESS PRS Regs 2020 the landlord must:",
              options: {
                A: "Carry the existing EICR forward to the next tenant for the remaining 1 month and then re-test",
                B: "Provide the existing EICR to the new tenant before they move in and arrange a fresh inspection before the 5-year date",
                C: "Carry out a fresh EICR every change of tenancy",
                D: "Wait until the existing report has expired"
              },
              answer: "B",
              explanation:
                "ESS PRS sets a 5-year max with the EICR supplied to a new tenant before move-in. A fresh inspection is not legally required at every tenancy change — but it is best practice if the report is close to expiry."
            },
            {
              number: 3,
              prompt:
                "A small office unit on a business park, last EICR 5 years ago and Satisfactory. Recommended interval for the next inspection is:",
              options: { A: "1 year", B: "3 years", C: "5 years", D: "10 years" },
              answer: "C",
              explanation:
                "Commercial premises (offices, shops, restaurants) are typically 5 years in GN3. The duty holder may shorten this if conditions, occupation, or use have changed since the last inspection."
            },
            {
              number: 4,
              prompt:
                "A working farm with milking parlour, grain store and farmhouse — recommended interval for the agricultural buildings:",
              options: { A: "1 year", B: "3 years", C: "5 years", D: "10 years" },
              answer: "B",
              explanation:
                "Agricultural and horticultural premises are typically 3 years. The mix of livestock, dust, ammonia, washdown water and rough handling drives a shorter interval than commercial."
            },
            {
              number: 5,
              prompt:
                "A theatre stage installation: recommended IET maximum interval:",
              options: { A: "1 year", B: "3 years", C: "5 years", D: "10 years" },
              answer: "A",
              explanation:
                "Places of public entertainment, theatres and similar are commonly given a 1-year maximum interval — public access plus heavy temporary lighting/sound use justify the shorter figure."
            },
            {
              number: 6,
              prompt:
                "A construction site has its temporary supply panel and 110 V transformer in continuous use. The recommended periodic inspection interval is:",
              options: { A: "3 months", B: "1 year", C: "3 years", D: "5 years" },
              answer: "A",
              explanation:
                "Construction-site installations are typically reviewed every 3 months in GN3 because of the constant mechanical abuse, weather exposure and frequent reconfiguration of the temporary system."
            },
            {
              number: 7,
              prompt:
                "Marina and inland-navigation berths: recommended IET maximum interval:",
              options: { A: "1 year", B: "3 years", C: "5 years", D: "10 years" },
              answer: "A",
              explanation:
                "Marina pedestals are 1 year. Salt or fresh water plus exposed-location plug and socket work plus constant connect/disconnect cycles add up to a high-risk LV environment."
            },
            {
              number: 8,
              prompt:
                "A privately rented HMO has been refurbished. The contractor wants to know whether they need an EIC, an EICR, or both:",
              options: {
                A: "EICR only — refurbishment is not new work",
                B: "EIC for the new circuits installed during refurbishment, plus the existing EICR cycle continues for the wider installation",
                C: "Both documents become EICR",
                D: "Neither is needed — the landlord just needs a receipt"
              },
              answer: "B",
              explanation:
                "New circuits are certified by an EIC at handover. The wider installation continues to be assessed periodically by EICR. Mixing the two is a common confusion: certificates cover new work; reports cover existing in-service work."
            },
            {
              number: 9,
              prompt:
                "Following an electric shock incident on the premises, the recommended action regarding the periodic inspection interval is:",
              options: {
                A: "Wait until the next scheduled date",
                B: "Trigger an unscheduled periodic inspection so the cause can be investigated and the wider installation reviewed",
                C: "Cancel all future EICRs",
                D: "Halve the inspection interval permanently"
              },
              answer: "B",
              explanation:
                "Significant incidents (shock, fire, flood, major damage) are recognised triggers in GN3 for an out-of-cycle periodic inspection. The previous interval cannot anticipate the post-incident state of the installation."
            },
            {
              number: 10,
              prompt:
                "GN3 Table 3.2 intervals are best understood as:",
              options: {
                A: "Statutory maxima that cannot be reduced",
                B: "Risk-based starting points to be adjusted by the duty holder for actual conditions, use and previous results",
                C: "Suggested minima that can be lengthened freely",
                D: "Targets that override the in-service safety duty between inspections"
              },
              answer: "B",
              explanation:
                "GN3 intervals are starting points — the duty holder still owns in-service safety throughout. Conditions, alterations, abuse and previous EICR findings all justify shortening (or in some cases extending) the headline figure."
            },
            {
              number: 11,
              prompt:
                "A converted barn now used as a small commercial bakery. Previous use was domestic. The change of use means:",
              options: {
                A: "The previous domestic 10-year interval continues unchanged",
                B: "A fresh inspection should be carried out and the future interval re-set against the new use (typically commercial 5 years)",
                C: "No EICR is required because the building has not changed",
                D: "The interval defaults to a 1-year cycle automatically"
              },
              answer: "B",
              explanation:
                "Change of use changes the load profile, the legislative regime and the risk profile. GN3 treats this as a trigger for a fresh inspection and a re-set interval based on the new use category."
            },
            {
              number: 12,
              prompt:
                "BS 7671 Reg 651.1 lists the objectives of periodic inspection and testing. Which of these is NOT one of them?",
              options: {
                A: "Verify the safety of persons and livestock against electric shock and burns",
                B: "Verify protection against damage to property by fire and heat",
                C: "Verify the original installer was properly qualified and certified",
                D: "Verify the installation is not damaged or defective so as to impair safety"
              },
              answer: "C",
              explanation:
                "Reg 651.1 covers shock/burn safety, fire protection, freedom from damage and freedom from defects. The competence of the original installer is a wider question for the duty holder, not a Reg 651.1 objective."
            },
            {
              number: 13,
              prompt:
                "A privately rented dwelling has a C2 observation on its EICR. The landlord must complete remedial work within:",
              options: {
                A: "28 days, or sooner if specified by the inspector",
                B: "3 months",
                C: "12 months",
                D: "Before the next 5-year cycle"
              },
              answer: "A",
              explanation:
                "ESS PRS 2020: any C1, C2 or FI requires written confirmation that remedial work was completed within 28 days, or shorter where the inspector specifies. The remedial confirmation must go to the tenant and to the local authority on request."
            },
            {
              number: 14,
              prompt:
                "A church hall with infrequent occasional use — typical IET-recommended interval:",
              options: {
                A: "1 year because it is public assembly",
                B: "Treated as a place of public assembly, often 1-3 years depending on use, with judgement for infrequent occupation",
                C: "10 years like an owner-occupied dwelling",
                D: "25 years — long life for low-use buildings"
              },
              answer: "B",
              explanation:
                "Public-assembly venues sit in the 1-3 year band. The duty holder uses judgement on actual occupancy and risk — infrequent use justifies the longer end of the band, but never extends to domestic-style intervals."
            },
            {
              number: 15,
              prompt:
                "A holiday-let chalet that is not strictly a 'rental dwelling' under the PRS Regs. The most defensible interval position is:",
              options: {
                A: "Apply the GN3 interval for caravan parks/holiday units (typically 1-3 years)",
                B: "Apply the owner-occupied 10-year figure",
                C: "Apply the construction site 3-month figure",
                D: "No EICR is needed because PRS Regs do not apply"
              },
              answer: "A",
              explanation:
                "Holiday lets are typically inspected on the holiday-park / rental-unit cycle (1-3 years depending on the layout). The PRS Regs are residential-tenancy specific, but EAWR and GN3 apply regardless."
            },
            {
              number: 16,
              prompt:
                "Periodic inspection in the workplace is principally driven by which legislation?",
              options: {
                A: "BS 7671 — it is statutory",
                B: "RIDDOR 2013",
                C: "The Electricity at Work Regulations 1989 (Reg 4(2)) and the Health and Safety at Work etc. Act 1974",
                D: "Building Regulations Part P"
              },
              answer: "C",
              explanation:
                "EAWR Reg 4(2) requires that systems be maintained so as to prevent danger; HSWA places the general duty on the employer. Periodic inspection is the recognised means of demonstrating that the duty has been discharged."
            },
            {
              number: 17,
              prompt:
                "A small dental practice on the high street (commercial use, public access). Reasonable starting interval for the next EICR:",
              options: { A: "1 year", B: "3 years", C: "5 years", D: "10 years" },
              answer: "C",
              explanation:
                "Commercial premises are typically 5 years. The duty holder might justify shortening (e.g. heavy use, sensitive equipment) but the GN3 starting point for general commercial is 5 years."
            },
            {
              number: 18,
              prompt:
                "A periodic inspection for an industrial unit reveals significant deterioration that suggests the previous interval was too long. The most defensible response for the future interval is:",
              options: {
                A: "Stick with the original interval",
                B: "Recommend a shorter interval for the next cycle and record the justification on the EICR",
                C: "Recommend a longer interval to balance the books",
                D: "Set the interval to 25 years to discourage retesting"
              },
              answer: "B",
              explanation:
                "Findings on the current EICR feed the next interval. If deterioration is greater than expected, the duty holder shortens the interval and the inspector records the recommendation in the report."
            },
            {
              number: 19,
              prompt:
                "An ESS PRS Regs 2020 EICR returns Unsatisfactory because of an FI observation. The landlord's duty to act is:",
              options: {
                A: "Complete remedial action and obtain written confirmation within 28 days, or sooner if specified",
                B: "Wait until the report expires",
                C: "Ignore the FI because it is not a coded defect",
                D: "Relet the property and let the new tenant decide"
              },
              answer: "A",
              explanation:
                "FI also makes the report Unsatisfactory and triggers the 28-day duty under ESS PRS. The landlord must arrange the further investigation, complete any required remedial work and provide written confirmation."
            },
            {
              number: 20,
              prompt:
                "The IET-recommended interval is fundamentally a starting point because:",
              options: {
                A: "The duty holder owns in-service safety and adjusts the interval based on actual conditions, occupation and previous reports",
                B: "The Regulations leave the choice to the inspector alone",
                C: "Intervals always default to 10 years",
                D: "There is no legal requirement to act on the recommendation"
              },
              answer: "A",
              explanation:
                "GN3 intervals provide a defensible starting point. The duty holder retains responsibility for in-service safety and is expected to shorten the interval where conditions, alterations, environment or previous findings justify it."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt:
                "A rental caravan unit (the caravan itself, not the pitch supply) — recommended IET periodic inspection interval:",
              options: { A: "1 year", B: "3 years", C: "5 years", D: "10 years" },
              answer: "A",
              explanation:
                "The rental caravan is 1 year — its installation is exposed to road vibration, frequent connection cycles and intensive short-let use. The pitch supply is separately treated and is typically on a longer interval."
            },
            {
              number: 2,
              prompt:
                "A garden centre with outdoor display lighting and a heated greenhouse. Best fit for the recommended interval:",
              options: {
                A: "Treated as agricultural / horticultural — typically 3 years",
                B: "Treated as commercial — typically 5 years",
                C: "Treated as construction site — 3 months",
                D: "Treated as owner-occupied — 10 years"
              },
              answer: "A",
              explanation:
                "Horticultural premises sit with agricultural in GN3 — the watering, humidity, dust and rough handling drive a shorter interval than general commercial."
            },
            {
              number: 3,
              prompt:
                "A privately rented HMO in England. Statutory maximum EICR interval under ESS PRS Regs 2020:",
              options: {
                A: "1 year",
                B: "3 years",
                C: "5 years, or at change of tenancy if sooner",
                D: "10 years"
              },
              answer: "C",
              explanation:
                "ESS PRS: 5 years max, with change of tenancy as a trigger if sooner. HMOs may also fall under separate licensing regimes that demand additional checks; the 5-year EICR ceiling still applies."
            },
            {
              number: 4,
              prompt:
                "A school building containing classrooms, kitchen, a science lab and a small swimming pool. The pool zone interval:",
              options: { A: "1 year", B: "3 years", C: "5 years", D: "10 years" },
              answer: "A",
              explanation:
                "Special locations follow their own GN3 intervals regardless of the parent building. The pool keeps the 1-year figure even though the rest of the school is on a 5-year commercial cycle."
            },
            {
              number: 5,
              prompt:
                "Following a flood, the most appropriate response regarding the EICR cycle is:",
              options: {
                A: "Continue on the original interval — the report has not expired",
                B: "Trigger an unscheduled periodic inspection because flood damage may have compromised the installation",
                C: "Cancel all future EICRs",
                D: "Apply the 3-month construction site interval"
              },
              answer: "B",
              explanation:
                "Flood, fire, electric shock and major damage are recognised GN3 triggers for an out-of-cycle inspection — the previous report cannot speak to the post-incident condition of the installation."
            },
            {
              number: 6,
              prompt:
                "An office occupies a unit on a business park. The previous EICR is 4 years old and Satisfactory. The duty holder is asked whether they can extend the interval to 7 years to save cost. The most defensible response is:",
              options: {
                A: "Yes, provided no alterations have been made",
                B: "No — the recommended commercial 5-year figure stands as the starting point and is not extended on grounds of cost alone",
                C: "Yes — commercial intervals can be doubled by agreement",
                D: "Yes — every premises can be extended to 10 years"
              },
              answer: "B",
              explanation:
                "Cost is not a recognised reason to extend a recommended interval. The duty holder's case for extending must be based on conditions, low use or compensating measures — and recorded — not on saving money."
            },
            {
              number: 7,
              prompt:
                "BS 7671 651.1 objectives include 'protection against damage to property by fire and heat'. In an EICR context this typically means checking:",
              options: {
                A: "Decorative finishes only",
                B: "Compatibility of protective devices with conductor sizes, signs of overheating, suitable enclosures, and proper segregation",
                C: "The aesthetic quality of accessories",
                D: "The age of the consumer unit"
              },
              answer: "B",
              explanation:
                "Fire/heat protection on an EICR translates to evidence of correct device coordination, no signs of overheating at terminations, suitable enclosures, mechanical protection and segregation. It is not about looks or age in isolation."
            },
            {
              number: 8,
              prompt:
                "A privately rented home in England has been let. The previous EICR is 6 years old. Under ESS PRS Regs 2020 the landlord:",
              options: {
                A: "Has breached the 5-year max and must commission a fresh EICR",
                B: "Is fine because the report covers 10 years",
                C: "Is exempt because the property has been let continuously",
                D: "Can defer until the next change of tenancy"
              },
              answer: "A",
              explanation:
                "ESS PRS 2020: 5-year max. Letting with an out-of-date EICR breaches the Regulations — the landlord risks enforcement and a financial penalty from the local authority."
            },
            {
              number: 9,
              prompt:
                "Periodic inspection of an installation owned by a self-employed sole trader operating from a home workshop:",
              options: {
                A: "Falls outside EAWR because it is a domestic property",
                B: "Falls within EAWR because work activity is being carried out — the workshop part should be treated like a workplace",
                C: "Is governed only by the PRS Regs",
                D: "Is voluntary because the trader owns the building"
              },
              answer: "B",
              explanation:
                "EAWR follows work activity, not building label. Where a domestic building is also a workplace (workshop, home office with employees, B&B), the workplace part is subject to EAWR maintenance duties as well as any domestic regime."
            },
            {
              number: 10,
              prompt:
                "Petrol filling station forecourt with HV CHP generation: recommended interval for the LV installation:",
              options: { A: "1 year", B: "3 years", C: "5 years", D: "10 years" },
              answer: "A",
              explanation:
                "Petrol stations are 1 year — hazardous-area classification, ignition consequences, and constant public traffic justify the shortest practical interval. The HV side is governed separately by the operator's HV maintenance regime."
            },
            {
              number: 11,
              prompt:
                "An EICR is being scoped for a hotel that was last inspected 4 years ago. There is a swimming pool, a kitchen, and standard guest rooms. The most defensible interval recommendation for the next cycle is:",
              options: {
                A: "Single 5-year interval covering everything",
                B: "5-year cycle for the hotel as a whole, with the swimming pool zone and kitchen on shorter intervals reflecting their special locations and use",
                C: "10-year cycle to match an owner-occupied dwelling",
                D: "3-month cycle as if it were a construction site"
              },
              answer: "B",
              explanation:
                "Mixed-use buildings get a primary commercial interval with shorter sub-intervals for special locations (pools, saunas, kitchens). GN3 intervals are starting points and are tailored area-by-area."
            },
            {
              number: 12,
              prompt:
                "Recommended GN3 inspection interval for a fish farm:",
              options: { A: "1 year", B: "3 years", C: "5 years", D: "10 years" },
              answer: "A",
              explanation:
                "Fish farms are 1 year — extensive water-handling, aerators, immersion-rated fittings and continuous environmental stress place them with the highest-risk LV environments alongside marinas, pools and petrol stations."
            },
            {
              number: 13,
              prompt:
                "An EICR is Unsatisfactory because of a single C2 observation. The duty holder under EAWR has to:",
              options: {
                A: "Take reasonable action to remove the danger as soon as practicable, in line with the inspector's recommendation",
                B: "Wait for the next inspection cycle",
                C: "Disregard the C2 because it is not a C1",
                D: "Replace the entire installation"
              },
              answer: "A",
              explanation:
                "C2 = potentially dangerous and must be acted on. EAWR's duty to maintain so as to prevent danger applies — the action must be reasonable, proportionate and timely, and the report Unsatisfactory until resolved."
            },
            {
              number: 14,
              prompt:
                "Building Regulations Part P applies to:",
              options: {
                A: "All workplaces",
                B: "Notifiable electrical work in dwellings in England",
                C: "Only listed buildings",
                D: "Construction sites only"
              },
              answer: "B",
              explanation:
                "Part P is a Building Regulations duty for notifiable electrical work in dwellings (England). It is not a periodic-inspection regime — its role is to control new and altered work in domestic premises."
            },
            {
              number: 15,
              prompt:
                "A shop in a commercial parade has reduced its trading days to weekends only. The EICR interval can:",
              options: {
                A: "Be extended automatically to 10 years",
                B: "Be reviewed by the duty holder against actual reduced use, but a strong case must be evidenced and recorded if extending past 5 years",
                C: "Be ignored because the unit is closed midweek",
                D: "Be doubled without question"
              },
              answer: "B",
              explanation:
                "Reduced occupancy is a recognised factor in interval setting. The duty holder may justify a slightly longer interval but must record the rationale; the GN3 5-year figure is the defensible starting point."
            },
            {
              number: 16,
              prompt:
                "Privately rented dwellings: enforcement under ESS PRS Regs 2020 sits with:",
              options: {
                A: "The Health and Safety Executive",
                B: "The local authority for the area where the property is located",
                C: "The Information Commissioner's Office",
                D: "The Care Quality Commission"
              },
              answer: "B",
              explanation:
                "ESS PRS 2020 is enforced by the local authority. They can demand the EICR within 7 days, request remedial confirmation, take remedial action themselves and recover costs, and impose a financial penalty up to £30,000."
            },
            {
              number: 17,
              prompt:
                "A 25-year-old public-house lounge bar with no recent EICR on file. The most defensible response is to:",
              options: {
                A: "Treat it as commercial and apply a 5-year starting interval, but with a fresh EICR now and risk-based shortening if condition warrants",
                B: "Wait for a complaint",
                C: "Apply the 10-year domestic figure",
                D: "Apply 25 years to match the building age"
              },
              answer: "A",
              explanation:
                "Public houses are commercial; 5 years is the GN3 starting point. With no recent EICR, the priority is to commission one now and let the findings drive the next interval."
            },
            {
              number: 18,
              prompt:
                "An EAWR-driven duty holder argues that they only need an EICR every 25 years because the building has been continuously occupied. This position is:",
              options: {
                A: "Correct — long occupancy justifies long intervals",
                B: "Incorrect — EAWR's duty to maintain is continuous and an EICR every 25 years is well outside any GN3 figure for any building type",
                C: "Correct, provided the original EIC is on file",
                D: "Correct as long as PAT testing is up to date"
              },
              answer: "B",
              explanation:
                "Continuous occupation does not extend GN3 intervals to 25 years. EAWR demands maintenance to prevent danger, supported by periodic inspection at recognised intervals. PAT testing covers portable appliances, not the fixed installation."
            },
            {
              number: 19,
              prompt:
                "A fire was caused by a deteriorated joint in the consumer unit. The premises are commercial. The most appropriate next step regarding periodic inspection is:",
              options: {
                A: "Wait until the planned 5-year date",
                B: "Trigger an unscheduled EICR to assess wider damage and verify the rest of the installation",
                C: "Cancel the EICR cycle because the consumer unit will be replaced",
                D: "Refer the matter to the DNO"
              },
              answer: "B",
              explanation:
                "Fire is a recognised trigger for an unscheduled periodic inspection. Even after the failed component is replaced, the wider installation needs verifying — the heat may have compromised neighbouring conductors and accessories."
            },
            {
              number: 20,
              prompt:
                "The legal driver behind periodic inspection in privately rented dwellings in England (since 2020) is most precisely:",
              options: {
                A: "EAWR 1989 only",
                B: "The Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020, complemented by the duty in HSWA where the landlord is a business",
                C: "Building Regulations Part P",
                D: "RIDDOR 2013"
              },
              answer: "B",
              explanation:
                "ESS PRS 2020 made periodic inspection a statutory duty on landlords in England (5-yearly max, 28-day remedial duty, copy to tenant within 28 days). HSWA still applies to landlords operating as a business; EAWR primarily applies to workplaces."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt:
                "A community centre hosting children's parties, fitness classes and an over-60s club. Most defensible starting interval:",
              options: {
                A: "1 year because of public assembly",
                B: "3 years (treated as a place of public assembly, with judgement adjustment)",
                C: "10 years (domestic)",
                D: "25 years (long building life)"
              },
              answer: "B",
              explanation:
                "Places of public assembly typically sit at 1-3 years in GN3. The duty holder uses judgement on actual occupation; light-use community halls are usually defensible at the longer end of the band, never at domestic figures."
            },
            {
              number: 2,
              prompt:
                "A rental caravan-park pitch socket installation: recommended IET maximum interval:",
              options: { A: "1 year", B: "3 years", C: "5 years", D: "10 years" },
              answer: "B",
              explanation:
                "Pitch sockets are typically 3 years. The rental caravan unit itself is 1 year. The two are commonly conflated — keep them separate when scoping the EICR."
            },
            {
              number: 3,
              prompt:
                "A landlord has just received an EICR with a single C3 observation. Under ESS PRS Regs 2020 the report is:",
              options: {
                A: "Unsatisfactory and remedial work is statutory",
                B: "Satisfactory — C3 alone does not make a report Unsatisfactory or trigger the 28-day remedial duty",
                C: "Unsatisfactory because all coded observations are statutory",
                D: "Indeterminate — needs another inspection"
              },
              answer: "B",
              explanation:
                "C3 (improvement recommended) does not in itself make the report Unsatisfactory. The 28-day remedial duty under ESS PRS is triggered by C1, C2 or FI — not C3."
            },
            {
              number: 4,
              prompt:
                "A 10-year-old privately rented house has its periodic EICR carried out. The previous landlord did not commission an EICR. Action required by ESS PRS 2020 is:",
              options: {
                A: "Wait until the property is empty",
                B: "Commission the EICR immediately and supply the report to the tenant within 28 days; act on any C1/C2/FI within the further 28-day window",
                C: "Notify the DNO",
                D: "Wait until the home is sold"
              },
              answer: "B",
              explanation:
                "ESS PRS Regs are statutory in England — every privately rented dwelling must have a current EICR. New landlords inheriting a property without one must commission an inspection without delay and meet the supply and remedial timescales."
            },
            {
              number: 5,
              prompt:
                "A small car repair workshop. The duty holder asks whether the agricultural 3-year interval applies because the building was once a barn. The defensible answer is:",
              options: {
                A: "Yes — once agricultural always agricultural",
                B: "No — current use governs the interval; an industrial unit is typically 3 years and a small commercial garage is around 3-5 years depending on use",
                C: "Yes — buildings keep their original interval",
                D: "Yes — the 3-year figure is universal"
              },
              answer: "B",
              explanation:
                "Current use sets the interval. Industrial premises are 3 years and small commercial garages typically run 3-5 years depending on the work. The previous use of the building does not transfer."
            },
            {
              number: 6,
              prompt:
                "An EICR was commissioned for an industrial unit on a 3-year cycle. The previous report had two C2 observations. For the next interval the duty holder should:",
              options: {
                A: "Extend the interval to 5 years for compensation",
                B: "Maintain or shorten the 3-year cycle until repeat findings are stable; record the justification on the new EICR",
                C: "Skip the next inspection entirely",
                D: "Keep the same interval but only inspect half the circuits"
              },
              answer: "B",
              explanation:
                "Previous findings drive the next interval. Recurring C2s suggest under-investment or harsh service; the duty holder maintains or shortens the cycle and records the rationale for the next EICR."
            },
            {
              number: 7,
              prompt:
                "Recommended IET maximum interval for a public swimming pool plant room (the room with pumps, dosing and switchgear):",
              options: { A: "1 year", B: "3 years", C: "5 years", D: "10 years" },
              answer: "A",
              explanation:
                "Swimming pool installations are 1 year, including the plant area. Chemical atmospheres (chlorine, bromine), humidity and continuous public footfall add up to one of the highest-risk LV environments."
            },
            {
              number: 8,
              prompt:
                "Periodic inspection in the workplace is principally driven by:",
              options: {
                A: "Building Regulations Part P alone",
                B: "EAWR 1989 (Reg 4(2)) and HSWA 1974, with BS 7671 / GN3 as the recognised technical means of compliance",
                C: "RIDDOR 2013",
                D: "The Construction (Design and Management) Regulations only"
              },
              answer: "B",
              explanation:
                "EAWR + HSWA provide the legal driver; BS 7671 and GN3 provide the recognised technical means. Part P is dwellings only, RIDDOR is incident reporting, CDM is construction. None of those replace EAWR for periodic verification in a workplace."
            },
            {
              number: 9,
              prompt:
                "A school is planning its EICR. The starting GN3 interval to apply is typically:",
              options: { A: "1 year", B: "3 years", C: "5 years", D: "10 years" },
              answer: "C",
              explanation:
                "Schools are usually treated as commercial (5 years) for the main building, with shorter sub-intervals for special locations (kitchens, swimming pools, science labs) where the use justifies them."
            },
            {
              number: 10,
              prompt:
                "A duty holder argues that the EICR is the inspector's responsibility, not theirs. The defensible position is:",
              options: {
                A: "Correct — once commissioned the inspector owns the duty",
                B: "Incorrect — the duty holder retains the legal duty under EAWR / ESS PRS; the EICR is evidence of due diligence, not a transfer of responsibility",
                C: "Correct because the inspector signs the report",
                D: "Correct because the inspector is qualified"
              },
              answer: "B",
              explanation:
                "EAWR and ESS PRS place the duty on the duty holder (employer / landlord). The EICR is evidence the duty has been discharged. Commissioning the inspection does not move the legal responsibility off the duty holder."
            },
            {
              number: 11,
              prompt:
                "An owner-occupier has had an EICR voluntarily, returning Satisfactory with one C3. The recommended next inspection date is:",
              options: {
                A: "1 year",
                B: "3 years",
                C: "5-10 years (typically 10 years for owner-occupied, with the inspector's specific recommendation on the report)",
                D: "25 years"
              },
              answer: "C",
              explanation:
                "Owner-occupied is up to 10 years in GN3, but the inspector states the recommended date on the report. C3 alone does not shorten the interval, but the inspector may still recommend earlier where condition warrants."
            },
            {
              number: 12,
              prompt:
                "An EICR records the words 'extent and limitations agreed in writing with the duty holder before the inspection commenced'. The point of doing this is:",
              options: {
                A: "To save time on site",
                B: "To make clear which parts of the installation are inside the scope of the report and which are not — protecting both parties' liability",
                C: "To allow the inspector to skip live testing",
                D: "To bypass the test schedule"
              },
              answer: "B",
              explanation:
                "Agreeing extent and limitations defines the scope of the report. Anything outside the agreed scope is excluded from the conclusions and the duty holder accepts that. It is the foundation of defensible PIT documentation."
            },
            {
              number: 13,
              prompt:
                "A hotel with a swimming pool fails its 5-year EICR (Unsatisfactory). The hotel manager asks whether they can keep operating until remedial work is completed. The most defensible response is:",
              options: {
                A: "Continue trading without restriction",
                B: "Address C1 immediately (and write to the duty holder); plan C2 within a reasonable timescale and complete FI without delay; keep the affected high-risk areas off until danger has been removed",
                C: "Close the entire hotel until the next EICR",
                D: "Continue trading and re-test in 12 months"
              },
              answer: "B",
              explanation:
                "Unsatisfactory does not require closing the building, but it requires acting on the codes proportionately. C1 demands immediate action. C2 must be planned and completed promptly. Specific dangerous circuits (e.g. the pool) may need isolating until the work is done."
            },
            {
              number: 14,
              prompt:
                "Recommended periodic inspection interval for a leisure centre with pool, gym, sauna and changing rooms:",
              options: {
                A: "Single 1-year cycle for the whole building",
                B: "1 year for the pool/sauna/special locations and 3-5 years for the main building (mixed-use approach)",
                C: "Single 10-year cycle",
                D: "3-month cycle"
              },
              answer: "B",
              explanation:
                "Mixed-use leisure centres are typically scoped on a tiered basis — special locations on 1-year, main building on 3-5 years. The single global figure rarely fits a mixed building."
            },
            {
              number: 15,
              prompt:
                "GN3 lists triggers for an out-of-cycle (unscheduled) periodic inspection. Which of these is NOT a recognised trigger?",
              options: {
                A: "Fire on the premises",
                B: "Flood",
                C: "Decision by the duty holder to repaint the walls",
                D: "Significant damage or an electric shock incident"
              },
              answer: "C",
              explanation:
                "Triggers are condition or risk-driven (fire, flood, shock, major damage, change of use). Decorative changes do not normally trigger an unscheduled periodic inspection."
            },
            {
              number: 16,
              prompt:
                "A duty holder asks whether they can use the previous EICR to carry forward the same Unsatisfactory observations to the new report. The defensible position is:",
              options: {
                A: "Yes — paste the previous defects forward",
                B: "No — the new EICR is a fresh assessment based on current observations and tests; previous reports are background only",
                C: "Yes, only the C3s carry forward",
                D: "Yes, only the FI items carry forward"
              },
              answer: "B",
              explanation:
                "Each EICR is a snapshot in time based on the current inspection. Previous reports inform context (history, recurring issues) but they do not pre-populate the new findings."
            },
            {
              number: 17,
              prompt:
                "A housing association lets a privately rented dwelling. The dwelling has a small commercial office on the ground floor (mixed use). The defensible interval position is:",
              options: {
                A: "Treat the whole property as 5 years (PRS Regs minimum)",
                B: "Treat the whole property as 10 years (domestic)",
                C: "Apply 5 years to the residential element under ESS PRS, and assess the commercial element under EAWR/GN3 commercial 5-year, with overall scoping of the EICR",
                D: "Apply a 1-year cycle throughout"
              },
              answer: "C",
              explanation:
                "Mixed-use properties get parallel treatment — ESS PRS for the residential part, EAWR/GN3 for the commercial part. Both happen to land on 5 years here, but the legal driver and the documentation are tracked separately."
            },
            {
              number: 18,
              prompt:
                "A privately rented dwelling EICR returns Unsatisfactory with one C1 and three C2s. ESS PRS Regs require remedial completion within:",
              options: {
                A: "28 days, or sooner where the inspector specifies",
                B: "3 months",
                C: "12 months",
                D: "Before the next 5-year cycle"
              },
              answer: "A",
              explanation:
                "ESS PRS 2020: 28-day remedial duty, or sooner where specified. The inspector commonly specifies 'immediate' for a C1 and the landlord must obtain written confirmation of completion."
            },
            {
              number: 19,
              prompt:
                "BS 7671 Reg 651.1 defines what periodic inspection is for. Critically, it says the inspection is to verify safety so far as:",
              options: {
                A: "Cost permits",
                B: "The original installer can attend",
                C: "Reasonably practicable",
                D: "The DNO permits"
              },
              answer: "C",
              explanation:
                "'So far as reasonably practicable' is the qualifier — it links Reg 651.1 to HSWA/EAWR thinking. The inspection cannot guarantee zero defects but must take reasonable steps to verify the four safety objectives."
            },
            {
              number: 20,
              prompt:
                "A duty holder claims that periodic inspection only matters where there has been a problem. The defensible position is:",
              options: {
                A: "Correct — no problem means no inspection",
                B: "Incorrect — periodic inspection is a proactive condition assessment carried out at recognised intervals so problems are detected before they cause harm",
                C: "Correct — only the DNO requires periodic inspection",
                D: "Correct — only insurers require periodic inspection"
              },
              answer: "B",
              explanation:
                "PIT is proactive. Without it, deterioration only surfaces when something fails — typically a fire, a shock or an enforcement action. The recognised intervals exist precisely because deterioration is gradual and otherwise invisible."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt:
                "A privately rented dwelling EICR is being commissioned. The landlord tells the inspector to skip the kitchen because the tenant is cooking. The defensible response is:",
              options: {
                A: "Skip it without comment",
                B: "Record the kitchen as a limitation, explain that anything not inspected is outside the report, and ask the landlord to arrange access for a follow-up if needed",
                C: "Refuse the job",
                D: "Test only the lighting circuit"
              },
              answer: "B",
              explanation:
                "Operational restrictions become limitations in EICR Section D. The duty holder accepts that the un-inspected area is outside the conclusions. The inspector communicates the implication and may recommend a follow-up."
            },
            {
              number: 2,
              prompt:
                "GN3 recommended interval for general industrial premises:",
              options: { A: "1 year", B: "3 years", C: "5 years", D: "10 years" },
              answer: "B",
              explanation:
                "Industrial premises are typically 3 years. Heavier service conditions, higher mechanical and thermal stress, and larger installations all justify a shorter interval than general commercial."
            },
            {
              number: 3,
              prompt:
                "An EICR is being scoped for a small bakery (commercial). Its cellar contains a 3-phase distribution board feeding ovens that cannot be switched off without spoiling stock. The most defensible response is:",
              options: {
                A: "Refuse the inspection",
                B: "Agree extended dead-test out of hours; if not feasible, agree limitations or use appropriate live tests with the duty holder's written agreement and document accordingly",
                C: "Test the ovens with their doors open",
                D: "Test only the lighting circuit"
              },
              answer: "B",
              explanation:
                "Continuous-process loads need a planned approach — out-of-hours dead testing, partial sampling, agreed live tests where dead testing isn't reasonably practicable. The route chosen is recorded in extent and limitations."
            },
            {
              number: 4,
              prompt:
                "A new owner of an owner-occupied dwelling commissions an EICR voluntarily. They ask the inspector to write 'change of occupancy inspection'. This is:",
              options: {
                A: "Inappropriate — it implies a regime that doesn't exist for owner-occupiers",
                B: "Defensible — change of occupancy is a recognised GN3 trigger and recording it on the EICR is good practice",
                C: "Required by law",
                D: "Allowed only on rented dwellings"
              },
              answer: "B",
              explanation:
                "GN3 names change of occupancy as a recommended trigger for an EICR even on owner-occupied homes. The trigger is voluntary in legal terms, but documenting the rationale strengthens the report."
            },
            {
              number: 5,
              prompt:
                "Recommended IET maximum interval for a place of public entertainment such as a music venue:",
              options: { A: "1 year", B: "3 years", C: "5 years", D: "10 years" },
              answer: "A",
              explanation:
                "Places of public entertainment, theatres and similar are commonly 1 year. Public access, heavy temporary lighting and sound, and event-driven mechanical abuse drive the short interval."
            },
            {
              number: 6,
              prompt:
                "A privately rented HMO has an EICR commissioned. The local authority requests a copy. The landlord must supply it within:",
              options: { A: "7 days", B: "14 days", C: "28 days", D: "3 months" },
              answer: "A",
              explanation:
                "ESS PRS 2020: local authority can request the EICR and the landlord must supply it within 7 days. Existing tenants get 28 days; new tenants get the report before they move in."
            },
            {
              number: 7,
              prompt:
                "Construction site temporary supply: GN3 recommended interval is:",
              options: { A: "3 months", B: "1 year", C: "3 years", D: "5 years" },
              answer: "A",
              explanation:
                "Construction site supplies are typically 3 months. Temporary cabling, exposed sockets, frequent reconfiguration and weather all add up to a high failure rate without short cycles."
            },
            {
              number: 8,
              prompt:
                "A commercial customer asks whether an EICR is mandatory for them. The defensible response is:",
              options: {
                A: "Yes — BS 7671 mandates an EICR",
                B: "An EICR is not mandated by name, but EAWR Reg 4(2) and HSWA require maintenance to prevent danger, and an EICR at GN3 intervals is the recognised means of demonstrating compliance",
                C: "No — only domestic premises need EICRs",
                D: "Only if the local authority asks"
              },
              answer: "B",
              explanation:
                "BS 7671 doesn't make the EICR statutory by itself. EAWR places the duty; the EICR is the recognised technical means. Workplaces that ignore periodic inspection are exposed under EAWR and HSWA."
            },
            {
              number: 9,
              prompt:
                "A previously satisfactory EICR has expired by 6 months on a privately rented home in England. ESS PRS Regs are:",
              options: {
                A: "Tolerant of short overruns",
                B: "Strict — the 5-year max is a statutory ceiling and a fresh EICR should be commissioned without further delay",
                C: "Suspended for owner-occupied dwellings",
                D: "Voluntary"
              },
              answer: "B",
              explanation:
                "ESS PRS 2020: 5-year max is statutory. The duty holder is in breach as soon as the date is exceeded; a fresh EICR must be commissioned, and enforcement is at local-authority discretion."
            },
            {
              number: 10,
              prompt:
                "An office tenant complains they cannot have their power interrupted at all. The defensible PIT approach is:",
              options: {
                A: "Cancel the inspection",
                B: "Plan dead testing out of hours, sample where appropriate, agree limitations for what cannot be reached, and document — live testing only where dead testing isn't reasonably practicable",
                C: "Switch everything off without warning",
                D: "Replace the entire installation"
              },
              answer: "B",
              explanation:
                "Out-of-hours work, agreed sampling, and clear limitations are the standard tools for power-sensitive offices. Live testing remains an exception, justified case-by-case and recorded."
            },
            {
              number: 11,
              prompt:
                "Cinema (auditorium and lobby): recommended IET interval:",
              options: { A: "1 year", B: "3 years", C: "5 years", D: "10 years" },
              answer: "B",
              explanation:
                "Cinemas typically 3 years. Some places of public assembly (theatres, music venues) are pushed to 1 year due to public access and event-driven service conditions, but cinemas are usually on 3 years."
            },
            {
              number: 12,
              prompt:
                "An owner-occupied dwelling alters use partially to a B&B with three letting rooms. The property is now:",
              options: {
                A: "Still purely domestic",
                B: "A workplace under EAWR for the B&B portion, in addition to its domestic regime — and the EICR cycle should reflect that",
                C: "Excluded from any electrical regime",
                D: "Required only to comply with Part P"
              },
              answer: "B",
              explanation:
                "EAWR follows work activity. A home that takes paying guests is partly a workplace and the EICR scoping should reflect both regimes. Domestic and commercial intervals may both apply to different parts."
            },
            {
              number: 13,
              prompt:
                "A school's EICR has just expired. The headteacher asks whether term-time use justifies a short delay. The defensible response is:",
              options: {
                A: "Yes — schools can defer indefinitely",
                B: "No — the duty under EAWR continues; commission the inspection without further delay and plan around school holidays where practicable",
                C: "Yes — but only to the next school holiday",
                D: "Yes — by writing to the DfE"
              },
              answer: "B",
              explanation:
                "EAWR is continuous. Term-time pressure justifies planning, not deferring. Schools commonly schedule EICRs in school holidays — the duty itself does not pause."
            },
            {
              number: 14,
              prompt:
                "A customer asks whether the EICR pass mark is the same as initial verification. The defensible response is:",
              options: {
                A: "Yes — pass/fail are identical",
                B: "No — initial verification produces an EIC issued for new work; an EICR is a Satisfactory/Unsatisfactory condition report on existing work, with C-codes / FI / Schedule of Test Results",
                C: "Yes — both use C1/C2/C3/FI",
                D: "Yes — both are valid for 10 years"
              },
              answer: "B",
              explanation:
                "Initial verification certifies new/altered work via the EIC; periodic verification reports condition via the EICR with C-codes and FI. The two regimes have different documents, different drivers, and different acceptance criteria."
            },
            {
              number: 15,
              prompt:
                "An EAWR duty holder argues that periodic inspection at GN3 intervals is 'just guidance' and so optional. The defensible position is:",
              options: {
                A: "Correct — GN3 is non-statutory",
                B: "GN3 is non-statutory in itself, but it is the recognised means of demonstrating compliance with EAWR Reg 4(2) — ignoring it leaves the duty holder exposed without a defensible alternative",
                C: "Correct — periodic inspection only matters in dwellings",
                D: "Correct — workplaces are exempt"
              },
              answer: "B",
              explanation:
                "GN3 is non-statutory but it is the recognised technical reference. Duty holders departing from it must have an equally defensible alternative — there is none in routine practice."
            },
            {
              number: 16,
              prompt:
                "A privately rented dwelling has a Satisfactory EICR with no codes. The next mandatory action is:",
              options: {
                A: "Re-test within 28 days",
                B: "Supply a copy to the existing tenant within 28 days; supply to a new tenant before move-in; supply to the local authority within 7 days on request",
                C: "Notify the DNO",
                D: "File the report and do nothing"
              },
              answer: "B",
              explanation:
                "ESS PRS supply duties apply even when the report is Satisfactory. Skipping the supply duty is itself a breach, regardless of the inspection result."
            },
            {
              number: 17,
              prompt:
                "A new tenant moves into a privately rented dwelling. Under ESS PRS Regs the landlord must:",
              options: {
                A: "Supply the EICR before the tenant moves in",
                B: "Supply it any time during the first month",
                C: "Supply it only if asked",
                D: "Supply only the cover page"
              },
              answer: "A",
              explanation:
                "ESS PRS 2020: new tenants get the EICR before move-in. Existing tenants get it within 28 days. Local authority gets it within 7 days on request. The full report goes — not just a summary."
            },
            {
              number: 18,
              prompt:
                "A duty holder argues that change of occupancy on an owner-occupied home is statutory. The defensible position is:",
              options: {
                A: "Correct — statutory under ESS PRS",
                B: "Incorrect — change of occupancy is a GN3-recommended trigger for owner-occupied; it is statutory under ESS PRS only for privately rented dwellings (England)",
                C: "Correct — statutory under EAWR",
                D: "Correct — statutory under HSWA"
              },
              answer: "B",
              explanation:
                "Owner-occupied is voluntary; the trigger is recommended in GN3. Privately rented (England) is statutory under ESS PRS 2020 — that is where the legal weight sits."
            },
            {
              number: 19,
              prompt:
                "A customer asks whether the inspector's professional indemnity covers any later claim. The defensible position is:",
              options: {
                A: "Yes — PI covers everything",
                B: "PI provides cover within agreed scope; clear extent and limitations on the EICR define what is and isn't included — anything outside the agreed scope is not warranted by the inspector",
                C: "No — PI never applies",
                D: "Only if the property is owner-occupied"
              },
              answer: "B",
              explanation:
                "Liability follows the agreed scope. A clear extent-and-limitations entry on the EICR is the inspector's primary protection against claims for parts of the installation that were not within the inspection."
            },
            {
              number: 20,
              prompt:
                "An EAWR-driven duty holder wants to know how short an interval can be set. The defensible response is:",
              options: {
                A: "Intervals must always match the GN3 figure",
                B: "GN3 figures are recommended maxima — shorter intervals are perfectly defensible (and sometimes obligatory) where conditions, use or previous findings warrant",
                C: "Intervals cannot be shorter than 1 year",
                D: "Intervals cannot be shorter than the previous EICR's interval"
              },
              answer: "B",
              explanation:
                "GN3 intervals are starting maxima. Shorter cycles are entirely defensible — and required where the condition or use of the installation makes the standard figure too long."
            }
          ]
        },
      ]
    },
    {
      id: "section-2",
      title: "Section 2 — Sampling & Limitations",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt:
                "Sampling during a periodic inspection (testing only a proportion of similar circuits) is:",
              options: {
                A: "Not permitted — every circuit must be fully tested",
                B: "Permitted, but the extent and any agreed sample size must be recorded on the EICR and agreed in writing with the client beforehand",
                C: "Permitted only on commercial installations",
                D: "Permitted only on TT systems"
              },
              answer: "B",
              explanation:
                "Sampling is the practical reality on large installations — but it is conditional. The extent (what is included) and limitations (what is excluded, and why) are recorded on the EICR; the duty holder accepts that anything outside the sample has not been verified."
            },
            {
              number: 2,
              prompt:
                "If sampling reveals a defect on one of the sampled circuits, the inspector should:",
              options: {
                A: "Record the defect and stop",
                B: "Increase the sample size and, where similar defects appear, extend testing towards 100% of similar circuits",
                C: "Issue a Satisfactory result anyway",
                D: "Refer the matter to the DNO"
              },
              answer: "B",
              explanation:
                "A defect in the sample raises the probability that similar defects exist in the unsampled population. The sample size must increase; if the failure rate is significant, testing becomes 100%. This is the core of GN3's risk-based sampling logic."
            },
            {
              number: 3,
              prompt:
                "The 'limitations' box on an EICR records:",
              options: {
                A: "The inspector's opinion of the installer's competence",
                B: "Areas, items or operational restrictions that meant parts of the installation could not be inspected and tested",
                C: "Future improvement suggestions only",
                D: "Only the date of the inspection"
              },
              answer: "B",
              explanation:
                "The limitations box is a risk-management entry. It tells the duty holder which parts of the installation are outside the scope of the report and therefore not covered by the conclusions. Limitations are agreed in writing before work starts and recorded explicitly so liability is clear."
            },
            {
              number: 4,
              prompt:
                "Live testing during a periodic inspection is justified only when:",
              options: {
                A: "The duty holder asks for it",
                B: "The inspector wants to save time",
                C: "Dead testing is impracticable (continuous-process plant, life-safety circuits, business-critical IT) and the duty holder accepts the residual risk",
                D: "The installation is over 10 years old"
              },
              answer: "C",
              explanation:
                "GN3's principle is dead-test by default; live test only where dead testing isn't reasonably practicable. Live testing introduces shock and arc-flash risk, so the case for it must be specific and documented — not a workflow convenience."
            },
            {
              number: 5,
              prompt:
                "Inspection sampling may NOT be appropriate on:",
              options: {
                A: "Ring final circuit accessories that give satisfactory inspection results",
                B: "Lighting circuit accessories that give satisfactory inspection results",
                C: "Repeating dado trunking accessories",
                D: "Main switchgear and the origin earthing/bonding arrangements"
              },
              answer: "D",
              explanation:
                "Main switchgear, the origin and the main earthing/bonding arrangements are central to every protective measure. They are inspected directly (100%), not sampled. Sampling is for repeating distributed accessories where extrapolation from a representative subset is reasonable."
            },
            {
              number: 6,
              prompt:
                "An inspector samples 10% of socket outlets on a large office installation. The sampled accessories are all satisfactory. The defensible recommendation is:",
              options: {
                A: "Issue Satisfactory and record the agreed sample on the EICR",
                B: "Increase the sample size to 100% regardless",
                C: "Sample more lighting points",
                D: "Refer to the DNO"
              },
              answer: "A",
              explanation:
                "When the agreed sample is satisfactory, the inspection is complete on that sampling group. The agreed sample size and the result are recorded on the EICR Section D / sampling notes; un-sampled circuits remain outside the conclusions."
            },
            {
              number: 7,
              prompt:
                "Failure to agree the extent and limitations in writing could result in:",
              options: {
                A: "The client being liable for faults on excluded circuits",
                B: "The inspector being held responsible for faults on excluded circuits because the report appears to cover everything",
                C: "Inspection of cables concealed within walls",
                D: "Test results being invalidated"
              },
              answer: "B",
              explanation:
                "If the extent and limitations aren't documented and signed off, the report appears to cover everything — and the inspector picks up liability for anything that turns out to be defective. Agreeing in writing what's in and out of scope before starting protects you."
            },
            {
              number: 8,
              prompt:
                "An EICR records 'sampling: 20% of similar lighting circuits' but no signature from the duty holder. This is:",
              options: {
                A: "Valid — the inspector's signature is enough",
                B: "Weak — extent and limitations should be agreed and recorded in writing with the duty holder; an unsigned sampling note exposes the inspector",
                C: "Valid — sampling is implied",
                D: "Valid — sampling is automatic up to 50%"
              },
              answer: "B",
              explanation:
                "Sampling without written agreement leaves the duty holder unaware of what was excluded. Best practice (and BPG4) is a signed agreement before work starts, with revisions added to Section D as conditions change."
            },
            {
              number: 9,
              prompt:
                "The inspector cannot isolate a circuit because it is in continuous use. The most defensible response is to:",
              options: {
                A: "Test it live without any agreement",
                B: "Treat it as a limitation, record the reason in EICR Section D and consider FI if there is a specific concern that cannot be diagnosed without isolation",
                C: "Skip it without comment",
                D: "Run live tests and stop"
              },
              answer: "B",
              explanation:
                "An un-isolatable circuit is a limitation, not an automatic failure. Section D records the reason; if there is a specific concern, FI can be used to flag the unresolved issue and demand follow-up."
            },
            {
              number: 10,
              prompt:
                "A reasonable typical sampling baseline for repeating socket outlets in an office is:",
              options: {
                A: "Around 10-20% of similar circuits, increased on findings",
                B: "Always 100%",
                C: "Always 1 socket per circuit",
                D: "1% of circuits"
              },
              answer: "A",
              explanation:
                "GN3 doesn't fix a percentage — typical practice is around 10-20% of repeating distributed accessories, increased on findings. Origin and switchgear are 100%, regardless of the headline sampling rate."
            },
            {
              number: 11,
              prompt:
                "A sensitive ICT cabinet shares a circuit with general office sockets. Dead testing the circuit will crash the servers. The defensible approach is:",
              options: {
                A: "Test live without agreement",
                B: "Plan dead testing for an out-of-hours window; if not feasible, agree the operational limitation and a defined live-test scope with the duty holder",
                C: "Skip the circuit silently",
                D: "Test only the lighting circuit"
              },
              answer: "B",
              explanation:
                "Out-of-hours dead testing is the first option. Where it isn't possible, an agreed limitation plus defined live testing (with PPE and proper instrumentation) is documented in Section D."
            },
            {
              number: 12,
              prompt:
                "An EICR cannot exclude items where:",
              options: {
                A: "The inspector has already observed a danger",
                B: "Access is genuinely restricted",
                C: "The duty holder asked for them to be left out for cost",
                D: "The cable run goes underground"
              },
              answer: "A",
              explanation:
                "Limitations are legitimate when access, isolation or operational restrictions prevent inspection. They are NOT a way to hide an observed danger; once the inspector has seen a defect it must be coded and reported."
            },
            {
              number: 13,
              prompt:
                "A second sampled lighting circuit fails IR (low value). The defensible action is:",
              options: {
                A: "Record one C2 and move on",
                B: "Investigate, expand the sample to similar lighting circuits, and report the pattern with the consequent code/FI as appropriate",
                C: "Report it as Satisfactory",
                D: "Skip the next circuit"
              },
              answer: "B",
              explanation:
                "Repeated failures justify expanding the sample. The inspector reports the pattern (multiple low IR readings) and codes accordingly — typically FI if the cause cannot be diagnosed during the visit, or C2 if the danger pattern is established."
            },
            {
              number: 14,
              prompt:
                "Extent and limitations should be agreed:",
              options: {
                A: "After the inspection",
                B: "Before the inspection only",
                C: "Before AND during the inspection — revisions added to EICR Section D as conditions on site dictate",
                D: "Only when writing the report"
              },
              answer: "C",
              explanation:
                "Best practice (BPG4) — agree before, but be ready to revisit during, because real-world site conditions often force a change (a circuit can't be isolated, an area is locked). Revised limitations get added to Section D."
            },
            {
              number: 15,
              prompt:
                "An office tenant blocks access to one room. The defensible response is to:",
              options: {
                A: "Force entry",
                B: "Skip without comment",
                C: "Record the room as a limitation in Section D, with reason 'access denied by occupant', and recommend a follow-up",
                D: "Issue Unsatisfactory just for that"
              },
              answer: "C",
              explanation:
                "Access restriction is a textbook limitation. Record the reason and recommend a follow-up. It does not in itself make the report Unsatisfactory unless there is a specific observed defect or FI in the un-inspected area."
            },
            {
              number: 16,
              prompt:
                "Sampling is fundamentally a:",
              options: {
                A: "Cost-saving exercise",
                B: "Risk-based judgement: sample size scales with consequences and findings",
                C: "Random check",
                D: "Mandated 50% rule"
              },
              answer: "B",
              explanation:
                "Sampling is risk-based, not cost-driven. The sample size is set with the duty holder before work starts, and is expanded on findings. Cost can never override the inspector's judgement that further testing is needed."
            },
            {
              number: 17,
              prompt:
                "A duty holder asks the inspector to sign off as Satisfactory because the planned remedial work is scheduled. The defensible response is:",
              options: {
                A: "Sign Satisfactory because remedial work is in hand",
                B: "Refuse — the EICR records condition at the time of inspection; planned remedial work does not change the codes raised",
                C: "Sign Unsatisfactory but add a verbal note",
                D: "Sign Satisfactory with the codes left blank"
              },
              answer: "B",
              explanation:
                "Snapshot principle. Any C1, C2 or FI makes the report Unsatisfactory at the time of inspection. Subsequent remedial work needs separate written confirmation or a follow-up report — it does not retroactively change the original finding."
            },
            {
              number: 18,
              prompt:
                "A live earth fault loop impedance test is being carried out on a lighting circuit. PPE and instrument requirements are governed by:",
              options: {
                A: "BS 7671 Appendix 4 only",
                B: "GS38 (test leads), HSE guidance on live working PPE, and the inspector's own risk assessment",
                C: "Building Regulations Part P",
                D: "ESS PRS Regulations"
              },
              answer: "B",
              explanation:
                "GS38 covers test leads and probes; HSE / EAWR guidance on live working covers PPE and procedures. The inspector also runs their own risk assessment to set the controls. Live tests are only justified when dead testing isn't practicable."
            },
            {
              number: 19,
              prompt:
                "A previously agreed sample size of 10% becomes inadequate because two of the sampled lighting points have loose terminations. The defensible action is:",
              options: {
                A: "Stick with the 10% because it was agreed",
                B: "Expand sampling, communicate to the duty holder why the sample size has changed, document the revised scope, and code accordingly",
                C: "Swap the agreed scope for a different one",
                D: "Stop the inspection"
              },
              answer: "B",
              explanation:
                "Repeated defects in the sample force an expansion. The inspector communicates the change, documents it in Section D, and codes the findings — sampling is conditional on the sample being representative of the wider population."
            },
            {
              number: 20,
              prompt:
                "An agreed limitation is acceptable only when it is:",
              options: {
                A: "Used to avoid recording a defect the inspector has already seen",
                B: "Agreed with the client, recorded clearly with the reason, and does not conceal an observed dangerous or potentially dangerous condition",
                C: "Added after the report is issued to shorten the document",
                D: "Used for every circuit that takes longer than expected to test"
              },
              answer: "B",
              explanation:
                "Limitations are legitimate when access, isolation or operational restrictions prevent inspection or testing. They must be agreed and recorded. They are not a way to downgrade or hide an observed defect; once danger is seen, it must be coded and communicated."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt:
                "An EICR for a 12-floor office tower is being scoped. The duty holder asks for sampling to keep the cost reasonable. The defensible position is:",
              options: {
                A: "Sampling is a cost decision and the inspector defers to the client",
                B: "Sampling is a risk decision: agree a representative sample (typically 10-20% of repeating accessories), retain 100% on origins/switchgear, and document the basis in writing",
                C: "Sample 1 socket per floor only",
                D: "Sample 50% of every circuit"
              },
              answer: "B",
              explanation:
                "Sampling is a risk decision. Origin and main switchgear stay 100%. Repeating accessories sample at typical 10-20% rates, increased on findings. The basis is documented in writing as part of extent and limitations."
            },
            {
              number: 2,
              prompt:
                "The inspector samples sockets on a busy retail floor and finds the same loose terminal on two of the ten sampled. The defensible response is:",
              options: {
                A: "Issue C3 and stop",
                B: "Increase the sample, expand testing toward 100% if the pattern continues, and code each defect appropriately (typically C2 for loose terminations creating a potential connection failure)",
                C: "Ignore the loose terminations because they were not in the agreed sample",
                D: "Issue Unsatisfactory and refer to the DNO"
              },
              answer: "B",
              explanation:
                "Repeating defects justify expanding the sample. Loose terminations in busy areas typically code C2 (potentially dangerous — risk of arcing and overheating) and the inspector documents the wider check."
            },
            {
              number: 3,
              prompt:
                "Live testing is justified only when:",
              options: {
                A: "The duty holder offers to pay extra",
                B: "Dead testing is not reasonably practicable, the duty holder accepts the residual risk, GS38-compliant test leads and PPE are used, and the rationale is recorded on the EICR",
                C: "The inspector cannot find an isolation point",
                D: "The installation is more than 5 years old"
              },
              answer: "B",
              explanation:
                "Dead test by default. Live testing happens only where dead testing isn't reasonably practicable. The case must be specific, the duty holder must accept the residual risk, and the rationale and method are recorded."
            },
            {
              number: 4,
              prompt:
                "Sampling that turns up a defect on a single circuit suggests:",
              options: {
                A: "Always 100% testing of every circuit",
                B: "An expansion of the sample within the same group; the size of the expansion depends on the consequence and the rate of similar findings",
                C: "Issue Unsatisfactory and stop",
                D: "Issue Satisfactory with a footnote"
              },
              answer: "B",
              explanation:
                "Sampling escalation is risk-based. A single defect doesn't automatically force 100%, but the sample expands and continues until the inspector is reasonably confident the population is understood."
            },
            {
              number: 5,
              prompt:
                "EICR Section D ('extent and limitations') is the place to record:",
              options: {
                A: "Test results",
                B: "Areas not inspected, agreed sampling, items the duty holder asked the inspector to leave for cost or operational reasons, and the rationale for each",
                C: "The inspector's daily timesheet",
                D: "The price of the EICR"
              },
              answer: "B",
              explanation:
                "Section D is the documentation of scope. Areas excluded, sampling levels, operational restrictions and the rationale all go here. It is the inspector's primary protection on liability."
            },
            {
              number: 6,
              prompt:
                "Limitations cannot legitimately be used to:",
              options: {
                A: "Record an inaccessible loft area",
                B: "Cover a circuit that could not be isolated during the visit",
                C: "Hide an observed danger because the duty holder asks for it to be omitted",
                D: "Note that part of the building was tenanted and locked"
              },
              answer: "C",
              explanation:
                "Limitations record genuine restrictions. Once an inspector has observed a danger, it must be coded — limitations cannot be used as a hiding place for an observed defect, even at the duty holder's request."
            },
            {
              number: 7,
              prompt:
                "Out-of-hours dead testing on a 24/7 facility is preferable because:",
              options: {
                A: "It saves money",
                B: "Dead testing is the safer default and meeting it requires planning around occupancy; live testing introduces additional shock and arc-flash risk",
                C: "It allows the inspector to skip live tests",
                D: "It is mandatory in GN3"
              },
              answer: "B",
              explanation:
                "Dead testing is the GN3 default. Out-of-hours work is the planning route to honour that on continuous-process sites. Live testing remains an exception, justified case-by-case."
            },
            {
              number: 8,
              prompt:
                "A privately rented dwelling EICR has a clear, signed extent-and-limitations entry. The benefit of this is:",
              options: {
                A: "Faster invoice",
                B: "Defines the scope of the report so anything outside it is excluded from the conclusions; both parties understand who is responsible for what",
                C: "Avoids any need for testing",
                D: "Reduces the EICR validity period"
              },
              answer: "B",
              explanation:
                "A signed Section D protects both sides. The duty holder accepts what was excluded; the inspector limits liability to the agreed scope. It is the documentary backbone of a defensible EICR."
            },
            {
              number: 9,
              prompt:
                "An inspector cannot dead-test a continuous-process line. Acceptable approaches include:",
              options: {
                A: "Test only the lighting circuit",
                B: "Plan a maintenance shutdown for dead test, or agree limited live tests with the duty holder, or treat untestable items as limitations and recommend a follow-up window",
                C: "Test live without agreement",
                D: "Skip the EICR entirely"
              },
              answer: "B",
              explanation:
                "The standard playbook: plan a shutdown, agree a defined live-test scope where shutdown is impossible, or agree limitations. The choice is documented and the duty holder accepts the residual risk."
            },
            {
              number: 10,
              prompt:
                "A 100-circuit installation is sampled at 10%. Two sampled circuits return low IR. The next defensible step is:",
              options: {
                A: "Stop and issue Satisfactory",
                B: "Investigate the two faulted circuits, expand the sample, and code accordingly; if the cause cannot be diagnosed during the visit, raise FI",
                C: "Test only the lighting",
                D: "Refuse to continue"
              },
              answer: "B",
              explanation:
                "Repeated low IR triggers expansion. The inspector investigates, escalates the sample, and uses FI if the cause cannot be located during the visit. The report becomes Unsatisfactory until resolved."
            },
            {
              number: 11,
              prompt:
                "An EICR records 'sampling: 100% of consumer units, 20% of socket outlets, 100% of fire alarm circuits, lighting in occupied areas only'. This kind of mixed sampling is:",
              options: {
                A: "Wrong — sampling must be uniform",
                B: "Defensible — different items get different sample sizes based on their risk profile, with origin/critical systems at 100%",
                C: "Wrong — sampling must always be 100%",
                D: "Wrong — sampling never includes consumer units"
              },
              answer: "B",
              explanation:
                "Sampling is per-group, not uniform. Critical/safety systems and origins go to 100%. Repeating sockets and lights sample at lower rates. The mixed approach reflects the real risk profile."
            },
            {
              number: 12,
              prompt:
                "Failure to obtain a written agreement on extent and limitations exposes the inspector because:",
              options: {
                A: "The DNO can demand the report",
                B: "The report appears to cover the whole installation, so anything subsequently found defective could be argued to be within the inspector's scope and judgement",
                C: "The local authority is automatically notified",
                D: "The inspector loses their qualification"
              },
              answer: "B",
              explanation:
                "Without written extent and limitations, the report appears comprehensive. If something later goes wrong on an un-tested circuit, the inspector has no documentary basis for excluding it from the EICR's conclusions."
            },
            {
              number: 13,
              prompt:
                "An EICR limitation that says 'the basement boiler room could not be inspected because the key holder was unavailable' is:",
              options: {
                A: "Acceptable — record it in Section D and recommend follow-up access",
                B: "Unacceptable — the inspector should break in",
                C: "Acceptable only if the boiler is small",
                D: "Acceptable only if the duty holder waives all liability"
              },
              answer: "A",
              explanation:
                "Genuine access restrictions are legitimate limitations. The inspector records the reason, recommends a follow-up to complete the un-inspected scope, and the duty holder accepts that it is outside the report's conclusions."
            },
            {
              number: 14,
              prompt:
                "An EICR sample turns up a recurring 6242Y cable type used in a damp area. The defensible response is:",
              options: {
                A: "Code C3 and stop",
                B: "Investigate further, expand the sample to other parts of the same area, code per the actual condition (C2 if damage / risk; C3 if compliant but improvement-recommended), and document the area-wide finding",
                C: "Issue Unsatisfactory immediately",
                D: "Refer to the DNO"
              },
              answer: "B",
              explanation:
                "Pattern findings demand expansion. The inspector investigates, expands the sample, and codes against actual condition. Documenting the whole area helps the duty holder plan remedial work."
            },
            {
              number: 15,
              prompt:
                "An office EICR has 'sampling: 20% of similar circuits' agreed. During testing, no defects are found. The defensible record is:",
              options: {
                A: "Issue Satisfactory; document the sample size, the result and the un-sampled population in Section D",
                B: "Re-test 100% just in case",
                C: "Issue Satisfactory with no notes",
                D: "Issue Unsatisfactory because not everything was tested"
              },
              answer: "A",
              explanation:
                "When the agreed sample passes, the report is Satisfactory but the documentation in Section D is critical — the un-sampled circuits are explicitly outside the conclusions and the duty holder accepts that."
            },
            {
              number: 16,
              prompt:
                "An office tenant insists computers must not be turned off. The defensible response is:",
              options: {
                A: "Test live without comment",
                B: "Agree out-of-hours dead testing where possible, agree limitations on what cannot be reached, and document any specific live tests in Section D and the test results schedule",
                C: "Issue Unsatisfactory",
                D: "Skip every test"
              },
              answer: "B",
              explanation:
                "Continuous-IT environments are common. Plan dead testing out-of-hours, agree limitations for the rest, and document any live tests. The duty holder accepts the residual position in writing."
            },
            {
              number: 17,
              prompt:
                "An EICR sample reveals one C1 defect (immediate danger). The inspector should:",
              options: {
                A: "Note it and continue sampling",
                B: "Take immediate action to make safe (or warn / isolate), notify the duty holder in writing immediately, then continue with an expanded sample focused on related items",
                C: "Wait until the report is written",
                D: "Refer it to the DNO"
              },
              answer: "B",
              explanation:
                "C1 demands immediate action and same-day written notification (BPG4). The inspector then continues with an expanded sample, aware that the original defect rate may have been understated."
            },
            {
              number: 18,
              prompt:
                "A duty holder asks for the EICR to be split into 'phases' so only some circuits are tested per visit. The defensible response is:",
              options: {
                A: "Refuse the inspection",
                B: "Phased inspections are a recognised approach for very large installations; agree the phasing in writing as the extent for each phase, with each phase producing its own EICR or a clearly scoped report",
                C: "Test everything in one visit regardless",
                D: "Issue a single EICR but date it differently"
              },
              answer: "B",
              explanation:
                "Phased EICRs are common on large estates. Each phase has its own clearly scoped extent and limitations. The duty holder must understand that areas in future phases are not yet covered."
            },
            {
              number: 19,
              prompt:
                "A live-tested circuit returns a Zs reading at the upper end of the table value. The defensible response is:",
              options: {
                A: "Pass it without comment",
                B: "Apply the GN3 80% measured-value rule of thumb and investigate any reading near or above the limit; check ambient temperature correction and re-test cold if practical",
                C: "Issue Unsatisfactory automatically",
                D: "Skip the test"
              },
              answer: "B",
              explanation:
                "GN3's 80% rule of thumb says measured Zs near or above 80% of the table value warrants investigation, because conductors heat up in service. Live tests already include ambient temperature, so a borderline reading typically demands further check."
            },
            {
              number: 20,
              prompt:
                "An agreed limitation must:",
              options: {
                A: "Be documented in Section D with the reason, agreed with the duty holder, and not conceal an observed danger",
                B: "Be added at the inspector's sole discretion",
                C: "Be applied silently",
                D: "Cover any circuit the inspector would rather not test"
              },
              answer: "A",
              explanation:
                "Limitations are documented (Section D), agreed (duty holder), explained (reason). They cannot be used to hide observed danger; once a defect is seen, it is coded — never hidden behind a limitation."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt:
                "An inspector samples 10% of socket outlets and finds 3 of 10 with reversed polarity. The defensible response is:",
              options: {
                A: "Record three C2s and stop",
                B: "Increase the sample size sharply, code each finding (typically C2 for reversed polarity), and report the wider pattern; the inspector may move to 100% on the affected circuit group",
                C: "Issue Satisfactory because it is only polarity",
                D: "Skip the rest"
              },
              answer: "B",
              explanation:
                "30% defect rate triggers a sharp expansion. Reversed polarity is typically C2 (potentially dangerous — accessories rely on neutral being switched/protected correctly). The pattern justifies extending to 100% on the affected group."
            },
            {
              number: 2,
              prompt:
                "Live testing PPE and instrument requirements are governed by:",
              options: {
                A: "BS 7671 Appendix 4",
                B: "GS38 (test leads/probes), HSE guidance on live working PPE, the inspector's risk assessment, and the duty holder's site safety rules",
                C: "ESS PRS Regs",
                D: "Building Regulations Part P"
              },
              answer: "B",
              explanation:
                "GS38 covers test leads/probes; HSE / EAWR cover live working PPE; site rules add controls. Appendix 4 is design (volt drop), Part P is dwellings, ESS PRS is privately rented dwellings — none of those cover live testing safety."
            },
            {
              number: 3,
              prompt:
                "An EICR Section D entry that says 'all circuits tested at 100%' could be unrealistic on a large installation because:",
              options: {
                A: "100% testing is forbidden",
                B: "Genuinely testing every circuit on a very large installation is impracticable; over-stating the scope inflates the inspector's exposure beyond what was actually covered",
                C: "100% testing is mandatory",
                D: "100% testing has no documentary impact"
              },
              answer: "B",
              explanation:
                "Honest scoping is the protection. Over-stating that everything was tested when it wasn't extends liability to circuits that were never visited. Sampling — agreed and documented — is more defensible than a blanket '100%' claim that doesn't match reality."
            },
            {
              number: 4,
              prompt:
                "An inspector cannot inspect a busy hospital ward. The defensible response is:",
              options: {
                A: "Force entry",
                B: "Treat the ward as a limitation, record the reason ('clinical activity, no isolation possible during the visit'), and recommend a follow-up visit out of hours",
                C: "Issue Unsatisfactory just for the ward",
                D: "Skip without comment"
              },
              answer: "B",
              explanation:
                "Operational limitations on critical environments are textbook Section D entries. The inspector documents the reason, recommends a follow-up, and the duty holder is clear that the ward is not within the report's conclusions."
            },
            {
              number: 5,
              prompt:
                "The inspector decides to sample 5% of identical socket circuits in a large warehouse. The duty holder is comfortable with this. The defensible record is:",
              options: {
                A: "Record the agreed sample size, the rationale, and the un-sampled circuits in Section D, with the duty holder's signed acceptance",
                B: "Test it silently and move on",
                C: "Sample 5% with no documentation",
                D: "Sample 5% but tell the duty holder verbally only"
              },
              answer: "A",
              explanation:
                "Section D records the sample, rationale and un-sampled population. Signed acceptance from the duty holder is the documentary safety net. Verbal-only agreements offer none of the legal protection."
            },
            {
              number: 6,
              prompt:
                "On a sampled circuit, the inspector finds an unsleeved CPC at the consumer unit. The defensible response is:",
              options: {
                A: "Record C3 and stop",
                B: "Code the finding (typically C3 for missing sleeving), check the rest of the consumer unit, and investigate whether the same workmanship applies elsewhere; expand sampling if pattern is suspected",
                C: "Code C1 immediately",
                D: "Skip without comment"
              },
              answer: "B",
              explanation:
                "Missing sleeving alone is typically C3 (improvement). The presence of one defect prompts a check elsewhere — workmanship issues are usually consistent, and the EICR should reflect the wider pattern."
            },
            {
              number: 7,
              prompt:
                "An EICR limitation reads 'sockets behind built-in furniture not inspected'. This is:",
              options: {
                A: "Defensible, provided the limitation is recorded with the reason and the duty holder is aware that those sockets are outside the report",
                B: "Indefensible — every socket must be inspected",
                C: "Defensible only on dwellings",
                D: "Defensible only if the furniture is metal"
              },
              answer: "A",
              explanation:
                "Genuine access restrictions are valid limitations. Recording them in Section D, with the reason, makes the report's scope clear. Built-in furniture is a common real-world limitation."
            },
            {
              number: 8,
              prompt:
                "A duty holder offers the inspector a fee uplift to pass an installation that would otherwise be Unsatisfactory. The defensible response is:",
              options: {
                A: "Accept and pass",
                B: "Refuse — the EICR records actual condition; no fee can change a coded observation; raising it as a concern is appropriate",
                C: "Accept and add a discreet C3",
                D: "Accept and skip the codes"
              },
              answer: "B",
              explanation:
                "Coding integrity is non-negotiable. The inspector records what is observed regardless of payment offers — and treats the offer itself as a serious professional issue."
            },
            {
              number: 9,
              prompt:
                "Sampling escalation is fundamentally about:",
              options: {
                A: "Cost",
                B: "Confidence — the sample size grows until the inspector can reasonably conclude that the un-sampled population is understood",
                C: "Time",
                D: "Site security"
              },
              answer: "B",
              explanation:
                "The aim of sampling is to give the duty holder a defensible view of the wider population. When confidence is low (high failure rate, complex installation), the sample grows; when confidence is high, the sample stays small."
            },
            {
              number: 10,
              prompt:
                "An EICR records 'lighting circuits not isolated; live tests applied' on a continuously-occupied call centre. This entry is:",
              options: {
                A: "Defensible, provided the reason for not isolating is given, the live-test method is named, and the duty holder accepts the residual risk in writing",
                B: "Indefensible regardless of context",
                C: "Defensible only on TT systems",
                D: "Defensible only on dwellings"
              },
              answer: "A",
              explanation:
                "Live testing where dead testing isn't reasonably practicable is allowed when reason, method and acceptance are documented. The default principle remains dead testing — live testing is the documented exception."
            },
            {
              number: 11,
              prompt:
                "An EICR sample tested at 20% returns no defects and the un-sampled population is similar in age and type. The defensible recommendation for the next inspection cycle is:",
              options: {
                A: "Continue with 20% sampling, clearly recorded, with no immediate change in interval",
                B: "Move to 100% next time",
                C: "Move to 5% next time",
                D: "Cancel the next EICR"
              },
              answer: "A",
              explanation:
                "When the sample is satisfactory, the next cycle can continue with the same sampling rate, clearly recorded. The interval is unchanged unless conditions or use have shifted; the sampling rate is similarly stable until findings drive a change."
            },
            {
              number: 12,
              prompt:
                "An inspector cannot test a critical control circuit in continuous use. The defensible record is:",
              options: {
                A: "Limitation in Section D, with reason 'continuous-process control circuit; no isolation window agreed during this visit', plus FI if there is a specific concern that cannot be diagnosed without isolation",
                B: "Test it live without comment",
                C: "Skip without record",
                D: "Issue Unsatisfactory based on no test data"
              },
              answer: "A",
              explanation:
                "Limitation + FI when warranted is the textbook treatment. The duty holder is left with a clear picture: the circuit was not tested, why, and what specific concern (if any) needs follow-up."
            },
            {
              number: 13,
              prompt:
                "An EICR sample is 'all of one type of repeating accessory'. This is:",
              options: {
                A: "Inappropriate sampling — origin and main switchgear should also be 100%, not just one accessory type",
                B: "Acceptable — sampling can be by type",
                C: "Acceptable only if numbered",
                D: "Acceptable only on lighting circuits"
              },
              answer: "B",
              explanation:
                "Sampling by accessory type or circuit family is normal. The phrase 'repeating accessory' implies a homogeneous population — sampling within that group is defensible. Origin and main switchgear are separately covered at 100%."
            },
            {
              number: 14,
              prompt:
                "An EICR has no Section D entry. The implication is:",
              options: {
                A: "The report is incomplete — Section D is required to record extent and limitations and its absence undermines the report's defensibility",
                B: "The report is fine — Section D is optional",
                C: "The report is fine if it's a domestic property",
                D: "The report is fine if no codes are raised"
              },
              answer: "A",
              explanation:
                "Section D records extent and limitations and is a required part of the EICR set. Without it, scope is undefined and the inspector's exposure is at maximum; the report cannot be considered complete."
            },
            {
              number: 15,
              prompt:
                "An EICR sample returns no defects on tested circuits, but the inspector observes a generic Section D issue (e.g. inadequate labelling on an old distribution board). The defensible action is:",
              options: {
                A: "Code the labelling observation (typically C3) on the EICR and record where it was observed",
                B: "Ignore it because the sampled circuits passed",
                C: "Issue Unsatisfactory automatically",
                D: "Refer to the DNO"
              },
              answer: "A",
              explanation:
                "Visual observations that are outside the sampling scope can still be coded. Inadequate labelling is typically C3 — the inspector records it where seen, and the EICR captures both the test results and the wider observations."
            },
            {
              number: 16,
              prompt:
                "An EICR limitation reads 'no test results for the lift motor circuit because access denied by the lift maintenance contractor'. This is:",
              options: {
                A: "Defensible, with reason recorded; the inspector recommends a follow-up coordinated with the lift contractor",
                B: "Indefensible — the lift must be tested",
                C: "Defensible only if the lift is non-passenger",
                D: "Defensible only with a fee uplift"
              },
              answer: "A",
              explanation:
                "Third-party access restrictions are common limitations. Document the reason and recommend a coordinated follow-up — that protects both parties and gives the duty holder the information to plan the missing inspection."
            },
            {
              number: 17,
              prompt:
                "Sampling decisions on safety-critical systems (fire alarm, emergency lighting, life safety):",
              options: {
                A: "Default to 100%",
                B: "Default to whatever the duty holder asks",
                C: "Default to 5%",
                D: "Default to 50%"
              },
              answer: "A",
              explanation:
                "Safety-critical systems are 100% by default — they fail closed. The consequence of an undetected defect is immediate. Routine sampling rates do not apply to fire alarm and emergency lighting verification."
            },
            {
              number: 18,
              prompt:
                "Sampling rates may rise for the next cycle when:",
              options: {
                A: "The current EICR turns up multiple defects across several sampling groups",
                B: "The current EICR is Satisfactory with no codes",
                C: "The premises are owner-occupied",
                D: "The duty holder asks for less testing"
              },
              answer: "A",
              explanation:
                "Findings drive future sampling. Defects across multiple groups suggest the original sampling rate was too low — the next EICR uses a higher rate (and possibly a shorter interval) until the findings stabilise."
            },
            {
              number: 19,
              prompt:
                "An EICR records 'inspection limited to non-isolatable items by visual inspection only; full testing where isolation could be agreed during the visit'. This entry is:",
              options: {
                A: "Defensible — visual-only is a recognised limitation, and the items where full testing was possible are clearly distinguished",
                B: "Indefensible — visual is never enough",
                C: "Defensible only on TT systems",
                D: "Defensible only on outdoor installations"
              },
              answer: "A",
              explanation:
                "Visual-only is sometimes the only option (continuous process, no shutdown window). Recording it transparently — and distinguishing the items where full testing was possible — gives the duty holder a clear picture of scope."
            },
            {
              number: 20,
              prompt:
                "An agreed sampling boundary is exceeded by the inspector during the visit because of findings. The defensible record is:",
              options: {
                A: "Update Section D / sampling notes with the revised scope and sample size, communicate to the duty holder, and proceed with the expanded test set",
                B: "Stick with the original sample because it was agreed",
                C: "Test the whole installation silently",
                D: "Stop the inspection"
              },
              answer: "A",
              explanation:
                "Sampling can grow on findings. The change is communicated and recorded; the duty holder is informed why the original scope no longer fits. Documentation tracks the revised position."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt:
                "On a sampled office lighting circuit the inspector finds an exposed live conductor in a damaged accessory. The defensible response is:",
              options: {
                A: "Code C3 and continue sampling",
                B: "Treat as C1 (immediate danger), make safe (or warn / isolate), notify the duty holder in writing immediately, and expand sampling on related circuits",
                C: "Wait until the report is written",
                D: "Refer to the DNO"
              },
              answer: "B",
              explanation:
                "C1 demands immediate action and same-day written notification. After making safe, the inspector continues with an expanded sample because the original defect rate has been understated by even one C1 finding."
            },
            {
              number: 2,
              prompt:
                "Sampling must NOT be applied to which of the following on a periodic inspection?",
              options: {
                A: "Repeating socket outlets in an office",
                B: "Repeating lighting points in a corridor",
                C: "The main earthing terminal, earthing conductor and main protective bonding conductors",
                D: "Repeating dado trunking accessories"
              },
              answer: "C",
              explanation:
                "MET, earthing conductor and main protective bonding conductors are unique to the installation and central to every protective measure. They are inspected directly; sampling is for repeating distributed accessories."
            },
            {
              number: 3,
              prompt:
                "An EICR limitation must not:",
              options: {
                A: "Cover access denied by an occupant",
                B: "Cover continuous-process areas where isolation is impossible during the visit",
                C: "Be used to hide an observed defect or danger",
                D: "Be used for high-risk areas where access was unavailable"
              },
              answer: "C",
              explanation:
                "Limitations cannot conceal observed danger. Once an inspector has seen a defect, coding is required regardless of any subsequent agreement to omit. The whole point of limitations is to be transparent about scope."
            },
            {
              number: 4,
              prompt:
                "An EICR records 'sampling 25% of repeating accessories; 100% of consumer units, switchgear, fire alarm circuits and emergency lighting'. This sampling pattern is:",
              options: {
                A: "Defensible — origin/critical 100%, repeating distributed at typical 10-25%",
                B: "Indefensible — sampling must be uniform",
                C: "Indefensible — fire alarm cannot be tested at all on a periodic",
                D: "Indefensible — sockets must always be 100%"
              },
              answer: "A",
              explanation:
                "Mixed sampling is the realistic approach — origin and critical systems 100%, repeating accessories at lower rates. Anything blanket — '100% everywhere' or 'sample everything' — does not reflect actual practice."
            },
            {
              number: 5,
              prompt:
                "A previous EICR set sampling at 50% and found three defects. The inspector inheriting the next cycle should:",
              options: {
                A: "Sample at 50% again as a baseline, expanding on findings, and consider whether the previous defect rate justifies a higher starting sample or shorter interval",
                B: "Sample at 5%",
                C: "Cancel the next inspection",
                D: "Test only the lighting"
              },
              answer: "A",
              explanation:
                "Previous findings inform the next inspection. The new inspector reviews the previous EICR, sets a starting sample size that reflects the previous defect rate, and adjusts the interval if conditions warrant."
            },
            {
              number: 6,
              prompt:
                "An EICR sample reveals a low IR reading on a sampled circuit. The cause cannot be diagnosed during the visit without further isolation that the duty holder cannot accommodate today. The defensible response is:",
              options: {
                A: "Issue Unsatisfactory with FI, recording the symptom and the reason further investigation cannot be completed today",
                B: "Issue Satisfactory with a footnote",
                C: "Skip without comment",
                D: "Refer to the DNO"
              },
              answer: "A",
              explanation:
                "FI is for symptoms that cannot be diagnosed during the visit. The report is Unsatisfactory until the FI is closed out by a follow-up visit and any consequent remedial work."
            },
            {
              number: 7,
              prompt:
                "Live testing during a periodic inspection is governed by GS38 in respect of:",
              options: {
                A: "Test lead and probe construction (insulated probes, fused leads, finger guards, exposed tip length)",
                B: "Volt drop calculations",
                C: "RCD selection",
                D: "Cable colour codes"
              },
              answer: "A",
              explanation:
                "GS38 is HSE guidance on test leads and probes. Insulated probes, fused leads (typically 500mA fuse), finger guards, and limited exposed tip length all aim to keep the inspector safe during live work."
            },
            {
              number: 8,
              prompt:
                "An EICR sample reveals two non-compliant accessories among the ten sampled. The inspector should:",
              options: {
                A: "Issue Satisfactory because the rate is only 20%",
                B: "Code the accessories appropriately, expand the sample to the wider population, and communicate the pattern in the EICR",
                C: "Issue Unsatisfactory automatically without expansion",
                D: "Skip the rest"
              },
              answer: "B",
              explanation:
                "20% defect rate is significant — the sample should expand. Each defect is coded, and the EICR records the pattern and the expanded scope. The overall result depends on the codes raised."
            },
            {
              number: 9,
              prompt:
                "A duty holder asks 'why isn't 100% always tested?' The defensible response is:",
              options: {
                A: "Cost — sampling is cheaper",
                B: "Practicability — full testing is often not reasonably practicable on large installations; sampling extrapolated from a representative subset is defensible when properly agreed and recorded",
                C: "Convenience — the inspector chose to",
                D: "Industry tradition only"
              },
              answer: "B",
              explanation:
                "Practicability is the defensible reason. Full testing on a large installation is often not reasonably practicable; sampling — agreed, documented, and risk-based — gives a defensible view at a proportionate scope."
            },
            {
              number: 10,
              prompt:
                "An EICR limitation is recorded as 'lighting circuits in occupied bedrooms not tested'. The duty holder is comfortable with this. The defensible record is:",
              options: {
                A: "Section D, with reason 'occupant present; no isolation window during the visit', plus the duty holder's signed acceptance",
                B: "Verbal note to the duty holder only",
                C: "No record needed",
                D: "Record on the test results schedule only"
              },
              answer: "A",
              explanation:
                "Section D plus signed acceptance is the textbook treatment. The duty holder is left with a clear picture: which areas were not tested, why, and a recommendation to follow up if needed."
            },
            {
              number: 11,
              prompt:
                "Sampling on a hospital's life-safety circuits should default to:",
              options: { A: "100%", B: "10%", C: "20%", D: "5%" },
              answer: "A",
              explanation:
                "Life-safety systems are 100% by default. Routine sampling rates do not apply — the consequence of an undetected defect on emergency lighting or life-safety power is immediate."
            },
            {
              number: 12,
              prompt:
                "Live test for Zs is being carried out on a TN-S installation while the building is occupied. The most defensible approach is:",
              options: {
                A: "Use loop tester with appropriate test leads (GS38 compliant), wear appropriate PPE, work to the inspector's documented risk assessment, and record the live-test rationale in Section D",
                B: "Use loop tester with no PPE for speed",
                C: "Use loop tester with the duty holder absent",
                D: "Skip the test"
              },
              answer: "A",
              explanation:
                "GS38 leads + PPE + RA + documented rationale is the textbook live-test setup. Speed and absence of duty holder are not relevant; the live-test exception requires extra controls, not fewer."
            },
            {
              number: 13,
              prompt:
                "An EICR sample turns up no defects but the inspector observes the consumer unit is plastic and visibly aged. The defensible response is:",
              options: {
                A: "Code as appropriate (typically C3 for non-fire-rated plastic CU in older installations, or further coding if heat-damaged) and note the observation outside the sampling scope",
                B: "Ignore because samples passed",
                C: "Issue Unsatisfactory automatically",
                D: "Skip"
              },
              answer: "A",
              explanation:
                "Visual observations sit alongside test sampling. A non-fire-rated plastic consumer unit is typically C3 in older domestic installations; if there is heat damage or melted material the code can rise to C2 or C1."
            },
            {
              number: 14,
              prompt:
                "An EICR for a privately rented dwelling has Section D blank. The implication is:",
              options: {
                A: "The report is incomplete and the landlord may not have a defensible record under ESS PRS 2020",
                B: "The report is fine because PRS Regs are silent on Section D",
                C: "The report is fine because dwellings are simple",
                D: "The report is fine because no codes were raised"
              },
              answer: "A",
              explanation:
                "ESS PRS 2020 expects a complete EICR. Section D is part of the standard set; its absence undermines the report and weakens the landlord's documentary position with the local authority and tenant."
            },
            {
              number: 15,
              prompt:
                "An EICR sample returns no defects but the inspector observes that the test results from the previous EICR were significantly different. The defensible response is:",
              options: {
                A: "Investigate the discrepancy, record the comparison in the new EICR, and code or raise FI as appropriate",
                B: "Ignore the previous EICR",
                C: "Copy the previous results",
                D: "Skip the new tests"
              },
              answer: "A",
              explanation:
                "Trends matter. A significant change between cycles deserves investigation — it could indicate deterioration, alteration or a previous test error. The new EICR should reflect the inspector's diagnosis."
            },
            {
              number: 16,
              prompt:
                "On a sampled circuit, the inspector sees an obvious sign of overheating at a connection. The defensible response is:",
              options: {
                A: "Investigate the connection, code appropriately (typically C2 or higher depending on severity), and expand sampling on related accessories of the same type",
                B: "Code C3 and stop",
                C: "Skip and continue",
                D: "Refer to the DNO"
              },
              answer: "A",
              explanation:
                "Overheating typically codes C2 (potentially dangerous — risk of fire) or C1 if the danger is immediate. Investigation reveals the cause, expanded sampling tests for the pattern, and the EICR captures the wider position."
            },
            {
              number: 17,
              prompt:
                "An EICR Section D limitation reads 'isolation refused by duty holder for cost reasons'. This entry is:",
              options: {
                A: "Defensible — duty holder accepts the residual risk in writing",
                B: "Indefensible because cost is not a recognised reason for limitation",
                C: "Defensible only on dwellings",
                D: "Defensible only on TT systems"
              },
              answer: "A",
              explanation:
                "The duty holder can choose to accept residual risk in writing for genuine commercial reasons. The inspector's job is to make the position transparent — the limitation, the reason, and the duty holder's signed acceptance."
            },
            {
              number: 18,
              prompt:
                "An EICR records 'live RCD operation tested at IΔn (built-in button) only; trip-time test deferred to next cycle for non-isolation reasons'. This is:",
              options: {
                A: "A documented limitation: the inspector should record it in Section D and recommend completion at the next opportunity",
                B: "A failure to test — Unsatisfactory automatically",
                C: "A reason to issue C1",
                D: "A reason to refer to the DNO"
              },
              answer: "A",
              explanation:
                "Partial testing recorded as a limitation is acceptable when the reason is genuine. The duty holder is left with a clear picture: what was tested, what wasn't, and what the next visit needs to complete."
            },
            {
              number: 19,
              prompt:
                "Sampling on a TT installation:",
              options: {
                A: "Follows the same risk-based principles as for any other earthing system",
                B: "Is forbidden",
                C: "Is always at 100%",
                D: "Is always at 5%"
              },
              answer: "A",
              explanation:
                "Earthing system does not change the sampling principle. TT installations follow the same risk-based sampling logic — origin/electrode 100%, repeating accessories at typical 10-20% rates, escalated on findings."
            },
            {
              number: 20,
              prompt:
                "An EICR limitation that contradicts an observed danger is:",
              options: {
                A: "Defensible if the duty holder agrees",
                B: "Indefensible — observed danger must be coded; the limitation route cannot be used to hide it",
                C: "Defensible if the customer is in a hurry",
                D: "Defensible only on rented dwellings"
              },
              answer: "B",
              explanation:
                "Once danger is observed, coding is required. The limitation route is for items not inspected, not for items inspected and known to be defective. Hiding observed danger is a serious professional failure."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt:
                "An inspector samples 10 lighting points on a corridor and finds two with damaged flexes inside accessory boxes. The defensible response is:",
              options: {
                A: "Code C3 and stop",
                B: "Investigate, code appropriately (typically C2 for damaged flex creating a shock or fire hazard), expand the sample to similar accessories, and record the pattern",
                C: "Skip and continue",
                D: "Issue Satisfactory because lighting circuits are low risk"
              },
              answer: "B",
              explanation:
                "Damaged flex is a shock and fire hazard — typically C2. The inspector codes each instance, expands the sample to similar accessories, and the EICR captures the pattern."
            },
            {
              number: 2,
              prompt:
                "An inspector cannot dead-test a hospital's MRI scanner power circuit. The defensible response is:",
              options: {
                A: "Test live without comment",
                B: "Treat as a limitation, agree the limitation in writing with the duty holder, and apply only those tests that can be safely carried out without affecting clinical use",
                C: "Issue Unsatisfactory just for the MRI",
                D: "Skip without record"
              },
              answer: "B",
              explanation:
                "Critical clinical equipment cannot be casually isolated. The limitation route — agreed, recorded, with proportionate live tests — is the textbook treatment. The duty holder accepts the residual position in writing."
            },
            {
              number: 3,
              prompt:
                "Inspecting a privately rented dwelling, the inspector finds the loft hatch sealed shut. The defensible record is:",
              options: {
                A: "Limitation in Section D, with reason 'loft hatch sealed; no access during the visit', recommending follow-up access",
                B: "Force entry",
                C: "Skip without record",
                D: "Issue Unsatisfactory"
              },
              answer: "A",
              explanation:
                "Sealed access is a textbook Section D limitation. Document the reason, recommend a follow-up — the duty holder retains the duty to enable access for periodic inspection."
            },
            {
              number: 4,
              prompt:
                "A duty holder asks for sampling at 5% to keep the cost down. The defensible response is:",
              options: {
                A: "Refuse the inspection",
                B: "Discuss the implications with the duty holder, propose a defensible sample (with origin/critical systems at 100%), document the agreed scope in writing, and expand on findings",
                C: "Sample at 5% with no comment",
                D: "Sample at 50% regardless"
              },
              answer: "B",
              explanation:
                "The conversation matters. Origin and critical systems stay 100%. Repeating accessories sample at a rate the inspector considers defensible, agreed in writing, and increased on findings — the inspector cannot accept a sample size they consider inadequate."
            },
            {
              number: 5,
              prompt:
                "The 'reasonably practicable' standard for periodic inspection means:",
              options: {
                A: "Whatever the inspector can finish in a day",
                B: "A balance between the risk involved and the time, cost, and effort needed to address it — a recognised legal test from HSWA",
                C: "Whatever the duty holder pays for",
                D: "Whatever the customer requests"
              },
              answer: "B",
              explanation:
                "Reasonably practicable is the HSWA test. The inspector balances risk against time/cost/effort, but cannot use cost alone to omit testing where the consequence is dangerous."
            },
            {
              number: 6,
              prompt:
                "On a dead test, an inspector finds a circuit with a low IR reading. The duty holder asks them to skip further investigation because the circuit is in continuous use. The defensible response is:",
              options: {
                A: "Skip and continue",
                B: "Record a limitation explaining the constraint, raise FI for the circuit, and recommend follow-up — the symptom does not disappear because access was denied",
                C: "Issue Satisfactory",
                D: "Refer to the DNO"
              },
              answer: "B",
              explanation:
                "FI is for symptoms that cannot be diagnosed during the visit. The report is Unsatisfactory until FI is closed out. The duty holder is responsible for arranging the follow-up visit."
            },
            {
              number: 7,
              prompt:
                "An EICR sample reveals a deteriorated PVC sheath. The defensible response is:",
              options: {
                A: "Code the deterioration appropriately (typically C2 if integrity is compromised), expand sampling to similar areas, and record the pattern",
                B: "Code C3 and stop",
                C: "Skip and continue",
                D: "Refer to the DNO"
              },
              answer: "A",
              explanation:
                "Deteriorated sheaths code C2 if integrity is compromised. The inspector expands the sample because deterioration usually correlates with location/exposure — similar areas elsewhere likely show the same pattern."
            },
            {
              number: 8,
              prompt:
                "Live testing introduces additional hazards. The inspector's primary defence is:",
              options: {
                A: "Working alone",
                B: "GS38 leads, appropriate PPE, a documented risk assessment, agreed scope, and the duty holder's signed acceptance of residual risk",
                C: "Speed",
                D: "Skipping the dead-test PPE"
              },
              answer: "B",
              explanation:
                "The defensible toolkit for live testing: GS38, PPE, RA, documented scope, signed acceptance. Live testing is the documented exception, not the working norm."
            },
            {
              number: 9,
              prompt:
                "A duty holder asks for sampling to be 'whatever the inspector decides on the day'. The defensible response is:",
              options: {
                A: "Agree verbally and proceed",
                B: "Document the agreed sampling approach in writing before the inspection (with origin/critical at 100% and repeating accessories at typical 10-20%), and revise in writing during the visit if conditions change",
                C: "Sample at 1%",
                D: "Sample at 100% to be safe"
              },
              answer: "B",
              explanation:
                "Vague verbal agreements give no documentary protection. The defensible approach is a written baseline before the inspection (origin/critical 100%; repeating accessories at typical sample rates), revised in writing during the visit as needed."
            },
            {
              number: 10,
              prompt:
                "An EICR records 'sampling: 100% of consumer units; 30% of socket outlets, sampled across all rooms in proportion'. This is:",
              options: {
                A: "Defensible — origin 100%, repeating distributed at a rate weighted across the population, with a representative spread",
                B: "Indefensible — sampling must be uniform",
                C: "Indefensible — 30% is too high",
                D: "Indefensible — sampling cannot be weighted"
              },
              answer: "A",
              explanation:
                "Mixed and weighted sampling is normal. Origin 100%, sockets at a rate that gives a representative spread across the population, with the rationale documented. The headline rate is the inspector's risk-based judgement."
            },
            {
              number: 11,
              prompt:
                "An EICR limitation that says 'tenants in occupation; rooms tested where access permitted' is:",
              options: {
                A: "Defensible — operational limitation, recorded with reason and recommended follow-up",
                B: "Indefensible — every room must be tested",
                C: "Defensible only on dwellings",
                D: "Defensible only on commercial"
              },
              answer: "A",
              explanation:
                "Occupied tenancies are a real-world constraint on access. Recording the limitation with reason and a follow-up recommendation is the textbook treatment; full testing is achieved over multiple visits if needed."
            },
            {
              number: 12,
              prompt:
                "The inspector observes during the EICR that a previously installed circuit has been altered with no documentation. The defensible response is:",
              options: {
                A: "Investigate, code appropriately (typically FI if the alteration cannot be assessed during the visit; C2 if it creates a potential danger; C3 if compliant but undocumented), and record the observation",
                B: "Ignore the alteration",
                C: "Code C1 automatically",
                D: "Refer to the DNO"
              },
              answer: "A",
              explanation:
                "Undocumented alterations are common and depend on what the inspector finds. The default is investigate; code follows the actual condition. FI is appropriate when the assessment cannot be completed during the visit."
            },
            {
              number: 13,
              prompt:
                "Sampling failure escalation should NOT be:",
              options: {
                A: "Risk-based",
                B: "Documented",
                C: "Suppressed at the duty holder's request",
                D: "Communicated to the duty holder"
              },
              answer: "C",
              explanation:
                "Escalation cannot be suppressed by the duty holder. The inspector communicates the change, but the decision to expand sampling on findings is a professional judgement the duty holder cannot override."
            },
            {
              number: 14,
              prompt:
                "An EICR is a 'snapshot' precisely because:",
              options: {
                A: "It documents the agreed scope only",
                B: "It records the condition of the installation on the day of inspection — sampling, limitations, codes raised; future deterioration is the duty holder's responsibility to manage between cycles",
                C: "It only counts as evidence on the day it is signed",
                D: "It expires immediately"
              },
              answer: "B",
              explanation:
                "Snapshot logic underpins everything: the EICR is current on the day, and the duty holder is responsible for in-service safety between cycles. Sampling, limitations and codes all reflect that day's findings."
            },
            {
              number: 15,
              prompt:
                "A duty holder asks for the sampled accessories to be selected randomly with no inspector preference. The defensible response is:",
              options: {
                A: "Inspector selects a representative sample using professional judgement, weighting toward high-risk areas, and records the rationale",
                B: "Random sampling without weighting",
                C: "Refuse the inspection",
                D: "Test only the duty holder's office"
              },
              answer: "A",
              explanation:
                "Sampling is not random — it is risk-based. The inspector weights the sample toward high-risk areas (kitchens, wet rooms, public access) and records the rationale. Random selection ignores the risk profile and is not defensible."
            },
            {
              number: 16,
              prompt:
                "An EICR limitation reads 'live circuits to clinical alarms not isolated; functional check only by tester'. This is:",
              options: {
                A: "Defensible if reason and method are recorded and the duty holder accepts the residual risk in writing",
                B: "Indefensible because clinical alarms must be dead-tested",
                C: "Defensible only on dwellings",
                D: "Defensible only on TT systems"
              },
              answer: "A",
              explanation:
                "Clinical alarms cannot be casually isolated. A documented limitation with functional check, agreed in writing, is a textbook treatment for life-critical equipment that cannot be dead-tested during the visit."
            },
            {
              number: 17,
              prompt:
                "An EICR records 'sampling of consumer units: 100%; sampling of distribution boards: 100%; sampling of repeating sockets: 15%; lighting: 15%; fire alarm: 100%; emergency lighting: 100%'. The pattern is:",
              options: {
                A: "Defensible — origins/critical 100%, repeating accessories at typical 10-20%",
                B: "Indefensible — sampling must be uniform",
                C: "Indefensible — fire alarm cannot be sampled",
                D: "Indefensible — sockets must be 100%"
              },
              answer: "A",
              explanation:
                "Mixed sampling that respects the risk profile is exactly what GN3 expects. Origins, distribution and life-safety at 100%; repeating accessories at lower rates that reflect their risk and replication."
            },
            {
              number: 18,
              prompt:
                "An EICR limitation cannot exclude a circuit where the inspector has already observed:",
              options: {
                A: "Damaged conductor",
                B: "Polarity issue",
                C: "Any observed danger",
                D: "All of the above"
              },
              answer: "D",
              explanation:
                "Once observed, danger must be coded. The limitation route is for un-inspected items, not for items inspected and known to be defective. The inspector cannot exclude an observed defect at the duty holder's request."
            },
            {
              number: 19,
              prompt:
                "Live RCD trip-time testing on a TT installation in a dwelling:",
              options: {
                A: "Is normally required at the inspection — the test is brief and the consequences of an undetected RCD failure are immediate (TT relies on RCD for fault disconnection)",
                B: "Should always be omitted",
                C: "Is forbidden on TT",
                D: "Is voluntary"
              },
              answer: "A",
              explanation:
                "TT installations rely on RCDs for ADS. Skipping the trip-time test on TT is rarely defensible — the RCD is the protective device. The check is brief and the consequence of failure is direct."
            },
            {
              number: 20,
              prompt:
                "An EICR limitation entry should include, as a minimum:",
              options: {
                A: "Item or area, reason, agreed by/with whom, and a recommended follow-up if appropriate",
                B: "Just the item",
                C: "Just the reason",
                D: "Just the duty holder's name"
              },
              answer: "A",
              explanation:
                "A complete Section D entry: what was excluded, why, who agreed, and what to do next. Short-form entries miss the documentary point — clarity protects both the inspector and the duty holder."
            }
          ]
        },
      ]
    },
    {
      id: "section-3",
      title: "Section 3 — Process & Outputs",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt:
                "The principal legal driver behind periodic inspection and testing in the workplace is:",
              options: {
                A: "BS 7671 alone — it is statutory",
                B: "RIDDOR 2013",
                C: "The Electricity at Work Regulations 1989 (Reg 4(2)) and the Health and Safety at Work etc. Act 1974",
                D: "Building Regulations Part P"
              },
              answer: "C",
              explanation:
                "EAWR Reg 4(2) requires that systems be maintained so as to prevent danger; HSWA places the general duty on the employer. Periodic inspection and testing is the recognised means of demonstrating that the duty has been discharged."
            },
            {
              number: 2,
              prompt:
                "The principal legal driver behind periodic inspection and testing in privately rented dwellings in England is:",
              options: {
                A: "EAWR 1989 only",
                B: "The Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020",
                C: "Building Regulations Part P",
                D: "RIDDOR"
              },
              answer: "B",
              explanation:
                "The 2020 Regulations made periodic inspection a specific statutory duty on landlords in England — 5-yearly maximum, EICR copy to tenant within 28 days, action on C1/C2/FI within 28 days or sooner if specified."
            },
            {
              number: 3,
              prompt:
                "The output document of a periodic inspection of an existing installation is:",
              options: {
                A: "An EIC",
                B: "A MEIWC (Minor Works Certificate)",
                C: "An EICR with a Schedule of Inspections and a Schedule of Test Results",
                D: "A Domestic Visual Condition Report"
              },
              answer: "C",
              explanation:
                "EICR is the report on existing work, supported by the Schedule of Inspections (what was looked at) and the Schedule of Test Results (what was measured). The EIC and MEIWC are certificates issued for new work and minor additions/alterations."
            },
            {
              number: 4,
              prompt:
                "A C1 observation on an EICR means:",
              options: {
                A: "Improvement recommended",
                B: "Potentially dangerous — urgent remedial action required",
                C: "Danger present — risk of injury, immediate remedial action required",
                D: "Further investigation required"
              },
              answer: "C",
              explanation:
                "C1 = danger present. The inspector must make safe (or warn / isolate) and notify the duty holder in writing immediately. C1 makes the report Unsatisfactory."
            },
            {
              number: 5,
              prompt:
                "A C2 observation on an EICR means:",
              options: {
                A: "Danger present, immediate remedial action required",
                B: "Potentially dangerous — urgent remedial action required",
                C: "Improvement recommended",
                D: "Further investigation required"
              },
              answer: "B",
              explanation:
                "C2 = potentially dangerous (e.g. exposed conductor inside an enclosure, missing earth on Class I appliance). Remedial action is required urgently. Any C2 makes the EICR Unsatisfactory."
            },
            {
              number: 6,
              prompt:
                "A C3 observation on an EICR means:",
              options: {
                A: "Danger present",
                B: "Potentially dangerous",
                C: "Improvement recommended — does not in itself make the report Unsatisfactory",
                D: "Further investigation required"
              },
              answer: "C",
              explanation:
                "C3 = improvement recommended. The installation does not meet the current edition but is not in itself dangerous (e.g. old colours, no RCD where current rules now require one). C3 alone is Satisfactory with improvement."
            },
            {
              number: 7,
              prompt:
                "An FI observation on an EICR means:",
              options: {
                A: "Danger present",
                B: "Improvement recommended",
                C: "Further investigation is required without delay",
                D: "Potentially dangerous"
              },
              answer: "C",
              explanation:
                "FI = further investigation. Used where the inspector reasonably believes that revealing more of the installation will expose additional danger. FI makes the report Unsatisfactory until the investigation is closed."
            },
            {
              number: 8,
              prompt:
                "An EICR with a single C3 observation should be reported as:",
              options: {
                A: "Satisfactory with improvement recommended",
                B: "Unsatisfactory because any code is statutory",
                C: "Satisfactory with no codes",
                D: "Indeterminate"
              },
              answer: "A",
              explanation:
                "C3 alone is Satisfactory with improvement recommended. Only C1, C2 and FI make the report Unsatisfactory. The duty holder reviews C3 items but is not legally compelled to act on them."
            },
            {
              number: 9,
              prompt:
                "An EICR with a single C1 observation should be reported as:",
              options: {
                A: "Satisfactory if remedial work is in hand",
                B: "Unsatisfactory — any C1 makes the report Unsatisfactory at the time of inspection",
                C: "Indeterminate until C1 is resolved",
                D: "Satisfactory with improvement recommended"
              },
              answer: "B",
              explanation:
                "Any C1 makes the report Unsatisfactory. The condition at the time of inspection is what is recorded; later remedial work cannot retroactively change that — only a follow-up report or certificate can."
            },
            {
              number: 10,
              prompt:
                "The most accurate way to characterise periodic inspection and testing is as:",
              options: {
                A: "A guarantee that no fault will occur before the next inspection",
                B: "A condition snapshot — a defensible view of the installation on the day of inspection that does not guarantee future performance",
                C: "A maintenance schedule",
                D: "A replacement programme"
              },
              answer: "B",
              explanation:
                "PIT is a condition assessment at a moment in time. The interval is risk-based precisely because faults can develop between inspections — and the duty holder remains responsible for in-service safety throughout."
            },
            {
              number: 11,
              prompt:
                "When a C1 is identified during the inspection, the inspector should:",
              options: {
                A: "Wait for the report to be issued",
                B: "Make safe (or warn / isolate) on site, and notify the duty holder in writing immediately — typically by handing over a same-day Danger Notification",
                C: "Refer to the DNO",
                D: "Issue a verbal warning only"
              },
              answer: "B",
              explanation:
                "C1 = immediate action. BPG4 explicitly requires the inspector to make safe and notify the duty holder same-day in writing — typically a Danger Notification handed over before the inspector leaves site."
            },
            {
              number: 12,
              prompt:
                "An EICR is coded against:",
              options: {
                A: "The edition of BS 7671 in force when the installation was originally installed",
                B: "The edition of BS 7671 in force at the time of inspection",
                C: "Whichever edition gives the best result",
                D: "BS EN 60364 only"
              },
              answer: "B",
              explanation:
                "EICR is coded against the current edition of BS 7671 at the time of inspection. Departures from the current standard that don't constitute a danger are typically C3 (improvement recommended) — for example, old cable colours."
            },
            {
              number: 13,
              prompt:
                "Old (pre-2004) cable colours on an installation that is otherwise sound is typically coded:",
              options: {
                A: "C1",
                B: "C2",
                C: "C3",
                D: "FI"
              },
              answer: "C",
              explanation:
                "Old colours alone are not dangerous. C3 captures 'improvement recommended' — the installation does not meet the current standard, but the departure does not in itself create a danger."
            },
            {
              number: 14,
              prompt:
                "An exposed live conductor inside an open consumer unit is typically coded:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "A",
              explanation:
                "Exposed live conductor is immediate danger of contact / electric shock — C1. The inspector must make safe (cover, isolate, secure) and notify the duty holder immediately in writing."
            },
            {
              number: 15,
              prompt:
                "A loose neutral connection inside an unopened accessory cover, no immediate exposure to the user, is typically coded:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Loose neutral inside an enclosure is potentially dangerous — risk of overheating, arcing, fire — but not immediately exposed to direct contact. C2 covers 'potentially dangerous' and the report is Unsatisfactory."
            },
            {
              number: 16,
              prompt:
                "A low IR reading whose cause cannot be diagnosed during the visit is typically coded:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "D",
              explanation:
                "Symptom present, cause unknown, more work needed — that is FI. The report is Unsatisfactory until the FI is closed out by a follow-up visit and any consequent remedial work."
            },
            {
              number: 17,
              prompt:
                "An EICR set is incomplete without:",
              options: {
                A: "The Schedule of Inspections (what was looked at) and the Schedule of Test Results (what was measured)",
                B: "A photograph of the consumer unit only",
                C: "The DNO's permission to test",
                D: "A bill of materials"
              },
              answer: "A",
              explanation:
                "The EICR set is the report itself plus the Schedule of Inspections and Schedule of Test Results. Without the schedules, the report has no documentary basis for its codes and conclusions."
            },
            {
              number: 18,
              prompt:
                "BPG4 (Best Practice Guide 4) is the recognised guidance on:",
              options: {
                A: "RCD selection",
                B: "Coding of EICR observations (C1/C2/C3/FI), including a long list of typical observations and their codes",
                C: "Volt drop calculations",
                D: "Earthing system selection"
              },
              answer: "B",
              explanation:
                "BPG4 is the IET Best Practice Guide that lists typical EICR observations and their typical codes. It is the go-to reference when an inspector is unsure how to code a particular finding."
            },
            {
              number: 19,
              prompt:
                "An EICR is Unsatisfactory. The cover letter should:",
              options: {
                A: "Be omitted to keep the document short",
                B: "Explain in plain English what the codes mean, what action is recommended, the timescales, and any further investigation needed",
                C: "Repeat the report in technical terms only",
                D: "Promise that the inspector will do the remedial work"
              },
              answer: "B",
              explanation:
                "EICRs are technical. A plain-English cover letter is the standard way to deliver the implications without changing the formal report — what each code means, what the duty holder needs to do, and timescales."
            },
            {
              number: 20,
              prompt:
                "The result and extent of a periodic inspection and test should be recorded and given to:",
              options: {
                A: "The installation designer",
                B: "The original installer",
                C: "The person ordering the inspection (the duty holder)",
                D: "A representative of the distributor"
              },
              answer: "C",
              explanation:
                "Same principle as initial verification — the documentation goes to the person who ordered the work, who is the duty holder under EAWR (or landlord under ESS PRS) and needs the record to comply."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt:
                "An EICR records 'Satisfactory'. This means:",
              options: {
                A: "The installation is fully compliant with the current edition with no observations",
                B: "No C1, C2 or FI observations were raised; the installation is safe for continued use, with any C3 items recommended for improvement",
                C: "The installation has been certified for new use",
                D: "The installation has had remedial work completed"
              },
              answer: "B",
              explanation:
                "Satisfactory means no C1, C2 or FI. C3 items can be present and the report is still Satisfactory. The duty holder reviews C3 observations as improvement opportunities, but the installation is safe for continued use."
            },
            {
              number: 2,
              prompt:
                "An EICR records 'Unsatisfactory'. This means:",
              options: {
                A: "The installation must be replaced",
                B: "At least one C1, C2 or FI observation was raised; remedial action and/or further investigation is required to make the report Satisfactory",
                C: "The next inspection is due immediately",
                D: "The DNO must be notified"
              },
              answer: "B",
              explanation:
                "Unsatisfactory means at least one C1, C2 or FI. Remedial action (and follow-up confirmation) is required. The installation continues in use only with the dangerous items addressed and recorded."
            },
            {
              number: 3,
              prompt:
                "Periodic test sequences differ from initial verification because:",
              options: {
                A: "BS 7671 mandates a different sequence",
                B: "The installation is already energised and in service; the inspector applies appropriate tests using sampling and judgement, guided by GN3, rather than the prescribed initial-verification sequence",
                C: "Periodic uses different instruments",
                D: "Periodic skips IR testing"
              },
              answer: "B",
              explanation:
                "Periodic inspection happens on a live, in-use installation. The dead-test sequence used at initial verification can't always be applied — the inspector picks appropriate tests using sampling and judgement, guided by GN3."
            },
            {
              number: 4,
              prompt:
                "An EICR identifies an RCD that does not operate when the test button is pressed. This is typically coded:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "An RCD that fails its built-in mechanical test has unproven protection. Typically C2 (potentially dangerous — protection cannot be relied on). On a TT installation where the RCD is the primary fault protection, this can rise to C1."
            },
            {
              number: 5,
              prompt:
                "An EICR identifies a missing CPC on a final circuit feeding a Class I appliance. The typical code is:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Missing CPC on a Class I circuit removes the protective measure for ADS — typically C2. Where exposed-conductive-parts of the appliance are accessible without barrier, the code can rise to C1."
            },
            {
              number: 6,
              prompt:
                "An EICR identifies a borrowed neutral between two circuits. The typical code is:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Borrowed neutrals are typically C2 (potentially dangerous — isolation of one circuit leaves a live neutral connection accessible elsewhere). The risk to anyone working on the apparently isolated circuit is significant."
            },
            {
              number: 7,
              prompt:
                "An EICR identifies a circuit running through a bedroom that has been over-extended such that the inspector suspects but cannot confirm a code-worthy issue without further isolation. The typical code is:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "D",
              explanation:
                "Suspect but unproven, requiring more work — FI. The report is Unsatisfactory until the FI is closed out and a code can be assigned (or removed)."
            },
            {
              number: 8,
              prompt:
                "An EICR observation that 'covers were missing from a junction box, exposing live conductors' is typically coded:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "A",
              explanation:
                "Exposed live conductor is direct contact danger — C1. The inspector should make safe immediately (refit cover, isolate, secure) and notify the duty holder same-day in writing."
            },
            {
              number: 9,
              prompt:
                "An EICR observation that 'the consumer unit is plastic, in an older domestic installation, with no signs of heat damage' is typically coded:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "C",
              explanation:
                "Plastic CU with no heat damage in an older domestic installation is typically C3 (improvement recommended — non-fire-rated enclosure on the escape route). Signs of heat damage push the code to C2 or C1 depending on severity."
            },
            {
              number: 10,
              prompt:
                "Periodic inspection in privately rented dwellings is governed by:",
              options: {
                A: "Building Regulations Part P alone",
                B: "ESS PRS Regulations 2020 (England) — 5-yearly max, supply within 28 days, remedial within 28 days for C1/C2/FI, local authority enforcement",
                C: "RIDDOR 2013",
                D: "EAWR Reg 14"
              },
              answer: "B",
              explanation:
                "ESS PRS 2020 is the regime for privately rented dwellings in England. The 5-year max, the 28-day supply duty, the 28-day remedial duty and local-authority enforcement are the headline points."
            },
            {
              number: 11,
              prompt:
                "An EICR with a C1 must be communicated to the duty holder:",
              options: {
                A: "On the final report",
                B: "Immediately and in writing — typically a same-day Danger Notification handed over before the inspector leaves site",
                C: "Only if remedial work is needed",
                D: "Within 28 days"
              },
              answer: "B",
              explanation:
                "C1 = immediate communication. BPG4 requires the inspector to make safe and notify the duty holder same-day in writing. Waiting until the formal report leaves the duty holder unaware while danger remains."
            },
            {
              number: 12,
              prompt:
                "An EICR records 'no covers on a junction box; conductor stripped back exposing copper, in a public corridor'. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "A",
              explanation:
                "Exposed live conductor in a public corridor is direct contact danger — C1. Public access removes any mitigation by 'restricted to skilled persons'."
            },
            {
              number: 13,
              prompt:
                "An EICR observation that 'no RCD protects sockets that may reasonably be used to supply outdoor equipment, on an installation in a domestic dwelling' is typically coded:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Missing RCD on sockets likely to feed outdoor equipment is potentially dangerous (BS 7671 Reg 411.3.3) — typically C2. The code recognises that the exposed-to-outdoor risk is real."
            },
            {
              number: 14,
              prompt:
                "An EICR observation that 'no main protective bonding to a metallic gas pipe at the point of entry' is typically coded:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Missing main bonding is potentially dangerous — exposed metal could rise to fault potential. C2. C1 if there is also evidence of the absence creating immediate danger (e.g. broken neutral on TN-C-S)."
            },
            {
              number: 15,
              prompt:
                "An EICR cover letter exists primarily to:",
              options: {
                A: "Replace the formal report",
                B: "Translate the formal report into plain language, summarise the codes and recommended actions, and set out timescales — without changing the technical content",
                C: "Allow the duty holder to argue the codes",
                D: "Be filed instead of the report"
              },
              answer: "B",
              explanation:
                "EICRs are technical. The cover letter is the plain-English bridge — what the codes mean, what to do, when to do it. It complements the report; it doesn't replace it."
            },
            {
              number: 16,
              prompt:
                "Periodic inspection is required because faults can develop in service that initial verification cannot anticipate. The legal foundation in the workplace is:",
              options: {
                A: "BS 7671 alone",
                B: "EAWR 1989 Reg 4(2) — duty to maintain so as to prevent danger",
                C: "Building Regulations Part P",
                D: "RIDDOR 2013"
              },
              answer: "B",
              explanation:
                "EAWR Reg 4(2) is the duty. Periodic inspection is the recognised technical means of demonstrating compliance, and BS 7671 / GN3 provide the standards and intervals."
            },
            {
              number: 17,
              prompt:
                "An EICR identifies a permanent missing label on the consumer unit (no circuit ID). Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "C",
              explanation:
                "Missing labelling alone is C3 (improvement recommended) — the installation works, but identifying and isolating circuits is harder than it should be. Improvement, not danger."
            },
            {
              number: 18,
              prompt:
                "An EICR identifies a Type AC RCD on a circuit feeding equipment that produces DC fault current (e.g. an EV charger or an inverter). The typical code is:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Type AC RCDs cannot reliably trip on DC residual current. On circuits with electronic loads producing DC fault current, the protection is unproven — typically C2 (potentially dangerous). The current edition requires Type A or above."
            },
            {
              number: 19,
              prompt:
                "An EICR observation that 'the disconnection time on a TN-S final circuit cannot be met because the measured Zs is significantly above the table value' is typically coded:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Disconnection time not met is potentially dangerous — fault current may persist long enough to cause shock or damage. Typically C2; C1 if the consequences are immediate (e.g. very high Zs or accessible exposed-conductive-parts on a public route)."
            },
            {
              number: 20,
              prompt:
                "An EICR's Schedule of Test Results captures:",
              options: {
                A: "Just the codes raised",
                B: "The actual measured values (Zs, R1+R2, IR, RCD trip times, etc.) for each circuit tested, plus the inspector's assessment of those values",
                C: "The duty holder's signature only",
                D: "The DNO's parameters only"
              },
              answer: "B",
              explanation:
                "The Schedule of Test Results is the documentary evidence behind the codes — the actual measurements per circuit. Without it, the codes have no defensible basis and the report is incomplete."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt:
                "BPG4 is published by the IET and gives:",
              options: {
                A: "RCD selection guidance",
                B: "A list of typical EICR observations and the recommended C1/C2/C3/FI code for each",
                C: "Earthing system design",
                D: "Volt drop tables"
              },
              answer: "B",
              explanation:
                "BPG4 is the standard reference for EICR coding. When an inspector is unsure how to code an observation, BPG4's typical-coding lists are the recognised industry baseline."
            },
            {
              number: 2,
              prompt:
                "An EICR observation that 'no main protective bonding to incoming metallic water pipe' is typically coded:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Missing main bonding is potentially dangerous — typically C2. The exposed pipework could rise to fault potential, and any persons in contact with both the pipe and earth could be exposed."
            },
            {
              number: 3,
              prompt:
                "The 28-day clock under ESS PRS Regs 2020 starts from:",
              options: {
                A: "The date of the EICR",
                B: "The date the report is supplied to the existing tenant — landlord must supply within 28 days of the EICR",
                C: "The date the local authority requests the report",
                D: "The date a tenant moves in"
              },
              answer: "B",
              explanation:
                "ESS PRS 2020: existing tenants get the EICR within 28 days of the inspection. The clock for that supply duty starts at the EICR date itself, not at any later trigger."
            },
            {
              number: 4,
              prompt:
                "An EICR Unsatisfactory result on a privately rented dwelling triggers a 28-day duty to:",
              options: {
                A: "Re-test the installation",
                B: "Complete remedial work for any C1/C2/FI and provide written confirmation to the tenant and to the local authority on request",
                C: "Notify the DNO",
                D: "Move the tenants out"
              },
              answer: "B",
              explanation:
                "ESS PRS 2020: 28-day remedial duty (or sooner if the inspector specifies). Written confirmation goes to the tenant and to the local authority on request. Re-testing is not the statutory step; remedial work and confirmation are."
            },
            {
              number: 5,
              prompt:
                "An inspector finds a C1. They must, in priority order:",
              options: {
                A: "Make safe (or warn / isolate) immediately, notify the duty holder in writing same day, then complete the formal report",
                B: "Wait until the formal report",
                C: "Tell the tenant only",
                D: "Refer to the DNO and leave"
              },
              answer: "A",
              explanation:
                "C1 is immediate. Make safe first; notify the duty holder same-day in writing; complete the formal report afterwards. The order matters — danger is removed before paperwork is finalised."
            },
            {
              number: 6,
              prompt:
                "An EICR Schedule of Inspections lists items that have been:",
              options: {
                A: "Tested with measured values",
                B: "Visually inspected against the BS 7671 / Schedule of Inspection items",
                C: "Replaced during the visit",
                D: "Ordered for replacement"
              },
              answer: "B",
              explanation:
                "Schedule of Inspections covers what was looked at — visual checks against the standard items (cable connections, IDs, identifications, signs of damage, etc.). Tests with measured values go on the Schedule of Test Results."
            },
            {
              number: 7,
              prompt:
                "An EICR identifies a final circuit where measured Zs is 1.3 Ω, BS 7671 tabulated maximum is 1.37 Ω. Applying the GN3 80% rule of thumb the result is:",
              options: {
                A: "Pass — the measured value is below the table value",
                B: "Borderline / fail under the rule of thumb — 80% of 1.37 Ω is approximately 1.10 Ω, and 1.3 Ω is above that limit",
                C: "Fail because Zs is never measurable",
                D: "Pass automatically"
              },
              answer: "B",
              explanation:
                "GN3 rule of thumb: measured cold Zs should be no more than 80% of the table value to allow for conductor heating. 1.37 × 0.8 = 1.096 Ω. A reading of 1.3 Ω fails the rule of thumb and should be investigated, not waved through."
            },
            {
              number: 8,
              prompt:
                "Test sequences for periodic inspection are:",
              options: {
                A: "Mandated in BS 7671 Section 65",
                B: "Selected by the inspector using GN3 as guidance and the installation's risk profile as the driver — judgement-led, not prescribed",
                C: "Mandated by the DNO",
                D: "Mandated by the local authority"
              },
              answer: "B",
              explanation:
                "Unlike initial verification, periodic doesn't have a prescribed test sequence. The inspector selects the appropriate tests using GN3 and the risk profile, applying sampling where appropriate and live testing only where dead testing isn't practicable."
            },
            {
              number: 9,
              prompt:
                "A C2 made the EICR Unsatisfactory. The duty holder under EAWR has to:",
              options: {
                A: "Take reasonable action to remove the danger as soon as practicable",
                B: "Wait until the next inspection cycle",
                C: "Replace the entire installation",
                D: "Disregard the C2 because it is not a C1"
              },
              answer: "A",
              explanation:
                "C2 = potentially dangerous and must be acted on. EAWR's duty to maintain so as to prevent danger applies — the action must be reasonable, proportionate and timely, and the report Unsatisfactory until resolved."
            },
            {
              number: 10,
              prompt:
                "A privately rented dwelling EICR is Unsatisfactory due to FI. Under ESS PRS 2020 the landlord must:",
              options: {
                A: "Wait for the report to be reissued without action",
                B: "Arrange the further investigation, complete any consequent remedial work, and obtain written confirmation within 28 days (or sooner if the inspector specifies)",
                C: "Ignore the FI",
                D: "Re-test in 12 months"
              },
              answer: "B",
              explanation:
                "FI also makes the report Unsatisfactory under ESS PRS. The landlord must arrange the further investigation and any consequent remedial work within 28 days, with written confirmation."
            },
            {
              number: 11,
              prompt:
                "An EICR identifies an old porcelain fuse-carrier consumer unit with no overload protection and no RCDs in a privately rented dwelling. The inspector should code this:",
              options: {
                A: "C3 (improvement recommended)",
                B: "Typically C2 (potentially dangerous — significantly below current standards), with possible escalation to C1 if there are signs of overload or damage",
                C: "C1 always",
                D: "FI only"
              },
              answer: "B",
              explanation:
                "Old consumer units without modern protection are typically C2 — significantly below current standards, no RCD protection where now required. Escalation to C1 follows specific evidence (heat damage, exposed live, etc.)."
            },
            {
              number: 12,
              prompt:
                "An EICR finds a damaged fixed accessory cover that is no longer locked or secured. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Damaged cover that no longer keeps live parts behind a barrier is typically C2 (potentially dangerous — direct contact possible if the cover moves). Where the cover is missing entirely and live parts are exposed, the code rises to C1."
            },
            {
              number: 13,
              prompt:
                "An EICR observation that 'main bonding conductors are sized 6 mm² where 10 mm² is required for the supply' is typically coded:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Undersized main bonding fails to provide the required equipotential at fault — typically C2 (potentially dangerous). Where the consequences become immediate (e.g. broken PEN on TN-C-S), the code rises to C1."
            },
            {
              number: 14,
              prompt:
                "A privately rented dwelling EICR identifies one C2. The landlord arranges remedial work within 28 days. The follow-up document is:",
              options: {
                A: "A new EICR",
                B: "Written confirmation that the remedial work has been completed (typically a Minor Works Certificate or a letter from the contractor) supplied to the tenant and to the local authority on request",
                C: "A Domestic Visual Condition Report",
                D: "An EIC for the whole installation"
              },
              answer: "B",
              explanation:
                "ESS PRS 2020 expects written confirmation of remedial completion. A MEIWC for the work or a contractor letter confirming the remedial action and any retest results is the typical document."
            },
            {
              number: 15,
              prompt:
                "An EICR Schedule of Test Results columns typically include:",
              options: {
                A: "Just the test instrument used",
                B: "Circuit identification, conductor sizes, RCD type, R1+R2, IR (L-N, L-E, N-E), Zs measured, RCD trip times, polarity check",
                C: "Just RCD trip times",
                D: "Just the circuit name"
              },
              answer: "B",
              explanation:
                "Full Schedule of Test Results captures circuit ID, conductors, protective device, RCD details, all measured values, plus the polarity check. Without that, the report cannot defend its codes."
            },
            {
              number: 16,
              prompt:
                "An EICR is dated and signed. The signing inspector must:",
              options: {
                A: "Be the company secretary",
                B: "Be a competent person who has personally carried out (or directly supervised and verified) the inspection and testing",
                C: "Be the apprentice on site",
                D: "Be the duty holder"
              },
              answer: "B",
              explanation:
                "Competent person who has carried out (or supervised and verified) the work signs the report. Sign-off is a personal professional act — the signer is accountable for the codes raised."
            },
            {
              number: 17,
              prompt:
                "An EICR identifies a circuit feeding a sauna where the IP rating of the accessories is below the requirement for the special location zone. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Wrong IP rating in a special location is typically C2 (potentially dangerous — water/steam ingress can lead to insulation breakdown). The location-specific zoning is intended to manage that risk; failure to meet it is significant."
            },
            {
              number: 18,
              prompt:
                "An EICR is signed Unsatisfactory but the duty holder asks for it to be re-issued as Satisfactory once remedial work is complete. The defensible response is:",
              options: {
                A: "Re-issue as Satisfactory after the remedial work",
                B: "The original EICR records condition at the time of inspection and is not amended retrospectively. A new follow-up report or certificate covers the remedial work; the original is archived",
                C: "Re-issue without comment",
                D: "Refuse to engage further"
              },
              answer: "B",
              explanation:
                "Snapshot principle. The original EICR stands as a record of the day. Remedial work is documented separately — typically a follow-up EICR or a MEIWC for the specific repairs."
            },
            {
              number: 19,
              prompt:
                "A landlord under ESS PRS 2020 fails to commission an EICR. The local authority can:",
              options: {
                A: "Take no action",
                B: "Require the landlord to act, take remedial action themselves and recover costs, and impose a financial penalty up to £30,000 per breach",
                C: "Cancel the tenancy",
                D: "Notify the DNO"
              },
              answer: "B",
              explanation:
                "Local authority enforcement is significant. They can require action, do the work themselves and recover costs, and impose financial penalties up to £30,000 per breach. Multiple breaches stack."
            },
            {
              number: 20,
              prompt:
                "An EICR is Satisfactory but contains five C3 observations. The duty holder is:",
              options: {
                A: "Required to action all C3 observations within 28 days",
                B: "Encouraged to consider the C3 observations but is not legally compelled to act on them — the report is Satisfactory regardless",
                C: "Required to commission a new EICR",
                D: "Required to switch off the installation"
              },
              answer: "B",
              explanation:
                "C3 = improvement recommended. The report is Satisfactory. The duty holder may schedule the C3 work as part of routine maintenance, but there is no statutory deadline as there is for C1/C2/FI."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt:
                "An EICR observation that 'no SPD on a domestic installation in a low-risk area' is typically coded:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "C",
              explanation:
                "Missing SPD where current rules now require one, on an older installation that is otherwise compliant, is typically C3 (improvement recommended). It is a departure from the current edition but does not in itself create a danger."
            },
            {
              number: 2,
              prompt:
                "An EICR observation that 'an exposed conductive part is not connected to the CPC' is typically coded:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Unbonded exposed conductive part removes the protective measure for ADS — typically C2. Where the part is on a public route or in a wet area, the code can escalate to C1."
            },
            {
              number: 3,
              prompt:
                "Periodic inspection of construction-site temporary supplies is typically required at intervals of:",
              options: { A: "3 months", B: "1 year", C: "3 years", D: "5 years" },
              answer: "A",
              explanation:
                "GN3 typically gives 3 months for construction-site installations. The combination of mechanical abuse, weather and continuous reconfiguration drives the short interval."
            },
            {
              number: 4,
              prompt:
                "An EICR observation that 'a circuit has no main earth at the consumer unit' is typically coded:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "A",
              explanation:
                "Missing main earth means the protective measure is non-functional — fault disconnection cannot be assured. Typically C1. The inspector should make safe (typically isolate the affected installation) and notify the duty holder same-day in writing."
            },
            {
              number: 5,
              prompt:
                "An EICR identifies a missing CPC at a metallic accessory. The typical code is:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Missing CPC at a metallic accessory removes the protective measure — typically C2. Escalation to C1 follows where the accessory is exposed to direct touch and could rise to fault potential."
            },
            {
              number: 6,
              prompt:
                "An EICR identifies a non-RCD-protected socket outlet in a privately rented dwelling that may reasonably be used for outdoor equipment. The typical code is:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Missing RCD on a likely-outdoor-feed socket is potentially dangerous (Reg 411.3.3) — typically C2. The current edition requires RCD protection; the older installation's failure to comply on this kind of socket is significant."
            },
            {
              number: 7,
              prompt:
                "An EICR cover letter, when used, is most effective when it:",
              options: {
                A: "Is technical and detailed",
                B: "Translates the codes into plain English, summarises action and timescales, and complements (does not replace) the formal report",
                C: "Argues against the codes",
                D: "Just lists the technical codes"
              },
              answer: "B",
              explanation:
                "The cover letter is the bridge between the technical EICR and the duty holder's understanding. Plain English, action items, timescales — it complements the formal report without changing its codes."
            },
            {
              number: 8,
              prompt:
                "EICR codes derive from the IET BPG4 — they are:",
              options: {
                A: "Statutory under BS 7671",
                B: "Industry-recognised guidance that gives a consistent basis for coding observations across inspectors",
                C: "Mandated by ESS PRS Regs",
                D: "Mandated by EAWR"
              },
              answer: "B",
              explanation:
                "BPG4 codes are guidance, but they are the recognised industry standard. Using them gives the duty holder a coding framework that any subsequent inspector can interpret consistently."
            },
            {
              number: 9,
              prompt:
                "An EICR can use 'NA' (not applicable) or 'LIM' (limitation) instead of a code where:",
              options: {
                A: "The inspector wants to skip the test",
                B: "The item does not apply to the installation (NA) or the item could not be inspected within the agreed scope (LIM, with reason)",
                C: "The duty holder asks",
                D: "The fee was low"
              },
              answer: "B",
              explanation:
                "NA where genuinely not applicable; LIM where outside the agreed scope (with reason in Section D). Both are legitimate alternatives to a code. Neither is a way to skip an item the inspector should have looked at."
            },
            {
              number: 10,
              prompt:
                "An EICR is signed by:",
              options: {
                A: "The duty holder",
                B: "The competent person who has carried out (or directly supervised and verified) the inspection and testing",
                C: "The DNO",
                D: "The local authority"
              },
              answer: "B",
              explanation:
                "Competent person who carried out the work signs. The duty holder typically counter-signs to confirm receipt and acceptance of any extent and limitations, but the inspection responsibility is the inspector's."
            },
            {
              number: 11,
              prompt:
                "An EICR identifies a CPC connected to a Class II appliance terminal. The typical code is:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "C",
              explanation:
                "CPC at a Class II appliance terminal is a workmanship issue, not in itself a danger — Class II equipment is double-insulated and the CPC has no functional role. Typically C3 (improvement recommended) — remove or isolate the CPC at the accessory."
            },
            {
              number: 12,
              prompt:
                "An EICR identifies an installation that is wired to the 15th edition (pre-1992) cable colours. The typical code is:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "C",
              explanation:
                "Old cable colours alone are not dangerous — C3 (improvement recommended). The installation is sound; the colours just don't match current convention. A clear warning notice at the consumer unit is usually all that is needed."
            },
            {
              number: 13,
              prompt:
                "An EICR identifies a dual-supply installation where the changeover does not fully break each supply (i.e. the two supplies could be paralleled). Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "A changeover that allows the two supplies to be paralleled is potentially dangerous — fault levels and protection coordination cannot be guaranteed. Typically C2; can rise to C1 if the consequences are immediate."
            },
            {
              number: 14,
              prompt:
                "An EICR identifies an RCD with the wrong rated residual current (e.g. 100 mA where 30 mA is required). Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Wrong rated residual current means the additional protection (typically required at 30 mA for human safety) is not provided — typically C2. C1 if the missing protection on a circuit creates an immediate danger (e.g. socket-outlets in a special location)."
            },
            {
              number: 15,
              prompt:
                "An EICR identifies a TN-C-S installation where there is no main protective bonding to the gas service. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Missing main bonding on TN-C-S is potentially dangerous — typically C2. Where there is evidence of broken PEN, missing earth at the origin or other immediate danger, the code rises to C1."
            },
            {
              number: 16,
              prompt:
                "An EICR observation that 'an installation does not meet current Section 715 IP rating requirements for an outdoor location' is typically coded:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Wrong IP rating in an outdoor location risks moisture ingress and insulation breakdown — typically C2. Direct evidence of damage / live parts exposed pushes the code to C1."
            },
            {
              number: 17,
              prompt:
                "Periodic inspection's place in the maintenance lifecycle is best described as:",
              options: {
                A: "A replacement programme",
                B: "A condition-assessment that informs the duty holder's wider maintenance and risk-management decisions, supporting EAWR compliance",
                C: "A cost-saving exercise",
                D: "A guarantee of zero faults"
              },
              answer: "B",
              explanation:
                "PIT is a condition-assessment exercise. It feeds into the duty holder's wider maintenance, replacement and risk-management decisions and is the recognised means of demonstrating EAWR compliance."
            },
            {
              number: 18,
              prompt:
                "An EICR identifies a plastic consumer unit on a TN-C-S domestic installation, with signs of localised heat damage at one of the breakers. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Heat damage in the consumer unit is potentially dangerous — typically C2 (risk of fire). Where the damage is severe or there is evidence of breaker malfunction, the code escalates to C1."
            },
            {
              number: 19,
              prompt:
                "An EICR identifies a sub-main where the protective conductor has not been adequately sized for fault current. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Undersized protective conductor on a sub-main risks failure to disconnect fault current safely — typically C2. C1 follows where the consequences are immediate (very large under-sizing or evidence of damage)."
            },
            {
              number: 20,
              prompt:
                "An EICR's overall assessment is determined by:",
              options: {
                A: "The total number of codes raised",
                B: "Whether any C1, C2 or FI is present (Unsatisfactory) — C3 alone is Satisfactory regardless of count",
                C: "The total cost of remedial work",
                D: "The duty holder's preference"
              },
              answer: "B",
              explanation:
                "Pass/fail of the overall assessment is binary on C1/C2/FI. C3 has no effect on the overall result regardless of how many are listed; only C1/C2/FI move the report to Unsatisfactory."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt:
                "The scope of Building Regulations Part P (England) is restricted to:",
              options: {
                A: "All workplaces",
                B: "Notifiable electrical work carried out in dwellings",
                C: "Construction sites only",
                D: "TT installations only"
              },
              answer: "B",
              explanation:
                "Part P is a Building Regulations duty covering notifiable electrical work in dwellings (England). It controls new and altered work in domestic premises but does not directly govern periodic inspection."
            },
            {
              number: 2,
              prompt:
                "ESS PRS 2020 financial penalty per breach can reach:",
              options: { A: "£500", B: "£5,000", C: "£30,000", D: "£100,000" },
              answer: "C",
              explanation:
                "Local authorities can impose penalties up to £30,000 per breach. Multiple breaches stack — failure to commission an EICR, failure to supply within timescales, failure to act on C1/C2/FI within 28 days."
            },
            {
              number: 3,
              prompt:
                "The Schedule of Test Results that accompanies an EICR is intended to record:",
              options: {
                A: "The codes raised only",
                B: "Per-circuit measurements (R1+R2, IR, Zs, RCD trip times) and the inspector's assessment of those values",
                C: "Just the duty holder's signature",
                D: "Just the cover letter"
              },
              answer: "B",
              explanation:
                "Per-circuit measured values are the documentary basis for the codes. Without the Schedule of Test Results, the EICR has no defensible foundation for its conclusions."
            },
            {
              number: 4,
              prompt:
                "An EICR identifies an old metal-clad consumer unit in a domestic kitchen with no signs of damage. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "C",
              explanation:
                "Old metal-clad CU with no damage is typically C3 (improvement recommended) — the kitchen environment is a candidate for upgraded protection (RCDs, AFDDs in current edition), but the installation is not in itself dangerous."
            },
            {
              number: 5,
              prompt:
                "An EICR identifies an unswitched live socket in a public corridor, where the cover has been removed and the live conductor is accessible. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "A",
              explanation:
                "Exposed live conductor on a public corridor is direct contact danger — C1. The inspector should make safe (refit/secure or isolate) immediately and notify the duty holder same-day in writing."
            },
            {
              number: 6,
              prompt:
                "An EICR identifies a final circuit feeding a bathroom that has no supplementary equipotential bonding and no RCD. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Bathroom with no RCD and no supplementary bonding is potentially dangerous — typically C2. The current edition relies on 30 mA RCD protection in special locations; the absence is significant. C1 if there is evidence of damaged exposed-conductive-parts that could rise to fault potential."
            },
            {
              number: 7,
              prompt:
                "An EICR cover letter is typically used to:",
              options: {
                A: "Replace the formal report",
                B: "Translate codes and observations into plain language and recommend action and timescales",
                C: "List the test instruments used",
                D: "Itemise the inspector's fee"
              },
              answer: "B",
              explanation:
                "Cover letters complement the formal report by giving the duty holder a plain-English summary of the codes, recommended actions, and timescales. They do not replace the technical EICR."
            },
            {
              number: 8,
              prompt:
                "An EICR observation that 'one circuit has been altered with non-compliant cable colours; otherwise satisfactory' is typically coded:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "C",
              explanation:
                "Altered colours alone are not dangerous — C3 (improvement recommended). A warning notice at the consumer unit and identification at the affected accessory is what is needed; the wiring continues to function safely."
            },
            {
              number: 9,
              prompt:
                "Periodic inspection in agricultural premises is governed primarily by:",
              options: {
                A: "ESS PRS Regs 2020",
                B: "EAWR 1989 and HSWA 1974, with BS 7671 / GN3 as the recognised technical means",
                C: "Building Regulations Part P",
                D: "RIDDOR 2013"
              },
              answer: "B",
              explanation:
                "Agricultural premises are workplaces — EAWR + HSWA apply. BS 7671 / GN3 provide the standards and the typical 3-year interval. ESS PRS is residential-tenancy specific; Part P is dwellings; RIDDOR is incident reporting."
            },
            {
              number: 10,
              prompt:
                "Periodic test sequences for an in-service installation are:",
              options: {
                A: "Mandated by BS 7671 to follow the initial-verification sequence",
                B: "Selected by the inspector using GN3 as guidance and the installation's risk profile as the driver — judgement-led, with appropriate tests applied where dead testing is practicable",
                C: "Mandated by the DNO",
                D: "Always live"
              },
              answer: "B",
              explanation:
                "Periodic is judgement-led; initial verification is prescribed. The inspector chooses appropriate tests, samples where reasonable, dead-tests by default, and live-tests as the documented exception."
            },
            {
              number: 11,
              prompt:
                "An EICR identifies a missing earth electrode on a TT installation. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "A",
              explanation:
                "TT installation without an earth electrode means there is no fault path. Typically C1 (immediate danger — fault disconnection cannot occur). The inspector should make safe (typically isolate the affected installation) and notify the duty holder immediately."
            },
            {
              number: 12,
              prompt:
                "An EICR observation that 'no warning notice for non-standard cable colours at the consumer unit' is typically coded:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "C",
              explanation:
                "Missing warning notice alone is C3 (improvement recommended). The installation works, but a future inspector or tradesperson needs to be alerted that mixed colours are present. A simple notice fixes it."
            },
            {
              number: 13,
              prompt:
                "An EICR identifies an underrated supply cable that has been overloaded for the connected demand. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Overloaded cable on a real-world basis is potentially dangerous — typically C2 (risk of insulation breakdown and fire). C1 follows when there is evidence of immediate damage (charring, severe heating)."
            },
            {
              number: 14,
              prompt:
                "An EICR identifies a circuit where the protective device has been replaced with a higher rating without checking conductor capacity. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Oversized protection means the cable can be overloaded without the device tripping — potentially dangerous (C2). Where there is evidence the cable is already damaged or has been overloaded historically, the code can rise to C1."
            },
            {
              number: 15,
              prompt:
                "Periodic inspection of a swimming pool plant room finds an unbonded metallic enclosure. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Unbonded metallic enclosure in a special location is typically C2 — the supplementary equipotential is the protective layer of the pool's safety strategy. C1 follows where direct evidence shows the enclosure has risen to fault potential."
            },
            {
              number: 16,
              prompt:
                "An EICR observation that 'the duty holder has not provided documentation of past inspections' is typically coded:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "C",
              explanation:
                "Missing documentation alone is C3 (improvement recommended) — the duty holder's record-keeping has gaps, but the installation may be safe. The inspector recommends starting fresh and keeping records from this EICR forward."
            },
            {
              number: 17,
              prompt:
                "An EICR identifies a 17th edition installation in a building used as offices. The 18th edition is current. The departures from the 18th are typically coded:",
              options: {
                A: "All as C1",
                B: "Each departure is individually assessed; many are typically C3 (improvement recommended) where the departure does not in itself create danger, with C1/C2 reserved for actual safety issues",
                C: "All as C2",
                D: "All as FI"
              },
              answer: "B",
              explanation:
                "Edition departures are not automatically dangerous. Each is individually assessed against actual condition and consequence. Many become C3 (improvement); a smaller number become C2 or C1 where the gap creates a current-day danger."
            },
            {
              number: 18,
              prompt:
                "An EICR is Unsatisfactory due to one C2. The duty holder asks the inspector to remove the C2 because they will fix it tomorrow. The defensible response is:",
              options: {
                A: "Remove the C2",
                B: "Refuse — the EICR records condition at the time of inspection. A follow-up document (typically a MEIWC for the remedial work) records the subsequent fix",
                C: "Issue Unsatisfactory but add a verbal note",
                D: "Refer to the DNO"
              },
              answer: "B",
              explanation:
                "Snapshot principle. The EICR records what was found on the day. Subsequent remedial work is captured by a separate document. The original EICR is archived as the historical record; it is not amended retrospectively."
            },
            {
              number: 19,
              prompt:
                "An EICR identifies a privately rented dwelling with one C1 (immediate danger) and three C3s. Under ESS PRS 2020 the landlord must:",
              options: {
                A: "Action the C1 within 28 days (or sooner if specified) and supply written confirmation; consider but is not legally compelled to action the C3s",
                B: "Action everything in 28 days",
                C: "Action C1 only when convenient",
                D: "Refer to the DNO"
              },
              answer: "A",
              explanation:
                "ESS PRS 2020: 28-day duty applies to C1, C2 and FI. C3 is not a statutory deadline — the duty holder reviews these as improvements. The C1 has the same-day inspector duty (notification in writing) on top of the 28-day landlord duty."
            },
            {
              number: 20,
              prompt:
                "The output of a periodic inspection is fundamentally:",
              options: {
                A: "A guarantee of fault-free operation",
                B: "A documented, defensible condition assessment of the installation as it stood on the day of inspection — the EICR with its schedules, codes, and limitations",
                C: "A purchase order",
                D: "A maintenance schedule"
              },
              answer: "B",
              explanation:
                "The EICR is a documented, defensible snapshot. It records what was inspected, what was tested, what was found, and what could not be reached — and the duty holder's responsibility to act on the codes and to manage in-service safety thereafter."
            }
          ]
        },
      ]
    },
    {
      id: "section-4",
      title: "Section 4 — Periodic Inspection Practice Bank",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt:
                "A ring final circuit is tested. Step 2 (L/N at socket) reads 0.3 Ω. Step 3 (L/CPC at socket) reads no continuity. A possible reason is:",
              options: {
                A: "Line and neutral reversed at the socket",
                B: "Line and CPC reversed at the socket",
                C: "Insulation resistance is too high",
                D: "Neutral and CPC reversed at the socket"
              },
              answer: "D",
              explanation:
                "If N and CPC are reversed at the socket, the L/N test still reads continuity (it goes via what is now the CPC ring), so the value looks normal — but L/CPC reads open because it's now testing through the disconnected neutral end."
            },
            {
              number: 2,
              prompt:
                "Which of these is NOT a requirement of periodic inspection and testing?",
              options: {
                A: "Confirming by inspection during construction and on completion that the installation complies with the current edition of BS 7671",
                B: "Confirming that disconnection times are met",
                C: "A detailed visual examination of the installation",
                D: "Carrying out appropriate tests"
              },
              answer: "A",
              explanation:
                "Inspection during construction and on completion is initial verification (Part 6, Chapter 64), not periodic inspection. Periodic I&T is carried out on existing in-service installations to assess current safety, not to verify the original install."
            },
            {
              number: 3,
              prompt:
                "An IR test on a 230 V circuit gives 0.8 MΩ. The first action is to:",
              options: {
                A: "Investigate where the fault is",
                B: "Increase the interval to the next periodic inspection",
                C: "Record it as a C2",
                D: "Record it as a C3"
              },
              answer: "A",
              explanation:
                "0.8 MΩ is below the 1 MΩ minimum for a 230 V circuit. The first action is to investigate and locate the fault, not to record and walk away. Don't code the observation until you understand the cause."
            },
            {
              number: 4,
              prompt:
                "If a C1 is given to an observation, the client should be notified:",
              options: {
                A: "Immediately and in writing that improvement is recommended to remove the danger",
                B: "On the final report that urgent remedial action is required",
                C: "That you have removed the danger and repaired the fault",
                D: "On the final report that further investigation is necessary"
              },
              answer: "A",
              explanation:
                "C1 = Danger present; risk of injury. BPG4 requires the inspector to make safe (or warn / isolate) and notify the duty holder immediately in writing. Don't wait until the final report — the duty holder needs to know now."
            },
            {
              number: 5,
              prompt:
                "Maximum operating time of a non-time-delayed RCBO to BS EN 61009 when tested at 100% of its rated tripping current:",
              options: { A: "40 ms", B: "0.4 s", C: "300 ms", D: "200 ms" },
              answer: "C",
              explanation:
                "BS EN 61009 general-type RCBO: max trip time at 1× IΔn = 300 ms; at 5× IΔn = 40 ms. The 40 ms figure is the well-known one, but it's the 5× test, not the 1× test."
            },
            {
              number: 6,
              prompt:
                "Which of these is a defect?",
              options: {
                A: "CPCs connected to Class II equipment",
                B: "RCD does not operate when the test button is pressed",
                C: "Cable colours to the 15th edition",
                D: "Absence of RCDs to circuits supplying chillers in a supermarket"
              },
              answer: "B",
              explanation:
                "An RCD that fails its built-in mechanical test is a clear defect — protection is unproven. Old colours and CPCs at Class II terminals are typically C3 observations. RCD requirements depend on application."
            },
            {
              number: 7,
              prompt:
                "The periodic test sequence may be undertaken in a different order to initial verification because:",
              options: {
                A: "It prevents indirect contact",
                B: "It follows the BS 7671 sequence and the installation can be decommissioned",
                C: "The inspector must follow the GN3 sequence",
                D: "The installation will already be energised and only appropriate tests need to be applied"
              },
              answer: "D",
              explanation:
                "Periodic inspection happens on a live, in-use installation. The dead-test sequence used at initial verification can't always be applied — the inspector picks appropriate tests using sampling and judgement, guided by GN3."
            },
            {
              number: 8,
              prompt:
                "If a low IR value is measured, the inspector should:",
              options: {
                A: "Record the result and assess it against BS 7671",
                B: "Carry out fault finding and further investigations",
                C: "Carry out a half-split technique to locate the fault",
                D: "Test with line and neutral connected to earth"
              },
              answer: "B",
              explanation:
                "A low IR reading means there is a fault — not just a value to record. The inspector investigates further (which may then include half-splitting or additional tests). 'Record and assess' alone leaves the duty holder with a known fault and no diagnosis."
            },
            {
              number: 9,
              prompt:
                "Periodic inspection and testing is carried out, so far as reasonably practicable, for:",
              options: {
                A: "Ensuring the safety of persons and that portable equipment is not damaged or deteriorated",
                B: "Ensuring the installation is under effective supervision in normal use",
                C: "The safety of persons and livestock against the effects of electric shock and burns",
                D: "Confirming the installation will only give protection against direct contact"
              },
              answer: "C",
              explanation:
                "BS 7671 651.1 — periodic I&T verifies, so far as reasonably practicable, the safety of persons and livestock against electric shock and burns, protection against fire and damage by heat, that the installation is not damaged so as to impair safety, and that the installation is not defective."
            },
            {
              number: 10,
              prompt:
                "A failure to agree the extent and limitations could result in:",
              options: {
                A: "The client being liable for faults on excluded circuits",
                B: "The inspector being held responsible for faults on excluded circuits",
                C: "Inspection of cables concealed within walls",
                D: "Test results being invalidated"
              },
              answer: "B",
              explanation:
                "If the extent and limitations aren't documented and signed off, the report appears to cover everything — and the inspector picks up liability for anything that turns out to be defective. Agreeing in writing what's in and out of scope before starting is the protection."
            },
            {
              number: 11,
              prompt:
                "An EICR assesses the installation:",
              options: {
                A: "Against the inspector's view as a duty holder",
                B: "Against the edition of BS 7671 current at the time of installation",
                C: "Against the edition of BS 7671 current at the time of inspection",
                D: "Against the Electricity at Work Regulations 1989"
              },
              answer: "C",
              explanation:
                "EICR is coded against the current edition at the time of inspection. Departures from the current standard that don't constitute a danger are typically C3 (improvement recommended) — for example, old cable colours."
            },
            {
              number: 12,
              prompt:
                "Extent and limitations of the report should be agreed:",
              options: {
                A: "With the client before the tests commence",
                B: "Before the inspection with the client and other interested parties",
                C: "Before AND during the inspection with the client and other interested parties",
                D: "When writing the report with the client and other interested parties"
              },
              answer: "C",
              explanation:
                "Best practice (BPG4) — agree before, but be ready to revisit during, because real-world site conditions often force a change. Revised limitations get added to Section D of the EICR."
            },
            {
              number: 13,
              prompt:
                "A covering letter may be necessary with a completed report to:",
              options: {
                A: "Explain the implications of ignoring C3 observations",
                B: "Explain why the test results are assessed against standard values",
                C: "Explain the implications of the report with further advice and guidance",
                D: "Explain the technical terms used in BS 7671 and IET GN3"
              },
              answer: "C",
              explanation:
                "EICRs are technical and clients often need plain-English context — what the codes mean, what action is recommended, timeframes, and any further investigation needed. A covering letter is the standard way to deliver that without changing the formal report."
            },
            {
              number: 14,
              prompt:
                "A spur off a spur on a ring final circuit can be detected using:",
              options: {
                A: "A low-resistance ohmmeter",
                B: "An external loop impedance test",
                C: "An insulation resistance tester",
                D: "A phase rotation tester"
              },
              answer: "A",
              explanation:
                "Spur-off-a-spur shows in the R1+R2 step of the ring final test — the spurred socket reads a noticeably higher value than the in-ring sockets because current goes through the small CSA spur cable and back, not around the ring."
            },
            {
              number: 15,
              prompt:
                "Observations require further investigation only when:",
              options: {
                A: "A C1 or C2 has been given",
                B: "It should be recorded why a defect or departure has occurred",
                C: "It is expected further danger will be revealed",
                D: "A C1 has been given"
              },
              answer: "C",
              explanation:
                "FI (further investigation) is used when the inspector reasonably believes that revealing more of the installation will expose additional danger that hasn't been fully assessed. It is not a default action for every C1/C2."
            },
            {
              number: 16,
              prompt:
                "When testing earth fault loop impedance:",
              options: {
                A: "The protective bonding conductors should be connected",
                B: "The protective bonding conductors should be disconnected",
                C: "A sample of 3 readings should be taken",
                D: "The test voltage should be adjusted for heating effects"
              },
              answer: "A",
              explanation:
                "Bonding stays connected during EFLI — you're testing the impedance the fault current will see in service, with all parallel paths in place. Disconnecting bonding to isolate Ze is only done at the origin and only after safe isolation."
            },
            {
              number: 17,
              prompt:
                "The periodic tests applied are based on:",
              options: {
                A: "What is considered appropriate by the tester",
                B: "The requirements of GS38",
                C: "The mandatory list given in BS 7671",
                D: "The mandatory list given in Guidance Note 3"
              },
              answer: "A",
              explanation:
                "Unlike initial verification, BS 7671 doesn't prescribe a fixed mandatory test list for periodic inspection — the inspector selects appropriate tests using sampling, taking GN3 as guidance and the installation's risk profile as the driver."
            },
            {
              number: 18,
              prompt:
                "Increasing a conductor size will:",
              options: {
                A: "Decrease circuit current",
                B: "Decrease voltage drop",
                C: "Increase resistance",
                D: "Increase voltage drop"
              },
              answer: "B",
              explanation:
                "Bigger CSA = lower resistance = lower voltage drop for the same current. Conductor size doesn't change the load current itself."
            },
            {
              number: 19,
              prompt:
                "A 34 m radial circuit carrying 7 A has conductors with a voltage drop of 29 mV/A/m. The voltage drop is:",
              options: { A: "6.9 V", B: "5.9 V", C: "8.2 V", D: "9.2 V" },
              answer: "A",
              explanation:
                "Vd = (mV/A/m × A × m) ÷ 1000 = (29 × 7 × 34) ÷ 1000 = 6.902 V."
            },
            {
              number: 20,
              prompt:
                "Of the following, the item that should NOT be subject to inspection sampling is:",
              options: {
                A: "Ring final circuit accessories which give satisfactory inspection results",
                B: "Supplementary bonding when checking for damage, overheating and ageing",
                C: "Lighting circuit accessories which give satisfactory inspection results",
                D: "Main switchgear when checking for damage, overheating and ageing"
              },
              answer: "D",
              explanation:
                "Main switchgear is unique and central to every fault condition — you don't sample it, you inspect 100%. Sampling is reserved for repetitive distributed accessories where extrapolation from a representative subset is reasonable."
            },
            {
              number: 21,
              prompt:
                "A 20 A Type C circuit breaker is tested for Zs at 30 °C ambient. Using GN3 tables, the maximum measured value is approximately:",
              options: { A: "2.47 Ω", B: "0.93 Ω", C: "1.76 Ω", D: "2.93 Ω" },
              answer: "B",
              explanation:
                "Type C 20 A: Im = 10 × In = 200 A; Zs(table) = 230/200 = 1.15 Ω at full operating temperature. GN3 ambient correction for 30 °C is 0.8 × tabulated, giving max measured ≈ 0.92 Ω. Closest published value is 0.93 Ω."
            },
            {
              number: 22,
              prompt:
                "Switching off a supply to an office without consultation may result in:",
              options: {
                A: "Data loss",
                B: "An informed client",
                C: "Indirect contact",
                D: "Electric shock"
              },
              answer: "A",
              explanation:
                "Unscheduled isolation in an office crashes computers and servers — corrupted files, lost work, unhappy client. The agreed extent and limitations is exactly where this gets ironed out before the work starts."
            },
            {
              number: 23,
              prompt:
                "After agreeing the extent and limitations, a circuit cannot be switched off because it is in use. This should be recorded on:",
              options: {
                A: "The inspection schedule against the items inspected",
                B: "A letter to the client notifying of an invalidated inspection schedule",
                C: "The test result schedule in the remarks section",
                D: "EICR Section D"
              },
              answer: "D",
              explanation:
                "Section D records extent and limitations. A circuit that couldn't be tested for operational reasons is a limitation — record it there so the duty holder is aware that the circuit hasn't been verified."
            },
            {
              number: 24,
              prompt:
                "A low IR value is found, but the circuit cannot be isolated further during the visit because it supplies critical equipment. The most appropriate observation is:",
              options: {
                A: "C3 only, because no fault has been proven",
                B: "FI, with the limitation and reason recorded, because further investigation is required without delay",
                C: "No code, because the circuit was agreed as a limitation",
                D: "Satisfactory, provided the next interval is shortened"
              },
              answer: "B",
              explanation:
                "A suspicious low IR that cannot be diagnosed during the visit is exactly when FI is used. A limitation records why the inspector could not go further; it does not make the concern disappear. FI makes the report Unsatisfactory until resolved."
            },
            {
              number: 25,
              prompt:
                "A C2 observation is identified on an EICR, and the client promises to arrange remedial work next week. The overall assessment of the report should be:",
              options: {
                A: "Satisfactory, because the client has agreed to repair it",
                B: "Unsatisfactory, because any C2 makes the report Unsatisfactory at the time of inspection",
                C: "Satisfactory if there are no C1 observations",
                D: "Deferred until the client chooses a contractor"
              },
              answer: "B",
              explanation:
                "The EICR records condition at the time of inspection. Any C1, C2 or FI makes the result Unsatisfactory. Later remedial work needs written confirmation or a follow-up certificate; it does not alter the original finding."
            },
            {
              number: 26,
              prompt:
                "During a sampled inspection, two of ten sampled lighting points show the same missing CPC sleeving and loose termination. The inspector should normally:",
              options: {
                A: "Leave the sample at 10 because a sample size must not change once agreed",
                B: "Increase the sample size for similar lighting points and extend towards full inspection if the pattern continues",
                C: "Ignore the repeated issue because it is only accessory-level",
                D: "Record one generic C3 and stop inspecting"
              },
              answer: "B",
              explanation:
                "Sampling is conditional on the sample being representative. Repeated defects increase the likelihood that the unsampled population has the same defect, so the sample must expand and may become 100%."
            },
            {
              number: 27,
              prompt:
                "Which item should NOT be sampled during periodic inspection?",
              options: {
                A: "Identical office socket-outlets on a large radial circuit",
                B: "Identical lighting points in a repeated suspended-ceiling layout",
                C: "Main switchgear and the origin earthing/bonding arrangements",
                D: "A run of similar dado trunking accessories"
              },
              answer: "C",
              explanation:
                "Origin, main switchgear and main earthing/bonding are central to every protective measure. They are inspected directly — never sampled. Sampling is for repeated distributed items."
            },
            {
              number: 28,
              prompt:
                "An agreed limitation on an EICR is acceptable only when it is:",
              options: {
                A: "Used to avoid recording a defect the inspector has already seen",
                B: "Agreed with the client, recorded clearly with the reason, and does not conceal an observed dangerous or potentially dangerous condition",
                C: "Added after the report is issued to shorten the document",
                D: "Used for every circuit that takes longer than expected to test"
              },
              answer: "B",
              explanation:
                "Limitations are legitimate when access, isolation or operational restrictions prevent inspection or testing. They must be agreed and recorded. They are not a way to downgrade or hide an observed defect — once danger is seen, it must be coded and communicated."
            },
            {
              number: 29,
              prompt:
                "On a TT installation, an RCD that fails its built-in test button is typically coded:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "A",
              explanation:
                "On TT, the RCD is the primary protective measure for fault disconnection (TT relies on RCD for ADS). An RCD that fails its built-in test on TT is typically C1 — the protective measure is unproven and the consequences are immediate."
            },
            {
              number: 30,
              prompt:
                "An IR reading of >999 MΩ on a 230 V final circuit is:",
              options: {
                A: "Satisfactory — well above the 1 MΩ minimum",
                B: "A fault — IR cannot be infinite",
                C: "An instrument error",
                D: "Unsatisfactory — too high"
              },
              answer: "A",
              explanation:
                ">999 MΩ is the typical IR-tester upper limit and means insulation is well above the 1 MΩ minimum. The result is satisfactory; it does not indicate a fault. The 1 MΩ minimum is the BS 7671 acceptance threshold."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt:
                "On a ring final circuit test, R1+R2 readings at three sockets read 0.5 Ω, 0.5 Ω and 1.2 Ω. The 1.2 Ω socket is most likely:",
              options: {
                A: "On the ring directly",
                B: "Spurred from the ring (lone spur)",
                C: "Wired with reverse polarity",
                D: "Disconnected from the ring"
              },
              answer: "B",
              explanation:
                "Spurred sockets read approximately double the in-ring R1+R2 because current goes through 2.5 mm² in one direction (not parallel paths). 1.2 vs 0.5 is roughly the ratio expected for a single spur. Spur-off-spur reads even higher."
            },
            {
              number: 2,
              prompt:
                "An RCD trip-time test at 1× IΔn on a general-type RCD to BS EN 61008. Maximum allowable time:",
              options: { A: "40 ms", B: "150 ms", C: "300 ms", D: "500 ms" },
              answer: "C",
              explanation:
                "BS EN 61008 general-type RCD: 300 ms at 1× IΔn, 40 ms at 5× IΔn. The 40 ms figure is the popular memory but applies at the 5× test, not the 1× test."
            },
            {
              number: 3,
              prompt:
                "A polarity check at a socket reads OK on the test instrument. The defensible interpretation is:",
              options: {
                A: "L is at the L terminal, N is at the N terminal — polarity correct",
                B: "Polarity is irrelevant once installed",
                C: "Reversed polarity always on cleared circuits",
                D: "Polarity is only tested at the consumer unit"
              },
              answer: "A",
              explanation:
                "Polarity check confirms L is at the L terminal and N is at the N terminal. Reversed polarity is a fault — typically C2 because protective devices are not in the L conductor and the user can be exposed to live N pin."
            },
            {
              number: 4,
              prompt:
                "An IR test result on a 230 V final circuit reads 1.5 MΩ. The defensible response is:",
              options: {
                A: "Pass — above the 1 MΩ minimum",
                B: "Investigate further — values close to the minimum may indicate developing faults; record observation",
                C: "Fail — below the minimum",
                D: "Test the wrong way round"
              },
              answer: "B",
              explanation:
                "1.5 MΩ is technically above the 1 MΩ pass threshold but is suspiciously close. GN3 recommends investigation of values close to the limit — they often indicate the start of insulation degradation."
            },
            {
              number: 5,
              prompt:
                "The dead-test sequence used at initial verification is:",
              options: {
                A: "Continuity of CPCs and bonding, ring continuity, IR, polarity",
                B: "IR, polarity, ring continuity, continuity of CPCs",
                C: "Polarity, ring continuity, IR, continuity",
                D: "Variable — there is no recognised sequence"
              },
              answer: "A",
              explanation:
                "Initial verification dead-test sequence (BS 7671 Section 64) — continuity of CPCs and bonding, ring continuity, IR, polarity. The sequence is prescribed for initial; for periodic it is not — the inspector chooses appropriate tests using GN3 guidance."
            },
            {
              number: 6,
              prompt:
                "An EICR identifies a Type AC RCD on a circuit feeding an EV charger. The typical code is:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Type AC RCDs cannot reliably trip on DC residual current. EV chargers can produce DC fault current; the protection is unproven — typically C2 (potentially dangerous). Type A or above is required for these loads in current edition."
            },
            {
              number: 7,
              prompt:
                "An installation has been altered by adding a new circuit. Documentation for the altered work is:",
              options: {
                A: "Recorded on the EICR cover letter only",
                B: "An EIC (or MEIWC if minor) for the altered work, separately from any EICR",
                C: "Just an annotation on the test results schedule",
                D: "An updated DNO record"
              },
              answer: "B",
              explanation:
                "New work and additions are certified by EIC (or MEIWC for minor work). The EICR is for periodic condition assessment of existing in-service work — alterations have their own document."
            },
            {
              number: 8,
              prompt:
                "An R1+R2 measurement reads 1.2 Ω on a circuit. Calculated cold Zs is approximately:",
              options: {
                A: "Ze + 1.2 Ω, where Ze is the supply impedance",
                B: "1.2 Ω alone",
                C: "Ze − 1.2 Ω",
                D: "Ze × 1.2"
              },
              answer: "A",
              explanation:
                "Zs = Ze + (R1+R2). The cold value is then corrected upward (typically by the GN3 80% rule of thumb against the table value) to allow for conductor heating in service."
            },
            {
              number: 9,
              prompt:
                "An EICR has multiple departures from the current edition. The defensible action is:",
              options: {
                A: "List one C3 covering everything",
                B: "Code each departure individually with reasoning, against actual condition and consequence",
                C: "Skip the codes",
                D: "Default everything to C2"
              },
              answer: "B",
              explanation:
                "Each departure is individually assessed. Some become C3 (improvement), others C2 (potentially dangerous), others stay as Satisfactory observations. The EICR should reflect the actual condition and risk, item by item."
            },
            {
              number: 10,
              prompt:
                "The inspector finds a TN-C-S installation where the gas service has lost its main bonding due to recent gas-meter work. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Missing main bonding on TN-C-S is potentially dangerous (C2) — risk of metallic services rising to fault potential, particularly in a broken-PEN scenario. The code escalates to C1 if there is also evidence of broken PEN or other immediate danger."
            },
            {
              number: 11,
              prompt:
                "A 32 A Type B circuit measures Zs = 1.10 Ω cold. Tabulated maximum is 1.37 Ω. Applying the GN3 80% rule of thumb:",
              options: {
                A: "Pass — measured below table",
                B: "On the limit — 80% of 1.37 Ω is 1.096 Ω; the reading should be investigated and not waved through",
                C: "Always fail",
                D: "Not assessable"
              },
              answer: "B",
              explanation:
                "GN3 rule of thumb: measured cold Zs ≤ 80% of table value. 1.37 × 0.8 = 1.096 Ω. A reading of 1.10 Ω is right on the limit and should be investigated — temperature correction, conductor sizing and fault path all warrant a closer look."
            },
            {
              number: 12,
              prompt:
                "A periodic inspection is interrupted by a local power cut. The inspector should:",
              options: {
                A: "Continue without interruption",
                B: "Stop testing, ensure the affected installations are safe to re-energise when power returns, and record the interruption in the EICR",
                C: "Test live without comment",
                D: "Refer to the DNO"
              },
              answer: "B",
              explanation:
                "Power interruptions during testing complicate results. The inspector pauses, ensures safe re-energisation, and notes the interruption — partial results from before the cut may need re-doing depending on what was being tested."
            },
            {
              number: 13,
              prompt:
                "The supply impedance Ze on a domestic TN-C-S installation is typically:",
              options: { A: "0.05-0.35 Ω", B: "5-10 Ω", C: "0 Ω", D: "100 Ω" },
              answer: "A",
              explanation:
                "TN-C-S supply impedance Ze is typically a fraction of an Ohm. Distributors quote a maximum (often 0.35 Ω at the cut-out) but actual values are often lower. TT installations typically have much higher Ze due to electrode resistance."
            },
            {
              number: 14,
              prompt:
                "Periodic inspection of an installation that has been modified without records — the inspector should:",
              options: {
                A: "Refuse the inspection",
                B: "Investigate, document the as-found state, code as appropriate (C2/C3/FI depending on findings) and recommend records be created from this point forward",
                C: "Issue Satisfactory regardless",
                D: "Refer to the DNO"
              },
              answer: "B",
              explanation:
                "Undocumented modifications are common. The inspector documents what is found, codes against actual condition, and recommends formal records from this point onward. The EICR itself becomes the new baseline document."
            },
            {
              number: 15,
              prompt:
                "An EICR identifies an installation where the consumer unit has Type AC RCBOs but the loads include LED drivers and electronic dimmers. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Electronic loads can produce DC residual current that Type AC RCDs cannot reliably trip on. The current edition requires Type A as a minimum where DC fault current is possible — typically C2. C3 if there is an established case for low DC content (rare in modern lighting)."
            },
            {
              number: 16,
              prompt:
                "An IR test on a 400 V three-phase circuit. The minimum acceptable IR is:",
              options: { A: "0.5 MΩ", B: "1 MΩ", C: "5 MΩ", D: "10 MΩ" },
              answer: "B",
              explanation:
                "Minimum IR for nominal voltages up to 500 V is 1 MΩ (BS 7671 Table 64.1). The test voltage at 400 V nominal is 500 V DC. The 1 MΩ threshold is the same as for 230 V circuits."
            },
            {
              number: 17,
              prompt:
                "An EICR Schedule of Test Results entry shows R1+R2 = 0.42 Ω, Zs = 0.46 Ω. The implied Ze is approximately:",
              options: { A: "0.04 Ω", B: "0.42 Ω", C: "0.88 Ω", D: "Cannot be calculated" },
              answer: "A",
              explanation:
                "Ze = Zs − (R1+R2) = 0.46 − 0.42 = 0.04 Ω. A very low Ze suggests a TN-C-S supply with a parallel earth path (for example, bonded metallic services). The result is consistent with a typical urban TN-C-S installation."
            },
            {
              number: 18,
              prompt:
                "Continuity of CPCs is tested using:",
              options: {
                A: "A low-resistance ohmmeter (typically 200 mA test current)",
                B: "An IR tester at 500 V DC",
                C: "A loop tester",
                D: "An RCD tester"
              },
              answer: "A",
              explanation:
                "Low-resistance ohmmeter at typical 200 mA test current. The test current overcomes any oxidation on contacts and gives a stable mΩ-range reading. IR, loop and RCD testers are for different tests entirely."
            },
            {
              number: 19,
              prompt:
                "An EICR finds a domestic installation where the bonding to the gas pipe is in 6 mm² but the supply requires 10 mm² (TN-C-S, supply earth >35 mm² CSA). Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Undersized main bonding fails to provide the required equipotential at fault. Typically C2 (potentially dangerous). The current edition requires sizing per the supply earth conductor."
            },
            {
              number: 20,
              prompt:
                "An RCD tested at 5× IΔn must trip within:",
              options: {
                A: "40 ms (general-type) or 50-150 ms (S-type/time-delayed)",
                B: "300 ms regardless of type",
                C: "1 s",
                D: "10 ms"
              },
              answer: "A",
              explanation:
                "BS EN 61008 general-type RCD: 40 ms at 5× IΔn. Time-delayed S-type has a higher (50-150 ms typical) value. The 5× test ensures the RCD operates fast enough to provide additional protection at high fault current."
            },
            {
              number: 21,
              prompt:
                "Inspection sampling escalates because:",
              options: {
                A: "Cost rises",
                B: "Each defect found in the sample increases the likelihood that the unsampled population contains similar defects, requiring confidence to be rebuilt with a larger sample",
                C: "Time pressure",
                D: "Customer preference"
              },
              answer: "B",
              explanation:
                "Sampling is a confidence exercise. Defects found undermine the assumption that the sample is representative; the only response is a larger sample. Persistent defects justify 100% testing of the affected population."
            },
            {
              number: 22,
              prompt:
                "An EICR records 'no protective conductor at one socket; circuit otherwise continues to operate'. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Missing CPC at a socket means the protective measure is non-functional for any Class I appliance plugged in. Typically C2; can rise to C1 if the socket is in a high-risk area or the metallic accessory could rise to fault potential."
            },
            {
              number: 23,
              prompt:
                "The inspector cannot complete an RCD trip-time test because the residual-current load is too high (large CPD leakage). The defensible response is:",
              options: {
                A: "Skip the test silently",
                B: "Investigate the leakage, code it appropriately if persistent, and either test after remedial work or record it as a limitation/FI with reason",
                C: "Test live without comment",
                D: "Refer to the DNO"
              },
              answer: "B",
              explanation:
                "High residual leakage that prevents testing is itself a finding. The inspector investigates the cause (faulty appliance, accumulated leakage from many electronic loads), codes if persistent, and either retests after remedial action or treats as a limitation/FI."
            },
            {
              number: 24,
              prompt:
                "An EICR identifies an electrically-heated underfloor heating mat where the IR is below the minimum. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Low IR on an underfloor heating mat is potentially dangerous (C2) — the mat is in continuous use with bare feet on the floor above. The cause needs investigation; if exposed conductive parts are at fault potential during use, the code escalates to C1."
            },
            {
              number: 25,
              prompt:
                "A 6 A Type B MCB has a tabulated maximum Zs of approximately:",
              options: { A: "7.67 Ω", B: "1.37 Ω", C: "0.92 Ω", D: "23.3 Ω" },
              answer: "A",
              explanation:
                "Type B 6 A: Im = 5 × In = 30 A; Zs(table) = 230/30 ≈ 7.67 Ω. The actual figure in BS 7671 Table 41.3 is around 7.67 Ω at full operating temperature. 80% measured equals roughly 6.13 Ω."
            },
            {
              number: 26,
              prompt:
                "An EICR observes a non-RCD-protected lighting circuit in a domestic installation. Cable is partially concealed in the wall. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Cables concealed in walls less than 50 mm deep require RCD protection (Reg 522.6.202). Where the cable is not RCD-protected and is concealed at less than this depth, the code is typically C2. C3 if the cable is in a metal sleeve / earthed enclosure giving compliant routing."
            },
            {
              number: 27,
              prompt:
                "An EICR has a single FI observation. The overall result:",
              options: {
                A: "Satisfactory because no codes were raised",
                B: "Unsatisfactory until the FI is closed out by follow-up investigation",
                C: "Indeterminate",
                D: "Satisfactory with C3"
              },
              answer: "B",
              explanation:
                "FI alone makes the report Unsatisfactory. The follow-up investigation may downgrade to a lesser code or remove the concern entirely — but until that closure happens, the report stays Unsatisfactory."
            },
            {
              number: 28,
              prompt:
                "Periodic inspection of an installation supplying a swimming pool zone — the supplementary equipotential bonding should:",
              options: {
                A: "Be tested for continuity (typically R ≤ 0.05 Ω) between exposed-conductive-parts and extraneous-conductive-parts within the zone",
                B: "Be disconnected for the duration of the test",
                C: "Be omitted from the test",
                D: "Be tested with a loop tester only"
              },
              answer: "A",
              explanation:
                "Supplementary bonding in special locations is tested for continuity. The accepted threshold is roughly R ≤ 0.05 Ω, ensuring all conductive parts in the zone are at substantially the same potential during a fault."
            },
            {
              number: 29,
              prompt:
                "A 230 V circuit measures L-E IR = 1.0 MΩ exactly. The defensible response is:",
              options: {
                A: "Pass — meets the 1 MΩ minimum",
                B: "Investigate further — exactly at the minimum is borderline and may indicate developing fault",
                C: "Fail and code C2",
                D: "Fail and code C1"
              },
              answer: "B",
              explanation:
                "Exactly 1 MΩ meets the legal minimum but is borderline. GN3 recommends investigation — values right at the limit often indicate developing insulation issues, accumulated leakage, or measurement uncertainty."
            },
            {
              number: 30,
              prompt:
                "An RCD's built-in test button:",
              options: {
                A: "Tests the trip mechanism by simulating a residual current",
                B: "Tests the supply voltage",
                C: "Tests the line conductor",
                D: "Tests the conductor temperature"
              },
              answer: "A",
              explanation:
                "The built-in test button creates a simulated residual current through an internal resistor. If the RCD trips, the trip mechanism is functional. The button does not test the actual sensitivity or trip times — those need a calibrated tester."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt:
                "An EICR finds a 13 A FCU feeding a fixed appliance, but the FCU is wired with the L and N reversed at the FCU output. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Reversed polarity at a FCU is potentially dangerous (C2) — the fuse and switch are in the neutral conductor, leaving the fixed appliance unprotected and the live conductor unswitched. Fixing requires re-terminating at the FCU."
            },
            {
              number: 2,
              prompt:
                "A 2 m radial circuit carrying 10 A has 2.5 mm² cable rated 18 mV/A/m. Voltage drop is approximately:",
              options: { A: "0.36 V", B: "1.8 V", C: "3.6 V", D: "180 V" },
              answer: "A",
              explanation:
                "Vd = (mV/A/m × A × m) / 1000 = (18 × 10 × 2) / 1000 = 0.36 V. Short runs have negligible voltage drop because length is small; the 5% supply-voltage limit at the load is comfortably met."
            },
            {
              number: 3,
              prompt:
                "An IR test on a 400 V circuit should be carried out at:",
              options: { A: "250 V DC", B: "500 V DC", C: "1000 V DC", D: "230 V AC" },
              answer: "B",
              explanation:
                "BS 7671 Table 64.1: nominal voltage up to 500 V → IR test voltage 500 V DC, minimum 1 MΩ. SELV/PELV uses 250 V DC and 0.5 MΩ; HV uses 1000 V DC."
            },
            {
              number: 4,
              prompt:
                "A 25 m run of 1.5 mm² T+E cable carrying 6 A has approximate voltage drop using 29 mV/A/m:",
              options: { A: "4.35 V", B: "0.435 V", C: "1.45 V", D: "14.5 V" },
              answer: "A",
              explanation:
                "Vd = (29 × 6 × 25) / 1000 = 4.35 V. Within the 5% limit at 230 V (~11.5 V) but worth checking that combined runs and starting currents are also within limits."
            },
            {
              number: 5,
              prompt:
                "An EICR finds an installation where the installer has used a screw connection on a stranded conductor without a bootlace ferrule. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "C",
              explanation:
                "Stranded conductor in a screw terminal without a ferrule is C3 (improvement recommended) — workmanship issue. Where there is evidence of arcing or loose connection, the code escalates to C2."
            },
            {
              number: 6,
              prompt:
                "An EICR records 'all RCDs trip well within their permitted times'. The defensible test method for 30 mA RCDs at 5× IΔn:",
              options: {
                A: "Test current 150 mA, max 40 ms (general type)",
                B: "Test current 1.5 A, max 40 ms",
                C: "Test current 150 mA, max 300 ms",
                D: "Test current 15 mA, max 40 ms"
              },
              answer: "A",
              explanation:
                "30 mA × 5 = 150 mA test current, max 40 ms for general type per BS EN 61008. The 1× test is at 30 mA / 300 ms; the 5× test ensures rapid disconnection at higher fault current."
            },
            {
              number: 7,
              prompt:
                "An EICR identifies a corroded earth electrode on a TT installation. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Corroded electrode on TT is potentially dangerous — Ra rises and fault disconnection becomes unreliable. Typically C2; if Ra is so high that disconnection cannot occur, the code rises to C1."
            },
            {
              number: 8,
              prompt:
                "Ra (electrode resistance) on a TT installation should be:",
              options: {
                A: "≤ 1500 Ω if the RCD is 30 mA, calculated from 50 V / IΔn (typical max in domestic)",
                B: "Always 1 Ω or less",
                C: "Above 200 Ω",
                D: "Irrelevant for TT"
              },
              answer: "A",
              explanation:
                "Ra ≤ 50 / IΔn, so for 30 mA RCD: Ra ≤ 50 / 0.030 = 1667 Ω theoretical. Industry guidance often uses ≤ 200 Ω for stability — the lower the better. The 50 V threshold is the touch voltage for normal-condition locations."
            },
            {
              number: 9,
              prompt:
                "An EICR identifies a distribution board where the labelling on the breakers is mismatched with the actual circuits. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "C",
              explanation:
                "Mismatched labelling alone is C3 (improvement recommended) — the installation works, but isolating the right circuit during maintenance is harder than it should be. Improvement: relabel against verified circuit identification."
            },
            {
              number: 10,
              prompt:
                "An EICR observation that 'a circuit's neutral and CPC are linked at one accessory in error' is typically coded:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "N/CPC linked at an accessory is potentially dangerous (C2) — RCDs may nuisance-trip and fault current is shared between N and CPC. C1 follows where the linking creates an immediate danger or where exposed-conductive-parts are at fault potential."
            },
            {
              number: 11,
              prompt:
                "Periodic inspection of a privately rented dwelling uncovers a recent DIY alteration with no certificate. The inspector should:",
              options: {
                A: "Document the alteration, code as found (C2/C3/FI depending on actual condition), and recommend a competent person certifies the work",
                B: "Refuse the inspection",
                C: "Issue Satisfactory anyway",
                D: "Refer to the DNO"
              },
              answer: "A",
              explanation:
                "DIY alterations are common and need investigating. The inspector codes against actual condition; if the work is non-compliant the code can be C2 or higher. Recommendation: have it certified by a competent person via Building Control or a Part P scheme."
            },
            {
              number: 12,
              prompt:
                "An EICR finds an installation where the L and N have been swapped at the consumer unit. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "A",
              explanation:
                "Reversed L/N at the consumer unit is C1 — every protective device and switch in the installation is now in the neutral conductor; the line is unprotected throughout. Immediate action: make safe and notify the duty holder same-day in writing."
            },
            {
              number: 13,
              prompt:
                "An EICR observation that 'switches are wired in the neutral conductor on certain lighting circuits' is typically coded:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Switches in the neutral are potentially dangerous (C2) — the line conductor remains live to the lampholder when the switch is off, exposing anyone changing a bulb. Typical fix: rewire the switch in the line conductor."
            },
            {
              number: 14,
              prompt:
                "An EICR finds a TN-C-S installation where the supply earth has been disconnected at the consumer unit. The installation continues to function. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "A",
              explanation:
                "Disconnected supply earth on TN-C-S means the protective measure is not functional — fault disconnection cannot be assured. C1 (immediate danger). Make safe and notify same-day in writing."
            },
            {
              number: 15,
              prompt:
                "On an IR test, L-E reads 50 MΩ but L-N reads 0.3 MΩ. The defensible interpretation is:",
              options: {
                A: "There is a fault between the line and neutral — investigate further",
                B: "Pass — both above the minimum",
                C: "The IR tester is broken",
                D: "Reverse polarity"
              },
              answer: "A",
              explanation:
                "L-N below 1 MΩ is a fault. The high L-E reading rules out an earth fault at the same point but the low L-N is significant — typically a load left connected, an installed component (capacitor, MOV), or a wiring fault. Investigate before recording."
            },
            {
              number: 16,
              prompt:
                "An EICR identifies a circuit feeding a freezer in a privately rented dwelling on the same RCD as other circuits. The freezer trips once a week causing food loss. Typical observation:",
              options: {
                A: "Code as a C3 only (improvement recommended — segregate freezer onto a dedicated RCD/RCBO)",
                B: "Code as a C1 (immediate danger)",
                C: "Refer to the DNO",
                D: "No record needed"
              },
              answer: "A",
              explanation:
                "Nuisance-tripping affecting a freezer is improvement recommended (C3). Segregating the freezer onto a dedicated RCBO removes the nuisance and minimises losses. It is not in itself dangerous; the RCD is functioning correctly."
            },
            {
              number: 17,
              prompt:
                "An EICR finds a circuit where the protective conductor has been broken inside a junction box. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "A",
              explanation:
                "Broken CPC means the protective measure is non-functional for that circuit. Typically C1 — immediate danger if the circuit feeds Class I equipment. Make safe (typically isolate) and notify same-day."
            },
            {
              number: 18,
              prompt:
                "An EICR identifies a circuit with extra-low voltage equipment (12 V LEDs) where the isolating transformer is rated 230/12 V but is unfused on the secondary. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "C",
              explanation:
                "Unfused secondary on a SELV / PELV transformer is typically C3 (improvement recommended) — modern transformers integrate secondary protection, but the absence does not in itself create danger because the secondary is at extra-low voltage."
            },
            {
              number: 19,
              prompt:
                "An EICR records 'an RCD trips at exactly its rated residual current'. Per BS EN 61008 the test current at 1× IΔn:",
              options: {
                A: "May or may not trip the RCD — the standard does not require tripping at 1× IΔn, only that it must trip within 300 ms if it does",
                B: "Must trip within 40 ms",
                C: "Must not trip",
                D: "Must trip within 300 ms"
              },
              answer: "A",
              explanation:
                "BS EN 61008 says an RCD must trip between 0.5× and 1× IΔn — so at exactly 1× IΔn the RCD may or may not trip. If it does, the trip time must be within 300 ms (general type). The 5× test is the more reliable functional check."
            },
            {
              number: 20,
              prompt:
                "An EICR finds a TN-S installation with the sheath of the incoming cable used as the means of earthing. The sheath shows signs of corrosion. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Corroded TN-S earth sheath is potentially dangerous (C2) — the earth path may have high impedance and fault disconnection becomes unreliable. C1 if Zs measurements confirm the impedance is high enough that disconnection cannot occur."
            },
            {
              number: 21,
              prompt:
                "The voltage drop limit for a final circuit on a domestic installation, per BS 7671 Appendix 4:",
              options: { A: "5%", B: "3%", C: "1%", D: "10%" },
              answer: "B",
              explanation:
                "Appendix 4: lighting circuits 3%, other circuits 5% on a public LV supply (domestic typical). The lighting limit is tighter because flicker and dimming are noticeable to the user; sockets etc. tolerate larger drop."
            },
            {
              number: 22,
              prompt:
                "An EICR identifies an installation where IR tests are deferred because of connected sensitive electronic loads (e.g. a controller that cannot be IR-tested). The defensible response is:",
              options: {
                A: "Disconnect the sensitive load if possible, IR-test the circuit, reconnect; if disconnection is impossible, record as a limitation with reason and consider FI for the un-tested portion",
                B: "Apply IR test anyway",
                C: "Skip without record",
                D: "Issue Unsatisfactory automatically"
              },
              answer: "A",
              explanation:
                "Sensitive electronics cannot be IR-tested at 500 V DC. Standard practice: disconnect, IR test, reconnect. Where disconnection is not possible, record as a limitation; if there is a specific concern that cannot be addressed, raise FI."
            },
            {
              number: 23,
              prompt:
                "An EICR finds an installation where the consumer unit is correctly bonded but the gas pipe bonding is loose at the gas-pipe terminal. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Loose main bonding at the gas pipe is potentially dangerous (C2) — equipotential at fault is compromised. The fix is straightforward (tighten and confirm continuity), but the symptom is significant and warrants C2 coding."
            },
            {
              number: 24,
              prompt:
                "An EICR identifies a circuit feeding a fish tank pump in a domestic installation, with no RCD. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Fish tank circuits without RCD are potentially dangerous (C2). Water + electricity + accessible exposed parts is the classic case for additional protection. Type A or AC RCD at 30 mA is the typical fix."
            },
            {
              number: 25,
              prompt:
                "A circuit's R1+R2 has been measured cold at 0.65 Ω. To estimate Zs, the inspector must:",
              options: {
                A: "Add Ze (measured at the origin) to (R1+R2), then apply a temperature correction (or use the GN3 rule of thumb against the table value)",
                B: "Multiply R1+R2 by 10",
                C: "Subtract Ze from R1+R2",
                D: "Use R1+R2 alone"
              },
              answer: "A",
              explanation:
                "Zs(cold) ≈ Ze + (R1+R2). For comparison with the table (which is at full operating temperature), apply the GN3 80% rule of thumb to the table value, or correct R1+R2 upward using the cmin temperature factor."
            },
            {
              number: 26,
              prompt:
                "An EICR finds an installation where the consumer unit's main switch has been bypassed. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "A",
              explanation:
                "Bypassed main switch removes the means of isolating the entire installation in an emergency. Typically C1 (immediate danger). Make safe (typically reinstate isolation, or arrange for it to be reinstated) and notify same-day."
            },
            {
              number: 27,
              prompt:
                "An EICR records 'isolation could not be confirmed because the main switch is locked off but the keys are unavailable'. The defensible action is:",
              options: {
                A: "Open the main switch covers anyway",
                B: "Treat as a limitation, record the reason, recommend follow-up access; the inspection on the affected installation cannot be completed today",
                C: "Test live without comment",
                D: "Refer to the DNO"
              },
              answer: "B",
              explanation:
                "Inability to confirm isolation is a limitation. The inspector documents the reason, recommends follow-up access (typically with the keyholder present), and the affected installation cannot be tested today. Section D records the limitation."
            },
            {
              number: 28,
              prompt:
                "An EICR finds an installation where a loose connection has caused localised heat damage on a busbar. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Heat damage on a busbar is potentially dangerous (C2) — risk of fire propagation and connection failure. C1 if there is an active arc, severe charring, or evidence that fire is imminent. The fix: replace damaged components and re-terminate."
            },
            {
              number: 29,
              prompt:
                "An EICR records 'a 30 mA RCD trips at 22 mA actual residual'. Per BS EN 61008 this is:",
              options: {
                A: "Acceptable — the RCD must trip somewhere between 50% and 100% of IΔn, so 22 mA (≈73%) is within the standard",
                B: "A failure",
                C: "An over-trip",
                D: "An indication of damage"
              },
              answer: "A",
              explanation:
                "BS EN 61008 requires tripping between 0.5× and 1× IΔn — for 30 mA, between 15 mA and 30 mA. A trip at 22 mA is well within the acceptable range."
            },
            {
              number: 30,
              prompt:
                "An EICR's overall result is determined by:",
              options: {
                A: "Number of total observations",
                B: "Presence of any C1, C2 or FI (Unsatisfactory) versus none of those (Satisfactory)",
                C: "Inspector's preference",
                D: "Customer's preference"
              },
              answer: "B",
              explanation:
                "Overall pass/fail is binary on the C1/C2/FI test. C3 has no effect on the overall result. The number of observations doesn't change the rule — even one C1 makes the report Unsatisfactory."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt:
                "An EICR finds a domestic kitchen socket with no RCD protection where the socket is used to power a kettle. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Kitchen socket without RCD is typically C2 — current edition requires 30 mA RCD on socket-outlets. The kettle/water environment makes additional protection particularly relevant. C3 if the absence of RCD is for an older installation that otherwise meets earlier-edition requirements (rare in current practice)."
            },
            {
              number: 2,
              prompt:
                "An IR test on a SELV circuit (typically 12 V LED lighting) is performed at:",
              options: { A: "250 V DC", B: "500 V DC", C: "1000 V DC", D: "Not required" },
              answer: "A",
              explanation:
                "SELV / PELV up to 50 V is tested at 250 V DC, minimum 0.5 MΩ. The lower test voltage avoids damaging extra-low-voltage components."
            },
            {
              number: 3,
              prompt:
                "An EICR records 'measurements taken from the consumer unit; downstream measurements not taken at every accessory'. This sampling approach is:",
              options: {
                A: "Defensible if the agreed sampling rate covers a representative spread of accessories and the basis is recorded in Section D",
                B: "Indefensible because every accessory must be tested",
                C: "Defensible only if dwellings",
                D: "Defensible only on TT systems"
              },
              answer: "A",
              explanation:
                "Sampling at typical 10-20% spread across accessories is defensible. The CU is tested at 100%; downstream accessories sample at the agreed rate. Section D records the basis."
            },
            {
              number: 4,
              prompt:
                "An EICR finds an installation where the supply cable has been damaged by a roof leak. Insulation is visibly compromised. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "A",
              explanation:
                "Damaged insulation on a supply cable is direct fault risk and potential exposure of live conductors. Typically C1 (immediate danger). Make safe (typically isolate the affected portion) and notify same-day."
            },
            {
              number: 5,
              prompt:
                "An EICR finds an RCD that does not meet its 5× IΔn trip time but trips within 300 ms at 1× IΔn. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Failed 5× test is potentially dangerous (C2) — the RCD does not provide the required additional protection at high fault current. The 1× pass alone is not enough; both tests must be satisfied for the RCD to be considered functional."
            },
            {
              number: 6,
              prompt:
                "An EICR identifies a shared neutral on two single-phase circuits. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Shared neutral (borrowed) is potentially dangerous (C2) — isolation of one circuit leaves a live neutral connection accessible to anyone working on it. Modern wiring rules require separate neutrals; older installations are commonly retrofitted."
            },
            {
              number: 7,
              prompt:
                "Periodic inspection finds an installation where the supply impedance Ze is measured at 0.6 Ω (TN-C-S supply). The DNO has stated the maximum is 0.35 Ω. Typical action:",
              options: {
                A: "Investigate, report the discrepancy, recommend the DNO be informed (the supply is outside the published limit)",
                B: "Issue Satisfactory regardless",
                C: "Refer to the DNO with no further action",
                D: "Skip"
              },
              answer: "A",
              explanation:
                "Ze above the DNO's published limit is significant — the inspector reports the measured value, recommends the DNO investigate (the supply may have a fault or a poor connection), and codes the consequent risk on the EICR if it affects fault disconnection."
            },
            {
              number: 8,
              prompt:
                "An EICR finds a domestic installation where the supply is via a TT system but no main RCD is present. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "A",
              explanation:
                "TT installation without RCD has no fault-disconnection means — the electrode resistance alone cannot guarantee disconnection of an MCB at fault. Typically C1 (immediate danger)."
            },
            {
              number: 9,
              prompt:
                "An EICR finds an installation where the lighting circuit has been extended into a bathroom but the new fixtures are not in the correct IP rating for their zone. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Wrong IP rating in a bathroom zone is potentially dangerous (C2) — the location-specific zoning manages water-ingress risk and the failure to comply is significant. C1 follows where damage is already evident."
            },
            {
              number: 10,
              prompt:
                "An EICR finds an installation where a circuit's CPC is connected to a heating-system pipe inside the boiler cupboard. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "CPC connected to a pipe (rather than an enclosure earthing terminal) is potentially dangerous (C2) — the pipe is not a recognised protective conductor and may be replaced or removed without warning, breaking the earth path."
            },
            {
              number: 11,
              prompt:
                "An EICR finds a 100 mA RCD on a TT installation supplying a domestic dwelling, with no separate 30 mA RCD on socket circuits. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Domestic socket-outlets without 30 mA RCD additional protection is potentially dangerous (C2). The 100 mA RCD provides ADS for TT but does not give the additional protection (Reg 411.3.3) required for socket-outlets."
            },
            {
              number: 12,
              prompt:
                "An EICR finds a 230 V circuit measuring L-N IR = 5.0 MΩ but L-E = 0.4 MΩ. Defensible response:",
              options: {
                A: "Investigate the L-E fault — 0.4 MΩ is below the 1 MΩ minimum and indicates an insulation breakdown to earth",
                B: "Pass — average is above 1 MΩ",
                C: "Pass and code C3",
                D: "Issue Satisfactory automatically"
              },
              answer: "A",
              explanation:
                "0.4 MΩ L-E is a fault — below the 1 MΩ minimum. The high L-N reading means the fault is between line and earth specifically. Common causes: damaged insulation in a wall, moisture ingress, a connected appliance with a leakage problem."
            },
            {
              number: 13,
              prompt:
                "An EICR finds an installation where the protective conductor in T+E cable has been used as a current-carrying conductor (e.g. as a switched line). Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "A",
              explanation:
                "CPC used as a current-carrying conductor compromises the protective measure entirely — fault current cannot be routed safely. Typically C1 (immediate danger). The fix: rewire so the CPC is dedicated and protected."
            },
            {
              number: 14,
              prompt:
                "An RCD trip-time test result on a 30 mA RCD reads 28 ms at 5× IΔn. Per BS EN 61008:",
              options: {
                A: "Pass — well within the 40 ms maximum",
                B: "Fail — too fast",
                C: "Pass — exactly at the maximum",
                D: "Fail — outside the 300 ms range"
              },
              answer: "A",
              explanation:
                "BS EN 61008 max trip time at 5× IΔn for general type RCD is 40 ms. 28 ms is comfortably within. There is no minimum trip time; faster is better."
            },
            {
              number: 15,
              prompt:
                "An EICR finds a TN-C-S installation with main bonding to a metallic gas pipe in 6 mm². The supply earth is 16 mm². Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Main bonding requires sizing per the supply earth conductor. For a 16 mm² supply earth, 10 mm² main bonding is typical (Reg 544.1). 6 mm² is undersized — typically C2 (potentially dangerous)."
            },
            {
              number: 16,
              prompt:
                "An EICR finds a missing fire-alarm cable retention clip in a corridor. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "C",
              explanation:
                "Missing retention clip alone is C3 (improvement recommended) — the cable is supported but not to BS 5839 standard. C2 if the support is so inadequate that the cable could pull free during a fire."
            },
            {
              number: 17,
              prompt:
                "Periodic inspection finds an EV charger circuit with a Type AC RCD upstream. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Type AC RCD upstream of an EV charger is potentially dangerous (C2) — DC fault current can blind the RCD and prevent it from tripping. Current edition requires Type A as a minimum (or built-in 6 mA DC detection on the charger)."
            },
            {
              number: 18,
              prompt:
                "An EICR records 'CPC connected to Class II appliance terminal — workmanship issue'. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "C",
              explanation:
                "CPC at a Class II terminal is workmanship — not in itself dangerous because Class II is double-insulated and the CPC has no functional role. Typically C3 (improvement recommended) — remove or isolate the CPC at the accessory."
            },
            {
              number: 19,
              prompt:
                "An EICR finds an installation where the IP rating of a luminaire in a swimming pool zone is below the requirement. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Wrong IP rating in a special location (pool zone) is potentially dangerous (C2). C1 follows where there is already evidence of water ingress or damage; the location-specific zoning is intended to manage immediate risk."
            },
            {
              number: 20,
              prompt:
                "Periodic inspection of a rented dwelling — the inspector finds the fixed wiring is in good condition but a portable appliance has been left plugged in with a damaged flex. The defensible response is:",
              options: {
                A: "Note the damaged appliance flex separately (it is not part of the fixed installation), do not include in the EICR codes, and recommend the duty holder address PAT testing or replacement",
                B: "Code as C1 on the EICR",
                C: "Code as C2 on the EICR",
                D: "Issue Unsatisfactory based on the appliance"
              },
              answer: "A",
              explanation:
                "The EICR covers the fixed installation, not portable appliances. PAT testing is a separate regime. The inspector mentions the damaged flex as an observation outside the EICR codes, recommends action on portable appliance safety."
            },
            {
              number: 21,
              prompt:
                "An EICR finds an old installation with mixed-colours where a warning notice exists. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "Satisfactory observation" },
              answer: "D",
              explanation:
                "Old colours with a proper warning notice in place is a satisfactory observation — the installation has been correctly marked. Without the notice, the typical code is C3 (improvement recommended — fit notice)."
            },
            {
              number: 22,
              prompt:
                "An RCD test sequence — the inspector should test:",
              options: {
                A: "Built-in test button, then 1× IΔn (general 300 ms max), then 5× IΔn (general 40 ms max), recording the trip times",
                B: "Built-in test button only",
                C: "5× IΔn only",
                D: "Just the residual current"
              },
              answer: "A",
              explanation:
                "Standard RCD test: button (basic mechanical), then 1× IΔn, then 5× IΔn. Each test confirms a different aspect — mechanical operation, low-current trip, fast disconnection at high fault current. Trip times are recorded for both x1 and x5."
            },
            {
              number: 23,
              prompt:
                "An EICR records 'an extension lead used permanently for fixed appliance'. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "C",
              explanation:
                "Extension leads in permanent use for fixed appliances are improvement recommended (C3). The fix is to install a proper fixed circuit. C2 follows if there is evidence of overload or damage to the extension."
            },
            {
              number: 24,
              prompt:
                "An EICR finds a circuit where the CPC is sized smaller than required by Reg 543. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Undersized CPC fails to provide the required fault path — typically C2 (potentially dangerous). The fault current may not disconnect within the required time. C1 follows where the under-sizing is severe enough to prevent disconnection at all."
            },
            {
              number: 25,
              prompt:
                "Periodic inspection finds an installation where the consumer unit is mounted such that arc fault discharge could affect a wooden surface above it. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Plastic CU + wooden surroundings is potentially dangerous (C2 in current edition — non-fire-rated enclosure on combustible surface). C3 in older domestic installations where the original requirement was met. The current edition has tightened requirements significantly."
            },
            {
              number: 26,
              prompt:
                "An EICR finds an installation where the supply has been changed from TN-S to TN-C-S without bonding upgrade. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "TN-S to TN-C-S transition requires upgraded bonding (the supply earth is now combined and bonding sizing changes). Failure to upgrade is potentially dangerous (C2) — particularly for broken-PEN scenarios where bonded services would rise to fault potential."
            },
            {
              number: 27,
              prompt:
                "An EICR records 'continuity of CPC measured at 0.7 Ω on a circuit fed by 1.5 mm² T+E with a 20 m length'. The defensible interpretation is:",
              options: {
                A: "Compare to the expected value (mΩ/m × length) — a 1.5 mm² 20 m run typically reads about 0.4-0.5 Ω. 0.7 Ω is high and may indicate a poor termination",
                B: "Pass — any reading below 1 Ω is OK",
                C: "Fail — above 0.5 Ω",
                D: "Cannot be assessed"
              },
              answer: "A",
              explanation:
                "Comparing measured to expected catches workmanship issues. 1.5 mm² has resistance approx 12 mΩ/m, so 20 m → 0.24 Ω one way, 0.48 Ω there-and-back including CPC. 0.7 Ω is materially higher and warrants investigation."
            },
            {
              number: 28,
              prompt:
                "An EICR finds a circuit with an overloaded protective device (e.g. 32 A breaker on 2.5 mm² cable rated 24 A in its current method). Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Cable rated below the protective device rating is potentially dangerous (C2) — the device cannot protect the cable from overload. C1 follows where there is evidence of existing overheating or damage."
            },
            {
              number: 29,
              prompt:
                "Periodic inspection finds an installation where the labels on the consumer unit's MCBs do not match the actual circuits. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "C",
              explanation:
                "Mislabelled MCBs are improvement recommended (C3) — operationally inconvenient but not in itself dangerous. The fix: relabel against verified circuit identification. C2 only if the misleading label could lead someone to work on a live circuit they thought was isolated."
            },
            {
              number: 30,
              prompt:
                "An EICR is being signed off by the inspector. The defensible last check is:",
              options: {
                A: "Verify all measured values are recorded on the test results schedule, all observations are coded with reasoning, the extent and limitations are clearly recorded, and the cover letter (where used) is consistent",
                B: "Check the date only",
                C: "Check the test instrument calibration only",
                D: "Skip the final check"
              },
              answer: "A",
              explanation:
                "Final check is comprehensive: complete test results, coded observations, clear extent and limitations, consistent cover letter. The signed report represents the inspector's professional certification — gaps undermine the entire document."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt:
                "An EICR finds a TT installation supplied via a 100 mA S-type (delayed) RCD as the main switch, with 30 mA RCDs on individual circuits. Typical observation:",
              options: {
                A: "Satisfactory — discrimination is achieved by the time delay and per-circuit additional protection is in place",
                B: "Unsatisfactory — TT cannot use 100 mA",
                C: "Unsatisfactory — delayed RCDs cannot be main switches",
                D: "Unsatisfactory — RCDs cannot be combined"
              },
              answer: "A",
              explanation:
                "Layered RCD protection on TT (delayed main + 30 mA per circuit) gives discrimination and additional protection where required. The arrangement is the standard TT solution and is fully compliant."
            },
            {
              number: 2,
              prompt:
                "An EICR finds an installation where the only earth electrode is a single earth rod with measured Ra = 50 Ω. The 30 mA RCD trip time is 28 ms at 5× IΔn. Typical observation:",
              options: {
                A: "Satisfactory — 50 Ω with 30 mA RCD comfortably meets Ra ≤ 50 V / IΔn (1667 Ω theoretical)",
                B: "Unsatisfactory — Ra too high",
                C: "Unsatisfactory — single rod is forbidden",
                D: "Unsatisfactory — TT not allowed"
              },
              answer: "A",
              explanation:
                "Ra of 50 Ω with 30 mA RCD: touch voltage at fault = 0.030 × 50 = 1.5 V, way under 50 V. The protection requirement is comfortably met. Industry guidance often pushes for ≤ 200 Ω for stability, but the strict requirement is much higher."
            },
            {
              number: 3,
              prompt:
                "An IR test result shows >999 MΩ between L and E on a 230 V circuit. The interpretation is:",
              options: {
                A: "Pass — exceeds the IR tester's measurement range, well above the 1 MΩ minimum",
                B: "Fault — too high to be real",
                C: "Instrument error",
                D: "Reverse polarity"
              },
              answer: "A",
              explanation:
                ">999 MΩ is the typical IR-tester upper limit and means insulation is well above the 1 MΩ minimum. The result is satisfactory; it does not indicate a fault. Typical for new and well-maintained installations."
            },
            {
              number: 4,
              prompt:
                "Periodic inspection of a privately rented dwelling — the inspector finds an installation that has had a partial recent rewire (kitchen and bathroom only) with no certificate. The defensible response is:",
              options: {
                A: "Document the as-found state, code observations against actual condition, recommend the duty holder obtain a competent person's certificate for the rewire, and proceed with the EICR",
                B: "Refuse the inspection",
                C: "Issue Satisfactory regardless",
                D: "Refer to the local authority"
              },
              answer: "A",
              explanation:
                "Partial rewires without certificates are common in private rented stock. The inspector documents what is found, codes against actual condition, and recommends formal certification. The EICR captures the new baseline; the certification gap is the duty holder's to close."
            },
            {
              number: 5,
              prompt:
                "An EICR records 'Zs measured at the furthest point of the circuit; value 1.5 Ω against table maximum 1.92 Ω'. The defensible response is:",
              options: {
                A: "Apply the GN3 80% rule of thumb: 80% of 1.92 = 1.54 Ω. The reading is just below the limit and is satisfactory but worth recording",
                B: "Fail — above the limit",
                C: "Pass — well below the limit",
                D: "Cannot be assessed"
              },
              answer: "A",
              explanation:
                "GN3 rule of thumb: measured cold Zs ≤ 80% of table value. 1.92 × 0.8 = 1.54 Ω. A reading of 1.5 Ω is just below — satisfactory, but worth recording with the rationale because there is little margin."
            },
            {
              number: 6,
              prompt:
                "An EICR finds an installation where a circuit's polarity test reveals reversed polarity at one socket only. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Reversed polarity at a socket is potentially dangerous (C2) — protective devices in the L conductor are now in the N, leaving the user exposed to a live N pin. The fix is to re-terminate the socket correctly."
            },
            {
              number: 7,
              prompt:
                "Periodic inspection finds a TN-C-S domestic installation with a main bonding conductor in 16 mm². Supply earth is 16 mm². Typical observation:",
              options: {
                A: "Satisfactory — 16 mm² main bonding is at least equal to the supply earth (Reg 544.1) and exceeds the typical 10 mm² requirement for that supply size",
                B: "Unsatisfactory — over-sized",
                C: "Unsatisfactory — the bonding cannot exceed the supply earth size",
                D: "Unsatisfactory — main bonding must be 6 mm²"
              },
              answer: "A",
              explanation:
                "Main bonding sizing is per Reg 544.1 — typically 10 mm² for a 16 mm² supply earth. 16 mm² exceeds the requirement and is satisfactory. There is no upper limit on bonding sizing."
            },
            {
              number: 8,
              prompt:
                "An EICR finds an installation where the IR test result on a 230 V circuit is exactly 1 MΩ. The defensible response is:",
              options: {
                A: "Investigate — exactly at the minimum is borderline; record observation and consider FI if the cause cannot be determined",
                B: "Pass with no comment",
                C: "Fail and code C2",
                D: "Fail and code C1"
              },
              answer: "A",
              explanation:
                "Exactly 1 MΩ meets the minimum but offers no margin. GN3 recommends investigation — values at the limit often indicate developing insulation issues, accumulated leakage, or test-environment factors. The reading itself is technically satisfactory."
            },
            {
              number: 9,
              prompt:
                "Periodic inspection of a swimming pool finds the supplementary equipotential bonding conductor measures continuity of 0.04 Ω. Typical observation:",
              options: {
                A: "Satisfactory — within the typical 0.05 Ω guideline for SEB continuity",
                B: "Unsatisfactory — above 0.01 Ω",
                C: "Unsatisfactory — below 0.05 Ω",
                D: "Unsatisfactory — should be 1 Ω"
              },
              answer: "A",
              explanation:
                "Supplementary equipotential bonding is tested for continuity, with industry guidance often citing R ≤ 0.05 Ω. 0.04 Ω is satisfactory — all conductive parts in the zone are at substantially the same potential during a fault."
            },
            {
              number: 10,
              prompt:
                "An EICR finds an installation where the consumer unit is on a wooden backboard with a plastic CU in front of it. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Plastic CU on combustible backboard is potentially dangerous in current edition (C2) — fire risk if the CU experiences localised overheating or arc fault. The current standard requires non-combustible enclosures. C3 in older installations where evidence of damage is absent."
            },
            {
              number: 11,
              prompt:
                "An RCD on a TT installation has its trip-time test deferred because of nuisance-trip risk. The defensible response is:",
              options: {
                A: "Investigate the cause of the nuisance-trip risk; if the trip-time test is deferred, record as a limitation/FI with reason and recommend follow-up — TT relies on the RCD for fault disconnection",
                B: "Skip the test silently",
                C: "Issue Unsatisfactory automatically",
                D: "Refer to the DNO"
              },
              answer: "A",
              explanation:
                "Skipping RCD tests on TT is rarely defensible — the RCD is the protective measure. The inspector investigates the nuisance-trip cause, records the limitation if necessary, and raises FI for follow-up. The EICR captures the limitation honestly."
            },
            {
              number: 12,
              prompt:
                "An EICR finds an installation where the only labels on the consumer unit are illegible due to fading. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "C",
              explanation:
                "Faded labelling alone is C3 (improvement recommended) — the installation works, but identifying circuits during maintenance is harder. Fix: re-label against verified circuit identification."
            },
            {
              number: 13,
              prompt:
                "An EICR records 'all RCD tests passed; verified through built-in test buttons and 5× IΔn trip times'. The defensible read is:",
              options: {
                A: "Standard test set; the report supports a Satisfactory finding for the RCDs (subject to the rest of the inspection)",
                B: "Insufficient — must include 1× IΔn",
                C: "Insufficient — must include 0.5× IΔn",
                D: "Insufficient — must include time-of-day variation"
              },
              answer: "A",
              explanation:
                "Standard RCD test sequence includes the button and 5× IΔn (and optionally 1× IΔn). Built-in button + 5× pass is the typical baseline. The 1× test adds a consistency check but is not always required by all guidance."
            },
            {
              number: 14,
              prompt:
                "An EICR finds an installation where the supply impedance Ze is measured at 0.18 Ω on a TN-C-S supply. Typical observation:",
              options: {
                A: "Satisfactory — 0.18 Ω is well within the typical TN-C-S maximum of 0.35 Ω quoted by DNOs",
                B: "Unsatisfactory — above 0.1 Ω",
                C: "Unsatisfactory — below 0.5 Ω",
                D: "Unsatisfactory — TN-C-S has no Ze"
              },
              answer: "A",
              explanation:
                "DNOs typically quote a maximum Ze of 0.35 Ω for TN-C-S. 0.18 Ω is well within that limit and is satisfactory. The actual value depends on the supply's distance from the substation and the integrity of the PEN."
            },
            {
              number: 15,
              prompt:
                "Periodic inspection finds a circuit where the protective device is a BS 3036 rewireable fuse. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "C",
              explanation:
                "BS 3036 rewireable fuses are typically C3 (improvement recommended) — they meet the historical requirements but have limited fault-current performance and the user can rewire with the wrong wire size. The current edition typically uses BS 88 cartridge fuses or MCBs."
            },
            {
              number: 16,
              prompt:
                "An EICR finds an installation where the periodic inspection schedule was performed at the agreed sample rate. Two sampled accessories failed. The defensible record is:",
              options: {
                A: "Code each failed accessory, expand the sample to similar accessories on the same group, document the expanded scope, and record the patterns observed",
                B: "Code one generic C3 for the group",
                C: "Skip the rest",
                D: "Issue Satisfactory automatically"
              },
              answer: "A",
              explanation:
                "Each failure is individually coded; the sample expands to test the wider population. Documentation captures the agreed sample, the expanded scope, and the patterns observed."
            },
            {
              number: 17,
              prompt:
                "An EICR finds an installation where one MCB has a permanent damage to its toggle (cracked, but the breaker still operates). Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Damaged toggle is potentially dangerous (C2) — the operator cannot rely on the device's manual operation, isolation may be compromised, and the breaker may be exposed to ingress. The fix is to replace the breaker."
            },
            {
              number: 18,
              prompt:
                "An EICR records 'a 3 m run of 1.0 mm² T+E feeding a smoke alarm; 6 A protective device'. The defensible observation:",
              options: {
                A: "Satisfactory if the cable's installed current carrying capacity is at least 6 A and Zs / volt drop are within limits",
                B: "Unsatisfactory — 1.0 mm² is too small",
                C: "Unsatisfactory — smoke alarms must be on 1.5 mm²",
                D: "Unsatisfactory — must use 2.5 mm²"
              },
              answer: "A",
              explanation:
                "Smoke alarm circuits commonly use 1.0 mm² or 1.5 mm² T+E with a 6 A device. The defensible check is the cable's installed current capacity (depends on installation method), Zs at the alarm and volt drop. Done correctly, 1.0 mm² is satisfactory."
            },
            {
              number: 19,
              prompt:
                "An EICR records 'the loop tester read Zs = 0.42 Ω at the furthest point on a 32 A Type B circuit'. The defensible interpretation:",
              options: {
                A: "Compare to the GN3 80% of Table 41.3 limit (Type B 32 A: table 1.37 Ω, 80% = 1.10 Ω); 0.42 Ω is comfortably within and is satisfactory",
                B: "Fail — above 0.4 Ω",
                C: "Cannot be assessed",
                D: "Fail — below 1 Ω"
              },
              answer: "A",
              explanation:
                "32 A Type B: table 1.37 Ω; 80% = 1.10 Ω. A measured 0.42 Ω is comfortably within and is satisfactory. The check itself is whether the measured value (cold) is below 80% of the table value."
            },
            {
              number: 20,
              prompt:
                "An EICR finds an installation where the periodic inspection identifies a circuit feeding an outdoor socket without any RCD protection. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Outdoor socket without RCD is potentially dangerous (C2) — water and outdoor use require additional protection. The current edition mandates 30 mA RCD on outdoor sockets. C1 in extreme cases (broken accessory, water present)."
            },
            {
              number: 21,
              prompt:
                "An EICR records 'a 1.5 mm² 35 m run with 14.5 mV/A/m, carrying 5 A'. Voltage drop:",
              options: { A: "2.54 V", B: "0.25 V", C: "5.08 V", D: "0.51 V" },
              answer: "A",
              explanation:
                "Vd = (14.5 × 5 × 35) / 1000 = 2.5375 V ≈ 2.54 V. This is comfortably within the 5% (about 11.5 V at 230 V) socket limit and the 3% (about 6.9 V) lighting limit."
            },
            {
              number: 22,
              prompt:
                "Periodic inspection finds an installation with multiple SPDs at the consumer unit and at sub-distribution boards. Typical observation:",
              options: {
                A: "Satisfactory — coordinated SPD layers (Type 1/2 at origin, Type 2 or Type 2/3 at sub-DBs) is the recognised cascade",
                B: "Unsatisfactory — SPDs cannot be combined",
                C: "Unsatisfactory — single SPD only",
                D: "Unsatisfactory — SPDs are forbidden"
              },
              answer: "A",
              explanation:
                "Coordinated SPDs (Type 1/2 at origin, Type 2/3 downstream) is the recognised cascade design. Each layer protects against successively lower-energy events. The arrangement is satisfactory and is increasingly common in commercial and industrial installations."
            },
            {
              number: 23,
              prompt:
                "An EICR finds a circuit where the IR has been tested with the load (lighting controller) connected. The L-N reading is 0.5 MΩ. The defensible interpretation:",
              options: {
                A: "Re-test with the load disconnected; connected loads (capacitors, MOVs, controllers) routinely give low IR readings that do not indicate insulation faults",
                B: "Fail and code C2",
                C: "Fail and code C1",
                D: "Pass"
              },
              answer: "A",
              explanation:
                "Connected loads commonly skew IR readings — capacitors, EMI filters, MOVs and controllers all leak at IR test voltage. Standard practice: disconnect the load, re-test. If still low, the cable is faulty; if normal, the load was the issue."
            },
            {
              number: 24,
              prompt:
                "An EICR finds an installation where the means of isolating the supply has been compromised (e.g. main switch handle missing). Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "A",
              explanation:
                "Compromised isolation means the duty holder cannot safely isolate the supply for maintenance or in an emergency. Typically C1 (immediate danger). Make safe (typically arrange for a replacement handle or temporary isolation means) and notify same-day."
            },
            {
              number: 25,
              prompt:
                "Periodic inspection of a kitchen finds a socket-outlet with no RCD protection in a domestic installation. The cable is concealed in the wall at 80 mm depth. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Domestic socket without RCD is typically C2 (current edition requires 30 mA RCD on socket-outlets). The 80 mm concealment depth means Reg 522.6.202 (cables less than 50 mm) does not apply, but the socket itself still requires RCD protection."
            },
            {
              number: 26,
              prompt:
                "An EICR records 'two of seven sampled lighting points have rust on the metallic accessory backbox. The CPC is connected and continuous; no sign of fault penetration.' Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "C",
              explanation:
                "Rust on a backbox without fault penetration is typically C3 (improvement recommended) — workmanship/maintenance issue. C2 follows where the rust has compromised the integrity of the box, exposing live parts or breaking the CPC."
            },
            {
              number: 27,
              prompt:
                "An EICR records 'a 32 A Type B device measured Zs = 1.30 Ω cold'. The 80% rule of thumb against table value 1.37 Ω gives:",
              options: {
                A: "1.10 Ω — the measured 1.30 Ω fails the rule of thumb and warrants investigation",
                B: "Pass at 1.37 Ω",
                C: "Pass at any value below 1.37 Ω",
                D: "Cannot be assessed"
              },
              answer: "A",
              explanation:
                "GN3 80% rule of thumb: 1.37 × 0.8 = 1.10 Ω is the practical limit. A reading of 1.30 Ω is significantly above and warrants investigation — likely temperature, conductor sizing, or the fault path is degraded."
            },
            {
              number: 28,
              prompt:
                "Periodic inspection of an installation finds a circuit where the polarity at a socket reads OK but the polarity at the consumer unit is reversed. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "A",
              explanation:
                "Reversed polarity at the CU means every protective device is in the neutral conductor — the line is unprotected throughout the installation. C1 (immediate danger). Make safe and notify same-day in writing."
            },
            {
              number: 29,
              prompt:
                "An EICR records 'measured R1+R2 at the furthest point: 0.85 Ω; expected from cable resistance tables: 0.42 Ω'. Defensible response:",
              options: {
                A: "Investigate — the measured value is significantly higher than expected; likely a poor termination, oxidised connection or a fault that is not yet showing as IR or polarity error",
                B: "Pass — below 1 Ω",
                C: "Pass — within tolerance",
                D: "Issue Unsatisfactory automatically"
              },
              answer: "A",
              explanation:
                "Comparison to expected catches subtle workmanship issues. A measurement materially above expected is a finding that warrants investigation — typically a poor termination at one of the accessories. Investigation is required before coding."
            },
            {
              number: 30,
              prompt:
                "An EICR's overall observation 'Satisfactory with C3 improvements recommended' should be communicated to the duty holder via:",
              options: {
                A: "The formal report itself, supported by a plain-English cover letter explaining each C3 improvement, recommended timescale and the rationale",
                B: "A verbal note only",
                C: "A short text message",
                D: "The DNO"
              },
              answer: "A",
              explanation:
                "Formal report + cover letter is the standard. The cover letter translates the C3 codes into plain English for the duty holder and recommends timescales. C3 has no statutory deadline, so prioritisation is a matter for the duty holder's wider maintenance plan."
            }
          ]
        }
      ]
    },
    {
      id: "section-5-merged-periodic-earthing",
      title: "Section 5 — Merged Periodic, Earthing & Ring Questions",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt:
                "An Electrical Installation Condition Report:",
              options: {
                A: "Is valid for 10 years",
                B: "Is proof that the original installation was correctly installed",
                C: "Must be accompanied by a Condition Report Inspection Schedule, and a Schedule of Test Results and Schedule of Circuit Details",
                D: "Is valid for 5 years"
              },
              answer: "C",
              explanation:
                "An EICR is only complete with the inspection schedule and schedule of test results / circuit details. Validity period is recommended in the report (e.g. 5 years for a domestic), not a fixed 5-or-10. The original install is certified by the EIC, not the EICR."
            },
            {
              number: 2,
              prompt:
                "On completion of a periodic inspection, the EICR and its schedules should be issued to:",
              options: {
                A: "The installation designer",
                B: "The original installer",
                C: "The person who ordered the inspection (the duty holder)",
                D: "A representative of the distributor"
              },
              answer: "C",
              explanation:
                "Same principle as initial verification — the documentation goes to the person who ordered the work, who is the duty holder under EAWR (or landlord under ESS PRS) and needs the record to comply."
            },
            {
              number: 3,
              prompt:
                "An EICR's overall condition could be recorded as Satisfactory if:",
              options: {
                A: "There is only one C1 observation",
                B: "There is only one C2 observation",
                C: "There is only one C3 present",
                D: "There is either a C1 or C2, but the customer agrees to do the remedial work next week"
              },
              answer: "C",
              explanation:
                "Any C1 or C2 makes the report Unsatisfactory — remedial work and re-inspection cannot retroactively change that. C3 is improvement recommended only and does not affect the overall result. FI also makes it Unsatisfactory."
            },
            {
              number: 4,
              prompt:
                "Under what circumstances may a metallic water supply pipe be used as an earth electrode?",
              options: {
                A: "Not under any circumstances",
                B: "If it is non-metallic",
                C: "If it is a water utility supply pipe",
                D: "If it has precautions against its removal"
              },
              answer: "A",
              explanation:
                "Since the early 1980s, water-utility incoming pipes cannot be relied on as the means of earthing — utilities are increasingly switching to non-metallic pipework, breaking the earth path silently. Bond it (yes); use it as the electrode (no)."
            },
            {
              number: 5,
              prompt:
                "A protective conductor connecting the main earthing terminal of an installation to an earth electrode or other means of earthing is:",
              options: {
                A: "A main protective bonding conductor",
                B: "An earth continuity conductor",
                C: "A circuit protective conductor",
                D: "The earthing conductor"
              },
              answer: "D",
              explanation:
                "Earthing conductor: MET → means of earthing (electrode for TT, supply earth for TN). Main protective bonding: MET → extraneous parts (gas, water, structural steel). CPC: distribution board → individual circuit accessory."
            },
            {
              number: 6,
              prompt:
                "A 32 A Type B final circuit has a measured Zs of 1.10 Ω. The current BS 7671 tabulated maximum is 1.37 Ω. Using the 80% measured-value rule of thumb, the result is:",
              options: {
                A: "A pass, because 1.10 Ω is below 1.37 Ω",
                B: "A fail against the measured-value rule, because 80% of 1.37 Ω is approximately 1.10 Ω and the reading is at the limit",
                C: "Always a fail because Type B devices cannot protect 32 A circuits",
                D: "Not assessable because Zs is never measured on final circuits"
              },
              answer: "B",
              explanation:
                "GN3 rule of thumb compares measured cold Zs with 80% of the tabulated value to allow for conductor heating. 1.37 × 0.8 = 1.096 Ω, so a 1.10 Ω reading is on or just above the limit and should not be waved through without checking the table/device data and conditions."
            },
            {
              number: 7,
              prompt:
                "Doubling the length of a copper cable while keeping its cross-sectional area the same will:",
              options: {
                A: "Halve its resistance",
                B: "Leave its resistance unchanged",
                C: "Double its resistance",
                D: "Quadruple its resistance"
              },
              answer: "C",
              explanation:
                "R = ρL / A, so doubling L doubles R. This is why long runs need a bigger CSA — both to keep volt drop within Appendix 4 limits and to keep R1+R2 low enough to satisfy the Zs requirements of Table 41.3."
            },
            {
              number: 8,
              prompt:
                "As the temperature of a copper conductor rises, its electrical resistance:",
              options: {
                A: "Decreases",
                B: "Stays the same",
                C: "Increases",
                D: "Falls to zero at the boiling point of water"
              },
              answer: "C",
              explanation:
                "Copper has a positive temperature coefficient — resistance rises with temperature. This is why the IR test is taken cold and why measured R1+R2 must be corrected up to operating temperature before being used in a Zs calculation."
            },
            {
              number: 9,
              prompt:
                "Two copper conductors have the same length, but one has a CSA of 1.25 mm² and the other is 2.5 mm². The resistance of the 1.25 mm² conductor will be:",
              options: {
                A: "Half the resistance of the 2.5 mm² conductor",
                B: "The same resistance",
                C: "Double the resistance",
                D: "Four times the resistance"
              },
              answer: "C",
              explanation:
                "R = ρL/A, so for the same material and length, resistance is inversely proportional to CSA. Halving the CSA from 2.5 mm² to 1.25 mm² doubles the resistance — the same relationship behind voltage drop and R1+R2 values."
            },
            {
              number: 10,
              prompt:
                "The primary purpose of a ring final circuit (as opposed to a radial) is to:",
              options: {
                A: "Provide two parallel paths which allow 2.5 mm² conductors to be used for a 32 A protective device while maintaining adequate current-carrying capacity and lower volt drop",
                B: "Ensure redundancy if one half of the ring fails",
                C: "Reduce the number of sockets permitted",
                D: "Allow the use of a BS 3036 fuse at the origin"
              },
              answer: "A",
              explanation:
                "The ring's parallel paths share the load, allowing 2.5 mm² cable with 32 A protection (Appendix 15). 'Redundancy' is actually undesirable — a break in the ring creates an undetected radial that can be overloaded, which is why the continuity tests exist."
            },
            {
              number: 11,
              prompt:
                "A correctly wired ring final circuit r1 (line) and rn (neutral) end-to-end resistances should be:",
              options: {
                A: "Approximately equal (within 5-10%) — they are essentially the same wire of the same length",
                B: "r1 should be twice rn",
                C: "rn should always be zero",
                D: "Not measurable"
              },
              answer: "A",
              explanation:
                "r1 and rn are essentially identical lengths of identical 2.5 mm² conductor — they should be approximately equal end-to-end. A significant difference indicates a connection issue or polarity reversal somewhere in the ring."
            },
            {
              number: 12,
              prompt:
                "On a ring final circuit, r2 (CPC end-to-end) compared to r1 (line end-to-end), assuming standard 2.5 mm² T+E with 1.5 mm² CPC:",
              options: {
                A: "r2 is approximately 1.67 × r1 because the CPC has 1.5 mm² CSA versus 2.5 mm² for the line",
                B: "r2 is half r1",
                C: "r2 equals r1",
                D: "r2 is 10× r1"
              },
              answer: "A",
              explanation:
                "2.5 mm² T+E has a 1.5 mm² CPC. R is inversely proportional to CSA, so r2 / r1 = 2.5 / 1.5 = 1.67. The expected ratio is around 1.67× — a significantly different value indicates a wiring issue."
            },
            {
              number: 13,
              prompt:
                "A 30 mA RCD is the typical additional protection requirement for:",
              options: {
                A: "Socket-outlets in dwellings (Reg 411.3.3) and circuits feeding equipment used outdoors",
                B: "Only outdoor circuits",
                C: "Only TT installations",
                D: "Only commercial installations"
              },
              answer: "A",
              explanation:
                "Current edition (Reg 411.3.3): 30 mA RCD additional protection on socket-outlets in dwellings and on mobile equipment used outdoors. Special locations have additional 30 mA requirements on top."
            },
            {
              number: 14,
              prompt:
                "Supplementary equipotential bonding in a special location (e.g. swimming pool) is tested for continuity. The expected resistance:",
              options: {
                A: "≤ 0.05 Ω typical industry guideline — all conductive parts should be at substantially the same potential during a fault",
                B: "≤ 1 Ω",
                C: "≤ 100 Ω",
                D: "≤ 1000 Ω"
              },
              answer: "A",
              explanation:
                "Industry guidance for supplementary bonding continuity is typically R ≤ 0.05 Ω. The exact threshold depends on the specific location, but 50 mΩ is a reasonable working figure for typical pool / sauna / bathroom zones."
            },
            {
              number: 15,
              prompt:
                "TN-C-S supply impedance (Ze) is typically:",
              options: {
                A: "Around 0.05-0.35 Ω depending on distance from substation",
                B: "Always 1-10 Ω",
                C: "Always above 100 Ω",
                D: "Always 0 Ω"
              },
              answer: "A",
              explanation:
                "TN-C-S Ze is typically a fraction of an Ohm. DNOs often quote a maximum of 0.35 Ω for the cut-out, but actual values are often lower. TT installations typically have Ze ≥ 1 Ω due to electrode resistance."
            },
            {
              number: 16,
              prompt:
                "Main protective bonding sizing is governed by:",
              options: {
                A: "BS 7671 Reg 544.1 — typically half the supply earth conductor's CSA, with a minimum of 6 mm² and maximum of 25 mm² in copper",
                B: "BS 7671 Reg 411.3.3",
                C: "BS 7671 Reg 522.6.202",
                D: "BS 7671 Reg 651.1"
              },
              answer: "A",
              explanation:
                "Main bonding sizing is in Reg 544.1 — typically half the supply earth, min 6 mm², max 25 mm² Cu. For TN-C-S supplies the bonding may need upsizing per the supply company's requirements (commonly 10 mm² for typical domestic supplies)."
            },
            {
              number: 17,
              prompt:
                "On a TT installation, an RCD is required because:",
              options: {
                A: "The earth electrode resistance alone cannot provide the disconnection times required by ADS — RCDs are the recognised means of providing fault protection on TT",
                B: "It is mandatory for all systems",
                C: "It reduces volt drop",
                D: "It increases the supply impedance"
              },
              answer: "A",
              explanation:
                "TT installations rely on the RCD for ADS. Electrode-only fault protection cannot guarantee disconnection within BS 7671 times — the RCD is what makes TT viable for typical domestic and commercial use."
            },
            {
              number: 18,
              prompt:
                "An R1+R2 measurement on a final circuit gives 0.65 Ω. To estimate Zs at the point of measurement:",
              options: {
                A: "Add Ze (measured at the origin) — Zs ≈ Ze + (R1+R2). Apply temperature correction if comparing to table values",
                B: "Multiply by 10",
                C: "Subtract Ze",
                D: "Use R1+R2 alone"
              },
              answer: "A",
              explanation:
                "Zs ≈ Ze + (R1+R2) cold. To compare with the table (which is at full operating temperature), apply the GN3 80% rule of thumb to the table value, or correct R1+R2 upward by the cmin temperature factor."
            },
            {
              number: 19,
              prompt:
                "The ring final continuity test (the 'three-step' test) confirms:",
              options: {
                A: "Both legs of the ring are continuous, the ring is correctly wired, and there is no break in any of L, N or CPC",
                B: "The lighting circuit",
                C: "The supply impedance",
                D: "The RCD trip time"
              },
              answer: "A",
              explanation:
                "Three-step ring test: r1, rn, r2 end-to-end (Step 1); cross-connection and L/N at each socket (Step 2); cross-connection and L/CPC at each socket (Step 3). Together they confirm the ring is intact and correctly wired throughout."
            },
            {
              number: 20,
              prompt:
                "An EICR observation that 'a 32 A ring final circuit has a break in one leg of the ring; only one half is continuous' is typically coded:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "A broken ring becomes an undetected radial — the cable is rated below the protective device's rating in that scenario, exposing it to overload. Typically C2 (potentially dangerous). The fix is to repair or rewire the ring."
            },
            {
              number: 21,
              prompt:
                "An IR test reading of 200 MΩ on a 230 V circuit is:",
              options: {
                A: "Comfortably above the 1 MΩ minimum and is satisfactory",
                B: "A failure",
                C: "Borderline",
                D: "Suspicious"
              },
              answer: "A",
              explanation:
                "200 MΩ is well above the 1 MΩ minimum and well above any cause for concern. It is consistent with new or well-maintained wiring."
            },
            {
              number: 22,
              prompt:
                "On a TN-S installation, the means of earthing is:",
              options: {
                A: "The supply company's separate earth conductor (typically the metallic sheath of the incoming cable)",
                B: "An earth electrode at the installation",
                C: "The neutral conductor of the supply",
                D: "The water pipe"
              },
              answer: "A",
              explanation:
                "TN-S: Separate (S) earth conductor from the supply, typically the metallic sheath. TN-C-S: Combined-Separated, with the supply combining N and PE in the cable but separating them at the installation. TT: an installation-side electrode."
            },
            {
              number: 23,
              prompt:
                "An EICR finds a TN-C-S installation where the bonding to gas, water and structural steel is sized at 6 mm² and the supply earth is 16 mm². Typical observation:",
              options: {
                A: "Undersized main bonding — Reg 544.1 typically requires 10 mm² for a 16 mm² supply earth on TN-C-S, so the existing 6 mm² is potentially dangerous (C2)",
                B: "Satisfactory — 6 mm² is the minimum",
                C: "Satisfactory — 6 mm² always suffices",
                D: "C3 only"
              },
              answer: "A",
              explanation:
                "Reg 544.1 plus typical DNO requirements: TN-C-S with 16 mm² supply earth typically needs 10 mm² main bonding. 6 mm² is undersized and is typically C2 (potentially dangerous). The fix: replace the bonding with the correct size."
            },
            {
              number: 24,
              prompt:
                "An RCD's residual current sensitivity (IΔn) for additional protection on socket-outlets is typically:",
              options: { A: "30 mA", B: "100 mA", C: "300 mA", D: "10 mA" },
              answer: "A",
              explanation:
                "30 mA is the standard additional-protection rating for socket-outlets and equipment used outdoors. 100 mA / 300 mA / 500 mA are used at higher levels (sub-mains, fire protection) where coarser sensitivity is appropriate."
            },
            {
              number: 25,
              prompt:
                "The EICR's overall classification for an Unsatisfactory result requires:",
              options: {
                A: "Any one of: a C1, a C2 or an FI observation",
                B: "Multiple C3s",
                C: "A change of occupancy",
                D: "An expired previous EICR"
              },
              answer: "A",
              explanation:
                "Any C1, C2 or FI = Unsatisfactory, regardless of the count. C3 alone is Satisfactory. The overall test is binary on the presence of those codes — even one is enough to make the report Unsatisfactory."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt:
                "Documentary evidence behind the codes raised on an EICR sits primarily in:",
              options: {
                A: "The Schedule of Test Results — per-circuit measurements (R1+R2, IR, Zs, RCD trip times) and the inspector's assessment of those values against the standard",
                B: "Only the codes raised on the front sheet",
                C: "Only the duty holder's signature",
                D: "Only the cover letter"
              },
              answer: "A",
              explanation:
                "Per-circuit measured values are the documentary basis for the codes. Without the Schedule of Test Results, the EICR has no defensible foundation for its conclusions."
            },
            {
              number: 2,
              prompt:
                "Earth fault loop impedance (Zs) is measured under:",
              options: {
                A: "Live conditions, with all bonding connected and the installation energised",
                B: "Dead conditions only",
                C: "Test conditions with bonding disconnected",
                D: "Calculated only — not measured"
              },
              answer: "A",
              explanation:
                "Zs is measured live with bonding connected — the test simulates the impedance the fault current will see in service. Bonding is disconnected only at the origin and only after safe isolation, when measuring Ze."
            },
            {
              number: 3,
              prompt:
                "On a TT installation, Ra (electrode resistance) is measured. Ra ≤ 50 / IΔn for a 30 mA RCD gives a theoretical limit of:",
              options: { A: "1667 Ω", B: "1.67 Ω", C: "16.67 Ω", D: "167 Ω" },
              answer: "A",
              explanation:
                "50 / 0.030 = 1667 Ω. Industry guidance often pushes for ≤ 200 Ω for stability — the lower the better. The 50 V threshold is the touch-voltage limit for normal-condition locations."
            },
            {
              number: 4,
              prompt:
                "An EICR finds a domestic installation where the supply earth has been disconnected and the installation continues to function via a back-feed through a bonded gas pipe. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "A",
              explanation:
                "Functional installation via back-feed through a service is C1 — the formal earth path is broken and the protective measure is unreliable. Make safe (typically isolate) and notify same-day in writing."
            },
            {
              number: 5,
              prompt:
                "A circuit's R1+R2 is significantly higher than the calculated expected value. The most likely cause:",
              options: {
                A: "Poor termination at one of the accessories",
                B: "Long cable",
                C: "Test instrument fault",
                D: "Reverse polarity"
              },
              answer: "A",
              explanation:
                "Measured higher than expected typically means a poor termination in series with the cable. The cable's resistance is calculable; deviations point to workmanship issues at a junction box, accessory or termination."
            },
            {
              number: 6,
              prompt:
                "On a 1.0 mm² T+E cable carrying a typical low-power lighting load, the CPC is:",
              options: {
                A: "1.0 mm² (the same as the line conductors)",
                B: "1.5 mm²",
                C: "2.5 mm²",
                D: "0.5 mm²"
              },
              answer: "A",
              explanation:
                "1.0 mm² T+E has a 1.0 mm² CPC (uniform CSA). 2.5 mm² T+E has a 1.5 mm² CPC. 4.0 mm² T+E has a 1.5 mm² CPC. 6.0 mm² T+E has a 2.5 mm² CPC. The CPC sizing reflects the standard MICC/T+E construction."
            },
            {
              number: 7,
              prompt:
                "An EICR finds an installation where a 32 A Type B circuit is used to feed a 7 kW EV charger. Typical observation:",
              options: {
                A: "Investigate — 7 kW at 230 V draws approximately 30 A continuous; 32 A device is appropriate but the cable rating, RCD type (Type A or with DC detection) and dedicated circuit must be verified",
                B: "Unsatisfactory — cannot use 32 A",
                C: "Unsatisfactory — must use 16 A",
                D: "Satisfactory automatically"
              },
              answer: "A",
              explanation:
                "7 kW / 230 V = 30.4 A continuous. A 32 A Type B is appropriate. Critical checks: cable rating for continuous duty (typically 6 mm² T+E minimum), RCD type for DC residual (Type A or RCBO with 6 mA DC detection), and a dedicated circuit not shared with other loads."
            },
            {
              number: 8,
              prompt:
                "The function of main protective bonding is to:",
              options: {
                A: "Connect extraneous-conductive-parts to the MET so that during a fault the entire installation rises to the same potential, reducing touch-voltage between metal services and the installation",
                B: "Provide a fault path",
                C: "Reduce supply impedance",
                D: "Provide additional protection at 30 mA"
              },
              answer: "A",
              explanation:
                "Main bonding equalises potential between the installation and external metal services (gas, water, structural steel) during a fault. This limits the touch voltage anyone in contact with both pieces of metal could experience."
            },
            {
              number: 9,
              prompt:
                "An EICR's observation that 'the loop impedance Ze at the origin reads 0.18 Ω; published max for the supply is 0.35 Ω' is:",
              options: {
                A: "Satisfactory — within the DNO's published limit",
                B: "Unsatisfactory — too high",
                C: "Unsatisfactory — too low",
                D: "Cannot be assessed"
              },
              answer: "A",
              explanation:
                "0.18 Ω is comfortably within the typical TN-C-S 0.35 Ω limit. The actual value depends on substation distance and the supply's integrity. Anything above the published max should be reported to the DNO for investigation."
            },
            {
              number: 10,
              prompt:
                "On a ring final circuit, the R1+R2 reading at every socket is 0.5 Ω, except one socket reading 1.0 Ω. The most likely interpretation:",
              options: {
                A: "The 1.0 Ω socket is on a spur off the ring",
                B: "Reverse polarity at that socket",
                C: "Insulation failure",
                D: "RCD tripped"
              },
              answer: "A",
              explanation:
                "Spurred sockets read approximately double the in-ring R1+R2 because current goes through 2.5 mm² in only one direction (no parallel paths). 1.0 vs 0.5 is the typical 2× ratio for a single spur."
            },
            {
              number: 11,
              prompt:
                "On a TT installation, an RCD with IΔn = 30 mA and a measured electrode resistance Ra = 100 Ω gives a touch-voltage at fault of approximately:",
              options: { A: "3 V", B: "30 V", C: "300 V", D: "0.3 V" },
              answer: "A",
              explanation:
                "Touch voltage = IΔn × Ra = 0.030 × 100 = 3 V. Far below the 50 V touch-voltage threshold. The combination is satisfactory for ADS on TT."
            },
            {
              number: 12,
              prompt:
                "The earthing conductor on a TT installation is sized:",
              options: {
                A: "Per Reg 543/544 — typically same size as the largest CPC, with a minimum of 6 mm² Cu where buried and protected, or 16 mm² where buried and unprotected",
                B: "Always 16 mm²",
                C: "Always 25 mm²",
                D: "Always 6 mm²"
              },
              answer: "A",
              explanation:
                "Earthing conductor on TT: Reg 543/544. Buried and protected: 6 mm² minimum. Buried and unprotected: 16 mm² minimum. The actual size scales with the largest CPC and the installation's fault current rating."
            },
            {
              number: 13,
              prompt:
                "An EICR identifies a circuit where r1 ≠ rn (significantly different end-to-end resistance). Typical interpretation:",
              options: {
                A: "Investigate — the L and N are not the same length / route, indicating a polarity issue or wiring error somewhere in the ring",
                B: "Pass — variation is normal",
                C: "Fail and code C2 automatically",
                D: "Fail and code C1 automatically"
              },
              answer: "A",
              explanation:
                "r1 and rn should be approximately equal because they are the same conductor length. A significant difference suggests a swap, a missing leg of the ring, or a polarity reversal. Investigation is required before coding."
            },
            {
              number: 14,
              prompt:
                "Polarity on a final circuit must be verified at:",
              options: {
                A: "Every accessible accessory and at the consumer unit",
                B: "Only at the consumer unit",
                C: "Only at the furthest point",
                D: "Once in the middle"
              },
              answer: "A",
              explanation:
                "Polarity is verified at every accessible accessory plus at the origin. Reversed polarity at any single point is a fault — protective devices may be in the neutral, leaving the line unprotected at that accessory."
            },
            {
              number: 15,
              prompt:
                "An EICR finds an installation where the consumer unit's main earthing terminal is bonded to the gas pipe via 10 mm² copper. The supply earth is 16 mm². Typical observation:",
              options: {
                A: "Satisfactory — 10 mm² main bonding meets the typical TN-C-S requirement for a 16 mm² supply earth",
                B: "Unsatisfactory — should be 25 mm²",
                C: "Unsatisfactory — should be 6 mm²",
                D: "Unsatisfactory — bonding cannot be 10 mm²"
              },
              answer: "A",
              explanation:
                "10 mm² main bonding to a 16 mm² supply earth on TN-C-S is the typical compliant arrangement. Reg 544.1 sets the sizing per the supply earth conductor; the DNO often specifies 10 mm² for typical domestic supplies."
            },
            {
              number: 16,
              prompt:
                "An EICR identifies an installation where the only RCD is at the consumer unit (single 30 mA across the whole installation). All circuits trip together on any fault. Typical observation:",
              options: {
                A: "Improvement recommended (C3) — discrimination cannot be achieved with a single 30 mA; a fault on any one circuit knocks out the whole installation, including freezers and life-safety equipment",
                B: "Unsatisfactory — single-RCD is forbidden",
                C: "Satisfactory automatically",
                D: "Unsatisfactory — RCD trip is too slow"
              },
              answer: "A",
              explanation:
                "Single-RCD installations are typical of older domestic and are improvement recommended (C3). The current edition prefers per-circuit RCBOs or paired 30 mA RCDs split across the consumer unit, so a fault on one circuit doesn't kill the whole installation."
            },
            {
              number: 17,
              prompt:
                "Earth fault loop impedance test is carried out at:",
              options: {
                A: "Live conditions, line-to-earth, with the protective device temporarily bridged or with high-current loop tester",
                B: "Dead conditions",
                C: "Three-phase only",
                D: "Always 5 A test current"
              },
              answer: "A",
              explanation:
                "Loop tester injects a current between line and earth and measures the resulting voltage drop to derive impedance. The test is live, on a working installation, with bonding connected. Modern loop testers automatically inhibit the test if the residual current is too high."
            },
            {
              number: 18,
              prompt:
                "An EICR finds a circuit with measured Zs = 1.50 Ω against a table value of 1.92 Ω. Applying the GN3 80% rule of thumb:",
              options: {
                A: "Pass — 80% of 1.92 = 1.54 Ω, and 1.50 Ω is just within the rule-of-thumb limit",
                B: "Fail — above 1.0 Ω",
                C: "Cannot be assessed",
                D: "Always fail"
              },
              answer: "A",
              explanation:
                "GN3 rule of thumb: measured cold Zs ≤ 80% of table. 1.92 × 0.8 = 1.54 Ω. A reading of 1.50 Ω is just within the limit and is technically satisfactory but warrants recording with reasoning because there is little margin."
            },
            {
              number: 19,
              prompt:
                "An EICR finds an installation where the earth electrode is corroded but Ra still measures 80 Ω with a 30 mA RCD. Typical observation:",
              options: {
                A: "C2 — corrosion threatens future Ra stability; measured value is currently satisfactory but the trend is degrading. Recommend electrode replacement",
                B: "Pass — Ra is below 200 Ω",
                C: "C1 — immediate isolation required",
                D: "Satisfactory automatically"
              },
              answer: "A",
              explanation:
                "Corroded electrode is C2 typically — the current Ra meets the requirement but corrosion progresses unchecked and Ra will rise. The fix: replace the electrode and confirm Ra at the next inspection."
            },
            {
              number: 20,
              prompt:
                "An EICR finds an installation where supplementary equipotential bonding in a bathroom is missing between the metallic radiator and the metallic wash basin pipework. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Missing supplementary bonding in a special location is potentially dangerous (C2). The location-specific bonding is the protective layer for the location; absence is significant. C3 if the installation is otherwise compliant with current edition's relaxed bathroom rules where 30 mA RCD is provided."
            },
            {
              number: 21,
              prompt:
                "An IR test on a 230 V circuit returns 0.6 MΩ between L and CPC. Defensible response:",
              options: {
                A: "Investigate — below the 1 MΩ minimum, indicating an insulation breakdown to earth",
                B: "Pass — close to 1 MΩ",
                C: "Fail and code C1 automatically",
                D: "Fail and code C2 automatically"
              },
              answer: "A",
              explanation:
                "0.6 MΩ is a fault. The inspector investigates the cause (damaged insulation, moisture, connected load, accumulated leakage) before coding. The code follows from what is found — typically C2 if the cause is a fixed wiring fault."
            },
            {
              number: 22,
              prompt:
                "On a 25 m radial circuit fed by 4.0 mm² T+E carrying 16 A with 10 mV/A/m, voltage drop is approximately:",
              options: { A: "4 V", B: "0.4 V", C: "40 V", D: "0.04 V" },
              answer: "A",
              explanation:
                "Vd = (10 × 16 × 25) / 1000 = 4 V. Within the 5% socket limit (≈11.5 V at 230 V). Confirms the cable sizing is appropriate for the load and length."
            },
            {
              number: 23,
              prompt:
                "An EICR finds an installation where the only earth on a TT installation is a 1.2 m rod at the back of the property. Ra = 25 Ω. Typical observation:",
              options: {
                A: "Satisfactory — Ra of 25 Ω with appropriate RCD comfortably meets the requirements; longer / multiple rods could be considered for stability",
                B: "Unsatisfactory — single rod forbidden",
                C: "Unsatisfactory — Ra too high",
                D: "Unsatisfactory — minimum 2 m rod required"
              },
              answer: "A",
              explanation:
                "25 Ω is well below typical Ra requirements. Single-rod TT installations are common; longer or multiple rods (in parallel) are sometimes used for soil-resistivity stability. The current arrangement is satisfactory; improvement is optional."
            },
            {
              number: 24,
              prompt:
                "An EICR finds an installation where a 32 A circuit feeds a workshop. Measured R1+R2 = 0.65 Ω, Ze = 0.20 Ω. Calculated Zs:",
              options: {
                A: "0.85 Ω cold (Ze + R1+R2); apply temperature correction or compare to 80% of the table value",
                B: "0.45 Ω",
                C: "1.30 Ω",
                D: "0.13 Ω"
              },
              answer: "A",
              explanation:
                "Zs ≈ Ze + (R1+R2) = 0.20 + 0.65 = 0.85 Ω cold. Compare to 80% of the BS 7671 Table 41.3 value for the device. For 32 A Type B (table 1.37 Ω, 80% = 1.10 Ω), 0.85 Ω is comfortably satisfactory."
            },
            {
              number: 25,
              prompt:
                "Periodic inspection's main duty under EAWR is summarised as:",
              options: {
                A: "Maintain so as to prevent danger — Reg 4(2) of EAWR — supported by periodic inspection at GN3 intervals as the recognised technical means",
                B: "Replace every 10 years",
                C: "Test only when a fault occurs",
                D: "Apply Building Regulations Part P"
              },
              answer: "A",
              explanation:
                "EAWR Reg 4(2) is the headline duty: maintain so as to prevent danger. Periodic inspection is the recognised means of demonstrating compliance, with BS 7671 / GN3 setting the standards and intervals."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt:
                "An EICR finds a 16 mm² supply earth on a TN-C-S installation with 6 mm² main bonding. The defensible code is:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Undersized main bonding on TN-C-S is C2 — Reg 544.1 typically requires 10 mm² for a 16 mm² supply earth. The fix is to replace the bonding with a 10 mm² conductor."
            },
            {
              number: 2,
              prompt:
                "On a ring final circuit, the inspector cross-connects L and N and measures the resistance at each socket on Step 2. The expected reading at each socket is:",
              options: {
                A: "Approximately (r1 + rn) / 4 — about a quarter of the end-to-end resistance because the loop is divided into two parallel halves",
                B: "Equal to r1",
                C: "Equal to rn",
                D: "Always zero"
              },
              answer: "A",
              explanation:
                "Step 2 of the ring test: cross-connecting L to N and measuring at each socket gives (r1 + rn) / 4, because the cable forms two parallel paths and current splits. A consistent reading at every socket confirms the ring is intact."
            },
            {
              number: 3,
              prompt:
                "Earth fault loop impedance is measured to verify:",
              options: {
                A: "Disconnection times are met — Zs × If gives the touch voltage and drives the protective device's operating time",
                B: "Volt drop",
                C: "Insulation resistance",
                D: "Phase rotation"
              },
              answer: "A",
              explanation:
                "Zs × If determines whether the protective device disconnects within BS 7671's required times. Lower Zs = higher fault current = faster disconnection. The Zs measurement is the practical verification of ADS."
            },
            {
              number: 4,
              prompt:
                "An EICR finds a TT installation where the earth electrode is shared with another property's installation. Typical observation:",
              options: {
                A: "Investigate ownership and access rights — shared electrodes are not in themselves dangerous, but the duty holder needs assurance that the electrode will not be tampered with or removed without notice. Coding depends on actual condition",
                B: "Always C1",
                C: "Always Satisfactory",
                D: "Refer to the DNO"
              },
              answer: "A",
              explanation:
                "Shared electrodes need formal arrangements (deed, agreement) to ensure access and continuity. The inspector documents the situation; the coding depends on whether the electrode is sound, accessible, and protected against tampering."
            },
            {
              number: 5,
              prompt:
                "A 6 A Type B MCB has a tabulated Zs maximum of approximately 7.67 Ω. Applying the 80% rule of thumb:",
              options: {
                A: "≈6.13 Ω measured cold (rule-of-thumb practical limit)",
                B: "1.10 Ω",
                C: "0.93 Ω",
                D: "9.6 Ω"
              },
              answer: "A",
              explanation:
                "7.67 × 0.8 = 6.136 Ω. A measured cold Zs above this value warrants investigation against the table. The 80% rule of thumb is the GN3-recognised allowance for conductor heating in service."
            },
            {
              number: 6,
              prompt:
                "An IR test result of 0.4 MΩ on a domestic ring final circuit is:",
              options: {
                A: "Below the 1 MΩ minimum and indicates a fault — investigate before coding",
                B: "Satisfactory",
                C: "Code C3 directly",
                D: "Code C1 directly"
              },
              answer: "A",
              explanation:
                "0.4 MΩ is well below the 1 MΩ minimum. Investigation reveals the cause — connected load (which may be normal), damaged insulation in a wall, moisture in a conduit, or a faulty appliance. Coding follows the diagnosis."
            },
            {
              number: 7,
              prompt:
                "On a TN-C-S installation, the supply combines:",
              options: {
                A: "Neutral and protective earth into a single PEN conductor that is separated at the installation",
                B: "Line and neutral",
                C: "Line and earth",
                D: "All three lines"
              },
              answer: "A",
              explanation:
                "TN-C-S: PEN combined upstream, separated to N and PE at the installation. The combined PEN means a broken neutral can leave exposed-conductive-parts (and bonded services) at line potential — driving the bonding-sizing requirements."
            },
            {
              number: 8,
              prompt:
                "An EICR finds an installation where the broken neutral on a TN-C-S supply could cause exposed services to rise to line potential. The protective measure is:",
              options: {
                A: "Adequate main protective bonding sized per Reg 544.1 — bonding equalises potential between the installation and external services during a broken-PEN event",
                B: "Just an RCD",
                C: "Just a 6 mm² CPC",
                D: "Removing the gas pipe"
              },
              answer: "A",
              explanation:
                "Broken-PEN risk is the reason main bonding is sized per the supply earth on TN-C-S. The bonding ensures the entire installation rises with the bonded services, eliminating the dangerous voltage between two metal items in contact with a person."
            },
            {
              number: 9,
              prompt:
                "An EICR finds an installation where the consumer unit's MET has only one bonded service connection (gas) and the water service is non-metallic. Typical observation:",
              options: {
                A: "Satisfactory — non-metallic water does not require bonding (it is not an extraneous-conductive-part). Only metallic services need bonding",
                B: "Unsatisfactory — water must always be bonded",
                C: "Unsatisfactory — minimum 3 services bonded",
                D: "C2 automatically"
              },
              answer: "A",
              explanation:
                "Bonding is required for extraneous-conductive-parts only. Non-metallic water service does not introduce earth potential and does not require main bonding. The arrangement is satisfactory."
            },
            {
              number: 10,
              prompt:
                "On a 32 A radial socket circuit fed by 4.0 mm² T+E, the typical R1+R2 for a 25 m run is approximately:",
              options: { A: "0.30-0.35 Ω", B: "0.05 Ω", C: "1.5 Ω", D: "10 Ω" },
              answer: "A",
              explanation:
                "4.0 mm² T+E: line approx 4.6 mΩ/m, CPC (1.5 mm²) approx 12 mΩ/m. R1+R2 per metre approx 16.6 mΩ. 25 m → approx 0.42 Ω one way. Standard 'there and back' R1+R2 measurements give approximately 0.30-0.35 Ω depending on test method."
            },
            {
              number: 11,
              prompt:
                "An EICR finds an installation where the supply has been changed from TN-C-S to TT (e.g. due to broken-PEN concerns) but the bonding has not been removed. Typical observation:",
              options: {
                A: "Investigate — bonding may still be required if metallic services are extraneous-conductive-parts. Removing bonding without confirmation is potentially unsafe",
                B: "Bonding must always be removed on TT",
                C: "Bonding must always be doubled on TT",
                D: "Refer to the DNO"
              },
              answer: "A",
              explanation:
                "TT installations may or may not need main bonding depending on whether the services are extraneous-conductive-parts at the location. The inspector confirms by measurement (or by judgement based on the installation's location) — bonding is not automatically removed."
            },
            {
              number: 12,
              prompt:
                "An RCD test sequence on a 30 mA RCBO at 1× IΔn:",
              options: {
                A: "May trip between 50% and 100% of IΔn (if it does, max time 300 ms general type); standard test procedure",
                B: "Must trip in 40 ms",
                C: "Must not trip",
                D: "Must trip in 1 second"
              },
              answer: "A",
              explanation:
                "BS EN 61009 (RCBO): trip range 50-100% of IΔn. For a 30 mA RCBO, that's 15-30 mA. If it trips, max 300 ms. The 5× test is the more reliable functional check at 40 ms max."
            },
            {
              number: 13,
              prompt:
                "An EICR finds a circuit feeding an outdoor swimming pool. Typical RCD requirement:",
              options: {
                A: "30 mA RCD with appropriate type for the load (Type A or AC depending on equipment); supplementary equipotential bonding in zone 0/1/2",
                B: "100 mA RCD",
                C: "300 mA RCD",
                D: "RCD not required"
              },
              answer: "A",
              explanation:
                "Outdoor pool zones: 30 mA RCD with appropriate type, supplementary equipotential bonding, IP rating to current edition Section 702. The combination provides the protective measure for the high-risk environment."
            },
            {
              number: 14,
              prompt:
                "An EICR identifies a 20 A Type C MCB with a measured Zs of 0.95 Ω. Tabulated maximum is 1.15 Ω. The result is:",
              options: {
                A: "Apply 80% of 1.15 = 0.92 Ω rule of thumb; 0.95 Ω is just above and warrants investigation",
                B: "Pass — below 1 Ω",
                C: "Cannot be assessed",
                D: "Always fail"
              },
              answer: "A",
              explanation:
                "GN3 rule of thumb: 1.15 × 0.8 = 0.92 Ω. A measured 0.95 Ω is just above and warrants investigation — temperature correction, conductor length, or fault path check. Borderline readings are flagged for follow-up rather than waved through."
            },
            {
              number: 15,
              prompt:
                "Earth fault loop impedance Ze on a domestic TT supply is measured at 250 Ω. The defensible response:",
              options: {
                A: "Investigate the electrode — 250 Ω is high but may still meet the touch-voltage requirement at 30 mA. Verify Ra ≤ 1667 Ω theoretical (50/IΔn) and consider electrode improvement",
                B: "Pass — TT installations don't need Ze measurement",
                C: "Always fail above 100 Ω",
                D: "Refer to the DNO"
              },
              answer: "A",
              explanation:
                "TT Ze (which is essentially Ra) of 250 Ω is acceptable with a 30 mA RCD because touch voltage = 0.030 × 250 = 7.5 V, far below 50 V. Industry guidance often pushes for ≤ 200 Ω for stability — improvement is optional."
            },
            {
              number: 16,
              prompt:
                "An EICR finds a circuit with the line conductor connected to the earth pin of a socket. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "A",
              explanation:
                "Line on the earth pin is C1 — touching anything plugged into the socket exposes the user to line voltage via the appliance's CPC. Make safe immediately and notify same-day."
            },
            {
              number: 17,
              prompt:
                "Periodic inspection of an installation finds 'r1, rn and r2 readings on a ring all measure within 5% of each other on a 2.5 mm² T+E ring'. The defensible interpretation:",
              options: {
                A: "Concerning — r2 (1.5 mm² CPC) should normally be approximately 1.67× r1 / rn (2.5 mm² L/N). Equal readings suggest cross-connection or wiring error",
                B: "Pass — all readings agree",
                C: "Pass — within tolerance",
                D: "Insulation fault"
              },
              answer: "A",
              explanation:
                "On 2.5 mm² T+E with 1.5 mm² CPC, r2 should be 2.5/1.5 = 1.67× r1/rn. If all three are equal, something is wrong — likely a cross-connection where line and CPC are swapped, or the CPC is doubled-up. Investigation required."
            },
            {
              number: 18,
              prompt:
                "An IR test gives readings of L-N: 100 MΩ; L-E: 100 MΩ; N-E: 0.5 MΩ. Defensible interpretation:",
              options: {
                A: "N-E fault — 0.5 MΩ is below 1 MΩ minimum; the neutral has insulation breakdown to earth somewhere on the circuit; investigate",
                B: "Pass — average above 1 MΩ",
                C: "Always fail",
                D: "Reverse polarity"
              },
              answer: "A",
              explanation:
                "N-E low IR is an insulation fault between neutral and earth. Common causes: connected load with N-E leakage path, damaged insulation, or a wiring fault. Standard practice: disconnect loads, retest, then locate the fault."
            },
            {
              number: 19,
              prompt:
                "An EICR finds an installation where supplementary bonding in a kitchen is missing between the metal sink and the metal pipework. Typical code (current edition where 30 mA RCD covers all socket circuits):",
              options: {
                A: "Often C3 or no code in current edition where 30 mA RCD covers the kitchen circuits — current edition reduced supplementary bonding requirements where ADS provides protection. Older editions made this C2",
                B: "Always C1",
                C: "Always C2",
                D: "Always FI"
              },
              answer: "A",
              explanation:
                "Current edition relaxed supplementary bonding requirements where 30 mA RCD covers the circuits. The exact code depends on installation context — often C3 (improvement) or no code if RCD provides ADS. Older editions (pre-17th) were more prescriptive."
            },
            {
              number: 20,
              prompt:
                "A radial 32 A circuit fed by 6 mm² T+E: typical R1+R2 for a 30 m run, where 6 mm² T+E has a 2.5 mm² CPC:",
              options: {
                A: "Approximately 0.21 Ω — line 3.1 mΩ/m + CPC 7.4 mΩ/m, 30 m → about 0.21 Ω total there-and-back",
                B: "1.5 Ω",
                C: "0.05 Ω",
                D: "5.0 Ω"
              },
              answer: "A",
              explanation:
                "6 mm² T+E: line approx 3.1 mΩ/m, CPC (2.5 mm²) approx 7.4 mΩ/m. R1+R2 per metre approx 10.5 mΩ. 30 m → 0.32 Ω. Practical method tests give ≈ 0.21-0.32 Ω depending on instrument and test mode."
            },
            {
              number: 21,
              prompt:
                "An EICR finds a circuit where the line and CPC have been reversed at a socket. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "A",
              explanation:
                "L and CPC reversed at a socket means the appliance's metal case is at line potential the moment the socket is energised. C1 (immediate danger). Make safe (typically isolate) and notify same-day."
            },
            {
              number: 22,
              prompt:
                "An EICR finds an installation where a domestic circuit has neither RCD protection nor a CPC. The cable is concealed in the wall at 30 mm depth. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Concealed cable < 50 mm without RCD protection (Reg 522.6.202) plus missing CPC is potentially dangerous (C2). C1 follows where there is direct exposure to live conductors via damaged insulation."
            },
            {
              number: 23,
              prompt:
                "On a TT installation, Ra increases over time due to soil drying, corrosion or damage. Periodic inspection should:",
              options: {
                A: "Re-measure Ra at each EICR cycle and report any significant change; recommend electrode improvement if Ra has materially deteriorated",
                B: "Skip Ra measurement on subsequent cycles",
                C: "Apply IR test instead",
                D: "Refer to the DNO"
              },
              answer: "A",
              explanation:
                "TT Ra is monitored at each EICR. Significant deterioration is reported; electrode improvement (longer rod, multiple rods in parallel, deeper installation) may be needed. Trend data over multiple cycles helps the duty holder anticipate replacement."
            },
            {
              number: 24,
              prompt:
                "An EICR's Schedule of Inspections covers:",
              options: {
                A: "Visual checks against the standard items: cable connections, identification, signs of damage, presence of warning labels, suitability of accessories — what was looked at",
                B: "Measured test values only",
                C: "The cover letter only",
                D: "The duty holder's signature"
              },
              answer: "A",
              explanation:
                "Schedule of Inspections covers the visual side — what was looked at against the standard items. Measured values go on the Schedule of Test Results. Together they form the documentary basis for the EICR's codes."
            },
            {
              number: 25,
              prompt:
                "An RCD's effective protection at 5× IΔn requires:",
              options: {
                A: "Trip time max 40 ms (general type) — ensures rapid disconnection at high fault current and provides additional protection against direct contact",
                B: "Trip time max 300 ms",
                C: "Trip time max 1 second",
                D: "Trip time max 10 ms"
              },
              answer: "A",
              explanation:
                "5× IΔn test: max 40 ms general type per BS EN 61008/61009. The fast disconnection at high residual current is what gives the RCD its 'additional protection' role for direct-contact incidents — the body cannot sustain shock for that duration."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt:
                "An EICR records 'continuity test on supplementary bonding in a bathroom: 0.10 Ω against 0.05 Ω guideline'. Defensible response:",
              options: {
                A: "Investigate — slightly above guideline; check terminations and the conductor itself, recommend remedial",
                B: "Pass — within tolerance",
                C: "Always fail",
                D: "Refer to the DNO"
              },
              answer: "A",
              explanation:
                "0.10 Ω is double the 0.05 Ω industry guideline. Investigation: check terminations at the bonded items (often loose) and the conductor itself. The fix is usually re-termination — the conductor itself is rarely the issue."
            },
            {
              number: 2,
              prompt:
                "An EICR finds an installation where the consumer unit is on a wooden enclosure, plastic, with no metalwork separation between the breakers and the wood. Typical code (current edition):",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Plastic CU on combustible substrate is C2 in current edition — fire risk in arc fault scenarios. Older editions tolerated this; current edition requires non-combustible enclosure. C3 if the consumer unit is recent and the substrate is being upgraded."
            },
            {
              number: 3,
              prompt:
                "On a ring final circuit, the inspector cross-connects L and CPC for Step 3 of the test. The expected reading at each socket is:",
              options: {
                A: "Approximately (r1 + r2) / 4, with the highest value being the furthest socket",
                B: "Equal to r1",
                C: "Always zero",
                D: "Equal to rn"
              },
              answer: "A",
              explanation:
                "Step 3: cross-connecting L and CPC and measuring at each socket gives (r1 + r2) / 4. The highest value is at the furthest socket; spurred sockets read higher than the in-ring sockets because the parallel-path effect doesn't apply to spurs."
            },
            {
              number: 4,
              prompt:
                "An EICR finds an installation where the supply earth is broken at the cut-out (i.e. only the neutral is intact). The installation continues to function. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "A",
              explanation:
                "Broken supply earth is C1 — fault disconnection cannot occur via the formal earth path; any fault relies on indirect routes (services, electrode if any). Make safe (typically isolate, then refer to DNO for repair) and notify same-day."
            },
            {
              number: 5,
              prompt:
                "An EICR finds a circuit where the IR test result is 'between phase and earth, and between neutral and earth' both 0.4 MΩ. Defensible interpretation:",
              options: {
                A: "L and N are connected to a common path that has insulation breakdown to earth (typical of a connected appliance or a wall fault); investigate before coding",
                B: "Two separate faults",
                C: "Pass automatically",
                D: "Fail and refer to the DNO"
              },
              answer: "A",
              explanation:
                "Equal L-E and N-E readings often mean both conductors share a common low-IR path — typical of a connected appliance, capacitor, or moisture-related issue. Investigate by disconnecting loads and retesting before coding."
            },
            {
              number: 6,
              prompt:
                "On a 32 A Type B MCB, the BS 7671 Table 41.3 maximum Zs at full operating temperature is approximately:",
              options: { A: "1.37 Ω", B: "0.92 Ω", C: "1.10 Ω", D: "2.50 Ω" },
              answer: "A",
              explanation:
                "Type B 32 A: Im = 5 × 32 = 160 A. Zs = 230/160 = 1.4375 Ω, rounded to 1.37 Ω in BS 7671 Table 41.3 at full operating temperature. Apply 80% rule of thumb for measured cold values."
            },
            {
              number: 7,
              prompt:
                "An EICR identifies a ring final circuit where the R1+R2 readings are 0.5 Ω at most sockets but 2.0 Ω at one socket. The most likely interpretation:",
              options: {
                A: "Spur off a spur — the socket has even higher resistance than a single spur",
                B: "Reverse polarity",
                C: "Insulation fault",
                D: "RCD tripped"
              },
              answer: "A",
              explanation:
                "Single spur reads about 2× in-ring (1.0 Ω vs 0.5 Ω). Spur-off-spur reads roughly 4× because two stages of small-CSA cable are in series. 2.0 Ω vs 0.5 Ω is consistent with spur-off-spur."
            },
            {
              number: 8,
              prompt:
                "An EICR observation that 'the consumer unit is fed via a fused spur at 13 A from a ring final circuit' is typically coded:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "A consumer unit fed from a 13 A FCU on a ring is potentially dangerous (C2) — the secondary CU's circuits cannot draw their full rated current and the FCU is not designed as a sub-main protective device. The fix is to install a proper sub-main."
            },
            {
              number: 9,
              prompt:
                "Earth electrode resistance Ra on a TT installation should be:",
              options: {
                A: "Such that touch voltage ≤ 50 V at fault — Ra × IΔn ≤ 50 V; typically pushed to ≤ 200 Ω for stability",
                B: "Always ≤ 1 Ω",
                C: "Always ≤ 100 Ω",
                D: "Always above 1000 Ω"
              },
              answer: "A",
              explanation:
                "Touch-voltage formula: Ra × IΔn ≤ 50 V (normal-condition limit). For 30 mA RCD, theoretical Ra ≤ 1667 Ω. Industry guidance often uses ≤ 200 Ω for stability — soil moisture variation, corrosion and damage all affect Ra over time."
            },
            {
              number: 10,
              prompt:
                "An EICR identifies a circuit where the earthing conductor is undersized (4 mm² where the supply earth is 16 mm² and CPCs are 2.5 mm²). Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Undersized earthing conductor is potentially dangerous (C2) — fault current path is restricted, disconnection times are unreliable. Reg 543/544: earthing conductor sized to handle the fault current to the means of earthing."
            },
            {
              number: 11,
              prompt:
                "Periodic inspection of a ring final identifies r1 = rn = 0.40 Ω, r2 = 0.50 Ω. The 2.5 mm² T+E with 1.5 mm² CPC ratio of r2/r1 should be:",
              options: {
                A: "Approximately 1.67× — measured ratio is 0.50/0.40 = 1.25, which is too low; investigate",
                B: "Approximately 1.0×",
                C: "Always 0.5×",
                D: "Always 2.0×"
              },
              answer: "A",
              explanation:
                "2.5 mm² T+E: r2/r1 = 2.5/1.5 = 1.67. Measured 1.25 is materially below — possible causes: CPC has been doubled-up somewhere, the cable is a non-standard CSA, or the CPC has parallel paths from bonding/services."
            },
            {
              number: 12,
              prompt:
                "An EICR finds an installation where the loop tester reads Zs = 0.18 Ω at the consumer unit (approximately equal to Ze) and Zs = 1.20 Ω at the furthest point of a 32 A Type B circuit. Typical observation:",
              options: {
                A: "Investigate — 1.20 Ω measured cold against table 1.37 Ω, applying 80% rule of thumb gives 1.10 Ω limit; the reading is above the limit and warrants investigation",
                B: "Pass — below 1.37 Ω",
                C: "Cannot be assessed",
                D: "Refer to the DNO"
              },
              answer: "A",
              explanation:
                "GN3 rule of thumb: 80% of 1.37 = 1.10 Ω. A measured 1.20 Ω cold is above the limit and is not satisfactory. Investigation: cable length, terminations, conductor sizing. The reading represents inadequate disconnection capability."
            },
            {
              number: 13,
              prompt:
                "An EICR finds an installation where the consumer unit's earth bar is not linked to the supply's earthing terminal. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "A",
              explanation:
                "Disconnected earth bar means the consumer unit's CPCs have no path to the means of earthing — fault disconnection is not possible. Typically C1 (immediate danger). Make safe (typically isolate) and notify same-day."
            },
            {
              number: 14,
              prompt:
                "Voltage drop on a 230 V single-phase circuit is calculated using:",
              options: {
                A: "Vd = (mV/A/m × A × m) / 1000",
                B: "Vd = I × R",
                C: "Vd = V × A",
                D: "Vd = V / R"
              },
              answer: "A",
              explanation:
                "BS 7671 Appendix 4 gives mV/A/m values per cable type and method. Voltage drop = (tabulated mV/A/m × design current A × route length m) / 1000. Limits: 3% lighting, 5% other, on a public LV supply."
            },
            {
              number: 15,
              prompt:
                "An EICR finds an installation where the supplementary bonding to the bath is connected at the bath but not at the supplementary bonding terminal in the bathroom. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Incomplete supplementary bonding is potentially dangerous (C2) — the local equipotential is not formed. The fix is to extend the bonding conductor to the proper terminal. Current edition's reduced supplementary bonding requirements may apply if 30 mA RCD covers all bathroom circuits."
            },
            {
              number: 16,
              prompt:
                "An EICR records 'IR test results: all circuits >100 MΩ at 500 V DC'. The defensible interpretation:",
              options: {
                A: "Excellent — well above the 1 MΩ minimum; satisfactory",
                B: "Cannot be assessed",
                C: "Suspicious — too high",
                D: "Always fail"
              },
              answer: "A",
              explanation:
                ">100 MΩ is excellent insulation. Modern installations typically reach the IR tester's upper limit (>200 MΩ or >999 MΩ depending on instrument). Values that low typically only happen on installations with significant connected load or older, deteriorating wiring."
            },
            {
              number: 17,
              prompt:
                "An EICR records 'no functional earth electrode on a TT installation; the only earth path is via a metallic water pipe'. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "A",
              explanation:
                "TT without a functional electrode is C1 — the formal earth path is the electrode; relying on a water pipe (which the utility may replace with non-metallic without notice) is not an acceptable means of earthing. Make safe and notify same-day."
            },
            {
              number: 18,
              prompt:
                "Periodic inspection of an installation finds 'cable colours mixed within a single circuit (some old red/black, some new brown/blue)' with no warning notice. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "C",
              explanation:
                "Mixed colours without warning is C3 (improvement recommended) — the installation works, but a future inspector or tradesperson may misidentify conductors. The fix: install a clear warning notice at the consumer unit."
            },
            {
              number: 19,
              prompt:
                "An EICR finds a 6 A radial circuit feeding a smoke detector network. Measured R1+R2 = 0.9 Ω, Ze = 0.20 Ω, RCD = 30 mA. Type B 6 A table Zs = 7.67 Ω. The result:",
              options: {
                A: "Satisfactory — Zs ≈ 1.10 Ω, well within the 80% rule of thumb (6.13 Ω)",
                B: "Fail — above 1 Ω",
                C: "Cannot be assessed",
                D: "Refer to the DNO"
              },
              answer: "A",
              explanation:
                "Zs ≈ 0.20 + 0.9 = 1.10 Ω cold. Apply 80% rule of thumb to 7.67 = 6.13 Ω limit. 1.10 Ω is comfortably within. The smoke alarm network has good fault disconnection capability."
            },
            {
              number: 20,
              prompt:
                "An EICR finds an installation where a circuit is protected by an MCB rated higher than the cable it protects (e.g. 32 A device on cable rated 24 A). Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Cable under-rated for the device is potentially dangerous (C2) — the device cannot protect the cable from sustained overload. C1 if there is evidence of overheating, charring, or the under-rating is severe enough to risk imminent failure."
            },
            {
              number: 21,
              prompt:
                "On a TN-C-S supply, the supply earth terminal at the cut-out is bonded to:",
              options: {
                A: "The combined PEN inside the supply cable, separated to N and PE at the cut-out",
                B: "An installation electrode",
                C: "The water pipe",
                D: "The structural steel only"
              },
              answer: "A",
              explanation:
                "TN-C-S separates the combined PEN at the cut-out into separate N and PE conductors entering the installation. The PE provides the formal earth path; the N carries the load. The combined PEN is the supply company's responsibility upstream."
            },
            {
              number: 22,
              prompt:
                "An EICR finds an installation where supplementary bonding has been installed in a kitchen but the kitchen has no extraneous-conductive-parts that need bonding. The defensible response:",
              options: {
                A: "Note that the bonding is unnecessary but not in itself dangerous; typically Satisfactory observation, with C3 if it is causing confusion or has been mis-terminated",
                B: "Always C2",
                C: "Always C1",
                D: "Always FI"
              },
              answer: "A",
              explanation:
                "Unnecessary bonding is typically harmless. The defensible record: note what is present, confirm it is correctly terminated, and code C3 only if it is creating confusion or has been mis-terminated. Removing it is an option, not a requirement."
            },
            {
              number: 23,
              prompt:
                "An EICR records 'CPC bonded to the metallic enclosure of the consumer unit at the appropriate terminal'. The defensible read:",
              options: {
                A: "Satisfactory — standard practice and required for ADS on metallic CUs",
                B: "Unsatisfactory — should not be bonded",
                C: "Unsatisfactory — should be on a different terminal",
                D: "Unsatisfactory — must be removed"
              },
              answer: "A",
              explanation:
                "Metallic CUs require a dedicated earth point — typically the earth bar in the CU itself. The CPC connecting the CU to the MET ensures the enclosure is at earth potential and any internal fault disconnects safely."
            },
            {
              number: 24,
              prompt:
                "An EICR finds an installation where a junction box has been buried in a wall with no access. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Inaccessible junction boxes are typically C2 — they violate Reg 526.3 requiring connections to be accessible (with limited exceptions for maintenance-free connectors in suitable enclosures). The fix: open up access or replace with permitted maintenance-free connections."
            },
            {
              number: 25,
              prompt:
                "An EICR's overall assessment is determined by the codes raised. The pass/fail logic is:",
              options: {
                A: "Any C1, C2 or FI = Unsatisfactory; only C3 or no observations = Satisfactory",
                B: "Total observations > 5 = Unsatisfactory",
                C: "Inspector's judgement",
                D: "Customer preference"
              },
              answer: "A",
              explanation:
                "Pass/fail is binary on C1/C2/FI presence. C3 alone (any number) = Satisfactory. The overall test is consistent across all EICRs and inspectors — coded danger or required investigation drives Unsatisfactory."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt:
                "An EICR finds an installation where the supply impedance Ze is measured as 0.20 Ω TN-C-S, with an R1+R2 on a 32 A circuit of 0.45 Ω. Calculated Zs cold:",
              options: {
                A: "0.65 Ω — apply 80% rule of thumb to table value (32 A Type B = 1.37 Ω, 80% = 1.10 Ω); 0.65 Ω is comfortably within",
                B: "0.25 Ω",
                C: "0.90 Ω",
                D: "Cannot be calculated"
              },
              answer: "A",
              explanation:
                "Zs ≈ Ze + (R1+R2) = 0.20 + 0.45 = 0.65 Ω cold. Compare to 80% of 1.37 = 1.10 Ω. 0.65 Ω is satisfactory and provides good fault disconnection capability."
            },
            {
              number: 2,
              prompt:
                "An EICR records 'all CPCs are continuous and the R1+R2 readings agree with the calculated values for the cable lengths'. The defensible interpretation:",
              options: {
                A: "Satisfactory — terminations are sound and CPCs intact across all circuits",
                B: "Suspicious",
                C: "Cannot be assessed",
                D: "Always fail"
              },
              answer: "A",
              explanation:
                "When measured matches calculated (within reasonable tolerance), the wiring is sound: terminations tight, conductors continuous, no extra resistance. Discrepancies indicate workmanship or wiring issues."
            },
            {
              number: 3,
              prompt:
                "An EICR identifies a TN-C-S installation where the bonding to gas, water and structural steel is sized at 10 mm² and the supply earth is 16 mm². Typical observation:",
              options: {
                A: "Satisfactory — 10 mm² main bonding meets the typical requirement for a 16 mm² supply earth on TN-C-S",
                B: "Unsatisfactory — should be 16 mm²",
                C: "Unsatisfactory — should be 6 mm²",
                D: "Unsatisfactory — bonding cannot be 10 mm²"
              },
              answer: "A",
              explanation:
                "10 mm² is the typical compliant size for main bonding on TN-C-S with 16 mm² supply earth (Reg 544.1 with DNO requirements). The arrangement is satisfactory."
            },
            {
              number: 4,
              prompt:
                "An EICR finds a circuit where measured Zs is 0.65 Ω. The 80% of table value for the device is 0.92 Ω. The result:",
              options: {
                A: "Comfortably satisfactory — 0.65 Ω is well below the 0.92 Ω rule-of-thumb limit",
                B: "Borderline",
                C: "Always fail",
                D: "Cannot be assessed"
              },
              answer: "A",
              explanation:
                "0.65 Ω vs 0.92 Ω limit is comfortable margin. The disconnection time is reliable; the cable's heating in service won't push the value above the table limit. Satisfactory and well-reported."
            },
            {
              number: 5,
              prompt:
                "On a 1.5 mm² T+E lighting circuit, the CPC is:",
              options: { A: "1.0 mm²", B: "1.5 mm²", C: "2.5 mm²", D: "0.5 mm²" },
              answer: "A",
              explanation:
                "1.5 mm² T+E has a 1.0 mm² CPC. The CPC is sized smaller than the line conductors because the fault current is brief and the conductor's adiabatic capacity carries it. 2.5 mm² T+E has a 1.5 mm² CPC; 6 mm² T+E has a 2.5 mm² CPC."
            },
            {
              number: 6,
              prompt:
                "An EICR records 'the ring final circuit r1 / rn / r2 readings are 0.40 / 0.42 / 0.68 Ω'. The 2.5 mm² T+E ratios:",
              options: {
                A: "r2/r1 = 1.7, consistent with the expected 1.67× ratio of 2.5 mm² CPC vs 1.5 mm² L/N. Likely a 2.5 mm² T+E with 1.5 mm² CPC; consistent with a healthy ring",
                B: "Inconsistent",
                C: "Always fail",
                D: "Cannot be interpreted"
              },
              answer: "A",
              explanation:
                "0.68 / 0.40 = 1.7 — close to the expected 1.67× ratio for 2.5 mm² L/N with 1.5 mm² CPC. r1 ≈ rn (0.40 vs 0.42 — within tolerance). The readings are consistent with a correctly wired ring."
            },
            {
              number: 7,
              prompt:
                "An EICR finds a circuit where the IR test result is 12 MΩ on a 230 V circuit. The defensible response:",
              options: {
                A: "Satisfactory — well above the 1 MΩ minimum; recordable observation",
                B: "Borderline",
                C: "Fail",
                D: "Always investigate"
              },
              answer: "A",
              explanation:
                "12 MΩ is well above the 1 MΩ minimum and is consistent with normal mature wiring with some connected load. Modern dry installations often read >999 MΩ; older damp installations read in the single-digit MΩ range — both are typically satisfactory."
            },
            {
              number: 8,
              prompt:
                "Periodic inspection of an installation finds the supplementary bonding in a swimming pool zone has continuity of 0.06 Ω. Defensible response:",
              options: {
                A: "Investigate — slightly above the typical 0.05 Ω guideline; check terminations",
                B: "Always pass",
                C: "Always fail",
                D: "Cannot be assessed"
              },
              answer: "A",
              explanation:
                "0.06 Ω is just above the typical guideline. Investigation: tighten terminations, check the bonding conductor itself, verify there is no parallel path that could mask a poor connection."
            },
            {
              number: 9,
              prompt:
                "An EICR identifies a TT installation where the earth electrode is in good condition but Ra has gradually increased from 50 Ω (5 years ago) to 250 Ω now. Typical observation:",
              options: {
                A: "Satisfactory at the current Ra (still well within touch-voltage limit for 30 mA RCD), but report the trend and recommend electrode improvement on the next cycle",
                B: "Unsatisfactory above 100 Ω",
                C: "Always fail",
                D: "Refer to the DNO"
              },
              answer: "A",
              explanation:
                "250 Ω is satisfactory with 30 mA RCD (touch voltage = 7.5 V). The trend (5× increase over 5 years) is the more important observation — the electrode is degrading and may exceed limits before the next inspection. Improvement is recommended."
            },
            {
              number: 10,
              prompt:
                "An EICR finds an installation where the consumer unit has a fully functional 30 mA RCBO on each circuit. Typical observation:",
              options: {
                A: "Best practice — per-circuit RCBOs give discrimination, easy fault location and 30 mA additional protection per circuit. Satisfactory, often noted as compliance with current edition recommended practice",
                B: "Unsatisfactory — RCBOs cannot be on every circuit",
                C: "Unsatisfactory — RCDs only",
                D: "Cannot be assessed"
              },
              answer: "A",
              explanation:
                "Per-circuit RCBO arrangement is the recommended modern approach. Each circuit has its own 30 mA RCD and overcurrent protection, so a fault on one circuit doesn't kill others. Discrimination, fault location and reliability all improve."
            },
            {
              number: 11,
              prompt:
                "An EICR finds an installation where the supplementary bonding in a sauna has been installed correctly but the conductor is exposed to the heat from the heater. Typical observation:",
              options: {
                A: "Investigate — heat may degrade the bonding insulation over time. Verify the conductor is rated for the heat environment (T+E PVC is typically not adequate for sauna heat). Code C3 if compliant; C2 if degraded",
                B: "Always C1",
                C: "Always Satisfactory",
                D: "Always FI"
              },
              answer: "A",
              explanation:
                "Saunas are a special location — heat-rated cables are required. Standard PVC T+E is not appropriate. The inspector verifies the conductor's heat rating and codes accordingly: C3 if compliant but PVC; C2 if visibly degraded."
            },
            {
              number: 12,
              prompt:
                "An EICR records 'the ring final circuit measurements are r1 = 0.40 Ω, rn = 0.40 Ω, r2 = 0.40 Ω'. The 2.5 mm² T+E with 1.5 mm² CPC interpretation:",
              options: {
                A: "Suspect — r2 should be approximately 1.67× r1/rn, not equal. Investigation needed for likely cross-connection or wiring error",
                B: "Pass",
                C: "Cannot be interpreted",
                D: "Refer to the DNO"
              },
              answer: "A",
              explanation:
                "Equal r2 to r1/rn on a 2.5 mm² T+E is not normal. Likely cause: line and CPC cross-connected somewhere in the ring (so the test is reading line in place of CPC). Investigation required before coding."
            },
            {
              number: 13,
              prompt:
                "An EICR finds an installation where the polarity at the consumer unit is correct but a single socket downstream is reversed. Typical code:",
              options: { A: "C1", B: "C2", C: "C3", D: "FI" },
              answer: "B",
              explanation:
                "Reversed polarity at a downstream socket is potentially dangerous (C2) — the protective device may be in the neutral at that accessory, and any switch on the line conductor of the appliance is now switching the neutral instead. Fix: re-terminate the socket."
            },
            {
              number: 14,
              prompt:
                "An EICR finds a 32 A circuit feeding an electric shower. Measured Zs = 0.45 Ω; table 41.3 max for the device = 1.37 Ω; 80% = 1.10 Ω. The result:",
              options: {
                A: "Satisfactory — comfortable margin against the rule of thumb",
                B: "Unsatisfactory — borderline",
                C: "Cannot be assessed",
                D: "Always fail"
              },
              answer: "A",
              explanation:
                "0.45 Ω is well below 1.10 Ω. The shower circuit has good fault disconnection capability; bonding (typically supplementary equipotential in the bathroom or 30 mA RCD covering the circuit) provides the additional protective layer."
            },
            {
              number: 15,
              prompt:
                "An EICR observation that 'the consumer unit's main earthing terminal is on a fully terminated 16 mm² conductor to the gas pipe' is typically:",
              options: {
                A: "Satisfactory — 16 mm² main bonding is generously sized; the termination at the gas pipe is correct (typically a BS 951 clamp on the consumer side of the meter)",
                B: "Unsatisfactory — over-sized",
                C: "Unsatisfactory — should be on the meter",
                D: "Unsatisfactory — minimum 25 mm²"
              },
              answer: "A",
              explanation:
                "16 mm² main bonding on TN-C-S is acceptable and sometimes specified by DNOs for high-fault supplies. Termination at the consumer side of the gas meter using a BS 951 clamp is standard. The arrangement is satisfactory."
            },
            {
              number: 16,
              prompt:
                "Periodic inspection of an EV charger circuit finds a Type B RCD upstream of a 7 kW unit. Typical observation:",
              options: {
                A: "Satisfactory — Type B RCD detects AC, pulsating DC and smooth DC residual current; suitable for EV charger DC fault scenarios",
                B: "Unsatisfactory — Type B not allowed",
                C: "Unsatisfactory — must be Type AC",
                D: "Always FI"
              },
              answer: "A",
              explanation:
                "Type B RCDs detect across the full residual-current waveform spectrum — AC, pulsating DC, and smooth DC. EV charger circuits commonly require Type B (or Type A with built-in 6 mA DC detection on the unit). The arrangement is satisfactory."
            },
            {
              number: 17,
              prompt:
                "An EICR records 'IR test results: L-N >999 MΩ, L-E >999 MΩ, N-E 0.5 MΩ'. The defensible interpretation:",
              options: {
                A: "Investigate the N-E fault — there is insulation breakdown specifically between the neutral and earth somewhere in the circuit",
                B: "Pass — average above 1 MΩ",
                C: "Always fail and code C1",
                D: "Refer to the DNO"
              },
              answer: "A",
              explanation:
                "N-E low IR with high L-N and L-E means the fault is specifically between the neutral conductor and earth. Common causes: connected appliance with N-E leakage, damaged insulation in the neutral run, or a wiring fault. Disconnect loads, retest, then locate."
            },
            {
              number: 18,
              prompt:
                "On a TN-C-S installation, broken-PEN risk requires:",
              options: {
                A: "Adequate main protective bonding (sized per Reg 544.1) so that during a broken-PEN event the entire installation rises with the bonded services, eliminating dangerous touch voltages",
                B: "Just an RCD",
                C: "Just a longer earth electrode",
                D: "Just thicker CPCs"
              },
              answer: "A",
              explanation:
                "Broken-PEN risk is the reason main bonding is sized per the supply earth on TN-C-S. The bonding equalises potential between the installation and external services during a broken-PEN event, eliminating the dangerous voltage between two metal items in contact with a person."
            },
            {
              number: 19,
              prompt:
                "An EICR finds an installation where the loop tester reads Zs at the origin of 0.18 Ω. The supply is TN-C-S. The defensible interpretation:",
              options: {
                A: "Ze ≈ 0.18 Ω is well within the typical TN-C-S 0.35 Ω quoted limit; satisfactory",
                B: "Unsatisfactory — too low",
                C: "Unsatisfactory — too high",
                D: "Cannot be assessed"
              },
              answer: "A",
              explanation:
                "Ze of 0.18 Ω at the origin is comfortably within the typical TN-C-S maximum of 0.35 Ω quoted by DNOs. Distance from the substation, conductor sizing in the supply, and any parallel earth paths all influence the actual value."
            },
            {
              number: 20,
              prompt:
                "On a 6 A Type B MCB, the table Zs maximum (BS 7671 Table 41.3) is approximately:",
              options: { A: "7.67 Ω", B: "1.37 Ω", C: "0.92 Ω", D: "5.00 Ω" },
              answer: "A",
              explanation:
                "Type B 6 A: Im = 5 × 6 = 30 A. Zs = 230/30 = 7.67 Ω at full operating temperature. 80% rule of thumb gives 6.13 Ω measured cold. Lighting circuits typically have plenty of margin against this figure."
            },
            {
              number: 21,
              prompt:
                "An EICR identifies a fixed appliance fed via a 13 A FCU on a ring final circuit. Typical observation:",
              options: {
                A: "Satisfactory — FCU is the standard means of providing local fault and overload protection for fixed appliances on a 32 A ring; circuit complies with Appendix 15",
                B: "Unsatisfactory — fixed appliances cannot be on a ring",
                C: "Unsatisfactory — must be on a dedicated radial",
                D: "Always C2"
              },
              answer: "A",
              explanation:
                "FCU on a ring is standard practice — Appendix 15 expressly permits fixed appliances on a 32 A ring final via a 13 A FCU. The FCU provides local protection at the appliance's rated current. Satisfactory."
            },
            {
              number: 22,
              prompt:
                "An EICR finds an installation where supplementary bonding in a kitchen has been installed using 4 mm² conductor. Typical observation:",
              options: {
                A: "Satisfactory — supplementary bonding is typically sized 2.5 mm² (with mechanical protection) or 4 mm² (without), per Reg 544.2",
                B: "Unsatisfactory — should be 6 mm²",
                C: "Unsatisfactory — should be 10 mm²",
                D: "Unsatisfactory — over-sized"
              },
              answer: "A",
              explanation:
                "Supplementary bonding sizing per Reg 544.2: 2.5 mm² with mechanical protection, 4 mm² without. The 4 mm² conductor is at the upper end of the standard sizing and is satisfactory regardless of mechanical protection arrangement."
            },
            {
              number: 23,
              prompt:
                "An EICR records 'the inspector measured Zs at three points on a 32 A ring: at the consumer unit, at the midpoint, and at the furthest point. All readings agree within 5%'. Defensible interpretation:",
              options: {
                A: "Satisfactory — readings consistent with a healthy ring; the parallel paths give similar Zs at every point on the ring (this is the protective benefit of the ring topology)",
                B: "Suspicious — should vary with distance",
                C: "Always fail",
                D: "Cannot be assessed"
              },
              answer: "A",
              explanation:
                "Ring final circuits give similar Zs at every point because of the parallel paths. A radial would show Zs increasing with distance; a ring shows uniform Zs. Consistent readings confirm the ring is intact and the parallel paths are working."
            },
            {
              number: 24,
              prompt:
                "An EICR identifies a TT installation where the earth electrode is bonded to the consumer unit's earth bar via a 10 mm² conductor with mechanical protection. Typical observation:",
              options: {
                A: "Satisfactory — 10 mm² with mechanical protection meets Reg 543/544 for TT earthing conductors; well-protected against accidental damage",
                B: "Unsatisfactory — should be 16 mm²",
                C: "Unsatisfactory — should be 6 mm²",
                D: "Unsatisfactory — should be 25 mm²"
              },
              answer: "A",
              explanation:
                "Earthing conductor on TT: 16 mm² without mechanical protection; can be reduced when protected. 10 mm² with mechanical protection is satisfactory. Sizing depends on cable size relationship to circuit CPCs and the fault current rating."
            },
            {
              number: 25,
              prompt:
                "The fundamental purpose of the EICR is:",
              options: {
                A: "To provide a defensible, documented condition assessment of the installation against the current edition of BS 7671, with codes and a Satisfactory/Unsatisfactory result that informs the duty holder's responsibilities",
                B: "To certify new work",
                C: "To replace the EAWR",
                D: "To enforce ESS PRS Regs"
              },
              answer: "A",
              explanation:
                "The EICR is a documented condition assessment. It informs the duty holder of the current state of the installation, codes the observations, and gives a defensible Satisfactory/Unsatisfactory result. EAWR and ESS PRS regulate the wider regime; the EICR is the technical evidence within it."
            }
          ]
        },
      ]
    }
  ],
  scoring: [
    {
      threshold: 0.9,
      label: "Strong — exam-ready on intervals, sampling, EICR outputs and the legal driver"
    },
    { threshold: 0.7, label: "Solid — review intervals or sampling rules" },
    {
      threshold: 0.5,
      label: "Needs targeted revision — re-read GN3 and BS 7671 Chapter 65"
    },
    { threshold: 0, label: "Major gaps — return to GN3 fundamentals before retrying" }
  ],
  priorities: [
    "C1 = danger, immediate written notification to duty holder; C2 = potentially dangerous; C3 = improvement recommended; FI = further investigation may reveal further danger.",
    "Extent and limitations agreed before AND during; recorded in EICR Section D — protects the inspector's liability.",
    "Periodic test sequence is judgement-led, not the prescribed initial-verification sequence; sample where it makes sense, but not on origin/main switchgear.",
    "Any C1, C2 or FI = Unsatisfactory. C3 alone is Satisfactory with improvement recommended."
  ]
};
