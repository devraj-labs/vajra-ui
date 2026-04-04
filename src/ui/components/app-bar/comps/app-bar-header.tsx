import React, { memo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Box } from '../../../core/box';
import { Row } from '../../../core/row';
import { AppBarContext } from '../app-bar-context';
import { APP_BAR_HEIGHT } from '../app-bar-constants';
import { TAppBarHeaderProps } from '../app-bar-types';

const AppBarHeaderComponent: React.FC<TAppBarHeaderProps> = ({
  children,
  style,
  contentStyle,
  height = APP_BAR_HEIGHT,
  useSafeArea = true,
  bg = 'primary',
  tint = 'textInverse',
}) => {
  const insets = useSafeAreaInsets();
  const topPadding = useSafeArea ? insets.top : 0;

  return (
    <AppBarContext.Provider value={{ tint }}>
      <Box bg={bg} style={{ paddingTop: topPadding, ...style }}>
        <Row align="center" style={{ height, ...contentStyle }}>
          {children}
        </Row>
      </Box>
    </AppBarContext.Provider>
  );
};

export const AppBarHeader = memo(AppBarHeaderComponent);
AppBarHeader.displayName = 'AppBar.Header';
