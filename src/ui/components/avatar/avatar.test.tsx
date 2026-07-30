import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { VajraProvider } from '../../vajra-theme';
import { Avatar } from './avatar';

describe('Avatar', () => {
  it('renders initials when no image src is provided', () => {
    render(
      <VajraProvider>
        <Avatar initials="John Doe" />
      </VajraProvider>,
    );

    expect(screen.getByText('JO')).toBeTruthy();
  });

  it('truncates and uppercases initials to two characters', () => {
    render(
      <VajraProvider>
        <Avatar initials="abcdef" />
      </VajraProvider>,
    );

    expect(screen.getByText('AB')).toBeTruthy();
  });

  it('does not render initials text while an image src is loading successfully', () => {
    render(
      <VajraProvider>
        <Avatar initials="JD" src="https://example.com/avatar.png" />
      </VajraProvider>,
    );

    expect(screen.queryByText('JD')).toBeNull();
  });
});
