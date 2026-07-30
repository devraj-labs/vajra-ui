import { TToastVariant } from '../../toast-types';

export type TToastItemProps = {
  message: string;
  variant?: TToastVariant;
  testID?: string;
};
