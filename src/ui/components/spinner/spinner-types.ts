import { TVajraColors } from '../../vajra-theme/colors';
import { TSpinnerRecipeVariants } from './spinner-variants';

export type TSpinnerSize = NonNullable<TSpinnerRecipeVariants['size']>;

export type TSpinnerProps = {
  size?: TSpinnerSize;
  color?: TVajraColors;
};
