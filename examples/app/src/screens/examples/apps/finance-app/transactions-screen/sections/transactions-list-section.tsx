import React from 'react';

import { Box, Card, Col, Separator, Text } from 'vajra-ui';
import { TVajraColors } from 'vajra-ui';

import { TransactionRow } from '../comps/transaction-row';

type TTransaction = { label: string; category: string; date: string; amount: string; positive: boolean; dot: TVajraColors };

const ALL_TRANSACTIONS: TTransaction[] = [
  { label: 'Salary', category: 'Income', date: 'Apr 1', amount: '+$6,200', positive: true, dot: 'success' },
  { label: 'Rent', category: 'Housing', date: 'Apr 2', amount: '-$1,500', positive: false, dot: 'error' },
  { label: 'Netflix', category: 'Entertainment', date: 'Apr 3', amount: '-$15', positive: false, dot: 'warning' },
  { label: 'Groceries', category: 'Food', date: 'Apr 4', amount: '-$240', positive: false, dot: 'warning' },
  { label: 'Freelance', category: 'Income', date: 'Apr 5', amount: '+$800', positive: true, dot: 'success' },
  { label: 'Gym', category: 'Health', date: 'Apr 6', amount: '-$50', positive: false, dot: 'info' },
];

export const TransactionsListSection: React.FC = () => (
  <Col gap="s-2">
    <Text variant="labelMedium">All Transactions</Text>
    <Card rounded="r-3" borderWidth={1} borderColor="border">
      {ALL_TRANSACTIONS.map((t, i) => (
        <Box key={i}>
          <TransactionRow {...t} />
          {i < ALL_TRANSACTIONS.length - 1 && <Separator />}
        </Box>
      ))}
    </Card>
  </Col>
);
