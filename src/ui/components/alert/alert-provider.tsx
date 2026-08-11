import React, { memo, useCallback, useState } from 'react';
import { Animated, Platform, StatusBar } from 'react-native';

import { useVajraTheme } from '../../vajra-theme/use-vajra-theme';
import { AlertEntry } from './components/alert-entry';
import { AlertContextProvider } from './alert-context';
import { TAlertEntry, TAlertOptions, TAlertProviderProps } from './alert-types';

let nextId = 0;
const generateId = () => {
  nextId += 1;

  return `alert-${nextId}`;
};

const AlertProviderComponent: React.FC<TAlertProviderProps> = ({
  children,
  position = 'top',
  maxVisible,
}) => {
  const { alert } = useVajraTheme();
  const resolvedMaxVisible = maxVisible ?? alert.maxVisible;
  const [queue, setQueue] = useState<TAlertEntry[]>([]);

  const hide = useCallback((id: string) => {
    setQueue(prev => prev.filter(entry => entry.id !== id));
  }, []);

  const show = useCallback((options: TAlertOptions | string) => {
    const normalized: TAlertOptions = typeof options === 'string' ? { message: options } : options;
    const id = generateId();

    setQueue(prev => [...prev, { ...normalized, id }]);

    return id;
  }, []);

  // Oldest-first in the queue; render newest closest to the edge the stack
  // grows from (top-anchored: newest at the top; bottom-anchored: newest
  // at the bottom), so reverse only for the bottom case.
  const visible = queue.slice(0, resolvedMaxVisible);
  const ordered = position === 'top' ? visible : [...visible].reverse();

  return (
    <AlertContextProvider value={{ show, hide }}>
      {children}
      {ordered.length > 0 && (
        <Animated.View
          pointerEvents="box-none"
          style={{
            position: 'absolute',
            left: 16,
            right: 16,
            ...(position === 'top'
              ? { top: (Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) : 0) + 16 }
              : { bottom: 32 }),
          }}
        >
          {ordered.map((entry, index) => (
            <AlertEntry
              key={entry.id}
              entry={entry}
              offset={index}
              onDismiss={() => hide(entry.id)}
            />
          ))}
        </Animated.View>
      )}
    </AlertContextProvider>
  );
};

export const AlertProvider = memo(AlertProviderComponent);
AlertProvider.displayName = 'AlertProvider';
