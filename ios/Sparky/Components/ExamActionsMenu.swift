import SwiftUI
import UniformTypeIdentifiers

struct ExamActionsMenu: View {
    let copied: Bool
    let isPreparingPDF: Bool
    let canReset: Bool
    let onCopy: () -> Void
    let onExportMarkdown: () -> Void
    let onExportPDF: () -> Void
    let onReset: () -> Void

    var body: some View {
        Menu {
            Button(action: onCopy) {
                Label(
                    copied ? "Copied full exam" : "Copy full exam",
                    systemImage: copied ? "checkmark" : "doc.on.doc"
                )
            }

            Menu {
                Button(action: onExportMarkdown) {
                    Label("Markdown", systemImage: "doc.plaintext")
                }

                Button(action: onExportPDF) {
                    Label(
                        isPreparingPDF ? "Preparing PDF…" : "Export PDF",
                        systemImage: isPreparingPDF ? "hourglass" : "doc.richtext"
                    )
                }
                .disabled(isPreparingPDF)
            } label: {
                Label("Export exam", systemImage: "square.and.arrow.up")
            }

            Divider()

            Button(role: .destructive, action: onReset) {
                Label("Reset test", systemImage: "arrow.counterclockwise")
            }
            .disabled(!canReset)
        } label: {
            Image(systemName: "ellipsis")
        }
        .accessibilityLabel("Exam actions")
        .accessibilityHint("Copy, export or reset the current test")
    }
}

struct ExamActionFileDocument: FileDocument {
    static let readableContentTypes: [UTType] = [.sparkyMarkdown, .pdf]

    let data: Data

    init(data: Data) {
        self.data = data
    }

    init(configuration: ReadConfiguration) throws {
        guard let data = configuration.file.regularFileContents else {
            throw CocoaError(.fileReadCorruptFile)
        }
        self.data = data
    }

    func fileWrapper(configuration: WriteConfiguration) throws -> FileWrapper {
        FileWrapper(regularFileWithContents: data)
    }
}

extension UTType {
    static let sparkyMarkdown = UTType(filenameExtension: "md") ?? .plainText
}
