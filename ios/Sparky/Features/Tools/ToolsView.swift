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
                                    .font(.sparky(.subheadline, weight: .bold))
                                Text(tool.subtitle)
                                    .font(.sparky(.caption2))
                                    .foregroundStyle(Color.sparkyMuted)
                                    .lineLimit(2)
                            }
                            .foregroundStyle(selectedTool == tool ? Color.sparkyAccentText : Color.sparkyText)
                            .frame(width: 142, height: 105, alignment: .topLeading)
                            .padding(13)
                            .background(selectedTool == tool ? Color.sparkyAccentSoft : Color.sparkySurface)
                            .clipShape(RoundedRectangle(cornerRadius: SparkyLayout.cardRadius, style: .continuous))
                            .overlay {
                                RoundedRectangle(cornerRadius: SparkyLayout.cardRadius, style: .continuous)
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
                    .font(.sparky(.title3, weight: .bold))
                    .foregroundStyle(Color.sparkyText)
                Text(detail)
                    .font(.sparky(.caption))
                    .foregroundStyle(Color.sparkyMuted)
            }
            Spacer()
            Button("Reset", action: onReset)
                .font(.sparky(.caption, weight: .semibold))
                .buttonStyle(.bordered)
                .tint(Color.sparkyAccent)
        }
    }
}

private struct ValidationCallout: View {
    let message: String

    var body: some View {
        Label(message, systemImage: "exclamationmark.triangle.fill")
            .font(.sparky(.caption))
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
                .font(.sparkyMono(.caption))
                .foregroundStyle(Color.sparkyMuted)
                .frame(maxWidth: .infinity, alignment: .leading)
                .padding(.top, 8)
        }
        .font(.sparky(.subheadline, weight: .semibold))
        .foregroundStyle(Color.sparkyAccentText)
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

            if let message = result.validationMessage {
                ValidationCallout(message: message)
            }

            VStack(spacing: 12) {
                SparkyResultRow(label: "Cut each side", value: result.roundedSetbackValue, emphasized: true)
                Text("\(result.cutsLabel), marked from centre")
                    .font(.sparky(.caption))
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
            .font(.sparky(.subheadline, weight: .semibold))

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
                            Text(item.tool).font(.sparky(.subheadline, weight: .semibold))
                            Text(item.date, style: .relative)
                                .font(.sparky(.caption))
                                .foregroundStyle(Color.sparkyMuted)
                        }
                        Spacer()
                        Text(item.value)
                            .font(.sparky(.headline).monospacedDigit())
                            .foregroundStyle(Color.sparkyAccentText)
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
