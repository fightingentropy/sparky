import SwiftUI

// The roadmap drawn like roadmap.sh: a solid blue spine down the middle, stage headings
// sitting on it, yellow core topics on the spine and their cream subtopics / blue exam
// links joined to them by dotted blue lines.

enum LearnMapLayout: Equatable {
    /// Accessibility text sizes and very narrow widths: everything in one column.
    case single
    /// Phones: topic on the spine, its branches in two columns beneath it.
    case compact
    /// iPad and wide windows: branches either side of the topic, fanned with curves.
    case wide

    static func resolve(width: CGFloat?, accessibilityText: Bool) -> Self {
        guard let width else { return accessibilityText ? .single : .compact }
        if accessibilityText || width < 340 { return .single }
        return width >= 700 ? .wide : .compact
    }
}

enum LearnMapMetrics {
    static let nodeRadius: CGFloat = 8
    static let spineWidth: CGFloat = 3
    /// Vertical gap between a node and the next one on a dotted rail.
    static let railGap: CGFloat = 18
    /// Gap between the two compact columns, where the spine passes.
    static let columnGap: CGFloat = 28
    static let topicSpacing: CGFloat = 40
    static let maxMapWidth: CGFloat = 1000
    static let wideTopicWidth: CGFloat = 260
    static let wideFanGap: CGFloat = 60
    static let singleRailInset: CGFloat = 16
    static let singleBranchIndent: CGFloat = 34

    static let dotted = StrokeStyle(lineWidth: 2.5, lineCap: .round, dash: [0.1, 6])

    /// Compact topic width: up to 320pt, but always wide enough to sit over both column
    /// centres so each dotted rail starts on the topic's bottom edge.
    static func compactTopicWidth(for mapWidth: CGFloat) -> CGFloat {
        min(mapWidth, max(320, mapWidth / 2 + 60))
    }
}

struct LearnRoadmapMap: View {
    let roadmap: LearnRoadmap
    let onSelect: (LearnTopic, LearnBranch?) -> Void

    @Environment(LearnProgressStore.self) private var progress
    @Environment(\.dynamicTypeSize) private var dynamicTypeSize
    @State private var mapWidth: CGFloat?

    private var layout: LearnMapLayout {
        .resolve(width: mapWidth, accessibilityText: dynamicTypeSize.isAccessibilitySize)
    }

    var body: some View {
        let layout = layout
        VStack(spacing: 0) {
            mapTitle

            ForEach(Array(roadmap.stages.enumerated()), id: \.element.id) { offset, stage in
                let trackable = stage.trackableNodeIDs
                LearnStageHeading(
                    number: offset + 1,
                    title: stage.title,
                    doneCount: progress.doneCount(in: trackable),
                    totalCount: trackable.count
                )
                .id(LearnStage.scrollAnchorID(stage.id))
                .padding(.top, offset == 0 ? 22 : 8)
                .padding(.bottom, 26)

                ForEach(stage.topics) { topic in
                    LearnTopicBlock(
                        topic: topic,
                        layout: layout,
                        mapWidth: mapWidth ?? 343,
                        onSelect: onSelect
                    )
                    .padding(.bottom, LearnMapMetrics.topicSpacing)
                }
            }

            Circle()
                .fill(Color.learnSpine)
                .frame(width: 14, height: 14)
                .opacity(layout == .single ? 0 : 1)
                .accessibilityHidden(true)
        }
        .frame(maxWidth: LearnMapMetrics.maxMapWidth)
        .onGeometryChange(for: CGFloat.self) { $0.size.width } action: { mapWidth = $0 }
        .background(alignment: .top) {
            if layout != .single {
                // Behind everything; titles, headings and nodes are opaque so it reads as
                // interrupted by them, as on roadmap.sh.
                Rectangle()
                    .fill(Color.learnSpine)
                    .frame(width: LearnMapMetrics.spineWidth)
                    .frame(maxHeight: .infinity)
                    .accessibilityHidden(true)
            }
        }
        .frame(maxWidth: .infinity)
    }

    private var mapTitle: some View {
        Text("\(roadmap.title) roadmap")
            .sparkyFont(size: 26, weight: .bold, relativeTo: .title)
            .tracking(-0.6)
            .foregroundStyle(Color.sparkyText)
            .multilineTextAlignment(.center)
            .fixedSize(horizontal: false, vertical: true)
            .padding(.horizontal, 16)
            .padding(.vertical, 6)
            .background(Color.sparkyBackground)
            .accessibilityAddTraits(.isHeader)
    }
}

