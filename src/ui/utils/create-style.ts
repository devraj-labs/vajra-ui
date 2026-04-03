type TTokenMap = Record<string, string | number>;
type TStyleConfig = Record<string, TTokenMap>;

type TStyleProps<TConfig extends TStyleConfig> = {
  [K in keyof TConfig]?: keyof TConfig[K];
};

type TStyleResult<TConfig extends TStyleConfig, TProps extends TStyleProps<TConfig>> = {
  [K in keyof TProps]: K extends keyof TConfig
    ? TProps[K] extends keyof TConfig[K]
      ? TConfig[K][TProps[K]]
      : never
    : never;
};

type TStyleFn<TConfig extends TStyleConfig> = <TProps extends TStyleProps<TConfig>>(
  props: TProps,
) => TStyleResult<TConfig, TProps>;

export const createStyle =
  <TConfig extends TStyleConfig>(config: TConfig): TStyleFn<TConfig> =>
  props => {
    const result: Record<string, string | number> = {};

    for (const key in props) {
      const token = props[key];
      if (token !== undefined) {
        result[key] = config[key][token as string];
      }
    }

    return result as TStyleResult<TConfig, typeof props>;
  };
