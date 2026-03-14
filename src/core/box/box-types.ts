import { DimensionValue, ViewProps, ViewStyle } from 'react-native';
import { TColorToken, TRoundedToken, TSpacingToken } from '../../theme';

type TDimensionProps = {
  w?: DimensionValue;
  h?: DimensionValue;
  minW?: DimensionValue;
  maxW?: DimensionValue;
  minH?: DimensionValue;
  maxH?: DimensionValue;
};

type TColorProps = {
  bg?: TColorToken;
};

type TBorderProps = {
  borderWidth?: number;
  borderTopWidth?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderColor?: TColorToken;
};

type TRoundedProps = {
  rounded?: TRoundedToken;
  roundedT?: TRoundedToken;
  roundedB?: TRoundedToken;
  roundedL?: TRoundedToken;
  roundedR?: TRoundedToken;
};

type TFlexProps = {
  gap?: TSpacingToken;
  flex?: number;
  justify?: ViewStyle['justifyContent'];
  align?: ViewStyle['alignItems'];
  direction?: ViewStyle['flexDirection'];
  wrap?: ViewStyle['flexWrap'];
};

type TMarginProps = {
  m?: TSpacingToken;
  mx?: TSpacingToken;
  my?: TSpacingToken;
  mt?: TSpacingToken;
  mb?: TSpacingToken;
  ml?: TSpacingToken;
  mr?: TSpacingToken;
};

type TPaddingProps = {
  p?: TSpacingToken;
  px?: TSpacingToken;
  py?: TSpacingToken;
  pt?: TSpacingToken;
  pb?: TSpacingToken;
  pl?: TSpacingToken;
  pr?: TSpacingToken;
};

export type TBoxProps = Omit<ViewProps, 'style'> &
  TDimensionProps &
  TColorProps &
  TBorderProps &
  TRoundedProps &
  TFlexProps &
  TMarginProps &
  TPaddingProps & {
    style?: ViewStyle | ViewStyle[];
    children?: React.ReactNode;
  };
