import Foundation

struct SparkyUser: Codable, Equatable, Identifiable, Sendable {
    let id: String
    let email: String
    let nickname: String?
    let avatar: String?

    var displayName: String {
        let trimmedNickname = nickname?.trimmingCharacters(in: .whitespacesAndNewlines) ?? ""
        return trimmedNickname.isEmpty ? email : trimmedNickname
    }

    var avatarPayload: AvatarPayload? {
        try? AvatarDataURL.decode(avatar)
    }
}

struct AuthSession: Equatable, Sendable {
    let token: String
    let user: SparkyUser
}

/// A partial profile update that preserves the API's distinction between an
/// omitted field and an explicit `null` used to clear that field.
struct ProfileUpdate: Encodable, Equatable, Sendable {
    private enum Field<Value: Equatable & Sendable>: Equatable, Sendable {
        case unchanged
        case value(Value?)
    }

    private let nicknameField: Field<String>
    private let avatarField: Field<String>

    private init(nickname: Field<String>, avatar: Field<String>) {
        nicknameField = nickname
        avatarField = avatar
    }

    static func nickname(_ value: String?) -> ProfileUpdate {
        ProfileUpdate(nickname: .value(value), avatar: .unchanged)
    }

    static func avatar(_ dataURL: String?) -> ProfileUpdate {
        ProfileUpdate(nickname: .unchanged, avatar: .value(dataURL))
    }

    static func profile(nickname: String?, avatarDataURL: String?) -> ProfileUpdate {
        ProfileUpdate(nickname: .value(nickname), avatar: .value(avatarDataURL))
    }

    private enum CodingKeys: String, CodingKey {
        case nickname
        case avatar
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        switch nicknameField {
        case .unchanged:
            break
        case .value(let nickname):
            if let nickname {
                try container.encode(nickname, forKey: .nickname)
            } else {
                try container.encodeNil(forKey: .nickname)
            }
        }
        switch avatarField {
        case .unchanged:
            break
        case .value(let avatar):
            if let avatar {
                try container.encode(avatar, forKey: .avatar)
            } else {
                try container.encodeNil(forKey: .avatar)
            }
        }
    }
}

struct AvatarPayload: Equatable, Sendable {
    let mimeType: String
    let data: Data
}

enum AvatarDataURL {
    private static let allowedMIMETypes = Set(["image/png", "image/jpeg", "image/webp"])
    private static let separator = ";base64,"
    private static let maximumEncodedLength = 256 * 1024

    static func decode(_ value: String?) throws -> AvatarPayload? {
        guard let value, !value.isEmpty else { return nil }
        guard value.utf8.count <= maximumEncodedLength,
              value.hasPrefix("data:image/"),
              let separatorRange = value.range(of: separator)
        else {
            throw AuthError.invalidAvatarData
        }

        let mimeType = String(value[value.index(value.startIndex, offsetBy: 5)..<separatorRange.lowerBound])
        let encoded = String(value[separatorRange.upperBound...])
        guard allowedMIMETypes.contains(mimeType),
              !encoded.isEmpty,
              let data = Data(base64Encoded: encoded, options: []),
              !data.isEmpty
        else {
            throw AuthError.invalidAvatarData
        }

        return AvatarPayload(mimeType: mimeType, data: data)
    }

    static func encode(_ data: Data, mimeType: String) throws -> String {
        guard allowedMIMETypes.contains(mimeType), !data.isEmpty else {
            throw AuthError.invalidAvatarData
        }
        let value = "data:\(mimeType);base64,\(data.base64EncodedString())"
        guard value.utf8.count <= maximumEncodedLength else {
            throw AuthError.invalidAvatarData
        }
        return value
    }
}

enum AuthError: Error, Equatable, LocalizedError, Sendable {
    case invalidConfiguration
    case invalidResponse
    case invalidResponsePayload
    case transport(String)
    case server(statusCode: Int, message: String)
    case notAuthenticated
    case credentialStore(status: Int32)
    case invalidTokenEncoding
    case invalidAvatarData

    var isAuthenticationFailure: Bool {
        switch self {
        case .server(let statusCode, _):
            statusCode == 401 || statusCode == 403
        case .notAuthenticated:
            true
        default:
            false
        }
    }

    var errorDescription: String? {
        switch self {
        case .invalidConfiguration:
            "Sparky's account service is not configured correctly."
        case .invalidResponse:
            "The account service returned an invalid response."
        case .invalidResponsePayload:
            "The account service returned data Sparky couldn't read."
        case .transport:
            "Sparky couldn't reach the account service. Check your connection and try again."
        case .server(_, let message):
            message
        case .notAuthenticated:
            "Sign in to continue."
        case .credentialStore:
            "Sparky couldn't access the secure sign-in store."
        case .invalidTokenEncoding:
            "The saved sign-in token is invalid."
        case .invalidAvatarData:
            "Choose a valid PNG, JPEG, or WebP profile image."
        }
    }
}
