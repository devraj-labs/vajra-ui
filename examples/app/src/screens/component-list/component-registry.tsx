import React from 'react';

import { TAppStackParamList } from '../../navigation/navigation-types';
import {
  PreviewAppBar,
  PreviewBadge,
  PreviewButton,
  PreviewCard,
  PreviewCheckbox,
  PreviewIconBox,
  PreviewIconButton,
  PreviewIconSwitch,
  PreviewInput,
  PreviewRadio,
  PreviewSpinner,
  PreviewSwitch,
  PreviewTabBar,
  PreviewText,
} from './component-previews';

export type TComponentEntry = {
  label: string;
  description: string;
  screen: keyof TAppStackParamList;
  preview: React.ReactNode;
  fullWidth?: boolean;
};

export const COMPONENTS: TComponentEntry[] = [
  { label: 'AppBar', description: 'Header with back, title & actions', screen: 'AppBarScreen', preview: <PreviewAppBar /> },
  { label: 'Badge', description: 'Pill labels with color tokens', screen: 'BadgeScreen', preview: <PreviewBadge /> },
  { label: 'Button', description: 'Variants, sizes & palettes', screen: 'ButtonScreen', preview: <PreviewButton /> },
  { label: 'Checkbox', description: 'Multi-select with color tokens', screen: 'CheckboxScreen', preview: <PreviewCheckbox /> },
  { label: 'Card', description: 'Padding, radius & backgrounds', screen: 'CardScreen', preview: <PreviewCard />, fullWidth: true },
  { label: 'Icon Button', description: 'Icon-only button variants', screen: 'IconButtonScreen', preview: <PreviewIconButton /> },
  { label: 'Icon Box', description: 'Icon with color & background', screen: 'IconBoxScreen', preview: <PreviewIconBox /> },
  { label: 'Icon Switch', description: 'Segmented icon picker', screen: 'IconSwitchScreen', preview: <PreviewIconSwitch /> },
  { label: 'Radio', description: 'Single-select with color tokens', screen: 'RadioScreen', preview: <PreviewRadio /> },
  { label: 'Input', description: 'Outline, filled, flushed & floating', screen: 'InputScreen', preview: <PreviewInput />, fullWidth: true },
  { label: 'Spinner', description: 'Loading indicator', screen: 'SpinnerScreen', preview: <PreviewSpinner /> },
  { label: 'Switch', description: 'Toggle with animation', screen: 'SwitchScreen', preview: <PreviewSwitch /> },
  { label: 'Tab Bar', description: 'Tabs with sliding indicator', screen: 'TabBarScreen', preview: <PreviewTabBar />, fullWidth: true },
  { label: 'Text', description: 'Typography variants & colors', screen: 'TextScreen', preview: <PreviewText /> },
];
