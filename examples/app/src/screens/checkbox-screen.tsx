import { ArrowLeft } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Box, Checkbox, ScreenWrapper, Text } from 'vajra-ui';
import { TVajraColors } from 'vajra-ui/ui/vajra-theme/colors';

const COLORS: TVajraColors[] = [
  'primary',
  'secondary',
  'error',
  'success',
  'warning',
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box gap="s-2">
      <Text variant="subheading">{title}</Text>
      {children}
    </Box>
  );
}

export function CheckboxScreen() {
  const [values, setValues] = useState<string[]>(['a']);
  const [colorValues, setColorValues] = useState<string[]>(['a']);

  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} />
        <AppBar.Title>Checkbox</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box flex={1} p="s-4" bg="background" gap="s-6">
          <Section title="Default">
            <Checkbox.Root values={values} onChange={setValues}>
              <Checkbox.Item value="a" label="Option A" />
              <Checkbox.Item value="b" label="Option B" />
              <Checkbox.Item value="c" label="Option C" />
            </Checkbox.Root>
          </Section>
          <Section title="Disabled Root">
            <Checkbox.Root values={['a']} onChange={() => {}} isDisabled>
              <Checkbox.Item value="a" label="Option A" />
              <Checkbox.Item value="b" label="Option B" />
            </Checkbox.Root>
          </Section>
          <Section title="Disabled Item">
            <Checkbox.Root values={values} onChange={setValues}>
              <Checkbox.Item value="a" label="Option A" />
              <Checkbox.Item value="b" label="Option B (disabled)" isDisabled />
              <Checkbox.Item value="c" label="Option C" />
            </Checkbox.Root>
          </Section>
          <Section title="Color Tokens">
            <Box gap="s-4">
              {COLORS.map(color => (
                <Box key={color} gap="s-1">
                  <Text variant="label" color="textMuted">
                    {color}
                  </Text>
                  <Checkbox.Root
                    values={colorValues}
                    onChange={setColorValues}
                    color={color}
                  >
                    <Checkbox.Item value="a" label="Option A" />
                    <Checkbox.Item value="b" label="Option B" />
                  </Checkbox.Root>
                </Box>
              ))}
            </Box>
          </Section>
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
}
