// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TAnyObject = Record<string, any>;

type TMerge<T> = T extends readonly TAnyObject[] ? T[number] : T;

type TSlotMap = { readonly [key: string]: TAnyObject | readonly TAnyObject[] };
type TVariantMap = { readonly [key: string]: TSlotMap };
type TVariantsConfig = { readonly [key: string]: TVariantMap };

type TSlotResult<TSlots extends TSlotMap> = {
  [TSlot in keyof TSlots]: TMerge<TSlots[TSlot]>;
};

type TRecipeResult<TVariants extends TVariantsConfig> = {
  [TDim in keyof TVariants]: TSlotResult<TVariants[TDim][keyof TVariants[TDim]]>;
};

type TRecipeVariantProps<TVariants extends TVariantsConfig> = {
  [K in keyof TVariants]?: keyof TVariants[K];
};

type TRecipe<TVariants extends TVariantsConfig> = (
  props: TRecipeVariantProps<TVariants>,
) => TRecipeResult<TVariants>;

export type TRecipeVariants<T> =
  T extends TRecipe<infer TVariants> ? TRecipeVariantProps<TVariants> : never;

const mergeSlot = (value: TAnyObject | readonly TAnyObject[]): TAnyObject =>
  Array.isArray(value) ? Object.assign({}, ...value) : (value as TAnyObject);

export const createRecipe =
  <TVariants extends TVariantsConfig>(config: { variants: TVariants }): TRecipe<TVariants> =>
  props => {
    const result = {} as TAnyObject;

    for (const dim in config.variants) {
      const key = props[dim];
      if (key === undefined) continue;

      const slotMap = config.variants[dim][key as string];
      const merged: TAnyObject = {};

      for (const part in slotMap) {
        merged[part] = mergeSlot(slotMap[part] as TAnyObject | readonly TAnyObject[]);
      }

      result[dim] = merged;
    }

    return result as TRecipeResult<TVariants>;
  };
