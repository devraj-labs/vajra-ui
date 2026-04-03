import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';

import { useVajraTheme } from '../../vajra-theme/use-vajra-theme';
import { TSpinnerProps } from './spinner-types';
import { spinnerRecipe } from './spinner-variants';

const SpinnerComponent: React.FC<TSpinnerProps> = ({ size = 'md', color = 'primary' }) => {
  const { colors } = useVajraTheme();
  const { size: s } = spinnerRecipe({ size });

  return <ActivityIndicator size={s.root.size} color={colors[color]} />;
};

export const Spinner = memo(SpinnerComponent);
Spinner.displayName = 'Spinner';
