import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Animated } from 'react-native';

import { VajraProvider, defaultVajraTheme } from '../../vajra-theme';
import { Skeleton } from './skeleton';

// Skeleton pulses via Animated.loop/Animated.timing with useNativeDriver:
// true — not supported by this test environment's react-native /
// react-test-renderer combo. Stub timing so the loop starts without
// crashing, same pattern used across this repo's other Animated-driven
// components (icon-switch, modal, sheet, toast).
const stopMock = jest.fn();

jest.spyOn(Animated, 'timing').mockReturnValue({
  start: () => {},
  stop: stopMock,
  reset: () => {},
} as unknown as Animated.CompositeAnimation);

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

describe('Skeleton', () => {
  it('renders with default width/height', () => {
    render(
      <VajraProvider>
        <Skeleton testID="skeleton" />
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('skeleton').props.style);

    expect(style.width).toBe('100%');
    expect(style.height).toBe(16);
  });

  it('accepts custom width and height', () => {
    render(
      <VajraProvider>
        <Skeleton testID="skeleton" w={120} h={40} />
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('skeleton').props.style);

    expect(style.width).toBe(120);
    expect(style.height).toBe(40);
  });

  it('resolves bg to the theme color on the inner box', () => {
    const { UNSAFE_root } = render(
      <VajraProvider>
        <Skeleton testID="skeleton" bg="primary" />
      </VajraProvider>,
    );

    const boxes = UNSAFE_root.findAllByProps({});
    const coloredBox = boxes.find(
      (node: { props: { style?: unknown } }) =>
        flattenStyle(node.props.style).backgroundColor === defaultVajraTheme.light.colors.primary,
    );

    expect(coloredBox).toBeTruthy();
  });

  it('unmounting stops the pulse animation', () => {
    const { unmount } = render(
      <VajraProvider>
        <Skeleton testID="skeleton" />
      </VajraProvider>,
    );

    unmount();
    expect(stopMock).toHaveBeenCalled();
  });
});
