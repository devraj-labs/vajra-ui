import React, { memo } from 'react';

import { Box, Card, Col, Text } from 'vajra-ui';
import { TVajraColors } from 'vajra-ui';

type TAlbumCardProps = { title: string; artist: string; tracks: number; bg: TVajraColors };

export const AlbumCard = memo<TAlbumCardProps>(({ title, artist, tracks, bg }) => (
  <Card rounded="r-3" borderWidth={1} borderColor="border" overflow="hidden" style={{ flex: 1 }}>
    <Box h={80} bg={bg} align="center" justify="center">
      <Text variant="h2">🎵</Text>
    </Box>
    <Col p="s-3" gap="s-1">
      <Text variant="labelMedium">{title}</Text>
      <Text variant="caption" color="textMuted">{artist}</Text>
      <Text variant="caption" color="textMuted">{tracks} tracks</Text>
    </Col>
  </Card>
));
