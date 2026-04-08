import { TUiBoxProps } from '../../core/box';
import { TTextProps } from '../../core/text/text-types';

export type TBadgeProps = TUiBoxProps & {
  label: string;
  textProps?: Omit<TTextProps, 'children'>;
};
