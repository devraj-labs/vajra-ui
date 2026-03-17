import { TTextProps } from '../../core/text/text-types';
import { TFontVariant } from '../../vajra-theme/tokens/font-tokens/index';

export type TTextVariantProps = Omit<TTextProps, 'fontSize' | 'lineHeight' | 'fontWeight'> & {
  variant?: TFontVariant;
};
