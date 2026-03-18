import React from 'react';
import { ScrollView } from 'react-native';

import { Box, Text } from 'vajra-ui';
import type { TTextProps } from 'vajra-ui';

const VARIANTS: NonNullable<TTextProps['variant']>[] = [
  'display',
  'h1',
  'h2',
  'h3',
  'subheading',
  'button',
  'bodyMedium',
  'body',
  'bodySmall',
  'caption',
  'labelMedium',
  'label',
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box gap="s-2">
      <Text variant="subheading">{title}</Text>
      {children}
    </Box>
  );
}

export function TextExample() {
  return (
    <ScrollView>
      <Box flex={1} p="s-4" bg="background" gap="s-6">

        <Section title="All Variants">
          {VARIANTS.map(v => (
            <Text key={v} variant={v}>{v}</Text>
          ))}
        </Section>

      </Box>
    </ScrollView>
  );
}
