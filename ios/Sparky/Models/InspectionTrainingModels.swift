import Foundation

struct InspectionTrainingChoice: Codable, Hashable, Identifiable, Sendable {
    let id: String
    let title: String
    let detail: String

    init(id: String, title: String, detail: String = "") {
        self.id = id
        self.title = title
        self.detail = detail
    }
}

struct InspectionTrainingTask: Codable, Hashable, Identifiable, Sendable {
    let id: String
    let title: String
    let instruction: String
    let choices: [InspectionTrainingChoice]
    let correctChoiceID: String
    let successMessage: String
    let retryMessage: String
    let maximumPoints: Int

    init(
        id: String,
        title: String,
        instruction: String,
        choices: [InspectionTrainingChoice],
        correctChoiceID: String,
        successMessage: String,
        retryMessage: String,
        maximumPoints: Int = 100
    ) {
        self.id = id
        self.title = title
        self.instruction = instruction
        self.choices = choices
        self.correctChoiceID = correctChoiceID
        self.successMessage = successMessage
        self.retryMessage = retryMessage
        self.maximumPoints = maximumPoints
    }

    var correctChoice: InspectionTrainingChoice? {
        choices.first { $0.id == correctChoiceID }
    }
}

enum InspectionTrainingTestMode: String, Codable, Hashable, Sendable {
    case dead = "DEAD TEST"
    case live = "LIVE TEST"
}

struct InspectionTrainingLab: Codable, Hashable, Identifiable, Sendable {
    let id: String
    let title: String
    let shortTitle: String
    let summary: String
    let symbolName: String
    let testMode: InspectionTrainingTestMode
    let safetyNote: String
    let tasks: [InspectionTrainingTask]

    init(
        id: String,
        title: String,
        shortTitle: String,
        summary: String,
        symbolName: String,
        testMode: InspectionTrainingTestMode,
        safetyNote: String,
        tasks: [InspectionTrainingTask]
    ) {
        self.id = id
        self.title = title
        self.shortTitle = shortTitle
        self.summary = summary
        self.symbolName = symbolName
        self.testMode = testMode
        self.safetyNote = safetyNote
        self.tasks = tasks
    }

    var maximumScore: Int {
        tasks.reduce(0) { $0 + max(0, $1.maximumPoints) }
    }
}

struct InspectionTrainingTaskProgress: Codable, Hashable, Sendable {
    var attempts: Int
    var incorrectAttempts: Int
    var earnedPoints: Int
    var isCompleted: Bool

    init(
        attempts: Int = 0,
        incorrectAttempts: Int = 0,
        earnedPoints: Int = 0,
        isCompleted: Bool = false
    ) {
        self.attempts = attempts
        self.incorrectAttempts = incorrectAttempts
        self.earnedPoints = earnedPoints
        self.isCompleted = isCompleted
    }
}

enum InspectionTrainingEvaluationKind: String, Codable, Hashable, Sendable {
    case correct
    case incorrect
    case invalidSelection
}

struct InspectionTrainingEvaluation: Codable, Hashable, Sendable {
    let taskID: String
    let choiceID: String
    let kind: InspectionTrainingEvaluationKind
    let message: String
    let pointsAwarded: Int

    var isCorrect: Bool { kind == .correct }
    var shouldRetry: Bool { kind == .incorrect }
}

struct InspectionTrainingSession: Codable, Hashable, Identifiable, Sendable {
    var labID: String
    var currentTaskIndex: Int
    var taskProgress: [String: InspectionTrainingTaskProgress]
    var selectedChoiceID: String?
    var lastEvaluation: InspectionTrainingEvaluation?
    var startedAt: Date
    var completedAt: Date?

    var id: String { labID }
    var isCompleted: Bool { completedAt != nil }
    var score: Int { taskProgress.values.reduce(0) { $0 + max(0, $1.earnedPoints) } }
    var completedTaskIDs: Set<String> {
        Set(taskProgress.compactMap { $0.value.isCompleted ? $0.key : nil })
    }
    var attemptCount: Int {
        taskProgress.values.reduce(0) { $0 + max(0, $1.attempts) }
    }
    var incorrectAttemptCount: Int {
        taskProgress.values.reduce(0) { $0 + max(0, $1.incorrectAttempts) }
    }

