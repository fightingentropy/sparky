import SwiftUI

struct NotesView: View {
    @Environment(ContentStore.self) private var contentStore
    @Environment(StudyStateStore.self) private var studyState
    @Environment(AppRouter.self) private var router

    @State private var path: [String] = []
    @State private var searchText = ""
    @State private var showsSavedOnly = false

    private var visibleNotes: [CheatSheetSection] {
        contentStore.notes.filter { note in
            (!showsSavedOnly || studyState.isNoteSaved(note.id)) && note.matches(searchText)
        }
    }

    var body: some View {
        NavigationStack(path: $path) {
            ZStack {
                SparkyBackdrop()

                ScrollView {
                    LazyVStack(alignment: .leading, spacing: 14) {
                        NotesOverview(
                            totalCount: contentStore.notes.count,
                            savedCount: studyState.savedNoteIDs.count
                        )

                        if visibleNotes.isEmpty {
                            NotesEmptyState(
                                hasSearch: !searchText.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty,
                                savedOnly: showsSavedOnly
                            )
                            .padding(.top, 28)
                        } else {
                            SparkySectionHeader(
                                eyebrow: showsSavedOnly ? "Your library" : "Quick reference",
                                title: showsSavedOnly ? "Saved notes" : "All notes",
                                detail: "\(visibleNotes.count)"
                            )
                            .padding(.top, 4)

                            ForEach(visibleNotes) { note in
                                NoteCard(
                                    note: note,
                                    isSaved: studyState.isNoteSaved(note.id),
                                    onToggleSaved: { studyState.toggleSavedNote(note.id) }
                                )
                            }
                        }
                    }
                    .padding(.horizontal, SparkyLayout.pageInset)
                    .padding(.top, 10)
                    .padding(.bottom, 32)
                }
                .scrollDismissesKeyboard(.interactively)
            }
            .navigationTitle("Notes")
            .navigationBarTitleDisplayMode(.large)
            .searchable(text: $searchText, prompt: "Search notes, formulas and tables")
            .toolbar {
                ToolbarItem(placement: .topBarLeading) {
                    SparkyBrandMark(size: 31)
                }
                ToolbarItem(placement: .topBarTrailing) {
                    Button {
                        withAnimation(.easeInOut(duration: 0.18)) {
                            showsSavedOnly.toggle()
                        }
                    } label: {
                        Image(systemName: showsSavedOnly ? "bookmark.fill" : "bookmark")
                            .frame(width: 44, height: 44)
                            .contentShape(Rectangle())
                    }
                    .accessibilityLabel(showsSavedOnly ? "Show all notes" : "Show saved notes")
                    .accessibilityValue(showsSavedOnly ? "Saved notes only" : "All notes")
                }
                ToolbarItem(placement: .topBarTrailing) {
                    SparkyAccountToolbarItem()
                }
            }
            .navigationDestination(for: String.self) { noteID in
                if let note = contentStore.note(id: noteID) {
                    NoteDetailView(note: note)
                } else {
                    ContentUnavailableView(
                        "Note unavailable",
                        systemImage: "doc.text.magnifyingglass",
                        description: Text("This reference note could not be loaded.")
                    )
                }
            }
            .onAppear(perform: consumePendingNote)
            .onChange(of: router.pendingNoteID) { _, _ in
                consumePendingNote()
            }
        }
    }

    private func consumePendingNote() {
        guard let noteID = router.pendingNoteID else { return }
        defer { router.clearPendingNote(noteID) }
        guard contentStore.note(id: noteID) != nil else { return }
        path = [noteID]
    }
}

private struct NotesOverview: View {
    let totalCount: Int
    let savedCount: Int

