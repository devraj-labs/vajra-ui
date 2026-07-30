import React, { memo, useState } from 'react';

import { Box } from '../../core/box';
import { Pressable } from '../../core/pressable';
import { Row } from '../../core/row';
import { Text } from '../../core/text';
import { Sheet } from '../sheet';
import { SelectOption } from './components/select-option';
import { TSelectOption, TSelectProps } from './select-types';

const SelectComponent = <TValue extends string = string>({
  options,
  value,
  onChange,
  placeholder = 'Select…',
  label,
  errorText,
  isInvalid = false,
  isDisabled = false,
  selectedColor = 'primary',
  testID,
}: TSelectProps<TValue>) => {
  const [isOpen, setIsOpen] = useState(false);
  const selected = options.find(option => option.value === value);

  const handleSelect = (option: TSelectOption<TValue>) => {
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <Box>
      {label !== undefined && (
        <Text variant="label" color="textMuted" mb="s-1">
          {label}
        </Text>
      )}

      <Pressable
        onPress={() => !isDisabled && setIsOpen(true)}
        bg="background"
        borderColor={isInvalid ? 'error' : 'border'}
        borderWidth={1}
        rounded="r-2"
        px="s-3"
        py="s-3"
        style={{ opacity: isDisabled ? 0.5 : 1 }}
        testID={testID}
        accessibilityRole="button"
        accessibilityState={{ disabled: isDisabled, expanded: isOpen }}
      >
        <Row align="center" justify="space-between">
          <Text variant="body" color={selected ? 'text' : 'textMuted'}>
            {selected?.label ?? placeholder}
          </Text>
          <Text variant="label" color="textMuted">
            {isOpen ? '▲' : '▼'}
          </Text>
        </Row>
      </Pressable>

      {isInvalid && errorText !== undefined && (
        <Text variant="label" color="error" mt="s-1">
          {errorText}
        </Text>
      )}

      <Sheet
        isVisible={isOpen}
        onClose={() => setIsOpen(false)}
        testID={testID ? `${testID}-sheet` : undefined}
      >
        {options.map(option => (
          <SelectOption
            key={option.value}
            label={option.label}
            isSelected={option.value === value}
            onPress={() => handleSelect(option)}
            selectedColor={selectedColor}
            testID={testID ? `${testID}-option-${option.value}` : undefined}
          />
        ))}
      </Sheet>
    </Box>
  );
};

export const Select = memo(SelectComponent) as typeof SelectComponent;
