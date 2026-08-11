import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { VajraProvider } from 'vajra-ui';
import styles from './styles.module.css';

type TComponentPreviewProps = {
  children: React.ReactNode;
  /**
   * Components that render their own absolutely-positioned overlay (Toast)
   * need real empty space to appear in — the default card is barely taller
   * than its trigger content, so the overlay lands on top of it. This grows
   * the card and stacks content from the top instead of centering it.
   */
  tall?: boolean;
};

export default function ComponentPreview({ children, tall = false }: TComponentPreviewProps) {
  const { colorMode } = useColorMode();

  return (
    <div className={tall ? `${styles.card} ${styles.tall}` : styles.card}>
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
