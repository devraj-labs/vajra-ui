import React from 'react';
import { Image, Pressable } from 'react-native';

import { Row } from 'vajra-ui';

import { useAppNavigation } from '../../../../../../navigation/use-app-navigation';

const GRID_IMAGES = [
  'https://picsum.photos/seed/g1/300/300',
  'https://picsum.photos/seed/g2/300/300',
  'https://picsum.photos/seed/g3/300/300',
  'https://picsum.photos/seed/g4/300/300',
  'https://picsum.photos/seed/g5/300/300',
  'https://picsum.photos/seed/g6/300/300',
  'https://picsum.photos/seed/g7/300/300',
  'https://picsum.photos/seed/g8/300/300',
  'https://picsum.photos/seed/g9/300/300',
];

const ITEM_SIZE = 124;

export const ProfileGridSection: React.FC = () => {
  const navigation = useAppNavigation();

  return (
    <Row wrap="wrap" gap="s-1">
      {GRID_IMAGES.map((url, i) => (
        <Pressable key={i} onPress={() => navigation.navigate('ExSocialPost', { postIndex: i % 4 })} style={{ width: ITEM_SIZE, height: ITEM_SIZE }}>
          <Image source={{ uri: url }} style={{ width: ITEM_SIZE, height: ITEM_SIZE }} resizeMode="cover" />
        </Pressable>
      ))}
    </Row>
  );
};
