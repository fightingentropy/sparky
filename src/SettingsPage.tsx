import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { useAuth } from "./AuthContext";
import { AccountAvatar } from "./AccountAvatar";
import { ApiError } from "./api";

const NICKNAME_MAX = 40;
const AVATAR_PX = 256;
// Reject obviously huge source files before we even decode them.
const MAX_SOURCE_BYTES = 12 * 1024 * 1024;

type Props = {
  isActive: boolean;
  colorTheme: "dark" | "light";
  onColorThemeChange: (value: "dark" | "light") => void;
  reduceMotion: boolean;
  onReduceMotionChange: (value: boolean) => void;
  comfortableText: boolean;
  onComfortableTextChange: (value: boolean) => void;
  onRequestAuth: () => void;
};

// Decode an image file and re-encode it as a small, square, center-cropped JPEG
// data URL so the stored avatar stays tiny (~a few KB) regardless of the source.
function processAvatar(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (file.size > MAX_SOURCE_BYTES) {
      reject(new Error("Image is too large (max 12 MB)"));
      return;
    }
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      const canvas = document.createElement("canvas");
      canvas.width = AVATAR_PX;
      canvas.height = AVATAR_PX;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Could not process image"));
        return;
      }
      // JPEG has no alpha — flatten onto white so transparent PNGs don't turn
      // black.
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, AVATAR_PX, AVATAR_PX);
      const side = Math.min(img.naturalWidth, img.naturalHeight);
      const sx = (img.naturalWidth - side) / 2;
      const sy = (img.naturalHeight - side) / 2;
      ctx.drawImage(img, sx, sy, side, side, 0, 0, AVATAR_PX, AVATAR_PX);
      resolve(canvas.toDataURL("image/jpeg", 0.85));
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("That file isn't a supported image"));
    };
    img.src = url;
  });
}

