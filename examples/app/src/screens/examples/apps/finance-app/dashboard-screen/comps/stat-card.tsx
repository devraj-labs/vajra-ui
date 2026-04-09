import React, { memo } from 'react';

import { Card, Text } from 'vajra-ui';
import { TVajraColors } from 'vajra-ui';

type TStatCardProps = { label: string; value: string; bg: TVajraColors; color: TVajraColors };

export const StatCard = memo<TStatCardProps>(({ label, value, bg, color }) => (
  <Card p="s-4" rounded="r-3" bg={bg} flex={1} gap="s-1">
    <Text variant="caption" color={color}>{label}</Text>
    <Text variant="h3" color={color}>{value}</Text>
  </Card>
));
