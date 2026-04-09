import { Pause, SkipBack, SkipForward } from 'lucide-react-native';
import React, { memo } from 'react';

import { Box, Card, Col, IconButton, Row, Text } from 'vajra-ui';

type TNowPlayingCardProps = { title: string; artist: string; album: string };

export const NowPlayingCard = memo<TNowPlayingCardProps>(({ title, artist, album }) => (
  <Card p="s-6" rounded="r-3" bg="primary" gap="s-4" align="center">
    <Box w={120} h={120} rounded="r-3" bg="primarySubtle" align="center" justify="center">
      <Text variant="h1">🎵</Text>
    </Box>
    <Col align="center" gap="s-1">
      <Text variant="labelMedium" color="textInverse">{title}</Text>
      <Text variant="caption" color="textInverse">{artist} · {album}</Text>
    </Col>
    <Row gap="s-4" align="center">
      <IconButton icon={SkipBack} variant="ghost" size="md" onPress={() => {}} />
      <IconButton icon={Pause} variant="solid" size="lg" onPress={() => {}} />
      <IconButton icon={SkipForward} variant="ghost" size="md" onPress={() => {}} />
    </Row>
  </Card>
));
