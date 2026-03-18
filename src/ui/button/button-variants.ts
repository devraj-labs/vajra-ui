import { colorPrimitives } from '../../vajra-theme/primitives/colors';
import { TRoundedToken } from '../../vajra-theme/tokens/rounded-tokens';
import { TSpacingToken } from '../../vajra-theme/tokens/spacing-tokens';
import type { TVajraTheme } from '../../vajra-theme/use-vajra-theme';
import { TButtonColorPalette, TButtonSize, TButtonVariant } from './button-types';

export type TButtonVariantStyle = {
  bg: string;
  textColor: string;
  borderColor?: string;
  borderWidth?: number;
};

type TPaletteSlots = {
  solid: string;
  subtle: string;
  muted: string;
  text: string;
};

const paletteMap: Record<TButtonColorPalette, TPaletteSlots> = {
  gray: {
    solid: colorPrimitives.gray600,
    subtle: colorPrimitives.gray100,
    muted: colorPrimitives.gray400,
    text: colorPrimitives.white,
  },
  blue: {
    solid: colorPrimitives.blue500,
    subtle: colorPrimitives.blue50,
    muted: colorPrimitives.blue300,
    text: colorPrimitives.white,
  },
  purple: {
    solid: colorPrimitives.purple500,
    subtle: colorPrimitives.purple50,
    muted: colorPrimitives.purple300,
    text: colorPrimitives.white,
  },
  red: {
    solid: colorPrimitives.red500,
    subtle: colorPrimitives.red50,
    muted: colorPrimitives.red300,
    text: colorPrimitives.white,
  },
  green: {
    solid: colorPrimitives.green500,
    subtle: colorPrimitives.green50,
    muted: colorPrimitives.green300,
    text: colorPrimitives.white,
  },
  yellow: {
    solid: colorPrimitives.yellow500,
    subtle: colorPrimitives.yellow50,
    muted: colorPrimitives.yellow300,
    text: colorPrimitives.gray900,
  },
  orange: {
    solid: colorPrimitives.orange500,
    subtle: colorPrimitives.orange50,
    muted: colorPrimitives.orange300,
    text: colorPrimitives.white,
  },
  teal: {
    solid: colorPrimitives.teal500,
    subtle: colorPrimitives.teal50,
    muted: colorPrimitives.teal300,
    text: colorPrimitives.white,
  },
  pink: {
    solid: colorPrimitives.pink500,
    subtle: colorPrimitives.pink50,
    muted: colorPrimitives.pink300,
    text: colorPrimitives.white,
  },
};

export type TButtonSizeStyle = {
  px: TSpacingToken;
  py: TSpacingToken;
  rounded: TRoundedToken;
  fontVariant: 'label' | 'button';
  spinnerSize: number;
};

export const getButtonSizeStyle = (size: TButtonSize): TButtonSizeStyle => {
  switch (size) {
    case 'xs':
      return { px: 's-2', py: 's-1', rounded: 'r-1', fontVariant: 'label', spinnerSize: 12 };
    case 'sm':
      return { px: 's-3', py: 's-2', rounded: 'r-1', fontVariant: 'label', spinnerSize: 14 };
    case 'md':
      return { px: 's-4', py: 's-3', rounded: 'r-2', fontVariant: 'button', spinnerSize: 16 };
    case 'lg':
      return { px: 's-5', py: 's-3', rounded: 'r-2', fontVariant: 'button', spinnerSize: 18 };
    case 'xl':
      return { px: 's-6', py: 's-4', rounded: 'r-3', fontVariant: 'button', spinnerSize: 20 };
  }
};

export const getButtonVariantStyle = (
  variant: TButtonVariant,
  colors: TVajraTheme['colors'],
  colorPalette?: TButtonColorPalette,
): TButtonVariantStyle => {
  const p = colorPalette ? paletteMap[colorPalette] : null;

  switch (variant) {
    case 'solid':
      return {
        bg: p ? p.solid : colors.primary,
        textColor: p ? p.text : colors.textInverse,
      };
    case 'subtle':
      return {
        bg: p ? p.subtle : colors.primarySubtle,
        textColor: p ? p.solid : colors.primary,
      };
    case 'surface':
      return {
        bg: colors.surface,
        textColor: p ? p.solid : colors.text,
      };
    case 'outline':
      return {
        bg: 'transparent',
        textColor: p ? p.solid : colors.primary,
        borderColor: p ? p.solid : colors.primary,
        borderWidth: 1,
      };
    case 'ghost':
      return {
        bg: 'transparent',
        textColor: p ? p.solid : colors.primary,
      };
    case 'plain':
      return {
        bg: 'transparent',
        textColor: p ? p.solid : colors.text,
      };
  }
};
