import React, { memo, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import { TVajraColors } from '../../../../vajra-theme/colors';
import { useVajraTheme } from '../../../../vajra-theme';

const TRACK_W = 44;
const TRACK_H = 24;
const THUMB_SIZE = 18;
const THUMB_OFF = 3;
const THUMB_ON = TRACK_W - THUMB_SIZE - THUMB_OFF;

type TSwitchIndicatorProps = {
  isSelected: boolean;
  isDisabled: boolean;
  color?: TVajraColors;
};

const SwitchIndicatorComponent: React.FC<TSwitchIndicatorProps> = ({
  isSelected,
  isDisabled,
  color = 'primary',
}) => {
  const { colors } = useVajraTheme();
  const anim = useRef(new Animated.Value(isSelected ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: isSelected ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [isSelected, anim]);

  const translateX = anim.interpolate({ inputRange: [0, 1], outputRange: [THUMB_OFF, THUMB_ON] });
  const trackColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.border, colors[color]],
  });

  return (
    <Animated.View
      style={{
        width: TRACK_W,
        height: TRACK_H,
        borderRadius: TRACK_H / 2,
        backgroundColor: trackColor,
        justifyContent: 'center',
        opacity: isDisabled ? 0.4 : 1,
      }}
    >
      <Animated.View
        style={{
          width: THUMB_SIZE,
          height: THUMB_SIZE,
          borderRadius: THUMB_SIZE / 2,
          backgroundColor: colors.surface,
          transform: [{ translateX }],
        }}
      />
    </Animated.View>
  );
};

export const SwitchIndicator = memo(SwitchIndicatorComponent);
SwitchIndicator.displayName = 'SwitchIndicator';
