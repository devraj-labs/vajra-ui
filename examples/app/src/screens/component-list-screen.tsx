import { ChevronRight, Grid2x2, List, Search, Shield, Star, Zap } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import {
  AppBar,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Grid,
  IconBox,
  IconButton,
  IconSwitch,
  Input,
  Radio,
  ScreenWrapper,
  Spinner,
  Switch,
  TabBar,
  Text,
} from 'vajra-ui';


import { TAppStackParamList } from '../navigation/navigation-types';
import { useAppNavigation } from '../navigation/use-app-navigation';

// ─── mini previews ──────────────────────────────────────────────────────────

function PreviewAppBar() {
  return (
    <Box bg="surface" rounded="r-2" px="s-3" py="s-2" direction="row" align="center" gap="s-2">
      <Box w={20} h={20} rounded="r-full" bg="surfaceRaised" align="center" justify="center">
        <ChevronRight size={10} color="#999" />
      </Box>
      <Box flex={1} h={8} rounded="r-full" bg="surfaceRaised" />
      <Box w={20} h={20} rounded="r-full" bg="surfaceRaised" align="center" justify="center">
        <Search size={10} color="#999" />
      </Box>
    </Box>
  );
}

function PreviewBadge() {
  return (
    <Box direction="row" gap="s-2" wrap="wrap" justify="center">
      <Badge label="New" bg="primary" />
      <Badge label="Hot" bg="error" />
      <Badge label="Beta" bg="successSubtle" textProps={{ color: 'success' }} />
    </Box>
  );
}

function PreviewButton() {
  return (
    <Box gap="s-2" align="center">
      <Button variant="solid" size="sm" label="Solid" />
      <Button variant="outline" size="sm" label="Outline" />
    </Box>
  );
}

function PreviewCard() {
  return (
    <Card p="s-2" borderWidth={1} borderColor="border">
      <Box gap="s-1">
        <Box h={8} rounded="r-full" bg="surfaceRaised" w="70%" />
        <Box h={6} rounded="r-full" bg="surfaceRaised" w="90%" />
        <Box h={6} rounded="r-full" bg="surfaceRaised" w="60%" />
      </Box>
    </Card>
  );
}

function PreviewCheckbox() {
  const [val, setVal] = useState<string[]>(['a']);
  return (
    <Checkbox.Root values={val} onChange={setVal}>
      <Checkbox.Item value="a" label="Option A" />
      <Checkbox.Item value="b" label="Option B" />
    </Checkbox.Root>
  );
}

function PreviewIconButton() {
  return (
    <Box direction="row" gap="s-2" justify="center">
      <IconButton icon={Star} variant="solid" size="sm" />
      <IconButton icon={Zap} variant="outline" size="sm" />
      <IconButton icon={Shield} variant="subtle" size="sm" />
    </Box>
  );
}

function PreviewIconBox() {
  return (
    <Box direction="row" gap="s-2" justify="center">
      <IconBox icon={Star} iconColor="primary" bg="primarySubtle" />
      <IconBox icon={Zap} iconColor="warning" bg="warningSubtle" />
      <IconBox icon={Shield} iconColor="success" bg="successSubtle" />
    </Box>
  );
}

function PreviewIconSwitch() {
  const [val, setVal] = useState(false);
  return <IconSwitch value={val} onChange={setVal} offIcon={List} onIcon={Grid2x2} />;
}

function PreviewInput() {
  return <Input.Outline size="sm" label="Email" placeholder="you@example.com" />;
}

function PreviewRadio() {
  const [val, setVal] = useState('a');
  return (
    <Radio.Root value={val} onChange={setVal}>
      <Radio.Item value="a" label="Option A" />
      <Radio.Item value="b" label="Option B" />
    </Radio.Root>
  );
}

function PreviewSpinner() {
  return (
    <Box direction="row" gap="s-4" justify="center" align="center">
      <Spinner size="sm" color="primary" />
      <Spinner size="md" color="secondary" />
      <Spinner size="lg" color="success" />
    </Box>
  );
}

function PreviewSwitch() {
  const [val, setVal] = useState('on');
  return (
    <Switch.Root value={val} onChange={setVal}>
      <Switch.Item value="on" label="Enabled" />
      <Switch.Item value="off" label="Disabled" />
    </Switch.Root>
  );
}

