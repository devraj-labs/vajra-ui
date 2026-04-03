import { createRecipe, TRecipeVariants } from '../../utils/create-recipe';

export const spinnerRecipe = createRecipe({
  variants: {
    size: {
      xs: { root: { size: 12 } },
      sm: { root: { size: 16 } },
      md: { root: { size: 24 } },
      lg: { root: { size: 28 } },
      xl: { root: { size: 32 } },
    },
  },
});

export type TSpinnerRecipeVariants = TRecipeVariants<typeof spinnerRecipe>;
