import React, { memo, useRef, useState } from 'react';
import { Animated, LayoutChangeEvent, PanResponder } from 'react-native';

import { Box } from '../../core/box';
import { useVajraTheme } from '../../vajra-theme/use-vajra-theme';
import { clamp, snapToStep } from './slider-utils';
import { TSliderProps } from './slider-types';

const SliderComponent: React.FC<TSliderProps> = ({
  value,
  onChange,
  onSlidingComplete,
  min = 0,
  max = 100,
  step = 1,
  isDisabled = false,
  trackHeight = 4,
  thumbSize = 20,
  trackColor = 'surfaceRaised',
  fillColor = 'primary',
  thumbColor = 'primary',
  testID,
}) => {
  const { colors } = useVajraTheme();
  const [trackWidth, setTrackWidth] = useState(0);
  const valueRef = useRef(value);

  valueRef.current = value;

  const handleTrackLayout = (event: LayoutChangeEvent) => {
    setTrackWidth(event.nativeEvent.layout.width);
  };

  const positionToValue = (locationX: number) => {
    const usableWidth = Math.max(1, trackWidth - thumbSize);
    const ratio = clamp(locationX / usableWidth, 0, 1);

    return clamp(snapToStep(min + ratio * (max - min), min, step), min, max);
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => !isDisabled,
      onMoveShouldSetPanResponder: () => !isDisabled,
      onPanResponderMove: (event, gesture) => {
        const usableWidth = Math.max(1, trackWidth - thumbSize);
        const currentRatio = (valueRef.current - min) / (max - min);
        const startX = currentRatio * usableWidth;
        const nextValue = positionToValue(startX + gesture.dx);

        onChange(nextValue);
      },
      onPanResponderRelease: () => {
        onSlidingComplete?.(valueRef.current);
      },
    }),
  ).current;

  const ratio = max === min ? 0 : clamp((value - min) / (max - min), 0, 1);
  const usableWidth = Math.max(0, trackWidth - thumbSize);
  const thumbOffset = ratio * usableWidth;

  return (
    <Box
      onLayout={handleTrackLayout}
      justify="center"
      style={{ height: Math.max(trackHeight, thumbSize), opacity: isDisabled ? 0.5 : 1 }}
      testID={testID}
    >
      <Box bg={trackColor} rounded="r-full" style={{ height: trackHeight }} />
      <Box
        bg={fillColor}
        rounded="r-full"
        style={{
          position: 'absolute',
          height: trackHeight,
          width: thumbOffset + thumbSize / 2,
        }}
      />
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          position: 'absolute',
          left: thumbOffset,
          width: thumbSize,
          height: thumbSize,
          borderRadius: thumbSize / 2,
          backgroundColor: colors[thumbColor],
        }}
        testID={testID ? `${testID}-thumb` : undefined}
        accessibilityRole="adjustable"
        accessibilityValue={{ min, max, now: value }}
      />
    </Box>
  );
};

export const Slider = memo(SliderComponent);
Slider.displayName = 'Slider';