function PreviewTabBar() {
  const [val, setVal] = useState('all');
  return (
    <TabBar
      tabs={[
        { value: 'all', label: 'All' },
        { value: 'active', label: 'Active' },
        { value: 'done', label: 'Done' },
      ]}
      value={val}
      onChange={setVal}
    />
  );
}

function PreviewText() {
  return (
    <Box gap="s-1">
      <Text variant="h3">Heading</Text>
      <Text variant="body" color="textMuted">Body text goes here</Text>
      <Text variant="caption" color="textMuted">Caption</Text>
    </Box>
  );
}

// ─── registry ────────────────────────────────────────────────────────────────

type TComponentEntry = {
  label: string;
  description: string;
  screen: keyof TAppStackParamList;
  preview: React.ReactNode;
};

const COMPONENTS: TComponentEntry[] = [
  { label: 'AppBar', description: 'Header with back, title & actions', screen: 'AppBarScreen', preview: <PreviewAppBar /> },
  { label: 'Badge', description: 'Pill labels with color tokens', screen: 'BadgeScreen', preview: <PreviewBadge /> },
  { label: 'Button', description: 'Variants, sizes & palettes', screen: 'ButtonScreen', preview: <PreviewButton /> },
  { label: 'Card', description: 'Padding, radius & backgrounds', screen: 'CardScreen', preview: <PreviewCard /> },
  { label: 'Checkbox', description: 'Multi-select with color tokens', screen: 'CheckboxScreen', preview: <PreviewCheckbox /> },
  { label: 'Icon Button', description: 'Icon-only button variants', screen: 'IconButtonScreen', preview: <PreviewIconButton /> },
  { label: 'Icon Box', description: 'Icon with color & background', screen: 'IconBoxScreen', preview: <PreviewIconBox /> },
  { label: 'Icon Switch', description: 'Segmented icon picker', screen: 'IconSwitchScreen', preview: <PreviewIconSwitch /> },
  { label: 'Input', description: 'Outline, filled, flushed & floating', screen: 'InputScreen', preview: <PreviewInput /> },
  { label: 'Radio', description: 'Single-select with color tokens', screen: 'RadioScreen', preview: <PreviewRadio /> },
  { label: 'Spinner', description: 'Loading indicator', screen: 'SwitchScreen', preview: <PreviewSpinner /> },
  { label: 'Switch', description: 'Toggle with animation', screen: 'SwitchScreen', preview: <PreviewSwitch /> },
  { label: 'Tab Bar', description: 'Tabs with sliding indicator', screen: 'TabBarScreen', preview: <PreviewTabBar /> },
  { label: 'Text', description: 'Typography variants & colors', screen: 'TextScreen', preview: <PreviewText /> },
];

const COL_GAP = 12;
const SCREEN_PADDING = 16;

// ─── screen ──────────────────────────────────────────────────────────────────

export function ComponentListScreen() {
  const navigation = useAppNavigation();

  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.Title centered>⚡️ Vajra UI</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box p="s-4">
          <Grid.Root gap="s-3">
            {COMPONENTS.map(item => (
              <Grid.Item
                key={item.screen + item.label}
                columns={2}
                colGap={COL_GAP}
                screenPadding={SCREEN_PADDING}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate(item.screen)}
                  activeOpacity={0.75}
                  style={{ flex: 1 }}
                >
                  <Card p="s-0" rounded="r-3" borderWidth={1} borderColor="border" style={{ overflow: 'hidden' }}>
                    {/* Preview area */}
                    <Box
                      bg="background"
                      p="s-4"
                      align="center"
                      justify="center"
                      style={{ minHeight: 110 }}
                    >
                      {item.preview}
                    </Box>

                    {/* Info area */}
                    <Box px="s-3" py="s-2" bg="surface" gap="s-1">
                      <Text variant="labelMedium">{item.label}</Text>
                      <Text variant="caption" color="textMuted" numberOfLines={2}>
                        {item.description}
                      </Text>
                    </Box>
                  </Card>
                </TouchableOpacity>
              </Grid.Item>
            ))}
          </Grid.Root>
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
}
