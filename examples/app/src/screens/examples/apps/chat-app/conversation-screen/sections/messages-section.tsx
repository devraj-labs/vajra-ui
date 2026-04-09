import React from 'react';

import { Col } from 'vajra-ui';

import { MessageBubble } from '../comps/message-bubble';

const MESSAGES = [
  { text: 'Hey! Did you try Vajra UI yet?', time: '10:01 AM', mine: false },
  { text: 'Yes! Just shipped our app with it. Zero StyleSheet calls.', time: '10:03 AM', mine: true },
  { text: 'That is insane. How long did it take?', time: '10:04 AM', mine: false },
  { text: 'Half a day for the full UI. Tokens just clicked for me.', time: '10:06 AM', mine: true },
  { text: 'I need to try this immediately', time: '10:07 AM', mine: false },
];

export const MessagesSection: React.FC = () => (
  <Col gap="s-3">
    {MESSAGES.map((m, i) => (
      <MessageBubble key={i} {...m} />
    ))}
  </Col>
);
