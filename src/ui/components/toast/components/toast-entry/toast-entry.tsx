import React, { memo, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import { ToastItem } from '../toast-item';
import { TOAST_DEFAULT_DURATION } from '../../toast-constants';
import { TToastEntryProps } from './toast-entry-types';

const ToastEntryComponent: React.FC<TToastEntryProps> = ({ entry, offset, onDismiss }) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    Animated.timing(opacity, { toValue: 1, duration: 150, useNativeDriver: true }).start();

    const duration = entry.duration ?? TOAST_DEFAULT_DURATION;
    if (duration > 0) {
      timerRef.current = setTimeout(onDismiss, duration);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // entry.id identifies this mount; the entry never changes identity while mounted.
  }, []);

  return (
    <Animated.View
      pointerEvents="box-none"
      style={{ opacity, marginTop: offset > 0 ? 8 : 0 }}
      testID="toast-container"
    >
      <ToastItem
        testID={`toast-${entry.id}`}
        message={entry.message}
        variant={entry.variant}
        icon={entry.icon}
        dismissible={entry.dismissible}
        onDismiss={onDismiss}
      />
    </Animated.View>
  );
};

export const ToastEntry = memo(ToastEntryComponent);
ToastEntry.displayName = 'ToastEntry';
