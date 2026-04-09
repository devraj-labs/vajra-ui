import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { enableScreens } from 'react-native-screens';

import { VajraProvider } from 'vajra-ui';

import { useAppTheme } from '../app-theme-context';
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
import { ThemeSwitcherScreen } from '../screens/theme-switcher-screen';
import { HomeScreen } from '../screens/home/home-screen';
import { ExamplesListScreen } from '../screens/examples/examples-list-screen';

// Social Media
import { SocialHomeScreen } from '../screens/examples/apps/social-media-app/home-screen';
import { FeedScreen } from '../screens/examples/apps/social-media-app/feed-screen';
import { SocialProfileScreen } from '../screens/examples/apps/social-media-app/profile-screen';
import { SocialPostScreen } from '../screens/examples/apps/social-media-app/post-screen';
import { StoryScreen } from '../screens/examples/apps/social-media-app/story-screen';

// Finance
import { DashboardScreen } from '../screens/examples/apps/finance-app/dashboard-screen';
import { TransactionsScreen } from '../screens/examples/apps/finance-app/transactions-screen';

// E-Commerce
import { EcommerceHomeScreen } from '../screens/examples/apps/ecommerce-app/home-screen';
import { CartScreen } from '../screens/examples/apps/ecommerce-app/cart-screen';

// Onboarding
import { OnboardingWelcomeScreen } from '../screens/examples/apps/onboarding-app/welcome-screen';
import { OnboardingStepsScreen } from '../screens/examples/apps/onboarding-app/steps-screen';

// Settings
import { SettingsProfileScreen } from '../screens/examples/apps/settings-app/profile-screen';
import { SettingsPreferencesScreen } from '../screens/examples/apps/settings-app/preferences-screen';

// Chat
import { ChatInboxScreen } from '../screens/examples/apps/chat-app/inbox-screen';
import { ChatConversationScreen } from '../screens/examples/apps/chat-app/conversation-screen';

// Job Board
import { JobListingsScreen } from '../screens/examples/apps/job-board-app/listings-screen';
import { JobDetailScreen } from '../screens/examples/apps/job-board-app/detail-screen';

// Music Player
import { MusicPlayerScreen } from '../screens/examples/apps/music-player-app/player-screen';
import { MusicLibraryScreen } from '../screens/examples/apps/music-player-app/library-screen';

// Food Delivery
import { FoodRestaurantsScreen } from '../screens/examples/apps/food-delivery-app/restaurants-screen';
import { FoodOrderScreen } from '../screens/examples/apps/food-delivery-app/order-screen';

// News Reader
import { NewsFeedScreen } from '../screens/examples/apps/news-reader-app/feed-screen';
import { NewsArticleScreen } from '../screens/examples/apps/news-reader-app/article-screen';

import { TAppStackParamList } from './navigation-types';
import { useAppNavigation } from './use-app-navigation';

enableScreens();

const Stack = createNativeStackNavigator<TAppStackParamList>();

function NavigatorWithProvider() {
  const navigation = useAppNavigation();
  const { theme } = useAppTheme();

  return (
    <VajraProvider theme={theme} defaultBackBehaviour={() => navigation.goBack()}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ComponentList" component={ComponentListScreen} />
        <Stack.Screen name="ThemeSwitcher" component={ThemeSwitcherScreen} />
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

        <Stack.Screen name="ExamplesList" component={ExamplesListScreen} />

        <Stack.Screen name="ExSocialHome" component={SocialHomeScreen} />
        <Stack.Screen name="ExSocialFeed" component={FeedScreen} />
        <Stack.Screen name="ExSocialProfile" component={SocialProfileScreen} />
        <Stack.Screen name="ExSocialPost" component={SocialPostScreen} />
        <Stack.Screen name="ExSocialStory" component={StoryScreen} />

        <Stack.Screen name="ExFinance" component={DashboardScreen} />
        <Stack.Screen name="ExFinanceTransactions" component={TransactionsScreen} />

        <Stack.Screen name="ExECommerce" component={EcommerceHomeScreen} />
        <Stack.Screen name="ExECommerceCart" component={CartScreen} />

        <Stack.Screen name="ExOnboarding" component={OnboardingWelcomeScreen} />
        <Stack.Screen name="ExOnboardingSteps" component={OnboardingStepsScreen} />

        <Stack.Screen name="ExSettings" component={SettingsProfileScreen} />
        <Stack.Screen name="ExSettingsPreferences" component={SettingsPreferencesScreen} />

        <Stack.Screen name="ExChat" component={ChatInboxScreen} />
        <Stack.Screen name="ExChatConversation" component={ChatConversationScreen} />

        <Stack.Screen name="ExJobBoard" component={JobListingsScreen} />
        <Stack.Screen name="ExJobDetail" component={JobDetailScreen} />

        <Stack.Screen name="ExMusicPlayer" component={MusicPlayerScreen} />
        <Stack.Screen name="ExMusicLibrary" component={MusicLibraryScreen} />

        <Stack.Screen name="ExFoodDelivery" component={FoodRestaurantsScreen} />
        <Stack.Screen name="ExFoodOrder" component={FoodOrderScreen} />

        <Stack.Screen name="ExNewsReader" component={NewsFeedScreen} />
        <Stack.Screen name="ExNewsArticle" component={NewsArticleScreen} />
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
