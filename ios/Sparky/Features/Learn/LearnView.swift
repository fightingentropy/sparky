import SwiftUI

private enum LearnRoute: Hashable {
    case guide(String)
    case inspectionTraining
}

struct LearnView: View {
    @Environment(ContentStore.self) private var contentStore
    @Environment(StudyStateStore.self) private var studyState

    @State private var path: [LearnRoute] = []
    @State private var searchText = ""
    @FocusState private var searchIsFocused: Bool

    private var completedCount: Int {
        contentStore.guides.filter { studyState.isGuideCompleted($0.id) }.count
    }

    private var visibleGuides: [CourseGuide] {
        contentStore.guides.filter { $0.matchesLearningQuery(searchText) }
    }

    private var hasSearch: Bool {
        !searchText.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty
    }

    var body: some View {
        NavigationStack(path: $path) {
            ZStack {
                SparkyBackdrop()

                ScrollView {
                    LazyVStack(alignment: .leading, spacing: 20) {
                        searchField

                        if !hasSearch {
                            if let guide = studyState.suggestedGuide(in: contentStore.guides) {
                                ContinueGuideCard(
                                    guide: guide,
                                    isReturning: guide.id == studyState.lastOpenedGuideID,
                                    completedCount: completedCount,
                                    totalCount: contentStore.guides.count
                                )
                            } else if !contentStore.guides.isEmpty {
                                VStack(alignment: .leading, spacing: 6) {
                                    Label("All guides complete", systemImage: "checkmark.circle.fill")
                                        .font(.headline)
                                        .foregroundStyle(Color.sparkySuccess)
                                    Text("Choose any guide below to revisit it.")
                                        .font(.subheadline)
                                        .foregroundStyle(Color.sparkyMuted)
                                }
                                .frame(maxWidth: .infinity, alignment: .leading)
                                .sparkyCard(padding: 16)
                            }

                            InspectionTrainingLink()
                        }

                        HStack(alignment: .firstTextBaseline) {
                            Text(hasSearch ? "Search results" : "Study guides")
                                .font(.title2.bold())
                                .foregroundStyle(Color.sparkyText)
                                .accessibilityAddTraits(.isHeader)
                            Spacer()
                            Text("\(visibleGuides.count)")
                                .font(.subheadline.monospacedDigit())
                                .foregroundStyle(Color.sparkyMuted)
                                .accessibilityLabel("\(visibleGuides.count) guides")
                        }

                        if visibleGuides.isEmpty {
                            ContentUnavailableView {
                                Label("No matching guides", systemImage: "magnifyingglass")
                            } description: {
                                Text("Try a qualification or topic, such as PAT or wiring regulations.")
                            } actions: {
                                Button("Clear search") { searchText = "" }
                            }
                        } else {
                            ForEach(LearnTopic.allCases) { topic in
                                let guides = visibleGuides.filter { topic.includes($0) }
                                if !guides.isEmpty {
                                    VStack(alignment: .leading, spacing: 10) {
                                        Text(topic.title)
                                            .font(.subheadline.weight(.semibold))
                                            .foregroundStyle(Color.sparkyMuted)
                                            .accessibilityAddTraits(.isHeader)

                                        VStack(spacing: 0) {
                                            ForEach(Array(guides.enumerated()), id: \.element.id) { index, guide in
                                                GuideRow(
                                                    guide: guide,
                                                    isCompleted: studyState.isGuideCompleted(guide.id),
                                                    isInProgress: studyState.lastOpenedGuideID == guide.id
                                                )
                                                if index < guides.count - 1 {
                                                    Divider().overlay(Color.sparkyBorder)
                                                        .padding(.horizontal, 16)
                                                }
                                            }
                                        }
                                        .sparkyCard(padding: 0)
                                    }
                                }
                            }
                        }
                    }
                    .padding(.horizontal, SparkyLayout.pageInset)
                    .padding(.top, 10)
                    .padding(.bottom, 34)
                }
                .scrollDismissesKeyboard(.interactively)
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
            .onChange(of: path) { _, _ in searchIsFocused = false }
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

    private var searchField: some View {
        HStack(spacing: 10) {
            Image(systemName: "magnifyingglass")
                .foregroundStyle(Color.sparkyMuted)
                .accessibilityHidden(true)
            TextField("Search guides and topics", text: $searchText)
                .textInputAutocapitalization(.never)
                .autocorrectionDisabled()
                .submitLabel(.search)
                .focused($searchIsFocused)
                .onSubmit { searchIsFocused = false }
                .accessibilityIdentifier("learn-search")
            if !searchText.isEmpty {
                Button {
                    searchText = ""
                } label: {
                    Image(systemName: "xmark.circle.fill")
                        .foregroundStyle(Color.sparkyMuted)
                        .frame(width: 44, height: 44)
                }
                .buttonStyle(.plain)
                .accessibilityLabel("Clear search")
            }
        }
        .padding(.leading, 14)
        .padding(.trailing, searchText.isEmpty ? 14 : 0)
        .frame(minHeight: 48)
        .background(Color.sparkySurfaceRaised)
        .clipShape(RoundedRectangle(cornerRadius: 12, style: .continuous))
    }
}

private struct ContinueGuideCard: View {
    let guide: CourseGuide
    let isReturning: Bool
    let completedCount: Int
    let totalCount: Int

    var body: some View {
        NavigationLink(value: LearnRoute.guide(guide.id)) {
            VStack(alignment: .leading, spacing: 12) {
                HStack(alignment: .top, spacing: 16) {
                    VStack(alignment: .leading, spacing: 5) {
                        Text(isReturning ? "Continue reading" : completedCount > 0 ? "Next unread guide" : "Start here")
                            .font(.subheadline.weight(.semibold))
                            .foregroundStyle(Color.sparkyAccent)
                        Text(guide.title)
                            .font(.headline)
                            .foregroundStyle(Color.sparkyText)
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    Spacer(minLength: 0)
                    Image(systemName: "arrow.right")
                        .font(.headline)
                        .foregroundStyle(Color.sparkyAccent)
                        .padding(.top, 3)
                        .accessibilityHidden(true)
                }
                VStack(alignment: .leading, spacing: 7) {
                    Text("\(completedCount) of \(totalCount) guides complete")
                        .font(.caption)
                        .foregroundStyle(Color.sparkyMuted)
                    ProgressView(value: Double(completedCount), total: Double(max(totalCount, 1)))
                        .tint(Color.sparkyAccent)
                        .accessibilityHidden(true)
                }
            }
            .multilineTextAlignment(.leading)
            .frame(maxWidth: .infinity, alignment: .leading)
            .sparkyCard(padding: 16)
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .accessibilityIdentifier("learn-continue-guide")
    }
}

private struct InspectionTrainingLink: View {
    @Environment(InspectionTrainingStore.self) private var trainingStore

    var body: some View {
        NavigationLink(value: LearnRoute.inspectionTraining) {
            HStack(spacing: 12) {
                Image(systemName: "waveform.path.ecg.rectangle")
                    .font(.title2)
                    .foregroundStyle(Color.sparkyAccent)
                    .frame(width: 44, height: 44)
                    .background(Color.sparkyAccentSoft)
                    .clipShape(RoundedRectangle(cornerRadius: 12))
                    .accessibilityHidden(true)
                VStack(alignment: .leading, spacing: 4) {
                    Text("Inspection & testing labs")
                        .font(.headline)
                        .foregroundStyle(Color.sparkyText)
                    Text("\(InspectionTrainingCatalog.labs.count) interactive labs · \(trainingStore.completedLabCount) complete")
                        .font(.caption)
                        .foregroundStyle(Color.sparkyMuted)
                }
                .fixedSize(horizontal: false, vertical: true)
                Spacer(minLength: 0)
                Image(systemName: "chevron.right")
                    .font(.caption.bold())
                    .foregroundStyle(Color.sparkyMuted)
                    .accessibilityHidden(true)
            }
            .multilineTextAlignment(.leading)
            .frame(maxWidth: .infinity, alignment: .leading)
            .sparkyCard(padding: 16)
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .accessibilityHint("Practise using a virtual tester and interpreting results")
    }
}

private struct GuideRow: View {
    let guide: CourseGuide
    let isCompleted: Bool
    let isInProgress: Bool

    var body: some View {
        NavigationLink(value: LearnRoute.guide(guide.id)) {
            HStack(spacing: 12) {
                VStack(alignment: .leading, spacing: 6) {
                    Text(guide.title)
                        .font(.headline)
                        .foregroundStyle(Color.sparkyText)
                        .fixedSize(horizontal: false, vertical: true)
                    HStack(spacing: 8) {
                        Text("\(guide.sections.count) sections")
                            .foregroundStyle(Color.sparkyMuted)
                        if isCompleted {
                            Label("Complete", systemImage: "checkmark.circle.fill")
                                .foregroundStyle(Color.sparkySuccess)
                        } else if isInProgress {
                            Text("In progress")
                                .foregroundStyle(Color.sparkyAccent)
                        }
                    }
                    .font(.caption)
                }
                Spacer(minLength: 0)
                Image(systemName: "chevron.right")
                    .font(.caption.bold())
                    .foregroundStyle(Color.sparkyMuted)
                    .accessibilityHidden(true)
            }
            .multilineTextAlignment(.leading)
            .frame(maxWidth: .infinity, minHeight: 44, alignment: .leading)
            .padding(16)
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
    }
}

private struct GuideDetailView: View {
    @Environment(ContentStore.self) private var contentStore
    @Environment(StudyStateStore.self) private var studyState
    @Environment(AppRouter.self) private var router

    let guide: CourseGuide

    private var isCompleted: Bool {
        studyState.isGuideCompleted(guide.id)
    }

    private var nextGuide: CourseGuide? {
        contentStore.guides.first { $0.id != guide.id && !studyState.isGuideCompleted($0.id) }
    }

    var body: some View {
        ScrollViewReader { scroll in
            ZStack {
                SparkyBackdrop()

                ScrollView {
                    VStack(alignment: .leading, spacing: 20) {
                        GuideDetailHero(guide: guide, isCompleted: isCompleted)

                        if !guide.sections.isEmpty {
                            VStack(alignment: .leading, spacing: 12) {
                                Text("In this guide")
                                    .font(.headline)
                                    .foregroundStyle(Color.sparkyText)
                                    .accessibilityAddTraits(.isHeader)
                                ForEach(Array(guide.sections.enumerated()), id: \.offset) { index, section in
                                    Button {
                                        withAnimation {
                                            scroll.scrollTo("guide-section-\(index)", anchor: .top)
                                        }
                                    } label: {
                                        HStack(alignment: .firstTextBaseline, spacing: 10) {
                                            Text("\(index + 1).")
                                                .font(.subheadline.monospacedDigit())
                                            Text(section.title)
                                                .font(.subheadline.weight(.semibold))
                                                .frame(maxWidth: .infinity, alignment: .leading)
                                            Image(systemName: "arrow.down")
                                                .font(.caption)
                                                .accessibilityHidden(true)
                                        }
                                        .foregroundStyle(Color.sparkyAccent)
                                        .multilineTextAlignment(.leading)
                                        .frame(minHeight: 44)
                                        .contentShape(Rectangle())
                                    }
                                    .buttonStyle(.plain)
                                    .accessibilityHint("Jumps to this section")
                                }
                            }
                            .sparkyCard(padding: 16)
                        }

                        if !guide.facts.isEmpty {
                            DisclosureGroup("Key details") {
                                GuideFactsView(facts: guide.facts)
                                    .padding(.top, 10)
                            }
                            .font(.subheadline.weight(.semibold))
                            .tint(Color.sparkyAccent)
                            .padding(.horizontal, 4)
                        }

                        ForEach(Array(guide.sections.enumerated()), id: \.offset) { index, section in
                            GuideSectionCard(number: index + 1, section: section)
                                .id("guide-section-\(index)")
                        }

                        if !guide.pitfalls.isEmpty {
                            GuideListCard(
                                eyebrow: "Watch out",
                                title: "Common mistakes",
                                symbolName: "exclamationmark.triangle.fill",
                                tone: .warning,
                                items: guide.pitfalls
                            )
                        }

                        if !guide.nextActions.isEmpty {
                            GuideListCard(
                                eyebrow: "Put it into practice",
                                title: "What to do next",
                                symbolName: "arrow.up.right.circle.fill",
                                tone: .next,
                                items: guide.nextActions
                            )
                        }

                        completionCard
                        GuideCrossLinks(guide: guide, router: router)

                        StudyNotice(
                            message: "Training routes, assessment rules and technical standards can change. Check the relevant awarding body and official publications as you plan."
                        )
                    }
                    .padding(.horizontal, SparkyLayout.pageInset)
                    .padding(.top, 10)
                    .padding(.bottom, 36)
                }
            }
        }
        .navigationTitle("Study guide")
        .navigationBarTitleDisplayMode(.inline)
        .onAppear { studyState.recordOpenedGuide(guide.id) }
    }

    private var completionCard: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text(isCompleted ? "Guide complete" : "Finished reading?")
                .font(.headline)
                .foregroundStyle(isCompleted ? Color.sparkySuccess : Color.sparkyText)
            if isCompleted {
                Button("Mark as not complete") {
                    studyState.toggleCompletedGuide(guide.id)
                }
                .font(.subheadline)
                .tint(Color.sparkyMuted)
                .frame(minHeight: 44)
                .accessibilityIdentifier("learn-mark-incomplete")

                if let nextGuide {
                    NavigationLink(value: LearnRoute.guide(nextGuide.id)) {
                        VStack(alignment: .leading, spacing: 5) {
                            Text("Next unread guide")
                                .font(.caption)
                                .foregroundStyle(Color.sparkyMuted)
                            Label(nextGuide.title, systemImage: "arrow.right")
                                .font(.subheadline.weight(.semibold))
                                .foregroundStyle(Color.sparkyAccent)
                                .fixedSize(horizontal: false, vertical: true)
                        }
                        .multilineTextAlignment(.leading)
                        .frame(maxWidth: .infinity, minHeight: 44, alignment: .leading)
                        .contentShape(Rectangle())
                    }
                    .buttonStyle(.plain)
                }
            } else {
                Button {
                    studyState.toggleCompletedGuide(guide.id)
                } label: {
                    Label("Mark guide complete", systemImage: "checkmark.circle")
                        .frame(maxWidth: .infinity, minHeight: 48)
                }
                .buttonStyle(SparkyPrimaryButtonStyle())
                .accessibilityIdentifier("learn-mark-complete")
            }
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .sparkyCard(padding: 16)
    }
}

private struct GuideDetailHero: View {
    let guide: CourseGuide
    let isCompleted: Bool

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text(guide.category.title)
                .font(.subheadline.weight(.semibold))
                .foregroundStyle(Color.sparkyAccent)
            Text(guide.title)
                .font(.title.bold())
                .foregroundStyle(Color.sparkyText)
                .fixedSize(horizontal: false, vertical: true)
                .accessibilityAddTraits(.isHeader)
            Text(guide.summary)
                .font(.body)
                .foregroundStyle(Color.sparkyMuted)
                .fixedSize(horizontal: false, vertical: true)
            if isCompleted {
                Label("Completed", systemImage: "checkmark.circle.fill")
                    .font(.subheadline.weight(.semibold))
                    .foregroundStyle(Color.sparkySuccess)
            }
        }
        .frame(maxWidth: .infinity, alignment: .leading)
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

private enum LearnTopic: String, CaseIterable, Identifiable {
    case qualifications
    case assessments
    case reference

    var id: String { rawValue }

    var title: String {
        switch self {
        case .qualifications: "Getting qualified"
        case .assessments: "Preparing for assessments"
        case .reference: "Technical reference"
        }
    }

    func includes(_ guide: CourseGuide) -> Bool {
        switch self {
        case .qualifications: guide.category == .route || guide.category == .qualification
        case .assessments: guide.category == .assessment
        case .reference: guide.category == .reference
        }
    }
}

private extension GuideCategory {
    var title: String {
        switch self {
        case .route: "Career route"
        case .qualification: "Qualification guide"
        case .assessment: "Assessment preparation"
        case .reference: "Technical reference"
        }
    }
}

extension CourseGuide {
    func matchesLearningQuery(_ query: String) -> Bool {
        func words(in value: String) -> [String] {
            value.folding(options: [.caseInsensitive, .diacriticInsensitive], locale: .current)
                .components(separatedBy: CharacterSet.alphanumerics.inverted)
                .filter { !$0.isEmpty }
        }
        let terms = words(in: query)
        guard !terms.isEmpty else {
            return query.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty
        }
        var text = [title, kicker, summary, examLabel ?? ""]
        text += facts.flatMap { [$0.label, $0.value] }
        text += sections.flatMap { [$0.title] + $0.items }
        text += pitfalls + nextActions
        let searchableWords = words(in: text.joined(separator: " "))
        return terms.allSatisfy { term in searchableWords.contains { $0.hasPrefix(term) } }
    }
}
