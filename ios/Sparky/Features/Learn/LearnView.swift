import SwiftUI

private enum LearnRoute: Hashable {
    case guide(String)
    case inspectionTraining
}

struct LearnView: View {
    @Environment(ContentStore.self) private var contentStore
    @Environment(StudyStateStore.self) private var studyState

    @State private var path: [LearnRoute] = []
    @State private var selectedFilter: GuideFilter = .all

    private var completedCount: Int {
        contentStore.guides.filter { studyState.isGuideCompleted($0.id) }.count
    }

    private var progress: Double {
        guard !contentStore.guides.isEmpty else { return 0 }
        return Double(completedCount) / Double(contentStore.guides.count)
    }

    private var nextGuide: CourseGuide? {
        contentStore.guides.first { !studyState.isGuideCompleted($0.id) } ?? contentStore.guides.first
    }

    private var visibleGuides: [CourseGuide] {
        contentStore.guides.filter(selectedFilter.includes)
    }

    var body: some View {
        NavigationStack(path: $path) {
            ZStack {
                SparkyBackdrop()

                ScrollView {
                    LazyVStack(alignment: .leading, spacing: 16) {
                        LearnOverview(
                            completedCount: completedCount,
                            totalCount: contentStore.guides.count,
                            progress: progress,
                            nextGuide: nextGuide,
                            hasStarted: completedCount > 0,
                            isComplete: completedCount == contentStore.guides.count && !contentStore.guides.isEmpty
                        )

                        QualificationRouteCard()

                        InspectionTrainingFeaturedCard()

                        GuideFilterBar(selection: $selectedFilter)

                        SparkySectionHeader(
                            eyebrow: selectedFilter == .all ? "Course library" : selectedFilter.title,
                            title: selectedFilter == .all ? "Learning guides" : "\(selectedFilter.title) guides",
                            detail: "\(visibleGuides.count)"
                        )
                        .padding(.top, 2)

                        if visibleGuides.isEmpty {
                            ContentUnavailableView(
                                "No guides here yet",
                                systemImage: "book.closed",
                                description: Text("Try another guide category.")
                            )
                            .frame(maxWidth: .infinity)
                            .padding(.top, 22)
                        } else {
                            ForEach(visibleGuides) { guide in
                                GuideCard(
                                    guide: guide,
                                    isCompleted: studyState.isGuideCompleted(guide.id),
                                    onToggleCompleted: { studyState.toggleCompletedGuide(guide.id) }
                                )
                            }
                        }
                    }
                    .padding(.horizontal, SparkyLayout.pageInset)
                    .padding(.top, 10)
                    .padding(.bottom, 34)
                }
            }
            .navigationTitle("Learn")
            .navigationBarTitleDisplayMode(.large)
            .toolbar {
                ToolbarItem(placement: .topBarLeading) {
                    SparkyBrandMark(size: 31)
                }
                ToolbarItem(placement: .topBarTrailing) {
                    SparkyAccountToolbarItem()
                }
            }
            .navigationDestination(for: LearnRoute.self) { route in
                switch route {
                case let .guide(guideID):
                    if let guide = contentStore.guide(id: guideID) {
                        GuideDetailView(guide: guide)
                    } else {
                        ContentUnavailableView(
                            "Guide unavailable",
                            systemImage: "book.closed",
                            description: Text("This learning guide could not be loaded.")
                        )
                    }
                case .inspectionTraining:
                    InspectionTrainingHomeView()
                }
            }
        }
    }
}

private struct LearnOverview: View {
    let completedCount: Int
    let totalCount: Int
    let progress: Double
    let nextGuide: CourseGuide?
    let hasStarted: Bool
    let isComplete: Bool

