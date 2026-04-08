import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Box, Button, BUTTON_SIZES, BUTTON_VARIANTS, ScreenWrapper, Text } from 'vajra-ui';

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

export function ButtonScreen() {
  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} />
        <AppBar.Title>Button</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box flex={1} p="s-4" bg="background" gap="s-6">
          <Section title="Variants">
            {BUTTON_VARIANTS.map(v => (
              <Button key={v} variant={v} label={v} />
            ))}
          </Section>
          <Section title="Sizes">
            {BUTTON_SIZES.map(s => (
              <Button key={s} size={s} label={`Button (${s})`} />
            ))}
          </Section>
          <Section title="Disabled">
            {BUTTON_VARIANTS.map(v => (
              <Button key={v} variant={v} label={v} isDisabled />
            ))}
          </Section>
          <Section title="Loading — start">
            {BUTTON_VARIANTS.map(v => (
              <Button
                key={v}
                variant={v}
                label={v}
                isLoading
                loading={{ position: 'start' }}
              />
            ))}
          </Section>
          <Section title="Loading — end">
            {BUTTON_VARIANTS.map(v => (
              <Button
                key={v}
                variant={v}
                label={v}
                isLoading
                loading={{ position: 'end' }}
              />
            ))}
          </Section>
          <Section title="Loading with label">
            {BUTTON_VARIANTS.map(v => (
              <Button
                key={v}
                variant={v}
                label={v}
                isLoading
                loading={{ label: 'Saving...' }}
              />
            ))}
          </Section>
          <Section title="Pill">
            {BUTTON_VARIANTS.map(v => (
              <Button key={v} variant={v} label={v} isPill />
            ))}
          </Section>
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
}
