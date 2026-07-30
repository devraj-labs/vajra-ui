import React, { memo, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import { Box } from '../../core/box';
import { useVajraTheme } from '../../vajra-theme/use-vajra-theme';
import { TProgressBarProps } from './progress-bar-types';

const clamp = (value: number) => Math.min(1, Math.max(0, value));

const ProgressBarComponent: React.FC<TProgressBarProps> = ({
  value,
  height = 8,
  trackColor = 'surfaceRaised',
  fillColor = 'primary',
  rounded = 'r-full',
  animated = true,
  testID,
}) => {
  const { colors, rounded: r } = useVajraTheme();
  const clamped = clamp(value);
  const widthPercent = useRef(new Animated.Value(clamped * 100)).current;

  useEffect(() => {
    if (!animated) {
      widthPercent.setValue(clamped * 100);

      return;
    }

    Animated.timing(widthPercent, {
      toValue: clamped * 100,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [clamped, animated, widthPercent]);

  return (
    <Box
      bg={trackColor}
      rounded={rounded}
      style={{ height, overflow: 'hidden' }}
      testID={testID}
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: Math.round(clamped * 100) }}
    >
      <Animated.View
        style={{
          height: '100%',
          width: widthPercent.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', '100%'],
          }),
          backgroundColor: colors[fillColor],
          borderRadius: r[rounded],
        }}
        testID={testID ? `${testID}-fill` : undefined}
      />
    </Box>
  );
};

export const ProgressBar = memo(ProgressBarComponent);
ProgressBar.displayName = 'ProgressBar';
