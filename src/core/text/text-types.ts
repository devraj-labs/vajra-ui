import { TextProps, TextStyle } from 'react-native';
import { TBrandColorTokens, TFeedbackColorTokens, TFontToken, TTextColorTokens } from '../../theme';

type TAllColorTokens = TTextColorTokens & TBrandColorTokens & TFeedbackColorTokens;

export type TTextProps = Omit<TextProps, 'style'> & {
  variant: TFontToken;
  color?: keyof TAllColorTokens;
  align?: TextStyle['textAlign'];
  decoration?: TextStyle['textDecorationLine'];
  transform?: TextStyle['textTransform'];
  style?: TextStyle | TextStyle[];
  children?: React.ReactNode;
};
