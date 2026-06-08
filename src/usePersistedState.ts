import { useState, useEffect, useRef } from "react";

type Validator<T> = (value: unknown) => value is T;

function removeStoredValue(key: string) {
  try {
    localStorage.removeItem(key);
  } catch {}
}

function readStoredValue<T>(
  key: string,
  defaultValue: T,
  validate?: Validator<T>
): T {
  try {
    const stored = localStorage.getItem(key);
    if (stored === null) return defaultValue;

    const parsed = JSON.parse(stored) as unknown;
    if (!validate) return parsed as T;
    if (validate(parsed)) return parsed;

    removeStoredValue(key);
    return defaultValue;
  } catch {
    removeStoredValue(key);
    return defaultValue;
  }
}

export function usePersistedState<T>(
  key: string,
  defaultValue: T,
  validate?: Validator<T>
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const prevKeyRef = useRef(key);
  const isFirstRun = useRef(true);

  const [value, setValue] = useState<T>(() => readStoredValue(key, defaultValue, validate));

  const validateRef = useRef(validate);
  validateRef.current = validate;
  const defaultValueRef = useRef(defaultValue);
  defaultValueRef.current = defaultValue;

  useEffect(() => {
    // Don't write on the initial mount: `value` was just read from storage (or
    // is the untouched default), so persisting it is pure churn — dozens of
    // redundant setItem calls across the app on every load.
    if (isFirstRun.current) {
      isFirstRun.current = false;
      prevKeyRef.current = key;
      return;
    }

    if (prevKeyRef.current !== key) {
      prevKeyRef.current = key;
      setValue(readStoredValue(key, defaultValueRef.current, validateRef.current));
      return;
    }

    try {
      const serialized = JSON.stringify(value);
      // Skip the write when storage already holds this value. Besides avoiding
      // churn, this stops a cross-tab feedback loop: a value adopted from a
      // 'storage' event (below) re-serializes to what's already stored, so we
      // don't echo it back and ping-pong writes between tabs.
      if (localStorage.getItem(key) !== serialized) {
        localStorage.setItem(key, serialized);
      }
    } catch {
      // quota exceeded / serialization error — ignore
    }
  }, [key, value]);

  // Cross-tab sync: adopt writes made to this key by another tab so two open
  // tabs don't silently clobber each other (last-writer-wins data loss).
  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== key || event.storageArea !== localStorage) return;
      setValue(readStoredValue(key, defaultValueRef.current, validateRef.current));
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [key]);

  return [value, setValue];
}
