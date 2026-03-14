import { DimensionValue, FlexAlignType, ViewStyle } from 'react-native';
import { TColorToken, TSpacingToken, TRoundedToken } from '../../theme';

export type TBoxProps = {
  style?: ViewStyle | ViewStyle[];
  children?: React.ReactNode;
  // dimensions
  width?: DimensionValue;
  height?: DimensionValue;
  minWidth?: DimensionValue;
  maxWidth?: DimensionValue;
  minHeight?: DimensionValue;
  maxHeight?: DimensionValue;
  // colors
  backgroundColor?: TColorToken;
  borderColor?: TColorToken;
  borderWidth?: number;
  // rounded
  br?: TRoundedToken;
  // flex
  align?: FlexAlignType;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  gap?: TSpacingToken;
  flex?: number;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  // margin
  m?: TSpacingToken;
  mx?: TSpacingToken;
  my?: TSpacingToken;
  mt?: TSpacingToken;
  mb?: TSpacingToken;
  ml?: TSpacingToken;
  mr?: TSpacingToken;
  // padding
  p?: TSpacingToken;
  px?: TSpacingToken;
  py?: TSpacingToken;
  pt?: TSpacingToken;
  pb?: TSpacingToken;
  pl?: TSpacingToken;
  pr?: TSpacingToken;
};
