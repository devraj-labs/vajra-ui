import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Animated, Text as RNText } from 'react-native';

import { VajraProvider } from '../../vajra-theme';
import { Tabs } from './tabs';

// Tabs.List renders TabBar, which animates its sliding indicator via
// Animated.spring — not supported by this test environment's react-native /
// react-test-renderer combo. Stub it, same pattern used across this repo's
// other Animated-driven components.
jest.spyOn(Animated, 'spring').mockReturnValue({
  start: () => {},
  stop: () => {},
  reset: () => {},
} as unknown as Animated.CompositeAnimation);

const tabs = [
  { value: 'account', label: 'Account' },
  { value: 'billing', label: 'Billing' },
];

const Controlled = () => {
  const [value, setValue] = useState('account');

  return (
    <Tabs.Root value={value} onChange={setValue}>
      <Tabs.List tabs={tabs} />
      <Tabs.Content value="account">
        <RNText>Account settings</RNText>
      </Tabs.Content>
      <Tabs.Content value="billing">
        <RNText>Billing details</RNText>
      </Tabs.Content>
    </Tabs.Root>
  );
};

describe('Tabs', () => {
  it('renders both tab labels', () => {
    render(
      <VajraProvider>
        <Controlled />
      </VajraProvider>,
    );

    expect(screen.getByText('Account')).toBeTruthy();
    expect(screen.getByText('Billing')).toBeTruthy();
  });

  it('renders only the content for the active tab', () => {
    render(
      <VajraProvider>
        <Controlled />
      </VajraProvider>,
    );

    expect(screen.getByText('Account settings')).toBeTruthy();
    expect(screen.queryByText('Billing details')).toBeNull();
  });

  it('switches content when a different tab is pressed', () => {
    render(
      <VajraProvider>
        <Controlled />
      </VajraProvider>,
    );

    fireEvent.press(screen.getByText('Billing'));

    expect(screen.queryByText('Account settings')).toBeNull();
    expect(screen.getByText('Billing details')).toBeTruthy();
  });

  it('throws when Tabs.List is used outside Tabs.Root', () => {
    const renderOutsideRoot = () =>
      render(
        <VajraProvider>
          <Tabs.List tabs={tabs} />
        </VajraProvider>,
      );

    expect(renderOutsideRoot).toThrow('Tabs.List and Tabs.Content must be used inside Tabs.Root');
  });
});
