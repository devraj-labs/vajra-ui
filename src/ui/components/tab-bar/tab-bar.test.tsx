import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';

import { VajraProvider, defaultVajraTheme } from '../../vajra-theme';
import { TabBar } from './tab-bar';

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

const tabs = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
];

describe('TabBar', () => {
  it('renders all tab labels', () => {
    render(
      <VajraProvider>
        <TabBar tabs={tabs} value="one" onChange={() => {}} />
      </VajraProvider>,
    );

    expect(screen.getByText('One')).toBeTruthy();
    expect(screen.getByText('Two')).toBeTruthy();
  });

  it('calls onChange with the pressed tab value', () => {
    const onChange = jest.fn();

    render(
      <VajraProvider>
        <TabBar tabs={tabs} value="one" onChange={onChange} />
      </VajraProvider>,
    );

    fireEvent.press(screen.getByText('Two'));
    expect(onChange).toHaveBeenCalledWith('two');
  });

  it('colors the active tab label with activeColor and inactive tabs with inactiveColor', () => {
    render(
      <VajraProvider>
        <TabBar tabs={tabs} value="one" onChange={() => {}} />
      </VajraProvider>,
    );

    const activeStyle = flattenStyle(screen.getByText('One').props.style);
    const inactiveStyle = flattenStyle(screen.getByText('Two').props.style);

    expect(activeStyle.color).toBe(defaultVajraTheme.light.colors.text);
    expect(inactiveStyle.color).toBe(defaultVajraTheme.light.colors.textMuted);
  });
});
