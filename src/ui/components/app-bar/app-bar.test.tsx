import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';

import { VajraProvider, defaultVajraTheme } from '../../vajra-theme';
import { AppBar } from './app-bar';
import { TVajraIconComponent } from '../icon-button/icon-button-types';
import { View } from 'react-native';

// react-native-safe-area-context ships a jest mock as an untranspiled .tsx
// file that isn't covered by this repo's transformIgnorePatterns allowlist,
// so it can't be `require`d directly inside the test environment. Provide an
// equivalent inline mock instead — same shape, zero insets — scoped to this
// test file only.
jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
}));

const BackIcon: TVajraIconComponent = ({ color }) => (
  <View testID="back-icon" accessibilityLabel={`back-${color}`} />
);
const ActionIcon: TVajraIconComponent = ({ color }) => (
  <View testID="action-icon" accessibilityLabel={`action-${color}`} />
);

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

describe('AppBar', () => {
  it('renders the title', () => {
    render(
      <VajraProvider>
        <AppBar.Header>
          <AppBar.Title>Screen Title</AppBar.Title>
        </AppBar.Header>
      </VajraProvider>,
    );

    expect(screen.getByText('Screen Title')).toBeTruthy();
  });

  it('resolves the header background to the theme primary color by default', () => {
    const { UNSAFE_getAllByType } = render(
      <VajraProvider>
        <AppBar.Header>
          <AppBar.Title>Title</AppBar.Title>
        </AppBar.Header>
      </VajraProvider>,
    );

    const views = UNSAFE_getAllByType(View);
    const header = views.find(
      v => flattenStyle(v.props.style).backgroundColor === defaultVajraTheme.light.colors.primary,
    );

    expect(header).toBeTruthy();
  });

  it('calls onPress for the back action when pressed', () => {
    const onPress = jest.fn();

    render(
      <VajraProvider>
        <AppBar.Header>
          <AppBar.BackAction icon={BackIcon} onPress={onPress} />
          <AppBar.Title>Title</AppBar.Title>
        </AppBar.Header>
      </VajraProvider>,
    );

    fireEvent.press(screen.getByLabelText('Go back'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('calls onPress for an icon button action when pressed', () => {
    const onPress = jest.fn();

    render(
      <VajraProvider>
        <AppBar.Header>
          <AppBar.Title>Title</AppBar.Title>
          <AppBar.IconButton icon={ActionIcon} onPress={onPress} accessibilityLabel="Search" />
        </AppBar.Header>
      </VajraProvider>,
    );

    fireEvent.press(screen.getByLabelText('Search'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('tints the title and action icons with textInverse by default', () => {
    render(
      <VajraProvider>
        <AppBar.Header>
          <AppBar.IconButton icon={ActionIcon} accessibilityLabel="Search" />
        </AppBar.Header>
      </VajraProvider>,
    );

    expect(
      screen.getByLabelText(`action-${defaultVajraTheme.light.colors.textInverse}`),
    ).toBeTruthy();
  });
});
