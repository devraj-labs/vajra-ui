import React, { RefObject, useState } from 'react';
import { TextInput } from 'react-native';

import { Box, Col, Input, Row, Separator, Text } from 'vajra-ui';

import { CommentRow } from '../comps/comment-row';

type TCommentsSectionProps = { inputRef?: RefObject<TextInput> };

const COMMENTS = [
  { author: 'Priya Sharma', avatarUrl: 'https://i.pravatar.cc/150?img=5', text: 'This is absolutely stunning work! Vajra UI is a game changer.', time: '5m', likes: 12 },
  { author: 'Aryan Dev', avatarUrl: 'https://i.pravatar.cc/150?img=8', text: 'Been using it for 2 weeks now. Zero StyleSheet in our entire codebase.', time: '18m', likes: 8 },
  { author: 'Meera K', avatarUrl: 'https://i.pravatar.cc/150?img=9', text: 'The token system makes design-dev handoff so smooth!', time: '1h', likes: 5 },
  { author: 'Vivek T', avatarUrl: 'https://i.pravatar.cc/150?img=11', text: 'Switching our app to teal preset took 10 seconds. Incredible.', time: '2h', likes: 3 },
];

export const CommentsSection: React.FC<TCommentsSectionProps> = ({ inputRef }) => {
  const [comment, setComment] = useState('');

  return (
    <Col gap="s-4">
      <Row align="center" justify="space-between">
        <Text variant="labelMedium">Comments</Text>
        <Text variant="caption" color="textMuted">{COMMENTS.length} comments</Text>
      </Row>
      <Col gap="s-4">
        {COMMENTS.map((c, i) => (
          <Box key={i}>
            <CommentRow {...c} onReply={() => inputRef?.current?.focus()} />
            {i < COMMENTS.length - 1 && <Separator />}
          </Box>
        ))}
      </Col>
      <Input.Outline
        ref={inputRef}
        placeholder="Add a comment…"
        value={comment}
        onChangeText={setComment}
        size="sm"
      />
    </Col>
  );
};
