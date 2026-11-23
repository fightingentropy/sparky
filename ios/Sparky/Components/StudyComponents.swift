import SwiftUI

struct StudyNotice: View {
    var title = "Check current sources"
    let message: String

    var body: some View {
        HStack(alignment: .top, spacing: 12) {
            Image(systemName: "checkmark.shield.fill")
                .font(.title3)
                .foregroundStyle(Color.sparkyAccentText)

            VStack(alignment: .leading, spacing: 3) {
                Text(title)
                    .font(.sparky(.subheadline, weight: .bold))
                    .foregroundStyle(Color.sparkyText)
                Text(message)
                    .font(.sparky(.caption))
                    .foregroundStyle(Color.sparkyMuted)
                    .fixedSize(horizontal: false, vertical: true)
            }
        }
        .padding(14)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(Color.sparkySurface, in: RoundedRectangle(cornerRadius: SparkyLayout.cardRadius, style: .continuous))
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
        .font(.sparky(.caption, weight: .semibold))
        .foregroundStyle(selected ? Color.sparkyOnPrimary : Color.sparkyText)
        .padding(.horizontal, 12)
        .padding(.vertical, 9)
        .background(selected ? Color.sparkyPrimary : Color.clear)
        .clipShape(Capsule())
        .overlay {
            Capsule()
                .stroke(selected ? Color.sparkyPrimary : Color.sparkyBorder, lineWidth: 1)
        }
    }
}

struct ProgressRing: View {
    let progress: Double
    var size: CGFloat = 54
    var lineWidth: CGFloat = 6
    var color: Color = .sparkyText

    var body: some View {
        ZStack {
            Circle()
                .stroke(Color.sparkyText.opacity(0.1), lineWidth: lineWidth)
            Circle()
                .trim(from: 0, to: min(max(progress, 0), 1))
                .stroke(
                    color,
                    style: StrokeStyle(lineWidth: lineWidth, lineCap: .round)
                )
                .rotationEffect(.degrees(-90))
            Text(progress, format: .percent.precision(.fractionLength(0)))
                .font(.sparkyMono(.caption2, weight: .medium))
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
                    .foregroundStyle(Color.sparkyAccentText)
            }
            Text(value)
                .font(.sparkyMono(.title3, weight: .medium))
                .tracking(-0.5)
                .foregroundStyle(Color.sparkyText)
                .lineLimit(1)
                .minimumScaleFactor(0.6)
            SparkyEyebrow(text: label)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(13)
        .background(Color.sparkySurfaceRaised, in: RoundedRectangle(cornerRadius: SparkyLayout.innerRadius, style: .continuous))
        .accessibilityElement(children: .combine)
    }
}

struct BrandNavigationTitle: View {
    let title: String

    var body: some View {
        HStack(spacing: 9) {
            SparkyBrandMark(size: 30)
            Text(title)
                .font(.sparky(.headline, weight: .bold))
                .foregroundStyle(Color.sparkyText)
        }
    }
}
