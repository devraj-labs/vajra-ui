import { TTextProps as TCoreTextProps } from '../../../core/core-text/core-text-types';
import { TColorToken } from '../../vajra-theme/tokens/colors/types';
import { TFontVariant } from '../../vajra-theme/tokens/font-tokens/index';
import { TSpacingProps } from '../../utils/spacing-props';

export type TTextProps = Omit<TCoreTextProps, 'fontSize' | 'lineHeight' | 'fontWeight' | 'color'> &
  Pick<TSpacingProps, 'm' | 'mx' | 'my' | 'mt' | 'mb' | 'ml' | 'mr'> & {
    variant?: TFontVariant;
    color?: TColorToken;
  };
