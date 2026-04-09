import {
  ArrowLeft,
  ArrowRight,
  BarChart2,
  Bell,
  Briefcase,
  Coffee,
  MessageSquare,
  Music,
  Newspaper,
  ShoppingBag,
  Users,
} from 'lucide-react-native';
import React from 'react';
import { ScrollView } from 'react-native';

import {
  AppBar,
  Box,
  Card,
  IconBox,
  Pressable,
  Row,
  ScreenWrapper,
  Text,
} from 'vajra-ui';

import { useAppNavigation } from '../../navigation/use-app-navigation';
import { TAppStackParamList } from '../../navigation/navigation-types';
import { TVajraColors } from 'vajra-ui';

type TExampleApp = {
  title: string;
  description: string;
  icon: React.ComponentType<{ size: number; color: string }>;
  iconBg: TVajraColors;
  iconColor: TVajraColors;
  screen: keyof TAppStackParamList;
};

type TExampleGroup = {
  label: string;
  apps: TExampleApp[];
};

const EXAMPLE_GROUPS: TExampleGroup[] = [
  {
    label: 'Social & Communication',
    apps: [
      { title: 'Social Media', description: 'Stories, feed posts, likes, comments and user profiles.', icon: Users, iconBg: 'primarySubtle', iconColor: 'primary', screen: 'ExSocialHome' },
      { title: 'Chat', description: 'Conversations, bubbles, reactions and inbox.', icon: MessageSquare, iconBg: 'secondarySubtle', iconColor: 'secondary', screen: 'ExChat' },
    ],
  },
  {
    label: 'Commerce & Finance',
    apps: [
      { title: 'E-Commerce', description: 'Product listings, cart and checkout flow.', icon: ShoppingBag, iconBg: 'secondarySubtle', iconColor: 'secondary', screen: 'ExECommerce' },
      { title: 'Finance Dashboard', description: 'Balance cards, transactions, spending stats.', icon: BarChart2, iconBg: 'successSubtle', iconColor: 'success', screen: 'ExFinance' },
      { title: 'Food Delivery', description: 'Restaurant listings, order tracking and cart.', icon: Coffee, iconBg: 'errorSubtle', iconColor: 'error', screen: 'ExFoodDelivery' },
    ],
  },
  {
    label: 'Content & Media',
    apps: [
      { title: 'News Reader', description: 'Articles, categories, bookmarks and reading view.', icon: Newspaper, iconBg: 'infoSubtle', iconColor: 'info', screen: 'ExNewsReader' },
      { title: 'Music Player', description: 'Now playing, queue, controls and library.', icon: Music, iconBg: 'primarySubtle', iconColor: 'primary', screen: 'ExMusicPlayer' },
    ],
  },
  {
    label: 'Productivity',
    apps: [
      { title: 'Job Board', description: 'Job listings, filters, applications and detail views.', icon: Briefcase, iconBg: 'warningSubtle', iconColor: 'warning', screen: 'ExJobBoard' },
      { title: 'Settings', description: 'Profile, preferences, toggles and account actions.', icon: Briefcase, iconBg: 'primarySubtle', iconColor: 'primary', screen: 'ExSettings' },
      { title: 'Onboarding', description: 'Multi-step onboarding with illustrations and CTAs.', icon: Bell, iconBg: 'infoSubtle', iconColor: 'info', screen: 'ExOnboarding' },
    ],
  },
];

export const ExamplesListScreen: React.FC = () => {
  const navigation = useAppNavigation();

  return (
    <ScreenWrapper>
      <AppBar.Header>
        <AppBar.BackAction icon={ArrowLeft} />
        <AppBar.Title>Examples</AppBar.Title>
      </AppBar.Header>
      <ScrollView>
        <Box p="s-4" gap="s-6">
          <Box pb="s-2">
            <Text variant="body" color="textMuted">
              10 real app UIs built purely with Vajra UI. No StyleSheet, minimum tokens.
            </Text>
          </Box>

          {EXAMPLE_GROUPS.map(group => (
            <Box key={group.label} gap="s-3">
              <Text variant="subheading">{group.label}</Text>
              {group.apps.map(app => (
                <Pressable
                  key={app.title}
                  onPress={() => navigation.navigate(app.screen as any)}
                  activeOpacity={0.75}
                >
                  <Card p="s-4" rounded="r-3" borderWidth={1} borderColor="border">
                    <Row align="center" gap="s-3">
                      <IconBox icon={app.icon} bg={app.iconBg} iconColor={app.iconColor} />
                      <Box flex={1} gap="s-1">
                        <Text variant="labelMedium">{app.title}</Text>
                        <Text variant="caption" color="textMuted">{app.description}</Text>
                      </Box>
                      <ArrowRight size={16} color="gray" />
                    </Row>
                  </Card>
                </Pressable>
              ))}
            </Box>
          ))}
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
};