    var body: some View {
        VStack(alignment: .leading, spacing: 14) {
            HStack(alignment: .top, spacing: 13) {
                SparkyBrandMark(size: 44)

                VStack(alignment: .leading, spacing: 5) {
                    SparkyEyebrow(text: "On-site knowledge")
                    Text("The details worth keeping close")
                        .font(.title2.weight(.bold))
                        .foregroundStyle(Color.sparkyText)
                    Text("Search formulas, standards notes, drawing legends and practical reference tables.")
                        .font(.subheadline)
                        .foregroundStyle(Color.sparkyMuted)
                        .fixedSize(horizontal: false, vertical: true)
                }
            }

            ViewThatFits(in: .horizontal) {
                HStack(spacing: 10) {
                    MetricTile(label: "Reference notes", value: "\(totalCount)", symbol: "books.vertical.fill")
                    MetricTile(label: "Saved", value: "\(savedCount)", symbol: "bookmark.fill")
                }

                VStack(spacing: 10) {
                    MetricTile(label: "Reference notes", value: "\(totalCount)", symbol: "books.vertical.fill")
                    MetricTile(label: "Saved", value: "\(savedCount)", symbol: "bookmark.fill")
                }
            }
        }
        .sparkyCard(padding: 17)
    }
}

private struct NoteCard: View {
    let note: CheatSheetSection
    let isSaved: Bool
    let onToggleSaved: () -> Void

    private var detailCount: Int {
        note.items.count + (note.legend?.count ?? 0)
    }

    var body: some View {
        HStack(alignment: .top, spacing: 10) {
            NavigationLink(value: note.id) {
                HStack(alignment: .top, spacing: 12) {
                    Image(systemName: note.symbolName)
                        .font(.headline)
                        .foregroundStyle(Color.sparkyAccent)
                        .frame(width: 40, height: 40)
                        .background(Color.sparkyAccentSoft)
                        .clipShape(RoundedRectangle(cornerRadius: 12, style: .continuous))
                        .accessibilityHidden(true)

                    VStack(alignment: .leading, spacing: 7) {
                        Text(note.title)
                            .font(.headline)
                            .foregroundStyle(Color.sparkyText)
                            .multilineTextAlignment(.leading)

                        Text(note.summary)
                            .font(.subheadline)
                            .foregroundStyle(Color.sparkyMuted)
                            .multilineTextAlignment(.leading)
                            .fixedSize(horizontal: false, vertical: true)

                        HStack(spacing: 12) {
                            if detailCount > 0 {
                                Label("\(detailCount) points", systemImage: "list.bullet")
                            }
                            if let tables = note.tables, !tables.isEmpty {
                                Label("\(tables.count) table\(tables.count == 1 ? "" : "s")", systemImage: "tablecells")
                            }
                        }
                        .font(.caption.weight(.semibold))
                        .foregroundStyle(Color.sparkyMuted)
                    }

                    Spacer(minLength: 2)

                    Image(systemName: "chevron.right")
                        .font(.caption.weight(.bold))
                        .foregroundStyle(Color.sparkyMuted)
                        .padding(.top, 5)
                        .accessibilityHidden(true)
                }
                .contentShape(Rectangle())
            }
            .buttonStyle(.plain)
            .frame(maxWidth: .infinity, minHeight: 44, alignment: .leading)

            Button(action: onToggleSaved) {
                Image(systemName: isSaved ? "bookmark.fill" : "bookmark")
                    .font(.body.weight(.semibold))
                    .foregroundStyle(isSaved ? Color.sparkyAccent : Color.sparkyMuted)
                    .frame(width: 44, height: 44)
                    .background(isSaved ? Color.sparkyAccentSoft : Color.sparkyBackground.opacity(0.75))
                    .clipShape(Circle())
                    .contentShape(Circle())
            }
            .buttonStyle(.plain)
            .accessibilityLabel(isSaved ? "Remove \(note.title) from saved notes" : "Save \(note.title)")
        }
        .padding(16)
        .background(Color.sparkySurface)
        .clipShape(RoundedRectangle(cornerRadius: SparkyLayout.cardRadius, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: SparkyLayout.cardRadius, style: .continuous)
                .stroke(isSaved ? Color.sparkyAccent.opacity(0.42) : Color.sparkyBorder, lineWidth: 1)
        }
        .shadow(color: Color.black.opacity(0.045), radius: 14, y: 7)
    }
}

