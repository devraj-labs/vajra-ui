import { DimensionValue, ViewProps, ViewStyle } from 'react-native';

import { TColorToken } from '../../../vajra-theme/tokens/colors/types';
import { TRoundedToken } from '../../../vajra-theme/tokens/rounded-tokens';
import { TSpacingToken } from '../../../vajra-theme/tokens/spacing-tokens';

export type TUiBoxProps = Omit<ViewProps, 'style'> & {
  // Dimensions — raw values, no token for these
  w?: DimensionValue;
  h?: DimensionValue;
  minW?: DimensionValue;
  maxW?: DimensionValue;
  minH?: DimensionValue;
  maxH?: DimensionValue;

  // Color — token keys
  bg?: TColorToken;
  borderColor?: TColorToken;

  // Border widths — raw numbers
  borderWidth?: number;
  borderTopWidth?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;

  // Rounded — token keys
  rounded?: TRoundedToken;
  roundedT?: TRoundedToken;
  roundedB?: TRoundedToken;
  roundedL?: TRoundedToken;
  roundedR?: TRoundedToken;

  // Flex
  flex?: number;
  gap?: TSpacingToken;
  justify?: ViewStyle['justifyContent'];
  align?: ViewStyle['alignItems'];
  direction?: ViewStyle['flexDirection'];
  wrap?: ViewStyle['flexWrap'];

  // Spacing — token keys
  m?: TSpacingToken;
  mx?: TSpacingToken;
  my?: TSpacingToken;
  mt?: TSpacingToken;
  mb?: TSpacingToken;
  ml?: TSpacingToken;
  mr?: TSpacingToken;
  p?: TSpacingToken;
  px?: TSpacingToken;
  py?: TSpacingToken;
  pt?: TSpacingToken;
  pb?: TSpacingToken;
  pl?: TSpacingToken;
  pr?: TSpacingToken;

  style?: ViewStyle | ViewStyle[];
  children?: React.ReactNode;
};
