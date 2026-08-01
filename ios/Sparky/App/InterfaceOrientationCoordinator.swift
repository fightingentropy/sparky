import SwiftUI
import UIKit

@MainActor
final class SparkyAppDelegate: NSObject, UIApplicationDelegate {
    func application(
        _ application: UIApplication,
        supportedInterfaceOrientationsFor window: UIWindow?
    ) -> UIInterfaceOrientationMask {
        let idiom = window?.traitCollection.userInterfaceIdiom ?? UIDevice.current.userInterfaceIdiom
        return InterfaceOrientationCoordinator.orientationMask(for: idiom)
    }
}

@MainActor
enum InterfaceOrientationCoordinator {
    private(set) static var supportedOrientations: UIInterfaceOrientationMask = .portrait

    static func orientationMask(for idiom: UIUserInterfaceIdiom) -> UIInterfaceOrientationMask {
        idiom == .pad ? .all : supportedOrientations
    }

    static func enterInspectionTrainer() {
        guard UIDevice.current.userInterfaceIdiom == .phone else { return }
        apply(.landscape)
    }

    static func leaveInspectionTrainer() {
        guard UIDevice.current.userInterfaceIdiom == .phone else { return }
        apply(.portrait)
    }

    private static func apply(_ orientations: UIInterfaceOrientationMask) {
        let previousOrientations = supportedOrientations
        supportedOrientations = orientations

        let scenes = UIApplication.shared.connectedScenes.compactMap { scene -> UIWindowScene? in
            guard scene.activationState == .foregroundActive else { return nil }
            return scene as? UIWindowScene
        }
        for scene in scenes {
            scene.keyWindow?.rootViewController?.setNeedsUpdateOfSupportedInterfaceOrientations()
            scene.requestGeometryUpdate(.iOS(interfaceOrientations: orientations)) { error in
                #if DEBUG
                print("Orientation update failed: \(error.localizedDescription)")
                #endif
                Task { @MainActor in
                    guard supportedOrientations == orientations else { return }
                    supportedOrientations = previousOrientations
                    scene.keyWindow?.rootViewController?.setNeedsUpdateOfSupportedInterfaceOrientations()
                }
            }
        }
    }
}

private extension UIWindowScene {
    var keyWindow: UIWindow? {
        windows.first(where: \.isKeyWindow) ?? windows.first
    }
}
