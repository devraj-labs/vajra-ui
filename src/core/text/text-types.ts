import { TextProps, TextStyle } from 'react-native';

export type TTextProps = Omit<TextProps, 'style'> & {
  fontSize?: number;
  lineHeight?: number;
  fontWeight?: TextStyle['fontWeight'];
  fontFamily?: string;
  letterSpacing?: number;
  color?: string;
  align?: TextStyle['textAlign'];
  decoration?: TextStyle['textDecorationLine'];
  transform?: TextStyle['textTransform'];
  style?: TextStyle | TextStyle[];
  children?: React.ReactNode;
};
