import React, { memo } from 'react';

import { Badge, Box, Col, Row, Text } from 'vajra-ui';
import { TVajraColors } from 'vajra-ui';

type TChatRowProps = { name: string; preview: string; time: string; unread: number; bg: TVajraColors };

export const ChatRow = memo<TChatRowProps>(({ name, preview, time, unread, bg }) => (
  <Row align="center" gap="s-3" p="s-3">
    <Box w={44} h={44} rounded="r-full" bg={bg} align="center" justify="center">
      <Text variant="labelMedium" color="textInverse">{name[0]}</Text>
    </Box>
    <Col flex={1} gap="s-1">
      <Row justify="space-between">
        <Text variant="labelMedium">{name}</Text>
        <Text variant="caption" color="textMuted">{time}</Text>
      </Row>
      <Row justify="space-between" align="center">
        <Text variant="caption" color="textMuted" style={{ flex: 1 }}>{preview}</Text>
        {unread > 0 && <Badge label={String(unread)} bg="primary" />}
      </Row>
    </Col>
  </Row>
));
