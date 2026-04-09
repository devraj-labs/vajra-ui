import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Badge, Box, ScreenWrapper } from 'vajra-ui';

import { useAppNavigation } from '../../../../../navigation/use-app-navigation';
import { PostsSection } from './sections/posts-section';

export const FeedScreen: React.FC = () => {
  const navigation = useAppNavigation();

  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} onPress={() => navigation.goBack()} />
        <AppBar.Title centered>Feed</AppBar.Title>
        <Badge label="4 new" bg="primary" />
      </AppBar.Header>
      <ScrollView>
        <Box p="s-4">
          <PostsSection />
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
};
