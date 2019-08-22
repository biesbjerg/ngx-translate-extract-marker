export function marker<T extends string | string[]>(key: T, context?: string, comment?: string): T {
  return key;
}