private struct NotesEmptyState: View {
    let hasSearch: Bool
    let savedOnly: Bool

    var body: some View {
        ContentUnavailableView {
            Label(
                savedOnly ? "No saved notes" : "No notes found",
                systemImage: savedOnly ? "bookmark" : "magnifyingglass"
            )
        } description: {
            Text(
                savedOnly
                    ? "Save useful references and they will appear here."
                    : hasSearch ? "Try a broader term or clear the search." : "Reference notes are not available yet."
            )
        }
        .frame(maxWidth: .infinity)
    }
}

private struct NoteDetailView: View {
    @Environment(StudyStateStore.self) private var studyState
    let note: CheatSheetSection

    private var isSaved: Bool {
        studyState.isNoteSaved(note.id)
    }

    var body: some View {
        ZStack {
            SparkyBackdrop()

            ScrollView {
                VStack(alignment: .leading, spacing: 18) {
                    VStack(alignment: .leading, spacing: 10) {
                        HStack(spacing: 10) {
                            Image(systemName: note.symbolName)
                                .font(.headline)
                                .foregroundStyle(Color.sparkyAccent)
                                .frame(width: 42, height: 42)
                                .background(Color.sparkyAccentSoft)
                                .clipShape(RoundedRectangle(cornerRadius: 12, style: .continuous))
                            SparkyEyebrow(text: "Reference note")
                        }

                        Text(note.title)
                            .font(.largeTitle.weight(.bold))
                            .foregroundStyle(Color.sparkyText)
                            .fixedSize(horizontal: false, vertical: true)

                        Text(note.summary)
                            .font(.body)
                            .foregroundStyle(Color.sparkyMuted)
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .sparkyCard(padding: 18)

                    if !note.items.isEmpty {
                        VStack(alignment: .leading, spacing: 13) {
                            SparkySectionHeader(eyebrow: "Key points", title: "What to remember")

                            ForEach(Array(note.items.enumerated()), id: \.offset) { index, item in
                                NotePointRow(number: index + 1, text: item)
                            }
                        }
                        .sparkyCard(padding: 17)
                    }

                    if let legend = note.legend, !legend.isEmpty {
                        VStack(alignment: .leading, spacing: 12) {
                            SparkySectionHeader(eyebrow: "Visual key", title: "Drawing legend")

                            ForEach(Array(legend.enumerated()), id: \.offset) { _, item in
                                NoteLegendRow(item: item)
                            }
                        }
                        .sparkyCard(padding: 17)
                    }

                    if let tables = note.tables, !tables.isEmpty {
                        VStack(alignment: .leading, spacing: 14) {
                            SparkySectionHeader(eyebrow: "Quick lookup", title: "Reference tables")

                            ForEach(Array(tables.enumerated()), id: \.offset) { _, table in
                                NoteReferenceTableView(table: table)
                            }
                        }
                        .sparkyCard(padding: 17)
                    }

                    StudyNotice(
                        message: "Use this as a revision aid. Confirm current values, standards and qualification requirements with the official source before live work."
                    )
                }
                .padding(.horizontal, SparkyLayout.pageInset)
                .padding(.top, 10)
                .padding(.bottom, 34)
            }
        }
        .navigationTitle(note.title)
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .topBarTrailing) {
                Button {
                    studyState.toggleSavedNote(note.id)
                } label: {
                    Image(systemName: isSaved ? "bookmark.fill" : "bookmark")
                        .frame(width: 44, height: 44)
                        .contentShape(Rectangle())
                }
                .accessibilityLabel(isSaved ? "Remove from saved notes" : "Save note")
            }
        }
    }
}

private struct NotePointRow: View {
    let number: Int
    let text: String

