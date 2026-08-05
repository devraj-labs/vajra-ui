import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { VajraProvider, Box, Text, useVajraTheme, TVajraColors } from 'vajra-ui';
import styles from './styles.module.css';

const Swatch = ({ token }: { token: TVajraColors }) => {
  const { colors } = useVajraTheme();

  return (
    <Box align="center" gap="s-1" w={92}>
      <Box bg={token} w={56} h={56} rounded="r-2" borderColor="border" borderWidth={1} />
      <Text variant="label" style={{ textAlign: 'center' }}>
        {token}
      </Text>
      <Text variant="label" color="textMuted" style={{ textAlign: 'center' }}>
        {colors[token]}
      </Text>
    </Box>
  );
};

export default function ColorSwatches({ tokens }: { tokens: TVajraColors[] }) {
  const { colorMode } = useColorMode();

  return (
    <div className={styles.wrapper}>
      <SafeAreaProvider
        initialMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <VajraProvider colorScheme={colorMode}>
          <Box direction="row" wrap="wrap" gap="s-4">
            {tokens.map(token => (
              <Swatch key={token} token={token} />
            ))}
          </Box>
        </VajraProvider>
      </SafeAreaProvider>
    </div>
  );
}
