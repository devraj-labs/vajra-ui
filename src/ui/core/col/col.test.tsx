import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text as RNText } from 'react-native';

import { VajraProvider } from '../../vajra-theme';
import { Col } from './col';

const flattenStyle = (style: unknown): Record<string, unknown> => {
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle));
  }

  return (style as Record<string, unknown>) ?? {};
};

describe('Col', () => {
  it('renders its children', () => {
    render(
      <VajraProvider>
        <Col>
          <RNText>col content</RNText>
        </Col>
      </VajraProvider>,
    );

    expect(screen.getByText('col content')).toBeTruthy();
  });

  it('always applies flexDirection: column', () => {
    render(
      <VajraProvider>
        <Col testID="col">
          <RNText>content</RNText>
        </Col>
      </VajraProvider>,
    );

    const style = flattenStyle(screen.getByTestId('col').props.style);

    expect(style.flexDirection).toBe('column');
  });
});
