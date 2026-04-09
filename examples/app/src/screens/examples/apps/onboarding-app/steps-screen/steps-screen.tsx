import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Box, ScreenWrapper } from 'vajra-ui';

import { useAppNavigation } from '../../../../../navigation/use-app-navigation';
import { StepContentSection } from './sections/step-content-section';

export const OnboardingStepsScreen: React.FC = () => {
  const navigation = useAppNavigation();

  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} onPress={() => navigation.goBack()} />
        <AppBar.Title centered>Step 2 of 3</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box p="s-4">
          <StepContentSection />
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
};