export function SettingsPage({
  isActive,
  colorTheme,
  onColorThemeChange,
  reduceMotion,
  onReduceMotionChange,
  comfortableText,
  onComfortableTextChange,
  onRequestAuth
}: Props) {
  const { user, updateProfile, logout } = useAuth();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [nickname, setNickname] = useState("");
  // undefined = unchanged from the server value; null = remove; string = new.
  const [avatarDraft, setAvatarDraft] = useState<string | null | undefined>(undefined);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState(0);

  // Snapshot the saved values into the drafts when the page becomes active or the
  // account changes — but NOT on every `user` mutation, or saving (which updates
  // `user`) would immediately wipe the "Saved" confirmation and the freshly typed
  // draft. The id guard distinguishes "different account" from "same account,
  // profile just changed".
  const syncedKeyRef = useRef("");
  useEffect(() => {
    if (!isActive) {
      syncedKeyRef.current = "";
      return;
    }
    const key = user?.id ?? "anon";
    if (syncedKeyRef.current === key) return;
    syncedKeyRef.current = key;
    setNickname(user?.nickname ?? "");
    setAvatarDraft(undefined);
    setError("");
    setSaving(false);
    setSavedAt(0);
  }, [isActive, user]);

  const previewAvatar = avatarDraft === undefined ? user?.avatar ?? null : avatarDraft;
  const trimmedNickname = nickname.trim();
  const dirty = avatarDraft !== undefined || trimmedNickname !== (user?.nickname ?? "");

  async function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    setError("");
    try {
      const dataUrl = await processAvatar(file);
      setAvatarDraft(dataUrl);
      setSavedAt(0);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not process image");
    }
  }

  async function handleSave() {
    if (!user || !dirty) return;
    setSaving(true);
    setError("");
    try {
      const update: { nickname?: string | null; avatar?: string | null } = {};
      if (trimmedNickname !== (user.nickname ?? "")) update.nickname = trimmedNickname;
      if (avatarDraft !== undefined) update.avatar = avatarDraft;
      await updateProfile(update);
      setAvatarDraft(undefined);
      setSavedAt(Date.now());
    } catch (err) {
      const message =
        err instanceof ApiError && err.status === 401
          ? "Your session expired — please log in again."
          : err instanceof Error
            ? err.message
            : "Could not save your profile";
      setError(message);
    } finally {
      setSaving(false);
    }
  }

  function exportLocalData() {
    const data: Record<string, unknown> = {};
    try {
      for (let index = 0; index < localStorage.length; index += 1) {
        const key = localStorage.key(index);
        if (!key) continue;
        const raw = localStorage.getItem(key);
        if (raw === null) continue;
        try {
          data[key] = JSON.parse(raw);
        } catch {
          data[key] = raw;
        }
      }
    } catch {}

    const blob = new Blob([JSON.stringify({ exportedAt: new Date().toISOString(), data }, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `sparky-data-${new Date().toISOString().slice(0, 10)}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className={`page page-settings ${isActive ? "is-active" : ""}`}>
      <div className="settings-page">
        <header className="page-header settings-header">
          <div>
            <span className="dashboard-kicker">Personalise Sparky</span>
            <h1>Settings</h1>
            <p className="page-copy">Account, accessibility and local app data.</p>
          </div>
        </header>
        <section className="settings-section">
          <h3 className="settings-section-title">Profile</h3>
          {user ? (
            <>
              <div className="settings-avatar-row">
                <AccountAvatar avatar={previewAvatar} name={trimmedNickname || user.email} large />
                <div className="settings-avatar-actions">
                  <button type="button" className="ghost-button" onClick={() => fileInputRef.current?.click()}>
                    {previewAvatar ? "Change photo" : "Upload photo"}
                  </button>
                  {previewAvatar ? (
                    <button type="button" className="ghost-button settings-danger-btn" onClick={() => { setAvatarDraft(null); setSavedAt(0); }}>
                      Remove
                    </button>
                  ) : null}
                  <input ref={fileInputRef} type="file" accept="image/png,image/jpeg,image/webp" className="settings-file-input" onChange={handleFile} />
                  <p className="settings-hint">Square JPG, PNG or WebP. Resized automatically.</p>
                </div>
              </div>

              <label className="auth-field settings-field">
                <span>Display name</span>
                <input
                  type="text"
                  value={nickname}
                  maxLength={NICKNAME_MAX}
                  placeholder={user.email}
                  autoComplete="nickname"
                  onChange={(e) => { setNickname(e.target.value); setSavedAt(0); }}
                />
                <span className="settings-hint">Shown instead of your email. Leave blank to use your email.</span>
              </label>

              {error ? <p className="auth-error">{error}</p> : null}

              <div className="settings-actions">
                {savedAt ? <span className="settings-saved" role="status">Saved</span> : null}
                <button type="button" className="auth-submit" onClick={handleSave} disabled={!dirty || saving}>
                  {saving ? "Saving…" : "Save changes"}
                </button>
              </div>
            </>
          ) : (
            <div className="settings-signed-out">
              <p className="settings-hint">Log in to add a photo and a display name to your account.</p>
              <button type="button" className="auth-submit" onClick={onRequestAuth}>
                Log in
              </button>
            </div>
          )}
        </section>

        <section className="settings-section">
          <h3 className="settings-section-title">Preferences</h3>
          <div className="settings-toggle-row">
            <span className="settings-toggle-text">
              <span className="settings-toggle-label">Light mode</span>
              <span className="settings-hint">Use an off-white canvas with sky-blue surfaces and accents.</span>
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={colorTheme === "light"}
              aria-label="Light mode"
              className={`settings-switch${colorTheme === "light" ? " is-on" : ""}`}
              onClick={() => onColorThemeChange(colorTheme === "light" ? "dark" : "light")}
            >
              <span className="settings-switch-knob" aria-hidden="true" />
            </button>
          </div>
          <div className="settings-toggle-row">
            <span className="settings-toggle-text">
              <span className="settings-toggle-label">Reduce motion</span>
              <span className="settings-hint">Turn off animations and smooth scrolling.</span>
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={reduceMotion}
              aria-label="Reduce motion"
              className={`settings-switch${reduceMotion ? " is-on" : ""}`}
              onClick={() => onReduceMotionChange(!reduceMotion)}
            >
              <span className="settings-switch-knob" aria-hidden="true" />
            </button>
          </div>
          <div className="settings-toggle-row">
            <span className="settings-toggle-text">
              <span className="settings-toggle-label">Comfortable text</span>
              <span className="settings-hint">Increase reading size across notes, guides and controls.</span>
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={comfortableText}
              aria-label="Comfortable text"
              className={`settings-switch${comfortableText ? " is-on" : ""}`}
              onClick={() => onComfortableTextChange(!comfortableText)}
            >
              <span className="settings-switch-knob" aria-hidden="true" />
            </button>
          </div>
        </section>

        <section className="settings-section">
          <h3 className="settings-section-title">Data</h3>
          <div className="settings-row settings-data-row">
            <span>
              <span className="settings-toggle-label">Export local data</span>
              <span className="settings-hint">Download calculator values, preferences, learning progress and locally stored exam progress.</span>
            </span>
            <button type="button" className="ghost-button" onClick={exportLocalData}>
              Export JSON
            </button>
          </div>
        </section>

        {user ? (
          <section className="settings-section">
            <h3 className="settings-section-title">Account</h3>
            <div className="settings-row">
              <span className="settings-toggle-label">Email</span>
              <span className="settings-account-email">{user.email}</span>
            </div>
            <div className="settings-actions">
              <button
                type="button"
                className="ghost-button settings-danger-btn"
                onClick={() => logout()}
              >
                Log out
              </button>
            </div>
          </section>
        ) : null}
      </div>
    </section>
  );
}
