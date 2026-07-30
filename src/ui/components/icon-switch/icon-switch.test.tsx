import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Animated, View } from 'react-native';

import { VajraProvider, defaultVajraTheme } from '../../vajra-theme';
import { IconSwitch } from './icon-switch';
import { TVajraIconComponent } from '../icon-button/icon-button-types';

// IconSwitch drives its sliding selector via Animated.spring with
// useNativeDriver: true. The installed react-native / react-test-renderer
// combo in this test environment has a native-driver renderer version
// mismatch that throws when that native connection is attempted. Stubbing
// `start` keeps the animation a no-op during tests without touching any
// component or infra source.
jest.spyOn(Animated, 'spring').mockReturnValue({
  start: () => {},
  stop: () => {},
  reset: () => {},
} as unknown as Animated.CompositeAnimation);

const OffIcon: TVajraIconComponent = ({ color }) => (
  <View testID="off-icon" accessibilityLabel={`off-${color}`} />
);
const OnIcon: TVajraIconComponent = ({ color }) => (
  <View testID="on-icon" accessibilityLabel={`on-${color}`} />
);

describe('IconSwitch', () => {
  it('renders both off and on icons', () => {
    render(
      <VajraProvider>
        <IconSwitch value={false} onChange={() => {}} offIcon={OffIcon} onIcon={OnIcon} />
      </VajraProvider>,
    );

    expect(screen.getByTestId('off-icon')).toBeTruthy();
    expect(screen.getByTestId('on-icon')).toBeTruthy();
  });

  it('colors the active icon with activeIconColor when value is false (off active)', () => {
    render(
      <VajraProvider>
        <IconSwitch value={false} onChange={() => {}} offIcon={OffIcon} onIcon={OnIcon} />
      </VajraProvider>,
    );

    expect(screen.getByLabelText(`off-${defaultVajraTheme.light.colors.text}`)).toBeTruthy();
    expect(screen.getByLabelText(`on-${defaultVajraTheme.light.colors.textMuted}`)).toBeTruthy();
  });

  it('calls onChange with the toggled value when pressed', () => {
    const onChange = jest.fn();

    render(
      <VajraProvider>
        <IconSwitch value={false} onChange={onChange} offIcon={OffIcon} onIcon={OnIcon} />
      </VajraProvider>,
    );

    fireEvent.press(screen.getByTestId('off-icon').parent!.parent!.parent!);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('does not call onChange when isDisabled', () => {
    const onChange = jest.fn();

    render(
      <VajraProvider>
        <IconSwitch
          value={false}
          onChange={onChange}
          offIcon={OffIcon}
          onIcon={OnIcon}
          isDisabled
        />
      </VajraProvider>,
    );

    fireEvent.press(screen.getByTestId('off-icon').parent!.parent!.parent!);
    expect(onChange).not.toHaveBeenCalled();
  });
});
