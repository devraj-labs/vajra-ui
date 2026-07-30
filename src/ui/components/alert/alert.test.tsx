import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';

import { VajraProvider, defaultVajraTheme } from '../../vajra-theme';
import { Alert } from './alert';

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

describe('Alert', () => {
  it('renders the message', () => {
    render(
      <VajraProvider>
        <Alert message="Something happened" />
      </VajraProvider>,
    );

    expect(screen.getByText('Something happened')).toBeTruthy();
  });

  it('renders the title when provided', () => {
    render(
      <VajraProvider>
        <Alert title="Heads up" message="Something happened" />
      </VajraProvider>,
    );

    expect(screen.getByText('Heads up')).toBeTruthy();
  });

  it('does not render a dismiss button when onDismiss is not provided', () => {
    render(
      <VajraProvider>
        <Alert message="Something happened" testID="alert" />
      </VajraProvider>,
    );

    expect(screen.queryByTestId('alert-dismiss')).toBeNull();
  });

  it('calls onDismiss when the dismiss button is pressed', () => {
    const onDismiss = jest.fn();

    render(
      <VajraProvider>
        <Alert message="Something happened" onDismiss={onDismiss} testID="alert" />
      </VajraProvider>,
    );

    fireEvent.press(screen.getByTestId('alert-dismiss'));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('resolves the error variant to the theme errorSubtle background and error border', () => {
    render(
      <VajraProvider>
        <Alert message="Failed" variant="error" testID="alert" />
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('alert').props.style);

    expect(style.backgroundColor).toBe(defaultVajraTheme.light.colors.errorSubtle);
    expect(style.borderColor).toBe(defaultVajraTheme.light.colors.error);
  });

  it('defaults to the default variant colors', () => {
    render(
      <VajraProvider>
        <Alert message="Info" testID="alert" />
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('alert').props.style);

    expect(style.backgroundColor).toBe(defaultVajraTheme.light.colors.surfaceRaised);
  });
});
