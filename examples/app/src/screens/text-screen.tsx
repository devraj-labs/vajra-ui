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

          <Text variant="h2">Custom Fonts</Text>

          <Text font="plusJakartaSans" fontWeight="200">Plus Jakarta Sans 200</Text>
          <Text font="plusJakartaSans" fontWeight="400">Plus Jakarta Sans 400</Text>
          <Text font="plusJakartaSans" fontWeight="700">Plus Jakarta Sans 700</Text>

          <Text font="manrope" fontWeight="300">Manrope 300</Text>
          <Text font="manrope" fontWeight="500">Manrope 500</Text>
          <Text font="manrope" fontWeight="800">Manrope 800</Text>

          <Text font="newsreader14pt" fontWeight="400">Newsreader 14pt 400</Text>
          <Text font="newsreader24pt" fontWeight="600">Newsreader 24pt 600</Text>
          <Text font="newsreader36pt" fontWeight="700">Newsreader 36pt 700</Text>
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
}
