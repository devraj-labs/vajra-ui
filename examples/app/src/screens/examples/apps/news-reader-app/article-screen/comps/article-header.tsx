import React, { memo } from 'react';

import { Badge, Box, Col, Row, Text } from 'vajra-ui';

type TArticleHeaderProps = { title: string; source: string; time: string; category: string };

export const ArticleHeader = memo<TArticleHeaderProps>(({ title, source, time, category }) => (
  <Col gap="s-3">
    <Box h={160} bg="primarySubtle" rounded="r-3" align="center" justify="center">
      <Text variant="h1">📰</Text>
    </Box>
    <Badge label={category} bg="infoSubtle" textProps={{ color: 'info' }} />
    <Text variant="h3">{title}</Text>
    <Row gap="s-1">
      <Text variant="caption" color="textMuted">{source}</Text>
      <Text variant="caption" color="textMuted">·</Text>
      <Text variant="caption" color="textMuted">{time}</Text>
    </Row>
  </Col>
));