    var body: some View {
        VStack(alignment: .leading, spacing: 16) {
            ViewThatFits(in: .horizontal) {
                HStack(alignment: .center, spacing: 16) {
                    overviewCopy
                    Spacer(minLength: 12)
                    ProgressRing(progress: progress, size: 68, lineWidth: 7)
                }

                VStack(alignment: .leading, spacing: 14) {
                    overviewCopy
                    HStack(spacing: 12) {
                        ProgressRing(progress: progress, size: 60, lineWidth: 6)
                        Text("\(completedCount) of \(totalCount) guides complete")
                            .font(.subheadline.weight(.semibold))
                            .foregroundStyle(Color.sparkyMuted)
                    }
                }
            }

            if let nextGuide {
                NavigationLink(value: LearnRoute.guide(nextGuide.id)) {
                    HStack(spacing: 12) {
                        VStack(alignment: .leading, spacing: 3) {
                            Text(isComplete ? "Review your knowledge" : hasStarted ? "Continue learning" : "Start your route")
                                .font(.caption.weight(.bold))
                                .foregroundStyle(Color.sparkyBackground.opacity(0.82))
                            Text(nextGuide.title)
                                .font(.headline)
                                .foregroundStyle(Color.sparkyBackground)
                                .multilineTextAlignment(.leading)
                                .fixedSize(horizontal: false, vertical: true)
                        }

                        Spacer(minLength: 8)

                        Image(systemName: "arrow.right")
                            .font(.headline.weight(.bold))
                            .accessibilityHidden(true)
                    }
                    .padding(.horizontal, 16)
                    .frame(maxWidth: .infinity, minHeight: 48, alignment: .leading)
                    .contentShape(Rectangle())
                }
                .buttonStyle(SparkyPrimaryButtonStyle())
                .accessibilityHint("Opens the guide")
            }
        }
        .sparkyCard(padding: 18)
    }

    private var overviewCopy: some View {
        VStack(alignment: .leading, spacing: 6) {
            SparkyEyebrow(text: "UK electrician pathway")
            Text("Build skill in the right order")
                .font(.title2.weight(.bold))
                .foregroundStyle(Color.sparkyText)
            Text("Follow qualification routes, prepare for assessments and keep your technical references sharp.")
                .font(.subheadline)
                .foregroundStyle(Color.sparkyMuted)
                .fixedSize(horizontal: false, vertical: true)
        }
    }
}

private struct InspectionTrainingFeaturedCard: View {
    var body: some View {
        NavigationLink(value: LearnRoute.inspectionTraining) {
            VStack(alignment: .leading, spacing: 14) {
                HStack(alignment: .top, spacing: 13) {
                    ZStack {
                        RoundedRectangle(cornerRadius: 15, style: .continuous)
                            .fill(Color.sparkyAccentSoft)
                        Image(systemName: "waveform.path.ecg.rectangle")
                            .font(.title2.weight(.semibold))
                            .foregroundStyle(Color.sparkyAccent)
                    }
                    .frame(width: 52, height: 52)

                    VStack(alignment: .leading, spacing: 4) {
                        SparkyEyebrow(text: "Interactive test lab")
                        Text("Inspection & Testing")
                            .font(.title3.weight(.bold))
                            .foregroundStyle(Color.sparkyText)
                        Text("Set up a virtual tester, place the probes and interpret the result across five guided labs.")
                            .font(.subheadline)
                            .foregroundStyle(Color.sparkyMuted)
                            .fixedSize(horizontal: false, vertical: true)
                    }

                    Spacer(minLength: 0)
                }

                HStack(spacing: 8) {
                    Label("5 labs", systemImage: "square.grid.2x2")
                    Label("Saves progress", systemImage: "arrow.clockwise")
                    Spacer(minLength: 0)
                    Image(systemName: "arrow.right")
                        .font(.caption.bold())
                }
                .font(.caption.weight(.semibold))
                .foregroundStyle(Color.sparkyAccent)
            }
            .frame(maxWidth: .infinity, alignment: .leading)
            .sparkyCard(padding: 17)
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .accessibilityHint("Opens the practical inspection and testing trainer")
    }
}

private struct QualificationRouteCard: View {
    @State private var showsAdvice = false