// MARK: - Stage heading

private struct LearnStageHeading: View {
    let number: Int
    let title: String
    let doneCount: Int
    let totalCount: Int

    var body: some View {
        VStack(spacing: 4) {
            SparkyEyebrow(text: "Stage \(number)")
            Text(title)
                .sparkyFont(size: 20, weight: .bold, relativeTo: .title3)
                .tracking(-0.4)
                .foregroundStyle(Color.sparkyText)
                .multilineTextAlignment(.center)
                .fixedSize(horizontal: false, vertical: true)
            Text("\(doneCount) of \(totalCount) done")
                .sparkyMonoFont(size: 12, relativeTo: .caption)
                .foregroundStyle(doneCount == totalCount && totalCount > 0 ? Color.sparkySuccess : Color.sparkyMuted)
        }
        .padding(.horizontal, 18)
        .padding(.vertical, 12)
        .background(Color.sparkyBackground)
        .accessibilityElement(children: .ignore)
        .accessibilityLabel("Stage \(number), \(title), \(doneCount) of \(totalCount) done")
        .accessibilityAddTraits(.isHeader)
    }
}

// MARK: - Topic block

private struct LearnTopicBlock: View {
    let topic: LearnTopic
    let layout: LearnMapLayout
    let mapWidth: CGFloat
    let onSelect: (LearnTopic, LearnBranch?) -> Void

    @Environment(LearnProgressStore.self) private var progress

    var body: some View {
        switch layout {
        case .compact: compact
        case .wide: wide
        case .single: single
        }
    }

    // MARK: Compact (phones)

    private var compact: some View {
        VStack(spacing: 0) {
            topicNode
                .frame(width: LearnMapMetrics.compactTopicWidth(for: mapWidth))

            if !topic.branches.isEmpty {
                HStack(alignment: .top, spacing: LearnMapMetrics.columnGap) {
                    compactColumn(topic.leftBranches)
                    compactColumn(topic.rightBranches)
                }
                .padding(.top, LearnMapMetrics.railGap)
            }
        }
    }

    private func compactColumn(_ branches: [LearnBranch]) -> some View {
        VStack(spacing: LearnMapMetrics.railGap) {
            ForEach(branches) { branch in
                branchNode(branch, minHeight: 48)
                    // A dotted rail through the column's centre: each node draws the stretch
                    // above it, from the node (or topic) before it down to its own middle.
                    .background {
                        LearnRailSegment(gap: LearnMapMetrics.railGap)
                            .stroke(Color.learnSpine, style: LearnMapMetrics.dotted)
                            .accessibilityHidden(true)
                    }
            }
        }
        .frame(maxWidth: .infinity, alignment: .top)
    }

    // MARK: Wide (iPad)

    private var wide: some View {
        HStack(alignment: .center, spacing: 0) {
            wideCluster(topic.leftBranches)
            Color.clear.frame(width: LearnMapMetrics.wideFanGap, height: 1)
            topicNode
                .frame(width: LearnMapMetrics.wideTopicWidth)
                .anchorPreference(key: LearnNodeBoundsKey.self, value: .bounds) { [topic.id: $0] }
                // VoiceOver reads the topic before its left-hand branches, as in the compact layouts.
                .accessibilitySortPriority(1)
            Color.clear.frame(width: LearnMapMetrics.wideFanGap, height: 1)
            wideCluster(topic.rightBranches)
        }
        .accessibilityElement(children: .contain)
        .backgroundPreferenceValue(LearnNodeBoundsKey.self) { anchors in
            GeometryReader { proxy in
                fanPath(anchors: anchors, proxy: proxy)
                    .stroke(Color.learnSpine, style: LearnMapMetrics.dotted)
            }
            .accessibilityHidden(true)
        }
    }

    private func wideCluster(_ branches: [LearnBranch]) -> some View {
        VStack(spacing: 10) {
            ForEach(branches) { branch in
                branchNode(branch, minHeight: 44)
                    .anchorPreference(key: LearnNodeBoundsKey.self, value: .bounds) { [branch.id: $0] }
            }
        }
        .frame(maxWidth: .infinity)
    }

