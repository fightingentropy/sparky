import { useState, useEffect, useRef } from "react";

export function usePersistedState<T>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const prevKeyRef = useRef(key);

  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? (JSON.parse(stored) as T) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (prevKeyRef.current !== key) {
      prevKeyRef.current = key;
      try {
        const stored = localStorage.getItem(key);
        setValue(stored ? (JSON.parse(stored) as T) : defaultValue);
      } catch {
        setValue(defaultValue);
      }
      return;
    }
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // quota exceeded — ignore
    }
  }, [key, value]);

  return [value, setValue];
}
