import React, { memo, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import { Box } from '../../core/box';
import { TSkeletonProps } from './skeleton-types';

const PULSE_MIN_OPACITY = 0.4;
const PULSE_MAX_OPACITY = 1;
const PULSE_DURATION = 700;

const SkeletonComponent: React.FC<TSkeletonProps> = ({
  w = '100%',
  h = 16,
  rounded = 'r-2',
  bg = 'surfaceRaised',
  testID,
}) => {
  const opacity = useRef(new Animated.Value(PULSE_MIN_OPACITY)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: PULSE_MAX_OPACITY,
          duration: PULSE_DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: PULSE_MIN_OPACITY,
          duration: PULSE_DURATION,
          useNativeDriver: true,
        }),
      ]),
    );

    loop.start();

    return () => loop.stop();
  }, [opacity]);

  return (
    <Animated.View style={{ opacity, width: w, height: h }} testID={testID}>
      <Box bg={bg} rounded={rounded} w="100%" h="100%" />
    </Animated.View>
  );
};

export const Skeleton = memo(SkeletonComponent);
Skeleton.displayName = 'Skeleton';
