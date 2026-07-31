import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { VajraProvider } from 'vajra-ui';

export default function ComponentPreview({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: 24, border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 8 }}>
      <SafeAreaProvider initialMetrics={{ frame: { x: 0, y: 0, width: 0, height: 0 }, insets: { top: 0, left: 0, right: 0, bottom: 0 } }}>
        <VajraProvider>{children}</VajraProvider>
      </SafeAreaProvider>
    </div>
  );
}