    init(
        labID: String,
        currentTaskIndex: Int = 0,
        taskProgress: [String: InspectionTrainingTaskProgress] = [:],
        selectedChoiceID: String? = nil,
        lastEvaluation: InspectionTrainingEvaluation? = nil,
        startedAt: Date = .now,
        completedAt: Date? = nil
    ) {
        self.labID = labID
        self.currentTaskIndex = currentTaskIndex
        self.taskProgress = taskProgress
        self.selectedChoiceID = selectedChoiceID
        self.lastEvaluation = lastEvaluation
        self.startedAt = startedAt
        self.completedAt = completedAt
    }
}

struct InspectionTrainingProgress: Equatable, Hashable, Sendable {
    let completedTasks: Int
    let totalTasks: Int
    let earnedPoints: Int
    let maximumPoints: Int
    let isCompleted: Bool

    var fractionCompleted: Double {
        totalTasks == 0 ? 0 : Double(completedTasks) / Double(totalTasks)
    }

    var scorePercentage: Double {
        maximumPoints == 0 ? 0 : Double(earnedPoints) / Double(maximumPoints)
    }
}

struct InspectionTrainingTransition: Equatable, Hashable, Sendable {
    let session: InspectionTrainingSession
    let evaluation: InspectionTrainingEvaluation
}

enum InspectionTrainingCatalog {
    static let generalSafetyNote = "Training simulator only. It does not authorise real inspection or testing. Real work requires competence, safe isolation or justified live-working controls, suitable instruments, the current procedure and appropriate supervision."

    static let labs: [InspectionTrainingLab] = [
        protectiveConductorContinuity,
        ringFinalContinuity,
        insulationResistance,
        earthFaultLoopImpedance,
        prospectiveFaultCurrent,
    ]

    static func lab(id: String) -> InspectionTrainingLab? {
        labs.first { $0.id == id }
    }

