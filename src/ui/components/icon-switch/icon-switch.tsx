import React, { memo, useEffect, useRef } from 'react';
import { Animated, TouchableOpacity } from 'react-native';

import { useVajraTheme } from '../../vajra-theme/use-vajra-theme';
import { TIconSwitchProps } from './icon-switch-types';

const THUMB_INSET = 3;

const IconSwitchComponent: React.FC<TIconSwitchProps> = ({
  value,
  onChange,
  offIcon: OffIcon,
  onIcon: OnIcon,
  trackOnColor = 'primary',
  trackOffColor = 'border',
  thumbColor = 'surface',
  iconOnColor = 'primary',
  iconOffColor = 'textMuted',
  isDisabled = false,
  trackWidth = 56,
  trackHeight = 30,
}) => {
  const { colors } = useVajraTheme();
  const thumbSize = trackHeight - THUMB_INSET * 2;
  const thumbOn = trackWidth - thumbSize - THUMB_INSET;
  const thumbOff = THUMB_INSET;

  const anim = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.spring(anim, {
      toValue: value ? 1 : 0,
      useNativeDriver: false,
      bounciness: 4,
    }).start();
  }, [value, anim]);

  const translateX = anim.interpolate({ inputRange: [0, 1], outputRange: [thumbOff, thumbOn] });
  const trackBg = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [colors[trackOffColor], colors[trackOnColor]],
  });

  const iconSize = Math.round(thumbSize * 0.55);
  const CurrentIcon = value ? OnIcon : OffIcon;
  const iconColor = value ? colors[iconOnColor] : colors[iconOffColor];

  return (
    <TouchableOpacity
      onPress={() => !isDisabled && onChange(!value)}
      activeOpacity={0.85}
      disabled={isDisabled}
      style={{ opacity: isDisabled ? 0.4 : 1 }}
    >
      <Animated.View
        style={{
          width: trackWidth,
          height: trackHeight,
          borderRadius: trackHeight / 2,
          backgroundColor: trackBg,
          justifyContent: 'center',
        }}
      >
        <Animated.View
          style={{
            width: thumbSize,
            height: thumbSize,
            borderRadius: thumbSize / 2,
            backgroundColor: colors[thumbColor],
            transform: [{ translateX }],
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {CurrentIcon && <CurrentIcon size={iconSize} color={iconColor} />}
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export const IconSwitch = memo(IconSwitchComponent);
IconSwitch.displayName = 'IconSwitch';
