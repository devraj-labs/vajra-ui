import { TBoxProps } from '../box';

export type TGridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type TGridRootProps = Omit<TBoxProps, 'direction' | 'wrap'> & {
  columns?: TGridColumns;
};

export type TGridItemProps = TBoxProps & {
  span?: TGridColumns;
  columns?: TGridColumns;
  colGap?: number;
  screenPadding?: number;
};
