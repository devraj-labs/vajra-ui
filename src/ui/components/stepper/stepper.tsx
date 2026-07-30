import React, { memo } from 'react';

import { Pressable } from '../../core/pressable';
import { Row } from '../../core/row';
import { Text } from '../../core/text';
import { TStepperProps } from './stepper-types';

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const StepperComponent: React.FC<TStepperProps> = ({
  value,
  onChange,
  min = 0,
  max = Infinity,
  step = 1,
  isDisabled = false,
  buttonBg = 'surfaceRaised',
  buttonColor = 'text',
  testID,
}) => {
  const canDecrement = !isDisabled && value - step >= min;
  const canIncrement = !isDisabled && value + step <= max;

  const decrement = () => canDecrement && onChange(clamp(value - step, min, max));
  const increment = () => canIncrement && onChange(clamp(value + step, min, max));

  return (
    <Row align="center" gap="s-3" testID={testID}>
      <Pressable
        onPress={decrement}
        bg={buttonBg}
        rounded="r-2"
        w={32}
        h={32}
        align="center"
        justify="center"
        style={{ opacity: canDecrement ? 1 : 0.4 }}
        accessibilityRole="button"
        accessibilityLabel="Decrease"
        testID={testID ? `${testID}-decrement` : undefined}
      >
        <Text variant="body" color={buttonColor}>
          −
        </Text>
      </Pressable>

      <Text variant="bodyMedium" testID={testID ? `${testID}-value` : undefined}>
        {value}
      </Text>

      <Pressable
        onPress={increment}
        bg={buttonBg}
        rounded="r-2"
        w={32}
        h={32}
        align="center"
        justify="center"
        style={{ opacity: canIncrement ? 1 : 0.4 }}
        accessibilityRole="button"
        accessibilityLabel="Increase"
        testID={testID ? `${testID}-increment` : undefined}
      >
        <Text variant="body" color={buttonColor}>
          +
        </Text>
      </Pressable>
    </Row>
  );
};

export const Stepper = memo(StepperComponent);
Stepper.displayName = 'Stepper';
