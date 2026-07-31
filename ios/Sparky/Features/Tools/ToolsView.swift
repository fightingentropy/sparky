import SwiftUI

private enum ToolKind: String, CaseIterable, Identifiable {
    case bendCut
    case angleDrop

    var id: String { rawValue }

    var title: String {
        switch self {
        case .bendCut: "Bend cut"
        case .angleDrop: "Angle drop"
        }
    }

    var subtitle: String {
        switch self {
        case .bendCut: "Tray or trunking marks"
        case .angleDrop: "Drop and developed length"
        }
    }

    var symbol: String {
        switch self {
        case .bendCut: "angle"
        case .angleDrop: "triangle"
        }
    }
}

struct ToolsView: View {
    let studyState: StudyStateStore

    @AppStorage("selectedTool") private var selectedToolRaw = ToolKind.bendCut.rawValue
    @State private var showingHistory = false

    private var selectedTool: ToolKind {
        get { ToolKind(rawValue: selectedToolRaw) ?? .bendCut }
        nonmutating set { selectedToolRaw = newValue.rawValue }
    }

    var body: some View {
        NavigationStack {
            ZStack {
                SparkyBackdrop()

                ScrollView {
                    LazyVStack(spacing: 18) {
                        toolPicker
                        selectedCalculator
                    }
                    .padding(.horizontal, SparkyLayout.pageInset)
                    .padding(.bottom, 30)
                }
                .scrollDismissesKeyboard(.interactively)
                .scrollIndicators(.hidden)
            }
            .navigationTitle("Tools")
            .toolbar {
                ToolbarItem(placement: .topBarLeading) {
                    SparkyBrandMark(size: 31)
                }
                ToolbarItem(placement: .topBarTrailing) {
                    Button {
                        showingHistory = true
                    } label: {
                        Image(systemName: "clock.arrow.circlepath")
                    }
                    .accessibilityLabel("Calculation history")
                }
                ToolbarItem(placement: .topBarTrailing) {
                    SparkyAccountToolbarItem()
                }
                ToolbarItemGroup(placement: .keyboard) {
                    Spacer()
                    Button("Done") { Keyboard.dismiss() }
                }
            }
            .sheet(isPresented: $showingHistory) {
                NavigationStack {
                    ToolHistorySheet(studyState: studyState)
                }
                .presentationDetents([.medium, .large])
            }
        }
    }

    private var toolPicker: some View {
        VStack(alignment: .leading, spacing: 12) {
            SparkySectionHeader(
                eyebrow: "Calculator library",
                title: "2 site and design tools",
                detail: "Offline"
            )

            ScrollView(.horizontal) {
                HStack(spacing: 10) {
                    ForEach(ToolKind.allCases) { tool in
                        Button {
                            selectedTool = tool
                            Haptics.selection()
                        } label: {
                            VStack(alignment: .leading, spacing: 9) {
                                Image(systemName: tool.symbol)
                                    .font(.headline)
                                Text(tool.title)
                                    .font(.subheadline.weight(.bold))
                                Text(tool.subtitle)
                                    .font(.caption2)
                                    .foregroundStyle(Color.sparkyMuted)
                                    .lineLimit(2)
                            }
                            .foregroundStyle(selectedTool == tool ? Color.sparkyAccent : Color.sparkyText)
                            .frame(width: 142, height: 105, alignment: .topLeading)
                            .padding(13)
                            .background(selectedTool == tool ? Color.sparkyAccentSoft : Color.sparkySurface)
                            .clipShape(RoundedRectangle(cornerRadius: 17, style: .continuous))
                            .overlay {
                                RoundedRectangle(cornerRadius: 17, style: .continuous)
                                    .stroke(
                                        selectedTool == tool ? Color.sparkyAccent.opacity(0.38) : Color.sparkyBorder,
                                        lineWidth: 1
                                    )
                            }
                        }
                        .buttonStyle(.plain)
                        .accessibilityAddTraits(selectedTool == tool ? .isSelected : [])
                    }
                }
            }
            .scrollIndicators(.hidden)
        }
    }

    @ViewBuilder
    private var selectedCalculator: some View {
        switch selectedTool {
        case .bendCut:
            BendCutCalculator(studyState: studyState)
        case .angleDrop:
            AngleDropCalculator(studyState: studyState)
        }
    }
}

