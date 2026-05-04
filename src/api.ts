const API_BASE = "/api";

type AuthResponse = { token: string; user: { id: string; email: string } };
type MeResponse = { user: { id: string; email: string } };
type ProgressResponse = {
  progress: Record<string, { answers: Record<string, string>; submitted: boolean; updatedAt: string }>;
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

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const headers: Record<string, string> = { "Content-Type": "application/json", ...((options.headers as Record<string, string>) ?? {}) };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  const res = await fetch(`${API_BASE}${path}`, { ...options, headers });
  const data = await res.json();
  if (!res.ok) throw new Error((data as { error?: string }).error ?? `Request failed (${res.status})`);
  return data as T;
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

export async function getExamProgress(): Promise<ProgressResponse> {
  return request<ProgressResponse>("/exams/progress");
}

export async function saveExamProgress(examId: string, answers: Record<string, string>, submitted: boolean): Promise<void> {
  await request(`/exams/progress/${examId}`, {
    method: "PUT",
    body: JSON.stringify({ answers, submitted }),
  });
}
