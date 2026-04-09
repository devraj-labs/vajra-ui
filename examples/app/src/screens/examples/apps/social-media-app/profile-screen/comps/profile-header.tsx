import React, { useState } from 'react';
import { Image, View } from 'react-native';

import { Box, Button, Col, Row, Separator, Text } from 'vajra-ui';

import { useAppNavigation } from '../../../../../../navigation/use-app-navigation';

type TProfileHeaderProps = {
  username: string;
  handle: string;
  avatarUrl: string;
  bio: string;
  posts: number;
  followers: string;
  following: number;
};

export const ProfileHeader: React.FC<TProfileHeaderProps> = ({ username, handle, avatarUrl, bio, posts, followers, following }) => {
  const navigation = useAppNavigation();
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <Col gap="s-4">
      <Row align="center" gap="s-4">
        <Box w={80} h={80} rounded="r-full" borderWidth={2} borderColor="primary">
          <View style={{ width: 76, height: 76, borderRadius: 38, overflow: 'hidden' }}>
            <Image source={{ uri: avatarUrl }} style={{ width: 76, height: 76 }} resizeMode="cover" />
          </View>
        </Box>
        <Row flex={1} justify="space-around">
          <Col align="center" gap="s-1">
            <Text variant="h3">{posts}</Text>
            <Text variant="caption" color="textMuted">Posts</Text>
          </Col>
          <Col align="center" gap="s-1">
            <Text variant="h3">{followers}</Text>
            <Text variant="caption" color="textMuted">Followers</Text>
          </Col>
          <Col align="center" gap="s-1">
            <Text variant="h3">{following}</Text>
            <Text variant="caption" color="textMuted">Following</Text>
          </Col>
        </Row>
      </Row>
      <Col gap="s-1">
        <Text variant="labelMedium">{username}</Text>
        <Text variant="caption" color="textMuted">{handle}</Text>
        <Text variant="body" color="textMuted">{bio}</Text>
      </Col>
      <Row gap="s-2">
        <Box flex={1}>
          <Button
            label={isFollowing ? 'Following' : 'Follow'}
            variant={isFollowing ? 'outline' : 'solid'}
            onPress={() => setIsFollowing(f => !f)}
            size="sm"
          />
        </Box>
        <Box flex={1}>
          <Button
            label="Message"
            variant="outline"
            onPress={() => navigation.navigate('ExChat')}
            size="sm"
          />
        </Box>
      </Row>
      <Separator />
    </Col>
  );
};
