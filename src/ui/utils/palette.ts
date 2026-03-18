import { colorPrimitives } from '../../vajra-theme/primitives/colors';

export type TPaletteColorSlots = {
  solid: string;
  subtle: string;
  muted: string;
  text: string;
};

export type TColorPalette =
  | 'gray'
  | 'blue'
  | 'purple'
  | 'red'
  | 'green'
  | 'yellow'
  | 'orange'
  | 'teal'
  | 'pink';

export const paletteMap: Record<TColorPalette, TPaletteColorSlots> = {
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