    private static let protectiveConductorContinuity = InspectionTrainingLab(
        id: "protective-conductor-continuity",
        title: "Protective Conductor Continuity",
        shortTitle: "CPC continuity",
        summary: "Practise the safe sequence for confirming that exposed-conductive-parts have a continuous protective path.",
        symbolName: "point.3.connected.trianglepath.dotted",
        testMode: .dead,
        safetyNote: "This is a dead-test exercise. Use the full safe-isolation sequence: identify and lock off the correct isolation point, prove the voltage indicator, test the required conductor combinations, then re-prove the indicator. Remove links and restore every connection when the test is complete.",
        tasks: [
            task(
                id: "cpc-establish-safe-state",
                title: "Establish a safe state",
                instruction: "What must be established before beginning this dead-test exercise?",
                correctChoiceID: "isolate-prove-dead",
                success: "Correct. Secure isolation and a proven-dead check come before touching conductors.",
                retry: "Do not rely on a switch position or begin on an energised circuit. Start with the approved isolation and prove-dead procedure.",
                choices: [
                    choice("isolate-prove-dead", "Complete the full safe-isolation sequence", "Identify and lock off the correct point, prove the voltage indicator, test the required conductor combinations, then re-prove the indicator."),
                    choice("switch-off-only", "Turn the local switch off", "A local control alone does not establish safe isolation."),
                    choice("test-live", "Leave the circuit energised", "Continuity testing is not performed on an energised circuit."),
                ]
            ),
            task(
                id: "cpc-prepare-instrument",
                title: "Prepare the instrument",
                instruction: "Which instrument preparation supports a meaningful low-resistance reading?",
                correctChoiceID: "inspect-null-leads",
                success: "Correct. Check the tester and leads, then compensate for their resistance in accordance with its instructions.",
                retry: "Lead resistance can distort a low-ohm result. Inspect the equipment and account for the leads first.",
                choices: [
                    choice("inspect-null-leads", "Check and null the continuity leads", "Use a suitable low-resistance continuity function and follow the instrument instructions."),
                    choice("use-voltage-mode", "Select AC voltage mode", "Voltage mode does not perform the required continuity measurement."),
                    choice("ignore-leads", "Ignore the lead resistance", "That can make a low-resistance result misleading."),
                ]
            ),
            task(
                id: "cpc-select-method",
                title: "Select the test arrangement",
                instruction: "For this simulated R1+R2 check, which high-level arrangement is appropriate?",
                correctChoiceID: "temporary-link",
                success: "Correct. A controlled temporary link at the origin lets the combined line-and-CPC path be checked at points on the circuit.",
                retry: "The exercise needs a defined return path. Use the documented temporary-link method only while the circuit is safely isolated.",
                choices: [
                    choice("temporary-link", "Link line to CPC at the origin", "Then measure the combined path at the selected circuit points."),
                    choice("link-neutral-earth-live", "Bridge neutral and earth while live", "That is unsafe and is not this dead-test method."),
                    choice("measure-unconnected", "Measure two unconnected points", "An undefined path cannot demonstrate continuity."),
                ]
            ),
            task(
                id: "cpc-interpret-results",
                title: "Interpret the pattern",
                instruction: "Most simulated points read about 0.54 ohms, but one reads 3.8 ohms. What is the sound response?",
                correctChoiceID: "investigate-outlier",
                success: "Correct. An inconsistent high reading needs investigation; a single convenient value must not be used to hide it.",
                retry: "Continuity is judged from the complete pattern and circuit details. Treat the isolated high value as evidence to investigate.",
                choices: [
                    choice("investigate-outlier", "Stop and investigate the outlier", "Check the point, connections, test contact and circuit arrangement."),
                    choice("average-readings", "Average all the readings", "Averaging can conceal a discontinuity or poor connection."),
                    choice("record-lowest", "Record only the lowest result", "The record must represent the actual test evidence."),
                ]
            ),
            task(
                id: "cpc-restore-record",
                title: "Restore and record",
                instruction: "What closes the exercise correctly?",
                correctChoiceID: "remove-restore-record",
                success: "Correct. Remove the test link, restore and verify connections, then record the result and any action taken.",
                retry: "Temporary links and disconnected conductors must never be left behind. Restore, verify and document the circuit.",
                choices: [
                    choice("remove-restore-record", "Remove links, restore, verify and record", "Leave the installation in its intended condition and preserve the evidence."),
                    choice("leave-link", "Leave the temporary link fitted", "That creates an unsafe and incorrect circuit condition."),
                    choice("memory-only", "Keep the result from memory", "Test results and relevant observations must be recorded."),
                ]
            ),
        ]
    )

