import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { VajraProvider, defaultVajraTheme } from '../../vajra-theme';
import { Badge } from './badge';

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

describe('Badge', () => {
  it('renders its label', () => {
    render(
      <VajraProvider>
        <Badge label="New" />
      </VajraProvider>,
    );

    expect(screen.getByText('New')).toBeTruthy();
  });

  it('defaults to the primary background color', () => {
    render(
      <VajraProvider>
        <Badge testID="badge" label="New" />
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('badge').props.style);

    expect(style.backgroundColor).toBe(defaultVajraTheme.light.colors.primary);
  });

  it('resolves a custom bg token to the theme value', () => {
    render(
      <VajraProvider>
        <Badge testID="badge" label="New" bg="error" />
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('badge').props.style);

    expect(style.backgroundColor).toBe(defaultVajraTheme.light.colors.error);
  });
});
