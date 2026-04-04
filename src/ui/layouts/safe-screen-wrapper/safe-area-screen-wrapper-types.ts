import { StyleProp, ViewStyle } from 'react-native';
import { Edge } from 'react-native-safe-area-context';
import { TSpinnerSize } from '../../components/spinner/spinner-types';

type TLoaderProps = {
  isLoading?: boolean;
  loader?: React.ReactNode; // By default Spinner comp with lg size
  size?: TSpinnerSize; // default lg
  loaderText?: React.ReactNode; // below loader
};

export type TSafeAreaScreenWrapperProps = {
  style?: StyleProp<ViewStyle>;
  edges?: Edge[];
  loader?: TLoaderProps;
  children: React.ReactNode;
};