    /// Cubic curves from the topic's left/right edge midpoint to each branch's inner edge midpoint.
    private func fanPath(anchors: [String: Anchor<CGRect>], proxy: GeometryProxy) -> Path {
        Path { path in
            guard let topicAnchor = anchors[topic.id] else { return }
            let topicFrame = proxy[topicAnchor]
            for branch in topic.branches {
                guard let anchor = anchors[branch.id] else { continue }
                let frame = proxy[anchor]
                let isLeft = branch.side == .left
                let start = CGPoint(x: isLeft ? topicFrame.minX : topicFrame.maxX, y: topicFrame.midY)
                let end = CGPoint(x: isLeft ? frame.maxX : frame.minX, y: frame.midY)
                let bend = (end.x - start.x) * 0.5
                path.move(to: start)
                path.addCurve(
                    to: end,
                    control1: CGPoint(x: start.x + bend, y: start.y),
                    control2: CGPoint(x: end.x - bend, y: end.y)
                )
            }
        }
    }

    // MARK: Single column (accessibility sizes)

    private var single: some View {
        VStack(spacing: 0) {
            topicNode

            if !topic.branches.isEmpty {
                VStack(spacing: LearnMapMetrics.railGap) {
                    ForEach(Array(topic.branches.enumerated()), id: \.element.id) { offset, branch in
                        branchNode(branch, minHeight: 48)
                            .background {
                                LearnRailSegment(
                                    gap: LearnMapMetrics.railGap,
                                    railX: -(LearnMapMetrics.singleBranchIndent - LearnMapMetrics.singleRailInset),
                                    continuesBelow: offset < topic.branches.count - 1,
                                    drawsTick: true
                                )
                                .stroke(Color.learnSpine, style: LearnMapMetrics.dotted)
                                .accessibilityHidden(true)
                            }
                    }
                }
                .padding(.leading, LearnMapMetrics.singleBranchIndent)
                .padding(.top, LearnMapMetrics.railGap)
            }
        }
    }

    // MARK: Nodes

    private var topicNode: some View {
        LearnNodeButton(
            title: topic.title,
            kind: .topic,
            status: progress.status(for: topic.id),
            minHeight: 56
        ) {
            onSelect(topic, nil)
        }
        .id(topic.id)
    }

    private func branchNode(_ branch: LearnBranch, minHeight: CGFloat) -> some View {
        LearnNodeButton(
            title: branch.title,
            kind: branch.kind,
            status: branch.kind == .exam ? nil : progress.status(for: branch.id),
            minHeight: minHeight
        ) {
            onSelect(topic, branch)
        }
        .id(branch.id)
    }
}

// MARK: - Connectors

private struct LearnNodeBoundsKey: PreferenceKey {
    static let defaultValue: [String: Anchor<CGRect>] = [:]

    static func reduce(value: inout [String: Anchor<CGRect>], nextValue: () -> [String: Anchor<CGRect>]) {
        value.merge(nextValue()) { $1 }
    }
}

/// The stretch of a dotted rail that belongs to one node: from just below whatever sits
/// `gap` above it down to its middle (hidden behind the opaque node). `railX` moves the rail
/// off the node's centre line (single-column layout), where a short tick then joins it to
/// the node and, unless it is the last one, the rail carries on past the node.
struct LearnRailSegment: Shape {
    var gap: CGFloat
    var railX: CGFloat? = nil
    var continuesBelow = false
    var drawsTick = false

    func path(in rect: CGRect) -> Path {
        let x = railX.map { rect.minX + $0 } ?? rect.midX
        var path = Path()
        path.move(to: CGPoint(x: x, y: rect.minY - gap + 4))
        path.addLine(to: CGPoint(x: x, y: continuesBelow ? rect.maxY : rect.midY))
        if drawsTick {
            path.move(to: CGPoint(x: x + 6, y: rect.midY))
            path.addLine(to: CGPoint(x: rect.minX - 4, y: rect.midY))
        }
        return path
    }
}

// MARK: - Node

extension LearnNodeKind {
    var label: String {
        switch self {
        case .topic: "Core topic"
        case .subtopic: "Subtopic"
        case .exam: "Practice exam"
        }
    }
}

extension LearnStatus {
    var label: String {
        switch self {
        case .learning: "Learning"
        case .done: "Done"
        }
    }
}

struct LearnNodeStyle {
    let fill: Color
    let text: Color
    let border: Color
    let borderWidth: CGFloat

