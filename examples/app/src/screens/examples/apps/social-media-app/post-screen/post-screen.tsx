import { useRoute } from '@react-navigation/native';
import { ArrowLeft, Bookmark, Heart, Send } from 'lucide-react-native';
import React, { useRef, useState } from 'react';
import { Image, ScrollView, TextInput, View } from 'react-native';

import { AppBar, Box, Col, IconButton, Pressable, Row, ScreenWrapper, Separator, Text } from 'vajra-ui';

import { TAppStackParamList } from '../../../../../navigation/navigation-types';
import { useAppNavigation } from '../../../../../navigation/use-app-navigation';
import { PostAvatar } from '../feed-screen/comps/post-avatar';
import { CommentsSection } from './sections/comments-section';

const POSTS = [
  { author: 'Rishav Jha', handle: '@rishav', time: '2m', avatarUrl: 'https://i.pravatar.cc/150?img=12', imageUrl: 'https://picsum.photos/seed/post1/600/400', content: 'Just shipped Vajra UI v1 — a token-driven React Native component library. Zero StyleSheet, pure tokens. The future of mobile UI is here.', likes: 142 },
  { author: 'Priya Sharma', handle: '@priya.design', time: '15m', avatarUrl: 'https://i.pravatar.cc/150?img=5', imageUrl: 'https://picsum.photos/seed/post2/600/400', content: 'Golden hour hits different when you find the perfect spot. Some moments are just meant to be captured.', likes: 891 },
  { author: 'Aryan Dev', handle: '@aryandev', time: '1h', avatarUrl: 'https://i.pravatar.cc/150?img=8', imageUrl: undefined, content: 'Hot take: design tokens are the most underrated concept in mobile dev. Once you get it, you can never go back.', likes: 203 },
  { author: 'Meera K', handle: '@meerak', time: '3h', avatarUrl: 'https://i.pravatar.cc/150?img=9', imageUrl: 'https://picsum.photos/seed/post4/600/400', content: 'Weekend escape. Nature always resets everything.', likes: 1204 },
];

export const SocialPostScreen: React.FC = () => {
  const navigation = useAppNavigation();
  const route = useRoute<{ key: string; name: 'ExSocialPost'; params: TAppStackParamList['ExSocialPost'] }>();
  const post = POSTS[route.params?.postIndex ?? 0] ?? POSTS[0];

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const commentInputRef = useRef<TextInput>(null);

  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} onPress={() => navigation.goBack()} />
        <AppBar.Title centered>Post</AppBar.Title>
        <IconButton icon={Send} variant="ghost" size="sm" onPress={() => navigation.navigate('ExChat')} />
      </AppBar.Header>
      <ScrollView>
        <Col>
          <Pressable onPress={() => navigation.navigate('ExSocialProfile', { username: post.author, avatarUrl: post.avatarUrl })} activeOpacity={0.8}>
            <Row align="center" justify="space-between" p="s-4">
              <Row align="center" gap="s-2">
                <PostAvatar imageUrl={post.avatarUrl} />
                <Col>
                  <Text variant="labelMedium">{post.author}</Text>
                  <Text variant="caption" color="textMuted">{post.handle} · {post.time}</Text>
                </Col>
              </Row>
              <Pressable onPress={() => setSaved(s => !s)} activeOpacity={0.7} hitSlop={8}>
                <Bookmark size={20} color={saved ? '#6366F1' : '#9CA3AF'} fill={saved ? '#6366F1' : 'none'} />
              </Pressable>
            </Row>
          </Pressable>

          {post.imageUrl && (
            <View style={{ width: '100%', height: 280 }}>
              <Image source={{ uri: post.imageUrl }} style={{ width: '100%', height: 280 }} resizeMode="cover" />
            </View>
          )}

          <Col p="s-4" gap="s-3">
            <Row gap="s-4" align="center">
              <Pressable onPress={() => setLiked(l => !l)} activeOpacity={0.7}>
                <Row align="center" gap="s-1">
                  <Heart size={22} color={liked ? '#E5193A' : '#9CA3AF'} fill={liked ? '#E5193A' : 'none'} />
                  <Text variant="labelMedium" color={liked ? 'error' : 'textMuted'}>{liked ? post.likes + 1 : post.likes}</Text>
                </Row>
              </Pressable>
              <Pressable onPress={() => commentInputRef.current?.focus()} activeOpacity={0.7}>
                <Text variant="caption" color="primary">Add comment</Text>
              </Pressable>
            </Row>

            <Text variant="body">{post.content}</Text>
            <Separator />
            <CommentsSection inputRef={commentInputRef} />
          </Col>
        </Col>
      </ScrollView>
    </ScreenWrapper>
  );
};
