import React, { memo, useEffect, useRef, useState } from 'react';
import { Animated, LayoutChangeEvent } from 'react-native';

import { Pressable } from '../../../../core/pressable';
import { Row } from '../../../../core/row';
import { Text } from '../../../../core/text';
import { useVajraTheme } from '../../../../vajra-theme/use-vajra-theme';
import { useAccordionContext } from '../../accordion-context';
import { TAccordionItemProps } from '../../accordion-types';

const ANIMATION_DURATION = 200;

const AccordionItemComponent: React.FC<TAccordionItemProps> = ({
  value,
  title,
  children,
  isDisabled = false,
  testID,
  icon: Icon,
}) => {
  const { openValues, toggle } = useAccordionContext();
  const { colors } = useVajraTheme();
  const isOpen = openValues.includes(value);

  const [contentHeight, setContentHeight] = useState<number | null>(null);
  const animatedHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (contentHeight === null) return;

    Animated.timing(animatedHeight, {
      toValue: isOpen ? contentHeight : 0,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
    }).start();
  }, [isOpen, contentHeight, animatedHeight]);

  const handleContentLayout = (event: LayoutChangeEvent) => {
    const measured = event.nativeEvent.layout.height;
    if (measured !== contentHeight) setContentHeight(measured);
  };

  return (
    <>
      <Pressable
        onPress={() => !isDisabled && toggle(value)}
        py="s-3"
        style={{ opacity: isDisabled ? 0.5 : 1 }}
        testID={testID}
        accessibilityRole="button"
        accessibilityState={{ expanded: isOpen, disabled: isDisabled }}
      >
        <Row align="center" justify="space-between">
          <Text variant="bodyMedium">{title}</Text>
          {Icon ? (
            <Row style={{ transform: [{ rotate: isOpen ? '180deg' : '0deg' }] }}>
              <Icon size={16} width={16} height={16} color={colors.textMuted} />
            </Row>
          ) : (
            <Text variant="label" color="textMuted">
              {isOpen ? '▲' : '▼'}
            </Text>
          )}
        </Row>
      </Pressable>

      <Animated.View style={{ height: animatedHeight, overflow: 'hidden' }}>
        <Animated.View
          onLayout={handleContentLayout}
          style={contentHeight === null ? undefined : { position: 'absolute', width: '100%' }}
        >
          {children}
        </Animated.View>
      </Animated.View>
    </>
  );
};

export const AccordionItem = memo(AccordionItemComponent);
AccordionItem.displayName = 'AccordionItem';
