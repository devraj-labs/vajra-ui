import React, { memo } from 'react';

import { Text } from '../../../core/text';
import { useAppBarContext } from '../app-bar-context';
import { TAppBarTitleProps } from '../app-bar-types';

const AppBarTitleComponent: React.FC<TAppBarTitleProps> = ({ children, centered = false }) => {
  const { tint } = useAppBarContext();

  return (
    <Text
      variant="subheading"
      numberOfLines={1}
      style={{ flexShrink: 1, textAlign: centered ? 'center' : 'left' }}
      color={tint}
    >
      {children}
    </Text>
  );
};

export const AppBarTitle = memo(AppBarTitleComponent);
AppBarTitle.displayName = 'AppBar.Title';
