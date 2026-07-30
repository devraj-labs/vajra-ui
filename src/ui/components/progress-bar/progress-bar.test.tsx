import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Animated } from 'react-native';

import { VajraProvider, defaultVajraTheme } from '../../vajra-theme';
import { ProgressBar } from './progress-bar';

// ProgressBar animates its fill width via Animated.timing —
// useNativeDriver: false, since percentage width can't be natively driven —
// but the same test-environment mismatch affects both native and
// JS-driven animations here. Stub it, same pattern used across this repo's
// other Animated-driven components.
jest.spyOn(Animated, 'timing').mockReturnValue({
  start: () => {},
  stop: () => {},
  reset: () => {},
} as unknown as Animated.CompositeAnimation);

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

describe('ProgressBar', () => {
  it('sets accessibilityValue.now from the value prop', () => {
    render(
      <VajraProvider>
        <ProgressBar value={0.5} testID="progress" />
      </VajraProvider>,
    );

    expect(screen.getByTestId('progress').props.accessibilityValue).toEqual({
      min: 0,
      max: 100,
      now: 50,
    });
  });

  it('clamps values above 1 to 100', () => {
    render(
      <VajraProvider>
        <ProgressBar value={1.5} testID="progress" />
      </VajraProvider>,
    );

    expect(screen.getByTestId('progress').props.accessibilityValue.now).toBe(100);
  });

  it('clamps negative values to 0', () => {
    render(
      <VajraProvider>
        <ProgressBar value={-0.2} testID="progress" />
      </VajraProvider>,
    );

    expect(screen.getByTestId('progress').props.accessibilityValue.now).toBe(0);
  });

  it('resolves fillColor to the theme color on the fill element', () => {
    render(
      <VajraProvider>
        <ProgressBar value={0.5} fillColor="success" testID="progress" />
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('progress-fill').props.style);

    expect(style.backgroundColor).toBe(defaultVajraTheme.light.colors.success);
  });

  it('resolves trackColor to the theme color on the track', () => {
    render(
      <VajraProvider>
        <ProgressBar value={0.5} trackColor="surfaceSunken" testID="progress" />
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('progress').props.style);

    expect(style.backgroundColor).toBe(defaultVajraTheme.light.colors.surfaceSunken);
  });
});