    var body: some View {
        HStack(alignment: .top, spacing: 12) {
            Text("\(number)")
                .font(.caption.bold().monospacedDigit())
                .foregroundStyle(Color.sparkyAccent)
                .frame(width: 28, height: 28)
                .background(Color.sparkyAccentSoft)
                .clipShape(Circle())
                .accessibilityHidden(true)

            Text(text)
                .font(.body)
                .foregroundStyle(Color.sparkyText)
                .fixedSize(horizontal: false, vertical: true)
                .padding(.top, 3)
        }
        .accessibilityElement(children: .combine)
    }
}

private struct NoteLegendRow: View {
    let item: LegendItem

    var body: some View {
        HStack(spacing: 13) {
            LegendSwatchView(item: item)

            Text(item.label)
                .font(.subheadline.weight(.medium))
                .foregroundStyle(Color.sparkyText)
                .fixedSize(horizontal: false, vertical: true)

            Spacer(minLength: 0)
        }
        .padding(10)
        .background(Color.sparkyBackground.opacity(0.7))
        .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))
        .accessibilityElement(children: .combine)
    }
}

private struct LegendSwatchView: View {
    let item: LegendItem

    private var colors: [Color] {
        let values = item.swatch?.values ?? []
        return values.isEmpty ? [Color.sparkyAccent] : values.map(Color.init(sparkyHex:))
    }

    private var primaryColor: Color {
        colors.first ?? Color.sparkyAccent
    }

    var body: some View {
        Group {
            switch item.swatchStyle ?? .solid {
            case .solid:
                RoundedRectangle(cornerRadius: 8, style: .continuous)
                    .fill(primaryColor)
            case .stripe:
                HStack(spacing: 0) {
                    ForEach(Array(colors.enumerated()), id: \.offset) { _, color in
                        color
                    }
                }
                .clipShape(RoundedRectangle(cornerRadius: 8, style: .continuous))
            case .ladder:
                ZStack {
                    RoundedRectangle(cornerRadius: 8, style: .continuous)
                        .fill(primaryColor.opacity(0.24))
                    Canvas { context, size in
                        var rails = Path()
                        rails.move(to: CGPoint(x: 12, y: 5))
                        rails.addLine(to: CGPoint(x: 12, y: size.height - 5))
                        rails.move(to: CGPoint(x: size.width - 12, y: 5))
                        rails.addLine(to: CGPoint(x: size.width - 12, y: size.height - 5))
                        stride(from: 8.0, through: size.height - 7, by: 8).forEach { y in
                            rails.move(to: CGPoint(x: 12, y: y))
                            rails.addLine(to: CGPoint(x: size.width - 12, y: y))
                        }
                        context.stroke(rails, with: .color(primaryColor), lineWidth: 2)
                    }
                }
            case .x:
                ZStack {
                    RoundedRectangle(cornerRadius: 8, style: .continuous)
                        .fill(primaryColor.opacity(0.2))
                    Image(systemName: "xmark")
                        .font(.title3.bold())
                        .foregroundStyle(primaryColor)
                }
            case .outline:
                RoundedRectangle(cornerRadius: 8, style: .continuous)
                    .fill(Color.sparkySurfaceRaised)
                    .overlay {
                        RoundedRectangle(cornerRadius: 8, style: .continuous)
                            .stroke(primaryColor, lineWidth: 3)
                    }
            case .box:
                RoundedRectangle(cornerRadius: 8, style: .continuous)
                    .fill(primaryColor)
                    .overlay {
                        RoundedRectangle(cornerRadius: 3, style: .continuous)
                            .stroke(Color(sparkyHex: item.swatchExtra ?? "#ffffff"), lineWidth: 2)
                            .padding(9)
                    }
            }
        }
        .frame(width: 58, height: 44)
        .overlay {
            RoundedRectangle(cornerRadius: 8, style: .continuous)
                .stroke(Color.sparkyBorder, lineWidth: 1)
        }
        .accessibilityHidden(true)
    }
}

private struct NoteReferenceTableView: View {
    let table: ReferenceTable

