import SwiftUI

struct LoadingStateView: View {
    let title: String
    var message = "Preparing your content…"

    var body: some View {
        VStack(spacing: 14) {
            ProgressView()
                .tint(Color.sparkyAccent)
                .controlSize(.large)
            Text(title)
                .font(.headline)
                .foregroundStyle(Color.sparkyText)
            Text(message)
                .font(.subheadline)
                .foregroundStyle(Color.sparkyMuted)
        }
        .multilineTextAlignment(.center)
        .padding(28)
        .sparkyCard()
        .padding()
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

