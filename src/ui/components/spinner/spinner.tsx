import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';

import { useVajraTheme } from '../../vajra-theme/use-vajra-theme';
import { TSpinnerProps } from './spinner-types';

const SpinnerComponent: React.FC<TSpinnerProps> = ({ color = 'primary' }) => {
  const { colors } = useVajraTheme();

  return <ActivityIndicator size="small" color={colors[color]} />;
};

export const Spinner = memo(SpinnerComponent);
Spinner.displayName = 'Spinner';
