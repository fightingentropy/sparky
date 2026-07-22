import Foundation

protocol AuthServicing {
    func login(email: String, password: String) async throws -> AuthSession
    func me(token: String) async throws -> SparkyUser
    func updateProfile(token: String, update: ProfileUpdate) async throws -> SparkyUser
}

struct AuthAPIClient: AuthServicing {
    static let productionBaseURL = URL(string: "https://electrics.pages.dev/api/")!

    private let baseURL: URL
    private let session: URLSession
    private let encoder: JSONEncoder
    private let decoder: JSONDecoder

    init(
        baseURL: URL = AuthAPIClient.productionBaseURL,
        session: URLSession = .shared
    ) {
        self.baseURL = baseURL
        self.session = session
        encoder = JSONEncoder()
        decoder = JSONDecoder()
    }

    func login(email: String, password: String) async throws -> AuthSession {
        struct LoginBody: Encodable {
            let email: String
            let password: String
        }

        let response: AuthResponse = try await request(
            path: "auth/login",
            method: "POST",
            body: LoginBody(email: email, password: password)
        )
        return AuthSession(token: response.token, user: response.user)
    }

    func me(token: String) async throws -> SparkyUser {
        let response: UserResponse = try await request(
            path: "auth/me",
            method: "GET",
            token: token
        )
        return response.user
    }

    func updateProfile(token: String, update: ProfileUpdate) async throws -> SparkyUser {
        let response: UserResponse = try await request(
            path: "profile",
            method: "PUT",
            token: token,
            body: update
        )
        return response.user
    }

    private func request<Response: Decodable>(
        path: String,
        method: String,
        token: String? = nil
    ) async throws -> Response {
        try await request(path: path, method: method, token: token, bodyData: nil)
    }

    private func request<Response: Decodable, Body: Encodable>(
        path: String,
        method: String,
        token: String? = nil,
        body: Body
    ) async throws -> Response {
        let bodyData: Data
        do {
            bodyData = try encoder.encode(body)
        } catch {
            throw AuthError.invalidConfiguration
        }
        return try await request(path: path, method: method, token: token, bodyData: bodyData)
    }

    private func request<Response: Decodable>(
        path: String,
        method: String,
        token: String?,
        bodyData: Data?
    ) async throws -> Response {
        guard let url = URL(string: path, relativeTo: baseURL)?.absoluteURL,
              url.scheme == "https"
        else {
            throw AuthError.invalidConfiguration
        }

        var request = URLRequest(url: url)
        request.httpMethod = method
        request.timeoutInterval = 30
        request.cachePolicy = .reloadIgnoringLocalCacheData
        request.setValue("application/json", forHTTPHeaderField: "Accept")
        if let token {
            request.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        }
        if let bodyData {
            request.httpBody = bodyData
            request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        }

        let data: Data
        let response: URLResponse
        do {
            (data, response) = try await session.data(for: request)
        } catch let error as URLError {
            throw AuthError.transport(error.localizedDescription)
        } catch {
            throw AuthError.transport(error.localizedDescription)
        }

        guard let httpResponse = response as? HTTPURLResponse else {
            throw AuthError.invalidResponse
        }

        guard (200..<300).contains(httpResponse.statusCode) else {
            let message = (try? decoder.decode(APIErrorResponse.self, from: data).error)
                ?? "Request failed (\(httpResponse.statusCode))"
            throw AuthError.server(statusCode: httpResponse.statusCode, message: message)
        }

        do {
            return try decoder.decode(Response.self, from: data)
        } catch {
            throw AuthError.invalidResponsePayload
        }
    }
}

private struct AuthResponse: Decodable {
    let token: String
    let user: SparkyUser
}

private struct UserResponse: Decodable {
    let user: SparkyUser
}

private struct APIErrorResponse: Decodable {
    let error: String
}
