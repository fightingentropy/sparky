import SwiftUI

struct LearnSheetTarget: Identifiable, Hashable {
    let id: String
}

/// The sheet behind a topic or subtopic node. Subtopics listed under a topic push their own
/// detail inside the sheet; notes and exams leave for their tabs.
struct LearnNodeSheet: View {
    let nodeID: String
    let onOpenNote: (String) -> Void
    let onOpenExam: (String) -> Void

    @Environment(ContentStore.self) private var contentStore
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        NavigationStack {
            detail(for: nodeID)
                .navigationDestination(for: LearnSheetTarget.self) { target in
                    detail(for: target.id)
                }
        }
        .presentationDetents([.medium, .large])
        .presentationDragIndicator(.visible)
        .presentationBackground(Color.sparkyBackground)
        .presentationCornerRadius(24)
    }

    @ViewBuilder
    private func detail(for id: String) -> some View {
        if let location = contentStore.learnNode(id: id) {
            LearnNodeDetailView(
                location: location,
                onOpenNote: onOpenNote,
                onOpenExam: onOpenExam
            )
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    // A plain glyph: the system draws the toolbar button's own background,
                    // matching the back button on subtopics.
                    Button {
                        dismiss()
                    } label: {
                        Image(systemName: "xmark")
                            .font(.system(size: 15, weight: .semibold))
                            .foregroundStyle(Color.sparkyText)
                    }
                    .accessibilityLabel("Close")
                }
            }
        } else {
            ContentUnavailableView(
                "Topic unavailable",
                systemImage: "point.topleft.down.to.point.bottomright.curvepath",
                description: Text("This part of the roadmap could not be loaded.")
            )
        }
    }
}

struct LearnNodeDetailView: View {
    let location: LearnNodeLocation
    let onOpenNote: (String) -> Void
    let onOpenExam: (String) -> Void

