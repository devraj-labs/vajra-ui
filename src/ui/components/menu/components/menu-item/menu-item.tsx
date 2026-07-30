import React, { memo } from 'react';

import { Pressable } from '../../../../core/pressable';
import { Text } from '../../../../core/text';
import { TMenuItemProps } from './menu-item-types';

const MenuItemComponent: React.FC<TMenuItemProps> = ({
  label,
  onPress,
  icon,
  isDestructive = false,
  isDisabled = false,
  testID,
}) => {
  const color = isDestructive ? 'error' : 'text';

  return (
    <Pressable
      onPress={() => !isDisabled && onPress()}
      py="s-3"
      px="s-4"
      gap="s-3"
      direction="row"
      align="center"
      style={{ opacity: isDisabled ? 0.5 : 1 }}
      testID={testID}
      accessibilityRole="menuitem"
      accessibilityState={{ disabled: isDisabled }}
    >
      {icon}
      <Text variant="body" color={color}>
        {label}
      </Text>
    </Pressable>
  );
};

export const MenuItem = memo(MenuItemComponent);
MenuItem.displayName = 'MenuItem';
