import React, { memo } from 'react';

import { Box, Col, Text } from 'vajra-ui';

type TMessageBubbleProps = { text: string; time: string; mine: boolean };

export const MessageBubble = memo<TMessageBubbleProps>(({ text, time, mine }) => (
  <Col align={mine ? 'flex-end' : 'flex-start'} gap="s-1">
    <Box
      p="s-3"
      rounded="r-3"
      bg={mine ? 'primary' : 'surface'}
      borderWidth={mine ? 0 : 1}
      borderColor="border"
      style={{ maxWidth: '75%' }}
    >
      <Text variant="body" color={mine ? 'textInverse' : 'text'}>{text}</Text>
    </Box>
    <Text variant="caption" color="textMuted">{time}</Text>
  </Col>
));
