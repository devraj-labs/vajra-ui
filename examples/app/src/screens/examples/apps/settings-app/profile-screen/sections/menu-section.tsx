import { Bell, ChevronRight, CreditCard, HelpCircle, LogOut, Shield } from 'lucide-react-native';
import React from 'react';

import { Box, Card, Col, Row, Separator, Text } from 'vajra-ui';

type TMenuItem = { icon: React.ComponentType<{ size: number; color: string }>; label: string; destructive?: boolean };

const MENU_ITEMS: TMenuItem[] = [
  { icon: Bell, label: 'Notifications' },
  { icon: Shield, label: 'Privacy & Security' },
  { icon: CreditCard, label: 'Billing' },
  { icon: HelpCircle, label: 'Help & Support' },
  { icon: LogOut, label: 'Sign Out', destructive: true },
];

export const MenuSection: React.FC = () => (
  <Card rounded="r-3" borderWidth={1} borderColor="border">
    {MENU_ITEMS.map((item, i) => {
      const Icon = item.icon;
      return (
        <Box key={item.label}>
          <Row p="s-4" align="center" justify="space-between">
            <Row align="center" gap="s-3">
              <Icon size={18} color={item.destructive ? '#E5193A' : '#6B7280'} />
              <Text variant="body" color={item.destructive ? 'error' : 'text'}>{item.label}</Text>
            </Row>
            {!item.destructive && <ChevronRight size={16} color="#9CA3AF" />}
          </Row>
          {i < MENU_ITEMS.length - 1 && <Separator />}
        </Box>
      );
    })}
  </Card>
);
