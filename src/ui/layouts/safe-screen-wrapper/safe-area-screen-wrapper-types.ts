import { StyleProp, ViewStyle } from 'react-native';
import { Edge } from 'react-native-safe-area-context';

type TLoaderProps = {
  isLoading?: boolean;
  loader?: React.ReactNode;
  loaderText?: React.ReactNode;
};

export type TSafeAreaScreenWrapperProps = {
  style?: StyleProp<ViewStyle>;
  edges?: Edge[];
  loader?: TLoaderProps;
  children: React.ReactNode;
};
