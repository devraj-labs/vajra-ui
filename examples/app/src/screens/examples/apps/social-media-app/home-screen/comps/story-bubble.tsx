import React, { memo } from 'react';
import { Image, View } from 'react-native';

import { Box, Col, Pressable, Text } from 'vajra-ui';
import { TVajraColors } from 'vajra-ui';

import { useAppNavigation } from '../../../../../../navigation/use-app-navigation';

type TStoryBubbleProps = { name: string; imageUrl: string; ringColor?: TVajraColors; isOwn?: boolean };

export const StoryBubble = memo<TStoryBubbleProps>(({ name, imageUrl, ringColor = 'primary', isOwn = false }) => {
  const navigation = useAppNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('ExSocialStory', { name })} activeOpacity={0.8}>
      <Col align="center" gap="s-1">
        <Box w={68} h={68} rounded="r-full" borderWidth={2} borderColor={isOwn ? 'border' : ringColor} align="center" justify="center">
          <View style={{ width: 60, height: 60, borderRadius: 30, overflow: 'hidden' }}>
            <Image source={{ uri: imageUrl }} style={{ width: 60, height: 60 }} resizeMode="cover" />
          </View>
        </Box>
        <Text variant="caption" color="textMuted" numberOfLines={1} style={{ maxWidth: 68, textAlign: 'center' }}>
          {isOwn ? 'Your Story' : name}
        </Text>
      </Col>
    </Pressable>
  );
});
