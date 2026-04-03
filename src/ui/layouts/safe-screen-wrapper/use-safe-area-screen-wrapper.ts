import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

export const useSafeAreaScreenWrapper = (isLoading: boolean) => {
  const opacity = useRef(new Animated.Value(isLoading ? 1 : 0)).current;
  const [visible, setVisible] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setVisible(true);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) setVisible(false);
      });
    }
  }, [isLoading, opacity]);

  return { opacity, visible };
};
