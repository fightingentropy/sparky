const API_BASE = "/api";

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
    return localStorage.getItem("sparky-token");
  } catch {
    return null;
  }
}

export function setToken(token: string | null) {
  try {
    if (token) localStorage.setItem("sparky-token", token);
    else localStorage.removeItem("sparky-token");
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
  const res = await fetch(`${API_BASE}${path}`, { ...options, headers });

  // Read the body once. Try JSON; fall back to text. Tolerate 204/empty.
  let payload: unknown = undefined;
  const raw = await res.text();
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
  variant?: { index: number; answers: Record<string, string>; submitted: boolean }
): Promise<void> {
  await request(`/exams/progress/${examId}`, {
    method: "PUT",
    body: JSON.stringify({ current, variant }),
  });
}