private struct CalculatorHeader: View {
    let title: String
    let detail: String
    let onReset: () -> Void

    var body: some View {
        HStack(alignment: .top) {
            VStack(alignment: .leading, spacing: 4) {
                Text(title)
                    .font(.title3.weight(.bold))
                    .foregroundStyle(Color.sparkyText)
                Text(detail)
                    .font(.caption)
                    .foregroundStyle(Color.sparkyMuted)
            }
            Spacer()
            Button("Reset", action: onReset)
                .font(.caption.weight(.semibold))
                .buttonStyle(.bordered)
                .tint(Color.sparkyAccent)
        }
    }
}

private struct ValidationCallout: View {
    let message: String

    var body: some View {
        Label(message, systemImage: "exclamationmark.triangle.fill")
            .font(.caption)
            .foregroundStyle(Color.sparkyDanger)
            .frame(maxWidth: .infinity, alignment: .leading)
            .padding(12)
            .background(Color.sparkyDanger.opacity(0.10))
            .clipShape(RoundedRectangle(cornerRadius: 12, style: .continuous))
    }
}

private struct FormulaDisclosure: View {
    let text: String

    var body: some View {
        DisclosureGroup("How it works") {
            Text(text)
                .font(.caption.monospaced())
                .foregroundStyle(Color.sparkyMuted)
                .frame(maxWidth: .infinity, alignment: .leading)
                .padding(.top, 8)
        }
        .font(.subheadline.weight(.semibold))
        .foregroundStyle(Color.sparkyAccent)
    }
}

private struct PresetButton: View {
    let title: String
    let action: () -> Void

    var body: some View {
        Button(title, action: action)
            .font(.caption.weight(.semibold))
            .buttonStyle(.bordered)
            .tint(Color.sparkyAccent)
    }
}

private struct ContainmentRodCalculator: View {
    let studyState: StudyStateStore

    @AppStorage("rod.overall") private var overall = "3165"
    @AppStorage("rod.top") private var top = "2900"
    @AppStorage("rod.buffer") private var buffer = "100"
    @AppStorage("rod.depth") private var depth = "40"

    private var result: CalculatorEngine.ContainmentRodResult {
        CalculatorEngine.containmentRod(
            overallHeight: overall,
            topOfUnistrut: top,
            buffer: buffer,
            unistrutDepth: depth
        )
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 18) {
            CalculatorHeader(
                title: "Containment rod",
                detail: "Threaded rod cut length and finished drop",
                onReset: reset
            )

            LazyVGrid(columns: [.init(.flexible()), .init(.flexible())], spacing: 12) {
                SparkyField(title: "Overall height", text: $overall, unit: "mm")
                SparkyField(title: "Top of Unistrut", text: $top, unit: "mm")
                SparkyField(title: "Buffer", text: $buffer, unit: "mm")
                SparkyField(title: "Unistrut depth", text: $depth, unit: "mm")
            }

            ScrollView(.horizontal) {
                HStack {
                    PresetButton(title: "Ceiling trapeze") {
                        overall = "3165"; top = "2900"; buffer = "100"; depth = "40"
                    }
                    PresetButton(title: "Low bulkhead") {
                        overall = "2600"; top = "2450"; buffer = "80"; depth = "40"
                    }
                    PresetButton(title: "Deep drop") {
                        overall = "4200"; top = "3200"; buffer = "150"; depth = "40"
                    }
                }
            }
            .scrollIndicators(.hidden)

            if let message = result.validationMessage {
                ValidationCallout(message: message)
            }

            VStack(spacing: 12) {
                SparkyResultRow(label: "Rod cut length", value: result.rodCutLengthValue, emphasized: true)
                Divider().overlay(Color.sparkyBorder)
                SparkyResultRow(label: "Actual drop", value: result.actualDropValue)
                SparkyResultRow(label: "Bottom of Unistrut", value: result.bottomOfUnistrutDropValue)
                CopyButton(value: result.rodCutLengthValue, label: "Copy cut length") {
                    studyState.recordCalculation(tool: "Containment rod", value: result.rodCutLengthValue)
                }
            }
            .padding(15)
            .background(Color.sparkyAccentSoft)
            .clipShape(RoundedRectangle(cornerRadius: 16, style: .continuous))

            FormulaDisclosure(text: "Rod cut = (overall height − top of Unistrut) + buffer\nBottom drop = actual drop + Unistrut depth")
        }
        .sparkyCard(padding: 17)
    }

    private func reset() {
        let values = CalculatorEngine.Defaults.containmentRod
        overall = values.overallHeight
        top = values.topOfUnistrut
        buffer = values.buffer
        depth = values.unistrutDepth
        Haptics.selection()
    }
}

