import { ArrowLeft, Heart, MoreVertical, Search } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Box, ScreenWrapper, Text } from 'vajra-ui';

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box gap="s-2">
      <Text variant="caption" color="textMuted">
        {title}
      </Text>
      <Box bg="surface">{children}</Box>
    </Box>
  );
}

export function AppBarScreen() {
  const [pressed, setPressed] = useState<string | null>(null);

  const handlePress = (label: string) => {
    setPressed(label);
    setTimeout(() => setPressed(null), 800);
  };

  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} />
        <AppBar.Title>App Bar</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box flex={1} bg="background" gap="s-6">
          {pressed && (
            <Box bg="surfaceRaised" px="s-3" py="s-2" rounded="r-2">
              <Text variant="caption" color="textMuted">
                Pressed: {pressed}
              </Text>
            </Box>
          )}
          <Section title="Title only">
            <AppBar.Header useSafeArea={false}>
              <AppBar.Title>Screen Title</AppBar.Title>
            </AppBar.Header>
          </Section>
          <Section title="Back + Title">
            <AppBar.Header useSafeArea={false} bg="info">
              <AppBar.BackAction
                icon={ArrowLeft}
                onPress={() => handlePress('back')}
              />
              <AppBar.Title>Screen Title</AppBar.Title>
            </AppBar.Header>
          </Section>
          <Section title="Back + Title (centered)">
            <AppBar.Header useSafeArea={false}>
              <AppBar.BackAction
                icon={ArrowLeft}
                onPress={() => handlePress('back')}
              />
              <AppBar.Title centered>Screen Title</AppBar.Title>
            </AppBar.Header>
          </Section>
          <Section title="Back + Centered Title + Action">
            <AppBar.Header useSafeArea={false}>
              <AppBar.BackAction
                icon={ArrowLeft}
                onPress={() => handlePress('back')}
              />
              <AppBar.Title centered>Screen Title</AppBar.Title>
              <AppBar.IconButton
                icon={Search}
                onPress={() => handlePress('search')}
                accessibilityLabel="Search"
              />
            </AppBar.Header>
          </Section>
          <Section title="Back + Centered Title + Multiple Actions">
            <AppBar.Header useSafeArea={false}>
              <AppBar.BackAction
                icon={ArrowLeft}
                onPress={() => handlePress('back')}
              />
              <AppBar.Title centered>Screen Title</AppBar.Title>
              <AppBar.IconButton
                icon={Heart}
                onPress={() => handlePress('favourite')}
                accessibilityLabel="Favourite"
              />
              <AppBar.IconButton
                icon={MoreVertical}
                onPress={() => handlePress('more')}
                accessibilityLabel="More options"
              />
            </AppBar.Header>
          </Section>
          <Section title="Title + Actions (no back)">
            <AppBar.Header useSafeArea={false}>
              <AppBar.Title>Inbox</AppBar.Title>
              <AppBar.IconButton
                icon={Search}
                onPress={() => handlePress('search')}
                accessibilityLabel="Search"
              />
              <AppBar.IconButton
                icon={MoreVertical}
                onPress={() => handlePress('more')}
                accessibilityLabel="More options"
              />
            </AppBar.Header>
          </Section>
          <Section title="Long title truncation (centered)">
            <AppBar.Header useSafeArea={false}>
              <AppBar.BackAction
                icon={ArrowLeft}
                onPress={() => handlePress('back')}
              />
              <AppBar.Title centered>
                This Is A Very Long Screen Title That Should Truncate
              </AppBar.Title>
              <AppBar.IconButton
                icon={MoreVertical}
                onPress={() => handlePress('more')}
                accessibilityLabel="More options"
              />
            </AppBar.Header>
          </Section>
          <Section title="Custom height">
            <AppBar.Header useSafeArea={false} height={72}>
              <AppBar.BackAction
                icon={ArrowLeft}
                onPress={() => handlePress('back')}
              />
              <AppBar.Title centered>Tall AppBar (72px)</AppBar.Title>
            </AppBar.Header>
          </Section>
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
}
