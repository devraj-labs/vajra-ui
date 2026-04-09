import React from 'react';

import { Col } from 'vajra-ui';
import { TVajraColors } from 'vajra-ui';

import { ArticleCard } from '../comps/article-card';

type TArticle = { title: string; source: string; time: string; category: string; bg: TVajraColors };

const ARTICLES: TArticle[] = [
  { title: 'React Native 0.74 ships new architecture by default', source: 'Tech Crunch', time: '1h ago', category: 'Tech', bg: 'primarySubtle' },
  { title: 'Design systems are eating the world', source: 'UX Collective', time: '3h ago', category: 'Design', bg: 'secondarySubtle' },
  { title: 'India becomes third largest startup ecosystem', source: 'Economic Times', time: '5h ago', category: 'Business', bg: 'successSubtle' },
  { title: 'AI tools that actually save developer time', source: 'Dev.to', time: '8h ago', category: 'AI', bg: 'infoSubtle' },
];

export const ArticlesSection: React.FC = () => (
  <Col gap="s-3">
    {ARTICLES.map(a => (
      <ArticleCard key={a.title} {...a} />
    ))}
  </Col>
);
