import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Text as RNText } from 'react-native';

import { VajraProvider, defaultVajraTheme } from '../../vajra-theme';
import { Tooltip } from './tooltip';

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

describe('Tooltip', () => {
  it('renders the trigger children', () => {
    render(
      <VajraProvider>
        <Tooltip label="More info">
          <RNText>Hover me</RNText>
        </Tooltip>
      </VajraProvider>,
    );

    expect(screen.getByText('Hover me')).toBeTruthy();
  });

  it('does not show the label initially', () => {
    render(
      <VajraProvider>
        <Tooltip label="More info">
          <RNText>Trigger</RNText>
        </Tooltip>
      </VajraProvider>,
    );

    expect(screen.queryByText('More info')).toBeNull();
  });

  it('shows the label after the trigger is pressed', () => {
    render(
      <VajraProvider>
        <Tooltip label="More info">
          <RNText>Trigger</RNText>
        </Tooltip>
      </VajraProvider>,
    );

    fireEvent.press(screen.getByText('Trigger'));
    expect(screen.getByText('More info')).toBeTruthy();
  });

  it('hides the label after pressing the trigger a second time', () => {
    render(
      <VajraProvider>
        <Tooltip label="More info">
          <RNText>Trigger</RNText>
        </Tooltip>
      </VajraProvider>,
    );

    fireEvent.press(screen.getByText('Trigger'));
    expect(screen.getByText('More info')).toBeTruthy();

    fireEvent.press(screen.getByText('Trigger'));
    expect(screen.queryByText('More info')).toBeNull();
  });

  it('resolves bg to the theme color on the tooltip bubble', () => {
    render(
      <VajraProvider>
        <Tooltip label="More info" bg="primary" testID="tooltip">
          <RNText>Trigger</RNText>
        </Tooltip>
      </VajraProvider>,
    );

    fireEvent.press(screen.getByText('Trigger'));

    const style = flattenStyle(screen.getByTestId('tooltip').props.style);

    expect(style.backgroundColor).toBe(defaultVajraTheme.light.colors.primary);
  });

  it('positions above the trigger by default (bottom: 100%)', () => {
    render(
      <VajraProvider>
        <Tooltip label="More info" testID="tooltip">
          <RNText>Trigger</RNText>
        </Tooltip>
      </VajraProvider>,
    );

    fireEvent.press(screen.getByText('Trigger'));

    const style = flattenStyle(screen.getByTestId('tooltip').props.style);

    expect(style.bottom).toBe('100%');
  });

  it('positions below the trigger when placement is bottom', () => {
    render(
      <VajraProvider>
        <Tooltip label="More info" placement="bottom" testID="tooltip">
          <RNText>Trigger</RNText>
        </Tooltip>
      </VajraProvider>,
    );

    fireEvent.press(screen.getByText('Trigger'));

    const style = flattenStyle(screen.getByTestId('tooltip').props.style);

    expect(style.top).toBe('100%');
  });
});
