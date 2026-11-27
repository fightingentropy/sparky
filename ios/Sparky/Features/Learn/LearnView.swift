import SwiftUI

/// The Learn tab: the electrician roadmap as a roadmap.sh-style map, with progress kept on
/// this device. Topics and subtopics open a detail sheet; blue exam nodes open the exam.
struct LearnView: View {
    @Environment(ContentStore.self) private var contentStore
    @Environment(LearnProgressStore.self) private var progress
    @Environment(AppRouter.self) private var router

    @State private var presentedNode: LearnSheetTarget?
    @State private var showingResetConfirmation = false
    /// Opens the Continue node's sheet once the scroll has settled; cancelled if the user moves on.
    @State private var continueTask: Task<Void, Never>?

    private var roadmap: LearnRoadmap { contentStore.learnRoadmap }

    var body: some View {
        let trackable = roadmap.trackableNodeIDs

        NavigationStack {
            ZStack {
                SparkyBackdrop()

                ScrollViewReader { proxy in
                    ScrollView {
                        VStack(alignment: .leading, spacing: 14) {
                            SparkyPageHeader("Learn", subtitle: "The UK electrician roadmap, one topic at a time") {
                                overflowMenu
                                SparkyAccountToolbarItem()
                            }

                            LearnProgressCard(
                                doneCount: progress.doneCount(in: trackable),
                                learningCount: progress.learningCount(in: trackable),
                                totalCount: trackable.count,
                                next: progress.nextNodeID(in: trackable).flatMap(contentStore.learnNode(id:))
                            ) { nodeID in
                                continueLearning(at: nodeID, proxy: proxy)
                            }

                            LearnLegend()
                                .padding(.horizontal, 2)

                            LearnStageIndex(stages: roadmap.stages) { stageID in
                                Haptics.selection()
                                withAnimation(.snappy(duration: 0.45)) {
                                    proxy.scrollTo(LearnStage.scrollAnchorID(stageID), anchor: .top)
                                }
                            }

                            LearnRoadmapMap(roadmap: roadmap) { topic, branch in
                                select(topic: topic, branch: branch)
                            }
                            .padding(.top, 18)

                            Text("Every topic links to notes and practice exams already in Sparky.")
                                .font(.sparky(.footnote))
                                .foregroundStyle(Color.sparkyMuted)
                                .multilineTextAlignment(.center)
                                .frame(maxWidth: .infinity)
                                .padding(.top, 6)
                        }
                        .padding(.horizontal, SparkyLayout.pageInset)
                        .padding(.top, 10)
                        .padding(.bottom, 32)
                    }
                    .scrollIndicators(.hidden)
                }
            }
            .navigationTitle("Learn")
            .toolbar(.hidden, for: .navigationBar)
        }
        .onDisappear { continueTask?.cancel() }
        .onChange(of: router.selectedTab) { _, tab in
            if tab != .learn { continueTask?.cancel() }
        }
        .sheet(item: $presentedNode) { target in
            LearnNodeSheet(
                nodeID: target.id,
                onOpenNote: { noteID in
                    presentedNode = nil
                    router.openNote(noteID)
                },
                onOpenExam: { examID in
                    presentedNode = nil
                    router.openExam(examID)
                }
            )
        }
        .confirmationDialog(
            "Reset your Learn progress?",
            isPresented: $showingResetConfirmation,
            titleVisibility: .visible
        ) {
            Button("Reset progress", role: .destructive) {
                withAnimation(.snappy) { progress.reset() }
                Haptics.warning()
            }
        } message: {
            Text("This clears every Learning and Done mark on this device. Notes and exam attempts are kept.")
        }
    }

    private var overflowMenu: some View {
        Menu {
            Button(role: .destructive) {
                showingResetConfirmation = true
            } label: {
                Label("Reset progress", systemImage: "arrow.counterclockwise")
            }
            .disabled(progress.statuses.isEmpty)
        } label: {
            Image(systemName: "ellipsis")
                .font(.system(size: 14, weight: .semibold))
                .foregroundStyle(Color.sparkyText)
                .frame(width: 36, height: 36)
                .background(Circle().fill(Color.sparkySurfaceRaised))
                .frame(width: 44, height: 44)
                .contentShape(Rectangle())
        }
        .accessibilityLabel("Learn options")
    }

