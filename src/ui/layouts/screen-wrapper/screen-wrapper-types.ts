import { StyleProp, ViewStyle } from 'react-native';
import { TSpinnerSize } from 'src/ui/components';

type TLoaderProps = {
  isLoading?: boolean;
  loader?: React.ReactNode;
  size?: TSpinnerSize;
  loaderText?: React.ReactNode;
};

export type TScreenWrapperProps = {
  style?: StyleProp<ViewStyle>;
  loader?: TLoaderProps;
  children?: React.ReactNode;
};
