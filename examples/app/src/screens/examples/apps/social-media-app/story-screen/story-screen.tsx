import { useRoute } from '@react-navigation/native';
import { X } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { Animated, Image, Pressable, View } from 'react-native';

import { Box, Col, IconButton, Row, Text } from 'vajra-ui';

import { TAppStackParamList } from '../../../../../navigation/navigation-types';
import { useAppNavigation } from '../../../../../navigation/use-app-navigation';

const STORY_DURATION = 3000;

const STORY_IMAGES: Record<string, string[]> = {
  Priya: ['https://picsum.photos/seed/s1a/400/700', 'https://picsum.photos/seed/s1b/400/700'],
  Aryan: ['https://picsum.photos/seed/s2a/400/700'],
  Meera: ['https://picsum.photos/seed/s3a/400/700', 'https://picsum.photos/seed/s3b/400/700'],
  Vivek: ['https://picsum.photos/seed/s4a/400/700'],
  Sneha: ['https://picsum.photos/seed/s5a/400/700', 'https://picsum.photos/seed/s5b/400/700'],
  You: ['https://picsum.photos/seed/s0a/400/700'],
};

const STORY_AVATARS: Record<string, string> = {
  Priya: 'https://i.pravatar.cc/150?img=5',
  Aryan: 'https://i.pravatar.cc/150?img=8',
  Meera: 'https://i.pravatar.cc/150?img=9',
  Vivek: 'https://i.pravatar.cc/150?img=11',
  Sneha: 'https://i.pravatar.cc/150?img=16',
  You: 'https://i.pravatar.cc/150?img=12',
};

export const StoryScreen: React.FC = () => {
  const navigation = useAppNavigation();
  const route = useRoute<{ key: string; name: 'ExSocialStory'; params: TAppStackParamList['ExSocialStory'] }>();
  const { name } = route.params;

  const images = STORY_IMAGES[name] ?? STORY_IMAGES['You'];
  const avatar = STORY_AVATARS[name] ?? STORY_AVATARS['You'];

  const [index, setIndex] = useState(0);
  const progress = useState(() => new Animated.Value(0))[0];

  useEffect(() => {
    progress.setValue(0);
    const anim = Animated.timing(progress, {
      toValue: 1,
      duration: STORY_DURATION,
      useNativeDriver: false,
    });
    anim.start(({ finished }) => {
      if (finished) {
        if (index < images.length - 1) {
          setIndex(i => i + 1);
        } else {
          navigation.goBack();
        }
      }
    });
    return () => anim.stop();
  }, [index]);

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <Image source={{ uri: images[index] }} style={{ flex: 1 }} resizeMode="cover" />

      {/* Progress bars */}
      <Box style={{ position: 'absolute', top: 52, left: 0, right: 0 }} px="s-3">
        <Row gap="s-1">
          {images.map((_, i) => (
            <Box key={i} flex={1} h={2} rounded="r-full" bg="overlayLight">
              {i === index && (
                <Animated.View
                  style={{
                    height: 2,
                    borderRadius: 4,
                    backgroundColor: 'white',
                    width: progress.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] }),
                  }}
                />
              )}
              {i < index && (
                <Box h={2} rounded="r-full" bg="textInverse" />
              )}
            </Box>
          ))}
        </Row>
      </Box>

      {/* Header */}
      <Row style={{ position: 'absolute', top: 62, left: 0, right: 0 }} px="s-4" align="center" justify="space-between">
        <Row align="center" gap="s-2">
          <View style={{ width: 36, height: 36, borderRadius: 18, overflow: 'hidden', borderWidth: 2, borderColor: 'white' }}>
            <Image source={{ uri: avatar }} style={{ width: 36, height: 36 }} resizeMode="cover" />
          </View>
          <Col>
            <Text variant="labelMedium" color="textInverse">{name}</Text>
            <Text variant="caption" color="textInverse">just now</Text>
          </Col>
        </Row>
        <IconButton icon={X} variant="ghost" size="sm" onPress={() => navigation.goBack()} />
      </Row>

      {/* Tap zones */}
      <Row style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <Pressable
          style={{ flex: 1 }}
          onPress={() => setIndex(i => Math.max(0, i - 1))}
        />
        <Pressable
          style={{ flex: 1 }}
          onPress={() => {
            if (index < images.length - 1) setIndex(i => i + 1);
            else navigation.goBack();
          }}
        />
      </Row>
    </View>
  );
};
