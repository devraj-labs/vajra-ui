import React, { memo } from 'react';

import { Badge, Box, Col, Row, Text } from 'vajra-ui';

type TDetailHeaderProps = { title: string; company: string; location: string; type: string; salary: string };

export const DetailHeader = memo<TDetailHeaderProps>(({ title, company, location, type, salary }) => (
  <Col gap="s-3">
    <Row align="center" gap="s-3">
      <Box w={56} h={56} rounded="r-3" bg="primarySubtle" align="center" justify="center">
        <Text variant="h2">💼</Text>
      </Box>
      <Col flex={1} gap="s-1">
        <Text variant="h3">{title}</Text>
        <Text variant="body" color="textMuted">{company} · {location}</Text>
      </Col>
    </Row>
    <Row gap="s-2">
      <Badge label={type} bg="primarySubtle" textProps={{ color: 'primary' }} />
      <Badge label={salary} bg="successSubtle" textProps={{ color: 'success' }} />
    </Row>
  </Col>
));
