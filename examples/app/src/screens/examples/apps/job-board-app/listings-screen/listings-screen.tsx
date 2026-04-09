import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Box, ScreenWrapper } from 'vajra-ui';

import { useAppNavigation } from '../../../../../navigation/use-app-navigation';
import { JobsSection } from './sections/jobs-section';

export const JobListingsScreen: React.FC = () => {
  const navigation = useAppNavigation();

  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} onPress={() => navigation.goBack()} />
        <AppBar.Title centered>Job Board</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box p="s-4">
          <JobsSection />
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
};
