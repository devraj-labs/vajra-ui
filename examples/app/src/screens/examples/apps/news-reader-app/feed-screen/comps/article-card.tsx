import React, { memo } from 'react';

import { Badge, Box, Card, Col, Row, Text } from 'vajra-ui';
import { TVajraColors } from 'vajra-ui';

type TArticleCardProps = { title: string; source: string; time: string; category: string; bg: TVajraColors };

export const ArticleCard = memo<TArticleCardProps>(({ title, source, time, category, bg }) => (
  <Card rounded="r-3" borderWidth={1} borderColor="border" overflow="hidden">
    <Box h={80} bg={bg} align="center" justify="center">
      <Text variant="h2">📰</Text>
    </Box>
    <Col p="s-3" gap="s-2">
      <Badge label={category} bg="infoSubtle" textProps={{ color: 'info' }} />
      <Text variant="labelMedium">{title}</Text>
      <Row gap="s-1">
        <Text variant="caption" color="textMuted">{source}</Text>
        <Text variant="caption" color="textMuted">·</Text>
        <Text variant="caption" color="textMuted">{time}</Text>
      </Row>
    </Col>
  </Card>
));