    private static let ringFinalContinuity = InspectionTrainingLab(
        id: "ring-final-continuity",
        title: "Ring-Final Circuit Continuity",
        shortTitle: "Ring final",
        summary: "Work through end-to-end and cross-connection checks used to assess the continuity and pattern of a ring-final circuit.",
        symbolName: "arrow.trianglehead.2.clockwise.rotate.90",
        testMode: .dead,
        safetyNote: "This is a dead-test exercise. Identify and lock off the correct isolation point, prove the voltage indicator, test the required conductor combinations, then re-prove the indicator before identifying or disconnecting conductors. Restore all terminations afterwards.",
        tasks: [
            task(
                id: "ring-isolate-identify",
                title: "Isolate and identify",
                instruction: "What is the correct starting state for ring-final continuity testing?",
                correctChoiceID: "safe-isolate-label",
                success: "Correct. Prove the circuit dead and positively identify its conductors before separating the ring ends.",
                retry: "Ring ends must not be handled until the circuit is securely isolated, proven dead and correctly identified.",
                choices: [
                    choice("safe-isolate-label", "Safely isolate, prove dead and identify the ring ends", "Lock off the correct point; prove, use and re-prove the voltage indicator through the required safe-isolation sequence."),
                    choice("disconnect-energised", "Disconnect one end while energised"),
                    choice("guess-pairs", "Pair conductors by appearance alone"),
                ]
            ),
            task(
                id: "ring-end-to-end",
                title: "Take end-to-end readings",
                instruction: "Which set of end-to-end measurements belongs in the initial ring check?",
                correctChoiceID: "r1-rn-r2",
                success: "Correct. The line, neutral and CPC loops are measured separately and their values considered against conductor sizes and circuit details.",
                retry: "The first stage confirms each conductor loop. Measure the corresponding ends of line, neutral and CPC.",
                choices: [
                    choice("r1-rn-r2", "Measure r1, rn and r2 end to end"),
                    choice("line-earth-live", "Measure live line-to-earth voltage"),
                    choice("one-random-pair", "Take one reading from a random pair"),
                ]
            ),
            task(
                id: "ring-cross-connect",
                title: "Cross-connect deliberately",
                instruction: "What is the purpose of the documented cross-connection stage?",
                correctChoiceID: "create-combined-paths",
                success: "Correct. Opposite ends are paired in a controlled way to create predictable combined paths for measurements around the ring.",
                retry: "Cross-connections are deliberate test paths, not arbitrary conductor links. Follow the identified pairing in the documented method.",
                choices: [
                    choice("create-combined-paths", "Create predictable combined paths around the ring"),
                    choice("energise-link", "Energise the temporary links"),
                    choice("bypass-cpc", "Remove the CPC from the assessment"),
                ]
            ),
            task(
                id: "ring-read-pattern",
                title: "Read the pattern",
                instruction: "Comparable simulated readings on this 2.5/1.5 mm2 ring are 0.28 ohms and 0.29 ohms. What is the sound interpretation?",
                correctChoiceID: "close-continue-pattern",
                success: "Correct. The close values support the expected pattern at these points; continue the complete set of checks and assess it against the actual circuit details.",
                retry: "Do not invent a universal pass threshold or combine unrelated readings. Look for the expected pattern across the complete circuit evidence.",
                choices: [
                    choice("close-continue-pattern", "They are close; continue and assess the full pattern"),
                    choice("universal-one-ohm", "Anything below 1 ohm is automatically a pass"),
                    choice("add-readings", "Add them and record 0.57 ohms for every point"),
                ]
            ),
            task(
                id: "ring-complete",
                title: "Complete the test",
                instruction: "Which action completes the ring exercise?",
                correctChoiceID: "remove-links-reterminate",
                success: "Correct. Remove every temporary cross-connection, reterminate correctly, verify the work and record the full findings.",
                retry: "The circuit must be fully restored and checked. A reading is not the end of the safe test process.",
                choices: [
                    choice("remove-links-reterminate", "Remove links, reterminate, verify and record"),
                    choice("leave-disconnected", "Leave the ring ends separated"),
                    choice("record-no-details", "Record only 'pass' with no results"),
                ]
            ),
        ]
    )

