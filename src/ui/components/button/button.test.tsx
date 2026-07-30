import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';

import { VajraProvider, defaultVajraTheme } from '../../vajra-theme';
import { Button } from './button';

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

describe('Button', () => {
  it('renders its label', () => {
    render(
      <VajraProvider>
        <Button label="Get started" onPress={() => {}} />
      </VajraProvider>,
    );

    expect(screen.getByText('Get started')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();

    render(
      <VajraProvider>
        <Button testID="button" label="Press me" onPress={onPress} />
      </VajraProvider>,
    );

    fireEvent.press(screen.getByTestId('button'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when isDisabled', () => {
    const onPress = jest.fn();

    render(
      <VajraProvider>
        <Button testID="button" label="Press me" onPress={onPress} isDisabled />
      </VajraProvider>,
    );

    fireEvent.press(screen.getByTestId('button'));
    expect(onPress).not.toHaveBeenCalled();
  });

  it('resolves solid variant to primary background and inverse text color', () => {
    render(
      <VajraProvider>
        <Button testID="button" label="Solid" onPress={() => {}} variant="solid" />
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('button').props.style);

    expect(style.backgroundColor).toBe(defaultVajraTheme.light.colors.primary);

    const labelStyle = flattenStyle(screen.getByText('Solid').props.style);

    expect(labelStyle.color).toBe(defaultVajraTheme.light.colors.textInverse);
  });

  it('resolves outline variant to transparent background and primary border/text color', () => {
    render(
      <VajraProvider>
        <Button testID="button" label="Outline" onPress={() => {}} variant="outline" />
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('button').props.style);

    expect(style.backgroundColor).toBe(defaultVajraTheme.light.colors.transparent);
    expect(style.borderColor).toBe(defaultVajraTheme.light.colors.primary);
  });

  it('shows a loading spinner and swaps in the loading label when isLoading', () => {
    render(
      <VajraProvider>
        <Button label="Save" onPress={() => {}} isLoading loading={{ label: 'Saving...' }} />
      </VajraProvider>,
    );

    expect(screen.getByText('Saving...')).toBeTruthy();
    expect(screen.queryByText('Save')).toBeNull();
  });
});
