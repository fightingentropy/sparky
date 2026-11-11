const API_BASE = "/api";
const REQUEST_TIMEOUT_MS = 15_000;
export const TOKEN_STORAGE_KEY = "sparky-token";

export type ApiUser = { id: string; email: string; nickname: string | null; avatar: string | null };
type AuthResponse = { token: string; user: ApiUser };
type MeResponse = { user: ApiUser };
export type ProfileUpdate = { nickname?: string | null; avatar?: string | null };
export type VariantSlot = { answers: Record<string, string>; submitted: boolean };
type ProgressResponse = {
  progress: Record<
    string,
    { variants: Record<string, VariantSlot>; current: number; updatedAt: string }
  >;
};

function getToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function setToken(token: string | null) {
  try {
    if (token) localStorage.setItem(TOKEN_STORAGE_KEY, token);
    else localStorage.removeItem(TOKEN_STORAGE_KEY);
  } catch {}
}

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const headers: Record<string, string> = { "Content-Type": "application/json", ...((options.headers as Record<string, string>) ?? {}) };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  // The timeout also covers reading the body, so a stalled connection cannot
  // leave callers (and their loading states) waiting indefinitely.
  const timeoutController = new AbortController();
  const timer = setTimeout(() => timeoutController.abort(), REQUEST_TIMEOUT_MS);
  const signal = options.signal ? AbortSignal.any([options.signal, timeoutController.signal]) : timeoutController.signal;

  let res: Response;
  let raw: string;
  try {
    res = await fetch(`${API_BASE}${path}`, { ...options, headers, signal });
    raw = await res.text();
  } catch (error) {
    if (timeoutController.signal.aborted && !options.signal?.aborted) {
      throw new ApiError("The request timed out. Check your connection and try again.", 408);
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }

  // Read the body once. Try JSON; fall back to text. Tolerate 204/empty.
  let payload: unknown = undefined;
  if (raw.length > 0) {
    try {
      payload = JSON.parse(raw);
    } catch {
      payload = raw;
    }
  }

  if (!res.ok) {
    const message =
      (payload && typeof payload === "object" && "error" in payload && typeof (payload as { error: unknown }).error === "string"
        ? (payload as { error: string }).error
        : null) ?? `Request failed (${res.status})`;
    throw new ApiError(message, res.status);
  }

  return (payload ?? ({} as unknown)) as T;
}

export async function signup(email: string, password: string): Promise<AuthResponse> {
  const data = await request<AuthResponse>("/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  setToken(data.token);
  return data;
}

export async function login(email: string, password: string): Promise<AuthResponse> {
  const data = await request<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  setToken(data.token);
  return data;
}

export async function getMe(): Promise<MeResponse> {
  return request<MeResponse>("/auth/me");
}

export async function updateProfile(update: ProfileUpdate): Promise<MeResponse> {
  return request<MeResponse>("/profile", {
    method: "PUT",
    body: JSON.stringify(update),
  });
}

export async function getExamProgress(): Promise<ProgressResponse> {
  return request<ProgressResponse>("/exams/progress");
}

export async function saveExamProgress(
  examId: string,
  current: number,
  variant?: { index: number; answers: Record<string, string>; submitted: boolean },
  options: { keepalive?: boolean } = {}
): Promise<void> {
  await request(`/exams/progress/${examId}`, {
    method: "PUT",
    body: JSON.stringify({ current, variant }),
    // Lets the request finish while the page unloads or the app is backgrounded.
    ...(options.keepalive ? { keepalive: true } : {}),
  });
}
