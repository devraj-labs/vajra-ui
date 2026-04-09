import React from 'react';

import { Box, Card, Col, Row, Separator, Text } from 'vajra-ui';
import { TVajraColors } from 'vajra-ui';

type TTransaction = { label: string; category: string; amount: string; positive: boolean; dot: TVajraColors };

const TRANSACTIONS: TTransaction[] = [
  { label: 'Salary', category: 'Income', amount: '+$6,200', positive: true, dot: 'success' },
  { label: 'Rent', category: 'Housing', amount: '-$1,500', positive: false, dot: 'error' },
  { label: 'Groceries', category: 'Food', amount: '-$240', positive: false, dot: 'warning' },
  { label: 'Freelance', category: 'Income', amount: '+$800', positive: true, dot: 'success' },
];

export const RecentSection: React.FC = () => (
  <Col gap="s-2">
    <Text variant="labelMedium">Recent Transactions</Text>
    <Card rounded="r-3" borderWidth={1} borderColor="border">
      {TRANSACTIONS.map((t, i) => (
        <Box key={i}>
          <Row p="s-3" align="center" justify="space-between">
            <Row align="center" gap="s-2">
              <Box w={8} h={8} rounded="r-full" bg={t.dot} />
              <Col>
                <Text variant="labelMedium">{t.label}</Text>
                <Text variant="caption" color="textMuted">{t.category}</Text>
              </Col>
            </Row>
            <Text variant="labelMedium" color={t.positive ? 'success' : 'error'}>{t.amount}</Text>
          </Row>
          {i < TRANSACTIONS.length - 1 && <Separator />}
        </Box>
      ))}
    </Card>
  </Col>
);
