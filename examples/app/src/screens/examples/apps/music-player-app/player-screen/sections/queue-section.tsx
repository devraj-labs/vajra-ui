import React from 'react';

import { Box, Card, Col, Row, Separator, Text } from 'vajra-ui';

type TTrack = { title: string; artist: string; duration: string; active: boolean };

const QUEUE: TTrack[] = [
  { title: 'Neon Lights', artist: 'Synthwave Collective', duration: '3:42', active: true },
  { title: 'Midnight Run', artist: 'The Glitch', duration: '4:11', active: false },
  { title: 'Electric Feel', artist: 'MGMT', duration: '3:49', active: false },
  { title: 'Retrograde', artist: 'James Blake', duration: '4:07', active: false },
];

export const QueueSection: React.FC = () => (
  <Col gap="s-2">
    <Text variant="labelMedium">Up Next</Text>
    <Card rounded="r-3" borderWidth={1} borderColor="border">
      {QUEUE.map((track, i) => (
        <Box key={track.title}>
          <Row p="s-3" align="center" justify="space-between">
            <Col flex={1} gap="s-1">
              <Text variant="labelMedium" color={track.active ? 'primary' : 'text'}>{track.title}</Text>
              <Text variant="caption" color="textMuted">{track.artist}</Text>
            </Col>
            <Text variant="caption" color="textMuted">{track.duration}</Text>
          </Row>
          {i < QUEUE.length - 1 && <Separator />}
        </Box>
      ))}
    </Card>
  </Col>
);
