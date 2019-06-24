export function extract<T extends string | string[]>(key: T): T {
  return key;
}
