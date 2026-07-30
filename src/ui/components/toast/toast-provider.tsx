import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Platform, StatusBar } from 'react-native';

import { ToastItem } from './components/toast-item';
import { ToastContextProvider } from './toast-context';
import { TOAST_DEFAULT_DURATION } from './toast-constants';
import { TToastEntry, TToastOptions, TToastProviderProps } from './toast-types';

let nextId = 0;
const generateId = () => {
  nextId += 1;

  return `toast-${nextId}`;
};

const ToastProviderComponent: React.FC<TToastProviderProps> = ({
  children,
  position = 'bottom',
}) => {
  const [queue, setQueue] = useState<TToastEntry[]>([]);
  const opacity = useRef(new Animated.Value(0)).current;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const current = queue[0];

  const hide = useCallback((id: string) => {
    setQueue(prev => prev.filter(entry => entry.id !== id));
  }, []);

  const show = useCallback((options: TToastOptions | string) => {
    const normalized: TToastOptions = typeof options === 'string' ? { message: options } : options;
    const id = generateId();

    setQueue(prev => [...prev, { ...normalized, id }]);

    return id;
  }, []);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (!current) {
      Animated.timing(opacity, { toValue: 0, duration: 150, useNativeDriver: true }).start();

      return;
    }

    Animated.timing(opacity, { toValue: 1, duration: 150, useNativeDriver: true }).start();

    const duration = current.duration ?? TOAST_DEFAULT_DURATION;
    if (duration > 0) {
      timerRef.current = setTimeout(() => hide(current.id), duration);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, hide, opacity]);

  return (
    <ToastContextProvider value={{ show, hide }}>
      {children}
      {current && (
        <Animated.View
          pointerEvents="none"
          style={{
            position: 'absolute',
            left: 16,
            right: 16,
            opacity,
            ...(position === 'top'
              ? { top: (Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) : 0) + 16 }
              : { bottom: 32 }),
          }}
          testID="toast-container"
        >
          <ToastItem
            testID={`toast-${current.id}`}
            message={current.message}
            variant={current.variant}
          />
        </Animated.View>
      )}
    </ToastContextProvider>
  );
};

export const ToastProvider = memo(ToastProviderComponent);
ToastProvider.displayName = 'ToastProvider';