    @Environment(ContentStore.self) private var contentStore
    @Environment(LearnProgressStore.self) private var progress

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 24) {
                heading

                if !location.points.isEmpty {
                    section("Key points") { keyPoints }
                }
                if !location.watchFor.isEmpty {
                    section("Watch out for") { watchFor }
                }
                if location.branch == nil, !location.topic.branches.isEmpty {
                    section("In this topic") { branchRows }
                }
                let notes = location.noteIDs.compactMap(contentStore.note(id:))
                if !notes.isEmpty {
                    section("Revise in Notes") { noteRows(notes) }
                }
                let exams = location.examIDs.compactMap(contentStore.examIndex(id:))
                if !exams.isEmpty {
                    section("Practise") { examRows(exams) }
                }
            }
            .padding(.horizontal, 20)
            .padding(.top, 4)
            .padding(.bottom, 24)
            .frame(maxWidth: .infinity, alignment: .leading)
        }
        .scrollIndicators(.hidden)
        .background(Color.sparkyBackground)
        .navigationBarTitleDisplayMode(.inline)
        .safeAreaInset(edge: .bottom, spacing: 0) {
            if location.isTrackable {
                statusBar
            }
        }
    }

    // MARK: Heading

    private var heading: some View {
        VStack(alignment: .leading, spacing: 10) {
            SparkyEyebrow(text: "Stage \(location.stageNumber) · \(location.stage.title)")

            HStack(spacing: 7) {
                LearnKindSwatch(kind: location.kind)
                Text(location.kind.label)
                    .sparkyFont(size: 13, weight: .semibold, relativeTo: .footnote)
                    .foregroundStyle(Color.sparkyMuted)
                if let status = progress.status(for: location.id) {
                    Text("·")
                        .foregroundStyle(Color.sparkyFaint)
                    LearnStatusBadge(status: status, size: 14)
                    Text(status.label)
                        .sparkyFont(size: 13, weight: .semibold, relativeTo: .footnote)
                        .foregroundStyle(status == .done ? Color.sparkySuccess : Color.sparkyWarning)
                }
            }
            .accessibilityElement(children: .combine)

            Text(location.title)
                .sparkyFont(size: 28, weight: .bold, relativeTo: .title)
                .tracking(-0.7)
                .foregroundStyle(Color.sparkyText)
                .fixedSize(horizontal: false, vertical: true)
                .accessibilityAddTraits(.isHeader)

            if location.branch != nil {
                Text("Part of \(location.topic.title)")
                    .font(.sparky(.subheadline, weight: .medium))
                    .foregroundStyle(Color.sparkyMuted)
            }

            if !location.summary.isEmpty {
                Text(location.summary)
                    .font(.sparky(.body))
                    .foregroundStyle(Color.sparkyText.opacity(0.86))
                    .fixedSize(horizontal: false, vertical: true)
                    .padding(.top, 2)
            }
        }
    }

    // MARK: Sections

    private func section<Content: View>(_ title: String, @ViewBuilder content: () -> Content) -> some View {
        VStack(alignment: .leading, spacing: 10) {
            SparkyEyebrow(text: title)
                .accessibilityAddTraits(.isHeader)
            content()
        }
    }

    private var keyPoints: some View {
        VStack(alignment: .leading, spacing: 12) {
            ForEach(Array(location.points.enumerated()), id: \.offset) { _, point in
                HStack(alignment: .firstTextBaseline, spacing: 10) {
                    Circle()
                        .fill(Color.learnSpine)
                        .frame(width: 6, height: 6)
                        .alignmentGuide(.firstTextBaseline) { $0[VerticalAlignment.center] + 5 }
                        .accessibilityHidden(true)
                    Text(point)
                        .font(.sparky(.callout))
                        .foregroundStyle(Color.sparkyText)
                        .fixedSize(horizontal: false, vertical: true)
                }
            }
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .sparkyCard(padding: 16)
    }

    private var watchFor: some View {
        VStack(alignment: .leading, spacing: 12) {
            ForEach(Array(location.watchFor.enumerated()), id: \.offset) { _, item in
                HStack(alignment: .firstTextBaseline, spacing: 10) {
                    Image(systemName: "exclamationmark.triangle.fill")
                        .font(.system(size: 12, weight: .semibold))
                        .foregroundStyle(Color.sparkyWarning)
                        .accessibilityHidden(true)
                    Text(item)
                        .font(.sparky(.callout))
                        .foregroundStyle(Color.sparkyText)
                        .fixedSize(horizontal: false, vertical: true)
                }
            }
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(16)
        .background(
            Color.sparkyWarning.opacity(0.12),
            in: RoundedRectangle(cornerRadius: SparkyLayout.cardRadius, style: .continuous)
        )
        .accessibilityElement(children: .combine)
        .accessibilityLabel("Watch out for: " + location.watchFor.joined(separator: ". "))
    }

    private var branchRows: some View {
        LearnRowGroup(location.topic.branches) { branch in
            if branch.kind == .exam {
                Button {
                    if let examID = branch.examIDs.first { onOpenExam(examID) }
                } label: {
                    LearnLinkRow(title: branch.title, trailingSymbol: "arrow.up.right") {
                        LearnKindSwatch(kind: .exam)
                    }
                }
                .buttonStyle(.plain)
                .accessibilityLabel("\(branch.title), Practice exam")
                .accessibilityHint("Opens the practice exam")
            } else {
                let status = progress.status(for: branch.id)
                NavigationLink(value: LearnSheetTarget(id: branch.id)) {
                    LearnLinkRow(title: branch.title, status: status, trailingSymbol: "chevron.right") {
                        LearnKindSwatch(kind: .subtopic, status: status)
                    }
                }
                .buttonStyle(.plain)
                .accessibilityLabel([branch.title, "Subtopic", status?.label].compactMap { $0 }.joined(separator: ", "))
            }
        }
    }

    private func noteRows(_ notes: [CheatSheetSection]) -> some View {
        LearnRowGroup(notes) { note in
            Button {
                onOpenNote(note.id)
            } label: {
                LearnLinkRow(title: note.title, trailingSymbol: "arrow.up.right") {
                    LearnIconTile(systemImage: note.symbolName)
                }
            }
            .buttonStyle(.plain)
            .accessibilityHint("Opens this note in Notes")
        }
    }

    private func examRows(_ exams: [ExamIndexEntry]) -> some View {
        LearnRowGroup(exams) { exam in
            Button {
                onOpenExam(exam.id)
            } label: {
                LearnLinkRow(
                    title: exam.title,
                    detail: "\(exam.testCount) practice test\(exam.testCount == 1 ? "" : "s")",
                    trailingSymbol: "arrow.up.right"
                ) {
                    LearnIconTile(systemImage: "checklist", tint: .learnExamFill)
                }
            }
            .buttonStyle(.plain)
            .accessibilityHint("Opens this exam in Exams")
        }
    }

    // MARK: Status

    private var statusBar: some View {
        VStack(alignment: .leading, spacing: 8) {
            SparkyEyebrow(text: "Your status")
            LearnStatusPicker(
                status: Binding(
                    get: { progress.status(for: location.id) },
                    set: { newValue in
                        progress.setStatus(newValue, for: location.id)
                        if newValue == .done { Haptics.success() } else { Haptics.selection() }
                    }
                )
            )
        }
        .padding(.horizontal, 20)
        .padding(.top, 12)
        .padding(.bottom, 10)
        .background {
            Color.sparkyBackground
                .overlay(alignment: .top) { Rectangle().fill(Color.sparkyBorder).frame(height: 1) }
                .ignoresSafeArea()
        }
    }
}

// MARK: - Pieces

/// Three-way "Not started · Learning · Done" control in the app's pill style.
struct LearnStatusPicker: View {
    @Binding var status: LearnStatus?

    private struct Option: Identifiable {
        let status: LearnStatus?
        let title: String
        var id: String { title }
    }

    private let options = [
        Option(status: nil, title: "Not started"),
        Option(status: .learning, title: "Learning"),
        Option(status: .done, title: "Done")
    ]

    var body: some View {
        ViewThatFits(in: .horizontal) {
            HStack(spacing: 4) { buttons }
                .padding(4)
                .background(Capsule().fill(Color.sparkySurface))
            VStack(spacing: 4) { buttons }
                .padding(4)
                .background(RoundedRectangle(cornerRadius: 22, style: .continuous).fill(Color.sparkySurface))
        }
        .accessibilityElement(children: .contain)
        .accessibilityLabel("Status")
    }

    private var buttons: some View {
        ForEach(options) { option in
            let selected = option.status == status
            Button {
                withAnimation(.snappy(duration: 0.2)) { status = option.status }
            } label: {
                Text(option.title)
                    .sparkyFont(size: 14, weight: .semibold, relativeTo: .subheadline)
                    .lineLimit(1)
                    .fixedSize()
                    .foregroundStyle(selected ? foreground(for: option.status) : Color.sparkyText)
                    .padding(.horizontal, 14)
                    .frame(maxWidth: .infinity, minHeight: 40)
                    .background {
                        if selected {
                            Capsule().fill(fill(for: option.status))
                        }
                    }
                    .contentShape(Capsule())
            }
            .buttonStyle(.plain)
            .accessibilityAddTraits(selected ? .isSelected : [])
        }
    }

    private func fill(for status: LearnStatus?) -> Color {
        switch status {
        case .done: .sparkyAccent
        case .learning: .learnLearningBadge
        case nil: .sparkyPrimary
        }
    }

    private func foreground(for status: LearnStatus?) -> Color {
        switch status {
        case .done, .learning: .learnBadgeGlyph
        case nil: .sparkyOnPrimary
        }
    }
}

/// Small rounded swatch in a node's colours, for legends and rows.
struct LearnKindSwatch: View {
    let kind: LearnNodeKind
    var status: LearnStatus? = nil
    var size: CGFloat = 14

    var body: some View {
        let style = LearnNodeStyle(kind: kind, status: status)
        RoundedRectangle(cornerRadius: 3.5, style: .continuous)
            .fill(style.fill)
            .overlay {
                if style.borderWidth > 0 {
                    RoundedRectangle(cornerRadius: 3.5, style: .continuous)
                        .strokeBorder(style.border, lineWidth: 1.5)
                }
            }
            .frame(width: size, height: size)
            .accessibilityHidden(true)
    }
}

private struct LearnIconTile: View {
    let systemImage: String
    var tint: Color = .sparkyAccentText

    var body: some View {
        Image(systemName: systemImage)
            .font(.system(size: 14, weight: .semibold))
            .foregroundStyle(tint)
            .frame(width: 32, height: 32)
            .background(Color.sparkySurfaceRaised, in: RoundedRectangle(cornerRadius: 9, style: .continuous))
            .accessibilityHidden(true)
    }
}

/// A card of rows separated by hairlines.
private struct LearnRowGroup<Item: Identifiable, Row: View>: View {
    let items: [Item]
    let row: (Item) -> Row

    init(_ items: [Item], @ViewBuilder row: @escaping (Item) -> Row) {
        self.items = items
        self.row = row
    }

    var body: some View {
        VStack(spacing: 0) {
            ForEach(Array(items.enumerated()), id: \.element.id) { offset, item in
                if offset > 0 {
                    Rectangle()
                        .fill(Color.sparkyBorder)
                        .frame(height: 1)
                        .padding(.leading, 14)
                }
                row(item)
            }
        }
        .background(Color.sparkySurface, in: RoundedRectangle(cornerRadius: SparkyLayout.cardRadius, style: .continuous))
    }
}

private struct LearnLinkRow<Leading: View>: View {
    let title: String
    var detail: String? = nil
    var status: LearnStatus? = nil
    let trailingSymbol: String
    @ViewBuilder let leading: () -> Leading

    var body: some View {
        HStack(spacing: 12) {
            leading()
            VStack(alignment: .leading, spacing: 2) {
                Text(title)
                    .font(.sparky(.callout, weight: .medium))
                    .foregroundStyle(Color.sparkyText)
                    .multilineTextAlignment(.leading)
                    .fixedSize(horizontal: false, vertical: true)
                if let detail {
                    Text(detail)
                        .font(.sparky(.caption))
                        .foregroundStyle(Color.sparkyMuted)
                }
            }
            Spacer(minLength: 8)
            if let status {
                LearnStatusBadge(status: status, size: 18)
            }
            Image(systemName: trailingSymbol)
                .font(.system(size: 12, weight: .bold))
                .foregroundStyle(Color.sparkyMuted)
                .accessibilityHidden(true)
        }
        .padding(.horizontal, 14)
        .padding(.vertical, 12)
        .frame(minHeight: 52)
        .contentShape(Rectangle())
    }
}