    private func select(topic: LearnTopic, branch: LearnBranch?) {
        continueTask?.cancel()
        Haptics.selection()
        if let branch, branch.kind == .exam {
            if let examID = branch.examIDs.first {
                router.openExam(examID)
            }
            return
        }
        presentedNode = LearnSheetTarget(id: branch?.id ?? topic.id)
    }

    private func continueLearning(at nodeID: String, proxy: ScrollViewProxy) {
        Haptics.selection()
        withAnimation(.snappy(duration: 0.45)) {
            // Upper part of the screen, so the node stays visible above the medium-height sheet.
            proxy.scrollTo(nodeID, anchor: UnitPoint(x: 0.5, y: 0.28))
        }
        continueTask?.cancel()
        continueTask = Task { @MainActor in
            try? await Task.sleep(for: .milliseconds(420))
            // The tab stays alive while hidden, so check the user is still here and idle.
            guard !Task.isCancelled, router.selectedTab == .learn, presentedNode == nil else { return }
            presentedNode = LearnSheetTarget(id: nodeID)
        }
    }
}

// MARK: - Progress card

private struct LearnProgressCard: View {
    let doneCount: Int
    let learningCount: Int
    let totalCount: Int
    let next: LearnNodeLocation?
    let onContinue: (String) -> Void

    private var fraction: Double {
        totalCount == 0 ? 0 : Double(doneCount) / Double(totalCount)
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack(alignment: .firstTextBaseline) {
                SparkyEyebrow(text: "Your roadmap")
                Spacer(minLength: 8)
                Text(fraction, format: .percent.precision(.fractionLength(0)))
                    .sparkyMonoFont(size: 12, weight: .medium, relativeTo: .caption)
                    .foregroundStyle(Color.sparkyMuted)
            }

            VStack(alignment: .leading, spacing: 4) {
                Text("\(doneCount) of \(totalCount) topics done")
                    .sparkyFont(size: 20, weight: .semibold, relativeTo: .title3)
                    .tracking(-0.4)
                    .foregroundStyle(Color.sparkyText)
                    .fixedSize(horizontal: false, vertical: true)
                if learningCount > 0 {
                    Text("\(learningCount) in progress")
                        .font(.sparky(.footnote))
                        .foregroundStyle(Color.sparkyWarning)
                }
            }
            .accessibilityElement(children: .combine)

            SparkyProgressTrack(value: fraction, color: .sparkyAccent)

            if let next {
                Button {
                    onContinue(next.id)
                } label: {
                    HStack(spacing: 8) {
                        Text("Continue: \(next.title)")
                            .multilineTextAlignment(.center)
                            .fixedSize(horizontal: false, vertical: true)
                        Image(systemName: "arrow.down")
                            .font(.system(size: 13, weight: .bold))
                            .accessibilityHidden(true)
                    }
                    .padding(.vertical, 8)
                }
                .buttonStyle(SparkyPrimaryButtonStyle())
                .accessibilityLabel("Continue with \(next.title)")
                .accessibilityHint("Scrolls to it on the roadmap and opens it")
                .padding(.top, 2)
            } else {
                Label("Every topic is done. Nice work.", systemImage: "checkmark.seal.fill")
                    .font(.sparky(.subheadline, weight: .semibold))
                    .foregroundStyle(Color.sparkySuccess)
            }
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .sparkyCard(padding: 16)
    }
}

// MARK: - Legend

private struct LearnLegend: View {
    var body: some View {
        LearnFlowLayout(spacing: 14, lineSpacing: 8) {
            item("Core topic") { LearnKindSwatch(kind: .topic) }
            item("Subtopic") { LearnKindSwatch(kind: .subtopic) }
            item("Practice exam") { LearnKindSwatch(kind: .exam) }
            item("Done") { LearnStatusBadge(status: .done, size: 14) }
            item("Learning") { LearnStatusBadge(status: .learning, size: 14) }
        }
        .accessibilityElement(children: .combine)
        .accessibilityLabel("Key: yellow is a core topic, cream a subtopic, blue a practice exam. A green check means done; an amber dot means learning.")
    }

    private func item<Mark: View>(_ title: String, @ViewBuilder mark: () -> Mark) -> some View {
        HStack(spacing: 6) {
            mark()
            Text(title)
                .sparkyFont(size: 12.5, weight: .medium, relativeTo: .caption)
                .foregroundStyle(Color.sparkyMuted)
        }
    }
}

