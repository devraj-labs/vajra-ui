import React, { memo } from 'react';

import { Badge, Box, Card, Col, Row, Text } from 'vajra-ui';
import { TVajraColors } from 'vajra-ui';

type TJobCardProps = { title: string; company: string; location: string; type: string; salary: string; bg: TVajraColors };

export const JobCard = memo<TJobCardProps>(({ title, company, location, type, salary, bg }) => (
  <Card p="s-4" rounded="r-3" borderWidth={1} borderColor="border" gap="s-3">
    <Row align="center" gap="s-3">
      <Box w={44} h={44} rounded="r-3" bg={bg} align="center" justify="center">
        <Text variant="body">💼</Text>
      </Box>
      <Col flex={1} gap="s-1">
        <Text variant="labelMedium">{title}</Text>
        <Text variant="caption" color="textMuted">{company} · {location}</Text>
      </Col>
    </Row>
    <Row gap="s-2">
      <Badge label={type} bg="primarySubtle" textProps={{ color: 'primary' }} />
      <Badge label={salary} bg="successSubtle" textProps={{ color: 'success' }} />
    </Row>
  </Card>
));
