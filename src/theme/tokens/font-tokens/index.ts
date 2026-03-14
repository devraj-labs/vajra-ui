import { fontSizeTokens } from './font-size-tokens';
import { fontWeightTokens } from './font-weight-tokens';
import { lineHeightTokens } from './line-height-tokens';

export type TFontVariant = {
  fontSize: number;
  lineHeight: number;
  fontWeight: '400' | '500' | '600' | '700';
};

type TScale = keyof typeof fontSizeTokens;

export const fontTokens = (Object.keys(fontSizeTokens) as TScale[]).reduce(
  (acc, scale) => {
    acc[scale] = {
      fontSize: fontSizeTokens[scale],
      lineHeight: lineHeightTokens[scale],
      fontWeight: fontWeightTokens[scale],
    };

    return acc;
  },
  {} as Record<TScale, TFontVariant>,
) as Record<TScale, TFontVariant>;

export type TFontToken = TScale;
