import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import { AppBar, Box, ScreenWrapper } from 'vajra-ui';

import { useAppNavigation } from '../../../../../navigation/use-app-navigation';
import { RestaurantsSection } from './sections/restaurants-section';

export const FoodRestaurantsScreen: React.FC = () => {
  const navigation = useAppNavigation();

  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} onPress={() => navigation.goBack()} />
        <AppBar.Title centered>Food Delivery</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box p="s-4">
          <RestaurantsSection />
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
};
