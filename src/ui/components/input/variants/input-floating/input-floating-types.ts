import { TInputProps } from '../../input-types';

export type TInputFloatingVariant = 'outline' | 'filled' | 'flushed';

export type TInputFloatingProps = TInputProps & {
  variant?: TInputFloatingVariant;
};
