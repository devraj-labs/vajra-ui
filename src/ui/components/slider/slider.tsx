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
  const gestureStartXRef = useRef(0);

  // PanResponder.create's config closure is captured once (see the useRef
  // below) and never recreated, so its callbacks must read current props via
  // refs rather than closing over them directly — otherwise they'd keep
  // using whatever trackWidth/min/max/etc. were in scope on first render
  // (trackWidth is 0 until onLayout fires), silently breaking all the drag
  // math no matter how correct it looks in isolation.
  const configRef = useRef({
    min,
    max,
    step,
    thumbSize,
    trackWidth,
    isDisabled,
    onChange,
    onSlidingComplete,
  });

  configRef.current = {
    min,
    max,
    step,
    thumbSize,
    trackWidth,
    isDisabled,
    onChange,
    onSlidingComplete,
  };

  valueRef.current = value;

  const handleTrackLayout = (event: LayoutChangeEvent) => {
    setTrackWidth(event.nativeEvent.layout.width);
  };

  const positionToValue = (locationX: number) => {
    const {
      min: curMin,
      max: curMax,
      step: curStep,
      thumbSize: curThumbSize,
      trackWidth: curTrackWidth,
    } = configRef.current;
    const usableWidth = Math.max(1, curTrackWidth - curThumbSize);
    const ratio = clamp(locationX / usableWidth, 0, 1);

    return clamp(snapToStep(curMin + ratio * (curMax - curMin), curMin, curStep), curMin, curMax);
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => !configRef.current.isDisabled,
      onMoveShouldSetPanResponder: () => !configRef.current.isDisabled,
      onPanResponderGrant: () => {
        const {
          min: curMin,
          max: curMax,
          thumbSize: curThumbSize,
          trackWidth: curTrackWidth,
        } = configRef.current;
        const usableWidth = Math.max(1, curTrackWidth - curThumbSize);
        const currentRatio = (valueRef.current - curMin) / (curMax - curMin);

        gestureStartXRef.current = currentRatio * usableWidth;
      },
      onPanResponderMove: (event, gesture) => {
        const nextValue = positionToValue(gestureStartXRef.current + gesture.dx);

        configRef.current.onChange(nextValue);
      },
      onPanResponderRelease: () => {
        configRef.current.onSlidingComplete?.(valueRef.current);
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
