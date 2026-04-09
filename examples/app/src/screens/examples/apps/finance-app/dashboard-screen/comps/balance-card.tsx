import { TrendingDown, TrendingUp } from 'lucide-react-native';
import React, { memo } from 'react';

import { Card, Row, Text } from 'vajra-ui';

type TBalanceCardProps = { label: string; amount: string; change: string; positive: boolean };

export const BalanceCard = memo<TBalanceCardProps>(({ label, amount, change, positive }) => (
  <Card p="s-6" rounded="r-3" bg="primary" gap="s-3">
    <Text variant="caption" color="textInverse">{label}</Text>
    <Text variant="h2" color="textInverse">{amount}</Text>
    <Row align="center" gap="s-1">
      {positive
        ? <TrendingUp size={14} color="rgba(255,255,255,0.8)" />
        : <TrendingDown size={14} color="rgba(255,255,255,0.8)" />
      }
      <Text variant="caption" color="textInverse">{change} vs last month</Text>
    </Row>
  </Card>
));
