import { createRecipe, TRecipeVariants } from '../../utils/create-recipe';
import { vajraStyle, vajraTextStyle } from '../../vajra-theme/vajra-style';
import { TSpinnerSize } from '../spinner/spinner-types';

export const iconButtonRecipe = createRecipe({
  variants: {
    variant: {
      solid: {
        container: vajraStyle({ backgroundColor: 'primary' }),
        label: vajraTextStyle({ color: 'textInverse' }),
      },
      subtle: {
        container: vajraStyle({ backgroundColor: 'primarySubtle' }),
        label: vajraTextStyle({ color: 'primary' }),
      },
      surface: {
        container: vajraStyle({ backgroundColor: 'surface' }),
        label: vajraTextStyle({ color: 'text' }),
      },
      outline: {
        container: vajraStyle({ backgroundColor: 'transparent' }),
        label: vajraTextStyle({ color: 'primary' }),
      },
      ghost: {
        container: vajraStyle({ backgroundColor: 'transparent' }),
        label: vajraTextStyle({ color: 'primary' }),
      },
      plain: {
        container: vajraStyle({ backgroundColor: 'transparent' }),
        label: vajraTextStyle({ color: 'text' }),
      },
    },
    size: {
      xs: {
        container: vajraStyle({ rounded: 'r-1', size: 28 }),
        icon: { size: 12 },
        spinner: { size: 'xs' as TSpinnerSize },
      },
      sm: {
        container: vajraStyle({ rounded: 'r-1', size: 32 }),
        icon: { size: 16 },
        spinner: { size: 'sm' as TSpinnerSize },
      },
      md: {
        container: vajraStyle({ rounded: 'r-2', size: 40 }),
        icon: { size: 24 },
        spinner: { size: 'md' as TSpinnerSize },
      },
      lg: {
        container: vajraStyle({ rounded: 'r-2', size: 48 }),
        icon: { size: 28 },
        spinner: { size: 'lg' as TSpinnerSize },
      },
      xl: {
        container: vajraStyle({ rounded: 'r-3', size: 56 }),
        icon: { size: 32 },
        spinner: { size: 'xl' as TSpinnerSize },
      },
    },
  },
});

export type TIconButtonRecipeVariants = TRecipeVariants<typeof iconButtonRecipe>;
