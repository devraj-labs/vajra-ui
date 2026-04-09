import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Box, ScreenWrapper } from 'vajra-ui';

import { useAppNavigation } from '../../../../../navigation/use-app-navigation';
import { AlbumsSection } from './sections/albums-section';

export const MusicLibraryScreen: React.FC = () => {
  const navigation = useAppNavigation();

  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} onPress={() => navigation.goBack()} />
        <AppBar.Title centered>Library</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box p="s-4">
          <AlbumsSection />
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
};
