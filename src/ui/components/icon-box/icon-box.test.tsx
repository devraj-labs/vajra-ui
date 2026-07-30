import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { View } from 'react-native';

import { VajraProvider, defaultVajraTheme } from '../../vajra-theme';
import { IconBox } from './icon-box';
import { TVajraIconComponent } from '../icon-button/icon-button-types';

const TestIcon: TVajraIconComponent = ({ size, color }) => (
  <View testID="test-icon" accessibilityLabel={`icon-${size}-${color}`} />
);

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

describe('IconBox', () => {
  it('renders the given icon', () => {
    render(
      <VajraProvider>
        <IconBox icon={TestIcon} />
      </VajraProvider>,
    );

    expect(screen.getByTestId('test-icon')).toBeTruthy();
  });

  it('defaults to primarySubtle bg and r-3 rounded, 44x44 size', () => {
    render(
      <VajraProvider>
        <IconBox testID="icon-box" icon={TestIcon} />
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('icon-box').props.style);

    expect(style.backgroundColor).toBe(defaultVajraTheme.light.colors.primarySubtle);
    expect(style.borderRadius).toBe(defaultVajraTheme.light.rounded['r-3']);
    expect(style.width).toBe(44);
    expect(style.height).toBe(44);
  });

  it('passes the resolved iconColor theme value to the icon', () => {
    render(
      <VajraProvider>
        <IconBox icon={TestIcon} iconColor="error" iconSize={20} />
      </VajraProvider>,
    );

    expect(screen.getByLabelText(`icon-20-${defaultVajraTheme.light.colors.error}`)).toBeTruthy();
  });
});