private struct UnistrutCalculator: View {
    let studyState: StudyStateStore

    @AppStorage("unistrut.count") private var count = 3
    @AppStorage("unistrut.width1") private var width1 = "225"
    @AppStorage("unistrut.width2") private var width2 = "125"
    @AppStorage("unistrut.width3") private var width3 = "100"
    @AppStorage("unistrut.left") private var left = "50"
    @AppStorage("unistrut.right") private var right = "50"
    @AppStorage("unistrut.gap") private var gap = "50"

    private var containments: [CalculatorEngine.UnistrutContainment] {
        let candidates = [
            CalculatorEngine.UnistrutContainment(id: 1, label: "Tray", width: width1),
            CalculatorEngine.UnistrutContainment(id: 2, label: "Basket", width: width2),
            CalculatorEngine.UnistrutContainment(id: 3, label: "Trunking", width: width3)
        ]
        return Array(candidates.prefix(max(1, min(count, 3))))
    }

    private var result: CalculatorEngine.UnistrutLengthResult {
        CalculatorEngine.unistrutLength(
            containments: containments,
            leftAllowance: left,
            rightAllowance: right,
            gap: gap
        )
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 18) {
            CalculatorHeader(
                title: "Unistrut length",
                detail: "Support rail with gaps and side allowances",
                onReset: reset
            )

            Stepper("\(count) containment\(count == 1 ? "" : "s")", value: $count, in: 1...3)
                .font(.subheadline.weight(.semibold))
                .tint(Color.sparkyAccent)

            VStack(spacing: 11) {
                containmentRow(number: 1, label: "Tray", width: $width1)
                if count >= 2 { containmentRow(number: 2, label: "Basket", width: $width2) }
                if count >= 3 { containmentRow(number: 3, label: "Trunking", width: $width3) }
            }

            LazyVGrid(columns: [.init(.flexible()), .init(.flexible())], spacing: 12) {
                SparkyField(title: "Left allowance", text: $left, unit: "mm")
                SparkyField(title: "Right allowance", text: $right, unit: "mm")
                SparkyField(title: "Gap", text: $gap, unit: "mm")
            }

            if let message = result.validationMessage {
                ValidationCallout(message: message)
            }

            VStack(spacing: 12) {
                SparkyResultRow(label: "Final cut length", value: result.finalLengthValue, emphasized: true)
                Text("Rounded up to the nearest 50 mm hole spacing")
                    .font(.caption)
                    .foregroundStyle(Color.sparkyMuted)
                    .frame(maxWidth: .infinity, alignment: .leading)
                Divider().overlay(Color.sparkyBorder)
                SparkyResultRow(label: "Containment", value: result.totalContainmentWidthValue)
                SparkyResultRow(label: "Side allowances", value: result.totalSideAllowanceValue)
                SparkyResultRow(label: result.gapLabel.capitalized, value: result.totalGapAllowanceValue)
                SparkyResultRow(label: "Exact", value: result.exactLengthValue)
                CopyButton(value: result.finalLengthValue, label: "Copy cut length") {
                    studyState.recordCalculation(tool: "Unistrut length", value: result.finalLengthValue)
                }
            }
            .padding(15)
            .background(Color.sparkyAccentSoft)
            .clipShape(RoundedRectangle(cornerRadius: 16, style: .continuous))

            FormulaDisclosure(text: "Length = widths + left allowance + right allowance + (gaps × gap size)\nRound up to nearest 50 mm")
        }
        .sparkyCard(padding: 17)
    }

    private func containmentRow(number: Int, label: String, width: Binding<String>) -> some View {
        HStack(spacing: 12) {
            Text("\(number)")
                .font(.caption.bold().monospacedDigit())
                .foregroundStyle(Color.sparkyAccent)
                .frame(width: 28, height: 28)
                .background(Color.sparkyAccentSoft)
                .clipShape(Circle())
            VStack(alignment: .leading, spacing: 3) {
                Text(label)
                    .font(.caption.weight(.semibold))
                    .foregroundStyle(Color.sparkyMuted)
                TextField("Width", text: width)
                    .keyboardType(.decimalPad)
                    .font(.body.monospacedDigit())
                    .foregroundStyle(Color.sparkyText)
            }
            Text("mm")
                .font(.caption.bold())
                .foregroundStyle(Color.sparkyMuted)
        }
        .padding(12)
        .background(Color.sparkyBackground.opacity(0.75))
        .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: 14, style: .continuous)
                .stroke(Color.sparkyBorder, lineWidth: 1)
        }
    }

    private func reset() {
        let values = CalculatorEngine.Defaults.unistrutLength
        count = values.containments.count
        width1 = values.containments[0].width
        width2 = values.containments[1].width
        width3 = values.containments[2].width
        left = values.leftAllowance
        right = values.rightAllowance
        gap = values.gap
        Haptics.selection()
    }
}

