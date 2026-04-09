import { ArrowLeft, Edit3 } from 'lucide-react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Box, IconButton, ScreenWrapper } from 'vajra-ui';

import { useAppNavigation } from '../../../../../navigation/use-app-navigation';
import { ConversationsSection } from './sections/conversations-section';

export const ChatInboxScreen: React.FC = () => {
  const navigation = useAppNavigation();

  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} onPress={() => navigation.goBack()} />
        <AppBar.Title centered>Messages</AppBar.Title>
        <IconButton icon={Edit3} variant="ghost" size="sm" onPress={() => {}} />
      </AppBar.Header>
      <ScrollView>
        <Box p="s-4">
          <ConversationsSection />
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
};
