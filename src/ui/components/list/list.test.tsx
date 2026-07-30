import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text as RNText } from 'react-native';

import { VajraProvider, defaultVajraTheme } from '../../vajra-theme';
import { List } from './list';

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

const items = ['Apple', 'Banana', 'Cherry'];

describe('List', () => {
  it('renders each item via renderItem', () => {
    render(
      <VajraProvider>
        <List
          data={items}
          keyExtractor={item => item}
          renderItem={({ item }) => <RNText>{item}</RNText>}
        />
      </VajraProvider>,
    );

    expect(screen.getByText('Apple')).toBeTruthy();
    expect(screen.getByText('Banana')).toBeTruthy();
    expect(screen.getByText('Cherry')).toBeTruthy();
  });

  it('renders the emptyState when data is empty', () => {
    render(
      <VajraProvider>
        <List
          data={[]}
          keyExtractor={item => item}
          renderItem={({ item }) => <RNText>{item}</RNText>}
          emptyState={<RNText>No items yet</RNText>}
        />
      </VajraProvider>,
    );

    expect(screen.getByText('No items yet')).toBeTruthy();
  });

  it('resolves p to the theme spacing value on the content container', () => {
    render(
      <VajraProvider>
        <List
          testID="list"
          data={items}
          keyExtractor={item => item}
          renderItem={({ item }) => <RNText>{item}</RNText>}
          p="s-4"
        />
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('list').props.contentContainerStyle);

    expect(style.padding).toBe(defaultVajraTheme.light.spacing['s-4']);
  });

  it('does not render an ItemSeparatorComponent when showSeparator is false', () => {
    const { UNSAFE_root } = render(
      <VajraProvider>
        <List
          testID="list"
          data={items}
          keyExtractor={item => item}
          renderItem={({ item }) => <RNText>{item}</RNText>}
          showSeparator={false}
        />
      </VajraProvider>,
    );

    const list = UNSAFE_root.findByProps({ testID: 'list' });

    expect(list.props.ItemSeparatorComponent).toBeUndefined();
  });
});