// MARK: - Stage index

private struct LearnStageIndex: View {
    let stages: [LearnStage]
    let onSelect: (String) -> Void

    @Environment(LearnProgressStore.self) private var progress

    var body: some View {
        ScrollView(.horizontal) {
            HStack(spacing: 8) {
                ForEach(Array(stages.enumerated()), id: \.element.id) { offset, stage in
                    let trackable = stage.trackableNodeIDs
                    let done = progress.doneCount(in: trackable)
                    let complete = done == trackable.count && !trackable.isEmpty
                    Button {
                        onSelect(stage.id)
                    } label: {
                        HStack(spacing: 8) {
                            ZStack {
                                Circle().fill(complete ? Color.sparkyAccent : Color.sparkySurfaceRaised)
                                if complete {
                                    Image(systemName: "checkmark")
                                        .font(.system(size: 10, weight: .heavy))
                                        .foregroundStyle(Color.sparkyOnAccent)
                                } else {
                                    Text("\(offset + 1)")
                                        .sparkyMonoFont(size: 11, weight: .semibold, relativeTo: .caption2)
                                        .foregroundStyle(Color.sparkyText)
                                }
                            }
                            .frame(width: 22, height: 22)

                            Text(stage.title)
                                .sparkyFont(size: 14, weight: .semibold, relativeTo: .subheadline)
                                .foregroundStyle(Color.sparkyText)
                                .lineLimit(1)
                                .fixedSize()

                            Text("\(done)/\(trackable.count)")
                                .sparkyMonoFont(size: 11.5, relativeTo: .caption)
                                .foregroundStyle(Color.sparkyMuted)
                        }
                        .padding(.leading, 6)
                        .padding(.trailing, 12)
                        .frame(minHeight: 38)
                        .background(Capsule().fill(Color.sparkySurface))
                        .contentShape(Capsule())
                    }
                    .buttonStyle(SparkyPressStyle())
                    .accessibilityLabel("Stage \(offset + 1), \(stage.title), \(done) of \(trackable.count) done")
                    .accessibilityHint("Scrolls to this stage")
                }
            }
            .padding(.horizontal, SparkyLayout.pageInset)
        }
        .scrollIndicators(.hidden)
        .padding(.horizontal, -SparkyLayout.pageInset)
    }
}

// MARK: - Flow layout

/// Lays children out left to right, wrapping onto new lines when they run out of width.
struct LearnFlowLayout: Layout {
    var spacing: CGFloat = 8
    var lineSpacing: CGFloat = 8

    func sizeThatFits(proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) -> CGSize {
        let maxWidth = proposal.width ?? .infinity
        let rows = arrange(subviews: subviews, maxWidth: maxWidth)
        let height = rows.last.map { $0.y + $0.height } ?? 0
        let width = rows.map(\.width).max() ?? 0
        return CGSize(width: proposal.width ?? width, height: height)
    }

    func placeSubviews(in bounds: CGRect, proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) {
        for row in arrange(subviews: subviews, maxWidth: bounds.width) {
            for item in row.items {
                subviews[item.index].place(
                    at: CGPoint(x: bounds.minX + item.x, y: bounds.minY + row.y + (row.height - item.size.height) / 2),
                    proposal: ProposedViewSize(item.size)
                )
            }
        }
    }

    private struct Row {
        var y: CGFloat
        var width: CGFloat = 0
        var height: CGFloat = 0
        var items: [(index: Int, x: CGFloat, size: CGSize)] = []
    }

    private func arrange(subviews: Subviews, maxWidth: CGFloat) -> [Row] {
        var rows: [Row] = []
        var current = Row(y: 0)
        for index in subviews.indices {
            var size = subviews[index].sizeThatFits(.unspecified)
            if size.width > maxWidth {
                size = subviews[index].sizeThatFits(ProposedViewSize(width: maxWidth, height: nil))
            }
            let x = current.items.isEmpty ? 0 : current.width + spacing
            if !current.items.isEmpty, x + size.width > maxWidth {
                rows.append(current)
                current = Row(y: current.y + current.height + lineSpacing)
                current.items.append((index, 0, size))
                current.width = size.width
                current.height = size.height
                continue
            }
            current.items.append((index, x, size))
            current.width = x + size.width
            current.height = max(current.height, size.height)
        }
        if !current.items.isEmpty { rows.append(current) }
        return rows
    }
}
