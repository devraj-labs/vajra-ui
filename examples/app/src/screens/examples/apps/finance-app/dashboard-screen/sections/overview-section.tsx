import React from 'react';

import { Row } from 'vajra-ui';

import { BalanceCard } from '../comps/balance-card';
import { StatCard } from '../comps/stat-card';

export const OverviewSection: React.FC = () => (
  <>
    <BalanceCard label="Total Balance" amount="$24,580.00" change="+12.4%" positive />
    <Row gap="s-3">
      <StatCard label="Income" value="$6,200" bg="successSubtle" color="success" />
      <StatCard label="Expenses" value="$3,840" bg="errorSubtle" color="error" />
      <StatCard label="Savings" value="$2,360" bg="primarySubtle" color="primary" />
    </Row>
  </>
);
