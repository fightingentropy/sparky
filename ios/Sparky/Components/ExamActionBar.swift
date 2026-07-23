import SwiftUI
import UniformTypeIdentifiers
import UIKit

struct ExamActionBar: View {
    let exam: Exam
    let test: ExamTest

    @State private var copied = false
    @State private var copyFeedbackToken = UUID()
    @State private var exportDocument: ExamActionFileDocument?
    @State private var exportContentType: UTType = .sparkyMarkdown
    @State private var exportFilename = ""
    @State private var isPresentingExporter = false
    @State private var isPreparingPDF = false
    @State private var exportErrorMessage: String?

    private static let websiteBaseURL = URL(string: "https://electrics.pages.dev/")!

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack(alignment: .firstTextBaseline, spacing: 8) {
                Label("Exam actions", systemImage: "doc.on.doc")
                    .font(.caption.weight(.bold))
                    .foregroundStyle(Color.sparkyText)

                Spacer(minLength: 8)

                Text("\(test.questionCount) questions")
                    .font(.caption2.weight(.semibold).monospacedDigit())
                    .foregroundStyle(Color.sparkyMuted)
            }

            ViewThatFits(in: .horizontal) {
                HStack(spacing: 10) {
                    copyButton(preferSingleLine: true)
                    exportMenu(preferSingleLine: true)
                }

                VStack(spacing: 10) {
                    copyButton(preferSingleLine: false)
                    exportMenu(preferSingleLine: false)
                }
            }
        }
        .sparkyCard(padding: 14)
        .fileExporter(
            isPresented: $isPresentingExporter,
            document: exportDocument,
            contentType: exportContentType,
            defaultFilename: exportFilename
        ) { result in
            handleExportCompletion(result)
        }
        .alert(
            "Couldn’t export exam",
            isPresented: Binding(
                get: { exportErrorMessage != nil },
                set: { isPresented in
                    if !isPresented {
                        exportErrorMessage = nil
                    }
                }
            )
        ) {
            Button("OK", role: .cancel) {}
        } message: {
            Text(exportErrorMessage ?? "Please try again.")
        }
    }

    private func copyButton(preferSingleLine: Bool) -> some View {
        Button {
            UIPasteboard.general.string = ExamExport.fullExamClipboardText(test: test)
            Haptics.success()
            showCopyFeedback()
        } label: {
            Label(copied ? "Copied" : "Copy full exam", systemImage: copied ? "checkmark" : "doc.on.doc")
                .contentTransition(.symbolEffect(.replace))
                .multilineTextAlignment(.center)
                .lineLimit(preferSingleLine ? 1 : 2)
                .fixedSize(horizontal: preferSingleLine, vertical: false)
        }
        .buttonStyle(ExamActionButtonStyle(prominent: true))
        .accessibilityLabel(copied ? "Full exam copied" : "Copy full exam")
        .accessibilityHint("Copies every question, answer, and explanation to the clipboard")
    }

    private func exportMenu(preferSingleLine: Bool) -> some View {
        Menu {
            Button {
                prepareMarkdownExport()
            } label: {
                Label("Markdown", systemImage: "doc.plaintext")
            }

            Button {
                preparePDFExport()
            } label: {
                Label("PDF", systemImage: "doc.richtext")
            }
        } label: {
            Label(
                isPreparingPDF ? "Preparing PDF…" : "Export exam",
                systemImage: isPreparingPDF ? "hourglass" : "square.and.arrow.up"
            )
            .multilineTextAlignment(.center)
            .lineLimit(preferSingleLine ? 1 : 2)
            .fixedSize(horizontal: preferSingleLine, vertical: false)
        }
        .buttonStyle(ExamActionButtonStyle(prominent: false))
        .disabled(isPreparingPDF)
        .accessibilityLabel(isPreparingPDF ? "Preparing PDF" : "Export exam")
        .accessibilityHint("Choose Markdown or PDF and save the complete exam")
    }

    private func showCopyFeedback() {
        copied = true
        let token = UUID()
        copyFeedbackToken = token

        Task { @MainActor in
            try? await Task.sleep(for: .seconds(1.4))
            guard copyFeedbackToken == token else { return }
            copied = false
        }
    }

    private func prepareMarkdownExport() {
        let markdown = ExamExport.markdownText(test: test, baseURL: Self.websiteBaseURL)
        presentExporter(
            data: Data(markdown.utf8),
            type: .sparkyMarkdown,
            filename: ExamExport.filename(
                examID: exam.id,
                testNumber: test.index + 1,
                extension: .markdown
            )
        )
    }

    private func preparePDFExport() {
        isPreparingPDF = true

        Task { @MainActor in
            // Give the menu time to dismiss and publish its progress state before
            // the synchronous PDF renderer starts.
            await Task.yield()

            let data = ExamExport.pdfData(
                test: test,
                imageData: ExamImageResource.data(for: test),
                baseURL: Self.websiteBaseURL
            )

            isPreparingPDF = false
            guard !data.isEmpty else {
                exportErrorMessage = "The PDF could not be created. Please try again."
                return
            }

            presentExporter(
                data: data,
                type: .pdf,
                filename: ExamExport.filename(
                    examID: exam.id,
                    testNumber: test.index + 1,
                    extension: .pdf
                )
            )
        }
    }

    private func presentExporter(data: Data, type: UTType, filename: String) {
        exportDocument = ExamActionFileDocument(data: data)
        exportContentType = type
        exportFilename = filename
        isPresentingExporter = true
    }

    private func handleExportCompletion(_ result: Result<URL, Error>) {
        switch result {
        case .success:
            Haptics.success()
        case .failure(let error):
            guard !isCancellation(error) else { return }
            exportErrorMessage = error.localizedDescription
        }
    }

    private func isCancellation(_ error: Error) -> Bool {
        if error is CancellationError {
            return true
        }

        let cocoaError = error as NSError
        return cocoaError.domain == NSCocoaErrorDomain
            && cocoaError.code == NSUserCancelledError
    }
}

private struct ExamActionFileDocument: FileDocument {
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

private extension UTType {
    static let sparkyMarkdown = UTType(filenameExtension: "md") ?? .plainText
}

private struct ExamActionButtonStyle: ButtonStyle {
    let prominent: Bool

    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .font(.subheadline.weight(.bold))
            .foregroundStyle(prominent ? Color.sparkyOnAccent : Color.sparkyAccent)
            .frame(maxWidth: .infinity, minHeight: 48)
            .padding(.horizontal, 14)
            .background(
                prominent
                    ? Color.sparkyAccentBase.opacity(configuration.isPressed ? 0.76 : 1)
                    : Color.sparkyAccentSoft.opacity(configuration.isPressed ? 0.64 : 1)
            )
            .clipShape(RoundedRectangle(cornerRadius: SparkyLayout.controlRadius, style: .continuous))
            .overlay {
                if !prominent {
                    RoundedRectangle(cornerRadius: SparkyLayout.controlRadius, style: .continuous)
                        .stroke(Color.sparkyAccent.opacity(0.25), lineWidth: 1)
                }
            }
            .scaleEffect(configuration.isPressed ? 0.985 : 1)
            .animation(.easeOut(duration: 0.12), value: configuration.isPressed)
    }
}
