import { TSpinnerSize } from 'src/ui/components';
import { TUiBoxProps } from '../../core/box/box-types';

type TLoaderProps = {
  isLoading?: boolean;
  loader?: React.ReactNode;
  size?: TSpinnerSize;
  loaderText?: React.ReactNode;
};

export type TScreenWrapperProps = Omit<TUiBoxProps, 'flex'> & {
  loader?: TLoaderProps;
};