private struct BendCutCalculator: View {
    let studyState: StudyStateStore

    @AppStorage("bendCut.angle") private var angle = "90"
    @AppStorage("bendCut.cuts") private var cuts = "1"
    @AppStorage("bendCut.width") private var width = "100"

    private var result: CalculatorEngine.ContainmentBendCutResult {
        CalculatorEngine.containmentBendCut(bendAngle: angle, cuts: cuts, width: width)
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 18) {
            CalculatorHeader(
                title: "Containment bend cut",
                detail: "Notch marks for tray, trunking or basket",
                onReset: reset
            )

            LazyVGrid(columns: [.init(.flexible()), .init(.flexible())], spacing: 12) {
                SparkyField(title: "Total bend angle", text: $angle, unit: "°")
                SparkyField(title: "Number of cuts", text: $cuts)
                SparkyField(title: "Containment width", text: $width, unit: "mm")
            }

            ScrollView(.horizontal) {
                HStack {
                    PresetButton(title: "90° · 1 cut") { angle = "90"; cuts = "1"; width = "100" }
                    PresetButton(title: "67° · 2 cuts") { angle = "67"; cuts = "2"; width = "300" }
                    PresetButton(title: "90° · 300 mm") { angle = "90"; cuts = "1"; width = "300" }
                }
            }
            .scrollIndicators(.hidden)

            if let message = result.validationMessage {
                ValidationCallout(message: message)
            }

            VStack(spacing: 12) {
                SparkyResultRow(label: "Cut each side", value: result.roundedSetbackValue, emphasized: true)
                Text("\(result.cutsLabel), marked from centre")
                    .font(.caption)
                    .foregroundStyle(Color.sparkyMuted)
                    .frame(maxWidth: .infinity, alignment: .leading)
                Divider().overlay(Color.sparkyBorder)
                SparkyResultRow(label: "Total bend", value: result.totalBendValue)
                SparkyResultRow(label: "Bend per cut", value: result.bendPerCutValue)
                SparkyResultRow(label: "Exact mark", value: result.setbackValue)
                CopyButton(value: result.roundedSetbackValue, label: "Copy cut mark") {
                    studyState.recordCalculation(tool: "Bend cut", value: result.roundedSetbackValue)
                }
            }
            .padding(15)
            .background(Color.sparkyAccentSoft)
            .clipShape(RoundedRectangle(cornerRadius: 16, style: .continuous))

            FormulaDisclosure(text: "Bend per cut = total bend angle ÷ cuts\nCut mark = tan(bend per cut ÷ 2) × containment width")
        }
        .sparkyCard(padding: 17)
    }

    private func reset() {
        let values = CalculatorEngine.Defaults.containmentBendCut
        angle = values.bendAngle
        cuts = values.cuts
        width = values.width
        Haptics.selection()
    }
}

private struct AngleDropCalculator: View {
    let studyState: StudyStateStore

    @AppStorage("angle.drop") private var drop = "10"
    @AppStorage("angle.degrees") private var angle = "45"
    @AppStorage("angle.unit") private var unit = "cm"
    @AppStorage("angle.top") private var top = "0"
    @AppStorage("angle.bottom") private var bottom = "0"
    @AppStorage("angle.allowance") private var allowance = "0"
    @AppStorage("angle.topBend") private var topBend = false
    @AppStorage("angle.bottomBend") private var bottomBend = false
    @AppStorage("angle.bendHeight") private var bendHeight = "5"

