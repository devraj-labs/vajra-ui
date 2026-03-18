import { TInputSize, TInputSizeStyle } from './input-types';

export const INPUT_SIZE_STYLES: Record<TInputSize, TInputSizeStyle> = {
  xs: {
    height: 32,
    inputText: { variant: 'bodySmall' },
    labelText: { variant: 'label' },
    helperText: { variant: 'label' },
  },
  sm: {
    height: 36,
    inputText: { variant: 'bodySmall' },
    labelText: { variant: 'label' },
    helperText: { variant: 'label' },
  },
  md: {
    height: 44,
    inputText: { variant: 'body' },
    labelText: { variant: 'label' },
    helperText: { variant: 'label' },
  },
  lg: {
    height: 52,
    inputText: { variant: 'subheading' },
    labelText: { variant: 'caption' },
    helperText: { variant: 'caption' },
  },
};
