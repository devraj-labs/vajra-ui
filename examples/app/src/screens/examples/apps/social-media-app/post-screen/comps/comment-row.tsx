import { Heart } from 'lucide-react-native';
import React, { memo, useState } from 'react';
import { Image, View } from 'react-native';

import { Box, Col, Pressable, Row, Text } from 'vajra-ui';

type TCommentRowProps = { author: string; avatarUrl: string; text: string; time: string; likes: number; onReply?: () => void };

export const CommentRow = memo<TCommentRowProps>(({ author, avatarUrl, text, time, likes, onReply }) => {
  const [liked, setLiked] = useState(false);

  return (
    <Row align="flex-start" gap="s-3">
      <Box w={32} h={32} rounded="r-full" borderWidth={1} borderColor="borderSubtle">
        <View style={{ width: 30, height: 30, borderRadius: 15, overflow: 'hidden' }}>
          <Image source={{ uri: avatarUrl }} style={{ width: 30, height: 30 }} resizeMode="cover" />
        </View>
      </Box>
      <Col flex={1} gap="s-1">
        <Row gap="s-2" align="center">
          <Text variant="labelMedium">{author}</Text>
          <Text variant="caption" color="textMuted">{time}</Text>
        </Row>
        <Text variant="body">{text}</Text>
        <Pressable onPress={onReply} activeOpacity={0.7} hitSlop={8}>
          <Text variant="caption" color="primary">Reply</Text>
        </Pressable>
      </Col>
      <Pressable onPress={() => setLiked(l => !l)} activeOpacity={0.7}>
        <Col align="center" gap="s-1">
          <Heart size={14} color={liked ? '#E5193A' : '#9CA3AF'} fill={liked ? '#E5193A' : 'none'} />
          <Text variant="caption" color="textMuted">{liked ? likes + 1 : likes}</Text>
        </Col>
      </Pressable>
    </Row>
  );
});
