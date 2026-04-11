import React, { memo, useEffect, useRef } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';

import { useVajraTheme } from '../../vajra-theme/use-vajra-theme';
import { TIconSwitchProps } from './icon-switch-types';

const INSET = 3;

const IconSwitchComponent: React.FC<TIconSwitchProps> = ({
  value,
  onChange,
  offIcon: OffIcon,
  onIcon: OnIcon,
  trackBg = 'surfaceRaised',
  trackRounded = 'r-3',
  selectorBg = 'surface',
  selectorRounded = 'r-2',
  activeIconColor = 'text',
  inactiveIconColor = 'textMuted',
  isDisabled = false,
  cellSize = 40,
  iconSize = 18,
}) => {
  const { colors, rounded: r } = useVajraTheme();
  const selectorX = useRef(new Animated.Value(value ? cellSize : 0)).current;

  useEffect(() => {
    Animated.spring(selectorX, {
      toValue: value ? cellSize : 0,
      useNativeDriver: true,
      bounciness: 4,
    }).start();
  }, [value, selectorX, cellSize]);

  const trackSize = cellSize * 2 + INSET * 2;

  return (
    <TouchableOpacity
      onPress={() => !isDisabled && onChange(!value)}
      activeOpacity={0.85}
      disabled={isDisabled}
      style={{ opacity: isDisabled ? 0.4 : 1 }}
    >
      <View
        style={{
          width: trackSize,
          height: cellSize + INSET * 2,
          borderRadius: r[trackRounded],
          backgroundColor: colors[trackBg],
          padding: INSET,
          flexDirection: 'row',
          position: 'relative',
        }}
      >
        {/* Sliding selector box */}
        <Animated.View
          style={{
            position: 'absolute',
            top: INSET,
            left: INSET,
            width: cellSize,
            height: cellSize,
            borderRadius: r[selectorRounded],
            backgroundColor: colors[selectorBg],
            transform: [{ translateX: selectorX }],
          }}
        />

        {/* Off icon cell */}
        <View
          style={{
            width: cellSize,
            height: cellSize,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <OffIcon
            size={iconSize}
            width={iconSize}
            height={iconSize}
            color={!value ? colors[activeIconColor] : colors[inactiveIconColor]}
          />
        </View>

        {/* On icon cell */}
        <View
          style={{
            width: cellSize,
            height: cellSize,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <OnIcon
            size={iconSize}
            width={iconSize}
            height={iconSize}
            color={value ? colors[activeIconColor] : colors[inactiveIconColor]}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const IconSwitch = memo(IconSwitchComponent);
IconSwitch.displayName = 'IconSwitch';
