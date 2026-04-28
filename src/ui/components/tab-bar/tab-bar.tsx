import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Animated, LayoutChangeEvent, ScrollView, TouchableOpacity, View } from 'react-native';

import { useVajraTheme } from '../../vajra-theme/use-vajra-theme';
import { resolveSpacing } from '../../utils/spacing-props';
import { Text } from '../../core/text';
import { TTabBarProps } from './tab-bar-types';

const TabBarComponent: React.FC<TTabBarProps> = ({
  tabs,
  value,
  onChange,
  trackBg = 'surfaceRaised',
  trackRounded = 'r-full',
  trackPadding = 's-1',
  indicatorBg = 'surface',
  indicatorRounded = 'r-full',
  activeColor = 'text',
  inactiveColor = 'textMuted',
  labelProps,
  scrollable = false,
}) => {
  const { colors, rounded: r, spacing: spacingTokens } = useVajraTheme();
  const { p: pad } = resolveSpacing({ p: trackPadding }, spacingTokens);
  const padding = pad ?? 0;

  const [tabLayouts, setTabLayouts] = useState<Record<string, { x: number; width: number }>>({});
  const indicatorX = useRef(new Animated.Value(0)).current;
  const indicatorW = useRef(new Animated.Value(0)).current;
  const prevValue = useRef<string | null>(null);

  const handleLayout = useCallback(
    (tabValue: string, e: LayoutChangeEvent) => {
      const { x, width } = e.nativeEvent.layout;

      setTabLayouts(prev => {
        const next = { ...prev, [tabValue]: { x, width } };

        if (tabValue === value) {
          const layout = next[tabValue];

          if (prevValue.current === null) {
            indicatorX.setValue(layout.x);
            indicatorW.setValue(layout.width);
          } else {
            Animated.parallel([
              Animated.spring(indicatorX, {
                toValue: layout.x,
                useNativeDriver: false,
                bounciness: 0,
              }),
              Animated.spring(indicatorW, {
                toValue: layout.width,
                useNativeDriver: false,
                bounciness: 0,
              }),
            ]).start();
          }

          prevValue.current = tabValue;
        }

        return next;
      });
    },
    [value, indicatorX, indicatorW],
  );

  useEffect(() => {
    const layout = tabLayouts[value];

    if (!layout) {
      return;
    }

    if (prevValue.current === null) {
      indicatorX.setValue(layout.x);
      indicatorW.setValue(layout.width);
      prevValue.current = value;

      return;
    }

    Animated.parallel([
      Animated.spring(indicatorX, { toValue: layout.x, useNativeDriver: false, bounciness: 0 }),
      Animated.spring(indicatorW, { toValue: layout.width, useNativeDriver: false, bounciness: 0 }),
    ]).start();

    prevValue.current = value;
  }, [value, tabLayouts, indicatorX, indicatorW]);

  const track = (
    <View
      style={{
        flex: 1,
        backgroundColor: colors[trackBg],
        borderRadius: r[trackRounded],
        padding,
        flexDirection: 'row',
        position: 'relative',
      }}
    >
      {/* Sliding indicator */}
      <Animated.View
        style={{
          position: 'absolute',
          top: padding,
          left: 0,
          bottom: padding,
          width: indicatorW,
          transform: [{ translateX: indicatorX }],
          backgroundColor: colors[indicatorBg],
          borderRadius: r[indicatorRounded],
        }}
      />

      {tabs.map(tab => {
        const isActive = tab.value === value;

        return (
          <TouchableOpacity
            key={tab.value}
            onPress={() => onChange(tab.value)}
            onLayout={e => handleLayout(tab.value, e)}
            style={{
              flex: scrollable ? undefined : 1,
              alignSelf: 'stretch',
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 12,
              zIndex: 1,
            }}
            activeOpacity={0.8}
          >
            <Text variant="label" color={isActive ? activeColor : inactiveColor} {...labelProps}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  if (scrollable) {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces={false}>
        {track}
      </ScrollView>
    );
  }

  return track;
};

export const TabBar = memo(TabBarComponent);
TabBar.displayName = 'TabBar';
