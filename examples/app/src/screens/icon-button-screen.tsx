import { ArrowLeft, StarIcon } from 'lucide-react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Box, IconButton, ICON_BUTTON_SIZES, ICON_BUTTON_VARIANTS, ScreenWrapper, Text } from 'vajra-ui';

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

export function IconButtonScreen() {
  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} />
        <AppBar.Title>Icon Button</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box flex={1} p="s-4" bg="background" gap="s-6">
          <Section title="Variants">
            <HScroll>
              {ICON_BUTTON_VARIANTS.map(v => (
                <IconButton key={v} variant={v} icon={StarIcon} />
              ))}
            </HScroll>
          </Section>
          <Section title="Sizes">
            <HScroll>
              {ICON_BUTTON_SIZES.map(s => (
                <IconButton key={s} size={s} icon={StarIcon} />
              ))}
            </HScroll>
          </Section>
          <Section title="Disabled">
            <HScroll>
              {ICON_BUTTON_VARIANTS.map(v => (
                <IconButton key={v} variant={v} icon={StarIcon} isDisabled />
              ))}
            </HScroll>
          </Section>
          <Section title="Loading">
            <HScroll>
              {ICON_BUTTON_VARIANTS.map(v => (
                <IconButton key={v} variant={v} icon={StarIcon} isLoading />
              ))}
            </HScroll>
          </Section>
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
}
