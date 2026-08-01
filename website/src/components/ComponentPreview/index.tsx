import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { VajraProvider } from 'vajra-ui';
import styles from './styles.module.css';

export default function ComponentPreview({ children }: { children: React.ReactNode }) {
  const { colorMode } = useColorMode();

  return (
    <div className={styles.card}>
      <SafeAreaProvider
        initialMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <VajraProvider colorScheme={colorMode}>{children}</VajraProvider>
      </SafeAreaProvider>
    </div>
  );
}
