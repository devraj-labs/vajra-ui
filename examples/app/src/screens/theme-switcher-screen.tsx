import { ArrowLeft, Moon, Sun } from 'lucide-react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import {
  AppBar,
  Badge,
  Box,
  Button,
  Card,
  IconBox,
  Pressable,
  ScreenWrapper,
  Text,
} from 'vajra-ui';

import { useAppTheme } from '../app-theme-context';
import {
  TColorScheme,
  THEME_PRESET_LABELS,
  TThemePreset,
} from '../theme-presets';

const PRESETS: TThemePreset[] = ['teal', 'purple', 'orange', 'blue', 'pink', 'gold', 'crimson', 'cosmic'];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box gap="s-3">
      <Text variant="subheading">{title}</Text>
      {children}
    </Box>
  );
}

function PresetCard({ preset }: { preset: TThemePreset }) {
  const { preset: active, setPreset } = useAppTheme();
  const isSelected = active === preset;

  return (
    <Pressable
      onPress={() => setPreset(preset)}
      activeOpacity={0.75}
      w={'100%'}
    >
      <Card
        p="s-3"
        rounded="r-3"
        borderWidth={2}
        borderColor={isSelected ? 'primary' : 'border'}
        bg={isSelected ? 'primarySubtle' : 'surface'}
        gap="s-2"
      >
        <Box direction="row" justify="space-between" align="center">
          <Text variant="labelMedium" color={isSelected ? 'primary' : 'text'}>
            {THEME_PRESET_LABELS[preset]}
          </Text>
          {isSelected && <Badge label="Active" bg="primary" />}
        </Box>
        <Box direction="row" gap="s-1">
          <Box w={20} h={20} rounded="r-full" bg="primary" />
          <Box w={20} h={20} rounded="r-full" bg="secondary" />
          <Box w={20} h={20} rounded="r-full" bg="primarySubtle" />
        </Box>
      </Card>
    </Pressable>
  );
}

function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useAppTheme();

  const schemes: { value: TColorScheme; label: string }[] = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
  ];

  return (
    <Box direction="row" gap="s-3">
      {schemes.map(s => (
        <Box key={s.value} style={{ flex: 1 }}>
          <Button
            label={s.label}
            variant={colorScheme === s.value ? 'solid' : 'outline'}
            onPress={() => setColorScheme(s.value)}
          />
        </Box>
      ))}
    </Box>
  );
}

function LivePreview() {
  return (
    <Card p="s-4" rounded="r-3" borderWidth={1} borderColor="border" gap="s-4">
      <Text variant="subheading">Preview</Text>
      <Box direction="row" gap="s-2" wrap="wrap">
        <Badge label="Primary" bg="primary" />
        <Badge label="Secondary" bg="secondary" />
        <Badge
          label="Subtle"
          bg="primarySubtle"
          textProps={{ color: 'primary' }}
        />
      </Box>
      <Box direction="row" gap="s-2">
        <Button label="Solid" variant="solid" onPress={() => {}} size="sm" />
        <Button
          label="Outline"
          variant="outline"
          onPress={() => {}}
          size="sm"
        />
        <Button label="Ghost" variant="ghost" onPress={() => {}} size="sm" />
      </Box>
      <Box direction="row" gap="s-2">
        <IconBox icon={Sun} bg="primarySubtle" iconColor="primary" />
        <IconBox icon={Moon} bg="secondarySubtle" iconColor="secondary" />
      </Box>
      <Box gap="s-1">
        <Text variant="h3">Heading</Text>
        <Text variant="body" color="textMuted">
          Body text with muted color
        </Text>
        <Text variant="caption" color="textDisabled">
          Caption / disabled
        </Text>
      </Box>
    </Card>
  );
}

export function ThemeSwitcherScreen() {
  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} />
        <AppBar.Title>Theme</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box p="s-4" gap="s-6">
          <Section title="Color Scheme">
            <ColorSchemeToggle />
          </Section>

          <Section title="Preset">
            {PRESETS.map(p => (
              <PresetCard key={p} preset={p} />
            ))}
          </Section>

          <Section title="Live Preview">
            <LivePreview />
          </Section>
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
}
