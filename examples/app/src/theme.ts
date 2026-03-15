import { useTheme } from 'vajra-ui';

export const theme = {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f5',
    text: '#111111',
    textMuted: '#888888',
    primary: '#ff6b00',
    border: '#e0e0e0',
  },
  spacing: {
    none: 0,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  rounded: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 16,
    full: 9999,
  },
  typography: {
    xs: { fontSize: 11, lineHeight: 16, fontWeight: '400' as const },
    sm: { fontSize: 13, lineHeight: 18, fontWeight: '400' as const },
    md: { fontSize: 15, lineHeight: 22, fontWeight: '400' as const },
    lg: { fontSize: 18, lineHeight: 26, fontWeight: '500' as const },
    xl: { fontSize: 22, lineHeight: 30, fontWeight: '600' as const },
    xxl: { fontSize: 28, lineHeight: 36, fontWeight: '700' as const },
  },
  layout: {
    screenPadding: 16,
    gap: 8,
  },
};

export type TAppTheme = typeof theme;

export const useAppTheme = () => useTheme<TAppTheme>();
