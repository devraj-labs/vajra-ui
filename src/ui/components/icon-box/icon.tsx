import React, { memo } from 'react';

import { TVajraColors } from '../../vajra-theme/colors';
import { TVajraIconComponent } from '../icon-button/icon-button-types';
import { useVajraTheme } from '../../vajra-theme/use-vajra-theme';

type TIconProps = {
  icon: TVajraIconComponent;
  color?: TVajraColors;
  size?: number;
};

const IconComponent: React.FC<TIconProps> = ({ icon: Icon, color = 'primary', size = 24 }) => {
  const { colors } = useVajraTheme();

  return <Icon size={size} width={size} height={size} color={colors[color]} />;
};

export const Icon = memo(IconComponent);
Icon.displayName = 'Icon';
