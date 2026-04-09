import React from 'react';

import { Box, Card, Separator } from 'vajra-ui';
import { TVajraColors } from 'vajra-ui';

import { ChatRow } from '../comps/chat-row';

type TConversation = { name: string; preview: string; time: string; unread: number; bg: TVajraColors };

const CONVERSATIONS: TConversation[] = [
  { name: 'Priya Sharma', preview: 'Did you see the new Vajra UI release?', time: '2m', unread: 3, bg: 'primary' },
  { name: 'Aryan Dev', preview: 'The token system is genius honestly', time: '15m', unread: 1, bg: 'secondary' },
  { name: 'Meera K', preview: 'Shipped the whole app in one day!', time: '1h', unread: 0, bg: 'success' },
  { name: 'Vivek T', preview: 'Can you review my PR?', time: '3h', unread: 0, bg: 'warning' },
];

export const ConversationsSection: React.FC = () => (
  <Card rounded="r-3" borderWidth={1} borderColor="border">
    {CONVERSATIONS.map((c, i) => (
      <Box key={c.name}>
        <ChatRow {...c} />
        {i < CONVERSATIONS.length - 1 && <Separator />}
      </Box>
    ))}
  </Card>
);
