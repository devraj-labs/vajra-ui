export const colorTokens = {
  primary: '#0066FF',
  primaryMuted: '#3385FF',
  secondary: '#7C3AED',
  secondaryMuted: '#9D68F0',
  background: '#FFFFFF',
  surface: '#F5F5F5',
  surfaceRaised: '#EBEBEB',
  text: '#111111',
  textMuted: '#6B7280',
  textInverse: '#FFFFFF',
  border: '#E5E7EB',
  error: '#EF4444',
  errorMuted: '#FEE2E2',
  success: '#22C55E',
  successMuted: '#DCFCE7',
  warning: '#F59E0B',
  warningMuted: '#FEF3C7',
} as const;

export type TColorToken = keyof typeof colorTokens;