    private let steps = ["Level 2", "Level 3", "NVQ evidence", "AM2", "ECS card"]

    var body: some View {
        VStack(alignment: .leading, spacing: 14) {
            Button {
                withAnimation(.easeInOut(duration: 0.2)) {
                    showsAdvice.toggle()
                }
            } label: {
                HStack(spacing: 12) {
                    Image(systemName: "point.topleft.down.curvedto.point.bottomright.up")
                        .font(.headline)
                        .foregroundStyle(Color.sparkyAccent)
                        .frame(width: 40, height: 40)
                        .background(Color.sparkyAccentSoft)
                        .clipShape(RoundedRectangle(cornerRadius: 12, style: .continuous))

                    VStack(alignment: .leading, spacing: 2) {
                        Text("Your qualification route")
                            .font(.headline)
                            .foregroundStyle(Color.sparkyText)
                        Text("Level 2 through ECS card")
                            .font(.caption)
                            .foregroundStyle(Color.sparkyMuted)
                    }

                    Spacer(minLength: 8)

                    Image(systemName: "chevron.down")
                        .font(.caption.bold())
                        .foregroundStyle(Color.sparkyMuted)
                        .rotationEffect(.degrees(showsAdvice ? 180 : 0))
                        .accessibilityHidden(true)
                }
                .frame(maxWidth: .infinity, minHeight: 44, alignment: .leading)
                .contentShape(Rectangle())
            }
            .buttonStyle(.plain)
            .accessibilityLabel("Your qualification route, Level 2 through ECS card")
            .accessibilityValue(showsAdvice ? "Expanded" : "Collapsed")

            ScrollView(.horizontal) {
                HStack(spacing: 0) {
                    ForEach(Array(steps.enumerated()), id: \.offset) { index, step in
                        RouteStep(number: index + 1, title: step)

                        if index < steps.count - 1 {
                            Rectangle()
                                .fill(Color.sparkyAccent.opacity(0.32))
                                .frame(width: 24, height: 2)
                                .accessibilityHidden(true)
                        }
                    }
                }
                .padding(.vertical, 2)
            }
            .scrollIndicators(.hidden)

            if showsAdvice {
                StudyNotice(
                    title: "Plan with current sources",
                    message: "Course, workplace evidence and card requirements can change. Confirm your route with the awarding body, training provider and ECS guidance."
                )
                .transition(.opacity.combined(with: .move(edge: .top)))
            }
        }
        .sparkyCard(padding: 16)
    }
}

private struct RouteStep: View {
    let number: Int
    let title: String

    var body: some View {
        VStack(spacing: 7) {
            Text("\(number)")
                .font(.caption.bold().monospacedDigit())
                .foregroundStyle(Color.sparkyAccent)
                .frame(width: 32, height: 32)
                .background(Color.sparkyAccentSoft)
                .clipShape(Circle())

            Text(title)
                .font(.caption.weight(.semibold))
                .foregroundStyle(Color.sparkyText)
                .fixedSize(horizontal: true, vertical: false)
        }
        .frame(minWidth: 74)
        .accessibilityElement(children: .combine)
        .accessibilityLabel("Step \(number), \(title)")
    }
}

private struct GuideFilterBar: View {
    @Binding var selection: GuideFilter

    var body: some View {
        ScrollView(.horizontal) {
            HStack(spacing: 8) {
                ForEach(GuideFilter.options) { filter in
                    Button {
                        withAnimation(.easeInOut(duration: 0.16)) {
                            selection = filter
                        }
                    } label: {
                        TagChip(
                            title: filter.title,
                            selected: selection == filter,
                            symbol: filter.symbolName
                        )
                        .frame(minHeight: 44)
                        .contentShape(Capsule())
                    }
                    .buttonStyle(.plain)
                    .accessibilityAddTraits(selection == filter ? .isSelected : [])
                }
            }
        }
        .scrollIndicators(.hidden)
        .accessibilityElement(children: .contain)
        .accessibilityLabel("Guide categories")
    }
}

private struct GuideCard: View {
    let guide: CourseGuide
    let isCompleted: Bool
    let onToggleCompleted: () -> Void

