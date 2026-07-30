import React, { memo } from 'react';

import { Pressable } from '../../../../core/pressable';
import { Row } from '../../../../core/row';
import { Text } from '../../../../core/text';
import { TSelectOptionProps } from './select-option-types';

const SelectOptionComponent: React.FC<TSelectOptionProps> = ({
  label,
  isSelected,
  onPress,
  selectedColor = 'primary',
  testID,
}) => {
  return (
    <Pressable
      onPress={onPress}
      py="s-3"
      px="s-4"
      testID={testID}
      accessibilityRole="menuitem"
      accessibilityState={{ selected: isSelected }}
    >
      <Row align="center" justify="space-between">
        <Text variant="body" color={isSelected ? selectedColor : 'text'}>
          {label}
        </Text>
        {isSelected && (
          <Text variant="label" color={selectedColor}>
            ✓
          </Text>
        )}
      </Row>
    </Pressable>
  );
};

export const SelectOption = memo(SelectOptionComponent);
SelectOption.displayName = 'SelectOption';
