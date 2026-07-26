import Foundation

enum ExamLibraryPreferences {
    static let storageKey = "sparky.hidden-exam-ids.v2"

    // Keep the first-run native library focused on the six primary exams.
    static let defaultHiddenExamIDs: Set<String> = [
        "ecs-health-safety",
        "level-2-electrical-installation",
        "level-3-electrical-installation",
        "special-locations",
        "inspection-design-2396",
        "am2-installation-assessment"
    ]

    static var defaultStorageValue: String {
        storageValue(for: defaultHiddenExamIDs)
    }

    static func hiddenExamIDs(
        from storageValue: String,
        validExamIDs: Set<String>
    ) -> Set<String> {
        guard
            let data = storageValue.data(using: .utf8),
            let decoded = try? JSONDecoder().decode([String].self, from: data)
        else {
            return defaultHiddenExamIDs.intersection(validExamIDs)
        }

        return Set(decoded).intersection(validExamIDs)
    }

    static func storageValue(for hiddenExamIDs: Set<String>) -> String {
        let ids = hiddenExamIDs.sorted()
        guard
            let data = try? JSONEncoder().encode(ids),
            let value = String(data: data, encoding: .utf8)
        else {
            return "[]"
        }
        return value
    }

    static func visibleExams(
        in catalog: ExamCatalog,
        storageValue: String
    ) -> [ExamIndexEntry] {
        let validExamIDs = Set(catalog.exams.map(\.id))
        let hiddenExamIDs = hiddenExamIDs(
            from: storageValue,
            validExamIDs: validExamIDs
        )
        let visible = catalog.exams.filter { !hiddenExamIDs.contains($0.id) }

        // A corrupted or externally edited preference must not leave Exams empty.
        return visible.isEmpty ? Array(catalog.exams.prefix(1)) : visible
    }
}
