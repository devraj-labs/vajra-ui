import React, { memo, useMemo, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { AVATAR_DEFAULT_SIZE, AVATAR_LOADING_BG, AVATAR_PALETTE } from './avatar-constants';
import { TAvatarProps } from './avatar-types';

const pickPaletteEntry = (initials: string) => {
  let hash = 0;
  for (let i = 0; i < initials.length; i++) {
    hash = initials.charCodeAt(i) + ((hash << 5) - hash);
  }

  return AVATAR_PALETTE[Math.abs(hash) % AVATAR_PALETTE.length];
};

const AvatarComponent: React.FC<TAvatarProps> = ({
  src,
  initials,
  width = AVATAR_DEFAULT_SIZE,
  height = AVATAR_DEFAULT_SIZE,
  imageProps,
}) => {
  const [loading, setLoading] = useState(!!src);
  const [error, setError] = useState(false);

  const showImage = !!src && !error;
  const showInitials = !showImage || error;

  const palette = useMemo(() => pickPaletteEntry(initials), [initials]);
  const fontSize = Math.round(Math.min(width, height) * 0.38);
  const borderRadius = Math.min(width, height) / 2;

  const bgColor =
    loading && showImage ? AVATAR_LOADING_BG : showInitials ? palette.bg : 'transparent';

  return (
    <View style={[styles.container, { width, height, borderRadius, backgroundColor: bgColor }]}>
      {showImage && (
        <Image
          source={{ uri: src }}
          style={[StyleSheet.absoluteFill, { borderRadius }]}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
          {...imageProps}
        />
      )}

      {showInitials && (
        <Text style={[styles.initials, { fontSize, color: palette.text }]} numberOfLines={1}>
          {initials.slice(0, 2).toUpperCase()}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    fontWeight: '600',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});

export const Avatar = memo(AvatarComponent);
Avatar.displayName = 'Avatar';
