import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { Box, Switch, Text } from 'vajra-ui';
import { TColorToken } from 'vajra-ui/ui/vajra-theme/tokens/colors/types';

const COLORS: TColorToken[] = ['primary', 'secondary', 'error', 'success', 'warning'];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box gap="s-2">
      <Text variant="subheading">{title}</Text>
      {children}
    </Box>
  );
}

export function SwitchExample() {
  const [value, setValue] = useState('wifi');
  const [colorValue, setColorValue] = useState('a');

  return (
    <ScrollView>
      <Box flex={1} p="s-4" bg="background" gap="s-6">

        <Section title="Default">
          <Switch.Root value={value} onChange={setValue}>
            <Switch.Item value="wifi" label="Wi-Fi" />
            <Switch.Item value="bluetooth" label="Bluetooth" />
            <Switch.Item value="airplane" label="Airplane Mode" />
          </Switch.Root>
        </Section>

        <Section title="Disabled Root">
          <Switch.Root value="wifi" onChange={() => {}} isDisabled>
            <Switch.Item value="wifi" label="Wi-Fi" />
            <Switch.Item value="bluetooth" label="Bluetooth" />
          </Switch.Root>
        </Section>

        <Section title="Disabled Item">
          <Switch.Root value={value} onChange={setValue}>
            <Switch.Item value="wifi" label="Wi-Fi" />
            <Switch.Item value="bluetooth" label="Bluetooth (disabled)" isDisabled />
            <Switch.Item value="airplane" label="Airplane Mode" />
          </Switch.Root>
        </Section>

        <Section title="Color Tokens">
          <Box gap="s-4">
            {COLORS.map(color => (
              <Box key={color} gap="s-1">
                <Text variant="label" color="textMuted">{color}</Text>
                <Switch.Root value={colorValue} onChange={setColorValue} color={color}>
                  <Switch.Item value="a" label="Option A" />
                  <Switch.Item value="b" label="Option B" />
                </Switch.Root>
              </Box>
            ))}
          </Box>
        </Section>

      </Box>
    </ScrollView>
  );
}
