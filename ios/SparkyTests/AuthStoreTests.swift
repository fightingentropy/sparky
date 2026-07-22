import XCTest
@testable import Sparky

final class AuthAPIClientTests: XCTestCase {
    private var session: URLSession!
    private var client: AuthAPIClient!

    override func setUp() {
        super.setUp()
        let configuration = URLSessionConfiguration.ephemeral
        configuration.protocolClasses = [MockAuthURLProtocol.self]
        session = URLSession(configuration: configuration)
        client = AuthAPIClient(
            baseURL: URL(string: "https://sparky.test/api/")!,
            session: session
        )
    }

    override func tearDown() {
        MockAuthURLProtocol.handler = nil
        session.invalidateAndCancel()
        session = nil
        client = nil
        super.tearDown()
    }

    func testLoginUsesWebContractAndDecodesSession() async throws {
        MockAuthURLProtocol.handler = { request in
            XCTAssertEqual(request.url?.absoluteString, "https://sparky.test/api/auth/login")
            XCTAssertEqual(request.httpMethod, "POST")
            XCTAssertEqual(request.value(forHTTPHeaderField: "Content-Type"), "application/json")

            let body = try XCTUnwrap(MockAuthURLProtocol.bodyData(for: request))
            let json = try XCTUnwrap(JSONSerialization.jsonObject(with: body) as? [String: String])
            XCTAssertEqual(json["email"], "electrician@example.com")
            XCTAssertEqual(json["password"], "not-a-real-password")

            return MockAuthURLProtocol.response(
                for: request,
                status: 200,
                json: [
                    "token": "secure-token",
                    "user": [
                        "id": "user-1",
                        "email": "electrician@example.com",
                        "nickname": "Sparky",
                        "avatar": NSNull(),
                    ],
                ]
            )
        }

        let session = try await client.login(
            email: "electrician@example.com",
            password: "not-a-real-password"
        )

        XCTAssertEqual(session.token, "secure-token")
        XCTAssertEqual(session.user.id, "user-1")
        XCTAssertEqual(session.user.displayName, "Sparky")
    }

    func testMeSendsBearerToken() async throws {
        MockAuthURLProtocol.handler = { request in
            XCTAssertEqual(request.url?.path, "/api/auth/me")
            XCTAssertEqual(request.value(forHTTPHeaderField: "Authorization"), "Bearer secure-token")
            return MockAuthURLProtocol.response(
                for: request,
                status: 200,
                json: [
                    "user": [
                        "id": "user-1",
                        "email": "electrician@example.com",
                        "nickname": NSNull(),
                        "avatar": NSNull(),
                    ],
                ]
            )
        }

        let user = try await client.me(token: "secure-token")

        XCTAssertEqual(user.email, "electrician@example.com")
        XCTAssertEqual(user.displayName, "electrician@example.com")
    }

    func testProfileCanExplicitlyClearAvatarWithoutTouchingNickname() async throws {
        MockAuthURLProtocol.handler = { request in
            XCTAssertEqual(request.url?.path, "/api/profile")
            XCTAssertEqual(request.httpMethod, "PUT")
            let body = try XCTUnwrap(MockAuthURLProtocol.bodyData(for: request))
            let json = try XCTUnwrap(JSONSerialization.jsonObject(with: body) as? [String: Any])
            XCTAssertTrue(json["avatar"] is NSNull)
            XCTAssertNil(json["nickname"])
            return MockAuthURLProtocol.response(
                for: request,
                status: 200,
                json: [
                    "user": [
                        "id": "user-1",
                        "email": "electrician@example.com",
                        "nickname": "Sparky",
                        "avatar": NSNull(),
                    ],
                ]
            )
        }

        let user = try await client.updateProfile(
            token: "secure-token",
            update: .avatar(nil)
        )

        XCTAssertNil(user.avatar)
        XCTAssertEqual(user.nickname, "Sparky")
    }

    func testServerErrorPreservesStatusAndMessage() async {
        MockAuthURLProtocol.handler = { request in
            MockAuthURLProtocol.response(
                for: request,
                status: 401,
                json: ["error": "Invalid email or password"]
            )
        }

        do {
            _ = try await client.login(email: "wrong@example.com", password: "bad-password")
            XCTFail("Expected login to fail")
        } catch {
            XCTAssertEqual(
                error as? AuthError,
                .server(statusCode: 401, message: "Invalid email or password")
            )
        }
    }

    func testMalformedSuccessPayloadThrowsTypedError() async {
        MockAuthURLProtocol.handler = { request in
            MockAuthURLProtocol.response(for: request, status: 200, json: ["unexpected": true])
        }

        do {
            _ = try await client.me(token: "secure-token")
            XCTFail("Expected decoding to fail")
        } catch {
            XCTAssertEqual(error as? AuthError, .invalidResponsePayload)
        }
    }
}

@MainActor
final class AuthStoreTests: XCTestCase {
    private var session: URLSession!
    private var tokenStore: InMemoryAuthTokenStore!
    private var store: AuthStore!

    override func setUp() {
        super.setUp()
        let configuration = URLSessionConfiguration.ephemeral
        configuration.protocolClasses = [MockAuthURLProtocol.self]
        session = URLSession(configuration: configuration)
        tokenStore = InMemoryAuthTokenStore()
        store = AuthStore(
            service: AuthAPIClient(
                baseURL: URL(string: "https://sparky.test/api/")!,
                session: session
            ),
            tokenStore: tokenStore
        )
    }

