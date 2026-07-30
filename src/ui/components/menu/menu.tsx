import React, { memo } from 'react';

import { Text } from '../../core/text';
import { Sheet } from '../sheet';
import { MenuItem } from './components/menu-item';
import { TMenuProps } from './menu-types';

const MenuComponent: React.FC<TMenuProps> = ({ isVisible, onClose, actions, title, testID }) => {
  return (
    <Sheet isVisible={isVisible} onClose={onClose} testID={testID}>
      {title !== undefined && (
        <Text variant="label" color="textMuted" mb="s-2" mx="s-4">
          {title}
        </Text>
      )}

      {actions.map((action, index) => (
        <MenuItem
          key={action.label}
          label={action.label}
          icon={action.icon}
          isDestructive={action.isDestructive}
          isDisabled={action.isDisabled}
          onPress={() => {
            action.onPress();
            onClose();
          }}
          testID={testID ? `${testID}-action-${index}` : undefined}
        />
      ))}
    </Sheet>
  );
};

export const Menu = memo(MenuComponent);
Menu.displayName = 'Menu';
