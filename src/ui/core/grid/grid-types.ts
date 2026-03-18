import { TGridColumns } from '../../../core/grid/grid-types';
import { TUiBoxProps } from '../box/box-types';

export type TUiGridRootProps = Omit<TUiBoxProps, 'direction' | 'wrap'>;

export type TUiGridItemProps = TUiBoxProps & {
  span?: TGridColumns;
  columns?: TGridColumns;
  colGap?: number;
  screenPadding?: number;
};
