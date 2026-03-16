import { fontSizeTokens } from './font-size-tokens';
import { fontWeightTokens } from './font-weight-tokens';
import { lineHeightTokens } from './line-height-tokens';

export type TFontVariant = {
  fontSize: number;
  lineHeight: number;
  fontWeight: '400' | '500' | '600' | '700';
};

type TScale = keyof typeof fontSizeTokens;

// Default weight per scale step
const scaleWeightMap: Record<TScale, keyof typeof fontWeightTokens> = {
  'f-1': 'f-400',
  'f-2': 'f-400',
  'f-3': 'f-400',
  'f-4': 'f-500',
  'f-5': 'f-600',
  'f-6': 'f-700',
};

const fontScale = (Object.keys(fontSizeTokens) as TScale[]).reduce(
  (acc, scale) => {
    acc[scale] = {
      fontSize: fontSizeTokens[scale],
      lineHeight: lineHeightTokens[scale],
      fontWeight: fontWeightTokens[scaleWeightMap[scale]],
    };

    return acc;
  },
  {} as Record<TScale, TFontVariant>,
);

export const fontTokens = {
  ...fontScale,

  // Semantic aliases
  caption: fontScale['f-1'],
  bodySmall: fontScale['f-2'],
  body: fontScale['f-3'],
  subheading: fontScale['f-4'],
  heading: fontScale['f-5'],
  display: fontScale['f-6'],
} satisfies Record<string, TFontVariant>;

export type TFontToken = keyof typeof fontTokens;
