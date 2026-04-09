import React from 'react';

import { Col, Row, Text } from 'vajra-ui';
import { TVajraColors } from 'vajra-ui';

import { AlbumCard } from '../comps/album-card';

type TAlbum = { title: string; artist: string; tracks: number; bg: TVajraColors };

const ALBUMS: TAlbum[] = [
  { title: 'Retrowave Vol. 2', artist: 'Synthwave Collective', tracks: 12, bg: 'primarySubtle' },
  { title: 'Midnight Sessions', artist: 'The Glitch', tracks: 9, bg: 'secondarySubtle' },
  { title: 'Electric Dreams', artist: 'MGMT', tracks: 11, bg: 'warningSubtle' },
  { title: 'Solitude', artist: 'James Blake', tracks: 10, bg: 'successSubtle' },
];

export const AlbumsSection: React.FC = () => (
  <Col gap="s-3">
    <Text variant="labelMedium">Library</Text>
    <Row gap="s-3" wrap="wrap">
      {ALBUMS.map(a => (
        <AlbumCard key={a.title} {...a} />
      ))}
    </Row>
  </Col>
);
