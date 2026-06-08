// Small generic runtime type-guards shared across the app (e.g. as
// usePersistedState validators). Domain-specific guards live with their data.

export function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}
