import { tokens, TTokens } from './tokens/index';

export type TTheme = {
  tokens: TTokens;
};

export function createTheme(overrides?: Partial<{ tokens: Partial<TTokens> }>): TTheme {
  return {
    tokens: {
      colors: { ...tokens.colors, ...overrides?.tokens?.colors },
      spacing: { ...tokens.spacing, ...overrides?.tokens?.spacing },
      rounded: { ...tokens.rounded, ...overrides?.tokens?.rounded },
      font: { ...tokens.font, ...overrides?.tokens?.font },
    },
  };
}

export const defaultTheme = createTheme();
