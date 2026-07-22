import SwiftUI

struct StudyNotice: View {
    var title = "Check current sources"
    let message: String

    var body: some View {
        HStack(alignment: .top, spacing: 12) {
            Image(systemName: "checkmark.shield.fill")
                .font(.title3)
                .foregroundStyle(Color.sparkyAccent)

            VStack(alignment: .leading, spacing: 3) {
                Text(title)
                    .font(.subheadline.weight(.bold))
                    .foregroundStyle(Color.sparkyText)
                Text(message)
                    .font(.caption)
                    .foregroundStyle(Color.sparkyMuted)
                    .fixedSize(horizontal: false, vertical: true)
            }
        }
        .padding(14)
        .background(Color.sparkyAccentSoft)
        .clipShape(RoundedRectangle(cornerRadius: 16, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: 16, style: .continuous)
                .stroke(Color.sparkyAccent.opacity(0.22), lineWidth: 1)
        }
    }
}

struct TagChip: View {
    let title: String
    var selected = false
    var symbol: String? = nil

    var body: some View {
        HStack(spacing: 6) {
            if let symbol {
                Image(systemName: symbol)
            }
            Text(title)
        }
        .font(.caption.weight(.bold))
        .foregroundStyle(selected ? Color.sparkyAccent : Color.sparkyMuted)
        .padding(.horizontal, 12)
        .padding(.vertical, 9)
        .background(selected ? Color.sparkyAccentSoft : Color.sparkySurface)
        .clipShape(Capsule())
        .overlay {
            Capsule()
                .stroke(selected ? Color.sparkyAccent.opacity(0.35) : Color.sparkyBorder, lineWidth: 1)
        }
    }
}

struct ProgressRing: View {
    let progress: Double
    var size: CGFloat = 54
    var lineWidth: CGFloat = 6

    var body: some View {
        ZStack {
            Circle()
                .stroke(Color.sparkyBorder, lineWidth: lineWidth)
            Circle()
                .trim(from: 0, to: min(max(progress, 0), 1))
                .stroke(
                    Color.sparkyAccent,
                    style: StrokeStyle(lineWidth: lineWidth, lineCap: .round)
                )
                .rotationEffect(.degrees(-90))
            Text(progress, format: .percent.precision(.fractionLength(0)))
                .font(.caption2.bold().monospacedDigit())
                .foregroundStyle(Color.sparkyText)
        }
        .frame(width: size, height: size)
        .accessibilityElement(children: .ignore)
        .accessibilityLabel("Progress")
        .accessibilityValue(Text(progress, format: .percent.precision(.fractionLength(0))))
    }
}

struct MetricTile: View {
    let label: String
    let value: String
    var symbol: String? = nil

    var body: some View {
        VStack(alignment: .leading, spacing: 7) {
            if let symbol {
                Image(systemName: symbol)
                    .foregroundStyle(Color.sparkyAccent)
            }
            Text(value)
                .font(.headline.monospacedDigit())
                .foregroundStyle(Color.sparkyText)
            Text(label)
                .font(.caption)
                .foregroundStyle(Color.sparkyMuted)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(13)
        .background(Color.sparkySurfaceRaised.opacity(0.72))
        .clipShape(RoundedRectangle(cornerRadius: 15, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: 15, style: .continuous)
                .stroke(Color.sparkyBorder, lineWidth: 1)
        }
        .accessibilityElement(children: .combine)
    }
}

struct BrandNavigationTitle: View {
    let title: String

    var body: some View {
        HStack(spacing: 9) {
            SparkyBrandMark(size: 30)
            Text(title)
                .font(.headline.weight(.bold))
                .foregroundStyle(Color.sparkyText)
        }
    }
}