    private static let insulationResistance = InspectionTrainingLab(
        id: "insulation-resistance",
        title: "Insulation Resistance",
        shortTitle: "Insulation",
        summary: "Practise planning an insulation-resistance test without exposing connected equipment or people to the test voltage.",
        symbolName: "shield.lefthalf.filled",
        testMode: .dead,
        safetyNote: "This is a dead-test exercise that can apply a hazardous DC test voltage. Complete the full safe-isolation sequence, control connected equipment, follow the instrument instructions and confirm the circuit is discharged before touching or restoring it.",
        tasks: [
            task(
                id: "ir-isolate-survey",
                title: "Isolate and survey",
                instruction: "Before applying an insulation test voltage, what must the tester establish?",
                correctChoiceID: "isolate-identify-equipment",
                success: "Correct. Prove dead and identify connected loads, controls, SPDs and electronic equipment that could affect safety or be damaged.",
                retry: "Do not apply a test voltage blindly. Establish safe isolation and what remains connected first.",
                choices: [
                    choice("isolate-identify-equipment", "Safely isolate, prove dead and assess equipment", "Lock off the correct point; prove, use and re-prove the voltage indicator through the required sequence before applying a test voltage."),
                    choice("apply-max-voltage", "Immediately apply the highest test voltage"),
                    choice("ask-occupant-only", "Rely only on an occupant's description"),
                ]
            ),
            task(
                id: "ir-protect-equipment",
                title: "Protect connected equipment",
                instruction: "Vulnerable equipment cannot practicably be disconnected in this simulated exception. Which documented alternative applies?",
                correctChoiceID: "permitted-250-arrangement",
                success: "Correct. For this permitted exception, use 250 V DC and retain the 1 megohm minimum, while following the current procedure for the equipment and circuit.",
                retry: "Do not risk connected electronics or lower the acceptance value arbitrarily. Use only the alternative allowed by the applicable procedure.",
                choices: [
                    choice("permitted-250-arrangement", "Use the permitted 250 V DC arrangement; minimum 1 megohm"),
                    choice("ignore-devices", "Apply 1000 V DC through the equipment"),
                    choice("lower-minimum", "Use 250 V DC and accept any non-zero reading"),
                ]
            ),
            task(
                id: "ir-select-voltage",
                title: "Select the test voltage",
                instruction: "For this circuit with nominal voltage up to and including 500 V, excluding SELV and PELV, and with vulnerable equipment disconnected, which setting applies?",
                correctChoiceID: "ordinary-500",
                success: "Correct. This scenario uses 500 V DC with a 1 megohm minimum. Always confirm the applicable requirements and actual circuit conditions.",
                retry: "For this defined circuit, use the applicable 500 V DC setting rather than assuming the highest setting is best.",
                choices: [
                    choice("ordinary-500", "500 V DC; minimum 1 megohm"),
                    choice("always-1000", "1000 V DC because higher is always better"),
                    choice("use-ac-range", "Select the AC voltage range"),
                ]
            ),
            task(
                id: "ir-interpret",
                title: "Interpret the result",
                instruction: "The simulation gives 2.8 megohms where the applicable minimum is 1.0 megohm. What can you conclude?",
                correctChoiceID: "meets-min-context",
                success: "Correct. It exceeds that stated minimum, but the tester still considers circuit extent, trends, parallel paths and any suspiciously low result.",
                retry: "Compare like units with the applicable minimum, then interpret the result in the context of the actual circuit.",
                choices: [
                    choice("meets-min-context", "It meets the stated minimum; assess it in context"),
                    choice("automatic-perfect", "It proves the whole installation is perfect"),
                    choice("below-minimum", "2.8 megohms is below 1.0 megohm"),
                ]
            ),
            task(
                id: "ir-discharge-restore",
                title: "Discharge and restore",
                instruction: "What must happen after the simulated reading?",
                correctChoiceID: "discharge-restore-record",
                success: "Correct. Confirm discharge, restore every intended connection and device, verify the circuit and record the result and test conditions.",
                retry: "The circuit may retain charge and equipment may have been disconnected. Discharge, restore, verify and document it.",
                choices: [
                    choice("discharge-restore-record", "Discharge, restore, verify and record"),
                    choice("touch-immediately", "Touch conductors immediately"),
                    choice("leave-devices-out", "Leave protected devices disconnected"),
                ]
            ),
        ]
    )

