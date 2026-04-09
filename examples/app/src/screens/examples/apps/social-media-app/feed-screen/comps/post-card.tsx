import { Bookmark, Heart, MessageCircle, MoreHorizontal, Send } from 'lucide-react-native';
import React, { memo, useState } from 'react';
import { ActionSheetIOS, Alert, Image, Platform, View } from 'react-native';

import { Badge, Card, Col, IconButton, Pressable, Row, Separator, Text } from 'vajra-ui';

import { useAppNavigation } from '../../../../../../navigation/use-app-navigation';
import { PostAvatar } from './post-avatar';

type TPostCardProps = {
  author: string;
  handle: string;
  time: string;
  content: string;
  imageUrl?: string;
  avatarUrl: string;
  likes: number;
  comments: number;
  tag?: string;
  postIndex: number;
};

const showPostActions = (author: string) => {
  const options = ['Report', 'Unfollow ' + author, 'Copy link', 'Cancel'];
  if (Platform.OS === 'ios') {
    ActionSheetIOS.showActionSheetWithOptions(
      { options, cancelButtonIndex: 3, destructiveButtonIndex: 0 },
      () => {},
    );
  } else {
    Alert.alert('Post options', undefined, [
      { text: 'Report', style: 'destructive', onPress: () => {} },
      { text: `Unfollow ${author}`, onPress: () => {} },
      { text: 'Copy link', onPress: () => {} },
      { text: 'Cancel', style: 'cancel' },
    ]);
  }
};

export const PostCard = memo<TPostCardProps>(({ author, handle, time, content, imageUrl, avatarUrl, likes, comments, tag, postIndex }) => {
  const navigation = useAppNavigation();
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <Card rounded="r-3" borderWidth={1} borderColor="border">
      <Pressable onPress={() => navigation.navigate('ExSocialProfile', { username: author, avatarUrl })} activeOpacity={0.8}>
        <Row align="center" justify="space-between" p="s-2">
          <Row align="center" gap="s-2">
            <PostAvatar imageUrl={avatarUrl} />
            <Col>
              <Row align="center" gap="s-2">
                <Text variant="labelMedium">{author}</Text>
                {tag && <Badge label={tag} bg="primarySubtle" textProps={{ color: 'primary' }} />}
              </Row>
              <Text variant="caption" color="textMuted">{handle} · {time}</Text>
            </Col>
          </Row>
          <IconButton icon={MoreHorizontal} variant="ghost" size="sm" onPress={() => showPostActions(author)} />
        </Row>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('ExSocialPost', { postIndex })} activeOpacity={0.97}>
        {imageUrl && (
          <View style={{ width: '100%', height: 220 }}>
            <Image source={{ uri: imageUrl }} style={{ width: '100%', height: 220 }} resizeMode="cover" />
          </View>
        )}
      </Pressable>

      <Col p="s-2" gap="s-2">
        <Text variant="body">{content}</Text>
        <Separator />
        <Row justify="space-between" align="center">
          <Row gap="s-4">
            <Pressable onPress={() => setLiked(l => !l)} activeOpacity={0.7} hitSlop={8}>
              <Row align="center" gap="s-1">
                <Heart size={18} color={liked ? '#E5193A' : '#9CA3AF'} fill={liked ? '#E5193A' : 'none'} />
                <Text variant="caption" color={liked ? 'error' : 'textMuted'}>{liked ? likes + 1 : likes}</Text>
              </Row>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('ExSocialPost', { postIndex })} activeOpacity={0.7} hitSlop={8}>
              <Row align="center" gap="s-1">
                <MessageCircle size={18} color="#9CA3AF" />
                <Text variant="caption" color="textMuted">{comments}</Text>
              </Row>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('ExSocialPost', { postIndex })} activeOpacity={0.7} hitSlop={8}>
              <Row align="center" gap="s-1">
                <Send size={18} color="#9CA3AF" />
                <Text variant="caption" color="textMuted">Share</Text>
              </Row>
            </Pressable>
          </Row>
          <Pressable onPress={() => setSaved(s => !s)} activeOpacity={0.7} hitSlop={8}>
            <Bookmark size={18} color={saved ? '#6366F1' : '#9CA3AF'} fill={saved ? '#6366F1' : 'none'} />
          </Pressable>
        </Row>
      </Col>
    </Card>
  );
});
