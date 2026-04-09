import { TUiBoxProps } from '../../core/box/box-types';

type TLoaderProps = {
  isLoading?: boolean;
  loader?: React.ReactNode;
  loaderText?: React.ReactNode;
};

export type TScreenWrapperProps = Omit<TUiBoxProps, 'flex'> & {
  loader?: TLoaderProps;
};