    private var result: CalculatorEngine.AngleDropResult {
        CalculatorEngine.angleDrop(
            drop: drop,
            angle: angle,
            topStraight: top,
            bottomStraight: bottom,
            allowance: allowance,
            unit: unit,
            topBend: topBend,
            bottomBend: bottomBend,
            bendHeight: bendHeight
        )
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 18) {
            CalculatorHeader(
                title: "Angle drop",
                detail: "Developed length from a vertical drop",
                onReset: reset
            )

            Picker("Unit", selection: $unit) {
                ForEach(["mm", "cm", "m"], id: \.self) { Text($0).tag($0) }
            }
            .pickerStyle(.segmented)

            LazyVGrid(columns: [.init(.flexible()), .init(.flexible())], spacing: 12) {
                SparkyField(title: "Vertical drop", text: $drop, unit: unit)
                SparkyField(title: "Angle from horizontal", text: $angle, unit: "°")
            }

            DisclosureGroup("Advanced cut allowance") {
                VStack(spacing: 12) {
                    Toggle("Top prefab bend", isOn: $topBend)
                    Toggle("Bottom prefab bend", isOn: $bottomBend)
                    SparkyField(title: "Bend height", text: $bendHeight, unit: unit)
                    LazyVGrid(columns: [.init(.flexible()), .init(.flexible())], spacing: 12) {
                        SparkyField(title: "Top straight", text: $top, unit: unit)
                        SparkyField(title: "Bottom straight", text: $bottom, unit: unit)
                        SparkyField(title: "Allowance", text: $allowance, unit: unit)
                    }
                }
                .padding(.top, 10)
                .tint(Color.sparkyAccent)
            }
            .font(.subheadline.weight(.semibold))

            VStack(spacing: 12) {
                SparkyResultRow(label: "Angled piece", value: result.angledLengthValue, emphasized: true)
                Divider().overlay(Color.sparkyBorder)
                SparkyResultRow(label: "Horizontal offset", value: result.offsetValue)
                SparkyResultRow(label: "Total with allowances", value: result.totalLengthValue)
                CopyButton(value: result.angledLengthValue, label: "Copy angled piece") {
                    studyState.recordCalculation(tool: "Angle drop", value: result.angledLengthValue)
                }
            }
            .padding(15)
            .background(Color.sparkyAccentSoft)
            .clipShape(RoundedRectangle(cornerRadius: 16, style: .continuous))

            FormulaDisclosure(text: "Angled piece = effective drop ÷ sin(angle)\nOffset = angled piece × cos(angle)")
        }
        .sparkyCard(padding: 17)
    }

    private func reset() {
        let values = CalculatorEngine.Defaults.angleDrop
        drop = values.drop; angle = values.angle; unit = values.unit
        top = values.topStraight; bottom = values.bottomStraight; allowance = values.allowance
        topBend = values.topBend; bottomBend = values.bottomBend; bendHeight = values.bendHeight
        Haptics.selection()
    }
}

private struct ToolHistorySheet: View {
    let studyState: StudyStateStore
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        Group {
            if studyState.recentCalculations.isEmpty {
                ContentUnavailableView(
                    "No calculations yet",
                    systemImage: "clock",
                    description: Text("Copy a result and it will appear here.")
                )
            } else {
                List(studyState.recentCalculations) { item in
                    HStack {
                        VStack(alignment: .leading, spacing: 3) {
                            Text(item.tool).font(.subheadline.weight(.semibold))
                            Text(item.date, style: .relative)
                                .font(.caption)
                                .foregroundStyle(.secondary)
                        }
                        Spacer()
                        Text(item.value)
                            .font(.headline.monospacedDigit())
                            .foregroundStyle(Color.sparkyAccent)
                    }
                }
            }
        }
        .navigationTitle("Calculation history")
        .toolbar {
            ToolbarItem(placement: .cancellationAction) {
                Button("Done") { dismiss() }
            }
            if !studyState.recentCalculations.isEmpty {
                ToolbarItem(placement: .destructiveAction) {
                    Button("Clear", role: .destructive) {
                        studyState.clearCalculationHistory()
                    }
                }
            }
        }
    }
}
