export const colorPrimitives = {
  white: '#FFFFFF',
  black: '#000000',

  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111111',

  blue50: '#EFF6FF',
  blue100: '#DBEAFE',
  blue400: '#3385FF',
  blue500: '#0066FF',

  purple400: '#9D68F0',
  purple600: '#7C3AED',

  red100: '#FEE2E2',
  red500: '#EF4444',

  green100: '#DCFCE7',
  green500: '#22C55E',

  yellow100: '#FEF3C7',
  yellow500: '#F59E0B',

  blackAlpha40: '#00000066',
} as const;

export type TColorPrimitive = keyof typeof colorPrimitives;
