import React, { memo } from 'react';

import { Badge, Box, Card, Col, Row, Text } from 'vajra-ui';
import { TVajraColors } from 'vajra-ui';

type TRestaurantCardProps = { name: string; cuisine: string; rating: string; time: string; bg: TVajraColors };

export const RestaurantCard = memo<TRestaurantCardProps>(({ name, cuisine, rating, time, bg }) => (
  <Card rounded="r-3" borderWidth={1} borderColor="border" overflow="hidden">
    <Box h={80} bg={bg} align="center" justify="center">
      <Text variant="h2">🍽️</Text>
    </Box>
    <Col p="s-3" gap="s-2">
      <Text variant="labelMedium">{name}</Text>
      <Text variant="caption" color="textMuted">{cuisine}</Text>
      <Row gap="s-2">
        <Badge label={`⭐ ${rating}`} bg="warningSubtle" textProps={{ color: 'warning' }} />
        <Badge label={`🕐 ${time}`} bg="primarySubtle" textProps={{ color: 'primary' }} />
      </Row>
    </Col>
  </Card>
));