    private static let earthFaultLoopImpedance = InspectionTrainingLab(
        id: "earth-fault-loop-impedance",
        title: "Earth Fault Loop Impedance",
        shortTitle: "Loop impedance",
        summary: "Practise the controls, test selection and interpretation used when assessing an earth-fault loop path.",
        symbolName: "waveform.path.ecg",
        testMode: .live,
        safetyNote: "Loop testing may involve live conductors. It is for competent persons using justified live-working controls, suitable PPE and a correctly rated tester. Prefer dead-test or calculated evidence where the current procedure allows it.",
        tasks: [
            task(
                id: "zs-live-controls",
                title: "Confirm live-test controls",
                instruction: "Before any live loop test is contemplated, what must be established?",
                correctChoiceID: "justify-control-live-test",
                success: "Correct. Confirm the test is necessary, the tester is competent, the instrument is suitable and access to danger is controlled.",
                retry: "A live reading is never routine permission to take risks. Establish justification and the full safe system of work first.",
                choices: [
                    choice("justify-control-live-test", "Justify the test and apply live-working controls"),
                    choice("remove-ppe", "Remove protective equipment for convenience"),
                    choice("allow-access", "Let others approach exposed test points"),
                ]
            ),
            task(
                id: "zs-select-function",
                title: "Select the test function",
                instruction: "In this scenario the RCD provides fault protection. What is the preferred verification downstream?",
                correctChoiceID: "alternative-verification",
                success: "Correct. Verify CPC continuity and use the permitted alternative determination method; perform a live loop test only when it is justified and controlled.",
                retry: "Do not default to an unnecessary live reading. Use CPC continuity and a permitted alternative determination method where the current procedure allows it.",
                choices: [
                    choice("alternative-verification", "Verify CPC continuity and use the permitted alternative method", "Only perform a live loop test when it is justified and controlled."),
                    choice("bypass-rcd", "Permanently bypass the RCD"),
                    choice("continuity-live", "Use continuity mode on the live circuit"),
                ]
            ),
            task(
                id: "zs-test-point",
                title: "Control the test point",
                instruction: "If a direct live loop test remains necessary, which principle applies while obtaining the reading?",
                correctChoiceID: "rated-leads-controlled-contact",
                success: "Correct. Use correctly rated equipment, guarded probes or approved adapters, stable contact and controlled access throughout the live measurement.",
                retry: "Live test points demand suitable protection and controlled contact. Improvised bare probes are not acceptable.",
                choices: [
                    choice("rated-leads-controlled-contact", "Use rated leads and controlled contact"),
                    choice("hold-bare-wire", "Hold a bare conductor by hand"),
                    choice("unattended", "Leave the live setup unattended"),
                ]
            ),
            task(
                id: "zs-compare",
                title: "Calculate and compare",
                instruction: "In this virtual exercise Ze is 0.35 ohms and R1+R2 is 0.25 ohms. What is the calculated Zs response?",
                correctChoiceID: "zs-zero-six",
                success: "Correct. Zs is 0.60 ohms in this scenario; it must then be compared with the applicable limit for the actual protective device and conditions.",
                retry: "Use Zs = Ze + (R1+R2), then make a device-specific comparison. There is no universal Zs pass value.",
                choices: [
                    choice("zs-zero-six", "0.60 ohms, then compare with the device-specific limit"),
                    choice("zs-zero-one", "0.10 ohms by subtraction"),
                    choice("zs-universal", "It passes automatically because it is below 1 ohm"),
                ]
            ),
            task(
                id: "zs-finish",
                title: "Finish safely",
                instruction: "What completes the simulated live test?",
                correctChoiceID: "withdraw-safe-record",
                success: "Correct. Withdraw the test equipment safely, replace covers and barriers, verify the installation state and record the result and method.",
                retry: "The area and installation must be returned to a safe condition and the evidence documented.",
                choices: [
                    choice("withdraw-safe-record", "Make safe, restore barriers and record"),
                    choice("leave-exposed", "Leave the test point exposed"),
                    choice("omit-method", "Record a number with no test method"),
                ]
            ),
        ]
    )

