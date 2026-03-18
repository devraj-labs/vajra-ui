import React from 'react';
import { ScrollView } from 'react-native';

import { Box, Card, Center, Text } from 'vajra-ui';

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

export function CardExample() {
  return (
    <ScrollView>
      <Box flex={1} p="s-4" bg="background" gap="s-6">
        <Section title="Default">
          <Card>
            <Text variant="body">Default card with p=s-4 and rounded=r-3</Text>
          </Card>
        </Section>

        <Section title="Padding">
          <Card p="s-2">
            <Text variant="body">p=s-2 (8px)</Text>
          </Card>
          <Card p="s-4">
            <Text variant="body">p=s-4 (16px)</Text>
          </Card>
          <Card p="s-6">
            <Text variant="body">p=s-6 (24px)</Text>
          </Card>
          <Card p="s-8">
            <Text variant="body">p=s-8 (32px)</Text>
          </Card>
        </Section>

        <Section title="Rounded">
          <Card rounded="r-0">
            <Text variant="body">rounded=r-0</Text>
          </Card>
          <Card rounded="r-1">
            <Text variant="body">rounded=r-1</Text>
          </Card>
          <Card rounded="r-2">
            <Text variant="body">rounded=r-2</Text>
          </Card>
          <Card rounded="r-3">
            <Text variant="body">rounded=r-3</Text>
          </Card>
          <Card rounded="r-4">
            <Text variant="body">rounded=r-4</Text>
          </Card>
          <Card rounded="r-6">
            <Text variant="body">rounded=r-6</Text>
          </Card>
          <Card rounded="r-full" h={72} bg="primary">
            <Center flex={1}>
              <Text variant="body">rounded=r-full</Text>
            </Center>
          </Card>
        </Section>

        <Section title="Margin">
          <Box bg="surfaceSunken" rounded="r-2">
            <Card m="s-2">
              <Text variant="body">m=s-2</Text>
            </Card>
          </Box>
          <Box bg="surfaceSunken" rounded="r-2">
            <Card m="s-4">
              <Text variant="body">m=s-4</Text>
            </Card>
          </Box>
          <Box bg="surfaceSunken" rounded="r-2">
            <Card mx="s-4" my="s-2">
              <Text variant="body">mx=s-4, my=s-2</Text>
            </Card>
          </Box>
        </Section>

        <Section title="Backgrounds">
          <Card bg="surface">
            <Text variant="body">bg=surface</Text>
          </Card>
          <Card bg="surfaceRaised">
            <Text variant="body">bg=surfaceRaised</Text>
          </Card>
          <Card bg="surfaceSunken">
            <Text variant="body">bg=surfaceSunken</Text>
          </Card>
          <Card bg="primary">
            <Text variant="body" color="textInverse">
              bg=primary
            </Text>
          </Card>
        </Section>

        <Section title="Bordered">
          <Card borderWidth={1} borderColor="border">
            <Text variant="body">border</Text>
          </Card>
          <Card borderWidth={1} borderColor="borderStrong">
            <Text variant="body">borderStrong</Text>
          </Card>
          <Card borderWidth={1} borderColor="primary">
            <Text variant="body">primary border</Text>
          </Card>
          <Card borderWidth={2} borderColor="primary" bg="primarySubtle">
            <Text variant="body">2px primary + primarySubtle bg</Text>
          </Card>
          <Card borderWidth={1} borderColor="error" bg="errorSubtle">
            <Text variant="body" color="error">
              error border + errorSubtle bg
            </Text>
          </Card>
          <Card borderWidth={1} borderColor="success" bg="successSubtle">
            <Text variant="body" color="success">
              success border + successSubtle bg
            </Text>
          </Card>
        </Section>
      </Box>
    </ScrollView>
  );
}
