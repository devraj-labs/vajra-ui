import React, { memo } from 'react';

import { useVajraTheme } from '../../../vajra-theme/use-vajra-theme';
import { Pressable } from '../../../core/pressable';
import { useAppBarContext } from '../app-bar-context';
import { APP_BAR_ACTION_HIT_SLOP, APP_BAR_SIDE_MIN_WIDTH } from '../app-bar-constants';
import { TAppBarIconButtonProps } from '../app-bar-types';

const AppBarIconButtonComponent: React.FC<TAppBarIconButtonProps> = ({
  icon: Icon,
  onPress,
  accessibilityLabel = 'Action',
}) => {
  const { tint } = useAppBarContext();
  const { colors } = useVajraTheme();

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      hitSlop={APP_BAR_ACTION_HIT_SLOP}
      align="center"
      justify="center"
      px="s-2"
      style={{ minWidth: APP_BAR_SIDE_MIN_WIDTH }}
    >
      <Icon size={20} color={colors[tint]} />
    </Pressable>
  );
};

export const AppBarIconButton = memo(AppBarIconButtonComponent);
AppBarIconButton.displayName = 'AppBar.IconButton';
