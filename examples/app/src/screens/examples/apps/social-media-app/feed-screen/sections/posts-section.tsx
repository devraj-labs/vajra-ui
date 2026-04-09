import React from 'react';

import { Col } from 'vajra-ui';

import { PostCard } from '../comps/post-card';

const POSTS = [
  {
    author: 'Rishav Jha',
    handle: '@rishav',
    time: '2m',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    imageUrl: 'https://picsum.photos/seed/post1/600/400',
    content: 'Just shipped Vajra UI v1 — a token-driven React Native component library. Zero StyleSheet, pure tokens. The future of mobile UI is here.',
    likes: 142,
    comments: 23,
    tag: 'Dev',
  },
  {
    author: 'Priya Sharma',
    handle: '@priya.design',
    time: '15m',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
    imageUrl: 'https://picsum.photos/seed/post2/600/400',
    content: 'Golden hour hits different when you find the perfect spot. Some moments are just meant to be captured.',
    likes: 891,
    comments: 64,
    tag: undefined,
  },
  {
    author: 'Aryan Dev',
    handle: '@aryandev',
    time: '1h',
    avatarUrl: 'https://i.pravatar.cc/150?img=8',
    imageUrl: undefined,
    content: 'Hot take: design tokens are the most underrated concept in mobile dev. Once you get it, you can never go back. Your team will thank you in 6 months.',
    likes: 203,
    comments: 45,
    tag: 'Opinion',
  },
  {
    author: 'Meera K',
    handle: '@meerak',
    time: '3h',
    avatarUrl: 'https://i.pravatar.cc/150?img=9',
    imageUrl: 'https://picsum.photos/seed/post4/600/400',
    content: 'Weekend escape. Nature always resets everything.',
    likes: 1204,
    comments: 88,
    tag: undefined,
  },
];

export const PostsSection: React.FC = () => (
  <Col gap="s-3">
    {POSTS.map((post, i) => (
      <PostCard key={i} {...post} postIndex={i} />
    ))}
  </Col>
);
