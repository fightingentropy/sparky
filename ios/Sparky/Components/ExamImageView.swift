import SwiftUI
import UIKit

struct ExamImageView: View {
    let path: String
    var maxHeight: CGFloat = 260

    private var image: UIImage? {
        let normalized = path.removingPercentEncoding ?? path
        let fileName = URL(fileURLWithPath: normalized).lastPathComponent
        let base = (fileName as NSString).deletingPathExtension
        let ext = (fileName as NSString).pathExtension

        let candidates = [
            Bundle.main.url(forResource: base, withExtension: ext, subdirectory: "exam-images"),
            Bundle.main.url(forResource: base, withExtension: ext)
        ]

        guard let url = candidates.compactMap({ $0 }).first else { return nil }
        return UIImage(contentsOfFile: url.path)
    }

    var body: some View {
        Group {
            if let image {
                Image(uiImage: image)
                    .resizable()
                    .scaledToFit()
                    .frame(maxWidth: .infinity, maxHeight: maxHeight)
                    .padding(8)
                    .background(Color.white)
                    .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))
                    .overlay {
                        RoundedRectangle(cornerRadius: 14, style: .continuous)
                            .stroke(Color.sparkyBorder, lineWidth: 1)
                    }
                    .accessibilityLabel("Question diagram")
            } else {
                Label("Diagram unavailable", systemImage: "photo.badge.exclamationmark")
                    .font(.caption)
                    .foregroundStyle(Color.sparkyMuted)
                    .frame(maxWidth: .infinity)
                    .padding()
                    .background(Color.sparkySurfaceRaised)
                    .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))
            }
        }
    }
}

