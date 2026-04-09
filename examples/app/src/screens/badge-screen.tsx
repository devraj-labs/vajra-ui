import { ArrowLeft, Star, Zap } from 'lucide-react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Badge, Box, ScreenWrapper, Text } from 'vajra-ui';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box gap="s-2">
      <Text variant="subheading">{title}</Text>
      {children}
    </Box>
  );
}

export function BadgeScreen() {
  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} />
        <AppBar.Title>Badge</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box flex={1} p="s-4" bg="background" gap="s-6">
          <Section title="Colors">
            <Box direction="row" wrap="wrap" gap="s-2">
              <Badge label="Primary" bg="primary" />
              <Badge label="Secondary" bg="secondary" />
              <Badge label="Success" bg="success" textProps={{ color: 'textInverse' }} />
              <Badge label="Error" bg="error" />
              <Badge label="Warning" bg="warning" textProps={{ color: 'text' }} />
              <Badge label="Info" bg="info" />
            </Box>
          </Section>

          <Section title="Subtle variants">
            <Box direction="row" wrap="wrap" gap="s-2">
              <Badge label="Primary" bg="primarySubtle" textProps={{ color: 'primary' }} />
              <Badge label="Secondary" bg="secondarySubtle" textProps={{ color: 'secondary' }} />
              <Badge label="Success" bg="successSubtle" textProps={{ color: 'success' }} />
              <Badge label="Error" bg="errorSubtle" textProps={{ color: 'error' }} />
              <Badge label="Warning" bg="warningSubtle" textProps={{ color: 'warning' }} />
              <Badge label="Info" bg="infoSubtle" textProps={{ color: 'info' }} />
            </Box>
          </Section>

          <Section title="Rounded">
            <Box direction="row" wrap="wrap" gap="s-2">
              <Badge label="r-0" rounded="r-0" />
              <Badge label="r-1" rounded="r-1" />
              <Badge label="r-2" rounded="r-2" />
              <Badge label="r-3" rounded="r-3" />
              <Badge label="r-4" rounded="r-4" />
              <Badge label="r-6" rounded="r-6" />
              <Badge label="r-full" rounded="r-full" />
            </Box>
          </Section>

          <Section title="Rounded per side">
            <Box direction="row" wrap="wrap" gap="s-2">
              <Badge label="Top" roundedT="r-3" rounded="r-0" />
              <Badge label="Bottom" roundedB="r-3" rounded="r-0" />
              <Badge label="Left" roundedL="r-3" rounded="r-0" />
              <Badge label="Right" roundedR="r-3" rounded="r-0" />
            </Box>
          </Section>

          <Section title="Padding">
            <Box direction="row" wrap="wrap" gap="s-2">
              <Badge label="px=s-1 py=s-0" px="s-1" py="s-0" />
              <Badge label="px=s-2 py=s-1" px="s-2" py="s-1" />
              <Badge label="px=s-4 py=s-2" px="s-4" py="s-2" />
              <Badge label="px=s-6 py=s-3" px="s-6" py="s-3" />
            </Box>
          </Section>

          <Section title="Text variants">
            <Box direction="row" wrap="wrap" gap="s-2">
              <Badge label="label" textProps={{ variant: 'label' }} />
              <Badge label="caption" textProps={{ variant: 'caption' }} />
              <Badge label="bodySmall" textProps={{ variant: 'bodySmall' }} />
            </Box>
          </Section>

          <Section title="With icon">
            <Box direction="row" wrap="wrap" gap="s-2">
              <Badge label="Featured" icon={Star} bg="primary" />
              <Badge label="Live" icon={Zap} bg="successSubtle" textProps={{ color: 'success' }} iconColor="success" />
            </Box>
          </Section>

          <Section title="Surface">
            <Box direction="row" wrap="wrap" gap="s-2">
              <Badge label="Surface" bg="surface" textProps={{ color: 'text' }} />
              <Badge label="SurfaceRaised" bg="surfaceRaised" textProps={{ color: 'text' }} />
              <Badge label="Border" bg="border" textProps={{ color: 'text' }} />
            </Box>
          </Section>
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
}
