import React, { memo } from 'react';
import { Image, View } from 'react-native';

import { Box } from 'vajra-ui';

type TPostAvatarProps = { imageUrl: string; size?: number };

export const PostAvatar = memo<TPostAvatarProps>(({ imageUrl, size = 40 }) => (
  <Box w={size} h={size} rounded="r-full" borderWidth={1} borderColor="borderSubtle">
    <View style={{ width: size, height: size, borderRadius: size / 2, overflow: 'hidden' }}>
      <Image source={{ uri: imageUrl }} style={{ width: size, height: size }} resizeMode="cover" />
    </View>
  </Box>
));
