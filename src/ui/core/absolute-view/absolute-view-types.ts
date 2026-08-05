import { TUiBoxProps } from '../box/box-types';

export type TUiAbsoluteViewProps = Omit<TUiBoxProps, 'style' | 'position'>;
