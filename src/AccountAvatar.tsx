import { useState } from "react";

type Props = {
  avatar?: string | null;
  /** Display name (nickname or email) — its first letter is the fallback. */
  name?: string | null;
  /** Render at the larger settings-preview size. */
  large?: boolean;
};

// The account avatar shown in the topbar, the nav menu and the settings dialog.
// Priority: an uploaded image, then the first letter of the display name, then
// a neutral person glyph (signed-out / no name yet).
export function AccountAvatar({ avatar, name, large = false }: Props) {
  // Track a src that failed to load so a corrupt/blocked image falls back to
  // the initial. Keyed on the src so a new avatar gets a fresh chance.
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const initial = name?.trim()?.[0]?.toUpperCase() ?? "";
  const className = large ? "account-avatar account-avatar--lg" : "account-avatar";

  if (avatar && avatar !== failedSrc) {
    return (
      <span className={className}>
        <img className="account-avatar-img" src={avatar} alt="" aria-hidden="true" onError={() => setFailedSrc(avatar)} />
      </span>
    );
  }

  if (initial) {
    return (
      <span className={className}>
        <span className="account-avatar-initial" aria-hidden="true">{initial}</span>
      </span>
    );
  }

  return (
    <span className={className}>
      <svg className="account-avatar-glyph" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8.5" r="3.5" fill="currentColor" />
        <path d="M5 19.5c0-3.6 3.1-5.5 7-5.5s7 1.9 7 5.5" fill="currentColor" />
      </svg>
    </span>
  );
}
