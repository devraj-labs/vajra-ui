import React, { memo, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import { Alert } from '../../alert';
import { TAlertEntryProps } from './alert-entry-types';

const AlertEntryComponent: React.FC<TAlertEntryProps> = ({ entry, offset, onDismiss }) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    Animated.timing(opacity, { toValue: 1, duration: 150, useNativeDriver: true }).start();

    const duration = entry.duration ?? 0;
    if (duration > 0) {
      timerRef.current = setTimeout(onDismiss, duration);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // entry.id identifies this mount; the entry never changes identity while mounted.
  }, []);

  return (
    <Animated.View pointerEvents="box-none" style={{ opacity, marginTop: offset > 0 ? 8 : 0 }}>
      <Alert
        testID={`alert-${entry.id}`}
        message={entry.message}
        title={entry.title}
        variant={entry.variant}
        icon={entry.icon}
        dismissIcon={entry.dismissIcon}
        onDismiss={onDismiss}
      />
    </Animated.View>
  );
};

export const AlertEntry = memo(AlertEntryComponent);
AlertEntry.displayName = 'AlertEntry';
