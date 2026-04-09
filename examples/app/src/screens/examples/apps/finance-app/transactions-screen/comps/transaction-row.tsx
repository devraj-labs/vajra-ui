import React, { memo } from 'react';

import { Box, Col, Row, Text } from 'vajra-ui';
import { TVajraColors } from 'vajra-ui';

type TTransactionRowProps = { label: string; category: string; date: string; amount: string; positive: boolean; dot: TVajraColors };

export const TransactionRow = memo<TTransactionRowProps>(({ label, category, date, amount, positive, dot }) => (
  <Row p="s-3" align="center" justify="space-between">
    <Row align="center" gap="s-3">
      <Box w={10} h={10} rounded="r-full" bg={dot} />
      <Col>
        <Text variant="labelMedium">{label}</Text>
        <Text variant="caption" color="textMuted">{category} · {date}</Text>
      </Col>
    </Row>
    <Text variant="labelMedium" color={positive ? 'success' : 'error'}>{amount}</Text>
  </Row>
));
