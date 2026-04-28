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

  const [value, setValue] = useState<T>(() => readStoredValue(key, defaultValue, validate));

  useEffect(() => {
    if (prevKeyRef.current !== key) {
      prevKeyRef.current = key;
      setValue(readStoredValue(key, defaultValue, validate));
      return;
    }

    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // quota exceeded — ignore
    }
  }, [key, value, validate]);

  return [value, setValue];
}
