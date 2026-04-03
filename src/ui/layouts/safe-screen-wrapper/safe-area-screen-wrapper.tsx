import React, { memo } from 'react';
import { Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Spinner } from '../../components/spinner';
import { Col } from '../../core/col';
import { TSafeAreaScreenWrapperProps } from './safe-area-screen-wrapper-types';
import { useSafeAreaScreenWrapper } from './use-safe-area-screen-wrapper';

export const SafeAreaScreenWrapper = memo<TSafeAreaScreenWrapperProps>(
  ({ style, edges = ['top', 'bottom'], loader, children }) => {
    const { isLoading = false, loader: customLoader, size = 'lg', loaderText } = loader ?? {};
    const { opacity, visible } = useSafeAreaScreenWrapper(isLoading);

    return (
      <SafeAreaView edges={edges} style={[{ flex: 1 }, style]}>
        {children}
        {visible && (
          <Animated.View
            style={{
              ...{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
              opacity,
            }}
          >
            <Col flex={1} align="center" justify="center">
              {customLoader ?? <Spinner size={size} />}
              {loaderText}
            </Col>
          </Animated.View>
        )}
      </SafeAreaView>
    );
  },
);

SafeAreaScreenWrapper.displayName = 'SafeAreaScreenWrapper';
