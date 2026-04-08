import { ArrowLeft, Bell, Heart, Lock, Shield, Star, Zap } from 'lucide-react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Box, IconBox, ScreenWrapper, Text } from 'vajra-ui';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box gap="s-2">
      <Text variant="subheading">{title}</Text>
      {children}
    </Box>
  );
}

export function IconBoxScreen() {
  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} />
        <AppBar.Title>Icon Box</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box flex={1} p="s-4" bg="background" gap="s-6">
          <Section title="Default">
            <Box direction="row" gap="s-3">
              <IconBox icon={Bell} />
            </Box>
          </Section>

          <Section title="Icon & background colors">
            <Box direction="row" wrap="wrap" gap="s-3">
              <IconBox icon={Bell} iconColor="primary" bg="primarySubtle" />
              <IconBox icon={Shield} iconColor="success" bg="successSubtle" />
              <IconBox icon={Zap} iconColor="warning" bg="warningSubtle" />
              <IconBox icon={Heart} iconColor="error" bg="errorSubtle" />
              <IconBox icon={Star} iconColor="info" bg="infoSubtle" />
              <IconBox icon={Lock} iconColor="secondary" bg="secondarySubtle" />
            </Box>
          </Section>

          <Section title="Solid backgrounds">
            <Box direction="row" wrap="wrap" gap="s-3">
              <IconBox icon={Bell} iconColor="textInverse" bg="primary" />
              <IconBox icon={Shield} iconColor="textInverse" bg="success" />
              <IconBox icon={Zap} iconColor="text" bg="warning" />
              <IconBox icon={Heart} iconColor="textInverse" bg="error" />
            </Box>
          </Section>

          <Section title="Rounded">
            <Box direction="row" wrap="wrap" gap="s-3">
              <IconBox icon={Bell} rounded="r-0" />
              <IconBox icon={Bell} rounded="r-1" />
              <IconBox icon={Bell} rounded="r-2" />
              <IconBox icon={Bell} rounded="r-3" />
              <IconBox icon={Bell} rounded="r-4" />
              <IconBox icon={Bell} rounded="r-full" />
            </Box>
          </Section>

          <Section title="Sizes">
            <Box direction="row" wrap="wrap" gap="s-3" align="flex-end">
              <IconBox icon={Bell} iconSize={12} w={32} h={32} />
              <IconBox icon={Bell} iconSize={16} w={40} h={40} />
              <IconBox icon={Bell} iconSize={20} w={48} h={48} />
              <IconBox icon={Bell} iconSize={24} w={56} h={56} />
              <IconBox icon={Bell} iconSize={28} w={64} h={64} />
            </Box>
          </Section>
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
}