    var body: some View {
        HStack(alignment: .top, spacing: 10) {
            NavigationLink(value: LearnRoute.guide(guide.id)) {
                VStack(alignment: .leading, spacing: 10) {
                    HStack(alignment: .center, spacing: 9) {
                        Label(guide.category.title, systemImage: guide.category.symbolName)
                            .font(.caption.weight(.bold))
                            .foregroundStyle(Color.sparkyAccent)

                        Spacer(minLength: 6)

                        Text(guide.kicker.uppercased())
                            .font(.caption2.weight(.bold).monospaced())
                            .tracking(0.8)
                            .foregroundStyle(Color.sparkyMuted)
                    }

                    Text(guide.title)
                        .font(.title3.weight(.bold))
                        .foregroundStyle(Color.sparkyText)
                        .multilineTextAlignment(.leading)
                        .fixedSize(horizontal: false, vertical: true)

                    Text(guide.summary)
                        .font(.subheadline)
                        .foregroundStyle(Color.sparkyMuted)
                        .multilineTextAlignment(.leading)
                        .fixedSize(horizontal: false, vertical: true)

                    if let fact = guide.facts.first {
                        HStack(alignment: .firstTextBaseline, spacing: 6) {
                            Text(fact.label)
                                .font(.caption.weight(.semibold))
                                .foregroundStyle(Color.sparkyMuted)
                            Text(fact.value)
                                .font(.caption.weight(.bold))
                                .foregroundStyle(Color.sparkyText)
                                .lineLimit(2)
                        }
                    }

                    HStack(spacing: 6) {
                        Text("Open guide")
                            .font(.subheadline.weight(.bold))
                        Image(systemName: "arrow.right")
                            .font(.caption.bold())
                    }
                    .foregroundStyle(Color.sparkyAccent)
                }
                .frame(maxWidth: .infinity, minHeight: 44, alignment: .leading)
                .contentShape(Rectangle())
            }
            .buttonStyle(.plain)

            Button(action: onToggleCompleted) {
                Image(systemName: isCompleted ? "checkmark.circle.fill" : "circle")
                    .font(.title3.weight(.semibold))
                    .foregroundStyle(isCompleted ? Color.sparkySuccess : Color.sparkyMuted)
                    .frame(width: 44, height: 44)
                    .background(isCompleted ? Color.sparkySuccess.opacity(0.12) : Color.sparkyBackground.opacity(0.7))
                    .clipShape(Circle())
                    .contentShape(Circle())
            }
            .buttonStyle(.plain)
            .accessibilityLabel(isCompleted ? "Mark \(guide.title) incomplete" : "Mark \(guide.title) complete")
        }
        .padding(17)
        .background(Color.sparkySurface)
        .clipShape(RoundedRectangle(cornerRadius: SparkyLayout.cardRadius, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: SparkyLayout.cardRadius, style: .continuous)
                .stroke(isCompleted ? Color.sparkySuccess.opacity(0.4) : Color.sparkyBorder, lineWidth: 1)
        }
        .shadow(color: Color.black.opacity(0.045), radius: 15, y: 7)
    }
}

private struct GuideDetailView: View {
    @Environment(StudyStateStore.self) private var studyState
    @Environment(AppRouter.self) private var router

    let guide: CourseGuide

    private var isCompleted: Bool {
        studyState.isGuideCompleted(guide.id)
    }

