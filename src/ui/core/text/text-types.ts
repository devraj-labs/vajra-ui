import { TTextProps as TCoreTextProps } from '@vajra-ui/core';
import { TVajraColors } from '../../vajra-theme/colors';
import { TFontVariant } from '../../vajra-theme/tokens/font-tokens/index';
import { TSpacingProps } from '../../utils/spacing-props';

export type TTextProps = Omit<TCoreTextProps, 'fontSize' | 'lineHeight' | 'fontWeight' | 'color'> &
  Pick<TSpacingProps, 'm' | 'mx' | 'my' | 'mt' | 'mb' | 'ml' | 'mr'> & {
    variant?: TFontVariant;
    color?: TVajraColors;
  };
