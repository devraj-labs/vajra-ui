import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Box, ScreenWrapper } from 'vajra-ui';

import { useAppNavigation } from '../../../../../navigation/use-app-navigation';
import { ArticleHeader } from './comps/article-header';
import { ArticleBodySection } from './sections/article-body-section';

export const NewsArticleScreen: React.FC = () => {
  const navigation = useAppNavigation();

  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} onPress={() => navigation.goBack()} />
        <AppBar.Title centered>Article</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box p="s-4" gap="s-4">
          <ArticleHeader
            title="React Native 0.74 ships new architecture by default"
            source="Tech Crunch"
            time="1h ago"
            category="Tech"
          />
          <ArticleBodySection />
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
};
