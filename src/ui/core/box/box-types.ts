import { DimensionValue, ViewProps, ViewStyle } from 'react-native';

import { TColorToken } from '../../vajra-theme/tokens/colors/types';
import { TRoundedToken } from '../../vajra-theme/tokens/rounded-tokens';
import { TSpacingProps } from '../../utils/spacing-props';

export type TUiBoxProps = Omit<ViewProps, 'style'> &
  TSpacingProps & {
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
    justify?: ViewStyle['justifyContent'];
    align?: ViewStyle['alignItems'];
    direction?: ViewStyle['flexDirection'];
    wrap?: ViewStyle['flexWrap'];

    style?: ViewStyle | ViewStyle[];
    children?: React.ReactNode;
  };
