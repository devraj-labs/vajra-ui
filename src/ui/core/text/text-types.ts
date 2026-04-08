import { TTextProps as TCoreTextProps } from '@devraj-labs/vajra-ui-core';
import { TVajraColors } from '../../vajra-theme/colors';
import { TFontVariant } from '../../vajra-theme/tokens/font-tokens/index';
import { TSpacingProps } from '../../utils/spacing-props';
import { TFontWeightValue, IVajraFonts } from '../../vajra-theme/create-vajra-theme';

export type TTextProps = Omit<
  TCoreTextProps,
  'fontSize' | 'lineHeight' | 'fontWeight' | 'color' | 'm' | 'mx' | 'my' | 'mt' | 'mb' | 'ml' | 'mr'
> &
  Pick<TSpacingProps, 'm' | 'mx' | 'my' | 'mt' | 'mb' | 'ml' | 'mr'> & {
    variant?: TFontVariant;
    color?: TVajraColors;
    font?: keyof IVajraFonts;
    fontWeight?: TFontWeightValue;
  };
