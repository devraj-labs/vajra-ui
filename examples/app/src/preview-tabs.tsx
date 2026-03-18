import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import { Box, Text } from 'vajra-ui';

import { ButtonExample } from './examples/button-example';
import { CardExample } from './examples/card-example';
import { IconButtonExample } from './examples/icon-button-example';
import { InputExample } from './examples/input-example';
import { TextExample } from './examples/text-example';

type TTabScreen = {
  label: string;
  component: React.ComponentType;
};

const TABS = {
  button: { label: 'Button', component: ButtonExample },
  card: { label: 'Card', component: CardExample },
  iconButton: { label: 'IconButton', component: IconButtonExample },
  input: { label: 'Input', component: InputExample },
  text: { label: 'Text', component: TextExample },
} satisfies Record<string, TTabScreen>;

type TTabKey = keyof typeof TABS;

const TAB_KEYS = Object.keys(TABS) as TTabKey[];

export function PreviewTabs() {
  const [activeTab, setActiveTab] = useState<TTabKey>('button');
  const ActiveScreen = TABS[activeTab].component;

  return (
    <Box flex={1} bg="background">
      <Box bg="surface" borderBottomWidth={1} style={{ borderBottomColor: '#e2e8f0' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Box direction="row" px="s-2">
            {TAB_KEYS.map(key => {
              const isActive = key === activeTab;
              return (
                <TouchableOpacity key={key} onPress={() => setActiveTab(key)}>
                  <Box
                    px="s-4"
                    py="s-3"
                    style={{
                      borderBottomWidth: 2,
                      borderBottomColor: isActive ? '#3b82f6' : 'transparent',
                    }}
                  >
                    <Text
                      variant={isActive ? 'button' : 'body'}
                      color={isActive ? 'primary' : 'textMuted'}
                    >
                      {TABS[key].label}
                    </Text>
                  </Box>
                </TouchableOpacity>
              );
            })}
          </Box>
        </ScrollView>
      </Box>

      <Box flex={1}>
        <ActiveScreen />
      </Box>
    </Box>
  );
}
