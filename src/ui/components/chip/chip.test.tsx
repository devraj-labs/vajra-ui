import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { View } from 'react-native';

import { VajraProvider, defaultVajraTheme } from '../../vajra-theme';
import { Chip } from './chip';

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

describe('Chip', () => {
  it('renders the label', () => {
    render(
      <VajraProvider>
        <Chip label="React Native" />
      </VajraProvider>,
    );

    expect(screen.getByText('React Native')).toBeTruthy();
  });

  it('resolves to unselectedBg when not selected', () => {
    render(
      <VajraProvider>
        <Chip label="Filter" testID="chip" />
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('chip').props.style);

    expect(style.backgroundColor).toBe(defaultVajraTheme.light.colors.surfaceRaised);
  });

  it('resolves to selectedBg when isSelected', () => {
    render(
      <VajraProvider>
        <Chip label="Filter" isSelected testID="chip" />
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('chip').props.style);

    expect(style.backgroundColor).toBe(defaultVajraTheme.light.colors.primary);
  });

  it('calls onPress when the chip is pressed', () => {
    const onPress = jest.fn();

    render(
      <VajraProvider>
        <Chip label="Filter" onPress={onPress} testID="chip" />
      </VajraProvider>,
    );

    fireEvent.press(screen.getByTestId('chip'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('does not render a remove button when onRemove is not provided', () => {
    render(
      <VajraProvider>
        <Chip label="Filter" testID="chip" />
      </VajraProvider>,
    );

    expect(screen.queryByTestId('chip-remove')).toBeNull();
  });

  it('calls onRemove without also calling onPress when the remove button is pressed', () => {
    const onPress = jest.fn();
    const onRemove = jest.fn();

    render(
      <VajraProvider>
        <Chip label="Filter" onPress={onPress} onRemove={onRemove} testID="chip" />
      </VajraProvider>,
    );

    fireEvent.press(screen.getByTestId('chip-remove'));

    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onPress).not.toHaveBeenCalled();
  });

  it('renders a custom remove icon instead of the default ✕ glyph when provided', () => {
    const RemoveIcon = () => <View testID="custom-remove-icon" />;

    render(
      <VajraProvider>
        <Chip label="Filter" onRemove={() => {}} removeIcon={RemoveIcon} testID="chip" />
      </VajraProvider>,
    );

    expect(screen.getByTestId('custom-remove-icon')).toBeTruthy();
    expect(screen.queryByText('✕')).toBeNull();
  });

  it('does not call onPress or onRemove when disabled', () => {
    const onPress = jest.fn();
    const onRemove = jest.fn();

    render(
      <VajraProvider>
        <Chip label="Filter" onPress={onPress} onRemove={onRemove} isDisabled testID="chip" />
      </VajraProvider>,
    );

    fireEvent.press(screen.getByTestId('chip'));
    fireEvent.press(screen.getByTestId('chip-remove'));

    expect(onPress).not.toHaveBeenCalled();
    expect(onRemove).not.toHaveBeenCalled();
  });
});
