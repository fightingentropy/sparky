import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import { login as apiLogin, signup as apiSignup, getMe, updateProfile as apiUpdateProfile, setToken, ApiError, type ApiUser, type ProfileUpdate } from "./api";

type User = ApiUser;

type AuthState = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  updateProfile: (update: ProfileUpdate) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthState>({
  user: null,
  loading: true,
  login: async () => {},
  signup: async () => {},
  updateProfile: async () => {},
  logout: () => {},
});

function hasStoredToken(): boolean {
  try {
    return localStorage.getItem("sparky-token") !== null;
  } catch {
    return false;
  }
}

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!hasStoredToken()) {
      setLoading(false);
      return;
    }
    getMe()
      .then((res) => setUser(res.user))
      .catch((err) => {
        // Only clear the token on an explicit auth failure. Network errors,
        // timeouts and 5xx should leave the user signed in so they can retry
        // when the connection comes back.
        if (err instanceof ApiError && (err.status === 401 || err.status === 403)) {
          setToken(null);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const res = await apiLogin(email, password);
    setUser(res.user);
  }, []);

  const signup = useCallback(async (email: string, password: string) => {
    const res = await apiSignup(email, password);
    setUser(res.user);
  }, []);

  const updateProfile = useCallback(async (update: ProfileUpdate) => {
    const res = await apiUpdateProfile(update);
    setUser(res.user);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, updateProfile, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
