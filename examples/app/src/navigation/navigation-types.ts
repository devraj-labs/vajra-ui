export type TAppStackParamList = {
  Home: undefined;
  ComponentList: undefined;
  ThemeSwitcher: undefined;

  // Component screens
  AppBarScreen: undefined;
  BadgeScreen: undefined;
  ButtonScreen: undefined;
  CardScreen: undefined;
  CheckboxScreen: undefined;
  IconButtonScreen: undefined;
  IconBoxScreen: undefined;
  IconSwitchScreen: undefined;
  InputScreen: undefined;
  TabBarScreen: undefined;
  RadioScreen: undefined;
  SpinnerScreen: undefined;
  SwitchScreen: undefined;
  TextScreen: undefined;

  // Examples
  ExamplesList: undefined;

  // Social Media App
  ExSocialHome: undefined;
  ExSocialFeed: undefined;
  ExSocialProfile: { username: string; avatarUrl: string };
  ExSocialPost: { postIndex: number };
  ExSocialStory: { name: string };

  // Finance App
  ExFinance: undefined;
  ExFinanceTransactions: undefined;

  // E-Commerce App
  ExECommerce: undefined;
  ExECommerceCart: undefined;

  // Onboarding App
  ExOnboarding: undefined;
  ExOnboardingSteps: undefined;

  // Settings App
  ExSettings: undefined;
  ExSettingsPreferences: undefined;

  // Chat App
  ExChat: undefined;
  ExChatConversation: undefined;

  // Job Board App
  ExJobBoard: undefined;
  ExJobDetail: undefined;

  // Music Player App
  ExMusicPlayer: undefined;
  ExMusicLibrary: undefined;

  // Food Delivery App
  ExFoodDelivery: undefined;
  ExFoodOrder: undefined;

  // News Reader App
  ExNewsReader: undefined;
  ExNewsArticle: undefined;
};
