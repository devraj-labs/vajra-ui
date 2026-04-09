import { ArrowLeft, ShoppingCart } from 'lucide-react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Badge, Box, IconButton, ScreenWrapper } from 'vajra-ui';

import { useAppNavigation } from '../../../../../navigation/use-app-navigation';
import { ProductsSection } from './sections/products-section';

export const EcommerceHomeScreen: React.FC = () => {
  const navigation = useAppNavigation();

  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} onPress={() => navigation.goBack()} />
        <AppBar.Title centered>Shop</AppBar.Title>
        <IconButton icon={ShoppingCart} variant="ghost" size="sm" onPress={() => {}} />
      </AppBar.Header>
      <ScrollView>
        <Box p="s-4" gap="s-4">
          <ProductsSection />
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
};
