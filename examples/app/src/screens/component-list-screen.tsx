import React from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Box, Grid, ScreenWrapper } from 'vajra-ui';

import { useAppNavigation } from '../navigation/use-app-navigation';
import { ComponentCard } from './component-list/component-card';
import {
  COMPONENTS,
  TComponentEntry,
} from './component-list/component-registry';

const COL_GAP = 12;
const SCREEN_PADDING = 16;

export function ComponentListScreen() {
  const navigation = useAppNavigation();

  const rendered: React.ReactNode[] = [];
  let gridBuffer: TComponentEntry[] = [];

  const flushGrid = (key: string) => {
    if (gridBuffer.length === 0) {
      return;
    }

    rendered.push(
      <Grid.Root gap="s-3" key={key}>
        {gridBuffer.map(item => (
          <Grid.Item
            key={item.label}
            columns={2}
            colGap={COL_GAP}
            screenPadding={SCREEN_PADDING}
          >
            <ComponentCard
              item={item}
              onPress={() => navigation.navigate(item.screen)}
            />
          </Grid.Item>
        ))}
      </Grid.Root>,
    );
    gridBuffer = [];
  };

  COMPONENTS.forEach((item, i) => {
    if (item.fullWidth) {
      flushGrid(`grid-before-${i}`);
      rendered.push(
        <ComponentCard
          key={item.label}
          item={item}
          fullWidth
          onPress={() => navigation.navigate(item.screen)}
        />,
      );
    } else {
      gridBuffer.push(item);
    }
  });

  flushGrid('grid-end');

  return (
    <ScreenWrapper bg='background'>
      <AppBar.Header>
        <AppBar.Title centered>⚡️ Vajra UI</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box p="s-4" gap="s-3">
          {rendered}
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
}
