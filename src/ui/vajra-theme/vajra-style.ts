import { ViewStyle, TextStyle } from 'react-native';

import { TSpacingToken } from './tokens/spacing-tokens';
import { TRoundedToken } from './tokens/rounded-tokens';
import { TFontVariant } from './tokens';
import { TVajraColors } from './colors';

export type TVajraStyleProps = Omit<
  ViewStyle,
  'backgroundColor' | 'borderRadius' | 'borderColor'
> & {
  px?: TSpacingToken;
  py?: TSpacingToken;
  pt?: TSpacingToken;
  pb?: TSpacingToken;
  pl?: TSpacingToken;
  pr?: TSpacingToken;
  mx?: TSpacingToken;
  my?: TSpacingToken;
  mt?: TSpacingToken;
  mb?: TSpacingToken;
  ml?: TSpacingToken;
  mr?: TSpacingToken;
  gap?: TSpacingToken;
  rounded?: TRoundedToken;
  backgroundColor?: TVajraColors;
  borderColor?: TVajraColors;
  size?: number;
};

export type TVajraTextStyleProps = Omit<TextStyle, 'color' | 'fontVariant'> & {
  color?: TVajraColors;
  fontVariant?: TFontVariant;
};

export const vajraStyle = (props: TVajraStyleProps): TVajraStyleProps => props;
export const vajraTextStyle = (props: TVajraTextStyleProps): TVajraTextStyleProps => props;