    var body: some View {
        ZStack {
            SparkyBackdrop()

            ScrollView {
                VStack(alignment: .leading, spacing: 18) {
                    GuideDetailHero(guide: guide, isCompleted: isCompleted) {
                        studyState.toggleCompletedGuide(guide.id)
                    }

                    if !guide.facts.isEmpty {
                        GuideFactsView(facts: guide.facts)
                    }

                    GuideCrossLinks(guide: guide, router: router)

                    ForEach(Array(guide.sections.enumerated()), id: \.offset) { index, section in
                        GuideSectionCard(number: index + 1, section: section)
                    }

                    if !guide.pitfalls.isEmpty {
                        GuideListCard(
                            eyebrow: "Watch out",
                            title: "Common traps",
                            symbolName: "exclamationmark.triangle.fill",
                            tone: .warning,
                            items: guide.pitfalls
                        )
                    }

                    if !guide.nextActions.isEmpty {
                        GuideListCard(
                            eyebrow: "Put it to work",
                            title: "Next actions",
                            symbolName: "arrow.up.right.circle.fill",
                            tone: .next,
                            items: guide.nextActions
                        )
                    }

                    StudyNotice(
                        message: "Training routes, assessment rules and technical standards can change. Check the relevant awarding body and official publications as you plan."
                    )
                }
                .padding(.horizontal, SparkyLayout.pageInset)
                .padding(.top, 10)
                .padding(.bottom, 36)
            }
        }
        .navigationTitle(guide.title)
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .topBarTrailing) {
                Button {
                    studyState.toggleCompletedGuide(guide.id)
                } label: {
                    Image(systemName: isCompleted ? "checkmark.circle.fill" : "checkmark.circle")
                        .foregroundStyle(isCompleted ? Color.sparkySuccess : Color.sparkyAccent)
                        .frame(width: 44, height: 44)
                        .contentShape(Rectangle())
                }
                .accessibilityLabel(isCompleted ? "Mark guide incomplete" : "Mark guide complete")
            }
        }
    }
}

private struct GuideDetailHero: View {
    let guide: CourseGuide
    let isCompleted: Bool
    let onToggleCompleted: () -> Void

    var body: some View {
        VStack(alignment: .leading, spacing: 14) {
            HStack(spacing: 10) {
                Image(systemName: guide.category.symbolName)
                    .font(.headline)
                    .foregroundStyle(Color.sparkyAccent)
                    .frame(width: 42, height: 42)
                    .background(Color.sparkyAccentSoft)
                    .clipShape(RoundedRectangle(cornerRadius: 12, style: .continuous))

                VStack(alignment: .leading, spacing: 2) {
                    SparkyEyebrow(text: guide.kicker)
                    Text(guide.category.title)
                        .font(.caption.weight(.semibold))
                        .foregroundStyle(Color.sparkyMuted)
                }
            }

            Text(guide.title)
                .font(.largeTitle.weight(.bold))
                .foregroundStyle(Color.sparkyText)
                .fixedSize(horizontal: false, vertical: true)

            Text(guide.summary)
                .font(.body)
                .foregroundStyle(Color.sparkyMuted)
                .fixedSize(horizontal: false, vertical: true)

            Button(action: onToggleCompleted) {
                Label(
                    isCompleted ? "Completed — tap to undo" : "Mark guide complete",
                    systemImage: isCompleted ? "checkmark.circle.fill" : "circle"
                )
                .font(.headline)
                .foregroundStyle(isCompleted ? Color.sparkySuccess : Color.sparkyAccent)
                .frame(maxWidth: .infinity, minHeight: 50)
                .background(isCompleted ? Color.sparkySuccess.opacity(0.12) : Color.sparkyAccentSoft)
                .clipShape(RoundedRectangle(cornerRadius: SparkyLayout.controlRadius, style: .continuous))
                .overlay {
                    RoundedRectangle(cornerRadius: SparkyLayout.controlRadius, style: .continuous)
                        .stroke(
                            isCompleted ? Color.sparkySuccess.opacity(0.35) : Color.sparkyAccent.opacity(0.3),
                            lineWidth: 1
                        )
                }
                .contentShape(Rectangle())
            }
            .buttonStyle(.plain)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .sparkyCard(padding: 18)
    }
}

private struct GuideFactsView: View {
    let facts: [GuideFact]

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            SparkySectionHeader(eyebrow: "At a glance", title: "Guide facts")
                .padding(.bottom, 5)

