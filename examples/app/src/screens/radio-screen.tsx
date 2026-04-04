import { ArrowLeft } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Box, Radio, ScreenWrapper, Text, TVajraColors } from 'vajra-ui';

const COLORS: TVajraColors[] = ['primary', 'secondary', 'error', 'success', 'warning'];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box gap="s-2">
      <Text variant="subheading">{title}</Text>
      {children}
    </Box>
  );
}

export function RadioScreen() {
  const [value, setValue] = useState('a');
  const [colorValue, setColorValue] = useState('a');

  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} />
        <AppBar.Title>Radio</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box flex={1} p="s-4" bg="background" gap="s-6">
          <Section title="Default">
            <Radio.Root value={value} onChange={setValue}>
              <Radio.Item value="a" label="Option A" />
              <Radio.Item value="b" label="Option B" />
              <Radio.Item value="c" label="Option C" />
            </Radio.Root>
          </Section>
          <Section title="Disabled Root">
            <Radio.Root value="a" onChange={() => {}} isDisabled>
              <Radio.Item value="a" label="Option A" />
              <Radio.Item value="b" label="Option B" />
            </Radio.Root>
          </Section>
          <Section title="Disabled Item">
            <Radio.Root value={value} onChange={setValue}>
              <Radio.Item value="a" label="Option A" />
              <Radio.Item value="b" label="Option B (disabled)" isDisabled />
              <Radio.Item value="c" label="Option C" />
            </Radio.Root>
          </Section>
          <Section title="Color Tokens">
            <Box gap="s-4">
              {COLORS.map(color => (
                <Box key={color} gap="s-1">
                  <Text variant="label" color="textMuted">{color}</Text>
                  <Radio.Root value={colorValue} onChange={setColorValue} color={color}>
                    <Radio.Item value="a" label="Option A" />
                    <Radio.Item value="b" label="Option B" />
                  </Radio.Root>
                </Box>
              ))}
            </Box>
          </Section>
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
}
