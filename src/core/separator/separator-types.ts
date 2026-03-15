export type TSeparatorOrientation = 'horizontal' | 'vertical';

export type TSeparatorVariant = 'solid' | 'dashed' | 'dotted';

export type TSeparatorProps = {
  orientation?: TSeparatorOrientation;
  thickness?: number;
  color?: string;
  variant?: TSeparatorVariant;
};
