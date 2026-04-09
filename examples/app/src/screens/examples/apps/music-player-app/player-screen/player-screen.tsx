import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Box, ScreenWrapper } from 'vajra-ui';

import { useAppNavigation } from '../../../../../navigation/use-app-navigation';
import { NowPlayingCard } from './comps/now-playing-card';
import { QueueSection } from './sections/queue-section';

export const MusicPlayerScreen: React.FC = () => {
  const navigation = useAppNavigation();

  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} onPress={() => navigation.goBack()} />
        <AppBar.Title centered>Now Playing</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box p="s-4" gap="s-6">
          <NowPlayingCard title="Neon Lights" artist="Synthwave Collective" album="Retrowave Vol. 2" />
          <QueueSection />
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
};
