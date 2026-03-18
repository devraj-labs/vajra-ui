import { PressableProps, ViewStyle } from 'react-native';

import { TBoxProps } from '../box/box-types';

// Reuse all Box layout/style props, swapping the ViewProps base for PressableProps
export type TCorePressableProps = Omit<PressableProps, 'style'> &
  Omit<TBoxProps, keyof PressableProps | 'children'> & {
    style?: ViewStyle | ViewStyle[];
    opacity?: number;
  };
