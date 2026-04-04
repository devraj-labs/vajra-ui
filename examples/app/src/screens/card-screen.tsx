import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import {
  AppBar,
  Box,
  Card,
  Center,
  ScreenWrapper,
  Text,
} from 'vajra-ui';

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

export function CardScreen() {
  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} />
        <AppBar.Title>Card</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box flex={1} p="s-4" bg="background" gap="s-6">
          <Section title="Default">
            <Card>
              <Text variant="body">Default card</Text>
            </Card>
          </Section>
          <Section title="Padding">
            <Card p="s-2">
              <Text variant="body">p=s-2</Text>
            </Card>
            <Card p="s-4">
              <Text variant="body">p=s-4</Text>
            </Card>
            <Card p="s-6">
              <Text variant="body">p=s-6</Text>
            </Card>
            <Card p="s-8">
              <Text variant="body">p=s-8</Text>
            </Card>
          </Section>
          <Section title="Rounded">
            <Card rounded="r-0">
              <Text variant="body">r-0</Text>
            </Card>
            <Card rounded="r-1">
              <Text variant="body">r-1</Text>
            </Card>
            <Card rounded="r-2">
              <Text variant="body">r-2</Text>
            </Card>
            <Card rounded="r-3">
              <Text variant="body">r-3</Text>
            </Card>
            <Card rounded="r-4">
              <Text variant="body">r-4</Text>
            </Card>
            <Card rounded="r-6">
              <Text variant="body">r-6</Text>
            </Card>
            <Card rounded="r-full" h={72} bg="primary">
              <Center flex={1}>
                <Text variant="body">r-full</Text>
              </Center>
            </Card>
          </Section>
          <Section title="Backgrounds">
            <Card bg="surface">
              <Text variant="body">surface</Text>
            </Card>
            <Card bg="surfaceRaised">
              <Text variant="body">surfaceRaised</Text>
            </Card>
            <Card bg="surfaceSunken">
              <Text variant="body">surfaceSunken</Text>
            </Card>
            <Card bg="primary">
              <Text variant="body" color="textInverse">
                primary
              </Text>
            </Card>
          </Section>
          <Section title="Bordered">
            <Card borderWidth={1} borderColor="border">
              <Text variant="body">border</Text>
            </Card>
            <Card borderWidth={1} borderColor="primary">
              <Text variant="body">primary border</Text>
            </Card>
            <Card borderWidth={1} borderColor="error" bg="errorSubtle">
              <Text variant="body" color="error">
                error
              </Text>
            </Card>
            <Card borderWidth={1} borderColor="success" bg="successSubtle">
              <Text variant="body" color="success">
                success
              </Text>
            </Card>
          </Section>
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
}
