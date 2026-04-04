import React, { memo } from 'react';

import { useVajraNavigation } from '../../../vajra-navigation/vajra-navigation-context';
import { AppBarIconButton } from './app-bar-icon-button';
import { TAppBarBackActionProps } from '../app-bar-types';

const AppBarBackActionComponent: React.FC<TAppBarBackActionProps> = ({ onPress, icon }) => {
  const { defaultBackBehaviour } = useVajraNavigation();

  return (
    <AppBarIconButton
      icon={icon}
      onPress={onPress ?? defaultBackBehaviour}
      accessibilityLabel="Go back"
    />
  );
};

export const AppBarBackAction = memo(AppBarBackActionComponent);
AppBarBackAction.displayName = 'AppBar.BackAction';
