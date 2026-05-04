import { useState, type FormEvent } from "react";
import { useAuth } from "./AuthContext";
import { useFocusTrap } from "./useFocusTrap";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function AuthModal({ open, onClose }: Props) {
  const { login, signup } = useAuth();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const trapRef = useFocusTrap<HTMLDivElement>(open);

  if (!open) return null;

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      if (mode === "login") await login(email, password);
      else await signup(email, password);
      setEmail("");
      setPassword("");
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  function switchMode() {
    setMode(mode === "login" ? "signup" : "login");
    setError("");
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="auth-modal" ref={trapRef} role="dialog" aria-modal="true" aria-label={mode === "login" ? "Log in" : "Create account"} onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>
        <h2 className="auth-modal-title">{mode === "login" ? "Welcome back" : "Create account"}</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="auth-field">
            <span>Email</span>
            <input type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          </label>
          <label className="auth-field">
            <span>Password</span>
            <input type="password" required autoComplete={mode === "login" ? "current-password" : "new-password"} minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} placeholder={mode === "signup" ? "At least 6 characters" : ""} />
          </label>
          {error ? <p className="auth-error">{error}</p> : null}
          <button type="submit" className="auth-submit" disabled={submitting}>
            {submitting ? "..." : mode === "login" ? "Log in" : "Sign up"}
          </button>
        </form>
        <p className="auth-switch">
          {mode === "login" ? "No account? " : "Already have one? "}
          <button type="button" className="auth-switch-btn" onClick={switchMode}>
            {mode === "login" ? "Sign up" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
}
