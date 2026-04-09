import React, { memo } from 'react';
import { Animated } from 'react-native';

import { Spinner } from '../../components/spinner';
import { Box } from '../../core/box';
import { Col } from '../../core/col';
import { TScreenWrapperProps } from './screen-wrapper-types';
import { useScreenWrapper } from './use-screen-wrapper';

export const ScreenWrapper = memo<TScreenWrapperProps>(({ loader, children, ...boxProps }) => {
  const { isLoading = false, loader: customLoader = 'lg', loaderText } = loader ?? {};
  const { opacity, visible } = useScreenWrapper(isLoading);

  return (
    <Box flex={1} {...boxProps} bg="background">
      {children}
      {visible && (
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity,
          }}
        >
          <Col flex={1} align="center" justify="center">
            {customLoader ?? <Spinner />}
            {loaderText}
          </Col>
        </Animated.View>
      )}
    </Box>
  );
});

ScreenWrapper.displayName = 'ScreenWrapper';
