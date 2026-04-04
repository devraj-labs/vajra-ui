import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Box, Button, ScreenWrapper, Text } from 'vajra-ui';
import type { TButtonSize, TButtonVariant } from 'vajra-ui';

const VARIANTS: TButtonVariant[] = [
  'solid',
  'subtle',
  'surface',
  'outline',
  'ghost',
  'plain',
];
const SIZES: TButtonSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

function HScroll({ children }: { children: React.ReactNode }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Box direction="row" gap="s-2" py="s-1">
        {children}
      </Box>
    </ScrollView>
  );
}

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
            <HScroll>
              {VARIANTS.map(v => (
                <Button key={v} variant={v} label={v} />
              ))}
            </HScroll>
          </Section>
          <Section title="Sizes">
            <HScroll>
              {SIZES.map(s => (
                <Button key={s} size={s} label={`Button (${s})`} />
              ))}
            </HScroll>
          </Section>
          <Section title="Disabled">
            <HScroll>
              {VARIANTS.map(v => (
                <Button key={v} variant={v} label={v} isDisabled />
              ))}
            </HScroll>
          </Section>
          <Section title="Loading — start">
            <HScroll>
              {VARIANTS.map(v => (
                <Button
                  key={v}
                  variant={v}
                  label={v}
                  isLoading
                  loading={{ position: 'start' }}
                />
              ))}
            </HScroll>
          </Section>
          <Section title="Loading — end">
            <HScroll>
              {VARIANTS.map(v => (
                <Button
                  key={v}
                  variant={v}
                  label={v}
                  isLoading
                  loading={{ position: 'end' }}
                />
              ))}
            </HScroll>
          </Section>
          <Section title="Loading with label">
            <HScroll>
              {VARIANTS.map(v => (
                <Button
                  key={v}
                  variant={v}
                  label={v}
                  isLoading
                  loading={{ label: 'Saving...' }}
                />
              ))}
            </HScroll>
          </Section>
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
}
