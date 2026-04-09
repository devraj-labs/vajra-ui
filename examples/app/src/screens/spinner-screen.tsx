import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Box, ScreenWrapper, Spinner, Text } from 'vajra-ui';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box gap="s-2">
      <Text variant="subheading">{title}</Text>
      {children}
    </Box>
  );
}

export function SpinnerScreen() {
  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} />
        <AppBar.Title>Spinner</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box flex={1} p="s-4" bg="background" gap="s-6">
          <Section title="Sizes">
            <Box direction="row" align="center" gap="s-4">
              <Spinner size="xs" />
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
              <Spinner size="xl" />
            </Box>
          </Section>

          <Section title="Colors">
            <Box direction="row" align="center" gap="s-4">
              <Spinner color="primary" />
              <Spinner color="secondary" />
              <Spinner color="success" />
              <Spinner color="error" />
              <Spinner color="warning" />
              <Spinner color="info" />
            </Box>
          </Section>
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
}
