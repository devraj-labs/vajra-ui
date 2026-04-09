import { ArrowLeft, MessageCircle, PlusSquare } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Box, Button, Col, IconButton, Pressable, Row, ScreenWrapper, Separator, TabBar, Text } from 'vajra-ui';

import { useAppTheme } from '../../../../../app-theme-context';
import { TThemePreset, THEME_PRESET_LABELS } from '../../../../../theme-presets';
import { useAppNavigation } from '../../../../../navigation/use-app-navigation';
import { PostCard } from '../feed-screen/comps/post-card';
import { StoriesSection } from './sections/stories-section';

const FEED_TABS = [
  { value: 'following', label: 'Following' },
  { value: 'explore', label: 'Explore' },
  { value: 'trending', label: 'Trending' },
];

const TAB_POSTS: Record<string, {
  author: string; handle: string; time: string; avatarUrl: string;
  imageUrl?: string; content: string; likes: number; comments: number; tag?: string;
}[]> = {
  following: [
    { author: 'Rishav Jha', handle: '@rishav', time: '2m', avatarUrl: 'https://i.pravatar.cc/150?img=12', imageUrl: 'https://picsum.photos/seed/post1/600/400', content: 'Just shipped Vajra UI v1 — a token-driven React Native component library. Zero StyleSheet, pure tokens.', likes: 142, comments: 23, tag: 'Dev' },
    { author: 'Priya Sharma', handle: '@priya.design', time: '15m', avatarUrl: 'https://i.pravatar.cc/150?img=5', imageUrl: 'https://picsum.photos/seed/post2/600/400', content: 'Golden hour hits different when you find the perfect spot.', likes: 891, comments: 64 },
    { author: 'Aryan Dev', handle: '@aryandev', time: '1h', avatarUrl: 'https://i.pravatar.cc/150?img=8', content: 'Hot take: design tokens are the most underrated concept in mobile dev. Your team will thank you in 6 months.', likes: 203, comments: 45, tag: 'Opinion' },
  ],
  explore: [
    { author: 'Sneha R', handle: '@sneha.r', time: '30m', avatarUrl: 'https://i.pravatar.cc/150?img=16', imageUrl: 'https://picsum.photos/seed/exp1/600/400', content: 'New city, new adventures. Every street has a story to tell.', likes: 2341, comments: 128 },
    { author: 'Karan M', handle: '@karanm', time: '2h', avatarUrl: 'https://i.pravatar.cc/150?img=7', imageUrl: 'https://picsum.photos/seed/exp2/600/400', content: 'Architecture that makes you stop and stare. Mumbai never disappoints.', likes: 1892, comments: 74 },
    { author: 'Divya S', handle: '@divyas', time: '4h', avatarUrl: 'https://i.pravatar.cc/150?img=20', imageUrl: 'https://picsum.photos/seed/exp3/600/400', content: 'Sunset from 3200m. Worth every step of the hike.', likes: 4102, comments: 201 },
  ],
  trending: [
    { author: 'Meera K', handle: '@meerak', time: '3h', avatarUrl: 'https://i.pravatar.cc/150?img=9', imageUrl: 'https://picsum.photos/seed/post4/600/400', content: 'Built an entire e-commerce app with Vajra UI today. Not a single StyleSheet.create call. I am a believer.', likes: 5820, comments: 312, tag: 'Dev' },
    { author: 'Vivek T', handle: '@vivekt', time: '5h', avatarUrl: 'https://i.pravatar.cc/150?img=11', imageUrl: 'https://picsum.photos/seed/trend2/600/400', content: 'This view never gets old. Some places just heal you from the inside.', likes: 8204, comments: 445 },
    { author: 'Nisha P', handle: '@nishap', time: '6h', avatarUrl: 'https://i.pravatar.cc/150?img=25', content: 'Switching from styled-components to Vajra UI tokens was the best decision we made this quarter. Ship speed doubled.', likes: 3401, comments: 188, tag: 'Opinion' },
  ],
};

const PRESETS: TThemePreset[] = ['teal', 'purple', 'orange', 'blue', 'pink', 'gold', 'crimson', 'cosmic'];

function ThemeSection() {
  const { preset, setPreset, colorScheme, setColorScheme } = useAppTheme();

  return (
    <Col gap="s-3">
      <Row align="center" justify="space-between">
        <Text variant="labelMedium">Theme</Text>
        <Row gap="s-2">
          <Button
            label="Light"
            size="xs"
            variant={colorScheme === 'light' ? 'solid' : 'outline'}
            onPress={() => setColorScheme('light')}
          />
          <Button
            label="Dark"
            size="xs"
            variant={colorScheme === 'dark' ? 'solid' : 'outline'}
            onPress={() => setColorScheme('dark')}
          />
        </Row>
      </Row>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Row gap="s-2">
          {PRESETS.map(p => (
            <Pressable key={p} onPress={() => setPreset(p)} activeOpacity={0.7}>
              <Col align="center" gap="s-1">
                <Box
                  w={36}
                  h={36}
                  rounded="r-full"
                  bg={preset === p ? 'primary' : 'border'}
                  borderWidth={2}
                  borderColor={preset === p ? 'primary' : 'border'}
                />
                <Text variant="caption" color={preset === p ? 'primary' : 'textMuted'}>
                  {THEME_PRESET_LABELS[p]}
                </Text>
              </Col>
            </Pressable>
          ))}
        </Row>
      </ScrollView>
    </Col>
  );
}

export const SocialHomeScreen: React.FC = () => {
  const navigation = useAppNavigation();
  const [activeTab, setActiveTab] = useState('following');

  const posts = TAB_POSTS[activeTab];

  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} onPress={() => navigation.goBack()} />
        <AppBar.Title centered>Vajra Social</AppBar.Title>
        <Box direction="row" gap="s-1">
          <IconButton icon={PlusSquare} variant="ghost" size="sm" onPress={() => {}} />
          <IconButton icon={MessageCircle} variant="ghost" size="sm" onPress={() => navigation.navigate('ExChat')} />
        </Box>
      </AppBar.Header>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Col gap="s-4" pb="s-6">
          <Box px="s-4" pt="s-4">
            <StoriesSection />
          </Box>

          <Separator />

          <Box px="s-4">
            <ThemeSection />
          </Box>

          <Separator />

          <Box px="s-4">
            <TabBar tabs={FEED_TABS} value={activeTab} onChange={setActiveTab} scrollable />
          </Box>

          <Col px="s-4" gap="s-3">
            {posts.map((post, i) => (
              <PostCard key={`${activeTab}-${i}`} {...post} postIndex={i} />
            ))}
          </Col>
        </Col>
      </ScrollView>
    </ScreenWrapper>
  );
};
