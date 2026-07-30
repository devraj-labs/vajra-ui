export const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export const snapToStep = (value: number, min: number, step: number) => {
  if (step <= 0) return value;

  return min + Math.round((value - min) / step) * step;
};
