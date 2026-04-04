import { ChevronRight } from 'lucide-react-native';
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import { AppBar, Box, Card, ScreenWrapper, Text } from 'vajra-ui';

import { TAppStackParamList } from '../navigation/navigation-types';
import { useAppNavigation } from '../navigation/use-app-navigation';

type TComponentEntry = {
  label: string;
  description: string;
  screen: keyof TAppStackParamList;
};

const COMPONENTS: TComponentEntry[] = [
  {
    label: 'AppBar',
    description: 'Compound header with back, title & actions',
    screen: 'AppBarScreen',
  },
  {
    label: 'Button',
    description: 'Variants, sizes & palettes',
    screen: 'ButtonScreen',
  },
  {
    label: 'Card',
    description: 'Padding, radius & backgrounds',
    screen: 'CardScreen',
  },
  {
    label: 'Checkbox',
    description: 'Multi-select with color tokens',
    screen: 'CheckboxScreen',
  },
  {
    label: 'Icon Button',
    description: 'Icon-only button variants',
    screen: 'IconButtonScreen',
  },
  {
    label: 'Input',
    description: 'Outline, filled, flushed & floating',
    screen: 'InputScreen',
  },
  {
    label: 'Radio',
    description: 'Single-select with color tokens',
    screen: 'RadioScreen',
  },
  {
    label: 'Switch',
    description: 'Toggle with animation & color tokens',
    screen: 'SwitchScreen',
  },
  {
    label: 'Text',
    description: 'Typography variants & colors',
    screen: 'TextScreen',
  },
];

export function ComponentListScreen() {
  const navigation = useAppNavigation();

  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.Title centered>Vajra UI</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box p="s-4" gap="s-3">
          {COMPONENTS.map(item => (
            <TouchableOpacity
              key={item.screen}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Card borderWidth={1} borderColor="border">
                <Box direction="row" align="center" justify="space-between">
                  <Box gap="s-1">
                    <Text variant="subheading">{item.label}</Text>
                    <Text variant="caption" color="textMuted">
                      {item.description}
                    </Text>
                  </Box>
                  <ChevronRight size={18} />
                </Box>
              </Card>
            </TouchableOpacity>
          ))}
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
}
