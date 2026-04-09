import React, { memo } from 'react';

import { Badge, Box, Card, Col, Pressable, Text } from 'vajra-ui';
import { TVajraColors } from 'vajra-ui';

type TProductCardProps = { name: string; price: string; category: string; bg: TVajraColors; onPress: () => void };

export const ProductCard = memo<TProductCardProps>(({ name, price, category, bg, onPress }) => (
  <Pressable onPress={onPress} activeOpacity={0.75} style={{ flex: 1 }}>
    <Card rounded="r-3" borderWidth={1} borderColor="border" overflow="hidden">
      <Box h={100} bg={bg} align="center" justify="center">
        <Text variant="h2">🛍️</Text>
      </Box>
      <Col p="s-3" gap="s-1">
        <Badge label={category} bg="primarySubtle" textProps={{ color: 'primary' }} />
        <Text variant="labelMedium">{name}</Text>
        <Text variant="labelMedium" color="primary">{price}</Text>
      </Col>
    </Card>
  </Pressable>
));