    private static let prospectiveFaultCurrent = InspectionTrainingLab(
        id: "prospective-fault-current",
        title: "Prospective Fault Current",
        shortTitle: "PFC",
        summary: "Practise selecting, comparing and recording prospective short-circuit and earth-fault current evidence.",
        symbolName: "bolt.trianglebadge.exclamationmark",
        testMode: .live,
        safetyNote: "A direct PFC measurement is live and may expose the tester to high fault energy. First determine whether PFC can be established by calculation, enquiry or another permitted method. If live measurement is necessary, a competent person must justify and control it using suitably rated equipment.",
        tasks: [
            task(
                id: "pfc-risk-controls",
                title: "Assess the live-test risk",
                instruction: "What is the first decision before any direct PFC measurement?",
                correctChoiceID: "non-live-evidence-first",
                success: "Correct. Use permitted non-live evidence where suitable. Only if direct measurement remains necessary should a competent person justify and control the live test with suitably rated equipment.",
                retry: "Do not default to connecting at a high-energy live point. First consider calculation, enquiry or another permitted determination method.",
                choices: [
                    choice("non-live-evidence-first", "Use permitted non-live evidence where suitable", "Otherwise justify and control live measurement with suitably rated equipment."),
                    choice("any-multimeter", "Use any available multimeter"),
                    choice("uncontrolled-board", "Work at an open board with unrestricted access"),
                ]
            ),
            task(
                id: "pfc-select-mode",
                title: "Select the measurement",
                instruction: "Which quantities may need to be established for the simulated single-phase origin?",
                correctChoiceID: "pscc-and-pefc",
                success: "Correct. Establish prospective short-circuit current and prospective earth-fault current using the suitable tester and documented method.",
                retry: "PFC evidence considers the relevant line-neutral and line-earth fault paths, not a continuity reading.",
                choices: [
                    choice("pscc-and-pefc", "PSCC and PEFC"),
                    choice("insulation-only", "Insulation resistance only"),
                    choice("cpc-colour", "The CPC colour only"),
                ]
            ),
            task(
                id: "pfc-controlled-reading",
                title: "Take controlled readings",
                instruction: "If a direct live measurement remains necessary, which approach is appropriate?",
                correctChoiceID: "approved-adapter-stable",
                success: "Correct. Use an approved connection arrangement, keep hands and others clear, and let the rated instrument complete a stable reading.",
                retry: "Do not improvise at a high-energy live point. Use approved connections and maintain safe control of the area.",
                choices: [
                    choice("approved-adapter-stable", "Use approved connections and maintain safe control"),
                    choice("loose-probes", "Balance loose probes on terminals"),
                    choice("change-range-connected", "Alter exposed connections casually"),
                ]
            ),
            task(
                id: "pfc-record-highest",
                title: "Choose the recorded value",
                instruction: "The simulation gives PEFC 1.20 kA and PSCC 1.85 kA. Which PFC value is recorded for this exercise?",
                correctChoiceID: "record-1-85",
                success: "Correct. Record the greater relevant prospective value: 1.85 kA in this simulated case.",
                retry: "PFC represents the greater relevant prospective fault-current value here, not the sum or the lower reading.",
                choices: [
                    choice("record-1-85", "1.85 kA"),
                    choice("record-1-20", "1.20 kA"),
                    choice("record-3-05", "3.05 kA"),
                ]
            ),
            task(
                id: "pfc-compare-capacity",
                title: "Check equipment capability",
                instruction: "What is the essential final assessment after recording PFC?",
                correctChoiceID: "compare-breaking-capacity",
                success: "Correct. Confirm that protective and switching equipment has the required breaking or withstand capability, then restore and document the test state.",
                retry: "A PFC number matters because equipment must safely interrupt or withstand the possible fault. Compare it with the applicable ratings.",
                choices: [
                    choice("compare-breaking-capacity", "Compare it with equipment breaking and withstand ratings"),
                    choice("ignore-rating", "Ignore device ratings if power is restored"),
                    choice("compare-load-current", "Compare it only with normal load current"),
                ]
            ),
        ]
    )

    private static func choice(
        _ id: String,
        _ title: String,
        _ detail: String = ""
    ) -> InspectionTrainingChoice {
        InspectionTrainingChoice(id: id, title: title, detail: detail)
    }

    private static func task(
        id: String,
        title: String,
        instruction: String,
        correctChoiceID: String,
        success: String,
        retry: String,
        choices: [InspectionTrainingChoice]
    ) -> InspectionTrainingTask {
        InspectionTrainingTask(
            id: id,
            title: title,
            instruction: instruction,
            choices: choices,
            correctChoiceID: correctChoiceID,
            successMessage: success,
            retryMessage: retry
        )
    }
}
