import React, { Children, isValidElement, memo } from 'react';

import { AbsoluteCenter } from '../../core/absolute-center';
import { Box } from '../../core/box';
import { Row } from '../../core/row';
import { APP_BAR_SIDE_MIN_WIDTH } from './app-bar-constants';
import { AppBarBackAction } from './comps/app-bar-back-action';
import { AppBarHeader } from './comps/app-bar-header';
import { AppBarIconButton } from './comps/app-bar-icon-button';
import { AppBarTitle } from './comps/app-bar-title';
import { TAppBarHeaderProps, TSlotChild } from './app-bar-types';
import { getSlotType } from './app-bar-utils';
import { useVajraTheme } from '../../vajra-theme';

const AppBarHeaderSlotted = memo<TAppBarHeaderProps>(({ children, ...rest }) => {
  let leftSlot: TSlotChild = null;
  const rightSlots: React.ReactElement[] = [];
  let centerSlot: TSlotChild = null;
  let isCentered = false;

  Children.forEach(children, child => {
    if (!isValidElement(child)) return;

    const slot = getSlotType(child);

    if (slot === 'backAction') {
      leftSlot = child;
    } else if (slot === 'action') {
      rightSlots.push(child);
    } else if (slot === 'title') {
      centerSlot = child;
      isCentered = !!(child.props as { centered?: boolean }).centered;
    } else {
      centerSlot = child;
    }
  });

  const {
    layout: { screenPadding },
  } = useVajraTheme();

  return (
    <AppBarHeader {...rest}>
      {/* Left */}
      <Row align="center" style={{ minWidth: leftSlot ? APP_BAR_SIDE_MIN_WIDTH : screenPadding }}>
        {leftSlot}
      </Row>

      {/* Center — absolute when centered so it ignores side widths */}
      {isCentered ? (
        <AbsoluteCenter pointerEvents="none" px="s-10">
          {centerSlot}
        </AbsoluteCenter>
      ) : (
        <Box flex={1} justify="center" px="s-1" style={{ overflow: 'hidden' }}>
          {centerSlot}
        </Box>
      )}

      {/* Spacer to push right slot when title is absolute */}
      {isCentered && <Box flex={1} />}

      {/* Right */}
      <Row
        align="center"
        justify="flex-end"
        style={{
          minWidth: rightSlots.length ? APP_BAR_SIDE_MIN_WIDTH : screenPadding,
          paddingRight: rightSlots.length ? screenPadding - 8 : 0,
        }}
      >
        {rightSlots}
      </Row>
    </AppBarHeader>
  );
});

AppBarHeaderSlotted.displayName = 'AppBar.Header';

export const AppBar = {
  Header: AppBarHeaderSlotted,
  Title: AppBarTitle,
  BackAction: AppBarBackAction,
  IconButton: AppBarIconButton,
};
