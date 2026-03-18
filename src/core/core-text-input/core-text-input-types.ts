import { TextInputProps, TextStyle } from 'react-native';

import { TBoxProps } from '../box/box-types';

// Reuse dimension + spacing + border props from TBoxProps to stay DRY
type TBoxSubset = Pick<
  TBoxProps,
  | 'w'
  | 'h'
  | 'm'
  | 'mx'
  | 'my'
  | 'mt'
  | 'mb'
  | 'ml'
  | 'mr'
  | 'p'
  | 'px'
  | 'py'
  | 'pt'
  | 'pb'
  | 'pl'
  | 'pr'
  | 'borderWidth'
  | 'borderColor'
  | 'rounded'
  | 'bg'
>;

export type TCoreTextInputProps = Omit<TextInputProps, 'style'> &
  TBoxSubset & {
    style?: TextStyle | TextStyle[];
    color?: string;
    fontSize?: number;
    lineHeight?: number;
    fontWeight?: TextStyle['fontWeight'];
    letterSpacing?: number;
    placeholderColor?: string;
  };
