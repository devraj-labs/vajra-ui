import React, { memo } from 'react';

import { Box, Col, Row, Text } from 'vajra-ui';
import { TVajraColors } from 'vajra-ui';

type TFeatureRowProps = { emoji: string; title: string; description: string; dot: TVajraColors };

export const FeatureRow = memo<TFeatureRowProps>(({ emoji, title, description, dot }) => (
  <Row align="center" gap="s-3">
    <Box w={40} h={40} rounded="r-3" bg={dot} align="center" justify="center">
      <Text variant="body">{emoji}</Text>
    </Box>
    <Col flex={1} gap="s-1">
      <Text variant="labelMedium">{title}</Text>
      <Text variant="caption" color="textMuted">{description}</Text>
    </Col>
  </Row>
));
