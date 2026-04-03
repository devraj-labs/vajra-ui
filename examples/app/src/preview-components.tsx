import { ArrowLeft, ChevronRight } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import { Box, Card, IconButton, SafeAreaScreenWrapper, Text } from 'vajra-ui';

import { ButtonExample } from './examples/button-example';
import { CardExample } from './examples/card-example';
import { CheckboxExample } from './examples/checkbox-example';
import { IconButtonExample } from './examples/icon-button-example';
import { InputExample } from './examples/input-example';
import { RadioExample } from './examples/radio-example';
import { SwitchExample } from './examples/switch-example';
import { TextExample } from './examples/text-example';

type TTabScreen = {
  label: string;
  description: string;
  component: React.ComponentType;
};

const TABS = {
  button: {
    label: 'Button',
    description: 'Variants, sizes & palettes',
    component: ButtonExample,
  },
  card: {
    label: 'Card',
    description: 'Padding, radius & backgrounds',
    component: CardExample,
  },
  checkbox: {
    label: 'Checkbox',
    description: 'Multi-select with color tokens',
    component: CheckboxExample,
  },
  iconButton: {
    label: 'Icon Button',
    description: 'Icon-only button variants',
    component: IconButtonExample,
  },
  input: {
    label: 'Input',
    description: 'Outline, filled, flushed & floating',
    component: InputExample,
  },
  radio: {
    label: 'Radio',
    description: 'Single-select with color tokens',
    component: RadioExample,
  },
  switch: {
    label: 'Switch',
    description: 'Toggle with animation & color tokens',
    component: SwitchExample,
  },
  text: {
    label: 'Text',
    description: 'Typography variants & colors',
    component: TextExample,
  },
} satisfies Record<string, TTabScreen>;

type TTabKey = keyof typeof TABS;

const TAB_KEYS = Object.keys(TABS) as TTabKey[];

export function PreviewComponents() {
  const [activeTab, setActiveTab] = useState<TTabKey | null>(null);

  if (activeTab !== null) {
    const ActiveScreen = TABS[activeTab].component;
    return (
      <SafeAreaScreenWrapper>
        <Box flex={1} bg="background" mt="s-5">
          <Box
            bg="surface"
            px="s-4"
            py="s-3"
            direction="row"
            align="center"
            gap="s-3"
            borderBottomWidth={1}
            borderColor="border"
          >
            <IconButton
              size="xs"
              icon={ArrowLeft}
              onPress={() => setActiveTab(null)}
            />
            <Text variant="subheading">{TABS[activeTab].label}</Text>
          </Box>
          <Box flex={1}>
            <ActiveScreen />
          </Box>
        </Box>
      </SafeAreaScreenWrapper>
    );
  }

  return (
    <SafeAreaScreenWrapper>
      <Box
        bg="surface"
        px="s-4"
        py="s-3"
        borderBottomWidth={1}
        borderColor="border"
      >
        <Text variant="h2">Components</Text>
      </Box>
      <ScrollView>
        <Box p="s-4" gap="s-3">
          {TAB_KEYS.map(key => (
            <TouchableOpacity key={key} onPress={() => setActiveTab(key)}>
              <Card borderWidth={1} borderColor="border">
                <Box direction="row" align="center" justify="space-between">
                  <Box gap="s-1">
                    <Text variant="subheading">{TABS[key].label}</Text>
                    <Text variant="caption" color="textMuted">
                      {TABS[key].description}
                    </Text>
                  </Box>
                  <ChevronRight size={18} />
                </Box>
              </Card>
            </TouchableOpacity>
          ))}
        </Box>
      </ScrollView>
    </SafeAreaScreenWrapper>
  );
}