            ForEach(Array(facts.enumerated()), id: \.offset) { index, fact in
                HStack(alignment: .firstTextBaseline, spacing: 14) {
                    Text(fact.label)
                        .font(.subheadline)
                        .foregroundStyle(Color.sparkyMuted)
                    Spacer(minLength: 16)
                    Text(fact.value)
                        .font(.subheadline.weight(.bold))
                        .foregroundStyle(Color.sparkyText)
                        .multilineTextAlignment(.trailing)
                        .fixedSize(horizontal: false, vertical: true)
                }
                .padding(.vertical, 11)
                .accessibilityElement(children: .combine)

                if index < facts.count - 1 {
                    Divider()
                        .overlay(Color.sparkyBorder)
                }
            }
        }
        .sparkyCard(padding: 17)
    }
}

private struct GuideCrossLinks: View {
    let guide: CourseGuide
    let router: AppRouter

    private var hasLinks: Bool {
        guide.examID != nil || !(guide.noteLinks ?? []).isEmpty
    }

    var body: some View {
        if hasLinks {
            VStack(alignment: .leading, spacing: 11) {
                SparkySectionHeader(eyebrow: "Keep going", title: "Practice and references")

                if let examID = guide.examID {
                    Button {
                        router.openExam(examID)
                    } label: {
                        HStack(spacing: 10) {
                            Image(systemName: "checkmark.rectangle.stack.fill")
                            Text("Practice \(guide.examLabel ?? "exam")")
                                .multilineTextAlignment(.leading)
                            Spacer(minLength: 8)
                            Image(systemName: "arrow.right")
                                .accessibilityHidden(true)
                        }
                        .padding(.horizontal, 16)
                        .frame(maxWidth: .infinity, minHeight: 48, alignment: .leading)
                    }
                    .buttonStyle(SparkyPrimaryButtonStyle())
                }

                ForEach(guide.noteLinks ?? []) { link in
                    Button {
                        router.openNote(link.noteID)
                    } label: {
                        HStack(spacing: 10) {
                            Image(systemName: "doc.text.fill")
                                .foregroundStyle(Color.sparkyAccent)
                            Text(link.label)
                                .font(.subheadline.weight(.semibold))
                                .foregroundStyle(Color.sparkyText)
                                .multilineTextAlignment(.leading)
                            Spacer(minLength: 8)
                            Image(systemName: "arrow.up.right")
                                .font(.caption.bold())
                                .foregroundStyle(Color.sparkyAccent)
                                .accessibilityHidden(true)
                        }
                        .padding(.horizontal, 14)
                        .frame(maxWidth: .infinity, minHeight: 50, alignment: .leading)
                        .background(Color.sparkySurfaceRaised.opacity(0.72))
                        .clipShape(RoundedRectangle(cornerRadius: SparkyLayout.controlRadius, style: .continuous))
                        .overlay {
                            RoundedRectangle(cornerRadius: SparkyLayout.controlRadius, style: .continuous)
                                .stroke(Color.sparkyBorder, lineWidth: 1)
                        }
                        .contentShape(Rectangle())
                    }
                    .buttonStyle(.plain)
                    .accessibilityLabel("Open note, \(link.label)")
                }
            }
            .sparkyCard(padding: 17)
        }
    }
}

private struct GuideSectionCard: View {
    let number: Int
    let section: GuideSection

