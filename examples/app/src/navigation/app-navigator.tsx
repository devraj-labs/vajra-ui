import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { enableScreens } from 'react-native-screens';

import { VajraProvider } from 'vajra-ui';

import { theme } from '../theme';
import { AppBarScreen } from '../screens/app-bar-screen';
import { BadgeScreen } from '../screens/badge-screen';
import { ButtonScreen } from '../screens/button-screen';
import { CardScreen } from '../screens/card-screen';
import { CheckboxScreen } from '../screens/checkbox-screen';
import { ComponentListScreen } from '../screens/component-list-screen';
import { IconButtonScreen } from '../screens/icon-button-screen';
import { IconBoxScreen } from '../screens/icon-box-screen';
import { IconSwitchScreen } from '../screens/icon-switch-screen';
import { InputScreen } from '../screens/input-screen';
import { TabBarScreen } from '../screens/tab-bar-screen';
import { RadioScreen } from '../screens/radio-screen';
import { SpinnerScreen } from '../screens/spinner-screen';
import { SwitchScreen } from '../screens/switch-screen';
import { TextScreen } from '../screens/text-screen';
import { TAppStackParamList } from './navigation-types';
import { useAppNavigation } from './use-app-navigation';

enableScreens();

const Stack = createNativeStackNavigator<TAppStackParamList>();

function NavigatorWithProvider() {
  const navigation = useAppNavigation();

  return (
    <VajraProvider theme={theme} defaultBackBehaviour={() => navigation.goBack()}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ComponentList" component={ComponentListScreen} />
        <Stack.Screen name="AppBarScreen" component={AppBarScreen} />
        <Stack.Screen name="BadgeScreen" component={BadgeScreen} />
        <Stack.Screen name="ButtonScreen" component={ButtonScreen} />
        <Stack.Screen name="CardScreen" component={CardScreen} />
        <Stack.Screen name="CheckboxScreen" component={CheckboxScreen} />
        <Stack.Screen name="IconButtonScreen" component={IconButtonScreen} />
        <Stack.Screen name="IconBoxScreen" component={IconBoxScreen} />
        <Stack.Screen name="IconSwitchScreen" component={IconSwitchScreen} />
        <Stack.Screen name="InputScreen" component={InputScreen} />
        <Stack.Screen name="TabBarScreen" component={TabBarScreen} />
        <Stack.Screen name="RadioScreen" component={RadioScreen} />
        <Stack.Screen name="SpinnerScreen" component={SpinnerScreen} />
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen name="TextScreen" component={TextScreen} />
      </Stack.Navigator>
    </VajraProvider>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <NavigatorWithProvider />
    </NavigationContainer>
  );
}
