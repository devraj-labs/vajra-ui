import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Box, ScreenWrapper } from 'vajra-ui';

import { useAppNavigation } from '../../../../../navigation/use-app-navigation';
import { CartSection } from './sections/cart-section';

export const CartScreen: React.FC = () => {
  const navigation = useAppNavigation();

  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} onPress={() => navigation.goBack()} />
        <AppBar.Title centered>Cart</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box p="s-4">
          <CartSection />
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
};
