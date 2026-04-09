import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Box, Button, Col, ScreenWrapper, Text } from 'vajra-ui';

import { useAppNavigation } from '../../../../../navigation/use-app-navigation';
import { FeaturesSection } from './sections/features-section';

export const OnboardingWelcomeScreen: React.FC = () => {
  const navigation = useAppNavigation();

  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} onPress={() => navigation.goBack()} />
        <AppBar.Title centered>Onboarding</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box p="s-4" gap="s-8">
          <Col align="center" gap="s-3" py="s-8">
            <Box w={80} h={80} rounded="r-3" bg="primary" align="center" justify="center">
              <Text variant="h1">⚡️</Text>
            </Box>
            <Col align="center" gap="s-1">
              <Text variant="h2">Welcome to Vajra</Text>
              <Text variant="body" color="textMuted" style={{ textAlign: 'center' }}>
                The token-driven React Native{'\n'}component library.
              </Text>
            </Col>
          </Col>
          <FeaturesSection />
          <Button label="Get Started" variant="solid" onPress={() => {}} />
          <Button label="I already have an account" variant="ghost" onPress={() => {}} />
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
};
