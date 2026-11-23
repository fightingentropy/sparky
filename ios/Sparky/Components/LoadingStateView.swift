import SwiftUI

struct LoadingStateView: View {
    let title: String
    var message = "Preparing your content…"

    var body: some View {
        VStack(spacing: 14) {
            ProgressView()
                .tint(Color.sparkyText)
                .controlSize(.large)
            Text(title)
                .font(.sparky(.headline))
                .foregroundStyle(Color.sparkyText)
            Text(message)
                .font(.sparky(.subheadline))
                .foregroundStyle(Color.sparkyMuted)
        }
        .multilineTextAlignment(.center)
        .padding(28)
        .sparkyCard()
        .padding()
    }
}

/// App start: the Sparky icon breathing in the middle of the screen, no spinner or copy.
struct LaunchLoadingView: View {
    @State private var pulsing = false
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    var body: some View {
        Image("LaunchIcon")
            .resizable()
            .interpolation(.high)
            .frame(width: 120, height: 120)
            // Same continuous corner as the Home Screen icon mask.
            .clipShape(RoundedRectangle(cornerRadius: 120 * 0.2237, style: .continuous))
            .scaleEffect(pulsing && !reduceMotion ? 0.92 : 1)
            .opacity(pulsing ? 0.72 : 1)
            .frame(maxWidth: .infinity, maxHeight: .infinity)
            .onAppear {
                withAnimation(.easeInOut(duration: 0.9).repeatForever(autoreverses: true)) {
                    pulsing = true
                }
            }
            .accessibilityElement()
            .accessibilityLabel("Loading Sparky")
            .accessibilityAddTraits(.updatesFrequently)
    }
}

struct ContentUnavailableCard: View {
    let title: String
    let message: String
    var symbol = "bolt.slash"

    var body: some View {
        ContentUnavailableView(title, systemImage: symbol, description: Text(message))
            .foregroundStyle(Color.sparkyText)
            .sparkyCard()
            .padding()
    }
}

