import React from 'react';
import { ScrollView } from 'react-native';

import { Col, Pressable, Row, Text } from 'vajra-ui';
import { TVajraColors } from 'vajra-ui';

import { useAppNavigation } from '../../../../../../navigation/use-app-navigation';
import { StoryBubble } from '../comps/story-bubble';

type TStory = { name: string; imageUrl: string; ringColor: TVajraColors; isOwn?: boolean };

const STORIES: TStory[] = [
  { name: 'You', imageUrl: 'https://i.pravatar.cc/150?img=12', ringColor: 'border', isOwn: true },
  { name: 'Priya', imageUrl: 'https://i.pravatar.cc/150?img=5', ringColor: 'primary' },
  { name: 'Aryan', imageUrl: 'https://i.pravatar.cc/150?img=8', ringColor: 'secondary' },
  { name: 'Meera', imageUrl: 'https://i.pravatar.cc/150?img=9', ringColor: 'success' },
  { name: 'Vivek', imageUrl: 'https://i.pravatar.cc/150?img=11', ringColor: 'warning' },
  { name: 'Sneha', imageUrl: 'https://i.pravatar.cc/150?img=16', ringColor: 'info' },
];

export const StoriesSection: React.FC = () => {
  const navigation = useAppNavigation();

  return (
    <Col gap="s-3">
      <Row align="center" justify="space-between">
        <Text variant="labelMedium">Stories</Text>
        <Pressable onPress={() => navigation.navigate('ExSocialStory', { name: 'Priya' })} activeOpacity={0.7} hitSlop={8}>
          <Text variant="caption" color="primary">See all</Text>
        </Pressable>
      </Row>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Row gap="s-4">
          {STORIES.map(s => (
            <StoryBubble key={s.name} {...s} />
          ))}
        </Row>
      </ScrollView>
    </Col>
  );
};