    init(kind: LearnNodeKind, status: LearnStatus?) {
        if status == .done, kind != .exam {
            fill = .learnDoneFill
            text = .learnDoneText
            border = .learnDoneBorder
            borderWidth = kind == .topic ? 2.5 : 2
            return
        }
        switch kind {
        case .topic:
            fill = .learnTopicFill
            text = .learnTopicText
            border = .learnTopicBorder
            borderWidth = 2.5
        case .subtopic:
            fill = .learnSubtopicFill
            text = .learnSubtopicText
            border = .learnSubtopicBorder
            borderWidth = 2
        case .exam:
            fill = .learnExamFill
            text = .learnExamText
            border = .learnExamFill
            borderWidth = 0
        }
    }
}

/// One roadmap node: a slightly rounded, bordered rectangle with a centred title that wraps.
struct LearnNodeButton: View {
    let title: String
    let kind: LearnNodeKind
    let status: LearnStatus?
    let minHeight: CGFloat
    let action: () -> Void

    var body: some View {
        let style = LearnNodeStyle(kind: kind, status: status)
        let shape = RoundedRectangle(cornerRadius: LearnMapMetrics.nodeRadius, style: .continuous)

        Button(action: action) {
            label(style: style)
                .frame(maxWidth: .infinity, minHeight: minHeight)
                .background(shape.fill(style.fill))
                .overlay {
                    if style.borderWidth > 0 {
                        shape.strokeBorder(style.border, lineWidth: style.borderWidth)
                    }
                }
                .contentShape(shape)
        }
        .buttonStyle(LearnNodePressStyle())
        .overlay(alignment: .topTrailing) {
            if let status, kind != .exam {
                LearnStatusBadge(status: status)
                    .offset(x: 2, y: -9)
            }
        }
        .accessibilityLabel([title, kind.label, status?.label].compactMap { $0 }.joined(separator: ", "))
        .accessibilityHint(kind == .exam ? "Opens the practice exam" : "Shows what to learn")
    }

    @ViewBuilder
    private func label(style: LearnNodeStyle) -> some View {
        switch kind {
        case .topic:
            Text(title)
                .sparkyFont(size: 17, weight: .semibold, relativeTo: .headline)
                .foregroundStyle(style.text)
                .multilineTextAlignment(.center)
                .fixedSize(horizontal: false, vertical: true)
                .padding(.horizontal, 14)
                .padding(.vertical, 12)
        case .subtopic:
            Text(title)
                .sparkyFont(size: 15, weight: .medium, relativeTo: .subheadline)
                .foregroundStyle(style.text)
                .multilineTextAlignment(.center)
                .fixedSize(horizontal: false, vertical: true)
                .padding(.horizontal, 10)
                .padding(.vertical, 10)
        case .exam:
            HStack(spacing: 6) {
                Image(systemName: "play.fill")
                    .font(.system(size: 9, weight: .bold))
                    .accessibilityHidden(true)
                Text(title)
                    .sparkyFont(size: 15, weight: .semibold, relativeTo: .subheadline)
                    .multilineTextAlignment(.center)
                    .fixedSize(horizontal: false, vertical: true)
            }
            .foregroundStyle(style.text)
            .padding(.horizontal, 10)
            .padding(.vertical, 10)
        }
    }
}

private struct LearnNodePressStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed ? 0.97 : 1)
            .brightness(configuration.isPressed ? -0.06 : 0)
            .animation(.spring(duration: 0.2), value: configuration.isPressed)
    }
}

/// Round status mark that sits on a node's top-right corner: a check for done,
/// a half-filled circle for learning.
struct LearnStatusBadge: View {
    let status: LearnStatus
    var size: CGFloat = 20

    var body: some View {
        ZStack {
            Circle()
                .fill(status == .done ? Color.learnDoneBadge : Color.learnLearningBadge)
            Image(systemName: status == .done ? "checkmark" : "circle.lefthalf.filled")
                .font(.system(size: size * (status == .done ? 0.5 : 0.55), weight: .heavy))
                .foregroundStyle(Color.learnBadgeGlyph)
        }
        .frame(width: size, height: size)
        .background(Circle().fill(Color.sparkyBackground).padding(-2))
        .accessibilityHidden(true)
    }
}

extension LearnStage {
    /// Scroll target for a stage heading. Prefixed so it can't collide with the stage-index
    /// chips, whose ForEach registers the bare stage id in the same ScrollViewReader.
    static func scrollAnchorID(_ stageID: String) -> String { "learn-stage-heading-\(stageID)" }
}
