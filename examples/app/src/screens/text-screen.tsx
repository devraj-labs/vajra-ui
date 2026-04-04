import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Box, ScreenWrapper, Text } from 'vajra-ui';
import type { TTextProps } from 'vajra-ui';

const VARIANTS: NonNullable<TTextProps['variant']>[] = [
  'display', 'h1', 'h2', 'h3', 'subheading', 'button',
  'bodyMedium', 'body', 'bodySmall', 'caption', 'labelMedium', 'label',
];

export function TextScreen() {
  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} />
        <AppBar.Title>Text</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box flex={1} p="s-4" bg="background" gap="s-4">
          {VARIANTS.map(v => <Text key={v} variant={v}>{v}</Text>)}
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
}
