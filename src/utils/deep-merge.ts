type TDeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? TDeepPartial<T[K]> : T[K];
};

export const deepMerge = <T extends object>(base: T, override: TDeepPartial<T>): T => {
  const result = { ...base };

  for (const key in override) {
    const val = override[key];

    if (val && typeof val === 'object' && !Array.isArray(val)) {
      result[key] = deepMerge(base[key] as object, val as TDeepPartial<object>) as T[typeof key];
    } else if (val !== undefined) {
      result[key] = val as T[typeof key];
    }
  }

  return result;
};
