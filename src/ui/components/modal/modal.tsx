import React, { memo, useEffect, useRef } from 'react';
import { Animated, Modal as RNModal, Pressable as RNPressable, StyleSheet } from 'react-native';

import { Box } from '../../core/box';
import { useVajraTheme } from '../../vajra-theme/use-vajra-theme';
import { TModalProps } from './modal-types';

const ModalComponent: React.FC<TModalProps> = ({
  isVisible,
  onClose,
  children,
  closeOnBackdropPress = true,
  bg = 'surface',
  rounded = 'r-4',
  p = 's-4',
  backdropColor = 'overlay',
  testID,
}) => {
  const { colors } = useVajraTheme();
  const backdropOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(backdropOpacity, {
      toValue: isVisible ? 1 : 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }, [isVisible, backdropOpacity]);

  return (
    <RNModal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      testID={testID}
    >
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: colors[backdropColor],
          opacity: backdropOpacity,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <RNPressable
          style={StyleSheet.absoluteFill}
          onPress={closeOnBackdropPress ? onClose : undefined}
          accessibilityLabel="Close"
          testID={testID ? `${testID}-backdrop` : undefined}
        />
        <Box bg={bg} rounded={rounded} p={p} testID={testID ? `${testID}-content` : undefined}>
          {children}
        </Box>
      </Animated.View>
    </RNModal>
  );
};

export const Modal = memo(ModalComponent);
Modal.displayName = 'Modal';
