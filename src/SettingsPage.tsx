import { useEffect, useId, useRef, useState, type ChangeEvent } from "react";
import { useAuth } from "./AuthContext";
import { AccountAvatar } from "./AccountAvatar";
import { ApiError } from "./api";
import { EXAM_REGISTRY, type ExamId } from "./examRegistry";
import {
  NAVIGATION_ITEMS,
  type NavigationPageId
} from "./navigationPreferences";

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
  hiddenNavigationPageIds: readonly NavigationPageId[];
  onNavigationVisibilityChange: (pageId: NavigationPageId, visible: boolean) => void;
  hiddenExamIds: readonly ExamId[];
  onExamVisibilityChange: (examId: ExamId, visible: boolean) => void;
  onRequestAuth: () => void;
};

function SettingsToggle({
  label,
  description,
  checked,
  disabled = false,
  onChange
}: {
  label: string;
  description?: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
}) {
  const id = useId();

  return (
    <div className="settings-row">
      <div className="settings-row-text">
        <label className="settings-label" id={`${id}-label`} htmlFor={id}>{label}</label>
        {description ? <p className="settings-hint" id={`${id}-hint`}>{description}</p> : null}
      </div>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-labelledby={`${id}-label`}
        aria-describedby={description ? `${id}-hint` : undefined}
        className={`settings-switch${checked ? " is-on" : ""}`}
        disabled={disabled}
        onClick={onChange}
      >
        <span className="settings-switch-knob" aria-hidden="true" />
      </button>
    </div>
  );
}

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
  hiddenNavigationPageIds,
  onNavigationVisibilityChange,
  hiddenExamIds,
  onExamVisibilityChange,
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
  const dirty = previewAvatar !== (user?.avatar ?? null) || trimmedNickname !== (user?.nickname ?? "");
  const hiddenNavigationPageIdSet = new Set(hiddenNavigationPageIds);
  const visibleNavigationPageCount = NAVIGATION_ITEMS.length - hiddenNavigationPageIdSet.size;
  const hiddenExamIdSet = new Set(hiddenExamIds);
  const visibleExamCount = EXAM_REGISTRY.length - hiddenExamIdSet.size;

  function discardProfileChanges() {
    setNickname(user?.nickname ?? "");
    setAvatarDraft(undefined);
    setError("");
    setSavedAt(0);
  }

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
    if (!user || !dirty || saving) return;
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
        <header className="settings-header">
          <h1>Profile &amp; settings</h1>
        </header>
        <section className="settings-section" aria-labelledby="settings-profile-title">
          <div className="settings-section-heading">
            <h2 id="settings-profile-title">Profile</h2>
            <p className="settings-hint">Your name and photo.</p>
          </div>
          {user ? (
            <form className="settings-section-body settings-profile-form" onSubmit={(event) => { event.preventDefault(); void handleSave(); }}>
              <div className="settings-avatar-row">
                <AccountAvatar avatar={previewAvatar} name={trimmedNickname || user.email} large />
                <div className="settings-profile-identity">
                  <span className="settings-profile-name">{user.nickname?.trim() || user.email}</span>
                  {user.nickname?.trim() ? <span className="settings-account-email">{user.email}</span> : null}
                  <div className="settings-avatar-actions">
                    <button type="button" className="settings-text-button" disabled={saving} onClick={() => fileInputRef.current?.click()}>
                      {previewAvatar ? "Change photo" : "Add photo"}
                    </button>
                    {previewAvatar ? (
                      <button type="button" className="settings-text-button settings-text-button--muted" disabled={saving} onClick={() => { setAvatarDraft(null); setSavedAt(0); }}>
                        Remove photo
                      </button>
                    ) : null}
                  </div>
                  <input ref={fileInputRef} type="file" accept="image/png,image/jpeg,image/webp" className="settings-file-input" aria-label="Profile photo" disabled={saving} onChange={handleFile} />
                </div>
              </div>

              <div className="settings-field">
                <label className="settings-label" htmlFor="settings-display-name">Display name</label>
                <input
                  id="settings-display-name"
                  className="settings-input"
                  type="text"
                  value={nickname}
                  maxLength={NICKNAME_MAX}
                  placeholder={user.email}
                  autoComplete="nickname"
                  aria-describedby="settings-name-hint"
                  disabled={saving}
                  onChange={(e) => { setNickname(e.target.value); setSavedAt(0); }}
                />
                <p className="settings-hint" id="settings-name-hint">Leave blank to use your email.</p>
              </div>

              {error ? <p className="settings-error" role="alert">{error}</p> : null}

              <div className="settings-profile-footer">
                <span className="settings-hint" role="status">{savedAt ? "Changes saved" : dirty ? "Unsaved changes" : ""}</span>
                <div className="settings-actions">
                  {dirty ? <button type="button" className="settings-button" disabled={saving} onClick={discardProfileChanges}>Cancel</button> : null}
                  <button type="submit" className="settings-button settings-button--primary" disabled={!dirty || saving}>
                    {saving ? "Saving…" : "Save changes"}
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="settings-section-body settings-signed-out">
              <p className="settings-label">Log in to manage your profile.</p>
              <p className="settings-hint">Your preferences below work without an account.</p>
              <button type="button" className="settings-button settings-button--primary" onClick={onRequestAuth}>
                Log in
              </button>
            </div>
          )}
        </section>

        <section className="settings-section" aria-labelledby="settings-appearance-title">
          <div className="settings-section-heading">
            <h2 id="settings-appearance-title">Appearance</h2>
            <p className="settings-hint">Saved on this device.</p>
          </div>
          <div className="settings-section-body">
            <div className="settings-row">
              <span className="settings-label" id="settings-theme-label">Theme</span>
              <div className="settings-theme" role="group" aria-labelledby="settings-theme-label">
                {(["light", "dark"] as const).map((theme) => (
                  <label className="settings-theme-option" key={theme}>
                    <input type="radio" name="settings-theme" value={theme} checked={colorTheme === theme} onChange={() => onColorThemeChange(theme)} />
                    <span>{theme === "light" ? "Light" : "Dark"}</span>
                  </label>
                ))}
              </div>
            </div>
            <SettingsToggle label="Reduce motion" description="Limit animations and smooth scrolling." checked={reduceMotion} onChange={() => onReduceMotionChange(!reduceMotion)} />
            <SettingsToggle label="Larger text" description="Make text easier to read across Sparky." checked={comfortableText} onChange={() => onComfortableTextChange(!comfortableText)} />
          </div>
        </section>

        <section className="settings-section" aria-labelledby="settings-study-title">
          <div className="settings-section-heading">
            <h2 id="settings-study-title">Study</h2>
            <p className="settings-hint">Choose what you see.</p>
          </div>
          <div className="settings-section-body">
            <div className="settings-list-heading">
              <h3>Navigation</h3>
              <p className="settings-hint">Show these pages in your navigation bar.</p>
            </div>
            {NAVIGATION_ITEMS.map((item) => {
              const visible = !hiddenNavigationPageIdSet.has(item.id);
              const lastVisiblePage = visible && visibleNavigationPageCount <= 1;
              return <SettingsToggle key={item.id} label={item.label} description={lastVisiblePage ? "Keep at least one page visible." : undefined} checked={visible} disabled={lastVisiblePage} onChange={() => onNavigationVisibilityChange(item.id, !visible)} />;
            })}
            <details className="settings-exam-library">
              <summary>
                <span className="settings-row-text">
                  <span className="settings-label">Exam subjects</span>
                  <span className="settings-hint">{visibleExamCount} of {EXAM_REGISTRY.length} shown</span>
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
              </summary>
              <div className="settings-exam-options" role="group" aria-label="Visible exam subjects">
                <p className="settings-hint">Choose the subjects in your exam selector. Hiding a subject keeps your progress.</p>
                {EXAM_REGISTRY.map((exam) => {
                  const visible = !hiddenExamIdSet.has(exam.id);
                  const lastVisibleExam = visible && visibleExamCount <= 1;
                  return <SettingsToggle key={exam.id} label={exam.title} description={lastVisibleExam ? "Keep at least one subject visible." : undefined} checked={visible} disabled={lastVisibleExam} onChange={() => onExamVisibilityChange(exam.id, !visible)} />;
                })}
              </div>
            </details>
          </div>
        </section>

        <section className="settings-section" aria-labelledby="settings-data-title">
          <div className="settings-section-heading">
            <h2 id="settings-data-title">Data</h2>
            <p className="settings-hint">Keep a copy of your work.</p>
          </div>
          <div className="settings-section-body">
            <div className="settings-row settings-data-row">
              <div className="settings-row-text">
                <span className="settings-label">Download your data</span>
                <p className="settings-hint">Export progress, calculator values and preferences saved on this device.</p>
              </div>
              <button type="button" className="settings-button" onClick={exportLocalData}>
                Export
              </button>
            </div>
          </div>
        </section>

        {user ? (
          <footer className="settings-footer">
            <button type="button" className="settings-button" onClick={() => logout()}>Log out</button>
          </footer>
        ) : null}
      </div>
    </section>
  );
}