    var body: some View {
        VStack(alignment: .leading, spacing: 13) {
            HStack(alignment: .top, spacing: 11) {
                Text("\(number)")
                    .font(.caption.bold().monospacedDigit())
                    .foregroundStyle(Color.sparkyAccent)
                    .frame(width: 30, height: 30)
                    .background(Color.sparkyAccentSoft)
                    .clipShape(Circle())
                    .accessibilityHidden(true)

                Text(section.title)
                    .font(.title3.weight(.bold))
                    .foregroundStyle(Color.sparkyText)
                    .fixedSize(horizontal: false, vertical: true)
                    .padding(.top, 2)
            }

            ForEach(Array(section.items.enumerated()), id: \.offset) { _, item in
                HStack(alignment: .top, spacing: 10) {
                    Circle()
                        .fill(Color.sparkyAccent)
                        .frame(width: 6, height: 6)
                        .padding(.top, 8)
                        .accessibilityHidden(true)
                    Text(item)
                        .font(.body)
                        .foregroundStyle(Color.sparkyText)
                        .fixedSize(horizontal: false, vertical: true)
                }
            }
        }
        .sparkyCard(padding: 17)
    }
}

private enum GuideListTone {
    case warning
    case next

    var color: Color {
        switch self {
        case .warning: Color.sparkyDanger
        case .next: Color.sparkySuccess
        }
    }
}

private struct GuideListCard: View {
    let eyebrow: String
    let title: String
    let symbolName: String
    let tone: GuideListTone
    let items: [String]

    var body: some View {
        VStack(alignment: .leading, spacing: 13) {
            HStack(spacing: 10) {
                Image(systemName: symbolName)
                    .font(.headline)
                    .foregroundStyle(tone.color)
                    .accessibilityHidden(true)

                VStack(alignment: .leading, spacing: 2) {
                    Text(eyebrow.uppercased())
                        .font(.caption2.weight(.bold).monospaced())
                        .tracking(1)
                        .foregroundStyle(tone.color)
                    Text(title)
                        .font(.title3.weight(.bold))
                        .foregroundStyle(Color.sparkyText)
                }
            }

            ForEach(Array(items.enumerated()), id: \.offset) { index, item in
                HStack(alignment: .top, spacing: 11) {
                    Text("\(index + 1)")
                        .font(.caption2.bold().monospacedDigit())
                        .foregroundStyle(tone.color)
                        .frame(width: 24, height: 24)
                        .background(tone.color.opacity(0.12))
                        .clipShape(Circle())
                        .accessibilityHidden(true)

                    Text(item)
                        .font(.subheadline)
                        .foregroundStyle(Color.sparkyText)
                        .fixedSize(horizontal: false, vertical: true)
                        .padding(.top, 2)
                }
            }
        }
        .padding(17)
        .background(tone.color.opacity(0.055))
        .clipShape(RoundedRectangle(cornerRadius: SparkyLayout.cardRadius, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: SparkyLayout.cardRadius, style: .continuous)
                .stroke(tone.color.opacity(0.22), lineWidth: 1)
        }
    }
}

private enum GuideFilter: Hashable, Identifiable {
    case all
    case category(GuideCategory)

    static let options: [GuideFilter] = [.all] + GuideCategory.allCases.map(GuideFilter.category)

    var id: String {
        switch self {
        case .all: "all"
        case .category(let category): category.rawValue
        }
    }

    var title: String {
        switch self {
        case .all: "All"
        case .category(let category): category.title
        }
    }

    var symbolName: String {
        switch self {
        case .all: "square.grid.2x2"
        case .category(let category): category.symbolName
        }
    }

    func includes(_ guide: CourseGuide) -> Bool {
        switch self {
        case .all: true
        case .category(let category): guide.category == category
        }
    }
}

private extension GuideCategory {
    var title: String {
        switch self {
        case .route: "Career Route"
        case .qualification: "Qualification"
        case .assessment: "Assessment"
        case .reference: "Reference"
        }
    }

    var symbolName: String {
        switch self {
        case .route: "signpost.right.fill"
        case .qualification: "graduationcap.fill"
        case .assessment: "checkmark.seal.fill"
        case .reference: "books.vertical.fill"
        }
    }
}