    override func tearDown() {
        MockAuthURLProtocol.handler = nil
        session.invalidateAndCancel()
        session = nil
        tokenStore = nil
        store = nil
        super.tearDown()
    }

    func testLoginStoresOnlyTokenAndLogoutRemovesIt() async throws {
        MockAuthURLProtocol.handler = { request in
            MockAuthURLProtocol.response(
                for: request,
                status: 200,
                json: [
                    "token": "keychain-token",
                    "user": [
                        "id": "user-1",
                        "email": "electrician@example.com",
                        "nickname": "Sparky",
                        "avatar": NSNull(),
                    ],
                ]
            )
        }

        try await store.login(email: "electrician@example.com", password: "not-a-real-password")

        XCTAssertEqual(try tokenStore.loadToken(), "keychain-token")
        XCTAssertEqual(try store.bearerToken(), "keychain-token")
        XCTAssertEqual(store.user?.nickname, "Sparky")
        XCTAssertNil(store.lastError)

        store.logout()

        XCTAssertNil(try tokenStore.loadToken())
        XCTAssertNil(store.user)
    }

    func testRestoreClearsRejectedToken() async throws {
        try tokenStore.saveToken("expired-token")
        MockAuthURLProtocol.handler = { request in
            MockAuthURLProtocol.response(
                for: request,
                status: 401,
                json: ["error": "Unauthorized"]
            )
        }

        await store.restoreSession()

        XCTAssertNil(store.user)
        XCTAssertNil(try tokenStore.loadToken())
        XCTAssertEqual(store.lastError, .server(statusCode: 401, message: "Unauthorized"))
    }

    func testRestoreKeepsTokenDuringTemporaryFailure() async throws {
        try tokenStore.saveToken("recoverable-token")
        MockAuthURLProtocol.handler = { _ in
            throw URLError(.notConnectedToInternet)
        }

        await store.restoreSession()

        XCTAssertNil(store.user)
        XCTAssertEqual(try tokenStore.loadToken(), "recoverable-token")
        guard case .transport = store.lastError else {
            return XCTFail("Expected a typed transport error")
        }
    }

    func testProfileUpdateRefreshesObservableUser() async throws {
        try tokenStore.saveToken("secure-token")
        MockAuthURLProtocol.handler = { request in
            MockAuthURLProtocol.response(
                for: request,
                status: 200,
                json: [
                    "user": [
                        "id": "user-1",
                        "email": "electrician@example.com",
                        "nickname": "Updated",
                        "avatar": NSNull(),
                    ],
                ]
            )
        }

        try await store.updateProfile(.nickname("Updated"))

        XCTAssertEqual(store.user?.displayName, "Updated")
    }
}

final class AvatarDataURLTests: XCTestCase {
    func testAvatarRoundTrip() throws {
        let original = Data([0x89, 0x50, 0x4E, 0x47])
        let dataURL = try AvatarDataURL.encode(original, mimeType: "image/png")
        let decoded = try XCTUnwrap(AvatarDataURL.decode(dataURL))

        XCTAssertEqual(decoded.mimeType, "image/png")
        XCTAssertEqual(decoded.data, original)
    }

    func testUnsupportedAvatarIsRejected() {
        XCTAssertThrowsError(try AvatarDataURL.decode("data:image/svg+xml;base64,PHN2Zz4=")) { error in
            XCTAssertEqual(error as? AuthError, .invalidAvatarData)
        }
    }
}

private final class InMemoryAuthTokenStore: AuthTokenStoring {
    private var token: String?

    func loadToken() throws -> String? { token }
    func saveToken(_ token: String) throws { self.token = token }
    func deleteToken() throws { token = nil }
}

private final class MockAuthURLProtocol: URLProtocol {
    static var handler: ((URLRequest) throws -> (HTTPURLResponse, Data))?

    override class func canInit(with request: URLRequest) -> Bool { true }

    override class func canonicalRequest(for request: URLRequest) -> URLRequest { request }

    override func startLoading() {
        guard let handler = Self.handler else {
            client?.urlProtocol(self, didFailWithError: URLError(.badServerResponse))
            return
        }
        do {
            let (response, data) = try handler(request)
            client?.urlProtocol(self, didReceive: response, cacheStoragePolicy: .notAllowed)
            client?.urlProtocol(self, didLoad: data)
            client?.urlProtocolDidFinishLoading(self)
        } catch {
            client?.urlProtocol(self, didFailWithError: error)
        }
    }

    override func stopLoading() {}

    static func response(
        for request: URLRequest,
        status: Int,
        json: Any
    ) -> (HTTPURLResponse, Data) {
        let response = HTTPURLResponse(
            url: request.url!,
            statusCode: status,
            httpVersion: nil,
            headerFields: ["Content-Type": "application/json"]
        )!
        let data = try! JSONSerialization.data(withJSONObject: json)
        return (response, data)
    }

    static func bodyData(for request: URLRequest) -> Data? {
        if let body = request.httpBody { return body }
        guard let stream = request.httpBodyStream else { return nil }

        stream.open()
        defer { stream.close() }
        var data = Data()
        let bufferSize = 1_024
        let buffer = UnsafeMutablePointer<UInt8>.allocate(capacity: bufferSize)
        defer { buffer.deallocate() }

        while stream.hasBytesAvailable {
            let read = stream.read(buffer, maxLength: bufferSize)
            guard read >= 0 else { return nil }
            if read == 0 { break }
            data.append(buffer, count: read)
        }
        return data
    }
}