    private var columnCount: Int {
        max(table.headers.count, table.rows.map(\.count).max() ?? 0)
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 9) {
            Text(table.title)
                .font(.subheadline.weight(.bold))
                .foregroundStyle(Color.sparkyText)
                .fixedSize(horizontal: false, vertical: true)

            ScrollView(.horizontal) {
                VStack(alignment: .leading, spacing: 0) {
                    NoteTableRow(cells: normalized(table.headers), isHeader: true)

                    ForEach(Array(table.rows.enumerated()), id: \.offset) { rowIndex, row in
                        NoteTableRow(cells: normalized(row), isHeader: false)
                            .background(rowIndex.isMultiple(of: 2) ? Color.clear : Color.sparkyAccentSoft.opacity(0.22))
                    }
                }
                .clipShape(RoundedRectangle(cornerRadius: 13, style: .continuous))
                .overlay {
                    RoundedRectangle(cornerRadius: 13, style: .continuous)
                        .stroke(Color.sparkyBorder, lineWidth: 1)
                }
            }
            .scrollIndicators(.visible)
        }
    }

    private func normalized(_ values: [String]) -> [String] {
        values + Array(repeating: "", count: max(0, columnCount - values.count))
    }
}

private struct NoteTableRow: View {
    let cells: [String]
    let isHeader: Bool

    var body: some View {
        HStack(alignment: .top, spacing: 0) {
            ForEach(Array(cells.enumerated()), id: \.offset) { index, cell in
                Text(cell)
                    .font(isHeader ? .caption.weight(.bold) : .caption)
                    .foregroundStyle(isHeader ? Color.sparkyAccent : Color.sparkyText)
                    .fixedSize(horizontal: false, vertical: true)
                    .frame(width: 142, alignment: .leading)
                    .padding(.horizontal, 11)
                    .padding(.vertical, 10)
                    .background(isHeader ? Color.sparkyAccentSoft : Color.clear)
                    .overlay(alignment: .trailing) {
                        if index < cells.count - 1 {
                            Rectangle()
                                .fill(Color.sparkyBorder)
                                .frame(width: 1)
                        }
                    }
            }
        }
        .accessibilityElement(children: .combine)
    }
}

private extension CheatSheetSection {
    func matches(_ query: String) -> Bool {
        let trimmed = query.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !trimmed.isEmpty else { return true }

        var searchableValues = [title, summary]
        searchableValues.append(contentsOf: items)

        if let legend {
            searchableValues.append(contentsOf: legend.map(\.label))
        }

        if let tables {
            for table in tables {
                searchableValues.append(table.title)
                searchableValues.append(contentsOf: table.headers)
                for row in table.rows {
                    searchableValues.append(contentsOf: row)
                }
            }
        }

        return searchableValues.contains { $0.localizedCaseInsensitiveContains(trimmed) }
    }

    var symbolName: String {
        let value = "\(id) \(title)".lowercased()
        if value.contains("formula") || value.contains("math") || value.contains("calc") {
            return "function"
        }
        if value.contains("drawing") || value.contains("sketch") || value.contains("colour") {
            return "scribble.variable"
        }
        if value.contains("test") || value.contains("inspection") || value.contains("eicr") {
            return "checklist"
        }
        if value.contains("cable") || value.contains("conduit") {
            return "cable.connector"
        }
        if value.contains("protection") || value.contains("rcd") || value.contains("earthing") {
            return "bolt.shield.fill"
        }
        return "doc.text.fill"
    }
}

private extension Color {
    init(sparkyHex value: String) {
        let normalized = value.trimmingCharacters(in: .whitespacesAndNewlines).lowercased()
        if normalized == "transparent" {
            self = .clear
            return
        }

        let hex = normalized.hasPrefix("#") ? String(normalized.dropFirst()) : normalized
        guard hex.count == 6, let number = UInt64(hex, radix: 16) else {
            self = .sparkyAccent
            return
        }

        self = Color(
            red: Double((number >> 16) & 0xff) / 255,
            green: Double((number >> 8) & 0xff) / 255,
            blue: Double(number & 0xff) / 255
        )
    }
}
