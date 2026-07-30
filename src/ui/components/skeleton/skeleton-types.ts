import { DimensionValue } from 'react-native';

import { TVajraColors } from '../../vajra-theme/colors';
import { TRoundedToken } from '../../vajra-theme/tokens/rounded-tokens';

export type TSkeletonProps = {
  w?: DimensionValue;
  h?: DimensionValue;
  rounded?: TRoundedToken;
  bg?: TVajraColors;
  testID?: string;
};
